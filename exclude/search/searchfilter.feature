Feature: Search filter
# All options to be replaced by actual values in examples before execution

  Background: 
			Given I open UBO webapp
			And I login with username "dreamteam2" and password "str0ngP@ss2"
			
  Scenario Outline: As a user, I can select a category to search 
			When I click on Search filter
			Then I see required "<category>"
			
			Examples:
			
			|category     |
#			|Subscribers  |
			|Service Desk |
			|Equipment    |
#			|Network      |
#			|Communication|
			|Customers    |
#			|Others       |
			
  Scenario Outline: As a user, I can see further search options based on selected category Subscribers
			When I navigate to subscriber list
			When I select "Subscribers" as search category
#			Then I will be redirected to Subscribers page
			Then I see specific search "<option>" based on selected category
			
			Examples:
			
			|option |
#			|option1|
#			|option2|
#			|option3|

  Scenario Outline: As a user, I can see further search options based on selected category Service Desk
			When I navigate to subscriber list
			When I select "Service Desk" as search category
			Then I will be redirected to Service Desk page
			And  I see specific search "<option>" based on selected category
			
			Examples:
			
			|option |
#			|option1|
#			|option2|
#			|option3|

  Scenario Outline: As a user, I can see further search options based on selected category Equipments
			When I navigate to subscriber list
			When I select "Equipments" as search category
			Then I will be redirected to Equipment page
			And  I see specific search "<option>" based on selected category
			
			Examples:
			
			|option |
#			|option1|
#			|option2|
#			|option3|

  Scenario Outline: As a user, I can see further search options based on selected category Network
			When I navigate to subscriber list
			When I select "Network" as search category
			Then I will be redirected to Network page
			And  I see specific search "<option>" based on selected category
			
			Examples:
			
			|option |
#			|option1|
#			|option2|
#			|option3|

  Scenario Outline: As a user, I can see further search options based on selected category Communication
			When I navigate to subscriber list
			When I select "Communication" as search category
			Then I will be redirected to Communication page
			And  I see specific search "<option>" based on selected category
			
			Examples:
			
			|option |
#			|option1|
#			|option2|
#			|option3|

  Scenario Outline: As a user, I can see further search options based on selected category Reports
			When I navigate to subscriber list
			When I select "Reports" as search category
			Then I will be redirected to Reports page
			And  I see specific search "<option>" based on selected category
			
			Examples:
			
			|option |
#			|option1|
#			|option2|
#			|option3|

  Scenario Outline: As a user, I can see further search options based on selected category Others
			When I navigate to subscriber list
			When I select "Others" as search category
			Then I see specific search "<option>" based on selected category
			
			Examples:
			
			|option |
#			|option1|
#			|option2|
#			|option3|

  	Scenario Outline: As a user, I can search records based on applied search filter
			When I navigate to subscriber list
			When I select "<level1>" search parameter
			When I select "<level2>" search parameter
			When I select "<level3>" search parameter
			When I select "<level4>" search parameter
			Then I see records based on "<level1>", "<level2>", "<level3>", and "<level4>"
			
			Examples:
			
			|level1       |level2 |level3 |level4 |
