Feature : Captive Portal Settings 

    User can view Captive Portal Settings.
    User can edit Captive Portal Settings .

    
    Scenario Outline: As a user, I can select settings from side menu to view list of various settings.
			When I navigate to Home page
			When I click on settings
			Then I see required "<Application>"

			Examples:
			
			|Application    |
			|Billing        |
			|Portals        |
			|Extensions     |

    
    Scenario Outline: As a user, I can select "Portals" settings from settings
			When I navigate to  settings
			When I  select "Portals" settings
			When I  select accordians "Captive Portal" 
			Then I should see <Fields>

            Examples:

            |<Fields>               |
            |<Welcome Name>         |
            |<Signup Page Link>     |
            |<Account Manager Link> |
            |<Additonal Message>    |
            |<Logo>                 |

        Scenario Outline : As a user , I should see able to update "Captive Portal" Fields
            When I navigate to settings
            When I select "Portals" Settings
            When I select accordians "Captive"
            Then I should able to update <option> fields
            
            Examples:
            
            |<Fields>               |
            |<Welcome Name>         |
            |<Signup Page Link>     |
            |<Account Manager Link> |
            |<Additonal Message>    |
        Scenario  : As a user , I should able to select "Logo" Fields value
            When I navigate to settings
            When I select "Portals" Settings
            When I select accordians "Captive"
            When I select "logo"
            Then I should able to  "Use existing invoice logo"
        
        Scenario  : As a user , I should able to select "Logo" Fields value
            When I navigate to settings
            When I select "Portals" Settings
            When I select accordians "Captive"
            When I select "logo"
            Then I should able to select "Use new image"
            Then I should able to upload new image
            And I can see Preview image
            And I Should able to upload  Background image      
            