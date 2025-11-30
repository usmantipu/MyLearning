const { verifyUserDismissableOption } = require('../support/alertsSubscriberActions');
const utils = require('../support/utils');
"use strict";
var Page = require('./page')

class SDTicketTypesPage extends Page {
    get backgroundProcess() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[1]/button');}
    get btnCloseAllProcesses() {return browser.$('button=Close All');}
    get btnYes() {return browser.$('button=Yes');}
    get btnAppMenu() {return browser.$('[data-testid="AppsIcon"]');}
    get btnCRM() {return browser.$('button=CRM');}
    get settingsTicketTypes() {return browser.$('[vispdata-testid="view-ticket-types"]');}
    get allTicketTypes() {return browser.$('.drawer-wrapper').$('.MuiList-root');}
    get divPhoneCall() {return browser.$("//h6[normalize-space()='Ticket Types']" +
  "/ancestor::div[contains(@class,'MuiDrawer-paper')]" +
  "//ul[contains(@class,'template-list')]//span[normalize-space()='Phone Call']" +
  "/ancestor::div[@role='button']");}
    get parentDiv() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[2]/div[4]/div/div[2]/div[1]');}
    // get inputSummary() {return this.parentDiv.$('div').$$('div')[1].$('span').$('div').$('div').$('input');}
    get inputSummary() {return browser.$('[name="ticket_type_summary"]');}
    // get rootDivHours() {return this.parentDiv.$$('div')[1].$('div').$('span').$('div').$('div');}
    // get divHours() {return this.rootDivHours.$('div');}
    get divHours() {return browser.$('[name="hrs"]');}
    // get inputHours() {return this.rootDivHours.$('input');}
    get inputHours() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[2]/div[4]/div/div[2]/div[1]/div[2]/div[1]/span/div/div').$('input');}
    get setHours() {return browser.$('li=1');}
    // get rootDivMins() {return this.parentDiv.$$('div')[1].$$('div')[1].$('span').$('div').$('div');}
    // get divMins() {return this.rootDivMins.$('div');}
    get divMins() {return browser.$('[name="mins"]');}
    // get inputMins() {return this.rootDivMins.$('input');}
    get inputMins() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[2]/div[4]/div/div[2]/div[1]/div[2]/div[2]/span/div/div').$('input');}
    get setMins() {return browser.$('li=0');}
    get ticketUpdateHeading(){return browser.$('h6=Ticket Update Requirements');}
    get allLableParent(){return browser.$('//h6[normalize-space()="Ticket Update Requirements"]');}
    get allswictdata(){return browser.$$('//h6[normalize-space()="Ticket Update Requirements"]' +
    '/following-sibling::*[preceding-sibling::h6[1][normalize-space()="Ticket Update Requirements"]]' +
    '//label[contains(@class,"MuiFormControlLabel-root")]');}
    //get rootRequireAllTasks() {return this.allLable.$$('.pb-4')[0];}
    switchRequireAllTasks(parent) {return parent.$('.MuiSwitch-switchBase');}
    checkSwitchRequireAllTasks(parent) {return parent.$('.MuiSwitch-switchBase');} // verify class ( Mui-checked ) for true or false
    textOfAllTask(parent) {return parent.$('p');}
    //get rootRequireCustomField() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[2]/div[4]/div/div[2]/div[1]/div[4]/div/span/label');}
    switchRequireCustomFields(parent) {return parent.$('.MuiSwitch-switchBase');}
    checkSwitchRequireCustomFields(parent) {return parent.$$('span')[1];} // verify class ( Mui-checked ) for true or false
    textOfCustomField(parent) {return parent.$('p');}
    // get switchRequireAllTasks() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[2]/div[4]/div/div[2]/div[1]/div[3]/div/span/label/span');};
    // get switchRequireCustomFields() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[2]/div[4]/div/div[2]/div[1]/div[4]/div/span/label/span');}
    // get checkSwitchRequireAllTasks() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[2]/div[4]/div/div[2]/div[1]/div[3]/div/span/label/span/span[1]');}; // verify class ( Mui-checked ) for true or false
    // get checkSwitchRequireCustomFields() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[2]/div[4]/div/div[2]/div[1]/div[4]/div/span/label/span').$('span');}; // verify class ( Mui-checked ) for true or false
    // get textOfCustomField() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[2]/div[4]/div/div[2]/div[1]/div[4]/div/span/label/p');}
    get customFieldsSecondLink() {return this.textOfCustomField.$$('a')[1];}
    get cardPopup() {return browser.$('.MuiPopover-paper');}
    get spanAddingOnPopup() {return browser.$('.MuiFormControlLabel-labelPlacementEnd*=Adding').$('span');}
    get spanEditingOnPopup() {return browser.$('.MuiFormControlLabel-labelPlacementEnd*=Editing').$('span');}
    get spanResolvingOnPopup() {return browser.$('.MuiFormControlLabel-labelPlacementEnd*=Resolving').$('span');}
    get spanClosingOnPopup() {return browser.$('.MuiFormControlLabel-labelPlacementEnd*=Closing').$('span');}
    get btnSaveOnPopup() {return browser.$('//*[@id="actionPopover"]/div[3]/div/div/div/div[2]/div[3]/div/button[1]');}
    // get textOfAllTask() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[2]/div[4]/div/div[2]/div[1]/div[3]/div/span/label/p');}
    get allTasksSecondLink() {return browser.$('.MuiLink-underlineHover=resolving or closing');}
    get btnSave() {return browser.$('.MuiDrawer-paperAnchorRight*=Edit Ticket Types').$('button=Save');}
    get btnSaveCustomField() {return browser.$("//h6[normalize-space()='Custom Fields']" +"/ancestor::div[contains(@class,'MuiDrawer-paper')]" +"//button[normalize-space()='Save']");}
    get btncloseEditTicketType() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[2]/div[4]/div/div[1]/div/div[2]/button');}
    get btncloseTicketType() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[2]/div[1]/div/div[2]/button[2]');}
    get inputTicketType() {return browser.$('[vispdata-testid="ticket-type-dropdown-text-field"]').$('input');}
    get assignmentLable() {return browser.$('[vispdata-testid="ticket-tasks-add-button"]');}
    get autocompleteDialouge() {return browser.$('.MuiAutocomplete-popper').$('li');}
    get btnContinueAnyway() {return browser.$('button=Continue Anyway');}
    get alertMessage() {return browser.$('.MuiAlert-message');} // Saved Successfully
    get btnAddTask() {return browser.$('[vispdata-testid="ticket-tasks-add-icon"]');}
    get tickSaveTaskIcon() {return browser.$('[data-testid="CheckCircleIcon"]');}
    get iconUpArrow() { return browser.$('[vispdata-testid="ticket-resolve-close-deletebtn-dropdown-button"]');}
    get liMarkasResolved() {return browser.$('[vispdata-testid="ticket-resolve-close-deletebtn-menu-item-Mark as Resolved"]');}
    get liCloseTicket() {return browser.$('[vispdata-testid="ticket-resolve-close-deletebtn-menu-item-Close Ticket"]');}
    get liDeleteTicket() {return browser.$('li=Delete Ticket');}
    get btnMarkasResolved() {return browser.$('[vispdata-testid="ticket-resolve-close-deletebtn-progress-button"]');}
    get btnCloseTicket() {return browser.$('button=Close Ticket');}
    get btnDeleteTicket() {return browser.$('button=Delete Ticket');}
    get getTooltipText(){return browser.$('.MuiTooltip-popper');}
    get toolTip() {return browser.$('.MuiTooltip-tooltipPlacementTop');} //- all tasks to be checked //- all custom fields to be filled out
    get divTaskParent() {return browser.$('[vispdata-testid="ticket-tasks-container"]');}
    get h4CustomOrTask() {return browser.$('[vispdata-testid="ticket-tasks-title"]');}
    get divAllTasksOnSecondPlace() {return this.divTaskParent.$$('.MuiCheckbox-root');}
    get divAllTasks() {return this.divTaskParent.$$('.MuiCheckbox-root');}
        isTaskDone(element) {return element.$('input').getValue();}
        divEmail() {return browser.$('.MuiDialog-paper').isExisting();}
    get btnEmailSendNo() {return browser.$('button=No');}
    get textTicketResolved() {return browser.$('[vispdata-testid="ticket-form-resolved-message"]');}
        closingTicketpromptAppears() {return browser.$('[vispdata-testid="ticket-failed-dialog-title"]').isExisting();}
    get btnProceedClosingTicket() {return browser.$('[vispdata-testid="ticket-failed-dialog-button-submit-report-proceed-closing-ticket"]');}
    get customFieldsLink() {return browser.$('.MuiLink-underlineHover*=Custom Fields');}
    get customFieldsInput() {return browser.$('[name="customFields.0.label"]');}
    get btnCloseCustomField() {return browser.$(
  "//h6[normalize-space()='Custom Fields']" +
  "/ancestor::div[contains(@class,'MuiDrawer-paper')]" +
  "//button[normalize-space()='Cancel']"
);}
    // get btnCloseCustomField() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[7]/div/div[2]/div[4]/div/div[2]/div[1]/div[3]/div/header/button');}
    get btnTicketSave(){return browser.$('[vispdata-testid="ticket-form-save-and-restore-button-save"]');}
    get btnSaveAfterEdit() {return browser.$('[vispdata-testid="ticket-form-save-and-restore-button-save-disabled"]');}
    get customFieldInputInTicket() {return browser.$('[vispdata-testid="ticket-custom-field-input-0"]').$('input');}
    get ticketSummary() {return browser.$('[vispdata-testid="ticket-form-summary-field"]').$('input');}
    get customFieldParent() {return this.browser.$('[vispdata-testid="ticket-custom-field-container"]');}
    get customFieldInputEditTicket() {return this.customFieldParent.$('input');}
    get rootRequireAttachment() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[2]/div[4]/div/div[2]/div[1]/div[5]/div/span/label');}
    switchRequireAttachment(parent) {return parent.$('span');}
    checkSwitchRequireAttachment(parent) {return parent.$$('span')[1];}; // verify class ( Mui-checked ) for true or false
    get textOfAttachment() {return this.allLable[6].$('p');}
    
