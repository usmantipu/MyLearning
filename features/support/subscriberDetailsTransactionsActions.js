var LoginPage = require('../pageobjects/login.page');
var SubTransactionsPage = require('../pageobjects/subscriberDetailsTransactions.page');
var subPkgInv = require('../pageobjects/subscriberDetailsPackageInvoice.page');
var Utils = require('./utils');
var expect = require('chai').expect; 
var should = require('chai').should();


class subscriberDetailsTransactionsActions{
	
	constructor(){
		this.transDate;
		this.transDescription;
		this.transMemo;
		this.transStatus;
		this.transType;
		this.transAmount;
		this.transBalance;
		this.subEmail;
	}

	clickOnTransactionsTab()
	{
		if(SubTransactionsPage.subDetailsEmail.isExisting())
		{
			this.subEmail = SubTransactionsPage.subDetailsEmail.getText();
		}
		SubTransactionsPage.btnTransactions.waitForDisplayed();
		SubTransactionsPage.btnTransactions.click();
		browser.pause(2000);
	}

	keepSelectedSubTranData()
	{
		var allTransactionsDataRows = SubTransactionsPage.transactionTableFields;
		this.transDate = allTransactionsDataRows[0].getText();
		console.log('read date'+this.transDate);
		this.transDescription = allTransactionsDataRows[1].getText();
		console.log('read description'+this.transDescription);
		this.transMemo = allTransactionsDataRows[2].getText();
		console.log('read memo'+this.transMemo);
		this.transStatus = allTransactionsDataRows[3].getText();
		console.log('read status'+this.transStatus);
		var index;
		var status = false;
		var allTransactionsColumn = SubTransactionsPage.transactionTableHeader;
		if(allTransactionsColumn.length>=6)
		{
			index = allTransactionsDataRows.length-7;
			status = true;
		}
		else{
		 	index = allTransactionsDataRows.length-5;}
		this.transType = allTransactionsDataRows[index+4].getText();
		console.log('read type'+this.transType);
		if(status)
		{
			allTransactionsDataRows[index].click();
			if(SubTransactionsPage.checkDialogOpened.isExisting())
			{browser.pause(3000);SubTransactionsPage.closeDetailsDialog.click();}
			browser.pause(2000);
			var key =['\uE014'];
			browser.keys(key);
			browser.keys(key);
			browser.keys(key);
			browser.keys(key);
			browser.keys(key);
			browser.keys(key);
			browser.keys(key);
			browser.pause(2000);
			this.transAmount = allTransactionsDataRows[index+4].getText();
			this.transBalance = allTransactionsDataRows[index+5].getText();
		}
	}

	postPayment()
	{
		SubTransactionsPage.btnTransactions.waitForDisplayed();
		SubTransactionsPage.btnTransactions.click();
	}

	keepPostPaymentAmount()
	{
		browser.pause(5000);
		var allTransactionsDataRows = SubTransactionsPage.transactionTableFields;
		this.transDescription = allTransactionsDataRows[1].getText();
		var amountToVerify;
		var allTransactionsColumn = SubTransactionsPage.transactionTableHeader;
		if(allTransactionsColumn.length>=6)
		{amountToVerify = allTransactionsDataRows[5].getText();}
		else{
			allTransactionsDataRows[0].click();
			browser.pause(3000);
			amountToVerify = SubTransactionsPage.paymentAmountFromDialog.getAttribute('value');
			SubTransactionsPage.closeDetailsDialog.click();
			browser.pause(3000);
		}
		this.transAmount = amountToVerify;
		browser.pause(2000);
	}

