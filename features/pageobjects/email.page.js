// email.page.js
const utils = require('../support/utils');
"use strict";
var Page = require('./page')
class EmailPage extends Page {
	
	get header() {return browser.$('.email-header').$('.MuiFormControlLabel-label');}
	
	/*Header section*/
	get to()  { return browser.$('.list-item-names-container'); }
	get toEditbox(){return browser.$('.list-item-names-container').$('.MuiInputBase-input');}
	get toIndividual()  { return browser.$('.email-header').$('.rbt-input-main'); }
	get addEmailAddress()  { return browser.$('#formik_typeahead'); }
	get _toEmailList(){
		var allListItems = browser.$('.email-header').$$('.MuiListItem-root');
		console.log('total list items' +allListItems.length);
		return allListItems;}
	to_dropdown(filter) {
	//	return browser.$('span=' + filter);
		var elme;
		switch(filter){
			
			case"Ehtesham-test":
				
				return browser.$('li =Ehtesham-Test');
				
				break;
			case"Ehtesham":
				
				return browser.$('li =Ehtesham');
				break;
			}
			
		}
		
	to_dropdowntrg(trigger) {
		
		var elem;
		switch(trigger){
			
			case"Any subscribers whose payment status has turned past due":
				
				return browser.$('.MuiButtonBase-root*=Any subscribers whose payment status has turned past due');
				break;
			case"Any subscriber whose credit card has expired":
				
				return browser.$('span=Any subscribers whose Credit Card has expired');
				break;
			case"Any invoice whose payment status has turned past due":
				
				return browser.$('span=Any invoice whose payment status has turned past due');
				break;
			}
			
		}
	from_dropdowntrg(fromValue) {
		return browser.$('.MuiTypography-root*='+fromValue);
		// switch(fromValue){
			
			// case"sample@sample.com":
				// return browser.$('span='+fromValue);
				// break;
			// case"sumit.vani@47billion.com":
				// return browser.$('span='+fromValue);
				// break;	
			// }

			
		}
	get _from() {   return browser.$('[name="from_email"]'); }
	get _fromEmailList(){
		var allListItems = $$('.MuiListItemText-root');
		console.log('total list items' +allListItems.length);
		return allListItems;}
	get btn_cc()    {return browser.$('[name="showCcField"]');}
	get ccEditbox()    {return browser.$('[name="template_cc"]');}
	get subject()    { return browser.$('.email-header').$('[name="subject"]'); }
	get btn_Attach()    {return browser.$('#rdw-wrapper-4455 > div.rdw-editor-toolbar.toolbar-class > div:nth-child(7) > div > div > button');}
	get btn_Templates()    { return browser.$('[aria-label="Template"]');}  
	/*get btn_Templates()    { var id = browser.$('.mce-btn-group').getAttribute('id');
								 id = '#' + id;
	                            return browser.$(id);}*/
	get btn_Insert()    {return browser.$('#emailSection > div > div.row.emailSection > div.col-sm-12.p-0 > div:nth-child(2) > div > div > span');}
	get eye()    {return browser.$('.MuiTableCell-root').$('.MuiSvgIcon-root');}
	get subListEye()    {	return browser.$('//*[@id="subscriberPage"]/div[1]/div[1]/div/div/div/div[2]/div/div/div[21]/div/div/svg');}
	get cb_Billing()    {return browser.$('[name="flag_email_billing"]');}//json-wire protocol
	get cb_BillingCheckedStatus(){
		var topdiv = browser.$('.testEmailTray_billingCheckbox');
		return topdiv.element('span').getAttribute('class');
		}
	get cb_Tech() {return browser.$('[name="flag_email_technical"]');}
	get cb_Marketing() {return browser.$('[name="flag_email_marketing"]');}
	
