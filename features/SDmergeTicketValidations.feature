@mergeTicketValidation
Feature: Merge Ticket

   As a User, I can link Tickets for any Subscriber's. 

  Background: 
			Given I open web application
			And I login with my credentials
			|jcabangonautomation|Test@1234|
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "Monika", "Text for Summary", "Checking on Escalation", "High", "UnAssigned", "Jon Automation"
    When I save new ticket
    When I keep another ticket ID to use in upcoming actions

@regression2021 @regression2021-ServiceDesk-mergeTicketValidation @TA-270 @TA-260-Bugs @regression-SD
  Scenario: As a User, I can see that, after merging the ticket, its contacts get copied over to selected ticket
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "Monika", "Text for Summary", "Checking on Escalation", "High", "UnAssigned", "Jon Automation"
    When I save new ticket
    When I keep service contacts of current ticket
    And  I can link the ticket to another ticket using 'merged to' type
    Then I can see that contacts of current tickets get copied to selected ticket

@regression2021 @regression2021-ServiceDesk-mergeTicketValidation @TA-271 @TA-260-Bugs @regression-SD
  Scenario: As a User, I can see that, after merging the ticket, its followers get copied over to selected ticket
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "Monika", "Text for Summary", "Checking on Escalation", "High", "UnAssigned", "Jon Automation"
    When I save new ticket
    When I keep followers of current ticket
    And  I can link the ticket to another ticket using 'merged to' type
    Then I can see that followers of current tickets get copied to selected ticket

@regression2021 @regression2021-ServiceDesk-mergeTicketValidation @regression-SD
  Scenario: As a User, I can see that, after merging the ticket, its Tasks (prefix/suffix to indicate it’s a merged task will be added to the task name) get copied over to selected ticket
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "Monika", "Text for Summary", "Checking on Escalation", "High", "UnAssigned", "Jon Automation"
    When I save new ticket
    When I add new task to the current ticket
    When I save new ticket
    And  I can link the ticket to another ticket using 'merged to' type
    Then I can see that the tasks of current tickets get copied to selected ticket

@regression2021 @regression2021-ServiceDesk-mergeTicketValidation @regression-SD
  Scenario: As a User, I can see that, after merging the ticket, its Attachments (prefix/suffix to indicate it’s merged attachment will be added to the attachment filename) get copied over to selected ticket
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "Monika", "Text for Summary", "Checking on Escalation", "High", "UnAssigned", "Jon Automation"
    When I save new ticket
    When I add new attachment to the current ticket
    And  I can link the ticket to another ticket using 'merged to' type
    Then I can see that the attachment of current tickets get copied to selected ticket

@regression2021 @regression2021-ServiceDesk-mergeTicketValidation @TA-260-364 @regression-SD
  Scenario: As a User, I can see that, after merging the ticket, its Custom Fields get copied over to selected ticket
    When I go to ticket type settings to define a new ticket type
    When I navigate to Add Ticket page from top menu
    When I add ticket details with custom field "Monika", "CustomFieldOne"
    When I save new ticket
    When I keep custom field value of current ticket
    And  I can link the ticket to another ticket using 'merged to' type
    Then I can see that the custom fields of current tickets get copied to selected ticket

@regression2021 @regression2021-ServiceDesk-mergeTicketValidation @TA-322 @regression-SD
  Scenario: As a User, I can see that, after merging the ticket, its Notes Fields get copied over to selected ticket
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "Monika", "Text for Summary", "Checking on Escalation", "High", "UnAssigned", "Jon Automation"
    When I save new ticket
    When I add a Note to the current ticket
    And I go to Ticket details page
    And  I can link the ticket to another ticket using 'merged to' type
    Then I can see that the notes of current tickets get copied to selected ticket


  