	openFirstTransaction(param)
	{
		browser.pause(5000);
		var alltypes = param.replace(/['"]+/g, '');
		if(alltypes.includes('credit')){alltypes='credit';}
		var allTransactionsDataRows = SubTransactionsPage.transactionTableFields;
		this.transDate = allTransactionsDataRows[0].getText();
		this.transDescription = allTransactionsDataRows[1].getText();
		this.transStatus = allTransactionsDataRows[3].getText();
		this.transType = allTransactionsDataRows[4].getText();
		//this.transAmount = allTransactionsDataRows[5].getText();
		//this.transBalance = allTransactionsDataRows[6].getText();
		allTransactionsDataRows[0].click();
		if(SubTransactionsPage.checkDialogOpened.isExisting())
		{browser.pause(3000);SubTransactionsPage.closeDetailsDialog.click();}
		browser.pause(3000);
		var key =['\uE014'];
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.pause(2000);
		//allTransactionsDataRows = SubTransactionsPage.transactionTableFields;
		allTransactionsDataRows = SubTransactionsPage.transactionTableFields;
		var index =0;
		for(var i=0; i<allTransactionsDataRows.length; i++){
			var descriptionTocheck = allTransactionsDataRows[i].getText();
			if(descriptionTocheck===alltypes.toLowerCase())
			{
				index = i;
				break;
			}
		}
		this.transAmount = allTransactionsDataRows[index+1].getText();
		this.transBalance = allTransactionsDataRows[index+2].getText();
		allTransactionsDataRows[0].click();
		browser.pause(4000);
	}
	openCreatedInvoice()
	{
		browser.pause(5000);
		var alltypes;
		var selectedInvoiceData = SubTransactionsPage.selectedInvoiceData;
		alltypes ="invoice #"+ selectedInvoiceData[3].getText();
		var index =0;
		//if(alltypes.includes('credit')){alltypes='credit';}
		var allTransactionsDataRows = SubTransactionsPage.transactionTableFields;
		for(var i=0; i<allTransactionsDataRows.length; i++){
			var descriptionTocheck = allTransactionsDataRows[i].getText();
			if(descriptionTocheck===alltypes)
			{
				index = i;
				this.transDate = allTransactionsDataRows[index-1].getText();
				this.transDescription = allTransactionsDataRows[index].getText();
				this.transStatus = allTransactionsDataRows[index+2].getText();
				this.transType = allTransactionsDataRows[index+3].getText();
				break;
			}
		}
		console.log('trans Date is'+this.transDate);
		console.log('trans description is'+this.transDescription);
		console.log('trans status is'+this.transStatus);
		console.log('trans type is'+this.transType);
		//this.transAmount = allTransactionsDataRows[5].getText();
		//this.transBalance = allTransactionsDataRows[6].getText();
		allTransactionsDataRows[index].click();
		if(SubTransactionsPage.checkDialogOpened.isExisting())
		{browser.pause(3000);SubTransactionsPage.closeDetailsDialog.click();}
		browser.pause(3000);
		var key =['\uE014'];
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.pause(2000);
		//allTransactionsDataRows = SubTransactionsPage.transactionTableFields;
		allTransactionsDataRows = SubTransactionsPage.transactionTableFields;
		var newindex =0;
		for(var i=0; i<allTransactionsDataRows.length; i++){
			var descriptionTocheck = allTransactionsDataRows[i].getText();
			if(descriptionTocheck===alltypes)
			{
				newindex = i;
				break;
			}
		}
		this.transAmount = allTransactionsDataRows[newindex+4].getText();
		this.transBalance = allTransactionsDataRows[newindex+5].getText();
		console.log('trans amount is'+this.transAmount);
		console.log('trans balance is'+this.transBalance);
		//allTransactionsDataRows[newindex].click();
		browser.pause(4000);
	}

	keepDataOfNewlyAddedItem()
	{
		browser.pause(3000);
		var allTransactionsDataRows = SubTransactionsPage.transactionTableFields;
		this.transDate = allTransactionsDataRows[0].getText();
		this.transDescription = allTransactionsDataRows[1].getText();
		this.transStatus = allTransactionsDataRows[3].getText();
		this.transType = allTransactionsDataRows[4].getText();
		allTransactionsDataRows[4].click();
		if(SubTransactionsPage.checkDialogOpened.isExisting())
		{browser.pause(3000);var escapekey =['\ue00c'];browser.keys(escapekey);}
		browser.pause(3000);
		var key =['\uE014'];
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.pause(2000);
		allTransactionsDataRows = SubTransactionsPage.transactionTableFields;
		this.transAmount = allTransactionsDataRows[4].getText();
		this.transBalance = allTransactionsDataRows[5].getText();
	}

	syncTermWithinvoice()
	{
		SubTransactionsPage.syncWithThisInvoice.click();
	}

	ClickOnAddToQuote()
	{
		SubTransactionsPage.btnAddToQuote.click();
	}

	openViewStatement()
	{
		browser.pause(2000);
		SubTransactionsPage.btnViewStatement.click();
		browser.pause(5000);
	}

	clickOnSendEmail()
	{
		browser.pause(2000);
		SubTransactionsPage.btnSendEmailFromPDF.click();
		browser.pause(5000);
	}



	verifyTransactionsTabDisplayed()
	{
		expect(SubTransactionsPage.transactionsHeading.isExisting()).to.be.true;
		expect(SubTransactionsPage.btnReceivePayment.isExisting()).to.be.true;
		expect(SubTransactionsPage.btnViewStatement.isExisting()).to.be.true;
	}

	verifyTransactionFieldsWithData(columnsToVerify,status,type)
	{
		browser.pause(5000);
		var dataToVerify = columnsToVerify.raw();
		var allTransactionsColumn = SubTransactionsPage.transactionTableHeader;
		var allTransactionsDataRows = SubTransactionsPage.transactionTableFields;
		var index =0;
		for(var i=0; i<allTransactionsDataRows.length; i++){
			var descriptionTocheck = allTransactionsDataRows[i].getText();
			if(descriptionTocheck.includes('invoice'))
			{
				index = i;
				break;
			}
		}
		var dateHeader = allTransactionsColumn[0].getText();//date header
		var dateFieldValue = allTransactionsDataRows[index-1].getText();//date value
		var descriptionHeader = allTransactionsColumn[1].getText();//description header
		var descriptionFieldValue = allTransactionsDataRows[index].getText();//description value
		var memoHeader = allTransactionsColumn[2].getText();//memo header
		//var memoFieldValue = allTransactionsDataRows[2].getText();//description header
		var statusHeader = allTransactionsColumn[3].getText();//status header
		var statusFieldValue = allTransactionsDataRows[index+2].getText();//status value
		var typeHeader = allTransactionsColumn[4].getText();//type header
		var typeFieldValue = allTransactionsDataRows[index+3].getText();//type value
		allTransactionsDataRows[index].click();
		browser.pause(3000);
		if(SubTransactionsPage.checkDialogOpened.isExisting())
		{browser.pause(3000);SubTransactionsPage.closeDetailsDialog.click();}
		browser.pause(2000);
		var key =['\uE014'];
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.pause(2000);
		allTransactionsColumn = SubTransactionsPage.transactionTableHeader;
		var headersLength = allTransactionsColumn.length;
		allTransactionsDataRows = SubTransactionsPage.transactionTableFields;
		for(var i=0; i<allTransactionsDataRows.length; i++){
			var descriptionTocheck = allTransactionsDataRows[i].getText();
			if(descriptionTocheck==='invoice')
			{
				index = i;
				break;
			}
		}
		var amountHeader = allTransactionsColumn[headersLength-2].getText();//amount header
		var amountFieldValue = allTransactionsDataRows[index+1].getText();//amount value
		var balanceHeader = allTransactionsColumn[headersLength-1].getText();//balance header
		var balanceFieldValue = allTransactionsDataRows[index+2].getText();//balance value
		// header and data verification
		expect(dateHeader.includes(dataToVerify[0][0])).to.be.true;//date header verified
		console.log('date verified');
		expect(descriptionHeader.includes(dataToVerify[1][0])).to.be.true;//description header verified
		console.log('description verified');
		expect(memoHeader.includes(dataToVerify[2][0])).to.be.true;//memo header verified
		console.log('memo verified');
		expect(statusHeader.includes(dataToVerify[3][0])).to.be.true;//status header verified
		console.log('status verified');
		expect(typeHeader.includes(dataToVerify[4][0])).to.be.true;//type header verified
		console.log('type verified');
		expect(amountHeader.includes(dataToVerify[5][0])).to.be.true;//amount header verified
		console.log('amount verified');
		expect(balanceHeader.includes(dataToVerify[6][0])).to.be.true;//balance header verified
		console.log('balance verified');
		// invoice data verification
		var selectedInvoiceData = SubTransactionsPage.selectedInvoiceData;
		expect(selectedInvoiceData[2].getText().includes(dateFieldValue.replace(',',''))).to.be.true;//date value verified
		console.log('date verified');
		expect(descriptionFieldValue.includes(selectedInvoiceData[3].getText())).to.be.true;//description value verified
		console.log('description verified');
		expect(statusFieldValue.includes(status)).to.be.true;//status value verified
		console.log('status verified');
		expect(typeFieldValue.includes(type)).to.be.true;//type value verified
		console.log('type verified');
		console.log('amount value is' + amountFieldValue);
		console.log('amount from invoice is'+SubTransactionsPage.invoiceTotalAmount.getText());
		expect(amountFieldValue.includes(SubTransactionsPage.invoiceTotalAmount.getText())).to.be.true;//amount verified
		console.log('amount verified');
		console.log('balance from invoice is'+SubTransactionsPage.invoiceTotalBalance.getText());
		console.log('balance field value '+balanceFieldValue);
		expect(balanceFieldValue.includes(SubTransactionsPage.invoiceTotalBalance.getText())).to.be.true;//balance verified
		console.log('balance verified');
	}

	verifyInvoiceNumberChanged()
	{
		var allTransactionsDataRows = SubTransactionsPage.transactionTableFields;
		// var index;
		// var allTransactionsColumn = SubTransactionsPage.transactionTableHeader;
		// if(allTransactionsColumn.length>=6)
		// {
		// 	index = allTransactionsDataRows.length-7;
		// }
		// else{
		//  	index = allTransactionsDataRows.length-5;}
		var getDescriptionFromTrans = allTransactionsDataRows[1].getText();
		console.log('read second subsriber description '+getDescriptionFromTrans);
		browser.pause(2000);
		expect(getDescriptionFromTrans).to.not.equal(this.transDescription);
	}

	verifyRecentDataInTransactions(actionType)
	{
		browser.pause(7000);
		var dataToVerify =actionType.raw();
		var allTransactionsDataRows = SubTransactionsPage.transactionTableFields;
		var allTransactionsColumn = SubTransactionsPage.transactionTableHeader;
		var creditItemToVerify = allTransactionsDataRows[2].getText();
		expect(allTransactionsDataRows[1].getText().includes(dataToVerify[0][0])).to.be.true;
		expect(allTransactionsDataRows[4].getText().includes(dataToVerify[0][0])).to.be.true;
		var amountToVerify;
		if(allTransactionsColumn.length>=6)
		{amountToVerify = allTransactionsDataRows[5].getText();}
		else{
				allTransactionsDataRows[0].click();
				browser.pause(4000);
				if(dataToVerify[0][0]==='credit' || dataToVerify[0][0]==='payment'){
					amountToVerify = '$-'+ SubTransactionsPage.paymentAmountFromDialog.getAttribute('value');
					browser.pause(2000);
					SubTransactionsPage.closeDetailsDialog.click();
				}
				else{
					var key =['\uE014'];
					browser.keys(key);
					browser.keys(key);
					browser.keys(key);
					browser.keys(key);
					browser.keys(key);
					browser.keys(key);
					browser.keys(key);
					browser.keys(key);
					browser.keys(key);
					browser.pause(2000);
					allTransactionsDataRows = SubTransactionsPage.transactionTableFields;
					amountToVerify = allTransactionsDataRows[4].getText();//amount value
				}
		}
		switch(dataToVerify[0][0]){
			case "credit":
				expect(creditItemToVerify.includes(dataToVerify[2][0])).to.be.true;
				break;
			case "invoice":
				expect(amountToVerify.includes(SubTransactionsPage.invoiceTotalAmount.getText())).to.be.true;
				break;
			case "quote":
				expect(amountToVerify.includes(SubTransactionsPage.quoteTotalAmount.getText())).to.be.true;
				break;
		}
		if(dataToVerify.length > 1)
		{
			expect(amountToVerify).to.eql(dataToVerify[1][0]);
		}
	}

	verifyPostedPaymentAndCredit(actionType)
	{
		browser.pause(4000);
		var dataToVerify =actionType.raw();
		var allTransactionsDataRows = SubTransactionsPage.transactionTableFields;
		expect(allTransactionsDataRows[1].getText().includes(dataToVerify[0][0])).to.be.true;
		browser.pause(2000);
		expect(this.transDescription.includes(dataToVerify[2][0])).to.be.true;
		if(this.transAmount.includes('$-')===false){this.transAmount = '$-' + this.transAmount}
		expect(this.transAmount).to.eql(dataToVerify[3][0]);
		console.log('1st amount verified');
		var amountToVerify;
		var allTransactionsColumn = SubTransactionsPage.transactionTableHeader;
		if(allTransactionsColumn.length>=6)
		{amountToVerify = allTransactionsDataRows[5].getText();}
		else{
			allTransactionsDataRows[0].click();
			browser.pause(3000);
			amountToVerify = SubTransactionsPage.paymentAmountFromDialog.getAttribute('value');
			amountToVerify = '$-' +amountToVerify;
			SubTransactionsPage.closeDetailsDialog.click();
			browser.pause(3000);
		}
		expect(amountToVerify).to.eql(dataToVerify[1][0]);
		console.log('2nd amount verified');
	}

	verifySelectedInvocieData()
	{
		var selectedInvoiceData = SubTransactionsPage.selectedInvoiceData;
		expect(selectedInvoiceData[2].getText().includes(this.transDate.replace(',',''))).to.be.true;
		expect(this.transDescription.includes(selectedInvoiceData[3].getText())).to.be.true;
		expect(this.transAmount.includes(SubTransactionsPage.invoiceTotalAmount.getText())).to.be.true;
		expect(this.transBalance.includes(SubTransactionsPage.invoiceTotalBalance.getText())).to.be.true;
		expect(subPkgInv.invoiceHeader.getText()).to.eql('INVOICE #');
		subPkgInv.btnInvoiceOpen.scrollIntoView();
		expect(subPkgInv.btnInvoiceOpen.isExisting()).to.be.true;
		expect(subPkgInv.btnDeleteInvoice.isExisting()).to.be.true;
		expect(subPkgInv.btnEmailFromInvoice.isExisting()).to.be.true;
		expect(subPkgInv.btnViewPDF.isExisting()).to.be.true;
	}

	verifyAccurateAndUpdatedDataInTransactions(type)
	{
		browser.pause(5000);
		var alltypes = type.raw();
		var allTransactionsDataRows = SubTransactionsPage.transactionTableFields;
		allTransactionsDataRows[2].click();
		browser.pause(2000);
		//this.clickOnTransactionsTab();
		var keyLeft =['\ue012'];
		browser.keys(keyLeft);
		browser.keys(keyLeft);
		browser.keys(keyLeft);
		browser.keys(keyLeft);
		browser.pause(4000);
		allTransactionsDataRows = SubTransactionsPage.transactionTableFields;
		expect(allTransactionsDataRows[0].getText()).to.eql(this.transDate);
		console.log('date verified');
		expect(allTransactionsDataRows[1].getText()).to.eql(this.transDescription);
		console.log('description verified');
		expect(allTransactionsDataRows[3].getText()).to.eql(this.transStatus);
		console.log('status verified');
		expect(allTransactionsDataRows[4].getText()).to.eql(this.transType);
		console.log('type verified');
		allTransactionsDataRows[2].click();
		//this.clickOnTransactionsTab();
		browser.pause(2000);
		var keyRight =['\uE014'];
		browser.keys(keyRight);
		browser.keys(keyRight);
		browser.keys(keyRight);
		browser.keys(keyRight);
		browser.keys(keyRight);
		browser.keys(keyRight);
		browser.keys(keyRight);
		browser.keys(keyRight);
		browser.keys(keyRight);
		browser.pause(2000);
		allTransactionsDataRows = SubTransactionsPage.transactionTableFields;
		var index =0;
		for(var i=0; i<allTransactionsDataRows.length; i++){
			var descriptionTocheck = allTransactionsDataRows[i].getText();
			if(descriptionTocheck===alltypes[0][0].toLowerCase())
			{
				index = i;
				break;
			}
		}
		switch(alltypes[0][0].toLowerCase()){
			case "invoice":
				expect(allTransactionsDataRows[index+1].getText()).to.eql(SubTransactionsPage.invoiceTotalAmount.getText());
				expect(allTransactionsDataRows[index+1].getText()).to.not.equal(this.transAmount);
				break;
			case "quote":
				expect(allTransactionsDataRows[index+1].getText()).to.eql(SubTransactionsPage.quoteTotalAmount.getText());
				expect(allTransactionsDataRows[index+1].getText()).to.not.equal(this.transAmount);
				break;
		}
	}
	
	verifySelectedQuoteData()
	{
		var selectedInvoiceData = SubTransactionsPage.selectedInvoiceData;
		expect(selectedInvoiceData[2].getText().includes(this.transDate.replace(',',''))).to.be.true;
		expect(this.transDescription.includes(selectedInvoiceData[3].getText())).to.be.true;
		expect(this.transAmount.includes(SubTransactionsPage.quoteTotalAmount.getText())).to.be.true;
		expect(subPkgInv.btnDeleteQuote.isExisting()).to.be.true;
		expect(subPkgInv.btnViewPDF.isExisting()).to.be.true;
		expect(subPkgInv.btnEmailFromInvoice.isExisting()).to.be.true;
		selectedInvoiceData[2].click();
		browser.pause(5000);
		expect(SubTransactionsPage.quoteHeader.getText()).to.eql('QUOTE #');
	}
	
	verifyPaymentDetails()
	{
		browser.pause(2000);
		SubTransactionsPage.paymentAmountFromDialog.waitForDisplayed();
		expect(SubTransactionsPage.paymentAmountFromDialog.getAttribute('value')).to.eql(this.transAmount.substring(2));
		expect(SubTransactionsPage.popDialogHeader.getText().toLowerCase()).to.eql(this.transDescription);
	}

	verifyCreditMemoDetails()
	{
		// browser.pause(2000);
		// console.log(this.transAmount.substring(2));
		// SubTransactionsPage.paymentAmountFromDialog.waitForDisplayed();
		// expect(SubTransactionsPage.paymentAmountFromDialog.getAttribute('value')).to.eql(this.transAmount.substring(2));
		// expect(SubTransactionsPage.popDialogHeader.getText().toLowerCase()).to.eql(this.transDescription);
		// browser.pause(3000);
		// SubTransactionsPage.btnTransactions.click();
		// browser.pause(3000);
		// var alltransactions = SubTransactionsPage.getAllTransactions;
		// alltransactions[0].click();
		browser.pause(3000);
		console.log('transaction ammount is '+this.transAmount);
		expect(SubTransactionsPage.paymentAmount.getAttribute('value')).to.eql(this.transAmount.substring(2));
	}

	verifyPreviewDialogDisplayed()
	{
		expect(SubTransactionsPage.btnSendEmailFromPDF.isExisting()).to.be.true;
		expect(SubTransactionsPage.btnSendEmailFromPDF.isClickable()).to.be.true;
		expect(SubTransactionsPage.statementRangeHeader.isExisting()).to.be.true;
	}

	verifyEmailOpenedInDock(from)
	{
		expect(SubTransactionsPage.emailDrawer.isExisting()).to.be.true;
		expect(SubTransactionsPage.toEmail.getText().includes(this.subEmail)).to.be.true;
		expect(SubTransactionsPage.fromEmail.getAttribute('value')).to.eql(from);
	}
}


module.exports = new subscriberDetailsTransactionsActions();
