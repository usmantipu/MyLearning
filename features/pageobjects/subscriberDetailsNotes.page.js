const utils = require('../support/utils');
"use strict";
var Page = require('./page')

class subscriberDetailsNotes extends Page {
	
    get threeDotMenu () {return browser.$$('.ReactVirtualized__Grid__innerScrollContainer')[1].$('[aria-label="More"]');}
    get customerIDFirstSubscriber () {return browser.$('//*[@id="subscriberPage"]/div/div[1]/div[1]/div/div/div/div[2]/div/div/div[3]/div/p');}
    get clickNoteOptionOnMenu () {return browser.$('//*[@id="row-action-menu"]/div[3]/ul/div[2]/li/div/span');}

    get clickAttachmentOptionOnMenu () {return browser.$('span=Attachment');}
    get selectFileToUpload () {return browser.$('.file-upload');}
    get addAttachmentButton () {return browser.$('button=Add Attachment');}
    get markAsPrivateCheckBox () {return browser.$('span=Mark as Private');}
    get checkMarkAsPrivateAlreadyChecked () {return browser.$('[name=isPrivate]');}

    get notesTextBox () {return browser.$('[name=note]');}
    get saveNotesButton () {return browser.$('.MuiDialogContent-root').$('.MuiButton-containedPrimary');}
    get confirmationMsg () {return browser.$('.MuiAlert-message');} // MuiAlert-message css-1w0ym84 Saved Successfully
        isConfirmationMsgPresent (msg) {return browser.$('.MuiAlert-message='+msg);}
    get logsTab () {return browser.$('button=Logs');}
    get noteTabsOnLogs () {return browser.$('span=NOTE');}    
    get allTabOnLogs () {return browser.$('span=All');}
    
