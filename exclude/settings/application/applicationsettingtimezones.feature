Feature: Application Time Zone setting

	User can view and update time zone 

  Background: 
			Given I open UBO webapp
			And I login with username "dreamteam2" and password "str0ngP@ss2"
			And I can navigate setting from side menu

Scenario Outline : As a user , I can see "Time Zone" setting
	When I navigate to "Application" setting
	When I select "Time Zone"
	Then <option> will be visible

			Examples:
			|option					|
			|Time Zone				| 						
			|Current Date and Time	|


Scenario Outline : As a user, I can update "Time Zone" setting
	When I navigate to "Application" setting
	When I select "Time Zone"
	Then I can edit <option> and update.

			Examples:
			|option					|
			|Time Zone				| 						
			|Current Date and Time	|

