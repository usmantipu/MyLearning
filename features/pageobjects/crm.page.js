const utils = require('../support/utils');
"use strict";
var Page = require('./page')

class crm extends Page {
    get ticketsTab() { return browser.$('p=Tickets'); }
	get crmMenu() { return browser.$('[aria-label="CRM"]'); }
    get tabTickets(){return browser.$('button=List');}
    get btnAll(){return browser.$('button=All');}
    get btnResolved(){return browser.$('button=Resolved');}
    get btnPending(){return browser.$('button=Pending');}
    get btnOpen(){return browser.$('button=Open');}
    get btnOthers(){return browser.$('button=Others');}
    get totalcount() {return browser.$('p*=Showing');}//get total record
    get hamburgerMenu(){return browser.$('.topRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$('div');}
    get getChooseColumnFromList(){return browser.$('li*=Choose Columns');}
    get restoreDefaultColumns () {return browser.$('button=Restore Defaults');}
    get chooseColumnPriority(){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root=Priority').$('.MuiButtonBase-root');}
	get chooseColumnSummary(){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root=Summary').$('.MuiButtonBase-root');}
	get chooseColumnType(){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root=Type').$('.MuiButtonBase-root');}
	get chooseColumnPriorityEnabled(){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root=Priority').$('.Mui-checked');}
	get chooseColumnSummaryEnabled(){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root=Summary').$('.Mui-checked');}
	get chooseColumnTypeEnabled(){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root=Type').$('.Mui-checked');}
	get chooseColumnAppUserEnabled(){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root=Assign Appuser').$('.Mui-checked');}
	get chooseColumnAppUser(){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root=Assign Appuser').$('.MuiButtonBase-root');}
    get chooseColumnDateAddedEnabled(){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root=Date Added').$('.Mui-checked');}
	get chooseColumnDateAdded(){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root=Date Added').$('.MuiButtonBase-root');}
	get chooseColumnStatusEnabled(){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root=Status').$('.Mui-checked');}
	get chooseColumnStatus(){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root=Status').$('.MuiButtonBase-root');}
	get btnDone() {return browser.$('button=Done');}
	get btnClose() {return browser.$('button=Close');}
    get dockHeader(){return browser.$('.eq-head-name');}
    get loader(){return browser.$('.sub-loader');}
    get ticketSummaryOnTicketDock () {return browser.$('[name="summary"]');}
	get ticketGridParent(){return browser.$('.react-grid-item*=Tickets');}
    get tablServiceDeskRowOne(){return this.ticketGridParent.$('.bottomRightGrid').$('.MuiTypography-root');}
    get ticketSummary(){return browser.$('[name="summary"]');}
    get docTicketId(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[2]/div/div/div/button[1]');}
    get technicianFilter(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[3]/div[2]/div[1]/div/div[1]/button');}
		technicianFilterDropdown(value){return browser.$('li='+value);}
    get tableCRM(){return browser.$('.sort-filters');}
    get btnNotes(){return browser.$('button=Messages');}
	get btnActivity(){return browser.$('span=Add Note');}
	get commentBox(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div/div/div/div[2]/div/textarea');}
	get btnPost(){return browser.$('button=Post');}
		getPostedComment(comment){return browser.$('div*='+comment);}
    get confirmationMsg(){return browser.$('.MuiAlert-message');}
    get ticketIDOnTicketDock () {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[6]/div').$('.MuiToolbar-gutters').$('.MuiTabs-flexContainer').$$('.MuiButtonBase-root')[0];}
    get ticketTypeOnTicketDock () {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div/div[1]/div/div[3]/div/div/div/div').$('input');}
	get btnCustomerName(){ return browser.$('[name="customerId"]');}
	get searchName(){return this.btnCustomerName.$('input');}
	 customerNameDropdown(firstName){return browser.$('span='+firstName);}
	get autocompleteDialouge() {return browser.$('.MuiAutocomplete-popper').$('span');}
	get addTicketType(){return browser.$('[name="ticketType"]').$('input');}
	ticketTypeInput(parent){return parent.$('input');}	
	get ticketTypeValue(){return browser.$('[name="ticket_type_id"]');}				
		ticketTypeDropdown(value){return browser.$('.popover-menu-item='+value);}
	get	ticketTypeList(){return browser.$('/html/body/div[2]');}
	get ticketContinueAnyway(){return browser.$('button=Continue Anyway');}
	get docTicketFollower(){return browser.$('//*[@id="followers"]/button');}
	ticketFollowerDropdown(value){return browser.$('span='+value);}
	get closeNewTicketDock(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[1]/button[4]');}
	get threeDotMenu () {return browser.$('.bottomRightGrid').$('[aria-label="More"]');}
	get deleteOption () {return browser.$('//*[@id="row-action-menu"]/div[3]/ul/span/li');}//.$$('.MuiMenu-list')[1]
	get yesButtonForDelete (){return browser.$('button=Yes');}
	get sortIconOnTicketID(){return browser.$('.MuiTableSortLabel-icon');}
	get btnHigh(){return browser.$('button=High');}
	get btnNormal(){return browser.$('button=Normal');}
	get btnLow(){return browser.$('button=Low');}
	get dashboardMenu() { return browser.$('[aria-label="Dashboard"]'); }
	get ticketIdColumn(){return browser.$('p=Ticket ID');}
	get newlyaddedTicketID(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[2]/div/div/div/button[1]');}
	get ticketDocAssign(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div/div[1]/div/div[1]/div[3]/div/span/button');}
	get saveOpenedTicket(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[4]/div[2]/div/div[2]/span/button');}
	get closeOpenedTicket(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[1]/button[4]');}
	selectTicketAssignee(value){return browser.$('.MuiListItemText-root='+value);}
	get crMTableRowOneAppUser(){return browser.$('.bottomRightGrid').$$('.MuiTypography-root')[2];}
	get btnFull(){return browser.$('.MuiListItemText-root=Full');}
	get btnTicketMenu(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[3]/div[1]/div/span/button[2]');}
	get filterOptions(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[3]/div[2]/div[1]/div/div[3]/div/div');}
	get btnReset(){return browser.$('button=Reset');}
	get btnTodayFilter(){return browser.$('//*[@id="simple-popover"]/div[3]/main/div[1]/div[1]/div[1]/button[1]');}
	get btnApplyFilter(){return browser.$('//*[@id="simple-popover"]/div[3]/main/div[2]/button[2]');}
	/**top menu */
	get btnAddTicket(){return browser.$('.MuiPaper-root').$('[aria-label="More"]');}
	get topMenuItemTicket(){return browser.$('li=Open Ticket');}
	get somethingWrongs(){return browser.$('h3=Sorry, something went wrong. Please try again.');}



	
    ticketType(flow){
		if (flow === 'add'){
			return browser.$('[name="ticketType"]');
		}else{
			return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div/div[1]/div/div[3]/div/div/div/div/input');
		}
	}
    firstRowContentsOfCol(colIndex) {var alldivs = browser.$('.px-4').$('.bottomRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('.text-truncate');
	                                    console.log('checking contents at :' + colIndex);
	                                    return alldivs[colIndex].getText();
	}
    ticketTableHeaderColID(colname) {var allcols = browser.$('.px-4').$('.topRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('.MuiTableCell-root');
	for (var i=0; i<allcols.length;i++)
							{
								if(allcols[i].getText().includes(colname))
								{										
										return i;
								}
							}
	}
    statusColumn(filterStatus) {var alldivs = browser.$('.px-4').$('.bottomRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('.text-truncate');
	                            //console.log('verifying status :' + filterStatus);						
	                            for (var i=0; i<20;i++)
							        {
								        if(alldivs[i].getText().includes(filterStatus))
								        {
									        console.log('page extracted data is :' + alldivs[i].getText());
									        return alldivs[i].getText();
								        }
							}
	}
	btnSave(flow){ var allSaveButtons =  browser.$$('button=Save');
					if(flow==='add' )
						return allSaveButtons[0];
					else
						return allSaveButtons[1];
	}
	priorityColumn(priorityOption) {var alldivs = browser.$('.px-4').$('.bottomRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('.text-truncate');				
	for (var i=0; i<20;i++)
							{	
								if(alldivs[i].getText().includes(priorityOption))
								{
									 console.log('page extracted data is :' + alldivs[i].getText());
									 return alldivs[i].getText();
								}
							}
	}
	ticketTableHeader(colname) {var allcols = browser.$('.px-4').$('.topRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('.MuiTableCell-root');	
	for (var i=0; i<allcols.length;i++)
							{	
								if(allcols[i].getText().includes(colname))
								{										
										console.log('page extracted data is :' + allcols[i].getText());
										return allcols[i].getText();
								}
							}
	}

}
module.exports = new crm();