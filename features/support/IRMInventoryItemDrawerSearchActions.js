var irmChecklist = require('../pageobjects/IRMChecklist.page');
var irmEquipmentTableSearch = require('../pageobjects/IRMEquipmentTableSearch.page');
var irmInventoryProfileTableSearch = require('../pageobjects/IRMInventoryProfileTableSearch.page');
var irmInventoryProfileDrawerSearch = require('../pageobjects/IRMInventoryItemDrawerSearch.page');
var expect = require('chai').expect;

class IRMInventoryProfileDrawerSearchActions {

    constructor() { 
        this.upArrowKey = ['\ue013']; // arrow up
        this.downArrowKey = ['\ue015'];// arrow down
        this.enterKey = ['\ue007'];// enter
        this.backspaceKey = ['\uE003'];// backspace
        this.clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
    }

    filterParam(param){
        return param.replace(/['"]+/g, '');
    }

    clickOnInventoryProfile(result){
        result = this.filterParam(result);
        irmInventoryProfileDrawerSearch.clickOnExpectedOutput(result);
        browser.pause(5000);
    }


    verifySearchBox(){
        irmInventoryProfileDrawerSearch.searchBox.waitForDisplayed();
        expect(irmInventoryProfileDrawerSearch.searchBox.isExisting()).to.be.true;
    }

    verifyHighlightedResult(result){
        result = this.filterParam(result);
        irmInventoryProfileDrawerSearch.highlightedText.waitForDisplayed();
        expect(irmInventoryProfileDrawerSearch.highlightedText.getText()).eql(result);
    }

    verifyExpectedResult(result){
        result = this.filterParam(result);
        expect(irmInventoryProfileDrawerSearch.verifyExpectedOutput(result)).to.be.true;
    }

    closeDrawerAndClearSearch(){
        irmInventoryProfileDrawerSearch.btnCloseDrawer.waitForDisplayed();
        irmInventoryProfileDrawerSearch.btnCloseDrawer.click();
        irmInventoryProfileDrawerSearch.searchInput.click();
        browser.keys(this.clearKeys);
    }

    sortColumn(){
        irmInventoryProfileDrawerSearch.colCurrentLocation.waitForDisplayed();
        irmInventoryProfileDrawerSearch.colCurrentLocation.click();
        browser.pause(3000);
    }

    verifySortedData(result){
        result = this.filterParam(result);
        expect(irmInventoryProfileDrawerSearch.locationValue.getText()).eql(result);
    }

    setPagination(){
        irmInventoryProfileDrawerSearch.selectRecordShow.waitForDisplayed();
        irmInventoryProfileDrawerSearch.selectRecordShow.click();
        irmInventoryProfileDrawerSearch.li10.waitForDisplayed();
        irmInventoryProfileDrawerSearch.li10.click();
        browser.pause(5000);
    }

    verifyCorrectDataDisplayed(){
        const rowCount = irmInventoryProfileDrawerSearch.allItemRows.length;
        console.log("Row Count:", rowCount);
        let str = irmInventoryProfileDrawerSearch.resultCount.getText();
        console.log("Extracted text:", str);
        const parts = str.split("-");
        const paginationCount = parseInt(parts[1].trim().split(" ")[0], 10);
        console.log("Pagination Count:", paginationCount);
        expect(rowCount).eql(paginationCount);
    }
}
module.exports = new IRMInventoryProfileDrawerSearchActions();