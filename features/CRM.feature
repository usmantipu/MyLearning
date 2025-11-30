@CRM
Feature: Tickets Table 

  Background: 
			Given I launch application
			And I login using credentials 
			|automationbeta|Testing1!|
          #  When I navigate to CRM
          #  And  I make full view of ticket table
          #  And  I reset ticket filters
  @regression2021-CRM
  Scenario: As a user of CRM, I can navigate to Service Desk
			#When I navigate to CRM
			Then I see Tickets Table filter buttons
			|All            |
			|Pending        |
			|Open           |
			|Resolved       |
      |Others         |			
  
  @regression2021-CRM @regression-CRM
  Scenario: As a user of CRM, I can view Ticket in Dock
      When I navigate to CRM
      When I select Ticket from Ticket table
      Then crm Ticket should open in dock view
	
  @regression2021-CRM @regression-CRM @TA-597
  Scenario Outline: As a User of CRM, I can Filter Tickets records based on Technicians
      When I navigate to CRM
      When I enable Assign appUser column in column Chooser of CRM  
      When I Assign UnAssigned ticket ticket record by <Technicians>
      When I choose option to filter crm ticket records by <Technicians>
      Then CRM Tickets filter result should match selected <Technicians>
      
      Examples:
      |Technicians|
      |Automation Beta|
      |Unassigned|

  @regression2021-CRM @regression-CRM
  Scenario: As a User of CRM, I can add Comments in tickets
      When I navigate to CRM 
      When I select Ticket from Ticket table
      When I add Comment in the ticket 
      Then The Comment should be added to the ticket

  @regression2021-CRM @regression-CRM
  Scenario: As a User of CRM, I can view the updated and accurate data of the displayed columns for the ticket that I click on the list.
      When I navigate to CRM 
      When I select Ticket from Ticket table
      Then I see correct data of the columns in the ticket dock


  #Bug#@regression2021-CRM #https://vispnet.atlassian.net/browse/TA-601 @regression-CRM
  Scenario Outline: As a User of CRM, I can delete ticket.
      When I navigate to Add Ticket page from main menu
      When I enter CRM ticket details like "<CustomerName>", "Text for Summary", "<TicketType>", "<TicketPriority>", "<Assignee>", "<TicketFollower>"
      When I save the new ticket
      When I close the new Ticket Dock
      When I navigate to CRM 
      Then I can delete a CRM ticket

    Examples:
    |CustomerName |TicketType |TicketPriority |Assignee  |TicketFollower|
    |Monika       |Checking on Escalation  |High     |UnAssigned    |Jon Automation |


  #Bug#@regression2021-CRM @regression-CRM #https://vispnet.atlassian.net/browse/TA-601
  Scenario Outline: As a User of CRM, I can see that the Service Desk table data is updated after deleting a ticket.
      When I navigate to Add Ticket page from main menu
      When I enter CRM ticket details like "<CustomerName>", "Text for Summary", "<TicketType>", "<TicketPriority>", "<Assignee>", "<TicketFollower>"
      When I save the new ticket
      When I close the new Ticket Dock
      When I navigate to CRM 
      Then I can delete a CRM ticket
      And  I see that listing is updated

    Examples:
    |CustomerName |TicketType |TicketPriority |Assignee  |TicketFollower|
    |Monika       |Checking on Escalation  |High     |UnAssigned    |Jon Automation |

@CRMSanity @regression2021-CRM @regression-CRM
  Scenario Outline: As a user of CRM, I can filter records based on Filter options
			When I navigate to CRM
			When I select crm filter  <Filter option> in accordion
			Then I see only crm records with <Filter option> status
			Examples: 
			|Filter option      |
			|Pending            |
			|Open               |
  @regression2021-CRM @regression-CRM
  Scenario Outline: As a User of CRM, I can filter and view an accurate list of tickets of a combination of ticket status and priority by selecting specific Status and Priority filter buttons.
      When I navigate to CRM
      When I select crm filter  <Filter option> in accordion
      And  I applied the desired crm priority <Priority>
			Then I can see the crm records with <Filter option> and <Priority> only
			Examples: 
			|Filter option|Priority|
			|Pending      |High    |
			|Open         |Normal  |

  @regression2021-CRM @regression-CRM
  Scenario: As a User of CRM, I can choose to display columns in the Service Desk table using the Column Chooser.
      When I navigate to CRM 
      When I enable a column in column Chooser of CRM
      Then I should see the required column in the list view

  @regression2021-CRM @regression-CRM
  Scenario: As a User of CRM, I can choose to hide columns in the Service Desk table using the Column Chooser.
      When I navigate to CRM
      When I enable a column in column Chooser of CRM 
      When I disable the desired column in column Chooser
      Then I should NOT see the desired column in the list view

  @regression2021-CRM @regression-CRM
  Scenario: As a User of CRM, the enabled columns I see in the Column Chooser are consistent with the displayed columns in the Main Table.
      When I navigate to CRM 
      When I compare columns between column chooser and CRM listing
      Then The columns between column chooser and listing should be same
