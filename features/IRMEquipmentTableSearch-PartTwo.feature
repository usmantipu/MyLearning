Feature: Automation of Equipment Table Search-part-2

	Background:
        Given I open Visp Web to Access IRM
        And   I login with username and password to use IRM
              | jcabangonautomation | Test@1234 |
              
@automation-equipment-table-search-part-2
  Scenario: As a user, I can search with the given keys 'IP Address' with lock search via keyword + colon ex. 'IP Address: 98.36.89.88'
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Equipment List Profiles
    Then I should be able to view the Equipment List Profiles
    When I click on search icon in equipment profile table
    When I enter the search value "ip address:100.64.0.50"
    Then I can see the equipment Profile "LTE SIM CARD - Generic"
@automation-equipment-table-search-part-2
  Scenario: As a user, I can search with the given keys 'Location' if click on 'Lock' icon
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Equipment List Profiles
    Then I should be able to view the Equipment List Profiles
    When I click on search icon in equipment profile table
    When I click on lock icon in search bar
    When I click on Location key
    When I enter the search value "Autosite"
    Then I can see the equipment Profile "5 GHZ NANOSTATION AC (NS-5AC-US)"
@automation-equipment-table-search-part-2
  Scenario: As a user, I can search with the given keys 'Location' with lock search via keyword + colon ex. 'Location: test'
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Equipment List Profiles
    Then I should be able to view the Equipment List Profiles
    When I click on search icon in equipment profile table
    When I enter the search value "location:Autosite"
    Then I can see the equipment Profile "5 GHZ NANOSTATION AC (NS-5AC-US)"
@automation-equipment-table-search-part-2
  Scenario: As a user, I can see that searched text is highlighted
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Equipment List Profiles
    Then I should be able to view the Equipment List Profiles
    When I click on search icon in equipment profile table
    When I enter the search value "yamaha"
    Then I can see the equipment Profile "Yamaha"
@automation-equipment-table-search-part-2
  Scenario: As a user, I can clear the search text by clicking on X button from search box
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Equipment List Profiles
    Then I should be able to view the Equipment List Profiles
    When I click on search icon in equipment profile table
    When I enter the search value "123abc"
    When I Click on X close button
    Then I can see the search is cleared
@automation-equipment-table-search-part-2
  Scenario: As a user, I can see that search result refines when entering or removing a character from search text
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Equipment List Profiles
    Then I should be able to view the Equipment List Profiles
    When I click on search icon in equipment profile table
    When I enter the unrefined search value
    Then I can see the searched items counts
    When I enter the refined search value
    Then I can see the different searched counts
@automation-equipment-table-search-part-2
  Scenario: As a user, I can see that search key gets locked when selecting the key
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Equipment List Profiles
    Then I should be able to view the Equipment List Profiles
    When I click on search icon in equipment profile table
    When I click on lock icon in search bar
    When I click on serial key
    Then I can see that search key gets locked
@automation-equipment-table-search-part-2
  Scenario: As a user, I can see that search key gets unlocked when unselecting key
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Equipment List Profiles
    Then I should be able to view the Equipment List Profiles
    When I click on search icon in equipment profile table
    When I click on lock icon in search bar
    When I click on serial key
    Then I can see that search key gets locked
    When I click on locked icon in search bar
    When I click on serial key
    Then I can see that search key gets unlocked
@automation-equipment-table-search-part-2
  Scenario: As a user, I can see appropriate message on UI 'No Equipment Profile available' if search with incorrect input text
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Equipment List Profiles
    Then I should be able to view the Equipment List Profiles
    When I click on search icon in equipment profile table
    When I enter the incorrect search value
    Then I can see the message No Equipment Profile available
@automation-equipment-table-search-part-2
  Scenario: As a user, I can see search text is pre- populated in the Equipment Profile drawer
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Equipment List Profiles
    Then I should be able to view the Equipment List Profiles
    When I click on search icon in equipment profile table
    When I enter the search value "yamaha"
    When I click on equipment profile
    Then I can see the search text "yamaha" is pre- populated in the Equipment Profile drawer
@automation-equipment-table-search-part-2
  Scenario: As a user, I can see Key and search text is pre- populated in the Equipment Profile drawer
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Equipment List Profiles
    Then I should be able to view the Equipment List Profiles
    When I click on search icon in equipment profile table
    When I click on lock icon in search bar
    When I click on serial key
    When I enter the search value "12314564"
    When I click on equipment profile
    Then I can see the key and search text "serial: 12314564" is pre- populated in the Equipment Profile drawer
@automation-equipment-table-search-part-2
  Scenario: As a user, I can search Serial, SKU, Manufacturer, MAC, IP Address, Location with free text in Equipment Profile Table
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Equipment List Profiles
    Then I should be able to view the Equipment List Profiles
    When I click on search icon in equipment profile table
    When I enter the search value "serial:12314564"
    Then I can see the equipment Profile "EQ"
    And  I cleared the search
    When I enter the search value "sku:Cable"
    Then I can see the equipment Profile "Generic Cable"
    And  I cleared the search
    When I enter the search value "manufacturer:NetGear"
    Then I can see the equipment Profile "EQ"
    And  I cleared the search
    When I enter the search value "mac:00:00:00:00:00:00"
    Then I can see the equipment Profile "Baicells CPE"
    And  I cleared the search
    When I enter the search value "ip address:100.64.0.50"
    Then I can see the equipment Profile "LTE SIM CARD - Generic"
    And  I cleared the search
    When I enter the search value "location:Autosite"
    Then I can see the equipment Profile "5 GHZ NANOSTATION AC (NS-5AC-US)"
@automation-equipment-table-search-part-2
  Scenario: As a user, I can see that after search key:value and when opening an equipment, actual equipment should be opened instead of AP/Upstream
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Equipment List Profiles
    Then I should be able to view the Equipment List Profiles
    When I click on search icon in equipment profile table
    When I enter the search value "serial:12314564"
    When I open an equipment
    Then I can see an actual equipment is opened by verifying serial "12314564"






