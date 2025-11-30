var LoginPage = require('../pageobjects/login.page');
// const serviceDeskPage = require('../pageobjects/serviceDesk.page');
var SubscriberDetailsNotesPage = require('../pageobjects/subscriberDetailsNotes.page');
var ServiceDeskPage = require('../pageobjects/serviceDesk.page');
var SDcalendarSearchPage = require('../pageobjects/SDCalendarSearch.page');
var SubListPage = require('../pageobjects/subscriberlist.page');
var Utils = require('./utils');
const { util } = require('chai');
var expect = require('chai').expect; 
var should = require('chai').should();

class SDcalendarSearchActions{

	constructor(){
		this.comment;
		this.ticketUpdateInfoMessage = 'Saved Successfully';
		this.ticketID;
		this.ticketType;
		this.ticketSummary;
		this.priorityContent;
		this.summaryContent;
		this.typeContent;
		this.customfield;
		this.formattedDate;
		this.dateAdded;
		this.shortestDate;
		this.greatestDate;
		this.columnDateAdded=false;
	}
	
    openVispApp(){
		ServiceDeskPage.open();
		
	}
	
	loginToVisp(creds){
		var credentials = creds.raw();//storing datatable as 2D array
		Utils.login(credentials[0][0], credentials[0][1]);
	/*	LoginPage.username.waitForDisplayed();
		LoginPage.username.setValue(credentials[0][0]);
		LoginPage.passwordf.setValue(credentials[0][1]);
		LoginPage.logbutton.click();
		//Utils.closeRatingPopup();
		//Utils.closeWalkMe();
		console.log('I login using given credentials');
		browser.maximizeWindow();*/
	}
	
	openTicketInterface(accessSource){
		browser.pause(1000);
		//Utils.closeRatingPopup();
		switch(accessSource){
			case "fromSubscriberList":			
				var menu = SubListPage.dotMenu;
				menu.waitForDisplayed();
				menu.moveTo();
				menu.click();
				browser.pause(10000);
				SubListPage.menuItemTicket.waitForDisplayed();
				SubListPage.menuItemTicket.click();
				break;
			case "fromTopMenu":
				browser.pause(5000);
				//DashboardPage.dashboardTitle.waitForDisplayed();//Dashboard loading is slow so this sync it.
				ServiceDeskPage.btnAddTicket.waitForDisplayed();
			    ServiceDeskPage.btnAddTicket.click();
				browser.pause(1000);
				ServiceDeskPage.topMenuItemTicket.waitForDisplayed();
				ServiceDeskPage.topMenuItemTicket.click();
			break;
		}
		
	}

	openServiceDesk(){
	/*  ServiceDeskPage.subscribersmenu.waitForExist();
		ServiceDeskPage.subscribersmenu.waitForDisplayed();
		ServiceDeskPage.subscribersmenu.click();
	*/  
		browser.pause(5000);
		ServiceDeskPage.serviceDeskmenu.waitForExist();
		ServiceDeskPage.serviceDeskmenu.waitForDisplayed();
		ServiceDeskPage.serviceDeskmenu.click();
		browser.pause(2000);
		console.log('I open service desk');
		
	}	
	
	applyDateFilter(filterOption){

		Utils.closeRatingPopup();
		Utils.closeWalkMe();
		
		// var otherStatus = 'complete';
		this.waitForLoader();
		//ServiceDeskPage.tabTickets.waitForDisplayed();
		//ServiceDeskPage.tabTickets.click();
		ServiceDeskPage.btnAll.waitForDisplayed();
		ServiceDeskPage.btnAll.click();
		browser.pause(2000);
		// ServiceDeskPage.btnPending.click();
		// browser.pause(2000);
		// ServiceDeskPage.btnOpen.click();
		// browser.pause(2000);
		// ServiceDeskPage.btnResolved.click();
		// browser.pause(2000);
		switch(filterOption){
			
			case "Today":
				ServiceDeskPage.btnPending.waitForDisplayed();
				ServiceDeskPage.btnPending.click();
				// browser.pause(2000);
				console.log('I select: ' + filterOption);
				break;
			case "Open":
				ServiceDeskPage.btnOpen.waitForDisplayed();
				ServiceDeskPage.btnOpen.click();
				console.log('I select: ' + filterOption);
				break;
			case "Resolved":
				ServiceDeskPage.btnResolved.waitForDisplayed();
				ServiceDeskPage.btnResolved.click();
				console.log('I select: ' + filterOption);
				break;
			case "Others":
				ServiceDeskPage.btnOthers.waitForDisplayed();
				ServiceDeskPage.btnOthers.click();
				browser.pause(2000);
				ServiceDeskPage.btnOthersDropdown(otherStatus).waitForDisplayed();
				ServiceDeskPage.btnOthersDropdown(otherStatus).click();
				console.log('I select: ' + filterOption);
				break;
			default:
			console.log('No records found!');
			
		}
		console.log('I choose filter');
	}

// ----------------------------------


	chooseFilter(filterOption){

		Utils.closeRatingPopup();
		Utils.closeWalkMe();
		
		var otherStatus = 'complete';
		this.waitForLoader();
		//ServiceDeskPage.tabTickets.waitForDisplayed();
		//ServiceDeskPage.tabTickets.click();
		ServiceDeskPage.btnAll.waitForDisplayed();
		ServiceDeskPage.btnAll.click();
		browser.pause(2000);
		ServiceDeskPage.btnPending.click();
		browser.pause(2000);
		ServiceDeskPage.btnOpen.click();
		browser.pause(2000);
		ServiceDeskPage.btnResolved.click();
		browser.pause(2000);
		switch(filterOption){
			
			case "Pending":
				ServiceDeskPage.btnPending.waitForDisplayed();
				ServiceDeskPage.btnPending.click();
				// browser.pause(2000);
				console.log('I select: ' + filterOption);
				break;
			case "Open":
				ServiceDeskPage.btnOpen.waitForDisplayed();
				ServiceDeskPage.btnOpen.click();
				console.log('I select: ' + filterOption);
				break;
			case "Resolved":
				ServiceDeskPage.btnResolved.waitForDisplayed();
				ServiceDeskPage.btnResolved.click();
				console.log('I select: ' + filterOption);
				break;
			case "Others":
				ServiceDeskPage.btnOthers.waitForDisplayed();
				ServiceDeskPage.btnOthers.click();
				browser.pause(2000);
				ServiceDeskPage.btnOthersDropdown(otherStatus).waitForDisplayed();
				ServiceDeskPage.btnOthersDropdown(otherStatus).click();
				console.log('I select: ' + filterOption);
				break;
			default:
			console.log('No records found!');
			
		}
		console.log('I choose filter');
	}
	

