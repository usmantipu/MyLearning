const {Given, When, Then} = require("@cucumber/cucumber");
const irmSettingsActions = require('../support/IRMSettingsActions');
const Utils = require('../support/utils');

  
  Given(/^I navigate to the settings of the application$/, function() {
    irmSettingsActions.openSettings();
  });

  When(/^I navigate to the Infrastructure Profile Settings page$/, function() {
    irmSettingsActions.openInfrastructureProfile();
  });
  When(/^I add a new Infrastructure Profile$/, function() {
    irmSettingsActions.addNewInfrastructureProfile();
  });
  When(/^I have selected an existing Infrastructure Profile$/, function() {
    irmSettingsActions.selectExistingInfrastructureProfile();
  });
  When(/^I update the Infrastructure Profile details$/, function() {
    irmSettingsActions.updateInfrastructireProfile();
  });
  When(/^I navigate to the Inventory Profile Settings page$/, function() {
    irmSettingsActions.openInventoryProfile();
  });
  When(/^I add a new Inventory Profile$/, function() {
    irmSettingsActions.addNewInventoryProfile();
  });
  When(/^I have selected an existing Inventory Profile$/, function() {
    irmSettingsActions.selectExistingInventoryProfile();
  });
  When(/^I update the Inventory Profile details$/, function() {
    irmSettingsActions.updateInventoryProfile();
  });
  When(/^I navigate to the Vendor management page$/, function() {
    irmSettingsActions.openVendors();
  });
  When(/^I create a new Vendor$/, function() {
    irmSettingsActions.createNewVender();
  });
  When(/^I add a Vendor Contact$/, function() {
    irmSettingsActions.addVenderContact();
  });
  When(/^I navigate to the Inventory Profile page$/, function() {
    irmSettingsActions.nevigateToInventoryProfilePage();
  });
  When(/^I assign a Vendor to the Inventory Profile$/, function() {
    irmSettingsActions.assignVendorToInventoryProfile();
  });
  When(/^I navigate to the Equipment Profile page$/, function() {
    irmSettingsActions.nevigateToEquipmentProfilePage();
  });
  When(/^I add a new Equipment Profile$/, function() {
    irmSettingsActions.addNewEquipmentProfile();
  });
  When(/^I have selected an existing Equipment Profile$/, function() {
    irmSettingsActions.selectExistingEquipmentProfile();
  });
  When(/^I update the Equipment Profile details$/, function() {
    irmSettingsActions.updateEquipmentProfile();
  });
  When(/^I navigate to the Mapping section$/, function() {
    irmSettingsActions.openMappingSection();
  });
  When(/^I update the General Settings$/, function() {
    irmSettingsActions.updateGeneralSettings();
  });
  When(/^I navigate to the API settings page$/, function() {
    irmSettingsActions.openMappingSection();
  });
  When(/^I update the Address Lookup API$/, function() {
    irmSettingsActions.updateAddressLookupAPI();
  });
  When(/^I update the Location Prediction settings$/, function() {
    irmSettingsActions.updateLocationPredictionSettings();
  });
  When(/^I navigate to the Clutter Profile page$/, function() {
    irmSettingsActions.openMappingSection();
  });
  When(/^I add a new Clutter Profile$/, function() {
    irmSettingsActions.addNewClutterProfile();
  });
  When(/^I have selected an existing Clutter Profile$/, function() {
    irmSettingsActions.selectExistingClutterProfile();
  });
  When(/^I update the Clutter Profile details$/, function() {
    irmSettingsActions.updateClutterProfile();
  });
  When(/^I navigate to the Quick Check settings page$/, function() {
    irmSettingsActions.openMappingSection();
  });
  When(/^I navigate to the Theme settings page$/, function() {
    irmSettingsActions.openMappingSection();
  });
  When(/^I add a new Theme$/, function() {
    irmSettingsActions.addNewTheme();
  });
  When(/^I have selected an existing Theme$/, function() {
    irmSettingsActions.selectExistingThemeProfile();
  });
  When(/^I update the Theme details$/, function() {
    irmSettingsActions.updateThemeProfile();
  });
  When(/^I navigate to the Enum settings page$/, function() {
    irmSettingsActions.openEnumSettings();
  });
  When(/^I add a new Enum$/, function() {
    irmSettingsActions.addNewEnum();
  });
  When(/^I have selected an existing Enum$/, function() {
    irmSettingsActions.selectExistingEnum();
  });
  When(/^I update the Enum details$/, function() {
    irmSettingsActions.updateEnum();
  });


  Then(/^I should be on the Infrastructure Profile Settings page$/, function() {
    irmSettingsActions.verifyInfrastructureProfilePage();
  });
  Then(/^I should be on the Inventory Profile Settings page$/, function() {
    irmSettingsActions.verifyInventoryProfilePage();
  });
  Then(/^I should be on the Vendor management page$/, function() {
    irmSettingsActions.verifyVendersPage();
  });
  Then(/^I should see the Infrastructure Profile get added successfully$/, function() {
    irmSettingsActions.verifyAlertMsg('Infrastructure Profile');
    Utils.clearLocalStorage();
  });
  Then(/^I should see the Infrastructure Profile get updated successfully$/, function() {
    irmSettingsActions.verifyAlertMsg('Updated Infrastructure Profile');
    Utils.clearLocalStorage();
  });
  Then(/^I should see the Inventory Profile get added successfully$/, function() {
    irmSettingsActions.verifyAlertMsg('new Inventory Profile');
    Utils.clearLocalStorage();
  });
  Then(/^I should see the Inventory Profile get updated successfully$/, function() {
    irmSettingsActions.verifyAlertMsg('Updated Inventory Profile');
    Utils.clearLocalStorage();
  });
  Then(/^I should see the Vendor and Vendor Contact get added successfully$/, function() {
    irmSettingsActions.verifyAlertMsg('new Vendor and Contact');
    Utils.clearLocalStorage();
  });
  Then(/^I should be on the Inventory Profile page$/, function() {
    irmSettingsActions.verifyInventoryProfileHeader();
  });
  Then(/^I should see the Vendor get assigned to the Inventory Profile successfully$/, function() {
    irmSettingsActions.verifyAlertMsg("Updated inventory profile's vendor");
    Utils.clearLocalStorage();
  });
  Then(/^I should be on the Equipment Profile page$/, function() {
    irmSettingsActions.verifyEquipmentProfilePage();
  });
  Then(/^I should see the Equipment Profile get added successfully$/, function() {
    irmSettingsActions.verifyAlertMsg("new Equipment Profile");
    Utils.clearLocalStorage();
  });
  Then(/^I should see the Equipment Profile get updated successfully$/, function() {
    irmSettingsActions.verifyAlertMsg("Updated Equipment Profile");
    Utils.clearLocalStorage();
  });
  Then(/^I should be on the Mapping section$/, function() {
    irmSettingsActions.verifyMappingSection();
  });
  Then(/^I should see the General Settings get updated successfully$/, function() {
    irmSettingsActions.verifyAlertMsg("Updated General Map Settings");
    Utils.clearLocalStorage();
  });
  Then(/^I should be on the API settings page$/, function() {
    irmSettingsActions.verifyMappingSection();
  });
  Then(/^I should see the Address Lookup API and Location Prediction settings get updated successfully$/, function() {
    irmSettingsActions.verifyAddressLookupAPI_LocationPredictionSettings();
  });
  Then(/^I should be on the Clutter Profile page$/, function() {
    irmSettingsActions.verifyMappingSection();
  });
  Then(/^I should see the Clutter Profile get added successfully$/, function() {
    irmSettingsActions.verifyAlertMsg("Added Clutter Profile");
    Utils.clearLocalStorage();
  });
  Then(/^I should see the Clutter Profile get updated successfully$/, function() {
    irmSettingsActions.verifyAlertMsg("Updated Clutter Profile");
    Utils.clearLocalStorage();
  });
  Then(/^I should be on the Quick Check settings page$/, function() {
    irmSettingsActions.verifyMappingSection();
  });
  Then(/^I update the Quick Check settings$/, function() {
    irmSettingsActions.updateQuickCheckSettings();
  });
  Then(/^I should see the Quick Check settings get updated successfully$/, function() {
    irmSettingsActions.verifyAlertMsg("Quick Check Settings");
    Utils.clearLocalStorage();
  });
  Then(/^I should be on the Theme settings page$/, function() {
    irmSettingsActions.verifyMappingSection();
  });
  Then(/^I should see the Theme get added successfully$/, function() {
    irmSettingsActions.verifyAlertMsg("Mapping theme profile");
    Utils.clearLocalStorage();
  });
  Then(/^I should see the Theme get updated successfully$/, function() {
    irmSettingsActions.verifyAlertMsg("Mapping theme profile successfully updated");
    Utils.clearLocalStorage();
  });
  Then(/^I should be on the Enum settings page$/, function() {
    irmSettingsActions.verifyEnumSection();
    Utils.clearLocalStorage();
  });
  Then(/^I should see the Enum get added successfully$/, function() {
    irmSettingsActions.verifyAlertMsg("Successfully created a customized enum.");
    Utils.clearLocalStorage();
  });
  Then(/^I should see the Enum get updated successfully$/, function() {
    irmSettingsActions.verifyAlertMsg("Successfully updated a customized enum.");
    Utils.clearLocalStorage();
  });
