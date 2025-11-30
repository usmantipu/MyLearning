var LoginPage = require('../pageobjects/login.page');
var DashboardPage = require('../pageobjects/dashboard.page');
var SublistPage = require('../pageobjects/subscriberlist.page');
var ServiceDeskPage = require('../pageobjects/serviceDesk.page');
var Utils = require('./utils');
var expect = require('chai').expect; 
const dashboardPage = require('../pageobjects/dashboard.page');
const subscriberlistActions = require('./subscriberlistActions');


class dashboardActions{
	
	constructor(){
		this.comment;
		this.dashboardPaidupCount;
		this.dashboardDueCount;
		this.dashboardPastDueCount;
		this.dashboardSuspendedCount;
		this.dashboardProspectCount;
		this.dashboardHibernatedCount;
		this.dashboardRevenueWidgetTotalRevenue;
		this.dashboardRevenueWidgetARPU;
		this.dashboardRevenueWidgetPaymentStillDueThisMonth;
		this.dashboardRevenueWidgetTotalInvoicedThisMonth;
		this.dashboardTicketWidgetStatusUnAssigned;
		this.dashboardTicketWidgetStatusPending;
		this.dashboardTicketWidgetStatusOpen;
		this.dashboardTicketWidgetStatusAssigned;
		this.dashboardTicketWidgetStatusClosed;
		this.dashboardTicketWidgetStatusResolved;
		this.dashboardTicketStatusFromDetailsResolved;
		this.dashboardTicketStatusFromDetailsPending;
		this.dashboardTicketStatusFromDetailsOpen;
		this.dashboardTicketToOpen;
		this.dashboardReportToOpen;
		this.dashboardReportMarkedFavorite;
		this.subscribers1weekCount;
		this.subscribers1monthCount;
		this.subscribers3monthsCount;
		this.subscribers1yearsCount;
		this.subscribersAllCount;
	}
	
	helper_reverseString(s){
		var reverseString;
		
		for(var i=s.length; i>0; i--){
			
			if (i === s.length){
				reverseString = s[i-1]; 
			}else{
				reverseString = reverseString + s[i-1];
			}
		}
		return reverseString;
	}
	
    openVispApp(){
		DashboardPage.open();
	}
	
	loginToVisp(creds){
		var credentials = creds.raw();		
		Utils.login(credentials[0][0], credentials[0][1]);
		/*
		LoginPage.username.waitForDisplayed();
		LoginPage.username.setValue(credentials[0][0]);
		LoginPage.passwordf.setValue(credentials[0][1]);
		LoginPage.logbutton.click();
		
		//Utils.closeRatingPopup();
		//Utils.closeWalkMe();
		console.log('I login using given credentials');
		browser.maximizeWindow();*/
	}
	
	onDashboard(){
		var title;
		browser.pause(10000);
		DashboardPage.dashboardTitle.waitForDisplayed();
		title = DashboardPage.dashboardTitle.getText();
		expect(title.substr(0,19)).to.eql('Dashboard - Welcome');
		//browser.pause(3000);
		console.log('Testing>>>>>>>>>>>>>>>>>>Going to check the widget');
		this.dashboardPaidupCount = DashboardPage.subscriberOverViewWidgetPaidupCount.getText();
		this.dashboardDueCount = DashboardPage.subscriberOverViewWidgetDueCount.getText('.userCount');
		console.log('Testing>>>>>>>>>>>>>>>>>>Widget checked');
		this.dashboardPastDueCount = DashboardPage.subscriberOverViewWidgetPastDueCount.getText('.userCount');
		this.dashboardSuspendedCount = DashboardPage.subscriberOverViewWidgetSuspendedCount.getText('.userCount');
		this.dashboardProspectCount = DashboardPage.subscriberOverViewWidgetProspectCount.getText('.userCount');
		this.dashboardHibernatedCount = DashboardPage.subscriberOverViewWidgetHibernatedCount.getText('.userCount');
		
		DashboardPage.subscriberOverViewWidgetTotalCount.waitForDisplayed();
		this.subscriberOverViewWidgetTotalCount = DashboardPage.subscriberOverViewWidgetTotalCount.getText();
		console.log('subscriber total count '+DashboardPage.subscriberOverViewWidgetTotalCount.getText());
	/*	this.dashboardRevenueWidgetARPU	= DashboardPage.revenueWidgetARPU.getText('span');
		this.dashboardRevenueWidgetPaymentStillDueThisMonth = DashboardPage.revenueWidgetPaymentStillDueThisMonth.getText();
		this.dashboardRevenueWidgetTotalInvoicedThisMonth = DashboardPage.revenueWidgetTotalInvoicedThisMonth.getText();*/ // Widget is not longer available
		
	}
	
