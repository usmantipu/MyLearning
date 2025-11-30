const utils = require('../support/utils');
"use strict";
var Page = require('./page')

class searchPage extends Page {



	get searchField () {return browser.$$('.MuiToolbar-root')[0].$('.MuiInputBase-input');}
	get suggestionList () {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/header/div/div[2]/div[2]/div/div/div[3]');}
	get suggestionGroup () {return browser.$('nav').$$('.MuiListItemText-root');}
	get suggestedRecords () {return browser.$('#subscriberPage').$('.bottomRightGrid')}
	get btnCRMAllList(){return browser.$('span=All');}
	
	get calendarControl () {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[4]/div/div');}
	get allOptionOnCalendar () {return browser.$('.rdrStaticRanges').$('span=All');}
	get saveButtonOnCalendar(){return browser.$('//*[@id="simple-popover"]/div[3]/main/div[2]/button[2]');}

	get moreSearch(){return browser.$('p*=More');}
	
	// get countOfSuggestions () {return browser.$$('.MuiList-padding')[0].$$('.MuiListItem-root')[0].$('.jss988');}
	// get countOfSuggestions () {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/header/div/div[2]/div[2]/div/div/div[3]/div/div/div/nav/li[1]/div[1]/span');}
	// get countOfSuggestions () {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/header/div/div[2]/div[2]/div/div/div[3]/div/div/div/nav/li[1]/div[1]/span');}
	get highLightText(){return browser.$('.bottomRightGrid').$('.highlight-text ');}
	countOfUniqueSuggestions () {var allSuggestionItems = browser.$('//*[@id="app-inner"]/div[2]/div[2]/header/div/div[2]/div[2]/div/div/div[3]/div/div').$$('.MuiListItem-root');
										return allSuggestionItems.length;
									}

	
	countOfSuggestions () {var allSuggestionGroups = browser.$('//*[@id="app-inner"]/div[2]/div[2]/header/div/div[2]/div[2]/div/div[1]/div/div/div[3]/div/div').$$('.MuiListItem-root');
							var totalcount=0;
							for (let i = 0; i < allSuggestionGroups.length; i++) {
								if(allSuggestionGroups[i].$('span*= matches').isExisting()){
									totalcount++;
									// console.log("...object found for match...iteration is: ", i);
									// break;
								}
									//span[contains(text(),"All")]
	  						}
							return totalcount;
						}

	get ticketIDTab () {return browser.$$('.MuiTabs-flexContainer')[1].$('.MuiButtonBase-root');}



	get filterPopover () {return browser.$$('.MuiPaper-rounded')[0].$('.MuiChip-filledDefault');}
	get suggestedFilterPopover(){return browser.$$('.MuiPaper-rounded')[0].$('.MuiPaper-elevation1');}
	get xIconOnFilterPopover () {return browser.$$('.MuiPaper-rounded')[0].$('.MuiChip-filledDefault').$('.MuiSvgIcon-root');}
	get firstItemOfSuggestionGroup () {return browser.$$('.MuiList-padding')[0].$$('.MuiListItem-root')[0].$('.MuiList-root').$('.MuiListItem-root');}
	get totalResultsCountOnSubscriberPage() {return browser.$('//*[@id="subscriberPage"]/div/div[1]/div[2]/div/div[3]/p');}//get total records
	get totalResultsCountOnCRMPage() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[1]/div[2]/div/div[3]/p');}//get total records

	
	// get totalResultsCountOnSubscriberPage() {return browser.$('/html/body/section/div/div[2]/div[2]/main/div[3]/div[2]/div/div').$('//main/div[3]/div[2]/div/div/div[1]/div[2]/div/div[1]/div').$('p*=Records with page size');}//get total records
	// get totalResultsCountOnCRMPage() {return browser.$('//main/div[5]/div/div[1]/div[2]/div/div[1]/div/div[1]').$('p*=Records with page size');}//get total records
	get subscriberField(){ return browser.$('[name="customerId"]');}
	get subscriberFieldNameSet(){return browser.$('[name="customerId"]').$('[role="combobox"]');}
	get noDataAvailable () {return browser.$('#subscriberPage').$('p*=No Data Available...');}
	
	get ticketTypeField(){ return browser.$('[name="ticketType"]');}
	get ticketSummaryField(){ return browser.$('[name="summary"]');}
	get saveButton(){return browser.$('button=Save');}
	get restoreButton(){return browser.$('button=Restore');}
	get confirmationMsg(){return browser.$('.MuiAlert-message');} // Saved Successfully
	// get closePopUp(){return browser.$('.docker-buttons').$$('.MuiButtonBase-root')[3].$('.MuiSvgIcon-root');}
	// get closePopUp(){return browser.$('.docker-buttons').$('[aria-label="Close"]').$('[data-testid="CloseIcon"]');}
	get closePopUp(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[1]/button[4]/svg/path');}
	get autocompleteDialouge() {return browser.$('.MuiAutocomplete-popper').$('span');}		
	



// ---- OLD ---	
	get subscribersmenu()  { return browser.$('[aria-label="Subscribers"]'); }
	get subscribersCaption()  { return browser.$('.MuiTypography-h4'); }
	get subscriberslistmenu() { return browser.$('[aria-label="Subscribers"]'); }
	get sublistRibbon() {return browser.$('.section-title');}
	get subscriber_Allbutton()    {return browser.$$('.noselect.tbl-filter-item');}
	get btn_All()    {return browser.$('//span[contains(text(),"All")]');}
	get btn_PaidUp()    {return browser.$('.d-inline-block').$('.sort-filters=Paid up');}
	get btn_Due()    {return browser.$('.d-inline-block').$('.sort-filters=Due');}
	get btn_PastDue()    {return browser.$('.d-inline-block').$('.sort-filters=Past Due');}
	get btn_Suspended()    {return browser.$('.d-inline-block').$('.sort-filters=Suspended');}
	get btn_Hibernated()    {return browser.$('.d-inline-block').$('.sort-filters=Hibernated');}
	get btn_Prospect()    {return browser.$('.d-inline-block').$('.sort-filters=Prospects');}
	get btn_Archived()    { browser.$('.inactive-item').click();
							browser.$('//*[@id="page-container"]/div/div/div/div[1]/div[1]/div/div/div/span/a[2]').waitForDisplayed();
							return browser.$('//*[@id="page-container"]/div/div/div/div[1]/div[1]/div/div/div/span/a[2]');}
	//get meatball_menu() {return browser.$('.dragcolumn');}
	get meatball_menu(){return browser.$('#subscriberPage').$('.topRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$('.MuiTableCell-root');}
	get choose_col() {return browser.$('.MuiButtonBase-root=Choose Columns');}//using .classname as selector
	get emailThisList() {return browser.$('li=Message this list');}
	get colChooser_Status() {return browser.$('span=Status Text');}//use xpath as selector because class selector '.col-sm-1=Status' for this doesnt work on phantomJS

	get btnDone() {return browser.$('button=Close');}//user button property as selector

//	get totalcount() {return browser.$('.subscriber-main-table').$('.MuiGrid-align-items-xs-center').$('p*=Records with page size');}//get total records ui-upgrade
	get totalcount() {return browser.$('/html/body/section/div/div[2]/div[2]/main/div[3]/div[2]/div/div').$('//main/div[3]/div[2]/div/div/div[1]/div[2]/div/div[1]/div').$('p*=Records with page size');}//get total records
//	get pageLoadError(){return browser.$('.MuiGrid-align-items-xs-center')} //ui-upgrade
	get pageLoadError(){return browser.$('//main/div[3]/div[2]/div/div/div[1]/div[2]/div/div[1]/div')}
	btnSubListRefresh(parent){return parent.$('button');}
	filterId(id){
		
		return id.search(/^[0-9]_12_[0-9]$/);
		
		
	}
	 col_status(i,j) {
					//var index = i-1;
					//var tableID = browser.$('.div-table').getText('.column-1');
					
				/*	//*[@id="subscriberPage"]/div[1]/div[1]/div/div/div/div[2]/div/div/div[9]/div/p
					//*[@id="subscriberPage"]/div[1]/div[1]/div/div/div/div[2]/div/div/div[18]/div/p */
					if (j===1){
						//var id = tableID + '_12_'+ index;
						var id = 9;
						
						return browser.$('//*[@id="subscriberPage"]/div[1]/div[1]/div/div/div/div[2]/div/div/div['+ id +']/div/p');
					}
					else {
						//var id = tableID[i-1] + '_12_'+ index;
						var id = i * 9;
						console.log('Testing - Id is: '+ id);
						return browser.$('//*[@id="subscriberPage"]/div[1]/div[1]/div/div/div/div[2]/div/div/div['+ id +']/div/p');
					}

					//console.log('ID is:' + id);

		            //return browser.$('//*[@id="'+id+'"]/div');
					}
											
	get tablSubscribers() {return browser.$('#mytablecom');}//returns all record in table
	get tablRowCount() { var element =browser.$('#subscriberPage').$('p*=No Data Available...').isExisting();
						if (element === true){
							//console.log('no data available');
							return 'No Data Available...';}
						else{
						return browser.$$('.MuiTableCell-root');}}
						//var rowCount = browser.$$('.MuiTableCell-root');
						// return Math.floor((rowCount.value.length/8)-1);} //Dividing by 8 due to 8 default columns in subscriber table. Then subtracting 1 as there is a header
	svgStatusIcon(statusParent){return browser.$('#subscriberPage').$('.bottomRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('.'+statusParent).length;}
	get PastDueIcon () {var allpastdueicons = browser.$('#subscriberPage').$('.bottomRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('path');
							var totalcount=0;
							for (let i = 0; i < allpastdueicons.length; i++) {
								if(allpastdueicons[i].getAttribute('d')=='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z')
									{totalcount++;}
	  						}
							return totalcount;
						}
	get SuspendedIcon (){var allsuspendedicons = browser.$('#subscriberPage').$('.bottomRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('path');
								var totalcount=0;
								for (let i = 0; i < allsuspendedicons.length; i++) {
								if(allsuspendedicons[i].getAttribute('d')=='M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z')
									{totalcount++;}
	  							}
								return totalcount;
						}
	get blankSpace() {return browser.$('.section-title');}
	get tableViewComfortable(){return browser.$('#header-action-menu').$('.MuiList-root').$('li=Comfortable');}
	get tableViewCozy(){return browser.$('#header-action-menu').$('.MuiList-root').$('li=Cozy');}
	get tableViewCompact(){return browser.$('#header-action-menu').$('.MuiList-root').$('li=Compact');}
		tableView(parentelement) {return parentelement.$('.MuiSvgIcon-root');}
		
	get emptyTable(){return browser.$('//*[@id="subscriberPage"]/div[2]');}
	get selectFirstSubscriber(){ return browser.$('//*[@id="subscriberPage"]/div/div[1]/div[1]/div/div/div/div[2]/div/div/div[3]');}
	get selectSecondSubscriber(){ return browser.$('//*[@id="subscriberPage"]/div/div[1]/div[1]/div/div/div/div[2]/div/div/div[10]');}
	get allsubscribersData(){return browser.$('.bottomRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('p');}
	get dotMenu(){ return browser.$('.bottomRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$('.MuiTableCell-root');}
	get dotMenuButton(){ return browser.$('.bottomRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$('.MuiTableCell-root').$('button');}
	get menuItemEmail(){ return browser.$('.MuiListItemText-primary=Message Subscriber');}
	get menuItemTicket(){return browser.$('.popover-menu-item=Ticket');}
	get servicedeskForm(){return browser.$('.MuiDrawer-paperAnchorDockedRight');}
	get servicedeskFormHeader(){return browser.$('.MuiTabs-flexContainer').$('button');}
	get headerNoOfRecords(){return browser.$('.section-heading').getText();}
	get sortColumnIndicatorFlag(){return browser.$('.MuiTableSortLabel-root');}
	get colCustomerIdHeader(){return browser.$('p=Customer ID');}
	//get totalcount() {return browser.$('p*=Showing');}//get total record	
	
	/**Additional Info*/
	get btnAdditionalInfo(){return browser.$('//*[@id="SummaryTabs"]/div[1]/div/div/button[3]');}
	get setupDate(){return browser.$('[name ="setup_date"]');}
	get operatingSystem(){return browser.$('[name ="O/S"]');}
	get allOSListItems(){return browser.$('//*[@id="menu-O/S"]').$$('li');}
	    selectOSItem(itemName){return browser.$('//*[@id="menu-O/S"]').$('li='+itemName);}
	get source(){return browser.$('[name ="Source"]');}
	get sourceDetails(){return browser.$('[name ="Source Details"]');}
	get btnSaveTopMenu(){return browser.$('.settings-drawer-wrapper').$('.drawer-footer').$('span=Save');}
	get btnCloseTopMenu(){return browser.$('.settings-drawer-wrapper').$('[data-testid="CloseIcon"]');}
	get source(){return browser.$('[name ="Source"]');}
	get sourceAllListItem(){return browser.$('//*[@id="menu-Source"]').$$('li');}
	    isSourceItemExist(itemName){return browser.$('//*[@id="menu-Source"]').$('li='+itemName);}
		selectSourceItem(itemName){return browser.$('/html/body/div[2]/div[3]').$('li='+itemName);}
	get popSourceInput(){return browser.$('.MuiDialogContent-root').$('[name ="Source"]');}
	get popbtnSave(){return browser.$('.MuiDialogActions-root').$('button=Save');}

	get popRequiredFieldMsg(){return browser.$('/html/body/div[2]/div[3]/div/div[1]/div/p/span');}
	get btnSaveAdditionalDetails(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div/form/div[2]/span');}

	get sourceDetailsValidation(){return browser.$('span=Source Details must be alphanumeric, can contain spaces')}

	
	get btnAddEquipmentLog(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[2]/div[1]/div[2]/div/div/div[2]/div[1]/div[2]');}
	get popUpParent(){return browser.$('[role="dialog"]');}
	get selectFirstEquipmentItem(){return this.popUpParent.$('tbody').$$('tr')[0];}
	get btnaddAndConfigure(){return browser.$('/html/body/div[2]/div[3]/div/div/div/div[2]/div/span');}
	get btnCloseUpperTab(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[6]/div/div[1]/div/div[2]/button');}
	get btnEquipmentFilter(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[5]/div/div[2]/div/div[1]/div/div[1]/div/div[7]');}
	get activityLogTypeText(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[5]/div/div[2]/div/div[2]/div/div[1]/div/div/div/div/div[2]/div/div/div[3]')}
	get openFirstRecord(){return browser.$('//*[@id="subscriberPage"]/div/div[1]/div[1]/div/div/div/div[2]/div/div/div[3]');}
	get goToLogsUsingTransaction(){return browser.$('/html/body/section/div/div[2]/div[2]/main/div[4]/div/div[2]/div[1]/div/div/button[3]');}
	get equipmentFromPopUp(){return this.popUpParent.$('.MuiDialogContent-root').$('h6');}
	get addedEquipmentDetails(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[6]/div/div[2]/div/div[2]/div/div[3]/div/div[2]/div[2]/div[1]/div/div/div/div/div[2]/div').$$('.MuiTypography-root');}
	get closePopUp(){return this.popUpParent.$('[data-testid="CloseIcon"]');}
	/**top menu */
	get btnAppIcon(){return browser.$('[data-testid="AppsIcon"]');}
	get btnMarketingFromMenu(){return browser.$('li=Marketing');}
	get displaySourceAndSourceDetails(){return browser.$('[name ="flag_displaysource"]');}


    open() {
        super.open('login');
		//utils.clearLocalStorage();
    }
    
    submit() {
        this.form.submitForm();
    }
}
module.exports = new searchPage();
