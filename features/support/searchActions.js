var LoginPage = require('../pageobjects/login.page');
var searchPage = require('../pageobjects/search.page');
var ServiceDeskPage = require('../pageobjects/serviceDesk.page');
const { closeRatingPopup } = require('./utils');
var Utils = require('./utils');
var expect = require('chai').expect; 
var should = require('chai').should();

class searchActions{
	
	constructor(){
		this.variable;
		this.source;this.sourceDetails;
		this.sourceConfMsg = 'Successfully saved the new Source';
		this.searchCount;
		this.ticketID;
	}
	
    openVispApp(){
		searchPage.open();
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
		searchPage.subscribersmenu.waitForExist();
		searchPage.subscribersmenu.waitForDisplayed();
		searchPage.subscribersmenu.click();
		
		/*  
		SubListPage.subscriberslistmenu.waitForExist();
		SubListPage.subscriberslistmenu.waitForDisplayed();
		SubListPage.subscriberslistmenu.click();*/
		browser.pause(5000);
		//SubListPage.blankSpace.click();//to move away cursor from collapsable menu
		console.log('I open subscriber list');
		searchPage.subscribersCaption.click(); // to click on white space to remove the tooltip over subscriber icon

		searchPage.btn_All.waitForClickable();
		searchPage.btn_All.click(); // to click on All tab.
		browser.pause(2000);

	}


	enterAttributeInSearchBar () {

		searchPage.searchField.waitForClickable();
		browser.pause(2000);
		searchPage.searchField.click();
		console.log("clicked inside the search field text box");
		searchPage.searchField.setValue("ca");
		browser.pause(5000);
	}
	
	clickMoreInSearchField(){
		searchPage.moreSearch.waitForClickable();
		browser.pause(2000);
		searchPage.moreSearch.click();
		browser.pause(2000);
	}
	clickInSearchBar(){
		searchPage.searchField.waitForClickable();
		browser.pause(2000);
		searchPage.searchField.click();
		browser.pause(3000);
	}


	verifySuggestionGroups () {
		
		// if(searchPage.suggestionGroup.isExisting() === true) {
		// 	console.log("suggestion group found");
		// }
		if (searchPage.noDataAvailable.isExisting())
		{
			console.log("no data available");
		}

		else {
		browser.pause(5000);
		var totalcount=0;
		var allSugesstion = searchPage.suggestionGroup;
		for (let i = 0; i < allSugesstion.length; i++) {
				if(allSugesstion[i].getText().includes('Address 1')||allSugesstion[i].getText().includes('Billing Address 1')||allSugesstion[i].getText().includes('Billing City')){
					totalcount++;
				}
			}

			console.log('total count is '+totalcount);
			expect(totalcount>0).to.be.true;
		}
	}

	countOfSearchSuggestions () {
		//let suggestionCount = searchPage.countOfSuggestions();
		expect(searchPage.countOfSuggestions()).to.be.gt(0); // greater than zero means found some suggestion group

		// if(searchPage.countOfSuggestions.isExisting() === true) {
		// 	console.log("count found");
		// }
	}

	viewUniqueSearchSuggestions () {
		//browser.pause(7000);
		console.log('going to verify suggested ID');
		searchPage.highLightText.waitForDisplayed();
		expect(searchPage.highLightText.getText()).to.be.eql(this.ticketID);
	}

	viewSavedFilterPopover () {
		var enterKey =['\uE007']; // "\uE006", \uE007
		browser.keys(enterKey);
		
		expect(searchPage.filterPopover.isExisting()).to.be.true;
		browser.pause(2000);

	}

	viewSuggestedFilterPopover(){
		browser.pause(2000);
		expect(searchPage.suggestedFilterPopover.isExisting()).to.be.true;
		browser.pause(2000);
	}

