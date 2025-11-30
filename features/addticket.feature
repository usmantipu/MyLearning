@AddTicket
Feature: Add Ticket

   As a User, I can add Ticket for any Subscriber's. I can Save or Save&Schedule the Ticket.
   In add Ticket I can mention Ticket Summary, select Type, Priority and Assignee based on available options

  Background: 
			Given I open web application
			And I login with my credentials
			|jcabangonautomation|Test@1234|
@AddTicketSanity @UBOW-CI-Scheduler-wdio6  @regression2021-ServiceDesk-addTicket @regression-CRM
  Scenario: As a User, I can navigate to Add Ticket in Subscribers Page
    When I move to subscriber list
    When I navigate to Add Ticket page for any Subscriber
    Then Ticket page should open for any Subscriber in Subscriber list
@regression2021-ServiceDesk-addTicket @regression2021 @regression-CRM
  Scenario: As a User, I can Save ticket of Subscriber from Subscribers page
    When I move to subscriber list 
    When I navigate to Add Ticket page for any Subscriber
    When I enter ticket details like Summary,Type,Priority,Assignee and Ticket Followers
    Then Ticket should be saved

@Bug @UBOW-3278 @regression2021-ServiceDesk-addTicket @regression2021 @regression-CRM
  Scenario Outline: As a User, I can Save ticket of Subscriber from Service Desk page
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "<CustomerName>", "Text for Summary", "<TicketType>", "<TicketPriority>", "<Assignee>", "<TicketFollower>"
    When I save new ticket
    Then Ticket should be saved

    Examples:
    |CustomerName |TicketType |TicketPriority |Assignee  |TicketFollower|
    |Monika       |Checking on Escalation  |High     |UnAssigned    |Jon Automation |
            
@regression2021 @ServiceDesk-addTicket-enhancements @TA233 @regression-CRM
  Scenario: As a User, I am prompted with a warning that existing data will be lost on changing the ticket type
    When I navigate to Service Desk
    When I select List View 
    When I select 1st Ticket from Ticket table
    When I change the ticket type in the ticket dock
    Then I should see a prompt with warning message
    |The selected type has an existing template that will replace the ticket content.|

@regression2021 @ServiceDesk-addTicket-enhancements @TA233 @regression-CRM
  Scenario: As a User, I can cancel the ticket type change prompt and by doing so revert the change I make in the Type field.
    When I navigate to Service Desk
    When I select List View 
    When I select 1st Ticket from Ticket table
    When I change the ticket type in the ticket dock
    When I hit cancel in the warning prompt
    Then The old ticket type value should be restored

@notAvailbleInTheApp
  Scenario: As a User, I can view current details of the subscriber in the merge fields (tags) used in the selected ticket

@regression2021 @ServiceDesk-addTicket-enhancements @TA233 @regression-CRM
  Scenario: As a User, I am always provided with the updated options in the Type field when I view the list.
    When I go to ticket type settings to define a new ticket type
    When I navigate to Service Desk
    When I select List View 
    When I select 1st Ticket from Ticket table
    Then I verify that newly created ticket type is available in ticket type dropdown

@regression2021 @ServiceDesk-addTicket-enhancements @TA233 @regression-CRM
  Scenario: As a User, I can revert the changes I made in the ticket by clicking the Restore button.
    When I navigate to Service Desk
    When I select List View 
    When I select 1st Ticket from Ticket table
    When I update the ticket details
    Then I restore the updates
    Then The old values should be restored
     
@regression2021 @ServiceDesk-addTicket-enhancements @TA233 @regression-CRM
  Scenario: As a User, I can set the Contact Phone for the ticket by typing into the Contact Phone field.
    When I navigate to Service Desk
    When I select List View 
    When I select 1st Ticket from Ticket table
    When I update the contact phone
    Then The contact phone should be updated

@regression2021 @ServiceDesk-addTicket-enhancements @TA233 @regression-CRM
  Scenario: As a User, I can always see the Ticket ID on the title bar of the ticket dock.
    When I navigate to Service Desk
    When I select List View 
    When I select 1st Ticket from Ticket table
    Then I should see the ticket ID in the title bar of the ticket dock

@regression2021 @ServiceDesk-addTicket-enhancements @TA233 @regression-CRM
  Scenario: As a User, I can view the "Schedule" label for a ticket without an active Calendar event connected to it.
    When I navigate to Service Desk
    When I select List View 
    When I select 1st Ticket from Ticket table
    Then I should see Schedule label for a ticket without an active Calendar event connected to it

@issueInScenario
  Scenario: As a User, I am prompted about the unsaved changes I made to the ticket when I attempt to close the ticket viewer without saving.
    When I navigate to Service Desk
    When I select List View 
    When I select 1st Ticket from Ticket table
    When I edit the ticket and attempt to close the dock
    Then I should be prompted with the warning of losing the changes

@regression2021 @ServiceDesk-addTicket-enhancements @TA233 @regression-CRM
  Scenario: As a User, I CANNOT save a ticket without Summary
    When I navigate to Add Ticket page from top menu
    When I add ticket details such that the summary is missing
    Then I cannot save the ticket