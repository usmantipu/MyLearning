@_CRMlinkTicket
Feature: Link Ticket - CRM

   As a User of CRM, I can link Tickets for any Subscriber in CRM. 

  Background: 
			Given I open web application
      And I login with my credentials
      |automationbeta|Testing!|
      When I navigates to the subscribers list
			And  I go to the Logs section
			And  I add a ticket from the Logs section
      And  I close the drawer


  Scenario: As a User of CRM, I can see a separate section for linked tickets on tickets dock
    When I go to CRM to link a ticket
    When I open the ticket in ticket drawer
    Then I see a section for linked tickets


  Scenario: As a User of CRM, I can search by Ticket ID or by Ticket Summary
    When I open subscribers list
		And  I navigate to Logs section
		And  I add a new ticket from Logs section
    And  I close the drawer
    When I go to CRM to link a ticket
    When I keep another ticket's Data to search
    When I open the ticket in ticket drawer
    Then I can search the ticket with the ID or the summary


  Scenario: As a User of CRM, I can add link tickets as child in new ticket
    When I open subscribers list
		And  I navigate to Logs section
		And  I add a new ticket from Logs section
    And  I close the drawer
    When I navigate to CRM
    When I select the List View 
    When I select the 1st Ticket from Ticket table
    Then I can link a ticket as its child


  Scenario: As a User can click on the linked ticket to open its Ticket dock.
    When I open subscribers list
		And  I navigate to Logs section
		And  I add a new ticket from Logs section
    And  I close the drawer
    When I go to CRM to link a ticket
    When I open the ticket in ticket drawer
    Then I can link a ticket as its child
    Then I can open the linked ticket's drawer


  Scenario: As a User of CRM, I can click the X button (displayed on mousing over the ticket link) to remove the link to ticket.
    When I open subscribers list
		And  I navigate to Logs section
		And  I add a new ticket from Logs section
    And  I close the drawer
    When I go to CRM to link a ticket
    When I open the ticket in ticket drawer
    Then I can link a ticket as its child
    Then I can remove linked ticket


  Scenario: As a User of CRM, I can add link tickets as parent in new ticket
    When I open subscribers list
		And  I navigate to Logs section
		And  I add a new ticket from Logs section
    And  I close the drawer
    When I navigate to CRM
    When I select the List View 
    When I select the 1st Ticket from Ticket table
    Then I can link a ticket as its parent


  Scenario: As a User of CRM, I can add link tickets as child in existing ticket
    When I open subscribers list
		And  I navigate to Logs section
		And  I add a new ticket from Logs section
    And  I close the drawer
    When I go to CRM to link a ticket
    When I open the ticket in ticket drawer
    When I open the linked parent ticket
    Then I can link a ticket as its child


  Scenario: As a User of CRM, I can add link tickets as parent in existing ticket
    When I open subscribers list
		And  I navigate to Logs section
		And  I add a new ticket from Logs section
    And  I close the drawer
    When I go to CRM to link a ticket
    When I open the ticket in ticket drawer
    When I open the linked child ticket
    Then I can link a ticket as its parent
