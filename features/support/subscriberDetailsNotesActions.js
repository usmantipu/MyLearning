var LoginPage = require('../pageobjects/login.page');
var SubscriberDetailsNotesPage = require('../pageobjects/subscriberDetailsNotes.page');
var Utils = require('./utils');
var expect = require('chai').expect; 
var should = require('chai').should();

class subscriberDetailsNotesActions{
	
	constructor(){
		this.randomTestNotes;
		this.successMsg = 'Saved Successfully';
	}
	
    openubow(){
		EquipmentPage.open('login');
	}
	
	loginToUBOW(creds){
		var credentials = creds.raw();//storing datatable as 2D array
		LoginPage.username.waitForDisplayed();
		LoginPage.username.setValue(credentials[0][0]);
		LoginPage.passwordf.setValue(credentials[0][1]);
		LoginPage.logbutton.click();
		console.log('I login using given credentials');
		Utils.closeRatingPopup();
		Utils.closeWalkMe();
	}
	
	clickOnThreeDotsMenu(){
		browser.pause(3000);
		var x = SubscriberDetailsNotesPage.customerIDFirstSubscriber.getLocation('x');
		var y = SubscriberDetailsNotesPage.customerIDFirstSubscriber.getLocation('y');
		SubscriberDetailsNotesPage.customerIDFirstSubscriber.moveTo({ x, y});
		browser.pause(2000);

		SubscriberDetailsNotesPage.threeDotMenu.waitForDisplayed();
		SubscriberDetailsNotesPage.threeDotMenu.click();
		console.log('I clicked 3 dot menu');
		
	}

	clickOnNoteEditIcon(){
		browser.pause(2000);
		// SubscriberDetailsNotesPage.noteDetailsInNoteTable.waitForDisplayed();
		let requiredNote = SubscriberDetailsNotesPage.notesColumn(this.randomTestNotes);
		//requiredNote.waitForDisplayed();
		console.log("requiredNote displayed");
		browser.pause(2000);
		// SubscriberDetailsNotesPage.noteDetailsInNoteTable.scrollIntoView();
		requiredNote.scrollIntoView();
				
		// SubscriberDetailsNotesPage.noteDetailsInNoteTable.scrollIntoView();
		// SubscriberDetailsNotesPage.noteDetailsInNoteTable.click();
		requiredNote.click();

		//SubscriberDetailsNotesPage.closeButtonOnNotes.waitForDisplayed();
		browser.pause(2000);
		SubscriberDetailsNotesPage.closeButtonOnNotes.click();
		
		browser.pause(2000);
		var key =['\uE014'];
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.pause(2000);
		// SubscriberDetailsNotesPage.noteDetailsInNoteTable.moveTo();
		requiredNote.moveTo();
		browser.pause(1000);
		//SubscriberDetailsNotesPage.noteEditIconInTable.waitForDisplayed();
		//console.log("Edit icon is displayed");
		//browser.pause(2000);
		SubscriberDetailsNotesPage.noteEditIconInTable.click();
		console.log("Edit icon is clicked");
		browser.pause(2000);
	}

	deletionOfNote(){

		browser.pause(5000);
		// let firstNote = SubscriberDetailsNotesPage.noteDetailsInNoteTable(this.randomTestNotes);
		SubscriberDetailsNotesPage.firstNoteOfRow.waitForDisplayed();
		SubscriberDetailsNotesPage.firstNoteOfRow.waitForClickable();
		//let firstNote = SubscriberDetailsNotesPage.notesColumn(this.randomTestNotes);
		let firstNote = SubscriberDetailsNotesPage.columnByText(this.randomTestNotes);
		//firstNote.waitForDisplayed();
		//browser.pause(2000);
		//firstNote.scrollIntoView();
		firstNote.click();
		//SubscriberDetailsNotesPage.closeButtonOnNotes.waitForDisplayed();
		browser.pause(3000);
		SubscriberDetailsNotesPage.closeButtonOnNotes.click();
		browser.pause(3000);
		var key =['\uE014'];
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		firstNote = SubscriberDetailsNotesPage.columnByText(this.randomTestNotes);
		browser.pause(1000);
		firstNote.moveTo();

		browser.pause(2000);
		SubscriberDetailsNotesPage.noteDeleteIconInTable.waitForDisplayed();
		SubscriberDetailsNotesPage.noteDeleteIconInTable.waitForClickable();
		SubscriberDetailsNotesPage.noteDeleteIconInTable.click();

		browser.pause(1000);
		SubscriberDetailsNotesPage.deleteButtonForNote.waitForDisplayed();
		browser.pause(2000);
		SubscriberDetailsNotesPage.deleteButtonForNote.click();
		var deletedMsg = 'Deleted Successfully';
		SubscriberDetailsNotesPage.isConfirmationMsgPresent(deletedMsg).waitForDisplayed();
		expect(SubscriberDetailsNotesPage.isConfirmationMsgPresent(deletedMsg).isExisting()).to.be.true;
		//SubscriberDetailsNotesPage.confirmationMsg.waitForDisplayed();		
		//expect(SubscriberDetailsNotesPage.confirmationMsg.getText()).to.eql("Deleted Successfully");
		browser.pause(1000);
	}

