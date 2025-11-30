"use strict";
var Page = require('./page')
class crmaddAttachment extends Page{

    
    get btnCloseTicket(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[1]/button[4]');}
    get ticketGridParent(){return browser.$('.react-grid-item*=Tickets');}
    get btnFirstRecord(){return this.ticketGridParent.$('.bottomRightGrid').$('.MuiTypography-root');}
    get btnVerifyAttachment(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[6]/div/div[3]/div/div[2]/div/div[2]/div/div[2]/div/div[1]/div/div[2]');}

    get plusButton() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[6]/div/div[3]/div/div[2]/div/div[2]/div/div[2]/div/div/span/div');}
    get btnMenuAttachment(){return browser.$('li=Attachment');}
    get fileAttachment(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div/div[2]/div/div[2]/div/div[2]/div/div/span/div/input');}
    get secondFileAttachment(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div/div[2]/div/div[2]/div/div[2]/div/div[2]/span/div/input');}
    get uploadedFileLable(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div/div[2]/div/div[2]/div/div[2]/div/div[1]/div/div[1]/img');}
    get uploadedSecondFileLable(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div/div[2]/div/div[2]/div/div[2]/div/div[2]/div/div[1]/img');}
    
    get deleteIcon(){return browser.$('[data-testid="DeleteIcon"]');}
    get btnConfirmYes(){return browser.$('/html/body/div[2]/div[3]/div/div[2]/button[1]');}
    get activityLogs(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[6]/div/div[2]/div[2]/div[1]/div/div/div/div/div[2]/div/div/div[1]/div/p');}
    get activityPopUpLogs(){return browser.$('.MuiDialog-container').$$('h6')[1];}
    get btnTicketActivity(){return browser.$('.MuiDrawer-paperAnchorRight').$$('[data-testid="LaunchIcon"]')[2];}
    heading(item){return browser.$('h6*='+item);}

    /**top menu */
	get btnAppIcon(){return browser.$('[data-testid="AppsIcon"]');}
    get btnISPLogsFromSettings(){return browser.$('li=ISP Logs');}
    get btnISP(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[2]/div[2]/div[2]/span[2]');}
    get allISPlogs(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[2]/div[2]/div[3]/div[1]/div[1]/div/div/div/div[2]/div/div').$$('.MuiTableCell-root');}


    open(path){	super.open(path);}

}
module.exports = new crmaddAttachment();