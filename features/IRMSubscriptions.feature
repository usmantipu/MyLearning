Feature: IRMSubscriptions
        Background:
        Given I open Visp Web to Access IRM
        And   I login with username and password to use IRM
            | jcabangonautomation | Test@1234 |
        And  I navigate to IRM page
@irmSubscriptions-part1
  Scenario: As a user, I can see newly added Infrastructure Location in Infrastructure Location Table at real time
    When I navigate to the Infrastructure Location Table
    Then the correct and updated list of Infrastructure locations should be displayed
    When I click on the plus button to add Infrastructure Location
    Then the Add Infrastructure Location form should be displayed
    When I fill all the required fields
    Then the user should be able to fill all the fields
    When I click on the Save button
    Then the user should be able to add the Infrastructure Location successfully and it should be displayed in other instances in real time
@irmSubscriptions-part1
  Scenario: As a user, I can see newly added sub-location in edit Location drawer at real time
    When I navigate to the Infrastructure Location Table
    Then the correct and updated list of Infrastructure locations should be displayed
    When I open existing Infrastructure Location
    Then the Infrastructure Location details should be displayed
    When I click on the edit button
    Then the Edit Infrastructure Location drawer should be displayed
    When I click on Add Sub-Location button
    Then the Add Sub-Location form should be displayed
    When I fill all the required fields of Sub-location
    Then the user should be able to fill all the fields of Sub-Location
    When I click on the Save button
    Then the user should be able to add the Sub-Location successfully and it should be displayed in other instances in real time
@irmSubscriptions-part1
  Scenario: As a user, I can see sub-location details changes at real time
    When I navigate to the Infrastructure Location Table
    Then the correct and updated list of Infrastructure locations should be displayed
    When I open existing Infrastructure Location
    Then the Infrastructure Location details should be displayed
    When I click on the edit button
    Then the Edit Infrastructure Location drawer should be displayed
    When I open an existing Sub-Location
    When I update the required fields of Sub-Location
    Then the user should be able to update all the fields
    When I click on the Save button
    Then the user should be able to save the changes successfully and the changes should be displayed in other instances in real time

@irmSubscriptions-part1
  Scenario: As a user, I can see deleted Infrastructure Location should be remove from Infrastructure Location Table at real time
    When I navigate to the Infrastructure Location Table
    Then the correct and updated list of Infrastructure locations should be displayed
    When I hover the mouse over an Infrastructure Location
    Then the three dots menu should be displayed against Infrastructure location
    When I click on the three dots menu of Infrastructure Location
    Then the Delete option should be displayed
    When I click on the delete button
    Then a confirmation prompt should be displayed for deleting the Infrastructure Location
    When I click on Yes button of the confirmation dialog
    Then the user should see the Infrastructure Location deleted successfully and it should be removed from both instances in real time
@irmSubscriptions-part1
  Scenario: As a user, I can see newly added Contact in Infrastructure Location at real time
    When I navigate to the Infrastructure Location Table
    Then the correct and updated list of Infrastructure locations should be displayed
    When I open existing Infrastructure Location
    Then the Infrastructure Location details should be displayed
    When I click on the edit contact button
    Then the Edit Contact drawer should be displayed
    When I click on Add Contact button
    Then the Add Contact form should be displayed
    When I fill all the required fields to add contact
         | 47Billion | Albert | A | Einstien | Miami |FL|
    Then the user should be able to fill all the fields of the contact
    When I click on the Save button to add contact
    Then the user should be able to add the Contact successfully and it should be displayed in other instances in real time