	clickXOnFilterPopover () {
		searchPage.filterPopover.waitForDisplayed();
		searchPage.xIconOnFilterPopover.waitForDisplayed();
		browser.pause(2000);
		searchPage.xIconOnFilterPopover.waitForClickable();
		searchPage.xIconOnFilterPopover.click();
		browser.pause(2000);
		expect(searchPage.filterPopover.isExisting()).to.be.false;
		browser.pause(2000);
	}

	selectFirstSuggestedSubscriberResult () {
		this.searchCount = parseInt(this.getSpecificSubscriberCount());

		if (this.searchCount > 0) {
			searchPage.firstItemOfSuggestionGroup.waitForDisplayed();
			searchPage.firstItemOfSuggestionGroup.waitForClickable();
			browser.pause(2000);
			searchPage.firstItemOfSuggestionGroup.click();
			console.log("****First suggested result was clicked");
			browser.pause(2000);
		}
		else {
			console.log("no record available");
		}
		
	}
		
	selectFirstSuggestedCRMResult () {
		this.searchCount = parseInt(this.getSpecificCRMListCount());
		console.log('total searched items are'+this.searchCount);
		searchPage.firstItemOfSuggestionGroup.waitForDisplayed();
		searchPage.firstItemOfSuggestionGroup.waitForClickable();
		browser.pause(2000);
		searchPage.firstItemOfSuggestionGroup.click();
		console.log("****First suggested result was clicked in CRM");
		browser.pause(2000);
		
	}

	getSpecificSubscriberCount()
	{
		browser.pause(5000);
		let total = searchPage.totalResultsCountOnSubscriberPage.getText();
		//console.log('total records are :' + total);
		const myArray = total.split(' ');
		let position = myArray.indexOf("of") + 1;
		return myArray[position];
	}
	getSpecificCRMListCount()
	{
		browser.pause(5000);
		let total = searchPage.totalResultsCountOnCRMPage.getText();
		//console.log('total records are :' + total);
		const myArray = total.split(' ');
		let position = myArray.indexOf("of") + 1;
		return myArray[position];
	}

	verifyResultsAfterReload () {
		browser.pause(5000);
		if (this.searchCount > 0) {
			let updatedSearchCount = parseInt(this.getSpecificSubscriberCount());
			console.log('updated count'+updatedSearchCount);
			console.log('exected count'+this.searchCount);
			expect(updatedSearchCount).to.be.lt(this.searchCount); // lower than previous search count
			console.log("**Count should be lower after clicking suggested result");
			browser.pause(2000);
		}
		else {
			expect(searchPage.noDataAvailable.isExisting()).to.equal (true);
			console.log("no data was found...");
		}
	}

	verifyResultsAfterReloadCRM () {
		browser.pause(5000);
		let updatedSearchCount = parseInt(this.getSpecificCRMListCount());
		console.log('udated count is' + updatedSearchCount);
		expect(updatedSearchCount).to.be.lt(this.searchCount); // lower than previous search count
		console.log("**Count should be lower after clicking suggested result");
		browser.pause(2000);

	}

