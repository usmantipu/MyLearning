var LoginPage = require('../pageobjects/login.page');
var SubListPage = require('../pageobjects/subscriberlist.page');
var Utils = require('./utils');
var expect = require('chai').expect; 
var should = require('chai').should();

class subscriberlistActions{
	
	constructor(){
		this.variable;
		this.source;this.sourceDetails;
		this.sourceConfMsg = 'Successfully saved the new Source';
	}
	
    openVispApp(){
		SubListPage.open();
	}
	
	loginToVisp(login, password) {

		Utils.login(login, password);
	/*	browser.pause(5000);
		if(LoginPage.vispLogo.isExisting()===true){	
			browser.maximizeWindow();
		}else{
			LoginPage.username.waitForDisplayed();
			LoginPage.username.setValue(login);
			LoginPage.passwordf.setValue(password);
			LoginPage.logbutton.click();
			browser.maximizeWindow();
			//utils.closeRatingPopup();
			//utils.closeWalkMe();

		}*/

		
    }
	
	openSubscriberList(){
		
        this.refreshSubListOnError();
		SubListPage.subscribersmenu.waitForExist();
		SubListPage.subscribersmenu.waitForDisplayed();
		SubListPage.subscribersmenu.click();
		/*  
		SubListPage.subscriberslistmenu.waitForExist();
		SubListPage.subscriberslistmenu.waitForDisplayed();
		SubListPage.subscriberslistmenu.click();*/
		browser.pause(5000);
		//SubListPage.blankSpace.click();//to move away cursor from collapsable menu
		console.log('I open subscriber list');
		SubListPage.subscribersCaption.click(); // to click on white space to remove the tooltip over subscriber icon
	}

	clickOnAnySubscriber(){
		browser.pause(2000);
		SubListPage.selectFirstSubscriber.waitForDisplayed();
		browser.pause(2000);
		SubListPage.selectFirstSubscriber.click();
		// SubListPage.selectSecondSubscriber.click();
		// console.log("subscriber was clicked");
	}

	clickOnSecondSubscriber(){
		browser.pause(4000);
		SubListPage.selectSecondSubscriber.waitForDisplayed();
		SubListPage.selectSecondSubscriber.click();
	}

	clickOnDueSecondSubscriber(){
		browser.pause(4000);
		SubListPage.selectDueSecondSubscriber.waitForDisplayed();
		SubListPage.selectDueSecondSubscriber.click();
	}

	openSpecificSubscruberDetails(subsName)
	{
		browser.pause(7000);
		var allsubsData = SubListPage.allsubscribersData;
		console.log('total subscribers are: ' +allsubsData.length);
		for(var i=0; i<allsubsData.length; i++)
		{
			var extractedname = allsubsData[i].getText();
			//console.log('>>>>>>>>>>>>Extracted name from subscriber list is: ' + extractedname);
			if(extractedname == subsName)
			{	allsubsData[i].scrollIntoView();
				allsubsData[i].waitForClickable();
				allsubsData[i].click();
				break;
			}
		}
	}

	refreshSubListOnError()
	{
		browser.pause(5000);
		if(SubListPage.pageLoadError.isExisting())
		{
/*			if(SubListPage.pageLoadError.getText().includes('Sorry, something went wrong. Please try again.'))
			{
				SubListPage.btnSubListRefresh(SubListPage.pageLoadError).click();
			}*/
		}
		browser.pause(5000);
	}
	
	getSpecificSubscriberListCount()
	{
		browser.pause(5000);
		SubListPage.totalcount.waitForDisplayed({ timeout: 12000});
		let total = SubListPage.totalcount.getText();
		//console.log('total records are :' + total);
		const myArray = total.split(' ');
		let position = myArray.indexOf("of") + 1;
		return myArray[position];
	}

