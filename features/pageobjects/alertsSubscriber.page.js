const utils = require('../support/utils');
"use strict";
var Page = require('./page')

class alertsSubscriberPage extends Page {


    get customerIDFirstSubscriber () {return browser.$('//*[@id="subscriberPage"]/div/div[1]/div[1]/div/div/div/div[2]/div/div/div[3]/div/p');}
    get logsTab () {return browser.$('button=Logs');}
    get alertTabInLogs () {return browser.$('.py-2').$('span=ALERT');}
    get allTabInLogs () {return browser.$('.py-2').$('span=All');}
    get addAlertOpenOnMenu () {return browser.$('li=Add Alert');}
    get addAlertCaption () {return browser.$('h6=Add Alert');}
    get editAlertCaption () {return browser.$('h6=Edit Alert');}
    get threeDotMenuOnLogsTab () {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[5]/div/div[1]/div/div[2]/div').$('[data-testid="MoreVertIcon"]');}
    get alertMessageBox () {return browser.$('[name=message]');}
    
    get addButtonOnAlertPopup () {return browser.$('button=Add');}
    get alertConfirmationMsg () {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/button');}
    get alertAddedMsg () {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[2]');}
    // Alert successfully added.
    // MuiAlert-message
    get firstAlertRecord () {return browser.$('.activity-table').$('.bottomRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('.MuiTableCell-root')[0];}
    get saveButtonOnAlert () {return browser.$('//main/div[4]/div/div[4]/div/div[2]/div[2]/span/button');}
    // Alert successfully saved.
    get redErrorOutLineIcon () {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[4]/div/div[2]/div[1]/div/div[1]/div/div[3]/span[4]');}
    // ErrorOutlineOutlinedIcon
    // ErrorIcon
    // get greenCheckCircleIcon () {return browser.$('[data-testid="CheckCircleIcon"]');}
    get greenCheckCircleIcon () {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[4]/div/div[2]/div[1]/div/div[1]/div/div[3]/span[1]');}
    
    // get activeCheckBox () {return browser.$('[name=active]').$('.MuiSvgIcon-root');}
    get activeCheckBox () {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[4]/div/div[2]/div[1]/div/div[3]/label/span[1]');}
    //*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[4]/div/div[2]/div[1]/div/div[4]/label/span[1]/input
    get alertActive(){return browser.$('[label="Active"]');}
    // get activeStatus () {return this.activeCheckBox.$('input');}
    get activeStatus () {return browser.$('[name=active]');}
    
    get userDismissibleCheckBox () {return browser.$('[label="User dismissible"]');}
    get checkboxDismissible () {return browser.$('[label="User dismissible"]').$('.PrivateSwitchBase-input');}

    alertCloseIconFunction(alertText) {var allAlerts = browser.$('.drawer-wrapper-full').$('.px-3').$$('.MuiPaper-root');
        // statusColumn(filterStatus) {var alldivs = browser.$('.px-4').$('.bottomRightGrid').$$('.text-truncate');
        //console.log('finding note with text :' + noteText);
                            var temp;
                            for (var i=0; i<allAlerts.length;i++)
                                {

                                    temp =allAlerts[i].$('.MuiTypography-root');
                                    //console.log('index is : '+ i +' and value is '+ alldivs[i].getText());	
                                    if(temp.getText().includes(alertText))
                                    {
                                         //element = alldivs[i].getText();
                                         console.log('found as :' + temp.getText());
                                         return allAlerts[i].$('.MuiButtonBase-root');
                                    }
                                }
                                return false;
                        }

    lastAlertCrossButton(alertText) {var allAlerts = browser.$('.px-3').$$('.MuiPaper-root');
        // statusColumn(filterStatus) {var alldivs = browser.$('.px-4').$('.bottomRightGrid').$$('.text-truncate');
        //console.log('finding note with text :' + noteText);
                            var temp;
                            
                            for (var i=0; i<allAlerts.length;i++)
                                {

                                    temp =allAlerts[i].$('.MuiTypography-root');
                                    //console.log('index is : '+ i +' and value is '+ alldivs[i].getText());	
                                    if(temp.getText().includes(alertText))
                                    {
                                         //element = alldivs[i].getText();
                                         console.log('found as :' + temp.getText());
                                        //  return allAlerts[i].$('.MuiButtonBase-root'); // aria-label="Close"
                                         return allAlerts[i].$('[aria-label="Close"]'); // aria-label="Close"
                                         
                                    }
                                }
                                return false;
                        }


    // get alertFlagsCascadeToLinks () {return browser.$('[name=cascade]');}
    get alertFlagsCascadeToLinks () {return browser.$('[label="Alert flags cascade to links"]');}
    get checkboxFlagsCascadeToLinks () {return browser.$('[label="Alert flags cascade to links"]').$('.PrivateSwitchBase-input');}

    get alertHistoryContents () {return browser.$('[name=logs]');}

    get alertCategoryDropdown () {return browser.$('//*[@id="mui-component-select-association_type"]');}
    //*[@id="mui-component-select-association_type"]
    get alertCategoryCustomerValue () {return browser.$('//*[@id="menu-association_type"]/div[3]/ul').$('li=Customer');}
    get alertCategory () {return browser.$('//*[@id="mui-component-select-association_type"]');}
    get closebuttonOnSubscriber () {return browser.$('.docker-buttons').$('[aria-label="Close"]');}
    
    open(path){	super.open(path);}
}
module.exports = new alertsSubscriberPage();
