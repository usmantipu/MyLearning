Feature : Online Signup Settings 

    User can view Online Signup Settings.
    User can edit Online Signup Settings .

    

    Scenario Outline: As a user, I can select settings from side menu to view list of various settings.
			When I navigate to Home page
			When I click on settings
			Then I see required "<Application>"

			Examples:
	
			|Application    |
			|Billing        |
			|Portals        |
			|Extensions     |

    
    Scenario Outline: As a user, I can select "Online Signup" settings from "Portal"
			When I navigate to  settings
			When I  select "Portals" settings
			When I  select accordians "Online Signup" 
			Then I should see <Fields>

            Examples:

            |<Fields>                |
            |<Online Signup>         |
            |<Packages>              |
            |<Additional Information>|


    Scenario Outline: As a user, I can select "Online Signup" from "Portal"
			When I navigate to  settings
			When I  select "Portals" settings
			When I  select accordians "Online Signup" 
            When I  select "Online Signup" Section
			Then I  should select <Fields>
            
            Examples:

            |<Fields>   |
            |<Legacy>   |
            |<Mordern>  |
            |<Disabled> |

    Scenario Outline : As a user I should able to see "Legacy" Fields
            When I navigate to  settings
			When I  select "Portals" settings
			When I  select accordians "Online Signup" 
            When I  select "Online Signup" Section
            When I select "Legacy"
            Then I should see <Fields> under "Packages"
            And I should update <Fields> under "Packages"

            Examples:

            |<Fields>|
            |<Enable online signup for the following service Packages>|
            
    Scenario Outline : As a user I should able to select "Enable online signup for the following service Packages"
            When I  navigate to  settings
			When I  select "Portals" settings
			When I  select accordians "Online Signup" 
            When I  select "Online Signup" Section
            When I  select "Legacy"
            When I  select "Enable online signup for the following service Packages"
            Then I  should able to see <Fields>

            Examples:

            |<Fields>           |
            |<Dial-up Packages> |
            |<DSL Packages>     |
            |<Wireless Packages>|

    Scenario Outline : As a user I should able to see "Mordern" Fields
            When I navigate to  settings
			When I  select "Portals" settings
			When I  select accordians "Online Signup" 
            When I  select "Online Signup" Section
            When I select "Mordern"
            When I select "Enable online signup for the following service Packages"
            Then I should able to see <Fields>

            Examples:

            |<Fields>                     |   
            |<Dial-up Packages>           |   
            |<DSL Packages>               |
            |<Wireless Packages>          |
            |<Other Packages>             |
            |<Display maximum speed limit>|

    
    Scenario : As a user I should select  "Disabled" 
            When I navigate to  settings
			When I  select "Portals" settings
			When I  select accordians "Online Signup" 
            When I  select "Online Signup" Section
            When I select "Disabled"
            Then all the fields must be Disabled
    
    Scenario Outline : As a user I should able to select "Additional Information" Fields
            When I navigate to  settings
			When I  select "Portals" settings
			When I  select accordians "Online Signup" 
            When I  select "Online Signup" Section
            When I select "Additional Information"
            Then I should able to select <Fields>

            Examples:
            
            |<Fields>                           |
            |<Email Address>                    |
            |<Source Details>                   |
            |<Location ID for Package selection>|
            |<Registration Code>                |