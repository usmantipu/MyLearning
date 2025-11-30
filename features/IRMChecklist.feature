Feature: IRM Checklist

	Background:
        Given I open Visp Web to Access IRM
        And   I login with username and password to use IRM
              | jcabangonautomation | Test@1234 |

@smokeChecklist-IRM-checklist-part-1
  Scenario: As a user, I can Add Infrastructure Location
    When I navigate to IRM after login
    Then I should be on the IRM Page
    Then I can see the Infrastructure Location List
    When I add an Infrastructure Location
    Then I can see infrastructure location added successfully
@smokeChecklist-IRM-checklist-part-1
  Scenario: As a user, I can Edit Infrastructure Location
    When I navigate to IRM after login
    Then I should be on the IRM Page
    Then I can see the Infrastructure Location List
    When I select an Infrastructure Location
    When I edit an Infrastructure Location
    Then I can see infrastructure location edited successfully
@smokeChecklist-IRM-checklist-part-1
  Scenario: As a user, I can Add Sub-Location
    When I navigate to IRM after login
    Then I should be on the IRM Page
    Then I can see the Infrastructure Location List
    When I select an Infrastructure Location
    When I add a Sub-Location
    Then I can see Sub-Location added successfully
  @smokeChecklist-IRM-checklist-part-1
  Scenario: As a user, I can Edit Sub-Location
    When I navigate to IRM after login
    Then I should be on the IRM Page
    Then I can see the Infrastructure Location List
    When I select an Infrastructure Location
    When I select a sub-Location
    When I edit a Sub-Location
    Then I can see Sub-Location edited successfully
@smokeChecklist-IRM-checklist-part-1
  Scenario: As a user, I can Add Site Contacts
    When I navigate to IRM after login
    Then I should be on the IRM Page
    Then I can see the Infrastructure Location List
    When I select an Infrastructure Location
    When I add Site Contacts
    Then I can see Site Contacts added successfully
@smokeChecklist-IRM-checklist-part-1
  Scenario: As a user, I can Edit Site Contacts
    When I navigate to IRM after login
    Then I should be on the IRM Page
    Then I can see the Infrastructure Location List
    When I select an Infrastructure Location
    When I select the Site Contacts
    When I edit the Site Contacts
    Then I can see Site Contacts edited successfully
@smokeChecklist-IRM-checklist-part-1
  Scenario: As a user, I can Delete Site Contacts
    When I navigate to IRM after login
    Then I should be on the IRM Page
    Then I can see the Infrastructure Location List
    When I select an Infrastructure Location
    When I select the Site Contacts
    When I delete the Site Contacts
    Then I can see Site Contacts deleted successfully
@smokeChecklist-IRM-checklist-part-1
  Scenario: As a user, I can Delete Infrastructure Location
    When I navigate to IRM after login
    Then I should be on the IRM Page
    Then I can see the Infrastructure Location List
    When I select an Infrastructure Location
    When I delete an Infrastructure Location
    Then I can see Infrastructure Location deleted successfully
@smokeChecklist-IRM-checklist-part-1
  Scenario: As a user, I can Delete Sub-Location
    When I navigate to IRM after login
    Then I should be on the IRM Page
    Then I can see the Infrastructure Location List
    When I select an Infrastructure Location
    When I select a sub-Location
    When I delete a Sub-Location
    Then I can see Sub-Location deleted successfully
