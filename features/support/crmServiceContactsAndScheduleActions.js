
var crmserviceconSche = require('../pageobjects/crmServiceContactsAndSchedule.page');

var expect = require('chai').expect; 


class crmServiceContactsAndScheduleActions{
	
	constructor(){
		this.dueDateBefore;this.beforeExtactTime;this.ticketNumber;this.keepTheOldTicketid;
		this.Esckeys = ['\uE00C'];
		this.downArrowKey = ['\ue015'];// arrow down
		this.enterKey = ['\ue007'];// enter
		this.tabkey =['\uE004'];
		this.clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		this.ticketAdded='The ticket was added successfully';
		this.ticketUpdated='Ticket updated successfully';
		this.linkedTicketMsg='Ticket Linked successfully';
	}
	goToTicketDetailPage()
	{
		crmserviceconSche.btnServiceDesk.waitForDisplayed();
		crmserviceconSche.btnServiceDesk.click();
		crmserviceconSche.btnList.waitForDisplayed();
		crmserviceconSche.btnList.click();
		browser.pause(5000);
	}
	OpenFirstTicket()
	{
		crmserviceconSche.firstTicket.waitForDisplayed();
		crmserviceconSche.firstTicket.click();
		crmserviceconSche.dockHeader.waitForDisplayed();
	}
	clickOnKebabMenu()
	{
		crmserviceconSche.kebabMenu.waitForDisplayed();
		crmserviceconSche.kebabMenu.click();
	}
	clickOnNewBeta()
	{
		crmserviceconSche.btnNewBeta.waitForDisplayed();
		crmserviceconSche.btnNewBeta.moveTo();
		crmserviceconSche.btnNewBeta.click();
		browser.pause(7000);
	}
	linkedTicketCollapsed()
	{
		crmserviceconSche.btnLinkedTicketCollapse.waitForDisplayed();
		expect(crmserviceconSche.btnLinkedTicketCollapse.isExisting()).to.be.true;
	}
	closeTicketDrawer()
	{
		crmserviceconSche.btnCloseDialog.waitForDisplayed();
		crmserviceconSche.btnCloseDialog.click();
	}
	clickAppPlusButton()
	{
		crmserviceconSche.btnAppPlus.waitForDisplayed();
		crmserviceconSche.btnAppPlus.click();
	}
	clickOpenTicket()
	{
		crmserviceconSche.openATicket.waitForDisplayed();
		crmserviceconSche.openATicket.click();
	}
	clickOnAssignmentType()
	{
		crmserviceconSche.assignmentType.waitForDisplayed();
		crmserviceconSche.assignmentType.click();
	}
	selectAssignmentType(assignType)
	{
		assignType = assignType.replace(/['"]+/g, '');
		crmserviceconSche.selectOption(assignType).waitForDisplayed();
		crmserviceconSche.selectOption(assignType).click();
	}
	inputSubscriberName(SubscriberName)
	{
		SubscriberName = SubscriberName.replace(/['"]+/g, '');
		console.log('value of subscriber name is '+SubscriberName);
		crmserviceconSche.inputSubsName.waitForDisplayed();
		crmserviceconSche.inputSubsName.click();
		var allcharacters = SubscriberName.split("");
		for(var i=0; i<allcharacters.length; i++){
			let key = allcharacters[i];
			browser.keys(key);
			browser.pause(500);
			}
		//crmserviceconSche.inputSubsName.setValue(SubscriberName);
		browser.pause(5000);
		crmserviceconSche.autoComplete.waitForDisplayed();
		browser.keys(this.downArrowKey);
		browser.keys(this.enterKey);
		browser.pause(3000);
	}
	openTicketType()
	{
		crmserviceconSche.ticketType.click();
	}
	selectFirstOptionFromTheList()
	{
		browser.pause(2000);
		browser.keys(this.downArrowKey);
		browser.keys(this.downArrowKey);
		browser.keys(this.enterKey);
		browser.pause(2000);
	}
	clickCreateButton()
	{
		crmserviceconSche.btnCreate.waitForDisplayed();
		crmserviceconSche.btnCreate.click();
		crmserviceconSche.confirmationMsg.waitForDisplayed();
		var msg;
		msg = crmserviceconSche.confirmationMsg.getText();
		expect(msg).to.eql(this.ticketAdded);
		browser.pause(5000);
		// crmserviceconSche.btnCancel.waitForDisplayed();
		// crmserviceconSche.btnCancel.click();
		// crmserviceconSche.firstTicket.waitForDisplayed();
		// crmserviceconSche.firstTicket.click();
		// browser.pause(3000);
		this.ticketNumber = crmserviceconSche.ticketNumber.getText().match(/\d+/)[0];
	}
	keepTheOldTicketnumber()
	{
		this.keepTheOldTicketid = this.ticketNumber;
	}



	// Method to expand the Overview section
    expandOverviewSection() {
        crmserviceconSche.expandSummarySection.waitForDisplayed();
		crmserviceconSche.expandSummarySection.click();
		browser.pause(1000);
		crmserviceconSche.expandSummarySection.click();
		browser.pause(2000);
    }

    // Method to expand the Schedule sub-section
    expandScheduleSubSection() {
        crmserviceconSche.btnExpandSchedule.waitForDisplayed();
		crmserviceconSche.btnExpandSchedule.click();
		//this.dueDateBefore =crmserviceconSche.dueDateField.getValue();
		//crmserviceconSche.dueDateField.click();
    }

    // Method to select a date from the date picker for Due Date
    clickDueDate() {
		crmserviceconSche.btnDueDate.waitForDisplayed();
		crmserviceconSche.btnDueDate.click();
    }
	selectFromDatePicker() {
		browser.pause(2000);
		crmserviceconSche.todayDate.waitForDisplayed();
		this.dueDateBefore = crmserviceconSche.todayDate.getText();
		console.log('today extracted value '+this.dueDateBefore);
		crmserviceconSche.todayDate.click();
    }
	clickOkOfDatePicker() {
		crmserviceconSche.datePickerOk.waitForDisplayed();
		crmserviceconSche.datePickerOk.click();
    }
	 // Method to click on Preferred Arrival
	 clickPreferredArrival() {
		browser.pause(2000);
		crmserviceconSche.btnExpandSchedule.waitForDisplayed();
		if(crmserviceconSche.svgExpand(crmserviceconSche.btnExpandSchedule).getAttribute('data-testid')=='ExpandLessIcon')
		{
			crmserviceconSche.btnExpandSchedule.click();
		}
		browser.pause(2000);
        crmserviceconSche.btnPrefferedArrival.waitForDisplayed();
		crmserviceconSche.btnPrefferedArrival.click();
    }
	selectExactTime()
	{
		crmserviceconSche.extactTimeCalendar.waitForDisplayed();
		this.beforeExtactTime = crmserviceconSche.extactTimeCalendar.getValue();
	}
	clickOnLinkedTicketSection()
	{
		crmserviceconSche.btnLinkedTicketCollapse.waitForDisplayed();
		if(crmserviceconSche.svgExpand(crmserviceconSche.btnLinkedTicketCollapse).getAttribute('data-testid')=='ExpandLessIcon')
		{
			crmserviceconSche.btnLinkedTicketCollapse.click();
		}
	}
	clickChainIcon()
	{
		crmserviceconSche.chainIcon.waitForDisplayed();
		crmserviceconSche.chainIcon.click();
	}
	searchTicketNumberToLink()
	{
		crmserviceconSche.searchTicket.waitForDisplayed();
		crmserviceconSche.searchTicket.click();
		crmserviceconSche.searchTicket.setValue(this.keepTheOldTicketid);
		crmserviceconSche.autoComplete.waitForDisplayed();
		browser.pause(7000);
		browser.keys(this.downArrowKey);
		browser.keys(this.enterKey);
		browser.pause(2000);
	}
	clickLinkButton()
	{
		console.log('going to link button');
		browser.keys(this.tabkey);
		browser.pause(1000);
		browser.keys(this.enterKey);
		browser.pause(2000);
		//crmserviceconSche.btnLink.waitForDisplayed();
		//crmserviceconSche.btnLink.scrollIntoView();
		//crmserviceconSche.btnLink.click();
		console.log('link button clicked');
	}
	clickUnLinkButton()
	{
		if(crmserviceconSche.svgExpand(crmserviceconSche.btnLinkedTicketCollapse).getAttribute('data-testid')=='ExpandLessIcon')
		{
			crmserviceconSche.btnLinkedTicketCollapse.click();
		}
		browser.pause(2000);
		crmserviceconSche.unlinkButton.waitForDisplayed();
		crmserviceconSche.unlinkButton.click();
	}
	clickYesToUnlink()
	{
		crmserviceconSche.btnConDialogYes.waitForDisplayed();
		crmserviceconSche.btnConDialogYes.click();
	}




	// Method to verify that the due date for the ticket is updated
    verifyDueDateUpdated() {
        var msg;
		msg = crmserviceconSche.confirmationMsg.getText();
		expect(msg).to.eql(this.ticketUpdated);
		browser.pause(2000);
		if(crmserviceconSche.svgExpand(crmserviceconSche.btnExpandSchedule).getAttribute('data-testid')=='ExpandLessIcon')
		{
			crmserviceconSche.btnExpandSchedule.click();
		}
		browser.pause(2000);
		console.log('extracted value is '+crmserviceconSche.dueDateValue.getText());
		console.log('value from param is '+this.dueDateBefore);
		expect(crmserviceconSche.dueDateValue.getText().includes(this.dueDateBefore)).to.be.true;
		console.log('due date verified');
    }

    // Method to verify that a log entry is created
    verifyLogEntryCreated() {
		crmserviceconSche.activitySection.waitForDisplayed();
		if(crmserviceconSche.svgExpand(crmserviceconSche.activitySection).getAttribute('data-testid')=='ExpandLessIcon')
		{
				crmserviceconSche.activitySection.click();
		}
		browser.pause(2000);
        expect(crmserviceconSche.firstActivityRow.getText().includes('Due Date changed')).to.be.true;
    }

    // Method to verify that any ticket assignees/followers are notified
    verifyAssigneesAndFollowersNotified() {
        console.log('Method not used in steps');
    }
	// Method to verify the radio buttons for Exact Time and Window Time are displayed
    verifyTimeRadioButtons() {
		crmserviceconSche.btnExactTime.waitForDisplayed();
        expect(crmserviceconSche.btnExactTime.isExisting()).to.be.true;
		expect(crmserviceconSche.btnWindowTime.isExisting()).to.be.true;
    }
	verifyClockTimePicker()
	{
		crmserviceconSche.extactTimeCalendar.click();
		browser.keys('\uE00D');
		browser.pause(1000);
		browser.keys(this.downArrowKey);
		browser.keys(this.enterKey);
		browser.pause(2000);
		expect(this.beforeExtactTime).to.not.eql(crmserviceconSche.extactTimeCalendar.getValue());
	}
	verifyLinkedTicketContent()
	{
		browser.pause(3000);
		if(crmserviceconSche.svgExpand(crmserviceconSche.btnLinkedTicketCollapse).getAttribute('data-testid')=='ExpandLessIcon')
		{
			crmserviceconSche.btnLinkedTicketCollapse.click();
		}
		crmserviceconSche.chainIcon.waitForDisplayed();
		crmserviceconSche.noLinkedTicketHeader.waitForDisplayed();
		expect(crmserviceconSche.chainIcon.isExisting()).to.be.true;
		expect(crmserviceconSche.noLinkedTicketHeader.isExisting()).to.be.true;
	}
	verifyTicketLinkedSuccessfully()
	{
		var msg;
		msg = crmserviceconSche.confirmationMsg.getText();
		expect(msg).to.eql(this.linkedTicketMsg);
	}
	verifyLinkedTicketsCount()
	{
		browser.pause(3000);
		console.log('going to verify link ticket count');
		crmserviceconSche.btnLinkedTicketCollapse.waitForDisplayed();
		if(crmserviceconSche.svgExpand(crmserviceconSche.btnLinkedTicketCollapse).getAttribute('data-testid')=='ExpandLessIcon')
		{
			crmserviceconSche.btnLinkedTicketCollapse.click();
		}
		crmserviceconSche.linkedTicketsCount.waitForDisplayed();
		expect(crmserviceconSche.linkedTicketsCount.getText()).to.eql('1');
		console.log('link tickect count verified');
	}
	verifyTicketGetUpdated()
	{
		var msg;
		msg = crmserviceconSche.confirmationMsg.getText();
		expect(msg).to.eql(this.ticketUpdated);
	}
	verifyUnlinkedCount()
	{
		browser.pause(3000);
		crmserviceconSche.btnLinkedTicketCollapse.waitForDisplayed();
		if(crmserviceconSche.svgExpand(crmserviceconSche.btnLinkedTicketCollapse).getAttribute('data-testid')=='ExpandLessIcon')
		{
			crmserviceconSche.btnLinkedTicketCollapse.click();
		}
		crmserviceconSche.linkedTicketsCount.waitForDisplayed();
		expect(crmserviceconSche.linkedTicketsCount.getText()).to.eql('0');
	}
	verifyTicketUnlickedLogEntryCreated() {
		crmserviceconSche.activitySection.scrollIntoView();
		crmserviceconSche.activitySection.waitForDisplayed();
		if(crmserviceconSche.svgExpand(crmserviceconSche.activitySection).getAttribute('data-testid')=='ExpandLessIcon')
		{
				crmserviceconSche.activitySection.click();
		}
		browser.pause(2000);
        expect(crmserviceconSche.firstActivityRow.getText().includes('Removed linked ticket')).to.be.true;
    }
 
}
module.exports = new crmServiceContactsAndScheduleActions();