	choosePriority (filterOption){

		Utils.closeRatingPopup();
		Utils.closeWalkMe();
		
		// var otherStatus = 'complete';
		this.waitForLoader();
		//ServiceDeskPage.tabTickets.waitForDisplayed();
		//ServiceDeskPage.tabTickets.click();
		ServiceDeskPage.btnHigh.waitForDisplayed();
		ServiceDeskPage.btnHigh.click();
		browser.pause(2000);
		ServiceDeskPage.btnNormal.click();
		browser.pause(2000);
		ServiceDeskPage.btnLow.click();
		browser.pause(2000);
		// ServiceDeskPage.btnResolved.click();
		// browser.pause(2000);
		switch(filterOption){
			
			case "High":
				ServiceDeskPage.btnHigh.waitForDisplayed();
				ServiceDeskPage.btnHigh.click();
				// browser.pause(2000);
				console.log('I select: ' + filterOption);
				break;
			case "Normal":
				ServiceDeskPage.btnNormal.waitForDisplayed();
				ServiceDeskPage.btnNormal.click();
				console.log('I select: ' + filterOption);
				break;
			case "Low":
				ServiceDeskPage.btnLow.waitForDisplayed();
				ServiceDeskPage.btnLow.click();
				console.log('I select: ' + filterOption);
				break;
			// case "Others":
			// 	ServiceDeskPage.btnOthers.waitForDisplayed();
			// 	ServiceDeskPage.btnOthers.click();
			// 	browser.pause(2000);
			// 	ServiceDeskPage.btnOthersDropdown(otherStatus).waitForDisplayed();
			// 	ServiceDeskPage.btnOthersDropdown(otherStatus).click();
			// 	console.log('I select: ' + filterOption);
			// 	break;
			default:
			console.log('No records found!');
			
		}
		console.log('I applied prirotiy filter');
	}



	selectRowDensity(rowDensity){
		
		
		browser.pause(30000);

		this.waitForLoader();
		ServiceDeskPage.tabTickets.waitForDisplayed();
		ServiceDeskPage.tabTickets.click();
		ServiceDeskPage.hamburgerMenu.waitForDisplayed();
		ServiceDeskPage.hamburgerMenu.click();
		browser.pause(2000);
		
		switch(rowDensity){
			
			case "Comfortable":
							
				ServiceDeskPage.tableViewComfortable.waitForDisplayed();
				ServiceDeskPage.tableViewComfortable.click();
				browser.pause(2000);
				break;
			case "Compact":
				
				ServiceDeskPage.tableViewCompact.waitForDisplayed();
				ServiceDeskPage.tableViewCompact.click();
				browser.pause(2000)
				break;
			case "Cozy":
				
				ServiceDeskPage.tableViewCozy.waitForDisplayed();
				ServiceDeskPage.tableViewCozy.click();
				browser.pause(2000)
				break;
		}
		console.log('I set row density to '+ rowDensity);
		
	}
	
	waitForLoader(){
		
		do{ //Do-While to make sure dot loader is disappeared and rows are loaded based on selected status
				
			console.log('Records still loading...')
			browser.pause(2000);
			
		 }while (ServiceDeskPage.loader.isDisplayed() === true)
		
	}
	
	openColumnSelector(){		
		this.waitForLoader();
		//if(this.columnDateAdded===false)
		//{
			ServiceDeskPage.hamburgerMenu.waitForDisplayed();
			ServiceDeskPage.hamburgerMenu.click();
			browser.pause(2000);		
			ServiceDeskPage.getChooseColumnFromList.waitForDisplayed();
			ServiceDeskPage.getChooseColumnFromList.click();
			browser.pause(3000);
			console.log('I open choose columns interface');
		//}
	}
	

	enableDateAddedColumn () {
		//console.log("The items found on column popup are: "+SDcalendarSearchPage.columnsList.length);
		// SDcalendarSearchPage.disableAllColumns();
		//if(this.columnDateAdded===false)
		//{
			if (SDcalendarSearchPage.dateAddedOnColumnPopup.isExisting()=== false) {

				SDcalendarSearchPage.dateAddedOption.click();	
			}
			browser.pause(2000);
			SDcalendarSearchPage.closeBtnOnChooseColumn.click();
		//}
	}


	selectColumn(columns){
	
		var table = columns.raw();

		for(var i=0; i<table.length; i++){
			
			switch(table[i][0]){
				case "ISP ID":
					browser.pause(2000);
					ServiceDeskPage.chooseColumnISPId.waitForDisplayed();
					ServiceDeskPage.chooseColumnISPId.click();
					console.log(table[i][0] + ' Column selected');
					break;
				case"Date Added":
					browser.pause(2000);
					ServiceDeskPage.chooseColumnDateAdded.waitForDisplayed();
					ServiceDeskPage.chooseColumnDateAdded.click();
					console.log(table[i][0] + ' Column selected');
					break;
				case"Detail ID":
					browser.pause(2000);
					ServiceDeskPage.chooseColumnDetailID.waitForDisplayed();
					ServiceDeskPage.chooseColumnDetailID.click();
					console.log(table[i][0] + ' Column selected');
					break;
				case"Phone":
					browser.pause(2000);
					ServiceDeskPage.chooseColumnPhone.waitForDisplayed();
					ServiceDeskPage.chooseColumnPhone.click();
					console.log(table[i][0] + ' Column selected');
					break;
			}
			
			
		}
		ServiceDeskPage.btnDone.waitForDisplayed();
		ServiceDeskPage.btnDone.click();
		console.log('I choose columns');
		
	}
	
	selectFirstRecord(){
		this.waitForLoader();
		browser.pause(5000);
		if(ServiceDeskPage.btnResolved.getAttribute('class').includes('active'))
		{
			ServiceDeskPage.btnResolved.click();
			browser.pause(5000);
		}

		this.ticketID = ServiceDeskPage.tablServiceDeskRowOne.getText();
		// this.ticketType = ServiceDeskPage.tablServiceDesktTicketType.getText();
		// this.ticketSummary = ServiceDeskPage.tablServiceDesktTicketSummary.getText();
		ServiceDeskPage.tablServiceDeskRowOne.click();
		//console.log('I click on first row!');
		browser.pause(5000);
	}

	dataVerificationInTicketDock () {
		// this.ticketID = ServiceDeskPage.tablServiceDeskRowOne.getText();
		// this.ticketType = ServiceDeskPage.tablServiceDesktTicketType.getText();
		// this.ticketSummary = ServiceDeskPage.tablServiceDesktTicketSummary.getText();
		let ticketIDOnTicketDock = ServiceDeskPage.ticketIDOnTicketDock.getText();
		ticketIDOnTicketDock = ticketIDOnTicketDock.slice(8);
		console.log(ticketIDOnTicketDock);
		let ticketTypeOnTicketDock = ServiceDeskPage.ticketTypeOnTicketDock.getAttribute("value");
		ServiceDeskPage.ticketSummaryOnTicketDock.scrollIntoView();		
		let ticketSummaryOnTicketDock = ServiceDeskPage.ticketSummaryOnTicketDock.getAttribute("value");

		// console.log(">>> The ticket summary is: ", ticketSummaryOnTicketDock);
		// console.log(">>> Tab Text trimmed is: ", ticketIDOnTicketDock);
		// console.log(">>> The saved ID was: ", this.ticketID);
		// console.log(">>> Type is : ", ticketTypeOnTicketDock);
		// console.log(">>> The saved Type is : ", this.ticketType);
		// console.log(">>> The saved ticket summary is: ", this.ticketSummary);	

		expect(this.ticketID).to.eql(ticketIDOnTicketDock);
		expect(this.typeContent).to.eql(ticketTypeOnTicketDock);
		expect(this.summaryContent).to.eql(ticketSummaryOnTicketDock);
		
	}