	openPaidUpSubscriberList()
	{
		DashboardPage.subscriberOverViewWidgetPaidupCount.moveTo();
		browser.pause(1000);
		dashboardPage.subscriberListLink.click();
		browser.pause(12000);
	}

	zoomSubscribers(period){
		browser.refresh();
		browser.pause(7000);
		console.log('I zoom to: '+period);
		switch(period){
			
			case '1 Month':
				DashboardPage.subscribersWidget1Month.waitForDisplayed();
				DashboardPage.subscribersWidget1Month.scrollIntoView();
				DashboardPage.subscribersWidget1Month.click();
				browser.pause(3000);
				this.subscribers1monthCount = DashboardPage.subscriberHighChartAxisLable.length;
				browser.pause(1000);
				break;
			case '1 Week':
				DashboardPage.subscribersWidget1Week.waitForDisplayed();
				DashboardPage.subscribersWidget1Week.scrollIntoView();
				DashboardPage.subscribersWidget1Week.click();
				browser.pause(3000);
				this.subscribers1weekCount = DashboardPage.subscriberHighChartAxisLable.length;
				browser.pause(1000);
				break;
			case '3 Months':
				DashboardPage.subscribersWidget3Month.waitForDisplayed();
				DashboardPage.subscribersWidget3Month.scrollIntoView();
				DashboardPage.subscribersWidget3Month.click();
				browser.pause(3000);
				this.subscribers3monthsCount = DashboardPage.subscriberHighChartAxisLable.length;
				browser.pause(1000);
				break;
			case 'This year':
				browser.pause(5000);
				var thisyear = DashboardPage.subscribersWidgetThisYear;
				thisyear.scrollIntoView();
				thisyear.moveTo();
				thisyear.click({x: 0, y: 0});
				browser.pause(3000);
				this.subscribers1yearsCount = DashboardPage.subscriberHighChartAxisLable.length;
				browser.pause(1000);
				break;
			case 'All':
				DashboardPage.subscribersWidget1Week.waitForDisplayed();
				DashboardPage.subscribersWidget1Week.scrollIntoView();
				DashboardPage.subscribersWidget1Week.click();
				browser.pause(2000);
				DashboardPage.subscribersWidgetAll.waitForDisplayed();
				DashboardPage.subscribersWidgetAll.click();
				browser.pause(3000);
				this.subscribersAllCount = DashboardPage.subscriberHighChartAxisLable.length;
				browser.pause(1000);
				break;
		}
		
		
		browser.pause(2000)
	}
	
