var CRMcalendarPage = require('../pageobjects/_crmCalendar.page');
var SubListPage = require('../pageobjects/subscriberlist.page');
var Utils = require('./utils');
var expect = require('chai').expect;

class crmCalendarActions {
    constructor(){
        this.realName;
        this.username;
        this.passwprd="Test@1234";
		this.ticketType;
        this.scheduledDate;
        this.scheduleDay;
        this.openedTicketId;
        this.ticketAddress;
        this.tooltipName;
        this.tooltipLocation;
        this.tooltipID;
        this.successAddCongMsg='Alert successfully added.';
    }
    refreshPage()
    {
        browser.pause(2000);
        browser.refresh();
        browser.pause(5000);
    }
    gotoCalendar()
    {
        browser.pause(2000);
        browser.keys(['\uE00C']);
        CRMcalendarPage.CalendarTab.waitForDisplayed();
        CRMcalendarPage.CalendarTab.scrollIntoView;
        browser.pause(7000);
    }
	createNewTechnician()
    {
        CRMcalendarPage.btnAppIcon.waitForDisplayed();
        CRMcalendarPage.btnAppIcon.waitForClickable();
        CRMcalendarPage.btnAppIcon.click();
		CRMcalendarPage.btnUsersAndTeams.waitForDisplayed();
        CRMcalendarPage.btnUsersAndTeams.waitForClickable();
        CRMcalendarPage.btnUsersAndTeams.click();
        CRMcalendarPage.btnUsers.waitForDisplayed();
        CRMcalendarPage.btnUsers.waitForClickable();
        CRMcalendarPage.btnUsers.click();
        CRMcalendarPage.btnAddUser.waitForDisplayed();
        CRMcalendarPage.btnAddUser.waitForClickable();
        CRMcalendarPage.btnAddUser.click();
        this.realName = Utils.generateName();
        console.log('extracted name is '+this.realName);
        CRMcalendarPage.nameOfUser.waitForDisplayed();
        CRMcalendarPage.nameOfUser.setValue(this.realName);
        this.username =this.realName.replace(/\s+/g, '');
        CRMcalendarPage.username.waitForDisplayed();
        CRMcalendarPage.username.setValue(this.username);		
        CRMcalendarPage.password.waitForDisplayed();
		CRMcalendarPage.password.waitForClickable();
        CRMcalendarPage.password.setValue(this.passwprd);
        CRMcalendarPage.confirmPassword.waitForDisplayed();
        CRMcalendarPage.confirmPassword.setValue(this.passwprd);
        if(CRMcalendarPage.statusOfCheckBox.getAttribute('data-testid')==="CheckBoxOutlineBlankIcon")
        {
            CRMcalendarPage.inputOfCheckBox.click();
            browser.pause(1000);
        }
        CRMcalendarPage.btnSaveUser.waitForDisplayed();
        CRMcalendarPage.btnSaveUser.waitForClickable();
        CRMcalendarPage.btnSaveUser.click();
        //CRMcalendarPage.confirmationMsg.waitForDisplayed();
         browser.pause(5000);
        CRMcalendarPage.btnCloseAddedUserDialog.waitForDisplayed();
        CRMcalendarPage.btnCloseAddedUserDialog.waitForClickable();
        CRMcalendarPage.btnCloseAddedUserDialog.click();
        browser.pause(5000);
        //CRMcalendarPage.btnCloseUserSettings.waitForDisplayed();
        //CRMcalendarPage.btnCloseUserSettings.waitForClickable();
        var allClosedButtons = CRMcalendarPage.btnCloseUserSettings;
        allClosedButtons[0].click();
    }
	schdeuleTicketAndKeepData(dayToSelect)
    {
        CRMcalendarPage.btnSchedule.waitForDisplayed();
        CRMcalendarPage.btnSchedule.waitForClickable();
        CRMcalendarPage.btnSchedule.click();
        CRMcalendarPage.btnCurrentDate.waitForDisplayed();
        this.scheduleDay = CRMcalendarPage.btnCurrentDate.getText();
        CRMcalendarPage.btnCurrentDate.click();
        browser.pause(2000);
        CRMcalendarPage.btnOk.waitForDisplayed();
        CRMcalendarPage.btnOk.waitForClickable();
        CRMcalendarPage.btnOk.click();
        CRMcalendarPage.inputOpenTime.waitForDisplayed();
        //CRMcalendarPage.inputOpenTime.waitForClickable();
        CRMcalendarPage.inputOpenTime.click();
		browser.pause(2000);
        //CRMcalendarPage.popUpTimeInput.waitForDisplayed();
        var hourtoSet = Math.floor(Math.random() * 10)+6;
		console.log('going to schedule at '+hourtoSet);
        if(hourtoSet<10){hourtoSet='0'+hourtoSet;}
        CRMcalendarPage.popUpTimeInput.setValue(hourtoSet+':00:00');
        CRMcalendarPage.btnTimePopUpOk.waitForDisplayed();
        CRMcalendarPage.btnTimePopUpOk.waitForClickable();
        CRMcalendarPage.btnTimePopUpOk.click();
        CRMcalendarPage.dockHeader.waitForDisplayed();
        this.openedTicketId = CRMcalendarPage.dockHeader.getText().replace(/[^\d]/g,'');
        this.ticketType = CRMcalendarPage.ticketType.getAttribute('value');
        this.username = CRMcalendarPage.usernameFromTicket.getAttribute('value');
        this.ticketAddress = CRMcalendarPage.serviceContactArea[2].getText();
        console.log('extracted ticket id is '+this.openedTicketId);
        console.log('extracted ticket type is '+this.ticketType);
        console.log('extracted ticket username is '+this.username);
        console.log('extracted ticket address is '+this.ticketAddress);
        CRMcalendarPage.btnSaveTickedChnages.waitForDisplayed();
        CRMcalendarPage.btnSaveTickedChnages.waitForClickable();
		CRMcalendarPage.btnSaveTickedChnages.click();
		CRMcalendarPage.confirmationMsg.waitForDisplayed();
		this.scheduledDate = CRMcalendarPage.schdeuleDate.getAttribute('value');
		console.log('extracted ticket schedule is '+this.scheduledDate);
		browser.pause(5000);
        CRMcalendarPage.btnCloseOpenedTicket.click();
    }
	isDayBetweenWeekDays(numberToCheck)
    {
        var extractedData = CRMcalendarPage.btnCalendarstartOfMonth.getText();
        var myArr = [extractedData];
        var filtered = myArr[0].replace(/\D+/g, ' ').trim().split(' ').map(e => parseInt(e));
        var startValue = filtered[0];
        var endValue = filtered[1];
        console.log(startValue);
        //console.log(endValue);
        //var numberToCheck =24;
        if(numberToCheck<startValue)
            return true;
        if(numberToCheck>=startValue)
            return false;
    }
	moveToNextIfDayIsNotInRange()
    {
        //this.scheduledDate="May 20, 2023";
        var date = new Date(this.scheduledDate);//get date from ticket schedule time
        var year = date.getFullYear();
        var months = date.toLocaleDateString(undefined, { month: 'numeric'});
        var day = String(date.getDate()).padStart(1, '0');
        var extractedDateFormat = year+'-'+months+'-'+day;
        this.scheduleDay = Number(day);
        console.log('number to check is '+this.scheduleDay);
        if(this.isDayBetweenWeekDays(Number(day)))
        {
			CRMcalendarPage.btnCalendarPrev.moveTo();
			CRMcalendarPage.btnCalendarPrev.waitForClickable();
            CRMcalendarPage.btnCalendarPrev.click();
            browser.pause(5000);
        }
        return extractedDateFormat;
    }
	fullViewOfCalendar()
	{
		CRMcalendarPage.btnOpenCalendarMenu.waitForDisplayed();
        CRMcalendarPage.btnOpenCalendarMenu.waitForClickable();
		CRMcalendarPage.btnOpenCalendarMenu.click();
		CRMcalendarPage.btnFull.waitForDisplayed();
		CRMcalendarPage.btnFull.click();
		browser.pause(5000);
		browser.keys(['\uE00C']);
		// if(CRMcalendarPage.isOptionChecked(CRMcalendarPage.btnFull).getAttribute('data-testid')!="DoneIcon")
		// {
		// 	CRMcalendarPage.btnFull.click();
		// 	browser.pause(5000);
		// }
	}
	clickOnTicketEvent()
	{
		browser.pause(3000);
        var allevents = CRMcalendarPage.allCalendarTimelineEvents;
        var eventDetails;
        for (let i = 0; i < allevents.length; i++) {
                    allevents[i].scrollIntoView();
                    allevents[i].moveTo();
                    browser.pause(1000);
                    this.tooltipName = CRMcalendarPage.getTooltipData[0].getText();
                    this.tooltipID = CRMcalendarPage.getTooltipData[4].getText();
                    if(this.tooltipID.includes(this.openedTicketId))
                        {
                            console.log('ticked id matched');
                            allevents[i].click();
							browser.pause(3000);
                            break;
                        }
		  }
	}




