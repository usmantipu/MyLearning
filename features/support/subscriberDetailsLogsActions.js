var LoginPage = require('../pageobjects/login.page');
var SubLogs = require('../pageobjects/subscriberDetailsLogs.page');
var SubListPage = require('../pageobjects/subscriberlist.page');
var Utils = require('./utils');
var expect = require('chai').expect;
var should = require('chai').should();
const os = require('os'); // for current os
const fs = require('fs'); // for files on os
const path = require('path');//to get path

class subscriberDetailsLogsActions {
    constructor() {
		this.fileName = 'vispAutomation.jpg';
		this.noteToSend ='visp automation';
		this.firstFilter;
		this.secondFilter;
		this.ticketSummaryValue;
		this.deleteConfMsg='Delete Successfully';
		this.logActivityText='EQUIPMENT - ADD';
		this.equipmentDetails;

    }
    openSubscriberList(){
        this.refreshSubListOnError();
		SubListPage.subscribersmenu.waitForExist();
		SubListPage.subscribersmenu.waitForDisplayed();
		SubListPage.subscribersmenu.click();
		browser.pause(2000);
		console.log('I open subscriber list');
		SubListPage.subscribersCaption.click(); // to click on white space to remove the tooltip over subscriber icon
        //clicking on any subscriber
        browser.pause(2000);
		SubLogs.btn_All.click();
        browser.pause(2000);
		SubLogs.btn_PaidUp.click();
        SubListPage.selectFirstSubscriber.waitForDisplayed();
        SubListPage.selectFirstSubscriber.click();
        browser.pause(2000);
	}

	openSubscriberListAll(){
        this.refreshSubListOnError();
		SubListPage.subscribersmenu.waitForExist();
		SubListPage.subscribersmenu.waitForDisplayed();
		SubListPage.subscribersmenu.click();
		browser.pause(2000);
		console.log('I open subscriber list');
		SubListPage.subscribersCaption.click(); // to click on white space to remove the tooltip over subscriber icon
        //clicking on any subscriber
        browser.pause(2000);
		SubLogs.btn_All.click();
        browser.pause(2000);
	}

	openFirstRecord()
	{
		SubListPage.openFirstRecord.waitForDisplayed();
		SubListPage.openFirstRecord.click();
		browser.pause(6000);

	}

	
	addAnEquipmentActivityLog()
	{
		//browser.pause(9000);
		SubListPage.btnAddEquipmentLog.waitForDisplayed();
		SubListPage.btnAddEquipmentLog.waitForClickable();
		SubListPage.btnAddEquipmentLog.click();
		browser.pause(6000);
		console.log('going to select 1st item');
		SubListPage.selectFirstEquipmentItem.waitForDisplayed();
		SubListPage.selectFirstEquipmentItem.moveTo();
		browser.pause(500);
		//SubListPage.selectFirstEquipmentItem.waitForClickable();
		SubListPage.selectFirstEquipmentItem.click();
		//browser.pause(3000);
		console.log('1st item get selected');
		SubListPage.btnaddAndConfigure.waitForDisplayed();
		SubListPage.btnaddAndConfigure.waitForClickable();
		SubListPage.btnaddAndConfigure.click();
		browser.pause(5000);
		//SubListPage.addedEquipmentDetails[0].waitForDisplayed();
		//SubListPage.addedEquipmentDetails[0].waitForClickable();
		//SubListPage.addedEquipmentDetails[0].click();
		//browser.pause(3000);
		//SubListPage.equipmentFromPopUp.waitForDisplayed();
		//this.equipmentDetails =SubListPage.equipmentFromPopUp.getText();
		//console.log('added equipment details is' + this.equipmentDetails);
		SubListPage.closePopUp.click();
		//SubListPage.btnCloseUpperTab.waitForDisplayed();
		//SubListPage.btnCloseUpperTab.waitForClickable();
		//SubListPage.btnCloseUpperTab.click();
		browser.pause(2000);

	}

	clickOnEquipmentFilter()
	{
		//browser.pause(6000);
		SubListPage.btnEquipmentFilter.waitForDisplayed({timeout: 9000});
		SubListPage.btnEquipmentFilter.waitForClickable({timeout: 9000});
		SubListPage.btnEquipmentFilter.click();
		//browser.pause(3000);

	}

