var LoginPage = require('../pageobjects/login.page');
const { hoverOnFilter } = require('../pageobjects/searchFilters.page');
var searchFiltersPage = require('../pageobjects/searchFilters.page');
var Utils = require('./utils');
var expect = require('chai').expect; 
var should = require('chai').should();


class searchFiltersActions {

    constructor() {
        this.downArrowKey = ['\ue015'];// arrow down
		this.enterKey = ['\ue007'];// enter
		this.backspaceKey = ['\uE003'];// backspace
        this.clearKeys = ['\uE011', '\uE008', '\uE010','\uE017'];
        this.newFilterName;
        this.filterName;
    }
    clickOnNewFilterBtn() {
        searchFiltersPage.filtersBtn.waitForDisplayed();
        searchFiltersPage.filtersBtn.click();
        searchFiltersPage.newFilterBtn.waitForDisplayed({ timeout: 50000 });
        searchFiltersPage.newFilterBtn.waitForClickable({ timeout: 25000 });
        searchFiltersPage.newFilterBtn.click();
    }
    enterFilterDetails() {
        searchFiltersPage.firstInputField.waitForDisplayed();
        searchFiltersPage.firstInputField.setValue('Status');
        browser.pause(2000);
        browser.keys(this.downArrowKey);
        browser.keys(this.downArrowKey);
        browser.keys(this.enterKey);
        searchFiltersPage.secondInputField.click();
        browser.keys(this.backspaceKey);
        searchFiltersPage.secondInputField.setValue('equals');
        browser.keys(this.downArrowKey);
        browser.keys(this.downArrowKey);
        browser.keys(this.enterKey);
        searchFiltersPage.thirdInputField.click();
        searchFiltersPage.filterList.waitForDisplayed();
        searchFiltersPage.filterList.click();
    }
    pressSaveFilterBtn(){
        searchFiltersPage.btnSaveFilter.waitForClickable();
        searchFiltersPage.btnSaveFilter.click();
    }
    saveFilterName() {
        searchFiltersPage.setFilterNameInputField.waitForDisplayed();
        this.newFilterName = 'AutFilt' + Math.floor(Math.random() * 5657577);
        searchFiltersPage.setFilterNameInputField.setValue(this.newFilterName);
        browser.pause(1000);
        searchFiltersPage.btnSaveFilterName.waitForClickable();
        searchFiltersPage.btnSaveFilterName.click();
        browser.pause(200);
        searchFiltersPage.alertMessage.waitForDisplayed();
        expect(searchFiltersPage.alertMessage.getText()).to.eql('New filter added successfully');
        browser.pause(3000);
        searchFiltersPage.btnCloseFilters.waitForDisplayed();
        searchFiltersPage.btnCloseFilters.waitForClickable();
        searchFiltersPage.btnCloseFilters.click();
        searchFiltersPage.removeSelectedFilter.waitForDisplayed();
        searchFiltersPage.removeSelectedFilter.click();
        browser.pause(2000);
    }
    verifySuggestionListOfColumnField(){
        searchFiltersPage.firstInputField.waitForDisplayed();
        searchFiltersPage.firstInputField.setValue('statu');
        browser.pause(1000);
        expect(searchFiltersPage.suggestionListColumnField.getText()).to.eql('Status');
    }
    verifySuggestionListInOperatorField(){
        searchFiltersPage.firstInputField.waitForDisplayed();
        searchFiltersPage.firstInputField.setValue('Status');
        browser.keys(this.downArrowKey);
        browser.keys(this.downArrowKey);
        browser.keys(this.enterKey);
        searchFiltersPage.secondInputField.waitForDisplayed();
        searchFiltersPage.secondInputField.click();
        browser.keys(this.backspaceKey);
        searchFiltersPage.secondInputField.setValue('equ');
        browser.pause(1000);
        expect(searchFiltersPage.suggestionListOperatorField.getText()).to.eql('equals');
    }
    verifyNotRequiredFillValueField(val) {
        searchFiltersPage.firstInputField.waitForDisplayed();
        searchFiltersPage.firstInputField.setValue('Status');
        browser.keys(this.enterKey);
        searchFiltersPage.secondInputField.waitForDisplayed();
        searchFiltersPage.secondInputField.click();
        browser.keys(this.backspaceKey);
        searchFiltersPage.secondInputField.setValue(val);
        browser.pause(1000);
        browser.keys(this.enterKey);
        expect(searchFiltersPage.isExistValueField()).to.be.false;
    }
    addMultipleRowsCriteria(rows) {
        this.enterFilterDetails();
        searchFiltersPage.addMultipleRowIcon.waitForClickable();
        searchFiltersPage.addMultipleRowIcon.click();
        expect(searchFiltersPage.inputFields.length - 1).to.eql(6);
        if(rows === 'two')
                return;
        this.addValuesinMultipleRowsCriteria();
    }
    addValuesinMultipleRowsCriteria() {
        var j=0;
        for(var i=4;i<17;i++) {
            searchFiltersPage.setValueInField(i+j,'Status');
            browser.keys(this.downArrowKey);
            browser.keys(this.downArrowKey);
            browser.keys(this.enterKey);
            searchFiltersPage.clickInField(i+j+1);
            browser.keys(this.backspaceKey);
            searchFiltersPage.setValueInField(i+j+1,'equals');
            browser.keys(this.downArrowKey);
            browser.keys(this.downArrowKey);
            browser.keys(this.enterKey);
            searchFiltersPage.inputFields[i+j+2].click();
            searchFiltersPage.filterList.waitForDisplayed();
            searchFiltersPage.filterList.click();
            searchFiltersPage.addMultipleRowIcon.click();
            i+=2;
            j++;
        }
        expect(searchFiltersPage.inputFields.length - 1).to.eql(26);
    }
    removeCriteria(){
        searchFiltersPage.removeMultipleRowIcon.click();
        expect(searchFiltersPage.inputFields.length - 1).to.eql(2);
    }
    addMultipleRowsCriteriaWithSameValues(valueToSet) {
        this.addMultipleRowsCriteria(valueToSet);
        searchFiltersPage.forthInputField.waitForDisplayed();
        searchFiltersPage.forthInputField.setValue('Status');
        browser.keys(this.downArrowKey);
        browser.keys(this.downArrowKey);
        browser.keys(this.enterKey);
        searchFiltersPage.fifthInputField.click();
        browser.keys(this.backspaceKey);
        searchFiltersPage.fifthInputField.setValue('equals');
        browser.keys(this.downArrowKey);
        browser.keys(this.downArrowKey);
        browser.keys(this.enterKey);
        searchFiltersPage.inputFields[6].click();
        searchFiltersPage.filterList.waitForDisplayed();
        searchFiltersPage.filterList.click();
    }
    verifyCannotSaveFilter(param) {
        searchFiltersPage.btnSaveFilter.waitForDisplayed();
        expect(searchFiltersPage.btnSaveFilter.getAttribute("disabled")).eql('true');
        if(searchFiltersPage.btnCloseFilters.isExisting())
        {
            if(param === "empty"){
                searchFiltersPage.btnCloseFilters.click();
                return;
            }
            searchFiltersPage.btnCloseFilters.waitForClickable();
            searchFiltersPage.btnCloseFilters.click();
            searchFiltersPage.confirmYesFilter.waitForClickable();
            searchFiltersPage.confirmYesFilter.click();
        }
    }
    verifyCannotSaveFilterWhileRequiredEmpty(param){
        browser.pause(2000);
        searchFiltersPage.firstInputField.waitForDisplayed();
        searchFiltersPage.firstInputField.click();
        browser.pause(2000);
        searchFiltersPage.secondInputField.waitForDisplayed();
        searchFiltersPage.secondInputField.click();
        browser.keys(this.backspaceKey);
        searchFiltersPage.secondInputField.setValue('equals');
        this.verifyCannotSaveFilter(param);
    }
    expandFilters() {
        searchFiltersPage.searchInputField.waitForClickable();
        searchFiltersPage.searchInputField.click();
        browser.pause(3000);
        searchFiltersPage.expandAllFilters.waitForClickable();
        searchFiltersPage.expandAllFilters.click();
    }
    hoverOverFilter()
    {
        searchFiltersPage.hoverOnFilter();
    }
    openAFilterToEdit(){
        var filterToFocus = searchFiltersPage.selectSpecificFilter(this.newFilterName);
        filterToFocus.moveTo();
        searchFiltersPage.editIcon(filterToFocus).click();
    }
    editFirstFilter(){
        searchFiltersPage.firstEditIcon.click();
    }
    renameAFilter() {
        searchFiltersPage.filterNameField.click();
        searchFiltersPage.filterNameField.keys(this.clearKeys);
        this.newFilterName = 'zpAutFilt' + Math.floor(Math.random() * 5657577);
        searchFiltersPage.filterNameField.setValue(this.newFilterName);
        // var text = searchFiltersPage.filterNameField.getValue();
        // if(text.slice(-1) === ' ')
        // {
        //     searchFiltersPage.filterNameField.click();
        //     browser.keys(this.backspaceKey);
        // }
        // else
        //     searchFiltersPage.filterNameField.setValue(' ');
    }
    pressBtnUpdateFilter(){
        searchFiltersPage.btnUpdateFilter.click();
        searchFiltersPage.alertMessage.waitForDisplayed();
        expect(searchFiltersPage.alertMessage.getText()).to.eql('Filter updated successfully');
        searchFiltersPage.selectedFilterParent.waitForDisplayed();
        expect(searchFiltersPage.selectedFilterParent.getText()).to.eql(this.newFilterName);
        if(searchFiltersPage.removeSelectedFilter.isExisting())
        {
            searchFiltersPage.removeSelectedFilter.click();
        }
    }
    pressSaveAsNewFilterBtn(){
        this.renameAFilter();
        searchFiltersPage.btnSaveAs.click();
        searchFiltersPage.inputNameWhileSaveAs.setValue(Math.floor(Math.random() * 5657577));
        searchFiltersPage.btnSaveFilterName.click();
        searchFiltersPage.alertMessage.waitForDisplayed();
        expect(searchFiltersPage.alertMessage.getText()).to.eql('New filter added successfully');
        browser.pause(3000);
        if(searchFiltersPage.removeSelectedFilter.isExisting())
        {
            searchFiltersPage.removeSelectedFilter.click();
        }
    }
    verifyWarningPrompt() {
        searchFiltersPage.btnCloseFilters.waitForDisplayed();
        searchFiltersPage.btnCloseFilters.click();
        expect(searchFiltersPage.alertUnsaveDock.getText()).to.eql('You have unsaved changes. Do you want to leave this changes?');
        searchFiltersPage.confirmYesFilter.waitForClickable();
        searchFiltersPage.confirmYesFilter.click();
    }
    verifyEmailDock() {
        this.filterName = searchFiltersPage.filterNameField.getValue();
        searchFiltersPage.btnEmail.waitForClickable();
        searchFiltersPage.btnEmail.click();
        searchFiltersPage.emailDockOpen.waitForDisplayed();
        expect(searchFiltersPage.emailDockOpen.isExisting()).to.be.true;
    }
    verifyEmailFilterChecked(){
        let isValid;
        for(var i = 0; i < searchFiltersPage.emailFilter.length; i++)
        {
            if(searchFiltersPage.emailFilter[i].getValue() === 'email')
            {
                isValid = searchFiltersPage.emailFilter[i].getAttribute('checked');
            }
        }
        expect(isValid).to.eql('true');
        searchFiltersPage.filterNameInEmail.waitForDisplayed();
        expect(this.filterName).eql(searchFiltersPage.filterNameInEmail.getValue());
    }
    verifyOptionsForFields(data){
        var dataToVerify = data.raw();
        searchFiltersPage.inputFields[0].waitForDisplayed();
        searchFiltersPage.firstInputField.setValue(dataToVerify[0][0]);
        for(var i = 0; i<dataToVerify.length; i++){
            console.log(dataToVerify[i][0]);
            browser.pause(100);
            searchFiltersPage.inputFields[0].click();
            browser.keys(this.backspaceKey);
            searchFiltersPage.firstInputField.setValue(dataToVerify[i][0]);
            searchFiltersPage.specificSuggestionListColumnField(dataToVerify[i][0]);
            browser.pause(100);
            browser.keys(this.enterKey);
            searchFiltersPage.inputFields[1].waitForClickable();
            searchFiltersPage.inputFields[1].click();
            browser.keys(this.backspaceKey);
            searchFiltersPage.suggestionListOperatorField.waitForDisplayed();
            var allOpt = searchFiltersPage.allIemsSuggestionListOperatorField;
            expect(allOpt.getText().includes('is empty')).to.to.be.true;
            expect(allOpt.getText().includes('is not empty')).to.to.be.true;
            expect(allOpt.getText().includes('equals')).to.to.be.true;
            expect(allOpt.getText().includes('does not equal')).to.to.be.true;
        }
        if(searchFiltersPage.btnCloseFilters.isExisting())
        {
            searchFiltersPage.btnCloseFilters.waitForClickable();
            searchFiltersPage.btnCloseFilters.click();
            searchFiltersPage.confirmYesFilter.waitForClickable();
            searchFiltersPage.confirmYesFilter.click();
        }
    }
    verifyOption(input, output){
        searchFiltersPage.secondInputField.click();
        browser.keys(this.backspaceKey);
        searchFiltersPage.secondInputField.setValue(input);
        browser.pause(1000);
        browser.keys(this.enterKey);
        expect(searchFiltersPage.suggestionListOperatorField.getText()).to.eql(output);
    }
}
module.exports = new searchFiltersActions();
