const { Given, When, Then } = require("@cucumber/cucumber");
const serviceDeskActions = require("../support/serviceDeskActions");
const Utils = require("../support/utils");

Given(/^I launch application$/, function () {
  serviceDeskActions.openVispApp();
});

Given("I login using credentials", function (creds) {
  serviceDeskActions.loginToVisp(creds);
});

When(/^I navigate to Service Desk$/, function () {
  serviceDeskActions.openServiceDesk();
});

When(/^I select List View$/, function () {
  serviceDeskActions.goToTickets();
});

When(/^I apply All from time period filter$/, function () {
  serviceDeskActions.selectAllTimePeriodFilter();
});

When(/^I choose  (.*)$/, function (filterOption) {
  serviceDeskActions.chooseFilter(filterOption);
});


When(/^I apply (.*)$/, function (priorityOption) {
  serviceDeskActions.choosePriority(priorityOption);
});

When(/^I select Action Menu to choose (.*)$/, function (rowDensity) {
  serviceDeskActions.selectRowDensity(rowDensity);
});

When("I go to Action Menu to choose columns", function () {
  serviceDeskActions.openColumnSelector();
});

When("I turn on columns", function (columns) {
  serviceDeskActions.selectColumn(columns);
});

When("I select 1st Ticket from Ticket table", function () {
  serviceDeskActions.goToTickets();
  serviceDeskActions.chooseColumnsToDisplay("Priority", "Summary", "Type");
  serviceDeskActions.getContentsOfFirstRow();
  serviceDeskActions.selectFirstRecord();
  
});

When(  /^I update ticket details like summary,TicketType,TicketPrioroty,Assigne and Ticket Follower$/,  function () {
    //serviceDeskActions.setMinimizeWindow();
    serviceDeskActions.editTicket("edit", "TestSummary 1");
  }
);

When(  /^I choose available option to filter ticket records by (.*)$/,  function (technician) {
    serviceDeskActions.selectTechnicianFilter(technician);
  }
);

When(/^I add Comment$/, function () {
  //serviceDeskActions.setMinimizeWindow();
    serviceDeskActions.addComment();
});


When(/^I enable a column in column Chooser$/, () => {
  serviceDeskActions.choosePriorityColumnAsEnabled();
});


When(/^I disable a column in column Chooser$/, () => {
  serviceDeskActions.choosePriorityColumnAsDisabled();
});


When(/^I compares columns between column-chooser and table$/, () => {
	serviceDeskActions.chooseColumnsToDisplay("Priority", "Summary", "Type");
});



Then(/^The columns between column-chooser and the table should be same$/, () => {
	serviceDeskActions.choosenColumnToBeShown ("Priority", "Summary");
  Utils.clearLocalStorage();
});


Then(/^I should NOT see that column in the list view$/, () => {
	serviceDeskActions.verifyColumnNameNotAvailable("Priority");
  Utils.clearLocalStorage();
});

Then(/^I should see that column in the list view$/, () => {
  serviceDeskActions.verifyColumnNameAvailable("Priority");
  Utils.clearLocalStorage();
});

Then(/^I can delete a ticket$/, () => {
    serviceDeskActions.openThreeDotMenu();
    serviceDeskActions.deleteTicket();
     
});


Then(/^I see that table is updated$/, () => {
	serviceDeskActions.clickSortIconOnTicketID();
});


Then(/^I see accurate data of the columns in the ticket dock$/, () => {
  serviceDeskActions.dataVerificationInTicketDock();
  Utils.clearLocalStorage();
});

Then("I see Tickets Table filter options", function (filterOptions) {
  serviceDeskActions.goToTickets();
  serviceDeskActions.verifyFilterOptions(filterOptions);
  Utils.clearLocalStorage();
});

Then("I see All tickets", function () {
  //serviceDeskActions.goToTickets();
  serviceDeskActions.verifyAllTickets();
  Utils.clearLocalStorage();
});

Then(/^I see records with (.*) status only$/, function (filterOption) {
  serviceDeskActions.verifyFilteredRecords(filterOption);
  Utils.clearLocalStorage();
});

Then(/^I see ticket records with (.*) and (.*) only$/, function (filterOption, priorityOption) {
  serviceDeskActions.verifyFilteredAndPriorityRecords(filterOption, priorityOption);
  Utils.clearLocalStorage();
});


Then(/^Service Desk Table (.*) should get changed$/, function (rowDensity) {
  serviceDeskActions.verifyRowDensity(rowDensity);
  Utils.clearLocalStorage();
});

Then(
  "I should see newly added columns in tickets table",
  function (newColumns) {
    serviceDeskActions.verifyNewColumns(newColumns);
    Utils.clearLocalStorage();
  }
);

Then("Ticket should open in dock view", function () {
  serviceDeskActions.verifyServiceDeskDocker("edit");
  console.log("Ticket opens in docker");
  Utils.clearLocalStorage();
});

Then(/^Ticket info should get updated$/, function () {
  serviceDeskActions.verifyTicketUpdate();
  console.log("Ticket updated successfully!");
  Utils.clearLocalStorage();
});

Then(
  /^Tickets filter result should based on selected (.*)$/,
  function (technician) {
    serviceDeskActions.verifyTechnicianFilter(technician);
    console.log("Filter results are shown based on technician:" + technician);
    Utils.clearLocalStorage();
  }
);

Then("Comment should get added", function () {
  serviceDeskActions.verifyComment();
  Utils.clearLocalStorage();
});