const {Given, When, Then} = require("@cucumber/cucumber");
const serviceDeskActions = require('../support/serviceDeskActions');
const crmActions = require('../support/crmActions');
const Utils = require('../support/utils');

  // Given(/^I open web application$/, function() {

  //     serviceDeskActions.openVispApp();
  // }); 
  
  // Given(/^I login with my credentials$/, function(creds) {
	//   serviceDeskActions.loginToVisp(creds);
		
  // });
  
  When(/^I navigate to CRM$/, function() {
	  crmActions.navigateToCrm();
	  console.log('I move to crm list');
    //crmActions.refreshIfSomeThingWrong();
  });
  
  When(/^I select List View in accordion$/, function () {
    crmActions.goToTickets();
    //crmActions.refreshIfSomeThingWrong();
  });
  When("I select Ticket from Ticket table", function () {
    //crmActions.goToTickets();
    crmActions.scrollToTickets();
    crmActions.chooseColumnsToDisplay("Priority", "Summary", "Type");
    crmActions.getContentsOfFirstRow();
    crmActions.selectFirstRecord();
  });
  When("I select first Ticket from Ticket table", function () {
    crmActions.selectFirstRecord();
  });
  When(/^I select crm filter  (.*) in accordion$/, function (filterOption) {
    crmActions.scrollToTickets();
    crmActions.chooseFilter(filterOption);
  });
  When(  /^I enable Assign appUser column in column Chooser of CRM$/,  function () {
    crmActions.scrollToTickets();
    crmActions.enableAssignAppUser();
  });
  When(  /^I Assign UnAssigned ticket ticket record by (.*)$/,  function (technician) {
    //crmActions.scrollToTickets();
    crmActions.selectFirstRecord();
    crmActions.assignUnAssignTicket(technician);
    //crmActions.refreshIfSomeThingWrong();
  });
  When(  /^I choose option to filter crm ticket records by (.*)$/,  function (technician) {
    crmActions.selectTechnicianFilter(technician);
    //crmActions.refreshIfSomeThingWrong();
  });
  When(/^I add Comment in the ticket$/, function () {
    crmActions.addComment();
  });
  When(/^I navigate to Add Ticket page from main menu$/, function(){
	  crmActions.openTicketInterface('fromTopMenu');
	  
  });
  When(/^I enter CRM ticket details like (.*), (.*), (.*)", (.*), (.*), (.*)$/, function(customerName, summary, ticketType, ticketPriority, assignee, ticketFollower){
	  crmActions.addTicket(customerName, 'add', summary, ticketType, ticketPriority, assignee, ticketFollower);
  });
  When(/^I save the new ticket$/, function(){
	  crmActions.saveCurrentTicket('add');
  });
  When(/^I close the new Ticket Dock$/, function(){
    crmActions.closeNewTicketDock();
  });
  When(/^I applied the desired crm priority (.*)$/, function (priorityOption) {
    crmActions.choosePriority(priorityOption);
  });
  When(/^I enable a column in column Chooser of CRM$/, () => {
    crmActions.scrollToTickets();
    crmActions.choosePriorityColumnAsEnabled();
  });
  When(/^I disable the desired column in column Chooser$/, () => {
    crmActions.scrollToTickets();
    crmActions.choosePriorityColumnAsDisabled();
  });
  When(/^I compare columns between column chooser and CRM listing$/, () => {
    crmActions.scrollToTickets();
    crmActions.chooseColumnsToDisplay("Priority", "Summary", "Type");
  });
  When(/^I make full view of ticket table$/, () => {
    crmActions.scrollToTickets();
    crmActions.fullViewOfTicket();
  });
  When(/^I reset ticket filters$/, () => {
    crmActions.resetTicketFilter();
    //crmActions.refreshIfSomeThingWrong();
  });
  When(/^I reset ticket filters to Today$/, () => {
    crmActions.resetTodayTicketFilter();
  });




  Then("I see Tickets Table filter buttons", function (filterOptions) {
    //crmActions.goToTickets();
    crmActions.verifyFilterOptions(filterOptions);
    Utils.clearLocalStorage();
  });
  Then("crm Ticket should open in dock view", function () {
    crmActions.verifyCRMDocker("edit");
    console.log("Ticket opens in docker");
    Utils.clearLocalStorage();
  });
  Then(/^I see only crm records with (.*) status$/, function (filterOption) {
    crmActions.verifyFilteredRecords(filterOption);
    Utils.clearLocalStorage();
  });
  Then(/^CRM Tickets filter result should match selected (.*)$/,function (technician) {
      crmActions.verifyTechnicianFilter(technician);
      console.log("Filter results are shown based on technician:" + technician);
      Utils.clearLocalStorage();
    });
    Then("The Comment should be added to the ticket", function () {
      crmActions.verifyComment();
      Utils.clearLocalStorage();
    });
    Then(/^I see correct data of the columns in the ticket dock$/, () => {
      crmActions.dataVerificationInTicketDock();
      Utils.clearLocalStorage();
    });
    Then(/^I can delete a CRM ticket$/, () => {
      crmActions.scrollToTickets();
      crmActions.openThreeDotMenu();
      crmActions.deleteTicket();
      Utils.clearLocalStorage();
  });
  Then(/^I see that listing is updated$/, () => {
    crmActions.gotoDashboard();
    crmActions.navigateToCrm();
    //crmActions.clickSortIconOnTicketID();
    //Utils.clearLocalStorage();
  });
  Then(/^I can see the crm records with (.*) and (.*) only$/, function (filterOption, priorityOption) {
    crmActions.verifyFilteredAndPriorityRecords(filterOption, priorityOption);
    Utils.clearLocalStorage();
  });
  Then(/^I should see the required column in the list view$/, () => {
    crmActions.verifyColumnNameAvailable("Priority");
    Utils.clearLocalStorage();
  });
  Then(/^I should NOT see the desired column in the list view$/, () => {
    crmActions.verifyColumnNameNotAvailable("Priority");
    Utils.clearLocalStorage();
  });
  Then(/^The columns between column chooser and listing should be same$/, () => {
    crmActions.choosenColumnToBeShown ("Priority", "Summary");
    Utils.clearLocalStorage();
  });
  
