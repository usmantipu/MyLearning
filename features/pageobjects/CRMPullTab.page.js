const utils = require('../support/utils');
"use strict";
var Page = require('./page')

class CRMPullTab extends Page
{
    get dashboardTitle(){return browser.$('h4*=Welcome');}
    get crmArea()  { return browser.$('[aria-label="Service Desk"]'); }
    get h4ServiceDesk(){return browser.$('h4=Service Desk');}
    get btnPullTab()  { return browser.$('[data-testid="ChevronLeftIcon"]'); }
    get btnPullTabRight()  { return browser.$('[data-testid="ChevronRightIcon"]'); }
    get btnPlusIcons(){return browser.$$('.fa-circle-plus');}
    get assignee_follower(){return browser.$('.MuiListItemText-primary');}
    get btnSave(){return browser.$('button=Save');}
        h6Assignee_Follower(param) {return browser.$('h6*='+param).isExisting();}
        clickAssignee_Follower(param) {return browser.$('h6*='+param).click();}
    get spanCreatedBy(){return browser.$('span*=Created by:');}
    get spanUpdatedBy(){return browser.$('span*=Last updated by:');}
    get h6Assignees(){return browser.$('h6*=Assignees:');}
    get h6Followers(){return browser.$('h6*=Followers:');}
    get h6Signature(){return browser.$('h6*=Signature:');}
    get btnAddDescription(){return browser.$('button=Click to add description');}
    get inputDescription(){return browser.$$('.MuiInputBase-fullWidth')[2].$('input');}
        pDescription(param) {return browser.$('p='+param).isExisting();}
    get logEntry(){return browser.$('//*[@id="panel1a-content"]/div/div[2]/div/div[1]/div[2]/div/div/div[1]/div[4]/div');}

    // Ticket updated successfully
}
module.exports = new CRMPullTab();