@linkTicket
Feature: Link Ticketvalidations

   As a User, I can link Tickets for any Subscriber's and validate it 

  Background: 
			Given I open web application
			And I login with my credentials
			|jcabangonautomation|Test@1234|
      When I navigate to Add Ticket page from top menu
      When I enter ticket details like "Monika", "Text for Summary", "Checking on Escalation", "High", "UnAssigned", "Jon Automation"
      When I save new ticket
      When I keep another ticket Data to search
@regression2021 @regression2021-ServiceDesk-linkTicketValidations @regression-SD
  Scenario: As a User, I can see 'Cascade update to linked tickets' option when I try to close a ticket
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "Monika", "Text for Summary", "Checking on Escalation", "High", "UnAssigned", "Jon Automation"
    When I save new ticket
    And  I can link the ticket to another ticket using 'is child of' type
    Then I can verify ticket is linked as 'is child of'
    Then I try to close a ticket
    Then I should see 'Cascade update to linked tickets' option for ticket 'Closed'
@regression2021 @regression2021-ServiceDesk-linkTicketValidations @regression-SD
  Scenario: As a User, I can see 'Cascade update to linked tickets' option when I try to resolve a ticket
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "Monika", "Text for Summary", "Checking on Escalation", "High", "UnAssigned", "Jon Automation"
    When I save new ticket
    And  I can link the ticket to another ticket using 'is child of' type
    Then I can verify ticket is linked as 'is child of'
    Then I try to resolve a ticket
    Then I should see 'Cascade update to linked tickets' option for ticket 'Resolved'
@regression2021 @regression2021-ServiceDesk-linkTicketValidations @regression-SD
  Scenario: As a User, when the I mark a ticket with linked tickets as closed, the app prompts to choose whether to cascade the update to: all the tickets, specific ticket, and none of the linked tickets
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "Monika", "Text for Summary", "Checking on Escalation", "High", "UnAssigned", "Jon Automation"
    When I save new ticket
    And  I can link the ticket to another ticket using 'is child of' type
    Then I can verify ticket is linked as 'is child of'
    Then I try to close a ticket
    Then I select cascade update to linked tickets option for 'Closed'
    Then I should see options i.e. 'cascade the update to: all the tickets, specific ticket, and none of the linked tickets'
@regression2021 @regression2021-ServiceDesk-linkTicketValidations @TA-468 @regression-SD
  Scenario: As a User, when I close tickets using cascade option, I am presented with an option to bypass the closing tickets requirements
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "Monika", "Text for Summary", "Checking on Escalation", "High", "UnAssigned", "Jon Automation"
    When I save new ticket
    And  I can link the ticket to another ticket using 'is child of' type
    Then I can verify ticket is linked as 'is child of'
    Then I try to close a ticket
    Then I check the cascade update to linked tickets option to close Ticket
    Then I am presented with an option to bypass the closing tickets requirements
@regression2021 @regression2021-ServiceDesk-linkTicketValidations @regression-SD
  Scenario: As a User, when the I mark a ticket with linked tickets as resolved, the app prompts to choose whether to cascade the update to: all the tickets, specific ticket, and none of the linked tickets
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "Monika", "Text for Summary", "Checking on Escalation", "High", "UnAssigned", "Jon Automation"
    When I save new ticket
    And  I can link the ticket to another ticket using 'is child of' type
    Then I can verify ticket is linked as 'is child of'
    Then I try to resolve a ticket
    Then I select cascade update to linked tickets option for 'Resolved'
    Then I should see options i.e. 'cascade the update to: all the tickets, specific ticket, and none of the linked tickets'
@regression2021 @regression2021-ServiceDesk-linkTicketValidations @regression-SD
  Scenario: As a User, I can see linked tickets status as resolved on linked tickets tab once I use the cascade option to resolve the tickets
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "Monika", "Text for Summary", "Checking on Escalation", "High", "UnAssigned", "Jon Automation"
    When I save new ticket
    And  I can link the ticket to another ticket using 'is child of' type
    Then I can verify ticket is linked as 'is child of'
    Then I try to resolve a ticket
    Then I check the cascade update to linked tickets options to Resolve Ticket
    Then I should see linked ticket status gets resolved too