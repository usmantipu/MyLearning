// customFields.page.js
const utils = require('../support/utils');
"use strict";
var Page = require('./page')
class subscriberDetailsCustomeFields extends Page {
	
	/**top menu */
	get btnAppIcon(){return browser.$('[data-testid="AppsIcon"]');}
	get btnCustomfieldsFromMenu(){return browser.$('li=Custom Fields');}
    get getallEnabledCustomfields(){return browser.$('.MuiAccordion-region').$$('.MuiLink-root');}
    get btnSaveSettings(){return browser.$('.settings-drawer-wrapper').$('button=Save');}

    //Controls
    get btnCloseTopMenu(){return browser.$('.settings-drawer-wrapper').$('[data-testid="CloseIcon"]');}
    get btnCustomFieldsTab(){return browser.$('//*[@id="SummaryTabs"]/div[1]/div/div/button[4]');}
    get getAllCustomFieldsFromSubscribers(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div/div/div[1]/form/div[1]/div').$$('input');}
    get getAllCustomFieldsLabelsFromSubscribers(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div/div/div[1]/form/div[1]/div').$$('label');}
	get customTextFields(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div/div/div[1]/form/div[1]/div').$$('.MuiInputBase-input');}
    get cancelBtnCustomFields(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div/div/div[2]/button');}
    get saveBtnCustomFields(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div/div/div[2]/span/button');}
    get btnAdditionalInfoTab(){return browser.$('//*[@id="SummaryTabs"]/div[1]/div/div/button[3]');}

    get secondCustomFiledFromSettings(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[2]/div[2]/div[1]/div[2]/div/div/div/div/div/div[2]/div/div[2]/div');}
        selectCustomFiledType(fieldType){return browser.$('#render-props-menu').$('span='+fieldType);}
        getInputValue(fieldTypeParent){return fieldTypeParent.$('input');}
    get btnConfirmationYes(){return browser.$('/html/body/div[3]/div[3]/div/div[2]/button[1]');}
    get confirmationMsg(){return browser.$('.MuiAlert-message');}
        isMsgExist (msg){return browser.$('.MuiAlert-message='+msg);}
    get emailValidationErrorMsg(){return browser.$('span=Please enter a valid email address');}
    get thirdCustomFieldFromSettings(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[2]/div[2]/div[1]/div[2]/div/div/div/div/div/div[3]/div/div[2]/div');}
    get ipAddressErrorMsg(){return browser.$('span=Please enter a valid IP address');}
    get macAddressErrorMsg(){return browser.$('span=Please enter a valid MAC address');}
    get fourthCustomFieldFromSettings(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[2]/div[2]/div[1]/div[2]/div/div/div/div/div/div[4]/div/div[2]/div');}
    open() {
        super.open('login');
		utils.clearLocalStorage();
    }
    
    submit() {
        this.form.submitForm();
    }
    
}
module.exports = new subscriberDetailsCustomeFields();