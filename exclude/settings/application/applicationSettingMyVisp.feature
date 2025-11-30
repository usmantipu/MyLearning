Feature: My Visp settings

	User can view primary contact, billing contact, Payment reminder for your UBO software,Auto pay setting, list Due balance for Visp.net service and filter the list.
	User can edit Primary contact, billing contact, set payment reminder .

  Background: 
			Given I open UBO webapp
			And I login with username "dreamteam2" and password "str0ngP@ss2"
			
  Scenario Outline: As a user, I can select settings from side menu to view list of various settings.
			When I navigate to Home page
			When I click on settings
			Then I see required "<Application>"

			Examples:
			
			|Application    |
			|Billing        |
			|Portals        |
			|Extensions     |
	
    		
  Scenario Outline: As a user, I can select "Application" settings from settings
			When I navigate to  settings
			When I  select "Application" settings
			When I can select accordians "<My Visp>" 
			Then all fields will be visible of <option>
			
			Examples:
			
			|option									|
			|Primary Contact 						|
			|Billing Contact 						|
			|Payment Reminders for UBO software 	|
			|Auto Pay								|
            |Your Balance Due for Visp.net Services	|
			


	Scenario Outline : As a user , I can update all "My Visp" fields
			When I navigate to  setting
			When I select "Application" setting
			When I can select accordian "<My Visp>"
			Then I can be able to edit and update fields of <category>

			Examples:

			|category								|
			|Primary Contact 						|
			|Billing Contact 						|
			|Payment Reminders for UBO software 	|
			|Auto Pay								|
        	|Your Balance Due for Visp.net Services	|

	Scenario Outline : As a user , I can see Payment Reminders For UBO software
	
		When I navigate to  setting
		When I select "Application" setting
		When I can select accordian "<My Visp>"
		When I select  "Payment Reminders For UBO software"
		Then I should able to see <Details>

		Examples
		|<Details>						|
		|<Send Payment reminder to user>|
		|<Balance Threshold>			|
		|<App user who can send payment>|
		|<Payment Method>				|
		|<Card Holder Name>				|

	Scenario Outline : As a user , I can see "Your Balance Due for Visp.net Services"
		When I navigate to  setting
		When I select "Application" setting
		When I can select accordian "<My Visp>"
		When I select  "Your Balance Due for Visp.net Services"
		Then I should able to see table with <Details>
		And I can select date from picker

		Examples
		|<Details>		|
		|<Date>			|
		|<Description>	|
		|<Debits>		|
		|<Credits>		|
		|<Balance>		|

	Scenario : As a user , I can see Summary view of "Your Balance Due for Visp.net Services"
	 When I navigate to  setting
		When I select "Application" setting
		When I can select accordian "<My Visp>"
		When I select  "Your Balance Due for Visp.net Services"
		When I  see the table 
		Then should select <View> from table right corner

		Examples
		|View	|
		|Detail	|
		|Summary|


