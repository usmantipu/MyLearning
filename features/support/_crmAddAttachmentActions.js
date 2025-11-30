var Utils = require('./utils');
const crmaddAttachment= require('../pageobjects/_crmAddAttachment.page.js');
var Utils = require('./utils');
var expect = require('chai').expect;
var should = require('chai').should();
const os = require('os'); // for current os
const fs = require('fs'); // for files on os
const path = require('path');//to get path
const { firstRowContentsOfCol } = require('../pageobjects/serviceDesk.page');

class crmaddAttachmentActions{

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
		browser.pause(7000);
		var filePath = __dirname;
		filePath = filePath.substring(0,filePath.lastIndexOf(this.slash));
		filePath = filePath.substring(0,filePath.lastIndexOf(this.slash));
		filePath =path.join(filePath,this.fileName);
		browser.addCommand('chooseFile', function (localFilePath) {
			const remoteFile = browser.uploadFile(localFilePath);
			this.addValue(remoteFile);
		}, true);
		crmaddAttachment.fileAttachment.chooseFile(filePath);
	}

	closeCurrentTicketDock()
	{
		browser.pause(5000);
		crmaddAttachment.btnCloseTicket.waitForDisplayed();
		crmaddAttachment.btnCloseTicket.waitForClickable();
		crmaddAttachment.btnCloseTicket.click();
	}

	CRMaddAnAttachmentPNG(){
		var filePath = __dirname;
		filePath = filePath.substring(0,filePath.lastIndexOf(this.slash));
		filePath = filePath.substring(0,filePath.lastIndexOf(this.slash));
		filePath =path.join(filePath,this.pngFileName);
		browser.addCommand('chooseFile', function (localFilePath) {
			const remoteFile = browser.uploadFile(localFilePath);
			this.addValue(remoteFile);
		}, true);
		crmaddAttachment.secondFileAttachment.chooseFile(filePath);
	}

	CRMAttachDiffFiles(fileTypes)
	{
		var allFileTypes = fileTypes.raw();
		if(allFileTypes[0][0]==='.jpg'){this.CRMaddAnAttachment();this.closeCurrentTicketDock();}
		if(allFileTypes[1][0]==='.png')
		{
			this.openFirstItemFromList();
			this.CRMaddAnAttachmentPNG();
		}
		//crmaddAttachment.uploadedFileLable.moveTo();
		//browser.pause(1000);
		//crmaddAttachment.deleteIcon.click();
		//crmaddAttachment.btnConfirmYes.click();
		//browser.pause(3000);
	}

	openActivityLogs()
	{
		browser.pause(2000);
		crmaddAttachment.btnTicketActivity.click();
		browser.pause(3000);
	}

	openISPLogsFromSettings()
	{
		crmaddAttachment.btnAppIcon.click();
		browser.pause(2000);
		crmaddAttachment.btnISPLogsFromSettings.click();
		browser.pause(3000);
		crmaddAttachment.btnISP.click();
		browser.pause(3000);
	}

	openFirstItemFromList()
	{
		crmaddAttachment.btnFirstRecord.waitForDisplayed();
		crmaddAttachment.btnFirstRecord.waitForClickable();
		crmaddAttachment.btnFirstRecord.click();
		browser.pause(7000);
	}
	

	verifySavedAttachment(){
		//crmaddAttachment.btnCloseTicket.waitForExist();
		//this.openFirstItemFromList();
		browser.pause(7000);
		console.log('extracted file name is '+crmaddAttachment.uploadedFileLable.getAttribute('alt'));
		console.log('actual file name is '+this.fileName);
		expect(crmaddAttachment.uploadedFileLable.getAttribute('alt')).to.eql(this.fileName);
	}

	verifyDiffAttachments()
	{
		//crmaddAttachment.btnCloseTicket.waitForExist();
		this.openFirstItemFromList();
		expect(crmaddAttachment.uploadedFileLable.getAttribute('alt')).to.eql(this.fileName);
		console.log('1st verified');
		expect(crmaddAttachment.uploadedSecondFileLable.getAttribute('alt')).to.eql(this.pngFileName);
		console.log('2nd verified');
	}

	verifyAttachmentActivitLogs()
	{
		crmaddAttachment.activityLogs.waitForDisplayed();
		crmaddAttachment.activityLogs.waitForClickable();
		crmaddAttachment.activityLogs.click();
		browser.pause(2000);
		console.log('actual file value is '+this.fileName);
		console.log('extracted value from text is '+crmaddAttachment.activityPopUpLogs.getText());
		expect(crmaddAttachment.activityPopUpLogs.getText().includes(this.fileName)).to.be.true;
	}

	verifyISPLogs()
	{
		var allIspLogs = crmaddAttachment.allISPlogs;
		for (let i = 0; i < allIspLogs.length; i++) {
			if(allIspLogs[i].getText().includes(this.fileName))
			{
				allIspLogs[i-2].click();
				break;
			}
		}
		browser.pause(3000);
		expect(crmaddAttachment.activityPopUpLogs.getText().includes(this.fileName)).to.be.true;
	}

}
module.exports = new crmaddAttachmentActions();