const SDlinkTicketValidationPage = require('../pageobjects/SDLinkTicketValidation.page');
const crmMergePage = require('../pageobjects/SDMergeTicket.page.js');
const serviceDeskActions = require('../support/serviceDeskActions');
var Utils = require('./utils');
var expect = require('chai').expect;

class SDlinkTicketValidationAction {

    constructor() {
        this.ticketID;
        this.downArrowKey = ['\ue015'];// arrow down
		this.enterKey = ['\ue007'];// enter
		this.backspaceKey = ['\uE003'];// backspace
    }

    openServiceDesk() {
        SDlinkTicketValidationPage.btnServiceDesk.waitForDisplayed();
        SDlinkTicketValidationPage.btnServiceDesk.click();
        this.clickOnListBtn();
    }

    clickOnListBtn() {
        SDlinkTicketValidationPage.btnList.waitForDisplayed();
        SDlinkTicketValidationPage.btnList.click();
        browser.pause(3000);
    }

    clickOnTicket1() {
        SDlinkTicketValidationPage.ticket1.waitForDisplayed();
        SDlinkTicketValidationPage.ticket1.click();
    }

    linkTicketAs(type) {
        SDlinkTicketValidationPage.inputTicketType.click();
        browser.pause(1000);
        for (let index = 0; index  < 20; index++) {
            browser.keys(this.backspaceKey);
        }
        SDlinkTicketValidationPage.inputTicketType.setValue(type);
        browser.pause(1000);
        browser.keys(this.downArrowKey);
        browser.keys(this.enterKey);
        this.verifySearchTicketId();
        SDlinkTicketValidationPage.btnLinkTicket.click();
        browser.pause(3000);
        SDlinkTicketValidationPage.linkedTicketExists(this.ticketID);
    }
    