	selectTicketStatus(status){
		browser.pause(5000);
		switch(status){
			// case 'Assigned':
				// DashboardPage.ticketWidgetAssigned.waitForDisplayed();
				// DashboardPage.ticketWidgetAssigned.click();
				// console.log('I select '+status+' status');
				// this.dashboardTicketWidgetStatusAssigned = DashboardPage.ticketWidgetStatus.getText();
				// break;
			case 'Pending':
				
				DashboardPage.ticketWidgetPending.waitForDisplayed();
				DashboardPage.ticketWidgetPending.click();
				browser.pause(9000);				
				DashboardPage.getTicketDetails.waitForDisplayed();				
				this.dashboardTicketWidgetStatusPending = DashboardPage.getTicketDetails.getText();				
				DashboardPage.getTicketDetails.click();
				browser.pause(4000);
				
				ServiceDeskPage.ticketStatusFromDocker.waitForDisplayed();

				
				this.dashboardTicketStatusFromDetailsPending = ServiceDeskPage.ticketStatusFromDocker.getValue();
				
				//console.log(status + ' status from dashbaord widget and '+ServiceDeskPage.ticketStatusFromDocker.getText()+' status from Ticket deatils');
				DashboardPage.ticketCloseDialog.click();

				browser.pause(1000);
				console.log('I selected '+status+' status');
				break;
			case 'Open':
				console.log('going to verify Open');
				browser.pause(2000);
				DashboardPage.ticketWidgetOpen.waitForDisplayed();
				DashboardPage.ticketWidgetOpen.click();
				browser.pause(9000);
				DashboardPage.getTicketDetails.waitForDisplayed();
				this.dashboardTicketWidgetStatusOpen = DashboardPage.getTicketDetails.getText();
				DashboardPage.getTicketDetails.click();
				browser.pause(4000);
				ServiceDeskPage.ticketStatusFromDocker.waitForDisplayed();
				this.dashboardTicketStatusFromDetailsOpen = ServiceDeskPage.ticketStatusFromDocker.getValue();
				//console.log(status + ' status from dashbaord widget and '+ServiceDeskPage.ticketStatusFromDocker.getText()+' status from Ticket deatils');
				DashboardPage.ticketCloseDialog.click();
				browser.pause(1000);
				console.log('I selected '+status+' status');
				break;
			case 'Resolved':
				browser.pause(2000);
				console.log('going to verify resolved');
				DashboardPage.ticketWidgetResolved.waitForDisplayed();
				DashboardPage.ticketWidgetResolved.click();
				browser.pause(9000);
				DashboardPage.getTicketDetails.waitForDisplayed();
				this.dashboardTicketWidgetStatusResolved = DashboardPage.getTicketDetails.getText();
				DashboardPage.getTicketDetails.click();
				browser.pause(4000);
				ServiceDeskPage.ticketResolvedStatusFromDocker.waitForDisplayed();
				this.dashboardTicketStatusFromDetailsResolved = ServiceDeskPage.ticketResolvedStatusFromDocker.getValue();
				//console.log(status + ' status from dashbaord widget and '+ServiceDeskPage.ticketStatusFromDocker.getText()+' status from Ticket deatils');
				DashboardPage.ticketCloseDialog.click();
				browser.pause(1000);
				console.log('i selected '+status+' status');
				break;
		}
		
	}
	verifyTicketStatus(){
		//under development
		expect(this.dashboardTicketWidgetStatusPending).to.eql(this.dashboardTicketStatusFromDetailsPending);
		expect(this.dashboardTicketWidgetStatusOpen).to.eql(this.dashboardTicketStatusFromDetailsOpen);
		expect(this.dashboardTicketWidgetStatusResolved).to.eql(this.dashboardTicketStatusFromDetailsResolved);
	}
	openAndCloseTicketFromDashboard()
	{
		DashboardPage.ticketWidgetOpen.waitForDisplayed();
		DashboardPage.ticketWidgetOpen.click();
		browser.pause(5000);
		DashboardPage.getTicketDetails.waitForDisplayed();
		DashboardPage.getTicketDetails.click();
		browser.pause(5000);
		ServiceDeskPage.ticketStatusFromDocker.waitForDisplayed();
		this.dashboardTicketToOpen = ServiceDeskPage.ticketStatusFromDocker.getValue();
		DashboardPage.ticketCloseDialog.click();
	}
	VerifyTicketDetailOpenInDocker()
	{
		var resultData = this.dashboardTicketToOpen;
		if(resultData.length > 0){
			expect(1).to.eql(1);
		}else{
			expect(1).to.eql(0);
		}
	}5
	selectPackage(_package){
		
		switch(_package){
			case "1 Week":
				DashboardPage.dashboardTitle.keys('\uE00F');
				DashboardPage.packageWidget1Week.waitForDisplayed();
				DashboardPage.packageWidget1Week.click();
				console.log('I select '+_package+' package');
				break;
			case "1 Month":
				DashboardPage.packageWidget1Month.waitForDisplayed();
				DashboardPage.packageWidget1Month.click();
				console.log('I select '+_package+' package');
				break;
			case "3 Months":
				DashboardPage.packageWidget3Month.waitForDisplayed();
				DashboardPage.packageWidget3Month.click();
				console.log('I select '+_package+' package');
				break;
			case "This Year":
				DashboardPage.packageWidgetThisYear.waitForDisplayed();
				DashboardPage.packageWidgetThisYear.click();
				console.log('I select '+_package+' package');
				break;
			case "All":
				DashboardPage.packageWidgetAll.waitForDisplayed();
				DashboardPage.packageWidgetAll.click();
				console.log('I select '+_package+' package');
				break;
		}
	}
	
