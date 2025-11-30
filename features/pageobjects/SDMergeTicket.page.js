"use strict";
var Page = require('./page')
class SDmergeTicket extends Page{

    heading(item){return browser.$('h6*='+item);}
    get closeRightDrawer(){return browser.$('[aria-label="Close"]');}
    get dockHeader(){return browser.$('[vispdata-testid="drawer-title-bar-tab-detail"]');}
    get inputLinkedType(){return browser.$('[name="link_ticket_types"]').$('input');}
        autocompleteDialouge(item) {return browser.$('.MuiAutocomplete-popper').$('li='+item);}
    get inputLinkedTo(){return browser.$('[name="ticket_id"]').$('input');}
    get btnLinkedTicket(){return browser.$('button=Link Ticket');}
    get confirmationMsg(){return browser.$('.MuiAlert-message');}
    get mergedToParent(){return browser.$('.MuiGrid-container*=Linked Tickets');}
    get getMergedToText(){return this.mergedToParent.$('p=Ticket was merged to');}
    get getMergedToTicketDetails(){return browser.$('[vispdata-testid^="linked-tickets-form-ticket-text-"]');}
    get getMergedTicketID(){return browser.$('[vispdata-testid^="linked-tickets-form-ticket-id-"]');}
    get openTicketActionOptions(){return browser.$('[vispdata-testid="ticket-resolve-close-deletebtn-dropdown-button"]');}
    get closeTicket(){return browser.$('[vispdata-testid="ticket-resolve-close-deletebtn-menu-item-Close Ticket"]');}
    get btnTicketAction(){return browser.$('[vispdata-testid="ticket-resolve-close-deletebtn-progress-button"]');}
    get inputTicketClose(){return browser.$('[vispdata-testid="ticket-failed-dialog-ticket-failure-report"]').$('input');}
    get btnAvoidable(){return browser.$('[vispdata-testid="ticket-failed-dialog-radio-group-avoidable"]').$('span');}
    get btnSubmitReport(){return browser.$('[vispdata-testid="ticket-failed-dialog-button-submit-report-proceed-closing-ticket"]');}
    get ticketStatus(){return browser.$('[vispdata-testid="ticket-status-dropdown-resolved-field"]').$('input');}
    get ticketStatusFailed(){return browser.$('[vispdata-testid="ticket-status-dropdown-text-field"]').$('input');}
    get ticketSummary(){return browser.$('[name="summary"]');}
    get btnEditSummary(){return browser.$('button=Edit');}
    get summaryEditorData(){return browser.$('[vispdata-testid="ticket-description-field-content"]');}
    get closeDocked(){return browser.$('.MuiDrawer-paperAnchorRight').$('[data-testid="CloseIcon"]');}

    get btnOpenActivityLog(){return browser.$('[vispdata-testid="ticket-form-activity-launch-button"]');}
    get allActivityData(){return browser.$$('.MuiDrawer-paperAnchorRight')[1].$('.bottomRightGrid').$('.MuiTableCell-root');}

    get btnSaveTickedChnages(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[6]/div/div[4]/div[2]/div/div[2]/span/button');}
    get btnMessage(){return browser.$('button=Messages');}
    get noteTextArea(){return browser.$('[placeholder="Post Internal Note"]');}
    get btnPost(){return browser.$('button=Post');}
    get postedNote(){return browser.$('[vispdata-testid="ticket-messages-container"]').$('.message-bubble');}
    get btnAddTask(){return browser.$('.MuiDrawer-paperAnchorRight').$('[data-testid="AddIcon"]');}
    get inputTask(){return browser.$('[name="tasks.0.task"]');}
    get btnMarkTask(){return browser.$('[data-testid="CheckCircleIcon"]');}
    get addedTask(){return browser.$('[vispdata-testid="ticket-tasks-container"]').$('.text-left');}
        taskMergedSuffix(tId){return browser.$('.MuiDrawer-paperAnchorRight').$('[aria-label="Merge Tickets: m['+tId+']"]');}
    get attachmentMergedSuffix(){return browser.$('[vispdata-testid="ticket-attachments-field-additional-grid-0"]').$('h6');}
    get fileAttachment(){return browser.$('[vispdata-testid="ticket-attachments-field-dropzone-input-additional"]');}
    get serviceContactAreaParent(){return browser.$('[vispdata-testid="service-contact-card-grid"]');}
    get serviceContactArea(){return this.serviceContactAreaParent.$$('.MuiTypography-root');}
    get customFieldValue(){return browser.$('[name="ticketCustomFields.0.field_value"]');}
    //completeServiceTableData
    get expandSDmenu(){return browser.$('[aria-label="More"]');}
	get allserviceDeskHeaders(){return browser.$('.topRightGrid').$$('.MuiTypography-root');}
    get ticketListFirstItem(){return browser.$('.bottomRightGrid').$('.MuiTypography-root');}
    get allserviceDeskTextData(){return browser.$('.bottomRightGrid').$$('.MuiTypography-root');}
    
    get followers(){return browser.$('#followers').$$('div');}
    get btnResolved(){return browser.$('.sort-filters=Resolved');}
    get dialogText(){return browser.$('.MuiDialog-paper').$$('h6');}
    /**top menu */
	get btnAppIcon(){return browser.$('[data-testid="AppsIcon"]');}
    get btnISPLogsSetting() {return browser.$('[vispdata-testid="view-isp-logs"]');}
    get btnISP() {return browser.$('.sort-filters=ISP');}
    get firstLogsItem() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[8]/div/div[2]/div[2]/div[3]/div[1]/div[1]/div/div/div/div[2]/div/div/div[2]');}


    open(path){	super.open(path);}

}
module.exports = new SDmergeTicket();