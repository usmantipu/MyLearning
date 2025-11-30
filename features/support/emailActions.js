var LoginPage = require('../pageobjects/login.page');
var SubListPage = require('../pageobjects/subscriberlist.page');
var EmailPage = require('../pageobjects/email.page');
var Utils = require('./utils');
var expect = require('chai').expect; //this should be in some configuration file
const subscriberlistActions = require('./subscriberlistActions');
const emailPage = require('../pageobjects/email.page');
var should = require('chai').should();

class emailActions{
	
	constructor(){
		this.globalSchTemplate;
		this.globalRenameTemplateName;
		this.globalRenameFolderName;
		this.globalSelectedTemplate;
		this.globalEnteredTemplateName;
		this.globalFolderName;
		this.globalOtherFolderName;
		this.globalTemplateName;
		this.templateHoverDetails;
		this.globalTagName;
		this.attachment;
		this.bodyText;
		this.fromemail;
	}
	
    openVispApp(){
		EmailPage.open();
	}
	
	loginToVisp(login, password){

		Utils.login(login, password);
	/*	LoginPage.username.waitForDisplayed();
		LoginPage.username.setValue(login);
		LoginPage.passwordf.setValue(password);
		LoginPage.logbutton.click();
		//Utils.closeRatingPopup();
		//Utils.closeWalkMe();
		browser.maximizeWindow();*/
	}
	
	openSubscriberList(){
		
		SubListPage.subscribersmenu.waitForDisplayed();
	//	SubListPage.subscribersmenu.moveToObject();
		SubListPage.subscribersmenu.click();
			
		browser.pause(5000);
	//	SubListPage.blankSpace.click();//to move away cursor from collapsable menu
	}
	openEmailFromMenuItem()
	{
		browser.pause(5000);
		var result = subscriberlistActions.getSpecificSubscriberListCount();
		if(Number(result)>0)
		{
		}
		else{browser.pause(30000);}
		SubListPage.dotMenu.waitForDisplayed();
		SubListPage.dotMenu.moveTo();
		browser.pause(1000);
		console.log('openining');
		SubListPage.dotMenuButton.click();
		browser.pause(3000);
		SubListPage.menuItemEmail.waitForDisplayed();
		SubListPage.menuItemEmail.click();
	}
	openEmailInterface(){
		browser.pause(4000);
		subscriberlistActions.refreshSubListOnError();
		var result = subscriberlistActions.getSpecificSubscriberListCount();
		if(Number(result)>0)
		{
		}
		else{browser.pause(3000);}

		SubListPage.meatball_menu.waitForDisplayed();
		SubListPage.meatball_menu.click();

		browser.pause(2000);

		SubListPage.emailThisList.waitForDisplayed();
		SubListPage.emailThisList.click();	
	}
	
	selectFilter(filter){
		var keys = ['\ue015'];// arrow down keys
		EmailPage.to.click();
		browser.pause(3000);
		//filter = filter.replace(/['"]+/g, '');
		var toAllItems = EmailPage._toEmailList;
		for (let i = 0; i < toAllItems.length; i++) {
			toAllItems[i].keys(keys);
			if(toAllItems[i].getText().includes(filter))
			{
				EmailPage.toEditbox.keys(keys);
				browser.pause(1000);
				toAllItems[i].click();
				break;
			}
			
		}
		console.log('to subscriber selected'); 
		// EmailPage.to_dropdown(filter).waitForDisplayed();
		// EmailPage.to_dropdown(filter).scroll();
		// EmailPage.to_dropdown(filter).click();
		browser.pause(5000);
	}
	
	selectTrigger(trigger){
		browser.pause(3000);
		EmailPage.to.click();
		browser.pause(3000);
		EmailPage.to_dropdowntrg(trigger).waitForDisplayed();
		EmailPage.to_dropdowntrg(trigger).scroll();
		EmailPage.to_dropdowntrg(trigger).click();
		browser.pause(2000);
	}
	
	editTo(toValue){
		var keys = ['\uE011', '\uE008', '\uE010','\uE017']; // Home+Shift+End Delete key sequence is stored in array
		browser.pause(2000);
		EmailPage.to.setValue('');
		// EmailPage.to.waitForDisplayed();
		// EmailPage.to.click();
		// EmailPage.to.keys(keys);
		// browser.pause(2000);
		// EmailPage.to.keys('\uE008');// to release shift
		browser.pause(2000);
		EmailPage.to.setValue(toValue + ',');
		
	}
	
	editCC(ccValue){
		EmailPage.btn_cc.waitForDisplayed();
		EmailPage.btn_cc.click();
		EmailPage.ccEditbox.waitForDisplayed();
		EmailPage.ccEditbox.setValue(ccValue);
	}
	
