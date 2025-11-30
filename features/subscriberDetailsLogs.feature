@SubList
Feature: Subscriber details - logs

  Background: 
			Given I open UBO webapp
			And I login with username jcabangonautomation and password Test@1234
			#And I navigate to subscriber list
        	#And I open specific subscriber details
  @regression2021 @regression2021-SubList-Logs @regression-BIL
  Scenario: As a User, I can navigate to Logs section of Subscribers List
			When I navigates to subscribers list
			And  I go to Logs section
			Then I should see the logs section
  @regression2021 @regression2021-SubList-Logs @regression-BIL
  Scenario: As a User, I can view activity logs displayed by date in descending order.
			When I navigates to subscribers list
			And  I go to Logs section
			Then I should see activity logs in descending order
  @regression2021 @regression2021-SubList-Logs @regression-BIL
  Scenario: As a User, I can view an updated and accurate list of all activity logs in the Activity table when All filter is selected.
			When I navigates to subscribers list
			And  I go to Logs section
			And  I select All filter from the activity logs
			Then I should see all types of activity logs

  @regression2021 @regression2021-SubList-Logs @regression-BIL
  Scenario: As a User, I can view an updated and accurate list of all email-related activity logs in the Activity table when Email filter is selected.
			When I navigates to subscribers list
			And I send Email
			And  I go to Logs section
			And  I select email filter from the activity logs
			Then I should see email types of activity logs
  @regression2021 @regression2021-SubList-Logs @regression-BIL
  Scenario: As a User, I can view an updated and accurate list of all ticket-related activity logs in the Activity table when Ticket filter is selected.
			When I navigates to subscribers list
			And  I go to Logs section
			And  I select ticket filter from the activity logs
			Then I should see ticket types of activity logs
  @regression2021 @regression2021-SubList-Logs @regression-BIL
  Scenario: As a User, I can view an updated and accurate list of all note-related activity logs in the Activity table when Notes filter is selected.
			When I navigates to subscribers list
			And  I send note
			And  I go to Logs section
			And  I select note filter from the activity logs
			Then I should see note types of activity logs
			
  @regression2021 @regression2021-SubList-Logs @regression-BIL @attachment
  Scenario: As a User, I can view an updated and accurate list of all attachment-related activity logs in the Activity table when Attachment filter is selected.
			When I navigates to subscribers list
			And  I add an attachment
			And  I go to Logs section
			And  I select Attachment filter from the activity logs
			Then I should see attachment types of activity logs
				 |ATTACHMENT - ADD|	

  @regression2021 @regression2021-SubList-Logs @regression-BIL @TA-210
  Scenario: As a User, I can view an updated and accurate list of all equipment-related activity logs in the Activity table when Equipment filter is selected.
			When I navigate to subscriber list
        	And  I open specific subscriber details
			And  I add a new equipment activity log
			And  I go to Logs section
			And  I select equipment filter in the activity logs
			Then I should see equipment types of activity logs

  @regression2021 @regression2021-SubList-Logs @regression-BIL
  Scenario: As a User, I can view an updated and accurate list of activity logs not related to email, tickets, notes, attachment, and equipment in the Activity table when Logs filter is selected.
			When I navigates to subscribers list
			And  I go to Logs section
			And  I select logs filter from the activity logs
			Then I should see list of activity logs not related to email, tickets, notes, attachment, and equipment
			|Email|
			|Ticket|
			|Note|
			|ATTACHMENT - ADD|
			|Equipment|
  @regression2021 @regression2021-SubList-Logs @regression-BIL @TA-823
  Scenario: As a User, I can view a combination of activity log lists in the Activity table if there are multiple selected activity filters.
			When I navigates to subscribers list
			And  I send note
			And  I go to Logs section
			And  I add a ticket from Logs section
			And  I select multiple filter
				 |Note|Ticket|
			And  I go to Logs section
			Then I should see selected types of activity logs
				|TICKET|NOTE - ADD|

  @regression2021 @regression2021-SubList-Logs @regression-BIL
  Scenario: As a User, I can view the accurate notes with correct formatting when clicking on a note log.
			When I navigates to subscribers list
			And  I send note
			And  I go to Logs section
			And  I select note filter from the activity logs
			And  I open first item from the logs
			Then I should see Note details

  @regression2021 @regression2021-SubList-Logs @regression-BIL
  Scenario: As a User, I can view the Add Ticket dock when clicking Add Ticket.
			When I navigates to subscribers list
			And  I go to Logs section
			And  I add a ticket from Logs section
			And  I select ticket filter from the activity logs
			Then newly added ticket displayed under Ticket filter
 
  @regression2021 @regression2021-SubList-Logs @regression-BIL @TA-743 @TA-786a
  Scenario: As a User, I can delete a ticket of a subscriber.
  			When I navigates to subscribers list
			And  I go to Logs section
			And  I add a ticket from Logs section
			And  I select ticket filter from the activity logs
			And  I delete the added ticket
			And  I select ticket filter from the activity logs
			And  I select All filter from the activity logs
			Then The ticket record is removed from the logs
  @regression2021 @regression2021-SubList-Logs @regression-BIL
  Scenario: As a User, I can search the Activity table.
  			When I navigates to subscribers list
			And  I send note
			And  I go to Logs section
			And  I perform search on logs
			Then I should see the expected result in search
