@IRMEquipmentItemDrawerSearch
Feature: IRM - EquipmentItemDrawerSearch
    Background:
        Given I open Visp Web to Access IRM
        And   I login with username and password to use IRM
            | jcabangonautomation | Test@1234 |


    @TA-658 @TA-971
    Scenario: As a user, I can search equipment using free text search keyword 
        When I navigate to IRM page
        When I select Equipment Tab
        When I Change the equipment table to 'Tiles' View
        When I expand Equipment search Bar
        When I type in Equipment search Bar "Generic Phone"
        Then I can see the Equiment 'Generic Phone' searched successfully
    
    @TA-660 @TA-971
    Scenario: As a user, I can see search value are carry over to the drawer when search any Equipment and click on Equipment Profile 
        When I navigate to IRM page
        When I select Equipment Tab
        When I Change the equipment table to 'Tiles' View
        When I expand Equipment search Bar
        When I type in Equipment search Bar "Generic Phone"
        Then I can see the Equiment 'Generic Phone' searched successfully
        When I open the searched Equipment
        Then I can see the expected search input "Generic Phone" carry over to the drawer
    
    @TA-799 @TA-971
    Scenario: As a user, I can search with the given keys 'Serial' with lock search via keyword + colon (ex. 'name: test')
        When I navigate to IRM page
        When I select Equipment Tab
        When I Change the equipment table to 'Tiles' View
        When I expand Equipment search Bar
        When I click on the Lock icon to 'Lock' the Equiment search
        And  I Locked the equipment search with search key 'Serial'
        When I type in Equipment search Bar "3532623"
        Then I can see the Equiment 'Yamaha' searched successfully 

@TA-800 @TA-971
    Scenario: As a user, I can search with the given keys 'SKU' with lock search via keyword + colon (ex. 'name: test')
        When I navigate to IRM page
        When I select Equipment Tab
        When I Change the equipment table to 'Tiles' View
        When I expand Equipment search Bar
        When I click on the Lock icon to 'Lock' the Equiment search
        And  I Locked the equipment search with search key 'SKU'
        When I type in Equipment search Bar "RB941-2nD"
        Then I can see the Equiment 'hAP lite' searched successfully

@TA-801 @TA-971
    Scenario: As a user, I can search with the given keys 'Manufacturer' with lock search via keyword + colon (ex. 'name: test')
        When I navigate to IRM page
        When I select Equipment Tab
        When I Change the equipment table to 'Tiles' View
        When I expand Equipment search Bar
        When I click on the Lock icon to 'Lock' the Equiment search
        And  I Locked the equipment search with search key 'Manufacturer'
        When I type in Equipment search Bar "Yamaha"
        Then I can see the Equiment 'Yamaha' searched successfully

@TA-802 @TA-971
    Scenario: As a user, I can search with the given keys 'MAC' with lock search via keyword + colon (ex. 'name: test')
        When I navigate to IRM page
        When I select Equipment Tab
        When I Change the equipment table to 'Tiles' View
        When I expand Equipment search Bar
        When I click on the Lock icon to 'Lock' the Equiment search
        And  I Locked the equipment search with search key 'Mac'
        When I type in Equipment search Bar "A1:B2:C3:D4:E5:F6"
        Then I can see the Equiment 'Baicells CPE' searched successfully

@TA-803 @TA-971
    Scenario: As a user, I can search with the given keys 'IP Address' with lock search via keyword + colon (ex. 'name: test')
        When I navigate to IRM page
        When I select Equipment Tab
        When I Change the equipment table to 'Tiles' View
        When I expand Equipment search Bar
        When I click on the Lock icon to 'Lock' the Equiment search
        And  I Locked the equipment search with search key 'IP Address'
        When I type in Equipment search Bar "122.122.122.133"
        Then I can see the Equiment 'Baicells CPE' searched successfully

@TA-804 @TA-971
    Scenario: As a user, I can search with the given keys 'Location' with lock search via keyword + colon (ex. 'name: test')
        When I navigate to IRM page
        When I select Equipment Tab
        When I Change the equipment table to 'Tiles' View
        When I expand Equipment search Bar
        When I click on the Lock icon to 'Lock' the Equiment search
        And  I Locked the equipment search with search key 'Location'
        When I type in Equipment search Bar "Calley Gillyett"
        Then I can see the Equiment 'Baicells CPE' searched successfully

@TA-805 @TA-971
    Scenario: As a user, I can search 'Serial No, MAC, SKU, IP Address, Location, Manufacturer' using free text in Equipment item drawer
        When I navigate to IRM page
        When I select Equipment Tab
        When I Change the equipment table to 'Tiles' View
        When I expand Equipment search Bar
        When I type in Equipment search Bar "3532623"
        Then I can see the Equiment 'Yamaha' searched successfully
        When I type in Equipment search Bar "A1:B2:C3:D4:E5:F6"
        Then I can see the Equiment 'Baicells CPE' searched successfully
        When I type in Equipment search Bar "122.122.122.133"
        Then I can see the Equiment 'Baicells CPE' searched successfully
        When I type in Equipment search Bar "Calley Gillyett"
        Then I can see the Equiment 'Baicells CPE' searched successfully
    
    @TA-806 @TA-971
    Scenario: Verify that correct data should be displays based on sorting in 'equipmentPg' query
        When I navigate to IRM page
        When I select Equipment Tab
        When I Change the equipment table to 'List' View 
        When I sort the first column of the equipment table
        Then I can see that equipment first column get sorted

    @TA-807 @TA-971
    Scenario: As a user, I can see correct data based on pagination in 'equipmentPg' query
        When I navigate to IRM page
        When I select Equipment Tab
        When I Change the equipment table to 'List' View
        And I change the Page Size to '10'
        Then I can see that equipment table page size get changed to '10' successfully
