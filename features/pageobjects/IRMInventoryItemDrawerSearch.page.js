const utils = require('../support/utils');
"use strict";
var Page = require('./page')

class IRMInventoryProfileDrawerSearch extends Page
{
    get searchInput() {return browser.$('.MuiInputBase-inputAdornedStart');}
        scrollToProfile(output) {return browser.$('p=' + output).scrollIntoView();}
        clickOnExpectedOutput(output) {return browser.$('p=' + output).click();}
    get searchBox(){return browser.$('.MuiOutlinedInput-input');}
    get highlightedText(){return browser.$('.highlight-text');}
    get btnCloseDrawer(){return browser.$('[aria-label="Close"]');}
    get colCurrentLocation(){return browser.$('div=Current Location');}
    verifyExpectedOutput(output) {return browser.$('p=' + output).isExisting();}
    get locationValue(){return browser.$('.MuiDataGrid-virtualScrollerRenderZone').$$('p')[1];}
    get allItemRows(){return browser.$('.MuiDataGrid-virtualScrollerRenderZone').$$('.MuiDataGrid-row');}
    get selectRecordShow(){return browser.$('.MuiSelect-select');}
    get li10(){return browser.$('li=10');}
    get resultCount(){return browser.$('.MuiGrid-spacing-xs-1').$('p*=1 - ');}

}
module.exports = new IRMInventoryProfileDrawerSearch();