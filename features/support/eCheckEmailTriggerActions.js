var eCheckEmailTrigger = require('../pageobjects/eCheckEmailTrigger.page');
const voidPaymentMutationActions = require('../support/apiSupport/voidPaymentMutationActions');
const EmailActions = require('../support/emailActions');
const { expect } = require('chai');
const { callGraphQLAPI } = require('../utils/apiHelper');

class eCheckEmailTriggerActions {

    constructor(){
        this.clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
        this.newTemplate = true;
        this.templateActive = true;
        this.currentFilter = '';
        this.templateName = '';
        this.randomString = `${Math.random(100, 10000)}`;
        this.voidedMessage = `Dear <<First Name>> <<Last Name>> Your payment has been voided. <<ISPName>>`;
        this.returnedMessage = `Dear <<First Name>> <<Last Name>> Your eCheck payment has been returned. <<ISPName>>`;
        this.token = 'default_token';
        this.query;
		this.customerID = 2037252;
        this.paymentAmmount = 50.0;
        this.paymentDate = new Date().toISOString().split('T')[0];
        this.variables;
        this.response;
        this.paymentID;
    }

    openMessageTemplete(){
        eCheckEmailTrigger.dashboardTitle.waitForDisplayed();
        eCheckEmailTrigger.btnTopMenu.waitForDisplayed();
        eCheckEmailTrigger.btnTopMenu.waitForClickable();
        eCheckEmailTrigger.btnTopMenu.click();
        eCheckEmailTrigger.btnCRM.waitForDisplayed();
        eCheckEmailTrigger.btnCRM.waitForClickable();
        eCheckEmailTrigger.btnCRM.click();
        eCheckEmailTrigger.spanMesageTemplates.waitForDisplayed();
        eCheckEmailTrigger.spanMesageTemplates.waitForClickable();
        eCheckEmailTrigger.spanMesageTemplates.click();
        eCheckEmailTrigger.btnTemplates.waitForDisplayed();
        eCheckEmailTrigger.btnTemplates.waitForClickable();
        eCheckEmailTrigger.btnTemplates.click();
    }