@irmSubscriptions-part1
  Scenario: As a user, I can see the change details in site Contact at real time
    When I navigate to the Infrastructure Location Table
    Then the correct and updated list of Infrastructure locations should be displayed
    When I open existing Infrastructure Location
    Then the Infrastructure Location details should be displayed
    When I click on the edit contact button
    Then the Edit Contact drawer should be displayed
    When I click on Add Contact button
    Then the Add Contact form should be displayed
    When I fill all the required fields to add contact
         | 47Billion | Albert | A | Einstien | Miami |FL|
    Then the user should be able to fill all the fields of the contact
    When I click on the Save button to add contact
    When I update the fields of the contact
         | Automation Test | Automation | B | Test | New York |NY| 10002 |
    Then the user should be able to fill all the fields of the contact
    When I click on the Update button to update contact details
    Then the user should see the updated details successfully and they should be displayed in real time in other instances
@irmSubscriptions-part2
  Scenario: As a user, I can delete site contact in Infrastructure location drawer
    When I navigate to the Infrastructure Location Table
    Then the correct and updated list of Infrastructure locations should be displayed
    When I open existing Infrastructure Location
    Then the Infrastructure Location details should be displayed
    When I click on the edit contact button
    Then the Edit Contact drawer should be displayed
    When I click on Add Contact button
    Then the Add Contact form should be displayed
    When I fill all the required fields to add contact
         | 47Billion | Albert | A | Einstien | Miami |FL|
    Then the user should be able to fill all the fields of the contact
    When I click on the Save button to add contact
    When I hover the mouse over the contact details
    Then the Delete option should be displayed on the contact card
    When I click on the delete button of contact card
    Then a confirmation prompt should be displayed for deleting the Contact
    When I click on Yes button of the confirmation dialog
    Then the user should be able to delete the Contact successfully and it should be removed in real time from other instances
@irmSubscriptions-part2
  Scenario: As a user, I can see newly added Inventory in Inventory Profile drawer at real time
    When I navigate to the Inventory Profile table
    Then the correct and updated list of Inventory Profiles should be displayed
    When I click on the plus button to add Inventory
    Then the Add Inventory drawer should be displayed
    When I fill all the required fields to add Inventory
    Then the user should be able to fill all the fields of the Inventory
    When I click on the Save button
    Then the user should be able to add the Inventory Item successfully and it should be displayed in real time in other instances
@irmSubscriptions-part2
  Scenario: As a user, I can see the changes at real time when edit Inventory Item
    When I navigate to the Inventory Profile table
    Then the correct and updated list of Inventory Profiles should be displayed
    When I open the existing Inventory Profile
    Then the Edit Inventory Item drawer should be displayed
    When I update the fields of the Inventory Profile
    Then the user should be able to update all the fields of the Inventory Profile
    When I click on the Save button to Update the Inventory Item
    Then the user should be able to save the changes successfully and they should be displayed in real time in other instances
@irmSubscriptions-part2
  Scenario: As a user, I can see deleted Inventory item is removed from Inventory Profile drawer at real time 
    When I navigate to the Inventory Profile table
    Then the correct and updated list of Inventory Profiles should be displayed
    When I open the existing Inventory Profile
    When I hover the mouse over an Inventory Item
    Then the three dots menu should be displayed against an Inventory Item
    When I click on the three dots menu in Inventory Profile drawer
    Then the Delete option should be displayed
    When I click on the delete button
    Then a confirmation prompt should be displayed for deleting the inventory Item
    When I click on Yes button of the confirmation dialog
    Then the user should be able to delete the Inventory Item successfully, and it should be removed from other instances in real time
@irmSubscriptions-part2
  Scenario: As a user, I can see newly added Equipment in Equipment Profile list drawer at real time
    When I navigate to the Equipment Profile table
    Then the correct and updated list should be displayed in the Equipment Profile table
    When I click on the plus button to add Equipment
    Then the Add Equipment drawer should be opened
    When I select the Equipment Profile type
    Then the user should be able to select the Equipment Profile from the dropdown
    When I fill all the required fields to add Equipment
    Then the user should be able to fill all the fields of add Equipment
    When I click on the Save button
    Then the user should be able to add the Equipment successfully, and it should be displayed in real time in other instances
