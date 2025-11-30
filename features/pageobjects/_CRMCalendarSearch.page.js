// _CRMCalendarSearch.page.js
"use strict";
var Page = require('./page')
var Utils = require('../support/utils');

class _CRMCalendarSearchPage extends Page{	

	
	get CRM_Menu() { return browser.$('[aria-label="CRM"]'); } 
	
	get ticketTable () {return browser.$('.px-4').$('.bottomRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('.text-truncate');}
	
	get restoreDefaultColumns () {return browser.$('button=Restore Defaults');} 
	
	 
	get allHeaders () { return browser.$('.px-4').$('.topRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('p');}

	get fullViewOfTicketGrid () {return browser.$('span=Full');} 

	 
	get allColumnsData() {return browser.$('.px-4').$('.bottomRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('.MuiTableCell-root');}
	
	 
	get allColumnsTextData() {return browser.$('.px-4').$('.bottomRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('p');}

	get isColumnSortDesc () {return browser.$('.MuiTableSortLabel-iconDirectionDesc');} 
	get isColumnSortAsc () {return browser.$('.MuiTableSortLabel-iconDirectionAsc');} 
	get closeBtnOnChooseColumns() {return browser.$('.MuiDialogActions-root').$('button=Close');} 	
	
	//firstRowAtColumn (index){return this.ticketGridParent.$('.bottomRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('.text-truncate')[index];};
	firstRowAtColumn (){return this.ticketGridParent.$('.bottomRightGrid').$('.MuiTypography-root');}
	
	columnStatus (columnName) {		
		let column;
		let columnLabel;		
			column = this.columnElement(columnName);
			columnLabel = column.$('.MuiTypography-root').getText();
			// console.log("Column name was found as: "+columnLabel);

				if (column.$('.Mui-checked').isExisting()) {
					console.log("colum enabled");
					return true;					
				}		
				else {
					return false;
				}
	}

	columnRadioButton (columnName) { 
		
		let column;
		let columnLabel;
		// for (var i = 0; i < columnList.length; i++)
		// {			
			column = this.columnElement(columnName);

			columnLabel = column.$('.MuiTypography-root').getText();
			
			if (columnLabel === columnName) {
				
					return column.$('.MuiButtonBase-root');	
						
			}	
		// }			
	}

	columnElement(value){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root='+value);} 

	
	getContents(colIndex, value) {var alldivs = this.ticketGridParent.$('.bottomRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('.text-truncate');
							for (var i=0; i<alldivs.length;i++)
							{
								// console.log('index is : '+ i +' and value is '+ alldivs[i].getText());	

								if(alldivs[i].getText()===value)
								{
										//element = alldivs[i].getText();
										console.log('added ticket # was found at index :' + i + ", as "+alldivs[i].getText());
										return true;
								}
							}
							return false;
	}

	
	get closeBtnOnChooseColumn () {return browser.$('.MuiDialogActions-root').$('button=Close');} 
	
	get dateAddedOnColumnPopup () {
			return browser.$('.MuiDialogContent-root').$('.MuiGrid-item').$$('.MuiFormControlLabel-root')[2].$('.MuiSwitch-root').$('.Mui-checked');
	}
	
	get dateAddedOption () {
			return browser.$('.MuiDialogContent-root').$('.MuiGrid-item').$$('.MuiFormControlLabel-root')[2].$('.MuiSwitch-root');
	}

	get ticketGridParent(){return browser.$('.react-grid-item*=Tickets');}
	ticketTableHeaderColID(colname) {var allcols = this.ticketGridParent.$('.topRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('.MuiTableCell-root');
	// console.log('looking for column :' + colname + " and allcols length is: "+allcols.length);
	for (var i=0; i<allcols.length;i++)
							{
								// console.log('index is : '+ i +' and value is '+ allcols[i].getText());	
								if(allcols[i].getText().includes(colname))
								{										
										// console.log('Column ID is :' + allcols[i].getText());
										// console.log(i);
										return i;
								}
							}
							return false;
					}
	
	columnText(colID) {return browser.$('.px-4').$('.topRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('.MuiTableCell-root')[colID].$('.MuiTypography-root');}


	 
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


	get btnAll(){return browser.$('.sort-filters=All')} 	
	get btnTimePeriodFilter(){return browser.$('#input-with-icon-adornment');} 	
	get todayCalendarFilterOption(){return browser.$('.rdrStaticRanges').$('span=Today');} 
	get yesterdayCalendarFilterOption(){return browser.$('.rdrStaticRanges').$('span=Yesterday');} 
	get thisWeekCalendarFilterOption(){return browser.$('.rdrStaticRanges').$('span=This Week');} 
	get lastWeekCalendarFilterOption(){return browser.$('.rdrStaticRanges').$('span=Last Week');} 
	get thisMonthCalendarFilterOption(){return browser.$('.rdrStaticRanges').$('span=This Month');} 
	get lastMonthCalendarFilterOption(){return browser.$('.rdrStaticRanges').$('span=Last Month');}
	get btnReset(){return browser.$('button=Reset');} 

	get inputDaysUptoToday () {return browser.$('.rdrInputRanges').$$('.rdrInputRange')[0].$('.rdrInputRangeInput');}  
	get inputDaysStartingToday () {return browser.$('.rdrInputRanges').$$('.rdrInputRange')[1].$('.rdrInputRangeInput');} 
	get applyBtnOnCalendar(){return browser.$('button=Apply');} 
	get totalcount() {return browser.$('p*=Showing');}//get total record 
	get noDataAvailable() {return browser.$('p*=No');}//get total record 
	
	 
	get menuThreeDotsForTickets () {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[3]/div[1]/div/span/button[2]');} 
	
	 
	get hamburgerMenu(){return browser.$('.topRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$('div');}
	get getChooseColumnFromList(){return browser.$('li*=Choose Columns')} 
	get btnDone() {return browser.$('button=Done');}
	get btnClose() {return browser.$('button=Close');}
	get ticketSummary(){return browser.$('[name="summary"]');} 

    ticketType(flow){
		if (flow === 'add'){
			return browser.$('[name="ticketType"]');
		}else{
			return browser.$('/html/body/section/div/div[2]/div[2]//main/div[6]/div/div[3]/div/div[1]/div/div[3]/div/div/div/div/input');
		}
		}
	
	get addTicketType(){return browser.$('[name="ticketType"]').$('input');} 

	get ticketNumber () {return browser.$('.MuiTabs-flexContainer').$('.mr-1');} 
	
	btnSave(flow){ var allSaveButtons =  browser.$$('button=Save');
					if(flow==='add' )
						return allSaveButtons[0];
					else
						return allSaveButtons[1];
				}
	get btnSaveNew(){return browser.$('button=Save');}
	get btnRestore(){return browser.$('button=Restore');}
	get btnAddTicket(){return browser.$('.MuiPaper-root').$('[aria-label="More"]');} 

	get topMenuItemTicket(){return browser.$('li=Open Ticket');} 
	
	get btnCustomerName(){ return browser.$('[name="customerId"]');} 
	get searchName(){return this.btnCustomerName.$('input');} 
	 customerNameDropdown(firstName){return browser.$('span='+firstName);}
	
	get autocompleteDialouge() {return browser.$('.MuiAutocomplete-popper').$('span');} 
	/*Calendar view*/
	get listTabOnServiceDesk(){return browser.$('button=List');}  

	get threeDotMenu () {return browser.$('.px-4').$('.bottomRightGrid').$('[aria-label="More"]');} 
	get closeOpenedTicketDock(){return browser.$('.docker-buttons').$('[aria-label="Close"]');} 
	get closeNewTicketDock(){return browser.$$('//*[@id="app-inner"]/div[2]/div[2]/main/div[6]/div/div[1]/button[3]');}

	open() {
        super.open('login');
		//Utils.clearLocalStorage();		
    }
	
	
	submit() {
        this.form.submitForm();
    }
    
	
} 

module.exports = new _CRMCalendarSearchPage();