	clickAllSubscriberList()
	{
		SubListPage.btn_PastDue.waitForExist();
		SubListPage.btn_PastDue.waitForDisplayed();
		SubListPage.btn_PastDue.click();
		SubListPage.btn_All.waitForDisplayed();
		SubListPage.btn_All.waitForExist();
		SubListPage.btn_All.click();
		browser.pause(7000);
	}

	clickSortingButton(btn_sortlist){
		//SubListPage.btn_All.waitForExist();
		//SubListPage.btn_All.waitForDisplayed();
		//SubListPage.btn_All.click();
		browser.pause(4000);
		while(SubListPage.sortColumnIndicatorFlag.isExisting()){
			SubListPage.colCustomerIdHeader.click();
			browser.pause(2000);
		}
		switch(btn_sortlist){
			
			case "All":

				SubListPage.btn_All.waitForExist();
				SubListPage.btn_All.waitForDisplayed();
			    SubListPage.btn_All.click();
				console.log('I click on: ' + btn_sortlist);
				break;
			case "Paid up":

				SubListPage.btn_PaidUp.waitForExist();
				SubListPage.btn_PaidUp.waitForDisplayed();
			    SubListPage.btn_PaidUp.click();
				console.log('I click on: ' + btn_sortlist);
										
				break;
			case "Due":
			
			    SubListPage.btn_Due.waitForExist();
				SubListPage.btn_Due.waitForDisplayed();
				SubListPage.btn_Due.click();
				console.log('I click on: ' + btn_sortlist);
				
				
				break;
			case "Past Due":
				/*SubListPage.btn_All.waitForExist();
				SubListPage.btn_All.isVisible();
				SubListPage.btn_PastDue.moveToObject();//changing focus
				SubListPage.btn_All.click(); //reseting all pre clicked buttons*/
				SubListPage.btn_PastDue.waitForExist();
				SubListPage.btn_PastDue.waitForDisplayed();
				SubListPage.btn_PastDue.click();
			    console.log('I click on: ' + btn_sortlist);				
				
				
				break;
			case "Suspended":
				/*SubListPage.btn_All.waitForExist();
				SubListPage.btn_All.isVisible();
				SubListPage.btn_PastDue.moveToObject();//changing focus
				SubListPage.btn_All.click(); //reseting all pre clicked buttons*/
				SubListPage.btn_Suspended.waitForExist();
				SubListPage.btn_Suspended.waitForDisplayed();
				SubListPage.btn_Suspended.click();
			    console.log('I click on: ' + btn_sortlist);
				
				
				break;
			case "Hibernated":
				/*SubListPage.btn_All.waitForExist();
				SubListPage.btn_All.isVisible();
				SubListPage.btn_PastDue.moveToObject();//changing focus
				SubListPage.btn_All.click(); //reseting all pre clicked buttons*/
				SubListPage.btn_Hibernated.waitForExist();
				SubListPage.btn_Hibernated.waitForDisplayed();
				SubListPage.btn_Hibernated.click();
			    console.log('I click on: ' + btn_sortlist);
				
				
				break;
			case "Prospect":
				/*SubListPage.btn_All.waitForExist();
				SubListPage.btn_All.isVisible();
				SubListPage.btn_PastDue.moveToObject();//changing focus
				SubListPage.btn_All.click(); //reseting all pre clicked buttons*/
				SubListPage.btn_Prospect.waitForExist();
				SubListPage.btn_Prospect.waitForDisplayed();
				SubListPage.btn_Prospect.click();
			    console.log('I click on: ' + btn_sortlist);
				break;
			case "Archived":
				/*SubListPage.btn_All.waitForExist();
				SubListPage.btn_All.isVisible();
				SubListPage.btn_PastDue.moveToObject();//changing focus
				SubListPage.btn_All.click(); //reseting all pre clicked buttons*/
				SubListPage.btn_Archived.waitForExist();
				SubListPage.btn_Archived.waitForDisplayed();
				SubListPage.btn_Archived.click();
			    console.log('I click on: ' + btn_sortlist);
				break;
			default:
				console.log('Nothing to click!');
		}
	}
	

