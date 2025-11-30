Feature:  Application Equipment Accounting Controls

	user can view Equipment Management and Mapping setting , Subscriber Equipment Accounting Controls setting,
	Upon Deleting a Subscriber with Assigned Equipment,Equipment Manager and user can update these settings also.

  	Background: 
			Given I open UBO webapp
			And I login with username "dreamteam2" and password "str0ngP@ss2"
			And I can navigate setting from side menu

        Scenario  Outline: As a user ,I can see all fields of "Equipment Accounting Controls"
			When I navigate  to "Application" setting
			When I select "Equipment Accounting Controls"
			Then I can see all "<option>" fields will be visible

				Examples:

				|option												|
				|Equipment Management and Mapping Settings 			| 						
				|Subscriber Equipment Accounting Controls			|
				|Upon Deleting a Subscriber with Assigned Equipment |
				|Equipment Manager									|

		Scenario  Outline: As a user ,I can edit and update all fields of "Equipment Accounting Controls"
			When I navigate  to "Application" setting
			When I select "Equipment Accounting Controls"
			Then I can edit all "<option>" fields and can be update.

				Examples:

				|option												|
				|Equipment Management and Mapping Settings 			| 						
				|Subscriber Equipment Accounting Controls			|
				|Upon Deleting a Subscriber with Assigned Equipment |
				|Equipment Manager									|

  
  