	clickDashboardReport(report){
		// DashboardPage.reportsWidgetReport(report).waitForDisplayed();
		// DashboardPage.reportsWidgetReport(report).click();
		DashboardPage.reportsWidgetGlobalFavoritesTab.waitForDisplayed();
		DashboardPage.reportsWidgetGlobalFavoritesTab.click();
		browser.pause(7000);
		this.dashboardReportToOpen = DashboardPage.getReportDetails[1].getText();
		DashboardPage.getReportDetails[1].click();
		console.log('clicked on report');
		browser.pause(15000);
		console.log('I open '+ this.dashboardReportToOpen +' report');
	}

	clickOpenReportInNewTab(){
		DashboardPage.reportsWidgetGlobalFavoritesTab.waitForDisplayed();
		DashboardPage.reportsWidgetGlobalFavoritesTab.click();
		browser.pause(9000);
		this.dashboardReportToOpen = DashboardPage.getReportDetails[1].getText();
		DashboardPage.getReportDetails[0].click();
		browser.pause(2000);
		DashboardPage.getReportDetails[2].moveTo();
		browser.pause(2000);
		DashboardPage.reportsWidgetOpenNewTab.click();
		console.log('I open report in new tab');
	}

	markReportFavorite(){
		DashboardPage.reportsWidgetGlobalFavoritesTab.click();
		browser.pause(10000);
		this.dashboardReportToOpen = DashboardPage.getReportDetails[1].getText();
		console.log('report detail is:'+this.dashboardReportToOpen);
		var reportstatus = DashboardPage.getFavoriteIconStatus(DashboardPage.getReportDetails[0]).getAttribute('aria-label');
		console.log('report title is:'+reportstatus);
		switch(reportstatus){
			case "Remove to favorites":
				DashboardPage.getReportDetails[0].click();
				browser.pause(2000);
				DashboardPage.getReportDetails[0].click();
				browser.pause(2000);
				break;
			case "Add to favorites":
				DashboardPage.getReportDetails[0].click();
				browser.pause(2000);
				DashboardPage.getReportDetails[0].click();
				browser.pause(2000);
				DashboardPage.getReportDetails[0].click();
				browser.pause(2000);
				break;
		}
		browser.pause(3000);
		console.log('I mark first report as favorite!');
	}
	
	openGlobalFavoriteReports(){
		DashboardPage.reportsWidgetGlobalFavoritesTab.waitForDisplayed();
		DashboardPage.reportsWidgetGlobalFavoritesTab.click();
		console.log('I open Global Favorite reports!');
	}
	
	openFavoriteReports(){
		DashboardPage.reportsWidgetFavoritesTab.waitForDisplayed();
		DashboardPage.reportsWidgetFavoritesTab.click();
		console.log('I open Favorite reports!');
	}

	openCustomizationWindow(){
		browser.pause(5000);
		//DashboardPage.customizationButton.waitForDisplayed();
		DashboardPage.customizationButton.click();
		console.log('I open customization window!');
	}

	toggleSchedulingWidget(){
		browser.pause(1000);
		DashboardPage.sidebarSchedulingWidget.click();
		console.log('I toggle scheduling widget!');
	}

	closeCustomizationWindow(){
		browser.pause(2000);
		console.log('going to close side bar');
		//DashboardPage.sidebarClose.waitForDisplayed();
		var allcloseButtons =DashboardPage.sidebarClose;
		//console.log('total length of close buttons are '+allcloseButtons.length);
		allcloseButtons[allcloseButtons.length-1].click();
		console.log('I close customization window!');
	}

	verifyWidgets(widgets){
		browser.pause(2000);
		var allWidgets = widgets.raw();
		
		console.log('Total widgets are: '+ allWidgets.length);
		expect(DashboardPage.subscriberOverviewWidget.getText()).to.eql(allWidgets[0][0]);
		expect(DashboardPage.revenueWidget.getText()).to.eql(allWidgets[1][0]);// Widget no longer exists on dashboard  
		expect(DashboardPage.subscribersWidget.getText()).to.eql(allWidgets[2][0]);
		expect(DashboardPage.packageRevenueWidget.getText()).to.eql(allWidgets[3][0]); // Widget no longer exists on dashboard
		expect(DashboardPage.ticketsWidget.getText()).to.eql(allWidgets[4][0]);		
		expect(DashboardPage.reportsWidget.getText()).to.eql(allWidgets[5][0]);
		expect(DashboardPage.schedulingWidget.getText()).to.eql(allWidgets[6][0]);
		expect(DashboardPage.inventoryProfileWidget.getText()).to.eql(allWidgets[7][0]);
	}
	
