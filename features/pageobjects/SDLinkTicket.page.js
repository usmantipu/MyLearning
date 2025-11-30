const utils = require('../support/utils');
"use strict";
var Page = require('./page')
class SDlinkTicketPage extends Page{

    get btnServiceDesk() {return browser.$('[vispdata-testid="navigate-to-Service Desk"]');}
    get closeRightDrawer(){return browser.$('[aria-label="Close"]');}
    get btnList() {return browser.$('button=List');}
    get btnAllList() {return browser.$('[vispdata-testid="ticket-status-button-all"]');}
    get ticket1() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[1]/div[1]/div/div/div/div[2]/div/div/div[3]');}
    get ticket2() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[1]/div[1]/div/div/div/div[2]/div/div/div[9]');}
    get h4LinkedTicket() { return browser.$('[vispdata-testid="linked-tickets-title"]'); }
    get inputTicketType() {return browser.$('[name="link_ticket_types"]').$('input');}
    get inputTicketID() {return browser.$('[name="ticket_id"]').$('input');}
    get btnLinkTicket() {return browser.$('button=Link Ticket');}
    get inputLinkedType(){return browser.$('[name="link_ticket_types"]').$('input');}
    get getMergedTicketID(){return browser.$('[vispdata-testid^="linked-tickets-form-ticket-id-"]');}
    get dockHeader(){return browser.$('[vispdata-testid="drawer-title-bar-tab-detail"]');}
    get autocompleteDialouge() {return browser.$('.MuiAutocomplete-popper').$('li');}
        linkedTicket(id) { browser.$('h6=' + id).click();}
        linkedTicketExists(id) { browser.$('h6=' + id);}
        ticketNumberInHeader(id) { return browser.$('button*='+id).getText();}
    get removeLinkedTicket(){return browser.$('[vispdata-testid^="linked-tickets-form-ticket-list-"]').$('[vispdata-testid^="linked-tickets-form-delete-button-"]');}
    get alertMessage(){return browser.$('.MuiAlert-message');}
    get btnYesOnDialogueBox(){return browser.$('.MuiDialogActions-root').$('button=Yes');}
    get btnResolved(){return browser.$('.sort-filters=Resolved');}
}
module.exports = new SDlinkTicketPage();