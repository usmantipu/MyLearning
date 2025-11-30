    Feature     : Application Users setting

    User can see list of app logs and user can add a user and their user info,technician settings, ip access,
    App user logs, user rights settings.

    Background  : 
			Given I open UBO webapp
			And I login with username "dreamteam2" and password "str0ngP@ss2"
			And I can navigate setting from side menu

    Scenario    : As a user , I can see search user from list of users
	When I navigate to Application setting
	When I select "Users" accordians
	Then I can select "<Tabs>"
    
    Examples
    |<Tabs>     |
    |<ISP Logs> |
    |<App Users>  |


Scenario Outline: As a user , I should see list of "ISP Logs"
    When I navigate  to "Application" setting
    When I navigate to "Users" accordians
    When I select "ISP Logs" Tab
    Then I should see list of "ISP Logs" with "<columns>"

    Examples
    |<columns>  |
    |<Date>     |
    |<Details>  |

    Scenario  : As a user , I should search logs from  list of "ISP Logs"
    When I navigate  to "Application" setting
    When I navigate to "Users" accordians
    When I select "ISP Logs" Tab
    Then I should able to search logs



    Scenario  : As a user, I can see list of <App Users>
    When I navigate to "Application" setting
    When I select "Users" accordians
    Then I should see list of "App Users" with "<columns>".

    Examples
    |<columns>  |
    |<Name>     |
    |<Username> |
    |Status     |
    |Technicians|
    |IP Addesss |


Scenario Outline: As a user , I should see  add  new user button
        When I navigate to "Application" setting
        When I select "Users" accordians
        Then I should able to select "<button>"

    Examples
    |<button>|
    |<ADD NEW USER>|

Scenario Outline : As a user , I should able add new user
        When I navigate to "Application" setting
        When I select "Users" accordians
        When I select "ADD NEW USER"
        Then I should able to see modal with <Tabs>

        Examples
        |User Info      |
        |IP Access      |
        |App user Logs  |
        |User Rights   |

Scenario Outline : As a user , I should able to add "User Info" details
        When I navigate to "Application" setting
        When I select "Users" accordians
        When I select "ADD NEW USER"
        When I select "User info" Tab
        Then I should able to  fill "<option>" 
        And I should save details

        Examples 
        |option                                 |
        |<Name>                                 |
        |<Username>                             |
        |<Password>                             |
        |<Confirm Password>                     |
        |<Email>                                |
        |<Password>                             |
        |<Set this App user as Technician>      |
        |<Use this email for google calender>   |

    
Scenario Outline : As a user , I should able to add "IP Access" details
        When I navigate to "Application" setting
        When I select "Users" accordians
        When I select "ADD NEW USER"
        When I select "IP Access" Tab
        Then I should able to selct "<option>"
         
        	Examples:
			|option				|
			|Open Access	    | 						
			|Restricted Access  |

    Scenario :As a user , I should able to select "Open Access" details

         When I navigate to "Application" setting
        When I select "Users" accordians
        When I select "ADD NEW USER"
        When I select "IP Access" Tab
        When I select "Open Access"
        Then  I should able to select IP Addesss

    Scenario :As a user , I should able to select "Open Access" details

        When I navigate to "Application" setting
        When I select "Users" accordians
        When I select "ADD NEW USER"
        When I select "IP Access" Tab
        When I select "Restricted Access"
        Then  I should able to select IP Addesss


Scenario Outline : As a user , I should able to add "App User Logs" details
        When I navigate to "Application" setting
        When I select "Users" accordians
        When I select "ADD NEW USER"
        When I select "App User Logs" Tab
        Then I should able to see table with <columns>

        |<columns>  |
        |<Date>     |
        |<Action>   |
        |<Type>     |
        |<Details>  |
        |<Subscribe>|

    Scenario : As a user , I should able to add "App User Logs" details
        When I navigate to "Application" setting
        When I select "Users" accordians
        When I select "ADD NEW USER"
        When I select "App User Logs" Tab
        Then I should able to search logs


Scenario Outline : As a user , I should able to add "App User Logs" details
        When I navigate to "Application" setting
        When I select "Users" accordians
        When I select "ADD NEW USER"
        When I select "App User Logs" Tab
        Then I should able to filter logs with  <option>

        Examples
        |<option>       |
        |<All>          |
        |<ISP>          |
        |<Ticket>       |
        |<Notes>        |
        |<Attachment>   |
        |<History>      |


Scenario  : As a user , I should able to add "IP Access" details
        When I navigate to "Application" setting
        When I select "Users" accordians
        When I select "ADD NEW USER"
        When I select "User Rights" Tab
        Then I should able to select list of user rights
         
     
