const utils = require('../support/utils');
"use strict";
var Page = require('./page')
class subscriberDetailsAttachment extends Page {
    
    get btnTransactions() {return browser.$('button=Transactions');}
    get btnLogs() {return browser.$('button=Logs');}
        logsSection() {return browser.$('.package-list-body').isExisting();}
    get logsSectionInner() {return browser.$$('.ReactVirtualized__Grid__innerScrollContainer');}
    get sortingFilter() {return browser.$$('.sort-filters');} // All => [8], Logs => [16]
    get threeDotedBtn() {return browser.$('//*[@id="subscriberPage"]/div/div[1]/div[1]/div/div/div/div[2]/div/div/div[1]/div/div/button');}

    get btnSaveNote() {return browser.$('/html/body/div[2]/div[3]/div/div/div/div[5]/button[1]');}
    get logsType() {return this.logsSectionInner.$$('.MuiTypography-root');}
        existsFirstLog() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[5]/div/div[2]/div/div[2]/div/div[1]/div/div/div/div/div[2]/div/div/div[3]/div/p').isExisting();}
    get typeOfFirstLog() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[5]/div/div[2]/div/div[2]/div/div[1]/div/div/div/div/div[2]/div/div/div[3]/div/p');}
    get allSelectedLogsFilterValues(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[5]/div/div[2]/div/div[2]/div/div[1]/div/div/div/div/div[2]/div/div').$$('.MuiTableCell-root');}
    get logsSectionHeader(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[5]/div/div[2]/div/div[2]/div/div[1]/div/div/div/div/div[1]/div/div').$$('.MuiTableCell-root');}
    get btnMenuAttachment(){return browser.$('li=Attachment');}
    get fileAttachment(){return browser.$('/html/body/div[2]/div[3]/div/div/div/div[1]/div/div/div/div/input');}
    get btnDialogAddAttachement(){return browser.$('button=Add Attachment');}
    get btnMarkAttachmentAsPrivate(){return browser.$('/html/body/div[2]/div[3]/div/div/div/div[2]/div/label/span[1]');}
    btnPrivateAttachment(parent){return parent.$('[data-testid="RemoveRedEyeIcon"]');}
    get logDialogText(){return browser.$('/html/body/div[2]/div[3]/div/div/div/div[1]/div/div');}
    get closeOpenedDock(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[1]/button[4]');}
    get btnDownload(){return browser.$('button=Download');}

    get contentOfDialog(){return browser.$('/html/body/div[2]/div[3]/div/div');}
    get expandLogsDottedMenu(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[5]/div/div[1]/div/div[2]/div/div[2]/button');}
    get btnRemoveItem(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[5]/div/div[2]/div/div[2]/div/div[1]/div/div/div/div/div[2]/div').$('[data-testid="CloseIcon"]');}
    get btnDeleteFromDialog(){return browser.$('/html/body/div[2]/div[3]/div/div[2]/button[1]');}
    get closeOPenedPopUp(){return browser.$('.MuiDialog-paper').$('[data-testid="CloseIcon"]');}

}
module.exports = new subscriberDetailsAttachment();