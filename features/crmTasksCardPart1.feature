@CRMTasksCard
Feature: CRM Tasks Card - Part 1


  Background: 
			Given I open web application
			And I login using username jcabangonautomation and password Test@1234

@crmTasksCard-Part-1
    Scenario: As a user, I can see the Create Ticket modal layered above the parent ticket edit drawer
        When I navigate to Service Desk
        When I have an open ticket drawer in edit mode
        When I click Convert to Ticket on a task within the drawer
        Then The Create Ticket modal should appear layered on top of the current ticket drawer
        Then The background drawer should remain visible but inactive
@crmTasksCard-Part-1
    Scenario: As a user, I can continue editing the parent ticket after closing the Create Ticket modal
        When I navigate to Service Desk
        When I have an open ticket drawer in edit mode
        When I click Convert to Ticket on a task within the drawer
        When I close the Create Ticket modal without submitting
        Then The parent ticket drawer should still be open
@crmTasksCard-Part-1
    Scenario: As a user, I can see the parent ticket drawer dock in after a new ticket is created from a task
        When I navigate to Service Desk
        When I have an open ticket drawer in edit mode
        When I click Convert to Ticket on a task within the drawer
        When I fill in required fields and submit the Create Ticket modal
        Then The parent ticket drawer should be docked automatically
        Then The newly created ticket drawer should open in full view
@crmTasksCard-Part-1
    Scenario: As a user, I can Convert a task to a new ticket and link it as a child
        When I navigate to Service Desk
        When I have an open ticket drawer in edit mode
        When I have a ticket with one or more tasks listed
        When I click Convert to Ticket on a task within the drawer
        When I fill in required fields and submit the Create Ticket modal
        Then The newly created ticket drawer should open in full view
        Then Upon creating a new ticket, it should automatically be linked as a child to the originating ticket

