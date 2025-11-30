@mergeTicket
Feature: Merge Ticket

   As a User, I can link Tickets for any Subscriber's. 

  Background: 
			Given I open web application
			And I login with my credentials
			|jcabangonautomation|Test@1234|
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "Monika", "Text for Summary", "Checking on Escalation", "High", "UnAssigned", "Jon Automation"
    When I save new ticket
  # When I close new Ticket Dock
    When I keep another ticket ID to use in upcoming actions
@regression2021 @regression2021-ServiceDesk-mergeTicket @regression-SD
  Scenario: As a User, I can see 'Merge to' relationship type on linked ticket section
    When I navigate to Service Desk
    When I select List View 
    When I open first ticket from Ticket List
    Then I can see 'merged to' relationship type on linked ticket section

@regression2021 @regression2021-ServiceDesk-mergeTicket @regression-SD
  Scenario: As a User, I can merge a ticket to another ticket using 'Merge to' ticket relationship
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "Monika", "Text for Summary", "Checking on Escalation", "High", "UnAssigned", "Jon Automation"
    When I save new ticket
    And I can link the ticket to another ticket using 'merged to' type
    Then I can see ticket 'merged to' to other ticket 

@regression2021 @regression2021-ServiceDesk-mergeTicket @regression-SD
  Scenario: As a User, I can see that, after using 'Merged to' option, current ticket gets closed and its data will be copied over to selected ticket
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "Monika", "Text for Summary", "Checking on Escalation", "High", "UnAssigned", "Jon Automation"
    When I save new ticket
    And I can link the ticket to another ticket using 'merged to' type
    Then  I can see that current ticket is closed
    And I can see its contents are copied to the other ticket in which it is merged
    
@regression2021 @regression2021-ServiceDesk-mergeTicket @regression-SD
  Scenario: As a User, I CANNOT close a ticket if its child ticket is not closed
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "Monika", "Text for Summary", "Checking on Escalation", "High", "UnAssigned", "Jon Automation"
    When I save new ticket
    And  I can link the ticket to another ticket using 'is parent of' type
    And  I add an attachment in the merged ticket
    And  I try to close the ticket
    Then The ticket cannot be closed as the child ticket is still open

@regression2021 @regression2021-ServiceDesk-mergeTicke @regression-SD
  Scenario: As a User, I can see activity log for linking a ticket in activity section
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "Monika", "Text for Summary", "Checking on Escalation", "High", "UnAssigned", "Jon Automation"
    When I save new ticket
    And I can link the ticket to another ticket using 'merged to' type
    Then I should see the link event in the activity log
#Bug: TA-1247
#@regression2021 @regression2021-ServiceDesk-mergeTicket @TA-269 @regression-SD
  Scenario: As a User, I can see ISP logs for a ticket after linking tickets to it
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "Monika", "Text for Summary", "Checking on Escalation", "High", "UnAssigned", "Jon Automation"
    When I save new ticket
    And I can link the ticket to another ticket using 'merged to' type
    Then I should see the link event in the ISP log

  
