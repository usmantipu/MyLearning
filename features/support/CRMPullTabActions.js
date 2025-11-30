var crmPullTab = require('../pageobjects/CRMPullTab.page');
var crmLinkedList = require('../pageobjects/CRMLinkedList.page');
var crmLinkedListActions = require('../support/CRMLinkedListActions');
var expect = require('chai').expect;

class CRMPullTabActions {

    constructor() { 
        this.upArrowKey = ['\ue013']; // arrow up
        this.downArrowKey = ['\ue015'];// arrow down
		this.enterKey = ['\ue007'];// enter
		this.backspaceKey = ['\uE003'];// backspace
        this.clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
        this.testData = 'This is Description';
        this.recentlyCreated = '';
    }

    openPullTab(){
        crmLinkedListActions.openTicketDrawer();
        crmPullTab.btnAddDescription.waitForDisplayed();
        browser.pause(3000);
        if(!crmPullTab.spanCreatedBy.isExisting())
        {
            crmPullTab.btnPullTab.waitForDisplayed();
            crmPullTab.btnPullTab.click();
        }
    }

    openAssignessFollowersList(index){
        crmPullTab.btnPlusIcons[index].waitForDisplayed();
        crmPullTab.btnPlusIcons[index].click();
    }

    selectAssigneeFollower(){
        crmPullTab.assignee_follower.waitForDisplayed();
        this.recentlyCreated = crmPullTab.assignee_follower.getText();
        crmPullTab.assignee_follower.click();
    }

    clickSaveBtn(){
        crmPullTab.btnSave.waitForDisplayed();
        crmPullTab.btnSave.click();
        crmLinkedListActions.verifyAlertMsg('Ticket updated successfully');
    }

    verifyAssigneeFollowerDisplayed(){
        browser.pause(5000);
        expect(crmPullTab.h6Assignee_Follower(this.recentlyCreated)).to.be.true;
    }

    verifyPlaceholder(){
        crmPullTab.btnAddDescription.waitForDisplayed();
        expect(crmPullTab.btnAddDescription.isExisting()).to.be.true;
    }

    viewTicketOverview(){
        crmLinkedListActions.openTicketDrawer();
        crmLinkedListActions.expandTicketSubSection();
    }

    clickPlaceholderToAddDescription(){
        crmPullTab.btnAddDescription.waitForDisplayed();
        crmPullTab.btnAddDescription.click();
        browser.pause(1000);
    }

    enterDescription(){
        crmPullTab.inputDescription.waitForDisplayed();
        crmPullTab.inputDescription.click();
        crmPullTab.inputDescription.setValue(this.testData);
        crmPullTab.btnSave.waitForDisplayed();
        crmPullTab.btnSave.click();
    }

    verifyDescription(){
        crmLinkedListActions.verifyAlertMsg('Ticket updated successfully');
        browser.pause(5000);
        expect(crmPullTab.pDescription(this.testData)).to.be.true;
    }

    verifyPullTab(){
        crmPullTab.btnAddDescription.waitForDisplayed();
        if(!crmPullTab.spanCreatedBy.isExisting())
        {
            crmPullTab.btnPullTab.waitForDisplayed();
            crmPullTab.btnPullTab.click();
        }
        expect(crmPullTab.btnPullTabRight.isExisting()).to.be.true;
    }

    verifyDetailsPanel(){
        crmPullTab.spanCreatedBy.waitForDisplayed();
        expect(crmPullTab.spanCreatedBy.isExisting()).to.be.true;
        expect(crmPullTab.spanUpdatedBy.isExisting()).to.be.true;
        expect(crmPullTab.h6Assignees.isExisting()).to.be.true;
        expect(crmPullTab.h6Followers.isExisting()).to.be.true;
    }

    openPullTabToRemoveAssigneeFollower(index){
        this.openPullTab();
        this.openAssignessFollowersList(index);
        this.selectAssigneeFollower();
        this.clickSaveBtn();
        this.verifyAssigneeFollowerDisplayed();
    }

    clickOnAssigneeFollower(){
        browser.pause(3000);
        crmPullTab.clickAssignee_Follower(this.recentlyCreated);
    }

    removeAssigneeFollower(){
        crmPullTab.assignee_follower.waitForDisplayed();
        crmPullTab.assignee_follower.click();
        this.clickSaveBtn();
    }

    verifyAssigneeFollowerRemoved(){
        browser.pause(5000);
        expect(crmPullTab.h6Assignee_Follower(this.recentlyCreated)).to.be.false;
    }

    verifyLogEntry(value){
        crmPullTab.logEntry.waitForDisplayed();
        crmPullTab.logEntry.scrollIntoView();
        expect(crmPullTab.logEntry.getText().includes(value)).to.be.true;
    }

    verifyAddSignatureText(){
        crmPullTab.h6Signature.waitForDisplayed();
        expect(crmPullTab.h6Signature.isExisting()).to.be.true;
    }

}
module.exports = new CRMPullTabActions();