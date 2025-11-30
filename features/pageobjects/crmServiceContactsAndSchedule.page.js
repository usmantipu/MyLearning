const utils = require('../support/utils');
"use strict";
var Page = require('./page')

class crmServiceContactsAndSchedule extends Page {
    get btnServiceDesk() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/div/div/ul/div[3]/div[1]');}
    get btnList() {return browser.$('button=List');}
    get firstTicket() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[1]/div[1]/div/div/div/div[2]/div/div/div[3]');}
    get dockHeader(){return browser.$('.MuiDrawer-paperAnchorRight');}
    get kebabMenu(){return browser.$('.MuiDrawer-paperAnchorRight').$('[data-testid="MoreVertIcon"]');}
    get btnNewBeta(){return browser.$('/html/body/div[2]/div[3]/li/label');}
    get dueDateField(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[6]/div/div[3]/div/div[1]/div/div[6]/div/div/div');}
	get todayDate(){return browser.$('.MuiPickersDay-today');}
    get datePickerOk(){return browser.$('//*[@id="simple-popover"]/div[3]/div[2]/button[1]');}
    get expandSummarySection(){return browser.$('.MuiAccordionSummary-expandIconWrapper').$('svg');}
    get btnExpandSchedule(){return browser.$('button=Schedule');}
    get btnDueDate(){return browser.$('.MuiTypography-subtitle1*=Due Date');}
    get dueDateValue(){return browser.$('.MuiTypography-subtitle1*=Due Date').$('h6');}
    get activitySection(){return browser.$('.MuiAccordionSummary-content=Activity')}
    get firstActivityRow(){return browser.$('//*[@id="panel1a-content"]/div/div[2]/div/div[1]/div[2]/div/div/div[1]');}
    get btnPrefferedArrival(){return browser.$('h6*=Preferred Arrival');}
    get btnExactTime(){return browser.$('label*=Exact Time').$('.MuiRadio-root');}
    get btnWindowTime(){return browser.$('label*=Window Time').$('.MuiRadio-root');}
    get extactTimeCalendar(){return browser.$('//*[@id="simple-popover"]/div[3]/div[1]/div[3]/div/div').$('input');}
    get btnLinkedTicketCollapse(){return browser.$('button=Linked Tickets');}
    get chainIcon(){return browser.$('.MuiDrawer-paperAnchorRight').$('[data-testid="LinkIcon"]');}
    get noLinkedTicketHeader(){return browser.$('h6=No Linked Tickets');}
    get ticketNumber(){return browser.$('//*[@id="TicketsDrawer-container"]/div/div[2]/h6[1]');}
    get searchTicket(){return browser.$('//*[@id="panel1a-content"]/div/div/div[1]/div/div/div[4]/div/div/div[1]/div[2]/div/div[1]/div/div/div').$('input');}
    get btnLink(){return this.dockHeader.$('button=Link');}
    get linkedTicketsCount(){return this.dockHeader.$('.MuiChip-filled');}
    get unlinkButton(){return this.dockHeader.$('[data-testid="HighlightOffIcon"]');}
    get btnConDialogYes(){return browser.$('.MuiDialog-container').$('button=Yes');}
        svgExpand(parent){return parent.$('svg');}

    //common
    get btnCloseDialog() {return browser.$('.MuiDrawer-paperAnchorRight').$('[data-testid="CloseIcon"]');}
    get btnAppPlus(){return browser.$('.MuiToolbar-root').$('[data-testid="AddIcon"]');}
    get openATicket(){return browser.$('li=Open Ticket');}
    get assignmentType(){return browser.$('/html/body/div[2]/div[3]/div/div[2]/div[2]/h6/button');}
    get ticketType(){return browser.$('/html/body/div[2]/div[3]/div/div[2]/div[6]/div/div[3]/button');}
        selectOption(optionToselect){return browser.$('li='+optionToselect);}
    get inputSubsName(){return browser.$('/html/body/div[2]/div[3]/div/div[2]/div[4]/div/div/div').$('input');}
    get	autoComplete(){return browser.$('.MuiAutocomplete-popper');}
    get	btnCreate(){return browser.$('button=Create');}
    get	btnCancel(){return browser.$('button=Cancel');}
    get confirmationMsg(){return browser.$('.MuiAlert-message');}
    

}
module.exports = new crmServiceContactsAndSchedule();
