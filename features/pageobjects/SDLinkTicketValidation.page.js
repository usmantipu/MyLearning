const utils = require('../support/utils');
"use strict";
var Page = require('./page')

class SDlinkTicketValidationPage extends Page {

    get btnServiceDesk() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/div/div/ul/div[3]/div[1]');}
    get btnList() {return browser.$('button=List');}
    get ticket1() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[1]/div[1]/div/div/div/div[2]/div/div/div[3]');}
    get inputTicketType() {return browser.$('[name="link_ticket_types"]').$('input');}
    get inputTicketID() {return browser.$('[name="ticket_id"]').$('input');}
    get btnLinkTicket() {return browser.$('button=Link Ticket');}
    get autocompleteDialouge() {return browser.$('.MuiAutocomplete-popper').$('li');}
        linkedTicketExists(id) { browser.$('h6=' + id).isExisting();}
        linkedTicket(id) { browser.$('h6=' + id).click();}
        ticketNumberInHeader(id) { return browser.$('button*='+id).getText();}
    get viewMoreBtn() {return browser.$('[vispdata-testid="ticket-resolve-close-deletebtn-dropdown-button"]');}
    get liCloseTicket(){return browser.$('[vispdata-testid="ticket-resolve-close-deletebtn-menu-item-Close Ticket"]');}
    get btnMarkAsResolveTicket(){return browser.$('button=Mark as Resolved');}
    get btnDeleteTicket(){return browser.$('button=Delete Ticket');}
    get btnCloseTicket(){return browser.$('[vispdata-testid="ticket-resolve-close-deletebtn-progress-button"]');}
    get liMarkAsResolveTicket(){return browser.$('[vispdata-testid="ticket-resolve-close-deletebtn-menu-item-Mark as Resolved"]');}
    get liDeleteTicket(){return browser.$('li=Delete Ticket');}
    get cascadeCloseToUpdateLink(){return browser.$('[vispdata-testid="ticket-failed-dialog-p-cascade-update"]');}
    get cascadeResolveToUpdateLink(){return browser.$('[vispdata-testid="ticket-cascade-resolve-dialog-p-cascade-update"]');}
    get cascadeCloseCheckBoxParent(){return browser.$('[role="dialog"]').$('.MuiCheckbox-root');}
    get getCloseStatusOfCheckbox(){return this.cascadeCloseCheckBoxParent.$('svg');}
    get inputCloseOfCheckbox(){return this.cascadeCloseCheckBoxParent.$('input');}
    get cascadeCheckBoxParent(){return browser.$('[vispdata-testid="ticket-failed-dialog-checkbox"]');}
    get getStatusOfCheckbox(){return this.cascadeCheckBoxParent.$('svg');}
    get inputOfCheckbox(){return this.cascadeCheckBoxParent.$('input');}
    get cascadeResolveCheckBoxParent(){return browser.$('[vispdata-testid="ticket-cascade-resolve-dialog-checkbox"]');}
    get getResolveStatusOfCheckbox(){return this.cascadeResolveCheckBoxParent.$('svg');}
    get inputOfResolveCheckbox(){return this.cascadeResolveCheckBoxParent.$('input');}
    get selectAll(){return browser.$('[vispdata-testid="ticket-linked-tickets-popover-list-item"]');}
    get selectAllCheckbox(){return this.selectAll.$('span');}
    get statusSelectAll(){return this.selectAllCheckbox.$('svg');}
    get inputSelectAll(){return this.selectAllCheckbox.$('input');}
    get selectSpecificTicket(){return browser.$('[vispdata-testid^="ticket-linked-tickets-popover-list-item-"]');}
    get statuSelectSpecific(){return this.selectSpecificTicket.$('svg');}
    get inputSelectSpecific(){return this.selectSpecificTicket.$('input');}
    get btnProceedClosingTicket(){return browser.$('button=Proceed Closing Ticket');}
    get btnNo(){return browser.$('/html/body/div[2]/div[3]/div/div[2]/button');}
        isAlertExist(msg){return browser.$('.MuiAlert-message='+msg);}
    get btnResolveTicket(){return browser.$('[vispdata-testid="ticket-cascade-resolve-dialog-progress-button"]');}
    get getOpenedTicketStatus(){return browser.$('div=Status').$('input');}
    get linkedToParent(){return browser.$('.MuiGrid-container*=Linked Tickets');}
    get getlinkedTicketDetails(){return this.linkedToParent.$('li');}

}
module.exports = new SDlinkTicketValidationPage();