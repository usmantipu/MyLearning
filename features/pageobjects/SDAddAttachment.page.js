"use strict";
var Page = require('./page')
class SDaddAttachment extends Page{

    
    get btnCloseTicket(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[6]/div/div[1]/button[4]');}
    get btnFirstRecord(){return browser.$('[vispdata-testid="ticket-table-wrapper"]').$('.bottomRightGrid').$$('.MuiTableCell-root')[2];}
    get btnVerifyAttachment(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[6]/div/div[3]/div/div[2]/div/div[2]/div/div[2]/div/div[1]/div/div[2]');}

    get plusButton() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[6]/div/div[3]/div/div[2]/div/div[2]/div/div[2]/div/div/span/div');}
    get btnMenuAttachment(){return browser.$('li=Attachment');}
    get fileAttachment(){return browser.$('[vispdata-testid="ticket-attachments-field-dropzone-input-additional"]');}
    get secondFileAttachment(){return browser.$('[vispdata-testid="ticket-attachments-field-dropzone-input-additional"]');}
    get uploadedFileLable(){return browser.$('[vispdata-testid="ticket-attachments-field-additional-grid-0"]').$('h6');}
    get uploadedSecondFileLable(){return browser.$('[vispdata-testid="ticket-attachments-field-additional-grid-1"]').$('h6');}
    get getAllUploadedAttchments(){return browser.$('[vispdata-testid="ticket-attachments-field-main-container"]').$$('h6');}
    get deleteIcon(){return browser.$('[data-testid="DeleteIcon"]');}
    get btnConfirmYes(){return browser.$('/html/body/div[2]/div[3]/div/div[2]/button[1]');}
    get activityLogs(){return browser.$$('.MuiDrawer-paperAnchorRight')[1].$('[vispdata-testid="virtualized-grid-sortable-list"]').$('.bottomRightGrid').$('.MuiTableCell-root');}
    get activityPopUpLogs(){return browser.$('[aria-describedby="alert-dialog-description"]').$$('h6');}
    get btnTicketActivity(){return browser.$('[vispdata-testid="ticket-form-activity-launch-button"]');}
    heading(item){return browser.$('h6*='+item);}

    /**top menu */
	get btnAppIcon(){return browser.$('[data-testid="AppsIcon"]');}
    get btnISPLogsFromSettings(){return browser.$('[vispdata-testid="view-isp-logs"]');}
    get btnISP(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[7]/div/div[2]/div[2]/div[2]/span[2]');}
    get allISPlogs(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[7]/div/div[2]/div[2]/div[3]/div[1]/div[1]/div/div/div/div[2]/div/div').$$('.MuiTableCell-root');}


    open(path){	super.open(path);}

}
module.exports = new SDaddAttachment();