	addRandomTicket() {
		
		let subscriberName = "monika";
		var dropdownValueSelection = ['\uE015', '\uE007'];
		// searchPage.subscriberField.waitForDisplayed();
		searchPage.subscriberField.waitForClickable();
		searchPage.subscriberField.click();
		browser.pause(1000);
		searchPage.subscriberFieldNameSet.setValue(subscriberName);
		searchPage.autocompleteDialouge.waitForDisplayed({timeout : 50000});
		searchPage.autocompleteDialouge.waitForClickable({timeout : 50000});
		searchPage.autocompleteDialouge.click();
		browser.pause(2000);
		// "\uE015"		"ArrowDown"
		// var downKey = ['\uE015'];
		// browser.pause(500);
		// searchPage.subscriberField.keys(downKey);
		// browser.pause(500);
		// var enterKey =['\uE007']; 
		// browser.keys(enterKey);
		console.log("first record of monika selected");
		browser.pause(1000);
		// searchPage.ticketTypeField.waitForDisplayed();
		searchPage.ticketTypeField.waitForClickable();
		searchPage.ticketTypeField.click();
		searchPage.autocompleteDialouge.waitForDisplayed({timeout : 50000});
		searchPage.autocompleteDialouge.waitForClickable({timeout : 50000});
		//ServiceDeskPage.ticketTypeInput(ticketTypeElement).setValue('modem install');
		browser.pause(3000);
		// ServiceDeskPage.ticketTypeList.waitForDisplayed();
		// ServiceDeskPage.ticketTypeList.waitForClickable({timeout : 30000});
		// ServiceDeskPage.ticketType(flow).keys(dropdownValueSelection);
		browser.keys(dropdownValueSelection);
		// browser.pause(2000);
		// searchPage.subscriberField.keys(downKey);
		// browser.pause(1000);	
		// browser.keys(enterKey);
		// browser.pause(1000);
		console.log("ticket type selected");
		// searchPage.ticketSummaryField.waitForDisplayed();
		searchPage.ticketSummaryField.waitForClickable();
		searchPage.ticketSummaryField.click();
		searchPage.ticketSummaryField.setValue(" text "+this.randomStringGenerator());
		// browser.pause(1000);
		console.log("summary entered");
		searchPage.saveButton.waitForClickable();
		searchPage.saveButton.click();
		console.log("save button clicked");
		browser.pause(1000);		
		//expect(searchPage.confirmationMsg.getText()).to.eql("Saved Successfully");
		console.log("saved successfully");
		browser.pause(2000);
		// searchPage.closePopUp.waitForClickable();
		// searchPage.closePopUp.click();
		// browser.pause(8000);		
		let str = searchPage.ticketIDTab.getText();
		this.ticketID = str.substring(str.indexOf("#") + 1);
		browser.pause(1000);
	}

	enterTicketAttribInSearchBar () {

		browser.pause(3000);
		
		// ServiceDeskPage.btnAll.waitForClickable();
		// ServiceDeskPage.btnAll.click();
		// browser.pause(3000);

		searchPage.searchField.waitForClickable();
		
		searchPage.searchField.click();
		
		browser.pause(5000);

		var firstKey  =['\uE01B'];  //1
		var secondKey =['\uE01A'];  //0
		var thirdKey  =['\uE01D'];  //3

		// var firstKey  =['\uE01A'];  //2
		// var secondKey =['\uE01A'];  //0
		// var thirdKey  =['\uE01A'];  //3

		browser.keys(firstKey);
		browser.pause(1000);
		browser.keys(firstKey);
		browser.pause(1000);
		// browser.keys(thirdKey);
		// browser.pause(500);
		
		// searchPage.searchField.setValue("203");
		// searchPage.suggestionList.waitForDisplayed();
		searchPage.suggestionGroup[0].waitForDisplayed();
		console.log("suggestion list appears");
		browser.pause(5000);
	}


	enterTicketAttribInCRMSearchBar () {

		browser.pause(3000);
		
		// ServiceDeskPage.btnAll.waitForClickable();
		// ServiceDeskPage.btnAll.click();
		// browser.pause(3000);

		searchPage.searchField.waitForClickable();
		
		searchPage.searchField.click();
		
		browser.pause(5000);

		// var firstKey  =['\uE01C'];  //2
		// var secondKey =['\uE01A'];  //0
		// var thirdKey  =['\uE01D'];  //3

		var firstKey  =['\uE01B'];  //1
		var secondKey =['\uE01D'];  //3
		var thirdKey  =['\uE01B'];  //1

		browser.keys(firstKey);
		browser.pause(500);
	//	browser.keys(secondKey);
		browser.pause(500);
		browser.keys(thirdKey);
		browser.pause(500);
		
		// searchPage.searchField.setValue("203");
		searchPage.suggestionGroup[0].waitForDisplayed();
		console.log("suggestion list appears");
		browser.pause(5000);
	}
	selectCRMAll()
	{
		searchPage.btnCRMAllList.waitForDisplayed();
		searchPage.btnCRMAllList.waitForClickable();
		if(searchPage.btnCRMAllList.getAttribute('class').includes('Active')){}
		else{
		searchPage.btnCRMAllList.click();browser.pause(7000);}
	}

