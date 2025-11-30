Feature: Application Security setting

	user can view and update Application security , Credit card security and wireless security.
	
  		Background: 
			Given I open UBO webapp
			And I login with username "dreamteam2" and password "str0ngP@ss2"
			And I can navigate setting from side menu

Scenario Outline : As a user , I can see "Security" setting fields
		When I navigate to Application setting
		When I select "Security" accordians
		Then fields will be visible under <category>

			Examples:
				|category					|
				|Application Security		| 						
				|Credit Card Data Security	|
				|Wireless Security 			|

		Scenario : As a user , I can see "Application Security" in setting fields
		When I navigate to Application setting
		When I select "Security" accordians
		When I select "Application Security"
		Then I can see Ip access name 
		And I can see Ip prefix 
		And I can see Ip prefix length

		Scenario : As a user , I can edit "Application Security" in setting fields
		When I navigate to Application setting
		When I select "Security" accordians
		When I select "Application Security"
		Then I can edit Ip access name 
		And I can edit Ip prefix 
		And I can edit Ip prefix length

		Scenario : As a user , I can update "Application Security" in setting fields
		When I navigate to Application setting
		When I select "Security" accordians
		When I select "Application Security"
		Then I can update Ip access name 
		And I can update Ip prefix 
		And I can update Ip prefix length

Scenario Outline : As a user , I can edit "Credit Card Data Security" in setting fields
		When I navigate to Application setting
		When I select "Security" accordians
		When I select "Credit Card Data Security"
		Then I can view selected <option>

		|<option>													|
		|<Store subscribe payment date on visp.net's secure servers>|
		|<Store subscribe payment data locally>						|

		Scenario : As a user , I can edit "Credit Card Data Security" in setting fields
		When I navigate to Application setting
		When I select "Security" accordians
		When I select "Credit Card Data Security"
		Then I can view select "Store subscribe payment date on visp.net's secure servers"

		Scenario : As a user , I can edit "Credit Card Data Security" in setting fields
		When I navigate to Application setting
		When I select "Security" accordians
		When I select "Credit Card Data Security"
		Then I can view select "Store subscribe payment data locally"
		And choose the path of local DB

		Scenario : As a user , I can see "Wireless Security " in setting fields
		When I navigate to Application setting
		When I select "Security" accordians
		When I select "Wireless Security "
		Then I can see <option> checkboxes

		|<option>																		|
		|<Require stromng password for all new wireless services ans password updates>	|
		|<Disable the following characters in creating  or updating passwords>			|

		Scenario : As a user , I can see "Wireless Security " in setting fields
		When I navigate to Application setting
		When I select "Security" accordians
		When I select "Wireless Security "
		Then I can select "Require stromng password for all new wireless services ans password updates" checkbox

		Scenario : As a user , I can see "Wireless Security " in setting fields
		When I navigate to Application setting
		When I select "Security" accordians
		When I select "Wireless Security "
		Then I can select "Disable the following characters in creating  or updating passwords" checkbox
		And I can enter the characters that need to disable

