"use strict";
var Page = require('./page')
class crmMessages extends Page{

    get TopMenuButton(){return browser.$('[vispdata-testid="add-options-icon-button"]');}
    get openTicketOption(){return browser.$('[vispdata-testid="add-options-open-ticket"]');}
    get btnAssignmentType(){return browser.$('h6=Select Assignment Type').$('button');}
    get subscriberSelect(){return browser.$('/html/body/div[3]/div[3]/ul/li[1]');}
    get autoCompleteInput(){return browser.$('.MuiAutocomplete-hasPopupIcon').$('input');}
    get expandAllDownArrows(){return browser.$$('[data-testid="ArrowDropDownIcon"]');}
    get btnTicketType(){return browser.$('/html/body/div[2]/div[3]/div/div[2]/div[6]/div/div[3]/button');}
    get btnCreateTicket(){return browser.$('button=Create');}
    get confirmationMsg () {return browser.$('.MuiAlert-message');}
    // Email Messages
    get ticketDrawerParent(){return browser.$('#TicketsDrawer-container');}
    get messagesSection(){return this.ticketDrawerParent.$('.MuiAccordionSummary-gutters*=Messages');}
    get btnAddMessage(){return this.ticketDrawerParent.$('[aria-label="Add Message"]');}
    get emailOption(){return this.ticketDrawerParent.$('//*[@id="basic-menu"]/div[3]/ul/li[1]');}
    get emailToInput(){return this.ticketDrawerParent.$('.emailInput').$('input');}
    get iframeParent(){return browser.$('.tox-edit-area__iframe');}
    get iframeMessageBody(){return browser.$('#tinymce');}
    get btnSendMessage(){return this.ticketDrawerParent.$('button=Send');}
    get btnCancelMessage(){return this.ticketDrawerParent.$('button=Cancel');}
    get iconEmailMessage(){return this.ticketDrawerParent.$('[data-testid="EmailOutlinedIcon"]');}
    get emailRecipientLabel(){return this.ticketDrawerParent.$('.messages-list-wrapper').$('li');}
    get tooltipParent(){return browser.$$('.MuiModal-root');}
    get tooltipContent(){ var test = browser.$$('.MuiModal-root'); console.log('total length is:'+ test.length); var lastElement = test[test.length - 1];   return lastElement.$$('h6');}
    get messageDateTimeStamp(){return this.emailRecipientLabel.$('.MuiTypography-caption');}
    get btnAddNewNote(){return this.emailRecipientLabel.$('[data-icon="message-plus"]');}
    get btnDeleteMessage(){return this.emailRecipientLabel.$('[data-icon="trash"]');}
    get btnNoConfirmDelete(){return browser.$('.MuiDialogActions-root').$('button=No');}
    get btnYesConfirmDelete(){return browser.$('.MuiDialogActions-root').$('button=Yes');}
    get noMessageText(){return this.ticketDrawerParent.$('p=No message available.');}
    get btnAllNotesMessages(){return this.ticketDrawerParent.$('button=All');}
    get btnAllNotes(){return this.ticketDrawerParent.$('button=Notes');}
    get btnAllMessages(){return this.ticketDrawerParent.$('button=Messages');}
    //SMS
    get smsOption(){return this.ticketDrawerParent.$('//*[@id="basic-menu"]/div[3]/ul/li[2]');}
    get inputSMSToNumber(){return this.ticketDrawerParent.$('.phoneInput').$('input');}
    get smsInputArea(){return this.ticketDrawerParent.$('[placeholder="Add Text Here...."]');}
    get smsIcon(){return this.emailRecipientLabel.$('[data-icon="message-sms"]');}   

    // Notes
    get btnAddNote(){return this.ticketDrawerParent.$('[data-icon="note"]');}
    get btnSaveNote(){return this.ticketDrawerParent.$('button=Save');}
    get fileAttachment(){return this.ticketDrawerParent.$('[name="file"]');}
    get fileUploadPreview(){return this.ticketDrawerParent.$('.file-upload-preview-grid');}
    get uploadedFileName(){return this.fileUploadPreview.$('.MuiTypography-root');}
    get btnAlertClose(){return browser.$('.MuiAlert-action').$('[aria-label="Close"]');}
    get closeAttachmentPreviewBtn(){return this.fileUploadPreview.$('.close-icon-btn');}




    //To Remove
    get serviceDeskmenu() { return browser.$('[aria-label="Service Desk"]'); }
    get openFirstTicketInList() { return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[1]/div[1]/div/div/div/div[2]/div/div/div[3]'); }
    get btnTicketDockDotted() { return browser.$('.MuiDrawer-paperAnchorRight').$('[data-testid="MoreVertIcon"]'); }
    get btnBetaSwitch() { return browser.$('li*=New (beta)').$('.MuiButtonBase-root'); }
    get btnCloseTicketDrawer() { return browser.$('.MuiDrawer-paperAnchorRight').$('[aria-label="Close"]'); }
    


    open(path){	super.open(path);}

}
module.exports = new crmMessages();