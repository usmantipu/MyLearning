var SDaddTaskPage = require('../pageobjects/SDaddTask.page');
var SDaddNotePage = require('../pageobjects/SDaddNote.page');

var Utils = require('./utils');

var expect = require('chai').expect; 
//var should = require('chai').should();

class SDaddNoteActions{
	
	constructor(){
		this.randomNumber;
		this.noteText;
		this.firstTask;
		this.secondTask;
	}

	addInternalNoteToTicket () {
		SDaddNotePage.ticketMessagesTab.waitForDisplayed();
		browser.pause(1000);
		SDaddNotePage.ticketMessagesTab.click();
		browser.pause(5000);
		SDaddNotePage.internalButton.click();
		browser.pause(2000);		
		SDaddNotePage.postNoteTextBox.waitForDisplayed();
		browser.pause(1000);
		SDaddNotePage.postNoteTextBox.click();
		this.noteText = "Int. note for ticket "+ this.randomStringGenerator();
		browser.pause(1000);
		SDaddNotePage.postNoteTextBox.setValue(this.noteText);
		SDaddNotePage.postButton.waitForDisplayed();
		browser.pause(1000);
		SDaddNotePage.postButton.click();
		browser.pause(1000);
		SDaddTaskPage.confirmationMsg.waitForDisplayed();
		expect(SDaddTaskPage.confirmationMsg.getText()).to.eql("Note Added Successfully");
		browser.pause(3000);

	}


	internalNoteAddedInTicket() {
		browser.pause(5000);
		let addedNote = SDaddNotePage.addedNotes(this.noteText);
		// let addedNote = "new";
		expect(addedNote).to.include(this.noteText);
		expect(addedNote).to.include("Internal");
	}

	
	addExternalNoteToTicket() {
		
		SDaddNotePage.ticketMessagesTab.waitForDisplayed();
		browser.pause(1000);
		SDaddNotePage.ticketMessagesTab.click();
		browser.pause(2000);
		SDaddNotePage.externalButton.click();
		browser.pause(2000);		
		SDaddNotePage.postNoteTextBox.waitForDisplayed();
		browser.pause(1000);
		SDaddNotePage.postNoteTextBox.click();
		this.noteText = "Ext. note for ticket "+ this.randomStringGenerator();
		browser.pause(1000);
		SDaddNotePage.postNoteTextBox.setValue(this.noteText);
		SDaddNotePage.postButton.waitForDisplayed();
		browser.pause(1000);
		SDaddNotePage.postButton.click();
		browser.pause(1000);
		expect(SDaddNotePage.confirmationMsg.getText()).to.eql("Note Added Successfully");
		browser.pause(5000);
		
	}
	closeCurrentTicketDock()
	{
		browser.pause(5000);
		SDaddNotePage.btnCloseTicket.waitForDisplayed();
		SDaddNotePage.btnCloseTicket.waitForExist();
		SDaddNotePage.btnCloseTicket.click();
	}

	
	externalNoteAddedInTicket() {
		let addedNote = SDaddNotePage.addedNotes(this.noteText);
		// let addedNote = "new";
		expect(addedNote).to.include(this.noteText);
		expect(addedNote).to.include("External");
	}

	verifyInternalNoteTimestamp(){
		let addedNote = SDaddNotePage.addedNotes(this.noteText);
		expect(addedNote).to.include("Internal");
		expect(addedNote).to.include("@"); // timestamp starts with @ character
		
	
}

	verifyExternalNoteTimestamp(){
		let addedNote = SDaddNotePage.addedNotes(this.noteText);
		expect(addedNote).to.include("External");
		expect(addedNote).to.include("@"); // timestamp starts with @ character
	
	}

	
	randomStringGenerator() {

		var chars = "1234567890";
		var string = "";
		for (var ii = 0; ii < 7; ii++) {
		string += chars[Math.floor(Math.random() * chars.length)];
		}

		return string;
	}	

}

module.exports = new SDaddNoteActions();