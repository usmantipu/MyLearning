const utils = require('../support/utils');
"use strict";
var Page = require('./page')

class IRMInventoryProfileTableSearch extends Page
{
    get btnInventory() {return browser.$('button=Inventory');}
    get inventoryProfiles(){return browser.$$('.h-100')[1];}
    get highlightedText(){return browser.$('.highlight-text');}
        verifyExpectedOutput(output) {return browser.$('span=' + output).isExisting();}
        clickOnExpectedOutput(output) {return browser.$('span=' + output).click();}
    get messageNotFound(){return browser.$('div=No Data Available...');}
    get colDesc(){return browser.$('div=Description');}
        firstInventoryProfileExists(profile){return browser.$$('.MuiDataGrid-virtualScrollerRenderZone')[1].$('p=' + profile).isExisting();}

}
module.exports = new IRMInventoryProfileTableSearch();