Feature:  Application Custom Fields setting

	User can view all fileds and values, user can edit the label of fields and select the fields type like text etc.

  Background: 
			Given I open UBO webapp
			And I login with username "dreamteam2" and password "str0ngP@ss2"
			And I can navigate setting from side menu

    Scenario Outline: As a user , I can see all fields of "Custom Fields"
		When I navigate to "Application" setting
		When I select "Custom Fields" accordians
		Then I should able to fileds with "<option>"

		Examples
		|<option>|
		|<Text>|
		|<Type>|


	Scenario Outline : As a user , I sould able to update fields of custom Fields
		When I navigate to "Application" setting
		When I select "Custom Fields" accordians
		When I can edit  "Text"
		And I  can edit "Type"
		Then I should able to update changes

Scenario Outline: As a user , I can see all fields of "Addition Custom Fields"
		When I navigate to "Application" setting
		When I select "Custom Fields" accordians
		When I can see with "<option>"

		Examples
		|<option>|
		|<Text>|
		|<Type>|
		|<Checkbox>|

	Scenario Outline : As a user , I sould able to update fields of custom Fields
		When I navigate to "Application" setting
		When I select "Custom Fields" accordians
		When I can edit  "Text"
		And I  can edit "Type"
		And I can check or uncheck "Checkbox"
		Then I should able to update changes

