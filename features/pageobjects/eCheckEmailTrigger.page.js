const utils = require('../support/utils');
"use strict";

var Page = require('./page')
class eCheckEmailTrigger extends Page {
    get dashboardTitle(){return browser.$('h4*=Welcome');}
    get btnTopMenu() {return browser.$('[data-testid="AppsIcon"]');}
    get btnCRM(){return browser.$('button=CRM');}
    get spanMesageTemplates(){return browser.$('span=Message Templates');}
    get btnTemplates(){return browser.$('button=Templates');}
    get btnScheduledEmails(){return browser.$('button=Scheduled Emails');}
    get btnAdd(){return browser.$('button=Add');}
    get spanNewTemplate(){return browser.$('span=New Template');}
    get inputTemplateName() {return browser.$('[name="template_name"]');}
    get btnAddDialogue() {return browser.$('.MuiDialogActions-spacing').$('button=Add');}
    get btnCancelDialogue() {return browser.$('.MuiDialogActions-spacing').$('button=Cancel');}
    get alertMessage() {return browser.$('.MuiAlert-message');}
        templateName(name){return browser.$('p=' + name).click();}
        templateExists(name){return browser.$('p=' + name).isExisting();}
    get pActiveTriggers(){return browser.$('p=Active Triggers');}
    get pInActiveTriggers(){return browser.$('p=Inactive Triggers');}
    get pOthers(){return browser.$('p=Others');}
    get pOthersInInactive(){return browser.$$('p=Others')[1];}
    get spanTriggerIsActive(){return browser.$('span=Trigger is active');}
    get openFilterList() {return browser.$('[aria-label="All subscribers matching the filter will receive this message"]');}
        filterName(filter){return browser.$('li=' + filter).click();}
        filterExists(name){return browser.$('.drawer-wrapper').$('p=' + name).isExisting();}
    get messageEditor() {return browser.$('.ql-editor');}
    get btnSave(){return browser.$('button=Save');}
    get btnOverwriteFilter(){return browser.$('button=Overwrite the filter');}
    get pGeneralTemplates(){return browser.$('p=General Templates');}
    get inputFieldSubject(){return browser.$('[name="subject"]');}
    get inputFieldFrom(){return browser.$('[name="from_email"]');}
    get spanUser(){return browser.$('span=jcabangon@visp.net');}
    get inputSearchSubscriber(){return browser.$('[placeholder="Search..."]');}
        openSubscriber(subscriber){return browser.$('span=' + subscriber).click();}
    get btnLogs(){return browser.$('button=Logs');}
    get spanMESSAGE(){return browser.$('span=MESSAGE');}
    get logRows(){return browser.$$('.ReactVirtualized__Grid__innerScrollContainer');}
    get colData(){return browser.$(this.logRows[this.logRows.length - 1]).$$('p')[2];}

}
module.exports = new eCheckEmailTrigger();