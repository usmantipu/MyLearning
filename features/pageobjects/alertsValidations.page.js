"use strict";
var Page = require('./page')
class alertsValidations extends Page{

    get threeDotedBtn() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[5]/div/div[1]/div/div[2]/div').$('[data-testid="MoreVertIcon"]');}
    get selectAddAlert(){return browser.$('li=Add Alert');}
    get addAlertDialog(){return browser.$('h6=Add Alert');}
    get alertDescription(){return browser.$('[name="message"]');}
    get alertPersistance(){return browser.$('label*=User dismissible');}
        // get alertActive(){return browser.$('label*=Active');}
    get alertActive(){return browser.$('[label="Active"]');}
    get alertCascade(){return browser.$('label*=Alert flags cascade to links');}
        chekboxByParent(parent){return parent.$('svg');}
    get btnAddAlert(){return browser.$('button=Add');}
    get btnAlertFromLogs(){return browser.$('span=ALERT');}
    get allHeaders () { return browser.$('.activity-table').$('.topRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('p');}
    get logsTableParent(){return browser.$('.package-list-body').$('.bottomRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer');}
    get logsFirstColumn() {return this.logsTableParent.$('p');}
    get allColumnsData() {return this.logsTableParent.$$('.MuiTypography-root');}
    get editAlertDialog(){return browser.$('h6=Edit Alert');}
    get btnSave(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[4]/div/div[2]/div[2]/span/button');}
    get alertHistorySection(){return browser.$('[name="logs"]');}
    get closeEditAlert(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[4]/div/div[1]/div/div[2]/button');}
    get closeAlert(){return browser.$('[title="Close"]');}
    get editContactIcon(){return browser.$('[data-testid="EditIcon"]');}
    get alertGreenIcon(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[4]/div/div[2]/div[1]/div/div[1]/div/div[3]/span[1]');}
    get alertBlueIcon(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[4]/div/div[2]/div[1]/div/div[1]/div/div[3]/span[2]');}
    get alertAmberIcon(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[4]/div/div[2]/div[1]/div/div[1]/div/div[3]/span[3]');}
    get alertRedIcon(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[4]/div/div[2]/div[1]/div/div[1]/div/div[3]/span[4]');}
    get closeSubscriber(){return browser.$('[aria-label="Close"]');}
    get subscriberTableData() {return browser.$('.subscriber-main-table').$('.bottomRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('.MuiTableCell-root');}
    get subscriberAlertStatus(){return this.subscriberTableData[3].$$('svg');}
    get getAllAppliedAlerts(){return browser.$('.MuiAlert-message').$$('h6');}
        svgStatus(parent){return parent.$('svg');}
    
    //// TA-328
    get expandCategory(){return browser.$('[name="association_type"]');}
    get selectService(){return browser.$('li=Service');}
    get expandService(){return browser.$('[name="association_id"]');}
    get selectServiceType(){return browser.$('//*[@id="menu-association_id"]/div[3]/ul/li[2]');}
    get btnAddPackage(){return browser.$('[data-testid="AddCircleOutlineIcon"]');}
    get allPackages(){return browser.$$('.active-color');}
    get openFirstPackage(){return this.allPackages[0].$('span');}
    get packageDockText(){return browser.$('p=Active Packages & Services');}
    get expandCollapsePackage(){return browser.$('li*=Wireless').$$('svg')[0];}
    get selectPackageService(){return browser.$('li*=Wireless').$('[data-testid="CheckCircleIcon"]');}
    get closePackageDock(){return browser.$('[aria-label="Back"]');}
    get serviceCascade(){return this.allPackages[0].$('[data-testid="CheckCircleOutlineIcon"]');}
    get allAlertsParent(){return browser.$$('[role="alert"]');}
    get getConfMsg(){return browser.$('.MuiAlert-message');}
         getAllAppliedServiceAlerts(parent){return parent.$('h6');}
         closeServiceAlertByParent(parent){return parent.$('[title="Close"]');}
        getTextByHeader(textToVerify){return browser.$('h6='+textToVerify);}

    open(path){	super.open(path);}

}
module.exports = new alertsValidations();
