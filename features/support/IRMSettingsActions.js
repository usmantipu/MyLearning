var irmSettings = require('../pageobjects/IRMSettings.page');
var infraLocationsRemoveProfile = require('../pageobjects/infraLocationsRemoveProfile.page');
var expect = require('chai').expect;

class IRMSettingsActions {

    constructor() { 
        this.upArrowKey = ['\ue013']; // arrow up
        this.downArrowKey = ['\ue015'];// arrow down
		this.enterKey = ['\ue007'];// enter
		this.backspaceKey = ['\uE003'];// backspace
        this.clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
        this.pageTitle = '';
        this.addressLookupAPI = '';
        this.recentlyCreated = '';
    }

    openSettings() {
        infraLocationsRemoveProfile.btnAppIcon.waitForDisplayed();
        infraLocationsRemoveProfile.btnAppIcon.click();
        irmSettings.btnEquipment.waitForDisplayed();
        irmSettings.btnEquipment.click();
    }
    openInfrastructureProfile(){
        irmSettings.liInfrastructureProfiles.waitForDisplayed();
        irmSettings.liInfrastructureProfiles.click();
    }
    
    openInventoryProfile(){
        irmSettings.liInventoryProfiles.waitForDisplayed();
        irmSettings.liInventoryProfiles.click();
    }
    openVendors(){
        irmSettings.liVendors.waitForDisplayed();
        irmSettings.liVendors.waitForClickable();
        irmSettings.liVendors.click();
    }
    
    verifyInfrastructureProfilePage(){
        irmSettings.btnInfrastructureProfiles.waitForDisplayed();
        expect(irmSettings.btnInfrastructureProfiles.isExisting()).to.be.true;
    }
    verifyInventoryProfilePage(){
        irmSettings.btnInventoryProfiles.waitForDisplayed();
        expect(irmSettings.btnInventoryProfiles.isExisting()).to.be.true;
    }
    verifyVendersPage(){
        irmSettings.btnCreateVendor.waitForDisplayed();
        expect(irmSettings.btnCreateVendor.isExisting()).to.be.true;
    }
    addNewInfrastructureProfile(){
        irmSettings.btnInfrastructureProfiles.click();
        irmSettings.inputName.waitForDisplayed();
        this.recentlyCreated = "Testing " + this.randomStringGenerator();
        irmSettings.inputName.setValue(this.recentlyCreated);
        irmSettings.inputSummary.setValue("This is for testing");
        irmSettings.divType.click();
        irmSettings.liWireless.waitForDisplayed();
        irmSettings.liWireless.click();
        irmSettings.inputDescription.setValue("Testing Testing 123");
        irmSettings.btnAddInfrastructureProfile.click();
    }
    addNewInventoryProfile(){
        irmSettings.btnInventoryProfiles.click();
        irmSettings.inputModel.waitForDisplayed();
        this.recentlyCreated = "Testing Model " + this.randomStringGenerator();
        irmSettings.inputModel.setValue(this.recentlyCreated);
        browser.pause(2000);
        irmSettings.divManufacturer.click();
        browser.pause(2000);
        browser.keys(this.downArrowKey);
        browser.keys(this.downArrowKey);
        browser.keys(this.enterKey);
        irmSettings.inputSku.setValue("Testing SKU " +this.randomStringGenerator());
        irmSettings.inputDescription.setValue("This is Testing Profile");
        irmSettings.btnAdd.click();
    }
    createNewVender(){
        irmSettings.btnCreateVendor.click();
        irmSettings.inputName.waitForDisplayed();
        irmSettings.inputName.setValue("Testing");
        irmSettings.inputFirstName.setValue("FN Testing");
        irmSettings.inputLastName.setValue("LN Testing");
        irmSettings.inputCompany.setValue(" vendor company");
        irmSettings.inputAddress.setValue('9450 Southwest Gemini Drive');
        browser.pause(5000);
        browser.keys(this.downArrowKey);
        browser.keys(this.enterKey);
        browser.pause(5000);
    }
    addVenderContact(){
        irmSettings.inputEmail.setValue("testingman@testExample.com");
        irmSettings.emailType.click();
        // browser.keys(this.downArrowKey);
        browser.keys(this.enterKey);
        irmSettings.inputPhoneNumber.setValue("3256669999");
        irmSettings.phoneNumberType.click();
        browser.keys(this.downArrowKey);
        browser.keys(this.downArrowKey);
        browser.keys(this.enterKey);
        irmSettings.btnCreateNewVendor.click();
    }
    nevigateToInventoryProfilePage(){        
        this.openInventoryProfile();
        this.selectExistingInventoryProfile();
    }
    nevigateToEquipmentProfilePage(){        
        this.nevigateToInventoryProfilePage();
        irmSettings.btnEquipmentProfiles.waitForDisplayed();
        irmSettings.btnEquipmentProfiles.click();
    }

