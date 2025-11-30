const crmMsgPage= require('../pageobjects/_crmMessages.page.js');
var Utils = require('./utils');
var expect = require('chai').expect;
var should = require('chai').should();
const os = require('os'); // for current os
const fs = require('fs'); // for files on os
const path = require('path');//to get path

class crmMessagesActions{

    constructor(){
		 this.downArrowKey = ['\ue015'];// arrow down
		this.enterKey = ['\ue007'];// enter
		this.TabKey= ['\ue004'];// tab
		this.backspaceKey = ['\uE003'];// backspace
		this.Esckeys = ['\uE00C']; //escape
		//attachment related
		this.fileitems ='';
		if (os.platform() === 'win32'){
					this.slash = '\\';
				}else{
					this.slash = '\/';
				}
		this.fileName = 'vispAutomation.jpg';
		this.pngFileName = 'vispPNGAutomation.png';
		this.UnSupportedfileName = 'package.json';
    }
	crmAddNewTicket()
	{
		crmMsgPage.TopMenuButton.waitForDisplayed();
		crmMsgPage.TopMenuButton.click();
		crmMsgPage.openTicketOption.waitForDisplayed();
		crmMsgPage.openTicketOption.click();
		crmMsgPage.btnAssignmentType.waitForDisplayed();
		crmMsgPage.btnAssignmentType.click();
		crmMsgPage.subscriberSelect.waitForDisplayed();
		crmMsgPage.subscriberSelect.click();
		browser.pause(2000);
		crmMsgPage.autoCompleteInput.waitForDisplayed();
		crmMsgPage.autoCompleteInput.setValue('Jon');
		browser.pause(2000);
		browser.keys(this.downArrowKey);
		browser.keys(this.enterKey);
		browser.pause(2000);
		crmMsgPage.btnTicketType.click();
		browser.pause(2000);
		browser.keys(this.downArrowKey);
		browser.keys(this.enterKey);
		browser.pause(2000);
		crmMsgPage.btnCreateTicket.waitForDisplayed();
		crmMsgPage.btnCreateTicket.waitForClickable();
		crmMsgPage.btnCreateTicket.click();
		crmMsgPage.confirmationMsg.waitForDisplayed();
		const confirmMsgText= crmMsgPage.confirmationMsg.getText();
		expect(confirmMsgText).to.be.equal('The ticket was added successfully');
		console.log('New CRM ticket created successfully');
		browser.pause(5000);
	}
	expandMessages(){
		crmMsgPage.messagesSection.waitForDisplayed();
		crmMsgPage.messagesSection.click();
		browser.pause(2000);
	}
	addMessage(){
		crmMsgPage.btnAddMessage.waitForDisplayed();
		crmMsgPage.btnAddMessage.scrollIntoView();
		crmMsgPage.btnAddMessage.click();
	}
	selectEmailOption(){
		crmMsgPage.emailOption.waitForDisplayed();
		crmMsgPage.emailOption.scrollIntoView();
		crmMsgPage.emailOption.click();
		browser.pause(4000);
	}
	inputEmailToAddress(emailAddress){
		crmMsgPage.emailToInput.waitForDisplayed();
		crmMsgPage.emailToInput.setValue(emailAddress);
		browser.pause(1000);
		browser.keys(this.downArrowKey);
		browser.keys(this.enterKey);
		browser.pause(1000);
		browser.keys(this.TabKey);
		browser.pause(1000);
		console.log('email address added to the To field');
	}
	inputMessageBody(BodyContent){
		crmMsgPage.iframeParent.waitForDisplayed();
		browser.switchToFrame(crmMsgPage.iframeParent);
		crmMsgPage.iframeMessageBody.waitForDisplayed();
		crmMsgPage.iframeMessageBody.click();
		crmMsgPage.iframeMessageBody.setValue(BodyContent);
		browser.pause(2000);
		browser.switchToFrame(null);
		browser.pause(2000);
		console.log('body content added to the email');
	}
	btnSendEmail(){		
		crmMsgPage.btnSendMessage.waitForDisplayed();
		crmMsgPage.btnSendMessage.waitForClickable();
		crmMsgPage.btnSendMessage.click();
		crmMsgPage.confirmationMsg.waitForDisplayed();
		var confirmMsgText= crmMsgPage.confirmationMsg.getText();
		console.log('Confirmation message: '+confirmMsgText);
		expect(confirmMsgText).to.be.equal('Email was sent successfully');
		console.log('email sent to the crm ticket email address successfully');
	}
	btnCancelMessage(){
		crmMsgPage.btnCancelMessage.waitForDisplayed();
		crmMsgPage.btnCancelMessage.waitForClickable();
		crmMsgPage.btnCancelMessage.click();
		browser.pause(2000);
		console.log('Composer cancelled successfully');
	}
hoverOverEmailIcon()
	{
		crmMsgPage.iconEmailMessage.waitForDisplayed();
		crmMsgPage.iconEmailMessage.moveTo();
		browser.pause(1000);
		console.log('Hovered over the email icon in the messages table');
	}
	clickDeleteIcon()
	{
		crmMsgPage.btnDeleteMessage.waitForDisplayed();		
		crmMsgPage.btnDeleteMessage.click();
		browser.pause(1000);
	}
	DoNotconfirmEmailDelete(){
		crmMsgPage.btnNoConfirmDelete.waitForDisplayed();
		crmMsgPage.btnNoConfirmDelete.waitForClickable();
		crmMsgPage.btnNoConfirmDelete.click();
	}
	confirmEmailDelete(){
		crmMsgPage.btnYesConfirmDelete.waitForDisplayed();
		crmMsgPage.btnYesConfirmDelete.waitForClickable();
		crmMsgPage.btnYesConfirmDelete.click();
	}
	selectSMSOption(){
		crmMsgPage.smsOption.waitForDisplayed();
		crmMsgPage.smsOption.scrollIntoView();
		crmMsgPage.smsOption.click();
		browser.pause(4000);
	}
	inputSMSToNumber(phoneNumber){
		crmMsgPage.inputSMSToNumber.waitForDisplayed();
		crmMsgPage.inputSMSToNumber.click();
		browser.keys(this.backspaceKey);
		browser.pause(500);
		browser.keys(this.backspaceKey);
		browser.pause(1000);
		crmMsgPage.inputSMSToNumber.setValue(phoneNumber);
		browser.pause(1000);
		browser.keys(this.downArrowKey);
		browser.keys(this.enterKey);
		browser.pause(1000);
		browser.keys(this.TabKey);
		browser.pause(1000);
		console.log('phone number added to the SMS input area');
	}
	ClearSMSToNumber(){
		crmMsgPage.inputSMSToNumber.waitForDisplayed();
		crmMsgPage.inputSMSToNumber.click();
		browser.keys(this.backspaceKey);
		browser.pause(500);
		browser.keys(this.backspaceKey);
		browser.pause(1000);
	}
	inputSMSBody(smsContent){
		crmMsgPage.smsInputArea.waitForDisplayed();
		crmMsgPage.smsInputArea.setValue(smsContent);
		console.log('sms content added to the SMS input area');
	}
	ClickBtnSendSMS(){
		crmMsgPage.btnSendMessage.waitForDisplayed();
		crmMsgPage.btnSendMessage.waitForClickable();
		crmMsgPage.btnSendMessage.click();
		crmMsgPage.confirmationMsg.waitForDisplayed();
		var confirmMsgText= crmMsgPage.confirmationMsg.getText();
		console.log('Confirmation message: '+confirmMsgText);
		expect(confirmMsgText).to.be.equal('SMS failed to send.');
		console.log('email sent to the crm ticket email address successfully');
	}
	clickBtnAddNote(){
		crmMsgPage.btnAddNote.waitForDisplayed();
		crmMsgPage.btnAddNote.waitForClickable();
		crmMsgPage.btnAddNote.scrollIntoView();
		crmMsgPage.btnAddNote.click();
		browser.keys(this.Esckeys);
	}
	clickBtnSaveNote(){		
		crmMsgPage.btnSaveNote.waitForDisplayed();		
		crmMsgPage.btnSaveNote.waitForClickable();
		crmMsgPage.btnSaveNote.click();
	}
	attachUnsupportedFile(){
		browser.pause(3000);
		var filePath = __dirname;
		filePath = filePath.substring(0,filePath.lastIndexOf(this.slash));
		filePath = filePath.substring(0,filePath.lastIndexOf(this.slash));
		filePath =path.join(filePath,this.UnSupportedfileName);
		browser.addCommand('chooseFile', function (localFilePath) {
			const remoteFile = browser.uploadFile(localFilePath);
				this.addValue(remoteFile);
			}, true);
		crmMsgPage.fileAttachment.chooseFile(filePath);
	}
	attachJPGFile(){
		browser.pause(3000);
		var filePath = __dirname;
		filePath = filePath.substring(0,filePath.lastIndexOf(this.slash));
		filePath = filePath.substring(0,filePath.lastIndexOf(this.slash));
		filePath =path.join(filePath,this.fileName);
		browser.addCommand('chooseFile', function (localFilePath) {
			const remoteFile = browser.uploadFile(localFilePath);
				this.addValue(remoteFile);
			}, true);
		crmMsgPage.fileAttachment.chooseFile(filePath);
	}
	removedTheAttachedFile(){
		//crmMsgPage.closeAttachmentPreviewBtn.waitForDisplayed();		
		//crmMsgPage.closeAttachmentPreviewBtn.click();
		browser.pause(2000);
		crmMsgPage.fileUploadPreview.waitForDisplayed();
		crmMsgPage.closeAttachmentPreviewBtn.waitForDisplayed();
		crmMsgPage.closeAttachmentPreviewBtn.click();
		browser.pause(1000);
		console.log('clicked to remove the attached file from the note');
	}











