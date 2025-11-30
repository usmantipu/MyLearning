"use strict";
var Page = require('./page')
class SDcalendar extends Page{

    /**top menu */
	get btnAppIcon(){return browser.$('[data-testid="AppsIcon"]');}
	get btnUsers(){return browser.$('li=Users');}
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
    /** */
    get btnCalendar(){return browser.$('button=Calendar');}
    get btnCalendarHeaderParent(){return browser.$('.fc-header-toolbar');}
    get btnCalendarNext(){return this.btnCalendarHeaderParent.$('[aria-label="next"]');}
    get btnCalendarPrev(){return this.btnCalendarHeaderParent.$('[aria-label="prev"]');}
    get btnCalendarToday(){return this.btnCalendarHeaderParent.$('button=Today');}
    get btnCalendarstartOfMonth(){return this.btnCalendarHeaderParent.$('h2');}    
    get btnResourceView(){return this.btnCalendarHeaderParent.$('button=Resource Timeline');}
    get btnWeek(){return this.btnCalendarHeaderParent.$('button=Week');}
    get btnMonth(){return this.btnCalendarHeaderParent.$('button=Month');}
    get technicianView(){return browser.$('.fc-view-container');}
    get allTecnicianRows(){return this.technicianView.$('.fc-widget-content').$('tbody').$$('tr');}
    get btnKanban(){return browser.$('button=Kanban');}
    get btnMore(){return browser.$('[aria-label="More"]');}
    get alldayHeader(){return browser.$('.fc-head-container').$$('.fc-day-header');}
    get allweeksHeader(){return browser.$('.fc-day-grid').$$('.fc-row');}
        allweekDays(parent){return parent.$$('.fc-day-top');}
        allCalendarEvents(parent){return parent.$('.fc-content-skeleton').$('tbody').$$('tr');}
        allColumns(parent){return parent.$$('td');}
    get loadMore(){return browser.$$('.fc-more-cell');}
        openLoadMore(parent){return parent.$('.fc-more');}
        dayNumberByParent(parent){return parent.$$('.fc-day-number');}
    get popOverTitle(){return browser.$('.fc-more-popover').$('.fc-title');}
    get popOverEvents(){return browser.$('.fc-more-popover').$$('.fc-day-grid-event');}
        getEventTicketDetails(parent){return parent.$('.fc-title').$$('span');}
    get allweekDaysEvents(){return browser.$$('.fc-time-grid-event')}
    get allCalendarTimelineEvents(){return browser.$$('.fc-timeline-event');}
    get getTooltipData(){return browser.$('.tooltip');}
    get getTooltipUserName(){return browser.$('.tooltipTitle');}
    get getTooltipLocation(){return browser.$('.tooltipLocation');}
    get getTooltipID(){return browser.$('.tooltipSubtitle');}

    get btnSchedule(){return browser.$('button=Set Schedule');}
        selectDateFromCalendar(dayToSelect){return browser.$('button='+dayToSelect);}
    get btnCurrentDate(){return browser.$('[aria-current="date"]');}
    get btnOk(){return browser.$('//*[@id="simple-popover"]/div[3]/div[3]/button[2]');}
    get inputOpenTime(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[6]/div/div[3]/div/div[1]/div/div[6]/div/div[1]/div/div');}
    get popUpTimeInput(){return browser.$('[type="time"]');}
    get btnTimePopUpOk(){return browser.$('/html/body/div[2]/div[3]/div/div[3]/button[2]');}
    get dockHeader(){return browser.$('.drawer-header');}
    get ticketType(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[6]/div/div[3]/div/div[1]/div/div[3]/div/div/div/div').$('input');}
    get schdeuleDate(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[6]/div/div[3]/div/div[1]/div/div[5]/div/div').$('input');}
    get usernameFromTicket(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[6]/div/div[3]/div/div[1]/div/div[2]/div/div/div/div').$('input');}
    get btnSaveTickedChnages(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[6]/div/div[4]/div[2]/div/div[2]/span/button');}
    get ticketAddress(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[6]/div/div[3]/div/div[1]/div/div[7]/div/div/div/div[5]/h6');}
    get btnCloseOpenedTicket(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[6]/div/div[1]/button[4]');}
    get serviceContactAreaParent(){return browser.$('.MuiDrawer-paperAnchorRight').$('.MuiCardContent-root*=Service Contact');}
    get serviceContactArea(){return this.serviceContactAreaParent.$$('.MuiTypography-root');}
    get stretchTableToView(){return browser.$('/html/body/section/div/div[2]/div[2]/main/div[4]/div/div[2]/div/table/tbody/tr/td[3]/div/div/div/div[1]/div/table/tbody/tr/td/div');}
    get newticketType(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[3]/div/div[1]/div/div[3]/div/div/div/div').$('input');}
    get newticketscheduleDate(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[3]/div/div[1]/div/div[5]/div/div/div').$('input');}
    get newticketusername(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[3]/div/div[1]/div/div[2]/div/div/div/div').$('input');}
    get dockTicket(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[6]/div/div[1]/button[3]');}
    
    open(path){	super.open(path);}

}
module.exports = new SDcalendar();