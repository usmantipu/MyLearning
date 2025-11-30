var crmLinkedList = require('../pageobjects/CRMLinkedList.page');
var expect = require('chai').expect;

class CRMLinkedListActions {

    constructor() { 
        this.upArrowKey = ['\ue013']; // arrow up
        this.downArrowKey = ['\ue015'];// arrow down
		this.enterKey = ['\ue007'];// enter
		this.backspaceKey = ['\uE003'];// backspace
        this.clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
        this.searchKey = 'a';
    }

    nevigateToCRMArea(){
		crmLinkedList.dashboardTitle.waitForDisplayed();
		let title = crmLinkedList.dashboardTitle.getText();
		expect(title.substr(0,19)).to.eql('Dashboard - Welcome');
        crmLinkedList.crmArea.waitForExist();
        crmLinkedList.crmArea.waitForDisplayed();
        crmLinkedList.crmArea.click();
        browser.pause(10000);
    }

    verifyCRMArea(){
        crmLinkedList.h4ServiceDesk.waitForDisplayed();
        expect(crmLinkedList.h4ServiceDesk.isExisting()).to.be.true;
        crmLinkedList.btnList.waitForDisplayed();
        crmLinkedList.btnList.click();
    }

    openTicketDrawer(){
        crmLinkedList.btnAddOnTop.waitForDisplayed();
        crmLinkedList.btnAddOnTop.click();
        crmLinkedList.liOpenTicket.waitForDisplayed();
        crmLinkedList.liOpenTicket.click();
        browser.pause(2000);
        if(crmLinkedList.btnMoreVertical.isExisting()){
            crmLinkedList.btnMoreVertical.click();
            crmLinkedList.enableBeta.waitForDisplayed();
            crmLinkedList.enableBeta.click();
        }
        crmLinkedList.h6CreateTicket.waitForDisplayed();
        crmLinkedList.dropdownsCreateTicket[crmLinkedList.dropdownsCreateTicket.length-2].click();
        crmLinkedList.liSubscriber.waitForDisplayed();
        crmLinkedList.liSubscriber.click();
        crmLinkedList.inputSubscriber.waitForDisplayed();
        crmLinkedList.inputSubscriber.click();
        crmLinkedList.inputSubscriber.setValue(this.searchKey);
        browser.pause(5000);
        browser.keys(this.downArrowKey);
        browser.keys(this.enterKey);
        browser.pause(2000);
        crmLinkedList.dropdownsCreateTicket[crmLinkedList.dropdownsCreateTicket.length-1].click();
        browser.keys(this.downArrowKey);
        browser.keys(this.enterKey);
        crmLinkedList.btnCreate.waitForClickable();
        crmLinkedList.btnCreate.click();
        this.verifyAlertMsg('The ticket was added successfully');
    }

    expandTicketSubSection(){
        crmLinkedList.pLinkedTickets.waitForDisplayed();
        expect(crmLinkedList.pLinkedTickets.isExisting()).to.be.true;
    }

    clickChainBtnForLinkingTicket(){
        if(!crmLinkedList.chainIcon.isExisting()){
            crmLinkedList.pLinkedTickets.click();
            crmLinkedList.chainIcon.waitForDisplayed();
        }
        crmLinkedList.chainIcon.click();
        browser.pause(2000);
    }

    verifySearchField(){
        crmLinkedList.inputSubscriber.waitForDisplayed();
        expect(crmLinkedList.inputSubscriber.isExisting()).to.be.true;
    }

    verifyTitle(){
        expect(crmLinkedList.pLinkedTickets.getText()).eql('Linked Tickets');
    }

    verifySearchTool(){
        this.clickChainBtnForLinkingTicket();
        this.verifySearchField();
    }

    createMultipleTickets(){
        for (let index = 0; index < 2; index++) {
            this.openTicketDrawer();
        }
    }

    selectMultipleTickets(){
        this.verifySearchField();
        browser.pause(3000);
        let ticketNumber = crmLinkedList.ticketNumber.getText();
        crmLinkedList.inputSubscriber.click();
        for (let index = 0; index < 2; index++) {
            crmLinkedList.inputSubscriber.setValue(ticketNumber[8]);
            browser.pause(5000);
            browser.keys(this.downArrowKey);
            browser.keys(this.enterKey);
        }
    }

    verifyHighlightedTickets(){
        expect(crmLinkedList.selectedTickets.length).eql(2);
    }

    selectRelationship(){
        crmLinkedList.relationShip.waitForDisplayed();
        crmLinkedList.relationShip.click();
        browser.keys(this.downArrowKey);
        browser.keys(this.enterKey);
    }

    linkTicket(){
        crmLinkedList.btnLink.waitForClickable();
        crmLinkedList.btnLink.click();
        this.verifyAlertMsg('Ticket Linked successfully');
        browser.pause(3000);
    }

    verifyLinkedTickets(){
        crmLinkedList.linkedItems.waitForDisplayed();
        expect(crmLinkedList.linkedItems.isExisting()).to.be.true;
    }

    verifyAlertMsg(msg){
        crmLinkedList.alertMsg.waitForDisplayed();
        expect(crmLinkedList.alertMsg.getText()).includes(msg);
        browser.pause(3000);
    }
}
module.exports = new CRMLinkedListActions();
