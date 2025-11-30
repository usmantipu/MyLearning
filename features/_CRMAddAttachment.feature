@CRMaddAttachment
Feature: Add attachment in the ticket

  Background: 
			Given I open web application
			And I login with my credentials
			|automationbeta|Testing1!|
  @regression2021 @regression2021-crmAddAttachment
  Scenario Outline: As a User, I can add attachment to a new ticket in CRM
    When I navigate to CRM
    When I navigate to Add Ticket page from main menu
    When I enter CRM ticket details like "<CustomerName>", "Text for Summary", "<TicketType>", "<TicketPriority>", "<Assignee>", "<TicketFollower>"
    When I save the new ticket
    When I add an attachment for crm ticket
    When I make full view of ticket table
    When I reset ticket filters to Today
    Then I see that listing is updated
    When I select first Ticket from Ticket table
    Then I can see the newly added attachment
    Examples:
    |CustomerName |TicketType |TicketPriority |Assignee  |TicketFollower|
    |Monika       |Checking on Escalation  |High     |UnAssigned    |Jon Automation |

@regression2021 @regression2021-crmAddAttachment
  Scenario Outline: As a User, I can add attachment with different types to a new ticket in CRM
    When I navigate to CRM
    When I navigate to Add Ticket page from main menu
    When I enter CRM ticket details like "<CustomerName>", "Text for Summary", "<TicketType>", "<TicketPriority>", "<Assignee>", "<TicketFollower>"
    When I save the new ticket
    When I close the new Ticket Dock
    When I make full view of ticket table
    When I reset ticket filters to Today
    Then I see that listing is updated
    When I select first Ticket from Ticket table
    When I add attachments of different types
      |.jpg|
      |.png|
    Then The multiple attachments should be saved in the ticket
    Examples:
    |CustomerName |TicketType |TicketPriority |Assignee  |TicketFollower|
    |Monika       |Checking on Escalation  |High     |UnAssigned    |Jon Automation |

@regression2021 @regression2021-crmAddAttachment
  Scenario Outline: As a User, I can add attachment to an existing ticket in CRM
    When I navigate to CRM
    When I navigate to Add Ticket page from main menu
    When I enter CRM ticket details like "<CustomerName>", "Text for Summary", "<TicketType>", "<TicketPriority>", "<Assignee>", "<TicketFollower>"
    When I save the new ticket
    When I close the new Ticket Dock
    When I make full view of ticket table
    When I reset ticket filters to Today
    Then I see that listing is updated
    When I select first Ticket from Ticket table
    When I add an attachment for crm ticket
    When I select first Ticket from Ticket table
    Then The attachment should be saved with the ticket

    Examples:
    |CustomerName |TicketType |TicketPriority |Assignee  |TicketFollower|
    |Monika       |Checking on Escalation  |High     |UnAssigned    |Jon Automation |

@regression2021 @regression2021-crmAddAttachment
  Scenario Outline: As a User, I can see logs of attachment in activity section, in CRM
    When I navigate to CRM
    When I navigate to Add Ticket page from main menu
    When I enter CRM ticket details like "<CustomerName>", "Text for Summary", "<TicketType>", "<TicketPriority>", "<Assignee>", "<TicketFollower>"
    When I save the new ticket
    When I add an attachment for crm ticket
    When I make full view of ticket table
    When I reset ticket filters to Today
    Then I see that listing is updated
    When I select first Ticket from Ticket table
    When I open crm ticket activity logs
    Then The crm task log should exist in activity logs

    Examples:
    |CustomerName |TicketType |TicketPriority |Assignee  |TicketFollower|
    |Monika       |Checking on Escalation  |High     |UnAssigned    |Jon Automation |
    
@regression2021 @regression2021-crmAddAttachment
  Scenario Outline: As a User, I can see logs of attachment at ISP logs
    When I navigate to CRM
    When I navigate to Add Ticket page from main menu
    When I enter CRM ticket details like "<CustomerName>", "Text for Summary", "<TicketType>", "<TicketPriority>", "<Assignee>", "<TicketFollower>"
    When I save the new ticket
    When I add an attachment for crm ticket
    When I open ISP Logs from settings to verify crm
    Then I see crm attachment logs in ISP logs section

    Examples:
    |CustomerName |TicketType |TicketPriority |Assignee  |TicketFollower|
    |Monika       |Checking on Escalation  |High     |UnAssigned    |Jon Automation |