	verifySubscriberPaidupCount(){
		//browser.pause(5000);
		//var count = SublistPage.headerNoOfRecords;
		var stats = subscriberlistActions.getSpecificSubscriberListCount();
		console.log('count from subList:' + stats);
		//var rCount = this.helper_reverseString(count);
		//var stats = rCount.substr(1, rCount.indexOf(' ')-1);
		//stats = this.helper_reverseString(stats);
		//var stats = parseInt(count.match(/\d+/));
		//var rcount = parseInt(this.dashboardPaidupCount.replace(/[^0-9]/g,''));
		var rcount = Number(this.dashboardPaidupCount);
		expect(Number(stats)).to.eql(rcount);
		console.log('paid up count is verified');
	}
	
	verifySubscriberDueCount(){
		//browser.pause(3000);
		var stats = subscriberlistActions.getSpecificSubscriberListCount();
		//var count = SublistPage.headerNoOfRecords;
		//var rCount = this.helper_reverseString(count);
		//var stats = rCount.substr(1, rCount.indexOf(' ')-1);
		//stats = this.helper_reverseString(stats);
		//var stats = parseInt(count.match(/\d+/));
		//var rcount = parseInt(this.dashboardDueCount.replace(/[^0-9]/g,''));
		var rcount = Number(this.dashboardDueCount);
		expect(Number(stats)).to.eql(rcount);
		console.log('Due count is verified');
	}

	verifySubscriberPastDueCount(){
		//browser.pause(3000);
		//var count = SublistPage.headerNoOfRecords;
		var stats = subscriberlistActions.getSpecificSubscriberListCount();
		//var rCount = this.helper_reverseString(count);
		//var stats = rCount.substr(1, rCount.indexOf(' ')-1);
		//stats = this.helper_reverseString(stats);
		//var stats = parseInt(count.match(/\d+/));
		//var rcount = parseInt(this.dashboardPastDueCount.replace(/[^0-9]/g,''));
		var rcount = Number(this.dashboardPastDueCount);
		expect(Number(stats)).to.eql(rcount);
		console.log('PastDue count is verified');
	}

	verifySubscriberSuspendedCount(){
		//browser.pause(3000);
		var stats = subscriberlistActions.getSpecificSubscriberListCount();
		//var count = SublistPage.headerNoOfRecords;
		//var rCount = this.helper_reverseString(count);
		//var stats = rCount.substr(1, rCount.indexOf(' ')-1);
		//stats = this.helper_reverseString(stats);
		//var stats = parseInt(count.match(/\d+/));
		//var rcount = parseInt(this.dashboardSuspendedCount.replace(/[^0-9]/g,''));
		var rcount = Number(this.dashboardSuspendedCount);
		expect(Number(stats)).to.eql(rcount);
		console.log('Suspended count is verified');
	}
	
	verifySubscriberProspectCount(){
		//browser.pause(3000);
		var stats = subscriberlistActions.getSpecificSubscriberListCount();
		//var rCount = this.helper_reverseString(count);
		//var stats = rCount.substr(1, rCount.indexOf(' ')-1);
		//stats = this.helper_reverseString(stats);
		//var stats = parseInt(count.match(/\d+/));
		//var rcount = parseInt(this.dashboardProspectCount.replace(/[^0-9]/g,''));
		var rcount = Number(this.dashboardProspectCount);
		expect(Number(stats)).to.eql(rcount);
		console.log('Prospect count is verified');
	}
	
	verifySubscriberHibernatedCount(){
		//browser.pause(3000);
		var stats = subscriberlistActions.getSpecificSubscriberListCount();
		//var rCount = this.helper_reverseString(count);
		//var stats = rCount.substr(1, rCount.indexOf(' ')-1);
		//stats = this.helper_reverseString(stats);
		//var stats = parseInt(count.match(/\d+/));
		//var rcount = parseInt(this.dashboardHibernatedCount.replace(/[^0-9]/g,''));
		var rcount = Number(this.dashboardHibernatedCount);
		expect(Number(stats)).to.eql(rcount);
		console.log('Hibernated count is verified');
	}
	
