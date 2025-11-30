"use strict";
var Page = require('./page')

class crmTasksCardPart3Page extends Page{
	get h6Tasks(){return browser.$('h6=Tasks');}
	get downArrowHeaders(){return browser.$$('[data-icon="chevron-down"]');}
    get threeDotsInTask(){return browser.$('[data-rbd-droppable-id="droppable"]').$('[data-testid="MoreVertIcon"]');}
    get btnCancel(){return browser.$('button=Cancel');}
    get hiddenKebabMenuTask(){return browser.$('[data-rbd-droppable-id="droppable"]').$$('button')[1];}
    get pNoTaskAdded(){return browser.$('p=No Task Added.');}
    waitUntilDescriptionDisplayed(description){return browser.$('p*='+description).waitForDisplayed();}
    verifyDescription(description){return browser.$('p*='+description).isExisting();}
    get spanStatusOpen() {return browser.$('[aria-label="Status: Open"]');}
    get liResolved(){return browser.$('li=Resolved');}
    get spanNoAssignees(){return browser.$('span=No Assignees');}
    get h6TicketNo(){return browser.$('h6*=Ticket #');}
    verifyBtnLinkExists(btn){return browser.$('button=' + btn).isExisting();}
    getClassOfBtnLink(btn){return browser.$('button=' + btn).getAttribute('class');}

}

module.exports = new crmTasksCardPart3Page();