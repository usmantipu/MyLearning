const utils = require('../support/utils');
"use strict";
var Page = require('./page')

class crmCalendar extends Page {
	get CalendarTab() { return browser.$('p=Service Dispatch'); }
	get btnCalendarHeaderParent(){return browser.$('.fc-header-toolbar');}
	get btnCalendarNext(){return this.btnCalendarHeaderParent.$('[aria-label="next"]');}
    get btnCalendarPrev(){return this.btnCalendarHeaderParent.$('[aria-label="prev"]');}
    get btnCalendarToday(){return this.btnCalendarHeaderParent.$('button=today');}
	get btnCalendarstartOfMonth(){return this.btnCalendarHeaderParent.$('h2');}
	get btnAppIcon(){return browser.$('[data-testid="AppsIcon"]');}
	get btnUsersAndTeams(){return browser.$('li=Teams And Users');}
	get btnUsers(){return browser.$('button=Users');}
	get btnAddUser(){return browser.$('button=Add User');}
    get nameOfUser(){return browser.$('[name="realname"]');}
    get username(){return browser.$('[name="username"]');}
    get password(){return browser.$('[name="password"]');}
    get confirmPassword(){return browser.$('[name="confirm_password"]');}
    get spanTechnicianCheck(){return browser.$('[label="Set this App User as Technician"]');}
    get inputOfCheckBox(){return this.spanTechnicianCheck.$('input');}
    get statusOfCheckBox(){return this.spanTechnicianCheck.$('svg');}
    get btnSaveUser(){return browser.$('.MuiDrawer-paperAnchorDockedRight*=New User').$('button=Save');}
	get confirmationMsg(){return browser.$('.MuiAlert-message');}
		isAlertPresent(message){return browser.$('.MuiAlert-message='+message);}
    get btnCloseAddedUserDialog(){return browser.$('[aria-label="Back"]');}
    get btnCloseUserSettings(){return browser.$('.settings-drawer-wrapper').$$('[aria-label="Close"]');}
	get technicianView(){return browser.$('.fc-view-container');}
    get allTecnicianRows(){return this.technicianView.$('.fc-widget-content').$('tbody').$$('tr');}
	get btnSchedule(){return browser.$('button=Schedule');}
        selectDateFromCalendar(dayToSelect){return browser.$('button='+dayToSelect);}
    get btnCurrentDate(){return browser.$('[aria-current="date"]');}
    get btnOk(){return browser.$('//*[@id="simple-popover"]/div[3]/div[3]/button[2]');}
    get inputOpenTime(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div/div[1]/div/div[6]/div/div[1]/div/div');}
    get popUpTimeInput(){return browser.$('[type="time"]');}
    get btnTimePopUpOk(){return browser.$('button=OK');}
	get dockHeader(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[2]/div/div/div/button[1]');}
	get schdeuleDate(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div/div[1]/div/div[5]/div/div/div').$('input');}
    get usernameFromTicket(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div/div[1]/div/div[2]/div/div/div/div').$('input');}
	get serviceContactAreaParent(){return browser.$('.MuiDrawer-paperAnchorRight').$('.MuiCardContent-root*=Service Contact');}
    get serviceContactArea(){return this.serviceContactAreaParent.$$('.MuiTypography-root');}
	get btnSaveTickedChnages(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[4]/div[2]/div/div[2]/span/button');}
	get btnCloseOpenedTicket(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[1]/button[4]');}
	get ticketType() { return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div/div[1]/div/div[3]/div/div/div/div/input'); }
	get btnOpenCalendarMenu() { return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[1]/div[1]/div/div[2]/button[2]'); }
	get btnFull(){return browser.$('.MuiListItemText-root=Full');}
		isOptionChecked(parent){return parent.$('svg');}
	get allDayEvents(){return browser.$$('.fc-widget-content')}
    get allCalendarTimelineEvents(){return browser.$$('.fc-timeline-event');}
    get getTooltipData(){return browser.$('.MuiTooltip-tooltip').$$('.MuiTypography-caption');}
    get getTooltipUserName(){return browser.$('.tooltipTitle');}
    get getTooltipLocation(){return browser.$('.tooltipLocation');}
    get getTooltipID(){return browser.$('.tooltipSubtitle');}
		getEventTicketDetails(parent){return parent.$('h6');}
}
module.exports = new crmCalendar();