const utils = require('../support/utils');
"use strict";
var Page = require('./page')

class InvoicingPackageItemsPage extends Page {
    
      addedPackageName(packagename) {return browser.$('h6='+packagename);}
      addedPackageItemName(Itemname) {return browser.$('h6='+Itemname);}
      isButtonExist(buttonName) {return browser.$('button*='+buttonName);}
      confirmationMsg(msg){return browser.$('.MuiAlert-message='+msg);}
      SavedPackageName(packagename) {return browser.$('button='+packagename);}
    get btnBillingOptions() {return browser.$('button=Billing Options');}
    get billingCycleName() {return browser.$('[name="customer.billing_cycle.name"]');}
    get billingCycleDd() {return browser.$('//*[@id="SummaryTabs"]/div[2]/div/div/div[2]/div[3]/div[3]/span/div/div');}
    get selectMonthly() {return browser.$('li=Monthly');}
    get saveBillingOptions() {return browser.$('//*[@id="SummaryTabs"]/div[2]/div/div/div[4]/span/button');}
    get btnSecondOptionDialog() {return browser.$('/html/body/div[2]/div[3]/div/div[1]/div[4]/div[2]/div/label[2]/span[1]');}
    get btnOKBillingDialog() {return browser.$('/html/body/div[2]/div[3]/div/div[2]/button[1]');}
    get btnCancelInvoice() {return browser.$('button=Cancel Invoice');}
    get packageQuantity() {return browser.$('[name="previewLineItem.0.item_quantity"]');}
    get btnTaxDD(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[4]/div/table/tbody/tr[1]/td[6]/button');}
    get firstItemQuantity() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[4]/div/table/tbody/tr[2]/td[4]/h6');}
    get secondItemQuantity() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[4]/div/table/tbody/tr[4]/td[4]/h6');}
    get parentPackageRate(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[4]/div/table/tbody/tr[1]/td[5]');}
    get firstItemRate(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[4]/div/table/tbody/tr[2]/td[5]');}
    get PackageAmountRate(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[4]/div/table/tbody/tr[1]/td[7]');}
    get ItemAmountRate(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[4]/div/table/tbody/tr[2]/td[7]');}
    get endOfPackageRecurring(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[4]/div/table/tbody/tr[1]/td[2]/div/div[2]/div/div[3]/button');}
    get dateRangeOfItemRecurring(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[4]/div/table/tbody/tr[2]/td[2]/div/div/div/div[2]');}
    get TaxRate(){return browser.$('/html/body/div[2]/div[3]/div/div[4]/h6');}
    get taxableAmount(){return browser.$('/html/body/div[2]/div[3]/div/div[6]/h6');}
    get taxCharged(){return browser.$('/html/body/div[2]/div[3]/div/div[10]/h6');}
    get btnSaveInvoice(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[4]/div/div/span[1]/span/button');}
    get expandOtherItemMenu(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[4]/div/table/tbody/tr[2]/td[8]/button');}
    get btnRemove(){return browser.$('li=Remove');}
    get isTextExist(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[4]/div/table/tbody/tr[3]');}
    get btnInvoiceOpen(){return browser.$('button=Invoice - Open');}
    get btnDeleteInvoice(){return browser.$('button=Delete Invoice');}
    get btnDialogOk(){return browser.$('/html/body/div[2]/div[3]/div/div[2]/span/button');}
        


}
module.exports = new InvoicingPackageItemsPage();