const utils = require('../support/utils');
"use strict";
var Page = require('./page')
class subscriberMissingCharges extends Page {
    get btnInvoiceDate() {return browser.$('.MuiDrawer-paperAnchorRight').$('#date');}
    get calendarParent() {return browser.$('.MuiCalendarPicker-root');}
    get MonthAndYearText(){return this.calendarParent.$('.PrivatePickersFadeTransitionGroup-root');}
    get btnCalendarArrowLeft(){return this.calendarParent.$('[data-testid="ArrowLeftIcon"]');}
        selectDayFromCalendar(dayNumber){return this.calendarParent.$('.MuiPickersDay-dayWithMargin='+dayNumber);}
    get btnTermStartDate(){return browser.$('//*[@id="lineItemPreviewTable"]/tbody/tr/td[2]/div/div[2]/div/div[2]/div/button');}
    get btnProrateOptions(){return browser.$('button=Prorate Options');}
    get prorateToFUllLink() {return browser.$('.drawer-wrapper-double-footer').$$('a')[0];}
    get allRowsofPackageArea(){return browser.$('//*[@id="lineItemPreviewTable"]').$$('tr');}
        getAllColumnsByparent(parent){return parent.$$('td');}
        getbuttonsByParent(parent){return parent.$$('button');}
    get previewLastDateButton(){var allbuttons = browser.$$("table#lineItemPreviewTable button");
        let dateButtons = [];
        for (let button of allbuttons) {
            const text = button.getText();
            if (text.includes(",")) { // Ensure it's a date format
                console.log("Found button with date:", text);
                dateButtons.push(button);
                //break;
            }
        }
        if (dateButtons.length > 0) {
            const lastDateButton = dateButtons[dateButtons.length - 1];
            console.log("Clicking the last date button:", lastDateButton.getText());
           return lastDateButton;
        } else {
            console.log("No date buttons found.");
        }
    }    
    get termEndDate(){return browser.$('//*[@id="lineItemPreviewTable"]/tbody/tr[1]/td[2]/div/div[2]/div/div[3]/button');}
    get termEndDateForDiff(){return browser.$('//*[@id="lineItemPreviewTable"]/tbody/tr[3]/td[2]').$('button');}
    get fullTermCountElement(){return browser.$('//*[@id="mui-component-select-previewVar.terms"]')}
    get btnCancelInvoice(){return browser.$('button=Cancel Invoice');}
    get searchSubsInput(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/header/div/div[2]/div[2]/div/div[1]/div/div/div[1]/div/div/div').$('input');}
    get dilaogkBillingSettings() {return browser.$('.MuiDialog-paper');}
    get btnReverseChanges() {return this.dilaogkBillingSettings.$$('.MuiRadio-root')[1];}
    get btnOkBillingSettings() {return this.dilaogkBillingSettings.$('.MuiButton-contained=OK');}
    get btnDrawerClose() {return browser.$('.settings-drawer-wrapper').$$('[aria-label="Close"]');}


    get btnBillingOption() {return browser.$('button=Billing Options');}
    get verifyBillingOption() {return browser.$$('.MuiGrid-grid-xl-3');}
    get verifyLeftSide() {return this.verifyBillingOption[0].$('h6');}
    get inputInvoiceDay() {return this.verifyBillingOption[0].$('[name="customer.customer_billing_settings.invoice_day"]');}
    get inputInvoiceDueDay() {return this.verifyBillingOption[0].$('[name="customer.customer_billing_settings.due_day"]');}
    get inputInvoiceTermStartDay() {return this.verifyBillingOption[0].$('[name="customer.customer_billing_settings.term_start_day"]');}
    get inputInvoicePastDueAfter() {return this.verifyBillingOption[0].$('[name="customer.customer_billing_settings.past_due_after_days"]');}
    get verifyRightSide() {return this.verifyBillingOption[1].$('h6');}
    get selectBillingOptionsTaxId() {return browser.$('//*[@id="mui-component-select-customer.customer_details.tax_id"]');}
    get listTaxId() {return browser.$('//*[@id="menu-customer.customer_details.tax_id"]/div[3]/ul');}
    get optionsTaxId() {return this.listTaxId.$$('li');}
    get selectBillingOptionsCycle() {return browser.$('//*[@id="SummaryTabs"]/div[2]/div/div/div[2]/div[3]/div[3]/span/div/div');}
    get checkboxexInBillingOptions() {return this.verifyBillingOption[1].$$('.MuiCheckbox-root')}
    get btnTopRightMenu() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/header/div/div[3]/button[3]');}
    get btnSettingsBilling(){return browser.$('.MuiToolbar-root').$('//*[@id="settings-tab-1"]');}
    get btnInvoiceSetting() {return browser.$('[value="Invoicing"]');}
    get btnAutoActionSetting() {return browser.$('[value="Auto Actions"]');}
    get fromInvoiceSetting() {return browser.$('.settings-drawer-wrapper');}
    //get checkboxInvoiceDefaults() {return browser.$('.MuiCheckbox-root');}
    get checkboxInvoiceDefaults() {return browser.$('[name=flag_invoice_day_customizable]');}
    get btnFlexible(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[2]/div[2]/div[2]/div[1]/div/div[3]/label[2]/span');}
    get btnFixed(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[2]/div[2]/div[2]/div[1]/div/div[3]/label[1]/span');}
        inputByParent(parent){return parent.$('input');}
    get getPastDuesDays() {return browser.$$('[name="past_due_after_days"]')[0];}
    get confirmDialogParent() {return browser.$('[role="dialog"]');}
    get okBtnOfDialog() {return this.confirmDialogParent.$('button=Ok');}
    get cancelBtnOfDialog() {return this.confirmDialogParent.$('button=Cancel');}
    get btnSaveInvoiceSetting() {return this.fromInvoiceSetting.$('.drawer-footer').$('button=Save');}
    get popUpOkButton() {return browser.$('button=OK');}
    get popupSaveSetting() {return browser.$('.MuiDialog-paperWidthSm');}
        checkBtnYes(){return browser.$('.MuiDialog-paperWidthSm').isExisting();}
    get btnYes() {return this.popupSaveSetting.$('button=Yes, keep them on custom billing.');}
    get btnNo() {return this.popupSaveSetting.$('button=No, set all of them to use default fixed billing settings.');}
    get btnCloseInvoiceSetting() {return this.fromInvoiceSetting.$('[aria-label="Close"]');}
    get inputInvoiceDayInInvoiceSetting() {return this.fromInvoiceSetting.$('#mui-component-select-invoice_day');}
    get inputTermStartDayInInvoiceSetting() {return this.fromInvoiceSetting.$('#mui-component-select-term_start_day');}
    get billingDaysAreChangeable () { return browser.$('.days');}
    get calenderValues() {return this.billingDaysAreChangeable.$$('li');}
    get btnSave() {return browser.$('//*[@id="SummaryTabs"]/div[2]/div/div/div[4]/span/button');}
    get alertBox() {return browser.$('/html/body/div[2]/div[3]/div');}
    get optionsInalertBox() {return this.alertBox.$('.MuiGrid-grid-xs-11').$$('label');}
    //   #mui-240 (inputInvoiceDay)

    get alertBox() {return browser.$('/html/body/div[2]/div[3]/div');}
    get radioBtnOnAlertUpdateTax() {return this.alertBox.$$('[name="customer.customer_details.tax_change_option"]');}
    get radioBtnOnAlertBillingSettingChange() {return this.alertBox.$$('[name="customer.customer_billing_settings.change_option"]');}
    get btnOkOnAlertBox() {return this.alertBox.$('button=OK');}
    get btnCancelOnAlertBox() {return this.alertBox.$('button=Cancel');}
    get clickToOpenAnotherSubscriber(){return browser.$('//*[@id="subscriberPage"]/div/div[1]/div[1]/div/div/div/div[2]/div/div/div[10]');}
    get clickToOpenSubscriber(){return browser.$('//*[@id="subscriberPage"]/div/div[1]/div[1]/div/div/div/div[2]/div/div/div[3]');}
    get alertBoxBillingAndTaxChange () {return browser.$('.css-1h7anqn');}
    get radioButtonsOnAlertBox () {return this.alertBoxBillingAndTaxChange.$$('.MuiFormControlLabel-labelPlacementEnd');}
    get selectLastDayOnCalendar() {return browser.$('.days > li:nth-last-child(2)');}
    get selectSecondLastDayOnCalendar() {return browser.$('.days > li:nth-last-child(3)');}
    get billingOptionTermStartDate() {return browser.$('[name="customer.customer_billing_settings.term_start_day"]');}
    get getTooltipText(){return browser.$('.MuiTooltip-popper');}
    get btnTransaction(){return browser.$('button=Transactions');}
    get getAllTransactionsData(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[4]/div').$('.bottomRightGrid').$$('.MuiTableCell-root');}

    get taxExempt() {return browser.$('//*[@id="SummaryTabs"]/div[2]/div/div/div[2]/div[3]/div[2]/div/span');}
    svgStatus(parent){return parent.$('svg');}
    get alertSuccess() {return browser.$('.MuiAlert-filledSuccess').$('.MuiAlert-message');}
    get btnTaxes() {return browser.$('.settings-drawer-wrapper').$('button=Taxes');}
    get emptyTaxes(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[2]/div[2]/div[2]/div/div[6]/div/div[1]/div/div/p');}
    get taxesFromInvoiceSetting() {return browser.$('.settings-drawer-wrapper').$('.bottomRightGrid').$$('.MuiTableCell-root');}
    get listItems() {return browser.$$('.MuiMenu-list')[1].$$('li');}
    get toolTip() {return browser.$('.MuiTooltip-tooltipPlacementTop');}
    get linkPaperInvoice() {return this.verifyBillingOption[1].$('p*=Paper Invoice ');}
    get popupPaperInvoice() {return browser.$$('.MuiPaper-elevation8');}
    get dropDownFee() {return this.popupPaperInvoice[1].$('[name="customer.paper_invoice.option"]');}
    get divInputFieldInPopupPaperInvoice() {return this.popupPaperInvoice[1].$$('.MuiInput-root');}
    get inputFieldInPopupPaperInvoiceParent() {return browser.$('/html/body/div[2]/div[3]/div/div[1]/div[2]/div/div');}
    get inputFieldInPopupPaperInvoice() {return this.inputFieldInPopupPaperInvoiceParent.$('[name="customer.paper_invoice.amount"]');}
    get paperInvoiceCheckStatus(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div/div/div[2]/div[3]/div[4]/div[1]/span').$('svg');}
    get paperInvoiceCheck(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div/div/div[2]/div[3]/div[4]/div[1]/span');}
    get btnDialogYes(){return browser.$('button=Yes');}
    get tickOptionInPopupPaperInvoice() {return this.popupPaperInvoice[1].$('[data-testid="CheckIcon"]');}
    get linkLateFee() {return this.verifyBillingOption[1].$('p*=Late Fee');}
    get popupLateFeeAndGracePeriod() {return browser.$$('.MuiPaper-rounded');}
    get dropDownLateFee() {return browser.$('[name="customer.late_fee.option"]');}
    get dropDownFlatRateAndPercentage() {return browser.$('[name="customer.late_fee.amount_option"]');}
    get inputFieldInLateFeeParent() {return browser.$('/html/body/div[2]/div[3]/div/div[1]/div[4]/div/div');}
    get inputFieldInLateFee() {return this.inputFieldInLateFeeParent.$('[name="customer.late_fee.amount"]');}
    // get tickOptionInPopupLateFeeAndGracePeriod() {return this.popupLateFeeAndGracePeriod[7].$('[data-testid="CheckIcon"]');}
    get tickOptionInPopupLateFeeAndGracePeriod() {return browser.$('[data-testid="CheckIcon"]');}
    get linkGracePeriod() {return this.verifyBillingOption[1].$('p*=Grace Period & Amount ');}
    get dropDownFeeGracePeriod() {return browser.$('[name="customer.grace_period.option"]');}
    get dropDownDaysGracePeriod() {return browser.$('[name="customer.grace_period.days"]');}
    get inputFieldInGracePeriodParent() {return browser.$('/html/body/div[2]/div[3]/div/div[1]/div[3]/div/div');}
    get inputFieldInGracePeriod() {return this.inputFieldInGracePeriodParent.$('[name="customer.grace_period.amount"]');}
    get btnTaxFromInvoiceItem(){return browser.$('#tax').$('button');}
    get expandTaxSettingsFromInvoiceItems(){return browser.$('/html/body/div[2]/div[3]/div/div[2]/div/div/div');}
    get checkGSTTaxRate(){return browser.$('/html/body/div[2]/div[3]/div/div[4]');}
        getListItem(itemName){return browser.$('li='+itemName);}
    get getSelectedOption(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[2]/div[2]/div[2]/div/div[3]');}
        selectProrateOption(optionname){return browser.$('label*='+optionname).$('span');}
    get btnApplyToThisInvoice(){return browser.$('/html/body/div[3]/div[3]/div/div[1]/div/div[2]/label/span');}
    get btnOKAfterApplyingTax(){return browser.$('/html/body/div[3]/div[3]/div/div[2]/span/button');}
    get btnSaveFromTaxSetting(){return browser.$('/html/body/div[2]/div[3]/div/div[11]/span/button');}
    get btnApplyManuallyAfterSave(){return browser.$('//*[@id="alert-dialog-description"]/div[2]/div[2]/div/label[2]/span[1]');}
    get btnOkFromTaxChangeItems(){return browser.$('/html/body/div[2]/div[3]/div/div[2]/button[1]');}

    get btnAddNewTax(){return browser.$('.settings-drawer-wrapper').$('button=Add New');}
    get inputNewTaxName(){return browser.$('[name="tax_name"]');}
    get inputNewTaxDescription(){return browser.$('[name="description"]');}
    get inputNewTaxRate(){return browser.$('[name="criteriaList.0.percentage"]');}
    get selectStateCity(){return browser.$('//*[@id="mui-component-select-criteriaList.0.type"]');}
    get expandValue(){return browser.$('//*[@id="react-select-single"]/div');}
    get btnOkAddTax(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[2]/div[3]/div/div[2]/div[2]/div/div[2]/span/button');}
    get btnCloseAddTaxPanel(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[2]/div[3]/div/div[1]/div/div[2]/button');}
    get closeAutoActions(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[2]/div/div/div[2]/button[2]');}
    get btnAllowGraceCustom() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[2]/form/div[1]/div[2]/div/div/div/div/div[4]').$('svg');}
    get inputAllowGraceCustom() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[2]/form/div[1]/div[2]/div/div/div/div/div[4]').$('input');}
}
module.exports = new subscriberMissingCharges();
