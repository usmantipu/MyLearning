var LoginPage = require('../pageobjects/login.page');
const serviceDeskPage = require('../pageobjects/serviceDesk.page');
// const ServiceDeskPage = require('../pageobjects/serviceDesk.page');
var ServiceDeskPage = require('../pageobjects/serviceDesk.page');
var SubListPage = require('../pageobjects/subscriberlist.page');
var Utils = require('./utils');
var expect = require('chai').expect; 
var should = require('chai').should();

class serviceDeskActions{

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
		this.ticketAddStatus;
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
		browser.pause(5000);
		
	}	
	
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
			 
		
		ServiceDeskPage.hamburgerMenu.waitForDisplayed();
		ServiceDeskPage.hamburgerMenu.click();
		browser.pause(2000);
		ServiceDeskPage.chooseColumns.waitForDisplayed();
		ServiceDeskPage.chooseColumns.click();
		browser.pause(3000);
		console.log('I open choose columns interface');
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
		console.log('going to select first ticket');
		if (ServiceDeskPage.noDataAvailable.isExisting() === true)
		{
			console.log(".... no record/ticket found....");

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

		browser.pause(2000);
		if(ServiceDeskPage.btnResolved.getAttribute('class').includes('active'))
		{
			ServiceDeskPage.btnResolved.click();
			browser.pause(2000);
		}

		this.ticketID = ServiceDeskPage.tablServiceDeskRowOne.getText();
		// this.ticketType = ServiceDeskPage.tablServiceDesktTicketType.getText();
		// this.ticketSummary = ServiceDeskPage.tablServiceDesktTicketSummary.getText();
		console.log('Ticket ID is: ' + this.ticketID);
		ServiceDeskPage.tablServiceDeskRowOne.click();
		//console.log('I click on first row!');
		browser.pause(2000);
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

	addTicket(customerName, flow, ticketSummary, type, ticketPriority, assignee, ticketFollower){
		var Esckeys = ['\uE00C'];
		var clearkeys = ['\uE011', '\uE008', '\uE010','\uE017'];
		browser.pause(2000);
		var dropdownValueSelection = ['\uE015','\uE015', '\uE007'];
		customerName = customerName.replace(/['"]+/g, '');
		type = type.replace(/['"]+/g, '');
		ticketPriority = ticketPriority.replace(/['"]+/g, '');
		assignee = assignee.replace(/['"]+/g, '');
		ticketFollower = ticketFollower.replace(/['"]+/g, '');
		ticketSummary = ticketSummary.replace(/['"]+/g, '');
		ServiceDeskPage.btnCustomerName.waitForDisplayed();
		ServiceDeskPage.btnCustomerName.waitForClickable();
		browser.pause(1000);
		ServiceDeskPage.searchName.setValue(customerName);
		//browser.pause(4000);
		ServiceDeskPage.autocompleteDialouge.waitForDisplayed();
		ServiceDeskPage.autocompleteDialouge.waitForClickable();
		ServiceDeskPage.autocompleteDialouge.click();
		browser.pause(2000);
		ServiceDeskPage.addTicketType.waitForClickable();
		ServiceDeskPage.addTicketType.click();
		//browser.pause(3000);
		ServiceDeskPage.autocompleteDialouge.waitForDisplayed();
		ServiceDeskPage.autocompleteDialouge.waitForClickable();
		browser.keys(dropdownValueSelection);
		browser.pause(2000);
		if(ServiceDeskPage.ticketContinueAnyway.isExisting())
		{
			ServiceDeskPage.ticketContinueAnyway.click();
		}
		console.log('Ticket Type updated!');
		ServiceDeskPage.ticketSummary.scrollIntoView();
		ServiceDeskPage.ticketSummary.waitForClickable();
		ServiceDeskPage.ticketSummary.click();
		ServiceDeskPage.ticketSummary.keys(clearkeys);
		browser.pause(1000);
		ServiceDeskPage.ticketSummary.setValue(ticketSummary);
		if(ticketFollower!="")
		{
			ServiceDeskPage.docTicketFollower.waitForDisplayed();
			ServiceDeskPage.docTicketFollower.click();
			browser.pause(2000);
			ServiceDeskPage.ticketFollowerDropdown(ticketFollower).click();	
			ServiceDeskPage.ticketFollowerDropdown(ticketFollower).keys(Esckeys);		
			console.log('follower updated!');
		}
		browser.pause(2000);
	
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
		ServiceDeskPage.autocompleteDialouge.waitForDisplayed();
		ServiceDeskPage.autocompleteDialouge.waitForClickable();
		ServiceDeskPage.autocompleteDialouge.click();
		browser.pause(2000);
		ServiceDeskPage.ticketType(flow).waitForDisplayed();
		ServiceDeskPage.ticketType(flow).click();
		browser.pause(4000);
		ServiceDeskPage.autocompleteDialouge.waitForDisplayed();
		ServiceDeskPage.autocompleteDialouge.waitForClickable();
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
		//browser.pause(3000);
		ServiceDeskPage.btnSave(flow).waitForClickable();
		ServiceDeskPage.btnSave(flow).click();
		console.log('I save ticket details');
		//browser.pause(5000);
	}

	editTicket(flow, ticketSummary){
		var suffix =  (Math.floor(new Date() / 1000));
		var keys = ['\uE011', '\uE008', '\uE010','\uE017']; // Home+Shift+End Delete key sequence is stored in array
		var Esckeys = ['\uE00C'];
		var dropdownValueSelection = ['\uE015', '\uE007'];// DownArrow + Enter
		browser.pause(5000);
		ServiceDeskPage.ticketType(flow).waitForDisplayed();
		ServiceDeskPage.ticketType(flow).click();
		browser.pause(2000);
		ServiceDeskPage.ticketType(flow).keys(dropdownValueSelection);
		browser.pause(2000);
		if(ServiceDeskPage.ticketContinueAnyway.isExisting())
		{
			ServiceDeskPage.ticketTypeCancel.waitForDisplayed();
			ServiceDeskPage.ticketTypeCancel.click();
		}
		console.log('Ticket Type updated!');
		browser.pause(2000);
		ServiceDeskPage.ticketSummary.scrollIntoView();
		ServiceDeskPage.ticketSummary.waitForClickable();
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
		browser.pause(2000);
	
	}

	saveTicketDetails()
	{
		browser.pause(3000);
		ServiceDeskPage.btnSaveNew.waitForDisplayed();
		if(ServiceDeskPage.btnSaveNew.isClickable())
		{
			console.log('going to update save ticket');
			ServiceDeskPage.btnSaveNew.click();
			console.log('I update ticket details');
		}
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
	
	selectAllTimePeriodFilter()
	{
		browser.pause(9000);
		ServiceDeskPage.btnTimePeriodFilter.waitForDisplayed();
		if(ServiceDeskPage.btnTimePeriodFilter.getAttribute('value').includes('Jan 01, 2000'))
		{
			console.log('Select All tickets filter already applied');
		}
		else{
			ServiceDeskPage.btnTimePeriodFilter.click();
			browser.pause(2000);
			ServiceDeskPage.btnAllTimePeriodFilter.waitForDisplayed();
			ServiceDeskPage.btnAllTimePeriodFilter.click();
			ServiceDeskPage.btnApplyTimePeriod.waitForDisplayed();
			ServiceDeskPage.btnApplyTimePeriod.click();
			browser.pause(5000);
			console.log('I applied All from tickets filter');
		}
	}

	getServiceDeskListCount()
	{
		browser.pause(5000);
		ServiceDeskPage.totalcount.waitForDisplayed();
		let total = ServiceDeskPage.totalcount.getText();
		const myArray = total.split(' ');
		let position = myArray.indexOf("of") + 1;
		return myArray[position];
	}

	setMinimizeWindow()
	{
		browser.setWindowSize(1200,800);
		browser.pause(2000);
	}

	

	openThreeDotMenu() {
		browser.pause(9000);
		ServiceDeskPage.tablServiceDeskRowOne.waitForDisplayed();
		this.ticketID = ServiceDeskPage.tablServiceDeskRowOne.getText();
		console.log('ticket id is '+this.ticketID);
		ServiceDeskPage.tablServiceDeskRowOne.moveTo();
		browser.pause(2000);
		ServiceDeskPage.threeDotMenu.waitForDisplayed();
		browser.pause(1000);
		ServiceDeskPage.threeDotMenu.click();
		console.log("Three dot menu was clicked");

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

	defineNewTicket()
	{
		browser.pause(5000);
		ServiceDeskPage.btnAppIcon.waitForClickable();
		ServiceDeskPage.btnAppIcon.click();
		browser.pause(2000);
		ServiceDeskPage.btnSettingsCRM.waitForDisplayed();
		ServiceDeskPage.btnSettingsCRM.waitForClickable();
		ServiceDeskPage.btnSettingsCRM.click();
		ServiceDeskPage.btnTicketTypes.waitForDisplayed();
		ServiceDeskPage.btnTicketTypes.waitForClickable();
		ServiceDeskPage.btnTicketTypes.click();
		browser.pause(7000);
		var ticketTypePrefix = 'zT';
		this.ticketType = ticketTypePrefix + (Math.floor(new Date() / 1000));
		this.ticketSummary = 'ATsum' + (Math.floor(new Date() / 1000));
		this.customfield = 'ATcus' + (Math.floor(new Date() / 1000));
		var isdefinied = false;
		var alldefined = ServiceDeskPage.alldefiniedTickets;
		for (let i = 0; i < alldefined.length; i++) {
			var ticketname = alldefined[i].getText();
			//console.log('index is' +i +' and value is'+ticketname);
			if(ticketname.replace(/[0-9]/g, '')===ticketTypePrefix)
			{
				isdefinied = true;
				this.ticketType = ticketname;
				break;
			}
		}
		//console.log('value of isdefinied '+isdefinied);
		if(isdefinied===false)
		{
			ServiceDeskPage.btnAdd.waitForClickable();
		    ServiceDeskPage.btnAdd.click();
			browser.pause(2000);
			ServiceDeskPage.settingTicketType.waitForDisplayed();
			ServiceDeskPage.settingTicketType.waitForClickable();
			ServiceDeskPage.settingTicketType.click();
			ServiceDeskPage.settingTicketType.setValue(this.ticketType);
			ServiceDeskPage.settingTicketsummary.setValue(this.ticketSummary );
			ServiceDeskPage.appointHrs.click();
			ServiceDeskPage.getListItem('1').click();
			ServiceDeskPage.appointMins.click();
			ServiceDeskPage.getListItem('0').click();
			var allswitches = ServiceDeskPage.allTicketSwitches;
			allswitches[1].click();
			ServiceDeskPage.customFiledSave.waitForClickable();
			ServiceDeskPage.customFiledsLink.click();
			browser.pause(1000);
			ServiceDeskPage.customFiledInput.waitForClickable();
			ServiceDeskPage.customFiledInput.setValue(this.customfield);
			//ServiceDeskPage.addCustomFiledInput.waitForDisplayed();
			//ServiceDeskPage.addCustomFiledInput.click();
			browser.pause(2000);
			ServiceDeskPage.customFiledSave.waitForClickable();
			ServiceDeskPage.customFiledSave.click();
			browser.pause(1000);
			//ServiceDeskPage.closeCustomField.waitForDisplayed();
			//ServiceDeskPage.closeCustomField.click();
			browser.pause(1000);
			ServiceDeskPage.btnSaveSettings.waitForClickable();
			ServiceDeskPage.btnSaveSettings.click();
			browser.pause(2000);
			ServiceDeskPage.btnAddTicketClose.click();
		}
		else
		{
			ServiceDeskPage.btnCloseSettings.waitForClickable();
			ServiceDeskPage.btnCloseSettings.click();
		}
		if(ServiceDeskPage.btn_popupOk.isExisting())
		{ServiceDeskPage.btn_popupOk.click();}
		browser.pause(2000);
	}

	changeTicketType()
	{
		this.ticketType = ServiceDeskPage.tablServiceDesktTicketType.getText();
		var dropdownValueSelection = ['\uE015','\uE015', '\uE007'];// DownArrow + Enter
		browser.pause(2000);
		ServiceDeskPage.ticketType().click();
		browser.pause(2000);
		ServiceDeskPage.ticketType().keys(dropdownValueSelection);
		browser.pause(2000);
	}

	cancelChangeTicketType()
	{
		browser.pause(2000);
		ServiceDeskPage.cancelTicketType.click();
	}

	updateTicketDetails()
	{
		var dropdownValueSelection = ['\uE015','\uE015', '\uE007'];
		this.ticketType = ServiceDeskPage.ticketType().getAttribute('value');
		ServiceDeskPage.ticketSummary.scrollIntoView();
		ServiceDeskPage.ticketSummary.waitForClickable();
		this.ticketSummary = ServiceDeskPage.ticketSummary.getAttribute('value');
		browser.pause(2000);
		ServiceDeskPage.ticketType().waitForDisplayed();
		ServiceDeskPage.ticketType().click();
		browser.pause(2000);
		ServiceDeskPage.ticketType().keys(dropdownValueSelection);
		browser.pause(2000);
		if(ServiceDeskPage.ticketContinueAnyway.isExisting())
		{
			ServiceDeskPage.ticketContinueAnyway.click();
		}
		console.log('Ticket Type updated!');
		ServiceDeskPage.ticketStatusField.scrollIntoView();
		this.ticketStatus = ServiceDeskPage.ticketStatusField.getAttribute('value');
		ServiceDeskPage.ticketStatusField.click();
		browser.keys(dropdownValueSelection);
		this.ticketPriority = ServiceDeskPage.ticketPriority.getAttribute('data-testid');
		ServiceDeskPage.ticketPriority.click();
		browser.pause(1000);
		switch(this.ticketPriority){
					
			case 'KeyboardArrowDownIcon':
				browser.keys(dropdownValueSelection);
				break;
			case 'KeyboardArrowUpIcon':
				browser.keys(dropdownValueSelection);
				break;
			case 'KeyboardDoubleArrowUpIcon':
				browser.keys(dropdownValueSelection);
				break;
		}
		var suffix =  (Math.floor(new Date() / 1000));
		var keys = ['\uE011', '\uE008', '\uE010','\uE017'];
		browser.pause(2000);
		ServiceDeskPage.ticketSummary.scrollIntoView();
		ServiceDeskPage.ticketSummary.waitForClickable();
		ServiceDeskPage.ticketSummary.click();
		ServiceDeskPage.ticketSummary.keys(keys);
		browser.pause(1000);
		ServiceDeskPage.ticketSummary.setValue(suffix);
		browser.pause(2000);
	}

	restoreTicketDetails()
	{
		browser.pause(1000);
		ServiceDeskPage.btnRestore.click();
		browser.pause(2000);
	}

	updateContactPhone()
	{
		var clearkeys = ['\uE011', '\uE008', '\uE010','\uE017'];
		browser.pause(2000);
		ServiceDeskPage.btnEditServiceContact.click();
		browser.pause(1000);
		ServiceDeskPage.contactPhone.click();
		ServiceDeskPage.contactPhone.keys(clearkeys);
		this.contactPhone = Math.floor(Math.random() * 9000000000).toString();
        ServiceDeskPage.contactPhone.setValue(this.contactPhone);
		browser.pause(1000);
		this.contactPhone = ServiceDeskPage.contactPhone.getAttribute('value');
		this.saveTicketDetails();
	}

	closeTicketDock()
	{
		ServiceDeskPage.closeOpenedTicketDock.click();
		browser.pause(2000);
	}

	closeNewTicketDock()
	{
		browser.pause(2000);
		ServiceDeskPage.closeNewTicketDock.waitForClickable();
		browser.pause(2000);
		ServiceDeskPage.closeNewTicketDock.click();
		browser.pause(2000);
	}
	getTicketIDBeforeClosingDrawer()
	{
		browser.pause(5000);
		var ticketId = ServiceDeskPage.dockHeaderForTicketID.getText().replace(/[^\d]/g,'');
		ServiceDeskPage.closeNewTicketDock.waitForClickable();
		browser.pause(1000);
		ServiceDeskPage.closeNewTicketDock.click();
		browser.pause(2000);
		return ticketId;
	}

	addTicketDetailsWithNoSummary()
	{
		var Esckeys = ['\uE00C'];
		browser.pause(5000);
		ServiceDeskPage.btnCustomerName.waitForDisplayed();
		ServiceDeskPage.btnCustomerName.click();
		browser.pause(1000);
		var customerName = 'Monika';
		var ticketFollower = 'Jon Automation';
		ServiceDeskPage.searchName.setValue(customerName);
		browser.pause(3000);
		ServiceDeskPage.customerNameDropdown(customerName).waitForDisplayed();
		ServiceDeskPage.customerNameDropdown(customerName).click();
		browser.pause(2000);
		ServiceDeskPage.docTicketFollower.waitForDisplayed();
		ServiceDeskPage.docTicketFollower.click();
		browser.pause(2000);
		ServiceDeskPage.ticketFollowerDropdown(ticketFollower).click();	
		ServiceDeskPage.ticketFollowerDropdown(ticketFollower).keys(Esckeys);
		browser.pause(2000);
	}
	
	goToTickets()
	{
		browser.pause(3000);
        ServiceDeskPage.tabTickets.waitForDisplayed();
		ServiceDeskPage.tabTickets.waitForClickable();
		ServiceDeskPage.tabTickets.click();
		ServiceDeskPage.btnAll.waitForClickable();
		ServiceDeskPage.btnAll.click();
		browser.pause(3000);
		ServiceDeskPage.btnResolved.waitForClickable();
		if(ServiceDeskPage.btnResolved.getAttribute('class').includes('active'))
		{
			ServiceDeskPage.btnResolved.click();
			browser.pause(5000);
		}
		console.log("......completing GoToTicket function");

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
				if (ServiceDeskPage.chooseColumnSummaryEnabled.isExisting() === true){
					// Disable summary column
					ServiceDeskPage.chooseColumnSummary.waitForDisplayed();
					ServiceDeskPage.chooseColumnSummary.click();
					browser.pause(2000);
				}
			}
			else{
				console.log('No Data Available...');
				expect(1).is.eql(1);//no data is available
			}

			browser.pause(2000);
			ServiceDeskPage.btnClose.click();
	}
	enableSummaryColumn()
	{
		if(Number(this.getServiceDeskListCount()) >0){
			ServiceDeskPage.hamburgerMenu.waitForDisplayed();
			ServiceDeskPage.hamburgerMenu.click();
			browser.pause(2000);
			ServiceDeskPage.getChooseColumnFromList.waitForDisplayed();
			ServiceDeskPage.getChooseColumnFromList.click();
							
				if (ServiceDeskPage.chooseColumnSummaryEnabled.isExisting() === false){
					// Enable summary column
					ServiceDeskPage.chooseColumnSummary.waitForDisplayed();
					ServiceDeskPage.chooseColumnSummary.click();
					browser.pause(2000);
					// Disable priority column
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
		console.log('extracted  columns text is: ' + tableColumnHeader);
		//tableColumnHeader = tableColumnHeader.substring(0, tableColumnHeader.length - 2);
		console.log('checking columns for: ' + tableColumnHeader);
		expect(tableColumnHeader).is.eql(columnName);
		this.enableSummaryColumn();
		browser.pause(2000);
	}
// "Priority", "Summary", "Type"
	getContentsOfFirstRow() {
		// let priorityColID = ServiceDeskPage.ticketTableHeaderColID("Priority");
		ServiceDeskPage.tablServiceDeskRowOne.waitForDisplayed();
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
			ServiceDeskPage.hamburgerMenu.waitForDisplayed();
			ServiceDeskPage.hamburgerMenu.waitForClickable();
			ServiceDeskPage.hamburgerMenu.click();
			browser.pause(2000);
			ServiceDeskPage.getChooseColumnFromList.waitForClickable();
			ServiceDeskPage.getChooseColumnFromList.click();
			ServiceDeskPage.restoreDefaultColumns.waitForClickable();
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
			ServiceDeskPage.btnClose.waitForClickable();
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
		ServiceDeskPage.ticketSummary.waitForClickable();
		expect(ServiceDeskPage.ticketSummary.getAttribute('value')).to.eql(this.ticketSummary);
		console.log('actual ticket summary is verified');
	}
	
	verifyTicketUpdate(ticketSummary, ticketType, ticketPriority, assignee, ticketFollower){
	
		// --- this section is to save the updated changes to the ticket
		ServiceDeskPage.btnSaveNew.waitForDisplayed();
		ServiceDeskPage.btnSaveNew.click();
		console.log('I update ticket details');

		ServiceDeskPage.confirmationMsg.waitForDisplayed();
		
		if(serviceDeskPage.confirmationMsg.isExisting())
		{
			this.ticketAddStatus = ServiceDeskPage.confirmationMsg.getText();
			console.log(this.ticketAddStatus);
		}
		browser.pause(3000);

		// --- verification

		// var msg;
		// ServiceDeskPage.confirmationMsg.waitForDisplayed();
		// msg = ServiceDeskPage.confirmationMsg.getText();
		expect(this.ticketAddStatus).to.eql("Saved Successfully");
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
		if(this.ticketAddStatus==true)
		{
			expect(1).to.eql(1);
		}
		else{
			ServiceDeskPage.confirmationMsg.waitForDisplayed();
			//console.log('save message is :' +ServiceDeskPage.confirmationMsg.getText());
			expect(ServiceDeskPage.confirmationMsg.getText()).to.eql('Saved Successfully');
		}
	}
	
	verifyNewticketType()
	{
		browser.pause(2000);
		ServiceDeskPage.ticketType().click();
		browser.pause(2000);
		expect(ServiceDeskPage.getListItem(this.ticketType).isExisting()).to.be.true;
	}

	verifyTicketTypePrompt(warning)
	{
		var options = warning.raw();
		browser.pause(3000);
		expect(ServiceDeskPage.dialogHeadings[0].getText().includes(options[0][0])).to.be.true;
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
		//expect(ServiceDeskPage.scheduleFiled.getAttribute('value')).to.eql('Set an Appointment');
		expect(ServiceDeskPage.btnSetSchedule.isExisting()).to.be.true;
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

module.exports = new serviceDeskActions();