	seeLogsUsingTransaction()
	{
		browser.pause(2000);
		SubListPage.goToLogsUsingTransaction.waitForDisplayed();
		SubListPage.goToLogsUsingTransaction.waitForClickable();
		SubListPage.goToLogsUsingTransaction.click();
		browser.pause(2000);
	}

    refreshSubListOnError()
	{
		browser.pause(5000);
		if(SubListPage.pageLoadError.isExisting())
		{
			if(SubListPage.pageLoadError.getText().includes('Sorry, something went wrong. Please try again.'))
			{
				SubListPage.btnSubListRefresh(SubListPage.pageLoadError).click();
			}
		}
		browser.pause(5000);
	}

	reopenFirstSubscriber()
	{
		SubListPage.selectFirstSubscriber.waitForDisplayed();
        SubListPage.selectFirstSubscriber.click();
        browser.pause(5000);
	}

	clickOnLogsButton() {
		browser.pause(4000);
		SubLogs.btnTransactions.waitForDisplayed();
		//SubLogs.btnTransactions.click();//logs button directly is not working
		SubLogs.btnLogs.waitForDisplayed();
		SubLogs.btnLogs.waitForClickable();
		SubLogs.btnLogs.click();
		browser.pause(4000);
	}

	clickOnFilter(filter) {
		switch (filter) {
			case 'All':
				SubLogs.sortingFilter[8].click();
				break;
			case 'Email':
				SubLogs.sortingFilter[9].click();
				break;
			case 'Ticket':
				SubLogs.sortingFilter[10].click();
				break;
			case 'Note':
				SubLogs.sortingFilter[11].click();
				break;
			case 'Attachment':
				SubLogs.sortingFilter[13].click();
				break;
			case 'Logs':
				SubLogs.sortingFilter[16].click();
				break;
			default:
				break;
		}
	}
	sendEmail() {
		SubLogs.threeDotedBtn.click();
		browser.pause(2000);
		SubLogs.templeteBtn.click();
		browser.pause(2000);
		SubLogs.emailAboutHighUsage.click();
		browser.pause(2000);
		SubLogs.emailSendBtn.click();
		browser.pause(2000);
		this.openSubscriberList();
	}
	sendNote() {
		SubLogs.threeDotedBtn.click();
		browser.pause(2000);
		SubLogs.noteBtn.click();
		this.noteToSend = 'Note' + (Math.floor(new Date() / 1000));
		browser.pause(2000);
		SubLogs.noteTextArea.setValue(this.noteToSend);
		SubLogs.btnSaveNote.click();
		browser.pause(5000);
	}

	addAnAttachment()
	{
		SubLogs.threeDotedBtn.click();
		browser.pause(1000);
		SubLogs.btnMenuAttachment.click();
		browser.pause(2000);
		var filePath = __dirname;
		filePath = filePath.substring(0,filePath.lastIndexOf(this.slash));
		filePath = filePath.substring(0,filePath.lastIndexOf(this.slash));
		console.log('current file path is'+filePath);
		this.fileName = 'vispAutomation.jpg';
		filePath =path.join(filePath,this.fileName);
		browser.addCommand('chooseFile', function (localFilePath) {
			const remoteFile = browser.uploadFile(localFilePath);
			this.addValue(remoteFile);
		}, true);
		SubLogs.fileAttachment.chooseFile(filePath);
		browser.pause(3000);
		SubLogs.btnDialogAddAttachement.click();
	}

	selectMultipleFilters(filters)
	{
		browser.pause(5000);
		var valuesToSend = filters.raw();
		this.firstFilter = valuesToSend[0][0];
		this.secondFilter = valuesToSend[0][1];
		this.clickOnFilter(this.firstFilter);
		this.clickOnFilter(this.secondFilter);
	}

	openFirstItem()
	{
		browser.pause(4000);
		SubLogs.firstItemOfLogs.waitForDisplayed();
		var allOtherValues = SubLogs.allSelectedLogsFilterValues;
		allOtherValues[0].click();
		browser.pause(4000);
	}

	expandLogsDottedMenu()
	{
		browser.pause(4000);
		SubLogs.expandLogsDottedMenu.waitForDisplayed();
		SubLogs.expandLogsDottedMenu.click();
	}

