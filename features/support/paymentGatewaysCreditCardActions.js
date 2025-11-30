var Utils = require('./utils');
const paymentCreditCard= require('../pageobjects/paymentGatewaysCreditCard.page.js');
var Utils = require('./utils');
var expect = require('chai').expect;
var should = require('chai').should();

class paymentGatewaysCreditCardActions{

    constructor(){
        this.successAddCongMsg='Alert successfully added.';
        this.AuthToken;this.BillerID;
        this.clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];// home + shift + end + del
        this.tabKey=['\uE014'];
        this.paymentgateway;
        //this.randomAmount=5;
        this.paymentOptionsSuccessfull='Payment options updated successfully.';
        this.paymentTransactionError;
        this.paymentTransactionErrorForIPPAY;
        this.proPayErrorMessage;
        this.paymentErrorFromOptions='Card could not be tokenized: AVS ZIP NOT MATCH ( )';
        this.paymentExpressErrorMessage='AVS ZIP NOT MATCH (undefined)';
        this.paymentAdded='Added payment successfully';
        this.plugNPayErrorMessage;
    }
    setMessagesAmount(newAmount)
    {
        //this.randomAmount = newAmount;
        this.paymentTransactionError='Your transaction for $'+newAmount+' was declined by your bank. Reason: AVS ZIP NOT MATCH (N).';
        this.paymentTransactionErrorForIPPAY='Your transaction for $'+newAmount+' was declined by your bank. Reason: AVS ZIP MISMATCH (N).';
        this.plugNPayErrorMessage='Your transaction for $'+newAmount+' was declined by your bank. Reason: AVS ZIP NOT MATCH (A).';
        this.proPayErrorMessage='Your transaction for $'+newAmount+' was declined by your bank. Reason: Authentication failed:.';
        console.log('new updated transaction error message is '+this.paymentTransactionError);
    }

    openPaymentGateways()
    {
        paymentCreditCard.btnAppIcon.waitForDisplayed();
        paymentCreditCard.btnAppIcon.waitForClickable();
        paymentCreditCard.btnAppIcon.click();
        paymentCreditCard.btnSettingsBilling.waitForDisplayed();
        paymentCreditCard.btnSettingsBilling.waitForClickable();
        paymentCreditCard.btnSettingsBilling.click();
        paymentCreditCard.btnPaymentFromMenu.waitForDisplayed();
        paymentCreditCard.btnPaymentFromMenu.waitForClickable();
        paymentCreditCard.btnPaymentFromMenu.click();
        paymentCreditCard.btnPaymentGateways.waitForDisplayed();
        paymentCreditCard.btnPaymentGateways.waitForClickable();
        paymentCreditCard.btnPaymentGateways.click();
        browser.pause(7000);
    }

    isPaymentGatewayConfiguredAsDefault(gateway)
    {
        browser.pause(7000);
        let index =0;
        paymentCreditCard.singleCardHeader.waitForDisplayed();
        paymentCreditCard.allCardsButtons[0].waitForDisplayed();
        var allCardsData = paymentCreditCard.allCardsHeaders;
        allCardsData[0].waitForDisplayed();
        for (var i=0; i<allCardsData.length-1;i++)
		{
            if(allCardsData[i].getText().includes(gateway))
            {
                allCardsData[i].scrollIntoView();
                index = i;
                break;
            }
            //console.log('index is '+i+' and value is '+allCardsData[i].getText());
		}
        this.paymentgateway = gateway;
        if(gateway==='PaydUp')
        {
            console.log('going to check paydUP');
            allCardsData[index].scrollIntoView();
            browser.pause(1000);
            var allcardsbuttonLength = paymentCreditCard.allCardsButtons.length;
            index =allcardsbuttonLength-1;
            console.log('paydUp verified');
        }
        if(paymentCreditCard.allCardsButtons[index].getText()==='Inactive')
        {
            paymentCreditCard.allCardsButtons[index].click();
            browser.pause(2000);
            if(paymentCreditCard.dialogPopUp.isExisting()){
                try{
                console.log('closing the dialog');
                paymentCreditCard.btnDialogOk.click();browser.pause(1000);}
                catch(e)
            {}
            }
            paymentCreditCard.btnActive.waitForDisplayed();
                    paymentCreditCard.btnActive.click();
            // switch(gateway){
            //     case "IPPAY":
            //         paymentCreditCard.btnActive.waitForDisplayed();
            //         paymentCreditCard.btnActive.click();
            //         // paymentCreditCard.inputFirstField.waitForDisplayed();
            //         // paymentCreditCard.inputFirstField.click();
            //         // browser.keys(this.clearKeys);
            //         // paymentCreditCard.inputFirstField.setValue('TESTTERMINAL');
            //         // browser.pause(1000);
            //         break;
            //     case "Authorize.net":
            //         paymentCreditCard.btnActive.waitForDisplayed();
            //         paymentCreditCard.btnActive.click();
            //         // paymentCreditCard.inputFirstField.waitForDisplayed();
            //         // paymentCreditCard.inputFirstField.click();
            //         // browser.keys(this.clearKeys);
            //         // paymentCreditCard.inputFirstField.setValue('TESTTERMINAL');
            //         // paymentCreditCard.inputSecondField.click();
            //         // browser.keys(this.clearKeys);
            //         // paymentCreditCard.inputSecondField.setValue('12134848654765478');
            //         // browser.pause(1000);
            //         break;
            //     case "ProPay":
            //         //if(paymentCreditCard.btnDialogOk.isExisting())
            //         //    paymentCreditCard.btnDialogOk.click();
            //         paymentCreditCard.btnActive.waitForDisplayed();
            //         paymentCreditCard.btnActive.click();
            //         browser.pause(1000);
            //         // paymentCreditCard.inputFirstField.waitForDisplayed();
            //         // this.AuthToken = 'Auth' + (Math.floor(new Date() / 1000));
            //         // this.BillerID = (Math.floor(new Date() / 1000));
            //         // paymentCreditCard.inputFirstField.setValue(this.AuthToken);
            //         // paymentCreditCard.inputSecondField.setValue(this.BillerID);
            //         // browser.pause(1000);
            //         break;
            //     case "Elavon":
            //         paymentCreditCard.btnActive.waitForDisplayed();
            //         paymentCreditCard.btnActive.click();
            //         // paymentCreditCard.inputFirstField.waitForDisplayed();
            //         // paymentCreditCard.inputFirstField.click();
            //         // browser.keys(this.clearKeys);
            //         // paymentCreditCard.inputFirstField.setValue('121345464631215');
            //         // paymentCreditCard.inputSecondField.click();
            //         // browser.keys(this.clearKeys);
            //         // paymentCreditCard.inputSecondField.setValue('121321454545414');
            //         // paymentCreditCard.inputThirdField.click();
            //         // browser.keys(this.clearKeys);
            //         // paymentCreditCard.inputThirdField.setValue('121321454545414');
            //         // browser.pause(1000);
            //         break;
            //     case "PlugNPay":
            //     //    if(paymentCreditCard.btnDialogOk.isExisting())
            //     //        paymentCreditCard.btnDialogOk.click();
            //         paymentCreditCard.btnActive.waitForDisplayed();
            //         paymentCreditCard.btnActive.click();
            //     case "Oriental Bank (Puerto Rico)":
            //     //    if(paymentCreditCard.btnDialogOk.isExisting())
            //     //        paymentCreditCard.btnDialogOk.click();
            //         paymentCreditCard.btnActive.waitForDisplayed();
            //         paymentCreditCard.btnActive.click();
            //     case "Payment Express":
            //     //    if(paymentCreditCard.btnDialogOk.isExisting())
            //     //        paymentCreditCard.btnDialogOk.click();
            //         paymentCreditCard.btnActive.waitForDisplayed();
            //         paymentCreditCard.btnActive.click();
            //     case "Stripe":
            //     //    if(paymentCreditCard.btnDialogOk.isExisting())
            //     //        paymentCreditCard.btnDialogOk.click();
            //         paymentCreditCard.btnActive.waitForDisplayed();
            //         paymentCreditCard.btnActive.click();
            //     case "PaydUp":
            //             break;
            // }
            browser.pause(2000);
            console.log('going to save');
            paymentCreditCard.btnDefaultForCredit.waitForDisplayed();
            paymentCreditCard.btnDefaultForCredit.click();
            browser.pause(1000);
            if(paymentCreditCard.btnDialogYes.isExisting()){
                paymentCreditCard.btnDialogYes.click();}
            console.log('default enabled');
            browser.pause(2000);
            paymentCreditCard.btnSaveGatewaySettings.waitForDisplayed();
            paymentCreditCard.btnSaveGatewaySettings.waitForClickable();
            paymentCreditCard.btnSaveGatewaySettings.click();
            if(paymentCreditCard.btnNoUseTheNew.isExisting())
                paymentCreditCard.btnNoUseTheNew.click();
            paymentCreditCard.confirmationMsg.waitForDisplayed();
            browser.pause(1000);
            paymentCreditCard.closeSubwizard.click();
            browser.pause(3000);
            console.log('saved');
            }
            paymentCreditCard.allCardsButtons[index].scrollIntoView();
            if(paymentCreditCard.allCardsButtons[index].getText()==='Default'){console.log('checked if part');}
            else
            {
                console.log('checking else part');
                paymentCreditCard.allCardsButtons[index].click();
                browser.pause(3000);
                //paymentCreditCard.btnDialogOk.waitForDisplayed();
                //stripe/plugNpay
               // if(gateway.includes('Oriental Bank (Puerto Rico)')||gateway.includes('Payment Express')||gateway.includes('PlugNPay')||gateway.includes('Stripe'))
                //{
                    if(paymentCreditCard.dialogPopUp.isExisting()){
                        try{
                        console.log('closing the dialog');
                        paymentCreditCard.btnDialogOk.click();browser.pause(1000);}
                        catch(e)
                    {}
                    }
                //    }
                console.log('going to click default');
                browser.pause(1000);
                paymentCreditCard.labelsParent.waitForDisplayed();
                browser.pause(4000);
                //paymentCreditCard.btnDefaultForCredit.moveTo();
                //paymentCreditCard.btnDefaultForCredi.waitForClickable();
                paymentCreditCard.btnDefaultForCredit.click();
                if(paymentCreditCard.btnDialogYes.isExisting()){
                    paymentCreditCard.btnDialogYes.click();}
                console.log('clicked default');
                //browser.pause(1000);
                paymentCreditCard.btnSaveGatewaySettings.waitForDisplayed();
                paymentCreditCard.btnSaveGatewaySettings.waitForClickable();
                paymentCreditCard.btnSaveGatewaySettings.click();
                paymentCreditCard.btnNoUseTheNew.waitForDisplayed();
                if(paymentCreditCard.btnNoUseTheNew.isExisting())
                    paymentCreditCard.btnNoUseTheNew.click();
                paymentCreditCard.confirmationMsg.waitForDisplayed();
                browser.pause(1000);
                paymentCreditCard.closeSubwizard.click();
                browser.pause(3000);
            }
    }

    closeTopMenu()
    {
        paymentCreditCard.btnCloseTopMenu.waitForDisplayed();
        paymentCreditCard.btnCloseTopMenu.waitForClickable();
        paymentCreditCard.btnCloseTopMenu.click();
    }

    ensureSelectedOptionAsPaymentGateway()
    {
        paymentCreditCard.btnDefaultPaymentFromDock.waitForDisplayed();
        if(!paymentCreditCard.btnDefaultPaymentFromDock.getText().includes(this.paymentgateway))
        {
            paymentCreditCard.btnDefaultPaymentFromDock.click();
            browser.pause(1000);
            paymentCreditCard.selectDropDownGateway(this.paymentgateway).click();
        }
        if(paymentCreditCard.btnIunderstand.isExisting())
        {
            paymentCreditCard.btnIunderstand.click();
            browser.pause(1000);
        }
    }
    clearExistingCreditCard()
    {
        if(paymentCreditCard.clearCreditCard.isExisting()){
            paymentCreditCard.clearCreditCard.click();
            browser.pause(3000);
        }
    }
    addCreditCard(creditcardInfo)
    {
        console.log('going to add credit card info');
        var creditData = creditcardInfo.raw();
        paymentCreditCard.btnAddCreditCard.waitForDisplayed();
        paymentCreditCard.btnAddCreditCard.waitForClickable();
        paymentCreditCard.btnAddCreditCard.click();
        browser.pause(7000);
        paymentCreditCard.iframe.waitForDisplayed();
        browser.switchToFrame(paymentCreditCard.iframe);
        console.log('going to iframe');
        paymentCreditCard.enterPopUpCardNumber.setValue(creditData[0][0]);
        browser.pause(1000);
        browser.keys(this.tabKey);
        var allexpireYear = creditData[0][2].split("");
        paymentCreditCard.enterPopUpCardExp.setValue(creditData[0][1]);
        browser.pause(500);
        browser.keys(allexpireYear[0]);
        browser.pause(500);
        browser.keys(allexpireYear[1]);
        browser.pause(500);
        paymentCreditCard.submitPayment.click();
        browser.pause(5000);
        paymentCreditCard.inputCardZipCode.waitForDisplayed();
        paymentCreditCard.inputCardZipCode.setValue(creditData[0][3]);
    }

    verifypaymentOptionsSavedSuccessfully()
    {
        paymentCreditCard.isAlertMessagePresent(this.paymentOptionsSuccessfull).waitForDisplayed();
        expect(paymentCreditCard.isAlertMessagePresent(this.paymentOptionsSuccessfull).isExisting()).to.be.true;
    }
    verifypaymentSavedFailMessage()
    {
        //paymentCreditCard.confirmationMsg.waitForDisplayed();
        //console.log('error message is'+paymentCreditCard.confirmationMsg.getText());
        paymentCreditCard.isAlertMessagePresent(this.paymentErrorFromOptions).waitForDisplayed();
        expect(paymentCreditCard.isAlertMessagePresent(this.paymentErrorFromOptions).isExisting()).to.be.true;
    }
    verifypaymentSavedFailMessageForExpress()
    {
        paymentCreditCard.confirmationMsg.waitForDisplayed();
        console.log('error message is'+paymentCreditCard.confirmationMsg.getText());
        paymentCreditCard.isAlertMessagePresent(this.paymentExpressErrorMessage).waitForDisplayed();
        expect(paymentCreditCard.isAlertMessagePresent(this.paymentExpressErrorMessage).isExisting()).to.be.true;
    }
    verifypaymentSavedFailMessageForTransaction()
    {
        paymentCreditCard.confirmationMsg.waitForDisplayed();
        console.log('error message is'+paymentCreditCard.confirmationMsg.getText());
        paymentCreditCard.isAlertMessagePresent(this.paymentTransactionError).waitForDisplayed();
        expect(paymentCreditCard.isAlertMessagePresent(this.paymentTransactionError).isExisting()).to.be.true;
    }
    verifypaymentFailTransactionForStripe()
    {
        paymentCreditCard.confirmationMsg.waitForDisplayed();
        console.log('error message is'+paymentCreditCard.confirmationMsg.getText());
        paymentCreditCard.isAlertMessagePresent(' '+this.paymentTransactionError).waitForDisplayed();
        expect(paymentCreditCard.isAlertMessagePresent(' '+this.paymentTransactionError).isExisting()).to.be.true;
    }
    verifypaymentFailMessageForIPPAYTransaction()
    {
        paymentCreditCard.confirmationMsg.waitForDisplayed();
        console.log('error message is'+paymentCreditCard.confirmationMsg.getText());
        paymentCreditCard.isAlertMessagePresent(this.paymentTransactionErrorForIPPAY).waitForDisplayed();
        expect(paymentCreditCard.isAlertMessagePresent(this.paymentTransactionErrorForIPPAY).isExisting()).to.be.true;
    }
    verifypaymentAdded()
    {
        paymentCreditCard.confirmationMsg.waitForDisplayed();
        console.log('success message is'+paymentCreditCard.confirmationMsg.getText());
        paymentCreditCard.isAlertMessagePresent(this.paymentAdded).waitForDisplayed();
        expect(paymentCreditCard.isAlertMessagePresent(this.paymentAdded).isExisting()).to.be.true;
    }
    verifyPaymentFailedFromPlugNPay()
    {
        paymentCreditCard.confirmationMsg.waitForDisplayed();
        console.log('success message is'+paymentCreditCard.confirmationMsg.getText());
        paymentCreditCard.isAlertMessagePresent(this.plugNPayErrorMessage).waitForDisplayed();
        expect(paymentCreditCard.isAlertMessagePresent(this.plugNPayErrorMessage).isExisting()).to.be.true;
    }
    verifyPaymentFailedFromProPay()
    {
        paymentCreditCard.confirmationMsg.waitForDisplayed();
        console.log('success message is'+paymentCreditCard.confirmationMsg.getText());
        paymentCreditCard.isAlertMessagePresent(this.proPayErrorMessage).waitForDisplayed();
        expect(paymentCreditCard.isAlertMessagePresent(this.proPayErrorMessage).isExisting()).to.be.true;
    }




}
module.exports = new paymentGatewaysCreditCardActions();