	openTemplatePanel(){
		
		browser.pause(10000);
		EmailPage.btn_Templates.waitForDisplayed();
		EmailPage.btn_Templates.click();
		browser.pause(5000);
	}

	selectGenralFolder()
	{
		EmailPage.expandFolder('General Templates').waitForDisplayed();
		EmailPage.expandFolder('General Templates').click();
		browser.pause(1000);
	}
	
	selectAnyTemplate(){
		var name;
		browser.pause(4000);
		Utils.closeWalkMe();
		EmailPage.expandFolder('General Templates').waitForDisplayed();
		EmailPage.expandFolder('General Templates').click();
		browser.pause(2000);

		EmailPage.anyTemplate.waitForDisplayed();
				
		browser.pause(2000);
		name = EmailPage.anyTemplate.getText();
		name = name.replace(/(?:\r\n|\r|\n)/g, "");
		name = name.replace("filter_list", "");
		name = name.replace("more_vert","");

		EmailPage.anyTemplate.click();	
		
		this.globalSelectedTemplate = name;
		this.templateHoverDetails = EmailPage.getSelectedTemplateInfo;
		this.bodyText = EmailPage.body_Editor.getText();
	}

	selectSpecificTemplate(templateName){
		browser.pause(2000);
		EmailPage.specificTemplate.waitForDisplayed();
		EmailPage.specificTemplate.click('div='+ templateName);
	}
	
	navigateToAddFolderInterface(){
		browser.pause(2000);
		console.log('adding template');
		EmailPage.btn_addNew.waitForDisplayed();
		EmailPage.btn_addNew.click();
		EmailPage.newFolderMenu.waitForDisplayed();
		EmailPage.newFolderMenu.click();		
	}
	
	navigateToAddTemplateInterface(){
		browser.pause(15000);
		EmailPage.btn_addNew.waitForDisplayed();
		EmailPage.btn_addNew.click();
		EmailPage.newTemplateMenu.waitForDisplayed();
		EmailPage.newTemplateMenu.click();
	}
	
	setFolderName(){
		browser.pause(2000);
		//folderName = folderName.replace(/['"]+/g, '');
		var folderName = 'AutoTempF' + (Math.floor(new Date() / 1000));
		this.globalFolderName = folderName;
		EmailPage.folderName.waitForDisplayed();
		EmailPage.folderName.click();
		EmailPage.folderName.setValue(folderName);
		EmailPage.btn_addFolderName.waitForDisplayed();
		EmailPage.btn_addFolderName.click();
		EmailPage.errorMsg2.waitForDisplayed();
		if(EmailPage.errorMsg2.getText().includes('Folder name already exists'))
		{
			EmailPage.folderName.click();
			var keys = ['\uE008','\uE011','\uE017'];
			EmailPage.folderName.keys(keys);
			browser.pause(500);
			var newfoldername = 'Folder' + (Math.floor(new Date() / 1000));
			this.globalFolderName = newfoldername;
			EmailPage.folderName.setValue(newfoldername);
			EmailPage.btn_addFolderName.waitForDisplayed();
			EmailPage.btn_addFolderName.click();
		}
		browser.pause(4000);
	}
	
	deleteExistingEmptyFolder(folderName)
	{
		browser.pause(2000);
		EmailPage.expandFolder(folderName).moveTo();
		browser.pause(500);
		EmailPage.folderElipseButton(folderName,0).click();
		browser.pause(1000);
		EmailPage.deleteFolderMenu.waitForDisplayed();
		EmailPage.deleteFolderMenu.click();
		browser.pause(2000);
		EmailPage.btn_deleteFolder.click();
		EmailPage.successMsg.waitForDisplayed();
		EmailPage.successMsg.isExisting();
		browser.pause(2000);
	}

	selectTemplateFolder(){
		browser.pause(2000);
		EmailPage.expandFolder(this.globalFolderName).waitForDisplayed();
		EmailPage.expandFolder(this.globalFolderName).click();
		browser.pause(2000);
	}
	
	chooseFolderForTemplate(){
		browser.pause(3000);
		//folderName = folderName.replace(/['"]+/g, '');
		//this.globalFolderName = folderName;
		EmailPage.folderList.waitForDisplayed();
		EmailPage.folderList.click();
		browser.pause(2000);
		EmailPage.folderListItem(this.globalFolderName).waitForDisplayed();
		EmailPage.folderListItem(this.globalFolderName).click();
	}
	