	verifyTotalSubscribers(){
		//browser.pause(2000);
		//DashboardPage.subscriberOverViewWidgetTotalCount.getText()); //value is not readable so summing up all
		var total = Number(this.dashboardPaidupCount)+	Number(this.dashboardDueCount)+ Number(this.dashboardPastDueCount)+ Number(this.dashboardSuspendedCount)+ Number(this.dashboardProspectCount)+ Number(this.dashboardHibernatedCount);
		console.log('total count is:' + total);
		//var count = DashboardPage.subscriberOverViewWidgetTotalCount;
		expect(total).to.be.above(0); //donut value is not readable to using >0 logic 
	}
	
	openReports(report){
		browser.frameParent();
		SublistPage.subscribersmenu.click();
		DashboardPage.reportsMenu.waitForDisplayed();
		DashboardPage.reportsMenu.click();
		browser.pause(2000);
		
		switch(report){
			
			case "ARPU":
				DashboardPage.billingMenu.waitForDisplayed();
				DashboardPage.billingMenu.click();
				browser.pause(2000);
				DashboardPage.reportARPU.waitForDisplayed();
				DashboardPage.reportARPU.click();
				browser.pause(4000);
				browser.frame(DashboardPage.reportARPUFrame);
				DashboardPage.reportARPUARPU.waitForDisplayed();
				break;
			case "ARDB":
				DashboardPage.billingMenu.waitForDisplayed();
				DashboardPage.billingMenu.click();
				browser.pause(2000);
				DashboardPage.reportAccountsReceivableDateBound.waitForDisplayed();
				DashboardPage.reportAccountsReceivableDateBound.click();
				browser.pause(4000);
				browser.frame(DashboardPage.reportARDBFrame);
				DashboardPage.reportARDBTotalBalanceDue.waitForDisplayed();
				break;
		}
	}
	
	verifyRevenue(){
		//To be developed
		
		var ARPU = this.dashboardRevenueWidgetARPU.replace("$","");
			ARPU = ARPU.replace(/,/g, ""); //replace all instances of comma using g
	/*	var totalRevenue = this.dashboardRevenueWidgetTotalRevenue.replace("$", "");
			totalRevenue = totalRevenue.replace(/,/g, "");*/ // Widget is no longer availble
		var paymentStillDueThisMonth = this.dashboardRevenueWidgetPaymentStillDueThisMonth.replace("$", "");
			paymentStillDueThisMonth = paymentStillDueThisMonth.replace(/,/g, "");
		var dashboardRevenueWidgetTotalInvoicedThisMonth = this.dashboardRevenueWidgetTotalInvoicedThisMonth.replace("$", "");
			dashboardRevenueWidgetTotalInvoicedThisMonth = dashboardRevenueWidgetTotalInvoicedThisMonth.replace(/,/g, "");
		DashboardPage.revenueWidgetARPU.waitForDisplayed();

		this.openReports('ARPU');
		console.log('Report total revenue is: '+ DashboardPage.reportARPUTotalRevenue.getText());
		console.log('Widget APRU is:' + ARPU);
		expect(ARPU).to.eql(String(Math.round(DashboardPage.reportARPUARPU.getText())));
		expect(totalRevenue).to.eql(String(Math.round(DashboardPage.reportARPUTotalRevenue.getText())));
		
		this.openReports('ARDB');
		browser.pause(10000)//report load time is too bad
		var ARDBTotalBalanceDue = DashboardPage.reportARDBTotalBalanceDue.getText();
		ARDBTotalBalanceDue = ARDBTotalBalanceDue.replace("$", "");
		ARDBTotalBalanceDue = ARDBTotalBalanceDue.replace(/,/g, "");
		expect(paymentStillDueThisMonth).to.eql(String(Math.round(ARDBTotalBalanceDue)));//figures are round off on dashboard
		/*Report is not confirmed yet for Total invoiced value so it will be developed later*/
	}
	
	verifyGraphScale() {
		browser.pause(2000);
		DashboardPage.subscribersWidgetCharts.waitForDisplayed();
		expect(DashboardPage.subscribersWidgetCharts).to.exist;
		expect(Number(this.subscribers1weekCount)>5).to.be.true;//weekverification
		console.log('subscriber weekly verified');
		expect(Number(this.subscribers1monthCount) > 3 ).to.be.true;//1monthverification unpredictable so put this condition
		console.log('subscriber 1 month verified');
		//expect(Number(this.subscribers1yearsCount)).to.eql(14);//yearverification
		//console.log('subscriber 1 year verified');
		expect(Number(this.subscribersAllCount) >= 4).to.be.true;//allverification unpredictable so put this condition
		console.log('subscriber All verified');
	}

