Feature: Automation of Inventory Profile Table Search

	Background:
        Given I open Visp Web to Access IRM
        And   I login with username and password to use IRM
              | jcabangonautomation | Test@1234 |

@automation-inventory-profile-table-search-part-1
  Scenario: As a user, I can see search icon in Inventory Profile Table
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Inventory List Profiles
    Then I should be able to view the Inventory List Profiles
    Then I can see search icon in Inventory Profile Table
@automation-inventory-profile-table-search-part-1
  Scenario: As a user, I can see search text box when click on search icon
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Inventory List Profiles
    Then I should be able to view the Inventory List Profiles
    When I click on search icon in inventory profile table
    Then I can see search text box in inventory profile table
@automation-inventory-profile-table-search-part-1
  Scenario: As as user, I can see the following fields 'Serial No, MAC, SKU, IP Address, Location, Manufacturer' when click on lock
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Inventory List Profiles
    Then I should be able to view the Inventory List Profiles
    When I click on search icon in inventory profile table
    When I click on lock icon in search bar
    Then I can see the following fields 'Serial No, MAC, SKU, IP Address, Location, Manufacturer'
@automation-inventory-profile-table-search-part-1
  Scenario: As a user, I can search with free text and text should be highlighted in search result
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Inventory List Profiles
    Then I should be able to view the Inventory List Profiles
    When I click on search icon in inventory profile table
    When I enter the search value "Phone"
    Then I can see the highlighted Inventory Profile "Phone"
@automation-inventory-profile-table-search-part-1
  Scenario: As a user, I can search with the given keys 'Serial' if click on 'Lock' icon
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Inventory List Profiles
    Then I should be able to view the Inventory List Profiles
    When I click on search icon in inventory profile table
    When I click on lock icon in search bar
    When I click on serial key
    When I enter the search value "1234566"
    Then I can see the Inventory Profile "Router"
@automation-inventory-profile-table-search-part-1
  Scenario: As a user, I can search with the given keys 'Serial' with lock search via keyword + colon ex. 'Serial: 95858896'
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Inventory List Profiles
    Then I should be able to view the Inventory List Profiles
    When I click on search icon in inventory profile table
    When I enter the search value "serial:1234566"
    Then I can see the Inventory Profile "Router"
@automation-inventory-profile-table-search-part-1
  Scenario: As a user, I can search with the given keys 'SKU' if click on 'Lock' icon
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Inventory List Profiles
    Then I should be able to view the Inventory List Profiles
    When I click on search icon in inventory profile table
    When I click on lock icon in search bar
    When I click on SKU key
    When I enter the search value "BCL"
    Then I can see the Inventory Profile "Baicells CPE"
@automation-inventory-profile-table-search-part-1
  Scenario: As a user, I can search with the given keys 'SKU' with lock search via keyword + colon ex. 'SKU: test'
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Inventory List Profiles
    Then I should be able to view the Inventory List Profiles
    When I click on search icon in inventory profile table
    When I enter the search value "sku:BCL"
    Then I can see the Inventory Profile "Baicells CPE"
@automation-inventory-profile-table-search-part-1
  Scenario: As a user, I can search with the given keys 'Manufacturer' if click on 'Lock' icon
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Inventory List Profiles
    Then I should be able to view the Inventory List Profiles
    When I click on search icon in inventory profile table
    When I click on lock icon in search bar
    When I click on Manufacturer key
    When I enter the search value "WR"
    Then I can see the Inventory Profile "Cisco"
@automation-inventory-profile-table-search-part-1
  Scenario: As a user, I can search with the given keys 'Manufacturer' with lock search via keyword + colon ex. 'Manufacturer: test'
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Inventory List Profiles
    Then I should be able to view the Inventory List Profiles
    When I click on search icon in inventory profile table
    When I enter the search value "manufacturer:WR"
    Then I can see the Inventory Profile "Cisco"
