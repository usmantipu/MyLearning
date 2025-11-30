@CRM
Feature: StatusTypePriority 

  Background:
        Given I open Visp Web to Access IRM
        And   I login with username and password to use IRM
              | jcabangonautomation | Test@1234 |
		And   I am on the ticket details page
		And   I enable CRM Microservice by click New Beta

@regression-crmStatusTypePriority
Scenario: As a user, I can view the ticket priority from ticket drawer 
		When I create New ticket for type status priority
		Then  I should see ticket priority in Ticket drawer
@regression-crmStatusTypePriority
Scenario: As a user, I can set the ticket priority from ticket drawer 
		When I create New ticket for type status priority
		When  I click on the priority dropdown from ticket drawer
		When  I select the ticket priority from the dropdown
		Then  Selected priority should set for the ticket
		And   Changing a ticket priority should create a log entry
	
@regression-crmStatusTypePriority
Scenario: As a user, I can see and change the Ticket Type by selecting it from Ticket Type dropdow  
		When I create New ticket for type status priority
		When  I click on Ticket type dropdown from ticket drawer
		When  I select the ticketype from the dropdown of ticket drawer
		Then  I can see a popup for confirming the change made
		When  I can select the Continue Anyway option to make change
		Then  the Selected ticket type should be set for the ticket
		And   Changing a ticket Type should create log entry
@regression-crmStatusTypePriority
Scenario: As a user, I can change the status from Status dropdown
		When I create New ticket for type status priority
		When  I click on Ticket status dropdown from ticket drawer
		When  I Select the ticket status from the dropdown of ticket drawer
		Then  the selected ticket status should be set for the Ticket
		And   changing a Ticket status should create a log entry