	addTicketFromLogs()
	{
		this.expandLogsDottedMenu();
		SubLogs.selecAddtTicket.waitForDisplayed();
		SubLogs.selecAddtTicket.waitForClickable();
		SubLogs.selecAddtTicket.click();
		browser.pause(2000);
		SubLogs.selectTicketType.waitForClickable();
		SubLogs.selectTicketType.click();
		SubLogs.autocompleteDialouge.waitForDisplayed();
		SubLogs.autocompleteDialouge.waitForClickable();
		browser.pause(2000);
		browser.keys("\uE015"); // press down arrow key to select the first item list.
      	browser.pause(500);
      	browser.keys("\uE007"); // press enter key
      	browser.pause(1000);
		this.ticketSummaryValue = 'T-Sum' + (Math.floor(new Date() / 1000));
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		SubLogs.ticketSummary.scrollIntoView();
		SubLogs.ticketSummary.waitForClickable();
		SubLogs.ticketSummary.click();
		SubLogs.ticketSummary.keys(clearKeys);
		browser.pause(1000);
		SubLogs.ticketSummary.setValue(this.ticketSummaryValue);
		// browser.keys("\uE004");//Tab key
		// browser.keys("\uE004");
		// browser.keys("\uE004");
		// browser.keys("\uE004");
		// var allcharacters = this.ticketSummaryValue.split("");
		// for(var i=0; i<allcharacters.length; i++){
		// 	let key = allcharacters[i];
		// 	browser.keys(key);
		// 	browser.pause(500);
		// 	}
		// browser.pause(1000);
		SubLogs.btnTicketEdit.scrollIntoView();
		SubLogs.btnTicketEdit.waitForClickable();
		SubLogs.btnTicketEdit.click();
		SubLogs.ticketEditor.setValue(this.ticketSummaryValue);
		//SubLogs.btnSaveTicket.click();
		SubLogs.btnOkEditorMsg.waitForClickable();
		SubLogs.btnOkEditorMsg.click();
		browser.pause(2000);
		console.log('all save buttons are '+SubLogs.btnSaveTicket.length);
		let indexOfLast = SubLogs.btnSaveTicket.length;
		SubLogs.btnSaveTicket[indexOfLast-1].waitForClickable();
		if(SubLogs.btnSaveTicket[indexOfLast-1].isClickable())
		{
			SubLogs.btnSaveTicket[indexOfLast-1].click();
			browser.pause(4000);
			SubLogs.closeTicketDoc.waitForClickable();
			SubLogs.closeTicketDoc.click();
			this.reopenFirstSubscriber();
		}
	}

	addTicketToMergeFromLogs()
	{
		this.expandLogsDottedMenu();
		SubLogs.selecAddtTicket.waitForDisplayed();
		SubLogs.selecAddtTicket.waitForClickable();
		SubLogs.selecAddtTicket.click();
		browser.pause(2000);
		SubLogs.selectTicketType.click();
		SubLogs.autocompleteDialouge.waitForDisplayed({ timeout: 50000 });
		SubLogs.autocompleteDialouge.waitForClickable({ timeout: 50000 });
		browser.pause(2000);
		browser.keys("\uE015"); // press down arrow key to select the first item list.
      	browser.pause(500);
      	browser.keys("\uE007"); // press enter key
      	browser.pause(1000);
		this.ticketSummaryValue = 'T-Sum' + (Math.floor(new Date() / 1000));
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		SubLogs.ticketSummary.scrollIntoView();
		SubLogs.ticketSummary.waitForClickable();
		SubLogs.ticketSummary.click();
		SubLogs.ticketSummary.keys(clearKeys);
		browser.pause(1000);
		SubLogs.ticketSummary.setValue(this.ticketSummaryValue);
		// browser.keys("\uE004");//Tab key
		// browser.keys("\uE004");
		// browser.keys("\uE004");
		// browser.keys("\uE004");
		// var allcharacters = this.ticketSummaryValue.split("");
		// for(var i=0; i<allcharacters.length; i++){
		// 	let key = allcharacters[i];
		// 	browser.keys(key);
		// 	browser.pause(500);
		// 	}
		// browser.pause(2000);
		SubLogs.btnTicketEdit.click();
		SubLogs.ticketEditor.setValue(this.ticketSummaryValue);
		browser.pause(3000);
		SubLogs.btnSaveTicket.waitForClickable();
		SubLogs.btnSaveTicket.click();
		SubLogs.btnSaveTicket.waitForClickable();
		SubLogs.btnSaveTicket.click();
		browser.pause(7000);
	}

