Feature : Brandable Portal Settings 

    User can view Brandable Portal Settings, Contact Us, and Content.
    User can edit Brandable Portal Settings, Contact Us, and Content.

	Background: 
			Given I open UBO webapp
			And I login with username "dreamteam9" and password "str0ngP@ss9"
	
    Scenario: As a user, I can see "Brandable Portal setting".
            When I navigate to Settings
            When I select "Portals" Settings
            When I select menu "Brandable Portal setting"
            Then I should able to select Tabs "Brandable Portal Settings", "Contact Us", "Content"
 
 
    Scenario: As a user, I can see "Brandable Portal Settings" settings
            When I navigate to settings
            When I select "Portals" Settings
            When I select menu "Brandable Portal Settings"
            Then I should see options "Legacy", "Mordern(Beta)", "Disabled"                     

			
    Scenario: As a user, I can see "Legacy" option settings under "Brandable portal settings"
            When I navigate to settings
            When I select "Portals" Settings
            When I select menu "Brandable Portal Settings"
            When I select "Legacy"
            Then I should see "Company Logo", "Cusomt RSS Feed", "Local Zip Code", "Enable Yahoo News", "Enable Google Safe Search", "Enable Google Search box", "Enable Spam Setting", "Enable Dial-Up Search", "Enable the custom message of the day", "Enable the powered by visp logo", "Enable the principle member of WISPA logo"

			
	Scenario Outline: As a user, I can update "Legacy" option settings under "Brandable portal settings"
            When I navigate to settings
            When I select "Portals" Settings
            When I select menu "Brandable Portal Settings"
            When I select "Legacy"
            When I update "<companyLogo>", "<cusomtRSSFeed>", "<localZipCode>", "<enableYahooNews>", "<enableGoogleSafeSearch>", "<enableGoogleSearchbox>", "<enableSpamSetting>", "<enableDialUpSearch>", "<enableTheCustomMessageOfTheDay>", "<enableThePoweredByVispLogo>", "<enableThePrincipleMemberOfWISPALogo>"
			Then "Legacy" option settings should be updated
			
			Examples:
			|companyLogo|cusomtRSSFeed|localZipCode|enableYahooNews|enableGoogleSafeSearch|enableGoogleSearchbox|enableSpamSetting|enableDialUpSearch|enableTheCustomMessageOfTheDay|enableThePoweredByVispLogo|enableThePrincipleMemberOfWISPALogo|
			|checked    |checked      |12345       |checked        |checked               |checked              |checked          |checked           |checked                       |checked                   |checked                            |
			|unchecked  |unchecked    |            |unchecked      |unchecked             |unchecked            |unchecked        |unchecked         |unchecked                     |unchecked                 |unchecked                          |
 
 
	Scenario: As a user, I can see "Modern(Beta)" option settings under "Brandable portal settings"
            When I navigate to settings
            When I select "Portals" Settings
            When I select menu "Brandable Portal Settings"
            When I select "Modern(Beta)"
            Then I should able to see "Color Themes", "Image Links" 
			