	/*Body section*/
	get body() { var bodyId = browser.$('#email-tray-quill-editor'); 
					return bodyId.$('.ql-editor')}
	get cb_schedule() {return browser.$('button=Schedule');}
	get errorMsg1() {return browser.$('.MuiDialogContent-root');}
	get btn_insertTag(){return browser.$('button=Insert');}
	get btn_closeInsertTag(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[2]/div/div[4]/div/div/div[1]/div/div[2]/button');}
	get btn_closeTagPanel(){return browser.$('//*[@id="emailSection"]/div[2]/div/div[2]/div[2]/div[1]/div[1]/svg');}
		tagCategory(tagCategory){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[2]/div/div[4]/div/div/div[3]').$('.insertItemsText=' + tagCategory);}
		tagName(tagName){return browser.$('.MuiListItem-button=' + tagName);}
	get body_Editor(){return browser.$('.ql-editor');}
	get errorMsg2(){return browser.$('.MuiAlert-message');}
	get successMsg(){return browser.$('.MuiAlert-message');}
	
	/*Template section*/
	get btnTemplates() {return browser.$('button=Templates');}
	get anyTemplate() {return browser.$('.testEmailTray_templateItem');}
	expandFolder(foldername) {return browser.$('.testEmailTray_templateFolder*=' + foldername);
	} 
	checkFolderIsPresent(foldername){
										   if (browser.$('.testEmailTray_templateFolder*=' + foldername).isExisting()){
											   return true;
										   }
		return false;
	} 
		folderElipseButton(foldername,index) { console.log('attempting to hit ellipse button');
			var parentElement = browser.$('.testEmailTray_templateFolder*=' + foldername);
			var nextChild = parentElement.$('.MuiListItemSecondaryAction-root');
			return nextChild.$('[data-testid="MoreVertIcon"]');
			//var allbuttons = nextChild.$$('button');
			//console.log('all buttons are'+ allbuttons.length);
			//return allbuttons[index];
		}
	 btnCollapsedFolder(foldername) {return browser.$('.testEmailTray_templateFolder*=' + foldername).$('[data-testid="ExpandLessIcon"]');}
	get renameMenu() {return browser.$('span=Rename');}
	get newFolderName() {return browser.$('[name="folder_name"]');}
	get btn_saveFolderName () {return browser.$('span=Save');}
	get btn_addNew() {return browser.$('.MuiButton-text=Add');}
	get newFolderMenu() {return browser.$('span=New Folder');}
	get folderName() {return browser.$('[name="folder_name"]');}
	get btn_addFolderName() {return browser.$('.MuiDialog-paper').$('.MuiButtonBase-root*=Add');}
	get btn_SaveFromRename(){
		return browser.$('.MuiDialog-paper').$('.MuiButton-containedPrimary');
		//var parent = browser.$('.MuiDialog-paper');
		//var AllSaveButtons = parent.$$('button');
		
		//return AllSaveButtons[0];
	}				
	/*Folder pop up menu*/
	get deleteFolderMenu() {return browser.$('span=Delete');}
	
	/*Delete folder pop up window*/
	get rbtn_deleteWithTemplates() {return browser.$('span=Delete folder and its templates');}
	get rbtn_deleteWithoutTemplates() {return browser.$('span=Delete folder and move templates to');}
	get toFolder() {return browser.$('.MuiSelect-select=General Templates');}
		//folderChoose(folderToSelect) {return browser.$('.popover-menu-item=' + folderToSelect);};
		folderChoose(folderToSelect) { 
										var elements = browser.$('#menu-folder_id_to_move').$$('li');
									   //var items = Object.keys(elements.value);
									   for(var i=1; i<=elements.length; i++){
										   console.log(elements[i].getText());
										   if (elements[i].getText().includes(folderToSelect))
											   return elements[i];
									   }
									   }
	get btn_deleteFolder() {return browser.$('button=Continue');}
	
	/*Add new template menu*/
	get newTemplateMenu() {return browser.$('span=New Template');}
	get folderList() {return browser.$('.MuiSelect-select=General Templates');}
	folderListItem(folderToSelect) {
		var alllistitems = browser.$('#menu-folder_id').$$('.MuiMenuItem-root');
		for(var i=1; i<=alllistitems.length; i++){
			//console.log(alllistitems[i].getText());
			if(alllistitems[i].getText().includes(folderToSelect))
				return alllistitems[i];
			}
		}
	get newTemplateName() {	return browser.$('[name="template_name"]');}
	get btn_addTemplateName() {return browser.$('.MuiDialogActions-root').$('button=Add');}
	
	template(templateName) { return browser.$('.testEmailTray_templateItem=' + templateName);}
	get getSelectedTemplateInfo(){return browser.$$('.clearfix');}
		getAllSpansByParent(parent){return parent.$$('span');}
	/*Schedule template window*/

	get scheduleDay() {return browser.$('#mui-component-select-scheduleDay');}
	get scheduleDayDropdown() {return browser.$('li=8th');}
	get scheduleTime() {return browser.$('#mui-component-select-scheduleHour');}
	get scheduleTimeDropdown() {return browser.$('li=4');}
	get scheduleAMPM() {return browser.$('#mui-component-select-meridiem');}
	get scheduleAMPMDropDown() {return browser.$('li=PM');}
	get btn_scheduleSave() {
		var parentDiv = $$('.MuiIconButton-root');
		//console.log('total classelements '+ parentDiv.length);
		for(var i=0;i<=parentDiv.length;i++)
		{
			//if(parentDiv[i].isVisible('svg'))
			//{
				var pathElement = parentDiv[i].$('path');
				if(pathElement.getAttribute('d')=='M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z')
				{
					//console.log('founded');
					return parentDiv[i];
				}
			//}
		}
		}
	
	/*Template save section*/

	get btn_saveAs() {return browser.$('.email-btn-wrapper').$('button=Save As');}
	get templateName() {return browser.$('[name="template_name"]');}
	get btn_submitTemplate() {return browser.$('.MuiDialog-paper').$('.MuiButtonBase-root*=Add')}
	get btn_save() {return browser.$('button=Save');}
	
	/*Scheduled template section*/
	get schTemplatePanel() {return browser.$('button=Scheduled Emails');}
	
	get	specificTemplate() {return browser.$('.list-item-outer .list-item'); }
		templateElipseButton(templateName) {
			var parentElement = browser.$('.testEmailTray_templateItem='+templateName);
			var listItems = parentElement.$$('svg');
			return listItems[1];
		}
	get templateRenameMenu() {return browser.$('span=Rename');}
	get templateMoveMenu(){return browser.$('span=Move');}
	get templateDeleteMenu() {return browser.$('span=Delete');}
	get renameNewTemplateName(){return browser.$('[name="template_name"]');}
	get btn_updateTemplateName(){return browser.$('button=Yes');}
		desiredTemplate(templateName){//works as alternative of specificTemplate method
			return browser.$('.testEmailTray_templateItem='+ templateName);				
		}
	get expandScheduledTemplate(){return browser.$('.MuiListItem-root=Scheduled Templates');}	
		desiredSchTemplate(templateName){//works as alternative of specificTemplate method
			return browser.$('.MuiTypography-root*='+ templateName);
		}
	get destinationFolder(){return browser.$('#select-folder_id');}
	get btn_OK(){return browser.$('button=Yes');}
	
		movedTemplate(templateName){var buttonID = browser.$('.list-item-outer').getAttribute('span', 'id');//Collecting all IDs in a array
			console.log(buttonID);
			
		}
	get hover_TemplateNameLable(){return browser.$('span=Template Name:');}
	get btn_attachment(){return browser.$('.testEmailTray_attachmentButton');}
	get currentInvoiceMenu(){return browser.$('[name*="Current Invoice"]');}
	get currentUsageInvoiceMenu(){return browser.$('[name*="Current Usage Invoice"]');}
	get statementMenu(){return browser.$('[name*="Statement"]');}
	get attachedCurrentInvoice(){return browser.$('span*=Current Invoice');}
	get attachedCurrentUsageInvoice(){return browser.$('span*=Current Usage Invoice');}
	get attachedStatement(){return browser.$('span*=Statement');}
	get lastMonths(){return browser.$('.MuiGrid-item=Last');}
	get lastMonthsDropdown(){return browser.$('#mui-component-select-months');}
		lastMonthsValue(month){return browser.$('li='+month);}
	get btn_periodOK(){return browser.$('button=OK');}
	get individualSubject(){return browser.$('.subjectAutoSuggest').$('input');}
	get btn_send(){return browser.$('button=Send');}
	get sentConfirmation(){return browser.$('.MuiDialog-paper').$('.MuiDialogContent-root');}
	get sentToIndividual(){return browser.$('.MuiAlert-message');}
	get emailTitle(){return browser.$('//*[@id="emailSection"]/div/div[1]/div[1]/div[1]')};
	get discardChanges(){return browser.$('[aria-label="Discard changes"]')};
		
											
	


	

    open() {
        super.open('login');
		utils.clearLocalStorage();
    }
    
    submit() {
        this.form.submitForm();
    }
    
}
module.exports = new EmailPage();