const crmMsgActions = require('../support/_crmMessagesActions.js');
var crmTasksCardPart1 = require('../pageobjects/crmTasksCardPart1.page');
var expect = require('chai').expect;

class crmTasksCardPart1Actions {

    constructor() { 
        this.upArrowKey = ['\ue013']; // arrow up
        this.downArrowKey = ['\ue015'];// arrow down
        this.enterKey = ['\ue007'];// enter
        this.backspaceKey = ['\uE003'];// backspace
        this.clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
        this.subscriberVal = 'Jon';
        this.taskVal = 'This is the Task';
        this.ticketNumber;
    }

    openCreateTicketModal(){
        crmMsgActions.gotoServiceDeskAndOpenNewTicket();
        crmTasksCardPart1.addBtnTop.waitForDisplayed();
        crmTasksCardPart1.addBtnTop.click();
        crmTasksCardPart1.liOpenTicket.waitForDisplayed();
        crmTasksCardPart1.liOpenTicket.click();
        browser.pause(1000);
    }

    createNewTicket(){
        this.openCreateTicketModal();
        if (!crmTasksCardPart1.createTicketPopoverExists()){
            crmTasksCardPart1.vertDotsOnTicketHeader.waitForDisplayed();
            crmTasksCardPart1.vertDotsOnTicketHeader.click();
            crmTasksCardPart1.togleBetaVersion.waitForDisplayed();
            crmTasksCardPart1.togleBetaVersion.click();
            browser.pause(1000);
            console.log("I have changed to beta version.");
            // Sometimes the popup does not appears for first time when it changes to beta version. That's why I use this check here
            if (!crmTasksCardPart1.createTicketPopoverExists()){
                this.openCreateTicketModal();
            }
        }
        crmTasksCardPart1.btnsOnCreateTicketPopup[0].click();
        crmTasksCardPart1.liSubscriber.waitForDisplayed();
        crmTasksCardPart1.liSubscriber.click();
        crmTasksCardPart1.btnsOnCreateTicketPopup[1].click();
        browser.pause(2000);
        browser.keys(this.downArrowKey);
        browser.keys(this.enterKey);
        crmTasksCardPart1.btnsOnCreateTicketPopup[4].click();
        browser.keys(this.downArrowKey);
        browser.keys(this.enterKey);
        crmTasksCardPart1.btnCreate.waitForClickable();
        crmTasksCardPart1.btnCreate.click();
        crmTasksCardPart1.alertMsg.waitForDisplayed();
        expect(crmTasksCardPart1.alertMsg.getText()).eql('The ticket was added successfully');
        browser.pause(3000);
    }

    createNewTask(){
        crmTasksCardPart1.btnAddTask.waitForDisplayed();
        crmTasksCardPart1.btnAddTask.click();
        crmTasksCardPart1.inputAddTask.waitForDisplayed();
        crmTasksCardPart1.inputAddTask.setValue(this.taskVal);
        crmTasksCardPart1.btnSave.click();
        crmTasksCardPart1.alertMsg.waitForDisplayed();
        expect(crmTasksCardPart1.alertMsg.getText()).eql('Ticket task updated successfully');
    }

    openTicketInEditMode(){
        this.createNewTicket();
        this.createNewTask();
    }

    convertTaskIntoTicket(){
        browser.pause(2000);
        crmTasksCardPart1.hoverOverTask(this.taskVal);
        crmTasksCardPart1.threeDotsInTask.waitForDisplayed();
        crmTasksCardPart1.threeDotsInTask.click();
        crmTasksCardPart1.liConvertToTicket.waitForDisplayed();
        crmTasksCardPart1.liConvertToTicket.click();
    }

    verifyTicketModalAppears(){
        crmTasksCardPart1.h6ConvertTaskToTicket.waitForDisplayed();
        expect(crmTasksCardPart1.h6ConvertTaskToTicket.isExisting()).to.be.true;
    }

    verifyTocketDrawerInactive() {
        crmTasksCardPart1.hoverOverTask(this.taskVal);
        crmTasksCardPart1.threeDotsInTask.waitForDisplayed();

        let clickFailed = false;
        try {
            crmTasksCardPart1.threeDotsInTask.click();
        } catch (error) {
            console.log("Drawer is inactive — click intercepted as expected.");
            clickFailed = true;
        }

        expect(clickFailed, "Drawer should be inactive and click should fail").to.be.true;
    }

    closeCreateTicketModal(){
        crmTasksCardPart1.h6ConvertTaskToTicket.waitForDisplayed();
        crmTasksCardPart1.btnCancelOnConvertTicketPopup.click();
    }

    verifyTocketDrawerStillOpen(){
        browser.pause(2000);
        crmTasksCardPart1.hoverOverTask(this.taskVal);
        crmTasksCardPart1.threeDotsInTask.waitForDisplayed();
        expect(crmTasksCardPart1.threeDotsInTask.isExisting()).to.be.true;
    }

    fillDataToConvertIntoTicket(){
        browser.pause(3000);
        crmTasksCardPart1.btnsOnConvertIntoTicketPopup[4].click();
        browser.keys(this.downArrowKey);
        browser.keys(this.downArrowKey);
        browser.keys(this.enterKey);
        crmTasksCardPart1.btnCreate.waitForClickable();
        crmTasksCardPart1.btnCreate.click();
        crmTasksCardPart1.alertMsg.waitForDisplayed();
        expect(crmTasksCardPart1.alertMsg.getText()).eql('The ticket was added successfully');
    }

    verifyParentTicketDrawerDocked(){
        crmTasksCardPart1.btnShowRecentActions.waitForDisplayed();
        expect(crmTasksCardPart1.btnShowRecentActions.isExisting()).to.be.true;
    }

    verifyNewCreatedTicketOpens(){
        crmTasksCardPart1.h6Summary.waitForDisplayed();
        browser.pause(3000);
        expect(crmTasksCardPart1.verifyDescription(this.taskVal)).to.be.true;
    }

    createMoreTask(){
        crmTasksCardPart1.ticketNumberAtHeader.waitForDisplayed();
        this.ticketNumber = crmTasksCardPart1.ticketNumberAtHeader.getText();
        this.createNewTask();
    }

    verifyLinkedAsChild(){
        browser.pause(1000);
        crmTasksCardPart1.pLinkedTickets.waitForDisplayed();
        crmTasksCardPart1.pLinkedTickets.click();
        crmTasksCardPart1.h6IsChildOf.waitForDisplayed();
        crmTasksCardPart1.h6IsChildOf.click();
        let parentId = this.ticketNumber.split('#')[1];
        expect(crmTasksCardPart1.verifyLinkedTicket(parentId)).to.be.true;
    }

}
module.exports = new crmTasksCardPart1Actions();
