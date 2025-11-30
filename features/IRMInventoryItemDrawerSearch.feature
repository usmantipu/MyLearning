Feature: IRM - InventoryItemDrawerSearch
    Background:
        Given I open Visp Web to Access IRM
        And   I login with username and password to use IRM
            | jcabangonautomation | Test@1234 |
        When I navigate to IRM after login
        Then I should be on the IRM Page
        When I nevigate to the Inventory List Profiles
        Then I should be able to view the Inventory List Profiles

@automation-inventory-profile-drawer-search
    Scenario: As a user, I can search with the given keys 'Serial' with lock search via keyword + colon ex. 'name: test'
        When I click on search icon in inventory profile table
        When I enter the search value "serial:1234566"
        When I clicked on inventory profile "Router"
        Then I can see search box in inventory profile drawer
        Then I can see the highlighted result "1234566"
@automation-inventory-profile-drawer-search
    Scenario: As a user, I can search with the given keys 'SKU' with lock search via keyword + colon ex. 'name: test'
        When I click on search icon in inventory profile table
        When I enter the search value "sku:BCL"
        When I clicked on inventory profile "Baicells CPE"
        Then I can see search box in inventory profile drawer
        Then I can see the inventory item having serial "874635"
@automation-inventory-profile-drawer-search
    Scenario: As a user, I can search with the given keys 'Manufacturer' with lock search via keyword + colon (ex. 'name: test')
        When I click on search icon in inventory profile table
        When I enter the search value "manufacturer:WR"
        When I clicked on inventory profile "Cisco"
        Then I can see search box in inventory profile drawer
        Then I can see the inventory item having serial "w"
@automation-inventory-profile-drawer-search
    Scenario: As a user, I can search with the given keys 'MAC' with lock search via keyword + colon (ex. 'name: test')
        When I click on search icon in inventory profile table
        When I enter the search value "mac:00:00:00:00:00:00"
        When I clicked on inventory profile "Router"
        Then I can see search box in inventory profile drawer
        Then I can see the inventory item having serial "1111111"
@automation-inventory-profile-drawer-search
    Scenario: As a user, I can search with the given keys 'IP Address' with lock search via keyword + colon (ex. 'name: test')
        When I click on search icon in inventory profile table
        When I enter the search value "ip address:192.168.1.1"
        When I clicked on inventory profile "RB921GS-5HPacD-19S"
        Then I can see search box in inventory profile drawer
        Then I can see the inventory item having serial "000001"
@automation-inventory-profile-drawer-search
    Scenario: As a user, I can search with the given keys 'Location' with lock search via keyword + colon (ex. 'name: test')
        When I click on search icon in inventory profile table
        When I enter the search value "location:Autosite"
        When I clicked on inventory profile "RB921GS-5HPacD-19S"
        Then I can see search box in inventory profile drawer
        Then I can see the highlighted result "AutoSite"
@automation-inventory-profile-drawer-search
    Scenario: As a user, I can search 'Serial No, MAC, SKU, IP Address, Location, Manufacturer' using free text in Inventory item drawer
        When I click on search icon in inventory profile table
        When I enter the search value "serial:1234566"
        When I clicked on inventory profile "Router"
        Then I can see search box in inventory profile drawer
        Then I can see the highlighted result "1234566"
        When I close the drawer the cleared the search
        When I enter the search value "sku:BCL"
        When I clicked on inventory profile "Baicells CPE"
        Then I can see search box in inventory profile drawer
        Then I can see the inventory item having serial "874635"
        When I close the drawer the cleared the search
        When I enter the search value "manufacturer:WR"
        When I clicked on inventory profile "Cisco"
        Then I can see search box in inventory profile drawer
        Then I can see the inventory item having serial "w"
        When I close the drawer the cleared the search
        When I enter the search value "mac:00:00:00:00:00:00"
        When I clicked on inventory profile "Router"
        Then I can see search box in inventory profile drawer
        Then I can see the inventory item having serial "1111111"
        When I close the drawer the cleared the search
        When I enter the search value "ip address:192.168.1.1"
        When I clicked on inventory profile "RB921GS-5HPacD-19S"
        Then I can see search box in inventory profile drawer
        Then I can see the inventory item having serial "000001"
        When I close the drawer the cleared the search
        When I enter the search value "location:Autosite"
        When I clicked on inventory profile "RB921GS-5HPacD-19S"
        Then I can see search box in inventory profile drawer
        Then I can see the highlighted result "AutoSite"
@automation-inventory-profile-drawer-search
    Scenario: Verify that correct data should be displays based on sorting in 'inventoryItemsByProfile' query
        When I click on search icon in inventory profile table
        When I enter the search value "5 GHZ NANOSTATION AC (NS-5AC-US)"
        When I clicked on inventory profile "5 GHZ NANOSTATION AC (NS-5AC-US)"
        Then I can see search box in inventory profile drawer
        When I sort the column current location
        Then I can see "A C" location at top row
@automation-inventory-profile-drawer-search
    Scenario: As a user, I can see correct data based on pagination in 'inventoryItemsByProfile' query
        When I click on search icon in inventory profile table
        When I enter the search value "5 GHZ NANOSTATION AC (NS-5AC-US)"
        When I clicked on inventory profile "5 GHZ NANOSTATION AC (NS-5AC-US)"
        Then I can see search box in inventory profile drawer
        When I set pagination to display records accordingly
        Then I can see the correct data is displayed based on pagination