	createFolder(folderName){
		//folderName = folderName.replace(/['"]+/g, '');
		if (EmailPage.expandFolder(folderName).isExisting() === false){
			/*<creating folder if doesn't exist already>*/
			browser.pause(2000);
			EmailPage.btn_addNew.waitForDisplayed();
			EmailPage.btn_addNew.click('<svg>');
			EmailPage.newFolderMenu.waitForDisplayed();
			EmailPage.newFolderMenu.click();
			browser.pause(2000);
			EmailPage.folderName.waitForDisplayed();
			EmailPage.folderName.click();
			EmailPage.folderName.setValue(folderName);
			EmailPage.btn_addFolderName.waitForDisplayed();
			EmailPage.btn_addFolderName.click();
		}
		else{
			console.log(folderName + ' - Folder already exists!');
		}
		
		
	}
	
	renameFolder(){
		browser.pause(2000);
		this.globalRenameFolderName = 'RenamedFolder' + (Math.floor(new Date() / 1000));
		//EmailPage.expandFolder(folderName).click();
		//browser.pause(500);
		EmailPage.folderElipseButton(this.globalFolderName,0).click();
		browser.pause(4000);
		EmailPage.renameMenu.click();
		browser.pause(2000);
		EmailPage.folderName.click();
		EmailPage.folderName.setValue(this.globalRenameFolderName);
		browser.pause(2000);
		EmailPage.btn_SaveFromRename.click();
		EmailPage.errorMsg2.waitForDisplayed();
		if(EmailPage.errorMsg2.getText().includes('Folder name already exists'))
		{
			EmailPage.folderName.click();
			var keys = ['\uE008','\uE011','\uE017'];
			EmailPage.folderName.keys(keys);
			browser.pause(500);
			var newfoldername = 'DuplicateFolder' + (Math.floor(new Date() / 1000));
			this.globalRenameFolderName = newfoldername;
			EmailPage.folderName.setValue(newfoldername);
			EmailPage.btn_SaveFromRename.click();
		}
		console.log('I rename the template folder '+ this.globalFolderName +' to:' + this.globalRenameFolderName);
		browser.pause(4000);
	}
	
	deleteFolderWithTemplates(){
		browser.pause(2000);
		EmailPage.folderElipseButton(this.globalFolderName,1).click();
		browser.pause(1000);
		EmailPage.deleteFolderMenu.waitForDisplayed();
		EmailPage.deleteFolderMenu.click();
		browser.pause(2000);
		EmailPage.btn_deleteFolder.click();
		EmailPage.successMsg.waitForDisplayed();
		EmailPage.successMsg.isExisting();
		browser.pause(2000);
		console.log('I delete folder '+ this.globalFolderName + 'along with its templates');
	}
	
	selectFolderWithTemplateToDelete()
	{
		browser.pause(2000);
		//EmailPage.btnCollapsedFolder(this.globalFolderName).click();
		//browser.pause(2000);
		//browser.pause(2000);
		EmailPage.expandFolder(this.globalFolderName).moveTo();
		browser.pause(500);
		//EmailPage.expandFolder(this.globalFolderName).waitForDisplayed();
		//EmailPage.expandFolder(this.globalFolderName).click();
		//browser.pause(2000);
		this.deleteFolderWithTemplates();
	}

	deleteFolderMoveItsTemplates(){
		//create another folder to move
		var firstFolder = this.globalFolderName;//keeping it to swap later
		this.navigateToAddFolderInterface();
		this.setFolderName();
		this.globalOtherFolderName = this.globalFolderName;//assign newly created as other folder
		this.globalFolderName = firstFolder;//1st folder swapped
		browser.pause(3000);
		console.log('going to delete first folder '+firstFolder);
		//EmailPage.btnCollapsedFolder(firstFolder).click();
		EmailPage.expandFolder(firstFolder).moveTo();
		browser.pause(500);
		//EmailPage.expandFolder(firstFolder).waitForDisplayed();
		//EmailPage.expandFolder(firstFolder).click();
		//browser.pause(2000);
		EmailPage.folderElipseButton(firstFolder,1).click();
		browser.pause(2000);
		EmailPage.deleteFolderMenu.waitForDisplayed();
		EmailPage.deleteFolderMenu.click();
		browser.pause(2000);
		EmailPage.rbtn_deleteWithoutTemplates.waitForDisplayed();
		EmailPage.rbtn_deleteWithoutTemplates.click();
		browser.pause(2000);
		EmailPage.toFolder.waitForDisplayed();
		EmailPage.toFolder.click();
		browser.pause(2000);
		EmailPage.folderChoose(this.globalOtherFolderName).waitForDisplayed();
		EmailPage.folderChoose(this.globalOtherFolderName).click();
		browser.pause(2000);
		EmailPage.btn_deleteFolder.waitForDisplayed();
		EmailPage.btn_deleteFolder.click();
		EmailPage.successMsg.waitForDisplayed();
		EmailPage.successMsg.isExisting();
		browser.pause(2000);
	}
	
