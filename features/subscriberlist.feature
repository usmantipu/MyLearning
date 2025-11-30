@SubList
Feature: Subscriber List

  Background: 
			Given I open UBO webapp
			And I login with username jcabangonautomation and password Test@1234
@regression2021  @regression2021-subscriber @regression-BIL
  Scenario: As a user, I can navigate to subscriber list
			When I navigate to subscriber list
			Then I see buttons on subscriber list
			|All          |
			|Paid up      |
			|Due          |
			|Past Due     |
      		|Suspended    |	
			|Hibernated   |
			|Prospects    |
#			|Archived  |

@subListSanity @regression2021 @regression2021-subscriber @regression-BIL @TA-86
  Scenario Outline: As a user, I can filter records based on buttons available on subscriber list
			When I navigate to subscriber list
			When I click on subscriber <ListButton> button
			Then I see records of <ListButton> status only

			Examples:
			|ListButton|
			|Paid up   |
			|Past Due  |
			|Due  	   |
			|Suspended |
			|Hibernated|
			|Prospect  |
#			|Archived  |
#TA-265
#@regression2021 @regression2021-subscriber @regression-BIL
Scenario Outline: As a user, I can change subscriber list table view to comfortable or cozy 
			When I navigate to subscriber list
			When I change table view to <tableView>
			Then Table view gets updated to <tableView>
			
			Examples:
			
			|tableView  |
			|Comfortable|
			|Cozy       |

@manualtest
  Scenario Outline: As a user, I can export subscriber list as CSV
			When I go to subscriber list
			When I click on "<ListButton>" button
			When I export subscriber list as CSV
			Then I CSV should contain records available in current subscriber list only
			
			Examples:
			
			|ListButton|
			|Paid Up   |
			|Due       |
			|Past Due  |
			|Suspended |
			|Hibernated|
			|Prospect  |
#			|Archived  |