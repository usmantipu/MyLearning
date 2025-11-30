const utils = require('../support/utils');
"use strict";
var Page = require('./page')

class _CRMaddTask extends Page {


	// get addTaskIcon () {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[6]/div/div[3]/div/div[2]/div/div[1]/div').$('[data-testid="AddIcon"]');}
	get addTaskIcon () {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[6]/div/div[3]/div/div[2]/div/div[1]/div/div[2]/span/button');}
	get tabTickets(){return browser.$('button=List');}
	get btnAll(){return browser.$('.sort-filters=All')}
	get btnResolved(){return browser.$('.sort-filters=Resolved');}
	get loader(){return browser.$('.sub-loader');}
	// get tablServiceDeskRowOne(){return browser.$('.bottomRightGrid').$('.MuiTypography-root');}
	get tablServiceDeskRowOne(){return browser.$('//div[@class="ReactVirtualized__Grid bottomRightGrid"]/div[@role="rowgroup"]/div[3]');}
	// get tablServiceDeskRowOne(){return browser.$('.bottomRightGrid').$('.MuiTypography-root');}
	get closeButtonOnTicket () {return browser.$('.docker-buttons').$$('.MuiButtonBase-root')[3];}
	// get taskTextBox () {return browser.$('[name="tasks.0.task"]');}
	get taskTextBox () {return browser.$('[placeholder="Add Task"]');}
	get btnSaveOnTicketDocker () {return browser.$('button=Save');}
	get confirmationMsg () {return browser.$('.MuiAlert-message');}
	get btnPlusInHeader () {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/header/div/div[3]/button[1]');}
	get topMenuItemTicket(){return browser.$('li=Open Ticket');}
	get ticketTypeInput () {return browser.$('[name="ticketType"]');}
	get ticketSummary(){return browser.$('[name="summary"]');}
	get saveButtonOnTicket (){return browser.$('button=Save');}
	get tickIconForTask () {return browser.$('.d-inline-block').$('.MuiIconButton-colorPrimary').$('[data-testid="CheckCircleIcon"]');}
	get crossIconForTask () {return browser.$('.d-inline-block').$$('.MuiButtonBase-root')[1];}
	get btnAppIcon(){return browser.$('[data-testid="AppsIcon"]');}
	get ISPLogs () {return browser.$('li=ISP Logs');}
	get ISPTab () {return browser.$('.my-2').$('span=ISP')}
	get taskInISPLogs () {return browser.$('//main/div[7]/div/div[2]/div[2]/div[3]/div[1]/div[1]/div/div/div/div[2]').$('.bottomRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('.MuiTableCell-root')[3];}
	get ticketID (){return browser.$$('.MuiTabs-flexContainer')[1].$$('.MuiButtonBase-root')[0];}

	get openTicketActivity(){return browser.$$('[data-testid="LaunchIcon"]')[2];}
	get ticketActivityCaption (){return browser.$('h6=Ticket Activity');}
	get taskInTicketActivity () {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[6]/div/div[6]/div/div[2]/div[2]/div[1]/div/div').$('.bottomRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('.MuiTableCell-root')[2];}

	get calendarControl () {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[4]/div/div');}
	get calendarFilterOptionAll(){return browser.$('.rdrStaticRanges').$('span=All');} 
	get btnApplyTimePeriod(){return browser.$('button=Apply');}
	// get tablServiceDeskRowOne(){return browser.$('//div[@class="ReactVirtualized__Grid bottomRightGrid"]/div[@role="rowgroup"]/div[3]');}


	addedTasks(text) {var allTasks = browser.$('.css-op5ity').$$('.MuiGrid-root')[0].$('.MuiGrid-container').$$('.text-left');
	console.log('verifying task text :' + text);						
	for (var i=0; i<allTasks.length; i++)
							{
								console.log('index is : '+ i +' and value is '+ allTasks[i].getText());	
								if(allTasks[i].getText().includes(text))
								{
								 	//element = allTasks[i].getText();
									 console.log('found task with text :' + allTasks[i].getText());
									 return allTasks[i].getText();
								}
							}
					}


}
module.exports = new _CRMaddTask();