#			|Subscribers  |Option1|Option2|Option3|
#			|Service Desk |Option3|Option3|Option2|
#			|Equipment    |.......|.......|.......|
#			|Network      |.......|.......|.......|
#			|Communication|.......|.......|.......|
#			|Reports      |.......|.......|.......|
#			|Others       |.......|.......|.......|

	Scenario Outline: As a user, I can search records based on applied search with multiple fields 
			When I navigate to subscriber list
			When I select "<field1>" and "<fvalue1>" search parameter
			When I select "<field2>" and "<fvalue2>" search parameter
			When I select "<field3>" and "<fvalue3>" search parameter
			When I select "<field4>" and "<fvalue>" search parameter
			Then I see records based on "<fvalue1>", "<fvalue2>", "<fvalue3>", and "<fvalue4>"
			
			Examples:
			
			|categories   |field1     |fvalue1 |field2   |fvalue2 |field3	|fvalue3  |field4     |fvalue4 |   
			|Subscribers  |MainCompany|Company |FirstName|First	  |LastName |lastname |CustomerID |981728  |   		 
	
			
	Scenario: As a user, I can clear all applied search input

			Given I navigate to subscriber list
			When I select search category as "Customers", search parameter as "Username" and search parameter value as "TestUser"   
			When I select clear 
			Then Applied search input should get clear 
			And Data should get refreshed


	Scenario: As a user, I can close specific search option based on applied search filter
			Given I navigate to subscriber list
			When I select search category as "Customers", search parameter as "Username" and search parameter value as "TestUser"   
			When I close applied search   
			Then Applied search input should get closed 
			And Data should get refreshed
			
	Scenario: As a user, I can save applied search filter
			Given I navigate to subscriber list
			When I select search category as "Customers", search parameter as "Username" and search parameter value as "TestUser"   
			When I select available option to Save applied search filter
			Then Applied search filter Should get Saved 
			And It should visible in Saved filters along with vertical scroll bar
	
	Scenario Outline: As a user, I can search records based on saved filters
			When I navigate to subscriber list
			When I select "Customers" as search category
			Then I can choose available Saved filter "<Option>" to search records
			
			Examples: 

			|Option  	|
			|Option1	|
			|Option2	|
	
	Scenario: As a User, I can search records based on free text globally
			When I navigate to subscriber list
			When I enter free text "Company" as a search input
			When I click 'Enter' key 
			Then I see global search records based on free text 'Company' 
			
	Scenario: As a User, I can search records based on free text for selected category
			When I select "Customers" as search category
			When I enter free text as a search input
			Then I see search records based on applied search for selected category only

	Scenario Outline: As a User, subscriber list columns should be reset when I reset search
				When I select search category as "Customers", search parameter as "Username" and search parameter value as "TestUser"   
				When I select available "<Filter Option>" to filter out search records
				Then I should get the records based on selected "<Filter Option>"

				Examples:
			
				|Filter Option  |
				|All  			|
				|Paid Up 		|
				|Due    		|
				|Past Due      	|
				|Suspended		|
				|Hibernated    	|
				|Prospect       |
				|Archived		|
				
	Scenario Outline: As a user, when I clear search search filter, subscriber table columns should be reset to default
			When I navigate to subscriber list
			When I select "<column>" from choose column hamburger menu
			When I select available "<Filter Option>" to filter out search records
			When I reset search filter
			Then selected "<column>" should be removed and default column should be visible only
			
			Examples:
				|column|
				|Status|

	Scenario Outline: As a User, I can see global search records based checked/unchecked categories 
				Given I enter free text "Company" as a search input
				And I click 'Enter' key 
				When I check or unchecked the "<categories>"
				Then Displayed record should based on check/unchecked "<categories>"

				Examples:

				|categories	|
				|Subscribers|
				|Filters	|
				|History	|

	Scenario Outline: As a user,I can load more records of global search categories
				Given I enter free text "Company" as a search input
				And I click 'Enter' key 
				When I click load more for "<categories>"
				Then More records should be loaded 

				Examples:

				|categories	|
				|Subscribers|
				|Filters	|
				|History	|

	Scenario Outline: As a user, I can change global search Subscribers table view to comfortable or cozy 
			Given I enter free text "Company" as a search input
			And I click 'Enter' key
			When I change subscribers table view to "<tableView>"
			Then Subscribers table view gets updated to "<tableView>"
			
			Examples:
			
			|tableView  |
			|Comfortable|
			|Cozy       |

	Scenario Outline: As a user, I can change global search Filters table view to comfortable or cozy 
			Given I enter free text "Company" as a search input
			And I click 'Enter' key
			When I change filters table view to "<tableView>"
			Then Filters table view gets updated to "<tableView>"
			
			Examples:
			
			|tableView  |
			|Comfortable|
			|Cozy       |

	Scenario Outline: As a user, I can global search change History table view to comfortable or cozy 
			Given I enter free text "Company" as a search input
			And I click 'Enter' key
			When I change history table view to "<tableView>"
			Then History table view gets updated to "<tableView>"
			
			Examples:
			
			|tableView  |
			|Comfortable|
			|Cozy       |

	Scenario: As a user, I can export csv of global search Subscriber records
			Given I enter free text "Company" as a search input
			And I click 'Enter' key
			When I click Export CSV button 
			Then CSV should get downloaded with records displayed in UI

	Scenario: As a user, I can export csv of global search Filter records
			Given I enter free text "Company" as a search input
			And I click 'Enter' key
			When I click Export CSV button 
			Then CSV should get downloaded with records displayed in UI

    Scenario: As a user, I can export csv of global search History records
			Given I enter free text "Company" as a search input
			And I click 'Enter' key
			When I click Export CSV button 
			Then CSV should get downloaded with records displayed in UI

	Scenario: As a user, I can apply sorting on global search Subscribers table columns 
			Given I enter free text "Company" as a search input
			And I click 'Enter' key
			When I apply sorting on Subscribers table colmuns 
			Then Column should get sorted their records

	Scenario: As a user, I can apply sorting on global search Filters table columns
			Given I enter free text "Company" as a search input
			And I click 'Enter' key
			When I apply sorting on Filters table colmuns 
			Then Column should get sorted their records

    Scenario: As a user, I can apply sorting on global search History table colmuns
			Given I enter free text "Company" as a search input
			And I click 'Enter' key
			When I apply sorting on History table colmuns 
			Then Column should get sorted their records
	



