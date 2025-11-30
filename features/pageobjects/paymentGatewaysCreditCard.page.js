"use strict";
var Page = require('./page')
class paymentGatewaysCreditCard extends Page{

    get btnAppIcon(){return browser.$('[data-testid="AppsIcon"]');}
	get btnPaymentFromMenu(){return browser.$('li=Payments');}
	get btnSettingsBilling(){return browser.$('.MuiToolbar-root').$('//*[@id="settings-tab-1"]');}
    get btnPaymentGateways(){return browser.$('button=Payment Gateways');}
    get singleCardHeader(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[2]/div[3]/div').$('.MuiCardHeader-content');}
    get allCardsHeaders(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[2]/div[3]/div').$$('.MuiCardHeader-content');}
    get allCardsButtons(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[2]/div[3]/div').$$('.MuiCardHeader-action');}
    get btnDialogOk(){return browser.$('/html/body/div[2]/div[3]/div/div[2]/button');}
    get dialogPopUp(){return browser.$('#alert-dialog-slide-title');}
    get btnDialogYes(){return browser.$('button=Yes');}
    get ActiveStatus(){return browser.$('[name="flag_ippay_active"]');}
    get btnActive(){var allLables = this.labelsParent.$$('label');
                                    for (var i=0; i<allLables.length-1;i++)
		                                {
                                            if(allLables[i].getText().includes('Active'))
                                            {
                                                return allLables[i].$('.MuiTypography-root');
                                            }
		                                }
        }
    //get btnActive(){return browser.$('.MuiSwitch-switchBase');}
    get labelsParent(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[2]/div[4]/div');}
    get btnDefaultForCredit(){var allLables = this.labelsParent.$$('label');
                                    for (var i=0; i<allLables.length-1;i++)
		                                {
                                            //console.log('index is '+i+' and value is '+allLables[i].getText());
                                            if(allLables[i].getText().includes('Default for Credit Card'))
                                            {
                                                return allLables[i];
                                            }
		                                }
        }
    get btnNoUseTheNew(){return browser.$('button=No, use the new default Payment Gateway option');}
    get inputFirstField(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[2]/div[4]/div/div[2]/div[1]/div[2]/div[1]/div[1]/div/div').$('input');}
    get inputSecondField(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[2]/div[4]/div/div[2]/div[1]/div[2]/div[1]/div[2]/div/div').$('input');}
    get inputThirdField(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[2]/div[4]/div/div[2]/div[1]/div[2]/div[1]/div[3]/div/div').$('input');}
    get btnSaveGatewaySettings(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[2]/div[4]/div/div[2]/div[2]/span/button');}
    get confirmationMsg(){return browser.$('.MuiAlert-message');}
    get closeSubwizard(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[2]/div[4]/div/div[1]/div/div[2]/button');}
    get btnCloseTopMenu(){return browser.$('.settings-drawer-wrapper').$('[data-testid="CloseIcon"]');}
    get btnDefaultPaymentFromDock(){return browser.$('//*[@id="SummaryTabs"]/div[3]/div/div[3]/div/div/h6/button');}
        selectDropDownGateway(gateway){return browser.$('li*='+gateway);}
        isAlertMessagePresent(alert){return browser.$('.MuiAlert-message*='+alert);}
    get btnIunderstand(){return browser.$('button=I Understand');}
    get clearCreditCard(){return browser.$('[aria-label="Clear"]');}
    get btnAddCreditCard(){return browser.$('button=Add Credit Card');}
    get enterCardHeading(){return browser.$('//*[@id="mainContainer"]/span[1]');}
    get iframe(){return browser.$('//*[@id="CollectJSIframe"]');}
    get enterPopUpCardNumber(){return browser.$('//*[@id="cc-number-field"]').$('input');}
    get enterPopUpCardExp(){return browser.$('//*[@id="cc-exp"]');}
    get submitPayment(){return browser.$('#submit-payment');}
    get inputCardZipCode(){return browser.$('[name="input_card.0.zip_code"]');}

    open(path){	super.open(path);}

}
module.exports = new paymentGatewaysCreditCard();