    expandArrowButton()
    {
        SDlinkTicketValidationPage.viewMoreBtn.waitForDisplayed();
        SDlinkTicketValidationPage.viewMoreBtn.waitForClickable();
        SDlinkTicketValidationPage.viewMoreBtn.click();
    }
    clickOnCloseTicket()
    {
        SDlinkTicketValidationPage.liCloseTicket.waitForDisplayed();
        SDlinkTicketValidationPage.liCloseTicket.waitForClickable();
        SDlinkTicketValidationPage.liCloseTicket.click();
        SDlinkTicketValidationPage.btnCloseTicket.waitForDisplayed();
        SDlinkTicketValidationPage.btnCloseTicket.waitForClickable();
        SDlinkTicketValidationPage.btnCloseTicket.click();
    }
    clickOnResolveTicket()
    {
        SDlinkTicketValidationPage.liMarkAsResolveTicket.waitForDisplayed();
        SDlinkTicketValidationPage.liMarkAsResolveTicket.waitForClickable();
        SDlinkTicketValidationPage.liMarkAsResolveTicket.click();
        SDlinkTicketValidationPage.btnMarkAsResolveTicket.waitForDisplayed();
        SDlinkTicketValidationPage.btnMarkAsResolveTicket.waitForClickable();
        SDlinkTicketValidationPage.btnMarkAsResolveTicket.click();
    }
    clickOnCascasdeUpdateOption(ticketStatus)
    {
        ticketStatus = ticketStatus.replace(/['"]+/g, '');
        if(ticketStatus==='Closed')
        {
            SDlinkTicketValidationPage.cascadeCloseToUpdateLink.waitForDisplayed();
            if(SDlinkTicketValidationPage.getStatusOfCheckbox.getAttribute('data-testid')==='CheckBoxOutlineBlankIcon')
                {
                    SDlinkTicketValidationPage.inputOfCheckbox.click();
                    browser.pause('1000');
                }
            SDlinkTicketValidationPage.cascadeCloseToUpdateLink.click();
        }
        else
        {
            SDlinkTicketValidationPage.cascadeResolveToUpdateLink.waitForDisplayed();
            if(SDlinkTicketValidationPage.getResolveStatusOfCheckbox.getAttribute('data-testid')==='CheckBoxOutlineBlankIcon')
                {
                    SDlinkTicketValidationPage.inputOfResolveCheckbox.click();
                    browser.pause('1000');
                }
            SDlinkTicketValidationPage.cascadeResolveToUpdateLink.click();
        }
        
    }
    checkTheOptionToCloseTicket()
    {
        SDlinkTicketValidationPage.cascadeCheckBoxParent.waitForDisplayed();
        if(SDlinkTicketValidationPage.getStatusOfCheckbox.getAttribute('data-testid')==='CheckBoxOutlineBlankIcon')
        {
            SDlinkTicketValidationPage.inputOfCheckbox.click();
            browser.pause('1000');
        }
        if(SDlinkTicketValidationPage.btnProceedClosingTicket.isExisting())
        {
            SDlinkTicketValidationPage.btnProceedClosingTicket.click();
        }
    }
    checkTheOptionToResolveTicket()
    {
        SDlinkTicketValidationPage.getResolveStatusOfCheckbox.waitForDisplayed();
        if(SDlinkTicketValidationPage.getResolveStatusOfCheckbox.getAttribute('data-testid')==='CheckBoxOutlineBlankIcon')
        {
            SDlinkTicketValidationPage.inputOfResolveCheckbox.click();
            browser.pause('1000');
        }
        if(SDlinkTicketValidationPage.btnResolveTicket.isExisting())
        {
            SDlinkTicketValidationPage.btnResolveTicket.click();
        }
    }
    clickBtnResolveTicket()
    {
        SDlinkTicketValidationPage.btnResolveTicket.waitForDisplayed();
        SDlinkTicketValidationPage.btnResolveTicket.waitForClickable();
        SDlinkTicketValidationPage.btnResolveTicket.click();
    }
    verifySearchTicketId() {
        SDlinkTicketValidationPage.inputTicketID.click();
        browser.pause(3000);
        var text = SDlinkTicketValidationPage.autocompleteDialouge.getText();
        var downArrowKey = ['\ue015'];// arrow down
		var enterKey = ['\ue007'];// enter
        browser.pause(1000);
        browser.keys(downArrowKey);
        browser.keys(enterKey);
        expect(text.substring(0,text.indexOf(' '))).to.eql((SDlinkTicketValidationPage.inputTicketID.getValue()).substring(0,text.indexOf(' ')));
        this.ticketID = text.substring(0,text.indexOf(' '));
    }
    verifyOpenLinkedTicketDock() {        
        console.log(this.ticketID);
        SDlinkTicketValidationPage.linkedTicket(this.ticketID);
        browser.pause(3000);
        expect(SDlinkTicketValidationPage.ticketNumberInHeader(this.ticketID).includes(this.ticketID)).to.be.true;
    }
    verifyCascadeUpdate(ticketStatus)
    {
        ticketStatus = ticketStatus.replace(/['"]+/g, '');
        if(ticketStatus==='Closed')
        {
            console.log('going to verify close cascade');
            SDlinkTicketValidationPage.cascadeCloseToUpdateLink.waitForDisplayed();
            expect(SDlinkTicketValidationPage.cascadeCloseToUpdateLink.isExisting()).to.be.true;
        }
        else{
            console.log('going to verify Resolve cascade');
            SDlinkTicketValidationPage.cascadeResolveToUpdateLink.waitForDisplayed();
            expect(SDlinkTicketValidationPage.cascadeResolveToUpdateLink.isExisting()).to.be.true;
        } 
    }
    verifyCascadeUpdateOptions()
    {
        //when no option get selected that means None selected
        SDlinkTicketValidationPage.selectAll.waitForDisplayed();
        expect(SDlinkTicketValidationPage.selectAll.getText()).to.eql('Select All');//select all option present
        expect(SDlinkTicketValidationPage.selectAllCheckbox.isExisting()).to.be.true;//select all checkbox present
        console.log('select all present');
        expect(SDlinkTicketValidationPage.selectSpecificTicket.isExisting()).to.be.true;//select specifc checkbox present
        console.log('select specific ticket present');
        if(SDlinkTicketValidationPage.statusSelectAll.getAttribute('data-testid')==='CheckBoxIcon')
        {
            browser.pause(1000);
            expect(SDlinkTicketValidationPage.statuSelectSpecific.getAttribute('data-testid')).to.eql('CheckBoxIcon');//select specific also checked
            console.log('specific also get selected');
            SDlinkTicketValidationPage.inputSelectAll.click();
        }
        if(SDlinkTicketValidationPage.statuSelectSpecific.getAttribute('data-testid')==='CheckBoxOutlineBlankIcon')
        {
            SDlinkTicketValidationPage.inputSelectSpecific.click();
            browser.pause(3000);
            expect(SDlinkTicketValidationPage.statusSelectAll.getAttribute('data-testid')).to.eql('CheckBoxIcon');//select all also checked
            console.log('select all also get selected');
        }
    }
    verifyToBypassCloseRequirements()
    {
        SDlinkTicketValidationPage.isAlertExist('Saved Successfully').waitForDisplayed();
        expect(SDlinkTicketValidationPage.isAlertExist('Saved Successfully').isExisting()).to.be.true;//changed saved successfully without selecting any requirement
        console.log('saved alert displayed') ;
    }
    verifyLinkedTicketGetResolved()
    {
        SDlinkTicketValidationPage.isAlertExist('Saved Successfully').waitForDisplayed();
        expect(SDlinkTicketValidationPage.isAlertExist('Saved Successfully').isExisting()).to.be.true;//saved changes
        console.log('saved alert displayed') ;
        if(SDlinkTicketValidationPage.btnNo.isExisting())
        {
            SDlinkTicketValidationPage.btnNo.waitForDisplayed();
            SDlinkTicketValidationPage.btnNo.waitForClickable();
            SDlinkTicketValidationPage.btnNo.click();
        }
        browser.pause(5000);
        expect(SDlinkTicketValidationPage.getOpenedTicketStatus.getValue()).to.eql('Resolved');//current opened ticket status
        expect(SDlinkTicketValidationPage.getlinkedTicketDetails.getText().includes('[RESOLVED]')).to.be.true;//linked ticket status resolved
        console.log('resolved status verified') ;
    }
    

}
module.exports = new SDlinkTicketValidationAction();