	enterUniqueTicketAttribInCRMSearchBar () {
		browser.pause(2000);
		
		searchPage.calendarControl.waitForDisplayed ();
		browser.pause(1000);
		searchPage.calendarControl.click ();

		browser.pause(1000);
		searchPage.allOptionOnCalendar.waitForDisplayed ();
		browser.pause(1000);
		searchPage.allOptionOnCalendar.click ();

		browser.pause(1000);
		searchPage.saveButtonOnCalendar.waitForDisplayed ();
		browser.pause(1000);
		searchPage.saveButtonOnCalendar.click ();

		browser.pause(1000);
		searchPage.searchField.waitForClickable();
		browser.pause(1000);
		searchPage.searchField.click();
		
		browser.pause(2000);

		// var firstKey  =['\uE01C'];  //2
		// var secondKey =['\uE01A'];  //0
		// var thirdKey  =['\uE01D'];  //3

		// var firstKey  =['\uE01B'];  //1
		// var secondKey =['\uE01D'];  //3
		// var thirdKey  =['\uE01B'];  //1

		// browser.keys(firstKey);
		// browser.pause(500);
		// browser.keys(secondKey);
		// browser.pause(500);
		// browser.keys(thirdKey);
		// browser.pause(500);
		
		searchPage.searchField.setValue(this.ticketID);
		browser.pause(10000);
		//searchPage.suggestionList.waitForDisplayed();
		//console.log("suggestion list appears");
		//browser.pause(5000);
	}


	randomStringGenerator() {
		
		var chars = "abcdefghijklmnopqrstuvwxyz";
		var string = "";
		for (var ii = 0; ii < 8; ii++) {
		  string += chars[Math.floor(Math.random() * chars.length)];
		}
		return string;	
	}

// ----- old -------------


	clickOnAnySubscriber(){
		browser.pause(7000);
		searchPage.selectFirstSubscriber.waitForDisplayed();
		searchPage.selectFirstSubscriber.click();
	}

	clickOnSecondSubscriber(){
		browser.pause(4000);
		searchPage.selectSecondSubscriber.waitForDisplayed();
		searchPage.selectSecondSubscriber.click();
	}

	openSpecificSubscruberDetails(subsName)
	{
		browser.pause(7000);
		var allsubsData = searchPage.allsubscribersData;
		console.log('total subscribers are: ' +allsubsData.length);
		for(var i=0; i<allsubsData.length; i++)
		{
			var extractedname = allsubsData[i].getText();
			//console.log('>>>>>>>>>>>>Extracted name from subscriber list is: ' + extractedname);
			if(extractedname == subsName)
			{	allsubsData[i].scrollIntoView();
				allsubsData[i].waitForClickable({ timeout: 7000 });
				allsubsData[i].click();
				break;
			}
		}
	}

	refreshSubListOnError()
	{
		browser.pause(5000);
		if(searchPage.pageLoadError.isExisting())
		{
			if(searchPage.pageLoadError.getText().includes('Sorry, something went wrong. Please try again.'))
			{
				searchPage.btnSubListRefresh(searchPage.pageLoadError).click();
			}
		}
		browser.pause(5000);
	}
	
	getSpecificSubscriberListCount()
	{
		browser.pause(5000);
		let total = searchPage.totalcount.getText();
		//console.log('total records are :' + total);
		const myArray = total.split(' ');
		let position = myArray.indexOf("of") + 1;
		return myArray[position];
	}

	clickAllSubscriberList()
	{
		searchPage.btn_PastDue.waitForExist();
		searchPage.btn_PastDue.waitForDisplayed();
		searchPage.btn_PastDue.click();
		searchPage.btn_All.waitForDisplayed();
		searchPage.btn_All.waitForExist();
		searchPage.btn_All.click();
		browser.pause(7000);
	}