	verifyGraphPresence(){
		/*Only graph presence will be verified as having issues clicking highchart graphs - need to be resolved later*/
		DashboardPage.subscribersWidgetCharts.waitForDisplayed();
		expect(DashboardPage.subscribersWidgetCharts).to.exist;
		
	}
	
	verifyReportOpens(){
		browser.pause(30000);
		var allhandles = browser.getWindowHandles();
		browser.switchToWindow(allhandles[1]);
		var reportHeader = browser.getTitle();
		//var reportHeader = DashboardPage.reportsWidgetReportHeaders(this.dashboardReportToOpen).getText();
		expect(this.dashboardReportToOpen.includes(reportHeader)).to.be.true;
		browser.switchToWindow(allhandles[0]);
	}
	
	verifyFavoriteReport(){
		DashboardPage.reportsWidgetFavoritesTab.waitForDisplayed();
		DashboardPage.reportsWidgetFavoritesTab.click();
		// browser.pause(5000);
		// DashboardPage.reportsWidgetGlobalFavoritesTab.click();
		browser.pause(10000);
		// console.log('verifying repor present in my fav');
		// browser.debug();
		console.log('going to verify report');
		
		expect(DashboardPage.getReportDetails[1].getText()).to.eql(this.dashboardReportToOpen);
		//expect(DashboardPage.reportsWidgetFirstReport).to.exist;
		//DashboardPage.reportsWidgetFirstReport.click('.favorite-icon');
		//browser.pause(5000);
		
	}

	verifyGlobalFavoriteTab(){
		var tabState;
		browser.pause(3000);
		tabState = DashboardPage.getReportDetails[1].getText();
		//tabState = DashboardPage.reportsWidgetGlobalFavoritesTab.getAttribute('class');
		if(tabState.length > 0){
			expect(1).to.eql(1);
		}else{
			expect(1).to.eql(0);
		}
		// if (tabState.match(/selectedReport.*/)){
			// expect(1).to.eql(1);
			// console.log('executed if statement');
		// }else{
			// expect(1).to.eql(0);
			// console.log('executed else statement');
		// }	
	}
	
	verifyFavoriteTab(){
		var tabState;
		browser.pause(3000);
		tabState = DashboardPage.getReportDetails[1].getText();
		//tabState = DashboardPage.reportsWidgetGlobalFavoritesTab.getAttribute('class');
		if(tabState.length > 0){
			expect(1).to.eql(1);
		}else{
			expect(1).to.eql(0);
		}
		// tabState = DashboardPage.reportsWidgetFavoritesTab.getAttribute('class');
		
		// if (tabState.match(/selectedReport.*/)){
			// expect(1).to.eql(1);
		// }else{
			// expect(1).to.eql(0);
		// }
	}
	
	verifyScheduling(){
		var scheduledEvents;
		var installsScheduled;
		var unshceduled;
		
		browser.pause(10000);
		
		scheduledEvents = DashboardPage.schedulingWidgetScheduledEvents.getText();
		installsScheduled = DashboardPage.schedulingWidgetInstallsScheduled.getText();
		unshceduled = DashboardPage.scheduledWidgetUnscheduled.getText();
		
		if (scheduledEvents.match(/\d+/)){
			expect(1).to.eql(1);
		}else {
			expect(1).to.eql(0);
		}
		
		if (installsScheduled.match(/\d+/)){
			expect(1).to.eql(1);
		}else {
			expect(1).to.eql(0);
		}
		
		if (unshceduled.match(/\d+/)){
			expect(1).to.eql(1);
		}else {
			expect(1).to.eql(0);
		}
	}

	verifySchedulingWidgetDoNotPresentOnDashboard(){
		browser.pause(15000);
		expect(DashboardPage.schedulingWidget.isDisplayed()).to.be.false;
	}

	verifySchedulingWidgetPresentOnDashboard(){
		browser.pause(30000);
		expect(DashboardPage.schedulingWidget.isDisplayed()).to.be.true;
		this.verifyScheduling();//verifying schedules alons with count
	}
}


module.exports = new dashboardActions();