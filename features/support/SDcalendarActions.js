const SDcalendarPage= require('../pageobjects/SDcalendar.page.js');
const { btnOthersDropdown } = require('../pageobjects/serviceDesk.page.js');
var Utils = require('./utils');
var expect = require('chai').expect;
var should = require('chai').should();

class SDcalendarActions{

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

    createNewTechnician()
    {
        SDcalendarPage.btnAppIcon.waitForDisplayed();
        SDcalendarPage.btnAppIcon.waitForClickable();
        SDcalendarPage.btnAppIcon.click();
        SDcalendarPage.btnUsers.waitForDisplayed();
        SDcalendarPage.btnUsers.waitForClickable();
        SDcalendarPage.btnUsers.click();
        SDcalendarPage.btnAddUser.waitForDisplayed();
        SDcalendarPage.btnAddUser.waitForClickable();
        SDcalendarPage.btnAddUser.click();
        this.realName = Utils.generateName();
        console.log('extracted name is'+this.realName);
        SDcalendarPage.nameOfUser.waitForDisplayed();
        SDcalendarPage.nameOfUser.setValue(this.realName);
        this.username =this.realName.replace(/\s+/g, '');
        SDcalendarPage.username.waitForDisplayed();
        SDcalendarPage.username.setValue(this.username);
        SDcalendarPage.password.waitForDisplayed();
        SDcalendarPage.password.setValue(this.passwprd);
        SDcalendarPage.confirmPassword.waitForDisplayed();
        SDcalendarPage.confirmPassword.setValue(this.passwprd);
        if(SDcalendarPage.statusOfCheckBox.getAttribute('data-testid')==="CheckBoxOutlineBlankIcon")
        {
            SDcalendarPage.inputOfCheckBox.click();
            browser.pause(1000);
        }
        SDcalendarPage.btnSaveUser.waitForDisplayed();
        SDcalendarPage.btnSaveUser.waitForClickable();
        SDcalendarPage.btnSaveUser.click();
        SDcalendarPage.confirmationMsg.waitForDisplayed();
         browser.pause(5000);
        SDcalendarPage.btnCloseAddedUserDialog.waitForDisplayed();
        SDcalendarPage.btnCloseAddedUserDialog.waitForClickable();
        SDcalendarPage.btnCloseAddedUserDialog.click();
        browser.pause(5000);
        //SDcalendarPage.btnCloseUserSettings.waitForDisplayed();
        //SDcalendarPage.btnCloseUserSettings.waitForClickable();
        var allClosedButtons = SDcalendarPage.btnCloseUserSettings;
        allClosedButtons[0].click();
    }
    gotoCalendar()
    {
        SDcalendarPage.btnCalendar.waitForDisplayed();
        SDcalendarPage.btnCalendar.waitForClickable();
        SDcalendarPage.btnCalendar.click();
        browser.pause(7000);
    }
    gotoKanban()
    {
        SDcalendarPage.btnKanban.waitForDisplayed();
        SDcalendarPage.btnKanban.waitForClickable();
        SDcalendarPage.btnKanban.click();
        browser.pause(7000);
        SDcalendarPage.btnMore.waitForDisplayed();
        SDcalendarPage.btnMore.waitForClickable();
    }
    openResourceTimeLine()
    {
        SDcalendarPage.btnResourceView.waitForDisplayed();
        SDcalendarPage.btnResourceView.waitForClickable();
        SDcalendarPage.btnResourceView.click();
    }
    calendarToday()
    {
        SDcalendarPage.btnCalendarToday.waitForDisplayed();
        //console.log('extracted html is '+SDcalendarPage.btnCalendarToday.getHTML());
        if(SDcalendarPage.btnCalendarToday.getHTML().includes('disabled')){}
        else{
            SDcalendarPage.btnCalendarToday.waitForClickable();
            SDcalendarPage.btnCalendarToday.click();
        }
    }
    calendarMonthView()
    {
        browser.pause(7000);
        SDcalendarPage.btnMonth.waitForDisplayed();
        SDcalendarPage.btnMonth.waitForClickable();
        SDcalendarPage.btnMonth.click();
    }
    calendarWeekView()
    {
        browser.pause(7000);
        SDcalendarPage.btnWeek.waitForDisplayed();
        SDcalendarPage.btnWeek.waitForClickable();
        SDcalendarPage.btnWeek.click();
    }
    calendarResourceTimeLineView()
    {
        browser.pause(7000);
        SDcalendarPage.btnResourceView.waitForDisplayed();
        SDcalendarPage.btnResourceView.waitForClickable();
        SDcalendarPage.btnResourceView.click();
    }
    schdeuleTicketAndKeepData(dayToSelect)
    {
        SDcalendarPage.btnSchedule.waitForDisplayed();
        SDcalendarPage.btnSchedule.waitForClickable();
        SDcalendarPage.btnSchedule.click();
        SDcalendarPage.btnCurrentDate.waitForDisplayed();
        this.scheduleDay = SDcalendarPage.btnCurrentDate.getText();
        SDcalendarPage.btnCurrentDate.click();
        browser.pause(2000);
        SDcalendarPage.btnOk.waitForDisplayed();
        SDcalendarPage.btnOk.waitForClickable();
        SDcalendarPage.btnOk.click();
        SDcalendarPage.inputOpenTime.waitForDisplayed();
        SDcalendarPage.inputOpenTime.waitForClickable();
        SDcalendarPage.inputOpenTime.click();
        SDcalendarPage.popUpTimeInput.waitForDisplayed();
        var hourtoSet = Math.floor(Math.random() * 12);
        if(hourtoSet<10){hourtoSet='0'+hourtoSet;}
        SDcalendarPage.popUpTimeInput.setValue(hourtoSet+':00:00')
        SDcalendarPage.btnTimePopUpOk.waitForDisplayed();
        SDcalendarPage.btnTimePopUpOk.waitForClickable();
        SDcalendarPage.btnTimePopUpOk.click();
        SDcalendarPage.dockHeader.waitForDisplayed();
        this.openedTicketId = SDcalendarPage.dockHeader.getText().replace(/[^\d]/g,'');
        this.ticketType = SDcalendarPage.ticketType.getAttribute('value');
        this.scheduledDate = SDcalendarPage.schdeuleDate.getAttribute('value');
        this.username = SDcalendarPage.usernameFromTicket.getAttribute('value');
        this.ticketAddress = SDcalendarPage.serviceContactArea[2].getText();
        console.log('extracted ticket id is '+this.openedTicketId);
        console.log('extracted ticket type is '+this.ticketType);
        console.log('extracted ticket schedule is '+this.scheduledDate);
        console.log('extracted ticket username is '+this.username);
        console.log('extracted ticket address is '+this.ticketAddress);
        SDcalendarPage.btnSaveTickedChnages.waitForDisplayed();
        SDcalendarPage.btnSaveTickedChnages.waitForClickable();
		SDcalendarPage.btnSaveTickedChnages.click();
		browser.pause(5000);
        SDcalendarPage.btnCloseOpenedTicket.click();
    }
    hoverOverTicket()
    {
        var allevents = SDcalendarPage.allweekDaysEvents;
        //allevents[0].scrollIntoView();
        for (let i = 0; i < allevents.length; i++) {
            //console.log('index is' +i +' and value is'+allevents[i].getText());
            if(allevents[i].getAttribute('class').includes('selected-event'))
            {
                allevents[i].scrollIntoView();
                allevents[i].moveTo();
                browser.pause(1000);
                //console.log('extracted tooltip data is '+SDcalendarPage.getTooltipData.getHTML());
                this.tooltipName = SDcalendarPage.getTooltipUserName.getText();
                this.tooltipLocation = SDcalendarPage.getTooltipLocation.getText();
                this.tooltipID = SDcalendarPage.getTooltipID.getText();
                if(this.tooltipID.includes(this.openedTicketId))
                    break;
            }
		  }
    }
    openTicketEvent()
    {
        var allevents = SDcalendarPage.allweekDaysEvents;
        //allevents[0].scrollIntoView();
        for (let i = 0; i < allevents.length; i++) {
            //console.log('index is' +i +' and value is'+allevents[i].getText());
            if(allevents[i].getAttribute('class').includes('selected-event'))
            {
                allevents[i].scrollIntoView();
                allevents[i].moveTo();
                //console.log('extracted tooltip data is '+SDcalendarPage.getTooltipData.getHTML());
                this.tooltipName = SDcalendarPage.getTooltipUserName.getText();
                this.tooltipLocation = SDcalendarPage.getTooltipLocation.getText();
                this.tooltipID = SDcalendarPage.getTooltipID.getText();
                if(this.tooltipID.includes(this.openedTicketId))
                {
                    allevents[i].click();
                    break;
                }
            }
		  }
        browser.pause(3000);
    }
    keepTicketDockedIn()
    {
        SDcalendarPage.dockTicket.waitForDisplayed();
        SDcalendarPage.dockTicket.waitForClickable();
        SDcalendarPage.dockTicket.click();
    }




