const subscriberAddPackageActions = require('../support/subscriberDetailsAddPackageActions');
var subscriberDetailsAddInvoiceItems = require('../pageobjects/subscriberDetailsAddInvoiceItems.page');
var expect = require('chai').expect;

class subscriberDetailsAddInvoiceItemsActions {
    constructor(){
        this.clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
    }

    clickOnNewInvoice(){
        subscriberDetailsAddInvoiceItems.btnPlusPackage.waitForDisplayed();
        subscriberDetailsAddInvoiceItems.btnOpenMenu.click();
        subscriberDetailsAddInvoiceItems.h6NewInvoice.click();
        browser.pause(3000);
    }

    verifyQuantityField(){
        subscriberDetailsAddInvoiceItems.inputQty.waitForDisplayed();
        expect(subscriberDetailsAddInvoiceItems.inputQty.getValue()).eql('1');
        subscriberDetailsAddInvoiceItems.inputQty.click();
        browser.keys(this.clearKeys);
        subscriberDetailsAddInvoiceItems.inputQty.setValue('2');
        expect(subscriberDetailsAddInvoiceItems.inputQty.getValue()).eql('2');
        browser.keys(this.clearKeys);
        subscriberDetailsAddInvoiceItems.inputQty.setValue('1');
        expect(subscriberDetailsAddInvoiceItems.inputQty.getValue()).eql('1');
    }

    verifyMultiplePackageSetting(param){
        subscriberDetailsAddInvoiceItems.checkbox[subscriberDetailsAddInvoiceItems.checkbox.length-1].waitForDisplayed();
        if(param === 'disabled'){
            expect(subscriberDetailsAddInvoiceItems.checkbox[subscriberDetailsAddInvoiceItems.checkbox.length-1].getAttribute('class').includes('Mui-disabled')).to.be.true;
        }
        else{
            expect(subscriberDetailsAddInvoiceItems.checkbox[subscriberDetailsAddInvoiceItems.checkbox.length-1].getAttribute('class').includes('Mui-disabled')).to.be.false;
        }
    }

    editQtyField(value){
        browser.keys(this.clearKeys);
        if(value != '')
        {
            subscriberDetailsAddInvoiceItems.inputQty.setValue(value);
        }
    }

    verifyAddToInvoiceBtnDisabled(){
        subscriberDetailsAddInvoiceItems.btnAddToInvoice.waitForDisplayed();
        expect(subscriberDetailsAddInvoiceItems.btnAddToInvoice.getAttribute('disabled')).eql('true');
    }

    verifyErrorMsg(msg){
        if(msg === 'Qty is required'){
            subscriberDetailsAddInvoiceItems.errorMsgQtyRequired.waitForDisplayed();
            expect(subscriberDetailsAddInvoiceItems.errorMsgQtyRequired.isExisting()).to.be.true;
        }
        else{
            subscriberDetailsAddInvoiceItems.errorMsgInvalidQuantity.waitForDisplayed();
            expect(subscriberDetailsAddInvoiceItems.errorMsgInvalidQuantity.isExisting()).to.be.true;
        }
    }

    verifyEmptyField(){
        subscriberDetailsAddInvoiceItems.inputQty.waitForDisplayed();
        expect(subscriberDetailsAddInvoiceItems.inputQty.getValue()).eql('');
    }

    editQtyFieldAndCheckMultiplePackageSetting(check){
        this.editQtyField('3');
        if(!check){
            subscriberDetailsAddInvoiceItems.checkbox[subscriberDetailsAddInvoiceItems.checkbox.length-1].click();
        }
        subscriberDetailsAddInvoiceItems.btnAddToInvoice.waitForDisplayed();
        subscriberDetailsAddInvoiceItems.btnAddToInvoice.click();
        browser.pause(3000);
    }

    verifyMultiplePackageSettingChecked(check){
        subscriberDetailsAddInvoiceItems.iconDownArrow[subscriberDetailsAddInvoiceItems.iconDownArrow.length-2].click();
        browser.pause(1000);
        if(check){
            expect(subscriberDetailsAddInvoiceItems.checkbox[subscriberDetailsAddInvoiceItems.checkbox.length-1].getAttribute('class').includes('Mui-checked')).to.be.true;
        }
        else
        {
            expect(subscriberDetailsAddInvoiceItems.checkbox[subscriberDetailsAddInvoiceItems.checkbox.length-1].getAttribute('class').includes('Mui-checked')).to.be.false;
        }
    }
}
module.exports = new subscriberDetailsAddInvoiceItemsActions();