"use strict";
var Page = require('./page')

class crmTasksCardPart1Page extends Page{
	get headingServiceDesk(){return browser.$('h4=Service Desk');}
	get addBtnTop(){return browser.$('[vispdata-testid="add-options-icon-button"]');}
	get liOpenTicket(){return browser.$('[vispdata-testid="add-options-open-ticket"]');}
	createTicketPopoverExists(){return browser.$('h6=Create Ticket').isExisting();}
	get vertDotsOnTicketHeader(){return browser.$('[data-testid="MoreVertIcon"]');}
	get togleBetaVersion(){return browser.$('.MuiSwitch-switchBase');}
	get btnsOnCreateTicketPopup(){return browser.$('.MuiGrid-spacing-xs-2').$$('button');}
	get liSubscriber(){return browser.$('li=Subscriber');}
	get btnCreate(){return browser.$('button=Create');}
	get alertMsg(){return browser.$('.MuiAlert-message');}
	get btnAddTask(){return browser.$('[aria-label="Add Task"]');}
	get inputAddTask(){return browser.$('[placeholder="Add text here"]');}
	get btnSave(){return browser.$('button=Save');}
	checkTaskExists(task){return browser.$('li='+task).isExisting();}
	hoverOverTask(task){return browser.$('li='+task).moveTo();}
	get threeDotsInTask(){return browser.$('[data-rbd-droppable-id="droppable"]').$('button');}
	get liConvertToTicket(){return browser.$('li=Convert to ticket');}
	get h6ConvertTaskToTicket(){return browser.$('h6=Convert Task to a Ticket');}
	get btnCancelOnConvertTicketPopup(){return browser.$$('.MuiGrid-spacing-xs-2')[3].$('button=Cancel');}
	get btnsOnConvertIntoTicketPopup(){return browser.$$('.MuiGrid-spacing-xs-2')[3].$$('button');}
	get btnShowRecentActions(){return browser.$('[aria-label="Show Recent Actions"]');}
	get h6Summary(){return browser.$('h6=Summary');}
	verifyDescription(description){return browser.$('p*='+description).isExisting();}
	get pLinkedTickets(){return browser.$('p=Linked Tickets');}
	get ticketNumberAtHeader(){return browser.$('h6*=Ticket #');}
	get h6IsChildOf(){return browser.$('h6=Is Child Of');}
	verifyLinkedTicket(ticketID) {return browser.$('h6='+ticketID).isExisting();}
	


}

module.exports = new crmTasksCardPart1Page();