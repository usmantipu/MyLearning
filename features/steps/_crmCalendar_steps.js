const {Given, When, Then} = require("@cucumber/cucumber");
const crmCalendarActions = require('../support/_crmCalendarActions');
const Utils = require('../support/utils');

When(/^I refresh the page$/, function() {
  crmCalendarActions.refreshPage();
  console.log('I move to crm calendar');
});
  When(/^I go to Service dispatch section$/, function() {
	  crmCalendarActions.gotoCalendar();
	  console.log('I move to crm calendar');
  });
  When(/^I create a Technician from Teams and users of settings$/, function(){
		crmCalendarActions.createNewTechnician();
	});
  When(/^I schedule opened ticket and note Details$/,function() {
    crmCalendarActions.schdeuleTicketAndKeepData("NOT");
  });
  When(/^I click on ticket event from CRM Calendar events$/,function() {
    crmCalendarActions.fullViewOfCalendar();
    crmCalendarActions.selectToday();
    crmCalendarActions.verifyTicketEvent();
    crmCalendarActions.clickOnTicketEvent();
  });

  Then(/^I should see the Calendar section$/, function () {
    crmCalendarActions.verifyCalendarIsOpened();
    Utils.clearLocalStorage();
  });
  Then(/^I should see the recently created user in the list of Technicians$/, function () {
    crmCalendarActions.verifyTechnicianPresent();
    Utils.clearLocalStorage();
  });
  Then(/^I should see the ticket event on Calendar$/, function () {
    crmCalendarActions.fullViewOfCalendar();
    crmCalendarActions.selectToday();
    crmCalendarActions.verifyTicketEvent();
    Utils.clearLocalStorage();
  });
  Then(/^I should see it on calendar with its ticket type and subscriber name$/, function () {
    crmCalendarActions.fullViewOfCalendar();
    crmCalendarActions.selectToday();
    crmCalendarActions.verifyTicketEvent();
    crmCalendarActions.verifyTicketData();
    Utils.clearLocalStorage();
  });
  Then(/^I can see that correct ticket details are opened in the dock$/, function () {
    crmCalendarActions.verifyOPenedTicketMatchedWithEvent();
    Utils.clearLocalStorage();
  });