    addTemplete(templeteName){
        templeteName = templeteName.replace(/['"]+/g, '');
        this.templateName = templeteName;
        eCheckEmailTrigger.btnAdd.waitForDisplayed();
        eCheckEmailTrigger.btnAdd.waitForClickable();
        eCheckEmailTrigger.btnAdd.click();
        eCheckEmailTrigger.spanNewTemplate.waitForDisplayed();
        eCheckEmailTrigger.spanNewTemplate.waitForClickable();
        eCheckEmailTrigger.spanNewTemplate.click();
        eCheckEmailTrigger.inputTemplateName.waitForDisplayed();
        eCheckEmailTrigger.inputTemplateName.waitForClickable();
        eCheckEmailTrigger.inputTemplateName.click();
        eCheckEmailTrigger.inputTemplateName.setValue(templeteName);
        eCheckEmailTrigger.btnAddDialogue.waitForClickable();
        eCheckEmailTrigger.btnAddDialogue.click();
        eCheckEmailTrigger.alertMessage.waitForDisplayed();
        if(eCheckEmailTrigger.alertMessage.getText() === "Template name already exists"){
            this.newTemplate = false;
            eCheckEmailTrigger.btnCancelDialogue.waitForClickable();
            eCheckEmailTrigger.btnCancelDialogue.click();
        }
        else{
            expect(eCheckEmailTrigger.alertMessage.getText()).eql("New Template Created Successfully");
        }
    }

    openExistingTemplete(filter){
        let templeteInGeneral = true;
        if(!eCheckEmailTrigger.templateExists(this.templateName)){
            templeteInGeneral = false;
            eCheckEmailTrigger.btnScheduledEmails.waitForClickable();
            eCheckEmailTrigger.btnScheduledEmails.click();
            eCheckEmailTrigger.pActiveTriggers.waitForDisplayed();
            eCheckEmailTrigger.pActiveTriggers.waitForClickable();
            eCheckEmailTrigger.pActiveTriggers.click();
            eCheckEmailTrigger.pOthers.waitForClickable();
            eCheckEmailTrigger.pOthers.click();
            eCheckEmailTrigger.templateName(filter);
            eCheckEmailTrigger.messageEditor.waitForDisplayed();
            eCheckEmailTrigger.messageEditor.waitForClickable();
            eCheckEmailTrigger.messageEditor.click();
            browser.pause(2000);
            browser.keys(this.clearKeys);
            browser.pause(1000);
            browser.keys(this.randomString);
        //    browser.pause(2000);
            eCheckEmailTrigger.btnSave.waitForClickable();
            eCheckEmailTrigger.btnSave.click();
            expect(eCheckEmailTrigger.alertMessage.getText().includes("Successfully updated")).to.be.true;
            browser.pause(2000);
        }
        else{
            eCheckEmailTrigger.openFilterList.waitForDisplayed();
            eCheckEmailTrigger.openFilterList.waitForClickable();
            eCheckEmailTrigger.openFilterList.click();
            eCheckEmailTrigger.filterName(filter);
        }
    }

    setCurrentFilter(filter){
        filter = filter.replace(/['"]+/g, '');
        this.currentFilter = filter;
        if(!this.newTemplate) {
            this.openExistingTemplete(filter);
            return;
        }
        eCheckEmailTrigger.openFilterList.waitForDisplayed();
        eCheckEmailTrigger.openFilterList.waitForClickable();
        eCheckEmailTrigger.openFilterList.click();
        eCheckEmailTrigger.filterName(filter);
    }

    setContent(type){
        type = type.replace(/['"]+/g, '');
        eCheckEmailTrigger.inputFieldFrom.waitForDisplayed();
        eCheckEmailTrigger.inputFieldFrom.waitForClickable();
        eCheckEmailTrigger.inputFieldFrom.click();
        eCheckEmailTrigger.spanUser.waitForDisplayed();
        eCheckEmailTrigger.spanUser.waitForClickable();
        eCheckEmailTrigger.spanUser.click();
        eCheckEmailTrigger.inputFieldSubject.waitForDisplayed();
        eCheckEmailTrigger.inputFieldSubject.waitForClickable();
        eCheckEmailTrigger.inputFieldSubject.click();
        browser.keys(this.clearKeys);
        if(type === "Return"){
            eCheckEmailTrigger.inputFieldSubject.setValue("eCheck returned");
            eCheckEmailTrigger.messageEditor.waitForClickable();
            eCheckEmailTrigger.messageEditor.click();
            browser.keys(this.clearKeys);
            browser.keys(this.returnedMessage);
        }
        else{
            eCheckEmailTrigger.inputFieldSubject.setValue("eCheck void");
            eCheckEmailTrigger.messageEditor.waitForClickable();
            eCheckEmailTrigger.messageEditor.click();
            browser.keys(this.clearKeys);
            browser.keys(this.voidedMessage);
        }
    }

    clickSaveBtn(){
        if(!this.templateActive)
    
            eCheckEmailTrigger.spanTriggerIsActive.click();
            eCheckEmailTrigger.btnSave.waitForClickable();
            eCheckEmailTrigger.btnSave.click();
    }

    verifyTrigger(){
        eCheckEmailTrigger.alertMessage.waitForDisplayed();
        expect(eCheckEmailTrigger.alertMessage.getText().includes("Successfully updated")).to.be.true;
        eCheckEmailTrigger.btnTemplates.waitForClickable();
        eCheckEmailTrigger.btnTemplates.click();
        eCheckEmailTrigger.btnScheduledEmails.waitForClickable();
        eCheckEmailTrigger.btnScheduledEmails.click();
        eCheckEmailTrigger.pActiveTriggers.waitForDisplayed();
        eCheckEmailTrigger.pActiveTriggers.waitForClickable();
        eCheckEmailTrigger.pActiveTriggers.click();
        eCheckEmailTrigger.pOthers.waitForDisplayed();
        eCheckEmailTrigger.pOthers.waitForClickable();
        eCheckEmailTrigger.pOthers.click();
        expect(eCheckEmailTrigger.templateExists(this.currentFilter)).to.be.true;
    }

    async setUpGraphQLEnvironment(paymentMethod){
        paymentMethod = paymentMethod.replace(/['"]+/g, '');
        await voidPaymentMutationActions.getValidAuthenticationToken();
        this.token = voidPaymentMutationActions.token;
        if(paymentMethod === 'echeck')
            await this.addPayment();
        else
        {
            await voidPaymentMutationActions.makePayment();
            console.log("Making Credit Card Payment...")
            this.paymentID = voidPaymentMutationActions.paymentID;
        }
    }

    async addPayment(){
        console.log(this.paymentDate);
        const query = `
            mutation addPaymentMutation(
            $input_payment: PaymentsInput!
            $input_credit_memo_items: [CreditMemoItemInput]
            ) {
                addPayment(
                    input_payment: $input_payment
                    input_credit_memo_items: $input_credit_memo_items
                ) {
                    customer_id
                    payment_id
                    payment_date
                    payment_method
                    customer {
                    status
                    balance
                    paid_through
                    __typename
                    }
                    __typename
                }
            }
        `;
        let variables = {
            "input_payment": {
            "customer_id": this.customerID,
            "payment_memo": "",
            "process_payment": false,
            "auto_unsuspend": true,
            "routing_number": "091000019",
            "account_number": "112255",
            "echeck_type": "Checking",
            "payment_method": "eCheck",
            "payment_amount": 10.2,
            "payment_date": this.paymentDate,
            "merchant_option_id": 10,
            "nacha_details": {
                "type": "MANUAL",
                "source": "visp_web"
            },
            "payment_reference": "NACHA",
            "address": "",
            "city": "",
            "state": "",
            "zip_code": ""
            }
        }
        this.response = await callGraphQLAPI(this.token, "addPaymentMutation", query, variables);
        this.paymentID = this.response.data.addPayment.payment_id;
        console.log("Payment ID: " + this.paymentID);
    }

    callDeletePaymentMutation(){
        this.query = `
            mutation deletePaymentMutation(
                $payment_id: Float!,
                $return_echeck: Boolean,
                $return_reason: String
                ) {
                deletePayment(
                    payment_id: $payment_id,
                    return_echeck: $return_echeck,
                    return_reason: $return_reason
                )
            }
        `;
        console.log('I call the deletePayment mutation in GraphQL Playground');
        console.log("Payment ID: " + this.paymentID);
    }
    
    
    callVoidPaymentMutation(){
        this.query = `
            mutation voidPaymentMutation($payment_id: Float!, $amount: Float!) {  
                voidPayment(payment_id: $payment_id, amount: $amount)  
            }
        `;
        console.log('I call the voidPayment mutation in GraphQL Playground');
        console.log("Payment ID: " + this.paymentID);
    }

    enterVariables(action){
        if(action === 'delete')
        {
            this.variables = {
                "payment_id": this.paymentID,
                "return_echeck": true,
                "return_reason": "Account number is invalid."
            };
        }
        else if(action === 'void')
        {
            this.variables = {
                "payment_id": this.paymentID,
                "amount": this.paymentAmmount
            };
        }
        console.log('I provide the variables');
        console.log("Variables: " + JSON.stringify(this.variables));
    }

    async executeDeletePaymentMutation(){
        this.response = await callGraphQLAPI(this.token, "deletePaymentMutation", this.query, this.variables);
        console.log('I include the authorization token in the headers');
    }
    
    async executeVoidPaymentMutation(){
        this.response = await callGraphQLAPI(this.token, "voidPaymentMutation", this.query, this.variables);
        console.log('I include the authorization token in the headers');
    }

    verifyDeleteResponse(){
        const deletePayment = this.response.data.deletePayment;
        console.log(deletePayment);
        expect(deletePayment).to.be.a('string');
        expect(deletePayment.includes("deleted successfully")).to.be.true;
        console.log('I should receive a successful response confirming the delete operation');
    }
    
    verifyVoidResponse(){
        const voidPayment = this.response.data.voidPayment;
        console.log(voidPayment);
        expect(voidPayment).to.be.a('string');
        expect(voidPayment.includes("Payment voided successfully.")).to.be.true;
        console.log('I should receive a successful response confirming the void operation');
    }

    verifyLogHistory(){
        EmailActions.openSubscriberList();
        eCheckEmailTrigger.inputSearchSubscriber.waitForDisplayed();
        eCheckEmailTrigger.inputSearchSubscriber.waitForClickable();
        eCheckEmailTrigger.inputSearchSubscriber.click();
        eCheckEmailTrigger.inputSearchSubscriber.setValue(this.customerID);
        browser.pause(3000);
        eCheckEmailTrigger.openSubscriber(this.customerID);
        eCheckEmailTrigger.btnLogs.waitForDisplayed();
        eCheckEmailTrigger.btnLogs.waitForClickable();
        eCheckEmailTrigger.btnLogs.click();
        browser.pause(1000);
        eCheckEmailTrigger.spanMESSAGE.waitForDisplayed();
        eCheckEmailTrigger.spanMESSAGE.waitForClickable();
        eCheckEmailTrigger.spanMESSAGE.click();
        browser.pause(3000);
        eCheckEmailTrigger.colData.waitForDisplayed();
        expect(eCheckEmailTrigger.colData.getText()).eql("EMAIL - SEND");
        console.log("Passed!!!");
    }

}
module.exports = new eCheckEmailTriggerActions();