	deletedNoteVerification() {
		//SubscriberDetailsNotesPage.noteCellInLogsTable.waitForDisplayed();
		browser.pause(5000);
		var getAllHeaders = SubscriberDetailsNotesPage.allHeaders;
		var indexOfType;
		for (var i=0; i<getAllHeaders.length-1;i++)
		{
			if(getAllHeaders[i].getText().includes('Type'))
			{
				indexOfType = i;
				break;
			}
		}
		browser.pause(2000);
		var updatedContents = SubscriberDetailsNotesPage.allColumnsData[indexOfType];
		expect(updatedContents.getText()).to.eql("NOTE - REMOVE");
	}

	openDeletedNote () {
		SubscriberDetailsNotesPage.notesColumn(this.randomTestNotes).waitForDisplayed();
		browser.pause(1000);
		SubscriberDetailsNotesPage.notesColumn(this.randomTestNotes).click();
		SubscriberDetailsNotesPage.deletedNoteContents.waitForDisplayed();
		browser.pause(1000);
	}

	viewingDeletedNote () {
		browser.pause(1000);
		var deletedContents = SubscriberDetailsNotesPage.deletedNoteContents.getText();		
		expect(deletedContents.includes("successfully deleted")).to.be.true;
		browser.pause(1000);
	}

	viewingUpdatedNote () {
		browser.pause(2000);
		var getAllHeaders = SubscriberDetailsNotesPage.allHeaders;
		var indexOfType;
		for (var i=0; i<getAllHeaders.length-1;i++)
		{
			if(getAllHeaders[i].getText().includes('Details'))
			{
				indexOfType = i;
				break;
			}
		}
		browser.pause(2000);
		var updatedContents = SubscriberDetailsNotesPage.allColumnsData[indexOfType];
		expect(updatedContents.getText().includes("modified by")).to.be.true;
	}

	markingNoteAsPrivate() {

		browser.pause(2000);
		SubscriberDetailsNotesPage.markAsPrivateCheckBox.waitForDisplayed();
		SubscriberDetailsNotesPage.markAsPrivateCheckBox.click();
		SubscriberDetailsNotesPage.saveButtonOnNotes.waitForDisplayed();
		browser.pause(2000);
		SubscriberDetailsNotesPage.saveButtonOnNotes.click();
		console.log("mark as PRIVATE saved");
		//browser.pause(1000);
		SubscriberDetailsNotesPage.isConfirmationMsgPresent(this.successMsg).waitForDisplayed();
		expect(SubscriberDetailsNotesPage.isConfirmationMsgPresent(this.successMsg).isExisting()).to.be.true;
		browser.pause(2000);
		SubscriberDetailsNotesPage.allTabOnLogs.click();
		browser.pause(1000);
		SubscriberDetailsNotesPage.noteTabsOnLogs.click();
		browser.pause(1000);
	}

	markingNoteAsPublic() {

		SubscriberDetailsNotesPage.markAsPrivateCheckBox.waitForDisplayed();
		SubscriberDetailsNotesPage.markAsPrivateCheckBox.click();
		SubscriberDetailsNotesPage.saveButtonOnNotes.waitForDisplayed();
		SubscriberDetailsNotesPage.saveButtonOnNotes.click();
		console.log("mark as PUBLIC saved");
		//browser.pause(500);
		SubscriberDetailsNotesPage.isConfirmationMsgPresent(this.successMsg).waitForDisplayed();
		expect(SubscriberDetailsNotesPage.isConfirmationMsgPresent(this.successMsg).isExisting()).to.be.true;
	}

	checkEyeIconWithPrivateNote () {
		browser.pause(2000);

		SubscriberDetailsNotesPage.noteTabsOnLogs.waitForClickable();
		SubscriberDetailsNotesPage.noteTabsOnLogs.click();
		browser.pause(1000);

		var getAllHeaders = SubscriberDetailsNotesPage.allHeaders;
		var indexOfType;
		for (var i=0; i<getAllHeaders.length-1;i++)
		{
			if(getAllHeaders[i].getText().includes('Type'))
			{
				indexOfType = i;
				break;
			}
		}
		browser.pause(2000);
		var updatedContents = SubscriberDetailsNotesPage.allColumnsData[indexOfType];
			expect(SubscriberDetailsNotesPage.btnPrivateAttachment(updatedContents).isExisting()).to.be.true;
		browser.pause(2000);
	}