@manualtest			
	Scenario Outline: As a user, I can update "Modern(Beta)" option settings under "Brandable portal settings"
            When I navigate to settings
            When I select "Portals" Settings
            When I select menu "Brandable Portal Settings"
            When I select "Modern(Beta)"
            When I select "Color Themes" as "<companyName>", "<selectedNagivation>", "<navBorder>", "<buttonHoverlink>", "<hoverdButton>", "<signupPanel>"
			When I put "<imageLinks>", "<companyLogo>", "<displayCompName>", and "<favicon>" 
			Then "Modern(Beta)" settings should be updated
			
			|companyName|selectedNagivation|navBorder|buttonHoverlink|hoverdButton|signupPanel|imageLinks											    | companyLogo											  |displayCompName|favicon													|
			|white		|green             |gray     |yellow         |brown       |pink       |"https://static.pexels.com/photos/34950/pexels-photo.jpg"|"https://static.pexels.com/photos/34950/pexels-photo.jpg"|checked        |"https://static.pexels.com/photos/34950/pexels-photo.jpg"|

			
	Scenario: As a user I can see settings of "Content"
            When I navigate to settings
            When I select "Portals" Settings
            When I select menu "Brandable Portal Settings"
            When I select  "Content"
            When I see fields of "Display Content", "Link Details", and "Home setup" 
            Then I can see "Home", "Principle member of WISPA Logo", "Signup", "Powered By Visp Logo" under "Display Content"
			Then I can see "Check Email", "Online Help", "Copyright", "Privacy policy", "Check coverage", "Terms of Use" under "Link Details"
			Then I can see "Default", "Custom" under "Home Setup"


	Scenario: As a user I can see settings of "Default" under "Content"
            When I navigate to settings
            When I select "Portals" Settings
            When I select menu "Brandable Portal Settings"
            When I select  "Content"
            When I select "Default"
            Then I can see "Info", "Title", "Check Email"


	Scenario: As a user I can see settings of "Custom" under "Content"
            When I navigate to settings
            When I select "Portals" Settings
            When I select menu "Brandable Portal Settings"
            When I select  "Content"
            When I select "Custom"
            Then I should able to see custom html field

			
	Scenario Outline: As a user, I can update settings under "Contents"
			When I navigate to settings
            When I select "Portals" Settings
            When I select menu "Brandable Portal Settings"
            When I select  "Content" 
			When I set "<home>", "<principleMemberOfWISPALogo>o", "<signup>", "<poweredByVispLogo>" under "Display Content"
			When I set "<checkEmail>", "<emailValue>", "<onlineHelp>", "<helpValue>", "<copyright>", "<copyrightValue>", "<privacyPolicy>", "<checkCoverage>", "<termsOfUse>" under "Link Details"
			When I can see "<default>", "<intro>", "<title>", "<subtitle>", "<custom>", "<enterCustomHTML>" under "Home Setup"
			Then settings should be updated under "Contents"

			Examples:
			|home   |principleMemberOfWISPALogo|signup   |poweredByVispLogo|checkEmail|emailValue                         |onlineHelp|helpValue                       |copyright|copyrightValue|privacyPolicy|checkCoverage|termsOfUse|default  |intro|title|subtitle|custom  |enterCustomHTML|
			|checked|checked                   |checked  |checked          |checked   |"https://webmail7.userservices.net"|checked   |"http://eufaq.userservices.net/"|checked  |valueone      |checked      |checked      |checked   |checked  |ABC  |Test |SubTest |unchcked|               |
			|checked|checked                   |checked  |checked          |checked   |"https://webmail7.userservices.net"|checked   |"http://eufaq.userservices.net/"|checked  |valueone      |checked      |checked      |checked   |unchecked|     |     |        |chcked  |ABC            |
			|checked|unchecked                 |unchecked|unchecked        |unchecked |                                   |unchecked |                                |unchecked|              |unchecked    |unchecked    |unchecked |checked  |ABC  |Test |SubTest |unchcked|               |

			
	Scenario: As a user, I can see settings of "Contact Us"
            When I navigate to settings
            When I select "Portals" Settings
            When I select menu "Brandable Portal Settings"
            When I select  "Contact Us"
            Then I should see "Company Name", "Address", "Phone", "Fax", "Email", "Billing Email", "Account Manager Contact Code"

			
	Scenario Outline: As a user, I can update settings under "Contact Us"
			When I navigate to settings
            When I select "Portals" Settings
            When I select menu "Brandable Portal Settings"
            When I select  "Contact Us"
			When I update "<companyName>", "<address>", "<phone>", "<fax>", "<email>", "<billingEmail>", "<accountManagerContactCode>"
			Then settings should be updated under "Contact Us"
			
			Examples:
			|companyName|address          |phone         |fax           |email           |billingEmail    |accountManagerContactCode|
			|VISP Inc   |301 NE 6th Street|(555) 555-5554|(222) 222-2222|justtes@visp.net|billing@visp.com|Xtest123                 |
			