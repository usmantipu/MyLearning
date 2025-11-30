Feature: IRM Settings

	Background:
        Given I open Visp Web to Access IRM
        And   I login with username and password to use IRM
              | jcabangonautomation | Test@1234 |
		And I navigate to the settings of the application
	  @smokeChecklist-IRM-settings
  Scenario: As a User, I can Add Infrastructure Profile
    When I navigate to the Infrastructure Profile Settings page
    Then I should be on the Infrastructure Profile Settings page
    When I add a new Infrastructure Profile
    Then I should see the Infrastructure Profile get added successfully
    @smokeChecklist-IRM-settings
  Scenario: As a User, I can Update Infrastructure Profile
    When I navigate to the Infrastructure Profile Settings page
    Then I should be on the Infrastructure Profile Settings page
    When I have selected an existing Infrastructure Profile
    And I update the Infrastructure Profile details
    Then I should see the Infrastructure Profile get updated successfully
    @smokeChecklist-IRM-settings
  Scenario: As a User, I can Add Inventory Profile
    When I navigate to the Inventory Profile Settings page
    Then I should be on the Inventory Profile Settings page
    When I add a new Inventory Profile
    Then I should see the Inventory Profile get added successfully
    @smokeChecklist-IRM-settings
  Scenario: As a User, I can Update Inventory Profile
    When I navigate to the Inventory Profile Settings page
    Then I should be on the Inventory Profile Settings page
    When I have selected an existing Inventory Profile
    And I update the Inventory Profile details
    Then I should see the Inventory Profile get updated successfully
    @smokeChecklist-IRM-settings
  Scenario: As a User, I can Create and Add Vendor Contact
    When I navigate to the Vendor management page
    Then I should be on the Vendor management page
    When I create a new Vendor
    And I add a Vendor Contact
    Then I should see the Vendor and Vendor Contact get added successfully
    @smokeChecklist-IRM-settings
  Scenario: As a User, I can Assign Vendor to the Inventory Profile
    When I navigate to the Inventory Profile page
    Then I should be on the Inventory Profile page
    When I assign a Vendor to the Inventory Profile
    Then I should see the Vendor get assigned to the Inventory Profile successfully
    @smokeChecklist-IRM-settings
  Scenario: As a User, I can Add Equipment Profile
    When I navigate to the Equipment Profile page
    Then I should be on the Equipment Profile page
    When I add a new Equipment Profile
    Then I should see the Equipment Profile get added successfully
    @smokeChecklist-IRM-settings
  Scenario: As a User, I can Update Equipment Profile
    When I navigate to the Equipment Profile page
    Then I should be on the Equipment Profile page
    When I have selected an existing Equipment Profile
    And I update the Equipment Profile details
    Then I should see the Equipment Profile get updated successfully
    @smokeChecklist-IRM-settings
  Scenario: As a User, I can Navigate to Mapping and Update General Settings
    When I navigate to the Mapping section
    Then I should be on the Mapping section
    When I update the General Settings
    Then I should see the General Settings get updated successfully
    @smokeChecklist-IRM-settings
  Scenario: As a User, I can Update Address Lookup API and Location Prediction
    When I navigate to the API settings page
    Then I should be on the API settings page
    When I update the Address Lookup API
    And I update the Location Prediction settings
    Then I should see the Address Lookup API and Location Prediction settings get updated successfully
    @smokeChecklist-IRM-settings
  Scenario: As a User, I can Add New Clutter Profile
    When I navigate to the Clutter Profile page
    Then I should be on the Clutter Profile page
    When I add a new Clutter Profile
    Then I should see the Clutter Profile get added successfully
    @smokeChecklist-IRM-settings
  Scenario: As a User, I can Update Clutter Profile
    When I navigate to the Clutter Profile page
    Then I should be on the Clutter Profile page
    When I have selected an existing Clutter Profile
    And I update the Clutter Profile details
    Then I should see the Clutter Profile get updated successfully
    @smokeChecklist-IRM-settings
  Scenario: As a User, I can Update Quick Check Settings
    When I navigate to the Quick Check settings page
    Then I should be on the Quick Check settings page
    And I update the Quick Check settings
    Then I should see the Quick Check settings get updated successfully
    @smokeChecklist-IRM-settings
  Scenario: As a User, I can Add New Theme
    When I navigate to the Theme settings page
    Then I should be on the Theme settings page
    When I add a new Theme
    Then I should see the Theme get added successfully
    @smokeChecklist-IRM-settings
  Scenario: As a User, I can Update Theme
    When I navigate to the Theme settings page
    Then I should be on the Theme settings page
    When I have selected an existing Theme
    And I update the Theme details
    Then I should see the Theme get updated successfully
    @smokeChecklist-IRM-settings
  Scenario: As a User, I can Add Enum Settings
    When I navigate to the Enum settings page
    Then I should be on the Enum settings page
    When I add a new Enum
    Then I should see the Enum get added successfully
    @smokeChecklist-IRM-settings
  Scenario: As a User, I can Update Enum Settings
    When I navigate to the Enum settings page
    Then I should be on the Enum settings page
    When I have selected an existing Enum
    And I update the Enum details
    Then I should see the Enum get updated successfully
