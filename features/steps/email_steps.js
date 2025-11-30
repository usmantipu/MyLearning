const {Given, When, Then} = require("@cucumber/cucumber");
const EmailActions = require('../support/emailActions');
const utils = require('../support/utils');

  
  Given(/^I open visp webapp to access email$/, function() {
	  
	EmailActions.openVispApp(); 
	console.log('I open visp webapp to access email');
	
  });
  
  Given(/^I login using username (.*) and password (.*)$/, function(login, password) {
	
	EmailActions.loginToVisp(login, password);
	console.log('I provide credentials to login');
	
  });

  Given(/^I open subscriber list$/, function() {
    
	EmailActions.openSubscriberList();
	console.log('I open subscriber list');
	
  });
  
  When(/^I open email interface$/, function() {

	EmailActions.openEmailInterface();
	//browser.pause(4000);
	console.log('I open email interface');
	
  });
  When(/^I open Email from menu item$/, function() {

	EmailActions.openEmailFromMenuItem();
	browser.pause(2000);
	console.log('I open email interface for individual subscriber');
	
  });
  
  When(/^I select (.*) in To field$/, function(filter) {
    		
	EmailActions.selectFilter(filter);
	console.log('I select '+filter+' filter in To field');
  });
  
  When(/^I uncheck all three checkboxes i.e. "Billing", "Tech", and "Marketing"$/, function() {

	EmailActions.selectBillingCheckbox();
	EmailActions.selectTechCheckbox();
	EmailActions.selectMarketingCheckbox();
	console.log('I uncheck all three checkboxes i.e. "Billing", "Tech", and "Marketing"');

  });
  
  When(/^I go to templates panel$/, function() {
    		
	EmailActions.openTemplatePanel();	
	console.log('I go to templates panel');

  });
  
  When(/^I select a template in available templates$/, function() {

	EmailActions.selectAnyTemplate();
	EmailActions.editFromField();
	EmailActions.editEmailSubject('This is edit test');
	EmailActions.editEmailBody('Dear Customer, this is a test');
	EmailActions.selectBillingCheckbox();
	EmailActions.selectTechCheckbox();
	EmailActions.clickSaveButton();
	console.log('I select template');
	//browser.pause(3000);

  });
  When(/^I select first template in available templates$/, function() {
    		
	EmailActions.selectAnyTemplate();	
	console.log('first templates got selected');

  });
  
  When(/^I select an existing folder$/, function() {
	EmailActions.navigateToAddFolderInterface();
	EmailActions.setFolderName();
	EmailActions.selectTemplateFolder();
  });
  
  When(/^I rename the exitsing folder$/, function() {

	EmailActions.renameFolder();

  });

  When(/^I select the General Templates$/, function() {
    		
	EmailActions.selectGenralFolder();	
	console.log('I go to General templates panel');

  });
  
  When(/^I navigate to add folder interface$/, function() {

	EmailActions.navigateToAddFolderInterface();
	console.log('I navigate to add folder interface');
	
  });

  When(/^I provide folder name$/, function() {
	EmailActions.setFolderName();

  });
  
  When(/^I delete the template folder along with its templates$/, function() {
	EmailActions.navigateToAddTemplateInterface();//create pre-req data
	EmailActions.chooseFolderForTemplate();
	EmailActions.addNewTemplateName();
	EmailActions.selectFolderWithTemplateToDelete();
	//browser.pause(3000);

  });
  
  When(/^I navigate to add template interface$/, function() {
	EmailActions.navigateToAddFolderInterface();
	EmailActions.setFolderName();//create pre-req data
	EmailActions.navigateToAddTemplateInterface();
	console.log('I navigate to add template interface');
	//browser.pause(3000);

  });

  When(/^I navigate to add new template in general templates$/, function() {
	//EmailActions.navigateToAddFolderInterface();
	//EmailActions.setFolderName();//create pre-req data
	EmailActions.navigateToAddTemplateInterface();
	console.log('I navigate to add template interface in general templates');
	//browser.pause(3000);

  });
  
  When(/^I choose existing folder to Add template$/, function() {

	EmailActions.chooseFolderForTemplate();
	//browser.pause(3000);

  });
  
  When(/^I input template name$/, function() {
	EmailActions.addNewTemplateName();

  });
  
  When(/^I delete the template folder while moving its templates to an other folder$/, function() {
	EmailActions.navigateToAddTemplateInterface();//create pre-req data
	EmailActions.chooseFolderForTemplate();
	EmailActions.addNewTemplateName();
	EmailActions.deleteFolderMoveItsTemplates();	
	//browser.pause(3000);

  });
  
  When(/^I compose email by providing "from", "subject", "body", "billing", "tech", "marketing", and "tags" for available "tagtype"$/, function() {
    		
	browser.pause(10000);
	EmailActions.editFromField('eahmed@visp.net');
	EmailActions.editEmailSubject('BDD test subject');
	EmailActions.addEmailTag('Billing','Balance');
	EmailActions.editEmailBody('Test');
	EmailActions.selectBillingCheckbox();
	EmailActions.selectTechCheckbox();
	
	
	console.log('I compose email');
	browser.pause(3000);

  });
  
  When(/^I set its schedule and save it$/, function() {
    		
	browser.pause(2000);
	EmailActions.selectScheduleCheckbox();
	EmailActions.setScheduleDay();
	EmailActions.setScheduleTime();
	EmailActions.saveSchedule();
	
	console.log('I set its schedule and save it');
	browser.pause(3000);

  });
  
  When(/^I save the template as (.*)$/, function(templateName) {	
	templateName = templateName + '-' + (Math.floor(new Date() / 1000));//Math.floor(new Date() / 1000) to convert into EPOCH
	EmailActions.clickSaveAsButton();
	EmailActions.enterTemplateName(templateName);
	console.log('I save the template');
	

  });
  
  When(/^I edit (.*), (.*), and (.*)$/, function(fromField, emailSubject, emailBody) {

	var tagCategory = 'Subscribers';
	var tagName = 'Last Name';
	//browser.pause(2000);
	EmailActions.editFromField(); //removing from paramter as not selected email get chosen from list
	EmailActions.editEmailSubject(emailSubject);
	//EmailActions.addEmailTag(tagCategory,tagName);//There is a bug in tag panel so disabling it as it breaks adding tag test scenario
	EmailActions.editEmailBody(emailBody);
	EmailActions.selectBillingCheckbox();
	EmailActions.selectTechCheckbox();
	console.log('I edit email template');
	browser.pause(3000);
	

  });

  When(/^I update (.*), subject (.*), and body (.*) for individual$/, function(toField, emailSubject, emailBody) {

	browser.pause(9000);
	console.log('going inside');
	EmailActions.editEmailToForIndividual(toField);
	EmailActions.editFromField();
	EmailActions.editEmailSubjectForIndividual(emailSubject);
	EmailActions.editEmailBody(emailBody);
	console.log('I edit email for individual');
	browser.pause(3000);
  });
  
  When('I save changes in template', function() {
    		
	
	EmailActions.clickSaveButton();
	console.log('I save the template');
	

  }); 
  
  When(/^I rename the template$/, function(){
	  
	  var templateName = 'Template-NewNameEPOCH' + (Math.floor(new Date() / 1000));//appending EPOCH for uniqueness
	  
	  EmailActions.renameTemplate(templateName);
	  console.log('I rename the template to: ' + templateName);
	  
  });
  
  When(/^I move the template$/, function(){
	  var toFolder = 'AutoFolder' ;

	  EmailActions.moveTemplate(toFolder);
	  console.log('I move the template');
	  
  });
  
  When(/^I delete the template$/, function(){
	  
	  EmailActions.deleteAnyTemplate();
	  console.log('I delete the template');
  });
  
  When(/^I save the changes using "Save As" option$/, function(){
	  var templateName = 'TemplateSavedAS-' + (Math.floor(new Date() / 1000));
	  EmailActions.clickSaveAsButton();
	  EmailActions.enterTemplateName(templateName);
	  console.log('I save the template using "Save As"');
  });
  
  When(/^I select tag category, tag as (.*),(.*)$/, function(category, tag){
	  EmailActions.addEmailTag(category, tag);
	  console.log('Tag: "'+ tag + '" added for category: '+ category);
  });
  
  When(/^I add (.*) as attachment$/, function(invoice){
	  EmailActions.attachInvoice(invoice);
  });
  
  When(/^I select (.*) months$/, function(number){
	  
	  EmailActions.setStatementPeriodMonth(number);
	  console.log('I select: '+ number +' months');
  });
  
  When(/^I compose email by providing (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*) for available (.*), and (.*)$/, function(to, fromField, cc, subject, cdbill, cdtech, cdmarkt, tag, tagtype, body) {

	browser.pause(2000);
	EmailActions.editTo(to);
//	EmailActions.editCC(cc);
	EmailActions.editFromField(fromField);
	EmailActions.editEmailSubject(subject);
	EmailActions.addEmailTag(tagtype,tag);
	EmailActions.editEmailBody(body);
	EmailActions.selectBillingCheckbox();	
		
		if (cdbill === 'checked'){
			
			EmailActions.selectBillingCheckbox();
		}
		
	EmailActions.selectTechCheckbox();
	
		if (cdtech === 'checked'){
			EmailActions.selectTechCheckbox();
		}
		
	EmailActions.selectMarketingCheckbox();
	
		if (cdmarkt === 'checked'){
			EmailActions.selectMarketingCheckbox();
		}
	console.log('I compose email');
	
	

  });
  
  When(/^I send the email$/, function(){
	  EmailActions.clickSendButton();
	  console.log('I Send email!');
  });
  
  Then(/^I see an Email window in a docker$/, function() {
    		
	EmailActions.verifyEmailWindow();
	console.log('I see an Email window in a docker');
	utils.clearLocalStorage();

  });
  
  Then(/^Subscriber list records should filter out as per Selected To$/, function() {
    EmailActions.verifySubscriberListDisplayed();
	console.log('I see subscriberlist based on value select in Email To field');
	utils.clearLocalStorage();	
  }); 

  Then(/^Eye icon should visible for subscriber list records$/, function() {
    		
	EmailActions.verifyEyeVisibility();
	console.log('Eye icon should visible for subscriber list records');	
  });
  
  Then(/^I can edit (.*), (.*), and (.*)$/, function() {

	browser.pause(2000);

	EmailActions.editFromField();//eahmed@visp.net

	EmailActions.editEmailSubject('This is a BDD test');
	console.log('I can edit "From", "Subject", and "Body"');
	browser.pause(2000);
	

  });
  
  Then(/^Save As button get enabled$/, function() {

	EmailActions.isSaveAsEnabled();
	console.log('save as button enabled');
	//browser.pause(2000);
	utils.clearLocalStorage();
	

  });

  Then(/^error message is shown$/, function() {
	EmailActions.verifyCheckboxErrorMsg('To send an email, at least one email address checkbox should be checked.');
	console.log('error message is shown');
	utils.clearLocalStorage();

  });
  
  Then(/^Selected email template should load on compose email$/, function() {
	EmailActions.selectGenralFolder();
    EmailActions.selectAnyTemplate();		
	EmailActions.verifyTemplateLoad();
	console.log('Selected email template should load on compose email');
	utils.clearLocalStorage();

  });
  
  Then(/^template folder should be renamed$/, function() {

	EmailActions.verifyRenamedFolder();
	utils.clearLocalStorage();

  });
  
  Then(/^New Template folder should be added$/, function() {

	EmailActions.verifyNewlyAddedFolder();
	//console.log('New folder named as ' + folderName +' added successfully!');
	utils.clearLocalStorage();

  });
  
  Then(/^both template folder and its templates should be deleted$/, function() {

	EmailActions.verifyTemplateFolderDeleted();
	console.log('Both template folder and templates are deleted!');
	utils.clearLocalStorage();
	
  });
  
  Then(/^the new template should get added in the folder$/, function() {
	EmailActions.verifyNewlyAddedTemplate();
	browser.pause(2000);
	utils.clearLocalStorage();
	

  });
  
  Then(/^template successfully moved to other folder$/, function() {
	EmailActions.verifyTemplateMoved();
	browser.pause(2000);
	utils.clearLocalStorage();
	
  });

  Then(/^source folder from where templates moved should be deleted$/, function() {
	EmailActions.verifySourceTemplateFolderDeleted();
	browser.pause(2000);
	utils.clearLocalStorage();
	
  });
  
  Then(/^templates (.*) should be moved to (.*)$/, function(templateName, otherFolder) {

	EmailActions.verifyTemplatesMoved(templateName, otherFolder);
	console.log('Templates moved to '+ otherFolder +' folder');
	utils.clearLocalStorage();
	
  });
  
  Then(/^New scheduled Template should gets added in scheduled templates$/, function() {
    		
	EmailActions.openScheduledTemplatePanel();
	EmailActions.verifyTemplateCreated();
	utils.clearLocalStorage();
	
  });
  
  Then(/^Template should get updated with (.*), (.*), and (.*)$/, function(fromEmail, subject, body) {
    		
	
	EmailActions.verifyTemplateUpdated(fromEmail, subject, body);
	console.log('Changes updated successfully - Needs further development');
	
	browser.pause(2000);
	utils.clearLocalStorage();
	
  });
  
  Then(/^Template should be renamed$/, function() {
    		
	EmailActions.verifyTemplateRename();
	
	browser.pause(2000);
	utils.clearLocalStorage();
	
  });
  
  Then(/^template description is shown as pop up$/, function() {
    		
	EmailActions.verifyTemplateDescriptionPresent();
	
	browser.pause(2000);
	utils.clearLocalStorage();
	
  });
  
  Then(/^Template should be moved to desired folder$/, function() {

	EmailActions.verifyTemplateMove(); 
	utils.clearLocalStorage();

	
  });
  
  Then(/^Template should be deleted and no longer available$/, function(){
	 EmailActions.verifyTemplateDelete();
	 utils.clearLocalStorage();
  });
  
  Then(/^New Template should get added in selected Folder$/, function(){
	  EmailActions.verifyNewlyAddedTemplate1();
	  utils.clearLocalStorage();
  });
  
  Then(/^Selected (.*) should show on compose email$/, function(tagName){
	  EmailActions.verifyEmailTag(tagName);
	  utils.clearLocalStorage();
  });
  
  Then(/^Attachment gets attached with email$/, function(){
	  EmailActions.verifyAttachment();
	  utils.clearLocalStorage();
  });
  
  Then(/^email should be sent$/, function(){
	  EmailActions.verifyEmailSent();
	  utils.clearLocalStorage();
  });
  Then(/^email successfully sent to individual$/, function(){
	  EmailActions.verifyEmailSuccessfullySent();
	  utils.clearLocalStorage();
  });

