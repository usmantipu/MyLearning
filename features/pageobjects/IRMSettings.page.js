const utils = require('../support/utils');
"use strict";
var Page = require('./page')

class IRMSettings extends Page {
    
    get btnEquipment(){return browser.$('button=Equipment');}
    get liInfrastructureProfiles(){return browser.$('[vispdata-testid="view-infrastructure-profile"]');}
    get btnInfrastructureProfiles(){return browser.$('[vispdata-testid="view-add-infrastructure-profile-form"]');}
    get btnAddInfrastructureProfile(){return browser.$('[vispdata-testid="add-infrastructure-profile"]');}
    get btnUpdateInfrastructureProfile(){return browser.$('[vispdata-testid="update-infrastructure-profile"]');}
    get inputName(){return browser.$('[name="name"]');}
    get inputSummary(){return browser.$('[name="summary"]');}
    get divType(){return browser.$('[name="type"]');}
    get liWireless(){return browser.$('li=Wireless');}
    get inputDescription(){return browser.$('[name="description"]');}
    get btnAdd(){return browser.$('[vispdata-testid="add-inventory-profile"]');}
    get alertMsg(){return browser.$('.MuiAlert-message');}
    get existingInfrastructureProfile(){return browser.$('nav').$('div');}
    get btnUpdate(){return browser.$('button=Update');}
    get liInventoryProfiles(){return browser.$('[vispdata-testid="view-inventory-profile"]');}
    get btnInventoryProfiles(){return browser.$('[vispdata-testid="view-add-inventory-profile-form"]');}
    get btnUpdateInventoryProfiles(){return browser.$('[vispdata-testid="update-inventory-profile"]');}
    get inputModel(){return browser.$('[name="model"]');}
    get divManufacturer(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div/div/div/div');}
    get inputSku(){return browser.$('[name="sku"]');}
        existingInventoryProfile(param){return browser.$('nav').$('div=' + param);}
    get liVendors(){return browser.$('[vispdata-testid="view-vendors"]');}
    get btnCreateVendor(){return browser.$('button=Create Vendor');}
    get inputFirstName(){return browser.$('[name="contact.first"]');}
    get inputLastName(){return browser.$('[name="contact.last"]');}
    get inputCompany(){return browser.$('[name="contact.company"]');}
    get inputAddress(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[2]/div[2]/div/div[2]/div[1]/div/div[3]/div[8]/div/div/div/div[1]').$('input');}
    get inputEmail(){return browser.$('[name="contact.email_addresses.0.email"]');}
    get emailType(){return browser.$('[name="contact.email_addresses.0.type"]');}
    get inputPhoneNumber(){return browser.$('[name="contact.phone_numbers.0.number"]');}
    get phoneNumberType(){return browser.$('[name="contact.phone_numbers.0.type"]');}
    get headerInventoryProfile(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[2]/div[2]/div/div[2]/div[1]/h6');}
    get btnVendor(){return browser.$('[vispdata-testid="view-vendor-tab"]');}
    get btnAddVendor(){return browser.$('[vispdata-testid="assign-vendor-to-profile-form"]');}
    get venderList(){return browser.$$('.popover-menu-item');}
    get btnSaveVendor(){return browser.$('[vispdata-testid="assign-vendor-to-profile"]');}
    get btnCreateNewVendor(){return browser.$('[vispdata-testid="create-vendor"]');}
    get btnEquipmentProfiles(){return browser.$('[vispdata-testid="view-equipment-profile-tab"]');}
    get btnCreateEquipmentProfile(){return browser.$('[vispdata-testid="create-equipment-profile-form"]');}
    get btnAddEquipmentProfile(){return browser.$('[vispdata-testid="create-equipment-profile"]');}
    get btnUpdateEquipmentProfile(){return browser.$('[vispdata-testid="update-equipment-profile"]');}
    get deviceType(){return browser.$('#mui-component-select-vnms_dev_type');}
        existingEquipmentProfile(param){return browser.$('p=' + param);}
    get btnCloseForm(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[2]/div[3]/div/div[1]/div/div[2]/button');}
    get liMapping(){return browser.$('[vispdata-testid="view-mapping"]');}
    get hearderMapping(){return browser.$('h6=Mapping');}
    get generalUnits(){return browser.$('#mui-component-select-system_of_measurement');}
    get addressLookupApi(){return browser.$('.MuiPaper-root*=Address Lookup API').$('[name="address_lookup_api"]');}
    get locationPredictionLocation(){return browser.$('[name="location_bias"]');}
    get locationPredictionRadius(){return browser.$('[name="radius_bias"]');}
    get btnUpdateGeneral(){return browser.$('[vispdata-testid="update-general-settings"]');}
    get btnlocaltionPrediction(){return browser.$('[vispdata-testid="update-location-prediction"]');}
    get btnlUpdateAddressLookup(){return browser.$('[vispdata-testid="update-address-lookup"]');}
    get btnClutterNewProfile(){return browser.$('[vispdata-testid="create-clutter-profile-form"]');}
    get btnCreateClutterProfile(){return browser.$('[vispdata-testid="create-clutter-profile"]');}
    get btnlUpdateClusterProfile(){return browser.$('[vispdata-testid="update-clutter-profile"]');}
    get inputClutterNewProfileName(){return browser.$('[name="clutter_profile_name"]');}
    get navClutter(){return browser.$$('nav');}
        existingClutterProfile(param){return this.navClutter[0].$('div=' + param);}
    get inputQuickCheckClutterProfile(){return browser.$('[name="quick_check_clutter_profile"]');}
    get inputQuickCheckElevation(){return browser.$('[name="quick_check_elevation"]');}
    get btnlUpdateQuickCheck(){return browser.$('[vispdata-testid="update-quick-check"]');}
    get btnNewTheme(){return browser.$('[vispdata-testid="create-mapping-theme-form"]');}
    get btnSaveTheme(){return browser.$('[vispdata-testid="save-mapping-theme"]');}
    get btnlUpdateTheme(){return browser.$('[vispdata-testid="update-mapping-theme"]');}
    get inputMappingThemeObject(){return browser.$('[name="map_object"]');}
    get liAP(){return browser.$('li=AP');}
    get inputColumns(){return browser.$('[name="columns"]');}
        existingThemeProfile(param){return this.navClutter[1].$('div=' + param);}
    get liEnum(){return browser.$('[vispdata-testid="view-enum"]');}
    get btnAddEnum(){return browser.$('[vispdata-testid="create-enum-form"]');}
    get btnCreateEnum(){return browser.$('[vispdata-testid="create-enum"]');}
    get enumValue(){return browser.$('#enum-0');}
    get btnUpdateEnum(){return browser.$('[vispdata-testid="update-enum"]');}
}
module.exports = new IRMSettings();