	changeTableView(tableView){
		SubListPage.btn_PaidUp.click();
		browser.pause(5000);
		SubListPage.meatball_menu.waitForDisplayed();
        SubListPage.meatball_menu.click();
        browser.pause(2000);
		switch(tableView){
			
			case "Comfortable":
							
				SubListPage.tableViewComfortable.waitForDisplayed();
				SubListPage.tableViewComfortable.click();
				browser.pause(2000);
				break;
			case "Compact":
				
				SubListPage.tableViewCompact.waitForDisplayed();
				SubListPage.tableViewCompact.click();
				browser.pause(2000)
				break;
			case "Cozy":
				
				SubListPage.tableViewCozy.waitForDisplayed();
				SubListPage.tableViewCozy.click();
				browser.pause(2000)
				break;
		}
		console.log('I set row density to '+ tableView);
		
	}

	clickOnAdditionalInfoTab(){
		browser.pause(7000);
		SubListPage.btnAdditionalInfo.waitForDisplayed();
		SubListPage.btnAdditionalInfo.click();
	}

	clickOnOperatingSystem(){
		SubListPage.operatingSystem.waitForDisplayed();
		SubListPage.operatingSystem.click();
	}

	gotoMarketingSettings(){
		SubListPage.btnAppIcon.click();
		browser.pause(2000);
		SubListPage.btnCRMFromMenu.waitForDisplayed();
		SubListPage.btnCRMFromMenu.click();
		SubListPage.btnMarketingFromMenu.waitForDisplayed();
		SubListPage.btnMarketingFromMenu.click();
		browser.pause(2000);
	}

	UncheckSourceAndSourceDetails()
	{
		browser.pause(4000);
		if(SubListPage.displaySourceAndSourceDetails.getAttribute('value')=='true')
		{
			SubListPage.displaySourceAndSourceDetails.click();
			browser.pause(2000);
			SubListPage.btnSaveTopMenu.click();
		}
		browser.pause(4000);
		SubListPage.btnCloseTopMenu.click();
	}
	
	checkSourceAndSourceDetails(){
		browser.pause(4000);
		if(SubListPage.displaySourceAndSourceDetails.getAttribute('value')=='false')
		{
			SubListPage.displaySourceAndSourceDetails.click();
			browser.pause(2000);
			SubListPage.btnSaveTopMenu.click();
		}
		browser.pause(4000);
		SubListPage.btnCloseTopMenu.click();
	}

	clickOnSourceField(){
		SubListPage.source.waitForDisplayed();
		SubListPage.source.click();
	}

	clickOnSourceDetailsField(){
		SubListPage.sourceDetails.waitForDisplayed();
		SubListPage.sourceDetails.click();
	}

	selectNewOption(){
		browser.pause(2000);
		SubListPage.selectSourceItem('New...').click();
	}

	inputSourceField(){
		browser.pause(2000);
		this.source = 'AS' + (Math.floor(new Date() / 1000));
		SubListPage.popSourceInput.click();
		SubListPage.popSourceInput.setValue(this.source);
	}
	

	popSave(){
		browser.pause(2000);
		SubListPage.popbtnSave.click();
	}

	selectOS(){
		browser.pause(2000);
		SubListPage.selectOSItem('Unix').click();
	}

	selectSource(){
		browser.pause(2000);
		SubListPage.selectSourceItem('Insta').click();
	}

	selectSource(source){
		browser.pause(2000);
		console.log('>>>>>>>>>>Testing of source: '+source);
		SubListPage.selectSourceItem(source).click();
	}

	provideSourceDetails(){
		this.sourceDetails = 'ASD' + (Math.floor(new Date() / 1000));
		browser.pause(2000);
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		SubListPage.sourceDetails.click();
		SubListPage.sourceDetails.keys(clearKeys);
		browser.pause(1000);
		SubListPage.sourceDetails.setValue(this.sourceDetails);
		browser.pause(1000);
	}
	