	clickSortingButton(btn_sortlist){
		//SubListPage.btn_All.waitForExist();
		//SubListPage.btn_All.waitForDisplayed();
		//SubListPage.btn_All.click();
		browser.pause(4000);
		while(searchPage.sortColumnIndicatorFlag.isExisting()){
			searchPage.colCustomerIdHeader.click();
			browser.pause(2000);
		}
		switch(btn_sortlist){
			
			case "All":

				searchPage.btn_All.waitForExist();
				searchPage.btn_All.waitForDisplayed();
			    searchPage.btn_All.click();
				console.log('I click on: ' + btn_sortlist);
				break;
			case "Paid up":

				searchPage.btn_PaidUp.waitForExist();
				searchPage.btn_PaidUp.waitForDisplayed();
			    searchPage.btn_PaidUp.click();
				console.log('I click on: ' + btn_sortlist);
										
				break;
			case "Due":
			
			    searchPage.btn_Due.waitForExist();
				searchPage.btn_Due.waitForDisplayed();
				searchPage.btn_Due.click();
				console.log('I click on: ' + btn_sortlist);
				
				
				break;
			case "Past Due":
				/*SubListPage.btn_All.waitForExist();
				SubListPage.btn_All.isVisible();
				SubListPage.btn_PastDue.moveToObject();//changing focus
				SubListPage.btn_All.click(); //reseting all pre clicked buttons*/
				searchPage.btn_PastDue.waitForExist();
				searchPage.btn_PastDue.waitForDisplayed();
				searchPage.btn_PastDue.click();
			    console.log('I click on: ' + btn_sortlist);				
				
				
				break;
			case "Suspended":
				/*SubListPage.btn_All.waitForExist();
				SubListPage.btn_All.isVisible();
				SubListPage.btn_PastDue.moveToObject();//changing focus
				SubListPage.btn_All.click(); //reseting all pre clicked buttons*/
				searchPage.btn_Suspended.waitForExist();
				searchPage.btn_Suspended.waitForDisplayed();
				searchPage.btn_Suspended.click();
			    console.log('I click on: ' + btn_sortlist);
				
				
				break;
			case "Hibernated":
				/*SubListPage.btn_All.waitForExist();
				SubListPage.btn_All.isVisible();
				SubListPage.btn_PastDue.moveToObject();//changing focus
				SubListPage.btn_All.click(); //reseting all pre clicked buttons*/
				searchPage.btn_Hibernated.waitForExist();
				searchPage.btn_Hibernated.waitForDisplayed();
				searchPage.btn_Hibernated.click();
			    console.log('I click on: ' + btn_sortlist);
				
				
				break;
			case "Prospect":
				/*SubListPage.btn_All.waitForExist();
				SubListPage.btn_All.isVisible();
				SubListPage.btn_PastDue.moveToObject();//changing focus
				SubListPage.btn_All.click(); //reseting all pre clicked buttons*/
				searchPage.btn_Prospect.waitForExist();
				searchPage.btn_Prospect.waitForDisplayed();
				searchPage.btn_Prospect.click();
			    console.log('I click on: ' + btn_sortlist);
				break;
			case "Archived":
				/*SubListPage.btn_All.waitForExist();
				SubListPage.btn_All.isVisible();
				SubListPage.btn_PastDue.moveToObject();//changing focus
				SubListPage.btn_All.click(); //reseting all pre clicked buttons*/
				searchPage.btn_Archived.waitForExist();
				searchPage.btn_Archived.waitForDisplayed();
				searchPage.btn_Archived.click();
			    console.log('I click on: ' + btn_sortlist);
				break;
			default:
				console.log('Nothing to click!');
		}
	}
	

