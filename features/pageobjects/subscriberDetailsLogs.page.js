const utils = require('../support/utils');
"use strict";
var Page = require('./page')
class subscriberDetailsLogs extends Page {
    get btn_All()    {return browser.$('//span[contains(text(),"All")]');}
    get btn_PaidUp()    {return browser.$('.d-inline-block').$('.sort-filters=Paid up');}
    get btnTransactions() {return browser.$('button=Transactions');}
    get btnLogs() {return browser.$('button=Logs');}
        logsSection() {return browser.$('.package-list-body').isExisting();}
    get logsSectionInner() {return browser.$$('.ReactVirtualized__Grid__innerScrollContainer');}
    get logsData() {return browser.$('.activity-table').$('.bottomRightGrid').$$('p');}
    //get secondLogDate() {return browser.$('.activity-table').$('.bottomRightGrid').$$('p')[5];}
    get sortingFilter() {return browser.$$('.sort-filters');} // All => [8], Logs => [16]
    get threeDotedBtn() {return browser.$('//*[@id="subscriberPage"]/div/div[1]/div[1]/div/div/div/div[2]/div/div/div[1]/div/div/button');}
    get templeteBtn() {return browser.$('li=Template');}
    get emailAboutHighUsage() {return browser.$('li=High Usage Alert');}
    get emailSendBtn() {return browser.$('button=Send');}
    get noteBtn() {return browser.$('li=Note');}
    get noteTextArea() {return browser.$('[name="note"]');}
    get btnSaveNote() {return browser.$('/html/body/div[2]/div[3]/div/div/div/div[5]/button[1]');}
    get logsType() {return this.logsSectionInner.$$('.MuiTypography-root');}
    //get templeteBtn() {return browser.$('//*[@id="row-action-menu"]/div[3]/ul/li[3]/div[1]');}
        existsFirstLog() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[5]/div/div[2]/div/div[2]/div/div[1]/div/div/div/div/div[2]/div/div/div[3]/div/p').isExisting();}
    get typeOfFirstLog() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[5]/div/div[2]/div/div[2]/div/div[1]/div/div/div/div/div[2]/div/div/div[3]/div/p');}
    get allSelectedLogsFilterValues(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[5]/div/div[2]/div/div[2]/div/div[1]/div/div/div/div/div[2]/div/div').$$('p');}
    get firstItemOfLogs(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[5]/div/div[2]/div/div[2]/div/div[1]/div/div/div/div/div[2]/div/div/div[2]');}
    get appUser(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[5]/div/div[2]/div/div[2]/div/div[1]/div/div/div/div/div[2]/div/div/div[4]');}
    get logsSectionHeader(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[5]/div/div[2]/div/div[2]/div/div[1]/div/div/div/div/div[1]/div/div').$$('.MuiTableCell-root');}
    get btnMenuAttachment(){return browser.$('li=Attachment');}
    get fileAttachment(){return browser.$('/html/body/div[2]/div[3]/div/div/div/div[1]/div/div/div/div/input');}
    get btnDialogAddAttachement(){return browser.$('button=Add Attachment');}
    get contentOfDialog(){return browser.$('/html/body/div[2]/div[3]/div/div');}
    get expandLogsDottedMenu(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[5]/div/div[1]/div/div[2]/div/div[2]/button');}
    get selecAddtTicket(){return browser.$('li=Add Ticket');}
    get btnRemoveItem(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[5]/div/div[2]/div/div[2]/div/div[1]/div/div/div/div/div[2]/div/div/div[4]/div/div/div[2]/button');}
    get btnDeleteFromDialog(){return browser.$('/html/body/div[2]/div[3]/div/div[2]/button[1]');}
    get noDatAvailablefromLogs(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[5]/div/div[2]/div/div[2]/div/div[1]/div/div/p');}
    get searchInputOfLogs(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[5]/div/div[2]/div/div[1]/div/div[2]/div/div').$('input');}
    get allHeaders () { return browser.$('.activity-table').$('.topRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('p');}
    get allColumnsData() {return browser.$('.activity-table').$('.bottomRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('.MuiTableCell-root');}
    //add Ticket
    get selectTicketType(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[6]/div/div[3]/div/div[1]/div/div[4]/div/div/div').$('input');}
    get ticketSummary(){return browser.$('[name="summary"]');}
    get btnTicketEdit(){return browser.$('.MuiDrawer-paperAnchorRight').$('button=Edit');}
    get ticketEditor(){return browser.$('.ql-editor');}
    get btnOkEditorMsg(){return browser.$('.MuiDrawer-paperAnchorRight*=Add Ticket -').$('button=Ok');}
    get btnSaveTicket(){return browser.$$('button=Save');}
    get closeTicketDoc(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[1]/button[4]');}
    get closeReopenedTicketDoc(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[6]/div/button');}
    get autocompleteDialouge() {return browser.$('.MuiAutocomplete-popper').$('li');}

}
module.exports = new subscriberDetailsLogs();
