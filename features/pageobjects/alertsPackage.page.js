const utils = require('../support/utils');
"use strict";
var Page = require('./page')

class alertsPackagePage extends Page {
    get firstBtn() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[2]/div[1]/div/div/button[1]');}
	get moreBtnUnderLogsSection() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[5]/div/div[1]/div/div[2]/div').$('[data-testid="MoreVertIcon"]');}
    get btnAddAlert() {return browser.$('li=Add Alert');}
    get headingAddAlert() {return browser.$('h6=Add Alert');}
    get checkboxUserDismissible() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[4]/div/div[2]/div[1]/div/div[1]/div/div[1]/label/span[1]');}
    get checkboxUserDismissibleInput() {return this.checkboxUserDismissible.$('input');}
    get textarea() {return browser.$('[name="message"]');}
    get checkboxCascade() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[4]/div/div[2]/div[1]/div/div[4]/label/span[1]');}
    get checkboxCascadeInput() {return this.checkboxCascade.$('input');}
    get dropdownCategory() {return browser.$('[name="association_type"]');}
    get packageFromDropDown() {return browser.$('li=Package');}
    get dropdownPackageID() {return browser.$('[name="association_id"]');}
    get packageTypeWireless() {return browser.$('li=Wireless');}
    // get packageType() {return browser.$('//*[@id="menu-association_id"]/div[3]/ul/li');}
    get btnAdd(){return browser.$('button=Add');}
    get alertMessage() {return browser.$('.MuiAlert-message');} // Alert successfully added.
        pkgLink(pkgName) {return browser.$$('.subscriber-summary-boxes')[1].$('span=' + pkgName).click();}
        scrollToAlertExists(pkgMsg) {return browser.$('h6=' + pkgMsg).scrollIntoView();}
        alertExists(pkgMsg) {return browser.$('h6=' + pkgMsg).isExisting();}
        alertCascadeFlagShow(pkgName) {return browser.$$('.subscriber-summary-boxes')[1].$('div=' + pkgName).$('[data-testid="CheckCircleOutlineIcon"]').isExisting();}
        openAlertCascadeFlagShowPkg(pkgName) {return browser.$$('.subscriber-summary-boxes')[1].$('div=' + pkgName).$('span').click();}
    get successAlertMessageDiv(){return browser.$('div=Alert successfully added.');}
    get allH6InPkgDetails() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[6]/div/div[2]/div/div[2]').$$('h6');}
        dissmissAlert(pkgMsg) {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[6]/div/div[2]/div/div[2]').$('.MuiPaper-root=' + pkgMsg).$('button').click();}
    get highSeveirty() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[4]/div/div[2]/div[1]/div/div[1]/div/div[3]/span[4]');}
    get getAllAppliedAlerts(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[6]/div').$$('.MuiAlert-root');}
        closeServiceAlertByParent(parent){return parent.$('[title="Close"]');}
}
module.exports = new alertsPackagePage();
