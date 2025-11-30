var Utils = require('./utils');
const crmMergePage = require('../pageobjects/SDMergeTicket.page.js');
const serviceDeskActions = require('../support/serviceDeskActions');
var Utils = require('./utils');
var expect = require('chai').expect;
var should = require('chai').should();
const os = require('os'); // for current os
const fs = require('fs'); // for files on os
const path = require('path');//to get path

class SDmergeTicketActions{

    constructor(){
		this.downArrowKey = ['\ue015'];// arrow down
		this.enterKey = ['\ue007'];// enter
		this.clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];// home + shift + end + del
		this.openedTicketId;this.secondTicketId;this.linkageType;this.summaryData;this.ticketFollower;this.ticketNote;
		this.ticketTask;this.attachmentName;this.scName;this.scPhone;this.scEmail;this.customField;
		this.linkageConfMsg ="Ticket Linked Successfully";
		this.fileitems ='';
		if (os.platform() === 'win32'){
			this.slash = '\\';
		}else{
			this.slash = '\/';
		}
		this.fileName = 'vispAutomation.jpg';
		this.pngFileName = 'vispPNGAutomation.png';
    }

	ClickcloseRightDrawer()
	{
		browser.pause(4000);
		crmMergePage.closeRightDrawer.waitForClickable();
		crmMergePage.closeRightDrawer.click();
		browser.pause(3000);
	}
	
	keepSecondTicketID()
	{
		// browser.pause(9000);
		// crmMergePage.expandSDmenu.waitForDisplayed();
		// crmMergePage.expandSDmenu.waitForClickable();
		// crmMergePage.ticketListFirstItem.waitForDisplayed();
		// crmMergePage.ticketListFirstItem.waitForClickable();
		// crmMergePage.btnResolved.waitForClickable();
        // crmMergePage.btnResolved.click();
        // browser.pause(4000);
		// crmMergePage.ticketListFirstItem.waitForDisplayed();
		// crmMergePage.ticketListFirstItem.waitForClickable();
		// var countOfTotalheaders = crmMergePage.allserviceDeskHeaders.length;
		// //console.log('total headers are' + countOfTotalheaders);
		// let countifID = countOfTotalheaders-1;
		// var ticketListData = crmMergePage.allserviceDeskTextData;
		// // for(var i=0; i<20; i++){
		// // 	console.log(ticketListData[i].getText());
		// // 	}
		// //ticketListData[countifID].waitForDisplayed({ timeout: 9000 });
		// var ticketID = ticketListData[countifID].getText();
		var ticketID = serviceDeskActions.getTicketIDBeforeClosingDrawer();
		console.log('extracted ticket id is' + ticketID);
		this.secondTicketId = ticketID;
		return ticketID;
	}

	keepServiceContact()
	{
		browser.pause(5000);
		var scData = crmMergePage.serviceContactArea;
		var lastindex = scData.length-1;
		this.scName = scData[1].getText();
		console.log('sc name is' + this.scName);
		this.scPhone = scData[3].getText()+scData[4].getText()+scData[5].getText();
		console.log('sc phone is' + this.scPhone);
		this.scEmail = scData[lastindex].getText();
		console.log('sc email is' + this.scEmail);
	}

	openSecondTicket()
	{

		browser.pause(5000);
		crmMergePage.ticketListFirstItem.waitForDisplayed({ timeout: 50000 });
		crmMergePage.ticketListFirstItem.waitForClickable({ timeout: 50000 });
		var countOfTotalheaders = crmMergePage.allserviceDeskHeaders.length;
		let countifID = countOfTotalheaders-1;
		var ticketListData = crmMergePage.allserviceDeskTextData;
		this.secondTicketId = ticketListData[0].getText();
		ticketListData[countifID].click();
		browser.pause(5000);
	}

	updateOpenedTicket()
	{
		browser.pause(1000);
		this.summaryData  = 'AT_Sum_' + (Math.floor(new Date() / 1000));
		crmMergePage.ticketSummary.scrollIntoView();
		crmMergePage.ticketSummary.waitForClickable();
		crmMergePage.ticketSummary.click();
		browser.keys(this.clearKeys);
		browser.pause(1000);
		crmMergePage.ticketSummary.setValue(this.summaryData);
		crmMergePage.btnSaveTickedChnages.waitForClickable({timeout: 90000});
		crmMergePage.btnSaveTickedChnages.click();
		browser.pause(5000);
	}

	keepDataBeforeLinkage()
	{
		this.ticketFollower = crmMergePage.followers[0].getText();
		console.log('fetched follower' + this.ticketFollower);
	}

	linkOpenedTicketToOther(data)
	{
		console.log('going to click linked ticket type');
		browser.pause(5000);
		this.linkageType = data.replace(/['"]+/g, '');
		this.openedTicketId = crmMergePage.dockHeader.getText().replace(/[^\d]/g,'');
		crmMergePage.inputLinkedType.click();
		//browser.keys(this.clearKeys);
		//crmMergePage.inputLinkedType.setValue(this.linkageType);
		crmMergePage.autocompleteDialouge(this.linkageType).waitForClickable({timeout: 5000});
		crmMergePage.autocompleteDialouge(this.linkageType).click();
		browser.pause(1000);
		browser.keys(this.downArrowKey);
		browser.keys(this.enterKey);
		browser.pause(1000);
		console.log('link type get selected');
		crmMergePage.inputLinkedTo.click();
		browser.keys(this.clearKeys);
		browser.pause(1000);
		crmMergePage.inputLinkedTo.setValue(this.secondTicketId);
		browser.pause(5000);
		browser.keys(this.downArrowKey);
		browser.keys(this.enterKey);
		browser.pause(2000);
		var gotTicket = crmMergePage.inputLinkedTo.getText();
		this.secondTicketId = gotTicket.substring(0,gotTicket.indexOf(' '));
	}

	clickLinkedTicket()
	{
		//browser.pause(2000);
		crmMergePage.btnLinkedTicket.waitForClickable({timeout: 25000});
		crmMergePage.btnLinkedTicket.click();
		//browser.pause(2000);
	}

	closeCurrentTicket()
	{
		crmMergePage.openTicketActionOptions.click();
		browser.pause(1000);
		crmMergePage.closeTicket.click();
		browser.pause(1000);
		crmMergePage.btnTicketAction.click();
		browser.pause(1000);
		crmMergePage.inputTicketClose.click();
		crmMergePage.inputTicketClose.setValue("Closing current ticket");
		browser.pause(1000);
		crmMergePage.btnAvoidable.click();
		browser.pause(1000);
		crmMergePage.btnSubmitReport.click();
		browser.pause(3000);
	}

	openFirstTicket()
	{
		crmMergePage.btnResolved.waitForDisplayed();
		crmMergePage.btnResolved.waitForClickable();
		if(crmMergePage.btnResolved.getAttribute('class').includes('active'))
		{
			crmMergePage.btnResolved.click();
			browser.pause(5000);
		}
		crmMergePage.ticketListFirstItem.waitForDisplayed();
		crmMergePage.ticketListFirstItem.waitForClickable();
		crmMergePage.ticketListFirstItem.click();
		browser.pause(5000);
		console.log('opened first ticket');
	}
	goToTicketDetailsByClickingHeader()
	{
		crmMergePage.dockHeader.waitForDisplayed();
		crmMergePage.dockHeader.waitForClickable();
		crmMergePage.dockHeader.click();
		browser.pause(3000);
	}

	addANoteToTicket()
	{
		browser.pause(7000);
		crmMergePage.btnMessage.waitForDisplayed();
		crmMergePage.btnMessage.waitForClickable();
		crmMergePage.btnMessage.click();
		browser.pause(2000);
		crmMergePage.noteTextArea.waitForDisplayed({ timeout: 3000 });
		crmMergePage.noteTextArea.click();
		this.ticketNote = 'TNote_' + (Math.floor(new Date() / 1000));
		var allcharacters = this.ticketNote.split("");
		for(var i=0; i<allcharacters.length; i++){
			let key = allcharacters[i];
			browser.keys(key);
			browser.pause(100);
		}
		crmMergePage.btnPost.waitForDisplayed({ timeout: 3000 });
		crmMergePage.btnPost.click();
		browser.pause(4000);
	}

	addATaskToTicket()
	{
		browser.pause(7000);
		this.ticketTask = 'Ttask_' + (Math.floor(new Date() / 1000));
		crmMergePage.btnAddTask.waitForDisplayed({ timeout: 25000 });
		crmMergePage.btnAddTask.waitForClickable({ timeout: 25000 });
		crmMergePage.btnAddTask.click();
		browser.pause(1000);
		crmMergePage.inputTask.setValue(this.ticketTask);
		browser.pause(1000);
		crmMergePage.btnMarkTask.click();
		browser.pause(2000);
	}

	keepCustomFieldValue()
	{
		browser.pause(2000);
		this.customField = crmMergePage.customFieldValue.getAttribute('value');
		console.log('actual custom field value is'+this.customField);
	}

	addAttachment()
	{
		browser.pause(5000);
		var jpgfilePath = __dirname;
		jpgfilePath = jpgfilePath.substring(0,jpgfilePath.lastIndexOf(this.slash));
		jpgfilePath = jpgfilePath.substring(0,jpgfilePath.lastIndexOf(this.slash));
		jpgfilePath =path.join(jpgfilePath,this.pngFileName);
		browser.addCommand('chooseFile', function (jpgfilePath) {
			const remoteFile = browser.uploadFile(jpgfilePath);
			this.addValue(remoteFile);
		}, true);
		crmMergePage.fileAttachment.chooseFile(jpgfilePath);
	}
	keepAttachedFileName()
	{
		this.attachmentName = crmMergePage.attachmentMergedSuffix.getText();
		console.log('saved file name'+this.attachmentName);
	}

	verifyMergeToInLinkedTickets(data){
		data = data.replace(/['"]+/g, '');
		browser.pause(5000);
		crmMergePage.inputLinkedType.click();
		browser.keys(this.clearKeys);
		crmMergePage.inputLinkedType.setValue(data);
		browser.pause(1000);
		browser.keys(this.downArrowKey);
		browser.keys(this.enterKey);
		browser.pause(1000);
		expect(crmMergePage.inputLinkedType.getAttribute('value')).to.eql(data);
	}
	verifyTicketMergedToOther(data)
	{
		crmMergePage.confirmationMsg.waitForDisplayed();
		expect(crmMergePage.confirmationMsg.getText()).to.eql(this.linkageConfMsg);
		data = data.replace(/['"]+/g, '');
		browser.pause(4000);
		expect(crmMergePage.getMergedToText.isExisting()).to.be.true;
		//console.log('text verified');
		expect(crmMergePage.getMergedToTicketDetails.getText().includes(this.secondTicketId)).to.be.true;//verify mergedto ticket displayed
		//console.log('linkage verified');
	}

	verifyCurrentTicketClosedStatus()
	{
		browser.pause(5000);
	    crmMergePage.getMergedTicketID.waitForClickable();
	    crmMergePage.getMergedTicketID.click();
		browser.pause(3000);
		//crmMergePage.getMergedTicketID.click();
		console.log('clicked from merged ticket');
		//expect(crmMergePage.ticketStatus.getAttribute('value')).to.eql("Closed");//status changed to closed
		expect(crmMergePage.getMergedToTicketDetails.getText().includes('[CLOSED]')).to.be.true;//linked ticket is Closed
		console.log('Closed verified');
	}

	verifyContentsCopied()
	{
		crmMergePage.ticketSummary.scrollIntoView();
		console.log('Id from Ticket header is '+this.openedTicketId);
		crmMergePage.getMergedTicketID.click();
		browser.pause(4000);
		this.openedTicketId = crmMergePage.dockHeader.getText().replace(/[^\d]/g,'');
		crmMergePage.getMergedTicketID.waitForClickable();
		crmMergePage.getMergedTicketID.click();
		browser.pause(3000);
		crmMergePage.summaryEditorData.waitForDisplayed();
		crmMergePage.summaryEditorData.scrollIntoView();
		var allTextEditorData = crmMergePage.summaryEditorData.getText();
		console.log('merged ticket summary editor data is '+allTextEditorData);
		console.log('updated extracted id is '+this.openedTicketId);
		expect(allTextEditorData.includes(this.openedTicketId)).to.be.true;
	}

	verifyCurrentTicketStatus()
	{
		browser.pause(3000);
		expect(crmMergePage.getMergedToTicketDetails.getText().includes('[OPEN]')).to.be.true;//linked ticket is opened
		console.log('open verified');
		expect(crmMergePage.ticketStatusFailed.getAttribute('value')).to.eql("Failed");//status changed to failed
		console.log('Failed verified');
	}

	verifyLinkedActivityLog()
	{
		browser.pause(2000);
		crmMergePage.getMergedTicketID.waitForClickable();
		this.secondTicketId =crmMergePage.getMergedTicketID.getText();
		//this.openedTicketId=crmMergePage.dockHeader.getText().replace(/[^\d]/g,'');
		crmMergePage.btnOpenActivityLog.waitForDisplayed();
		crmMergePage.btnOpenActivityLog.click();
		browser.pause(3000);
		//var allData = crmMergePage.allActivityData;
		//allData[0].click();
		crmMergePage.allActivityData.click();
		browser.pause(5000);
		//verify pop up text exist with ticket id
		var allheaders = crmMergePage.dialogText;
		console.log('header text is '+allheaders[1].getText());
		expect(allheaders[1].getText().includes(this.secondTicketId)).to.be.true;
	}

	verifyLinkedISPLog()
	{
		crmMergePage.getMergedTicketID.waitForClickable();
		this.secondTicketId =crmMergePage.getMergedTicketID.getText();
		this.openedTicketId = crmMergePage.dockHeader.getText().replace(/[^\d]/g,'');
		crmMergePage.closeDocked.waitForDisplayed();
		crmMergePage.closeDocked.waitForClickable();
		crmMergePage.closeDocked.click();
		crmMergePage.btnAppIcon.waitForDisplayed();
		crmMergePage.btnAppIcon.waitForClickable();
		crmMergePage.btnAppIcon.click();
		crmMergePage.btnISPLogsSetting.waitForDisplayed();
		crmMergePage.btnISPLogsSetting.waitForClickable();
		crmMergePage.btnISPLogsSetting.click();
		browser.pause(5000);
		crmMergePage.firstLogsItem.waitForDisplayed();
		crmMergePage.firstLogsItem.moveTo();
		crmMergePage.firstLogsItem.click();
		browser.pause(3000);
		expect(crmMergePage.heading('The following ticket data has been merged to ['+this.secondTicketId+'] from ['+this.openedTicketId+']').isExisting()).to.be.true;
	}

	////////////////////////////////////// TA-260 ///////////////////////////////////////
	verifyFollwersCopied()
	{
		browser.pause(5000);
		var getFollowerOfParent = crmMergePage.followers[0].getText();
		crmMergePage.getMergedTicketID.waitForClickable({ timeout: 25000 });
		crmMergePage.getMergedTicketID.click();
		browser.pause(5000);
		var mergedTicketFollower = crmMergePage.followers[0].getText();
		expect(getFollowerOfParent).to.eql(mergedTicketFollower);
	}

	verifyNoteCopiedToMerged()
	{
		browser.pause(3000);
		crmMergePage.dockHeader.waitForClickable({ timeout: 25000 });
		crmMergePage.dockHeader.click();
		crmMergePage.getMergedTicketID.waitForDisplayed({ timeout: 25000 });
		crmMergePage.getMergedTicketID.waitForClickable({ timeout: 25000 });
		crmMergePage.getMergedTicketID.click();
		browser.pause(3000);
		crmMergePage.btnMessage.waitForClickable({ timeout: 9000 });
		crmMergePage.btnMessage.click();
		browser.pause(3000);
		crmMergePage.postedNote.waitForDisplayed({ timeout: 3000 });
		var postedNoteData = crmMergePage.postedNote.getText();
		console.log('merged note data is' + postedNoteData);
		console.log('expected data is'+this.ticketNote);
		expect(postedNoteData.includes(this.ticketNote)).to.be.true;
	}

	verifyTaskCopiedToMerged()
	{
		browser.pause(3000);
		crmMergePage.getMergedTicketID.waitForClickable({ timeout: 25000 });
		this.secondTicketId =crmMergePage.getMergedTicketID.getText();
		this.openedTicketId=crmMergePage.dockHeader.getText().replace(/[^\d]/g,'');
		console.log('merged to ticket '  + this.secondTicketId);
		console.log('closed ticket ' + this.openedTicketId);
		crmMergePage.getMergedTicketID.click();
		browser.pause(4000);
		var postedNoteData = crmMergePage.addedTask.getText();
		console.log('extracted task data is ' + postedNoteData);
		expect(postedNoteData.includes(this.ticketTask)).to.be.true;
		console.log('task present');
		expect(postedNoteData.includes(this.openedTicketId.toString())).to.be.true;//merged suffix exists
		console.log('tasks suffix present');
	}

	verifyAttachmentCopiedToMerged()
	{
		browser.pause(3000);
		this.openedTicketId=crmMergePage.dockHeader.getText().replace(/[^\d]/g,'');
		console.log('opened ticket' + this.openedTicketId);
		crmMergePage.getMergedTicketID.click();
		browser.pause(4000);
		var mergedAttachment = crmMergePage.attachmentMergedSuffix.getText();
		expect(mergedAttachment.includes('m['+this.openedTicketId+'] '+ this.attachmentName)).to.be.true;//attachment with suffix
		console.log('attachement with suffix present');
	}

	verifyContactsCopied()
	{
		browser.pause(4000);
		crmMergePage.getMergedTicketID.waitForClickable({ timeout: 25000 });
		crmMergePage.getMergedTicketID.click();
		browser.pause(4000);
		var scData = crmMergePage.serviceContactAreaParent.getText();
		 expect(scData.includes(this.scName)).to.be.true;
		 console.log('sc name verified');
		 expect(scData.replace(/\s/g, '').includes(this.scPhone.replace(/\s/g, ''))).to.be.true;
		 console.log('sc phone verified');
		 expect(scData.includes(this.scEmail)).to.be.true;
		 console.log('sc email verified');
	}

	verifyCustomFieldsCopied()
	{
		browser.pause(3000);
		this.openedTicketId=crmMergePage.dockHeader.getText().replace(/[^\d]/g,'');
		console.log('opened ticket' + this.openedTicketId);
		crmMergePage.getMergedTicketID.click();
		browser.pause(3000);
		var expectedCF = crmMergePage.customFieldValue.getAttribute('value');
		//console.log('merged custom field value is'+expectedCF);
		expect(expectedCF).to.eql(this.customField);
		console.log('custom field verified');
	}


}
module.exports = new SDmergeTicketActions();