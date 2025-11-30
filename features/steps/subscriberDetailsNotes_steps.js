const {Given, When, Then} = require("@cucumber/cucumber");
const subscriberDetailsNotesActions = require('../support/subscriberDetailsNotesActions');
const subscriberlistActions = require('../support/subscriberlistActions');
const Utils = require('../support/utils');


When(/^I add a note$/, function() {
	subscriberDetailsNotesActions.clickOnThreeDotsMenu();
	subscriberDetailsNotesActions.clickOnNotesOptionOnMenu();
	subscriberDetailsNotesActions.writeNotes();
	subscriberDetailsNotesActions.saveNotes();
});

When(/^I make sure that note is already added for the customer$/, () => {
	subscriberDetailsNotesActions.clickOnThreeDotsMenu();
	subscriberDetailsNotesActions.clickOnNotesOptionOnMenu();
	subscriberDetailsNotesActions.writeNotes();
	subscriberDetailsNotesActions.saveNotes();
});

When(/^I make sure that Private note is already added for the customer$/, () => {
	subscriberDetailsNotesActions.clickOnThreeDotsMenu();
	subscriberDetailsNotesActions.clickOnNotesOptionOnMenu();
	subscriberDetailsNotesActions.writeNotes();
	subscriberDetailsNotesActions.clickMarkAsPrivateToSelect();
	subscriberDetailsNotesActions.saveNotes();
	subscriberDetailsNotesActions.closeNotesPopup();
});

When(/^I click on customer record$/, () => {
	subscriberDetailsNotesActions.clickCustomerID();
});

When(/^I click on logs$/, () => {
	subscriberDetailsNotesActions.openLogsTab();
});

When(/^I click on note filter$/, () => {
	subscriberDetailsNotesActions.openNoteFilter();

});

When(/^I select the note filter in logs section$/, () => {
	subscriberDetailsNotesActions.openLogsTab();
	subscriberDetailsNotesActions.openNoteFilter();
	
});

When(/^I can set a note as private$/, () => {
	subscriberDetailsNotesActions.clickOnNoteEditIcon();
	subscriberDetailsNotesActions.markingNoteAsPrivate();
});

When(/^I can set a private note as public$/, () => {
	subscriberDetailsNotesActions.clickOnNoteEditIcon();
	subscriberDetailsNotesActions.markingNoteAsPublic();
});

When(/^I delete the note$/, () => {
	subscriberDetailsNotesActions.deletionOfNote();
});

When(/^I click on the deleted note$/, () => {
	subscriberDetailsNotesActions.openNoteFilter();
	browser.pause(1000);
	subscriberDetailsNotesActions.openNoteFilter();
	subscriberDetailsNotesActions.openDeletedNote();
});

When(/^I can update the note$/, () => {
	subscriberDetailsNotesActions.clickOnNoteEditIcon();
	subscriberDetailsNotesActions.updateNotes();
	subscriberDetailsNotesActions.saveNotes();	
});

Then(/^I see contents of the note is updated in the logs$/, () => {
	subscriberDetailsNotesActions.openNoteFilter();
	browser.pause(1000);
	subscriberDetailsNotesActions.openNoteFilter();
	subscriberDetailsNotesActions.viewingUpdatedNote ();
	Utils.clearLocalStorage();	
});

Then(/^I see contents of the deleted note$/, () => {
	subscriberDetailsNotesActions.viewingDeletedNote ();
	Utils.clearLocalStorage();
});

Then(/^the deleted note type will be set as NOTE - REMOVE in the logs$/, () => {
	subscriberDetailsNotesActions.openNoteFilter();
	browser.pause(1000);
	subscriberDetailsNotesActions.openNoteFilter();
	subscriberDetailsNotesActions.deletedNoteVerification();
	Utils.clearLocalStorage();

});

Then(/^I see an eye icon is not present next to the note type in the logs$/, () => {
	subscriberDetailsNotesActions.openNoteFilter();
	browser.pause(1000);
	subscriberDetailsNotesActions.openNoteFilter();
	subscriberDetailsNotesActions.checkEyeIconWithPublicNote();
	Utils.clearLocalStorage();
});

Then(/^I see an eye icon is present next to the note type in the logs$/, () => {
	subscriberDetailsNotesActions.openNoteFilter();
	browser.pause(1000);
	subscriberDetailsNotesActions.openNoteFilter();
	subscriberDetailsNotesActions.checkEyeIconWithPrivateNote ();
	Utils.clearLocalStorage();
});

Then(/^I can see the note is added in the logs$/, () => {
	subscriberDetailsNotesActions.verifyThatNoteIsAdded();
	Utils.clearLocalStorage();
});

