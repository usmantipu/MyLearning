var Utils = require('./utils');
const SDaddAttachment= require('../pageobjects/SDAddAttachment.page.js');
var Utils = require('./utils');
var expect = require('chai').expect;
var should = require('chai').should();
const os = require('os'); // for current os
const fs = require('fs'); // for files on os
const path = require('path');//to get path

class SDaddAttachmentActions{

    constructor(){

		this.fileitems ='';
		if (os.platform() === 'win32'){
			this.slash = '\\';
		}else{
			this.slash = '\/';
		}
		this.fileName = 'vispAutomation.jpg';
		this.pngFileName = 'vispPNGAutomation.png';
    }

     CRMaddAnAttachment(){
		console.log('going to add attachment');
		browser.pause(7000);
		var jpgfilePath = __dirname;
		jpgfilePath = jpgfilePath.substring(0,jpgfilePath.lastIndexOf(this.slash));
		jpgfilePath = jpgfilePath.substring(0,jpgfilePath.lastIndexOf(this.slash));
		jpgfilePath =path.join(jpgfilePath,this.fileName);
		browser.addCommand('chooseFile', function (jpgfilePath) {
			const remoteFile = browser.uploadFile(jpgfilePath);
			this.addValue(remoteFile);
		}, true);
		SDaddAttachment.fileAttachment.chooseFile(jpgfilePath);
		console.log('attachment added');
	}

	closeCurrentTicketDock()
	{
		browser.pause(5000);
		SDaddAttachment.btnCloseTicket.waitForDisplayed();
		SDaddAttachment.btnCloseTicket.waitForExist();
		SDaddAttachment.btnCloseTicket.click();
	}

	CRMaddAnAttachmentPNG(){
		var pngfilePath = __dirname;
		pngfilePath = pngfilePath.substring(0,pngfilePath.lastIndexOf(this.slash));
		pngfilePath = pngfilePath.substring(0,pngfilePath.lastIndexOf(this.slash));
		pngfilePath =path.join(pngfilePath,this.pngFileName);
		browser.addCommand('chooseFile', function (pngfilePath) {
			const remoteFile = browser.uploadFile(pngfilePath);
			this.addValue(remoteFile);
		}, true);
		SDaddAttachment.secondFileAttachment.chooseFile(pngfilePath);
		console.log('PNG attachment added');
	}

	CRMAttachDiffFiles(fileTypes)
	{
		this.CRMaddAnAttachment();
		browser.pause(2000);
		this.closeCurrentTicketDock();
		browser.pause(3000);
		this.openFirstItemFromList();
		browser.pause(3000);
		this.CRMaddAnAttachmentPNG();
		browser.pause(2000);
		// var allFileTypes = fileTypes.raw();
		// if(allFileTypes[0][0]==='.jpg'){this.CRMaddAnAttachment();this.closeCurrentTicketDock();}
		// if(allFileTypes[1][0]==='.png')
		// {
		// 	this.openFirstItemFromList();
		// 	this.CRMaddAnAttachmentPNG();
		// }
	}

	openActivityLogs()
	{
		browser.pause(2000);
		SDaddAttachment.btnTicketActivity.click();
		console.log('going to open activity logs');
		browser.pause(3000);
	}

	openISPLogsFromSettings()
	{
		SDaddAttachment.btnAppIcon.click();
		browser.pause(2000);
		SDaddAttachment.btnISPLogsFromSettings.click();
		browser.pause(3000);
		SDaddAttachment.btnISP.click();
		browser.pause(3000);
	}

	openFirstItemFromList()
	{
		SDaddAttachment.btnFirstRecord.waitForDisplayed();
		SDaddAttachment.btnFirstRecord.waitForClickable();
		SDaddAttachment.btnFirstRecord.click();
		browser.pause(7000);
	}
	

	verifySavedAttachment(){
		//SDaddAttachment.btnCloseTicket.waitForExist();
		this.openFirstItemFromList();
		browser.pause(2000);
		var attachmentTexts = SDaddAttachment.getAllUploadedAttchments.map(el => el.getText());
		//expect(SDaddAttachment.uploadedFileLable.getText()).to.eql(this.fileName);
		expect(attachmentTexts.includes(this.fileName)).to.be.true;
		//expect(SDaddAttachment.uploadedFileLable.getText()).to.eql(this.fileName);
	}

	verifyDiffAttachments()
	{
		//SDaddAttachment.btnCloseTicket.waitForExist();
		this.openFirstItemFromList();
		browser.pause(2000);
		var attachmentTexts = SDaddAttachment.getAllUploadedAttchments.map(el => el.getText());
		//expect(SDaddAttachment.uploadedFileLable.getText()).to.eql(this.fileName);
		expect(attachmentTexts.includes(this.fileName)).to.be.true;
		console.log('1st verified');
		//expect(SDaddAttachment.uploadedSecondFileLable.getText()).to.eql(this.pngFileName);
		expect(attachmentTexts.includes(this.pngFileName)).to.be.true;
		console.log('2nd verified');
	}

	verifyAttachmentActivitLogs()
	{
		browser.pause(3000);
		SDaddAttachment.activityLogs.click();
		console.log('Activity logs clicked');
		browser.pause(2000);
		var allPopText = SDaddAttachment.activityPopUpLogs.map(el => el.getText());
		console.log('actual file value is '+this.fileName);
		console.log('All Popup Texts:', allPopText);
		expect(allPopText.flat().some(text => text.includes(this.fileName) || text.includes(this.pngFileName))).to.be.true;
	}

	verifyISPLogs()
	{
		var allIspLogs = SDaddAttachment.allISPlogs;
		for (let i = 0; i < allIspLogs.length; i++) {
			if(allIspLogs[i].getText().includes(this.fileName))
			{
				allIspLogs[i-2].click();
				break;
			}
		}
		browser.pause(3000);
		expect(SDaddAttachment.activityPopUpLogs.getText().includes(this.fileName)).to.be.true;
	}

}
module.exports = new SDaddAttachmentActions();