	clickSaveAdditionalInfo(){
		browser.pause(2000);
		SubListPage.btnSaveAdditionalDetails.click();
	}

	addSourcesIfDoNotExist(sources)
	{
		var clearKeys = ['\uE00C'];
		var table = sources.raw();
		var count = 0;
		for(var i=0; i<table.length; i++){
			if(count > 0)
			{
				this.clickOnSourceField();
			}
			this.selectNewOption();
			browser.pause(1000);
			SubListPage.popSourceInput.waitForDisplayed();
			SubListPage.popSourceInput.click();
			SubListPage.popSourceInput.setValue(table[i][0]);
			browser.pause(1000);
			SubListPage.popbtnSave.click();
			SubListPage.confirmationMsg.waitForDisplayed();
			var msg = SubListPage.confirmationMsg.getText();
			if(msg=='Error saving changes: name ('+table[i][0]+') already taken.')
			{
				browser.keys(clearKeys)
			}		
			browser.pause(2000);
			count = 1;
		}
		
	}

	sourceDetailsNonAlpanumeric()
	{
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		browser.pause(2000);
		SubListPage.sourceDetails.click();
		SubListPage.sourceDetails.keys(clearKeys);
		browser.pause(1000);
		SubListPage.sourceDetails.setValue('abc123');
		browser.pause(1000);
		var Valstatus =  SubListPage.sourceDetailsValidation.isExisting();
		this.sourceDetails = Valstatus;
		browser.pause(1000);
		SubListPage.sourceDetails.click();
		SubListPage.sourceDetails.keys(clearKeys);
		browser.pause(1000);
		SubListPage.sourceDetails.setValue('abc');
		Valstatus =  SubListPage.sourceDetailsValidation.isExisting();
		this.sourceDetails = this.sourceDetails +"," +  Valstatus;
		browser.pause(1000);
		SubListPage.sourceDetails.click();
		SubListPage.sourceDetails.keys(clearKeys);
		browser.pause(1000);
		SubListPage.sourceDetails.setValue('123');
		Valstatus =  SubListPage.sourceDetailsValidation.isExisting();
		this.sourceDetails = this.sourceDetails +"," +  Valstatus;
		browser.pause(1000);
		SubListPage.sourceDetails.click();
		SubListPage.sourceDetails.keys(clearKeys);
		browser.pause(1000);
		SubListPage.sourceDetails.setValue('0.0');
	}

	verifySublistTitle(){
		var title;
		SubListPage.sublistRibbon.waitForExist();
		SubListPage.sublistRibbon.waitForDisplayed();
		title = SubListPage.sublistRibbon.getText();
		expect(title.substr(0,11)).to.eql('Subscribers');
	}
	
	verifyButtonavailibility(buttons){		
		browser.pause(5000);
		var allbuttons = buttons.raw();
		console.log('Total buttons are: '+ allbuttons.length);
		SubListPage.btn_All.waitForDisplayed();
		expect(SubListPage.btn_All.getText()).to.eql(allbuttons[0][0]);
		expect(SubListPage.btn_PaidUp.getText()).to.eql(allbuttons[1][0]);// Widget no longer exists on dashboard  
		expect(SubListPage.btn_Due.getText()).to.eql(allbuttons[2][0]);
		expect(SubListPage.btn_PastDue.getText()).to.eql(allbuttons[3][0]); // Widget no longer exists on dashboard
		expect(SubListPage.btn_Suspended.getText()).to.eql(allbuttons[4][0]);		
		expect(SubListPage.btn_Hibernated.getText()).to.eql(allbuttons[5][0]);
		expect(SubListPage.btn_Prospect.getText()).to.eql(allbuttons[6][0]);
		console.log('subscriber list buttons verified');
	}
	
