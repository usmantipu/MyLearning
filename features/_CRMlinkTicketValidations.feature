@_CRMlinkTicket
Feature: Link Ticketvalidations

   As a User of CRM, I can link Tickets for any Subscriber's and validate it 

  Background: 
			Given I open web application
			And I login with my credentials
			|automationbeta|Testing1!|
      When I go to subscribers listing
			And  I go to the Logs section
			And  I add a ticket from the Logs section

  Scenario: As a User of CRM, I can see 'Cascade update to linked tickets' option when I try to close the ticket
    When  I select second subscriber from subscriber listing
		And  I go to the Logs section
		And  I add a ticket from the Logs section
    And  I close the right drawer to link tickets
    When I go to the CRM for link ticket
    When I open a ticket in ticket drawer
    When I link a ticket as a child
    Then I try to close the ticket
    Then I should see the 'Cascade update to linked tickets' option

  Scenario: As a User of CRM, I can see 'Cascade update to linked tickets' option when I try to resolve a ticket
    When  I select second subscriber from subscriber listing
		And  I go to the Logs section
		And  I add a ticket from the Logs section
    And  I close the right drawer to link tickets
    When I go to the CRM for link ticket
    When I open a ticket in ticket drawer
    When I link a ticket as a child
    Then I try to resolve the ticket
    Then I should see the 'Cascade update to linked tickets' option

  Scenario: As a User of CRM, when the I mark a ticket with linked tickets as closed, the app prompts to choose whether to cascade the update to: all the tickets, specific ticket, and none of the linked tickets
    When  I select second subscriber from subscriber listing
		And  I go to the Logs section
		And  I add a ticket from the Logs section
    And  I close the right drawer to link tickets
    When I go to the CRM for link ticket
    When I open a ticket in ticket drawer
    When I link a ticket as a child
    Then I try to close the ticket
    Then I select the 'cascade update to linked tickets' option
    Then I should see the options i.e. 'cascade the update to: all the tickets, specific ticket, and none of the linked tickets'

  Scenario: As a User of CRM, when I close tickets using cascade option, I am presented with the option to bypass the closing tickets requirements
    When  I select second subscriber from subscriber listing
		And  I go to the Logs section
		And  I add a ticket from the Logs section
    And  I close the right drawer to link tickets
    When I go to the CRM for link ticket
    When I open a ticket in ticket drawer
    When I link a ticket as a child
    Then I try to close the ticket
    Then I select the 'cascade update to linked tickets' option to close Ticket
    Then I am presented with the option to bypass the closing tickets requirements

  Scenario: As a User of CRM, when the I mark a ticket with linked tickets as resolved, the app prompts to choose whether to cascade the update to: all the tickets, specific ticket, and none of the linked tickets
    When  I select second subscriber from subscriber listing
		And  I go to the Logs section
		And  I add a ticket from the Logs section
    And  I close the right drawer to link tickets
    When I go to the CRM for link ticket
    When I open a ticket in ticket drawer
    When I link a ticket as a child
    Then I try to resolve a ticket
    Then I select the 'cascade update to linked tickets' option
    Then I should see the options i.e. 'cascade the update to: all the tickets, specific ticket, and none of the linked tickets'

  Scenario: As a User of CRM, I can see linked tickets status as resolved on linked tickets tab once I use the cascade option to resolve the tickets
    When  I select second subscriber from subscriber listing
		And  I go to the Logs section
		And  I add a ticket from the Logs section
    And  I close the right drawer to link tickets
    When I go to the CRM for link ticket
    When I open a ticket in ticket drawer
    When I link a ticket as a child
    Then I try to resolve a ticket
    Then I select the 'cascade update to linked tickets' option to Resolve Ticket
    Then I should see that linked ticket status gets resolved too