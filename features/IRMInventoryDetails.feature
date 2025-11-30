@irmInventoryDetails
Feature: IRM - Inventory
    Background:
        Given I open Visp Web to Access IRM
        When   I login with username and password to use IRM
            | jcabangonautomation | Test@1234 |
        When  I navigate to IRM page
        When  I go the Inventory profile section
        When  I set List view of Inventory
        
    @regression2021 @irmInventoryDetails
    Scenario: As a user, I can validate the look and feel of the Inventory Profile drawer section
        When I go the Inventory profile section
        When I search an inventory using Equipment profile
            | Baicells  |
        Then I can click on any Inventory profile to open an Inventory Profile drawer containing its associated Inventory Items
        Then I can sort the list in the Inventory Drawer
        Then I have options in the Hamburger Menu of Inventory Drawer:
            | Choose Columns  |
            | Export CSV |
            #| Enable Inline Editing |
        Then I can click on Choose Column in the Hamburger Menu of inventory details
        Then I can choose to display columns in the Inventory Drawer using the Column Chooser
        Then I see a Search Bar in the Inventory Drawer
        Then I can click on the Search Bar to search for details based on a search keyword
        Then I see a 3-dot menu when I focus on details in the table of Inventory Drawer
        Then I see a Delete button in the 3-dot menu while clicking 3-dot menu of Inventory Drawer
        Then I can click on the Delete button in the table of Inventory Drawer
        Then I can see the pop-up for Inventory will be Delete with Yes and No option
        #When I click on Yes to delete Inventory item
        #Then the Inventory is deleted, and the site is removed if it's connected to another item Or if I click on 'No', the Inventory is not deleted
        Then I can click on any Inventory Item to view or edit its details

    @regression2021 @irmInventoryDetails
    Scenario: As a user, I can view and Edit Inventory Items details
        When I go the Inventory profile section
        When I search an inventory using Equipment profile
            | Cisco  |
        Then I can click on any Inventory profile to open an Inventory Profile drawer containing its associated Inventory Items
        Then I can click on any Inventory Item to view or edit its details
        Then I can see the Serial No Location Equipment Received date and Purchase Price fields in the Edit Inventory Item details drawer
        Then I can see the Asset Tag field when I enable the Show Asset Tag in equipment settings
        Then I can edit the Serial No. field in the Inventory Item
        Then I am restricted to edit an Inventory Item with an empty Serial No.
        Then I am restricted to edit the Serial No. if it is already assigned
        Then I can edit the Asset Tag field in the Inventory drawer
        #And I can see the 'Unit' field when I click on the metered checkbox in the Inventory Profile Setting
        #And I can edit the Unit field in the Inventory drawer
        #And I am restricted to fill in alphabetical and symbol characters in the Unit field
        Then I can edit the Location field based on a search keyword in the Edit Inventory Item
        Then I can see the correct list of locations if I search based on a search keyword for the Location field
        #Then I can edit the Location by clicking on the dropdown button for the Location field
        Then I am restricted to edit an Inventory Item with an empty Location field
        #And I can see that the 'Location' field is disabled when there is an ongoing open RMA card, and the location displayed is "Out of Service (RMA)"
        Then I can edit the Equipment field based on a search keyword in the Edit Inventory Item
        Then I can see the correct list of equipment if I search based on a search keyword for the Equipment field
        #Then I can edit the Equipment field by clicking on the dropdown button
        Then I can edit the Received Date field by clicking on the date chooser
        Then I can view that the value of the Received Date field in the Inventory Item is automatically formatted to MM-DD-YYYY
        Then I can directly edit the value in the Received Date field
        Then I am restricted to edit an Inventory Item with an empty Received Date field
        Then I can fill the Purchase Price field
        Then I can edit the Note field
        Then I see Save and Restore buttons in the Edit Inventory Item
        Then I can click the Restore button to reset the data of Inventory Item
        Then I can click the Save button to save the updated details of Inventory Item
        Then I can see the changes are reflected in the Inventory Item, and the details are successfully updated
        
    @regression2021 @irmInventoryDetails
    Scenario: As a user, I can Create and Manage Return Material Authorization (RMA)
        When I go the Inventory profile section
        When I search an inventory using Equipment profile
            | Cisco  |
        Then I can click on any Inventory profile to open an Inventory Profile drawer containing its associated Inventory Items
        Then I can click on any Inventory Item to view or edit its details
        When I click on the Create RMA button of Inventory
        Then I can see the RMA Fields
        ##And I can resize the columns in the RMA table
        ##And I can change the position by dragging the columns
        When I enter a valid Date using the date chooser
        When I enter a valid Vendor by selecting from the list
        When I enter a valid RMA Number
        Then I can see the Status change to Accepted from Created
        Then I see Return Date and Return Tracking Number fields are enabled after entering the RMA Number
        When I enter a valid Returned Date using the date chooser
        When I enter a valid Returned Tracking Number
        Then I can see the Status change to Returned from Accepted
        When I enter a valid Shipped Date using the date chooser
        When I enter a valid Shipped Tracking Number
        Then I can see the Status change to Shipped from Returned
        Then I can see the Arrow icon in the Returned Tracking Number and Shipped Tracking Number fields
        ##When I can click on the Arrow icon and it opens a Google search of that number in a new browser tab
        Then I can see the Location field is enabled
        Then I see Save and Cancel buttons are enabled after entering the Shipped Tracking Number
        When I click on the Save button to save RMA
        Then I can see the Create RMA button is disabled when there is an open RMA in the RMA card
        Then I can sort the list in the RMA table
        Then I can see the created RMA is reflected in the RMA card
        Then I Reopen the created RMA
        Then I can search for the location in the Location field
        Then I can select the location by clicking on the dropdown button for the Location field
        Then I can see the Status change to Complete from Shipped
        Then I can see the Create RMA button is enabled when there is a Complete RMA in the RMA card

    @regression2021 @irmInventoryDetails
    Scenario: As a user, I can Edit and Update RMA Card Details
        When I go the Inventory profile section
        When I search an inventory using Equipment profile
            | Cisco  |
        Then I can click on any Inventory profile to open an Inventory Profile drawer containing its associated Inventory Items
        Then I can click on any Inventory Item to view or edit its details
        When I create RMA with Status Shipped
        Then I can sort the list in the RMA table
        Then I Reopen the created RMA
        Then I can update the Date field by choosing a new date using the date chooser
        ##Then I can update the Vendor field by selecting a vendor from the list when there is no PO associated with that Inventory
        ##Then I am restricted to update the Vendor field when there is a PO associated with that Inventory
        Then I am restricted to update the RMA Number field if it is empty
        Then I can edit and update the RMA Number field with a valid RMA number
        Then I am restricted to update the empty Return Date field
        Then I can update the Return Date field by choosing a new date using the date chooser
        Then I am restricted to update the empty Return Tracking Number field
        Then I can update the Return Tracking Number field with a valid tracking number
        Then I am restricted to update the empty Shipped Date field
        Then I can update the Shipped Date field by choosing a new date using the date chooser
        Then I am restricted to update the empty Shipped Tracking Number field
        Then I can update the Shipped Tracking Number field with a valid tracking number
        Then I can see the Save and Restore buttons enabled after making the updates
        When I click on the Save button to updated RMA
        Then I can the RMA Card details are updated successfully
        Then I can see the updated details reflected on the RMA card
    
    @regression2021 @irmInventoryDetails
    Scenario: As a user, I can View and Search Inventory Details History in Activity Logs
        When I go the Inventory profile section
        When I search an inventory using Equipment profile
            | Cisco  |
        Then I can click on any Inventory profile to open an Inventory Profile drawer containing its associated Inventory Items
        Then I can click on any Inventory Item to view or edit its details
        When I create RMA with Status Shipped
        Then I can sort the list in the RMA table
        Then I Reopen the created RMA
        Then I can select the location by clicking on the dropdown button for the Location field
        Then I can see the Create RMA button is enabled when there is a Complete RMA in the RMA card
        When I navigate to the Activity Logs section
        Then I see a table with columns including Date Type Details and App Users
        ##And I can resize the columns in the table
        ##And I can change the position of columns by dragging them
        Then I can sort the list in the table based on the columns
        Then I can see a Search Bar where I can enter search keywords
        Then I can search the history in the Search Bar based on the search keyword
        Then I can click on any activity logs in the table
        Then I can see the detailed history information displayed after clicking the logs
        ##And I can view the 'Date,' 'Type,' 'Details,' and 'App Users' columns in the detailed history
        ##And I can see the activity logs history based on the selected log
        

        


