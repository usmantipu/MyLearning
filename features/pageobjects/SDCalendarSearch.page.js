// serviceDesk.page.js
"use strict";
var Page = require('./page')
var Utils = require('../support/utils');

class SDcalendarSearchPage extends Page{
	

	get subscribersmenu()  { return browser.$('.nav-icon=headset_mic'); }
	get serviceDeskmenu() { return browser.$('[aria-label="Service Desk"]'); }
	get serviceDeskRibbon() {return browser.$('.section-title');}
	get ticketTable () {return browser.$('.px-4').$('.bottomRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('.text-truncate');}
	get restoreDefaultColumns () {return browser.$('button=Restore Defaults');}
	
	get allHeaders () { return browser.$('.px-4').$('.topRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('p');}

	get allColumnsData() {return browser.$('.px-4').$('.bottomRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('.MuiTableCell-root');}
	get allColumnsTextData() {return browser.$('.px-4').$('.bottomRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('p');}

	get columnsList () {return browser.$('.MuiDialogContent-root').$('.MuiGrid-container').$$('.MuiGrid-item');}

	get isColumnSortDesc () {return browser.$('.MuiTableSortLabel-iconDirectionDesc');}
	get isColumnSortAsc () {return browser.$('.MuiTableSortLabel-iconDirectionAsc');}

	disableAllColumns () { var allColumns = browser.$('.MuiDialogContent-root').$('.MuiGrid-container').$$('.MuiGrid-item');

				for  (var i = 0; i < allColumns.length; i++) {
					var columns = allColumns[i].$$('.MuiFormControlLabel-root');

					for  (var j = 0; j < columns.length; j++) {
						if (columns[j].$('.Mui-checked').isExisting()) {
							console.log("...in page object.... for j loop: "+columns[j].getText());
							columns[j].click();
							console.log("disabled: "+columns[j].getText());
						}
							
					}
				}
				// return null;
	}

	get closeBtnOnChooseColumn () {return browser.$('.MuiDialogActions-root').$('button=Close');} 

	get dateAddedOnColumnPopup () {
			return browser.$('.MuiDialogContent-root').$('.MuiGrid-item').$$('.MuiFormControlLabel-root')[2].$('.MuiSwitch-root').$('.Mui-checked');
	}
	
	get dateAddedOption () {
			return browser.$('.MuiDialogContent-root').$('.MuiGrid-item').$$('.MuiFormControlLabel-root')[2].$('.MuiSwitch-root');
	}
	
    statusColumn(filterStatus) {var alldivs = browser.$('.px-4').$('.bottomRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('.text-truncate');
    // statusColumn(filterStatus) {var alldivs = browser.$('.px-4').$('.bottomRightGrid').$$('.text-truncate');
	console.log('verifying status :' + filterStatus);						
	for (var i=0; i<20;i++)
							{
								//console.log('index is : '+ i +' and value is '+ alldivs[i].getText());	
								if(alldivs[i].getText().includes(filterStatus))
								{
								 	//element = alldivs[i].getText();
									 console.log('page extracted data is :' + alldivs[i].getText());
									 return alldivs[i].getText();
								}
							}
					}
    priorityColumn(priorityOption) {var alldivs = browser.$('.px-4').$('.bottomRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('.text-truncate');
    // statusColumn(filterStatus) {var alldivs = browser.$('.px-4').$('.bottomRightGrid').$$('.text-truncate');
	//console.log('verifying priority :' + priorityOption);						
	for (var i=0; i<20;i++)
							{
								//console.log('index is : '+ i +' and value is '+ alldivs[i].getText());	
								if(alldivs[i].getText().includes(priorityOption))
								{
								 	//element = alldivs[i].getText();
									 console.log('page extracted data is :' + alldivs[i].getText());
									 return alldivs[i].getText();
								}
							}
					}
    getDateInTicketTable(dateToVerify) {var alldivs = browser.$('.px-4').$('.bottomRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('.text-truncate');
	console.log('verifying date as :' + dateToVerify);
	console.log("all div length is: " + alldivs.length);
	for (var i=0; i<alldivs.length;i++)
							{
								//console.log('index is : '+ i +' and value is '+ alldivs[i].getText());	
								if(alldivs[i].getText().includes(dateToVerify))
								{
								 	//element = alldivs[i].getText();
									 console.log('date found as :' + alldivs[i].getText());
									 return alldivs[i].getText();
								}
							}
							return false;
					}
	ticketTableHeader(colname) {var allcols = browser.$('.px-4').$('.topRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('.MuiTableCell-root');	
	//console.log('looking for :' + colname);						
	for (var i=0; i<allcols.length;i++)
							{
								//console.log('index is : '+ i +' and value is '+ allcols[i].getText());	
								if(allcols[i].getText().includes(colname))
								{										
										console.log('page extracted data is :' + allcols[i].getText());
										return allcols[i].getText();
								}
							}
					}

	ticketTableHeaderColID(colname) {var allcols = browser.$('.px-4').$('.topRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('.MuiTableCell-root');
	console.log('looking for column :' + colname + " and allcols length is: "+allcols.length);

	for (var i=0; i<allcols.length;i++)
							{
								console.log('index is : '+ i +' and value is '+ allcols[i].getText());	
								if(allcols[i].getText().includes(colname))
								{										
										// console.log('Column ID is :' + allcols[i].getText());
										console.log(i);
										return i;
								}
							}
					}
	
	columnText(colID) {return browser.$('.px-4').$('.topRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('.MuiTableCell-root')[colID].$('.MuiTypography-root');
					// var cell = allcols;
					// return cell.getText();
	}

	checkSortingOnColumn(colID, sort) {var allcols = browser.$('.px-4').$('.topRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('.MuiTableCell-root');
	console.log('looking for column :' + colID + " and "+sort);
	

	// for (var i=0; i<allcols.length;i++)
	// 						{
								// console.log('index is : '+ i +' and value is '+ allcols[i].getText());
								var i = 0;
								if (sort == "Asc")
								{																
										console.log("in ASC");

										if (allcols[colID].$('.MuiTableSortLabel-iconDirectionAsc').isExisting()== true){
											console.log("is existing = yes");
											return true;
										}
										

										else 
										{

											allcols[colID].click();
										}
								}
								if (sort == "Desc")
								{
									console.log("in DESC");

									// while (allcols[colID].$('.MuiTableSortLabel-iconDirectionDesc').isExisting()=== false) {
										
									// 	allcols[colID].click();
									// 	console.log("header clicked in DESC");
									// 	i++;
									// 	console.log("iternation: "+i);
										
									// }
									
									if (allcols[colID].$('.MuiTableSortLabel-iconDirectionDesc').isExisting()== true) {
										console.log("is existing = yes");
										return true;
									}

									else 
									{

										// allcols[colID].click();
										// console.log("else column clicked in DESC");
										allcols[colID].click();
									}

								}

								// if(allcols[i].getText().includes(colname))
								// {										
								// 		// console.log('Column ID is :' + allcols[i].getText());
								// 		console.log(i);
								// 		return i;
								// }
							// }
					}

	firstRowContentsOfCol(colIndex) {var alldivs = browser.$('.px-4').$('.bottomRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('.text-truncate');
	// statusColumn(filterStatus) {var alldivs = browser.$('.px-4').$('.bottomRightGrid').$$('.text-truncate');
	console.log('checking contents at :' + colIndex);
	return alldivs[colIndex];
	// for (var i=0; i<20;i++)
	// 						{
	// 							console.log('index is : '+ i +' and value is '+ alldivs[i].getText());	
	// 							if(alldivs[i].getText().includes(priorityOption))
	// 							{
	// 									//element = alldivs[i].getText();
	// 									console.log('page extracted data is :' + alldivs[i].getText());
	// 									return alldivs[i].getText();
	// 							}
	// 						}
					}
		
	get blankSpace(){return browser.$('.section-title');}
	get searchFilters(){return browser.$('.sort-filters =All Technicians');}
		searchFilterDropdown(filter){return browser.$('.header-icon-dropdown-item='+filter);}
	get btnAll(){return browser.$('.sort-filters=All')}
	get btnPending(){return browser.$('.sort-filters=Pending');}
	get btnOpen(){return browser.$('.sort-filters=Open');}
	get btnResolved(){return browser.$('.sort-filters=Resolved');}
	get btnOthers(){return browser.$('.sort-filters=Others');}
	
		btnOthersDropdown(status){return browser.$('.popover-menu-item='+status);}
	get btnHigh(){return browser.$('.text-high=High');}
	get btnNormal(){return browser.$('.text-normal=Normal');}
	get btnLow(){return browser.$('.text-low=Low');}
	get rangePickerParent() {return browser.$('[vispdata-testid="ticket-calendar-range-picker-calendar-container"]');}
	get btnTimePeriodFilter(){return browser.$('#input-with-icon-adornment');}
	get btnAllTimePeriodFilter(){return browser.$('.rdrDateRangePickerWrapper').$('.rdrStaticRange=All');}
	get timePeriodFilterAsToday(){return this.rangePickerParent.$('.rdrStaticRange=Today');}
	get timePeriodFilterAs7Days(){return browser.$('.rdrDateRangePickerWrapper').$('.rdrStaticRange=Last 7 Days');}
	get timePeriodFilterAs30Days(){return browser.$('.rdrDateRangePickerWrapper').$('.rdrStaticRange=Last 30 Days');}
	get timePeriodFilterAs90Days(){return browser.$('.rdrDateRangePickerWrapper').$('.rdrStaticRange=Last 90 Days');}
	get timePeriodFilterAs360Days(){return browser.$('.rdrDateRangePickerWrapper').$('.rdrStaticRange=Last 360 Days');}
	get inputCustomDays () {return browser.$('.rdrInputRanges').$$('.rdrInputRange')[0].$('.rdrInputRangeInput');}
	get btnApplyTimePeriod(){return browser.$('[vispdata-testid="ticket-calendar-range-picker-apply-button"]');}
	get tablServiceDesk(){return browser.$('.sort-filters');}
	// get tablServiceDeskRowOne(){return browser.$('//div[@class="ReactVirtualized__Grid bottomRightGrid"]/div[@role="rowgroup"]/div[3]');}
	get tablServiceDeskRowOne(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[1]/div[1]/div/div/div/div[2]/div/div/div[1]');}
	get tablServiceDesktTicketType(){return browser.$('//div[@class="ReactVirtualized__Grid bottomRightGrid"]/div[@role="rowgroup"]/div[4]');}
	get tablServiceDesktTicketSummary(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[1]/div[1]/div/div/div/div[2]/div/div/div[5]');}
	get tablRowcount(){var rowCount = browser.$('.table-box').element('.div-table-row');
						return rowCount.value.length-1;}
	get totalcount() {return browser.$('p*=Showing');}//get total record
	get hamburgerMenu(){return browser.$('.topRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$('div');}
	get chooseColumns(){return browser.$('.popover-menu-item=Choose Columns');}
	get chooseColumnsOption(){return browser.$('//*[@id="header-action-menu"]/div[3]/ul/li[2]');}
	get chooseColumnISPId(){return browser.$('//*[@id="body"]/div[8]/div/div[1]/div/div/div[1]/div[11]');}
	get chooseColumnDateAdded(){return browser.$('//*[@id="alert-dialog-description"]/label[9]');}
	get chooseColumnDetailID(){return browser.$('//*[@id="body"]/div[8]/div/div[1]/div/div/div[1]/div[7]');}
	get chooseColumnPhone(){return browser.$('//*[@id="alert-dialog-description"]/label[10]');}
	get getChooseColumnFromList(){return browser.$('li*=Choose Columns')}
	get chooseColumnPriority(){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root=Priority').$('.MuiButtonBase-root');}
	get chooseColumnSummary(){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root=Summary').$('.MuiButtonBase-root');}
	get chooseColumnType(){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root=Type').$('.MuiButtonBase-root');}
	get chooseColumnPriorityEnabled(){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root=Priority').$('.Mui-checked');}
	get chooseColumnSummaryEnabled(){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root=Summary').$('.Mui-checked');}
	get chooseColumnTypeEnabled(){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root=Type').$('.Mui-checked');}
	
	get btnDone() {return browser.$('button=Done');}
	get btnClose() {return browser.$('button=Close');}
	get tableViewComfortable(){return browser.$('.MuiListItem-button*=Comfortable');}
	get tableViewCozy(){return browser.$('.MuiListItem-button*=Cozy');}
	get tableViewCompact(){return browser.$('.MuiListItem-button*=Compact');}
	tableView(parentelement) {return parentelement.$('.MuiSvgIcon-root');}
	get tableHeader(){return browser.$('.div-table-row');}
	get loader(){return browser.$('.sub-loader');}
	get dockHeader(){return browser.$('.eq-head-name');}
	get docTicketId(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[6]/div/div[2]/div/div/div/button[1]');}
	//get docTicketFollower(){return browser.$('#my-followers');}
	get docTicketFollower(){return browser.$('//*[@id="followers"]/button');}
	ticketFollowerDropdown(value){return browser.$('span='+value);}
	//get ticketSummary(){var id = browser.$$('.col-sm-6').getAttribute('label','for');//Picking all elements with matching class name

	//						for (var i=0; i<id.length; i++){
	//							var j = id[i];
	//							if (!j){//skipping in case of null
	//								continue;
	//							}else{
	//								if(j.match(/summary.*/)){
	//								return browser.$('#'+ id[i]);
	//								}
	//							}
	//							
	//						}
	//					}
	get ticketSummary(){return browser.$('[name="summary"]');}
	//get ticketType(){var id = browser.$$('.ticketTypeMenu').getAttribute('label','for');
	
	//					for (var i=0; i<id.length; i++){
	//							var j = id[i];
	//							if (!j){
	//								continue;
	//							}else{
	//								if(j.match(/undefined-Type.*/)){
	//								return browser.$('#'+ id[i]);
	//								}
	//							}
	//							
	//						}
	//				}//*[@id="app-inner"]
    ticketType(flow){
		if (flow === 'add'){
			return browser.$('[name="ticketType"]');
		}else{
			return browser.$('/html/body/section/div/div[2]/div[2]//main/div[6]/div/div[3]/div/div[1]/div/div[3]/div/div/div/div/input');
		}
		}
	get addTicketType(){return browser.$('[name="ticketType"]').$('input');}
	ticketTypeInput(parent){return parent.$('input');}	
	get ticketTypeValue(){return browser.$('[name="ticket_type_id"]');}				
		ticketTypeDropdown(value){return browser.$('.popover-menu-item='+value);}
	get	ticketTypeList(){return browser.$('/html/body/div[2]');}
	get btn_popupOk(){return browser.$('button=Yes');}
	get ticketStatus(){return browser.$('[name="status"]');}
	//get ticketAssignee(){var id = browser.$$('.col-sm-6').getAttribute('label','for');//Picking all elements with matching class name
	//						for (var i=0; i<id.length; i++){
	//								var j = id[i];
	//								if (!j){
	//									continue;
	//								}else{
	//									if(j.match(/undefined-undefined-AssignTo.*/)){
	//									return browser.$('#'+ id[i]);
	//									}
	//								}
	//								
	//							}
	//					}
	get ticketAssignee(){return browser.$('#mui-component-select-technician_id');}
		ticketAssigneeDropdown(value){return browser.$('li='+value);}
	get ticketFollower(){return browser.$('.select-followers');}
		ticketFollowerDropDown(value){return browser.$('.Select-input='+value);}
	btnSave(flow){ var allSaveButtons =  browser.$$('button=Save');
					if(flow==='add' )
						return allSaveButtons[0];
					else
						return allSaveButtons[1];
				}
	get btnSaveNew(){return browser.$('button=Save');}
	get btnRestore(){return browser.$('button=Restore');}
	get ticketContinueAnyway(){return browser.$('button=Continue Anyway');}
	get ticketTypeCancel(){return browser.$('.MuiDialog-paper').$('button=Cancel');}
//	get ticketStatusFromDocker(){return browser.$('#mui-component-select-status');} //ui-upgrade
	get ticketStatusFromDocker(){return browser.$('//main/div[2]/div/form/div[2]/div[1]/div/div[5]/div/div/div');}
	get ticketResolvedStatusFromDocker(){
		var allinputs = browser.$$('.MuiInputBase-input');
		for (let i = 0; i < allinputs.length; i++) {
			if(allinputs[i].getValue()=='Resolved')
			return allinputs[i];
		  }
	}

	get ticketStatusField(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[6]/div/div[3]/div/div[1]/div/div[4]/div/div/div/div').$('input');}
	get ticketPriority(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[6]/div/div[3]/div/div[1]/div/div[1]/div[1]').$('svg');}
	get technicianFilter(){return browser.$('.sort-filters');}
		technicianFilterDropdown(value){return browser.$('li='+value);}
	get btnNotes(){return browser.$('button=Messages');}
	get btnActivity(){return browser.$('span=Add Note');}
	get commentBox(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[6]/div/div[3]/div/div/div/div[2]/div/textarea');}
	get btnPost(){return browser.$('button=Post');}
		getPostedComment(comment){return browser.$('div*='+comment);}
	get confirmationMsg(){return browser.$('.MuiAlert-message');}
	get saveConfirmationMsg(){return browser.$('div=Your changes are saved successfully');}
	get btnAddTicket(){return browser.$('.MuiPaper-root').$('[aria-label="More"]');}
	get menuItemTicket(){return browser.$('.header-icon-dropdown-item=Open Ticket');}
	get topMenuItemTicket(){return browser.$('li=Open Ticket');}
	get btnCustomerName(){ return browser.$('[name="customerId"]');}
	get searchName(){return this.btnCustomerName.$('input');}
	 customerNameDropdown(firstName){return browser.$('span='+firstName);}
	get autocompleteDialouge() {return browser.$('.MuiAutocomplete-popper').$('span');}
	/*Calendar view*/
	get listTabOnServiceDesk(){return browser.$('button=List');}

	get changeTicketMsg(){return browser.$('.MuiDialog-container').$('.MuiDialogContent-root').$('h6');}
	get cancelTicketType(){return browser.$('.MuiDialog-container').$('.MuiDialogActions-root').$('button=Cancel');}
	


	// TA-232
	get ticketIDOnTicketDock () {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[6]/div').$('.MuiToolbar-gutters').$('.MuiTabs-flexContainer').$$('.MuiButtonBase-root')[0];}
	// get ticketTypeOnTicketDock () {return browser.$('.css-1smqi96').$$('.MuiGrid-root')[2].$('.MuiFormControl-root').$('.MuiInputBase-input');}
	get ticketTypeOnTicketDock () {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[6]/div/div[3]/div/div[1]/div/div[3]/div/div/div/div').$('.MuiInput-input');}
	get ticketSummaryOnTicketDock () {return browser.$('[name="summary"]');}
	get threeDotMenu () {return browser.$('.px-4').$('.bottomRightGrid').$('[aria-label="More"]');}
	get deleteOption () {return browser.$$('.MuiMenu-list')[1].$('li=Delete');}
	get yesButtonForDelete (){return browser.$('button=Yes');}
	get confirmationMsg(){return browser.$('.MuiAlert-message');}
	get sortIconOnTicketID(){return browser.$('.MuiTableSortLabel-icon');}

	//TA-256
	get customFiledValue(){return browser.$('[name="ticketCustomFields.0.field_value"]');}
	//TA-256
	
	// MuiAlert-message
	// Deleted Successfully
	get btnEditServiceContact(){return browser.$('[aria-label="edit service contact"]');}
	get contactPhone(){return browser.$('[name="contactNumbers.0"]');}
	get scheduleFiled(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[6]/div/div[3]/div/div[1]/div/div[5]/div/div/div').$('input');}
	get closeOpenedTicketDock(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[6]/div/div[1]/button[4]');}

	// get closeNewTicketDock(){return browser.$$('[aria-label="Close"]')[0];}
	get closeNewTicketDock(){return browser.$$('//*[@id="app-inner"]/div[2]/div[2]/main/div[6]/div/div[1]/button[3]');}

	/**top menu */
	get btnAppIcon(){return browser.$('[data-testid="AppsIcon"]');}
	get btnTicketTypes(){return browser.$('li=Ticket Types');}
	get btnAdd(){return browser.$('[data-testid="AddCircleIcon"]');}
	//TA-256
	get alldefiniedTickets(){return browser.$('.settings-drawer-wrapper').$$('.MuiListItem-root');}
	get allTicketSwitches(){return browser.$$('.MuiSwitch-input');}
	get customFiledsLink(){return browser.$('a=Custom Fields');}
	get customFiledInput(){return browser.$('[name="customFields.0.label"]');}
	get addCustomFiledInput(){return browser.$('[data-testid="AddCircleOutlineIcon"]');}
	get closeCustomField(){return browser.$('.MuiDrawer-paperAnchorRight*=Custom Fields').$('[data-testid="CloseIcon"]');}
	get customFiledSave(){return browser.$('.MuiDrawer-paperAnchorDockedRight*=Custom Fields').$('button=Save');}
	get allActionsLink(){return browser.$('a=adding, editing, resolving, or closing');}
	//TA-256
	get settingTicketType(){return browser.$('[name="ticket_type_desc"]');}
	get settingTicketsummary(){return browser.$('[name="ticket_type_summary"]');}
	get appointHrs(){return browser.$('//*[@id="mui-component-select-hrs"]');}
	getListItem(itemName){return browser.$('li='+itemName);}
	get appointMins(){return browser.$('//*[@id="mui-component-select-mins"]');}
	get btnSaveSettings(){return browser.$('.MuiDrawer-paperAnchorDockedRight*=Add Ticket Types').$('button=Save');}
	get btnAddTicketClose(){return browser.$('.MuiDrawer-paperAnchorDockedRight*=Edit Ticket Types').$('[aria-label="Close"]');}
	get btnCloseSettings(){return browser.$('.settings-drawer-wrapper').$('[aria-label="Close"]');}


	open() {
        super.open('login');
		//Utils.clearLocalStorage();
		
    }
	
	submit() {
        this.form.submitForm();
    }
    
	
} 

module.exports = new SDcalendarSearchPage();