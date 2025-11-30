@crmCalendar
Feature: CRM tickets on the Calendar

  Background: 
			Given I launch application
			And I login using credentials 
			|automationbeta|Testing1!|
      When I navigate to CRM
      And  I make full view of ticket table
      And  I reset ticket filters

  @regression2021 @regression2021-crmCalendar
  Scenario: As a User, I can see Calendar when navigate to CRM > Calendar
  #  When I navigate to CRM
    When I go to Service dispatch section
    Then I should see the Calendar section
  
  @regression2021 @regression2021-crmCalendar
  Scenario: As a User, I can view the list of Technicians in CRM
    When I create a Technician from Teams and users of settings
    And I refresh the page
  #  When I navigate to CRM
    And  I go to Service dispatch section
    Then I should see the recently created user in the list of Technicians
  
  @regression2021 @regression2021-crmCalendar
  Scenario Outline: As a User, I can view Tickets schedule events on Calendar in CRM
    When I navigate to Add Ticket page from main menu
    When I enter CRM ticket details like "<CustomerName>", "Text for Summary", "<TicketType>", "<TicketPriority>", "<Assignee>", "<TicketFollower>"
    When I save the new ticket
    When I close the new Ticket Dock
    Then I see that listing is updated
    When  I select Ticket from Ticket table
    When  I schedule opened ticket and note Details
    Then I see that listing is updated
    And  I go to Service dispatch section
    Then I should see the ticket event on Calendar
  Examples:
    |CustomerName |TicketType |TicketPriority |Assignee  |TicketFollower|
    |Monika       |Checking on Escalation  |High     |UnAssigned    |Jon Automation |
  
  @regression2021 @regression2021-crmCalendar
  Scenario Outline: As a User, I can view ticket 'Ticket type' and 'Subscriber Name' on ticket event in CRM
    When I navigate to Add Ticket page from main menu
    When I enter CRM ticket details like "<CustomerName>", "Text for Summary", "<TicketType>", "<TicketPriority>", "<Assignee>", "<TicketFollower>"
    When I save the new ticket
    When I close the new Ticket Dock
    Then I see that listing is updated
    When  I select Ticket from Ticket table
    When  I schedule opened ticket and note Details
    Then I see that listing is updated
    And  I go to Service dispatch section
    Then I should see it on calendar with its ticket type and subscriber name
    Examples:
    |CustomerName |TicketType |TicketPriority |Assignee  |TicketFollower|
    |Monika       |Checking on Escalation  |High     |UnAssigned    |Jon Automation |
  
  #@regression2021 @regression2021-crmCalendar @TA-63
  Scenario: As a User, I can view Calendar 'Month' view in CRM
    When I navigates to subscribers list
		And  I go to Logs section
		And  I add a ticket from Logs section
    And  I close the subscriber drawer
    When I navigate to CRM
    And I go to ticket List
    And I open a ticket from Ticket List
    And  I schedule opened ticket and note Details
    And I go to CRM - Calendar
    And  I go to Calendar - Month view
    Then I should see the ticket event on month view
  
  #@regression2021 @regression2021-crmCalendar 
  Scenario: As a User, I can view Calendar 'Week' view in CRM
    When I navigates to subscribers list
		And  I go to Logs section
		And  I add a ticket from Logs section
    And  I close the subscriber drawer
    When I navigate to CRM
    And I go to ticket List
    And I open a ticket from Ticket List
    And  I schedule opened ticket and note Details
    And I open a ticket from Ticket List
    And I keep ticket docked-in
    And I go to CRM - Calendar
    And  I go to Calendar - Week view
    Then I should see the ticket event on week view

  #@regression2021 @regression2021-crmCalendar 
  Scenario: As a User, I can view Calendar 'Timeline' view in CRM
    When I navigates to subscribers list
		And  I go to Logs section
		And  I add a ticket from Logs section
    And  I close the subscriber drawer
    When I navigate to CRM
    And I go to ticket List
    And I open a ticket from Ticket List
    And  I schedule opened ticket for current date and keep Details
    And I go to CRM - Calendar
    And  I go to Calendar > Resource timeline
    Then I should see the ticket event on resource timeline

  @regression2021 @regression2021-crmCalendar
  Scenario Outline: As a User, I can view Ticket in dock by clicking on ticket event in CRM
    When I navigate to Add Ticket page from main menu
    When I enter CRM ticket details like "<CustomerName>", "Text for Summary", "<TicketType>", "<TicketPriority>", "<Assignee>", "<TicketFollower>"
    When I save the new ticket
    When I close the new Ticket Dock
    Then I see that listing is updated
    When  I select Ticket from Ticket table
    When  I schedule opened ticket and note Details
    Then I see that listing is updated
    And  I go to Service dispatch section
    And  I click on ticket event from CRM Calendar events
    Then I can see that correct ticket details are opened in the dock
    Examples:
    |CustomerName |TicketType |TicketPriority |Assignee  |TicketFollower|
    |Monika       |Checking on Escalation  |High     |UnAssigned    |Jon Automation |

  