const utils = require('../support/utils');
"use strict";
var Page = require('./page')

class searchFiltersPage extends Page {

    get filtersBtn() {return browser.$('.MuiIconButton-root');} // added

    // get newFilterBtn() {return browser.$('span=New Filter');} // before
    get newFilterBtn() {return browser.$('li=New Filter');} // after
    get inputFields() {return browser.$$('.MuiInput-root');}
    get firstInputField() {return this.inputFields[0].$('input');}
    get secondInputField() {return this.inputFields[1].$('input');}
    get thirdInputField() {return browser.$('[name="filterItems[0].value"]');}
        setValueInField(index,value) {return this.inputFields[index].$('input').setValue(value);}
        clickInField(index) {return this.inputFields[index].$('input').click();}
    get forthInputField() {return this.inputFields[4].$('input');}
    get fifthInputField() {return this.inputFields[5].$('input');}
    get sixthInputField() {return browser.$('[name="filterItems[1].value"]');}
    get filterList() {return browser.$('li=Hibernated');}
    get btnSaveFilter() {return browser.$('button=Save Filter');}
    get btnCloseFilters() {return browser.$('button=Close');}
    // get setFilterNameInputField(){return this.inputFields[3].$('input');} // before
    get setFilterNameInputField(){return this.inputFields[this.inputFields.length - 1].$('input');} // after
    get btnSaveFilterName() {return browser.$('button=Save');}
    get btnCancelFilterName() {return browser.$('button=Cancel');}
    get alertMessage() {return browser.$('.MuiAlert-message');} // Filter removed successfully  // New filter added successfully // Filter updated successfully
    get suggestionListColumnField() {return browser.$('.MuiAutocomplete-popper').$('span');}
        specificSuggestionListColumnField(fieldName) {return browser.$('.MuiAutocomplete-popper').$('span='+fieldName).click();}
    get suggestionListOperatorField() {return browser.$('.MuiAutocomplete-popper').$('span');}
    get allIemsSuggestionListOperatorField() {return browser.$('.MuiAutocomplete-popper');}
        isExistValueField() {return browser.$('[name="filterItems[0].value"]').isExisting();}
    get addMultipleRowIcon() {return browser.$('[data-testid="AddCircleIcon"]');}
    get removeMultipleRowIcon() {return browser.$('[data-testid="HighlightOffIcon"]');}
    get searchInputField() {return browser.$('[placeholder="Search..."]');}
    get expandAllFilters(){return browser.$('.MuiListItem-root').$('[data-testid="ArrowDropDownIcon"]');}
        hoverOnFilter(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/header/div/div[2]/div[2]/div/div/div[3]/div/div/div/nav/div/div[2]/li[1]').moveTo();}//its same for all tabs
        editIcon(parent){return parent.$('[data-testid="EditIcon"]');}
        selectSpecificFilter(filtername){return browser.$('.MuiListItem-root').$('li='+filtername);}
    get firstEditIcon(){return browser.$('[data-testid="EditIcon"]');}
    get filterNameField() {return browser.$('[name="filterName"]');}
    get btnUpdateFilter() {return browser.$('button=Update Filter');}
    get btnSaveAs() {return browser.$('button=Save As');}
    get inputNameWhileSaveAs() {return browser.$$('.MuiOutlinedInput-root')[2].$('input');}
    get alertUnsaveDock() {return browser.$('.MuiDialog-paperScrollPaper').$('p');}
    get btnEmail() {return browser.$('button=Message');}
    get emailDockOpen() {return browser.$('.email-header');}
    get emailFilter() {return browser.$$('[name="msgService"]');}
    get selectedFilterParent(){return browser.$('.MuiChip-clickableColorDefault');}
    get removeSelectedFilter(){return this.selectedFilterParent.$('[data-testid="CancelIcon"]');}
    get confirmYesFilter(){return browser.$('.MuiDialog-container').$('button=Yes');}
    // get listItems(){return browser.$('.MuiPaper-root').$$('span');}
    get filterNameInEmail() {return browser.$('[aria-label="There is no Billing/Technical/Marketing email"]').$('input');}
}
module.exports = new searchFiltersPage();