@irmSubscriptions-part2
  Scenario: As a user, I can see the changes at real time when edit Equipment
    When I navigate to the Equipment Profile table
    Then the correct and updated list should be displayed in the Equipment Profile table
    When I open the existing Equipment
    Then the Edit Equipment drawer should be opened
    When I update the fields of the Equipment
        | Generic Phone |
    Then the user should be able to update all the fields of the Equipment
    When I click on the Save button
    Then the user should be able to update the changes successfully, and the changes should be displayed in real time in other instances
@irmSubscriptions-part2
  Scenario: As a user, I can see deleted Equipment is removed at real time from Equipment Profile drawer
     When I navigate to the Equipment Profile table
    Then the correct and updated list should be displayed in the Equipment Profile table
    When I open the existing Equipment
    When I hover the mouse over an Equipment
    Then the three dots menu option should be visible for against Equipment
    When I click on the three dots menu of the Equipment
    Then the Delete option should be displayed
    When I click on the delete button
    Then a confirmation prompt should be displayed for deleting the inventory Item
    When I click on Yes button of the confirmation dialog
    Then the Equipment should be deleted successfully and removed from the other instance in real time
    
@irmSubscriptions-Part3 @TA-863
  Scenario: As a user, I can see the changes at real time in edit Equipment Assemblies drawer at real time
    When I navigate to the Equipment Assemblies table
    Then the correct and updated list of Equipment Assemblies should be displayed
    When I click on the Edit button of the Equipment Assemblies
    Then the Edit Equipment Assemblies drawer should be displayed
    When I update the required field of the Equipment Assemblies
    Then the user should be able to update all the fields of the equipment assembly
    When I save the details of the Equipment assembly
    Then the user should be able to update the assembly successfully and the changes should be displayed in real-time in other instances
@irmSubscriptions-Part3
  Scenario: As a user, I can see newly Copy Equipment Assembly at real time in Equipment Assemblies table
    When I navigate to the Equipment Assemblies table
    Then the correct and updated list of Equipment Assemblies should be displayed
    When I click on the Copy assembly button
    Then the Copy an Assembly drawer should be displayed
    When I update the fields of the copy assembly
    Then the user should be able to update the fields of the copy assembly
    When I click on the Save button
    Then the user should be able to copy the assembly successfully and it should be displayed in real time in other instances
@irmSubscriptions-Part3 @TA-863
  Scenario: As a user, I can see newly create Purchase Order in Purchase Order Table at real time
    When I navigate to the Purchase Order table
    Then the correct and updated PO list should be displayed in the Purchase Order table
    When I click on the plus button to add Purchase order
    Then the Create PO drawer should be opened
    When I select the Profile item from the dropdown for Purchase order
    Then the correct Profile item list should be displayed
    When I select the Vendor for Purchase order
    Then the correct vendor list should be visible based on the selected Profile item
    When I fill the quantity for Purchase order
    Then the Continue button should be enabled if the quantity is greater than zero
    When I click on the Continue button to create Purchase order
    Then the Purchase Order summary drawer should be opened
    When I click on the Create Purchase order button
    Then Purchase order should get created successfully

@irmSubscriptions-Part3
  Scenario: As a user, I can see updated Purchase Order details at real time when edit Purchase Order
    When I navigate to the Purchase Order table
    Then the correct and updated PO list should be displayed in the Purchase Order table
    When I open an existing Purchase Order
    Then the Purchase Order details should be displayed
    When I update the fields of he Purchase order
    Then the user should be able to edit all the fields of the Purchase order
    When I click on the Save changes button to update Purchase order
    Then the user should be able to update the changes successfully and the changes should be displayed in real time in other instances