	deleteFirstItemFromLogs()
	{
		browser.pause(4000);
		//var allOtherValues = SubLogs.allSelectedLogsFilterValues;
		//let itemindex = allOtherValues[2];
		if(SubLogs.closeReopenedTicketDoc.isExisting())
		{SubLogs.closeReopenedTicketDoc.click();}
		this.clickOnFilter('Ticket');
		SubLogs.firstItemOfLogs.waitForDisplayed();
		browser.pause(1000);
		console.log('going to select Ticket tab');
		//this.clickOnFilter('Ticket');
		browser.pause(2000);
		browser.keys("\uE004");//Tab key
		browser.pause(1000);
		browser.keys("\uE004");//Tab key
		browser.pause(1000);
		browser.keys("\uE004");//Tab key
		browser.pause(1000);
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
		browser.keys(key);
		browser.keys(key);
		// browser.keys(key);
		// browser.keys(key);
		// browser.keys(key);
		// browser.keys(key);
		// browser.keys(key);
		//browser.keys(['\uE00C']);
		console.log('going to select first logs item');
		browser.pause(3000);
		SubLogs.firstItemOfLogs.waitForDisplayed();
		var allOtherValues = SubLogs.allSelectedLogsFilterValues;
		console.log('value of 1st items is '+allOtherValues[0].getText());
		console.log('value of 2nd items is '+allOtherValues[1].getText());
		console.log('value of 3rd items is '+allOtherValues[2].getText());
		console.log('value of 4th items is '+allOtherValues[3].getText());
		var itemindex = allOtherValues[3];
		browser.pause(1000);
		//itemindex.scrollIntoView();
		itemindex.moveTo();
		browser.pause(100);
		SubLogs.btnRemoveItem.waitForDisplayed();
		SubLogs.btnRemoveItem.waitForClickable();
		SubLogs.btnRemoveItem.click();
		browser.pause(2000);
		SubLogs.btnDeleteFromDialog.click();
	}

	searchOnLogs()
	{
		//SubLogs.searchInputOfLogs.clear();
		SubLogs.searchInputOfLogs.scrollIntoView();
		SubLogs.searchInputOfLogs.setValue(this.noteToSend);
		browser.pause(2000);
	}



	verifyLogsSectionExists() {
		browser.pause(2000);
		expect(SubLogs.logsSection()).to.be.true;
	}
	verifyLogsDecending() {
		browser.pause(5000);
		var getAllHeaders = SubLogs.allHeaders;
		var alllogitems = SubLogs.logsData;
		var totalHeadersLength = getAllHeaders.length;
		//console.log('total length is' + totalHeadersLength);
		var val_1_Log = alllogitems[0].getText();
		var val_2_Log = alllogitems[totalHeadersLength].getText();
		//console.log('got date 1 text' + val_1_Log);
		//console.log('got date 2 text' + val_2_Log);
		var firstDate = new Date(val_1_Log);
		var secondDate = new Date(val_2_Log);
		//console.log('got date 1 is' + firstDate);
		//console.log('got date 2 is' + secondDate);
		if(Number(secondDate) < Number(firstDate))
			expect(true).eql(true);
		else if(Number(secondDate) === Number(firstDate))
			expect(true).eql(true);
		else
			expect(false).eql(true);
	}
	verifyAllTypesOfLogs() {
		browser.pause(2000);
		expect(SubLogs.sortingFilter[8].getText()).not.eql(SubLogs.typeOfFirstLog.getText());
	}
	verifyEmailTypesOfLogs() {
		browser.pause(2000);
		expect(SubLogs.typeOfFirstLog.getText().includes('EMAIL')).to.be.true;

	}
	verifyNoteTypesOfLogs() {
		browser.pause(2000);
		expect(SubLogs.typeOfFirstLog.getText().includes(SubLogs.sortingFilter[11].getText())).to.be.true;

	}
	verifyTicketTypesOfLogs() {
		browser.pause(2000);
		expect(SubLogs.sortingFilter[10].getText()).eql(SubLogs.typeOfFirstLog.getText());
	}

	verifyAttachmentLogs(type)
	{
		browser.pause(5000);
		var valuesToVerify = type.raw();
		var allOtherValues = SubLogs.allSelectedLogsFilterValues;
		expect(allOtherValues[2].getText()).eql(valuesToVerify[0][0]);
		expect(allOtherValues[3].getText()).eql(this.fileName+' via UBO Web');		
	}

