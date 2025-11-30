@AddTicketNote
Feature: Add note in the ticket

  Background: 
			Given I open web application
			And I login with my credentials
			|jcabangonautomation|Test@1234|

  Scenario: As a User, I can add internal Notes to a ticket.
    When I create a new ticket in CRM
    And  I add an internal note to the messages section of the ticket
    Then The internal note should be saved in messages section

  Scenario: As a User, I can view the timestamp of the internal notes added to the ticket
    When I create a new ticket in CRM
    And  I add an internal note to the messages section of the ticket
    Then The internal note should be saved in messages section
    Then I can see a timestamp attached to the internal note

  Scenario: As a User, I can add internal notes to an existing ticket
    When I open an existing ticket
    And  I add an internal note to the messages section of the ticket
    Then The internal note should be saved in messages section

  Scenario: As a User, I can add external Notes to a ticket.
    When I create a new ticket in CRM
    And  I add an external note to the messages section of the ticket
    Then The external note should be saved in messages section

  Scenario: As a User, I can view the timestamp of the external notes added to the ticket
    When I create a new ticket in CRM
    And  I add an external note to the messages section of the ticket
    Then The external note should be saved in messages section
    Then I can see a timestamp attached to the external note

  Scenario: As a User, I can add external notes to an existing ticket
    When I open an existing ticket
    And  I add an external note to the messages section of the ticket
    Then The external note should be saved in messages section
