var LoginPage = require('../pageobjects/login.page');
var _CRMaddTaskPage = require('../pageobjects/_CRMaddTask.page');
var ServiceDeskPage = require('../pageobjects/serviceDesk.page');
var Utils = require('./utils');
var subscriberDetailsBillingActions = require('./subscriberDetailsBillingActions');
const { openInvoiceSettingFromTopRightMenu } = require('./subscriberDetailsBillingActions');
const { saveTicketDetails } = require('./serviceDeskActions');
const SDaddNotePage = require('../pageobjects/SDaddNote.page');
// const _CRMaddNotePage = require('../pageobjects/_CRMaddNote.page');

var expect = require('chai').expect; 
//var should = require('chai').should();

class _CRMaddTaskActions{
	
	constructor(){
		this.randomNumber;
		this.singleTaskText;
		this.firstTask;
		this.secondTask;
		this.ticketID;
	}

	openServiceDesk(){
		/*  ServiceDeskPage.subscribersmenu.waitForExist();
			ServiceDeskPage.subscribersmenu.waitForDisplayed();
			ServiceDeskPage.subscribersmenu.click();
		*/  
			browser.pause(5000);
			// ServiceDeskPage.serviceDeskmenu.waitForExist();
			_CRMaddTaskPage.serviceDeskmenu.waitForExist();
			// ServiceDeskPage.serviceDeskmenu.waitForDisplayed();
			_CRMaddTaskPage.serviceDeskmenu.waitForDisplayed();
			// ServiceDeskPage.serviceDeskmenu.click();
			_CRMaddTaskPage.serviceDeskmenu.click();
			browser.pause(2000);
			console.log('I open CRM Page');			
	}

	goToTickets()
	{
		browser.pause(3000);
        // ServiceDeskPage.tabTickets.waitForDisplayed();
        _CRMaddTaskPage.tabTickets.waitForDisplayed();
		// ServiceDeskPage.tabTickets.waitForClickable();
		_CRMaddTaskPage.tabTickets.waitForClickable();
		// ServiceDeskPage.tabTickets.click();
		_CRMaddTaskPage.tabTickets.click();
		// ServiceDeskPage.btnAll.waitForClickable();
		_CRMaddTaskPage.btnAll.waitForClickable();
		// ServiceDeskPage.btnAll.click();		
		_CRMaddTaskPage.btnAll.click();		
		browser.pause(3000);
		// ServiceDeskPage.btnResolved.waitForClickable();
		_CRMaddTaskPage.btnResolved.waitForClickable();
		// if(ServiceDeskPage.btnResolved.getAttribute('class').includes('active'))
		if(_CRMaddTaskPage.btnResolved.getAttribute('class').includes('active'))
		{
			_CRMaddTaskPage.btnResolved.click();
			browser.pause(5000);
		}
	}

	selectFirstRecord(){
		this.waitForLoader();
		browser.pause(2000);
		if (ServiceDeskPage.noDataAvailable.isExisting() === true)
		{
				console.log("....no record/ticket found....");
	
				ServiceDeskPage.calendarControl.waitForClickable();
				ServiceDeskPage.calendarControl.click();
				browser.pause(1000);
				ServiceDeskPage.calendarFilterOptionAll.waitForClickable();
				ServiceDeskPage.calendarFilterOptionAll.click();
				browser.pause(1000);
				ServiceDeskPage.btnApplyTimePeriod.isClickable();
				ServiceDeskPage.btnApplyTimePeriod.click();
				// // add a new ticket
				// SDaddTaskActions.openTicketOptionFromPlusIcon ();
				// SDaddTaskActions.addNewTicket ();				
		}
		if(_CRMaddTaskPage.btnResolved.getAttribute('class').includes('active'))
		{
			_CRMaddTaskPage.btnResolved.click();
			browser.pause(5000);
		}

		// this.ticketID = ServiceDeskPage.tablServiceDeskRowOne.getText();
		this.ticketID = _CRMaddTaskPage.tablServiceDeskRowOne.getText();
		// this.ticketType = ServiceDeskPage.tablServiceDesktTicketType.getText();
		// this.ticketSummary = ServiceDeskPage.tablServiceDesktTicketSummary.getText();
		// ServiceDeskPage.tablServiceDeskRowOne.click();
		_CRMaddTaskPage.tablServiceDeskRowOne.click();
		//console.log('I click on first row!');
		browser.pause(5000);
	}