@smokeChecklist-IRM-checklist-part-1
  Scenario: As a user, I can Add Inventory Item
    When I navigate to IRM after login
    Then I should be on the IRM Page
    Then I can see the Inventory List Profiles
    When I add an Inventory Item
    Then I can see Inventory Item added successfully
  @smokeChecklist-IRM-checklist-part-1
  Scenario: As a user, I can Edit Inventory Item
    When I navigate to IRM after login
    Then I should be on the IRM Page
    Then I can see the Inventory List Profiles
    When I select Inventory Profile
    When I edit an Inventory Item
    Then I can see Inventory Item edited successfully
  @smokeChecklist-IRM-checklist-part-1
  Scenario: As a user, I can Create RMA for Inventory Item
    When I navigate to IRM after login
    Then I should be on the IRM Page
    Then I can see the Inventory List Profiles
    When I select Inventory Profile
    When I create an RMA for an Inventory Item
    Then I can see RMA for the Inventory Item created successfully
  @smokeChecklist-IRM-checklist-part-1
  Scenario: As a user, I can View RMA History
    When I navigate to IRM after login
    Then I should be on the IRM Page
    Then I can see the Inventory List Profiles
    When I select Inventory Profile
    When I select the RMA History from Activity Log
    Then I can see the RMA History from Activity Log
  @smokeChecklist-IRM-checklist-part-2
  Scenario: As a user, I can Update RMA for Inventory Item
    When I navigate to IRM after login
    Then I should be on the IRM Page
    Then I can see the Inventory List Profiles
    When I select Inventory Profile
    When I select the RMA
    When I update the RMA for an Inventory Item
    Then I can see RMA for the Inventory Item updated successfully
  @smokeChecklist-IRM-checklist-part-2
  Scenario: As a user, I can Delete Inventory Item
    When I navigate to IRM after login
    Then I should be on the IRM Page
    Then I can see the Inventory List Profiles
    When I select Inventory Profile
    When I delete an Inventory Item
    Then I can see the Inventory Item deleted successfully
  @smokeChecklist-IRM-checklist-part-2
  Scenario: As a user, I can Add Equipment
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Equipment List Profiles
    Then I should be able to view the Equipment List Profiles
    When I add Equipment
    Then I can see Equipment added successfully
  @smokeChecklist-IRM-checklist-part-2
  Scenario: As a user, I can Edit Equipment
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Equipment List Profiles
    Then I should be able to view the Equipment List Profiles
    When I select Equipment
    When I edit Equipment
    Then I can see Equipment edited successfully
  @smokeChecklist-IRM-checklist-part-2
  Scenario: As a user, I can Add Child using Existing Equipment
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Equipment List Profiles
    Then I should be able to view the Equipment List Profiles
    When I select Equipment
    When I add a Child using Existing Equipment
    Then I should be able to add the Child using Existing Equipment
  @smokeChecklist-IRM-checklist-part-2
  Scenario: As a user, I can Delete Equipment Item
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Equipment List Profiles
    Then I should be able to view the Equipment List Profiles
    When I select Equipment
    When I delete an Equipment Item
    Then I can see Equipment deleted successfully
  @smokeChecklist-IRM-checklist-part-2
  Scenario: As a user, I can Edit Assembly
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Equipment Assemblies
    Then I should be able to view Equipment Assemblies
    When I click on the Copy assembly button
    When I edit an Assembly
    Then I can see Assembly edited successfully
  @smokeChecklist-IRM-checklist-part-2
  Scenario: As a user, I can Copy Assembly
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Equipment Assemblies
    Then I should be able to view Equipment Assemblies
    When I click on the Copy assembly button
    Then I can see Assembly copied successfully
  @smokeChecklist-IRM-checklist-part-2
  Scenario: As a user, I can Create Purchase Order
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Purchase Order
    When I create a Purchase Order
    Then I can see Purchase Order created successfully
  @smokeChecklist-IRM-checklist-part-2
  Scenario: As a user, I can Edit Purchase Order
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Purchase Order
    When I select the Purchase Order
    When I edit a Purchase Order
    Then I can see Purchase Order edited successfully
  @smokeChecklist-IRM-checklist-part-2
  Scenario: As a user, I can Receive Inventory Item from Purchase Order
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Purchase Order
    When I select the Ordered Purchase Order
    When I receive an Inventory Item from the Purchase Order
    Then I can see Inventory Item from the Purchase Order received successfully
  @smokeChecklist-IRM-checklist-part-2
  Scenario: As a user, I can Archive Purchase Order
    When I navigate to IRM after login
    Then I should be on the IRM Page
    When I nevigate to the Purchase Order
    When I select the completed Purchase Order
    When I archive a Purchase Order
    Then I can see Purchase Order archived successfully