	addNewTemplateName(){
		browser.pause(3000);
		var templateName = 'AutoTemplate' + (Math.floor(new Date() / 1000));
		this.globalTemplateName = templateName;
		EmailPage.newTemplateName.waitForDisplayed();
		EmailPage.newTemplateName.click();
		EmailPage.newTemplateName.setValue(templateName);
		browser.pause(2000);
		EmailPage.btn_addTemplateName.waitForDisplayed();
		EmailPage.btn_addTemplateName.click();
		if(EmailPage.errorMsg2.getText().includes('Template name already exists'))
		{
			EmailPage.newTemplateName.click();
			var keys = ['\uE008','\uE011','\uE017'];
			EmailPage.newTemplateName.keys(keys);
			browser.pause(500);
			var newtemprname = 'DuplicateTemplate' + (Math.floor(new Date() / 1000));
			this.globalTemplateName = newtemprname;
			EmailPage.newTemplateName.setValue(newtemprname);
			EmailPage.btn_addTemplateName.waitForDisplayed();
			EmailPage.btn_addTemplateName.click();
		}


	}
	
	renameTemplate(newTemplateName){
		var name;
		
		this.globalRenameTemplateName = newTemplateName;
		browser.pause(2000);
		EmailPage.anyTemplate.waitForDisplayed();
		EmailPage.anyTemplate.click();
		
		browser.pause(2000);
		name = EmailPage.anyTemplate.getText();
		name = name.replace(/(?:\r\n|\r|\n)/g, "");
		name = name.replace("filter_list", "");
		name = name.replace("more_vert","");
		
		console.log(name + ' template selected ');
		//EmailPage.specificTemplate.waitForDisplayed();
		//EmailPage.specificTemplate.click('div='+ name);
		
		EmailPage.templateElipseButton(name).waitForDisplayed();
		//EmailPage.templateElipseButton(name).click('svg:nth-child(3)');	
		EmailPage.templateElipseButton(name).click();
		EmailPage.templateRenameMenu.waitForDisplayed();
		EmailPage.templateRenameMenu.click();
		browser.pause(2000);
		EmailPage.renameNewTemplateName.waitForDisplayed();
		EmailPage.renameNewTemplateName.click();
		
		EmailPage.renameNewTemplateName.setValue(newTemplateName);
		//EmailPage.btn_updateTemplateName.waitForDisplayed();
		EmailPage.btn_SaveFromRename.click();
		browser.pause(2000);
		if(EmailPage.errorMsg2.getText().includes('Template name already exists'))
		{
			EmailPage.renameNewTemplateName.click();
			var keys = ['\uE008','\uE011','\uE017'];
			EmailPage.renameNewTemplateName.keys(keys);
			browser.pause(500);
			var newtemprname = 'Template' + (Math.floor(new Date() / 1000));
			this.globalRenameTemplateName = newtemprname;
			EmailPage.renameNewTemplateName.setValue(newtemprname);
			EmailPage.btn_SaveFromRename.click();
			browser.pause(3000);
		}
		
	}
	
	deleteAnyTemplate(){
		
		browser.pause(2000);
		console.log('selected template name is '+this.globalSelectedTemplate);
		if(EmailPage.discardChanges.isExisting()){EmailPage.discardChanges.click();browser.pause(2000);}		
		EmailPage.template(this.globalSelectedTemplate).moveTo();
		browser.pause(1000);
		EmailPage.templateElipseButton(this.globalSelectedTemplate).moveTo();
		browser.pause(500);
		EmailPage.templateElipseButton(this.globalSelectedTemplate).click();
		EmailPage.templateDeleteMenu.waitForDisplayed();
		EmailPage.templateDeleteMenu.click();
		browser.pause(2000);
		EmailPage.btn_OK.waitForDisplayed();
		EmailPage.btn_OK.click();
		
		console.log(this.globalSelectedTemplate + ' Template deleted');
		
		
	}
	
	editFromField(){
		
		var keys = ['\uE011', '\uE008', '\uE010','\uE017']; // Home+Shift+End Delete key sequence is stored in array
		EmailPage.header.click();
		var getFromText = EmailPage._from.getText();
		EmailPage._from.click();
		browser.pause(2000);
		this.fromemail='jcabangon@visp.net';
		//console.log('sample selecting');
		//browser.debug();
		browser.pause(2000);
		EmailPage.from_dropdowntrg(this.fromemail).click();
		/*
		if(getFromText=='support@betacleversoft.net')//sumit.vani@47billion.com
		{
			this.fromemail='test@test.test';
			//console.log('sample selecting');
			//browser.debug();
			browser.pause(2000);
			EmailPage.from_dropdowntrg('sample@sample.com').click();
		}
		else if('test@test.test')//sample@sample.com
		{
			//console.log('sample selecting');
			//browser.debug();
			this.fromemail='support@betacleversoft.net';
			EmailPage.from_dropdowntrg('support@betacleversoft.net').click();
		}
		else
		{
			this.fromemail='support@betacleversoft.net';
			EmailPage.from_dropdowntrg('support@betacleversoft.net').click();
		}*/
		//browser.pause(2000);
		// EmailPage._from.waitForDisplayed();
		// EmailPage._from.click();
		// EmailPage._from.keys(keys);
		// EmailPage._from.keys('\uE008');// to release shift
		// browser.pause(5000);
		// EmailPage._from.setValue(fromValue);
		// browser.pause(5000);
		// browser.debug();
	}
	
