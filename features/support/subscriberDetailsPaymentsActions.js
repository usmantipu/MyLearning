var LoginPage = require('../pageobjects/login.page');
var SubPaymentPage = require('../pageobjects/subscriberDetailsPayments.page');
const subscriberlistActions = require('../support/subscriberlistActions');
var Utils = require('./utils');
var expect = require('chai').expect; 
var should = require('chai').should();

class subscriberDetailsPaymentsActions{
	
	constructor(){
		this.amountToPost;
		this.paymentOptionSaveStatus = false;
		this.paymentReference;
		this.firstsubscriberName;
		this.secondsubscriberName;
		this.distributionPayment;
		this.secondamountToPost;
		this.lessThanAmount=0;
		this.echeckroutingNumber;this.echeckRandomValue;this.echeckDay;
		this.creditCardNum;this.creditcardType;this.creditCardExMonth;this.creditcardExYear;
		this.PostedPaymentSuccessfully = 'Added payment successfully';
		this.PaymentOptionUpdated ='Payment options updated successfully.';
		this.Esckeys = ['\uE00C'];
	}
	
    openVispApp(){
		SubPaymentPage.open();
	}
	
	loginToVisp(login, password) {
        Utils.login(login, password);
    }
	
	openSubscriberList(){
		SubPaymentPage.subscribersmenu.waitForExist();
		SubPaymentPage.subscribersmenu.waitForDisplayed();
		SubPaymentPage.subscribersmenu.click();
		browser.pause(5000);
		console.log('I open subscriber list');
	}

	clickOnAnySubscriber(){
		browser.pause(7000);
		SubPaymentPage.selectFirstSubscriber.waitForDisplayed();
		SubPaymentPage.selectFirstSubscriber.click();
	}
	
	getSpecificSubscriberListCount()
	{
		browser.pause(5000);
		let total = SubPaymentPage.totalcount.getText();
		//console.log('total records are :' + total);
		const myArray = total.split(' ');
		let position = myArray.indexOf("of") + 1;
		return myArray[position];
	}

	clickAllSubscriberList()
	{
		SubPaymentPage.btn_PastDue.waitForExist();
		SubPaymentPage.btn_PastDue.waitForDisplayed();
		SubPaymentPage.btn_PastDue.click();
		SubPaymentPage.btn_All.waitForDisplayed();
		SubPaymentPage.btn_All.waitForExist();
		SubPaymentPage.btn_All.click();
		browser.pause(7000);
	}

	clickOnPaymentsTab(){
		browser.pause(5000);
		SubPaymentPage.btnPayments.waitForDisplayed();
		SubPaymentPage.btnPayments.scrollIntoView();
		SubPaymentPage.btnPayments.waitForClickable();
		SubPaymentPage.btnPayments.click();
	}

	gotoPaymentsSettings(){
		SubPaymentPage.btnAppIcon.click();
		browser.pause(4000);
		SubPaymentPage.btnSettingsBilling.waitForDisplayed();
		SubPaymentPage.btnSettingsBilling.waitForClickable();
		SubPaymentPage.btnSettingsBilling.click();
		SubPaymentPage.btnPaymentFromMenu.waitForDisplayed();
		SubPaymentPage.btnPaymentFromMenu.waitForClickable();
		SubPaymentPage.btnPaymentFromMenu.click();
		browser.pause(2000);
	}

	clickPaymentOptionsSettings(){
		browser.pause(2000);
		SubPaymentPage.btnPaymentOptionsFromMenu.waitForDisplayed();
		SubPaymentPage.btnPaymentOptionsFromMenu.click();
		browser.pause(2000);
	}