	vrifyEmailIcon(){
		crmMsgPage.iconEmailMessage.waitForDisplayed();
		expect(crmMsgPage.iconEmailMessage.isExisting()).to.be.true;
		console.log('Email icon is displayed for the email message');
	}
	verifyEmailRecipient(emailAddress){
		console.log('email receipient label text: '+crmMsgPage.emailRecipientLabel.getText());
		expect(crmMsgPage.emailRecipientLabel.getText().includes(emailAddress)).to.be.true;
		console.log('Email recipient '+emailAddress+' is verified successfully');
	}
	verifyToAndContent(emailAddress){
		var allToolTipContent = crmMsgPage.tooltipContent;
		console.log('Tooltip Length is: '+allToolTipContent.length);
		for (var i = 0; i < allToolTipContent.length; i++) {
			console.log('Tooltip Content '+i+' : '+allToolTipContent[i].getText());
		}
		expect(allToolTipContent[3].getText().includes(emailAddress)).to.be.true;
		console.log('Tooltip showing full list of sender and all recipients is verified successfully');
	}
	verifyDateTimeStampe()
	{
		crmMsgPage.messageDateTimeStamp.waitForDisplayed();
		console.log('DateTime stamp value is: '+crmMsgPage.messageDateTimeStamp.getText());
		const tsRegex = /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:[1-9]|[12]\d|3[01]), \d{4} (?:[01]\d|2[0-3]):[0-5]\d$/;
		expect(crmMsgPage.messageDateTimeStamp.getText()).to.match(tsRegex, 'Timestamp format is invalid');
		console.log('DateTime stamp is verified successfully');
	}
	verifyNewNoteIcon(){
		crmMsgPage.btnAddNewNote.waitForDisplayed();
		expect(crmMsgPage.btnAddNewNote.isExisting()).to.be.true;
		console.log('New Note icon is verified successfully');
	}
	verifyDeleteIcon(){
		crmMsgPage.btnDeleteMessage.waitForDisplayed();
		expect(crmMsgPage.btnDeleteMessage.isExisting()).to.be.true;
		console.log('Delete icon is verified successfully');
	}
	verifyConfirmationDialog(){
		expect(crmMsgPage.btnYesConfirmDelete.isExisting()).to.be.true;
		console.log('Confirmation dialog is verified successfully');
	}
	verifyMessageRemoved()
	{
		crmMsgPage.confirmationMsg.waitForDisplayed();
		var confirmMsgText= crmMsgPage.confirmationMsg.getText();
		console.log('Confirmation message: '+confirmMsgText);
		expect(confirmMsgText).to.be.equal('Message deleted successfully');
		console.log('Email message deleted from the ticket successfully');
	}
	verifySmsIcon(){
		browser.pause(1000);
		browser.keys(this.Esckeys);
		browser.pause(1000);
		crmMsgPage.smsIcon.waitForDisplayed();
		expect(crmMsgPage.smsIcon.isExisting()).to.be.true;
		console.log('SMS icon is displayed for the SMS message');
	}
	verifyPhoneNumbers(){
		console.log('sms receipient label text: '+crmMsgPage.emailRecipientLabel.getText());
		expect(crmMsgPage.emailRecipientLabel.getText().includes('5419556900')).to.be.true;
		console.log('SMS recipient is verified successfully');
	}
	verifyEmailSMSOptions(){
		expect(crmMsgPage.emailOption.isExisting()).to.be.true;
		expect(crmMsgPage.smsOption.isExisting()).to.be.true;
		console.log('Email and SMS options are verified successfully in the Messages dropdown list');		
	}
	verifyEmailComposerClosed(){
		crmMsgPage.btnAllNotesMessages.waitForDisplayed();
		expect(crmMsgPage.btnAllNotesMessages.isExisting()).to.be.true;
		expect(crmMsgPage.noMessageText.isExisting()).to.be.true;
		console.log('Email composer is closed successfully without sending the email');
	}
	verifySMSComposerClosed(){
		crmMsgPage.btnAllNotesMessages.waitForDisplayed();
		expect(crmMsgPage.btnAllNotesMessages.isExisting()).to.be.true;
		expect(crmMsgPage.noMessageText.isExisting()).to.be.true;
		console.log('SMS composer is closed successfully without sending the SMS');
	}
	verifySendButtonDisabled(){
		crmMsgPage.btnSendMessage.waitForDisplayed();
		expect(crmMsgPage.btnSendMessage.getAttribute('class').includes('Mui-disabled')).to.be.true;
		console.log('Send button is disabled as expected when TO field is blank');
	}
	verifySaveNoteButtonDisabled(){
		crmMsgPage.btnSaveNote.waitForDisplayed();
		expect(crmMsgPage.btnSaveNote.getAttribute('class').includes('Mui-disabled')).to.be.true;
		console.log('Save Note button is disabled as expected when Note content is blank');
	}
	verifyNoteAdded(){
		crmMsgPage.confirmationMsg.waitForDisplayed();
		var confirmMsgText= crmMsgPage.confirmationMsg.getText();
		console.log('Confirmation message: '+confirmMsgText);
		expect(confirmMsgText).to.be.equal('Note Added Successfully');
		console.log('Note added to the ticket messages successfully');		
	}
	verifyUnsupportedFileTypeError(){
		crmMsgPage.confirmationMsg.waitForDisplayed();
		var confirmMsgText= crmMsgPage.confirmationMsg.getText();
		console.log('Confirmation message: '+confirmMsgText);
		expect(confirmMsgText.includes('is not a valid file type')).to.be.true;
		console.log('Unsupported file type error message is verified successfully');
		browser.keys(this.Esckeys);
		browser.pause(5000);		
	}

	verifyJPGAttachment(){
		crmMsgPage.fileUploadPreview.waitForDisplayed();
		expect(crmMsgPage.fileUploadPreview.isExisting()).to.be.true;
		console.log('JPG uploaded file name is: '+crmMsgPage.uploadedFileName.getText());
		browser.keys(this.Esckeys);
		browser.pause(3000);
		expect(crmMsgPage.uploadedFileName.getText()).to.be.equal(this.fileName);
		console.log('JPG attachment is verified successfully');
	}
	verifyJPGAttachmentRemoved(){
		browser.pause(2000);
		expect(crmMsgPage.fileUploadPreview.isExisting()).to.be.false;
		console.log('JPG attachment removed successfully from the note');
	}




	//Toremove this
	gotoServiceDeskAndOpenNewTicket()
	{
		crmMsgPage.serviceDeskmenu.waitForExist();
		crmMsgPage.serviceDeskmenu.waitForDisplayed();
		crmMsgPage.serviceDeskmenu.click();
		browser.pause(2000);
		console.log('I open service desk');
		crmMsgPage.openFirstTicketInList.waitForExist();
		crmMsgPage.openFirstTicketInList.waitForDisplayed();
		crmMsgPage.openFirstTicketInList.click();
		browser.pause(5000);
		console.log('I open the first ticket in the list');
	}

	verifyIsBeteFeatureEnabled()
	{
		var isbeta = false;
		crmMsgPage.btnTicketDockDotted.waitForDisplayed();
		crmMsgPage.btnTicketDockDotted.waitForClickable();
		crmMsgPage.btnTicketDockDotted.click();
		//
		crmMsgPage.btnBetaSwitch.waitForDisplayed();
		isbeta = crmMsgPage.btnBetaSwitch.getAttribute('class').includes('Mui-checked');
		console.log('Beta switch is set to: '+isbeta);
		if(isbeta==false){
			crmMsgPage.btnBetaSwitch.click();
			browser.pause(3000);
			console.log('Beta switch is enabled now');
		}
		else{
			browser.keys(this.Esckeys);
			browser.pause(1000);
			console.log('Beta switch is already enabled');
		}
	}
	clickCloseTicketDrawer()
	{
		crmMsgPage.btnCloseTicketDrawer.waitForDisplayed();
		crmMsgPage.btnCloseTicketDrawer.waitForClickable();
		crmMsgPage.btnCloseTicketDrawer.click();
		browser.pause(2000);
		console.log('Ticket drawer closed successfully');
	}
	///Removed above

	



}
module.exports = new crmMessagesActions();