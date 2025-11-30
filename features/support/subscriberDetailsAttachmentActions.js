var LoginPage = require('../pageobjects/login.page');
var SubAttachment = require('../pageobjects/subscriberDetailsAttachment.page');
var SubListPage = require('../pageobjects/subscriberlist.page');
var Utils = require('./utils');
var expect = require('chai').expect;
var should = require('chai').should();
const os = require('os'); // for current os
const fs = require('fs'); // for files on os
const path = require('path');//to get path

class subscriberDetailsAttachmentActions {
    constructor() {
		this.fileitems ='';
		if (os.platform() === 'win32'){
			this.slash = '\\';
		}else{
			this.slash = '\/';
		}
		this.fileName = 'vispAutomation.jpg';
    }

	reopenFirstSubscriber()
	{
		SubListPage.selectFirstSubscriber.waitForDisplayed();
        SubListPage.selectFirstSubscriber.click();
        browser.pause(5000);
	}

	clickOnLogsButton() {
		browser.pause(4000);
		SubAttachment.btnTransactions.waitForDisplayed();//logs button directly is not working
		SubAttachment.btnTransactions.click();//logs button directly is not working
		SubAttachment.btnLogs.waitForDisplayed();
		SubAttachment.btnLogs.click();
		browser.pause(2000);
	}

	clickOnFilter(filter) {
		switch (filter) {
			case 'All':
				SubAttachment.sortingFilter[8].click();
				break;
			case 'Email':
				SubAttachment.sortingFilter[9].click();
				break;
			case 'Ticket':
				SubAttachment.sortingFilter[10].click();
				break;
			case 'Note':
				SubAttachment.sortingFilter[11].click();
				break;
			case 'Attachment':
				SubAttachment.sortingFilter[13].click();
				break;
			case 'Logs':
				SubAttachment.sortingFilter[16].click();
				break;
			default:
				break;
		}
	}

	addAnAttachment()
	{
		SubAttachment.threeDotedBtn.click();
		browser.pause(1000);
		SubAttachment.btnMenuAttachment.click();
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
		SubAttachment.fileAttachment.chooseFile(filePath);
	}

	clickAddAttachment()
	{
		browser.pause(2000);
		SubAttachment.btnDialogAddAttachement.click();
		browser.pause(2000);
	}

	markAttachmentAsPrivate()
	{
		browser.pause(2000);
		SubAttachment.btnMarkAttachmentAsPrivate.click();
	}

	openFirstItem()
	{
		browser.pause(4000);
		var allOtherValues = SubAttachment.allSelectedLogsFilterValues;
		allOtherValues[0].click();
		browser.pause(4000);
	}


	expandLogsDottedMenu()
	{
		SubAttachment.expandLogsDottedMenu.waitForDisplayed();
		SubAttachment.expandLogsDottedMenu.click();
	}

	downloadAnAttachment()
	{
		browser.pause(4000);
		SubAttachment.btnDownload.click();
		browser.pause(5000);
		
	}

	deleteFirstItemFromLogs()
	{
		browser.pause(5000);
		SubAttachment.closeOpenedDock.click();
		this.reopenFirstSubscriber();
		this.clickOnLogsButton();
		var allOtherValues = SubAttachment.allSelectedLogsFilterValues;
		let itemindex = allOtherValues[2];
		this.clickOnFilter('Attachment');
		browser.pause(2000);
		// browser.keys("\uE004");//Tab key
		// browser.pause(500);
		// browser.keys("\uE004");
		// browser.pause(2000);
		allOtherValues[2].click();
		SubAttachment.closeOPenedPopUp.waitForDisplayed();
		SubAttachment.closeOPenedPopUp.click();
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
		allOtherValues = SubAttachment.allSelectedLogsFilterValues;
		itemindex = allOtherValues[2];
		browser.pause(1000);
		itemindex.moveTo();
		browser.pause(1500);
		//console.log('total count for close button is '+SubAttachment.btnRemoveItem.length);
		//let indexOfClose = SubAttachment.btnRemoveItem.length;
		SubAttachment.btnRemoveItem.moveTo();
		SubAttachment.btnRemoveItem.click();
		browser.pause(4000);
		SubAttachment.btnDeleteFromDialog.click();
		browser.pause(3000);
	}

	verifyAttachmentLogs()
	{
		browser.pause(7000);
		var allOtherValues = SubAttachment.allSelectedLogsFilterValues;
		expect(allOtherValues[2].getText()).eql('ATTACHMENT - ADD');
		expect(allOtherValues[3].getText()).eql(this.fileName+' via UBO Web');		
	}

	verifyPrivateAttachment()
	{
		browser.pause(7000);
		var allOtherValues = SubAttachment.allSelectedLogsFilterValues;
		expect(SubAttachment.btnPrivateAttachment(allOtherValues[2]).isExisting()).to.be.true;
		expect(allOtherValues[3].getText()).eql(this.fileName+' via UBO Web');
	}

	verifyAttachmentDeleted()
	{
		browser.pause(7000);
		var allOtherValues = SubAttachment.allSelectedLogsFilterValues;
		console.log('0 index value is '+allOtherValues[0].getText());
		allOtherValues[0].scrollIntoView();
		console.log('attachment removed text is '+allOtherValues[1].getText());
		expect(allOtherValues[1].getText()).not.eql('ATTACHMENT - ADD');
	}

	verifyDeletedAttachmentView()
	{
		browser.pause(2000);
		var allOtherValues = SubAttachment.allSelectedLogsFilterValues;
		var logsHeader = SubAttachment.logsSectionHeader;
		if(logsHeader.length===3)
		{
			browser.pause(2000);
			allOtherValues = SubAttachment.allSelectedLogsFilterValues;
			allOtherValues[0].scrollIntoView();
			expect(allOtherValues[0].getText()).eql('ATTACHMENT - REMOVE');
		}
		else
		{
			allOtherValues[0].scrollIntoView();
			expect(allOtherValues[1].getText()).eql('ATTACHMENT - REMOVE');
		}
	}

	verifyAttachmentDownloaded()
	{
		browser.pause(2000);
		let downloadPath = this.getCurrentLocalOsDrivePath(this.slash + 'Downloads');
		var pattern=RegExp(this.fileName);//Enter file extension here
		fs.readdir(downloadPath,(err,files)=>{
		if(files.find((file)=>{return pattern.test(file)===true;})){
			expect('1').to.eql('1');
        }
       else{
			expect('0').to.eql('1');
        }
    });
	}
	getCurrentLocalOsDrivePath(folderName)
	{
		let currentOS = os.platform();
		//console.log('current os is:'+currentOS);
		let folderPath = '';
		if(folderName)
		{folderPath = os.homedir()+folderName;}
		else{folderPath = os.homedir();}
		//console.log('current os folderPath is :'+folderPath);
		return folderPath;
	}
}
module.exports = new subscriberDetailsAttachmentActions();
