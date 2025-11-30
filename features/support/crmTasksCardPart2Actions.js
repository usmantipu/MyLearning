const crmMsgActions = require('../support/_crmMessagesActions.js');
const crmTasksCardPart1Actions = require('../support/crmTasksCardPart1Actions');
var crmTasksCardPart1 = require('../pageobjects/crmTasksCardPart1.page');
var crmTasksCardPart2 = require('../pageobjects/crmTasksCardPart2.page');
var expect = require('chai').expect;

class crmTasksCardPart2Actions {

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
    }

    openTicketDrawer(){
        crmTasksCardPart1Actions.createNewTicket();
    }

    clickAddTaskIcon(){
        crmTasksCardPart1.btnAddTask.waitForDisplayed();
        crmTasksCardPart1.btnAddTask.click();
    }

    verifyTaskCardHeaderAndExpandIcon(){
        crmTasksCardPart2.h6Tasks.waitForDisplayed();
        expect(crmTasksCardPart2.h6Tasks.isExisting()).to.be.true;
        expect(crmTasksCardPart2.downArrowHeaders[2].isExisting()).to.be.true;
    }
    
    verifyAddIconCounterFeedback(){
        crmTasksCardPart1.btnAddTask.waitForDisplayed();
        expect(crmTasksCardPart1.btnAddTask.isExisting()).to.be.true;
        crmTasksCardPart2.spanTaskCompleted.waitForDisplayed();
        expect(crmTasksCardPart2.spanTaskCompleted.isExisting()).to.be.true;
        crmTasksCardPart2.threeDotsInTaskHeaders.click();
        crmTasksCardPart2.pFeedback.waitForDisplayed();
        expect(crmTasksCardPart2.pFeedback.isExisting()).to.be.true;
    }

    verifyTaskEntryFieldAppears(){
        crmTasksCardPart1.inputAddTask.waitForDisplayed();
        expect(crmTasksCardPart1.inputAddTask.isExisting()).to.be.true;
    }

    inputTaskAndSave(){
        this.randomTaskVal = this.taskVal + ' ' + Math.floor(Math.random() * 100000);
        console.log(this.randomTaskVal);
        crmTasksCardPart1.inputAddTask.waitForDisplayed();
        crmTasksCardPart1.inputAddTask.setValue(this.randomTaskVal);
        crmTasksCardPart1.btnSave.click();
    }

    verifyTaskAdded(){
        crmTasksCardPart1.alertMsg.waitForDisplayed();
        expect(crmTasksCardPart1.alertMsg.getText()).eql('Ticket task updated successfully');
        browser.pause(2000);
        expect(crmTasksCardPart2.verifyTaskExists(this.randomTaskVal)).to.be.true;
    }

    verifyTaskLogHistory(){
        crmTasksCardPart2.h6Activity.waitForDisplayed();
        crmTasksCardPart2.h6Activity.click();
        crmTasksCardPart2.h6Activity.scrollIntoView();
        browser.pause(3000);
        let val = 'New task ' + this.randomTaskVal + ' has been added';
        console.log(val);
        expect(crmTasksCardPart2.verifyTaskLogHistoryExists(val)).to.be.true;
    }

    viewTasksCard(){
        crmTasksCardPart1Actions.createNewTask();
    }

    verifyCheckboxWithTask(){
        browser.pause(1000);
        expect(crmTasksCardPart2.checkboxWithTask.isExisting()).to.be.true;
    }

    completeTask(){
        crmTasksCardPart1Actions.createNewTask();
        crmTasksCardPart2.spanTaskCompleted.waitForDisplayed();
        let text = crmTasksCardPart2.spanTaskCompleted.getText();
        this.taskCompleted = parseInt(text.split('/')[0].trim(), 10);
        console.log(this.taskCompleted);
        crmTasksCardPart2.checkboxWithTask.waitForDisplayed();
        crmTasksCardPart2.checkboxWithTask.click();
    }

    verifyTaskUpdated(){
        crmTasksCardPart1.alertMsg.waitForDisplayed();
        expect(crmTasksCardPart1.alertMsg.getText()).eql('Ticket task updated successfully');
    }

    verifyTaskCompletionCounterIncrement(){
        crmTasksCardPart2.spanTaskCompleted.waitForDisplayed();
        let text = crmTasksCardPart2.spanTaskCompleted.getText();
        text = parseInt(text.split('/')[0].trim(), 10);
        console.log(text);
        console.log(this.taskCompleted + 1);
        expect(this.taskCompleted + 1).eql(text);
    }

    verifyTaskCompleteIncompleteLogHistory(param){
        crmTasksCardPart2.h6Activity.waitForDisplayed();
        crmTasksCardPart2.h6Activity.click();
        crmTasksCardPart2.h6Activity.scrollIntoView();
        browser.pause(3000);
        let val = '';
        if(param === 'complete'){
            val = 'Task ' + this.taskVal + ' has been marked as complete';
        }
        else{
            val = 'Task ' + this.taskVal + ' has been marked as incomplete';
        }
        console.log(val);
        expect(crmTasksCardPart2.verifyTaskLogHistoryExists(val)).to.be.true;
    }


    unCheckTask(){
        this.completeTask();
        this.verifyTaskUpdated();
        browser.pause(1000);
        let text = crmTasksCardPart2.spanTaskCompleted.getText();
        this.taskCompleted = parseInt(text.split('/')[0].trim(), 10);
        console.log(this.taskCompleted);
        crmTasksCardPart2.checkboxWithTask.waitForDisplayed();
        crmTasksCardPart2.checkboxWithTask.click();
    }

    verifyTaskCompletionCounterDecrement(){
        crmTasksCardPart2.spanTaskCompleted.waitForDisplayed();
        let text = crmTasksCardPart2.spanTaskCompleted.getText();
        text = parseInt(text.split('/')[0].trim(), 10);
        console.log(text);
        console.log(this.taskCompleted - 1);
        expect(this.taskCompleted - 1).eql(text);
    }

    addMoreThanOneTaskForReorder(){
        crmTasksCardPart1Actions.createNewTask();
        // Adding another Task with different values
        this.clickAddTaskIcon();
        this.verifyTaskEntryFieldAppears();
        this.inputTaskAndSave();
        this.verifyTaskAdded();
    }

    dragAndDropTasks() {
        const dragIcons = crmTasksCardPart2.dragTasks;
        if (dragIcons.length < 2) {
            throw new Error('Could not find at least two draggable tasks.');
        }
        const sourceIcon = dragIcons[0]; 
        const targetIcon = dragIcons[1]; 
        sourceIcon.scrollIntoView();
        const sourceLocation = sourceIcon.getLocation();
        const sourceSize = sourceIcon.getSize();
        const targetLocation = targetIcon.getLocation();
        const targetSize = targetIcon.getSize();
        const startX = Math.round(sourceLocation.x + sourceSize.width / 2);
        const startY = Math.round(sourceLocation.y + sourceSize.height / 2);
        const endX = startX;
        const endY = Math.round(targetLocation.y + targetSize.height + 5); 
        console.log(`Starting drag at: (${startX}, ${startY})`);
        console.log(`Dropping at absolute coordinates (DYNAMIC): (${endX}, ${endY})`);
        browser.performActions([
            {
                type: 'pointer',
                id: 'mouse',
                parameters: { pointerType: 'mouse' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: startX, y: startY },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', duration: 500 }, 
                    { type: 'pointerMove', duration: 100, x: startX, y: startY + 10 }, 
                    { type: 'pause', duration: 200 },
                    { type: 'pointerMove', duration: 1000, x: endX, y: endY },
                    { type: 'pointerUp', button: 0 }
                ]
            }
        ]);
        browser.releaseActions();
        console.log('Drag and drop done.');
    }


    convertTaskIntoTicket(){
        crmTasksCardPart1Actions.createNewTask();
        crmTasksCardPart1Actions.convertTaskIntoTicket();
        crmTasksCardPart1Actions.verifyTicketModalAppears();
        crmTasksCardPart1Actions.fillDataToConvertIntoTicket();
        crmTasksCardPart1Actions.verifyParentTicketDrawerDocked();
        crmTasksCardPart1Actions.verifyNewCreatedTicketOpens();
    }

    verifyTaskNameAsDescription(){
        crmTasksCardPart1.h6Summary.waitForDisplayed();
        browser.pause(3000);
        expect(crmTasksCardPart1.verifyDescription(this.taskVal)).to.be.true;
    }

    verifyPriorityTypeStatusAssigneeFollower(){
        crmTasksCardPart2.spanPriority.waitForDisplayed();
        expect(crmTasksCardPart2.spanPriority.isExisting()).to.be.true;
        crmTasksCardPart2.spanType.waitForDisplayed();
        expect(crmTasksCardPart2.spanType.isExisting()).to.be.true;
        crmTasksCardPart2.spanStatusOpen.waitForDisplayed();
        expect(crmTasksCardPart2.spanStatusOpen.isExisting()).to.be.true;
        crmTasksCardPart2.divAssignees.waitForDisplayed();
        expect(crmTasksCardPart2.divAssignees.isExisting()).to.be.true;
        crmTasksCardPart2.divFollowers.waitForDisplayed();
        expect(crmTasksCardPart2.divFollowers.isExisting()).to.be.true;
    }

    verifyHistoryForTaskConversion(){
        crmTasksCardPart1.ticketNumberAtHeader.waitForDisplayed();
        this.ticketNumber = crmTasksCardPart1.ticketNumberAtHeader.getText();
        crmTasksCardPart1.btnShowRecentActions.waitForDisplayed();
        crmTasksCardPart1.btnShowRecentActions.click();
        crmTasksCardPart2.dockedParentTicket.waitForDisplayed();
        crmTasksCardPart2.dockedParentTicket.click();
        crmTasksCardPart2.h6Activity.waitForDisplayed();
        crmTasksCardPart2.h6Activity.click();
        browser.pause(3000);
        crmTasksCardPart2.h6Activity.scrollIntoView();
        this.ticketNumber = this.ticketNumber.split('#')[1];
        let val = `has been converted to a ticket (#` + this.ticketNumber + `)`;
        expect(crmTasksCardPart2.verifyTaskLogForTaskConversion(val)).to.be.true;
    }

    deleteTask(){
        crmTasksCardPart1Actions.createNewTask();
        browser.pause(2000);
        let text = crmTasksCardPart2.spanTaskCompleted.getText();
        const match = text.match(/\/(\d+)/);
        this.totalTasks = match ? +match[1] : 0;
        crmTasksCardPart1.hoverOverTask(this.taskVal);
        crmTasksCardPart1.threeDotsInTask.waitForDisplayed();
        crmTasksCardPart1.threeDotsInTask.click();
        crmTasksCardPart2.liDelete.waitForDisplayed();
        crmTasksCardPart2.liDelete.click();
        crmTasksCardPart2.btnYes.waitForDisplayed();
        crmTasksCardPart2.btnYes.click();
    }

    verifyTaskCounterAfterDeletion(){
        crmTasksCardPart2.spanTaskCompleted.waitForDisplayed();
        let text = crmTasksCardPart2.spanTaskCompleted.getText();
        const match = text.match(/\/(\d+)/);
        const number = match ? +match[1] : 0;
        console.log(text);
        console.log(this.totalTasks - 1);
        expect(this.totalTasks - 1).eql(number);
    }

    verifyTaskDeletionLogHistory(){
        crmTasksCardPart2.h6Activity.waitForDisplayed();
        crmTasksCardPart2.h6Activity.click();
        crmTasksCardPart2.h6Activity.scrollIntoView();
        browser.pause(3000);
        let val = 'Task ' + this.taskVal + ' has been deleted';
        console.log(val);
        expect(crmTasksCardPart2.verifyTaskLogHistoryExists(val)).to.be.true;
    }

    editTask(){
        crmTasksCardPart1Actions.createNewTask();
        browser.pause(2000);
        crmTasksCardPart1.hoverOverTask(this.taskVal);
        crmTasksCardPart1.threeDotsInTask.waitForDisplayed();
        crmTasksCardPart1.threeDotsInTask.click();
        crmTasksCardPart2.liEdit.waitForDisplayed();
        crmTasksCardPart2.liEdit.click();
        crmTasksCardPart1.inputAddTask.waitForDisplayed();
        let randomVal = ' ' + Math.floor(Math.random() * 100000);
        this.randomTaskVal = this.taskVal + randomVal;
        crmTasksCardPart1.inputAddTask.setValue(randomVal);
        crmTasksCardPart1.btnSave.click();
    }

    verifyTaskEditLogHistory(){
        crmTasksCardPart2.h6Activity.waitForDisplayed();
        crmTasksCardPart2.h6Activity.click();
        crmTasksCardPart2.h6Activity.scrollIntoView();
        browser.pause(3000);
        let val = 'Task updated from ' + this.taskVal + ' to ' + this.randomTaskVal;
        console.log(val);
        expect(crmTasksCardPart2.verifyTaskLogHistoryExists(val)).to.be.true;
    }

    clickFeedbackIcon(){
        crmTasksCardPart2.h6Tasks.waitForDisplayed();
        crmTasksCardPart2.threeDotsInTaskHeaders.click();
        crmTasksCardPart2.pFeedback.waitForDisplayed();
        crmTasksCardPart2.pFeedback.click();
    }

    provideFeedback(){
        crmTasksCardPart2.feedbackSatisfied.waitForDisplayed();
        crmTasksCardPart2.feedbackSatisfied.click();
        browser.pause(3000);
        crmTasksCardPart2.btnSend.waitForDisplayed();
        crmTasksCardPart2.btnSend.click();
        crmTasksCardPart1.alertMsg.waitForDisplayed();
        expect(crmTasksCardPart1.alertMsg.getText()).eql('Feedback successfully submitted');
    }

    addTaskWithNoDescription(){
        this.clickAddTaskIcon();
        browser.pause(3000);
        crmTasksCardPart1.inputAddTask.waitForDisplayed();
        crmTasksCardPart1.btnSave.click();
    }

    verifyNoAlertAppears(){
        let alertAppear = true;
        try {
            crmTasksCardPart1.alertMsg.waitForDisplayed({ timeout: 7000, timeoutMsg: 'Alert Msg did not appears.' });
        } catch (error) {
            alertAppear = false;
        }
        expect(alertAppear).to.be.false;
    }

    updateTicketType(){
        crmTasksCardPart2.spanType.waitForDisplayed();
        crmTasksCardPart2.spanType.click();
        browser.pause(3000);
        browser.keys(this.downArrowKey);
        browser.pause(3000);  // waiting for the existing alert msg to disappears
        browser.keys(this.enterKey);
        crmTasksCardPart2.btnYes.waitForDisplayed();
        crmTasksCardPart2.btnYes.click();
        expect(crmTasksCardPart1.alertMsg.getText()).eql('Ticket updated successfully');
    }

    verifyTasksDeleted(){
        browser.pause(1000);
        expect(crmTasksCardPart2.verifyTaskExists(this.taskVal)).to.be.false;
        expect(crmTasksCardPart2.verifyTaskExists(this.randomTaskVal)).to.be.false;
    }

}
module.exports = new crmTasksCardPart2Actions();
