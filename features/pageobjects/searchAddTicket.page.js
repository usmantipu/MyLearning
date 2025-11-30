"use strict";
var Page = require('./page')

class searchAddTicketPage extends Page{

    
     get subscriberNameInput(){return browser.$('.MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedEnd MuiAutocomplete-input MuiAutocomplete-inputFocused css-xdo4n6');}
     get allReordsData(){return browser.$('.subscriber-main-table').$('.bottomRightGrid').$$('p');}
     get searchInputField(){return browser.$('[name="customerId"]').$('input');}
     get autocompleteDialougeParent() {return browser.$('.MuiAutocomplete-popper');}
     get autocompleteDialouge() {return this.autocompleteDialougeParent.$$('li');}
     get openSubscriber(){return browser.$('//*[@id="subscriberPage"]/div/div[1]/div[1]/div/div/div/div[2]/div/div/div[3]');}
     get openSubDetailsBtn(){return browser.$('[aria-label="Edit"]');}
     get subLastName(){return browser.$('[name="customer.last_name"]');}
     get subEmailAddress(){return browser.$('[name="customer.emails.0.email_address"]');}
     get subAddress(){return browser.$('.drawer-wrapper').$('//*[@id="react-select-2-input"]');}
     get subCity(){return browser.$('[name="customer.customer_details.main_city"]').$('input');}
     get subState(){return browser.$('//*[@id="react-select-single"]/div/div[1]/div[1]');}
     get subZip(){return browser.$('[name="customer.customer_details.main_zip"]');}
     get btnSaveEdits(){return browser.$('.drawer-footer').$('button=Save');}




    




    open(path){	super.open(path);	}
}
module.exports = new searchAddTicketPage();