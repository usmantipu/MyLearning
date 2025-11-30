@CRMTasksCard
Feature: CRM Tasks Card - Part 2


  Background: 
			Given I open web application
			And I login using username jcabangonautomation and password Test@1234

@crmTasksCard-Part-2
    Scenario: As a user, I can view the Tasks card on a ticket
        When I navigate to Service Desk
        When I open the ticket drawer
        Then I should see the Tasks card with a header and an expand - contract icon
        Then I should see an Add icon, a task completion counter, and a feedback icon in the header
@crmTasksCard-Part-2
    Scenario: As a user, I can add a task to the ticket
        When I navigate to Service Desk
        When I open the ticket drawer
        When I click the Add icon in the Tasks card header
        Then A new task entry field should appear in the main body of the card
        Then I can input a task description and save it
        Then The task should be added to the list of tasks in the main body
        Then A history log should be saved for adding the task
@crmTasksCard-Part-2
    Scenario: As a user, I can view the list of tasks with their completion status
        When I navigate to Service Desk
        When I open the ticket drawer
        When I view the Tasks card on a ticket
        Then I should see a list of tasks with a checkbox to the left of each task description indicating completion status
@crmTasksCard-Part-2
    Scenario: As a user, I can mark a task as complete
        When I navigate to Service Desk
        When I open the ticket drawer
        When I check the checkbox next to a task in the Tasks card
        Then The task should be marked as completed in the database
        Then The task completion counter in the header should increment appropriately
        Then A history log should be saved for completing the task
@crmTasksCard-Part-2
    Scenario: As a user, I can mark a task as incomplete
        When I navigate to Service Desk
        When I open the ticket drawer
        When I uncheck the checkbox next to a completed task in the Tasks card
        Then The task should be marked as incomplete in the database
        Then The task completion counter in the header should decrement appropriately
        Then A history log should be saved for marking the task as incomplete
@crmTasksCard-Part-2
    Scenario: As a user, I can reorder tasks in the list
        When I navigate to Service Desk
        When I open the ticket drawer
        When I add more than one task
        When I drag and drop a task row in the Tasks card
        Then The tasks should reorder based on my action
@crmTasksCard-Part-2
    Scenario: As a user, I can convert a task to a new ticket
        When I navigate to Service Desk
        When I open the ticket drawer
        When I click the 3-dot menu next to a task and select Convert to a Ticket
        Then The task should be converted to a new ticket with the task name as the ticket description
        Then The following data should be retained in the new ticket priority, ticket type, status open, assignees, followers
        Then A history log should be saved for the task conversion
@crmTasksCard-Part-2
    Scenario: As a user, I can delete a task from the ticket
        When I navigate to Service Desk
        When I open the ticket drawer
        When I click the 3-dot menu next to a task and select Delete
        Then The task should be deleted from the database
        Then The task completion counter in the header should update appropriately
        Then A history log should be saved for the task deletion
@crmTasksCard-Part-2
    Scenario: As a user, I can edit a task on the ticket
        When I navigate to Service Desk
        When I open the ticket drawer
        When I click the 3-dot menu next to a task and select Edit
        Then The task should be updated in the database
        Then A history log should be saved for editing the task
@crmTasksCard-Part-2
    Scenario: As a user, I can provide feedback on the Tasks card
        When I navigate to Service Desk
        When I open the ticket drawer
        When I click the feedback icon in the Tasks card header
        Then I should be able to provide feedback for the feature
@crmTasksCard-Part-2
    Scenario: As a user, I cannot add a task without input
        When I navigate to Service Desk
        When I open the ticket drawer
        When I click the Add icon in the Tasks card header and do not enter a description
        Then The task should not be added to the list of tasks
@crmTasksCard-Part-2
    Scenario: As a user, I can see all tasks deleted when the ticket type is updated
        When I navigate to Service Desk
        When I open the ticket drawer
        When I add more than one task
        When The ticket type is updated on the ticket
        Then All tasks in the Tasks card should be deleted