	verifyCalendarIsOpened()
	{
		CRMcalendarPage.btnCalendarNext.waitForDisplayed();
        CRMcalendarPage.btnCalendarNext.waitForClickable();
        expect(CRMcalendarPage.btnCalendarHeaderParent.isExisting()).to.be.true;
        console.log('calendar header exists');
        expect(CRMcalendarPage.btnCalendarNext.isExisting()).to.be.true;
        console.log('calendar next button exists');
        expect(CRMcalendarPage.btnCalendarPrev.isExisting()).to.be.true;
        console.log('calendar previous exists');
        expect(CRMcalendarPage.btnCalendarToday.isExisting()).to.be.true;
        console.log('calendar today exists'); 
	}
	verifyTechnicianPresent()
	{
		//this.realName='Obese Point';
        var alltechnicians = CRMcalendarPage.allTecnicianRows;
        let isPresent = false;
        for (let i = 0; i < alltechnicians.length; i++) {
            if(alltechnicians[i].getText().includes(this.realName))
            {
                isPresent = true;
                break;
            }
		  }
        expect(isPresent).to.be.true;//techinicain is present
	}
	selectToday()
	{
        browser.pause(3500);
		CRMcalendarPage.btnCalendarToday.waitForDisplayed();
        if(CRMcalendarPage.btnCalendarToday.isClickable())
        {
            CRMcalendarPage.btnCalendarToday.waitForClickable();
		    CRMcalendarPage.btnCalendarToday.click();
            console.log('Today is selected');
		    browser.pause(3000);
        }
	}
	verifyTicketEvent()
	{
		this.moveToNextIfDayIsNotInRange();
		browser.pause(3000);
        var allevents = CRMcalendarPage.allCalendarTimelineEvents;
        let status = false;
        for (let i = 0; i < allevents.length; i++) {
            if(allevents[i].isExisting())
            {
                status = true;
            }
		  }
          expect(status).to.be.true;// event get selected
        console.log('scheduled event present');
	}
	verifyTicketData()
    {
		// this.openedTicketId='44';
		// this.username='Monika Rozycki (mrozycki3)';
		// this.ticketType='Onsite: Install';
        browser.pause(3000);
        var allevents = CRMcalendarPage.allCalendarTimelineEvents;
        var eventDetails;
        //allevents[0].scrollIntoView();
        for (let i = 0; i < allevents.length; i++) {
            //if(allevents[i].getAttribute('class').includes('selected-event'))
               // {
                    allevents[i].scrollIntoView();
                    allevents[i].moveTo();
                    browser.pause(1000);
                    this.tooltipName = CRMcalendarPage.getTooltipData[0].getText();
                    this.tooltipID = CRMcalendarPage.getTooltipData[4].getText();
                    if(this.tooltipID.includes(this.openedTicketId))
                        {
                            console.log('ticked id matched');
                            eventDetails = CRMcalendarPage.getEventTicketDetails(allevents[i]);
                            break;
                        }

               // }
		  }
        console.log('ticket type and username are  '+eventDetails.getText());
        //console.log('username is '+ eventDetails[2].getText());
        expect(eventDetails.getText().includes(this.ticketType)).to.be.true;
        console.log('event ticket type verified');
		let extractedUsername = eventDetails.getText().substring(eventDetails.getText().indexOf("-")+1, eventDetails.getText().length);
        expect(this.username.includes(extractedUsername.trim())).to.be.true;
        console.log('event username verified');
    }

	verifyOPenedTicketMatchedWithEvent()
	{
		browser.pause(4000);
		CRMcalendarPage.dockHeader.waitForDisplayed();
		var id = CRMcalendarPage.dockHeader.getText().replace(/[^\d]/g,'');
		expect(this.openedTicketId).to.eql(id);
	}
}
module.exports = new crmCalendarActions();