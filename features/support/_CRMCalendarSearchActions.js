var LoginPage = require('../pageobjects/login.page');
var _CRMCalendarSearchPage = require('../pageobjects/_CRMCalendarSearch.page');
var SubListPage = require('../pageobjects/subscriberlist.page');
var Utils = require('./utils');
const { util } = require('chai');
var expect = require('chai').expect; 
var should = require('chai').should();

class _CRMCalendarSearchActions{

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
		this.addedTicketNumber;
		this.dataAvailable;
	}
	
    openVispApp(){		
		_CRMCalendarSearchPage.open();		
	}
	
	loginToVisp(creds){
		var credentials = creds.raw();//storing datatable as 2D array
		Utils.login(credentials[0][0], credentials[0][1]);
	
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
				browser.pause(3000);				
				_CRMCalendarSearchPage.btnAddTicket.waitForDisplayed();			    
			    _CRMCalendarSearchPage.btnAddTicket.click();
				browser.pause(1000);
				
				_CRMCalendarSearchPage.topMenuItemTicket.waitForDisplayed();				
				_CRMCalendarSearchPage.topMenuItemTicket.click();
			break;
		}
		
	}

	openServiceDeskScreen(){ 
		browser.pause(1000);		
		_CRMCalendarSearchPage.CRM_Menu.waitForExist();		
		_CRMCalendarSearchPage.CRM_Menu.waitForDisplayed();
		_CRMCalendarSearchPage.CRM_Menu.click();
		browser.pause(1000);
		console.log('I open CRM');		
	}	
	enableDateAddedColumn () {

			if (_CRMCalendarSearchPage.dateAddedOnColumnPopup.isExisting()=== false) {

				_CRMCalendarSearchPage.dateAddedOption.click();	
			}
			browser.pause(2000);
			_CRMCalendarSearchPage.closeBtnOnChooseColumn.click();
		//}
	}


	addNewTicket(customerName, flow, ticketSummary, type){ 
		var Esckeys = ['\uE00C'];
		var clearkeys = ['\uE011', '\uE008', '\uE010','\uE017'];
		browser.pause(2000);
		var dropdownValueSelection = ['\uE015', '\uE007'];
		customerName = customerName.replace(/['"]+/g, '');
		type = type.replace(/['"]+/g, '');
		
		ticketSummary = ticketSummary.replace(/['"]+/g, '');
	
		_CRMCalendarSearchPage.btnCustomerName.waitForDisplayed();	
		browser.pause(1000);
	
		_CRMCalendarSearchPage.searchName.setValue(customerName);
		browser.pause(3000);		
	
		_CRMCalendarSearchPage.autocompleteDialouge.waitForDisplayed();
		_CRMCalendarSearchPage.autocompleteDialouge.waitForClickable();
		_CRMCalendarSearchPage.autocompleteDialouge.click();
		browser.pause(2000);

		_CRMCalendarSearchPage.addTicketType.waitForClickable();
		_CRMCalendarSearchPage.addTicketType.click();

		_CRMCalendarSearchPage.autocompleteDialouge.waitForDisplayed();
		_CRMCalendarSearchPage.autocompleteDialouge.waitForClickable();		
		browser.pause(3000);
		
		browser.keys(dropdownValueSelection);
		browser.pause(2000);
		
		console.log('Ticket Type updated!');
		
		_CRMCalendarSearchPage.ticketSummary.scrollIntoView();		
		_CRMCalendarSearchPage.ticketSummary.waitForClickable();		
		_CRMCalendarSearchPage.ticketSummary.click();		
		_CRMCalendarSearchPage.ticketSummary.keys(clearkeys);
		browser.pause(1000);
		
		_CRMCalendarSearchPage.ticketSummary.setValue(ticketSummary);		
		browser.pause(2000);
		
	}
	
	saveTicket(flow) 
	{
		browser.pause(1000);		
		_CRMCalendarSearchPage.btnSave(flow).waitForClickable();		
		_CRMCalendarSearchPage.btnSave(flow).click();		
		console.log('I save ticket details');		
		this.addedTicketNumber = _CRMCalendarSearchPage.ticketNumber.getText();
				
		let ticketNum = this.addedTicketNumber.split("#"); // to save ticket number		
		this.addedTicketNumber = ticketNum [ticketNum.length - 1]; // to save last two digits of ticket number
		console.log("Added ticket number was: "+this.addedTicketNumber);
		
		browser.pause(1000);
	}

	selectFilterOptionOnCalendar(filterOption) 
	{
		
		let filterOptionRaw = filterOption.raw();
	
		browser.pause(1000);
	
		_CRMCalendarSearchPage.btnTimePeriodFilter.waitForClickable();
		browser.pause(1000);	
		_CRMCalendarSearchPage.btnTimePeriodFilter.click();

		if (filterOptionRaw == "Today") {
			
			browser.pause(1000);
			console.log('I select: ' + filterOptionRaw);
	
			_CRMCalendarSearchPage.todayCalendarFilterOption.waitForDisplayed();
			_CRMCalendarSearchPage.todayCalendarFilterOption.click();
			_CRMCalendarSearchPage.applyBtnOnCalendar.waitForDisplayed();
			_CRMCalendarSearchPage.applyBtnOnCalendar.click();
			browser.pause(1000);

		}
		if (filterOptionRaw == "Yesterday") {
			
			browser.pause(1000);
			console.log('I select: ' + filterOptionRaw);
			
			_CRMCalendarSearchPage.yesterdayCalendarFilterOption.waitForDisplayed();
			_CRMCalendarSearchPage.yesterdayCalendarFilterOption.click();
			_CRMCalendarSearchPage.applyBtnOnCalendar.waitForDisplayed();
			_CRMCalendarSearchPage.applyBtnOnCalendar.click();
			browser.pause(1000);
		}

		if (filterOptionRaw == "This Week"){
			
			browser.pause(1000);
			console.log('I select: ' + filterOptionRaw);
			_CRMCalendarSearchPage.thisWeekCalendarFilterOption.waitForDisplayed();
			_CRMCalendarSearchPage.thisWeekCalendarFilterOption.click();
			_CRMCalendarSearchPage.applyBtnOnCalendar.waitForDisplayed();
			_CRMCalendarSearchPage.applyBtnOnCalendar.click();
			browser.pause(1000);
		}

		if (filterOptionRaw == "Last Week"){
			
			browser.pause(1000);
			console.log('I select: ' + filterOptionRaw);
			_CRMCalendarSearchPage.lastWeekCalendarFilterOption.waitForDisplayed();
			_CRMCalendarSearchPage.lastWeekCalendarFilterOption.click();
			_CRMCalendarSearchPage.applyBtnOnCalendar.waitForDisplayed();
			_CRMCalendarSearchPage.applyBtnOnCalendar.click();
			browser.pause(1000);			
		}

		if (filterOptionRaw == "This Month"){
			
			browser.pause(2000);
			console.log('I select: ' + filterOptionRaw);
			_CRMCalendarSearchPage.thisMonthCalendarFilterOption.waitForDisplayed();
			_CRMCalendarSearchPage.thisMonthCalendarFilterOption.click();
			_CRMCalendarSearchPage.applyBtnOnCalendar.waitForDisplayed();
			_CRMCalendarSearchPage.applyBtnOnCalendar.click();
			browser.pause(2000);			
		}

		if (filterOptionRaw == "Last Month"){
			
			browser.pause(2000);
			console.log('I select: ' + filterOptionRaw);
			_CRMCalendarSearchPage.lastMonthCalendarFilterOption.waitForDisplayed();
			_CRMCalendarSearchPage.lastMonthCalendarFilterOption.click();
			_CRMCalendarSearchPage.applyBtnOnCalendar.waitForDisplayed();
			_CRMCalendarSearchPage.applyBtnOnCalendar.click();
			browser.pause(2000);
			
		}
		if (filterOptionRaw == "Reset"){
			
			browser.pause(2000);
			console.log('I select: ' + filterOptionRaw);
			_CRMCalendarSearchPage.btnReset.waitForDisplayed();
			_CRMCalendarSearchPage.btnReset.click();
			//_CRMCalendarSearchPage.applyBtnOnCalendar.waitForDisplayed();
			//_CRMCalendarSearchPage.applyBtnOnCalendar.click();
			browser.pause(4000);
			
		}

		console.log('I applied '+ filterOptionRaw+ ' from date/time filter');		
		browser.pause(1000);		
	}

	selectCustomTimePeriodFilter(filterOption, customDays) 
	{
		
		let filterOptionRaw = filterOption.raw();
		_CRMCalendarSearchPage.btnTimePeriodFilter.waitForClickable();
		browser.pause(1000);		
		_CRMCalendarSearchPage.btnTimePeriodFilter.click();

		if (customDays === "days up to today") {
			_CRMCalendarSearchPage.inputDaysUptoToday.waitForClickable();
			_CRMCalendarSearchPage.inputDaysUptoToday.click();					
			_CRMCalendarSearchPage.inputDaysUptoToday.clearValue();
			browser.pause(500);		
			_CRMCalendarSearchPage.inputDaysUptoToday.setValue(filterOptionRaw);		
		}

		else if (customDays === "days starting today") {
			_CRMCalendarSearchPage.inputDaysStartingToday.waitForClickable();
			_CRMCalendarSearchPage.inputDaysStartingToday.click();					
			_CRMCalendarSearchPage.inputDaysStartingToday.clearValue();
			browser.pause(500);	
			_CRMCalendarSearchPage.inputDaysStartingToday.setValue(filterOptionRaw);
		}

		browser.pause(1000);
		_CRMCalendarSearchPage.applyBtnOnCalendar.waitForDisplayed();
		_CRMCalendarSearchPage.applyBtnOnCalendar.click();
		browser.pause(1000);
		console.log('I applied '+ filterOptionRaw+ ' from date/time filter');
		
		browser.pause(2000);
		
	}

	getServiceDeskListCount() 
	{
		browser.pause(1000);
		
		_CRMCalendarSearchPage.totalcount.waitForDisplayed();

		let total = _CRMCalendarSearchPage.totalcount.getText();
		
		const myArray = total.split(' ');
		let position = myArray.indexOf("of") + 1;
		console.log("Total records found: "+myArray[position]);
		return myArray[position];
	}

	setMinimizeWindow()
	{
		browser.setWindowSize(1200,800);
		browser.pause(2000);
	}

	
	focusTheDateAddedColumn() { // to get Date Added column into focus 

		if (this.dataAvailable > 0) {
			console.log("focusTheDateAddedColumn.....dataAvailable > 0");
			this.moveToFirstTicketNumberAtFirstRow();
			browser.pause(500);		
			this.pressRightKeys();
		}

		else {
			console.log("focusTheDateAddedColumn.....No Data Available...");
			expect (Number(this.getServiceDeskListCount())).to.be.lt(1);
		}

	}

	pressRightKeys() {
		browser.pause(1000);
		
		var rightKey = ['\uE014'];
		
		for (var i = 0; i< 30; i++) {
			browser.keys(rightKey);
			browser.pause(200);					
		}	
	}
	
	moveToFirstTicketNumberAtFirstRow() {		
		browser.pause(500);
		let row = _CRMCalendarSearchPage.firstRowAtColumn();
		// row.scrollIntoView({ block: 'center', inline: 'center' });
		browser.pause(1000);
		
		row.scrollIntoView();
		browser.pause(1000);
		row.moveTo();	
		
		browser.pause(1000);
		_CRMCalendarSearchPage.threeDotMenu.waitForClickable();
		browser.pause(500);
		_CRMCalendarSearchPage.threeDotMenu.click();
		console.log("Three dot menu was clicked");

		browser.pause(500);
		var escapeKey = ['\uE00C'];
		browser.keys(escapeKey);

	}

	openThreeDotMenu() {		
		browser.pause(500);
		expect(_CRMCalendarSearchPage.threeDotMenu.isDisplayed).be.true;		
		browser.pause(500);
		_CRMCalendarSearchPage.threeDotMenu.click();
		console.log("Three dot menu was clicked");

	}

	getDatafromDateAddedColumn()
	{
		var getAllHeaders = _CRMCalendarSearchPage.allHeaders;
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
		var updatedContents = _CRMCalendarSearchPage.allColumnsData[indexOfType];
		console.log("updated Contents: "+updatedContents);
	}

	sortDateColumnDesc() {
		browser.pause(3000);
		console.log("in DESC now");

		while (_CRMCalendarSearchPage.isColumnSortDesc.isExisting() == false){
			this.checkSortingOnDateAddedColumn();
			browser.pause(2000);
		}
		
		console.log("date column sorted desc");
		this.greatestDate = this.getDateAddedOfFirstRow();
	}

	sortDateColumnAsc() {
		browser.pause(3000);
		console.log("in asc now");

		while (_CRMCalendarSearchPage.isColumnSortAsc.isExisting() == false){
			this.checkSortingOnDateAddedColumn();
			browser.pause(2000);
		}
		console.log("date column sorted ASC");
		this.shortestDate = this.getDateAddedOfFirstRow();		
	}

	openRecentlyAddedTicket() { //using

		let row = _CRMCalendarSearchPage.firstRowAtColumn();

		browser.pause(1000);
		//row.moveTo();		
		row.click();
		browser.pause(500);
	}	

	verifyOpenedTicket () { 
		browser.pause(1000);
		
		let row = _CRMCalendarSearchPage.firstRowAtColumn();
		expect(row.getText()).be.eql(this.addedTicketNumber);
		browser.pause(2000);
	}

	addColumnIfItsNotExist()
	{
		var getAllHeaders = _CRMCalendarSearchPage.allHeaders;
		for (var i=0; i<getAllHeaders.length;i++)
		{
			if(getAllHeaders[i].getText().includes('Date Added'))
			{
				this.columnDateAdded=true;
				break;
			}
		}
		
	}

	checkSortingOnDateAddedColumn() 
	{
		
		if (this.dataAvailable > 0) {
			console.log("checkSortingOnDateAddedColumn..... dataAvaialable > 0");

			browser.pause(2000);
			var getAllHeaders = _CRMCalendarSearchPage.allHeaders;
			var updatedIndex =0;
			for (var i=0; i<getAllHeaders.length;i++)
			{
				if(getAllHeaders[i].getText().includes('Date Added'))
				{
					updatedIndex = i;
					break;
				}
			}
			updatedIndex = updatedIndex-1;
			console.log('index of added date is '+updatedIndex);
			let indexToAdd = updatedIndex+1; 
			var updatedContents = _CRMCalendarSearchPage.allColumnsTextData;
			console.log('added date column value is '+updatedContents[updatedIndex].getText());
			var getDateRange = _CRMCalendarSearchPage.btnTimePeriodFilter.getAttribute('value');
			var separatedArrays = getDateRange.split('-');//split data into Array values
			var dateLowerRange =new Date(separatedArrays[0]);;
			var dateUpperRange =new Date(separatedArrays[1]);

			for (var i=updatedIndex; i<updatedContents.length;)
			{
				console.log('Ticket Date is: '+updatedContents[i].getText());
				var date = new Date(updatedContents[i].getText());//get date from ticket schedule time
				var year = date.getFullYear();
				var months = date.toLocaleDateString(undefined, { month: 'short'});
				var day = String(date.getDate()).padStart(2, '0');
				var extractedDateFormat = day+' '+months+' '+year;
				console.log(extractedDateFormat);
				var CurrentDate = new Date(extractedDateFormat);
				if(dateLowerRange <= CurrentDate && dateUpperRange >= CurrentDate){
					{expect(1).to.eql(1);}//date is within range
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

		else {
			console.log("checkSortingOnDateAddedColumn.....No Data Available...");
			expect (Number(this.getServiceDeskListCount())).to.be.lt(1);
		}
	}

	getDateAddedOfFirstRow() {		
		let dateAddedColID = _CRMCalendarSearchPage.ticketTableHeaderColID("Date Added");
		this.dateAdded = _CRMCalendarSearchPage.firstRowContentsOfCol(dateAddedColID);
		console.log("top date is: "+this.dateAdded);
		return this.dateAdded;
	}

	refreshPage()
	{
		browser.pause(4000);
		browser.refresh();
	}

	verifyNewlyAddedTicketAvailable() {	
		browser.pause(7000);
		_CRMCalendarSearchPage.ticketGridParent	.scrollIntoView();
		let ticketIDColNum = _CRMCalendarSearchPage.ticketTableHeaderColID("Ticket ID");
		expect(_CRMCalendarSearchPage.getContents(ticketIDColNum, this.addedTicketNumber)).be.true;
		browser.pause(1000);
	}

	closeTicketDock() 
	{
		browser.pause(2000);
		_CRMCalendarSearchPage.closeOpenedTicketDock.waitForClickable();
		_CRMCalendarSearchPage.closeOpenedTicketDock.click();
		console.log("Ticket Dock closed");
		browser.pause(1000);
	}

	verifyAvailableTicketsMoreThanZero () { 
		
		if (Number(this.getServiceDeskListCount()) < 1) {
			console.log("in If case...No Data Available...");
			this.dataAvailable = 0;
			expect (Number(this.getServiceDeskListCount())).to.be.lt(1);
		}

		else {
			console.log("in else case");
			this.dataAvailable = 1;
			expect (Number(this.getServiceDeskListCount())).to.be.gt(0);			
		}
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
        _CRMCalendarSearchPage.listTabOnServiceDesk.waitForDisplayed();
		_CRMCalendarSearchPage.listTabOnServiceDesk.waitForClickable();
		_CRMCalendarSearchPage.listTabOnServiceDesk.click();
		_CRMCalendarSearchPage.btnAll.waitForClickable();
		_CRMCalendarSearchPage.btnAll.click();		
		browser.pause(2000);
	}
	
	getColumnCurrentStatus(columnName) { 
		browser.pause(1000);
		columnName = columnName.replace(/['"]+/g, '');
		
		if (_CRMCalendarSearchPage.columnStatus(columnName))
		{
			return "Enable";
		}

		else {
			return "Disable";
		}

	}

	makeColumnEnableOrDisable (columnName) { 
		browser.pause(1000);
		columnName = columnName.replace(/['"]+/g, '');
		let columnRadioBtn = _CRMCalendarSearchPage.columnRadioButton(columnName);
		columnRadioBtn.click();
		console.log(columnName+" was clicked");
	}

	columnsTobeShownInList(columnName, status) { 
		
		if (this.dataAvailable > 0) {
			console.log("columnsTobeShownInList.....this.dataAvailable > 0");
			browser.pause(1000);
			columnName = columnName.replace(/['"]+/g, '');
			status = status.replace(/['"]+/g, '');
			_CRMCalendarSearchPage.menuThreeDotsForTickets.waitForClickable();
			_CRMCalendarSearchPage.menuThreeDotsForTickets.click(); // open the menu to make the ticket grid full

			browser.pause(500);		

			_CRMCalendarSearchPage.fullViewOfTicketGrid.click(); // click on Full option	
			browser.pause(500);
			var escapeKey = ['\uE00C'];
			browser.keys(escapeKey);		

			_CRMCalendarSearchPage.hamburgerMenu.scrollIntoView({ block: 'center', inline: 'center' });			

			_CRMCalendarSearchPage.hamburgerMenu.waitForDisplayed();
			_CRMCalendarSearchPage.hamburgerMenu.waitForClickable();
			_CRMCalendarSearchPage.hamburgerMenu.click();
			browser.pause(2000);

			_CRMCalendarSearchPage.getChooseColumnFromList.waitForClickable();
			_CRMCalendarSearchPage.getChooseColumnFromList.waitForClickable();
			_CRMCalendarSearchPage.getChooseColumnFromList.click();
			
			browser.pause(1000);

			// _CRMCalendarSearchPage.restoreDefaultColumns.waitForClickable();
			// _CRMCalendarSearchPage.restoreDefaultColumns.click();
					
			let statusNow = this.getColumnCurrentStatus(columnName);

			if (statusNow === status)
			{			
				console.log("Status was already "+status);			
			}
			else {
				
				this.makeColumnEnableOrDisable (columnName);
				console.log("Status was changed to: "+status);
				
			}
			console.log("Current status of "+columnName+"is " +this.getColumnCurrentStatus(columnName));
			_CRMCalendarSearchPage.closeBtnOnChooseColumns.waitForClickable();
			_CRMCalendarSearchPage.closeBtnOnChooseColumns.click();		
			browser.pause(1000);

		}

		else {
			console.log("columnsTobeShownInList.....No Data Available...");
			expect(_CRMCalendarSearchPage.noDataAvailable.getText()).to.eql("No Data Available...");
		}
	}

}

module.exports = new _CRMCalendarSearchActions();