	addTicket(customerName, flow, ticketSummary, type){
		var Esckeys = ['\uE00C'];
		var clearkeys = ['\uE011', '\uE008', '\uE010','\uE017'];
		browser.pause(5000);
		var dropdownValueSelection = ['\uE015', '\uE007'];
		customerName = customerName.replace(/['"]+/g, '');
		type = type.replace(/['"]+/g, '');
		// ticketPriority = ticketPriority.replace(/['"]+/g, '');
		// assignee = assignee.replace(/['"]+/g, '');
		// ticketFollower = ticketFollower.replace(/['"]+/g, '');
		ticketSummary = ticketSummary.replace(/['"]+/g, '');
		ServiceDeskPage.btnCustomerName.waitForDisplayed();
		//ServiceDeskPage.btnCustomerName.click();
		browser.pause(1000);
		ServiceDeskPage.searchName.setValue(customerName);
		browser.pause(3000);
		//ServiceDeskPage.customerNameDropdown(customerName).waitForDisplayed();
		//ServiceDeskPage.customerNameDropdown(customerName).waitForClickable({timeout : 20000});
		//ServiceDeskPage.customerNameDropdown(customerName).click();
		ServiceDeskPage.autocompleteDialouge.waitForDisplayed();
		ServiceDeskPage.autocompleteDialouge.waitForClickable();
		ServiceDeskPage.autocompleteDialouge.click();
		browser.pause(2000);
		//var ticketTypeElement = ServiceDeskPage.ticketType(flow);
		ServiceDeskPage.addTicketType.waitForClickable();
		ServiceDeskPage.addTicketType.click();
		ServiceDeskPage.autocompleteDialouge.waitForDisplayed();
		ServiceDeskPage.autocompleteDialouge.waitForClickable();
		//ServiceDeskPage.ticketTypeInput(ticketTypeElement).setValue('modem install');
		browser.pause(3000);
		// ServiceDeskPage.ticketTypeList.waitForDisplayed();
		// ServiceDeskPage.ticketTypeList.waitForClickable({timeout : 30000});
		// ServiceDeskPage.ticketType(flow).keys(dropdownValueSelection);
		browser.keys(dropdownValueSelection);
		browser.pause(2000);
		// if(ServiceDeskPage.ticketContinueAnyway.isExisting())
		// {
		// 	ServiceDeskPage.ticketContinueAnyway.click();
		// }
		console.log('Ticket Type updated!');
		ServiceDeskPage.ticketSummary.scrollIntoView();
		ServiceDeskPage.ticketSummary.waitForClickable({timeout : 5000});
		ServiceDeskPage.ticketSummary.click();
		ServiceDeskPage.ticketSummary.keys(clearkeys);
		browser.pause(1000);
		ServiceDeskPage.ticketSummary.setValue(ticketSummary);
		// if(ticketFollower!="")
		// {
		// 	ServiceDeskPage.docTicketFollower.waitForDisplayed({timeout : 5000});
		// 	ServiceDeskPage.docTicketFollower.click();
		// 	browser.pause(2000);
		// 	ServiceDeskPage.ticketFollowerDropdown(ticketFollower).click();	
		// 	ServiceDeskPage.ticketFollowerDropdown(ticketFollower).keys(Esckeys);		
		// 	console.log('follower updated!');
		// }
		browser.pause(2000);
		//browser.pause(2000);
		//ServiceDeskPage.ticketAssignee.waitForDisplayed();
		//ServiceDeskPage.ticketAssignee.click();
		//browser.pause(2000);
		//ServiceDeskPage.ticketAssigneeDropdown(assignee).waitForDisplayed();
		//ServiceDeskPage.ticketAssigneeDropdown(assignee).click();
		//browser.pause(2000);
		//ServiceDeskPage.btnSave(flow).waitForDisplayed();
		//ServiceDeskPage.btnSave(flow).click();
		//console.log('I update ticket details');
		//browser.pause(3000);
	
	}

	addTicketWithCustomFiled(customerName,flow,customfieldValue){
		//var Esckeys = ['\uE00C'];
		browser.pause(5000);
		//var dropdownValueSelection = ['\uE015', '\uE007'];
		customerName = customerName.replace(/['"]+/g, '');
		customfieldValue = customfieldValue.replace(/['"]+/g, '');
		ServiceDeskPage.btnCustomerName.waitForDisplayed();
		ServiceDeskPage.btnCustomerName.click();
		browser.pause(1000);
		ServiceDeskPage.searchName.setValue(customerName);
		browser.pause(3000);
		ServiceDeskPage.customerNameDropdown(customerName).waitForDisplayed({ timeout: 12000 });
		ServiceDeskPage.customerNameDropdown(customerName).click();
		browser.pause(2000);
		ServiceDeskPage.ticketType(flow).waitForDisplayed({ timeout: 12000 });
		ServiceDeskPage.ticketType(flow).click();
		browser.pause(4000);
		ServiceDeskPage.autocompleteDialouge.waitForDisplayed({timeout : 50000});
		ServiceDeskPage.autocompleteDialouge.waitForClickable({timeout : 50000});
		console.log('new ticket type is'+this.ticketType);
		ServiceDeskPage.technicianFilterDropdown(this.ticketType).click();
		browser.pause(1000);
		console.log('Ticket Type updated!');
		ServiceDeskPage.customFiledValue.waitForDisplayed();
		ServiceDeskPage.customFiledValue.click();
		ServiceDeskPage.customFiledValue.setValue(customfieldValue);
		browser.pause(4000);	
	}

	saveCurrentTicket(flow)
	{
		browser.pause(1000);
		ServiceDeskPage.btnSave(flow).waitForClickable();
		ServiceDeskPage.btnSave(flow).click();
		// this.verifyConfirmation();
		console.log('I save ticket details');
		browser.pause(1000);
	}

	editTicket(flow, ticketSummary){
		var suffix =  (Math.floor(new Date() / 1000));
		var keys = ['\uE011', '\uE008', '\uE010','\uE017']; // Home+Shift+End Delete key sequence is stored in array
		var Esckeys = ['\uE00C'];
		var dropdownValueSelection = ['\uE015', '\uE007'];// DownArrow + Enter
		browser.pause(5000);
		ServiceDeskPage.ticketType(flow).waitForDisplayed({ timeout: 12000 });
		ServiceDeskPage.ticketType(flow).click();
		browser.pause(2000);
		ServiceDeskPage.ticketType(flow).keys(dropdownValueSelection);
		browser.pause(2000);
		if(ServiceDeskPage.ticketContinueAnyway.isExisting())
		{
			ServiceDeskPage.ticketTypeCancel.waitForDisplayed({ timeout: 7000 });
			ServiceDeskPage.ticketTypeCancel.click();
		}
		console.log('Ticket Type updated!');
		browser.pause(2000);
		ServiceDeskPage.ticketSummary.scrollIntoView();
		ServiceDeskPage.ticketSummary.waitForClickable({timeout : 5000});
		ServiceDeskPage.ticketSummary.click();
		ServiceDeskPage.ticketSummary.keys(keys);
		//ServiceDeskPage.ticketSummary.keys('\uE008');// to release shift
		browser.pause(1000);
		this.ticketSummary = ticketSummary + suffix;
		ServiceDeskPage.ticketSummary.setValue(this.ticketSummary);
		console.log('Summary updated!');
		//ServiceDeskPage.ticketAssignee.waitForDisplayed();
		//ServiceDeskPage.ticketAssignee.click();
		//browser.pause(1000);
		//ServiceDeskPage.ticketAssignee.keys(dropdownValueSelection);		
		//console.log('Assignee updated!');
		//ServiceDeskPage.docTicketFollower.waitForDisplayed();
		//ServiceDeskPage.docTicketFollower.click(); //Removed follower as the flow changed
		//browser.pause(2000);
		//ServiceDeskPage.ticketFollowerDropdown('Jon Automation').click();
		//ServiceDeskPage.ticketFollowerDropdown('Jon Automation').keys(Esckeys);		
		console.log('follower updated!');
		browser.pause(2000);
		console.log('going to update save');
		browser.pause(3000);
		ServiceDeskPage.btnSaveNew.waitForDisplayed();
		ServiceDeskPage.btnSaveNew.click();
		console.log('I update ticket details');
		browser.pause(3000);
	
	}

	saveTicketDetails()
	{
		console.log('going to update save');
		browser.pause(3000);
		ServiceDeskPage.btnSaveNew.waitForDisplayed();
		ServiceDeskPage.btnSaveNew.click();
		console.log('I update ticket details');
		browser.pause(3000);
	}
	
	selectTechnicianFilter(technician){
		browser.pause(2000);
		ServiceDeskPage.technicianFilter.waitForDisplayed();
		ServiceDeskPage.technicianFilter.click();
		browser.pause(2000);
		ServiceDeskPage.technicianFilterDropdown(technician).waitForDisplayed();
		ServiceDeskPage.technicianFilterDropdown(technician).click();
		browser.pause(2000);
		console.log('I choose technician to see assigned tickets');
		
	}
	
	selectTimePeriodFilter(filterOption)
	{
		
		let filterOptionRaw = filterOption.raw();
		// filterOptionRaw = filterOption.toString().replace(/['"]+/g, '');
		browser.pause(2000);
		ServiceDeskPage.btnTimePeriodFilter.waitForClickable();
		browser.pause(2000);
		ServiceDeskPage.btnTimePeriodFilter.click();

		if (filterOptionRaw == "Today") {
			
			browser.pause(2000);
			console.log('I select: ' + filterOptionRaw);
			// SDcalendarSearchPage.timePeriodFilterAsToday
			SDcalendarSearchPage.timePeriodFilterAsToday.waitForDisplayed();
			SDcalendarSearchPage.timePeriodFilterAsToday.click();
			SDcalendarSearchPage.btnApplyTimePeriod.waitForDisplayed();
			SDcalendarSearchPage.btnApplyTimePeriod.click();
			browser.pause(2000);
			console.log('I applied '+ filterOptionRaw+ ' from date/time filter');
		}
		if (filterOptionRaw == "7-days"){
			
			browser.pause(2000);
			console.log('I select: ' + filterOptionRaw);
			SDcalendarSearchPage.timePeriodFilterAs7Days.waitForDisplayed();
			SDcalendarSearchPage.timePeriodFilterAs7Days.click();
			SDcalendarSearchPage.btnApplyTimePeriod.waitForDisplayed();
			SDcalendarSearchPage.btnApplyTimePeriod.click();
			browser.pause(2000);
			console.log('I applied '+ filterOptionRaw+ ' from date/time filter');
		}
		if (filterOptionRaw == "30-days"){
			
			browser.pause(2000);
			console.log('I select: ' + filterOptionRaw);
			SDcalendarSearchPage.timePeriodFilterAs30Days.waitForDisplayed();
			SDcalendarSearchPage.timePeriodFilterAs30Days.click();
			SDcalendarSearchPage.btnApplyTimePeriod.waitForDisplayed();
			SDcalendarSearchPage.btnApplyTimePeriod.click();
			browser.pause(2000);
			console.log('I applied '+ filterOptionRaw+ ' from date/time filter');
		}
		if (filterOptionRaw == "90-days"){
			
			browser.pause(2000);
			console.log('I select: ' + filterOptionRaw);
			SDcalendarSearchPage.timePeriodFilterAs90Days.waitForDisplayed();
			SDcalendarSearchPage.timePeriodFilterAs90Days.click();
			SDcalendarSearchPage.btnApplyTimePeriod.waitForDisplayed();
			SDcalendarSearchPage.btnApplyTimePeriod.click();
			browser.pause(2000);
			console.log('I applied '+ filterOptionRaw+ ' from date/time filter');
		}
		if (filterOptionRaw == "360-days"){
			
			browser.pause(2000);
			console.log('I select: ' + filterOptionRaw);
			SDcalendarSearchPage.timePeriodFilterAs360Days.waitForDisplayed();
			SDcalendarSearchPage.timePeriodFilterAs360Days.click();
			SDcalendarSearchPage.btnApplyTimePeriod.waitForDisplayed();
			SDcalendarSearchPage.btnApplyTimePeriod.click();
			browser.pause(9000);
			console.log('I applied '+ filterOptionRaw+ ' from date/time filter');
		}

		

		// switch(filterOptionRaw){
		
		// 	case 'Today':
		// 		// browser.pause(2000);
		// 		console.log('I select: ' + filterOptionRaw);
		// 		ServiceDeskPage.timePeriodFilterAsToday.waitForDisplayed();
		// 		ServiceDeskPage.timePeriodFilterAsToday.click();
		// 		ServiceDeskPage.btnApplyTimePeriod.waitForDisplayed();
		// 		ServiceDeskPage.btnApplyTimePeriod.click();
		// 		browser.pause(2000);
		// 		console.log('I applied "Today" from date/time filter');
		// 	break;

		// 	default: 
       	// 	console.log("Default case...");
		// }
		browser.pause(3000);
		
	}

	compareCriteria(days) {




	}

	selectCustomTimePeriodFilter(filterOption)
	{
		
		let filterOptionRaw; // = filterOption.raw();
		filterOptionRaw = filterOption.toString().replace(/['"]+/g, '');
		console.log(filterOptionRaw);
		
		browser.pause(2000);
		
		ServiceDeskPage.btnTimePeriodFilter.waitForClickable();
		browser.pause(2000);
		ServiceDeskPage.btnTimePeriodFilter.click();

		SDcalendarSearchPage.inputCustomDays.waitForClickable();
		SDcalendarSearchPage.inputCustomDays.click();
		// SDcalendarSearchPage.inputCustomDays.setValue(filterOptionRaw);
		SDcalendarSearchPage.inputCustomDays.setValue(filterOptionRaw);

		SDcalendarSearchPage.btnApplyTimePeriod.waitForDisplayed();
		SDcalendarSearchPage.btnApplyTimePeriod.click();
		browser.pause(2000);
		console.log('I applied '+ filterOptionRaw+ ' from date/time filter');
		
		browser.pause(3000);
		
	}

	getServiceDeskListCount()
	{
		browser.pause(10000);
		console.log('going to get total count of tickets displayed');
		ServiceDeskPage.paginatedParent.waitForDisplayed({ timeout: 9000 });
		ServiceDeskPage.paginatedParent.scrollIntoView();
		browser.pause(1500);
		let total = ServiceDeskPage.totalcount[1].getText();
		console.log('page count is: '+total);
		const myArray = total.split(' ');
		let position = myArray.indexOf("of") + 1;
		console.log('returning total count of tickets displayed: '+myArray[position]);
		return myArray[position];
	}

	setMinimizeWindow()
	{
		browser.setWindowSize(1200,800);
		browser.pause(2000);
	}

	

	openThreeDotMenu() {
		
		browser.pause(4000);
		SDcalendarSearchPage.tablServiceDeskRowOne.waitForDisplayed();
		console.log("Row one was detected");
		this.ticketID = SDcalendarSearchPage.tablServiceDeskRowOne.getText();
		console.log("Ticket Id: "+this.ticketID);
		SDcalendarSearchPage.tablServiceDeskRowOne.moveTo();
		browser.pause(1000);
		//SDcalendarSearchPage.allColumnsData[0].moveTo();
		SDcalendarSearchPage.threeDotMenu.waitForDisplayed();
		browser.pause(1000);
		SDcalendarSearchPage.threeDotMenu.click();
		console.log("Three dot menu was clicked");

	}

	moveServiceDeskToRight() {
		this.openThreeDotMenu();
		browser.pause(1000);
		var escapeKey = ['\uE00C'];
		browser.keys(escapeKey);
		this.pressRightKeys();		
	}

	pressRightKeys() {
		browser.pause(2000);
		var rightKey = ['\uE014'];

		for (var i = 0; i<30; i++) {		
			browser.keys(rightKey);
			browser.pause(100);
		}
		console.log("moved to right...");
	}

	getDatafromDateAddedColumn()
	{
		var getAllHeaders = SDcalendarSearchPage.allHeaders;
		var indexOfType;
		for (var i=0; i<getAllHeaders.length-1;i++)
		{
			if(getAllHeaders[i].getText().includes('Date Added'))
			{
				indexOfType = i;
				console.log("index of type is: "+indexOfType);
				break;
			}
		}

		browser.pause(2000);
		var updatedContents = SDcalendarSearchPage.allColumnsData[indexOfType];
		console.log("updated Contents: "+updatedContents);
	}

	sortDateColumnDesc() {
		browser.pause(3000);
		console.log("in DESC now");

		while (SDcalendarSearchPage.isColumnSortDesc.isExisting() == false){
			this.checkSortingOnDateAddedColumn();
			browser.pause(2000);
		}
		
		console.log("date column sorted desc");
		this.greatestDate = this.getDateAddedOfFirstRow();
	}

	sortDateColumnAsc() {
		browser.pause(3000);
		console.log("in asc now");

		while (SDcalendarSearchPage.isColumnSortAsc.isExisting() == false){
			this.checkSortingOnDateAddedColumn();
			browser.pause(2000);
		}
		console.log("date column sorted ASC");
		this.shortestDate = this.getDateAddedOfFirstRow();

		
	}

	addColumnIfItsNotExist()
	{
		var getAllHeaders = SDcalendarSearchPage.allHeaders;
		for (var i=0; i<getAllHeaders.length;i++)
		{
			if(getAllHeaders[i].getText().includes('Date Added'))
			{
				this.columnDateAdded=true;
				break;
			}
		}
		//console.log("index of date added is: "+ this.columnDateAdded);
	}

	checkSortingOnDateAddedColumn()
	{
		browser.pause(4000);
		console.log('going to check sorting on date added column');
		var getAllHeaders = SDcalendarSearchPage.allHeaders;
		var updatedIndex =0;
		for (var i=0; i<getAllHeaders.length;i++)
		{
			if(getAllHeaders[i].getText().includes('Date Added'))
			{
				updatedIndex = i;
				break;
			}
		}
		//console.log("index of date added is: "+ updatedIndex);
		let indexToAdd = updatedIndex+1; 
		var updatedContents = SDcalendarSearchPage.allColumnsTextData;
		// for (var i=updatedIndex; i<updatedContents.length;)
		// {
		// 	console.log('Ticket Date is'+updatedContents[i].getText());
		// 	i =i+indexToAdd;
		// }
		var getDateRange = ServiceDeskPage.btnTimePeriodFilter.getAttribute('value');
		var separatedArrays = getDateRange.split('-');//split data into Array values
		var dateLowerRange =new Date(separatedArrays[0]);
		dateLowerRange = new Date(dateLowerRange);
		dateLowerRange = this.toDateOnly(dateLowerRange);
		console.log('lower range is '+dateLowerRange);
		var dateUpperRange =new Date(separatedArrays[1]);
		dateUpperRange = new Date(dateUpperRange);
		dateUpperRange = this.toDateOnly(dateUpperRange);
		console.log('upper range is '+dateUpperRange);
		for (var i=updatedIndex; i<updatedContents.length;)
		{
			console.log('Ticket Date is '+updatedContents[i].getText());
			var date = new Date(updatedContents[i].getText());//get date from ticket schedule time
        	var year = date.getFullYear();
        	var months = date.toLocaleDateString(undefined, { month: 'short'});
        	var day = String(date.getDate()).padStart(2, '0');
        	var extractedDateFormat = day+' '+months+' '+year;
        	console.log('extractedDateFormat is ' +extractedDateFormat);
			var CurrentDate = new Date(extractedDateFormat);
			CurrentDate = this.toDateOnly(CurrentDate);
			console.log('current date is ' +CurrentDate);
			if(dateLowerRange <= CurrentDate && dateUpperRange >= CurrentDate){
    			{expect(1).to.eql(1);}//date is within range
				console.log('passed ticket Date');
				break;
			}
			else
				{
					console.log('failed ticket Date is'+updatedContents[i].getText());
					expect(1).to.eql(0);
				}//date is not within range
			i =i+indexToAdd;
			browser.pause(100);
		}
	}
	toDateOnly(dateStrOrObj) {
    const d = new Date(dateStrOrObj);
    d.setHours(0, 0, 0, 0); // Zero out time to compare only by date
    return d;
}

	getDateAddedOfFirstRow() {
		// let priorityColID = ServiceDeskPage.ticketTableHeaderColID("Priority");
		
		// console.log("Priority Column index is: ", priorityColID);
		let dateAddedColID = SDcalendarSearchPage.ticketTableHeaderColID("Date Added");
		this.dateAdded = SDcalendarSearchPage.firstRowContentsOfCol(dateAddedColID);
		console.log("top date is: "+this.dateAdded);
		return this.dateAdded;
		//console.log("summaryColID Column index is: ", summaryColID);
		// let typeColID = ServiceDeskPage.ticketTableHeaderColID("Type");
		//console.log("typeColID Column index is: ", typeColID);
		
		// this.priorityContent = ServiceDeskPage.firstRowContentsOfCol(priorityColID-2);
		// console.log("priorityContent in the table is: ", priorityContent);
		// this.summaryContent = ServiceDeskPage.firstRowContentsOfCol(dateAddedColID-2);
		//console.log("summaryContent in the table is: ", this.summaryContent);
		// this.typeContent = ServiceDeskPage.firstRowContentsOfCol(typeColID-2);
		// this.ticketType = this.typeContent;
		 
		//console.log("typeContent in the table is: ", this.typeContent);
	}

	deleteTicket() {

		ServiceDeskPage.deleteOption.waitForDisplayed();
		browser.pause(1000);
		ServiceDeskPage.deleteOption.click();
		browser.pause(1000);
		ServiceDeskPage.yesButtonForDelete.waitForDisplayed();
		ServiceDeskPage.yesButtonForDelete.click();
		console.log("Ticket Deleted");
		ServiceDeskPage.confirmationMsg.waitForDisplayed();
		expect(ServiceDeskPage.confirmationMsg.getText()).to.eql("Deleted Successfully");
		browser.pause(2000);
	}

	addComment(){
		var comment = 'This is test automation ' + (Math.floor(new Date() / 1000));
		this.comment = comment;
		browser.pause(5000);
		ServiceDeskPage.btnNotes.waitForDisplayed();
		ServiceDeskPage.btnNotes.click();
		console.log('notes clicked');
		browser.pause(3000);
		ServiceDeskPage.commentBox.waitForDisplayed();
		ServiceDeskPage.commentBox.click();
		console.log('commentbox clicked');
		ServiceDeskPage.commentBox.setValue(comment);//comment field is not editable. Same issue as with email editor will work later on this
		browser.pause(1000);
		console.log('commentbox value is :'+ServiceDeskPage.commentBox.getText());
		browser.pause(2000);
		ServiceDeskPage.btnPost.waitForDisplayed();
		ServiceDeskPage.btnPost.click();
		//ServiceDeskPage.btnActivity.waitForDisplayed();
		//ServiceDeskPage.btnActivity.click();
		console.log('Test comment edited');
		browser.pause(2000);
	}






	closeNewTicketDock()
	{
		browser.pause(2000);
		SDcalendarSearchPage.closeOpenedTicketDock.waitForClickable();
		SDcalendarSearchPage.closeOpenedTicketDock.click();
		console.log("Ticket Dock closed");
		browser.pause(2000);
	}

	verifyDateInTicketTable () {
		expect (Number(this.getServiceDeskListCount())).to.be.gt(0);
	}

	verifyTodaySelected() 	{
		browser.pause(2000);
		this.getTodayDate();
		ServiceDeskPage.btnTimePeriodFilter.waitForDisplayed();
		expect(ServiceDeskPage.btnTimePeriodFilter.getAttribute('value')).to.include(this.formattedDate)

	}

	getTodayDate () {
		let date = new Date();
		const day = date.toLocaleString('default', { day: '2-digit' });
		const month = date.toLocaleString('default', { month: 'short' });
		const year = date.toLocaleString('default', { year: 'numeric' });
		this.formattedDate = month + ' ' + day +', ' + year;
		console.log(this.formattedDate);
	}

	
	goToTickets()
	{
		browser.pause(2000);
        SDcalendarSearchPage.listTabOnServiceDesk.waitForDisplayed();
		SDcalendarSearchPage.listTabOnServiceDesk.waitForClickable();
		SDcalendarSearchPage.listTabOnServiceDesk.click();
		SDcalendarSearchPage.btnAll.waitForClickable();
		SDcalendarSearchPage.btnAll.click();		
		browser.pause(2000);
	}
	
	verifyFilterOptions(filterOptions){
		
		var options = filterOptions.raw();
		
		for (var i=0; i<options.length; i++){
			
				switch(options[i][0]){
					
					case 'All':
						expect(ServiceDeskPage.btnAll.getText()).to.eql('All');
						//console.log('I verify filter option: '+ options[i][0]);
						break;
					case "Pending":
						expect(ServiceDeskPage.btnPending.getText()).to.eql('Pending');
						//console.log('I verify filter option: '+ options[i][0]);
						break;
					case "Open":
						expect(ServiceDeskPage.btnOpen.getText()).to.eql('Open');
						//console.log('I verify filter option: '+ options[i][0]);
						break;
					case "Resolved":
						expect(ServiceDeskPage.btnResolved.getText()).to.eql('Resolved');
						//console.log('I verify filter option: '+ options[i][0]);
						break;
					case "Others":
						expect(ServiceDeskPage.btnOthers.getText()).to.eql('Others');
						//console.log('I verify filter option: '+ options[i][0]);
						break;
					default:
						//console.log('Filter option not found!');
						break;

				}
		}
	}
	
	verifyAllTickets(){
		var result = this.getServiceDeskListCount();
		expect(Number(result)).to.be.above(0);
		//var status;
		//ServiceDeskPage.btnAll.waitForDisplayed();
		//status = ServiceDeskPage.btnAll.getAttribute('class')
		//expect(status.substr(16,6)).to.eql('active');
				
	}
	
	verifyFilteredRecords(filterOption){
		browser.pause(5000);
		filterOption = filterOption.replace(/['"]+/g, '');
		var expectedStatus;
		switch(filterOption){
		case "Pending":
			expectedStatus = 'Pending'
			break;
		case "Open":
			expectedStatus = 'Open'
			break;
		case "Resolved":
			expectedStatus = 'Resolved'
			break;
		case "Others":
			expectedStatus = 'Others'
			break;
		}
		 if(Number(this.getServiceDeskListCount()) >0){
			ServiceDeskPage.hamburgerMenu.waitForDisplayed();
			ServiceDeskPage.hamburgerMenu.click();
			browser.pause(2000);
			ServiceDeskPage.getChooseColumnFromList.waitForDisplayed();
			ServiceDeskPage.getChooseColumnFromList.click();
			ServiceDeskPage.chooseColumnPriority.waitForDisplayed();
			ServiceDeskPage.chooseColumnPriority.click();
			ServiceDeskPage.btnClose.click();
			browser.pause(2000);
			var tableStatus = ServiceDeskPage.statusColumn(filterOption);
			console.log('extracted data is :' + tableStatus);
			expect(tableStatus).is.eql(expectedStatus);
			
		}else{
			console.log('No Data Available...');
			expect(1).is.eql(1);//no data is available
		}
	}

	choosePriorityColumnAsEnabled() {
		if(Number(this.getServiceDeskListCount()) >0){
			ServiceDeskPage.hamburgerMenu.waitForDisplayed();
			ServiceDeskPage.hamburgerMenu.click();
			browser.pause(2000);
			ServiceDeskPage.getChooseColumnFromList.waitForDisplayed();
			ServiceDeskPage.getChooseColumnFromList.click();
							
				if (ServiceDeskPage.chooseColumnPriorityEnabled.isExisting() === false){
					// Enable priority column
					ServiceDeskPage.chooseColumnPriority.waitForDisplayed();
					ServiceDeskPage.chooseColumnPriority.click();
					browser.pause(2000);
				} else {

					// Disable priority column
					ServiceDeskPage.chooseColumnPriority.waitForDisplayed();
					ServiceDeskPage.chooseColumnPriority.click();
					browser.pause(2000);
					// Enable priority column again
					ServiceDeskPage.chooseColumnPriority.waitForDisplayed();
					ServiceDeskPage.chooseColumnPriority.click();
					browser.pause(2000);
				}
				console.log("Priority column was made enabled");
			}
			else{
				console.log('No Data Available...');
				expect(1).is.eql(1);//no data is available
			}

			browser.pause(2000);
			ServiceDeskPage.btnClose.click();
	}

	choosePriorityColumnAsDisabled() {
		if(Number(this.getServiceDeskListCount()) >0){
			ServiceDeskPage.hamburgerMenu.waitForDisplayed();
			ServiceDeskPage.hamburgerMenu.click();
			browser.pause(2000);
			ServiceDeskPage.getChooseColumnFromList.waitForDisplayed();
			ServiceDeskPage.getChooseColumnFromList.click();
							
				if (ServiceDeskPage.chooseColumnPriorityEnabled.isExisting() === true){
					// disable priority column
					ServiceDeskPage.chooseColumnPriority.waitForDisplayed();
					ServiceDeskPage.chooseColumnPriority.click();
					browser.pause(2000);
				} else {

					// enable priority column first
					ServiceDeskPage.chooseColumnPriority.waitForDisplayed();
					ServiceDeskPage.chooseColumnPriority.click();
					browser.pause(2000);
					// disable priority column again
					ServiceDeskPage.chooseColumnPriority.waitForDisplayed();
					ServiceDeskPage.chooseColumnPriority.click();
					browser.pause(2000);
				}
				console.log("Priority column was made disabled");
			}
			else{
				console.log('No Data Available...');
				expect(1).is.eql(1);//no data is available
			}

			browser.pause(2000);
			ServiceDeskPage.btnClose.click();
	}

	verifyColumnNameAvailable(columnName) {
		browser.pause(2000);
		columnName = columnName.replace(/['"]+/g, '');
		console.log("ColumnName is: " , columnName);
		var tableColumnHeader = ServiceDeskPage.ticketTableHeader(columnName);
		tableColumnHeader = tableColumnHeader.substring(0, tableColumnHeader.length - 2);
		console.log('checking columns for: ' + tableColumnHeader);
		expect(tableColumnHeader).is.eql(columnName);
		browser.pause(2000);
	}
// "Priority", "Summary", "Type"
	getContentsOfFirstRow() {
		// let priorityColID = ServiceDeskPage.ticketTableHeaderColID("Priority");
		
		// console.log("Priority Column index is: ", priorityColID);
		let summaryColID = ServiceDeskPage.ticketTableHeaderColID("Summary");
		//console.log("summaryColID Column index is: ", summaryColID);
		let typeColID = ServiceDeskPage.ticketTableHeaderColID("Type");
		//console.log("typeColID Column index is: ", typeColID);
		
		// this.priorityContent = ServiceDeskPage.firstRowContentsOfCol(priorityColID-2);
		// console.log("priorityContent in the table is: ", priorityContent);
		this.summaryContent = ServiceDeskPage.firstRowContentsOfCol(summaryColID-2);
		//console.log("summaryContent in the table is: ", this.summaryContent);
		this.typeContent = ServiceDeskPage.firstRowContentsOfCol(typeColID-2);
		this.ticketType = this.typeContent;
		this.ticketSummary = this.summaryContent;
		//console.log("typeContent in the table is: ", this.typeContent);
	}

	verifyColumnNameNotAvailable(columnName) {
		browser.pause(2000);
		columnName = columnName.replace(/['"]+/g, '');
		//console.log("ColumnName is: " , columnName);
		var tableColumnHeader = ServiceDeskPage.ticketTableHeader(columnName);
		// tableColumnHeader = tableColumnHeader.substring(0, tableColumnHeader.length - 2);
		//console.log('checking columns for: ' + tableColumnHeader);
		// expect(tableColumnHeader).is.eql(columnName);
		expect(tableColumnHeader).to.be.undefined;
		browser.pause(2000);
	}



	verifyFilteredAndPriorityRecords(filterOption, priorityOption){
		browser.pause(3000);
		filterOption = filterOption.replace(/['"]+/g, '');
		priorityOption = priorityOption.replace(/['"]+/g, '');
		var expectedStatus;
		var expectedPriority;
		switch(filterOption){
		case "Pending":
			expectedStatus = 'Pending'
			break;
		case "Open":
			expectedStatus = 'Open'
			break;
		case "Resolved":
			expectedStatus = 'Resolved'
			break;
		case "Others":
			expectedStatus = 'Others'
			break;
		}
		 if(Number(this.getServiceDeskListCount()) >0){
			ServiceDeskPage.hamburgerMenu.waitForDisplayed();
			ServiceDeskPage.hamburgerMenu.click();
			browser.pause(2000);
			ServiceDeskPage.getChooseColumnFromList.waitForDisplayed();
			ServiceDeskPage.getChooseColumnFromList.click();
							
				if (ServiceDeskPage.chooseColumnPriorityEnabled.isExisting() === false){
					ServiceDeskPage.chooseColumnPriority.waitForDisplayed();
					ServiceDeskPage.chooseColumnPriority.click();
					browser.pause(2000);
				}

				if (ServiceDeskPage.chooseColumnSummaryEnabled.isExisting() === true){
					ServiceDeskPage.chooseColumnSummary.waitForDisplayed();
					ServiceDeskPage.chooseColumnSummary.click();
					browser.pause(2000);
				}	
				if (ServiceDeskPage.chooseColumnTypeEnabled.isExisting() === true){
					ServiceDeskPage.chooseColumnType.waitForDisplayed();
					ServiceDeskPage.chooseColumnType.click();
					browser.pause(2000);
				}	
				console.log("Priority column already shown");

				browser.pause(2000);
				ServiceDeskPage.btnClose.click();
				browser.pause(2000);

				var tableStatus = ServiceDeskPage.statusColumn(filterOption);
				console.log('extracted data is :' + tableStatus);
				expect(tableStatus).is.eql(expectedStatus);
			}
			else{
				console.log('No Data Available for Status: ', expectedStatus);
				expect(1).is.eql(1);//no data is available
			}

		switch(priorityOption){
			case "High":
				expectedPriority = 'High'
				break;
			case "Normal":
				expectedPriority = 'Normal'
				break;
			case "Low":
				expectedPriority = 'Low'
				break;
			// case "Others":
			// 	expectedStatus = 'Others'
			// 	break;
			}
			if(Number(this.getServiceDeskListCount()) >0){

			browser.pause(2000);
			var tableStatusPriority = ServiceDeskPage.priorityColumn(priorityOption);
			console.log('extracted data for Priority is :' + tableStatusPriority);
			expect(tableStatusPriority).is.eql(expectedPriority);
			}
			
			else{
				console.log('No Data Available for Priority: ', expectedPriority);
				expect(1).is.eql(1);//no data is available
			}

	}

	chooseColumnsToDisplay(priority, summary, type) {
		// "Priority", "Summary", "Type"
		browser.pause(3000);
		priority = priority.replace(/['"]+/g, '');
		summary = summary.replace(/['"]+/g, '');
		type = type.replace(/['"]+/g, '');

		if(Number(this.getServiceDeskListCount()) >0){
			ServiceDeskPage.hamburgerMenu.waitForDisplayed({ timeout: 25000 });
			ServiceDeskPage.hamburgerMenu.waitForClickable({ timeout: 25000 });
			ServiceDeskPage.hamburgerMenu.click();
			browser.pause(2000);
			ServiceDeskPage.getChooseColumnFromList.waitForClickable({ timeout: 25000 });
			ServiceDeskPage.getChooseColumnFromList.click();
			ServiceDeskPage.restoreDefaultColumns.waitForClickable({ timeout: 25000 });
			ServiceDeskPage.restoreDefaultColumns.click();
							
				if (ServiceDeskPage.chooseColumnPriorityEnabled.isExisting() === false){
					ServiceDeskPage.chooseColumnPriority.waitForDisplayed();
					ServiceDeskPage.chooseColumnPriority.click();
					browser.pause(2000);
				}

				if (ServiceDeskPage.chooseColumnSummaryEnabled.isExisting() === false){
					ServiceDeskPage.chooseColumnSummary.waitForDisplayed();
					ServiceDeskPage.chooseColumnSummary.click();
					browser.pause(2000);
				}	
				if (ServiceDeskPage.chooseColumnTypeEnabled.isExisting() === false){
					ServiceDeskPage.chooseColumnType.waitForDisplayed();
					ServiceDeskPage.chooseColumnType.click();
					browser.pause(2000);
				}	
				//console.log("Priority, summary and type columns are shown");
			}
			else{
				//console.log('No Data Available...');
				expect(1).is.eql(1);//no data is available
			}

			browser.pause(2000);
			ServiceDeskPage.btnClose.waitForClickable({ timeout: 25000 });
			ServiceDeskPage.btnClose.click();
			browser.pause(2000);

	}

	choosenColumnToBeShown (priority, summary)	{
		browser.pause(3000);
		priority = priority.replace(/['"]+/g, '');
		summary = summary.replace(/['"]+/g, '');
		

		browser.pause(2000);
		var priorityCol = ServiceDeskPage.ticketTableHeader(priority);		
		// priorityCol = priorityCol.substring(0, priorityCol.length - 2);		

		var summaryCol = ServiceDeskPage.ticketTableHeader(summary);		
		// summaryCol = summaryCol.substring(0, summaryCol.length - 2);
		

		// expect(priorityCol).is.eql(priority);
		// expect(summaryCol).is.eql(summary);
		expect(priorityCol).to.include(priority);
		expect(summaryCol).to.include(summary);
		
		browser.pause(2000);
	}

	
	verifyRowDensity(tableView){
		browser.pause(2000);
		ServiceDeskPage.hamburgerMenu.waitForDisplayed();
		ServiceDeskPage.hamburgerMenu.click();
		browser.pause(2000);
		var selection = tableView.toLowerCase();
		var state;
		
		 if (tableView === "Comfortable"){
			state = ServiceDeskPage.tableView(ServiceDeskPage.tableViewComfortable).getAttribute('class');
			//console.log('View updated to: ' + state.slice(10, 28));
			//expect(state.includes('text-success')).to.eql(selection);
			console.log('View updated to: ' + tableView);
			expect(state.includes('text-success')).to.be.true;
		 }
		 else {
			state = ServiceDeskPage.tableView(ServiceDeskPage.tableViewCozy).getAttribute('class');
			console.log('View updated to: ' + tableView);
			//expect(state.slice(10, 24)).to.eql(selection);
			expect(state.includes('text-success')).to.be.true;

		 }
		
	}
	
	clickSortIconOnTicketID() {
		browser.pause(2000);
		ServiceDeskPage.sortIconOnTicketID.waitForDisplayed();
		ServiceDeskPage.sortIconOnTicketID.click();
		browser.pause(2000);
		ServiceDeskPage.tablServiceDeskRowOne.waitForDisplayed();
		let newTicketID = ServiceDeskPage.tablServiceDeskRowOne.getText();
		expect(this.ticketID).not.equal(newTicketID);
	}
	
	verifyNewColumns(newColumns){
		
		var table = newColumns.raw();
			ServiceDeskPage.tableHeader.waitForDisplayed();
		var actualColumns = ServiceDeskPage.tableHeader.getText('.div-table-col');
		
		
		for(var i=0; i<actualColumns.length; i++){
			
			for (var j=0; j<table.length; j++){
				
					if (actualColumns[i] === table[j][0]){
						expect(actualColumns[i]).to.eql(table[j][0]);
						console.log(table[j] + ' column added successfully!');
					}
				
			}
			
			
		}
		
		
	}
	
	verifyServiceDeskDocker(flow){
		browser.pause(5000);
		should.exist(ServiceDeskPage.dockHeader);
		console.log('expected ticket id is:' + this.ticketID);
		console.log('expected ticket type is:' + this.ticketType);
		console.log('expected ticket summary is:' + this.ticketSummary);
		console.log('actual ticket id is:' + ServiceDeskPage.docTicketId.getText());
		console.log('actual ticket type is:' + ServiceDeskPage.ticketType(flow).getAttribute('value'));
		//console.log('actual ticket summary is:' + ServiceDeskPage.ticketSummary.getAttribute('value'));
		expect(ServiceDeskPage.docTicketId.getText()).to.eql('Ticket #'+this.ticketID);
		console.log('actual ticket id is verified');
		expect(ServiceDeskPage.ticketType(flow).getAttribute('value')).to.eql(this.ticketType);
		console.log('actual ticket value is verified');
		ServiceDeskPage.ticketSummary.scrollIntoView();
		ServiceDeskPage.ticketSummary.waitForClickable({timeout : 5000});
		expect(ServiceDeskPage.ticketSummary.getAttribute('value')).to.eql(this.ticketSummary);
		console.log('actual ticket summary is verified');
	}
	
	verifyTicketUpdate(ticketSummary, ticketType, ticketPriority, assignee, ticketFollower){
	
		var msg;
		ServiceDeskPage.confirmationMsg.waitForDisplayed();
		msg = ServiceDeskPage.confirmationMsg.getText();
		expect(msg).to.eql(this.ticketUpdateInfoMessage);
		console.log('ticket saved successfully!');
		// expect(ServiceDeskPage.ticketSummary.getValue()).to.eql(ticketSummary);
		// expect(ServiceDeskPage.ticketType.getText()).to.eql('Type\n'+ticketType);
		// expect(ServiceDeskPage.ticketAssignee.getText()).to.eql(assignee);
		/*ticketPriority and ticketfollower are not handled yet*/
	}
	
	verifyTechnicianFilter(technician){
		browser.pause(5000);	
		var assignee;
		//this.waitForLoader();
		if(Number(this.getServiceDeskListCount()) >0){
			assignee = ServiceDeskPage.tablServiceDesk.getText();
			//console.log(assignee);
			expect(assignee).to.eql(technician);
			
		}else{
			console.log('Table does not load any data');
		}
		browser.pause(5000);	
	}
	
	verifyComment(){
		//browser.pause(2000);
		ServiceDeskPage.confirmationMsg.waitForDisplayed();
		expect(ServiceDeskPage.confirmationMsg.getText()).to.eql('Note Added Successfully');
		console.log('toast message is:' + this.comment);
		browser.pause(2000);
		//ServiceDeskPage.getPostedComment.getText();
		//console.log('received added comment' + ServiceDeskPage.getPostedComment(this.comment).getText());
		console.log('actual comment is ' + this.comment);
		if (ServiceDeskPage.getPostedComment(this.comment).getText().includes(this.comment)){
			expect(1).to.eql(1);
			console.log(this.comment)
		
		}else{
			expect(1).to.eql(0);
		}
	}
	
	verifyServiceDeskForm(){
		var header;
		browser.pause(5000);
		SubListPage.servicedeskForm.waitForDisplayed();
		header = SubListPage.servicedeskFormHeader.getText();
		console.log('>>>>>>>>>>>>>>>>>>>'+header);
		//expect(header.substr(3,10)).to.eql('Add Ticket');
		
		if (header.match(/Add Ticket.*/)){
			expect(1).to.eql(1);
		}else{
			expect(1).to.eql(0);
		}
		
	}
	
	verifyConfirmation(){
		ServiceDeskPage.confirmationMsg.waitForDisplayed();
		//console.log('save message is :' +ServiceDeskPage.confirmationMsg.getText());
		expect(ServiceDeskPage.confirmationMsg.getText()).to.eql('Saved Successfully');
	}
	
	verifyNewticketType()
	{
		browser.pause(2000);
		ServiceDeskPage.ticketType().click();
		browser.pause(2000);
		expect(ServiceDeskPage.getListItem(this.ticketType).isExisting()).to.be.true;
	}

	verifyTicketTypeRestored()
	{
		browser.pause(2000);
		expect(ServiceDeskPage.ticketType().getAttribute('value')).to.eql(this.ticketType);
	}

	verifyValuesRestored()
	{
		browser.pause(4000);
		expect(ServiceDeskPage.ticketType().getAttribute('value')).to.eql(this.ticketType);
		expect(ServiceDeskPage.ticketStatusField.getAttribute('value')).to.eql(this.ticketStatus);
		expect(ServiceDeskPage.ticketPriority.getAttribute('data-testid')).to.eql(this.ticketPriority);
		ServiceDeskPage.ticketSummary.scrollIntoView();
		expect(ServiceDeskPage.ticketSummary.getAttribute('value')).to.eql(this.ticketSummary);
	}

	verifyContactUpdated()
	{
		ServiceDeskPage.btnEditServiceContact.click();
		browser.pause(2000);
		expect(ServiceDeskPage.contactPhone.getAttribute('value')).to.eql(this.contactPhone);
	}

	verifyTicketIDInDock()
	{
		browser.pause(5000);
		expect(ServiceDeskPage.docTicketId.getText()).to.eql('Ticket #'+this.ticketID);
	}

	verifySchedule()
	{
		browser.pause(5000);
		expect(ServiceDeskPage.scheduleFiled.getAttribute('value')).to.eql('Set an Appointment');
	}

	verifyWarningMsgDisplayed()
	{
		browser.pause(1000);
		//verify prompt message
	}

	verifySaveAddTicketDisabled()
	{
		expect(ServiceDeskPage.btnSaveNew.isClickable()).to.be.false;
	}
}

module.exports = new SDcalendarSearchActions();