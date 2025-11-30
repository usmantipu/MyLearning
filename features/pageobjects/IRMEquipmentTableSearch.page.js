const utils = require('../support/utils');
"use strict";
var Page = require('./page')

class IRMEquipmentTableSearch extends Page
{
    get openLockIcon(){return browser.$('[data-testid="LockOpenIcon"]');}
    get spanKeySerial(){return browser.$('span=Serial');}
    get spanKeySKU(){return browser.$('span=SKU');}
    get spanKeyManufacturer(){return browser.$('span=Manufacturer');}
    get spanKeyMac(){return browser.$('span=Mac');}
    get spanKeyIPAddress(){return browser.$('span=IP Address');}
    get spanKeyLocation(){return browser.$('span=Location');}
    get equipmentProfile(){return browser.$('.MuiTypography-h6');}
    get drawerEquipmentProfile(){return browser.$$('.MuiDataGrid-cell--withRenderer')[2];}
        verifyExpectedOutput(output) {return browser.$('h6=' + output);}
    get btnCloseIcon(){return browser.$('[data-testid="CloseIcon"]');}
    get resultCount(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[2]/div[3]/div/div[3]/p');}
    get closeLockIcon(){return browser.$('[data-testid="LockIcon"]');}
    get divSerialKey(){return browser.$('div*=Serial:');}
    get divFilter(){return browser.$('div*=Filter:');}
    get messageNotFound(){return browser.$('h6=No Equipment Profile available.');}
    get drawerSearchField() {return browser.$('.MuiInputBase-inputAdornedEnd');}
    get pSerial(){return browser.$('p=Serial');}
        verifySerialOnEqiopmentDrawer(serial) {return browser.$('h6=' + serial).isExisting();}

}
module.exports = new IRMEquipmentTableSearch();