	waitForLoader(){
		
		do{ //Do-While to make sure dot loader is disappeared and rows are loaded based on selected status
				
			console.log('Records still loading...')
			browser.pause(2000);
			
		 }while (_CRMaddTaskPage.loader.isDisplayed() === true)
		
	}


	clickaddTaskIcon () {
		browser.pause(4000);
		_CRMaddTaskPage.addTaskIcon.waitForDisplayed();
		_CRMaddTaskPage.addTaskIcon.click();
		browser.pause(1000);
	}
	

	saveSingleTaskForTicket() {
		this.clickaddTaskIcon();
		browser.pause(2000);
		this.singleTaskText = "test task for technician "+ this.randomStringGenerator();
		_CRMaddTaskPage.taskTextBox.waitForDisplayed();
		_CRMaddTaskPage.taskTextBox.setValue(this.singleTaskText);
		browser.pause(2000);
		_CRMaddTaskPage.tickIconForTask.waitForDisplayed();
		_CRMaddTaskPage.tickIconForTask.click();
		browser.pause(2000);
		// SDaddTaskPage.btnSaveOnTicketDocker.waitForDisplayed();
		// SDaddTaskPage.btnSaveOnTicketDocker.click();
		this.saveButtonOnTicketDocker();
		
	}


	saveMultipleTasksForTicket(number){

		if (number === "1") {
			this.firstTask = "technician task "+number+ this.randomStringGenerator();
			this.clickaddTaskIcon();
			browser.pause(2000);
			_CRMaddTaskPage.taskTextBox.waitForDisplayed();
			_CRMaddTaskPage.taskTextBox.setValue(this.firstTask);
		}

		if (number === "2") {
			this.secondTask  = "test task 2 for technician "+ this.randomStringGenerator();
			this.clickaddTaskIcon();
			browser.pause(2000);
			_CRMaddTaskPage.taskTextBox.waitForDisplayed();
			_CRMaddTaskPage.taskTextBox.setValue(this.secondTask);
		}
		// adding first task

		browser.pause(2000);
		_CRMaddTaskPage.tickIconForTask.waitForDisplayed();
		_CRMaddTaskPage.tickIconForTask.click();
		browser.pause(2000);
		
		// adding second task

		// this.clickaddTaskIcon();
		// browser.pause(2000);
		// SDaddTaskPage.taskTextBox.waitForDisplayed();
		// SDaddTaskPage.taskTextBox.setValue(this.secondTask);
		// browser.pause(4000);
		// console.log("waiting for Second icon");
		// SDaddTaskPage.tickIconForTask.waitForDisplayed();
		// console.log("Second icon displayed");
		// browser.pause(2000);
		// SDaddTaskPage.tickIconForTask.click();
		// browser.pause(2000);

		this.saveButtonOnTicketDocker ();
	}
	
	
	//save ticket
	saveButtonOnTicketDocker () {
		_CRMaddTaskPage.btnSaveOnTicketDocker.waitForDisplayed();
		_CRMaddTaskPage.btnSaveOnTicketDocker.click();
		// browser.pause(1000);
		_CRMaddTaskPage.confirmationMsg.waitForDisplayed();
		expect(_CRMaddTaskPage.confirmationMsg.getText()).to.eql("Saved Successfully");
		
	}


	verifySingleTaskForTicket() {
		browser.pause(2000);
		expect(_CRMaddTaskPage.addedTasks(this.singleTaskText)).to.eql(this.singleTaskText);
	}
	
	verifyAllAddedTasksForTicket() {
		browser.pause(2000);
		expect(_CRMaddTaskPage.addedTasks(this.firstTask)).to.eql(this.firstTask);
		browser.pause(1000);
		expect(_CRMaddTaskPage.addedTasks(this.secondTask)).to.eql(this.secondTask);
		browser.pause(1000);
	}
	
	randomStringGenerator() {

		var chars = "1234567890";
		var string = "";
		for (var ii = 0; ii < 5; ii++) {
		string += chars[Math.floor(Math.random() * chars.length)];
		}

		return string;
}

