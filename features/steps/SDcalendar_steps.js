const {Given, When, Then} = require("@cucumber/cucumber");
const SDcalendarActions = require('../support/SDcalendarActions');
const Utils = require('../support/utils');

	When(/^I go to service desk > Calendar$/, function(){
		SDcalendarActions.gotoCalendar();
	});

	When(/^I create a Technician from settings > users$/, function(){
		SDcalendarActions.createNewTechnician();
	});
	When(/^I go to Resource view of Calendar$/, function(){
		SDcalendarActions.gotoKanban();//just to load newly created user to load
		SDcalendarActions.gotoCalendar();
		SDcalendarActions.openResourceTimeLine();
	});
	When(/^I schdule opened ticket and keep Details$/, function(){
		SDcalendarActions.schdeuleTicketAndKeepData("NOT");
	});
	When(/^I schdule opened ticket for current date and keep Details$/, function(){
		SDcalendarActions.schdeuleTicketAndKeepData("Today");
	});
	When(/^I hover on the ticket even on Calendar$/, function(){
		//SDcalendarActions.moveToNextIfDayIsNotInRange();
		SDcalendarActions.hoverOverTicket();
	});

	//monthview
	When(/^I go to Calendar > Month view$/, function(){
		SDcalendarActions.calendarMonthView();
		SDcalendarActions.calendarToday();
	});
	When(/^I go to Calendar > Week view$/, function(){
		SDcalendarActions.calendarWeekView();
		SDcalendarActions.calendarToday();
		SDcalendarActions.moveToNextIfDayIsNotInRange();
	});
	When(/^I go to Calendar > Resource timeline$/, function(){
		SDcalendarActions.calendarResourceTimeLineView();
		SDcalendarActions.calendarToday();
	});
	When(/^I keep ticket docked-in$/, function(){
		SDcalendarActions.keepTicketDockedIn();
	});
	When(/^I click on ticket event$/, function(){
		SDcalendarActions.openTicketEvent();
	});




	Then(/^I should see the Calendar view$/, function(){
		SDcalendarActions.verifyCalendarIsOpened();
		Utils.clearLocalStorage()
	});
	Then(/^I should see the created user in the list of Technicians$/, function(){
		SDcalendarActions.verifyTechnicianPresent();
		Utils.clearLocalStorage()
	});

	Then(/^I should be able to see the ticket event on Calendar$/, function(){
		SDcalendarActions.verifyTicketEvent();
		Utils.clearLocalStorage()
	});
	Then(/^I should be able to see it on calendar with its ticket type and subscriber name$/, function(){
		SDcalendarActions.verifyTicketEvent();
		SDcalendarActions.verifyWeekhViewEvent();
		Utils.clearLocalStorage()
	});
	Then(/^I should be able to see Subscriber name, ticket ID, and address$/, function(){
		SDcalendarActions.verifyTicketHoverDetails();
		Utils.clearLocalStorage()
	});
	//month view
	Then(/^I should be able to see the ticket event on month view$/, function(){
		SDcalendarActions.verifyMonthViewEvent();
		Utils.clearLocalStorage()
	});
	Then(/^I should be able to see the ticket event on week view$/, function(){
		SDcalendarActions.verifyWeekhViewEvent();
		Utils.clearLocalStorage()
	});
	Then(/^I should be able to see the ticket event on resource timeline$/, function(){
		SDcalendarActions.verifyResourceViewEvent();
		Utils.clearLocalStorage()
	});
	Then(/^I can see that the ticket event is highlighted$/, function(){
		SDcalendarActions.verifyTicketHighlighted();
		Utils.clearLocalStorage()
	});
	Then(/^I can see that ticket details are opened in the dock$/, function(){
		SDcalendarActions.verifyTicketOpenedInDock();
		Utils.clearLocalStorage()
	});

	