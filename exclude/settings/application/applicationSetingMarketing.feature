Feature: Application Marketing setting

	User can view and change marketing settings.

  Background: 
			Given I open UBO webapp
			And I login with username "dreamteam2" and password "str0ngP@ss2"
			And I can navigate setting from side menu

Scenario : As a user, I can see "Marketing" fields
  	When  I navigate to "Application" setting
	When I select "Marketing"
	Then all fields of "Marketing will be visible

Scenario : As a user,'I can check "Display Marketing Source and Source Details"
	When I select "Marketing"
	Then I can check or uncheck "I can check "Display Marketing Source and Source Details" checkbox

Scenario : As a user,'I can check "Display Cancellation Survey"
	When I select "Marketing"
	Then I can check or uncheck "Display Cancellation Survey" checkbox
