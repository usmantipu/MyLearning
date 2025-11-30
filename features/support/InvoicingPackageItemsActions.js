var LoginPage = require('../pageobjects/login.page');
var invoicepackagepage = require('../pageobjects/InvoicingPackageItems.page');
var expect = require('chai').expect;

class InvoicingPackageItemsActions {
    constructor(){
        this.pkgName;
        this.alertMsg;
        this.dangerAlertMsg;
    }
    assureBillingCycle()
    {
        invoicepackagepage.btnBillingOptions.waitForDisplayed();
        invoicepackagepage.btnBillingOptions.waitForClickable();
        invoicepackagepage.btnBillingOptions.click();
        var getCycleValue = invoicepackagepage.billingCycleName.getText();
        if(getCycleValue!='Monthly')
        {
            invoicepackagepage.billingCycleDd.click();
            invoicepackagepage.selectMonthly.waitForDisplayed();
            invoicepackagepage.selectMonthly.waitForClickable();
            invoicepackagepage.selectMonthly.click();
            invoicepackagepage.saveBillingOptions.waitForDisplayed();
            invoicepackagepage.saveBillingOptions.waitForClickable();
            invoicepackagepage.saveBillingOptions.click();
            invoicepackagepage.btnSecondOptionDialog.waitForDisplayed();
            invoicepackagepage.btnSecondOptionDialog.waitForClickable();
            invoicepackagepage.btnSecondOptionDialog.click();
            invoicepackagepage.btnOKBillingDialog.waitForClickable();
            invoicepackagepage.btnOKBillingDialog.click();
            invoicepackagepage.confirmationMsg('Saved Successfully').waitForDisplayed();
            browser.pause(3000);
        }
        
    }
    openTaxDropDown()
    {
        invoicepackagepage.btnCancelInvoice.waitForDisplayed();
        invoicepackagepage.btnCancelInvoice.waitForClickable();
        browser.pause(5000);
        invoicepackagepage.btnTaxDD.waitForDisplayed();
        invoicepackagepage.btnTaxDD.click();
    }
    saveTheInvoice()
    {
        browser.pause(5000);
        invoicepackagepage.btnCancelInvoice.waitForDisplayed();
        invoicepackagepage.btnCancelInvoice.waitForClickable();
        invoicepackagepage.btnCancelInvoice.click();
        invoicepackagepage.btnSaveInvoice.waitForDisplayed();
        invoicepackagepage.btnSaveInvoice.waitForClickable();
        invoicepackagepage.btnSaveInvoice.click();
    }
    clickInvoiceCancel()
    {
        browser.pause(5000);
        invoicepackagepage.btnCancelInvoice.waitForDisplayed();
        invoicepackagepage.btnCancelInvoice.waitForClickable();
        invoicepackagepage.btnCancelInvoice.click();
    }