    verifyCalendarIsOpened()
    {
        SDcalendarPage.btnCalendarNext.waitForDisplayed();
        SDcalendarPage.btnCalendarNext.waitForClickable();
        expect(SDcalendarPage.btnCalendarHeaderParent.isExisting()).to.be.true;
        console.log('calendar header exists');
        expect(SDcalendarPage.btnCalendarNext.isExisting()).to.be.true;
        console.log('calendar next button exists');
        expect(SDcalendarPage.btnCalendarPrev.isExisting()).to.be.true;
        console.log('calendar previous exists');
        expect(SDcalendarPage.btnCalendarToday.isExisting()).to.be.true;
        console.log('calendar today exists'); 
        expect(SDcalendarPage.btnResourceView.isExisting()).to.be.true;
        console.log('calendar resouce view exists');
        expect(SDcalendarPage.btnWeek.isExisting()).to.be.true;
        console.log('calendar week button exists');
        expect(SDcalendarPage.btnMonth.isExisting()).to.be.true;
        console.log('calendar month button exists');
    }
    getFirstDayOfMonth(isTodayClicked)
    {
        var now = new Date();
        var newDate = new Date(now.getFullYear(), now.getMonth(), 1);
        var firstDay="";
        if(isTodayClicked)
        {
            firstDay = String(newDate.getDate()).padStart(1, '0');
        }
        else{
            firstDay = String(now.getDate()).padStart(1, '0');
        }
        var month = newDate.toLocaleDateString(undefined, { month: 'long'});
        var yyyy = now.getFullYear();
        var currentDate = month + ' ' + firstDay + ', ' + yyyy;
        //console.log(currentDate);
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var d = new Date(currentDate);
        var dayName = days[d.getDay()];
        dayName = dayName+', '+currentDate;
        return dayName;
        //console.log(dayName);
    }
    moveToNextIfDayIsNotInRange()
    {
        //this.scheduledDate="Oct 24, 2022";
        var date = new Date(this.scheduledDate);//get date from ticket schedule time
        var year = date.getFullYear();
        var months = date.toLocaleDateString(undefined, { month: 'numeric'});
        var day = String(date.getDate()).padStart(1, '0');
        var extractedDateFormat = year+'-'+months+'-'+day;
        this.scheduleDay = Number(day);
        //console.log(upadtedate);
        if(!this.isDayBetweenWeekDays(Number(day)))
        {
            SDcalendarPage.btnCalendarNext.click();
            browser.pause(5000);
        }
        return extractedDateFormat;
    }

