"use strict";
var Page = require('./page')

class dashboardPage extends Page{

	get dashboardTitle(){return browser.$('h4*=Welcome');}
	get subscriberOverviewWidget(){return browser.$('.MuiTypography-root=Overview - Subscribers Count');}
	get revenueWidget(){return browser.$('.MuiTypography-root=Revenue');}
	get subscribersWidget(){return browser.$('.MuiGrid-root=Subscribers');}
	get ticketsWidget(){return browser.$('.MuiTypography-root=Tickets');}
	get packageRevenueWidget(){return browser.$('.MuiTypography-root=Package - Revenue');}
	get reportsWidget(){return browser.$('.MuiTypography-root=Reports');}
	get schedulingWidget(){return browser.$('.MuiTypography-root=Scheduling');}
	get inventoryProfileWidget(){return browser.$('.MuiTypography-root=Inventory Profiles');}
	
	get subscriberOverViewWidgetPaidupCount(){return browser.$('#paid_up').$('.font-weight-bold');}
	get subscriberOverViewWidgetDueCount(){return browser.$('#due').$('.font-weight-bold');}
	get subscriberOverViewWidgetPastDueCount(){return browser.$('#past_due').$('.font-weight-bold');}
	get subscriberOverViewWidgetSuspendedCount(){return browser.$('#suspended').$('.font-weight-bold');}
	get subscriberOverViewWidgetHibernatedCount(){return browser.$('#hibernated').$('.font-weight-bold');}
		
	get subscriberOverViewWidgetProspectCount(){return browser.$('#prospects').$('.font-weight-bold');}
	get subscriberOverViewWidgetTotalCount(){return browser.$('.chartjs-render-monitor');}
	get subscriberListLink(){return browser.$('.link-subscriber-icon')}
	get subscribersWidget1Week(){return browser.$('div*=Subscribers').$('.highcharts-button=1 Week');}
	get subscribersWidgetsChart() {return browser.$('div*=Subscribers').$('.highcharts-tracker').$$('.highcharts-point ');}
	get subscribersWidget1Month(){return browser.$('div*=Subscribers').$('.highcharts-button=1 Month');}
	get subscribersWidget3Month(){return browser.$('div*=Subscribers').$('.highcharts-button=3 Months');}
	get subscribersWidgetThisYear(){
		var parent = browser.$$('div*=Subscribers')[1].$$('.highcharts-button');
		for (let i = 0; i < parent.length; i++) {
			console.log(parent[i].getText());
			if(parent[i].getText()=='This Year')
			return parent[i];
		  }}
	get subscribersWidgetAll(){return browser.$('div*=Subscribers').$('.highcharts-button=All');}
	get subscribersWidgetCharts(){	return browser.$('div*=Subscribers').$('.highcharts-root');}
	get subscriberHighChartAxisLable(){return browser.$('div*=Subscribers').$('.highcharts-root').$('.highcharts-xaxis-labels').$$('text');}
	get getTooltipOneLine(){return browser.$('div*=Subscribers').$('.highcharts-root').$('.highcharts-tooltip');}
	get getAllTooltipValues(){return browser.$('div*=Subscribers').$('.highcharts-root').$('.highcharts-tooltip').$$('.highcharts-label');}
	
	get revenueWidgetTotalRevenue(){
		return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/section/div[2]/div/div/div/div[4]/div[2]/div/div[1]/span');
	//	return browser.$('.total-Revenue');
	}

	get revenueWidgetARPU(){
		return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/section/div[2]/div/div/div/div[4]/div[2]/div/div[2]/span');
	//	return browser.$('.row .dashboard-revenue:nth-child(2)');
	}
	get revenueWidgetPaymentStillDueThisMonth(){
		return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/section/div[2]/div/div/div/div[4]/div[2]/div/div[3]/span');
	//	return browser.$('.pay-due');
	}
	get revenueWidgetTotalInvoicedThisMonth(){
		return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/section/div[2]/div/div/div/div[4]/div[2]/div/div[4]/span');
	//	return browser.$('.pay-invoice');
	}
	
	get reportsMenu(){return browser.$('.nav-text=Reports');}
	get billingMenu(){return browser.$('.list-item=Billing');}
	
	get reportARPU(){return browser.$('.report-item-title=Average Revenue Per User Report');}
	get reportARPUFrame(){
						var id = browser.$('.docker-item-container').getAttribute('id');
						var myFrame = $('//*[@id="'+id+'"]/div[2]/div/iframe').value;
						return myFrame;}
	get reportARPUARPU(){return browser.$('//*[@id="tablez"]/div[1]/div[3]/table/tbody/tr/td[5]');}
	get reportARPUTotalRevenue(){return browser.$('//*[@id="tablez"]/div[1]/div[3]/table/tbody/tr/td[1]');}//using xpath as chromedriver throws exception due to alot of elements on report
	
	get reportAccountsReceivableDateBound(){return browser.$('.report-item-title=Accounts Receivable Report (Date Bound)');}
	get reportARDBFrame(){
						var id = browser.$('.docker-item-container').getAttribute('id');
						var myFrame = $('//*[@id="'+id+'"]/div[2]/div/iframe').value;
						return myFrame;
	}
	get reportARDBTotalBalanceDue(){return browser.$('//*[@id="tablez"]/div[1]/div[1]/table/tbody/tr[1]/td[9]');}
	