	changeTableView(tableView){
		searchPage.btn_PaidUp.click();
		browser.pause(5000);
		searchPage.meatball_menu.waitForDisplayed();
        searchPage.meatball_menu.click();
        browser.pause(2000);
		switch(tableView){
			
			case "Comfortable":
							
				searchPage.tableViewComfortable.waitForDisplayed();
				searchPage.tableViewComfortable.click();
				browser.pause(2000);
				break;
			case "Compact":
				
				searchPage.tableViewCompact.waitForDisplayed();
				searchPage.tableViewCompact.click();
				browser.pause(2000)
				break;
			case "Cozy":
				
				searchPage.tableViewCozy.waitForDisplayed();
				searchPage.tableViewCozy.click();
				browser.pause(2000)
				break;
		}
		console.log('I set row density to '+ tableView);
		
	}

	clickOnAdditionalInfoTab(){
		browser.pause(7000);
		searchPage.btnAdditionalInfo.waitForDisplayed();
		searchPage.btnAdditionalInfo.click();
	}

	clickOnOperatingSystem(){
		searchPage.operatingSystem.waitForDisplayed();
		searchPage.operatingSystem.click();
	}

	gotoMarketingSettings(){
		searchPage.btnAppIcon.click();
		browser.pause(2000);
		searchPage.btnMarketingFromMenu.waitForDisplayed();
		searchPage.btnMarketingFromMenu.click();
		browser.pause(2000);
	}

	UncheckSourceAndSourceDetails()
	{
		browser.pause(4000);
		if(searchPage.displaySourceAndSourceDetails.getAttribute('value')=='true')
		{
			searchPage.displaySourceAndSourceDetails.click();
			browser.pause(2000);
			searchPage.btnSaveTopMenu.click();
		}
		browser.pause(4000);
		searchPage.btnCloseTopMenu.click();
	}
	
	checkSourceAndSourceDetails(){
		browser.pause(4000);
		if(searchPage.displaySourceAndSourceDetails.getAttribute('value')=='false')
		{
			searchPage.displaySourceAndSourceDetails.click();
			browser.pause(2000);
			searchPage.btnSaveTopMenu.click();
		}
		browser.pause(4000);
		searchPage.btnCloseTopMenu.click();
	}

	clickOnSourceField(){
		searchPage.source.waitForDisplayed();
		searchPage.source.click();
	}

	clickOnSourceDetailsField(){
		searchPage.sourceDetails.waitForDisplayed();
		searchPage.sourceDetails.click();
	}

	selectNewOption(){
		browser.pause(2000);
		searchPage.selectSourceItem('New...').click();
	}

	inputSourceField(){
		browser.pause(2000);
		this.source = 'AS' + (Math.floor(new Date() / 1000));
		searchPage.popSourceInput.click();
		searchPage.popSourceInput.setValue(this.source);
	}
	

	popSave(){
		browser.pause(2000);
		searchPage.popbtnSave.click();
	}

	selectOS(){
		browser.pause(2000);
		searchPage.selectOSItem('Unix').click();
	}

	selectSource(){
		browser.pause(2000);
		searchPage.selectSourceItem('Insta').click();
	}

	selectSource(source){
		browser.pause(2000);
		console.log('>>>>>>>>>>Testing of source: '+source);
		searchPage.selectSourceItem(source).click();
	}

	provideSourceDetails(){
		this.sourceDetails = 'ASD' + (Math.floor(new Date() / 1000));
		browser.pause(2000);
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		searchPage.sourceDetails.click();
		searchPage.sourceDetails.keys(clearKeys);
		browser.pause(1000);
		searchPage.sourceDetails.setValue(this.sourceDetails);
		browser.pause(1000);
	}
	
