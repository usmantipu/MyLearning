
@equipmentAssembliesSearch
@TA966
Feature: Equipment Assemblies Search

  Background:
    Given I open UBO webapp
    # And I login with username jcabangonautomation and password Test@1234
    And I login using username jcabangonautomation and password Test@1234
    And I navigate to the IRM page
    And I navigate to the Equipment Assembly Tab

  # @TA966
  @TA-TC-739 @equipmentAssembliesSearch-part1
  Scenario: As a user, I can see search icon in Equipment Assemblies Table.
    Then I can see search icon in Equipment Assemblies Table

  # @TA966
  @TA-TC-740 @equipmentAssembliesSearch-part1
  Scenario: As a user, I can see search text box when click on search icon.
    When I click on search icon in Equipment Assemblies Table
    Then I can see search text box when click on search icon

  # @TA966
  Scenario: As a user, I can add an equipment assembly record
    And  I add a new Infrastructure Profile record
    And  I add a new Inventory Profile record
    And  I add a new Equipment Profile record
    And  I add a new Infrastructure Location
    And  I add a new Equipment record
    And  I add a new Child Equipment record

    # And  I close the Infrastructure Location Popup


  # @TA966
  @TA-TC-741 @equipmentAssembliesSearch-part1
  Scenario: As a user, I can search with free text and text should be highlighted in search result
    When I add an equipment assembly record
    And  I type in Equipment Assemblies search textbox in List view
    Then I can see highlighted search result in Equipment Assemblies table

  # @TA966
  @TA-TC-742 @equipmentAssembliesSearch-part1
  Scenario: As a user, I can search with the given keys 'Serial' if click on 'Lock' icon
    When  I click on search icon in List view
    And  I click on lock icon
    And  I select the option from the context menu as "Serial"
    Then I can see the selected option in the search field as "Serial"


  # @TA966
  @TA-TC-743 @equipmentAssembliesSearch-part1
  Scenario: As a user, I can search with the given keys 'Serial' with lock search via keyword + colon (ex. 'Serial: 95854555')

    When I add an equipment assembly record
    And  I click on search icon in List view
    And  I click on lock icon
    And  I select the option from the context menu as "Serial"
    And  I enter the key to perform search as "Serial"
    Then I can see at least one search result in Equipment Assemblies table
    # Then I can see at least one search result in Equipment Assemblies table for "Serial"

  # @TA966
  @TA-TC-744 @equipmentAssembliesSearch-part1
  Scenario: As a user, I can search with the given keys 'SKU' if click on 'Lock' icon
    When  I click on search icon in List view
    And  I click on lock icon
    And  I select the option from the context menu as "SKU"
    Then I can see the selected option in the search field as "SKU"


  # @TA966
  @TA-TC-745 @equipmentAssembliesSearch-part1
  Scenario: As a user, I can search with the given keys 'SKU' with lock search via keyword + colon (ex. 'SKU: test')
    When I add an equipment assembly record
    And  I click on search icon in List view
    And  I click on lock icon
    And  I select the option from the context menu as "SKU"
    And  I enter the key to perform search as "SKU"
    Then I can see at least one search result in Equipment Assemblies table
    # Then I can see at least one search result in Equipment Assemblies table for "SKU"

  # @TA966
  @TA-TC-746 @equipmentAssembliesSearch-part1
  Scenario: As a user, I can search with the given keys 'Manufacturer' if click on 'Lock' icon

    When  I click on search icon in List view
    And  I click on lock icon
    And  I select the option from the context menu as "Manufacturer"
    Then I can see the selected option in the search field as "Manufacturer"


  # @TA966
  @TA-TC-747 @equipmentAssembliesSearch-part1
  Scenario: As a user, I can search with the given keys 'Manufacturer' with lock search via keyword + colon (ex. 'Manufacturer: test')
    When I add an equipment assembly record
    And  I click on search icon in List view
    And  I click on lock icon
    And  I select the option from the context menu as "Manufacturer"
    And  I enter the key to perform search as "Manufacturer"
    Then I can see at least one search result in Equipment Assemblies table
    # Then I can see at least one search result in Equipment Assemblies table for "Manufacturer"


  # @TA966
  @TA-TC-748 @equipmentAssembliesSearch-part1
  Scenario: As a user, I can search with the given keys 'MAC' if click on 'Lock' icon
    When  I click on search icon in List view
    And  I click on lock icon
    And  I select the option from the context menu as "Mac"
    Then I can see the selected option in the search field as "Mac"


  # @TA966
  @TA-TC-749 @equipmentAssembliesSearch-part1
  Scenario: As a user, I can search with the given keys 'MAC' with lock search via keyword + colon (ex. 'MAC: 98:98:78:74')
    When I add an equipment assembly record
    And  I click on search icon in List view
    And  I click on lock icon
    And  I select the option from the context menu as "Mac"
    And  I enter the key to perform search as "Mac"
    Then I can see at least one search result in Equipment Assemblies table
    # Then I can see at least one search result in Equipment Assemblies table for "MAC"

  # @TA966
  @TA-TC-750 @equipmentAssembliesSearch-part1
  Scenario: As a user, I can search with the given keys 'IP Address' if click on 'Lock' icon
    When  I click on search icon in List view
    And  I click on lock icon
    And  I select the option from the context menu as "IP Address"
    Then I can see the selected option in the search field as "IP Address"


  # @TA966
  @TA-TC-751 @equipmentAssembliesSearch-part1
  Scenario: As a user, I can search with the given keys 'IP Address' with lock search via keyword + colon (ex. 'IP Address: 98.32.65.89')
    When I add an equipment assembly record
    And  I click on search icon in List view
    And  I click on lock icon
    And  I select the option from the context menu as "IP Address"
    And  I enter the key to perform search as "IP Address"
    Then I can see at least one search result in Equipment Assemblies table
    # Then I can see at least one search result in Equipment Assemblies table for "IP Address"

  # @TA966
  @TA-TC-752 @equipmentAssembliesSearch-part2
  Scenario: As a user, I can search with the given keys 'Location' if click on 'Lock' icon
    When  I click on search icon in List view
    And  I click on lock icon
    And  I select the option from the context menu as "Location"
    Then I can see the selected option in the search field as "Location"


  # @TA966
  @TA-TC-753 @equipmentAssembliesSearch-part2
  Scenario: As a user, I can search with the given keys 'Location' with lock search via keyword + colon (ex. 'Location: test')
    When I add an equipment assembly record
    And  I click on search icon in List view
    And  I click on lock icon
    And  I select the option from the context menu as "Location"
    And  I enter the key to perform search as "Location"
    Then I can see at least one search result in Equipment Assemblies table
    # Then I can see at least one search result in Equipment Assemblies table for "Location"

  # @TA966
  @TA-TC-754 @equipmentAssembliesSearch-part2
  Scenario: As a user, As a user, I can see that searched text is highlighted
    When I add an equipment assembly record
    And  I navigate to the Equipment Assembly Tab
    And  I click on search icon in List view
    And  I click on lock icon
    And  I select the option from the context menu as "Location"
    And  I enter the key to perform search as "Location"
    Then I can see highlighted search result for Equipment Assemblies

  # @TA966
  @TA-TC-755 @equipmentAssembliesSearch-part2
  Scenario: As a user, I can clear the search text by clicking on X button from search box

    When  I perform Search on Equipment Assembly Tab
    When I click on X icon to clear the search input
    Then I can see that input is removed from the search field

  # @TA966
  @TA-TC-756 @equipmentAssembliesSearch-part2
  Scenario: As a user, I can see that search result refines when entering or removing a character from search text

    When I add an equipment assembly record
    And  I copy the first record in Tiles view
    And  I perform the search for the existing records
    Then I can see that search results are refined when entering or removing a character from search text

  # @TA966
  @TA-TC-757 @equipmentAssembliesSearch-part2
  Scenario: As a user, I can see that search key gets locked when selecting the key

    And  I click on search icon in List view
    And  I click on lock icon
    And  I select the option from the context menu as "Serial"
    Then I can see that search key gets locked when selecting the key

  # @TA966
  @TA-TC-758 @equipmentAssembliesSearch-part2
  Scenario: As a user, I can see that search key gets unlocked when unselecting key
    When  I make sure that search field is locked by select key as "Serial"
    And I unselect the key "Serial"
    Then  I can see that search key gets unlocked when unselecting the key

  # @TA966
  @TA-TC-759 @equipmentAssembliesSearch-part2
  Scenario: As a user, I can see appropiate message on UI 'No Equipment Assembly available' if search with incorrect input text

    When I type in Equipment Assemblies search textbox for unavailable record
    Then I can see appropriate message about no data avaialble


  # @TA966
  @TA-TC-783 @equipmentAssembliesSearch-part2
  Scenario: As a user, I can search (Serial, SKU, Manufacturer, MAC, IP Address, Location) with free text in Equipment Assemblies Table
    When I add an equipment assembly record    
    And  I change the euipment assemblies view as List
    Then I can see at least one result when perfomed search for following keys
      | Serial       |
      | SKU          |
      | Manufacturer |
      | Mac          |
      | IP Address   |
      | Location     |