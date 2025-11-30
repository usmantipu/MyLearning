const utils = require('../support/utils');
"use strict";
var Page = require('./page')

class infraLocationsRemoveProfile extends Page {


/**top menu */
get btnAppIcon(){return browser.$('[data-testid="AppsIcon"]');}
get btnInfraProfile(){return browser.$('li=Infrastructure Profile');}
get btnSettingsEquipment(){return browser.$('.MuiToolbar-root').$('//*[@id="settings-tab-2"]');}

get infraProfileHeader(){return browser.$('span=Infrastructure Profile');}
get btnInfraAddProfile(){return browser.$('[vispdata-testid="view-add-infrastructure-profile-form"]');}
get navAreaInfraLocation(){return browser.$('[aria-label="site profiles"]');}
get firstInfraProfile(){return this.navAreaInfraLocation.$('.MuiListItem-root');}
	selectSpecificPofile(profile){return this.navAreaInfraLocation.$('.MuiListItem-root='+profile);}
get btnDeleteProfile(){return browser.$('button=Delete Profile');}
get dialogPopUp(){return browser.$('.MuiDialog-paper');}
get dialogPopUpContent(){return browser.$('.MuiDialogContent-root');}
get dialogPopUpActions(){return browser.$('.MuiDialogActions-root');}
get btnPopUpYes(){return this.dialogPopUp.$('button=Yes');}
get btnPopUpNo(){return this.dialogPopUp.$('button=No');}
get confirmationMsg () {return browser.$('.MuiAlert-message');} // Note Added Successfully
get profileDialogParent(){return browser.$('#panel1a-content');}
get txtProfileName(){return browser.$('[name="name"]');}
get txtProfileSummary(){return browser.$('[name="summary"]');}
get txtProfileType(){return browser.$('[name="type"]');}
	selectProfileType(itemName){return browser.$('li='+itemName);}
get txtProfileDescription(){return browser.$('[name="description"]');}
get btnAddProfile(){return browser.$('[vispdata-testid="add-infrastructure-profile"]');}




}
module.exports = new infraLocationsRemoveProfile();