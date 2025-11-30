@irmInventoryProfiles
Feature: IRM - Inventory
    Background:
        Given I open Visp Web to Access IRM
        When   I login with username and password to use IRM
            | jcabangonautomation | Test@1234 |
        When  I navigate to IRM page
        When  I go the Inventory profile section
        When  I set List view of Inventory
    @regression2021 @regression2021-irmInventoryProfile @TA-826
    Scenario: As a user, I can validate the look and feel of the Inventory section
        When I go the Inventory profile section
    #   Then I can see the Profile Manufacturer Description SKU Assigned and Total columns for the Inventory Profile table
        Then I can can sort the list in the Inventory Profile table
        #When I search with free text for Inventory
        #Then I can see Serial Equipment Type and Location in the details view of the Inventory Profile by clicking on the Arrow button
        #Then I can click on the serial number to directly open the Inventory Items
        #Then I closed the Inventory search field
        Then I can see Half and Full Card width options for Inventory section
        Then I can the see that card width displays as half view If I set Half Card width for Inventory section
        Then I can the see that card width displays as Full view If I set Full Card width for Inventory section
        Then I can set Tiles or List view to Display for Inventory section

@regression2021 @regression2021-irmInventoryProfile @TA-826 @retest
   Scenario: As a user, I can interacts with Inline Editing and Hamburger Menu in the Inventory Profile section
        When I go the Inventory profile section
        Then I can see the Hamburger Menu in Inventory table
        Then I clicks on the Hamburger Menu icon of the Inventory Profile section
        Then I can see the Enable Inline Editing and Export CSV options in the Hamburger Menu
        Then I can click on Enable Inline Editing for the Inventory table
    #    Then I can can inline edit the Inventory Profile and SKU fields in the Inventory table //bugas SKU is not editable
        Then I am restricted from inline editing Manufacturer Description Assigned and Total fields in the Inventory Table
        Then I can double-click on any displayed column or single-click to edit it while inline editing is enabled for the Inventory Table
        Then I am restricted from inline editing when the Profile field is empty
    #    Then I am restricted from inline editing when the SKU field is empty
        Then I can open the Inventory Drawer when double-clicking on any displayed column while inline editing is enabled
        Then I can open the Inventory Drawer when single-clicking on any displayed column while inline editing is disabled for the Inventory Table

@regression2021 @regression2021-irmInventoryProfile @TA-826
   Scenario: As a user, I can search Inventory Profile using Filter Option
        When I go the Inventory profile section
        And  I search with free text for Inventory
        Then I can see the correct and updated Inventory list
        Then I can see Serial Equipment Type and Location in the details view of the Inventory Profile by clicking on the Arrow button
        Then I can click on the serial number to directly open the Inventory Items
        And I can search inventory records displaying according to the searched keys with a Colon in front
            | Serial No  |
            | Manufacturer |
        And I can search inventory with 'Name' key
        Then I can see records displaying according to the searched 'Name'
        And I can search inventory with 'serial number' key
        Then I can see records displaying according to the searched 'serial no'
        And I can search inventory with 'manufacturer' key
        Then I can see records displaying according to the searched 'manufacturer'

