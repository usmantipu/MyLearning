const crmMsgActions = require('../support/_crmMessagesActions.js');
var crmTasksCardPart1 = require('../pageobjects/crmTasksCardPart1.page');
const crmTasksCardPart1Actions = require('../support/crmTasksCardPart1Actions');
var crmTasksCardPart2 = require('../pageobjects/crmTasksCardPart2.page');
const crmTasksCardPart2Actions = require('../support/crmTasksCardPart2Actions');
var crmTasksCardPart3 = require('../pageobjects/crmTasksCardPart3.page');
var expect = require('chai').expect;

class crmTasksCardPart3Actions {

    constructor() { 
        this.upArrowKey = ['\ue013']; // arrow up
        this.downArrowKey = ['\ue015'];// arrow down
        this.enterKey = ['\ue007'];// enter
        this.backspaceKey = ['\uE003'];// backspace
        this.clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
        this.subscriberVal = 'Jon';
        this.taskVal = crmTasksCardPart1Actions.taskVal;
        this.ticketNumber;
        this.randomTaskVal;
        this.taskCompleted;
        this.totalTasks;
        this.convertedTicketBtn;
    }

    clickOnTasksKebabMenu(){
        crmTasksCardPart1Actions.createNewTask();
        browser.pause(3000);
        crmTasksCardPart1.hoverOverTask(this.taskVal);
        crmTasksCardPart1.threeDotsInTask.waitForDisplayed();
        crmTasksCardPart1.threeDotsInTask.click();
    }

    verifyEditOptionAvailable(){
        crmTasksCardPart2.liEdit.waitForDisplayed();
        expect(crmTasksCardPart2.liEdit.isExisting()).to.be.true;
    }

    clickEditBtn(){
        this.clickOnTasksKebabMenu();
        this.verifyEditOptionAvailable();
        crmTasksCardPart2.liEdit.click();
    }

    verifyRestrictedToSaveTask(){
        crmTasksCardPart1.inputAddTask.waitForDisplayed();
        crmTasksCardPart1.inputAddTask.click();
        browser.pause(2000);
        browser.keys(this.clearKeys);
        crmTasksCardPart1.btnSave.click();
        crmTasksCardPart2Actions.verifyNoAlertAppears();
    }

    verifySaveCancelBtnAndNoCheckboxAndKebabmenu(){
        expect(crmTasksCardPart2.checkboxWithTask.isExisting()).to.be.false;
        expect(crmTasksCardPart3.threeDotsInTask.isExisting()).to.be.false;
        expect(crmTasksCardPart1.btnSave.isExisting()).to.be.true;
        expect(crmTasksCardPart3.btnCancel.isExisting()).to.be.true;
    }

    createATask(){
        crmTasksCardPart1Actions.createNewTask();
    }

    convertTaskInoTicket(){
        crmTasksCardPart1Actions.convertTaskIntoTicket();
        crmTasksCardPart1Actions.verifyTicketModalAppears();
        crmTasksCardPart1Actions.fillDataToConvertIntoTicket();
        crmTasksCardPart1Actions.verifyParentTicketDrawerDocked();
    }

    verifyTaskCheckboxDisabled(){
        crmTasksCardPart1.btnShowRecentActions.waitForDisplayed();
        crmTasksCardPart1.btnShowRecentActions.click();
        crmTasksCardPart2.dockedParentTicket.waitForDisplayed();
        crmTasksCardPart2.dockedParentTicket.click();
        browser.pause(2000);
        expect(crmTasksCardPart2.checkboxWithTask.getAttribute('class').includes('Mui-disabled')).to.be.true;
    }

    verifyTaskCannotMarkAsComplete(){
        let clickFailed = false;
        try {
            crmTasksCardPart2.checkboxWithTask.click();
        } catch (error) {
            console.log("Checkbox is inactive — click intercepted as expected.");
            clickFailed = true;
        }
        expect(clickFailed).to.be.true;
    }

    verifyKebabMenuDisabledForTask(){
        crmTasksCardPart1.btnShowRecentActions.waitForDisplayed();
        crmTasksCardPart1.btnShowRecentActions.click();
        crmTasksCardPart2.dockedParentTicket.waitForDisplayed();
        crmTasksCardPart2.dockedParentTicket.click();
        browser.pause(2000);
        crmTasksCardPart2.checkboxWithTask.moveTo();
        expect(crmTasksCardPart3.hiddenKebabMenuTask.getAttribute('style').includes('visibility: hidden;')).to.be.true;
    }