	enableAcceptPaymentOption(paymentOption)
	{
		browser.pause(2000);
		var paymentitem ;
		paymentOption = paymentOption.replace(/['"]+/g, '');
		switch(paymentOption){
			case "Visa":
				paymentitem = SubPaymentPage.btnVisa;
				paymentitem.waitForDisplayed();
				if(SubPaymentPage.svgStatus(paymentitem).getAttribute('data-testid')=="CheckBoxOutlineBlankIcon"){
					paymentitem.click();
					this.paymentOptionSaveStatus = true;
				}
				break;
			case "MasterCard":
				paymentitem = SubPaymentPage.btnMasterCard;
				paymentitem.waitForDisplayed();
				if(SubPaymentPage.svgStatus(paymentitem).getAttribute('data-testid')=="CheckBoxOutlineBlankIcon"){
					paymentitem.click();
					this.paymentOptionSaveStatus = true;
				}
				break;
			case "AmEX":
				paymentitem = SubPaymentPage.btnAmEx;
				paymentitem.waitForDisplayed();
				if(SubPaymentPage.svgStatus(paymentitem).getAttribute('data-testid')=="CheckBoxOutlineBlankIcon"){
					paymentitem.click();
					this.paymentOptionSaveStatus = true;
				}
				break;
			case "Discover":
				paymentitem = SubPaymentPage.btnDiscover;
				paymentitem.waitForDisplayed();
				if(SubPaymentPage.svgStatus(paymentitem).getAttribute('data-testid')=="CheckBoxOutlineBlankIcon"){
					paymentitem.click();
					this.paymentOptionSaveStatus = true;
				}
				break;
			case "Token":
				paymentitem = SubPaymentPage.btnToken;
				paymentitem.waitForDisplayed();
				if(SubPaymentPage.svgStatus(paymentitem).getAttribute('data-testid')=="CheckBoxOutlineBlankIcon"){
					paymentitem.click();
					this.paymentOptionSaveStatus = true;
				}
				break;
			case "PayPal":
				paymentitem = SubPaymentPage.btnPaypal;
				console.log('going to verify paypal');
				paymentitem.waitForDisplayed();
				if(SubPaymentPage.svgStatus(paymentitem).getAttribute('data-testid')=="CheckBoxOutlineBlankIcon"){
					paymentitem.click();
					this.paymentOptionSaveStatus = true;
				}
				break;
			case "EFT":
				paymentitem = SubPaymentPage.btnEFT;
				paymentitem.waitForDisplayed();
				if(SubPaymentPage.svgStatus(paymentitem).getAttribute('data-testid')=="CheckBoxOutlineBlankIcon"){
					paymentitem.click();
					this.paymentOptionSaveStatus = true;
				}
				break;
			case "eCheck":
				paymentitem = SubPaymentPage.btneCheck;
				paymentitem.waitForDisplayed();
				if(SubPaymentPage.svgStatus(paymentitem).getAttribute('data-testid')=="CheckBoxOutlineBlankIcon"){
					paymentitem.click();
					browser.pause(2000);
					SubPaymentPage.btnDialogOk.click();
					this.paymentOptionSaveStatus = true;
				}
				break;
		}
		browser.pause(3000);
	}

	clickSaveAndClosePaymentSettings()
	{
		if(this.paymentOptionSaveStatus == true)
		{
			browser.pause(2000);
			SubPaymentPage.btnSaveTopMenu.waitForDisplayed();
			SubPaymentPage.btnSaveTopMenu.click();
			browser.pause(4000);
		}
		SubPaymentPage.btnCloseTopMenu.click();
		browser.pause(2000);
	}

	clickonPaymentOptions()
	{
		browser.pause(4000);
		SubPaymentPage.btnPaymentOptions.waitForDisplayed();
		SubPaymentPage.btnPaymentOptions.waitForClickable();
		SubPaymentPage.btnPaymentOptions.click();
		browser.pause(2000);
	}

	expandPaymentMehodsFromPaymentOptions()
	{
		browser.pause(4000);
		SubPaymentPage.expandPaymentMethod[1].waitForDisplayed();
		SubPaymentPage.expandPaymentMethod[1].click();
	}

	expandPaymentMehodsFromPostPayments()
	{
		browser.pause(4000);
		SubPaymentPage.expandPaymentMethodFromPostPayments.click();
	}

	providePaymentAmount(amount)
	{
		browser.pause(2000);
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		var paymentAmount = SubPaymentPage.paymentAmount;
		paymentAmount.waitForDisplayed();
		paymentAmount.click();
		paymentAmount.keys(clearKeys);
		browser.pause(1000);
		paymentAmount.setValue(Number(amount));
		this.amountToPost = amount;
		browser.keys(this.Esckeys);
	}

	providePaymentreference()
	{
		browser.pause(2000);
		this.paymentReference = (Math.floor(new Date() / 1000));
		SubPaymentPage.referenceNumber.click();
		SubPaymentPage.referenceNumber.setValue(this.paymentReference);
		browser.pause(2000);
	}

	goToPostPaymentCreditMemoTab()
	{
		browser.pause(4000);
		SubPaymentPage.btnPostPaymentCreditMemo.waitForDisplayed();
		SubPaymentPage.btnPostPaymentCreditMemo.waitForClickable();
		SubPaymentPage.btnPostPaymentCreditMemo.click();
		browser.pause(2000);
	}

	selectOptionFromPaymentOptionsTab(option)
	{
		browser.pause(1000);
		if(SubPaymentPage.paymentMehtodTypeValue.getAttribute('value')=='Credit Card')
		{
			SubPaymentPage.getListItem('Cash').click();
			browser.pause(1000);
			this.expandPaymentMehodsFromPaymentOptions();
			browser.pause(1000);
		}
		console.log('going to select payment method');
		SubPaymentPage.getListItem(option).click();
		browser.pause(2000);
	}

	selectOptionFromPostPaymentTab(option)
	{
		browser.pause(2000);
		SubPaymentPage.getPaymentOptionFromDD(option).click();
		browser.pause(2000);
		SubPaymentPage.paymentMemo.click();
	}

	providePaypalTransactionID()
	{
		browser.pause(2000);
		this.paymentReference = (Math.floor(new Date() / 1000));
		SubPaymentPage.transactionID.click();
		SubPaymentPage.transactionID.setValue(this.paymentReference);
		browser.pause(2000);
	}

	provideEcheckDetails()
	{
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		browser.pause(15000);
		this.paymentReference = (Math.floor(new Date() / 1000));
		SubPaymentPage.routingNumber.click();
		SubPaymentPage.routingNumber.keys(clearKeys);
		browser.pause(1000);
		SubPaymentPage.routingNumber.setValue('123123123');
		SubPaymentPage.echeckAcountNumber.click();
		SubPaymentPage.echeckAcountNumber.keys(clearKeys);
		browser.pause(1000);
		SubPaymentPage.echeckAcountNumber.setValue(this.paymentReference);
		if(SubPaymentPage.transactionID.isExisting())
		{
			SubPaymentPage.transactionID.click();
			SubPaymentPage.transactionID.setValue(this.paymentReference);
		}
		if(SubPaymentPage.processPaymentNow.getAttribute('value')=="true"){}
		else{
				try {
					SubPaymentPage.processPaymentNow.click();
				} catch (error) {
					console.log(error);
				}
			}

		browser.pause(2000);
	}

	provideCheckNo()
	{
		browser.pause(2000);
		this.paymentReference = (Math.floor(new Date() / 1000));
		SubPaymentPage.checkNo.click();
		SubPaymentPage.checkNo.setValue(this.paymentReference);
		browser.pause(2000);
	}

	provideCreditCardDetails()
	{
		browser.pause(2000);
		this.creditCardNum ='4433939401968332';
		this.creditCardExMonth='5';
		this.creditcardExYear='2028';
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		SubPaymentPage.creditCardNo.waitForClickable();
		SubPaymentPage.creditCardNo.click();
		SubPaymentPage.creditCardNo.keys(clearKeys);
		browser.pause(1000);
		
		var allcharacters = this.creditCardNum.split("");
		for(var i=0; i<allcharacters.length; i++){
			let key = allcharacters[i];
			browser.keys(key);
			}
		browser.pause(2000);
		SubPaymentPage.paymentAmount.click();
		browser.keys(this.Esckeys);
		SubPaymentPage.expandCreditExpireOn.click();
		browser.pause(1000);
		SubPaymentPage.getListItem(this.creditCardExMonth).click();
		browser.pause(1000);
		SubPaymentPage.paymentAmount.click();
		browser.keys(this.Esckeys);
		SubPaymentPage.expandCreditYearsOn.click();
		SubPaymentPage.getListItem(this.creditcardExYear).click();
		if(SubPaymentPage.processPaymentNow.getAttribute('value')==="true"){}
		else{SubPaymentPage.processPaymentNow.click();}
		if(SubPaymentPage.transactionID.isExisting())
		{
			this.paymentReference = (Math.floor(new Date() / 1000));
			SubPaymentPage.transactionID.click();
			SubPaymentPage.transactionID.setValue(this.paymentReference);
		}
		//this.amountToPost = '15';
		browser.pause(1000);
	}
	processCreditCardPaymentNow()
	{
		if(SubPaymentPage.processPaymentNow.getAttribute('value')==="true"){}
		else{SubPaymentPage.processPaymentNow.click();}
		if(SubPaymentPage.transactionID.isExisting())
		{
			this.paymentReference = (Math.floor(new Date() / 1000));
			SubPaymentPage.transactionID.click();
			SubPaymentPage.transactionID.setValue(this.paymentReference);
		}
	}

	postPayment()
	{
		browser.pause(3000);
		SubPaymentPage.btnPostPaymentSubmit.waitForDisplayed();
		SubPaymentPage.btnPostPaymentSubmit.click();
	}

	suspendASubscriberIfAlreadyNot()
	{
		browser.pause(2000);
		//var count = subscriberlistActions.getSpecificSubscriberListCount();
		if(SubPaymentPage.noDataAvailable.isExisting())
		{
			subscriberlistActions.clickAllSubscriberList();
			browser.pause(5000);
			subscriberlistActions.clickSortingButton("Paid up");
			browser.pause(5000);
			subscriberlistActions.clickOnAnySubscriber();
			browser.pause(3000);
			if(SubPaymentPage.getPackageStatus.getAttribute('style')!=="fill: rgb(238, 70, 46);")
			{
				SubPaymentPage.expandPackageMenu.click();
				browser.pause(1000);
				SubPaymentPage.suspendPackage.click();
			}
			if (SubPaymentPage.btnsuspendSpecific.isExisting()){
				SubPaymentPage.btnsuspendSpecific.click();
				browser.pause(3000);
				this.closeRightDrawer();
			}else{
				this.closeRightDrawer();
			}
		}
	}

	openSuspendedList()
	{
		subscriberlistActions.clickAllSubscriberList();
    	subscriberlistActions.clickSortingButton("Suspended");
	}

	openDesiredStatusList(desiredStatus)
	{
		browser.pause(2000);
		subscriberlistActions.clickSortingButton(desiredStatus);
		browser.pause(5000);//manual wait due to poor app performance
	}

	selectSuspendedSubscriberList(listName)
	{
		browser.pause(2000);
		subscriberlistActions.clickAllSubscriberList();
		browser.pause(5000);
    	subscriberlistActions.clickSortingButton(listName);
		browser.pause(3000);
	}

	openPaidUpList()
	{
		browser.pause(5000);
		subscriberlistActions.clickAllSubscriberList();
		browser.pause(5000);
		subscriberlistActions.clickSortingButton("Paid up");
		browser.pause(5000);
	}
	openAllSubscribersList()
	{
		browser.pause(5000);
		subscriberlistActions.clickAllSubscriberList();
		browser.pause(5000);
		subscriberlistActions.clickSortingButton("All");
		browser.pause(5000);
	}
	
	openAnySubscriber()
	{
		subscriberlistActions.clickOnAnySubscriber();
		browser.pause(3000);
	}

	openSecondSubscriber()
	{
		console.log('going to open second subscriber');
		subscriberlistActions.clickOnSecondSubscriber();
		browser.pause(3000);
	}

	openDueSecondSubscriber()
	{
		console.log('going to open Due second subscriber');
		subscriberlistActions.clickOnDueSecondSubscriber();
		browser.pause(3000);
	}

	openSpecificSubscriber(userName)
	{	
		subscriberlistActions.openSpecificSubscruberDetails(userName); //e.g. nkliemchenc
		browser.pause(1000);
		SubPaymentPage.getSubscriberName.waitForDisplayed();
		console.log('>>>>>>>>Subscriber dock opened for: ' + SubPaymentPage.getSubscriberName.getText());
	}

	closeRightDrawer()
	{
		browser.pause(5000);
		SubPaymentPage.closeRightDrawer.waitForClickable({ timeout: 3000 });
		SubPaymentPage.closeRightDrawer.click();
		console.log('>>>>>>>>>>>>Closed subscriber tab');
		browser.pause(2000);
	}

	openSubscriberFromPaidUPListIfItsNotPresentInDue(count)
	{
		browser.pause(2000);
		let total = SubPaymentPage.totalcount.getText();
		const myArray = total.split(' ');
		let position = myArray.indexOf("of") + 1;
		var totalrecords = myArray[position];
		console.log('total found items are '+totalrecords);
		if (Number(totalrecords)<=Number(count)){
			this.selectSuspendedSubscriberList("Paid up");
		}
	}

	addDataToDistributionTableIfNotPresent()
 	{
		browser.pause(3000);
			if(SubPaymentPage.noDataInDistribution.isExisting()===true)
 			{
 				SubPaymentPage.btnPackageAndInvoice.click();
 				SubPaymentPage.btnAddPackage.click();
				browser.pause(1000);
 				SubPaymentPage.hostingPackage.click();
 				//browser.pause(1000);
 				SubPaymentPage.btnAddToInvoice.waitForDisplayed();
 				SubPaymentPage.btnAddToInvoice.waitForExist();
 				SubPaymentPage.btnAddToInvoice.click();
				//browser.pause(1000);
				SubPaymentPage.btnOpenANewInvoice.waitForDisplayed();
 				SubPaymentPage.btnOpenANewInvoice.click();
				//browser.pause(1000);
				SubPaymentPage.btnSaveAndConfigure.waitForDisplayed();
 				SubPaymentPage.btnSaveAndConfigure.click();
 				//browser.pause(3000);
				SubPaymentPage.closePackageRightDrawer.waitForDisplayed();
				SubPaymentPage.closePackageRightDrawer.waitForClickable();
 				SubPaymentPage.closePackageRightDrawer.click();
		    	//browser.pause(3000);
 		}
 	}
	extractTotalPaymentFromDT()
 	{
 		var amount;
 		var allrows = SubPaymentPage.getAllRowsData;
		allrows[2].click();
		browser.pause(1000);
		var key =['\uE014'];
		browser.keys(key);
		browser.keys(key);
		browser.pause(1000);
		allrows = SubPaymentPage.getAllRowsData;
 		let totallength = allrows.length;
 		amount = allrows[totallength-1].getText();
		 console.log('extracted amount before format '+amount);
 		amount = amount.substring(1);
		console.log('extracted amount from DT'+amount);
 		return amount;
 	}

	getTotalPaymentAmount()
	{
		browser.pause(2000);
		//var allrows = SubPaymentPage.getAllRowsData;
		//let totallength = allrows.length;
		//this.paymentReference = allrows[totallength-1].getText();
		//this.paymentReference = this.paymentReference.substring(1);
		this.paymentReference = this.extractTotalPaymentFromDT();
		//this.firstsubscriberName = SubPaymentPage.getSubscriberName.getText();
		//this.amountToPost = SubPaymentPage.paymentAmount.getAttribute('value');
		console.log('total payment is'+this.paymentReference);
	}

	keepOpenedSubscriberDetails()
	{
		browser.pause(2000);
		this.secondsubscriberName = SubPaymentPage.getSubscriberName.getText();
		this.secondamountToPost = SubPaymentPage.paymentAmount.getAttribute('value');
		this.distributionPayment = this.paymentReference;
	}

	getAmountFromDTForLessAmount()
	{
		browser.pause(7000);
		this.firstsubscriberName = SubPaymentPage.getSubscriberName.getText();
		this.amountToPost = SubPaymentPage.paymentAmount.getAttribute('value');
		SubPaymentPage.getDateColumn.click();
		browser.pause(2000);
		this.paymentReference = this.extractTotalPaymentFromDT();
	}

	addPaymentLessThanTotalPayment()
	{
		this.paymentReference = SubPaymentPage.getAmountPaidForSelectedInvoice.getText();
		var totalAmount = this.paymentReference.replace(/[$]/g, '');
		console.log('total payment amount is'+ totalAmount);
		var lessvalue = Math.floor(Math.random() * (totalAmount - 0 + 1)) + 0;
		if(lessvalue < totalAmount)
		{
			this.lessThanAmount = lessvalue;
			this.providePaymentAmount(lessvalue);
		}
		browser.pause(3000);
	}

	eCheckDetailsFromPaymentOptions(echeckdata)
	{
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		var dataToPass = echeckdata.raw();
		this.echeckroutingNumber=dataToPass[0][0];
		this.echeckDay = dataToPass[0][1];
		browser.pause(1000);
		this.paymentReference = (Math.floor(new Date() / 1000));
		SubPaymentPage.routingNumberFromPaymentOptions.waitForDisplayed();
		SubPaymentPage.routingNumberFromPaymentOptions.waitForClickable();
		SubPaymentPage.routingNumberFromPaymentOptions.click();
		SubPaymentPage.routingNumberFromPaymentOptions.keys(clearKeys);
		browser.pause(1000);
		SubPaymentPage.routingNumberFromPaymentOptions.setValue(this.echeckroutingNumber);
		SubPaymentPage.accountNumberFromPaymentOptions.click();
		SubPaymentPage.accountNumberFromPaymentOptions.keys(clearKeys);
		browser.pause(1000);
		SubPaymentPage.accountNumberFromPaymentOptions.setValue(this.paymentReference);
		browser.pause(1000);
		if(SubPaymentPage.transactionID.isExisting())
		{
			if(SubPaymentPage.transactionID.isClickable()){
				this.paymentReference = (Math.floor(new Date() / 1000));
				SubPaymentPage.transactionID.click();
				SubPaymentPage.transactionID.setValue(this.paymentReference);
			}
			
		}
		if(SubPaymentPage.svgStatus(SubPaymentPage.autoPayOnTheLable).getAttribute('data-testid')=="CheckBoxOutlineBlankIcon")
		{
			SubPaymentPage.autoPayOnThe.click();
			browser.pause(2000);
		}
		SubPaymentPage.btnDayOfTheMonth.click();
		browser.pause(2000);
		SubPaymentPage.expandCustomerAutoPayDay.click();
		browser.pause(2000);
		SubPaymentPage.getListItem(this.echeckDay).click();
	    browser.pause(2000);
		SubPaymentPage.btnDialogOk.click();
	}

	creditCardDetailsFromPaymentOptions(creditcardInfo)
	{
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		var creditData = creditcardInfo.raw();
		this.creditcardType =creditData[0][0];
		this.creditCardNum = creditData[0][1];
	    this.creditCardExMonth = creditData[0][2];
		this.creditcardExYear = creditData[0][3];
		browser.pause(3000);
		SubPaymentPage.expandCreditCardType.click();
		browser.pause(1000);
		console.log('passed value is'+this.creditcardType)
		SubPaymentPage.getListItem(this.creditcardType).click();
		browser.pause(1000);
		var cardValue =this.creditCardNum;
		SubPaymentPage.creditCardNumberFromPaymentOptions.click();
		SubPaymentPage.creditCardNumberFromPaymentOptions.keys(clearKeys);
		browser.pause(1000);
		var allcharacters = cardValue.split("");
		for(var i=0; i<allcharacters.length; i++){
			let key = allcharacters[i];
			browser.keys(key);
			}
		browser.pause(2000);
		SubPaymentPage.expandcreditCardExpireMonthFromPaymentOptions.click();
		browser.pause(1000);
		SubPaymentPage.getListItem(this.creditCardExMonth).click();
		browser.pause(1000);
		SubPaymentPage.expandcreditCardExpireYearFromPaymentOptions.click();
		SubPaymentPage.getListItem(this.creditcardExYear).click();
		browser.pause(1000);
		if(SubPaymentPage.svgStatus(SubPaymentPage.autoRetryLable).getAttribute('data-testid')=="CheckBoxOutlineBlankIcon")
		{
			browser.pause(1000);
			SubPaymentPage.flagAutoRetry.click();
			SubPaymentPage.expandautoRetry1stOption.click();
			browser.pause(1000);
			SubPaymentPage.getListItem('2').click();
			SubPaymentPage.expandautoRetry2ndOption.click();
			browser.pause(1000);
			SubPaymentPage.getListItem('4').click();
		}
	}
	creditCardDetailsFromPaymentGateway(creditcardInfo)
	{
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		var creditData = creditcardInfo.raw();
		//this.creditcardType =creditData[0][0];
		this.creditCardNum = creditData[0][0];
	    this.creditCardExMonth = creditData[0][1];
		this.creditcardExYear = creditData[0][2];
		browser.pause(2000);
		// SubPaymentPage.expandCreditCardType.click();
		// browser.pause(1000);
		// console.log('passed value is'+this.creditcardType)
		// SubPaymentPage.getListItem(this.creditcardType).click();
		// browser.pause(1000);
		var cardValue =this.creditCardNum;
		SubPaymentPage.creditCardNumberFromPaymentOptions.click();
		SubPaymentPage.creditCardNumberFromPaymentOptions.keys(clearKeys);
		browser.pause(1000);
		var allcharacters = cardValue.split("");
		for(var i=0; i<allcharacters.length; i++){
			let key = allcharacters[i];
			browser.keys(key);
			}
		browser.pause(1000);
		SubPaymentPage.expandcreditCardExpireMonthFromPaymentOptions.click();
		browser.pause(1000);
		SubPaymentPage.getListItem(this.creditCardExMonth).waitForDisplayed();
		SubPaymentPage.getListItem(this.creditCardExMonth).click();
		browser.pause(1000);
		SubPaymentPage.expandcreditCardExpireYearFromPaymentOptions.click();
		browser.pause(2000);
		SubPaymentPage.getListItem(this.creditcardExYear).waitForDisplayed();
		SubPaymentPage.getListItem(this.creditcardExYear).click();
		browser.pause(1000);
		if(SubPaymentPage.creditBillingZip.isExisting())
		{
			SubPaymentPage.creditBillingZip.click();
			SubPaymentPage.creditBillingZip.keys(clearKeys);
			SubPaymentPage.creditBillingZip.setValue(creditData[0][3]);
		}
		browser.pause(5000);
	}
	//commented cause failure of test in betaCleversoftScenarios.feature 'As a User, I can save a payment information with Credit Card payment method'
	// creditCardDetailsFromPaymentOptions(ccType, ccNum, ccExMonth, ccExYear)//function overloading for bulk payments feature
	// {
	// 	var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];

	// 	this.creditcardType =ccType;
	// 	this.creditCardNum = ccNum;
	//     this.creditCardExMonth = ccExMonth;
	// 	this.creditcardExYear = ccExYear;
	// 	console.log('>>>>>>>> cc# is: ' + ccNum);
	// 	console.log('>>>>>>>> cc expiry month is: ' + ccExMonth);
	// 	console.log('>>>>>>>> cc expiry year is: ' + ccExYear);
	// 	browser.pause(3000);
	// 	SubPaymentPage.expandCreditCardType.click();
	// 	browser.pause(1000);
	// 	SubPaymentPage.getListItem(this.creditcardType).click();
	// 	browser.pause(1000);
	// 	var cardValue =this.creditCardNum;
	// 	SubPaymentPage.creditCardNumberFromPaymentOptions.click();
	// 	SubPaymentPage.creditCardNumberFromPaymentOptions.keys(clearKeys);
	// 	browser.pause(1000);
	// 	var allcharacters = cardValue.split("");
	// 	for(var i=0; i<allcharacters.length; i++){
	// 		let key = allcharacters[i];
	// 		browser.keys(key);
	// 		}
	// 	browser.pause(2000);
	// 	SubPaymentPage.expandcreditCardExpireMonthFromPaymentOptions.click();
	// 	browser.pause(1000);
	// 	SubPaymentPage.getListItem(this.creditCardExMonth).click();
	// 	browser.pause(1000);
	// 	SubPaymentPage.expandcreditCardExpireYearFromPaymentOptions.click();
	// 	SubPaymentPage.getListItem(this.creditcardExYear).click();
	// 	browser.pause(1000);
	// 	if(SubPaymentPage.svgStatus(SubPaymentPage.autoRetryLable).getAttribute('data-testid')=="CheckBoxOutlineBlankIcon")
	// 	{
	// 		browser.pause(1000);
	// 		SubPaymentPage.flagAutoRetry.click();
	// 		SubPaymentPage.expandautoRetry1stOption.click();
	// 		browser.pause(1000);
	// 		SubPaymentPage.getListItem('2').click();
	// 		SubPaymentPage.expandautoRetry2ndOption.click();
	// 		browser.pause(1000);
	// 		SubPaymentPage.getListItem('4').click();
	// 	}
	// }

	savePaymentOptionDetails()
	{
		//browser.pause(2000);
		SubPaymentPage.btnSavePaymentOptions.waitForDisplayed();
		SubPaymentPage.btnSavePaymentOptions.waitForClickable();
		SubPaymentPage.btnSavePaymentOptions.click();
		browser.pause(4000);
		SubPaymentPage.confirmationMsg.waitForDisplayed();
	}

	provideEFTPaymentDetails()
	{
		browser.pause(2000);
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		var valueToInsert = (Math.floor(new Date() / 1000));
		var transitId = Math.floor(Math.random() * 99000) + 10000;
		SubPaymentPage.eftTranist.click();
		SubPaymentPage.eftTranist.keys(clearKeys);
		SubPaymentPage.eftTranist.setValue(transitId);
		var insitID = Math.floor(Math.random() * 1000) + 1;
		SubPaymentPage.eftInstitue.click();
		SubPaymentPage.eftInstitue.keys(clearKeys);
		SubPaymentPage.eftInstitue.setValue(insitID);
		SubPaymentPage.eftAccountNumber.click();
		SubPaymentPage.eftAccountNumber.keys(clearKeys);
		SubPaymentPage.eftAccountNumber.setValue(valueToInsert);
		SubPaymentPage.transactionID.click();
		SubPaymentPage.transactionID.keys(clearKeys);
		SubPaymentPage.transactionID.setValue(valueToInsert);
	}

	selectCreditMemo()
	{
		browser.pause(2000);
		SubPaymentPage.radiocreditMemo.click();
		browser.pause(2000);
	}

	providedMemoDescription()
	{
		browser.pause(2000);
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		SubPaymentPage.paymentMemo.click();
		SubPaymentPage.paymentMemo.keys(clearKeys);
		browser.pause(1000);
		SubPaymentPage.paymentMemo.setValue('Reversal');
	}

	clickCreditPayment()
	{
		browser.pause(2000);
		//SubPaymentPage.btnCreditPayment.click();
		SubPaymentPage.btnSaveNewCredit.click();
	}

	verifyPayementSectionDisplayed()
	{
		browser.pause(4000);
		SubPaymentPage.btnPostPaymentCreditMemo.waitForDisplayed();
		expect(SubPaymentPage.btnPostPaymentCreditMemo.isExisting()).to.be.true;
		expect(SubPaymentPage.btnPaymentOptions.isExisting()).to.be.true;
		//expect(SubPaymentPage.radioReceivePayment.isExisting()).to.be.true;
		//expect(SubPaymentPage.radiocreditMemo.isExisting()).to.be.true;
	}

	verifyPostPaymentAndCreditMemoDisplayed()
	{
		browser.pause(2000);
		expect(SubPaymentPage.radioReceivePayment.isExisting()).to.be.true;
		expect(SubPaymentPage.radiocreditMemo.isExisting()).to.be.true;

		SubPaymentPage.radioReceivePayment.click();
		browser.pause(1000);
		expect(SubPaymentPage.btnPostPayment.isDisplayed()).to.be.true;
		SubPaymentPage.radiocreditMemo.click();
		browser.pause(1000);
		expect(SubPaymentPage.btnCreditPayment.isDisplayed()).to.be.true;

	}

	verifyPaymentOptions()
	{
		browser.pause(3000);
		expect(SubPaymentPage.getPaymentOptionFromDD('Check').isExisting()).to.be.true;
		expect(SubPaymentPage.getPaymentOptionFromDD('Cash').isExisting()).to.be.true;
		expect(SubPaymentPage.getPaymentOptionFromDD('Money Order').isExisting()).to.be.true;
		expect(SubPaymentPage.getPaymentOptionFromDD('Credit Card').isExisting()).to.be.true;
		expect(SubPaymentPage.getPaymentOptionFromDD('eCheck').isExisting()).to.be.true;
		//expect(SubPaymentPage.getPaymentOptionFromDD('EFT').isExisting()).to.be.true;
		expect(SubPaymentPage.getPaymentOptionFromDD('Other').isExisting()).to.be.true;
		expect(SubPaymentPage.getPaymentOptionFromDD('PayPal').isExisting()).to.be.true;
	}

	verifyEFTPaymentOptions()
	{
		browser.pause(2000);
		expect(SubPaymentPage.getPaymentOptionFromDD('EFT').isExisting()).to.be.true;
	}

	verifyPostPaymentDisabled()
	{
		browser.pause(5000);
		expect(SubPaymentPage.amountLable.getAttribute('class').includes('Mui-error')).to.be.true;
		console.log('amount error verfied');
		//console.log(SubPaymentPage.btnPostPaymentSubmit.length);
		expect(SubPaymentPage.btnPostPaymentSubmit.getAttribute('class').includes('Mui-disabled')).to.be.true;
		console.log('post payment disabled verified');
	}

	verifyPaymentPostedSuccessfully()
	{
		SubPaymentPage.isAlertExist(this.PostedPaymentSuccessfully).waitForDisplayed();
		expect(SubPaymentPage.isAlertExist(this.PostedPaymentSuccessfully).isExisting()).to.be.true;
		//browser.pause(3000);
		SubPaymentPage.btnTransactions.waitForClickable();
		SubPaymentPage.btnTransactions.click();
		browser.pause(2000);
		var alltransactions = SubPaymentPage.getAllTransactions;
		alltransactions[0].click();
		browser.pause(3000);
		SubPaymentPage.paymentAmountFromDialog.waitForDisplayed();
		expect(SubPaymentPage.paymentAmountFromDialog.getAttribute('value')).to.eql(this.amountToPost+'.00');
	}

	verifyOtherPaymentSuccessfully()
	{
		browser.pause(3000);
		SubPaymentPage.btnBillingOptions.click();
		browser.pause(1000);
		SubPaymentPage.btnTransactions.click();
		browser.pause(2000);
		var alltransactions = SubPaymentPage.getAllTransactions;
		alltransactions[0].click();
		browser.pause(3000);
		console.log('paramterized payment is '+this.amountToPost+'.00');
		console.log('payment is from '+SubPaymentPage.AllPaymentAmount[1].getAttribute('value'));
		expect(SubPaymentPage.AllPaymentAmount[1].getAttribute('value')).to.eql(this.amountToPost+'.00');
	}

	verifyCreditCardPaymentPostedSuccessfully()
	{
		 var msg;
		 SubPaymentPage.confirmationMsg.waitForDisplayed();
		 msg = SubPaymentPage.confirmationMsg.getText();
		 expect(msg).to.eql(this.PostedPaymentSuccessfully);
		// var loggedDate =SubPaymentPage.PaymentDate.getText();
		//browser.pause(3000);
		SubPaymentPage.btnTransactions.waitForDisplayed();
		SubPaymentPage.btnTransactions.waitForClickable();
		SubPaymentPage.btnTransactions.click();
		browser.pause(5000);
		var alltransactions = SubPaymentPage.getAllTransactions;
		var paymentDescription = alltransactions[1].getText();
		var loggedDate = alltransactions[0].getText();
		loggedDate= loggedDate.replace(",", "");
		console.log('transac date is'+loggedDate);
		alltransactions[0].click();
		//browser.pause(2000);
		//SubPaymentPage.creditCardNumberFromDialog.waitForDisplayed();
		expect(SubPaymentPage.creditCardNumberFromDialog.getAttribute('value').includes(this.creditCardNum.substring(this.creditCardNum.length - 4))).to.be.true;
		expect(SubPaymentPage.creditCardExpireMonthFromDialog.getAttribute('value').includes(this.creditCardExMonth)).to.be.true;
		expect(SubPaymentPage.creditCardExpireYearFromDialog.getAttribute('value').includes(this.creditcardExYear)).to.be.true;
		var extractedDate = SubPaymentPage.dialogPaymentDate.getText();
		expect(loggedDate.substring(loggedDate.indexOf(' ') + 1)).to.eql(extractedDate.substring(extractedDate.indexOf(' ') + 1));
		expect(paymentDescription).to.eql(SubPaymentPage.dialogPaymentHeader.getText().toLowerCase());
	}

	verifyPaymentPostedByMoneyOrder()
	{
		var alltransactions = SubPaymentPage.getAllTransactions;
		alltransactions[0].click();
		browser.pause(5000);
		expect(SubPaymentPage.expandPaymentMethodFromPostPayments.getAttribute('value')).to.eql('Money Order');
		expect(SubPaymentPage.paymentAmountFromDialog.getAttribute('value')).to.eql('5.00');
		expect(SubPaymentPage.referenceNumber.getAttribute('value')).to.eql('1645865303');
	}

	verifyAutoSuspendedOptionPresent()
	{
		expect(SubPaymentPage.autoSuspendedOption.getAttribute('value')=="true").to.be.true;
		expect(SubPaymentPage.autoSuspendText.isExisting()).to.be.true;
	}

	verifySubscribergetUnsuspended()
	{
		browser.pause(5000);
		expect(SubPaymentPage.pathSelector(SubPaymentPage.svgStatus(SubPaymentPage.getSubscriberName)).getAttribute('d')=="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z").to.be.true;
	}

	verifyAmountPaidForSelectedInvoices()
	{
		expect(SubPaymentPage.getAmountPaidForSelectedInvoice.getText()).to.eql('$'+this.lessThanAmount+'.00');
	}

	verifyUnAppliedPaymentAmount()
	{
		expect(SubPaymentPage.unappliedPaymentAmount.getText()).to.eql('$0.00');
	}

	verifySubscribersDetailsSwitched()
	{
		browser.pause(5000);
		//1st subscriber verification
		expect(SubPaymentPage.getSubscriberName.getText()).to.eql(this.firstsubscriberName);
		expect(SubPaymentPage.paymentAmount.getAttribute('value')).to.eql(this.amountToPost);
		console.log('payment reference is '+this.paymentReference);
		var allrows = SubPaymentPage.getAllRowsData;
 		let totallength = allrows.length;
 		let amount = allrows[totallength-1].getText();
		console.log('assertion extracted amount is before format '+amount);
 		amount = amount.substring(1);
		 console.log('assertion extracted amount after format is '+amount);
		expect(amount).to.eql(this.paymentReference);
		console.log('1st subscriber verified');
		//2nd subscriber verification
		//browser.pause(3000);
		//this.openSecondSubscriber();
		this.openDueSecondSubscriber();
		browser.pause(3000);
		this.clickOnPaymentsTab();
		expect(SubPaymentPage.getSubscriberName.getText()).to.eql(this.secondsubscriberName);
		expect(SubPaymentPage.paymentAmount.getAttribute('value')).to.eql(this.secondamountToPost);
		console.log('payment reference for second is '+this.distributionPayment);
		expect(this.extractTotalPaymentFromDT()).to.eql(this.distributionPayment);
		console.log('2nd subscriber verified');
	}

	
	verifyEcheckPaymentOptionSavedSuccessfully()
	{
		var msg;
		SubPaymentPage.confirmationMsg.waitForDisplayed();
		msg = SubPaymentPage.confirmationMsg.getText();
		expect(msg).to.eql(this.PaymentOptionUpdated);
		browser.pause(3000);
		expect(SubPaymentPage.svgStatus(SubPaymentPage.autoPayOnTheLable).getAttribute('data-testid')=="CheckBoxIcon").to.be.true;
		expect(SubPaymentPage.btnDayOfTheMonth.getText()).to.eql(this.echeckDay+' day of the month');
		expect(SubPaymentPage.routingNumberFromPaymentOptions.getAttribute('value')).to.eql(this.echeckroutingNumber);
		expect(SubPaymentPage.accountNumberFromPaymentOptions.getAttribute('value').includes('xxxxxx')).to.be.true;//encrypted
	}

	verifycreditCardPaymentOptionSavedSuccessfully()
	{
		var msg;
		SubPaymentPage.confirmationMsg.waitForDisplayed();
		msg = SubPaymentPage.confirmationMsg.getText();
		expect(msg).to.eql(this.PaymentOptionUpdated);
		browser.pause(3000);
		expect(SubPaymentPage.svgStatus(SubPaymentPage.autoRetryLable).getAttribute('data-testid')=="CheckBoxIcon").to.be.true;
		console.log('visa value is' + SubPaymentPage.inputValue(SubPaymentPage.expandCreditCardType).getAttribute('value'));
		expect(SubPaymentPage.inputValue(SubPaymentPage.expandCreditCardType).getAttribute('value')).to.eql(this.creditcardType);
		expect(SubPaymentPage.inputValue(SubPaymentPage.expandcreditCardExpireMonthFromPaymentOptions).getAttribute('value')).to.eql(this.creditCardExMonth);
		expect(SubPaymentPage.inputValue(SubPaymentPage.expandcreditCardExpireYearFromPaymentOptions).getAttribute('value')).to.eql(this.creditcardExYear);
		expect(SubPaymentPage.creditCardNumberFromPaymentOptions.getAttribute('value').includes(this.creditCardNum.substring(this.creditCardNum.length - 4))).to.be.true;
		expect(SubPaymentPage.inputValue(SubPaymentPage.expandautoRetry1stOption).getAttribute('value')).to.eql('2');
		expect(SubPaymentPage.inputValue(SubPaymentPage.expandautoRetry2ndOption).getAttribute('value')).to.eql('4');
	}

	verifyPaymentCreditSuccessfully()
	{
		//var msg;
		//SubPaymentPage.confirmationMsg.waitForDisplayed();
		//msg = SubPaymentPage.confirmationMsg.getText();
		//expect(msg).to.eql(this.PostedPaymentSuccessfully);
		browser.pause(3000);
		SubPaymentPage.btnTransactions.click();
		browser.pause(3000);
		var alltransactions = SubPaymentPage.getAllTransactions;
		alltransactions[0].click();
		browser.pause(3000);
		expect(SubPaymentPage.paymentAmount.getAttribute('value')).to.eql(this.amountToPost+'.00');
	}
	
}
module.exports = new subscriberDetailsPaymentsActions();
