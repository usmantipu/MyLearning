@AddTicket
Feature: Add attachment in the ticket

  Background: 
			Given I open web application
			And I login with my credentials
			|jcabangonautomation|Test@1234|
@regression2021 @regression2021-ServiceDesk-addAttachment @regression-SD
  Scenario Outline: As a User, I can add attachment to a new ticket
    When I navigate to Service Desk
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "<CustomerName>", "Text for Summary", "<TicketType>", "<TicketPriority>", "<Assignee>", "<TicketFollower>"
    When I save new ticket
    When I add an attachment from ticket
    When I select List View
    Then The attachment should be saved in the ticket
    Examples:
    |CustomerName |TicketType |TicketPriority |Assignee  |TicketFollower|
    |Monika       |Checking on Escalation  |High     |UnAssigned    |Jon Automation |

@regression2021 @regression2021-ServiceDesk-addAttachment @regression-SD
  Scenario Outline: As a User, I can add attachment with label to a new ticket
    When I navigate to Service Desk
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "<CustomerName>", "Text for Summary", "<TicketType>", "<TicketPriority>", "<Assignee>", "<TicketFollower>"
    When I save new ticket
    When I add an attachment from ticket
    When I select List View
    Then The attachment should be saved in the ticket
    Examples:
    |CustomerName |TicketType |TicketPriority |Assignee  |TicketFollower|
    |Monika       |Checking on Escalation  |High     |UnAssigned    |Jon Automation |

@regression2021 @regression2021-ServiceDesk-addAttachment @regression-SD
  Scenario Outline: As a User, I can add attachment with different types to a new ticket
    When I navigate to Service Desk
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "<CustomerName>", "Text for Summary", "<TicketType>", "<TicketPriority>", "<Assignee>", "<TicketFollower>"
    When I save new ticket
  #  When I select 1st Ticket from Ticket table
    When I add attachments with different types
      |.jpg|
      |.png|
    When I select List View
    Then The attachments should be saved in the ticket
    Examples:
    |CustomerName |TicketType |TicketPriority |Assignee  |TicketFollower|
    |Monika       |Checking on Escalation  |High     |UnAssigned    |Jon Automation |

@regression2021 @regression2021-ServiceDesk-addAttachment @regression-SD
  Scenario Outline: As a User, I can add attachment to an existing ticket
    When I navigate to Service Desk
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "<CustomerName>", "Text for Summary", "<TicketType>", "<TicketPriority>", "<Assignee>", "<TicketFollower>"
    When I save new ticket
  #  When I select 1st Ticket from Ticket table
    When I add an attachment from ticket
    Then The attachment should be saved in the ticket

    Examples:
    |CustomerName |TicketType |TicketPriority |Assignee  |TicketFollower|
    |Monika       |Checking on Escalation  |High     |UnAssigned    |Jon Automation |

@regression2021 @regression2021-ServiceDesk-addAttachment @regression-SD
  Scenario Outline: As a User, I can see logs of attachment in activity section
    When I navigate to Service Desk
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "<CustomerName>", "Text for Summary", "<TicketType>", "<TicketPriority>", "<Assignee>", "<TicketFollower>"
    When I save new ticket
    When I add an attachment from ticket
    When I select List View
    When I open first ticket from Ticket List
  #  When I select 1st Ticket from Ticket table
    When I open ticket activity logs
    Then The attchment log should exist in activity logs

    Examples:
    |CustomerName |TicketType |TicketPriority |Assignee  |TicketFollower|
    |Monika       |Checking on Escalation  |High     |UnAssigned    |Jon Automation |
    
#Bug:@TA-1247: file attachment log is not present in ISP logs
#@regression2021 @regression2021-ServiceDesk-addAttachment @regression-SD @TA-1247
  Scenario Outline: As a User, I can see logs of attachment at ISP logs
    When I navigate to Service Desk
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "<CustomerName>", "Text for Summary", "<TicketType>", "<TicketPriority>", "<Assignee>", "<TicketFollower>"
    When I save new ticket
    When I add an attachment from ticket
    When I open ISP Logs from settings
    Then I see attachment logs in ISP logs section

    Examples:
    |CustomerName |TicketType |TicketPriority |Assignee  |TicketFollower|
    |Monika       |Checking on Escalation  |High     |UnAssigned    |Jon Automation |

#@ServiceDesk-customAttributes-CI 
  Scenario: As a developer, I want to ensure all web elements have vispdata-testId to support automation 
    When I navigate to Service Desk
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "<CustomerName>", "Text for Summary", "<TicketType>", "<TicketPriority>", "<Assignee>", "<TicketFollower>"
    When I save new ticket
    When I add an attachment from ticket
    Then All visible important elements of SDAddAttachment should have vispdata-testid attribute