    verifyTechnicianPresent()
    {
        //this.realName="Muddy Drink";
        var alltechnicians = SDcalendarPage.allTecnicianRows;
        let isPresent = false;
        for (let i = 0; i < alltechnicians.length; i++) {
			//console.log('index is' +i +' and value is'+alltechnicians[i].getText());
            if(alltechnicians[i].getText().includes(this.realName))
            {
                isPresent = true;
                break;
            }
		  }
        expect(isPresent).to.be.true;//techinicain is present
    }
    verifyTicketHoverDetails()
    {
        expect(this.tooltipName).to.eql(this.username);
        console.log('verified ticket name');
        expect(this.tooltipLocation.includes(this.ticketAddress)).to.be.true;
        console.log('verified ticket address');
        console.log('extracted ticket id '+this.tooltipID);
        expect(this.tooltipID.includes(this.openedTicketId)).to.be.true;
        console.log('verified ticket id');
    }

    verifyTicketEventDetails()
    {
        //this.openedTicketId ="1363058";
        //this.username ="Jefferey Hammerberg";
        //this.scheduleDay='1';
        var date = new Date(this.scheduledDate);//get date from ticket schedule time
        var year = date.getFullYear();
        var months = date.toLocaleDateString(undefined, { month: 'numeric'});
        var day = String(date.getDate()).padStart(2, '0');
        var extractedDateFormat = year+'-'+months+'-'+day;
        console.log('extracted date is'+extractedDateFormat);
        var allweeks = SDcalendarPage.allweeksHeader;
        var weekParent;
        var index;
        var isFound = false;
        for (var i = 0; i < allweeks.length; i++) {
            var allDayNumbers = SDcalendarPage.dayNumberByParent(allweeks[i]);
            for(var z = 0; z < allDayNumbers.length; z++)
            {
                console.log('index is' +z +' and value is'+allDayNumbers[z].getText());
                if(allDayNumbers[z].getText()===this.scheduleDay)
                    {
                        console.log('done part 1');
                        var allweekDays = SDcalendarPage.allweekDays(allweeks[i]);
                        for(var y = 0; y < allweekDays.length; y++)
                        {
                            console.log('week day index is' +y +' and value is'+allweekDays[y].getText());
                            if(allweekDays[y].getAttribute('data-date')===extractedDateFormat)//2022-10-25
                                {console.log('done part 2');
                                    index = y;
                                    console.log('Day found and index is '+index);
                                    isFound = true;
                                    weekParent = allweeks[i];
                                    break;
                            }
                        }
                    }
                if(isFound)
                    break;
            }
            if(isFound)
                break;
		}
        browser.pause(2000);
        var eventDetails;
        var updatedIndex=0;
        let status = false;
        var eventData;
        var allevents = SDcalendarPage.allCalendarEvents(weekParent);
        console.log('total length is'+allevents.length);
        for (let i = 0; i < allevents.length && i<3; i++) {
            console.log('row is' +i);
            var columnsOfEachRow = SDcalendarPage.allColumns(allevents[i]);
            if(columnsOfEachRow.length>index)
            {
                console.log('extracted columns is'+columnsOfEachRow[index].getText());
                eventData = columnsOfEachRow[index];
                updatedIndex = index;
            }
            else if(columnsOfEachRow.length===index)
            {
                console.log('extracted columns is'+columnsOfEachRow[index-1].getText());
                eventData = columnsOfEachRow[index-1];
            }
            else
            {
                console.log('extracted columns is'+columnsOfEachRow[index-index].getText());
                eventData = columnsOfEachRow[index-index];
            }
            if(eventData.getText().includes(this.username))
            {
                console.log('moved to verify user');
                    eventData.moveTo();
                    browser.pause(700);
                    SDcalendarPage.getTooltipUserName.waitForDisplayed();
                    this.tooltipName = SDcalendarPage.getTooltipUserName.getText();
                    this.tooltipLocation = SDcalendarPage.getTooltipLocation.getText();
                    this.tooltipID = SDcalendarPage.getTooltipID.getText();
                    if(this.tooltipID.includes(this.openedTicketId))
                    {
                        console.log('specific ticket detail verified');
                        status = true;
                        break;
                    }
            }
		}
        if(status===false)
        {
            console.log('moved to Load more');
            //var allLoadMore = SDcalendarPage.loadMore(allevents[3]);
            var allLoadMore = SDcalendarPage.loadMore;
            if(allLoadMore.length>index)
            {
                console.log('foundLoadMore if greater');
                updatedIndex = index;
            }
            else if(allLoadMore.length<=index)
            {
                console.log('foundLoadMore if equal');
                updatedIndex = index-index;
            }
            SDcalendarPage.openLoadMore(allLoadMore[updatedIndex]).moveTo();
            browser.pause(700);
            SDcalendarPage.openLoadMore(allLoadMore[updatedIndex]).click();
            browser.pause(1000);
            var allExpandedEvents = SDcalendarPage.popOverEvents;
            for(let z=0;z<allExpandedEvents.length;z++)
            {
                if(allExpandedEvents[z].getText().includes(this.username))
                {
                    SDcalendarPage.popOverTitle.waitForDisplayed();
                    SDcalendarPage.popOverTitle.click();
                        allExpandedEvents[z].moveTo();
                        browser.pause(1000);
                        SDcalendarPage.getTooltipUserName.waitForDisplayed();
                        this.tooltipName = SDcalendarPage.getTooltipUserName.getText();
                        this.tooltipLocation = SDcalendarPage.getTooltipLocation.getText();
                        this.tooltipID = SDcalendarPage.getTooltipID.getText();
                        if(this.tooltipID.includes(this.openedTicketId))
                        {
                            console.log('pop over data extracted');
                            eventData = allExpandedEvents[z];
                            break;
                        }
                }
            }
            
        }
        browser.pause(2000);
        eventDetails = SDcalendarPage.getEventTicketDetails(eventData);
        console.log('ticket type is '+eventDetails[1].getText());
        console.log('username is '+ eventDetails[2].getText());
        expect(eventDetails[1].getText()).to.eql(this.ticketType);
        console.log('event ticket type verified');
        expect(eventDetails[2].getText()).to.eql(this.username);
        console.log('event username verified');
    }