@irmSubscriptions-Part3
  Scenario: As a user, I can see status is changed as 'Archived' in Purchase Order Table at real time
    When I navigate to the Purchase Order table
    Then the correct and updated PO list should be displayed in the Purchase Order table
    When I open an existing Purchase Order
    Then the Purchase Order details should be displayed
    When I update the status of the Purchase order to 'COMPLETE'
    Then Purchase order status should get updated successfully
    When I hover the mouse over a Completed or Canceled status Purchase Order
    Then the three dots menu should be displayed against Purchase order
    When I click on the three dots menu against Purchase order
    Then the Archived option should be displayed
    When I click on the Archived option against Purchase order
    Then a confirmation prompt should be displayed for Purchase order status change
    When I click on Yes button of the confirmation dialog
    Then the user should be able to save the changes successfully and the status should be updated in real time in other instances
@irmSubscriptions-Part4
  Scenario: As a user, I can see newly added 'Notes' in Purchase Order drawer at real time
    When I navigate to the Purchase Order table
    Then the correct and updated PO list should be displayed in the Purchase Order table
    When I open an existing Purchase Order
    Then the Purchase Order details should be displayed
    When I fill in the Note field of the Purchase order
    Then the user should be able to fill in the Note field of the Purchase order
    When I click on the Save changes button to update Purchase order
    Then the user should be able to add notes successfully and they should be displayed in real time in other instances
@irmSubscriptions-Part4
  Scenario: As a user, I can see newly added ' Invoice ID' in Purchase Order drawer at real time
    When I navigate to the Purchase Order table
    Then the correct and updated PO list should be displayed in the Purchase Order table
    When I open an existing Purchase Order
    Then the Purchase Order details should be displayed
    When I fill in the Invoice ID of the Purchase order
    Then the user should be able to fill in the Invoice ID field
    When I click on the Save changes button to update Purchase order
    Then the user should be able to add the Invoice ID successfully and the changes should be displayed in real time in other instances
@irmSubscriptions-Part4
  Scenario: As a user, I can see updated status of Purchase Order at real time
    When I navigate to the Purchase Order table
    Then the correct and updated PO list should be displayed in the Purchase Order table
    When I open an existing Purchase Order
    Then the Purchase Order details should be displayed
    When I update the status of the Purchase order to 'COMPLETE'
    Then the user should be able to update the status successfully and the changes should be displayed in real time in other instances
@irmSubscriptions-Part4
  Scenario: As a user, I can see newly added Inventory Profile at real time in Inventory Profile Table
    When I navigate to the Inventory Profile Setting
    Then the user should be able to navigate to the Inventory Profile setting successfully
    When I click on the plus Inventory Profile button
    Then the user should be navigated to the Add Inventory Profile drawer
    When I fill in all the fields of the inventory profile
    Then the user should be able to fill in all the fields of the inventory
    When I click on the Add button to add new inventory profile
    Then the user should be able to add the Inventory Profile successfully and it should be displayed in the Inventory Profile Table in real time
@irmSubscriptions-Part4
  Scenario: As a user, I can see the Inventory Profile changes in the Inventory Profile Table at real time
    When I navigate to the Inventory Profile Setting
    Then the user should be able to navigate to the Inventory Profile setting successfully
    When I open an existing inventory profile
    Then the correct and updated details of the Inventory Profile should be displayed
    When I update the fields of the inventory profile
    Then the user should be able to update any field of the inventory profile
    When I update the inventory profile
    Then the user should be able to update the Inventory Profile successfully and the updates should be displayed in the Inventory Profile Table in real time
@irmSubscriptions-Part4
  Scenario: As a user, I can see deleted Inventory Profile is removed from Inventory Profile setting and Inventory Profile Table at real time
    When I navigate to the Inventory Profile Setting
    Then the user should be able to navigate to the Inventory Profile setting successfully
    When I open an existing inventory profile
    Then the correct and updated details of the Inventory Profile should be displayed
    When I click on the Delete profile button
    Then a confirmation prompt should be displayed for delete inventory profile displayed
    When I click on Yes button of the confirmation dialog
    Then the user should be able to delete the Inventory Profile successfully and the deleted Inventory Profile should be removed from both the Inventory Profile setting and the Inventory Profile Table in real time
