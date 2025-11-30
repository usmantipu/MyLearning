const utils = require('../support/utils');
"use strict";
var Page = require('./page')

class infraLocationsRemoveContact extends Page {

	get btnPlusInHeader () {return browser.$('[aria-label="Add Infrastructure"]');} 
	get infraName () {return browser.$('.MuiFormControl-root*=Name').$('input');} 
	get elevation () {return browser.$('.MuiFormControl-root*=Elevation (m)').$('input');} 
	get latitude () {return browser.$('.MuiFormControl-root*=Latitude').$('input');} 
	get longitude () {return browser.$('.MuiFormControl-root*=Longitude').$('input');} 
	get infraZip () {return browser.$('.MuiFormControl-root*=Zip').$('input');} 
	// get infraProfile () {return browser.$('#mui-228');} 
	get infraProfile () {return browser.$$('.MuiAutocomplete-root')[0].$('.MuiInputBase-root');} 
	// get infraProfile () {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div/div[2]/div/div/div/div');} 
	get address1 () {return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[9]');}
	siteParentByLableName(label){var allitems = browser.$('.MuiDrawer-paperAnchorRight').$$('.MuiGrid-item');
		for (let i = 0; i < allitems.length; i++) {
			console.log('extracted text is '+allitems[i].getText());
				if(allitems[i].getText().includes(label))
				{
					return allitems[i];
				}
		}}
	inputByParent(parent){return parent.$('input');}
	get address2 () {return browser.$('.MuiFormControl-root*=Address 2').$('input');} 
	get btnSaveOnAddInfra () {return browser.$('button=Save');} 
	get confirmationMsg () {return browser.$('.MuiAlert-message');} // Added Site Location successfully

	get contactEditIcon () {return browser.$$('[aria-label="settings"]')[1];} 
	// get addContactIcon () {return browser.$('[data-testid="AddCircleIcon"]')[1];} 
	get addContact () {return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[2]/div/div[2]/div[2]/div[2]/div/div[2]/div[1]/button');} 
	get contactFirstName () {return browser.$('.MuiFormControl-root*=First Name').$('input');} 
	get contactLastName () {return browser.$('.MuiFormControl-root*=Last Name').$('input');}
	get contactAddress () {return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[2]/div/div[2]/div[2]/div[2]/div/div[2]/div[2]/div[1]/div/div[9]');} 
	get contactZip () {return browser.$('.MuiFormControl-root*=Zip').$('input');} 
	get contactEmailAddress () {return browser.$('.MuiFormControl-root*=Email').$('input');} 
	get contactEmailType () {return browser.$('.MuiFormControl-root*=Type').$('input');} 
	get contactPhoneNumber () {return browser.$('.MuiFormControl-root*=Number').$('input');}
	get contactPhoneType () {return browser.$$('.MuiFormControl-root*=Type')[1].$('input');} 
	get contactCloseButton () {return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[2]/div/div[2]/div[2]/div[2]/div/div[1]/div/div[2]/button');} 
	get infraCloseButton () {return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[1]/button[3]');} 
	get btnSiteSearch(){return browser.$('.react-grid-item*=Infrastructure Locations').$('[data-testid="SearchIcon"]');}
	get inputSiteSearch(){return browser.$('.react-grid-item*=Infrastructure Locations').$('input');}
	get firstSiteRecord () {return browser.$('.react-grid-item*=Infrastructure Locations').$('.MuiDataGrid-virtualScrollerContent').$$('.MuiDataGrid-cell')[2]};
	
	get contactHeader () {return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[2]/div/div[2]/div[2]/div/div/div/div').
	$('#panel1a-header')};
	get NoContactText () {return browser.$('h6=No Contacts available.')};
	get contactTitle () {return this.contactHeader.$('.MuiTypography-root')};

	get deleteIcon () {return browser.$('*[vispdata-testid^="delete-contact"]')};
	get deleteConfirmationAlert () {return browser.$('.MuiDialog-container')};
	get yesButtonOnDeleteAlert (){return browser.$('button=Yes');}
	get noButtonOnDeleteAlert (){return browser.$('button=No');}
	

}
module.exports = new infraLocationsRemoveContact();