	verifyListSorting(colstatus){
		browser.pause(4000);
		var totalrecords = this.getSpecificSubscriberListCount();
		console.log('total records '+totalrecords);
		if (Number(totalrecords)===0){
			expect(1).to.eql(1);
			console.log('No Data Available...');
			//console.log('Verifid status of :' + colstatus);
		}		
		else {
			var expectedStatus;
			var buttonactive;
			var results;
			switch(colstatus){
			case "Paid up":
				expectedStatus = 'text-success';
				buttonactive = SubListPage.btn_PaidUp.getAttribute('class').includes('active');
				results = SubListPage.svgStatusIcon(expectedStatus);
				break;
			case "Past Due":
				expectedStatus = 'text-danger';
				buttonactive = SubListPage.btn_PastDue.getAttribute('class').includes('active');
				results = SubListPage.PastDueIcon;
				break;
			case "Due":
				expectedStatus = 'text-warning';
				buttonactive = SubListPage.btn_Due.getAttribute('class').includes('active');
				results = SubListPage.svgStatusIcon(expectedStatus);
				break;
			case "Suspended":
				expectedStatus = 'text-danger';
				buttonactive = SubListPage.btn_Suspended.getAttribute('class').includes('active');
				results = SubListPage.SuspendedIcon;
				console.log('suspended records '+results);
				break;
			case "Hibernated":
				expectedStatus = 'text-primary';
				buttonactive = SubListPage.btn_Hibernated.getAttribute('class').includes('active');
				results = SubListPage.svgStatusIcon(expectedStatus);
				break;
			case "Prospect":
				expectedStatus = 'text-light';
				buttonactive = SubListPage.btn_Prospect.getAttribute('class').includes('active');
				results = SubListPage.svgStatusIcon(expectedStatus);
				break;
			}
			if(Number(results)==Number(totalrecords) || (Number(results) < 50 && Number(results) >10))
			{	
				expect(buttonactive).to.be.true;
				expect(1).to.eql(1);
				//console.log('Verifid status of :' + colstatus);
			}
			else{
				expect(1).to.eql(0);
			}
		}
	}
	