	addNewTicket () {
		var keyboardKeys = ['\uE015','\uE006'];
		var downArrowKey = ['\ue015'];// arrow down
		var enterKey = ['\ue007'];// enter
		browser.pause(3000);
		ServiceDeskPage.searchName.waitForDisplayed();
		//browser.pause(3000);
		ServiceDeskPage.searchName.setValue("a");
		browser.pause(5000);
		ServiceDeskPage.autocompleteDialouge.waitForDisplayed();
		browser.keys(downArrowKey);
		//ServiceDeskPage.searchName.keys(keyboardKeys[0]);
		browser.pause(500);
		browser.keys(enterKey);
		//ServiceDeskPage.searchName.keys(keyboardKeys[1]);
		
		browser.pause(2000);
		_CRMaddTaskPage.ticketTypeInput.waitForDisplayed();
		browser.pause(3000);
		_CRMaddTaskPage.ticketTypeInput.click();
		browser.pause(3000);
		browser.keys(downArrowKey);	
		//SDaddTaskPage.ticketTypeInput.keys(keyboardKeys[0]);
		browser.pause(500);
		browser.keys(enterKey);
		//SDaddTaskPage.ticketTypeInput.keys(keyboardKeys[1]);
		browser.pause(1000);
		
		_CRMaddTaskPage.ticketSummary.waitForDisplayed();
		_CRMaddTaskPage.ticketSummary.click();
		browser.pause(2000);
		_CRMaddTaskPage.ticketSummary.setValue("Test Summary "+this.randomStringGenerator());	
		browser.pause(3000);		
		ServiceDeskPage.searchName.keys(keyboardKeys[1]);
		browser.pause(1000);

		_CRMaddTaskPage.saveButtonOnTicket.waitForDisplayed();
		_CRMaddTaskPage.saveButtonOnTicket.waitForClickable();
		_CRMaddTaskPage.saveButtonOnTicket.click();
		console.log("@@@@ Ticket Saved");

		//SDaddTaskPage.confirmationMsg.waitForDisplayed();

		//expect(SDaddTaskPage.confirmationMsg.getText()).to.eql("Saved Successfully");
		browser.pause(1000);

		
		// console.log(_CRMaddTaskPage.ticketID.getText());
		console.log(_CRMaddTaskPage.ticketID.getText());

		
	}

	openTicketOptionFromPlusIcon (){
		_CRMaddTaskPage.btnPlusInHeader.waitForDisplayed();
		_CRMaddTaskPage.btnPlusInHeader.click();
		browser.pause(1000);
		_CRMaddTaskPage.topMenuItemTicket.waitForDisplayed();
		_CRMaddTaskPage.topMenuItemTicket.click();		
		browser.pause(3000);
	}



	goToISPLogs (){
		_CRMaddTaskPage.btnAppIcon.waitForDisplayed();
		browser.pause(1000);
		_CRMaddTaskPage.btnAppIcon.click();
		
		_CRMaddTaskPage.ISPLogs.waitForDisplayed();
		browser.pause(1000);
		_CRMaddTaskPage.ISPLogs.click();
		browser.pause(1000);

		_CRMaddTaskPage.ISPTab.waitForDisplayed();
		browser.pause(1000);
		_CRMaddTaskPage.ISPTab.click();
		browser.pause(3000);
	}



	verifyTaskInISPLogs(){		
		_CRMaddTaskPage.taskInISPLogs.waitForDisplayed();
		browser.pause(2000);
		let taskTextInISPLogs = _CRMaddTaskPage.taskInISPLogs.getText();
		// expect(taskTextInISPLogs).to.include(this.singleTaskText);
		expect(taskTextInISPLogs).to.include("Login via Visp");
		browser.pause(1000);
	}


	openTicketActivity() {
		_CRMaddTaskPage.openTicketActivity.waitForDisplayed();
		browser.pause(2000);
		_CRMaddTaskPage.openTicketActivity.click();
		browser.pause(1000);
	}



	verifyTaskInTicketActivity() {
		_CRMaddTaskPage.ticketActivityCaption.waitForDisplayed();
		browser.pause(2000);
		let taskInActivity = _CRMaddTaskPage.taskInTicketActivity.getText();		
		expect(taskInActivity).to.include(this.singleTaskText);
		browser.pause(1000);
	}



}
module.exports = new _CRMaddTaskActions();