    verifyTicketEvent()
    {
        this.moveToNextIfDayIsNotInRange();
        browser.pause(3000);
        var allevents = SDcalendarPage.allweekDaysEvents;
        let status = false;
        for (let i = 0; i < allevents.length; i++) {
            if(allevents[i].getAttribute('class').includes('selected-event'))
            {
                status = true;
            }
		  }
          expect(status).to.be.true;// event get selected
        console.log('scheduled event present');
    }
    isDayBetweenWeekDays(numberToCheck)
    {
        var extractedData = SDcalendarPage.btnCalendarstartOfMonth.getText();
        var myArr = [extractedData];
        var filtered = myArr[0].replace(/\D+/g, ' ').trim().split(' ').map(e => parseInt(e));
        var startValue = filtered[0];
        var endValue = filtered[1];
        //console.log(startValue);
        //console.log(endValue);
        //var numberToCheck =24;
        if(numberToCheck>=startValue && numberToCheck<=endValue)
            return true;
        if(numberToCheck<startValue && numberToCheck<=endValue)
            return true;
    }
    isDayCurrentDay(numberToCheck)
    {
        var extractedData = SDcalendarPage.btnCalendarstartOfMonth.getText();
        var myArr = [extractedData];
        var filtered = myArr[0].replace(/\D+/g, ' ').trim().split(' ').map(e => parseInt(e));
        var startValue = filtered[0];
        //var endValue = filtered[1];
        //console.log(startValue);
        //console.log(endValue);
        //var numberToCheck =24;
        if(startValue>=numberToCheck)
            return false;
        return true;
    }

