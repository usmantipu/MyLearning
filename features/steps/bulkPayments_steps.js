const {Given, When, Then} = require("@cucumber/cucumber");
const subscriberPaymentsActions = require('../support/subscriberDetailsPaymentsActions');
const Utils = require('../support/utils');

When(/^I select a subscriber to open its details$/, function(){
    subscriberPaymentsActions.openPaidUpList();
    subscriberPaymentsActions.openDesiredStatusList('Due');
    subscriberPaymentsActions.openDesiredStatusList('Past Due');
    //subscriberPaymentsActions.openSpecificSubscriber('nkliemchenc');
    //console.log('>>>>>subscriber dock should be opened already');
});
Then(/^I post payment for desired subscriber$/, {timeout : 400 * 60000}, function(testData){ //explicitly increased timeout for this step
    let parameters = testData.raw();
    
    for(var i=0; i<parameters.length; i++){
        console.log('col 1 of row ' +i+ ' is ' + parameters[i][0])//Testing purpose
        console.log('>>>>>>>>>>Iteration # ' + i);
        if (i!=0){
            subscriberPaymentsActions.openSpecificSubscriber(parameters[i][0]);
            if (i===1){ //Opening payments tab just once
                subscriberPaymentsActions.clickOnPaymentsTab();
            }
            subscriberPaymentsActions.expandPaymentMehodsFromPostPayments();
            switch(parameters[i][3]){

                case "cash":
                    console.log('>>>>>>>>>Posting cash payment....');
                    subscriberPaymentsActions.selectOptionFromPostPaymentTab('Cash');
                    subscriberPaymentsActions.providePaymentAmount(parameters[i][2]);
                break;
                case "check":
                    console.log('>>>>>>>>>Posting check payment....');
                    subscriberPaymentsActions.selectOptionFromPostPaymentTab('Check');
                    subscriberPaymentsActions.providePaymentAmount(parameters[i][2]);
                    subscriberPaymentsActions.provideCheckNo();
                break;
                case "eCheck":
                    console.log('>>>>>>>>>Posting eCheck payment....');
                    subscriberPaymentsActions.selectOptionFromPaymentOptionsTab('eCheck');
                    subscriberPaymentsActions.providePaymentAmount(parameters[i][2]);
                    subscriberPaymentsActions.provideEcheckDetails();
                //    subscriberPaymentsActions.eCheckDetailsFromPaymentOptions(echeckdata);
                break;
                case "cc":
                    console.log('>>>>>>>>>Posting credit card payment....');
                    subscriberPaymentsActions.selectOptionFromPaymentOptionsTab('Credit Card');
                    subscriberPaymentsActions.creditCardDetailsFromPaymentOptions('doesntMatter', parameters[i][6], parameters[i][7], parameters[i][8]);
                break;
                case "moneyOrder":
                    console.log('>>>>>>>>>Posting money order payment....');
                    subscriberPaymentsActions.selectOptionFromPostPaymentTab('Money Order');
                    subscriberPaymentsActions.providePaymentAmount(parameters[i][2]);
                    subscriberPaymentsActions.providePaymentreference();
                break;
                case "other":
                    console.log('>>>>>>>>>Posting other payment....');
                    subscriberPaymentsActions.selectOptionFromPostPaymentTab('Other');
                    subscriberPaymentsActions.providePaymentAmount(parameters[i][2]);
                break;
            }
            subscriberPaymentsActions.postPayment();
        //    subscriberPaymentsActions.closeRightDrawer(); //removed this step to mimic Dave's behavior. Enable is back if dock closure is required
        }
    }
});