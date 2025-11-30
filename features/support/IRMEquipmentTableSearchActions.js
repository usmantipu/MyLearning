var irmChecklist = require('../pageobjects/IRMChecklist.page');
var irmEquipmentTableSearch = require('../pageobjects/IRMEquipmentTableSearch.page');
var expect = require('chai').expect;

class IRMEquipmentTableSearchActions {

    constructor() { 
        this.upArrowKey = ['\ue013']; // arrow up
        this.downArrowKey = ['\ue015'];// arrow down
		this.enterKey = ['\ue007'];// enter
		this.backspaceKey = ['\uE003'];// backspace
        this.clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
        this.unrefinedSearch = 'autoptp';
        this.refinedSearch = 'autoptp166';
        this.incorrectSearch = 'hdsfgsiudfghisudfhnsv';
        this.searchedCount;
    }

    verifyEquipmentSearchIcon(){
        expect(irmChecklist.searchIcon[1].isExisting()).to.be.true;
    }

    clickOnEquipmentSearchIcon(){
        irmChecklist.searchIcon[1].click();
    }

    verifyEquipmentSearchBox(){
        irmChecklist.searchInput.waitForDisplayed();
        expect(irmChecklist.searchInput.isExisting()).to.be.true;
    }

    clickOnLockIconSearchBar(){
        irmEquipmentTableSearch.openLockIcon.waitForDisplayed();
        irmEquipmentTableSearch.openLockIcon.click();
    }

    verifyKeyFields(){
        irmEquipmentTableSearch.spanKeySerial.waitForDisplayed();
        expect(irmEquipmentTableSearch.spanKeySerial.isExisting()).to.be.true;
        expect(irmEquipmentTableSearch.spanKeySKU.isExisting()).to.be.true;
        expect(irmEquipmentTableSearch.spanKeyManufacturer.isExisting()).to.be.true;
        expect(irmEquipmentTableSearch.spanKeyMac.isExisting()).to.be.true;
        expect(irmEquipmentTableSearch.spanKeyIPAddress.isExisting()).to.be.true;
        expect(irmEquipmentTableSearch.spanKeyLocation.isExisting()).to.be.true;
    }

    enterSearchValue(searchValue){
        searchValue = searchValue.replace(/['"]+/g, '');
        irmChecklist.searchInput.click();
        irmChecklist.searchInput.setValue(searchValue);
        browser.pause(5000);
    }
    
    verifySearchResults(result){
        result = result.replace(/['"]+/g, '');
        browser.pause(2000);
        irmEquipmentTableSearch.verifyExpectedOutput(result).waitForDisplayed();
        expect(irmEquipmentTableSearch.verifyExpectedOutput(result).isExisting()).to.be.true;
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


    openEquipment(){
        irmEquipmentTableSearch.equipmentProfile.waitForDisplayed();
        irmEquipmentTableSearch.equipmentProfile.click();
        browser.pause(5000);
        irmEquipmentTableSearch.drawerEquipmentProfile.click();
    }

    clickOnKey(param){
        if(param === 'serial'){
            irmEquipmentTableSearch.spanKeySerial.waitForDisplayed();
            irmEquipmentTableSearch.spanKeySerial.click();
        }
        else if(param === 'SKU')
        {
            irmEquipmentTableSearch.spanKeySKU.waitForDisplayed();
            irmEquipmentTableSearch.spanKeySKU.click();
        }
        else if(param === 'Manufacturer')
        {
            irmEquipmentTableSearch.spanKeyManufacturer.waitForDisplayed();
            irmEquipmentTableSearch.spanKeyManufacturer.click();
        }
        else if(param === 'MAC')
        {
            irmEquipmentTableSearch.spanKeyMac.waitForDisplayed();
            irmEquipmentTableSearch.spanKeyMac.click();
        }
        else if(param === 'IP Address')
        {
            irmEquipmentTableSearch.spanKeyIPAddress.waitForDisplayed();
            irmEquipmentTableSearch.spanKeyIPAddress.click();
        }
        else if(param === 'Location')
        {
            irmEquipmentTableSearch.spanKeyLocation.waitForDisplayed();
            irmEquipmentTableSearch.spanKeyLocation.click();
        }
    }

    clickOnCloseButton(){
        irmEquipmentTableSearch.btnCloseIcon.waitForDisplayed();
        irmEquipmentTableSearch.btnCloseIcon.click();
    }

    verifySearchCleared(){
        this.clickOnEquipmentSearchIcon();
        irmChecklist.searchInput.waitForDisplayed();
        expect(irmChecklist.searchInput.getValue()).eql('');
    }

    searchCounts(){
        irmEquipmentTableSearch.resultCount.waitForDisplayed();
        irmEquipmentTableSearch.resultCount.scrollIntoView();
        let unfilteredCounts = irmEquipmentTableSearch.resultCount.getText();
        this.searchedCount = parseInt(unfilteredCounts.slice(unfilteredCounts.indexOf("of") + 3), 10);
    }

    verifyRefinedSearchCounts(){
        browser.pause(3000);
        irmEquipmentTableSearch.resultCount.waitForDisplayed();
        let unfilteredCounts = irmEquipmentTableSearch.resultCount.getText();
        const count = parseInt(unfilteredCounts.slice(unfilteredCounts.indexOf("of") + 3), 10);
        expect(count < this.searchedCount).to.be.true;
    }

    verifySearchKeyLocked(){
        irmEquipmentTableSearch.closeLockIcon.waitForDisplayed();
        expect(irmEquipmentTableSearch.closeLockIcon.isExisting()).to.be.true;
        expect(irmEquipmentTableSearch.divSerialKey.isExisting()).to.be.true;
    }
    
    clickOnLockedIconSearchBar(){
        irmEquipmentTableSearch.closeLockIcon.waitForDisplayed();
        irmEquipmentTableSearch.closeLockIcon.click();
    }
    
    verifySearchKeyUnlocked(){
        irmEquipmentTableSearch.openLockIcon.waitForDisplayed();
        expect(irmEquipmentTableSearch.openLockIcon.isExisting()).to.be.true;
        expect(irmEquipmentTableSearch.divFilter.isExisting()).to.be.true;
    }

    verifyNoEquipmentFound(){
        irmEquipmentTableSearch.messageNotFound.waitForDisplayed();
        expect(irmEquipmentTableSearch.messageNotFound.isExisting()).to.be.true;
    }

    clickOnEquipmentProfile(){
        irmEquipmentTableSearch.equipmentProfile.waitForDisplayed();
        irmEquipmentTableSearch.equipmentProfile.click();
        browser.pause(5000);
    }

    verifyPrePopulatedText(searchText){
        searchText = searchText.replace(/['"]+/g, '');
        expect(irmEquipmentTableSearch.drawerSearchField.getValue()).eql(searchText);
    }

    clearSearch(){
        browser.keys(this.clearKeys);
    }

    verifyActualEquipmentOpened(val){
        val = val.replace(/['"]+/g, '');
        irmEquipmentTableSearch.pSerial.waitForDisplayed();
        irmEquipmentTableSearch.pSerial.scrollIntoView();
        browser.pause(3000);
        expect(irmEquipmentTableSearch.verifySerialOnEqiopmentDrawer(val)).to.be.true;
    }
}
module.exports = new IRMEquipmentTableSearchActions();