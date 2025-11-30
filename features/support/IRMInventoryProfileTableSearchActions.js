var irmChecklist = require('../pageobjects/IRMChecklist.page');
var irmEquipmentTableSearch = require('../pageobjects/IRMEquipmentTableSearch.page');
var irmInventoryProfileTableSearch = require('../pageobjects/IRMInventoryProfileTableSearch.page');
var expect = require('chai').expect;

class IRMInventoryProfileTableSearchActions {

    constructor() { 
        this.upArrowKey = ['\ue013']; // arrow up
        this.downArrowKey = ['\ue015'];// arrow down
        this.enterKey = ['\ue007'];// enter
        this.backspaceKey = ['\uE003'];// backspace
        this.clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
        this.unrefinedSearch = 'Mikrotik';
        this.refinedSearch = 'Mikrotik Router';
        this.incorrectSearch = 'hdsfgsiudfghisudfhnsv';
    }

    nevigateToEquipmentListProfiles(){
        irmInventoryProfileTableSearch.btnInventory.waitForDisplayed();
        irmInventoryProfileTableSearch.btnInventory.click();
        browser.pause(3000);
    }

    verifyInventoryProfiles(){
        irmInventoryProfileTableSearch.inventoryProfiles.isExisting();
    }

    verifyHighlightedSearchResults(result){
        result = result.replace(/['"]+/g, '');
        expect(irmInventoryProfileTableSearch.highlightedText.getText()).eql(result);
    }
    verifySearchResults(result){
        result = result.replace(/['"]+/g, '');
        expect(irmInventoryProfileTableSearch.verifyExpectedOutput(result)).to.be.true;
    }

    clearSearch(){
        browser.keys(this.clearKeys);
    }

    enterCustomSearchValue(value){
        irmChecklist.searchInput.click();
        if(value === 'Unrefined')
        {
            irmChecklist.searchInput.setValue(this.unrefinedSearch);
        }
        else if(value === 'Refined')
        {
            this.clearSearch();
            irmChecklist.searchInput.setValue(this.refinedSearch);
        }
        else if(value === 'incorrect')
        {
            irmChecklist.searchInput.setValue(this.incorrectSearch);
        }
        browser.pause(5000);
    }

    verifyNoInventoryProfileFound(){
        irmInventoryProfileTableSearch.messageNotFound.waitForDisplayed();
        expect(irmInventoryProfileTableSearch.messageNotFound.isExisting()).to.be.true;
    }

    clickOnInventoryProfile(result){
        result = result.replace(/['"]+/g, '');
        irmInventoryProfileTableSearch.clickOnExpectedOutput(result);
        browser.pause(5000);
    }

    verifyActualInventoryProfileOpened(val){
        val = val.replace(/['"]+/g, '');
        expect(irmInventoryProfileTableSearch.verifyExpectedOutput(val)).to.be.true;
    }
    
    sortInventory(){
        irmInventoryProfileTableSearch.colDesc.waitForDisplayed();
        irmInventoryProfileTableSearch.colDesc.click();
        browser.pause(5000);
    }

    verifyInventoryProfilesSorted(val){
        val = val.replace(/['"]+/g, '');
        expect(irmInventoryProfileTableSearch.firstInventoryProfileExists(val)).to.be.true;
    }

    verifyCorrectCounts(result){
        irmEquipmentTableSearch.resultCount.waitForDisplayed();
        irmEquipmentTableSearch.resultCount.scrollIntoView();
        let unfilteredCounts = irmEquipmentTableSearch.resultCount.getText();
        expect('"' + unfilteredCounts.slice(unfilteredCounts.indexOf("of") + 3) + '"').eql(result);
    }
}
module.exports = new IRMInventoryProfileTableSearchActions();