    get noteTextInTable () {return browser.$('.activity-table').$$('.ReactVirtualized__Grid__innerScrollContainer')[1].$$('.MuiTableCell-root')[3];}
    get noteTypeInTable () {return browser.$('.activity-table').$$('.ReactVirtualized__Grid__innerScrollContainer')[1].$$('.MuiTableCell-root')[2];}
    get noteNoteDivXPath () {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[5]/div/div[2]/div/div[2]/div/div[1]/div/div/div/div/div[2]/div/div/div[3]');}
    // get noteDetailsInNoteTable () {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[5]/div/div[2]/div/div[2]/div/div[1]/div/div/div/div/div[2]/div/div/div[4]/div/p');}
    // get noteDetailsInNoteTable () {return browser.$('p=randomTestNotes');}
    noteDetailsInNoteTable (noteText) {return browser.$('p='+noteText);}
    // deletedNoteInNoteTable (noteText) {return browser.$
    get firstNoteOfRow(){return browser.$('.activity-table').$('.bottomRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$('p');}
        columnByText(text){return browser.$('p='+text);}
    notesColumn(noteText) {var alldivs = browser.$('.activity-table').$('.bottomRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('p');
        // statusColumn(filterStatus) {var alldivs = browser.$('.px-4').$('.bottomRightGrid').$$('.text-truncate');
        //console.log('finding note with text :' + noteText);
        for (var i=0; i<20;i++)
                                {
                                    //console.log('index is : '+ i +' and value is '+ alldivs[i].getText());	
                                    if(alldivs[i].getText().includes(noteText))
                                    {
                                         //element = alldivs[i].getText();
                                         //console.log('note found as :' + alldivs[i].getText());
                                         return alldivs[i];
                                    }
                                }
                        }


    get allHeaders () { return browser.$('.activity-table').$('.topRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('p');}
    get allColumnsData() {return browser.$('.activity-table').$('.bottomRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('.MuiTableCell-root');}
    
    get noteCellInLogsTableText () { return browser.$('.activity-table').$('.bottomRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('.MuiTableCell-root')[2];}
    get noteCellInLogsTable () { return browser.$('.activity-table').$('.bottomRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('.MuiTableCell-root')[1];}
    get noteDetailsInLogsTable () { return browser.$('.activity-table').$('.bottomRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('.MuiTableCell-root')[2];}
    
    get eyeIconWithNote () { return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[5]/div/div[2]/div/div[2]/div/div[1]/div/div/div/div/div[2]/div/div/div[3]').$('.MuiSvgIcon-fontSizeMedium');}
    get closeButtonOnNotes () {return browser.$('.MuiDialogTitle-root').$('.MuiGrid-container').$$('.MuiGrid-root')[1];}
    get saveButtonOnNotes () {return browser.$('.MuiDialogContent-root').$('.MuiGrid-container').$$('.MuiGrid-root')[4].$('button=Save');}
    
    btnPrivateAttachment(parent){return parent.$('[data-testid="RemoveRedEyeIcon"]');}
    //get noteEditIconInTable (){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[5]/div/div[2]/div/div[2]/div/div[1]/div/div/div/div/div[2]/div/div/div[4]/div/div/div[1]/button');}
    get noteEditIconInTable (){return browser.$('[data-testid="CreateIcon"]');}
    get noteDeleteIconInTable (){return browser.$('.activity-table').$('[data-testid="CloseIcon"]');}    
    get deleteButtonForNote (){return browser.$('[aria-describedby="alert-dialog-description"]').$('.MuiDialogActions-root').$('button=Delete');}
    get customerID () {return browser.$('.MuiTable-root').$$('.ReactVirtualized__Grid__innerScrollContainer')[1].$$('.MuiTableCell-root')[2].$('.MuiTypography-root');}
    get firstNote () {return browser.$('//main/div[4]/div/div[3]/div[5]/div/div[2]/div/div[2]/div/div[1]/div/div/div/div/div[2]/div/div/div[1]/div/p');}
    
    get deletedNoteContents () {return browser.$('.MuiPaper-elevation24').$('.MuiDialogContent-root').$('.MuiGrid-container').$$('.MuiGrid-root')[1];}
    get updatedNoteContents () {return browser.$('.MuiPaper-elevation24').$('.MuiDialogContent-root').$('.MuiGrid-container').$$('.MuiGrid-root')[2];}

	get btnAppIcon(){return browser.$('[data-testid="AppsIcon"]');}
	
	get btnCustomfieldsFromMenu(){return browser.$('li=Custom Fields');}
    get getallEnabledCustomfields(){return browser.$('.MuiAccordion-region').$$('.MuiLink-root');}
    get btnSaveSettings(){return browser.$('.settings-drawer-wrapper').$('button=Save');}

    //Controls
    get btnCloseTopMenu(){return browser.$('.settings-drawer-wrapper').$('[data-testid="CloseIcon"]');}
    get btnCustomFieldsTab(){return browser.$('//*[@id="SummaryTabs"]/div[1]/div/div/button[4]');}
    get getAllCustomFieldsFromSubscribers(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div/div/div[1]/form/div[1]/div').$$('input');}
    get getAllCustomFieldsLabelsFromSubscribers(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div/div/div[1]/form/div[1]/div').$$('label');}
	get customTextFields(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div/div/div[1]/form/div[1]/div').$$('.MuiInputBase-input');}
    get cancelBtnCustomFields(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div/div/div[2]/button');}
    get saveBtnCustomFields(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div/div/div[2]/span/button');}
    get btnAdditionalInfoTab(){return browser.$('//*[@id="SummaryTabs"]/div[1]/div/div/button[3]');}
    get closeButtonOnSubscriberPanel () {return browser.$('.docker-buttons').$('[aria-label="Close"]');}

    get secondCustomFiledFromSettings(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[2]/div[2]/div[1]/div[2]/div/div/div/div/div/div[2]/div/div[2]/div');}
        selectCustomFiledType(fieldType){return browser.$('#render-props-menu').$('span='+fieldType);}
        getInputValue(fieldTypeParent){return fieldTypeParent.$('input');}
    get btnConfirmationYes(){return browser.$('/html/body/div[3]/div[3]/div/div[2]/button[1]');}
    get confirmationMsg(){return browser.$('.MuiAlert-message');}
    get emailValidationErrorMsg(){return browser.$('span=Please enter a valid email address');}
    get thirdCustomFieldFromSettings(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[2]/div[2]/div[1]/div[2]/div/div/div/div/div/div[3]/div/div[2]/div');}
    get ipAddressErrorMsg(){return browser.$('span=Please enter a valid IP address');}
    get macAddressErrorMsg(){return browser.$('span=Please enter a valid MAC address');}
    get fourthCustomFieldFromSettings(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[2]/div[2]/div[1]/div[2]/div/div/div/div/div/div[4]/div/div[2]/div');}
    
	
	open() {
        super.open('login');
		utils.clearLocalStorage();
    }
    
    submit() {
        this.form.submitForm();
    }
    
}
module.exports = new subscriberDetailsNotes();