    selectConvertToTicket(){
        browser.pause(2000);
        crmTasksCardPart1.hoverOverTask(crmTasksCardPart2Actions.randomTaskVal);
        crmTasksCardPart1.threeDotsInTask.waitForDisplayed();
        crmTasksCardPart1.threeDotsInTask.click();
        crmTasksCardPart1.liConvertToTicket.waitForDisplayed();
        crmTasksCardPart1.liConvertToTicket.click();
    }

    verifyAddTicketModalAppears(){
        crmTasksCardPart1.h6ConvertTaskToTicket.waitForDisplayed();
        expect(crmTasksCardPart1.h6ConvertTaskToTicket.isExisting()).to.be.true;
    }

    fillRequiredFieldsAndCreateTicket(){
        crmTasksCardPart1Actions.fillDataToConvertIntoTicket();
    }

    verifyTicketCreatedWithoutRetainingInfo(){
        crmTasksCardPart3.pNoTaskAdded.waitForDisplayed();
        expect(crmTasksCardPart3.pNoTaskAdded.isExisting()).to.be.true;
    }

    verifyDescriptionHasTaskName(){
        crmTasksCardPart3.waitUntilDescriptionDisplayed(this.taskVal);
        expect(crmTasksCardPart3.verifyDescription(this.taskVal)).to.be.true;
    }

    resolveTicket(){
        crmTasksCardPart3.spanNoAssignees.waitForDisplayed();
        crmTasksCardPart3.spanNoAssignees.click();
        browser.pause(3000); // waiting for to disappear the previous alert
        browser.pause(3000); // waiting for to disappear the previous alert
        browser.keys(this.enterKey);
        crmTasksCardPart1.alertMsg.waitForDisplayed();
        expect(crmTasksCardPart1.alertMsg.getText()).eql('Ticket updated successfully');
        browser.pause(3000); // waiting for to disappear the previous alert
        browser.pause(3000); // waiting for to disappear the previous alert
        crmTasksCardPart3.spanStatusOpen.waitForDisplayed();
        crmTasksCardPart3.spanStatusOpen.click();
        crmTasksCardPart3.liResolved.waitForDisplayed();
        crmTasksCardPart3.liResolved.click();
        crmTasksCardPart1.alertMsg.waitForDisplayed();
        expect(crmTasksCardPart1.alertMsg.getText()).eql('Ticket updated successfully');
    }

    verifyTaskMarkedAsCompleteAutomatically(){
        crmTasksCardPart1.btnShowRecentActions.waitForDisplayed();
        crmTasksCardPart1.btnShowRecentActions.click();
        crmTasksCardPart2.dockedParentTicket.waitForDisplayed();
        crmTasksCardPart2.dockedParentTicket.click();
        browser.pause(3000); // waiting for changing state
        crmTasksCardPart2.checkboxWithTask.waitForDisplayed();
        expect(crmTasksCardPart2.checkboxWithTask.getAttribute('class').includes('Mui-checked')).to.be.true;
        expect(crmTasksCardPart2.checkboxWithTask.getAttribute('class').includes('Mui-disabled')).to.be.true;
    }

    verifyIndicator(){
        crmTasksCardPart3.h6TicketNo.waitForDisplayed();
        this.ticketNumber = crmTasksCardPart3.h6TicketNo.getText();
        crmTasksCardPart1.btnShowRecentActions.waitForDisplayed();
        crmTasksCardPart1.btnShowRecentActions.click();
        crmTasksCardPart2.dockedParentTicket.waitForDisplayed();
        crmTasksCardPart2.dockedParentTicket.click();
        browser.pause(3000); // waiting for changing state
        this.convertedTicketBtn = this.taskVal + ' (' + this.ticketNumber + ') *';
        console.log(this.convertedTicketBtn);
        expect(crmTasksCardPart3.verifyBtnLinkExists(this.convertedTicketBtn)).to.be.true;
    }

    verifyIndicatorIsClickableLink(){
        let getClassAttribute = crmTasksCardPart3.getClassOfBtnLink(this.convertedTicketBtn);
        expect(getClassAttribute.includes('MuiLink-button')).to.be.true;
    }

}
module.exports = new crmTasksCardPart3Actions();