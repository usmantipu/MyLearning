const utils = require('../support/utils');
"use strict";
var Page = require('./page')

class CRMLinkedList extends Page
{
    get dashboardTitle(){return browser.$('h4*=Welcome');}
    get crmArea()  { return browser.$('[aria-label="Service Desk"]'); }
    get h4ServiceDesk(){return browser.$('h4=Service Desk');}
    get btnList(){return browser.$('button=List');}
    get btnAddOnTop()  { return browser.$('[aria-label="More"]'); }
    get liOpenTicket(){return browser.$('li=Open Ticket');}
    get btnMoreVertical()  { return browser.$('[data-testid="MoreVertIcon"]'); }
    get enableBeta()  { return browser.$('.MuiSwitch-root'); }
    get h6CreateTicket(){return browser.$('h6=Create Ticket');}
    get dropdownsCreateTicket()  { return browser.$$('[data-testid="ArrowDropDownIcon"]'); }
    get liSubscriber(){return browser.$('li=Subscriber');}
    get inputSubscriber(){return browser.$('.MuiAutocomplete-inputRoot').$('input');}
    get btnCreate(){return browser.$('button=Create');}
    get alertMsg(){return browser.$('.MuiAlert-message');}
    get pLinkedTickets(){return browser.$('p=Linked Tickets');}
    get chainIcon()  { return browser.$('[data-testid="LinkIcon"]'); }
    get ticketNumber(){return browser.$('.drawer-header').$('h6');}
    get selectedTickets()  { return browser.$$('.MuiChip-deletableColorDefault'); }
    get relationShip()  { return browser.$('[aria-labelledby="select-label"]'); }
    get btnLink(){return browser.$('button=Link');}
    get linkedItems() {return browser.$('[role="menu"]');}
}

module.exports = new CRMLinkedList();