	checkEyeIconWithPublicNote () {
	
		SubscriberDetailsNotesPage.noteCellInLogsTableText.waitForDisplayed();
		console.log("note cell in log table is: ",SubscriberDetailsNotesPage.noteCellInLogsTableText.getText());
		var allOtherValues = SubscriberDetailsNotesPage.noteCellInLogsTable;
		expect(SubscriberDetailsNotesPage.btnPrivateAttachment(allOtherValues).isExisting()).to.be.false;
		browser.pause(1000);
	}

	
	clickOnNotesOptionOnMenu() {
		browser.pause(2000);
		SubscriberDetailsNotesPage.clickNoteOptionOnMenu.waitForDisplayed();
		SubscriberDetailsNotesPage.clickNoteOptionOnMenu.click();
		browser.pause(2000);
		SubscriberDetailsNotesPage.markAsPrivateCheckBox.waitForDisplayed();
	}

	clickCustomerID() {
		SubscriberDetailsNotesPage.customerID.waitForDisplayed();
		SubscriberDetailsNotesPage.customerID.click();	
	}

	clickMarkAsPrivateToSelect() {
		SubscriberDetailsNotesPage.markAsPrivateCheckBox.waitForDisplayed();
		SubscriberDetailsNotesPage.markAsPrivateCheckBox.click();
	}

	updateNotes() {
		browser.pause(2000);
		SubscriberDetailsNotesPage.notesTextBox.waitForDisplayed();
		SubscriberDetailsNotesPage.notesTextBox.click();
		SubscriberDetailsNotesPage.notesTextBox.setValue("-updated.");
		browser.pause(2000);
	}

	writeNotes () {
		browser.pause(2000);
		SubscriberDetailsNotesPage.notesTextBox.waitForDisplayed();
		SubscriberDetailsNotesPage.notesTextBox.click();
		this.randomTestNotes = "Test Note, random data: "+this.randomStringGenerator();
		SubscriberDetailsNotesPage.notesTextBox.setValue(this.randomTestNotes);
		browser.pause(2000);
	}

	randomStringGenerator() {	
		var chars = "abcdefghijklmnopqrstuvwxyz";
		var string = "";
		for (var ii = 0; ii < 10; ii++) {
		  string += chars[Math.floor(Math.random() * chars.length)];
		}

		return string;
	}

	
	saveNotes() {
		
		SubscriberDetailsNotesPage.saveNotesButton.waitForDisplayed();
		SubscriberDetailsNotesPage.saveNotesButton.click();
		//browser.pause(1000);
		SubscriberDetailsNotesPage.isConfirmationMsgPresent(this.successMsg).waitForDisplayed();
		expect(SubscriberDetailsNotesPage.isConfirmationMsgPresent(this.successMsg).isExisting()).to.be.true;
		browser.pause(2000);
		SubscriberDetailsNotesPage.allTabOnLogs.click();
		browser.pause(1000);
		SubscriberDetailsNotesPage.noteTabsOnLogs.click();
		browser.pause(1000);		
	}

	closeNotesPopup() {
		SubscriberDetailsNotesPage.closeButtonOnSubscriberPanel.waitForDisplayed();
		SubscriberDetailsNotesPage.closeButtonOnSubscriberPanel.click();
	}

	openLogsTab() {
		SubscriberDetailsNotesPage.logsTab.waitForDisplayed();
		SubscriberDetailsNotesPage.logsTab.click();
		SubscriberDetailsNotesPage.noteTabsOnLogs.scrollIntoView();
		browser.pause(2000);
		
	}

	openNoteFilter() {
		SubscriberDetailsNotesPage.noteTabsOnLogs.waitForDisplayed();
		SubscriberDetailsNotesPage.noteTabsOnLogs.scrollIntoView();
		SubscriberDetailsNotesPage.noteTabsOnLogs.click();
		browser.pause(2000);
	}

	verifyThatNoteIsAdded () {				
		SubscriberDetailsNotesPage.noteTextInTable.waitForDisplayed();
		expect(SubscriberDetailsNotesPage.noteTextInTable.getText()).to.eql(this.randomTestNotes);
		browser.pause(2000);
	}
}
module.exports = new subscriberDetailsNotesActions();
