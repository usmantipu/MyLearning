@CRMTasksCard
Feature: CRM Tasks Card - Part 2


  Background: 
			Given I open web application
			And I login using username jcabangonautomation and password Test@1234

@crmTasksCard-Part-3
    Scenario: As a user, I can see 'Edit' option in 3-dot menu of the task
        When I navigate to Service Desk
        When I open the ticket drawer
        When I click on kebab menu of the task
        Then I can see Edit option to make task editbale
@crmTasksCard-Part-3
    Scenario: As a user, I am restricted to edit task with empty text
        When I navigate to Service Desk
        When I open the ticket drawer
        When I click on Edit button from kebab menu to make task description will be editable
        Then I should be restricted to save task description with empty description
@crmTasksCard-Part-3
    Scenario: As a user, I can see that 'Add task' fields will not have the checkbox and kebab menu and will have the save and cancel
        When I navigate to Service Desk
        When I open the ticket drawer
        When I click the Add icon in the Tasks card header
        Then A new task entry field should appear in the main body of the card
        Then Verify that Add Task field will not have the checkbox and kebab menu and will have the save and cancel
        Then I can input a task description and save it
@crmTasksCard-Part-3
    Scenario: As a user, I can convert a task to a ticket and disable the task checkbox
        When I navigate to Service Desk
        When I open the ticket drawer
        When I have a task in a ticket
        When I convert the task to a ticket
        Then The task checkbox should be disabled
        Then The task cannot be marked as completed manually
@crmTasksCard-Part-3
    Scenario: As a user, I can see kebab menu gets disabled for a task after it has been converted to a ticket
        When I navigate to Service Desk
        When I open the ticket drawer
        When I have a task in a ticket
        When I convert the task to a ticket
        Then The kebab menu should be disabled for that task
@crmTasksCard-Part-3
    Scenario: As a user, converting a task to a ticket will prompt the Add Ticket modal
        When I navigate to Service Desk
        When I open the ticket drawer
        When I add more than one task
        When I select the Convert to Ticket option from the task kebab menu
        Then The Add Ticket modal should appear
        Then Clicking the Create button after fill up the required fields
        Then A new ticket should be created without retaining information from original ticket
@crmTasksCard-Part-3
    Scenario: As a user, the task name is used as the default description for the newly created ticket
        When I navigate to Service Desk
        When I open the ticket drawer
        When I have a task in a ticket
        When I convert the task to a ticket
        Then The default description in the modal should be the task name
@crmTasksCard-Part-3
    Scenario: As a user, resolving a converted ticket will mark the corresponding task as complete
        When I navigate to Service Desk
        When I open the ticket drawer
        When I have a task in a ticket
        When I convert the task to a ticket
        When I resolve the converted ticket
        Then The corresponding task in the original ticket should be automatically marked as complete
@crmTasksCard-Part-3
    Scenario: As a user, I can see a UI indicator that the task has been converted to a ticket with a link to the ticket
        When I navigate to Service Desk
        When I open the ticket drawer
        When I have a task in a ticket
        When I convert the task to a ticket
        Then The task should display an indicator showing that it has been converted
        Then The indicator should include the ticket number as a clickable link to the ticket details

