"use strict";
var Page = require('./page')
class searchExistingFilters extends Page{

    
    get topSearchInput(){return browser.$('[placeholder="Search..."]');}
    get filtersParent(){return browser.$('.MuiToolbar-root').$('.MuiListItem-root');}
    get existingilters(){return this.filtersParent.$$('li');}
        selectSpecificFilter(filtername){return this.filtersParent.$('li='+filtername);}
    get countForSaved(){return this.filtersParent.$$('span');}
    get expandMatchedFilters(){return this.filtersParent.$('[data-testid="ArrowDropDownIcon"]');}
    get selectedFilterParent(){return browser.$('.MuiChip-clickableColorDefault');}
    get openSelectedFilter(){return this.selectedFilterParent.$('[data-testid="FilterListIcon"]');}
    get expandedFilterName(){return this.filtersParent.$('[name="filterName"]');}
    get allFormsData(){return this.filtersParent.$$('.MuiInputBase-root');}
    get filterStatus(){return this.filtersParent.$('[name="filterItems[0].field"]').$('input');}
    get filterOperator(){return this.filtersParent.$('[name="filterItems[0].relational_operator"]').$('input');}
    get filterValue(){return this.filtersParent.$('[name="filterItems[0].value"]');}
    get filterAttribute(){return browser.$('[name="filterItems[0].field"]').$('input');}
    get filterOpt(){return browser.$('[name="filterItems[0].relational_operator"]').$('input');}
    get criteriaValue(){return browser.$('[id="filterItems[0].value"]');}
        editFilter(parent){return parent.$('[data-testid="EditIcon"]');}
    get newFilter(){return browser.$('span=New Filter');}
    get subscriberid(){return browser.$('#subscriberPage').$('.bottomRightGrid').$('p');}
    get saveFilter(){return browser.$('button=Save Filter');}
    get inputFilterName(){return browser.$('//*[@id="form-dialog-title"]/div/div').$('input');}
    get saveFilterName(){return browser.$('.MuiDialog-container').$('button=Save');}
    get closeFilterDialog(){return this.filtersParent.$('button=Close');}
    get removeSelectedFilter(){return this.selectedFilterParent.$('[data-testid="CancelIcon"]');}
        clearFilter(parent){return parent.$('[aria-label="clear"');}
    get confirmDeleteFilter(){return browser.$('.MuiDialog-container').$('button=Delete');}
    get confirmationMsg(){return browser.$('.MuiAlert-message');}
    get totalPageRecords(){return browser.$('p*=Records with page size:');}

    open(path){	super.open(path);}

}
module.exports = new searchExistingFilters();