	// update the selectors for statuses
//	get ticketWidgetUnassigned(){return browser.$('.MuiTypography-subtitle1*=Unassigned');}
	get ticketWidgetUnassigned(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/section/div[2]/div/div/div/div[6]/div[2]/div[1]/div/div/h6[6]/b');}

//	get ticketWidgetAssigned(){return browser.$('.MuiTypography-subtitle1*=Assigned');}
	get ticketWidgetAssigned(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/section/div[2]/div/div/div/div[6]/div[2]/div[1]/div/div/h6[5]/b');}

//	get ticketWidgetOpen(){return browser.$('.MuiTypography-subtitle1*=Open');}
	get ticketWidgetOpen(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/section/div[2]/div/div/div/div[6]/div[2]/div[1]/div/div/h6[2]/b');}

//	get ticketWidgetPending(){return browser.$('.MuiTypography-subtitle1*=Pending');} 
	get ticketWidgetPending(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/section/div[2]/div/div/div/div[6]/div[2]/div[1]/div/div/h6[3]/b');} 

//	get ticketWidgetResolved(){return browser.$('.MuiTypography-subtitle1*=Resolved');}
	get ticketWidgetResolved(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/section/div[2]/div/div/div/div[6]/div[2]/div[1]/div/div/h6[4]/b');}
	
	get ticketCloseDialog(){
//		var allbuttons = browser.$$('.MuiIconButton-sizeSmall'); ui-upgrade
		var allbuttons = browser.$$('button');
		for (let i = 0; i < allbuttons.length; i++) {
			if(allbuttons[i].getAttribute('aria-label')=='Close')
			return allbuttons[i];
		  }
	}

	
	get ticketWidgetStatus(){return browser.$$('.tbody-package');}
	
	get packageWidget1Week(){return browser.$('.highcharts-button=1 Week');}
	get packageWidget1Month(){return browser.$('.highcharts-button=1 Month');}
	get packageWidget3Month(){return browser.$('.highcharts-button=3 Months');}
	get packageWidgetThisYear(){return browser.$('.highcharts-button=This Year');}
	get packageWidgetAll(){return browser.$('.highcharts-button=All');}

	get getTicketDetails(){
						var parent = browser.$('.ticketTable');
						//var parent = browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/section/div[2]/div/div/div/div[6]/div[2]/div[2]/div/div');
						var rows = parent.$$('tr');
						var columns = rows[0].$$('td');
						return columns[5];
	}
	get packageWidgetChart(){return browser.$('.highcharts-plot-background');}
	
		reportsWidgetReport(report){return brows0;er.element('.report-item-title='+report);}
		reportsWidgetReportHeaders(report){return browser.$('h2='+report);}

		
	get reportsWidgetFirstReport(){return browser.$('.report-item-actions');}


	get reportsWidgetOpenNewTab(){return browser.$('#action');}
	get reportsWidgetGlobalFavoritesTab(){return browser.$('b=Global Favorites');}
	get reportsWidgetFavoritesTab(){return browser.$('b=My Favorites');}
	get reportsWidgetFavoritesTabStatus(){return browser.$('h4=No Favorites Available...');}
	get getReportDetails(){
						//var reportstab =  $('.col-sm-12.reportsTable');
						
						//var compeletetable =  browser.$('.table.table-striped.table-hover');
						var compeletetable = browser.$('.reportsTable');
						var bodypackage = compeletetable.$('.tbody-package');
						var allrows = bodypackage.$$('tr');
						//console.log(allrows[0]);
						var columns = allrows[0].$$('td');
						return columns;
	}

	getFavoriteIconStatus(parent){return parent.$('.MuiSvgIcon-root');}

	get schedulingWidgetScheduledEvents(){
		var allgriditems = browser.$$('.MuiGrid-item');
		for (let i = 0; i < allgriditems.length; i++) {
			if(allgriditems[i].getText().includes('Active Scheduled'))
				return allgriditems[i];
		  }
	}
	get schedulingWidgetInstallsScheduled()
	{
		var allgriditems = browser.$$('.MuiGrid-item');
		for (let i = 0; i < allgriditems.length; i++) {
			if(allgriditems[i].getText().includes('Active Scheduled Installs'))
				return allgriditems[i];
		  }
	}
	get scheduledWidgetUnscheduled()
	{
		var allgriditems = browser.$$('.MuiGrid-item');
		for (let i = 0; i < allgriditems.length; i++) {
			if(allgriditems[i].getText().includes('Active Unscheduled'))
				return allgriditems[i];
		  }
	}
	
	get customizationButton(){		
		var allgrid = browser.$$('.MuiGrid-item');
		for (let i = 0; i < allgrid.length; i++) {
			if(allgrid[i].getText().includes('Welcome'))
			{
				return allgrid[i+2];
			}
		  }

		  
	}
	get sidebarClose(){return browser.$$('[data-testid="CloseIcon"]');}

	get sidebarSchedulingWidget()
	{
		var alltoggleitems = browser.$$('.drawer-list-toggle');
		for (let i = 0; i < alltoggleitems.length; i++) {
			var itemText = alltoggleitems[i].$('.MuiListItemText-root');
			if(itemText.getText().includes('Scheduling'))
			{
				return alltoggleitems[i].$('.MuiSwitch-root');
			}
		  }
	}

	open() {
        super.open('login');
		
    }
	
	submit() {
        this.form.submitForm();
    }		

}

module.exports = new dashboardPage();