@automation-inventory-profile-table-search-part-1
  Scenario: As a user, I can search with the given keys 'MAC' if click on 'Lock' icon
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Inventory List Profiles
    Then I should be able to view the Inventory List Profiles
    When I click on search icon in inventory profile table
    When I click on lock icon in search bar
    When I click on MAC key
    When I enter the search value "00:00:00:00:00:00"
    Then I can see the Inventory Profile "LTE SIM CARD - Generic"
@automation-inventory-profile-table-search-part-1
  Scenario: As a user, I can search with the given keys 'MAC' with lock search via keyword + colon ex. 'MAC:98:96:96:69'
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Inventory List Profiles
    Then I should be able to view the Inventory List Profiles
    When I click on search icon in inventory profile table
    When I enter the search value "mac:00:00:00:00:00:00"
    Then I can see the Inventory Profile "LTE SIM CARD - Generic"
@automation-inventory-profile-table-search-part-1
  Scenario: As a user, I can search with the given keys 'IP Address' if click on 'Lock' icon
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Inventory List Profiles
    Then I should be able to view the Inventory List Profiles
    When I click on search icon in inventory profile table
    When I click on lock icon in search bar
    When I click on IP Address key
    When I enter the search value "192.168.1.1"
    Then I can see the Inventory Profile "RB921GS-5HPacD-19S"
@automation-inventory-profile-table-search-part-1
  Scenario: As a user, I can search with the given keys 'IP Address' with lock search via keyword + colon ex. 'IP Address: 98.56.98.89'
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Inventory List Profiles
    Then I should be able to view the Inventory List Profiles
    When I click on search icon in inventory profile table
    When I enter the search value "ip address:192.168.1.1"
    Then I can see the Inventory Profile "RB921GS-5HPacD-19S"
@automation-inventory-profile-table-search-part-2
  Scenario: As a user, I can search with the given keys 'Location' if click on 'Lock' icon
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Inventory List Profiles
    Then I should be able to view the Inventory List Profiles
    When I click on search icon in inventory profile table
    When I click on lock icon in search bar
    When I click on Location key
    When I enter the search value "Autosite"
    Then I can see the Inventory Profile "RB921GS-5HPacD-19S"
@automation-inventory-profile-table-search-part-2
  Scenario: As a user, I can search with the given keys 'Location' with lock search via keyword + colon ex. 'Location: test'
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Inventory List Profiles
    Then I should be able to view the Inventory List Profiles
    When I click on search icon in inventory profile table
    When I enter the search value "location:Autosite"
    Then I can see the Inventory Profile "RB921GS-5HPacD-19S"
@automation-inventory-profile-table-search-part-2
  Scenario: As a user, I can see that searched text is highlighted
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Inventory List Profiles
    Then I should be able to view the Inventory List Profiles
    When I click on search icon in inventory profile table
    When I enter the search value "Cisco"
    Then I can see the highlighted Inventory Profile "Cisco"
@automation-inventory-profile-table-search-part-2
  Scenario: As a user, I can clear the search text by clicking on X button from search box
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Inventory List Profiles
    Then I should be able to view the Inventory List Profiles
    When I click on search icon in inventory profile table
    When I enter the search value "123abc"
    When I Click on X close button
    Then I can see the search is cleared
@automation-inventory-profile-table-search-part-2
  Scenario: As a user, I can see that search result refines when entering or removing a character from search text
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Inventory List Profiles
    Then I should be able to view the Inventory List Profiles
    When I click on search icon in inventory profile table
    When I enter the unrefined search value to search inventory profile
    Then I can see the searched items counts
    When I enter the refined search value to search inventory profile
    Then I can see the different searched counts
@automation-inventory-profile-table-search-part-2
  Scenario: As a user, I can see that search key gets locked when selecting the key
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Inventory List Profiles
    Then I should be able to view the Inventory List Profiles
    When I click on search icon in inventory profile table
    When I click on lock icon in search bar
    When I click on serial key
    Then I can see that search key gets locked