@regression2021 @regression2021-irmInventoryProfile
   Scenario: As a user, I can search Inventory Profile using Lock UnLock field
        When I go the Inventory profile section
        And  I search with free text for Inventory
        Then I can see Serial Equipment Type and Location in the details view of the Inventory Profile by clicking on the Arrow button
        Then I can click on the serial number to directly open the Inventory Items
        When  I click on the Lock icon to 'Lock' the Inventory search
        And  I Locked the search with search key 'Serial'
        Then I can see that field locked
        And I can search inventory with 'serial number' key
        Then I can see records displaying according to the searched 'serial no'
        When I click on the Lock icon to 'UnLock' the Inventory search
        And  I Unlocked the search with search key 'Serial'
        Then I can see the key getting unlocked
        When I tries to lock Two keys at a time
        Then I can see only one key can be locked at a time
    
    @regression2021 @regression2021-irmInventoryProfile @TA-810 @TA-826
    Scenario: As a user, I can validate the look and feel of the Add Inventory Profile
        When I go the Inventory profile section
        And I click on the Add Inventory button
        Then I can see the Add Inventory page
        Then I can see these fields on Add Inventory
            | Location  |
            | Inventory Profile |
            | Received Date |
            | Purchase Price |
            | Note |
            | Serial No. |
            | Equipment Profile |
        When I search for a Location with input text
        Then I can see the correct Locations get selected based on the search keyword
        When I search for an Inventory Profile with input text
        Then I can see the correct Inventory Profil get selected based on the search keyword
        When I fill in the Inventory Received Date Purchase Price Note and Serial Number
        Then I click Add to add more stock or Cancel to remove the stock from Inventory
        When I check the Same Equipment Profile checkbox
        Then I can see the Equipment Profile dropdown disappear from all the stock rows
        And I can see the Same Equipment Profile checkbox checked
        And I can see the Scan Equipment Field toggle button appearing
        When I checks the Scan Equipment Profile toggle button
        Then I can see fields of the selected equipment profile
             | Elevation  |
            | Radio MAC |
            | Ethernet MAC |
            | Achilles Updown Status |
        When I check the Equipment field option
             | Elevation  |
        Then I can see field get added to the add inventory page
        And I can see Upload CSV and Download Template options

   @regression2021 @regression2021-irmInventoryProfile
   Scenario: As a user, I can Add Inventory Profile alongwith Equipment Profiles
        When I go the Inventory profile section
        And I click on the Add Inventory button
        When I fill all required fields with Equipment Profile
        Then I can see Save and Cancel button is enabled after filling all required fields
        When  I can click on Save button to add inventory
        Then I can see the newly added Inventory successfully along with the Equipment if the equipment profile field is selected
    #    When I add multiple inventory items along with equipment
    #    And I can add inventory with the same or different equipment profiles associated with the inventory profile
    #    Then I has successfully added inventory items with equipment profiles

   @regression2021 @regression2021-irmInventoryProfile
   Scenario: As a user, I can Only Add Inventory Profile Without Equipment Profile
        When I go the Inventory profile section
        And I click on the Add Inventory button
        When I fill all required fields without Equipment Profile
        And  I can click on Save button to add inventory
        Then I can see only the Inventory is added successfully if the Equipment Profile field is not selected

   @regression2021 @regression2021-irmInventoryProfile @TA-826
   Scenario: As a user, I cannot Add Inventory Profile By clicking Cancel
        When I go the Inventory profile section
        And I click on the Add Inventory button
        When I fill all required fields with Equipment Profile
        And  I can click on Cancel button to cancel the add inventory
        Then I can see Add Inventory Dialog get closed
        And  Inventory Profile do not get added to the Inventory Profile Table
        

   @ManualTesting
   Scenario: As a user, I can Add Inventory Profile By Uploading CSV File
        When I go the Inventory profile section
        And I click on the Add Inventory button
        And I click 'Download Template' to download the template locally
        Then I can see a template with columns: 'Inventory Profile, Manufacturer, Model, SKU, Serial, Asset Tag, Purchase Price, Vendor, and Purchase Date'
        When I fill details in a valid format in the CSV template
        And I upload the CSV template
        Then I can see the correct Inventory Profile Name and QTY after uploading
        And I can see the file name for the uploaded CSV file
        And I can see an 'X' button next to the CSV filename to cancel the upload action
        When I check 'Same Equipment Profile' and 'Same Location' checkboxes
        Then I can see individual sections based on Inventory info provided in the imported CSV
        When I adds, edits, or removes Inventory items
        And I check 'Same Equipment Profile' checkbox
        Then I can see the corresponding 'Equipment Profile' based on the Inventory Profile
