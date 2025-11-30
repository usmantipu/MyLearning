
var crmSTP = require('../pageobjects/crmStatusTypePriority.page');

var expect = require('chai').expect; 


class crmStatusTypePriorityActions{
	
	constructor(){
		this.dueDateBefore;this.beforeExtactTime;this.ticketNumber;this.keepTheOldTicketid;
		this.keepType;this.keepPriority;this.keepTicketStatus;
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
		crmSTP.btnServiceDesk.waitForDisplayed();
		crmSTP.btnServiceDesk.click();
		crmSTP.btnList.waitForDisplayed();
		crmSTP.btnList.click();
		browser.pause(5000);
	}
	OpenFirstTicket()
	{
		crmSTP.firstTicket.waitForDisplayed();
		crmSTP.firstTicket.click();
		crmSTP.dockHeader.waitForDisplayed();
	}
	clickOnKebabMenu()
	{
		crmSTP.kebabMenu.waitForDisplayed();
		crmSTP.kebabMenu.click();
	}
	clickOnNewBeta()
	{
		crmSTP.btnNewBeta.waitForDisplayed();
		crmSTP.btnNewBeta.moveTo();
		crmSTP.btnNewBeta.click();
		browser.pause(7000);
	}
	linkedTicketCollapsed()
	{
		crmSTP.btnLinkedTicketCollapse.waitForDisplayed();
		expect(crmSTP.btnLinkedTicketCollapse.isExisting()).to.be.true;
	}
	closeTicketDrawer()
	{
		crmSTP.btnCloseDialog.waitForDisplayed();
		crmSTP.btnCloseDialog.click();
	}
	clickAppPlusButton()
	{
		crmSTP.btnAppPlus.waitForDisplayed();
		crmSTP.btnAppPlus.click();
	}
	clickOpenTicket()
	{
		crmSTP.openATicket.waitForDisplayed();
		crmSTP.openATicket.click();
	}
	clickOnAssignmentType()
	{
		crmSTP.assignmentType.waitForDisplayed();
		crmSTP.assignmentType.click();
	}
	selectAssignmentType(assignType)
	{
		assignType = assignType.replace(/['"]+/g, '');
		crmSTP.selectOption(assignType).waitForDisplayed();
		crmSTP.selectOption(assignType).click();
	}
	inputSubscriberName(SubscriberName)
	{
		SubscriberName = SubscriberName.replace(/['"]+/g, '');
		console.log('value of subscriber name is '+SubscriberName);
		crmSTP.inputSubsName.waitForDisplayed();
		crmSTP.inputSubsName.click();
		var allcharacters = SubscriberName.split("");
		for(var i=0; i<allcharacters.length; i++){
			let key = allcharacters[i];
			browser.keys(key);
			browser.pause(500);
			}
		//crmSTP.inputSubsName.setValue(SubscriberName);
		browser.pause(5000);
		crmSTP.autoComplete.waitForDisplayed();
		browser.keys(this.downArrowKey);
		browser.keys(this.enterKey);
		browser.pause(3000);
	}
	openTicketType()
	{
		this.keepPriority = crmSTP.ticketPriorityFromDialog.getAttribute('class').split(' ').find(part => part === 'text-warning');
		crmSTP.ticketType.click();
	}
	selectFirstOptionFromTheList()
	{
		browser.pause(2000);
		browser.keys(this.downArrowKey);
		browser.keys(this.downArrowKey);
		browser.keys(this.enterKey);
		browser.pause(2000);
		let allTexts = crmSTP.selectedTypeFromDialog.length;
		this.keepType = crmSTP.selectedTypeFromDialog[allTexts-1].getText();
		console.log('ticket type from dialog '+this.keepType);
		browser.pause(2000);
	}
	clickCreateButton()
	{
		crmSTP.btnCreate.waitForDisplayed();
		crmSTP.btnCreate.click();
		crmSTP.confirmationMsg.waitForDisplayed();
		var msg;
		msg = crmSTP.confirmationMsg.getText();
		expect(msg).to.eql(this.ticketAdded);
		browser.pause(5000);
		// crmSTP.btnCancel.waitForDisplayed();
		// crmSTP.btnCancel.click();
		// crmSTP.firstTicket.waitForDisplayed();
		// crmSTP.firstTicket.click();
		// browser.pause(3000);
		this.ticketNumber = crmSTP.ticketNumber.getText().match(/\d+/)[0];
	}
	keepTheOldTicketnumber()
	{
		this.keepTheOldTicketid = this.ticketNumber;
	}



	// Method to expand the Overview section
    expandOverviewSection() {
        crmSTP.expandSummarySection.waitForDisplayed();
		crmSTP.expandSummarySection.click();
		browser.pause(1000);
		crmSTP.expandSummarySection.click();
		browser.pause(2000);
    }

    // Method to expand the Schedule sub-section
    expandScheduleSubSection() {
        crmSTP.btnExpandSchedule.waitForDisplayed();
		crmSTP.btnExpandSchedule.click();
		//this.dueDateBefore =crmSTP.dueDateField.getValue();
		//crmSTP.dueDateField.click();
    }

    // Method to select a date from the date picker for Due Date
    clickDueDate() {
		crmSTP.btnDueDate.waitForDisplayed();
		crmSTP.btnDueDate.click();
    }
	selectFromDatePicker() {
		crmSTP.todayDate.waitForDisplayed();
		this.dueDateBefore = crmSTP.todayDate.getText();
		console.log('today extracted value '+this.dueDateBefore);
		crmSTP.todayDate.click();
    }
	clickOkOfDatePicker() {
		crmSTP.datePickerOk.waitForDisplayed();
		crmSTP.datePickerOk.click();
    }
	 // Method to click on Preferred Arrival
	 clickPreferredArrival() {
		crmSTP.btnExpandSchedule.waitForDisplayed();
		if(crmSTP.svgExpand(crmSTP.btnExpandSchedule).getAttribute('data-testid')=='ExpandLessIcon')
		{
			crmSTP.btnExpandSchedule.click();
		}
        crmSTP.btnPrefferedArrival.waitForDisplayed();
		crmSTP.btnPrefferedArrival.click();
    }
	selectExactTime()
	{
		crmSTP.extactTimeCalendar.waitForDisplayed();
		this.beforeExtactTime = crmSTP.extactTimeCalendar.getValue();
	}
	clickOnLinkedTicketSection()
	{
		crmSTP.btnLinkedTicketCollapse.waitForDisplayed();
		if(crmSTP.svgExpand(crmSTP.btnLinkedTicketCollapse).getAttribute('data-testid')=='ExpandLessIcon')
		{
			crmSTP.btnLinkedTicketCollapse.click();
		}
	}
	clickChainIcon()
	{
		crmSTP.chainIcon.waitForDisplayed();
		crmSTP.chainIcon.click();
	}
	searchTicketNumberToLink()
	{
		crmSTP.searchTicket.waitForDisplayed();
		crmSTP.searchTicket.click();
		crmSTP.searchTicket.setValue(this.keepTheOldTicketid);
		crmSTP.autoComplete.waitForDisplayed();
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
		//crmSTP.btnLink.waitForDisplayed();
		//crmSTP.btnLink.scrollIntoView();
		//crmSTP.btnLink.click();
		console.log('link button clicked');
	}
	clickUnLinkButton()
	{
		if(crmSTP.svgExpand(crmSTP.btnLinkedTicketCollapse).getAttribute('data-testid')=='ExpandLessIcon')
		{
			crmSTP.btnLinkedTicketCollapse.click();
		}
		browser.pause(2000);
		crmSTP.unlinkButton.waitForDisplayed();
		crmSTP.unlinkButton.click();
	}
	clickYesToUnlink()
	{
		crmSTP.btnConDialogYes.waitForDisplayed();
		crmSTP.btnConDialogYes.click();
	}

	/////////////////// TA-928 //////////////////////////////////////
	clickOnTicketPriority()
	{
		crmSTP.ticketPriorityFromDrawer.waitForDisplayed();
		crmSTP.ticketPriorityFromDrawer.waitForClickable();
		crmSTP.ticketPriorityFromDrawer.click();
	}
	selectTicketPriority()
	{
		crmSTP.ticketPriorityLowliItem.waitForDisplayed();
		crmSTP.ticketPriorityLowliItem.waitForClickable();
		crmSTP.ticketPriorityLowliItem.click();
		this.keepPriority =crmSTP.ticketPriorityLowFromDrawer.getAttribute('class').split(' ').find(part => part === 'text-secondary');
	}
	clickOnTicketTypeFromDrawer()
	{
		crmSTP.ticketTypeFromDrawer.waitForDisplayed();
		crmSTP.ticketTypeFromDrawer.waitForClickable();
		crmSTP.ticketTypeFromDrawer.click();
	}
	selectTicketTypeFromDrawer(ticketytype)
	{
		this.keepType = ticketytype.replace(/['"]+/g, '');
		crmSTP.ticketyTypeSearchDrawer.waitForDisplayed();
		crmSTP.ticketyTypeSearchDrawer.waitForClickable();
		crmSTP.ticketyTypeSearchDrawer.setValue(ticketytype);
		crmSTP.selectFirstTicketTypeSearchResult.waitForDisplayed();
		crmSTP.selectFirstTicketTypeSearchResult.click();
	}
	clickOnContinue()
	{
		crmSTP.btnConDialogYes.waitForDisplayed();
		crmSTP.btnConDialogYes.waitForClickable();
		crmSTP.btnConDialogYes.click();
	}
	clickOnTicketStatus()
	{
		crmSTP.ticketStatus.waitForDisplayed();
		crmSTP.ticketStatus.waitForClickable();
		crmSTP.ticketStatus.click();
		
	}
	selectTicketStatusFromDrawer(status)
	{
		status = status.replace(/['"]+/g, '');
		crmSTP.selectOption(status).waitForDisplayed();
		crmSTP.selectOption(status).click();
		this.keepTicketStatus = status;
	}




	// Method to verify that the due date for the ticket is updated
    verifyDueDateUpdated() {
        var msg;
		msg = crmSTP.confirmationMsg.getText();
		expect(msg).to.eql(this.ticketUpdated);
		if(crmSTP.svgExpand(crmSTP.btnExpandSchedule).getAttribute('data-testid')=='ExpandLessIcon')
		{
			crmSTP.btnExpandSchedule.click();
		}
		browser.pause(4000);
		console.log('extracted value is '+crmSTP.dueDateValue.getText());
		console.log('value from param is '+this.dueDateBefore);
		expect(crmSTP.dueDateValue.getText().includes(this.dueDateBefore)).to.be.true;
		console.log('due date verified');
    }

    // Method to verify that a log entry is created
    verifyLogEntryCreated() {
		crmSTP.activitySection.waitForDisplayed();
		if(crmSTP.svgExpand(crmSTP.activitySection).getAttribute('data-testid')=='ExpandLessIcon')
		{
				crmSTP.activitySection.click();
		}
		browser.pause(2000);
        expect(crmSTP.firstActivityRow.getText().includes('Due Date changed')).to.be.true;
    }

    // Method to verify that any ticket assignees/followers are notified
    verifyAssigneesAndFollowersNotified() {
        
    }
	// Method to verify the radio buttons for Exact Time and Window Time are displayed
    verifyTimeRadioButtons() {
		crmSTP.btnExactTime.waitForDisplayed();
        expect(crmSTP.btnExactTime.isExisting()).to.be.true;
		expect(crmSTP.btnWindowTime.isExisting()).to.be.true;
    }
	verifyClockTimePicker()
	{
		crmSTP.extactTimeCalendar.click();
		browser.keys('\uE00D');
		browser.pause(1000);
		browser.keys(this.downArrowKey);
		browser.keys(this.enterKey);
		browser.pause(2000);
		expect(this.beforeExtactTime).to.not.eql(crmSTP.extactTimeCalendar.getValue());
	}
	verifyLinkedTicketContent()
	{
		browser.pause(3000);
		if(crmSTP.svgExpand(crmSTP.btnLinkedTicketCollapse).getAttribute('data-testid')=='ExpandLessIcon')
		{
			crmSTP.btnLinkedTicketCollapse.click();
		}
		crmSTP.chainIcon.waitForDisplayed();
		crmSTP.noLinkedTicketHeader.waitForDisplayed();
		expect(crmSTP.chainIcon.isExisting()).to.be.true;
		expect(crmSTP.noLinkedTicketHeader.isExisting()).to.be.true;
	}
	verifyTicketLinkedSuccessfully()
	{
		var msg;
		msg = crmSTP.confirmationMsg.getText();
		expect(msg).to.eql(this.linkedTicketMsg);
	}
	verifyLinkedTicketsCount()
	{
		browser.pause(3000);
		console.log('going to verify link ticket count');
		crmSTP.btnLinkedTicketCollapse.waitForDisplayed();
		if(crmSTP.svgExpand(crmSTP.btnLinkedTicketCollapse).getAttribute('data-testid')=='ExpandLessIcon')
		{
			crmSTP.btnLinkedTicketCollapse.click();
		}
		crmSTP.linkedTicketsCount.waitForDisplayed();
		expect(crmSTP.linkedTicketsCount.getText()).to.eql('1');
		console.log('link tickect count verified');
	}
	verifyTicketGetUpdated()
	{
		var msg;
		msg = crmSTP.confirmationMsg.getText();
		expect(msg).to.eql(this.ticketUpdated);
	}
	verifyUnlinkedCount()
	{
		browser.pause(3000);
		crmSTP.btnLinkedTicketCollapse.waitForDisplayed();
		if(crmSTP.svgExpand(crmSTP.btnLinkedTicketCollapse).getAttribute('data-testid')=='ExpandLessIcon')
		{
			crmSTP.btnLinkedTicketCollapse.click();
		}
		crmSTP.linkedTicketsCount.waitForDisplayed();
		expect(crmSTP.linkedTicketsCount.getText()).to.eql('0');
	}
	verifyTicketUnlickedLogEntryCreated() {
		crmSTP.activitySection.scrollIntoView();
		crmSTP.activitySection.waitForDisplayed();
		if(crmSTP.svgExpand(crmSTP.activitySection).getAttribute('data-testid')=='ExpandLessIcon')
		{
				crmSTP.activitySection.click();
		}
		browser.pause(2000);
        expect(crmSTP.firstActivityRow.getText().includes('Removed linked ticket')).to.be.true;
    }

	//////////////// TA-928 ///////////////////////////////////////////////////////////////////
	verifyTicketPriority()
	{
		crmSTP.dockHeader.waitForDisplayed();
		expect(crmSTP.ticketPriorityFromDrawer.getAttribute('class').split(' ').find(part => part === 'text-warning')).to.be.eql(this.keepPriority);
		expect(crmSTP.ticketTypeFromDrawer.getText()).to.be.eql(this.keepType);
	}
	verifyTicketPriorityGetUpdated()
	{
		var msg;
		msg = crmSTP.confirmationMsg.getText();
		expect(msg).to.eql(this.ticketUpdated);
		browser.pause(3000);
		expect(crmSTP.ticketPriorityLowFromDrawer.getAttribute('class').split(' ').find(part => part === 'text-secondary')).to.be.eql(this.keepPriority);
	}
	verifyTicketTypeChangeLog()
	{
		crmSTP.activitySection.waitForDisplayed();
		if(crmSTP.svgExpand(crmSTP.activitySection).getAttribute('data-testid')=='ExpandLessIcon')
		{
				crmSTP.activitySection.click();
		}
		browser.pause(2000);
        expect(crmSTP.firstActivityRow.getText().includes('Priority changed from')).to.be.true;
	}
	verifyTypeChangeConfirmation()
	{
		expect(crmSTP.btnConDialogYes.isExisting()).to.be.true;
	}
	verifyTicketTypeGetUpdated()
	{
		var msg;
		msg = crmSTP.confirmationMsg.getText();
		expect(msg).to.eql(this.ticketUpdated);
		browser.pause(5000);
		console.log('ticket type from param is '+this.keepType);
		console.log('after saved ticket type is '+crmSTP.ticketTypeFromDrawer.getText());
		expect(crmSTP.ticketTypeFromDrawer.getText().includes(this.keepType)).to.be.true;
	}
	verifyticketTypeLogCreated()
	{
		crmSTP.activitySection.waitForDisplayed();
		if(crmSTP.svgExpand(crmSTP.activitySection).getAttribute('data-testid')=='ExpandLessIcon')
		{
				crmSTP.activitySection.click();
		}
		browser.pause(2000);
        expect(crmSTP.firstActivityRow.getText().includes('Type changed from')).to.be.true;
	}
	verifyTicketStatusGetUpdated()
	{
		var msg;
		msg = crmSTP.confirmationMsg.getText();
		expect(msg).to.eql(this.ticketUpdated);
		browser.pause(5000);
		expect(crmSTP.ticketStatus.getText().includes(this.keepTicketStatus)).to.be.true;
	}
	verifyTicketStatusLogEntry()
	{
		crmSTP.activitySection.waitForDisplayed();
		if(crmSTP.svgExpand(crmSTP.activitySection).getAttribute('data-testid')=='ExpandLessIcon')
		{
			crmSTP.activitySection.click();
		}
		browser.pause(2000);
        expect(crmSTP.firstActivityRow.getText().includes('Status changed from')).to.be.true;
	}
 
}
module.exports = new crmStatusTypePriorityActions();