@automation-inventory-profile-table-search-part-2
  Scenario: As a user, I can see that search key gets unlocked when unselecting key
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Inventory List Profiles
    Then I should be able to view the Inventory List Profiles
    When I click on search icon in inventory profile table
    When I click on lock icon in search bar
    When I click on serial key
    Then I can see that search key gets locked
    When I click on locked icon in search bar
    When I click on serial key
    Then I can see that search key gets unlocked
@automation-inventory-profile-table-search-part-2
  Scenario: As a user, I can see appropiate message on UI 'No results found' if search incorrect input text
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Inventory List Profiles
    Then I should be able to view the Inventory List Profiles
    When I click on search icon in inventory profile table
    When I enter the incorrect search value to search inventory profile
    Then I can see the message No Data Available
@automation-inventory-profile-table-search-part-2
  Scenario: As a user, I can see search text is pre- populated in the Inventory Profile drawer
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Inventory List Profiles
    Then I should be able to view the Inventory List Profiles
    When I click on search icon in inventory profile table
    When I enter the search value "Phone"
    When I click on inventory profile "Phone"
    Then I can see the search text "Phone" is pre- populated in the inventory Profile drawer
@automation-inventory-profile-table-search-part-2
  Scenario: As a user, I can see Key and search text is pre- populated in the Inventory Profile drawer
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Inventory List Profiles
    Then I should be able to view the Inventory List Profiles
    When I click on search icon in inventory profile table
    When I click on lock icon in search bar
    When I click on serial key
    When I enter the search value "1234566"
    When I click on inventory profile "Router"
    Then I can see the key and search text "serial: 1234566" is pre- populated in the inventory Profile drawer
@automation-inventory-profile-table-search-part-2
  Scenario: As a user, I can search Serial, SKU, Manufacturer, MAC, IP Address, Location with free text in Inventory Profile Table
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Inventory List Profiles
    Then I should be able to view the Inventory List Profiles
    When I click on search icon in inventory profile table
    When I enter the search value "serial:1234566"
    Then I can see the Inventory Profile "Router"
    And  I cleared the search
    When I enter the search value "sku:BCL"
    Then I can see the Inventory Profile "Baicells CPE"
    And  I cleared the search
    When I enter the search value "manufacturer:WR"
    Then I can see the Inventory Profile "Cisco"
    And  I cleared the search
    When I enter the search value "mac:00:00:00:00:00:00"
    Then I can see the Inventory Profile "LTE SIM CARD - Generic"
    And  I cleared the search
    When I enter the search value "ip address:192.168.1.1"
    Then I can see the Inventory Profile "RB921GS-5HPacD-19S"
    And  I cleared the search
    When I enter the search value "location:Autosite"
    Then I can see the Inventory Profile "RB921GS-5HPacD-19S"
@automation-inventory-profile-table-search-part-2
  Scenario: As a user, I can see the correct result based on search in Inventory Profile Table
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Inventory List Profiles
    Then I should be able to view the Inventory List Profiles
    When I click on search icon in inventory profile table
    When I enter the search value "serial:1234566"
    When I click on inventory profile "Router"
    Then I can see an actual inventory profile is opened by verifying serial "1234566"
@automation-inventory-profile-table-search-part-2
  Scenario: Verify that Inventory Profile table columns sorting is working as expected
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Inventory List Profiles
    Then I should be able to view the Inventory List Profiles
    When I try to sort the column description
    Then I can see the table columns are sorted and the profile "5 GHZ NANOSTATION AC" on top
@automation-inventory-profile-table-search-part-2
  Scenario: As a user, I can see the correct record count when search with free text or kay-value pair
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Inventory List Profiles
    Then I should be able to view the Inventory List Profiles
    When I click on search icon in inventory profile table
    When I enter the search value "sku:BCL"
    Then I can see the record count is "1"




