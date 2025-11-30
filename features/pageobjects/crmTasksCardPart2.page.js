"use strict";
var Page = require('./page')

class crmTasksCardPart2Page extends Page{
	get h6Tasks(){return browser.$('h6=Tasks');}
	get downArrowHeaders(){return browser.$$('[data-icon="chevron-down"]');}
	get spanTaskCompleted(){return browser.$('span*=task completed');}
	get threeDotsInTaskHeaders(){return browser.$$('[aria-controls="panel1a-content"]')[2].$('[data-testid="MoreVertIcon"]');}
	get pFeedback(){return browser.$('p=Feedback');}
    verifyTaskExists(taskVal){return browser.$('p=' + taskVal).isExisting();}
	get h6Activity(){return browser.$('h6=Activity');}
    verifyTaskLogHistoryExists(value){return browser.$('p=' + value).isExisting();}
	// get checkboxWithTask(){return browser.$$('.MuiCollapse-entered')[1].$('[type="checkbox"]');}
	get checkboxWithTask(){return browser.$('.tasks-checkbox');}
	get dragTasks(){return browser.$$('[data-testid="DragIndicatorIcon"]');}
	get spanPriority() {return browser.$('span[aria-label^="Priority:"]');}
	get spanType() {return browser.$('span[aria-label^="Type:"]');}
	get spanStatusOpen() {return browser.$('[aria-label="Status: Open"]');}
	get divAssignees() {return browser.$('div=Assignees:');}
	get divFollowers() {return browser.$('div=Followers:');}
	get dockedParentTicket() {return browser.$('.MuiListItem-secondaryAction');}
    verifyTaskLogForTaskConversion(value){return browser.$('p*=' + value).isExisting();}
	get liDelete() {return browser.$('li=Delete');}
	get btnYes() {return browser.$('button=Yes');}
	get liEdit() {return browser.$('li=Edit');}
	get feedbackForm() {return browser.$('p*=this experience?');}
	get feedbackSatisfied() {return browser.$('.satisfied');}
	get btnSend() {return browser.$('button=Send');}


}

module.exports = new crmTasksCardPart2Page();