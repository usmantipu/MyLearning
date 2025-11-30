Feature: Automation of Equipment Table Search-part-1

	Background:
        Given I open Visp Web to Access IRM
        And   I login with username and password to use IRM
              | jcabangonautomation | Test@1234 |

@automation-equipment-table-search-part-1
  Scenario: As a user, I can see search icon in Equipment Profile Table
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Equipment List Profiles
    Then I should be able to view the Equipment List Profiles
    Then I can see search icon in equipment profile table
@automation-equipment-table-search-part-1
  Scenario: As a user, I can see search text box when click on search icon
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Equipment List Profiles
    Then I should be able to view the Equipment List Profiles
    When I click on search icon in equipment profile table
    Then I can see search text box in equipment profile table
@automation-equipment-table-search-part-1
  Scenario: As as user, I can see the following fields 'Serial No, MAC, SKU, IP Address, Location, Manufacturer' when click on lock
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Equipment List Profiles
    Then I should be able to view the Equipment List Profiles
    When I click on search icon in equipment profile table
    When I click on lock icon in search bar
    Then I can see the following fields 'Serial No, MAC, SKU, IP Address, Location, Manufacturer'
@automation-equipment-table-search-part-1
  Scenario: As a user, I can search with free text and text should be highlighted in search result
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Equipment List Profiles
    Then I should be able to view the Equipment List Profiles
    When I click on search icon in equipment profile table
    When I enter the search value "yamaha"
    Then I can see the equipment Profile "Yamaha"
@automation-equipment-table-search-part-1
  Scenario: As a user, I can search with the given keys 'Serial' if click on 'Lock' icon
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Equipment List Profiles
    Then I should be able to view the Equipment List Profiles
    When I click on search icon in equipment profile table
    When I click on lock icon in search bar
    When I click on serial key
    # When I enter the search serial value
    # Then I can see the equipment search result with serial key
    When I enter the search value "12314564"
    Then I can see the equipment Profile "EQ"
@automation-equipment-table-search-part-1
  Scenario: As a user, I can search with the given keys 'Serial' with lock search via keyword + colon ex. 'serial: 36658798'
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Equipment List Profiles
    Then I should be able to view the Equipment List Profiles
    When I click on search icon in equipment profile table
    When I enter the search value "serial:12314564"
    Then I can see the equipment Profile "EQ"
@automation-equipment-table-search-part-1
  Scenario: As a user, I can search with the given keys 'SKU' if click on 'Lock' icon
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Equipment List Profiles
    Then I should be able to view the Equipment List Profiles
    When I click on search icon in equipment profile table
    When I click on lock icon in search bar
    When I click on SKU key
    When I enter the search value "Cable"
    Then I can see the equipment Profile "Generic Cable"
@automation-equipment-table-search-part-1
  Scenario: As a user, I can search with the given keys 'SKU' with lock search via keyword + colon ex. 'SKU: test'
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Equipment List Profiles
    Then I should be able to view the Equipment List Profiles
    When I click on search icon in equipment profile table
    When I enter the search value "sku:Cable"
    Then I can see the equipment Profile "Generic Cable"
@automation-equipment-table-search-part-1
  Scenario: As a user, I can search with the given keys 'Manufacturer' if click on 'Lock' icon
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Equipment List Profiles
    Then I should be able to view the Equipment List Profiles
    When I click on search icon in equipment profile table
    When I click on lock icon in search bar
    When I click on Manufacturer key
    When I enter the search value "NetGear"
    Then I can see the equipment Profile "EQ"
@automation-equipment-table-search-part-1
  Scenario: As a user, I can search with the given keys 'Manufacturer' with lock search via keyword + colon ex. 'Manufacturer: test'
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Equipment List Profiles
    Then I should be able to view the Equipment List Profiles
    When I click on search icon in equipment profile table
    When I enter the search value "manufacturer:NetGear"
    Then I can see the equipment Profile "EQ"
@automation-equipment-table-search-part-1
  Scenario: As a user, I can search with the given keys 'MAC' if click on 'Lock' icon
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Equipment List Profiles
    Then I should be able to view the Equipment List Profiles
    When I click on search icon in equipment profile table
    When I click on lock icon in search bar
    When I click on MAC key
    When I enter the search value "00:00:00:00:00:00"
    Then I can see the equipment Profile "Baicells CPE"
@automation-equipment-table-search-part-1
  Scenario: As a user, I can search with the given keys 'MAC' with lock search via keyword + colon ex. 'MAC: test'
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Equipment List Profiles
    Then I should be able to view the Equipment List Profiles
    When I click on search icon in equipment profile table
    When I enter the search value "mac:00:00:00:00:00:00"
    Then I can see the equipment Profile "Baicells CPE"
@automation-equipment-table-search-part-1
  Scenario: As a user, I can search with the given keys 'IP Address' if click on 'Lock' icon
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Equipment List Profiles
    Then I should be able to view the Equipment List Profiles
    When I click on search icon in equipment profile table
    When I click on lock icon in search bar
    When I click on IP Address key
    When I enter the search value "100.64.0.50"
    Then I can see the equipment Profile "LTE SIM CARD - Generic"






