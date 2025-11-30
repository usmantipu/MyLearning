
var infraLRemProPage = require('../pageobjects/infraLocationsRemoveProfile.page');

var Utils = require('./utils');

var expect = require('chai').expect; 
//var should = require('chai').should();

class infraLocationsRemoveProfileActions{
	
	constructor(){
		this.deleteProfileConMsg='Deleted Infrastructure Profile successfully.';
		this.name;
		this.type;
	}

	gotoMegaMenu()
	{
		infraLRemProPage.btnAppIcon.waitForDisplayed();
		infraLRemProPage.btnAppIcon.click();
	}

	goToInfaProfiles()
	{
		this.gotoMegaMenu();
		infraLRemProPage.btnSettingsEquipment.waitForDisplayed();
		infraLRemProPage.btnSettingsEquipment.click();
		infraLRemProPage.btnInfraProfile.waitForDisplayed();
		infraLRemProPage.btnInfraProfile.click();
	}

	createInfraProfile(profileData)
	{
		var profileParam = profileData.raw();
        this.name =profileParam[0][0];
        this.type = profileParam[0][1];
		if(infraLRemProPage.selectSpecificPofile(this.name).isExisting()===false)
		{
			infraLRemProPage.btnInfraAddProfile.waitForDisplayed();
			infraLRemProPage.btnInfraAddProfile.click();
			infraLRemProPage.txtProfileName.waitForDisplayed();
			infraLRemProPage.txtProfileName.setValue(this.name);
			infraLRemProPage.txtProfileSummary.setValue(this.name);
			infraLRemProPage.txtProfileType.click();
			browser.pause(2000);
			infraLRemProPage.selectProfileType(this.type).click();
			infraLRemProPage.txtProfileDescription.setValue(this.name);
			infraLRemProPage.btnAddProfile.waitForDisplayed();
			infraLRemProPage.btnAddProfile.click();
		}
	}


	isDeletProfileEnabled(profileData)
	{
		browser.pause(4000);
		var profileParam = profileData.raw();
        this.name =profileParam[0][0];
		infraLRemProPage.selectSpecificPofile(this.name).waitForDisplayed();
		infraLRemProPage.selectSpecificPofile(this.name).click();
		expect(infraLRemProPage.btnDeleteProfile.isExisting()).to.be.true;
		expect(infraLRemProPage.btnDeleteProfile.isClickable()).to.be.true;
	}
	clickDeleteProfileButton()
	{
		infraLRemProPage.btnDeleteProfile.waitForDisplayed();
		infraLRemProPage.btnDeleteProfile.click();
	}
	clickBtnYesOfPopUp()
	{
		infraLRemProPage.btnPopUpYes.waitForDisplayed();
		infraLRemProPage.btnPopUpYes.click();
	}







	verifyInfraLocations() {
		infraLRemProPage.btnSettingsEquipment.waitForDisplayed();
		infraLRemProPage.btnSettingsEquipment.click();
		expect(infraLRemProPage.btnInfraProfile.isExisting()).to.be.true;
	}

	verifyListOfInfraProfiles()
	{
		infraLRemProPage.infraProfileHeader.waitForDisplayed();
		infraLRemProPage.btnInfraAddProfile.waitForDisplayed();
		expect(infraLRemProPage.infraProfileHeader.isExisting()).to.be.true;
		expect(infraLRemProPage.btnInfraAddProfile.isExisting()).to.be.true;
		expect(infraLRemProPage.navAreaInfraLocation.isExisting()).to.be.true;
	}

	verifyInfraLocationGetSelected()
	{
		infraLRemProPage.firstInfraProfile.waitForDisplayed();
		infraLRemProPage.firstInfraProfile.click();
		expect(infraLRemProPage.firstInfraProfile.getAttribute("class").includes("Mui-selected")).to.be.true;
	}

	verifyIsDeleteProfilePresent()
	{
		expect(infraLRemProPage.btnDeleteProfile.isExisting()).to.be.true;
		expect(infraLRemProPage.btnDeleteProfile.isClickable()).to.be.true;
	}

	verifyConfirmationPopUpYesNo()
	{
		infraLRemProPage.dialogPopUp.waitForDisplayed();
		expect(infraLRemProPage.dialogPopUpContent.getText()).to.be.eql("Are you sure you want to delete this infrastructure profile?");
		expect(infraLRemProPage.btnPopUpYes.isExisting()).to.be.true;
		expect(infraLRemProPage.btnPopUpNo.isExisting()).to.be.true;
	}
	verifyIfraLocationGetRemoved()
	{
		infraLRemProPage.confirmationMsg.waitForDisplayed();
		expect(infraLRemProPage.confirmationMsg.getText()).to.be.eql(this.deleteProfileConMsg);
	}
	verifyRemovedProfileIsNotVisible()
	{
		browser.pause(5000);
		expect(infraLRemProPage.selectSpecificPofile('testing').isExisting()).to.be.false;
	}

	
	

}

module.exports = new infraLocationsRemoveProfileActions();