    verifyOtherItemsAddedInPreview(pacakge) {
        var dataToPass = pacakge.raw();
        invoicepackagepage.btnCancelInvoice.waitForDisplayed();
        invoicepackagepage.btnCancelInvoice.waitForClickable();
        browser.pause(5000);
        expect(invoicepackagepage.addedPackageName(dataToPass[0][0]).isExisting()).to.be.true;
        expect(invoicepackagepage.addedPackageItemName('CUSTOM').isExisting()).to.be.true;
        //expect(invoicepackagepage.addedPackageItemName('CUSTOM').isExisting()).to.be.true;
    }
    verifyAddToInvoiceButtonGetEnabled(buttonName)
    {
        buttonName = buttonName.replace(/['"]+/g, '');
        invoicepackagepage.isButtonExist(buttonName).waitForDisplayed();
        expect(invoicepackagepage.isButtonExist(buttonName).isClickable()).to.be.true;
    }
    verifyItemsInDescription()
    {
        invoicepackagepage.btnCancelInvoice.waitForDisplayed();
        invoicepackagepage.btnCancelInvoice.waitForClickable();
        browser.pause(5000);
        expect(invoicepackagepage.isButtonExist('Other item 1').isExisting()).to.be.true;
    }
    verifyItemsQuantity()
    {
        invoicepackagepage.btnCancelInvoice.waitForDisplayed();
        invoicepackagepage.btnCancelInvoice.waitForClickable();
        browser.pause(5000);
        var getpackageQty = invoicepackagepage.packageQuantity.getValue();
        expect(invoicepackagepage.firstItemQuantity.getText()).to.be.eql(getpackageQty);
        //expect(invoicepackagepage.secondItemQuantity.getText()).to.be.eql(getpackageQty);
    }
    verifyItemsRate()
    {
        invoicepackagepage.btnCancelInvoice.waitForDisplayed();
        invoicepackagepage.btnCancelInvoice.waitForClickable();
        browser.pause(5000);
        var getpackageRate = invoicepackagepage.parentPackageRate.getText();
        var itemrate = invoicepackagepage.firstItemRate.getText();
        //console.log('package rate is '+getpackageRate);
        //console.log('item rate is '+itemrate);
        expect(Math.trunc(getpackageRate/2)).to.be.eql(Math.trunc(itemrate));
    }
    verifyTaxRate()
    {
        var getTAxRate = invoicepackagepage.TaxRate.getText();
        var getTaxableAmount = invoicepackagepage.taxableAmount.getText();
        getTaxableAmount = getTaxableAmount.replace(/\D/g,'');
        var taxcrhagerate =0 ;
        if(getTAxRate==='50.00%')
        {
            taxcrhagerate = getTaxableAmount/2;
        }
        var actualChargeRate = invoicepackagepage.taxCharged.getText();
        actualChargeRate = Number(actualChargeRate.replace(/\D/g,''));
        expect(taxcrhagerate).to.be.eql(actualChargeRate);
    }
    verifyAmount()
    {
        invoicepackagepage.btnCancelInvoice.waitForDisplayed();
        invoicepackagepage.btnCancelInvoice.waitForClickable();
        browser.pause(5000);
        var getpackageAmount = invoicepackagepage.PackageAmountRate.getText();
        var itemAmount = invoicepackagepage.ItemAmountRate.getText();
        //console.log('package rate is '+getpackageAmount);
        //console.log('item rate is '+itemAmount);
        expect(Math.trunc(getpackageAmount/2)).to.be.eql(Math.trunc(itemAmount));
    }
    verifyRecurringSettings()
    {
        invoicepackagepage.btnCancelInvoice.waitForDisplayed();
        invoicepackagepage.btnCancelInvoice.waitForClickable();
        browser.pause(5000);
        var packageRecurring = invoicepackagepage.endOfPackageRecurring.getText();
        var itemRecurring = invoicepackagepage.dateRangeOfItemRecurring.getText();
        expect(itemRecurring.includes(packageRecurring)).to.be.true;
    }
    verifySaveAndConfigureInvoiceButton(buttonName)
    {
        browser.pause(5000);
        buttonName = buttonName.replace(/['"]+/g, '');
        invoicepackagepage.isButtonExist(buttonName).waitForDisplayed();
        expect(invoicepackagepage.isButtonExist(buttonName).isExisting()).to.be.true;
        expect(invoicepackagepage.isButtonExist(buttonName).isClickable()).to.be.true;
    }
    verifySaveInvoiceButton(buttonName)
    {
        browser.pause(5000);
        buttonName = buttonName.replace(/['"]+/g, '');
        invoicepackagepage.btnSaveInvoice.waitForDisplayed();
        expect(invoicepackagepage.btnSaveInvoice.isExisting()).to.be.true;
        expect(invoicepackagepage.btnSaveInvoice.isClickable()).to.be.true;
    }
    removeItemFromPreview()
    {
        browser.pause(5000);
        invoicepackagepage.expandOtherItemMenu.waitForDisplayed();
        invoicepackagepage.expandOtherItemMenu.waitForClickable();
        invoicepackagepage.expandOtherItemMenu.click();
        invoicepackagepage.btnRemove.waitForDisplayed();
        invoicepackagepage.btnRemove.waitForClickable();
        invoicepackagepage.btnRemove.click();
        expect(invoicepackagepage.addedPackageItemName('CUSTOM').isExisting()).to.be.false;
    }
    verifyItemPackageRate(text)
    {
        browser.pause(5000);
        text = text.replace(/[^a-zA-Z ]/g, '');
        //console.log('parametrized text is '+text);
        let extractedtext = invoicepackagepage.isTextExist.getText();
        extractedtext = extractedtext.replace(/[^a-zA-Z ]/g, '');
        //console.log('extracted text is '+extractedtext);
        expect(extractedtext).to.be.eql(text);
    }
    verifyItemsSaved(pacakge)
    {
        browser.pause(5000);
        var dataToPass = pacakge.raw();
        invoicepackagepage.btnInvoiceOpen.waitForDisplayed();
        invoicepackagepage.btnInvoiceOpen.waitForClickable();
        invoicepackagepage.confirmationMsg('Customer item added successfully.').waitForDisplayed();
        browser.pause(3000);
        expect(invoicepackagepage.SavedPackageName(dataToPass[0][0]).isExisting()).to.be.true;
        expect(invoicepackagepage.addedPackageItemName('CUSTOM').isExisting()).to.be.true;
        console.log('going to delete the newly added invoice');
        invoicepackagepage.btnDeleteInvoice.waitForDisplayed();
        invoicepackagepage.btnDeleteInvoice.waitForClickable();
        invoicepackagepage.btnDeleteInvoice.click();
        invoicepackagepage.btnDialogOk.waitForDisplayed();
        invoicepackagepage.btnDialogOk.waitForClickable();
        invoicepackagepage.btnDialogOk.click();
        invoicepackagepage.confirmationMsg('Invoice deleted successfully.').waitForDisplayed();
        browser.pause(2000);
    }
    verifyAllItemsCleared(pacakge)
    {
        browser.pause(5000);
        var dataToPass = pacakge.raw();
        expect(invoicepackagepage.addedPackageName(dataToPass[0][0]).isExisting()).to.be.false;
        expect(invoicepackagepage.addedPackageItemName('CUSTOM').isExisting()).to.be.false;
    }


}
module.exports = new InvoicingPackageItemsActions();