	clickSaveAdditionalInfo(){
		browser.pause(2000);
		searchPage.btnSaveAdditionalDetails.click();
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
			searchPage.popSourceInput.waitForDisplayed();
			searchPage.popSourceInput.click();
			searchPage.popSourceInput.setValue(table[i][0]);
			browser.pause(1000);
			searchPage.popbtnSave.click();
			searchPage.confirmationMsg.waitForDisplayed();
			var msg = searchPage.confirmationMsg.getText();
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
		searchPage.sourceDetails.click();
		searchPage.sourceDetails.keys(clearKeys);
		browser.pause(1000);
		searchPage.sourceDetails.setValue('abc123');
		browser.pause(1000);
		var Valstatus =  searchPage.sourceDetailsValidation.isExisting();
		this.sourceDetails = Valstatus;
		browser.pause(1000);
		searchPage.sourceDetails.click();
		searchPage.sourceDetails.keys(clearKeys);
		browser.pause(1000);
		searchPage.sourceDetails.setValue('abc');
		Valstatus =  searchPage.sourceDetailsValidation.isExisting();
		this.sourceDetails = this.sourceDetails +"," +  Valstatus;
		browser.pause(1000);
		searchPage.sourceDetails.click();
		searchPage.sourceDetails.keys(clearKeys);
		browser.pause(1000);
		searchPage.sourceDetails.setValue('123');
		Valstatus =  searchPage.sourceDetailsValidation.isExisting();
		this.sourceDetails = this.sourceDetails +"," +  Valstatus;
		browser.pause(1000);
		searchPage.sourceDetails.click();
		searchPage.sourceDetails.keys(clearKeys);
		browser.pause(1000);
		searchPage.sourceDetails.setValue('0.0');
	}

	verifySublistTitle(){
		var title;
		searchPage.sublistRibbon.waitForExist();
		searchPage.sublistRibbon.waitForDisplayed();
		title = searchPage.sublistRibbon.getText();
		expect(title.substr(0,11)).to.eql('Subscribers');
	}
	
	verifyButtonavailibility(buttons){		
		browser.pause(5000);
		var allbuttons = buttons.raw();
		console.log('Total buttons are: '+ allbuttons.length);
		searchPage.btn_All.waitForDisplayed();
		expect(searchPage.btn_All.getText()).to.eql(allbuttons[0][0]);
		expect(searchPage.btn_PaidUp.getText()).to.eql(allbuttons[1][0]);// Widget no longer exists on dashboard  
		expect(searchPage.btn_Due.getText()).to.eql(allbuttons[2][0]);
		expect(searchPage.btn_PastDue.getText()).to.eql(allbuttons[3][0]); // Widget no longer exists on dashboard
		expect(searchPage.btn_Suspended.getText()).to.eql(allbuttons[4][0]);		
		expect(searchPage.btn_Hibernated.getText()).to.eql(allbuttons[5][0]);
		expect(searchPage.btn_Prospect.getText()).to.eql(allbuttons[6][0]);
		console.log('subscriber list buttons verified');
	}
	
