@linkTicket
Feature: Link Ticket

   As a User, I can link Tickets for any Subscriber's. 

  Background: 
			Given I open web application
			And I login with my credentials
			|jcabangonautomation|Test@1234|
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "Monika", "Text for Summary", "Checking on Escalation", "High", "UnAssigned", "Jon Automation"
    When I save new ticket
    When I keep another ticket Data to search

@regression2021 @regression2021-ServiceDesk-linkTicket @regression-SD
  Scenario: As a User, I can see a separate section for linked tickets on tickets dock
    When I navigate to Service Desk
    When I select List View
    When I open first ticket from Ticket List
    Then I see a separate section for linked tickets

@regression2021 @regression2021-ServiceDesk-linkTicket @TA-316 @regression-SD
  Scenario: As a User, I can search by Ticket ID or by Ticket Summary
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "Monika", "Text for Summary", "Checking on Escalation", "High", "UnAssigned", "Jon Automation"
    When I save new ticket
    Then I can search the ticket with ID or summary

@regression2021 @regression2021-ServiceDesk-linkTicket @regression-SD
  Scenario: As a User, I can add link tickets as child in new ticket
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "Monika", "Text for Summary", "Checking on Escalation", "High", "UnAssigned", "Jon Automation"
    When I save new ticket
    And  I can link the ticket to another ticket using 'is child of' type
    Then I can verify ticket is linked as 'is child of'

@regression2021 @regression2021-ServiceDesk-linkTicket @regression-SD
  Scenario: As a User can click on the linked ticket to open its Ticket dock.
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "Monika", "Text for Summary", "Checking on Escalation", "High", "UnAssigned", "Jon Automation"
    When I save new ticket
    And  I can link the ticket to another ticket using 'is child of' type
    Then I can open the linked ticket's dock

@regression2021 @regression2021-ServiceDesk-linkTicket @regression-SD
  Scenario: As a User, I can click the X button (displayed on mousing over the ticket link) to remove the link to ticket.
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "Monika", "Text for Summary", "Checking on Escalation", "High", "UnAssigned", "Jon Automation"
    When I save new ticket
    And  I can link the ticket to another ticket using 'is child of' type
    Then I can remove the linked ticket

@regression2021 @regression2021-ServiceDesk-linkTicket @regression-SD
  Scenario: As a User, I can add link tickets as parent in new ticket
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "Monika", "Text for Summary", "Checking on Escalation", "High", "UnAssigned", "Jon Automation"
    When I save new ticket
    And  I can link the ticket to another ticket using 'is parent of' type
    Then I can verify ticket is linked as 'is parent of'

@regression2021 @regression2021-ServiceDesk-linkTicket @regression-SD
  Scenario: As a User, I can add link tickets as child in existing ticket
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "Monika", "Text for Summary", "Checking on Escalation", "High", "UnAssigned", "Jon Automation"
    When I save new ticket
    And  I can link the ticket to another ticket using 'is child of' type
    Then I can verify ticket is linked as 'is child of'

@regression2021 @regression2021-ServiceDesk-linkTicket @regression-SD
  Scenario: As a User, I can add link tickets as parent in existing ticket
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "Monika", "Text for Summary", "Checking on Escalation", "High", "UnAssigned", "Jon Automation"
    When I save new ticket
    And  I can link the ticket to another ticket using 'is parent of' type
    Then I can verify ticket is linked as 'is parent of'
