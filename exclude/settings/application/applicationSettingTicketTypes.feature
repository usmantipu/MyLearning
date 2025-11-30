Feature: Ticket Type Setting 

  User can view list of template and can add templates and while adding templates user can set default option .
  User can also update a alreday created template 

    Background: 
        Given I open UBO webapp
        And I login with username "dreamteam2" and password "str0ngP@ss2"
        And I can navigate setting from side menu

      Scenario : As a user , I can see alreday created list of Ticket 
        When I navigate to "Application" setting
        When I select "Ticket Types" accordians
        Then all alreday created list of ticket will be visible

Scenario Outline: As a user , I can add Ticket Template
        When I Navigate to "Application" setting
        When I select "Ticket Type" accordians
        When I select Add New Template
        Then I should see "<option> avaliable 

      Examples:
			
			|option                                 |
			|Template Name                          |
			|Insert                                 |
			|Use Template for Ticket Print Version  |
      |By Default, include note on print      | 

Scenario : As a user , I can add Ticket Template
        When I Navigate to "Application" setting
        When I select "Ticket Type" accordians
        When I select Add New Template
        When I select "Template Name"
        Then I can fill "Template Name"

Scenario Outline: As a user , I can add Ticket Template
        When I Navigate to "Application" setting
        When I select "Ticket Type" accordians
        When I select Add New Template
        When I can Insert 
        Then I can select "<option>" from insert list
        |<option>|
        |<Custom Field1>|
        |<Custom Field2>|
        |<Custom Field3>|
        |<Custom Field4>|
        |<Custom Field5>|
        |<Custom Field6>|
        |<Custom Field7>|
        |<Custom Field8>|
        |<Custom Field9>|
        |<Username>     |


Scenario : As a user , I can add Ticket Template
        When I Navigate to "Application" setting
        When I select "Ticket Type" accordians
        When I select Add New Template
        When I select "Use Template for Ticket Print Version"
        Then I can check or uncheck "Use Template for Ticket Print Version"

Scenario : As a user , I can add Ticket Template
        When I Navigate to "Application" setting
        When I select "Ticket Type" accordians
        When I select Add New Template
        When I select "By Default, include note on print"
        Then I can check or uncheck "By Default, include note on print"



Scenario : As a user , I can update existing Ticket Template
        When I Navigate to "Application" setting
        When I select "Ticket Type" accordians
        When I select "Template"
        Then I should see list of avaliable templates

Scenario Outline: As a user , I can update existing Ticket Template
        When I Navigate to "Application" setting
        When I select "Ticket Type" accordians
        When I select "Template"
        When I  see list of avaliable templates
        Then I can select any one template 
        And It should show "<option>" details

      Examples:
			
			|option                                 |
			|Template Name                          |
			|Insert                                 |
			|Use Template for Ticket Print Version  |
                        |By Default, include note on print      | 

Scenario : As a user , I can update existing Ticket Template
        When I Navigate to "Application" setting
        When I select "Ticket Type" accordians
        When I select "Template"
        When I  see list of avaliable templates
        When I  select any one template 
        And I should able to edit 
        And I can update edit changes
        