	editEmailSubject(subject){
		var keys = ['\uE008','\uE011','\uE017']; // Shift+Home+Delete key sequence is stored in array
		EmailPage.header.click();
		EmailPage.subject.waitForDisplayed();
		EmailPage.subject.setValue('');
		EmailPage.subject.click();
		EmailPage.subject.keys(keys);
		// EmailPage.subject.keys('\uE008');// to release shift
		browser.pause(2000);
		EmailPage.subject.setValue(subject);
		browser.pause(2000);
		
		
	}

	editEmailToForIndividual(toemail){
		toemail = toemail.replace(/['"]+/g, '');
		EmailPage.toIndividual.waitForDisplayed();
		EmailPage.toIndividual.setValue('');
		EmailPage.toIndividual.setValue(toemail);
		browser.pause(1000);
		EmailPage.addEmailAddress.click();
	}

	editEmailSubjectForIndividual(subject){
		subject = subject.replace(/['"]+/g, '');
		EmailPage.individualSubject.waitForDisplayed();
		EmailPage.individualSubject.setValue('');
		EmailPage.individualSubject.setValue(subject);
	}

	editEmailBody(bodyText){
		//Need to fix body editing issue. Body selector is not being recognized
		EmailPage.header.click();
		browser.pause(2000);
		this.bodyText = bodyText;
		EmailPage.body_Editor.waitForDisplayed();
	    EmailPage.body_Editor.click();
		//console.log(EmailPage.body);
		EmailPage.body_Editor.setValue(bodyText);
		this.bodyText = bodyText;
		console.log('Body edited');
	}
	
	addEmailTag(tagCategory, tagName){

		browser.pause(5000);
		tagCategory = tagCategory.replace(/['"]+/g, '');
		tagName = tagName.replace(/['"]+/g, '');
		EmailPage.btn_insertTag.waitForDisplayed();
		EmailPage.btn_insertTag.click();
		browser.pause(2000);
		EmailPage.tagCategory('Subscribers').waitForDisplayed();
		EmailPage.tagCategory('Subscribers').click(); //collapsing pre-opened subscriber node
		browser.pause(2000);
		EmailPage.tagCategory(tagCategory).waitForDisplayed();
		EmailPage.tagCategory(tagCategory).click();
		EmailPage.tagName(tagName).waitForDisplayed();
		EmailPage.tagName(tagName).click();
		//EmailPage.btn_closeTagPanel.waitForDisplayed();
		//EmailPage.btn_closeTagPanel.click();
		this.globalTagName = tagName;
		EmailPage.btn_closeInsertTag.click();
		
	}
	
	selectBillingCheckbox(){
		browser.pause(2000);
		EmailPage.cb_Billing.click();
	}
	
	selectTechCheckbox(){
		browser.pause(2000);
		EmailPage.cb_Tech.click();
	}
	
	selectMarketingCheckbox(){
		browser.pause(2000);
		EmailPage.cb_Marketing.click();
	}
	
	selectScheduleCheckbox(){
		browser.pause(2000);
		EmailPage.cb_schedule.click();
	}
	
	setScheduleDay(){
		EmailPage.scheduleDay.waitForDisplayed();
		EmailPage.scheduleDay.click();
		browser.pause(2000);
		EmailPage.scheduleDayDropdown.waitForDisplayed();
		EmailPage.scheduleDayDropdown.click();
		
		
	}
	
	setScheduleTime(){
		browser.pause(2000);
		EmailPage.scheduleTime.waitForDisplayed();
		EmailPage.scheduleTime.click();
		EmailPage.scheduleTimeDropdown.waitForDisplayed();
		EmailPage.scheduleTimeDropdown.click();
		browser.pause(2000);
		EmailPage.scheduleAMPM.waitForDisplayed();
		EmailPage.scheduleAMPM.click();
		browser.pause(1000);
		//EmailPage.scheduleAMPMDropDown.waitForDisplayed();
		EmailPage.scheduleAMPMDropDown.click();
		
	}
	
	saveSchedule(){
		browser.pause(5000);
		EmailPage.btn_scheduleSave.waitForDisplayed();
		EmailPage.btn_scheduleSave.click();
	}
	
	clickSaveAsButton(){
		browser.pause(4000);
		EmailPage.btn_saveAs.scrollIntoView();
		EmailPage.btn_saveAs.waitForDisplayed();
		console.log('save as displayed');
		EmailPage.btn_saveAs.click();
		browser.pause(5000);
	}
	isSaveAsEnabled()
	{
		browser.pause(2000);
		EmailPage.btn_saveAs.waitForDisplayed();
		expect(EmailPage.btn_saveAs.isEnabled()).to.exist;
	}
	clickSaveButton(){
		browser.pause(10000);
		EmailPage.btn_save.waitForDisplayed();
		EmailPage.btn_save.click();
		
	}
	
	clickSendButton(){
		browser.pause(5000);
		EmailPage.btn_send.waitForDisplayed();
		EmailPage.btn_send.click();
	}
	
	enterTemplateName(name){
		var templateName = name;
		
		browser.pause(2000);
		EmailPage.templateName.waitForDisplayed();
		EmailPage.templateName.click();
		EmailPage.templateName.setValue(templateName); 
		EmailPage.btn_submitTemplate.waitForDisplayed();
		EmailPage.btn_submitTemplate.click();
		this.globalSchTemplate = templateName;
		this.globalEnteredTemplateName = templateName;
		browser.pause(5000);
	}
	
	openScheduledTemplatePanel(){
		browser.pause(10000);
		EmailPage.schTemplatePanel.waitForDisplayed();
		EmailPage.schTemplatePanel.click();
		browser.pause(2000);
	}
	
	moveTemplate(toFolder){
		
		browser.pause(2000);
		
 		if (EmailPage.expandFolder(toFolder).isExisting() === false){
			
			this.createFolder(toFolder);
			browser.refresh();
			this.openEmailInterface();
			this.openTemplatePanel();
			this.selectAnyTemplate();
			
		}
		
		 
		browser.pause(2000);
		EmailPage.templateElipseButton(this.globalSelectedTemplate).waitForDisplayed();
		EmailPage.templateElipseButton(this.globalSelectedTemplate).click('svg:nth-child(3)');
		EmailPage.templateMoveMenu.waitForDisplayed();
		EmailPage.templateMoveMenu.click();
		browser.pause(2000);
		EmailPage.destinationFolder.waitForDisplayed();
		EmailPage.destinationFolder.click();
		EmailPage.folderChoose(toFolder).waitForDisplayed();
		EmailPage.folderChoose(toFolder).click();
		browser.pause(2000);
		EmailPage.btn_OK.click();
		browser.pause(2000);

	}
	
	attachInvoice(invoice){
		EmailPage.btn_attachment.waitForDisplayed();
		EmailPage.btn_attachment.click();
		invoice = invoice.replace(/['"]+/g, '');
		browser.pause(2000);
		switch(invoice){
			
			case"Current invoice":
				EmailPage.currentInvoiceMenu.waitForDisplayed();
				EmailPage.currentInvoiceMenu.click();
				break;
			case"Current usage invoice":
				EmailPage.currentUsageInvoiceMenu.waitForDisplayed();
				EmailPage.currentUsageInvoiceMenu.click();
				break;
			case"Statement":
				EmailPage.statementMenu.waitForDisplayed();
				EmailPage.statementMenu.click();
				break;
		}
		this.attachment = invoice;
		browser.pause(5000);
	}
	
	setStatementPeriodMonth(month){
		EmailPage.lastMonths.waitForDisplayed();
		EmailPage.lastMonths.click();
		browser.pause(1000);
		EmailPage.lastMonthsDropdown.waitForDisplayed();
		EmailPage.lastMonthsDropdown.click();
		browser.pause(1000);
		month = month.replace(/['"]+/g, '');
		EmailPage.lastMonthsValue(month).waitForDisplayed();
		EmailPage.lastMonthsValue(month).click();
		browser.pause(1000);
		EmailPage.btn_periodOK.waitForDisplayed();
		EmailPage.btn_periodOK.click();
	}

	verifyEmailWindow(){
		EmailPage.header.waitForDisplayed();
		expect(EmailPage.header.getText()).to.eql('Email');
	}
	
	verifySubscriberListDisplayed()
	{
		var result = subscriberlistActions.getSpecificSubscriberListCount();
		expect(Number(result)).to.be.above(0);
	}

	verifyEyeVisibility(){
		browser.pause(10000);
		EmailPage.eye.waitForDisplayed();
		expect(EmailPage.eye.getAttribute('focusable')).to.exist;
		
	}
	
	verifyEyeHoverPreview(){
		browser.pause(5000);
		//EmailPage.subListEye.moveToObject();
		//EmailPage.subListEye.click();
		expect(EmailPage.subListEye.getAttribute('title','This subscriber has no Billing/Technical/Marketing email')).to.exist;
	}
	

	verifyNoDataFiltered(){
		should.exist(SubListPage.emptyTable);
	}
	
	verifyCheckboxErrorMsg(msg){
		browser.pause(2000);
		EmailPage.errorMsg1.waitForDisplayed();
		expect(EmailPage.errorMsg1.getText()).to.eql(msg);
	}
	
	verifyTemplateLoad(){
		var keysToPress = ['\uE00C'];
		browser.pause(5000);
		var alldetails = this.templateHoverDetails;
		//console.log('total values in hover details:' + alldetails.length);
		var fromActual;
		var subjectActual;
		var filterAcutal;
		for(var i=1; i<=alldetails.length-1; i++){
			console.log(alldetails[i].getText());
			if(alldetails[i].getText().includes('From:')){
				fromActual = alldetails[i];}
			else if(alldetails[i].getText().includes('Subject:')){
				subjectActual = alldetails[i];}
			else if(alldetails[i].getText().includes('Filter Name:')){
				filterAcutal = alldetails[i];}
		}
		//console.log('actual data loaded');
		var fromExtractedValue = EmailPage.getAllSpansByParent(fromActual)[1].getText();
		expect(EmailPage._from.getAttribute('value')).to.eql(fromExtractedValue);
		//console.log('from verified');
		var subjectExtractedValue = EmailPage.getAllSpansByParent(subjectActual)[1].getText();
		expect(EmailPage.subject.getAttribute('value')).to.eql(subjectExtractedValue);
		//console.log('subject verified');
		var filterExtractedValue = EmailPage.getAllSpansByParent(filterAcutal)[1].getText();
		expect(EmailPage.toEditbox.getAttribute('value')).to.eql(filterExtractedValue);
		var tempBody = EmailPage.body_Editor.getText();
		console.log('Email body text is:' + tempBody);
		if(tempBody!='')
		{
			expect(tempBody).to.eql(this.bodyText);
		}
		else
		{
			expect(EmailPage.body_Editor.getText()).to.eql('');
		}
		
		console.log('verified template details');
	}
	
	verifyNewlyAddedFolder(){
		browser.pause(2000);
		console.log('New folder named as ' +this.globalFolderName +' added successfully!');
		expect(EmailPage.expandFolder(this.globalFolderName).getText()).to.eql(this.globalFolderName);
		//console.log('New folder named as ' +this.globalFolderName +' added successfully!');
		browser.pause(3000);
		this.deleteExistingEmptyFolder(this.globalFolderName);//clear garbage data
	}
	
	verifyRenamedFolder(){
		EmailPage.header.waitForDisplayed();
		browser.pause(5000);
		if(this.globalRenameFolderName.includes('DuplicateFolder')){
			expect(EmailPage.expandFolder(this.globalRenameFolderName).getText()).to.eql(this.globalRenameFolderName);}
		expect(EmailPage.expandFolder(this.globalRenameFolderName).getText()).to.eql(this.globalRenameFolderName);
		console.log('Folder should be renamed to:' + this.globalRenameFolderName);
		browser.pause(3000);
		this.deleteExistingEmptyFolder(this.globalRenameFolderName);//clear garbage data
	}
	
	verifyNewlyAddedTemplate(){
		browser.pause(5000);
		if (EmailPage.template(this.globalTemplateName) === false){
			console.log('Template not found!')
		}
		else{
				var newTemplate = EmailPage.template(this.globalTemplateName).getText();
				expect(newTemplate).to.eql(this.globalTemplateName);
				console.log(this.globalTemplateName + ' Template created successfully!');
		}
		//clear garbage data
		this.selectFolderWithTemplateToDelete();
	}
	
	verifyTemplateMoved(){
		browser.pause(5000);
		EmailPage.expandFolder(this.globalOtherFolderName).click();
		browser.pause(1000);
		var newTemplate = EmailPage.template(this.globalTemplateName).getText();
		expect(newTemplate).to.eql(this.globalTemplateName);
		console.log('Template successfully moved to '+ this.globalOtherFolderName);
	}

	verifyTemplateFolderDeleted(){
		browser.pause(5000);
		expect(EmailPage.checkFolderIsPresent(this.globalFolderName)).to.be.false;
		console.log('Template folder'+ this.globalFolderName +' is deleted!');
	}

	verifySourceTemplateFolderDeleted(){
		browser.pause(5000);
		expect(EmailPage.checkFolderIsPresent(this.globalFolderName)).to.be.false;
		console.log('Template folder'+ this.globalFolderName +' is deleted!');
		//clear garbage data
		this.globalFolderName = this.globalOtherFolderName;//assinging back to 1st folder
		browser.pause(2000);
		this.selectFolderWithTemplateToDelete();
	}
	
	verifyTemplatesMoved(templateName, otherFolder){
		//otherFolder = otherFolder.replace(/['"]+/g, '');
		EmailPage.expandFolder(otherFolder).waitForDisplayed();
		EmailPage.expandFolder(otherFolder).click('<button>');
		browser.pause(2000);
		should.exist(EmailPage.template(templateName));
	}
	
	verifyTemplateUpdated(fromEmail, subject, body){
		browser.pause(3000);
		expect(EmailPage._from.getValue()).to.eql(this.fromemail);
		expect(EmailPage.subject.getValue()).to.eql(subject);
		expect(EmailPage.body_Editor.getText().includes(body)).to.be.true;//depends on body editing issue
	}
	
	verifyTemplateRename(){
		browser.pause(2000);
		should.exist(EmailPage.desiredTemplate(this.globalRenameTemplateName));
		console.log('Template successfully renamed to: ' + this.globalRenameTemplateName);
	}
	verifyTemplateDescriptionPresent(){
		browser.pause(2000);
		expect(EmailPage.hover_TemplateNameLable.isExisting()).to.be.true;
		console.log('Template Name shown in Description: ' + this.globalRenameTemplateName);
	}
	verifyTemplateCreated(){
		browser.pause(9000);
		EmailPage.expandScheduledTemplate.click();
		browser.pause(7000);
		console.log(this.globalSchTemplate);
		this.globalSchTemplate = this.globalSchTemplate.replace(/['"]+/g, '');
		should.exist(EmailPage.desiredSchTemplate(this.globalSchTemplate));
		console.log('Template named ' + this.globalSchTemplate + 'created succesfully!');
	}
	
	verifyTemplateMove(){
		
		browser.pause(2000);
		/*There is a strange error in this test. If folder is created during test, this assertion fails as locator is not returned properly. 
		 However on subsequent run it works just fine*/
		should.exist(EmailPage.desiredTemplate(this.globalSelectedTemplate));
		console.log('Template '+ this.globalSelectedTemplate + ' moved succesfully!');
	}
	
	verifyTemplateDelete(){
		browser.pause(2000);
		
		expect(EmailPage.errorMsg2.getText()).to.eql('Successfully deleted "'+ this.globalSelectedTemplate +'"');
		console.log('Template "'+ this.globalSelectedTemplate + '" deleted successfully!');
	}
	
	verifyNewlyAddedTemplate1(){
		browser.pause(10000);
		
		var saveAsTemplate = EmailPage.template(this.globalEnteredTemplateName).getText();
		
		/*	saveAsTemplate = saveAsTemplate.replace(/(?:\r\n|\r|\n)/g, "");
			saveAsTemplate = saveAsTemplate.replace("filter_list", "");
			saveAsTemplate = saveAsTemplate.replace("more_vert","");	*/
			
		expect(saveAsTemplate).to.eql(this.globalEnteredTemplateName);
		console.log('Template "'+ this.globalEnteredTemplateName +'" added successfully!');
	}
	
	verifyEmailTag(tagName){
		browser.pause(2000);
		tagName = tagName.replace(/['"]+/g, '');
		expect(EmailPage.body_Editor.getText()).to.eql(this.bodyText+'<<'+tagName+'>>');
		/*This needs further development after body locator is finalized*/
		console.log('tag is added successfully');
		
	}
	
	verifyAttachment(){
		browser.pause(2000);
		switch(this.attachment){
			
			case"Current invoice":
				should.exist(EmailPage.attachedCurrentInvoice);
				console.log(this.attachment+ ' attached succesfully!');
				break;
			case"Current usage invoice":
				should.exist(EmailPage.attachedCurrentUsageInvoice);
				console.log(this.attachment+ ' attached succesfully!');
				break;
			case"Statement":
				should.exist(EmailPage.attachedStatement);
				console.log(this.attachment+ ' attached succesfully!');				
				break;
		}
		
	}
	
	verifyEmailSent(){

		EmailPage.sentConfirmation.waitForDisplayed();
		browser.pause(2000);
		expect(EmailPage.sentConfirmation.getText()).to.eql('Your email messages have been queued. It may take up to 10 minutes for the messages and confirmation to be sent.');
		console.log(EmailPage.sentConfirmation.getText());
	}
	verifyEmailSuccessfullySent(){

		EmailPage.sentToIndividual.waitForDisplayed();
		//browser.pause(50000);
		expect(EmailPage.sentToIndividual.getText()).to.eql('Email successfully sent.');
		console.log(EmailPage.sentToIndividual.getText());
	}
	
}
module.exports = new emailActions();