	verifyLogsFilter(logstype)
	{
		browser.pause(2000);
		var valuesToVerify = logstype.raw();
		var allOtherValues = SubLogs.allSelectedLogsFilterValues;
		for (var i = 2; i < allOtherValues.length; i=i+4) {
			expect(allOtherValues[i].getText()).to.not.equal(valuesToVerify[0][0]);
			expect(allOtherValues[i].getText()).to.not.equal(valuesToVerify[1][0]);
			expect(allOtherValues[i].getText()).to.not.equal(valuesToVerify[2][0]);
			expect(allOtherValues[i].getText()).to.not.equal(valuesToVerify[3][0]);
			expect(allOtherValues[i].getText()).to.not.equal(valuesToVerify[4][0]);
		}
	}
	verifySelectedTypesOfActivity(logstype)
	{
		browser.pause(5000);
		if(SubLogs.closeReopenedTicketDoc.isExisting())
		{SubLogs.closeReopenedTicketDoc.click();}
		browser.pause(7000);
		//this.seeLogsUsingTransaction();
		var valuesToVerify = logstype.raw();
		SubLogs.firstItemOfLogs.waitForDisplayed();
		var allOtherValues = SubLogs.allSelectedLogsFilterValues;
		console.log('extracted value of 1st row is '+allOtherValues[2].getText());
		console.log('extracted value of 2nd row is '+allOtherValues[6].getText());
		expect(this.isTextPresent(allOtherValues,valuesToVerify[0][0])).to.be.true;
		console.log('Ticket verified');
		expect(this.isTextPresent(allOtherValues,valuesToVerify[0][1])).to.be.true;
		console.log('Note verified');
		 //expect(allOtherValues[2].getText().includes(valuesToVerify[0][0])).to.be.true;
		 //expect(allOtherValues[6].getText().includes(valuesToVerify[0][1])).to.be.true;
	}
	isTextPresent(arr,searchText)
	{
		let found = false;

		for (let i = 0; i < arr.length; i++) {
			if (arr[i].getText() === searchText) {
				found = true;
				break; // Stop the loop if text is found
			}
		}
		return found;
	}
	verifyDetailsOfNote()
	{
		//console.log('extracted text is' + SubLogs.contentOfDialog.getText());
		SubLogs.contentOfDialog.getText().includes(this.noteToSend)
	}

	verifyNewTicketAdded()
	{
		browser.pause(5000);
		if(SubLogs.closeReopenedTicketDoc.isExisting())
		{SubLogs.closeReopenedTicketDoc.click();}
		browser.pause(7000);
		this.seeLogsUsingTransaction();
		var allOtherValues = SubLogs.allSelectedLogsFilterValues;
		expect(allOtherValues[2].getText()).to.eql('TICKET');
	}

	verifyTicketRemoved()
	{
		browser.pause(4000);
		if(SubLogs.noDatAvailablefromLogs.isExisting())
		{
			expect(1).to.eql(1);//true/passed condition, ticket has been removed
		}
		else{
			browser.pause(2000);
			var getAllHeaders = SubLogs.allHeaders;
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
			var updatedContents = SubLogs.allColumnsData[indexOfType];
			console.log('value of first details '+updatedContents.getText());
			expect(updatedContents.getText()).to.not.equal(this.ticketSummaryValue);}

	}

	verifyItemSearchedSuccessfully()
	{
		browser.pause(4000);
		var allOtherValues = SubLogs.allSelectedLogsFilterValues;
		expect(allOtherValues[3].getText()).to.eql(this.noteToSend);
	}

	VerifyEquipmentActivityLog()
	{
		//browser.pause(3000);
		SubListPage.activityLogTypeText.waitForDisplayed({timeout: 9000});
		var activityLogText=SubListPage.activityLogTypeText.getText();
		expect(activityLogText).to.eql(this.logActivityText);
	    browser.pause(2000);
		SubListPage.activityLogTypeText.waitForClickable({timeout:9000});
		SubListPage.activityLogTypeText.click();
		browser.pause(2000);
		SubListPage.equipmentFromPopUp.waitForDisplayed({timeout: 12000});
		var detailsFromLogs =SubListPage.equipmentFromPopUp.getText();
		console.log('added equipment detail '+detailsFromLogs);
		//expect(this.equipmentDetails.includes(detailsFromLogs)).to.be.true;
	}
}
module.exports = new subscriberDetailsLogsActions();