	verifyListSorting(colstatus){
		var totalrecords = this.getSpecificSubscriberListCount();
		browser.pause(4000);
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
				buttonactive = searchPage.btn_PaidUp.getAttribute('class').includes('active');
				results = searchPage.svgStatusIcon(expectedStatus);
				break;
			case "Past Due":
				expectedStatus = 'text-danger';
				buttonactive = searchPage.btn_PastDue.getAttribute('class').includes('active');
				results = searchPage.PastDueIcon;
				break;
			case "Due":
				expectedStatus = 'text-warning';
				buttonactive = searchPage.btn_Due.getAttribute('class').includes('active');
				results = searchPage.svgStatusIcon(expectedStatus);
				break;
			case "Suspended":
				expectedStatus = 'text-danger';
				buttonactive = searchPage.btn_Suspended.getAttribute('class').includes('active');
				results = searchPage.SuspendedIcon;
				break;
			case "Hibernated":
				expectedStatus = 'text-primary';
				buttonactive = searchPage.btn_Hibernated.getAttribute('class').includes('active');
				results = searchPage.svgStatusIcon(expectedStatus);
				break;
			case "Prospect":
				expectedStatus = 'text-light';
				buttonactive = searchPage.btn_Prospect.getAttribute('class').includes('active');
				results = searchPage.svgStatusIcon(expectedStatus);
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
		searchPage.meatball_menu.waitForDisplayed();
		searchPage.meatball_menu.click();
		browser.pause(5000);
		//var selection = tableView.toLowerCase();
		tableView = tableView.replace(/['"]+/g, '');
		var state;
		
		 if (tableView === "Comfortable"){
			state = searchPage.tableView(searchPage.tableViewComfortable).getAttribute('class');
			console.log('View updated to: ' + tableView);
			expect(state.includes('text-success')).to.be.true;
		 }
		 else {
			state = searchPage.tableView(searchPage.tableViewCozy).getAttribute('class');
			console.log('View updated to: ' + tableView);
			expect(state.includes('text-success')).to.be.true;

		 }
	}

	verifyAdditionalInfoTabVisible()
	{
		browser.pause(2000);
		expect(searchPage.btnAdditionalInfo.isExisting()).to.be.true;
		expect(searchPage.setupDate.isExisting()).to.be.true;
	}

	verifySetUpDateDisabled()
	{
		browser.pause(2000);
		expect(searchPage.setupDate.getAttribute('class').includes('Mui-disabled')).to.be.true;
	}

	verifyListOfOS(os)
	{
		browser.pause(3000);
		var allOS = os.raw();
		console.log('Total os are: '+ allOS.length);
		var allItems = searchPage.allOSListItems;
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
		expect(searchPage.isSourceItemExist(table[0][0]).isExisting()).to.be.true;
		expect(searchPage.isSourceItemExist(table[1][0]).isExisting()).to.be.true;
		expect(searchPage.isSourceItemExist(table[2][0]).isExisting()).to.be.true;
		expect(searchPage.isSourceItemExist(table[3][0]).isExisting()).to.be.true;
		expect(searchPage.isSourceItemExist(table[4][0]).isExisting()).to.be.true;
		expect(searchPage.isSourceItemExist(table[5][0]).isExisting()).to.be.true;
		expect(searchPage.isSourceItemExist(table[6][0]).isExisting()).to.be.true;
		expect(searchPage.isSourceItemExist(table[7][0]).isExisting()).to.be.true;
		expect(searchPage.isSourceItemExist(table[8][0]).isExisting()).to.be.true;
	}

	verifySourceAndSourceDetailsAreNotPresent()
	{
		browser.pause(2000);
		expect(searchPage.source.isExisting()).to.be.false;
		expect(searchPage.sourceDetails.isExisting()).to.be.false;
	}

	verifySourceAndSourceDetailsStatus()
	{
		browser.pause(2000);
		expect(searchPage.source.isExisting()).to.be.true;
		expect(searchPage.sourceDetails.isExisting()).to.be.true;
	}

	verifySourceFieldAdded()
	{
		var msg;
		searchPage.confirmationMsg.waitForDisplayed();
		msg = searchPage.confirmationMsg.getText();
		expect(msg).to.eql(this.sourceConfMsg);
		browser.pause(3000);
		searchPage.source.click();
		browser.pause(3000);
		expect(searchPage.isSourceItemExist(this.source).isExisting()).to.be.true;
	}

	verifyPopUpSaveButtonDisabled()
	{
		browser.pause(2000);
		expect(searchPage.popbtnSave.getAttribute('class').includes('Mui-disabled')).to.be.true;
	}

	verifyEmptyFieldErrorMsg()
	{
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		searchPage.popSourceInput.click();
		searchPage.popSourceInput.setValue('Test of required message');
		searchPage.popSourceInput.keys(clearKeys);
		expect(searchPage.popRequiredFieldMsg.getText()).to.eql('Source is a required field');
		
	}

	verifyAdditionalInfoSavedSuccessfully()
	{
		browser.pause(4000);
		expect(searchPage.operatingSystem.getText()).to.eql('Unix');
		expect(searchPage.source.getText()).to.eql('Insta');
		expect(searchPage.sourceDetails.getAttribute('value')).to.eql(this.sourceDetails);
	}

	verifySourceDetailsInputValidation()
	{
		browser.pause(2000);
		expect(searchPage.sourceDetailsValidation.isExisting()).to.be.true;
		expect(this.sourceDetails).to.eql('false,false,false');//result for alphanumeric values
	}
	
}
module.exports = new searchActions();
