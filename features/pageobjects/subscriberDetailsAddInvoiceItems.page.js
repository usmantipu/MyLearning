const utils = require('../support/utils');
"use strict";
var Page = require('./page')

class subscriberDetailsAddInvoiceItems extends Page
{
    get btnPackagesAndInvoices(){return browser.$('button=Packages & Invoices');}
    get btnOpenMenu(){return browser.$$('[data-testid="MoreVertIcon"]')[1];}
    get h6NewInvoice(){return browser.$('h6=New Invoice');}
    get btnPlusPackage(){return browser.$('button=+ Package');}
    get divWireless(){return browser.$('div=Wireless');}
    get inputQty() {return browser.$('[name="quantity"]');}
    get checkbox() {return browser.$$('.MuiCheckbox-colorPrimary');}
    get iconDownArrow() {return browser.$$('[data-testid="ArrowDropDownIcon"]');}
    get errorMsgQtyRequired(){return browser.$('p=Qty is required');}
    get errorMsgInvalidQuantity(){return browser.$('p=Invalid quantity');}
    get btnAddToInvoice(){return browser.$('button=Add to Invoice');}
    get btnCancel(){return browser.$('button=Cancel');}

}
module.exports = new subscriberDetailsAddInvoiceItems();