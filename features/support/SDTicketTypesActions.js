var LoginPage = require('../pageobjects/login.page');
var SDTicketTypesPage = require('../pageobjects/SDTicketTypes.page');
var SubLogs = require('../pageobjects/subscriberDetailsLogs.page');
var expect = require('chai').expect; 
//var should = require('chai').should();

class SDTicketTypesActions {
    constructor () {
        this.downArrowKey = ['\ue015'];// arrow down
		this.enterKey = ['\ue007'];// enter
		this.backspaceKey = ['\uE003'];// backspace
    }
    closeAllBackgroundProcesses() {
        SDTicketTypesPage.backgroundProcess.click();
        SDTicketTypesPage.btnCloseAllProcesses.click();
        SDTicketTypesPage.btnYes.click();
    }
    openTicketTypeSeetings() {
        SDTicketTypesPage.btnAppMenu.waitForDisplayed();
        SDTicketTypesPage.btnAppMenu.click();
        SDTicketTypesPage.btnCRM.waitForDisplayed();
        SDTicketTypesPage.btnCRM.waitForClickable();
        SDTicketTypesPage.btnCRM.click();
        SDTicketTypesPage.settingsTicketTypes.waitForDisplayed();
        SDTicketTypesPage.settingsTicketTypes.waitForClickable();
        SDTicketTypesPage.settingsTicketTypes.click();
        console.log('ticket type settings opened');
    }
    defineTicketTypeWithRequireAllTask(action) {
        browser.pause(2000);
        SDTicketTypesPage.allTicketTypes.waitForExist({ timeout: 15000 });
        SDTicketTypesPage.divPhoneCall.waitForExist({ timeout: 10000 });
        SDTicketTypesPage.divPhoneCall.scrollIntoView();    
        SDTicketTypesPage.divPhoneCall.waitForDisplayed();
        SDTicketTypesPage.divPhoneCall.waitForClickable({ timeout: 10000 });
        SDTicketTypesPage.divPhoneCall.click();
        if(SDTicketTypesPage.inputSummary.getValue() === '')
        {
            SDTicketTypesPage.inputSummary.click();
            SDTicketTypesPage.inputSummary.setValue('Text of Summary');
        }
        SDTicketTypesPage.divHours.scrollIntoView();
        if(SDTicketTypesPage.divHours.getText() === '')
        {
            SDTicketTypesPage.divHours.click();
            SDTicketTypesPage.setHours.waitForDisplayed();
            SDTicketTypesPage.setHours.click();
        }
        if(SDTicketTypesPage.divMins.getText() === '')
        {
            SDTicketTypesPage.divMins.click();
            SDTicketTypesPage.setMins.waitForDisplayed();
            SDTicketTypesPage.setMins.click();
        }
        browser.pause(5000);
        // var allLables = SDTicketTypesPage.allLable;
        // for (var i=0; i<allLables.length;i++)
        // {
        //     console.log('index is '+i+' and values is '+allLables[i].getText());
        // }
        SDTicketTypesPage.ticketUpdateHeading.waitForDisplayed();
        console.log('going to verify task');
        var allswitches = SDTicketTypesPage.allswictdata;
        //console.log('all switches length ' + allswitches.length);
        //console.log('first switch is ' + allswitches[0].getText());
        //console.log('2nd switch is ' + allswitches[1].getText());
        //console.log('3rd switch is ' + allswitches[2].getText());
        SDTicketTypesPage.switchRequireAllTasks(allswitches[0]).scrollIntoView();
        if(SDTicketTypesPage.checkSwitchRequireAllTasks(allswitches[0]).getAttribute('class').includes('Mui-checked') === false)
        {
            console.log('going to o action on task');
            SDTicketTypesPage.switchRequireAllTasks(allswitches[0]).click();
            console.log('task checked');
        }
        if(SDTicketTypesPage.textOfAllTask(allswitches[0]).getText().includes(action) === false)
        {
            SDTicketTypesPage.allTasksSecondLink.click();
            if(action === 'resolving')
                SDTicketTypesPage.spanResolvingOnPopup.click();
            else
                SDTicketTypesPage.spanClosingOnPopup.click();
            SDTicketTypesPage.btnSaveOnPopup.click();
        }
        console.log('text of task checked');
        if(SDTicketTypesPage.checkSwitchRequireCustomFields(allswitches[1]).getAttribute('class').includes('Mui-checked') === true)
        {
            console.log('going to action on custom');
            SDTicketTypesPage.switchRequireCustomFields(allswitches[1]).click();
            console.log('custom field Unchecked');
        }
        if(SDTicketTypesPage.checkSwitchRequireAttachment(allswitches[2]).getAttribute('class').includes('Mui-checked') === true)
        {
            console.log('going to action on attachment');
            SDTicketTypesPage.switchRequireAttachment(allswitches[2]).click();
            console.log('attachment Unchecked');
        }
        if(SDTicketTypesPage.checkSwitchRequireFollower(allswitches[5]).getAttribute('class').includes('Mui-checked') === true)
        {
            SDTicketTypesPage.switchRequireFollower(allswitches[5]).click();
            console.log('follower Unchecked');
        }
        if(SDTicketTypesPage.checkSwitchRequireQueueScheduler(allswitches[6]).getAttribute('class').includes('Mui-checked') === true)
        {
            SDTicketTypesPage.checkSwitchRequireQueueScheduler(allswitches[6]).click();
            console.log('queue scheduler Unchecked');
        }
        if(SDTicketTypesPage.checkSwitchNote.getAttribute('data-testid') === 'CheckBoxIcon')
        {
            SDTicketTypesPage.switchNote.click();
        }
        console.log('notes checked');
        browser.pause(1000);
        if(SDTicketTypesPage.checkSwitchStatus.getAttribute('data-testid') === 'CheckBoxIcon')
        {
            SDTicketTypesPage.switchStatus.click();
        }
        console.log('status checked');
        if(SDTicketTypesPage.checkSwitchRequireScheduler.getAttribute('data-testid') === 'CheckBoxIcon')
        {
            SDTicketTypesPage.switchRequireSchduler.click();
        }
        console.log('require scheduler checked');
        browser.pause(2000);
        if(SDTicketTypesPage.btnSave.getAttribute('class').includes('Mui-disabled') === false) 
        {
            console.log('going to save ticket type');
            SDTicketTypesPage.btnSave.click();
            console.log('ticket type save clicked');
            SDTicketTypesPage.alertMessage.waitForDisplayed({ timeout: 30000 });
            console.log('ticket type saved successfully');
            browser.pause(1500);
        }
        console.log('going to close ticket type');
        SDTicketTypesPage.btncloseEditTicketType.click();
        SDTicketTypesPage.btncloseTicketType.click();
        console.log('closed ticket type');
        browser.pause(1000);
    }
    tryToResolveOrCloseTicket(action,isWithTask) {
        // var val = SDTicketTypesPage.inputTicketType.getValue();
        // if(val != 'Phone Call')
        // {
        //     SDTicketTypesPage.inputTicketType.click();
        //     browser.pause(3000);
        //     browser.keys(this.backspaceKey);
        //     SDTicketTypesPage.inputTicketType.setValue('Phone Call');
        //     browser.pause(2000);
        //     //browser.keys(this.downArrowKey);
        //     //browser.keys(this.enterKey);
        //     SDTicketTypesPage.autocompleteDialouge.waitForDisplayed();
        //     SDTicketTypesPage.autocompleteDialouge.waitForClickable();
        //     SDTicketTypesPage.autocompleteDialouge.click();
        //     SDTicketTypesPage.btnContinueAnyway.waitForDisplayed();
        //     SDTicketTypesPage.btnContinueAnyway.waitForClickable();
        //     SDTicketTypesPage.btnContinueAnyway.click();
        //     browser.pause(1500);
        // }
        browser.pause(2000);
        var allTasks;
        //if(SDTicketTypesPage.h4CustomOrTask.getText() === 'Tasks')
        //{
           // allTasks = SDTicketTypesPage.divAllTasks;
        //}
        //else
        //{
          //  allTasks = SDTicketTypesPage.divAllTasksOnSecondPlace;
        //}
        //var tasksCount = allTasks.length;
       // console.log('tasks count is ' + tasksCount);
        //if(tasksCount < 1)
        //{
            SDTicketTypesPage.btnAddTask.click();
            browser.keys(['Meta', 'Task' + Math.floor(Math.random() * 5657577)]);
            SDTicketTypesPage.tickSaveTaskIcon.waitForClickable();
            SDTicketTypesPage.tickSaveTaskIcon.click();
            SDTicketTypesPage.btnTicketSave.waitForDisplayed();
            SDTicketTypesPage.btnTicketSave.waitForClickable();
            SDTicketTypesPage.btnTicketSave.click();
            SDTicketTypesPage.alertMessage.waitForDisplayed();
            expect(SDTicketTypesPage.alertMessage.getText()).eql('Saved Successfully');
            console.log('task added successfully');
        //}
        //if(SDTicketTypesPage.h4CustomOrTask.getText() === 'Tasks')
        //{
            allTasks = SDTicketTypesPage.divAllTasks;
        //}
        //else
        //{
          //  allTasks = SDTicketTypesPage.divAllTasksOnSecondPlace;
        //}
        var tasksCount = allTasks.length;
        console.log('tasks count is ' + tasksCount);
        
        if(isWithTask === 'with all tasks')
        {
            for(var i = 0; i < tasksCount; i++)
            {
                if(SDTicketTypesPage.isTaskDone(allTasks[i]) === 'false')
                    allTasks[i].click();
                //console.log('\n\nI come Here\n\n');
                browser.pause(1000);
            }
            if(action === 'resolve')
            {
                SDTicketTypesPage.iconUpArrow.click();
                SDTicketTypesPage.liMarkasResolved.click();
                SDTicketTypesPage.btnMarkasResolved.click();
            }
            else
            {
                SDTicketTypesPage.iconUpArrow.click();
                SDTicketTypesPage.liCloseTicket.click();
                SDTicketTypesPage.btnCloseTicket.click();
                if(SDTicketTypesPage.closingTicketpromptAppears() === true)
                {
                    SDTicketTypesPage.btnProceedClosingTicket.waitForDisplayed();
                    SDTicketTypesPage.btnProceedClosingTicket.click();
                }
            }
            //SDTicketTypesPage.alertMessage.waitForDisplayed();
            if(SDTicketTypesPage.divEmail() === true)
            {
                SDTicketTypesPage.btnEmailSendNo.waitForDisplayed();
                SDTicketTypesPage.btnEmailSendNo.click();
            }
        }
        else
        {
            if(action === 'resolve')
            {
                SDTicketTypesPage.iconUpArrow.waitForDisplayed();
                SDTicketTypesPage.iconUpArrow.waitForClickable();
                SDTicketTypesPage.iconUpArrow.click();
                 SDTicketTypesPage.liMarkasResolved.waitForDisplayed();
                SDTicketTypesPage.liMarkasResolved.waitForClickable();
                SDTicketTypesPage.liMarkasResolved.click();
                SDTicketTypesPage.btnMarkasResolved.waitForDisplayed();
                SDTicketTypesPage.btnMarkasResolved.moveTo();
            }
            else
            {
                SDTicketTypesPage.iconUpArrow.waitForDisplayed();
                SDTicketTypesPage.iconUpArrow.waitForClickable();
                SDTicketTypesPage.iconUpArrow.click();
                SDTicketTypesPage.liCloseTicket.waitForDisplayed();
                SDTicketTypesPage.liCloseTicket.moveTo();
            }
        }
        browser.pause(3000);
    }
    verifyValidationToRequireTask(action) {
        if(action === 'close')
        {
            expect(SDTicketTypesPage.liCloseTicket.getAttribute('aria-disabled')).eql('true');
            SDTicketTypesPage.liCloseTicket.moveTo();
            SDTicketTypesPage.toolTip.waitForDisplayed();
            console.log('tooltop text for Close action is ' + SDTicketTypesPage.toolTip.getText());
            expect(SDTicketTypesPage.toolTip.getText().includes('- all tasks to be checked')).to.be.true;
        }
        else
        {
            console.log('tooltop text for Resolve action is ' + SDTicketTypesPage.toolTip.getText());
            expect(SDTicketTypesPage.toolTip.getText().includes('- all tasks to be checked')).to.be.true;
        }
    }
    verifyTicketGetResolvedOrClosed(action) {
        if(SDTicketTypesPage.divEmail() === true)
            {
                SDTicketTypesPage.btnEmailSendNo.waitForDisplayed();
                SDTicketTypesPage.btnEmailSendNo.click();
            }
        expect(SDTicketTypesPage.textTicketResolved.getText().includes(action)).to.be.true;
    }
    defineTicketTypeWithRequireCustomFields(action) {
        browser.pause(2000);
        SDTicketTypesPage.allTicketTypes.waitForExist({ timeout: 15000 });
        SDTicketTypesPage.divPhoneCall.waitForExist({ timeout: 10000 });
        SDTicketTypesPage.divPhoneCall.scrollIntoView();    
        SDTicketTypesPage.divPhoneCall.waitForDisplayed();
        SDTicketTypesPage.divPhoneCall.waitForClickable({ timeout: 10000 });
        SDTicketTypesPage.divPhoneCall.click();
        if(SDTicketTypesPage.inputSummary.getValue() === '')
        {
            SDTicketTypesPage.inputSummary.click();
            SDTicketTypesPage.inputSummary.setValue('Text of Summary');
        }
        SDTicketTypesPage.divHours.scrollIntoView();
        if(SDTicketTypesPage.divHours.getText()=== '')
        {
            SDTicketTypesPage.divHours.click();
            SDTicketTypesPage.setHours.waitForDisplayed();
            SDTicketTypesPage.setHours.click();
        }
        if(SDTicketTypesPage.divMins.getText() === '')
        {
            SDTicketTypesPage.divMins.click();
            SDTicketTypesPage.setMins.waitForDisplayed();
            SDTicketTypesPage.setMins.click();
        }
        SDTicketTypesPage.allLableParent.waitForDisplayed();
        var allswitches = SDTicketTypesPage.allswictdata;
        SDTicketTypesPage.switchRequireAllTasks(allswitches[0]).scrollIntoView();
        if(SDTicketTypesPage.checkSwitchRequireCustomFields(allswitches[1]).getAttribute('class').includes('Mui-checked') === false)
        {
            SDTicketTypesPage.switchRequireCustomFields(allswitches[1]).click();
        }
        if((SDTicketTypesPage.textOfCustomField(allswitches[1]).getText().includes(action)) === false)
        {
            SDTicketTypesPage.customFieldsSecondLink.click();
            if(action === 'adding')
                SDTicketTypesPage.spanAddingOnPopup.click();
            else if(action === 'editing')
                SDTicketTypesPage.spanEditingOnPopup.click();
            else if(action === 'resolving')
                SDTicketTypesPage.spanResolvingOnPopup.click();
            else
                SDTicketTypesPage.spanClosingOnPopup.click();
            SDTicketTypesPage.btnSaveOnPopup.click();
        }
        SDTicketTypesPage.customFieldsLink.click();
        console.log('Custom page opened');
        browser.pause(2000);
        SDTicketTypesPage.customFieldsInput.waitForDisplayed();
        console.log('Custom input displayed');
        if(SDTicketTypesPage.customFieldsInput.getValue() === '')
        {
            console.log('going to edit and add custom field');
            var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
            SDTicketTypesPage.customFieldsInput.click();
            SDTicketTypesPage.customFieldsInput.keys(clearKeys);
            browser.pause(500);
            //browser.keys(['Meta', 'Custom Field ' + Math.floor(Math.random() * 100000)]);
            SDTicketTypesPage.customFieldsInput.setValue('Custom Field ' + Math.floor(Math.random() * 100000));
            browser.pause(2000);
            SDTicketTypesPage.btnSaveCustomField.waitForDisplayed();
            SDTicketTypesPage.btnSaveCustomField.waitForClickable();
            SDTicketTypesPage.btnSaveCustomField.click();
            console.log('Save custom field');
        }
        else
        {
            console.log('going to cancel custom field');
            SDTicketTypesPage.btnCloseCustomField.click();
            console.log('Cancel custom field');
        }
        if(SDTicketTypesPage.checkSwitchRequireAllTasks(allswitches[0]).getAttribute('class').includes('Mui-checked') === true)
        {
            SDTicketTypesPage.switchRequireAllTasks(allswitches[0]).click();
        }
        if(SDTicketTypesPage.checkSwitchRequireAttachment(allswitches[2]).getAttribute('class').includes('Mui-checked') === true)
        {
            SDTicketTypesPage.switchRequireAttachment(allswitches[2]).click();
        }
        if(SDTicketTypesPage.checkSwitchRequireFollower(allswitches[5]).getAttribute('class').includes('Mui-checked') === true)
        {
            SDTicketTypesPage.switchRequireFollower(allswitches[5]).click();
        }
        if(SDTicketTypesPage.checkSwitchRequireQueueScheduler(allswitches[6]).getAttribute('class').includes('Mui-checked') === true)
        {
            SDTicketTypesPage.checkSwitchRequireQueueScheduler(allswitches[6]).click();
        }
        if(SDTicketTypesPage.checkSwitchNote.getAttribute('data-testid') === 'CheckBoxIcon')
        {
            SDTicketTypesPage.switchNote.click();
        }
        browser.pause(1000);
        if(SDTicketTypesPage.checkSwitchStatus.getAttribute('data-testid') === 'CheckBoxIcon')
        {
            SDTicketTypesPage.switchStatus.click();
        }
        if(SDTicketTypesPage.checkSwitchNote.getAttribute('data-testid') === 'CheckBoxIcon')
        {
            SDTicketTypesPage.switchNote.click();
        }
        browser.pause(1000);
        if(SDTicketTypesPage.checkSwitchRequireScheduler.getAttribute('data-testid') === 'CheckBoxIcon')
        {
            SDTicketTypesPage.switchRequireSchduler.click();
        }
        browser.pause(2000);
        if(SDTicketTypesPage.btnSave.getAttribute('class').includes('Mui-disabled') === false) 
        {
            console.log('going to save ticket type');
            SDTicketTypesPage.btnSave.click();
            console.log('ticket type save clicked');
            SDTicketTypesPage.alertMessage.waitForDisplayed({ timeout: 30000 });
            console.log('ticket type saved successfully');
            browser.pause(1500);
        }
        console.log('going to close ticket type');
        SDTicketTypesPage.btncloseEditTicketType.click();
        SDTicketTypesPage.btncloseTicketType.click();
        console.log('closed ticket type');
        browser.pause(1000);
    }
    defineTicketTypeWithAttachmentRequired(action) {
        browser.pause(2000);
        SDTicketTypesPage.allTicketTypes.waitForExist({ timeout: 15000 });
        SDTicketTypesPage.divPhoneCall.waitForExist({ timeout: 10000 });
        SDTicketTypesPage.divPhoneCall.scrollIntoView();    
        SDTicketTypesPage.divPhoneCall.waitForDisplayed();
        SDTicketTypesPage.divPhoneCall.waitForClickable({ timeout: 10000 });
        SDTicketTypesPage.divPhoneCall.click();
        if(SDTicketTypesPage.inputSummary.getValue() === '')
        {
            SDTicketTypesPage.inputSummary.click();
            SDTicketTypesPage.inputSummary.setValue('Text of Summary');
        }
        SDTicketTypesPage.divHours.scrollIntoView();
        if(SDTicketTypesPage.divHours.getText() === '')
        {
            SDTicketTypesPage.divHours.click();
            SDTicketTypesPage.setHours.waitForDisplayed();
            SDTicketTypesPage.setHours.click();
        }
        if(SDTicketTypesPage.divMins.getText() === '')
        {
            SDTicketTypesPage.divMins.click();
            SDTicketTypesPage.setMins.waitForDisplayed();
            SDTicketTypesPage.setMins.click();
        }
        browser.pause(5000);
        // var allLables = SDTicketTypesPage.allLable;
        // for (var i=0; i<allLables.length;i++)
        // {
        //     console.log('index is '+i+' and values is '+allLables[i].getText());
        // }
        SDTicketTypesPage.ticketUpdateHeading.waitForDisplayed();
        console.log('going to verify task');
        var allswitches = SDTicketTypesPage.allswictdata;
        //console.log('all switches length ' + allswitches.length);
        //console.log('first switch is ' + allswitches[0].getText());
        //console.log('2nd switch is ' + allswitches[1].getText());
        //console.log('3rd switch is ' + allswitches[2].getText());
        SDTicketTypesPage.switchRequireAllTasks(allswitches[0]).scrollIntoView();
        if(SDTicketTypesPage.checkSwitchRequireAllTasks(allswitches[0]).getAttribute('class').includes('Mui-checked') === true)
        {
            console.log('going to o action on task');
            SDTicketTypesPage.switchRequireAllTasks(allswitches[0]).click();
            console.log('task checked');
        }
        if(SDTicketTypesPage.textOfAllTask(allswitches[0]).getText().includes(action) === false)
        {
            SDTicketTypesPage.allTasksSecondLink.click();
            if(action === 'resolving')
                SDTicketTypesPage.spanResolvingOnPopup.click();
            else
                SDTicketTypesPage.spanClosingOnPopup.click();
            SDTicketTypesPage.btnSaveOnPopup.click();
        }
        console.log('text of task checked');
        if(SDTicketTypesPage.checkSwitchRequireCustomFields(allswitches[1]).getAttribute('class').includes('Mui-checked') === true)
        {
            console.log('going to action on custom');
            SDTicketTypesPage.switchRequireCustomFields(allswitches[1]).click();
            console.log('custom field Unchecked');
        }
        if(SDTicketTypesPage.checkSwitchRequireAttachment(allswitches[2]).getAttribute('class').includes('Mui-checked') === false)
        {
            console.log('going to action on attachment');
            SDTicketTypesPage.switchRequireAttachment(allswitches[2]).click();
            console.log('attachment Unchecked');
        }
        if(SDTicketTypesPage.checkSwitchRequireFollower(allswitches[5]).getAttribute('class').includes('Mui-checked') === true)
        {
            SDTicketTypesPage.switchRequireFollower(allswitches[5]).click();
            console.log('follower Unchecked');
        }
        if(SDTicketTypesPage.checkSwitchRequireQueueScheduler(allswitches[6]).getAttribute('class').includes('Mui-checked') === true)
        {
            SDTicketTypesPage.checkSwitchRequireQueueScheduler(allswitches[6]).click();
            console.log('queue scheduler Unchecked');
        }
        if(SDTicketTypesPage.checkSwitchNote.getAttribute('data-testid') === 'CheckBoxIcon')
        {
            SDTicketTypesPage.switchNote.click();
        }
        console.log('notes checked');
        browser.pause(1000);
        if(SDTicketTypesPage.checkSwitchStatus.getAttribute('data-testid') === 'CheckBoxIcon')
        {
            SDTicketTypesPage.switchStatus.click();
        }
        console.log('status checked');
        if(SDTicketTypesPage.checkSwitchRequireScheduler.getAttribute('data-testid') === 'CheckBoxIcon')
        {
            SDTicketTypesPage.switchRequireSchduler.click();
        }
        console.log('require scheduler checked');
        browser.pause(4000);
        if(SDTicketTypesPage.btnSave.getAttribute('class').includes('Mui-disabled') === false) 
        {
            console.log('going to save ticket type');
            SDTicketTypesPage.btnSave.click();
            console.log('ticket type save clicked');
            SDTicketTypesPage.alertMessage.waitForDisplayed({ timeout: 90000 });
            console.log('ticket type saved successfully');
            browser.pause(1500);
        }
        console.log('going to close ticket type');
        SDTicketTypesPage.btncloseEditTicketType.click();
        SDTicketTypesPage.btncloseTicketType.click();
        console.log('closed ticket type');
        browser.pause(1000);
    }
    expandLogsDottedMenu()
	{
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
        SubLogs.selectTicketType.setValue('Phone Call');
        browser.pause(2000);
        //browser.keys(this.downArrowKey);
        //browser.keys(this.enterKey);
        SDTicketTypesPage.autocompleteDialouge.waitForDisplayed();
        SDTicketTypesPage.autocompleteDialouge.waitForClickable();
        SDTicketTypesPage.autocompleteDialouge.click();
		this.ticketSummaryValue = 'T-Sum' + (Math.floor(new Date() / 1000));
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		SubLogs.ticketSummary.scrollIntoView();
		SubLogs.ticketSummary.waitForClickable();
		SubLogs.ticketSummary.click();
		SubLogs.ticketSummary.keys(clearKeys);
		browser.pause(1000);
		SubLogs.ticketSummary.setValue(this.ticketSummaryValue);
		SubLogs.btnTicketEdit.scrollIntoView();
		SubLogs.btnTicketEdit.waitForClickable();
		SubLogs.btnTicketEdit.click();
		SubLogs.ticketEditor.setValue(this.ticketSummaryValue);
        SDTicketTypesPage.btnTicketSave.moveTo();
        // SubLogs.btnSaveTicket.click();
	}
    removeFollowerFromTicket()
    {
        SDTicketTypesPage.clickTicketAddedFollower.waitForDisplayed();
        SDTicketTypesPage.clickTicketAddedFollower.waitForClickable();
        SDTicketTypesPage.clickTicketAddedFollower.click();
        SDTicketTypesPage.checkUnckeckFOllower.waitForDisplayed();
        SDTicketTypesPage.checkUnckeckFOllower.waitForClickable();
        SDTicketTypesPage.checkUnckeckFOllower.click();
        // SDTicketTypesPage.clickAddFollowerFromTicket.waitForDisplayed();
        // SDTicketTypesPage.clickAddFollowerFromTicket.waitForClickable();
        // SDTicketTypesPage.clickAddFollowerFromTicket.click();
        browser.pause(500);
        this.Esckeys = ['\uE00C'];
        browser.keys(this.Esckeys);
        browser.pause(500);
        console.log('follower removed from ticket');
    }
    saveTicketChanges()
    {
        SDTicketTypesPage.btnTicketSave.waitForDisplayed();
        SDTicketTypesPage.btnTicketSave.waitForClickable();
        SDTicketTypesPage.btnTicketSave.click();
        console.log('ticked changes saved successfully');
    }
    updateTicketSummary()
    {
        SDTicketTypesPage.ticketSummary.waitForDisplayed();
        //SDTicketTypesPage.ticketSummary.waitForClickable();
        SDTicketTypesPage.ticketSummary.click();
        SDTicketTypesPage.ticketSummary.keys(['\uE011', '\uE008', '\uE010', '\uE017']);
        browser.pause(500);
        SDTicketTypesPage.ticketSummary.click();
        SDTicketTypesPage.ticketSummary.setValue('This is summary ' + Math.floor(Math.random() * 999999999));
        console.log('ticked changes saved successfully');
    }
    OpenAndSetTicketMarkAsResolved() {
        browser.pause(2000);
        SDTicketTypesPage.iconUpArrow.waitForDisplayed();
        SDTicketTypesPage.iconUpArrow.waitForClickable();
        SDTicketTypesPage.iconUpArrow.click();
        SDTicketTypesPage.liMarkasResolved.waitForDisplayed();
        SDTicketTypesPage.liMarkasResolved.waitForClickable();
        SDTicketTypesPage.liMarkasResolved.click();
        browser.pause(2000);
        SDTicketTypesPage.btnMarkasResolved.waitForDisplayed();
        SDTicketTypesPage.btnMarkasResolved.moveTo();
    }
    OpenAndSetTicketTryToMarkClose() {
        browser.pause(2000);
        SDTicketTypesPage.iconUpArrow.waitForDisplayed();
        SDTicketTypesPage.iconUpArrow.waitForClickable();
        SDTicketTypesPage.iconUpArrow.click();
        browser.pause(2000);
        SDTicketTypesPage.liCloseTicket.waitForDisplayed();
        SDTicketTypesPage.liCloseTicket.moveTo();
        browser.pause(1000);
    }
    verifyRequiredCustomFieldVelidation() {
        SDTicketTypesPage.getTooltipText.waitForDisplayed();
        expect(SDTicketTypesPage.getTooltipText.getText().includes('- all custom fields to be filled out')).to.be.true;
        this.Esckeys = ['\uE00C'];
        browser.keys(this.Esckeys);
        browser.pause(500);
        console.log('empty Cutom field validation verified');
    }
    setCustomFieldText() {
        SDTicketTypesPage.customFieldInputInTicket.click();
        SDTicketTypesPage.customFieldInputInTicket.setValue('This is a custom Field;');
        SDTicketTypesPage.btnTicketSave.waitForDisplayed();
        SDTicketTypesPage.btnTicketSave.waitForClickable();
        SDTicketTypesPage.btnTicketSave.click();
    }
    verifyTicketAdded() {
        browser.pause(4000);
        SDTicketTypesPage.btnMarkasResolved.waitForDisplayed();
        expect(SDTicketTypesPage.btnMarkasResolved.isExisting()).to.be.true;
    }
    tryToEditOrResolveOrCloseTicketCustomField(action,isWithTask) {
        // var val = SDTicketTypesPage.inputTicketType.getValue();
        // if(val != 'Phone Call')
        // {
        //     SDTicketTypesPage.inputTicketType.click();
        //     browser.pause(3000);
        //     browser.keys(this.backspaceKey);
        //     SDTicketTypesPage.inputTicketType.setValue('Phone Call');
        //     browser.pause(2000);
        //     //browser.keys(this.downArrowKey);
        //     //browser.keys(this.enterKey);
        //     SDTicketTypesPage.autocompleteDialouge.waitForDisplayed();
        //     SDTicketTypesPage.autocompleteDialouge.waitForClickable();
        //     SDTicketTypesPage.autocompleteDialouge.click();
        //     SDTicketTypesPage.btnContinueAnyway.waitForDisplayed();
        //     SDTicketTypesPage.btnContinueAnyway.click();
        // }
        browser.pause(2000);
        if(isWithTask === 'with')
        {
            console.log('custom field WITH option');
            SDTicketTypesPage.customFieldInputEditTicket.click();
            SDTicketTypesPage.customFieldInputEditTicket.keys(['\uE011', '\uE008', '\uE010', '\uE017']);
            browser.pause(500);
            // var text = SDTicketTypesPage.customFieldInputEditTicket.getValue();
            // for(var i = 0; i <= text.length; i++)
            // {
            //     browser.keys(this.backspaceKey);
            // }
            //browser.keys(['Meta', 'This is Custom ' + Math.floor(Math.random() * 999999999)]);
            SDTicketTypesPage.customFieldInputEditTicket.setValue('This is Custom ' + Math.floor(Math.random() * 999999999));
            browser.pause(1500);
            if(action === 'edit')
            {
                SDTicketTypesPage.btnTicketSave.waitForDisplayed();
                SDTicketTypesPage.btnTicketSave.waitForClickable();
                SDTicketTypesPage.btnTicketSave.click();
            }
            else if(action === 'resolve')
            {
                SDTicketTypesPage.iconUpArrow.click();
                SDTicketTypesPage.liMarkasResolved.waitForDisplayed();
                SDTicketTypesPage.liMarkasResolved.waitForClickable();
                SDTicketTypesPage.liMarkasResolved.click();
                SDTicketTypesPage.btnMarkasResolved.waitForDisplayed();
                SDTicketTypesPage.btnMarkasResolved.waitForClickable();
                SDTicketTypesPage.btnMarkasResolved.click();
            }
            else
            {
                browser.pause('3000');
                SDTicketTypesPage.iconUpArrow.click();
                SDTicketTypesPage.liCloseTicket.waitForDisplayed();
                SDTicketTypesPage.liCloseTicket.waitForClickable();
                SDTicketTypesPage.liCloseTicket.click();
                SDTicketTypesPage.btnCloseTicket.waitForDisplayed();
                SDTicketTypesPage.btnCloseTicket.waitForClickable();
                SDTicketTypesPage.btnCloseTicket.click();
                if(SDTicketTypesPage.closingTicketpromptAppears() === true)
                {
                    SDTicketTypesPage.btnProceedClosingTicket.waitForDisplayed();
                    SDTicketTypesPage.btnProceedClosingTicket.click();
                }
            }
            if(SDTicketTypesPage.divEmail() === true)
            {
                SDTicketTypesPage.btnEmailSendNo.waitForDisplayed();
                SDTicketTypesPage.btnEmailSendNo.click();
            }
        }
        else
        {
            console.log('custom field WITHOUT option');
            SDTicketTypesPage.customFieldInputInTicket.waitForDisplayed();
            SDTicketTypesPage.customFieldInputInTicket.click();
            SDTicketTypesPage.customFieldInputInTicket.keys(['\uE011', '\uE008', '\uE010', '\uE017']);
            console.log('custom field cleared');
            // var text = SDTicketTypesPage.customFieldInputInTicket.getValue();
            // for(var i = 0; i <= text.length; i++)
            // {
            //     browser.keys(this.backspaceKey);
            // }
            browser.pause(500);
            // if(action === 'edit')
            // {
            //     SDTicketTypesPage.btnSave.moveTo();        
            //     browser.pause(3000);
            // }
            if(action === 'resolve')
            {
                console.log('going to mark as resolved');
                SDTicketTypesPage.iconUpArrow.waitForDisplayed();
                SDTicketTypesPage.iconUpArrow.waitForClickable();
                SDTicketTypesPage.iconUpArrow.click();
                SDTicketTypesPage.liMarkasResolved.waitForDisplayed();
                SDTicketTypesPage.liMarkasResolved.waitForClickable();
                SDTicketTypesPage.liMarkasResolved.click();
                SDTicketTypesPage.btnMarkasResolved.waitForDisplayed();
                SDTicketTypesPage.btnMarkasResolved.moveTo();
            }
            else
            {
                console.log('going to mark as resolved');
                SDTicketTypesPage.iconUpArrow.click();
                SDTicketTypesPage.liCloseTicket.waitForDisplayed();
                SDTicketTypesPage.liCloseTicket.moveTo();
            }
        }
    }
    verifyTicketSuccessfullyAdded() {
        SDTicketTypesPage.alertMessage.waitForDisplayed();
        expect(SDTicketTypesPage.alertMessage.getText()).eql('Saved Successfully');
    }
    verifyValidationToRequireCustomField(action) {
        if(action === 'close')
        {
            SDTicketTypesPage.liCloseTicket.waitForDisplayed();
            expect(SDTicketTypesPage.liCloseTicket.getAttribute('aria-disabled')).eql('true');
        }
        else
        {
            SDTicketTypesPage.toolTip.waitForDisplayed();
            expect(SDTicketTypesPage.toolTip.getText().includes('- all custom fields to be filled out')).to.be.true;
        }
    }
    defineTicketTypeWithRequireFollower(action) {
        browser.pause(2000);
        SDTicketTypesPage.allTicketTypes.waitForExist({ timeout: 15000 });
        SDTicketTypesPage.divPhoneCall.waitForExist({ timeout: 10000 });
        SDTicketTypesPage.divPhoneCall.scrollIntoView();    
        SDTicketTypesPage.divPhoneCall.waitForDisplayed();
        SDTicketTypesPage.divPhoneCall.waitForClickable({ timeout: 10000 });
        SDTicketTypesPage.divPhoneCall.click();
        console.log('\n\n1 Checked\n\n');
        SDTicketTypesPage.inputSummary.waitForDisplayed();
        if(SDTicketTypesPage.inputSummary.getValue() === '')
        {
            SDTicketTypesPage.inputSummary.click();
            SDTicketTypesPage.inputSummary.setValue('Text of Summary');
        }
        console.log('\n\n2 Checked\n\n');
        SDTicketTypesPage.divHours.scrollIntoView();
        if(SDTicketTypesPage.divHours.getText()=== '')
        {
            SDTicketTypesPage.divHours.click();
            SDTicketTypesPage.setHours.waitForDisplayed();
            SDTicketTypesPage.setHours.click();
        }
        if(SDTicketTypesPage.divMins.getText() === '')
        {
            SDTicketTypesPage.divMins.click();
            SDTicketTypesPage.setMins.waitForDisplayed();
            SDTicketTypesPage.setMins.click();
        }
        console.log('\n\n3 Checked\n\n');
        SDTicketTypesPage.allLableParent.waitForDisplayed();
        var allswitches = SDTicketTypesPage.allswictdata;
        SDTicketTypesPage.switchRequireAllTasks(allswitches[0]).scrollIntoView();
        if(SDTicketTypesPage.checkSwitchRequireFollower(allswitches[5]).getAttribute('class').includes('Mui-checked') === false)
        {
            SDTicketTypesPage.switchRequireFollower(allswitches[5]).click();
            console.log('follower checked');
            browser.pause(2000);
        }
        console.log('\n\n4 Checked\n\n');
        // if(SDTicketTypesPage.textOfFollower(allswitches[5]).getText().includes(action) === false)
        // {
        //     console.log('going to open follower popup');
        //     SDTicketTypesPage.followerSecondLink(allswitches[5]).click();
        //     if(action === 'adding'){
        //         SDTicketTypesPage.spanAddingOnPopup.waitForDisplayed();
        //         SDTicketTypesPage.spanAddingOnPopup.waitForClickable();
        //         SDTicketTypesPage.spanAddingOnPopup.click();
        //         console.log('follow added unchecked');
        //     }
                
        //     else if(action === 'editing'){
        //         SDTicketTypesPage.spanEditingOnPopup.waitForDisplayed();
        //         SDTicketTypesPage.spanEditingOnPopup.waitForClickable();
        //         SDTicketTypesPage.spanEditingOnPopup.click();
        //         console.log('follow editing unchecked');
        //     }
        //     SDTicketTypesPage.btnSaveOnPopup.waitForDisplayed();
        //     SDTicketTypesPage.btnSaveOnPopup.waitForClickable();
        //     SDTicketTypesPage.btnSaveOnPopup.click();
        //     console.log('follower saved');
        // }
        console.log('going to uncheck other switches');
        if(SDTicketTypesPage.checkSwitchRequireAllTasks(allswitches[0]).getAttribute('class').includes('Mui-checked') === true)
        {
            SDTicketTypesPage.switchRequireAllTasks(allswitches[0]).click();
        }
        console.log('Task unchecked');
        if(SDTicketTypesPage.checkSwitchRequireCustomFields(allswitches[1]).getAttribute('class').includes('Mui-checked') === true)
        {
            SDTicketTypesPage.switchRequireCustomFields(allswitches[1]).click();
        }
        console.log('Custom field unchecked');
        if(SDTicketTypesPage.checkSwitchRequireAttachment(allswitches[2]).getAttribute('class').includes('Mui-checked') === true)
        {
            SDTicketTypesPage.switchRequireAttachment(allswitches[2]).click();
        }
        console.log('attachment unchecked');
        if(SDTicketTypesPage.checkSwitchRequireQueueScheduler(allswitches[6]).getAttribute('class').includes('Mui-checked') === true)
        {
            SDTicketTypesPage.checkSwitchRequireQueueScheduler(allswitches[6]).click();
        }
        console.log('Queue scheduler unchecked');
        browser.pause(2000);
        if(SDTicketTypesPage.checkSwitchRequireScheduler.getAttribute('data-testid') === 'CheckBoxIcon')
        {
            SDTicketTypesPage.switchRequireSchduler.click();
        }
        console.log('Require scheduler unchecked');
        if(SDTicketTypesPage.checkSwitchNote.getAttribute('data-testid') === 'CheckBoxIcon')
        {
            SDTicketTypesPage.switchNote.click();
        }
        console.log('Note unchecked');
        browser.pause(1000);
        if(SDTicketTypesPage.checkSwitchStatus.getAttribute('data-testid') === 'CheckBoxIcon')
        {
            SDTicketTypesPage.switchStatus.click();
        }
        console.log('all switches done');
        browser.pause(4000);
        if(SDTicketTypesPage.btnSave.getAttribute('class').includes('Mui-disabled') === false) 
        {
            console.log('going to save ticket type');
            SDTicketTypesPage.btnSave.click();
            console.log('ticket type save clicked');
            SDTicketTypesPage.alertMessage.waitForDisplayed({ timeout: 90000 });
            console.log('ticket type saved successfully');
            browser.pause(1500);
        }
        console.log('going to close ticket type');
        SDTicketTypesPage.btncloseEditTicketType.click();
        SDTicketTypesPage.btncloseTicketType.click();
        console.log('closed ticket type');
        browser.pause(1000);
    }
    defineTicketTypeWithRequireToBeScheduled() {
        browser.pause(2000);
        SDTicketTypesPage.allTicketTypes.waitForExist({ timeout: 15000 });
        SDTicketTypesPage.divPhoneCall.waitForExist({ timeout: 10000 });
        SDTicketTypesPage.divPhoneCall.scrollIntoView();    
        SDTicketTypesPage.divPhoneCall.waitForDisplayed();
        SDTicketTypesPage.divPhoneCall.waitForClickable({ timeout: 10000 });
        SDTicketTypesPage.divPhoneCall.click();
        if(SDTicketTypesPage.inputSummary.getValue() === '')
        {
            SDTicketTypesPage.inputSummary.click();
            SDTicketTypesPage.inputSummary.setValue('Text of Summary');
        }
        SDTicketTypesPage.divHours.scrollIntoView();
        if(SDTicketTypesPage.divHours.getText()=== '')
        {
            SDTicketTypesPage.divHours.click();
            SDTicketTypesPage.setHours.waitForDisplayed();
            SDTicketTypesPage.setHours.click();
        }
        if(SDTicketTypesPage.divMins.getText() === '')
        {
            SDTicketTypesPage.divMins.click();
            SDTicketTypesPage.setMins.waitForDisplayed();
            SDTicketTypesPage.setMins.click();
        }
        SDTicketTypesPage.allLableParent.waitForDisplayed();
        var allswitches = SDTicketTypesPage.allswictdata;
        SDTicketTypesPage.switchRequireAllTasks(allswitches[0]).scrollIntoView();
        if(SDTicketTypesPage.checkSwitchRequireAllTasks(allswitches[0]).getAttribute('class').includes('Mui-checked') === true)
        {
            SDTicketTypesPage.switchRequireAllTasks(allswitches[0]).click();
        }
        if(SDTicketTypesPage.checkSwitchRequireFollower(allswitches[5]).getAttribute('class').includes('Mui-checked') === true)
        {
            SDTicketTypesPage.switchRequireFollower(allswitches[5]).click();
        }
        if(SDTicketTypesPage.checkSwitchRequireCustomFields(allswitches[1]).getAttribute('class').includes('Mui-checked') === true)
        {
            SDTicketTypesPage.switchRequireCustomFields(allswitches[1]).click();
        }
        if(SDTicketTypesPage.checkSwitchRequireAttachment(allswitches[2]).getAttribute('class').includes('Mui-checked') === true)
        {
            SDTicketTypesPage.switchRequireAttachment(allswitches[2]).click();
        }
        if(SDTicketTypesPage.checkSwitchRequireQueueScheduler(allswitches[6]).getAttribute('class').includes('Mui-checked') === true)
        {
            SDTicketTypesPage.checkSwitchRequireQueueScheduler(allswitches[6]).click();
        }
        if(SDTicketTypesPage.checkSwitchNote.getAttribute('data-testid') === 'CheckBoxIcon')
        {
            SDTicketTypesPage.switchNote.click();
        }
        console.log('notes checked');
        browser.pause(1000);
        if(SDTicketTypesPage.checkSwitchStatus.getAttribute('data-testid') === 'CheckBoxIcon')
        {
            SDTicketTypesPage.switchStatus.click();
        }
        console.log('status checked');
        if(SDTicketTypesPage.checkSwitchRequireScheduler.getAttribute('data-testid') === 'CheckBoxOutlineBlankIcon')
        {
            console.log('going to check require scheduler');
            SDTicketTypesPage.checkSwitchRequireScheduler.click();
            console.log('require scheduler checked');
        }
        console.log('require scheduler checked');
        browser.pause(2000);
        if(SDTicketTypesPage.btnSave.getAttribute('class').includes('Mui-disabled') === false) 
        {
           console.log('going to save ticket type');
            SDTicketTypesPage.btnSave.click();
            console.log('ticket type save clicked');
            SDTicketTypesPage.alertMessage.waitForDisplayed({ timeout: 90000 });
            console.log('ticket type saved successfully');
            browser.pause(1500);
        }
        console.log('going to close ticket type');
        SDTicketTypesPage.btncloseEditTicketType.click();
        SDTicketTypesPage.btncloseTicketType.click();
        console.log('closed ticket type');
        browser.pause(1000);
    }
    defineTicketTypeWithQueueUnScheduled()
    {
        browser.pause(2000);
        SDTicketTypesPage.allTicketTypes.waitForExist({ timeout: 15000 });
        SDTicketTypesPage.divPhoneCall.waitForExist({ timeout: 10000 });
        SDTicketTypesPage.divPhoneCall.scrollIntoView();    
        SDTicketTypesPage.divPhoneCall.waitForDisplayed();
        SDTicketTypesPage.divPhoneCall.waitForClickable({ timeout: 10000 });
        SDTicketTypesPage.divPhoneCall.click();
        SDTicketTypesPage.inputSummary.waitForDisplayed();
        if(SDTicketTypesPage.inputSummary.getValue() === '')
        {
            SDTicketTypesPage.inputSummary.click();
            SDTicketTypesPage.inputSummary.setValue('Text of Summary');
        }
        SDTicketTypesPage.divHours.scrollIntoView();
        if(SDTicketTypesPage.divHours.getText()=== '')
        {
            SDTicketTypesPage.divHours.click();
            SDTicketTypesPage.setHours.waitForDisplayed();
            SDTicketTypesPage.setHours.click();
        }
        if(SDTicketTypesPage.divMins.getText() === '')
        {
            SDTicketTypesPage.divMins.click();
            SDTicketTypesPage.setMins.waitForDisplayed();
            SDTicketTypesPage.setMins.click();
        }
        SDTicketTypesPage.allLableParent.waitForDisplayed();
        var allswitches = SDTicketTypesPage.allswictdata;
        SDTicketTypesPage.switchRequireAllTasks(allswitches[0]).scrollIntoView();
        if(SDTicketTypesPage.checkSwitchRequireAllTasks(allswitches[0]).getAttribute('class').includes('Mui-checked') === true)
        {
            SDTicketTypesPage.switchRequireAllTasks(allswitches[0]).click();
        }
        if(SDTicketTypesPage.checkSwitchRequireFollower(allswitches[5]).getAttribute('class').includes('Mui-checked') === true)
        {
            SDTicketTypesPage.switchRequireFollower(allswitches[5]).click();
        }
        if(SDTicketTypesPage.checkSwitchRequireCustomFields(allswitches[1]).getAttribute('class').includes('Mui-checked') === true)
        {
            SDTicketTypesPage.switchRequireCustomFields(allswitches[1]).click();
        }
        if(SDTicketTypesPage.checkSwitchRequireAttachment(allswitches[2]).getAttribute('class').includes('Mui-checked') === true)
        {
            SDTicketTypesPage.switchRequireAttachment(allswitches[2]).click();
        }
        if(SDTicketTypesPage.checkSwitchRequireScheduler.getAttribute('data-testid') === 'CheckBoxIcon')
        {
            SDTicketTypesPage.switchRequireSchduler.click();
        }
        console.log('Queue cheduler unchecked');
        if(SDTicketTypesPage.checkSwitchRequireQueueScheduler(allswitches[6]).getAttribute('class').includes('Mui-checked') === false)
        {
            console.log('going to check queue scheduler');
            SDTicketTypesPage.switchRequireQueueScheduler(allswitches[6]).click();
            console.log('check queue scheduler checked');
        }
        browser.pause(1000);
        console.log('going to set due by');
        var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];// home + shift + end + del
        SDTicketTypesPage.inputDueBy.waitForDisplayed();
        browser.pause(500);
        SDTicketTypesPage.inputDueBy.click();
        SDTicketTypesPage.inputDueBy.keys(clearKeys);
        browser.pause(1000);
        SDTicketTypesPage.inputDueBy.setValue('1');
        console.log('going to set Unit and Format');
        SDTicketTypesPage.selectDueUnitBY.click();
        SDTicketTypesPage.selectDaysFromMenu.waitForDisplayed();
        SDTicketTypesPage.selectDaysFromMenu.click();
        console.log('going to set due format');
        SDTicketTypesPage.selectDueFormat.click();
        SDTicketTypesPage.selectDateFormatOption.waitForDisplayed();
        SDTicketTypesPage.selectDateFormatOption.click();
        console.log('set due format');
        browser.pause(1000);
        if(SDTicketTypesPage.checkSwitchNote.getAttribute('data-testid') === 'CheckBoxIcon')
        {
            SDTicketTypesPage.switchNote.click();
        }
        if(SDTicketTypesPage.checkSwitchStatus.getAttribute('data-testid') === 'CheckBoxIcon')
        {
            SDTicketTypesPage.switchStatus.click();
        }
        browser.pause(2000);
        if(SDTicketTypesPage.btnSave.getAttribute('class').includes('Mui-disabled') === false) 
        {
            console.log('going to save ticket type');
            SDTicketTypesPage.btnSave.click();
            console.log('ticket type save clicked');
            SDTicketTypesPage.alertMessage.waitForDisplayed({ timeout: 90000 });
            console.log('ticket type saved successfully');
            browser.pause(1500);
        }
        console.log('going to close ticket type');
        SDTicketTypesPage.btncloseEditTicketType.click();
        SDTicketTypesPage.btncloseTicketType.click();
        console.log('closed ticket type');
        browser.pause(1000);
    }
    defineTicketTypeWithUpdates()
    {
        browser.pause(2000);
        SDTicketTypesPage.allTicketTypes.waitForExist({ timeout: 15000 });
        SDTicketTypesPage.divPhoneCall.waitForExist({ timeout: 10000 });
        SDTicketTypesPage.divPhoneCall.scrollIntoView();    
        SDTicketTypesPage.divPhoneCall.waitForDisplayed();
        SDTicketTypesPage.divPhoneCall.waitForClickable({ timeout: 10000 });
        SDTicketTypesPage.divPhoneCall.click();
        if(SDTicketTypesPage.inputSummary.getValue() === '')
        {
            SDTicketTypesPage.inputSummary.click();
            SDTicketTypesPage.inputSummary.setValue('Text of Summary');
        }
        SDTicketTypesPage.divHours.scrollIntoView();
        if(SDTicketTypesPage.divHours.getText()=== '')
        {
            SDTicketTypesPage.divHours.click();
            SDTicketTypesPage.setHours.waitForDisplayed();
            SDTicketTypesPage.setHours.click();
        }
        if(SDTicketTypesPage.divMins.getText() === '')
        {
            SDTicketTypesPage.divMins.click();
            SDTicketTypesPage.setMins.waitForDisplayed();
            SDTicketTypesPage.setMins.click();
        }
        SDTicketTypesPage.allLableParent.waitForDisplayed();
        var allswitches = SDTicketTypesPage.allswictdata;
        SDTicketTypesPage.switchRequireAllTasks(allswitches[0]).scrollIntoView();
        if(SDTicketTypesPage.checkSwitchRequireAllTasks(allswitches[0]).getAttribute('class').includes('Mui-checked') === true)
        {
            SDTicketTypesPage.switchRequireAllTasks(allswitches[0]).click();
        }
        if(SDTicketTypesPage.checkSwitchRequireFollower(allswitches[5]).getAttribute('class').includes('Mui-checked') === true)
        {
            SDTicketTypesPage.switchRequireFollower(allswitches[5]).click();
        }
        if(SDTicketTypesPage.checkSwitchRequireCustomFields(allswitches[1]).getAttribute('class').includes('Mui-checked') === true)
        {
            SDTicketTypesPage.switchRequireCustomFields(allswitches[1]).click();
        }
        if(SDTicketTypesPage.checkSwitchRequireAttachment(allswitches[2]).getAttribute('class').includes('Mui-checked') === true)
        {
            SDTicketTypesPage.switchRequireAttachment(allswitches[2]).click();
        }
        if(SDTicketTypesPage.checkSwitchRequireQueueScheduler(allswitches[6]).getAttribute('class').includes('Mui-checked') === true)
        {
            SDTicketTypesPage.checkSwitchRequireQueueScheduler(allswitches[6]).click();
        }
        browser.pause(1000);
        if(SDTicketTypesPage.checkSwitchNote.getAttribute('data-testid') === 'CheckBoxOutlineBlankIcon')
        {
            SDTicketTypesPage.switchNote.click();
        }
        if(SDTicketTypesPage.checkSwitchStatus.getAttribute('data-testid') === 'CheckBoxOutlineBlankIcon')
        {
            SDTicketTypesPage.switchStatus.click();
        }
        if(SDTicketTypesPage.checkSwitchRequireScheduler.getAttribute('data-testid') === 'CheckBoxIcon')
        {
            SDTicketTypesPage.switchRequireSchduler.click();
        }
        browser.pause(2000);
        if(SDTicketTypesPage.btnSave.getAttribute('class').includes('Mui-disabled') === false) 
        {
            console.log('going to save ticket type');
            SDTicketTypesPage.btnSave.click();
            console.log('ticket type save clicked');
            SDTicketTypesPage.alertMessage.waitForDisplayed({ timeout: 90000 });
            console.log('ticket type saved successfully');
            browser.pause(1500);
        }
        console.log('going to close ticket type');
        SDTicketTypesPage.btncloseEditTicketType.click();
        SDTicketTypesPage.btncloseTicketType.click();
        console.log('closed ticket type');
        browser.pause(1000);
    }
    changeTicketTypeToPhoneCall()
    {
        browser.pause(5000);
        console.log('going to change ticket type');
        SDTicketTypesPage.btnAddTask.waitForDisplayed({ timeout: 10000 });
        SDTicketTypesPage.btnAddTask.waitForClickable({ timeout: 10000 });
        //SDTicketTypesPage.inputTicketType.waitForExist();
        SDTicketTypesPage.inputTicketType.waitForDisplayed({ timeout: 10000 });
        SDTicketTypesPage.inputTicketType.waitForClickable({ timeout: 10000 });
        //var val = SDTicketTypesPage.inputTicketType.getValue();
        //if(val != 'Phone Call')
        //{
            SDTicketTypesPage.inputTicketType.click();
            browser.pause(2000);
            browser.keys(this.backspaceKey);
            browser.pause(500);
            SDTicketTypesPage.inputTicketType.setValue('Phone Call');
            browser.pause(2000);
            //browser.keys(this.downArrowKey);
            //browser.keys(this.enterKey);
            SDTicketTypesPage.autocompleteDialouge.waitForDisplayed({ timeout: 10000 });
            SDTicketTypesPage.autocompleteDialouge.waitForClickable({ timeout: 10000 });
            SDTicketTypesPage.autocompleteDialouge.click();
            SDTicketTypesPage.btnContinueAnyway.waitForDisplayed();
            SDTicketTypesPage.btnContinueAnyway.waitForClickable();
            SDTicketTypesPage.btnContinueAnyway.click();
            browser.pause(1500);
            console.log('Ticket type changed to Phone Call');
        //}
    }
    verifyRequiredFollowerVelidation() {
        browser.pause(2000);
        console.log('going to verify follower validation');
        SDTicketTypesPage.btnSaveAfterEdit.scrollIntoView();
        SDTicketTypesPage.btnSaveAfterEdit.moveTo();
        browser.pause(1000);
        SDTicketTypesPage.getTooltipText.waitForDisplayed();
        expect(SDTicketTypesPage.getTooltipText.getText().includes('- at least one follower')).to.be.true;
    }
    editTicketWithoutFollower() {
        var val = SDTicketTypesPage.inputTicketType.getValue();
        if(val != 'Phone Call')
        {
            SDTicketTypesPage.inputTicketType.click();
            browser.pause(3000);
            browser.keys(this.backspaceKey);
            SDTicketTypesPage.inputTicketType.setValue('Phone Call');
            browser.pause(2000);
            //browser.keys(this.downArrowKey);
            //browser.keys(this.enterKey);
            SDTicketTypesPage.autocompleteDialouge.waitForDisplayed();
            SDTicketTypesPage.autocompleteDialouge.waitForClickable();
            SDTicketTypesPage.autocompleteDialouge.click();
            SDTicketTypesPage.btnContinueAnyway.waitForDisplayed();
            SDTicketTypesPage.btnContinueAnyway.click();
        }
        browser.pause(2000);
        SDTicketTypesPage.btnTicketSave.moveTo();        
        browser.pause(1000);
    }
    editTicketWihoutScheduler()
    {
        var val = SDTicketTypesPage.inputTicketType.getValue();
        if(val != 'Phone Call')
        {
            SDTicketTypesPage.inputTicketType.click();
            browser.pause(3000);
            browser.keys(this.backspaceKey);
            SDTicketTypesPage.inputTicketType.setValue('Phone Call');
            browser.pause(2000);
            //browser.keys(this.downArrowKey);
            //browser.keys(this.enterKey);
            SDTicketTypesPage.autocompleteDialouge.waitForDisplayed();
            SDTicketTypesPage.autocompleteDialouge.waitForClickable();
            SDTicketTypesPage.autocompleteDialouge.click();
            SDTicketTypesPage.btnContinueAnyway.waitForDisplayed();
            SDTicketTypesPage.btnContinueAnyway.click();
        }
        browser.pause(2000);
        SDTicketTypesPage.btnTicketSave.moveTo();        
        browser.pause(1000);
    }
    verifyRequiredSchedulerValidation() {
        expect(SDTicketTypesPage.getTooltipText.getText().includes('- require the ticket to be scheduled')).to.be.true;
    }
    verifyUpdatedTicketTypeSaved() {
        if(SDTicketTypesPage.btnTicketSave.getAttribute('disabled') === null) 
        {
            SDTicketTypesPage.btnTicketSave.click();
            SDTicketTypesPage.alertMessage.waitForDisplayed();
            expect(SDTicketTypesPage.alertMessage.getText().includes('Saved Successfully')).to.be.true;
        }
        else
        {
            expect(0).to.be.eql(1);//save option is disabled
        }
    }
    verifyAttachmentValidation() {
        SDTicketTypesPage.getTooltipText.waitForDisplayed();
        expect(SDTicketTypesPage.getTooltipText.getText().includes('- an attachment to be uploaded')).to.be.true;
    }
}
module.exports = new SDTicketTypesActions();