    verifyEquipmentProfilePage(){
        irmSettings.btnCreateEquipmentProfile.waitForDisplayed();
        expect(irmSettings.btnCreateEquipmentProfile.isExisting()).to.be.true;
    }
    verifyMappingSection(){
        irmSettings.hearderMapping.waitForDisplayed();
        expect(irmSettings.hearderMapping.isExisting()).to.be.true;
    }

    addNewEquipmentProfile(){
        irmSettings.btnCreateEquipmentProfile.click();
        irmSettings.divType.waitForDisplayed();
        irmSettings.divType.click();
        browser.keys(this.downArrowKey);
        browser.keys(this.enterKey);
        this.recentlyCreated = "Testing Equipment " + this.randomStringGenerator();
        irmSettings.inputDescription.setValue(this.recentlyCreated);
        irmSettings.btnAddEquipmentProfile.click();
    }

    verifyAlertMsg(msg){
        msg = msg.replace(/['"]+/g, '');
        console.log('param message is ' +msg);
        irmSettings.alertMsg.waitForDisplayed();
        let successMessage = irmSettings.alertMsg.getText();
        console.log('alert sucess message is ' +successMessage);
        //msg = msg + ' successfully';
        console.log('updated param message is ' +msg);
        var normalize = str => str.replace(/[^\w\s]/gi, '').toLowerCase().trim();
        expect(normalize(successMessage)).to.include(normalize(msg));
        //expect(successMessage).to.include(msg);
    }
    verifyInventoryProfileHeader(){
        irmSettings.headerInventoryProfile.waitForDisplayed();
        expect(irmSettings.headerInventoryProfile.getText()).to.eql(this.recentlyCreated);
    }

    assignVendorToInventoryProfile(){
        irmSettings.btnVendor.waitForDisplayed();
        irmSettings.btnVendor.click();
        irmSettings.btnAddVendor.waitForDisplayed();
        irmSettings.btnAddVendor.click();
        irmSettings.venderList[irmSettings.venderList.length-1].click();
        browser.keys(this.enterKey);
        irmSettings.btnSaveVendor.click();
    }

    selectExistingInfrastructureProfile(){
        this.addNewInfrastructureProfile();
        this.verifyAlertMsg('Infrastructure Profile');
        irmSettings.existingInfrastructureProfile.waitForDisplayed();
        irmSettings.existingInfrastructureProfile.click();
    }
    selectExistingInventoryProfile(){
        this.addNewInventoryProfile();
        this.verifyAlertMsg('new Inventory Profile');
        irmSettings.existingInventoryProfile(this.recentlyCreated).waitForDisplayed();
        irmSettings.existingInventoryProfile(this.recentlyCreated).click();
    }
    updateInfrastructireProfile(){
        irmSettings.inputName.waitForDisplayed();
        irmSettings.inputName.click();
        irmSettings.inputName.keys(this.clearKeys);
        irmSettings.inputName.setValue("Testing " + this.randomStringGenerator());
        irmSettings.btnUpdateInfrastructureProfile.click();
    }
    updateInventoryProfile(){
        irmSettings.inputModel.waitForDisplayed();
        irmSettings.inputModel.click();
        browser.pause(700);
        irmSettings.inputModel.keys(this.clearKeys);
        browser.pause(600);
        irmSettings.inputModel.setValue("Testing Model " + this.randomStringGenerator());
        browser.pause(400);
        irmSettings.inputSku.waitForDisplayed();
        irmSettings.inputSku.click();
        browser.pause(300);
        irmSettings.inputSku.keys(this.clearKeys);
        browser.pause(500);
        irmSettings.inputSku.setValue("Testing SKU " +this.randomStringGenerator());
        browser.pause(1000);
        irmSettings.btnUpdateInventoryProfiles.waitForClickable();
        irmSettings.btnUpdateInventoryProfiles.click();
    }

    selectExistingEquipmentProfile(){
        this.addNewEquipmentProfile();
        this.verifyAlertMsg('new Equipment Profile');
        irmSettings.btnCloseForm.click();
        irmSettings.existingEquipmentProfile(this.recentlyCreated).waitForDisplayed();
        irmSettings.existingEquipmentProfile(this.recentlyCreated).click();
    }
    updateEquipmentProfile(){
        irmSettings.inputDescription.waitForDisplayed();
        irmSettings.inputDescription.click();
        browser.pause(2000);
        irmSettings.inputDescription.keys(this.clearKeys);
        browser.pause(2000);
        irmSettings.inputDescription.setValue("Testing Equipment " + this.randomStringGenerator());
        browser.pause(2000);
        irmSettings.btnUpdateEquipmentProfile.click();
    }
    openMappingSection(){
        irmSettings.liMapping.waitForDisplayed();
        irmSettings.liMapping.click();
    }
    updateGeneralSettings(){
        irmSettings.generalUnits.waitForDisplayed();
        var unit = irmSettings.generalUnits.getText();
        irmSettings.generalUnits.click();
        browser.pause(1000);
        if(unit === 'Imperial System')
        {
            browser.keys(this.upArrowKey);
        }
        else{
            browser.keys(this.downArrowKey);
        }
        browser.pause(1000);
        browser.keys(this.enterKey);
        browser.pause(1500);
        irmSettings.btnUpdateGeneral.waitForClickable();
        irmSettings.btnUpdateGeneral.click();
    }
    updateAddressLookupAPI(){
        irmSettings.addressLookupApi.waitForDisplayed();
        irmSettings.addressLookupApi.waitForClickable();
        browser.pause(1500);
        var api = irmSettings.addressLookupApi.getText();
        console.log('api is '+api);
        irmSettings.addressLookupApi.click();
        browser.pause(1500);
        if(api === 'Bing')
        {
            this.addressLookupAPI = 'Google';
            browser.keys(this.upArrowKey);
            browser.pause(1000);
        }
        else{
            this.addressLookupAPI = 'Bing';
            browser.keys(this.downArrowKey);
            browser.pause(1000);
        }
        browser.keys(this.enterKey);
        browser.pause(1000);
        irmSettings.btnlUpdateAddressLookup.click();
        this.verifyAlertMsg("Updated Address Lookup API");
    }
    updateLocationPredictionSettings(){
        irmSettings.locationPredictionLocation.waitForDisplayed();
        var location = irmSettings.locationPredictionLocation.getValue();
        if(location === '')
        {
            irmSettings.locationPredictionLocation.setValue("45.4869283, -122.804032");
        }
        var radius = irmSettings.locationPredictionRadius.getValue();
        irmSettings.locationPredictionRadius.click();
        for (let index = 0; index < 15; index++) {
            browser.keys(this.backspaceKey);
        }
        if(radius === '10')
        {
            irmSettings.locationPredictionRadius.setValue("5");
        }
        else{
            irmSettings.locationPredictionRadius.setValue("10");
        }
        browser.pause(2000);
        irmSettings.btnlocaltionPrediction.click();
    }
    verifyAddressLookupAPI_LocationPredictionSettings(){
        this.verifyAlertMsg("Updated Geo Code location Settings");
        expect(irmSettings.addressLookupApi.getText()).to.eql(this.addressLookupAPI);
    }


    addNewClutterProfile(){
        irmSettings.btnClutterNewProfile.waitForDisplayed();
        irmSettings.btnClutterNewProfile.click();
        irmSettings.inputClutterNewProfileName.waitForDisplayed();
        this.recentlyCreated = "Test Clutter " + this.randomStringGenerator();
        irmSettings.inputClutterNewProfileName.setValue(this.recentlyCreated);
        irmSettings.btnCreateClutterProfile.click();
    }

    selectExistingClutterProfile(){
        this.addNewClutterProfile();
        this.verifyAlertMsg('Added Clutter Profile');
        irmSettings.btnCloseForm.click();
        irmSettings.existingClutterProfile(this.recentlyCreated).waitForDisplayed();
        irmSettings.existingClutterProfile(this.recentlyCreated).click();
    }

    updateClutterProfile(){
        irmSettings.inputClutterNewProfileName.waitForDisplayed();
        irmSettings.inputClutterNewProfileName.click();
        browser.pause(2000);
        irmSettings.inputClutterNewProfileName.keys(this.clearKeys);
        browser.pause(2000);
        irmSettings.inputClutterNewProfileName.setValue("Test Clutter " + this.randomStringGenerator());
        browser.pause(2000);
        irmSettings.btnlUpdateClusterProfile.click();
    }
    updateQuickCheckSettings(){
        irmSettings.inputQuickCheckClutterProfile.waitForDisplayed();
        irmSettings.inputQuickCheckClutterProfile.scrollIntoView();
        irmSettings.inputQuickCheckClutterProfile.click();
        browser.keys(this.enterKey);
        var elevation = irmSettings.inputQuickCheckElevation.getValue();
        irmSettings.inputQuickCheckElevation.click();
        for (let index = 0; index < 15; index++) {
            browser.keys(this.backspaceKey);
        }
        if(elevation === '1'){
            irmSettings.inputQuickCheckElevation.setValue("5");
        }
        else{
            irmSettings.inputQuickCheckElevation.setValue("1");
        }
        browser.pause(1000);
        irmSettings.btnlUpdateQuickCheck.click();
    }

    addNewTheme(){
        irmSettings.btnNewTheme.waitForDisplayed();
        irmSettings.btnNewTheme.scrollIntoView();
        irmSettings.btnNewTheme.click();
        irmSettings.inputName.waitForDisplayed();
        this.recentlyCreated = "Testing Theme " + this.randomStringGenerator();
        irmSettings.inputName.setValue(this.recentlyCreated);
        irmSettings.inputMappingThemeObject.click();
        irmSettings.liAP.click();
        irmSettings.inputColumns.click();
        browser.keys(this.enterKey);
        irmSettings.btnSaveTheme.click();
    }

    selectExistingThemeProfile(){
        this.addNewTheme();
        this.verifyAlertMsg('Mapping theme profile');
        irmSettings.existingThemeProfile(this.recentlyCreated).waitForDisplayed();
        irmSettings.existingThemeProfile(this.recentlyCreated).click();
    }

    updateThemeProfile(){
        irmSettings.inputName.waitForDisplayed();
        irmSettings.inputName.click();
        browser.pause(2000);
        irmSettings.inputName.keys(this.clearKeys);
        browser.pause(2000);
        irmSettings.inputName.setValue("Testing Theme " + this.randomStringGenerator());
        browser.pause(2000);
        irmSettings.btnlUpdateTheme.click();
    }

    openEnumSettings(){
        irmSettings.liEnum.waitForDisplayed();
        irmSettings.liEnum.click();
    }

    verifyEnumSection(){
        irmSettings.btnAddEnum.waitForDisplayed();
        expect(irmSettings.btnAddEnum.isExisting()).to.be.true;
    }
    randomStringGenerator() {
		var chars = "1234567890";
		var string = "";
		for (var ii = 0; ii < 5; ii++) {
		string += chars[Math.floor(Math.random() * chars.length)];
		}
		return string;
    }
    addNewEnum(){
        irmSettings.btnAddEnum.click();
        irmSettings.inputName.waitForDisplayed();
        irmSettings.inputName.setValue("Testing Enum "+this.randomStringGenerator());
        this.recentlyCreated = "Testing Enum " + this.randomStringGenerator();
        irmSettings.enumValue.setValue(this.recentlyCreated);
        irmSettings.btnCreateEnum.click();
    }
    selectExistingEnum(){
        this.addNewEnum();
        this.verifyAlertMsg('Successfully created a customized enum.');
        irmSettings.existingInfrastructureProfile.waitForDisplayed();
        irmSettings.existingInfrastructureProfile.click();
    }
    updateEnum(){
        irmSettings.inputName.waitForDisplayed();
        irmSettings.inputName.click();
        browser.pause(2000);
        irmSettings.inputName.keys(this.clearKeys);
        browser.pause(2000);
        irmSettings.inputName.setValue("Testing Enum " + this.randomStringGenerator());
        browser.pause(2000);
        irmSettings.btnUpdateEnum.click();
    }


}
module.exports = new IRMSettingsActions();