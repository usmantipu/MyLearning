@ServiceDesk
Feature: Tickets Table 

  Background: 
			Given I launch application
			And I login using credentials 
			|jcabangonautomation|Test@1234|
  @regression2021-ServiceDesk @regression2021 @regression-CRM
  Scenario: As a user, I can navigate to Service Desk
			When I navigate to Service Desk
			Then I see Tickets Table filter options
			|All            |
			|Pending        |
			|Open           |
			|Resolved       |
      |Others         |			

  @regression2021-ServiceDesk @regression2021 @regression-CRM
  Scenario: As a user, I see All tickets default 
      When I navigate to Service Desk
      When I select List View
      Then I see All tickets

  @regression2021-ServiceDesk @regression2021 @regression-CRM
  Scenario: As a User, I can view Ticket in Dock
      When I navigate to Service Desk
      When I select List View
      When I select 1st Ticket from Ticket table
      Then Ticket should open in dock view

#Bug validation alert message do not displayed
  @regression2021-ServiceDesk @regression2021 @TA-107 @regression-CRM
  Scenario: As a User, I can Edit ticket
      When I navigate to Service Desk
      When I select List View 
      When I select 1st Ticket from Ticket table
      When I update ticket details like summary,TicketType,TicketPrioroty,Assigne and Ticket Follower
      Then Ticket info should get updated
	
@ServiceDeskSanity @regression2021-ServiceDesk @regression2021 @regression-CRM
  Scenario Outline: As a user, I can filter records based on Filter options
			When I navigate to Service Desk
      When I select List View
			When I choose  <Filter option>
			Then I see records with <Filter option> status only
			Examples: 
			|Filter option      |
			|Pending            |
			|Open               |
#commented due to issues in data			|Resolved           |
#			|Others             |
  #TA-265
  # Scenario Outline: As a user, I can change Table Row Density
	# 		When I navigate to Service Desk
  #     When I select List View
  #     When I apply All from time period filter
	# 		When I select Action Menu to choose <Row density>
	# 		Then Service Desk Table <Row density> should get changed 
			
	# 		Examples:  
	# 		|Row density          |
	# 		|Comfortable          |
	# 		|Cozy                 |

  @regression2021-ServiceDesk @regression2021 @regression-CRM
  Scenario Outline: As a User, I can Filter Tickets records based on Technicians
      When I navigate to Service Desk
      When I select List View  
      When I choose available option to filter ticket records by <Technicians>
      Then Tickets filter result should based on selected <Technicians>
      
      Examples:
      |Technicians    |
      |Unassigned     |
#     |Cuong Hong     |

  @regression2021-ServiceDesk @regression2021 @regression-CRM
  Scenario: As a User, I can add Comments in tickets
      When I navigate to Service Desk
      When I select List View 
      When I select 1st Ticket from Ticket table
      When I add Comment
      Then Comment should get added 


# ===TA-232===

  @ServiceDesk-ehancements @regression-CRM
  Scenario: As a User, I can view the updated and accurate data of the displayed columns for the ticket that I click on the list.
      When I navigate to Service Desk
      When I select List View 
      When I select 1st Ticket from Ticket table
      Then I see accurate data of the columns in the ticket dock


  @ServiceDesk-ehancements @regression-CRM
  Scenario Outline: As a User, I can delete ticket.
      When I navigate to Add Ticket page from top menu
      When I enter ticket details like "<CustomerName>", "Text for Summary", "<TicketType>", "<TicketPriority>", "<Assignee>", "<TicketFollower>"
      When I save new ticket
      When I close new Ticket Dock
      When I navigate to Service Desk
      When I select List View 
      Then I can delete a ticket

    Examples:
    |CustomerName |TicketType |TicketPriority |Assignee  |TicketFollower|
    |Monika       |Checking on Escalation  |High     |UnAssigned    |Jon Automation |


  @ServiceDesk-ehancements @regression-CRM
  Scenario Outline: As a User, I can see that the Service Desk table data is updated after deleting a ticket.
      When I navigate to Add Ticket page from top menu
      When I enter ticket details like "<CustomerName>", "Text for Summary", "<TicketType>", "<TicketPriority>", "<Assignee>", "<TicketFollower>"
      When I save new ticket
      When I close new Ticket Dock
      When I navigate to Service Desk
      When I select List View 
      Then I can delete a ticket
      And  I see that table is updated
      # The table is not updating automatically

    Examples:
    |CustomerName |TicketType |TicketPriority |Assignee  |TicketFollower|
    |Monika       |Checking on Escalation  |High     |UnAssigned    |Jon Automation |


  @ServiceDesk-ehancements @regression-CRM @regression-CRM
  Scenario Outline: As a User, I can filter and view an accurate list of tickets of a combination of ticket status and priority by selecting specific Status and Priority filter buttons.
      When I navigate to Service Desk
      When I select List View
      When I choose  <Filter option>
      And  I apply <Priority>
			Then I see ticket records with <Filter option> and <Priority> only
			Examples: 
			|Filter option|Priority|
			|Pending      |High    |
			|Open         |Normal  |

  @ServiceDesk-ehancements @regression-CRM @regression-CRM
  Scenario: As a User, I can choose to display columns in the Service Desk table using the Column Chooser.
      When I navigate to Service Desk
      When I select List View 
      When I enable a column in column Chooser
      Then I should see that column in the list view

  @ServiceDesk-ehancements @regression-CRM @regression-CRM
  Scenario: As a User, I can choose to hide columns in the Service Desk table using the Column Chooser.
      When I navigate to Service Desk
      When I select List View 
      When I disable a column in column Chooser
      Then I should NOT see that column in the list view


  @ServiceDesk-ehancements @regression-CRM @regression-CRM
  Scenario: As a User, the enabled columns I see in the Column Chooser are consistent with the displayed columns in the Main Table.
      When I navigate to Service Desk
      When I select List View 
      When I compares columns between column-chooser and table
      Then The columns between column-chooser and the table should be same
  
  @ServiceDesk-customAttributes-CI 
  Scenario: As a developer, I want to ensure all web elements have vispdata-testId to support automation 
      When I navigate to Service Desk
      When I select List View 
      Then All visible important elements of serviceDesk should have vispdata-testid attribute
           