    //monthview
    verifyMonthViewEvent()
    {
        browser.pause(3000);
        var date = new Date(this.scheduledDate);
        var month = date.toLocaleDateString(undefined, { month: 'long'});
        var yyyy = date.getFullYear();
        var currentDate = month + ' '+ yyyy;
        SDcalendarPage.btnCalendarstartOfMonth.waitForDisplayed();
        if(SDcalendarPage.btnCalendarstartOfMonth.getText().includes(month))
            expect(SDcalendarPage.btnCalendarstartOfMonth.getText()).to.eql(currentDate);
        else
        {
            SDcalendarPage.btnCalendarNext.click();
            browser.pause(3000);
            SDcalendarPage.btnCalendarstartOfMonth.waitForDisplayed();
            expect(SDcalendarPage.btnCalendarstartOfMonth.getText()).to.eql(currentDate);
        }
        console.log('current month verified');
        this.verifyTicketEventDetails();
    }
    verifyWeekhViewEvent()
    {
        browser.pause(3000);
        expect(this.isDayBetweenWeekDays(this.scheduleDay)).to.be.true;
        console.log('current week verified');
        var allevents = SDcalendarPage.allweekDaysEvents;
        var eventDetails;
        //allevents[0].scrollIntoView();
        for (let i = 0; i < allevents.length; i++) {
            if(allevents[i].getAttribute('class').includes('selected-event'))
                {
                    allevents[i].scrollIntoView();
                    allevents[i].moveTo();
                    browser.pause(1000);
                    this.tooltipName = SDcalendarPage.getTooltipUserName.getText();
                    this.tooltipLocation = SDcalendarPage.getTooltipLocation.getText();
                    this.tooltipID = SDcalendarPage.getTooltipID.getText();
                    if(this.tooltipID.includes(this.openedTicketId))
                        {
                            console.log('ticked id matched');
                            eventDetails = SDcalendarPage.getEventTicketDetails(allevents[i]);
                            break;
                        }

                }
		  }
        console.log('ticket type is '+eventDetails[1].getText());
        console.log('username is '+ eventDetails[2].getText());
        expect(eventDetails[1].getText()).to.eql(this.ticketType);
        console.log('event username verified');
        expect(eventDetails[2].getText()).to.eql(this.username);
        console.log('event ticket type verified');
    }
    verifyResourceViewEvent()
    {
        browser.pause(3000);
        var date = new Date(this.scheduledDate);//get date from ticket scheduled time
        var day = String(date.getDate()).padStart(1, '0');
        if(this.isDayCurrentDay(Number(day)))
        {
            SDcalendarPage.btnCalendarNext.click();
            browser.pause(5000);
        }
        browser.pause(1000);       
        SDcalendarPage.stretchTableToView.waitForDisplayed();
        SDcalendarPage.stretchTableToView.click();
        browser.pause(1000);
        var eventDetails;
        var allevents = SDcalendarPage.allCalendarTimelineEvents;
        //console.log('total length is'+allevents.length);
        for (let i = 0; i < allevents.length; i++) {
            //console.log('index is' +i +' and value is'+allevents[i].getText());
            if(allevents[i].getText().includes(this.username))
            {
                eventDetails = SDcalendarPage.getEventTicketDetails(allevents[i]);
                break;
            }
		  }
        console.log('ticket type is '+eventDetails[1].getText());
        console.log('username is '+ eventDetails[2].getText());
        expect(eventDetails[1].getText()).to.eql(this.ticketType);
        console.log('event username verified');
        expect(eventDetails[2].getText()).to.eql(this.username);
        console.log('event ticket type verified');
    }
    verifyTicketHighlighted()
    {
        var allevents = SDcalendarPage.allweekDaysEvents;
        let status = false;
        allevents[0].scrollIntoView();
        for (let i = 0; i < allevents.length; i++) {
            //console.log('index is' +i +' and value is'+allevents[i].getText());
            if(allevents[i].getAttribute('class').includes('selected-event'))
            {
                allevents[i].scrollIntoView();
                allevents[i].moveTo();
                browser.pause(1000);
                //console.log('extracted tooltip data is '+SDcalendarPage.getTooltipData.getHTML());
                this.tooltipName = SDcalendarPage.getTooltipUserName.getText();
                this.tooltipLocation = SDcalendarPage.getTooltipLocation.getText();
                this.tooltipID = SDcalendarPage.getTooltipID.getText();
                if(this.tooltipID.includes(this.openedTicketId))
                {
                    status = true;
                    break;
                }
            }
		  }
          expect(status).to.be.true;// event get selected
    }
    verifyTicketOpenedInDock()
    {
        SDcalendarPage.dockHeader.waitForDisplayed();
        var newHeader = SDcalendarPage.dockHeader.getText().replace(/[^\d]/g,'');
        var newtype = SDcalendarPage.newticketType.getAttribute('value');
        var newSchDate = SDcalendarPage.newticketscheduleDate.getAttribute('value');
        var newUsr = SDcalendarPage.newticketusername.getAttribute('value');
        expect(newHeader.includes(this.openedTicketId)).to.be.true;
        console.log('eticket id is verified');
        expect(newtype.includes(this.ticketType)).to.be.true;
        console.log('ticket type is verified');
        expect(newSchDate.includes(this.scheduledDate)).to.be.true;
        console.log('scheduled date is verified');
        expect(newUsr.includes(this.username)).to.be.true;
        console.log('username is verified');
    }



}
module.exports = new SDcalendarActions();