    get attachmentsSecondLink() {return this.textOfAttachment.$$('a')[1];}
    get clickTicketAddedFollower() {return browser.$('[vispdata-testid="formik-follower-avatar-text-Jon Automation"]');}
    get checkUnckeckFOllower() {return browser.$('[data-testid="CheckIcon"]');}
    get clickAddFollowerFromTicket() {return browser.$('[vispdata-testid="formik-follower-icon-plus}"]');}
    get rootRequireFollower() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[2]/div[4]/div/div[2]/div[1]/div[7]/div/span/label');}
    switchRequireFollower(parent) {return parent.$('span');}
    checkSwitchRequireFollower(parent) {return parent.$$('span')[1];}; // verify class ( Mui-checked ) for true or false
    textOfFollower(parent) {return parent.$('p');}
    followerSecondLink(parent) {return parent.$('.mui-link-underlineHover');}
    get rootRequireScheduler() {return browser.$('[label="Require ticket to be scheduled"]');}
    get switchRequireSchduler() {return this.rootRequireScheduler.$('input');}
    get checkSwitchRequireScheduler() {return this.rootRequireScheduler.$('svg');};
    get rootRequireQueueScheduler() {return this.allLable[10].$('span');}
    get switchRequireQueueScheduler() {return this.allLable[10].$('span');}
    get switchRequireQueueInput() {return this.switchRequireQueueScheduler.$('input');}
    checkSwitchRequireQueueScheduler(parent) {return parent.$$('span')[1];};
    switchRequireQueueScheduler(parent) {return parent.$('span');}
    get inputDueBy() {return browser.$('[name="default_due_by"]');}
    get selectDueUnitBY() {return browser.$('[name="default_due_by_unit"]');}
    get selectDaysFromMenu() {return browser.$('li=Days');}
    get selectDueFormat() {return browser.$('[name="default_due_by_format"]');}
    get selectDateFormatOption() {return browser.$('li*=USA Style');}
    get rootNote() {return browser.$('.MuiDrawer-paperAnchorRight*=Edit Ticket Types').$('label=Notes');}
    get switchNote() {return this.rootNote.$('input');}
    get checkSwitchNote() {return this.rootNote.$('svg');};
    get rootStatus() {return browser.$('.MuiDrawer-paperAnchorRight*=Edit Ticket Types').$('label=Ticket Status');}
    get switchStatus() {return this.rootStatus.$('input');}
    get checkSwitchStatus() {return this.rootStatus.$('svg');};
    get rootNoteSecond() {return this.allLable[14].$('span');}
    get switchNoteSecond() {return this.rootNoteSecond.$('input');}
    get checkSwitchNoteSecond() {return this.rootNoteSecond.$('svg');};
    get rootStatusSecond() {return this.allLable[15].$('span');}
    get switchStatusSecond() {return this.rootStatusSecond.$('input');}
    get checkSwitchStatusSecond() {return this.rootStatusSecond.$('svg');};

//     [0-19] index is 0 and values is
// [0-19] index is 1 and values is
// [0-19] index is 2 and values is (Hrs)*
// [0-19] index is 3 and values is (Min)*
// [0-19] index is 4 and values is Require all Tasks to be checked when resolving or closing the ticket.
// [0-19] index is 5 and values is Require all Custom Fields to be filled out when adding, editing, resolving, or closing the ticket.
// [0-19] index is 6 and values is Require all the Attachments to be uploaded when resolving or closing the ticket.
// [0-19] index is 7 and values is Require a signature when resolving or closing the ticket.
// [0-19] index is 8 and values is Disable editing if a signature has been added to the ticket.
// [0-19] index is 9 and values is Require at least one follower when adding or editing the ticket.
// [0-19] index is 10 and values is Queue Unscheduled Tickets
// [0-19] index is 11 and values is Require ticket to be scheduled
// [0-19] index is 12 and values is Notes
// [0-19] index is 13 and values is Ticket Status
// [0-19] index is 14 and values is Ticket Resolved
// [0-19] index is 15 and values is Ticket Closed
// [0-19] index is 16 and values is By default, Include notes on print
// [0-19] index is 17 and values is Ticket
// [0-19] index is 18 and values is Subscriber Summary
// [0-19] index is 19 and values is Make this ticket type available for Messenger
}
module.exports = new SDTicketTypesPage();