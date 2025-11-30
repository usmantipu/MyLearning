var LoginPage = require('../pageobjects/login.page');
var SDlinkTicketPage = require('../pageobjects/SDLinkTicket.page');
const { ticket1 } = require('../pageobjects/SDLinkTicket.page');
const SDmergeTicketActions = require('../support/SDMergeTicketActions');
var expect = require('chai').expect; 

class SDlinkTicketAction {

    constructor() { 
        this.ticketID;
        this.downArrowKey = ['\ue015'];// arrow down
		this.enterKey = ['\ue007'];// enter
		this.backspaceKey = ['\uE003'];// backspace
        this.secondTicketID='';
    }

    openServiceDesk() {
        SDlinkTicketPage.btnServiceDesk.waitForDisplayed();
        SDlinkTicketPage.btnServiceDesk.click();
        this.clickOnListBtn();
    }
    ClickcloseRightDrawer()
	{
        SDlinkTicketPage.closeRightDrawer.waitForDisplayed();
		SDlinkTicketPage.closeRightDrawer.waitForClickable();
		SDlinkTicketPage.closeRightDrawer.click();
		browser.pause(3000);
	}
    clickOnListBtn() {
        SDlinkTicketPage.btnList.waitForDisplayed();
        SDlinkTicketPage.btnList.click();
        browser.pause(3000);
        SDlinkTicketPage.btnAllList.waitForDisplayed();
        SDlinkTicketPage.btnAllList.click();
        browser.pause(3000);
        console.log('Clicked on List button');  
    }
    clickOnTicket1() {
        SDlinkTicketPage.btnResolved.waitForClickable();
		if(SDlinkTicketPage.btnResolved.getAttribute('class').includes('active'))
		{
			SDlinkTicketPage.btnResolved.click();
			browser.pause(5000);
		}
        SDlinkTicketPage.ticket1.waitForDisplayed();
        SDlinkTicketPage.ticket1.click();
        console.log('Clicked on first ticket in the list');
    }

    linkTicketAs(data) {
        data = data.replace(/['"]+/g, '');
        // SDlinkTicketPage.inputTicketType.click();
        // browser.pause(1000);
        // for (let index = 0; index  < 20; index++) {
        //     browser.keys(this.backspaceKey);
        // }
        // SDlinkTicketPage.inputTicketType.setValue(type);
        // browser.pause(1000);
        // browser.keys(this.downArrowKey);
        // browser.keys(this.enterKey);
        // //this.verifySearchTicketId();
        // this.linkTickets();
        // SDlinkTicketPage.btnLinkTicket.waitForClickable();
        // SDlinkTicketPage.btnLinkTicket.click();
        console.log('Extracted ticket id is '+this.secondTicketID);
        browser.pause(5000);
        expect(SDlinkTicketPage.getMergedTicketID.getText().includes(this.secondTicketID)).to.be.true;
        expect(SDlinkTicketPage.inputLinkedType.getAttribute('value')).to.eql(data);
    }
    
    verifySeparateSectionForLinkedTickets() {
        SDlinkTicketPage.h4LinkedTicket.waitForDisplayed();
        var text = SDlinkTicketPage.h4LinkedTicket.getText();
        console.log('Linked ticket text is '+text);
        expect(text).to.eql('Linked Tickets');
    }

    keepData()
    {
        //SDlinkTicketPage.btnResolved.waitForClickable({ timeout: 25000 });
        //SDlinkTicketPage.btnResolved.click();
        //browser.pause(4000);
        this.secondTicketID = SDmergeTicketActions.keepSecondTicketID();
    }
    linkTickets()
    {
        SDlinkTicketPage.inputTicketID.waitForClickable();
        SDlinkTicketPage.inputTicketID.click();
        browser.pause(3000);
        SDlinkTicketPage.autocompleteDialouge.waitForClickable();
        var text = SDlinkTicketPage.autocompleteDialouge.getText();
        var downArrowKey = ['\ue015'];// arrow down
		var enterKey = ['\ue007'];// enter
        browser.pause(1000);
        browser.keys(downArrowKey);
        browser.keys(enterKey);
        this.ticketID = text.substring(0,text.indexOf(' '));
    }
    verifySearchTicketId() {
        browser.pause(4000);
        console.log('ticket ID going to search '+this.secondTicketID);
        SDlinkTicketPage.inputTicketID.waitForDisplayed();
        SDlinkTicketPage.inputTicketID.waitForClickable();
        SDlinkTicketPage.inputTicketID.click();
        SDlinkTicketPage.inputTicketID.setValue(this.secondTicketID);
        browser.pause(3000);
        SDlinkTicketPage.autocompleteDialouge.waitForClickable();
        var text = SDlinkTicketPage.autocompleteDialouge.getText();
        var downArrowKey = ['\ue015'];// arrow down
		var enterKey = ['\ue007'];// enter
        browser.pause(1000);
        browser.keys(downArrowKey);
        browser.keys(enterKey);
        text = text.substring(0,text.indexOf(' '));
        console.log('extrcated text for linked auto complete dropdown is '+text);
        expect(text).to.eql(this.secondTicketID);
        //expect(text.substring(0,text.indexOf(' '))).to.eql((SDlinkTicketPage.inputTicketID.getValue()).substring(0,text.indexOf(' ')));
        this.ticketID = text;
        console.log('extrcated ticket id from linked ticket list is '+this.ticketID);
    }

    verifyOpenLinkedTicketDock() {        
        SDlinkTicketPage.getMergedTicketID.waitForClickable();
        SDlinkTicketPage.getMergedTicketID.click();
        browser.pause(4000);
        this.ticketID = SDlinkTicketPage.dockHeader.getText().replace(/[^\d]/g,'');
        expect(this.ticketID).to.be.eql(this.secondTicketID);
    }
    
    verifyRemoveLinkedTicket() {
        browser.pause(5000);
        SDlinkTicketPage.removeLinkedTicket.waitForDisplayed();
        SDlinkTicketPage.removeLinkedTicket.scrollIntoView();
        SDlinkTicketPage.removeLinkedTicket.waitForClickable();
        SDlinkTicketPage.removeLinkedTicket.click();
        SDlinkTicketPage.btnYesOnDialogueBox.waitForDisplayed();
        SDlinkTicketPage.btnYesOnDialogueBox.click();
        SDlinkTicketPage.alertMessage.waitForDisplayed();
        expect(SDlinkTicketPage.alertMessage.getText().includes('deleted successfully')).to.be.true;
    }

}
module.exports = new SDlinkTicketAction();