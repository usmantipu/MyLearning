const {Given, When, Then} = require("@cucumber/cucumber");
const dashboardPage = require('../pageobjects/dashboard.page');
const dashboardActions = require('../support/dashboardActions');
const sublistActions = require('../support/subscriberlistActions');
const Utils = require('../support/utils');

	
	Given(/^I go to Visp URL$/, function(){
		dashboardActions.openVispApp();
		
	});
	
	Given(/^I login using my credentials$/, function(creds){
		dashboardActions.loginToVisp(creds);
	});
	
	When(/^I am on dashboard$/, function(){
		
		dashboardActions.onDashboard();
	});

	When(/^I click on element to zoom$/, function(element) {
		var table = element.raw();
		for(var i=0; i< table.length; i++){
			dashboardActions.zoomSubscribers(table[i][0]);
		}
	});
	
	When(/^I select subscriber period to zoom$/, function(periods){
		//dashboardActions.zoomSubscribers(periods);
		 table = periods.raw();
		for(var i=0; i< table.length; i++){
			dashboardActions.zoomSubscribers(table[i][0]);
		}
	});
	
	When(/^I select different ticket statuses$/, function(statuses){
		var table = statuses.raw();
				
		for(var i=0; i<table.length; i++){
			dashboardActions.selectTicketStatus(table[i][0]);
		}
	});
	When(/^I click on a record in available tickets$/, function(){
		dashboardActions.openAndCloseTicketFromDashboard();
	});
	When(/^I select different periods to zoom for Package revenue widget$/, function(packages){
		var table = packages.raw();
		
		for(var i=0; i<table.length; i++){
			dashboardActions.selectPackage(table[i][0]);			
		}
	});
	
	When(/^I click on a record in markReportFavoriteavailable reports$/, function(report){
		var table = report.raw();
		dashboardActions.clickDashboardReport(table[0][0]);
		
	});

	When(/^I click on open new tab for available report$/, function(){
		
		dashboardActions.clickOpenReportInNewTab();
	});

	When(/^I mark a report as favorite$/, function(){
		
		dashboardActions.markReportFavorite();
	});
	
	When(/^I select global favorite reports$/, function(){
		dashboardActions.openGlobalFavoriteReports();
	});
	
	When(/^I select My favorite reports$/, function(){
		dashboardActions.openFavoriteReports();
	});
	
	When(/^I open dashboard customization window$/, function(){
		dashboardActions.openCustomizationWindow();
	});

	When(/^I turn off desired widgets$/, function(){
		dashboardActions.toggleSchedulingWidget();
		dashboardActions.closeCustomizationWindow();
	});

	When(/^I turn on desired widgets$/, function(){
		dashboardActions.toggleSchedulingWidget();
		dashboardActions.closeCustomizationWindow();
	});

	Then(/^I can view different widgets$/, function(widgets){
		dashboardActions.verifyWidgets(widgets);
		console.log('I can view different widgets');
		Utils.clearLocalStorage()
	});
	
	Then(/^I can see total subscribers$/, function(){
		//sublistActions.openSubscriberList();
		dashboardActions.verifyTotalSubscribers();
		//console.log('Under development step');
	});
	
	Then(/^I can see count for paid up, Due, Past Due, Suspended, Prospects, and Hibernated users$/, function(){
		dashboardActions.openPaidUpSubscriberList();
		//sublistActions.clickSortingButton('Paid up');

		dashboardActions.verifySubscriberPaidupCount();

		// sublistActions.clickSortingButton('Paid up');
		// sublistActions.clickSortingButton('Prospect');
		// dashboardActions.verifySubscriberProspectCount();
		// sublistActions.clickSortingButton('Prospect');
		// sublistActions.clickSortingButton('Due');
		// dashboardActions.verifySubscriberDueCount();
		// sublistActions.clickSortingButton('Due');
		// sublistActions.clickSortingButton('Past Due');
		// dashboardActions.verifySubscriberPastDueCount();
		// sublistActions.clickSortingButton('Past Due');
		// sublistActions.clickSortingButton('Suspended');
		// dashboardActions.verifySubscriberSuspendedCount();
		// sublistActions.clickSortingButton('Suspended');
		// sublistActions.clickSortingButton('Hibernated');
		// dashboardActions.verifySubscriberHibernatedCount();
		// console.log('Subscriber count verified successfully!');
		Utils.clearLocalStorage()
	});
	
	Then(/^I can see Total revenue, ARPU, Payment still due this month, and Total invoiced this month on Revenue widget$/, function(){
		dashboardActions.verifyRevenue();
		console.log('Revenue widget verified!');
		Utils.clearLocalStorage()
	});
	
	Then(/^I can see subscriber graph accordingly$/, function() {
		dashboardActions.verifyGraphScale();
	});

	Then(/^I can see paid up, due, past due, and suspended count in graph datewise$/, function(){
		dashboardActions.verifyGraphPresence();
		console.log('Verified that Graph exists!');
		Utils.clearLocalStorage()
	});
	
	Then(/^tickets are filtered as per selected status in widget$/, function(){
		dashboardActions.verifyTicketStatus();
		console.log('Tickets status  are verified');
		Utils.clearLocalStorage()
	});
	Then(/^Ticket details should be open in docker$/, function(){
		dashboardActions.VerifyTicketDetailOpenInDocker();
		console.log('Ticket Details are present in Docker ');
		Utils.clearLocalStorage()
	});
	Then(/^I can see total revenue in graph datewise$/, function(){
		dashboardActions.verifyPackageChart();
		Utils.clearLocalStorage()		
	});
	
	Then(/^Report details should be open in new tab$/, function(){
		dashboardActions.verifyReportOpens();
		console.log('Report is opened in a new tab');
		Utils.clearLocalStorage()	

	});
	
	Then(/^Report becomes available under My Favorite tab$/,function(){
		dashboardActions.verifyFavoriteReport();
		console.log('Report is marked as favorite!');
		Utils.clearLocalStorage()	
	});
	
	Then(/^Global favorite reports should become visible$/, function(){
		dashboardActions.verifyGlobalFavoriteTab();
		console.log('Global favorite reports are visible!');
		Utils.clearLocalStorage()	
	});
	
	Then(/^My favorite reports should become available in record list$/, function(){
		dashboardActions.verifyFavoriteTab();
		console.log('Favorite reports are visible!');
		Utils.clearLocalStorage()	
	});
	
	Then(/^I can see scheduled, unscheduled, and Installed scheduled records on Scheduling widget$/, function(){
		dashboardActions.verifyScheduling();
		console.log('Scheduling is verified!');
		Utils.clearLocalStorage()	
	});

	Then(/^Desired widgets should be turned off on dashboard$/, function(){
		dashboardActions.verifySchedulingWidgetDoNotPresentOnDashboard();
		console.log('Scheduling widget is turned off on dashbaord!');
		//Utils.clearLocalStorage()	
	});

	Then(/^Desired widgets should be turned on on dashboard$/, function(){
		dashboardActions.verifySchedulingWidgetPresentOnDashboard();
		console.log('Scheduling widget is turned on on dashbaord!');
		//Utils.clearLocalStorage()	
	});