	verifyTableView(tableView){
		browser.pause(7000);
		SubListPage.meatball_menu.waitForDisplayed();
		SubListPage.meatball_menu.click();
		browser.pause(5000);
		//var selection = tableView.toLowerCase();
		tableView = tableView.replace(/['"]+/g, '');
		var state;
		
		 if (tableView === "Comfortable"){
			state = SubListPage.tableView(SubListPage.tableViewComfortable).getAttribute('class');
			console.log('View updated to: ' + tableView);
			expect(state.includes('text-success')).to.be.true;
		 }
		 else {
			state = SubListPage.tableView(SubListPage.tableViewCozy).getAttribute('class');
			console.log('View updated to: ' + tableView);
			expect(state.includes('text-success')).to.be.true;

		 }
	}

	verifyAdditionalInfoTabVisible()
	{
		browser.pause(2000);
		expect(SubListPage.btnAdditionalInfo.isExisting()).to.be.true;
		expect(SubListPage.setupDate.isExisting()).to.be.true;
	}

	verifySetUpDateDisabled()
	{
		browser.pause(2000);
		expect(SubListPage.setupDate.getAttribute('class').includes('Mui-disabled')).to.be.true;
	}

	verifyListOfOS(os)
	{
		browser.pause(3000);
		var allOS = os.raw();
		console.log('Total os are: '+ allOS.length);
		var allItems = SubListPage.allOSListItems;
		expect(allItems[1].getText()).to.eql(allOS[0][0]);
		expect(allItems[2].getText()).to.eql(allOS[1][0]);
		expect(allItems[3].getText()).to.eql(allOS[2][0]);
		expect(allItems[4].getText()).to.eql(allOS[3][0]);
		expect(allItems[5].getText()).to.eql(allOS[4][0]);		
		expect(allItems[6].getText()).to.eql(allOS[5][0]);
		expect(allItems[7].getText()).to.eql(allOS[6][0]);
		expect(allItems[8].getText()).to.eql(allOS[7][0]);
		expect(allItems[9].getText()).to.eql(allOS[8][0]);
		expect(allItems[10].getText()).to.eql(allOS[9][0]);
		expect(allItems[11].getText()).to.eql(allOS[10][0]);
		expect(allItems[12].getText()).to.eql(allOS[11][0]);
		expect(allItems[13].getText()).to.eql(allOS[12][0]);
		expect(allItems[14].getText()).to.eql(allOS[13][0]);
		expect(allItems[15].getText()).to.eql(allOS[14][0]);
		expect(allItems[16].getText()).to.eql(allOS[15][0]);
	}

	verifyListOfSource(sources)
	{
		this.clickOnSourceField();
		browser.pause(3000);
		var table = sources.raw();
		expect(SubListPage.isSourceItemExist(table[0][0]).isExisting()).to.be.true;
		expect(SubListPage.isSourceItemExist(table[1][0]).isExisting()).to.be.true;
		expect(SubListPage.isSourceItemExist(table[2][0]).isExisting()).to.be.true;
		expect(SubListPage.isSourceItemExist(table[3][0]).isExisting()).to.be.true;
		expect(SubListPage.isSourceItemExist(table[4][0]).isExisting()).to.be.true;
		expect(SubListPage.isSourceItemExist(table[5][0]).isExisting()).to.be.true;
		expect(SubListPage.isSourceItemExist(table[6][0]).isExisting()).to.be.true;
		expect(SubListPage.isSourceItemExist(table[7][0]).isExisting()).to.be.true;
		expect(SubListPage.isSourceItemExist(table[8][0]).isExisting()).to.be.true;
	}

	verifySourceAndSourceDetailsAreNotPresent()
	{
		browser.pause(2000);
		expect(SubListPage.source.isExisting()).to.be.false;
		expect(SubListPage.sourceDetails.isExisting()).to.be.false;
	}

	verifySourceAndSourceDetailsStatus()
	{
		browser.pause(2000);
		expect(SubListPage.source.isExisting()).to.be.true;
		expect(SubListPage.sourceDetails.isExisting()).to.be.true;
	}

	verifySourceFieldAdded()
	{
		var msg;
		SubListPage.confirmationMsg.waitForDisplayed();
		msg = SubListPage.confirmationMsg.getText();
		expect(msg).to.eql(this.sourceConfMsg);
		browser.pause(3000);
		SubListPage.source.click();
		browser.pause(3000);
		expect(SubListPage.isSourceItemExist(this.source).isExisting()).to.be.true;
	}

	verifyPopUpSaveButtonDisabled()
	{
		browser.pause(2000);
		expect(SubListPage.popbtnSave.getAttribute('class').includes('Mui-disabled')).to.be.true;
	}

	verifyEmptyFieldErrorMsg()
	{
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		SubListPage.popSourceInput.click();
		SubListPage.popSourceInput.setValue('Test of required message');
		SubListPage.popSourceInput.keys(clearKeys);
		expect(SubListPage.popRequiredFieldMsg.getText()).to.eql('Source is a required field');
		
	}

	verifyAdditionalInfoSavedSuccessfully()
	{
		browser.pause(4000);
		expect(SubListPage.operatingSystem.getText()).to.eql('Unix');
		expect(SubListPage.source.getText()).to.eql('Insta');
		expect(SubListPage.sourceDetails.getAttribute('value')).to.eql(this.sourceDetails);
	}

	verifySourceDetailsInputValidation()
	{
		browser.pause(2000);
		expect(SubListPage.sourceDetailsValidation.isExisting()).to.be.true;
		expect(this.sourceDetails).to.eql('false,false,false');//result for alphanumeric values
	}
	
}
module.exports = new subscriberlistActions();
