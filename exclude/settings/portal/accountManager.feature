Feature : Account Manager 

    User can view Account Manager setting and Wireless setting.
    User can edit Account Manager setting and Wireless setting

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

    
    Scenario Outline: As a user, I can select "Portals" settings from settings
			When I navigate to  settings
			When I  select "Portals" settings
			When I  select accordians "<Account Manager>" 
			Then I should see <Tabs>

                        Examples:

                        |<Tabs>             |	
                        |<Account Manager>  |
                        |<Wireless Settings>|
    
                Scenario Outline : As a user , I should select "Account Manager" tab.
                        When I navigate to Settings
                        When I select "Portals" Settings
                        When I select accordians "Account Manager"
                        Then I should able to select <Tabs>

                        Examples:

                        |<Tabs>             |
                        |<Account Manager>  |
                        |<Wireless Settings>|

                Scenario Outline : As a user , I should see fields of "Account Manager"
                        When I navigate to settings
                        When I select "Portals" Settings
                        When I select accordians "Account Manager"
                        Then I should able to see <option> fields

                        Examples:

                        |<option>                |
                        |<Legacy>                |
                        |<Mordern(Beta)>         |
                        |<Disabled>              |                   
                        |<Display option>        |
                        |<Update password option>|
                        |<Suspend Package>       |
                        |<Terms Of Services>     |
                        |<View Portal>           |
                
                Scenario        : As a user , I should able to change values of filed of "Account Manager"
                        When I navigate to settings
                        When I select "Portals" Settings
                        When I select accordians "Account Manager"
                        Then I can change setting from "Legacy" to "Mordern"
                        Then I can change setting from "Mordern" to "Disabled
                        And I can should able to see only disbled fields

                Scenario Outline: As a user I can change setting of "Display" option
                        When I navigate to settings
                        When I select "Portals" Settings
                        When I select accordians "Account Manager"
                        Then I should able select <Option> list 
                        And I should to make mark read-only  to <Fields>

                        Examples:

                        |<Option>       |
                        |<Subscriber>   |
                        |<Packages>     |
                        |<Statements>   |
                        |<Usages>       |
                
                Scenario  : As a user I can change setting of "Update password option"
                        When I navigate to settings
                        When I select "Portals" Settings
                        When I select accordians "Account Manager"
                        Then I should able to select "Update password"
                        And I can fill  notification email

                Scenario : As a user I can change Settings of "Suspend Package" 
                        When I navigate to settings
                        When I select "Portals" Settings
                        When I select accordians "Account Manager"
                        Then I should able to see "Suspend Package" setting
                        And I should able to change "Suspend Package" setting
                
                Scenario : As a user I can change setting of "Terms Of Services"
                        When I navigate to settings
                        When I select "Portals" Settings
                        When I select accordians "Account Manager"
                        Then I should able to select "Terms Of Services"
                
                Scenario : As a user I can change setting of "View Portal"
                        When I navigate to settings
                        When I select "Portals" Settings
                        When I select accordians "Account Manager"
                        Then I should able to navigate link "https://secure7.userservices.net/manager/account/info"

                Scenario Outline : As a user I can see field of "Wireless Settings"
                        When I navigate to settings
                        When I select "Portals" Settings
                        When I select accordians "Wireless Settings"
                        Then I should able to see <option>

                        Examples:

                        |<option>                |
                        |<Display option>        |
                        |<Update password option>|

                
                Scenario Outline: As a user I can change setting of "Display" option
                        When I navigate to settings
                        When I select "Portals" Settings
                        When I select accordians "Wireless Settings"
                        Then I should able select <Option> list 
                        And I should to make mark read-only  to <Fields>

                        Examples:
                        
                        |<Option>       |
                        |<Username>     |
                        |<Password>     |
                        |<Mac Address>  |
                        |<Usages>       |
                Scenario : As a user I can change setting of "Update password option"
                        When I navigate to settings
                        When I select "Portals" Settings
                        When I select accordians "Wireless Settings" 
                        Then I can select fields of "Update password option"
                        And I can select "All Subscriber to Suspend their own Package/account"
                        Then I should see all fileds are disbled 
                        And I can select "ISP Bill Contact Email"
                        Then I should able to fill Email Id
                        And I can Select "Emails"
                        Then I should able to fill comma seperated Emails
                        And I can select Fileds of "Update Password option"