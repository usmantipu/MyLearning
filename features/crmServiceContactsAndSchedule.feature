@CRM
Feature: ServiceContactsAndSchedule 

  Background:
        Given I open Visp Web to Access IRM
        And   I login with username and password to use IRM
              | jcabangonautomation | Test@1234 |
		And   I am on the ticket details page
		And   I enable CRM Microservice by click New Beta

@regression-crmServiceContractAndSchedule		
Scenario: As a user, I want to update Due Date and log the change
		When I open a New ticket with new beta options
		When I expand the Overview section
		And  I expand the Schedule sub-section
		And  I select a date from the date picker for Due Date
		Then the due date for the ticket should be updated
		And  a log entry should be created

@regression-crmServiceContractAndSchedule		
Scenario: As a user, I want to see Exact Time and Window Time options for Preferred Arrival 
		When I open a New ticket with new beta options
		When I expand the Overview section
		And  I expand the Schedule sub-section
		And  I click on Preferred Arrival
		Then I should see radio buttons for Exact Time and Window Time
@regression-crmServiceContractAndSchedule	
Scenario: As a user, I want to select Exact Time for Preferred Arrival
		When I open a New ticket with new beta options
		When I expand the Overview section
		And  I expand the Schedule sub-section
		And  I click on Preferred Arrival
		And  I select the Exact Time option
		Then I should see a clock time picker to select a time with hours and minutes
@regression-crmServiceContractAndSchedule	
Scenario: As a user, I want to expand the Linked Tickets subsection.
		When I open a New ticket with new beta options
		And  the Linked Tickets subsection is collapsed
		And  I click on the Linked Tickets subsection
		Then the list of linked tickets should be visible
@regression-crmServiceContractAndSchedule	
Scenario: As a user, I want to see the number of linked tickets.  
		When I open a New ticket with new beta options
		And  the Linked Tickets subsection is expanded
		And  I linked A new Ticket to it
		Then the number badge should show the number of linked tickets
@regression-crmServiceContractAndSchedule	
Scenario: As a user, I want to unlink a ticket. 
		When I open a New ticket with new beta options
		And  the Linked Tickets subsection is expanded
		And  I linked A new Ticket to it
		When  I click on the x icon next to a linked ticket
		Then  the ticket should be unlinked
		And   a log entry for unlinked ticket should be created
	
