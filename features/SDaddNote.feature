@AddTicketNote
Feature: Add note in the ticket

  Background: 
			Given I open web application
			And I login with my credentials
			|jcabangonautomation|Test@1234|


@regression2021-ServiceDesk-addNote @regression-SD
  Scenario: As a User, I can add internal Notes to a ticket.
    When I create a new ticket
    And  I add an internal note to the ticket
    Then The internal note should be saved in the ticket


@regression2021-ServiceDesk-addNote @regression-SD
  Scenario: As a User, I can view the timestamp of the internal notes added to the ticket
    When I create a new ticket
    And  I add an internal note to the ticket
    Then The internal note should be saved in the ticket
    Then There is a timestamp attached to the internal note

@regression2021-ServiceDesk-addNote @regression-SD
  Scenario: As a User, I can add internal notes to an existing ticket
    When I create a new ticket
    And  I close the recenly created ticket
    And I select List View
    And I open first ticket from Ticket List
    And  I add an internal note to the ticket
    Then The internal note should be saved in the ticket


@regression2021-ServiceDesk-addNote @regression-SD
  Scenario: As a User, I can add external Notes to a ticket.
    When I create a new ticket
    And  I add an external note to the ticket
    Then The external note should be saved in the ticket

@regression2021-ServiceDesk-addNote @regression-SD
  Scenario: As a User, I can view the timestamp of the external notes added to the ticket
    When I create a new ticket
    And  I add an external note to the ticket
    Then The external note should be saved in the ticket
    Then There is a timestamp attached to the external note

@regression2021-ServiceDesk-addNote @regression-SD
  Scenario: As a User, I can add external notes to an existing ticket
    When I create a new ticket
    And  I close the recenly created ticket
    And I select List View
    And I open first ticket from Ticket List
    And  I add an external note to the ticket
    Then The external note should be saved in the ticket
