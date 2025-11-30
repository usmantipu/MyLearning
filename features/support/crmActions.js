var crmPage = require('../pageobjects/crm.page');
var SubListPage = require('../pageobjects/subscriberlist.page');
var expect = require('chai').expect;

class crmActions {
    constructor(){
        this.comment;
		this.ticketUpdateInfoMessage = 'Saved Successfully';
		this.ticketID;
		this.ticketType;
		this.ticketSummary;
		this.priorityContent;
		this.summaryContent;
		this.typeContent;
		this.customfield;
		this.ticketAddStatus;
    }
	refreshIfSomeThingWrong()
	{
		if(crmPage.somethingWrongs.isExisting())
		{
			browser.refresh();
			browser.pause(4000);
		}
	}
    navigateToCrm() {
        browser.pause(5000);
		crmPage.crmMenu.waitForExist();
		crmPage.crmMenu.waitForDisplayed();
		crmPage.crmMenu.click();
		browser.pause(2000);
		console.log('I open crm');
    }
    goToTickets()
	{
		browser.pause(3000);
        crmPage.tabTickets.waitForDisplayed();
		crmPage.tabTickets.waitForClickable();
		crmPage.tabTickets.click();
		crmPage.btnAll.waitForClickable();
		crmPage.btnAll.click();		
		browser.pause(3000);
		crmPage.btnResolved.waitForClickable();
		if(crmPage.btnResolved.getAttribute('class').includes('active'))
		{
			crmPage.btnResolved.click();
			browser.pause(5000);
		}
	}
	scrollToTickets()
	{
		browser.pause(3000);
		crmPage.btnAll.waitForDisplayed();
		crmPage.btnAll.scrollIntoView();
	}
    getCRMListCount()
	{
		browser.pause(5000);
		crmPage.totalcount.waitForDisplayed();
		let total = crmPage.totalcount.getText();
		const myArray = total.split(' ');
		let position = myArray.indexOf("of") + 1;
		return myArray[position];
	}
    chooseColumnsToDisplay(priority, summary, type) {
		crmPage.btnAll.waitForDisplayed();
		crmPage.btnAll.waitForClickable();
		crmPage.btnAll.scrollIntoView();
		crmPage.btnAll.click();
		browser.pause(5000);
		// "Priority", "Summary", "Type"
		browser.pause(3000);
		priority = priority.replace(/['"]+/g, '');
		summary = summary.replace(/['"]+/g, '');
		type = type.replace(/['"]+/g, '');

		if(Number(this.getCRMListCount()) >0){
			crmPage.hamburgerMenu.waitForDisplayed();
			crmPage.hamburgerMenu.waitForClickable();
			crmPage.hamburgerMenu.click();
			browser.pause(2000);
			crmPage.getChooseColumnFromList.waitForClickable();
			crmPage.getChooseColumnFromList.click();
			crmPage.restoreDefaultColumns.waitForClickable();
			crmPage.restoreDefaultColumns.click();
							
				if (crmPage.chooseColumnPriorityEnabled.isExisting() === false){
					crmPage.chooseColumnPriority.waitForDisplayed();
					crmPage.chooseColumnPriority.click();
					browser.pause(2000);
				}

				if (crmPage.chooseColumnSummaryEnabled.isExisting() === false){
					crmPage.chooseColumnSummary.waitForDisplayed();
					crmPage.chooseColumnSummary.click();
					browser.pause(2000);
				}	
				if (crmPage.chooseColumnTypeEnabled.isExisting() === false){
					crmPage.chooseColumnType.waitForDisplayed();
					crmPage.chooseColumnType.click();
					browser.pause(2000);
				}
			}
			else{
				expect(1).is.eql(1);//no data is available
			}
			browser.pause(2000);
			crmPage.btnClose.waitForClickable();
			crmPage.btnClose.click();
			browser.pause(2000);
	}
    // "Priority", "Summary", "Type"
	getContentsOfFirstRow() {
		// let priorityColID = ServiceDeskPage.ticketTableHeaderColID("Priority");
		this.fullViewOfTicket();
		crmPage.tablServiceDeskRowOne.waitForDisplayed();
		// console.log("Priority Column index is: ", priorityColID);
		let summaryColID = crmPage.ticketTableHeaderColID("Summary");
		//console.log("summaryColID Column index is: ", summaryColID);
		let typeColID = crmPage.ticketTableHeaderColID("Type");
		//console.log("typeColID Column index is: ", typeColID);
		
		// this.priorityContent = ServiceDeskPage.firstRowContentsOfCol(priorityColID-2);
		// console.log("priorityContent in the table is: ", priorityContent);
		this.summaryContent = crmPage.firstRowContentsOfCol(summaryColID-2);
		//console.log("summaryContent in the table is: ", this.summaryContent);
		this.typeContent = crmPage.firstRowContentsOfCol(typeColID-2);
		this.ticketType = this.typeContent;
		this.ticketSummary = this.summaryContent;
		//console.log("typeContent in the table is: ", this.typeContent);
	}
	fullViewOfTicket()
    {
		//crmPage.ticketGridParent.scrollIntoView();
        crmPage.btnTicketMenu.click();
        crmPage.btnFull.waitForDisplayed();
		crmPage.btnFull.click();
		browser.pause(5000);
		browser.keys(['\uE00C']);
    }
	resetTicketFilter()
    {
		browser.pause(1500);
		crmPage.filterOptions.waitForDisplayed();
        crmPage.filterOptions.click();
        crmPage.btnReset.waitForDisplayed();
		crmPage.btnReset.click();
		browser.pause(5000);
    }
	resetTodayTicketFilter()
    {
		browser.pause(1500);
		crmPage.filterOptions.waitForDisplayed();
        crmPage.filterOptions.click();
        crmPage.btnTodayFilter.waitForDisplayed();
		crmPage.btnTodayFilter.waitForClickable();
		crmPage.btnTodayFilter.click();
		crmPage.btnApplyFilter.waitForDisplayed();
		crmPage.btnApplyFilter.waitForClickable();
		crmPage.btnApplyFilter.click();
		browser.pause(5000);
    }
    waitForLoader(){
		
		do{ //Do-While to make sure dot loader is disappeared and rows are loaded based on selected status
				
			console.log('Records still loading...')
			browser.pause(2000);
			
		 }while (crmPage.loader.isDisplayed() === true)
		
	}
    selectFirstRecord(){
		this.waitForLoader();
		browser.pause(3000);
		crmPage.btnResolved.waitForDisplayed();
		if(crmPage.btnResolved.getAttribute('class').includes('active'))
		{
			crmPage.btnResolved.click();
		}
		browser.pause(5000);
		console.log('going to select first item');
		crmPage.tablServiceDeskRowOne.waitForDisplayed();
		crmPage.tablServiceDeskRowOne.waitForClickable();
		this.ticketID = crmPage.tablServiceDeskRowOne.getText();
		crmPage.tablServiceDeskRowOne.click();
		browser.pause(5000);
	}
    chooseFilter(filterOption){
		//Utils.closeRatingPopup();
		//Utils.closeWalkMe();
		var otherStatus = 'complete';
		this.waitForLoader();
		crmPage.btnAll.waitForDisplayed();
		crmPage.btnAll.click();
		browser.pause(2000);
		crmPage.btnPending.click();
		browser.pause(2000);
		crmPage.btnOpen.click();
		browser.pause(2000);
		crmPage.btnResolved.click();
		browser.pause(2000);
		switch(filterOption){
			
			case "Pending":
				crmPage.btnPending.waitForDisplayed();
				crmPage.btnPending.click();
				// browser.pause(2000);
				console.log('I select: ' + filterOption);
				break;
			case "Open":
				crmPage.btnOpen.waitForDisplayed();
				crmPage.btnOpen.click();
				console.log('I select: ' + filterOption);
				break;
			case "Resolved":
				crmPage.btnResolved.waitForDisplayed();
				crmPage.btnResolved.click();
				console.log('I select: ' + filterOption);
				break;
			case "Others":
				crmPage.btnOthers.waitForDisplayed();
				crmPage.btnOthers.click();
				browser.pause(2000);
				crmPage.btnOthersDropdown(otherStatus).waitForDisplayed();
				crmPage.btnOthersDropdown(otherStatus).click();
				console.log('I select: ' + filterOption);
				break;
			default:
			console.log('No records found!');
			
		}
		console.log('I choose filter');
	}
	enableAssignAppUser()
	{
		crmPage.btnAll.moveTo();
		crmPage.btnAll.click();
		browser.pause(7000);
		crmPage.tablServiceDeskRowOne.waitForDisplayed();
		if(Number(this.getCRMListCount()) >0){
			crmPage.hamburgerMenu.waitForDisplayed();
			crmPage.hamburgerMenu.click();
			browser.pause(2000);
			crmPage.getChooseColumnFromList.waitForDisplayed();
			crmPage.getChooseColumnFromList.click();
							
				if (crmPage.chooseColumnPriorityEnabled.isExisting() === true){
					// Disable priority column
					crmPage.chooseColumnPriority.waitForDisplayed();
					crmPage.chooseColumnPriority.click();
				}
				if (crmPage.chooseColumnSummaryEnabled.isExisting() === true){
					// Disable summary column
					crmPage.chooseColumnSummary.waitForDisplayed();
					crmPage.chooseColumnSummary.click();
					//browser.pause(2000);
				}
				if (crmPage.chooseColumnDateAddedEnabled.isExisting() === true){
					// Disable summary column
					crmPage.chooseColumnDateAdded.waitForDisplayed();
					crmPage.chooseColumnDateAdded.click();
					//browser.pause(2000);
				}
				if (crmPage.chooseColumnStatusEnabled.isExisting() === true){
					// Disable summary column
					crmPage.chooseColumnStatus.waitForDisplayed();
					crmPage.chooseColumnStatus.click();
					//browser.pause(2000);
				}
				if (crmPage.chooseColumnAppUserEnabled.isExisting() === false){
					// Enable AppUser column
					crmPage.chooseColumnAppUser.waitForDisplayed();
					crmPage.chooseColumnAppUser.click();
					browser.pause(2000);
				}
			}
			else{
				console.log('No Data Available...');
			}
			browser.pause(2000);
			crmPage.btnClose.click();
	}
	assignUnAssignTicket(technician)
	{
		browser.pause(4000);
		crmPage.ticketDocAssign.waitForDisplayed();
		crmPage.ticketDocAssign.waitForClickable();
		let assignValue = crmPage.ticketDocAssign.getText();
		console.log('ticket assignee is '+assignValue);
		if(technician=="Unassigned" && assignValue=="U"){}
		else{
			crmPage.ticketDocAssign.waitForClickable();
			crmPage.ticketDocAssign.click();
			//crmPage.technicianFilter(technician).waitForDisplayed();
			crmPage.selectTicketAssignee(technician).click();
			if(crmPage.saveOpenedTicket.isClickable())
			{
				crmPage.saveOpenedTicket.waitForClickable();
				crmPage.saveOpenedTicket.click();
				browser.pause(5000);
				console.log('I updated ticket assignee');
			}
		}
		crmPage.closeOpenedTicket.waitForClickable();
		crmPage.closeOpenedTicket.click();
		console.log('I closed the ticket dock');
	}
    selectTechnicianFilter(technician){
		browser.pause(5000);
		console.log('I am going to select technician');
		//crmPage.technicianFilter.waitForDisplayed();
		crmPage.technicianFilter.moveTo();
		crmPage.technicianFilter.click();
		browser.pause(2000);
		crmPage.technicianFilterDropdown(technician).waitForDisplayed();
		crmPage.technicianFilterDropdown(technician).click();
		browser.pause(2000);
		console.log('I choose technician to see assigned tickets');
	}
    addComment(){
		var comment = 'This is test automation ' + (Math.floor(new Date() / 1000));
		this.comment = comment;
		browser.pause(5000);
		crmPage.btnNotes.waitForDisplayed();
		crmPage.btnNotes.click();
		console.log('notes clicked');
		browser.pause(3000);
		crmPage.commentBox.waitForDisplayed();
		crmPage.commentBox.click();
		console.log('commentbox clicked');
		crmPage.commentBox.setValue(comment);//comment field is not editable. Same issue as with email editor will work later on this
		browser.pause(1000);
		console.log('commentbox value is :'+crmPage.commentBox.getText());
		browser.pause(2000);
		crmPage.btnPost.waitForDisplayed();
		crmPage.btnPost.click();
		console.log('Test comment edited');
		browser.pause(2000);
	}
	openTicketInterface(accessSource){
		browser.pause(1000);
		//Utils.closeRatingPopup();
		switch(accessSource){
			case "fromSubscriberList":			
				var menu = SubListPage.dotMenu;
				menu.waitForDisplayed();
				menu.moveTo();
				menu.click();
				browser.pause(10000);
				SubListPage.menuItemTicket.waitForDisplayed();
				SubListPage.menuItemTicket.click();
				break;
			case "fromTopMenu":
				browser.pause(5000);
				//DashboardPage.dashboardTitle.waitForDisplayed();//Dashboard loading is slow so this sync it.
				crmPage.btnAddTicket.waitForDisplayed();
			    crmPage.btnAddTicket.click();
				browser.pause(1000);
				crmPage.topMenuItemTicket.waitForDisplayed();
				crmPage.topMenuItemTicket.click();
			break;
		}
		
	}
	addTicket(customerName, flow, ticketSummary, type, ticketPriority, assignee, ticketFollower){
		var Esckeys = ['\uE00C'];
		var clearkeys = ['\uE011', '\uE008', '\uE010','\uE017'];
		browser.pause(2000);
		var dropdownValueSelection = ['\uE015', '\uE007'];
		customerName = customerName.replace(/['"]+/g, '');
		type = type.replace(/['"]+/g, '');
		ticketPriority = ticketPriority.replace(/['"]+/g, '');
		assignee = assignee.replace(/['"]+/g, '');
		ticketFollower = ticketFollower.replace(/['"]+/g, '');
		ticketSummary = ticketSummary.replace(/['"]+/g, '');
		crmPage.btnCustomerName.waitForDisplayed();
		crmPage.btnCustomerName.waitForClickable();
		browser.pause(1000);
		crmPage.searchName.setValue(customerName);
		//browser.pause(4000);
		crmPage.autocompleteDialouge.waitForDisplayed();
		crmPage.autocompleteDialouge.waitForClickable();
		crmPage.autocompleteDialouge.click();
		browser.pause(2000);
		crmPage.addTicketType.waitForClickable();
		crmPage.addTicketType.click();
		//browser.pause(3000);
		crmPage.autocompleteDialouge.waitForDisplayed();
		crmPage.autocompleteDialouge.waitForClickable();
		browser.keys(dropdownValueSelection);
		browser.pause(2000);
		if(crmPage.ticketContinueAnyway.isExisting())
		{
			crmPage.ticketContinueAnyway.click();
		}
		console.log('Ticket Type updated!');
		crmPage.ticketSummary.scrollIntoView();
		crmPage.ticketSummary.waitForClickable();
		crmPage.ticketSummary.click();
		crmPage.ticketSummary.keys(clearkeys);
		browser.pause(1000);
		crmPage.ticketSummary.setValue(ticketSummary);
		if(ticketFollower!="")
		{
			crmPage.docTicketFollower.waitForDisplayed();
			crmPage.docTicketFollower.click();
			browser.pause(2000);
			crmPage.ticketFollowerDropdown(ticketFollower).click();	
			crmPage.ticketFollowerDropdown(ticketFollower).keys(Esckeys);		
			console.log('follower updated!');
		}
		browser.pause(2000);
	}
	saveCurrentTicket(flow)
	{
		//browser.pause(3000);
		crmPage.btnSave(flow).waitForClickable();
		crmPage.btnSave(flow).click();
		console.log('I save ticket details');
		//crmPage.confirmationMsg.waitForDisplayed();
		browser.pause(5000);
	}
	closeNewTicketDock()
	{
		 let ticketIDOnTicketDock = crmPage.newlyaddedTicketID.getText();
		 this.ticketID = ticketIDOnTicketDock.slice(8);
		 console.log('newly added ticket id is'+this.ticketID);
		crmPage.closeNewTicketDock.waitForClickable();
		crmPage.closeNewTicketDock.click();
		console.log('newly ticket added');
		browser.pause(2000);
	}
	openThreeDotMenu() {
		browser.pause(6000);
		crmPage.tablServiceDeskRowOne.waitForDisplayed();
		 let ticketIdFromrow = crmPage.tablServiceDeskRowOne.getText();
		 //console.log('ticket id from table row is '+ticketIdFromrow);
		 if(ticketIdFromrow!=this.ticketID){
			crmPage.ticketIdColumn.click();
			browser.pause(5000);
		 }
		 else{
			this.ticketID = crmPage.tablServiceDeskRowOne.getText();
			console.log('ticket id from table row is '+this.ticketID);
			crmPage.tablServiceDeskRowOne.moveTo();
			browser.pause(2000);
			crmPage.threeDotMenu.waitForDisplayed();
			browser.pause(1000);
			crmPage.threeDotMenu.click();
			console.log("Three dot menu was clicked");
		}
	}
	choosePriority (filterOption){

		//Utils.closeRatingPopup();
		//Utils.closeWalkMe();
		this.waitForLoader();
		filterOption = filterOption.replace(/['"]+/g, '');
		crmPage.btnHigh.waitForDisplayed();
		crmPage.btnHigh.click();
		browser.pause(2000);
		crmPage.btnNormal.click();
		browser.pause(2000);
		crmPage.btnLow.click();
		browser.pause(2000);
		console.log('going to selected desired priority '+filterOption);
		if(filterOption=="High")
		{
			crmPage.btnHigh.waitForDisplayed();
			crmPage.btnHigh.click();
			// browser.pause(2000);
			console.log('I select filterOption: ' + filterOption);
		}
		else if(filterOption=="Normal")
		{
			crmPage.btnNormal.waitForDisplayed();
			crmPage.btnNormal.click();
			console.log('I select filterOption: ' + filterOption);
		}
		else
		{
			crmPage.btnLow.waitForDisplayed();
				crmPage.btnLow.click();
				console.log('I select filterOption: ' + filterOption);
		}
		//console.log('No records found!');
		console.log('I applied prirotiy filter');
	}
	choosePriorityColumnAsEnabled() {
		crmPage.btnAll.waitForDisplayed();
		crmPage.btnAll.waitForClickable();
		crmPage.btnAll.scrollIntoView();
		crmPage.btnAll.click();
		browser.pause(5000);
		if(Number(this.getCRMListCount()) >0){
			crmPage.hamburgerMenu.waitForDisplayed();
			crmPage.hamburgerMenu.click();
			browser.pause(2000);
			crmPage.getChooseColumnFromList.waitForDisplayed();
			crmPage.getChooseColumnFromList.click();
							
				if (crmPage.chooseColumnPriorityEnabled.isExisting() === false){
					// Enable priority column
					crmPage.chooseColumnPriority.waitForDisplayed();
					crmPage.chooseColumnPriority.click();
				} else {

					// Disable priority column
					crmPage.chooseColumnPriority.waitForDisplayed();
				    crmPage.chooseColumnPriority.click();
					browser.pause(2000);
					// Enable priority column again
					crmPage.chooseColumnPriority.waitForDisplayed();
					crmPage.chooseColumnPriority.click();
					browser.pause(2000);
				}
				console.log("Priority column was made enabled");
				if (crmPage.chooseColumnSummaryEnabled.isExisting() === true){
					// Disable summary column
					crmPage.chooseColumnSummary.waitForDisplayed();
					crmPage.chooseColumnSummary.click();
					browser.pause(2000);
				}
				if (crmPage.chooseColumnAppUserEnabled.isExisting() === true){
					// Disable AppUser column
					crmPage.chooseColumnAppUser.waitForDisplayed();
					crmPage.chooseColumnAppUser.click();
					browser.pause(2000);
				}
			}
			else{
				console.log('No Data Available...');
				expect(1).is.eql(1);//no data is available
			}
			browser.pause(2000);
			crmPage.btnClose.click();
	}
	enableSummaryColumn()
	{
		if(Number(this.getCRMListCount()) >0){
			crmPage.hamburgerMenu.waitForDisplayed();
			crmPage.hamburgerMenu.click();
			browser.pause(2000);
			crmPage.getChooseColumnFromList.waitForDisplayed();
			crmPage.getChooseColumnFromList.click();
							
				if (crmPage.chooseColumnSummaryEnabled.isExisting() === false){
					// Enable summary column
					crmPage.chooseColumnSummary.waitForDisplayed();
					crmPage.chooseColumnSummary.click();
					browser.pause(2000);
					// Disable priority column
					crmPage.chooseColumnPriority.waitForDisplayed();
					crmPage.chooseColumnPriority.click();
					browser.pause(2000);
				}
				if (crmPage.chooseColumnAppUserEnabled.isExisting() === true){
					// Disable AppUser column
					crmPage.chooseColumnAppUser.waitForDisplayed();
					crmPage.chooseColumnAppUser.click();
					browser.pause(2000);
				}
				console.log("Summary column was made enabled");
			}
			else{
				console.log('No Data Available...');
				expect(1).is.eql(1);//no data is available
			}
			browser.pause(2000);
			crmPage.btnClose.click();
	}
	choosePriorityColumnAsDisabled() {
		crmPage.btnAll.waitForDisplayed();
		crmPage.btnAll.waitForClickable();
		crmPage.btnAll.scrollIntoView();
		crmPage.btnAll.click();
		browser.pause(5000);
		if(Number(this.getCRMListCount()) >0){
			crmPage.hamburgerMenu.waitForDisplayed();
			crmPage.hamburgerMenu.click();
			browser.pause(2000);
			crmPage.getChooseColumnFromList.waitForDisplayed();
			crmPage.getChooseColumnFromList.click();
							
				if (crmPage.chooseColumnPriorityEnabled.isExisting() === true){
					// disable priority column
					crmPage.chooseColumnPriority.waitForDisplayed();
					crmPage.chooseColumnPriority.click();
					browser.pause(2000);
				} else {

					// enable priority column first
					crmPage.chooseColumnPriority.waitForDisplayed();
					crmPage.chooseColumnPriority.click();
					browser.pause(2000);
					// disable priority column again
					crmPage.chooseColumnPriority.waitForDisplayed();
					crmPage.chooseColumnPriority.click();
					browser.pause(2000);
				}
				if (crmPage.chooseColumnAppUserEnabled.isExisting() === true){
					// Disable AppUser column
					crmPage.chooseColumnAppUser.waitForDisplayed();
					crmPage.chooseColumnAppUser.click();
					browser.pause(2000);
				}
				console.log("Priority column was made disabled");
			}
			else{
				console.log('No Data Available...');
				expect(1).is.eql(1);//no data is available
			}

			browser.pause(2000);
			crmPage.btnClose.click();
	}













    verifyFilterOptions(filterOptions){
		
		var options = filterOptions.raw();
		
		for (var i=0; i<options.length; i++){
			
				switch(options[i][0]){
					
					case 'All':
						expect(crmPage.btnAll.getText()).to.eql('All');
						break;
					case "Pending":
						expect(crmPage.btnPending.getText()).to.eql('Pending');
						break;
					case "Open":
						expect(crmPage.btnOpen.getText()).to.eql('Open');
						break;
					case "Resolved":
						expect(crmPage.btnResolved.getText()).to.eql('Resolved');
						break;
					case "Others":
						expect(crmPage.btnOthers.getText()).to.eql('Others');
						break;
					default:
						break;

				}
		}
	}
    verifyCRMDocker(flow){
		browser.pause(5000);
		//crmPage.dockHeader.waitForDisplayed();
		console.log('expected ticket id is:' + this.ticketID);
		console.log('expected ticket type is:' + this.ticketType);
		console.log('expected ticket summary is:' + this.ticketSummary);
		console.log('actual ticket id is:' + crmPage.docTicketId.getText());
		console.log('actual ticket type is:' + crmPage.ticketType(flow).getAttribute('value'));
		//console.log('actual ticket summary is:' + ServiceDeskPage.ticketSummary.getAttribute('value'));
		expect(crmPage.docTicketId.getText()).to.eql('Ticket #'+this.ticketID);
		console.log('actual ticket id is verified');
		expect(crmPage.ticketType(flow).getAttribute('value')).to.eql(this.ticketType);
		console.log('actual ticket value is verified');
		crmPage.ticketSummary.scrollIntoView();
		crmPage.ticketSummary.waitForClickable();
		expect(crmPage.ticketSummary.getAttribute('value')).to.eql(this.ticketSummary);
		console.log('actual ticket summary is verified');
	}
    verifyFilteredRecords(filterOption){
		browser.pause(5000);
		filterOption = filterOption.replace(/['"]+/g, '');
		var expectedStatus;
		switch(filterOption){
		case "Pending":
			expectedStatus = 'Pending'
			break;
		case "Open":
			expectedStatus = 'Open'
			break;
		case "Resolved":
			expectedStatus = 'Resolved'
			break;
		case "Others":
			expectedStatus = 'Others'
			break;
		}
		 if(Number(this.getCRMListCount()) >0){
			crmPage.hamburgerMenu.waitForDisplayed();
			crmPage.hamburgerMenu.click();
			browser.pause(2000);
			crmPage.getChooseColumnFromList.waitForDisplayed();
			crmPage.getChooseColumnFromList.click();
			crmPage.chooseColumnPriority.waitForDisplayed();
			crmPage.chooseColumnPriority.click();
			crmPage.btnClose.click();
			browser.pause(2000);
			var tableStatus = crmPage.statusColumn(filterOption);
			console.log('extracted data is :' + tableStatus);
			expect(tableStatus).is.eql(expectedStatus);
			
		}else{
			console.log('No Data Available...');
			expect(1).is.eql(1);//no data is available
		}
	}
    verifyTechnicianFilter(technician){
		browser.pause(9000);	
		var assignee;
		if(Number(this.getCRMListCount()) >0){
			assignee = crmPage.technicianFilter.getText();
			let appUser = crmPage.crMTableRowOneAppUser.getText()
			expect(assignee).to.eql(technician);
			expect(appUser).to.eql(technician);
			console.log('I verified technician');
			
		}else{
			console.log('Table does not load any data');
		}
		browser.pause(5000);	
	}
    verifyComment(){
		crmPage.confirmationMsg.waitForDisplayed();
		expect(crmPage.confirmationMsg.getText()).to.eql('Note Added Successfully');
		console.log('toast message is:' + this.comment);
		browser.pause(2000);
		console.log('actual comment is ' + this.comment);
		if (crmPage.getPostedComment(this.comment).getText().includes(this.comment)){
			expect(1).to.eql(1);
			console.log(this.comment)
		
		}else{
			expect(1).to.eql(0);
		}
	}
	dataVerificationInTicketDock () {
		let ticketIDOnTicketDock = crmPage.docTicketId.getText();
		ticketIDOnTicketDock = ticketIDOnTicketDock.slice(8);
		console.log(ticketIDOnTicketDock);
		let ticketTypeOnTicketDock = crmPage.ticketTypeOnTicketDock.getAttribute("value");
		crmPage.ticketSummaryOnTicketDock.scrollIntoView();		
		let ticketSummaryOnTicketDock = crmPage.ticketSummaryOnTicketDock.getAttribute("value");
		expect(this.ticketID).to.eql(ticketIDOnTicketDock);
		expect(this.typeContent).to.eql(ticketTypeOnTicketDock);
		expect(this.summaryContent).to.eql(ticketSummaryOnTicketDock);
	}
	deleteTicket() {

		crmPage.deleteOption.waitForDisplayed();
		browser.pause(1000);
		crmPage.deleteOption.click();
		browser.pause(1000);
		crmPage.yesButtonForDelete.waitForDisplayed();
		crmPage.yesButtonForDelete.click();
		console.log("Ticket Deleted");
		//crmPage.confirmationMsg.waitForDisplayed();
		//expect(crmPage.confirmationMsg.getText()).to.eql("Deleted Successfully");
		browser.pause(2000);
	}
	gotoDashboard()
	{
		crmPage.dashboardMenu.waitForDisplayed();
		crmPage.dashboardMenu.click();
		//browser.pause(5000);
	}
	clickSortIconOnTicketID() {
		//browser.pause(2000);
		//crmPage.sortIconOnTicketID.waitForDisplayed();
		//crmPage.sortIconOnTicketID.click();
		//this.ticketID=2;
		console.log("going to re-verify ticket table");
		browser.pause(9000);
		crmPage.btnAll.scrollIntoView();
		crmPage.tablServiceDeskRowOne.waitForDisplayed();
		let newTicketID = crmPage.tablServiceDeskRowOne.getText();
		console.log("extracted ticket is "+this.ticketID);
		console.log("new ticket is "+newTicketID);
		expect(this.ticketID).not.equal(newTicketID);
	}
	verifyFilteredAndPriorityRecords(filterOption, priorityOption){
		browser.pause(3000);
		filterOption = filterOption.replace(/['"]+/g, '');
		priorityOption = priorityOption.replace(/['"]+/g, '');
		var expectedStatus;
		var expectedPriority;
		switch(filterOption){
		case "Pending":
			expectedStatus = 'Pending'
			break;
		case "Open":
			expectedStatus = 'Open'
			break;
		case "Resolved":
			expectedStatus = 'Resolved'
			break;
		case "Others":
			expectedStatus = 'Others'
			break;
		}
		 if(Number(this.getCRMListCount()) >0){
			crmPage.hamburgerMenu.waitForDisplayed();
			crmPage.hamburgerMenu.click();
			browser.pause(2000);
			crmPage.getChooseColumnFromList.waitForDisplayed();
			crmPage.getChooseColumnFromList.click();
							
				if (crmPage.chooseColumnPriorityEnabled.isExisting() === false){
					crmPage.chooseColumnPriority.waitForDisplayed();
					crmPage.chooseColumnPriority.click();
					browser.pause(2000);
				}

				if (crmPage.chooseColumnSummaryEnabled.isExisting() === true){
					crmPage.chooseColumnSummary.waitForDisplayed();
					crmPage.chooseColumnSummary.click();
					browser.pause(2000);
				}	
				if (crmPage.chooseColumnTypeEnabled.isExisting() === true){
					crmPage.chooseColumnType.waitForDisplayed();
					crmPage.chooseColumnType.click();
					browser.pause(2000);
				}
				if (crmPage.chooseColumnAppUserEnabled.isExisting() === true){
					// Disable AppUser column
					crmPage.chooseColumnAppUser.waitForDisplayed();
					crmPage.chooseColumnAppUser.click();
					browser.pause(2000);
				}	
				console.log("Priority column already shown");

				browser.pause(2000);
				crmPage.btnClose.click();
				browser.pause(2000);

				var tableStatus = crmPage.statusColumn(filterOption);
				console.log('extracted data is :' + tableStatus);
				expect(tableStatus).is.eql(expectedStatus);
			}
			else{
				console.log('No Data Available for Status: ', expectedStatus);
				expect(1).is.eql(1);//no data is available
			}

		switch(priorityOption){
			case "High":
				expectedPriority = 'High'
				break;
			case "Normal":
				expectedPriority = 'Normal'
				break;
			case "Low":
				expectedPriority = 'Low'
				break;
			}
			if(Number(this.getCRMListCount()) >0){

			browser.pause(2000);
			var tableStatusPriority = crmPage.priorityColumn(priorityOption);
			console.log('extracted data for Priority is :' + tableStatusPriority);
			expect(tableStatusPriority).is.eql(expectedPriority);
			}
			
			else{
				console.log('No Data Available for Priority: ', expectedPriority);
				expect(1).is.eql(1);//no data is available
			}
	}
	verifyColumnNameAvailable(columnName) {
		browser.pause(2000);
		columnName = columnName.replace(/['"]+/g, '');
		console.log("ColumnName is: " , columnName);
		var tableColumnHeader = crmPage.ticketTableHeader(columnName);
		console.log('extracted  columns text is: ' + tableColumnHeader);
		console.log('checking columns for: ' + tableColumnHeader);
		expect(tableColumnHeader.includes(columnName)).to.be.true;
		this.enableSummaryColumn();
		browser.pause(2000);
	}
	
	verifyColumnNameNotAvailable(columnName) {
		browser.pause(2000);
		columnName = columnName.replace(/['"]+/g, '');
		var tableColumnHeader = crmPage.ticketTableHeader(columnName);
		expect(tableColumnHeader).to.be.undefined;
		browser.pause(2000);
	}
	choosenColumnToBeShown (priority, summary)	{
		browser.pause(3000);
		priority = priority.replace(/['"]+/g, '');
		summary = summary.replace(/['"]+/g, '');
		browser.pause(2000);
		var priorityCol = crmPage.ticketTableHeader(priority);		
		var summaryCol = crmPage.ticketTableHeader(summary);		
		expect(priorityCol).to.include(priority);
		expect(summaryCol).to.include(summary);
		browser.pause(2000);
	}
}
module.exports = new crmActions();
