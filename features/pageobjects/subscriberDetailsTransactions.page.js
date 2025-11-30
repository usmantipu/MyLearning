const utils = require('../support/utils');
"use strict";
var Page = require('./page')
class subscriberDetailsTransactions extends Page {

    get btnTransactions(){return browser.$('button=Transactions');}
    get transactionsHeading(){return browser.$('h6=Transactions');}
    get btnReceivePayment(){return browser.$('button=Receive Payment');}
    get btnViewStatement(){return browser.$('button=View Statement');}
    get transactionTableHeader(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[4]').$('.topRightGrid').$$('.MuiTableCell-root');}
    get transactionTableFields(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[4]').$('.bottomRightGrid').$$('.MuiTableCell-root');}
    get selectedInvoiceData(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[2]/table/tbody/tr').$$('td');;}
    get invoiceTotalAmount(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[5]/div/div[2]/div[1]/table/tbody/tr/td[4]/h6');}
    get invoiceTotalBalance(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[5]/div/div[2]/div[2]/div/div[4]/h6');}
    get btnAddToQuote(){return browser.$('button=Add to Quote');}
    get quoteTotalAmount(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[5]/div/div[2]/div/table/tbody/tr/td[4]/h6');}
	get quoteHeader(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[2]/table/thead/tr/th[4]/h6');}
    get paymentAmountFromDialog(){return browser.$('.MuiDialog-container').$('[name="payment_amount"]');}
    get paymentPopDT(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div[3]/div[1]/div/div[1]/div/div/div/div/div[2]/div/div').$$('.MuiTableCell-root');}
    get popDialogHeader(){return browser.$('//*[@id="responsive-dialog-title"]/div/div[1]/h6');}
    get syncWithThisInvoice(){return browser.$('button=Sync term with This Invoice');}
    get btnSendEmailFromPDF(){return browser.$('/html/body/div[2]/div[3]/div/div[2]/button[2]');}
    get statementRangeHeader(){return browser.$('/html/body/div[2]/div[3]/div/div[1]/div[2]/div[2]/div/div[2]/h6');}
    get subDetailsEmail(){return browser.$('[name="email"]');}
    get emailDrawer(){return browser.$('.email-wrapper');}
    get fromEmail(){return browser.$('[name="from_email"]');}
    get toEmail(){return browser.$('.rbt-token-removeable')}
    get statementFromLastMonth(){return browser.$('span=Statement (last 6 months)');}
    get checkDialogOpened(){return browser.$('#responsive-dialog-title');}
    get closeDetailsDialog(){return browser.$('//*[@id="responsive-dialog-title"]/div/div[2]/button');}
    get getAllTransactions(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[4]').$('.p-3').$('.bottomRightGrid').$$('.MuiTableCell-root');}
    get paymentAmount(){return browser.$('[name="payment_amount"]');}











    open() {
        super.open('login');
		//utils.clearLocalStorage();
    }
    
    submit() {
        this.form.submitForm();
    }
    
	
}
module.exports = new subscriberDetailsTransactions();