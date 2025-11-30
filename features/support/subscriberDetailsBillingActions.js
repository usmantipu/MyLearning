var LoginPage = require('../pageobjects/login.page');
const SubscriberDetailsBillingPage = require('../pageobjects/subscriberDetailsBilling.page');
const subscriberlistActions = require('../support/subscriberlistActions');
var Utils = require('./utils');
var expect = require('chai').expect;
var should = require('chai').should();

class subscriberDetailsBillingAction {

    constructor() {
        this.invoiceDayInInvoiceSetting;
        this.selectedTermStartDate;
        this.VerifyTax;
        this.termStartInInvoiceSetting;
        this.TaxesInInvoiceSetting;
        this.TaxesInBillingOptions;
        this.BillingCycleValue;
        this.UpdatedValue;
        this.transactionsCount;
        this.taxName;
        this.taxRate;this.exemptedRate;
        this.Esckeys = ['\uE00C'];
        this.default;
    }


    openVispApp(){
		SubscriberDetailsBillingPage.open();
	}

	loginToVisp(login, password) {
        Utils.login(login, password);
    }

    clickOnBillingOptions() {
        browser.pause(2000);
        SubscriberDetailsBillingPage.btnBillingOption.click();
        browser.pause(1000);
    }
    verifyBillingOptionsAvailable() {
        browser.pause(2000);
        var text = SubscriberDetailsBillingPage.verifyLeftSide.getText();
        expect(text).to.eql('Billing Days');
        var text = SubscriberDetailsBillingPage.verifyRightSide.getText();
        expect(text).to.eql('Billing Options');
    }
    openInvoiceSettingFromTopRightMenu() {
        SubscriberDetailsBillingPage.btnTopRightMenu.click();
        SubscriberDetailsBillingPage.btnSettingsBilling.waitForDisplayed();
		SubscriberDetailsBillingPage.btnSettingsBilling.waitForClickable();
		SubscriberDetailsBillingPage.btnSettingsBilling.click();
        SubscriberDetailsBillingPage.btnInvoiceSetting.click();
        browser.pause(2000);
    }
    checkAdvanceByAMonth()
    {
        if(SubscriberDetailsBillingPage.btnAdvanceByAMonth.isSelected() === false){
            SubscriberDetailsBillingPage.btnAdvanceByAMonth.click();
            this.SaveInvoiceSettingOptions();
        }
    }
    UncheckAdvanceByAMonth()
    {
        if(SubscriberDetailsBillingPage.btnAdvanceByAMonth.isSelected() === true){
            SubscriberDetailsBillingPage.btnAdvanceByAMonth.click();
            this.SaveInvoiceSettingOptions();
        }
    }
    SaveInvoiceSettingOptions()
    {
        if(SubscriberDetailsBillingPage.btnSaveInvoiceSetting.isClickable()){
            SubscriberDetailsBillingPage.btnSaveInvoiceSetting.click();
            // if(SubscriberDetailsBillingPage.popupSaveSetting.isExisting())
            //     {SubscriberDetailsBillingPage.btnYes.click();}
            if(SubscriberDetailsBillingPage.confirmDialogParent.isExisting())
            {
                console.log('going to save from Ok dialog')
                SubscriberDetailsBillingPage.okBtnOfDialog.click();
            }
            SubscriberDetailsBillingPage.alertSuccess.waitForDisplayed();
        }
    }
    flexibleBillingOptionisEnabled () {
        browser.pause(2000);
        if(SubscriberDetailsBillingPage.checkboxInvoiceDefaults.isSelected() === false){
            SubscriberDetailsBillingPage.checkboxInvoiceDefaults.click();
            browser.pause(2000);
        }
	    SubscriberDetailsBillingPage.btnFixed.waitForDisplayed();
        if(SubscriberDetailsBillingPage.btnFixed.getAttribute('class').includes('Mui-checked')){
            SubscriberDetailsBillingPage.inputByParent(SubscriberDetailsBillingPage.btnFlexible).click();
        }
        this.isPastDueDaysSet();
        if(SubscriberDetailsBillingPage.btnSaveInvoiceSetting.isClickable()){
            SubscriberDetailsBillingPage.btnSaveInvoiceSetting.click();
            // if(SubscriberDetailsBillingPage.popupSaveSetting.isExisting())
            //     {SubscriberDetailsBillingPage.btnYes.click();}
            if(SubscriberDetailsBillingPage.confirmDialogParent.isExisting())
            {SubscriberDetailsBillingPage.okBtnOfDialog.click();
                browser.pause(9000);
                SubscriberDetailsBillingPage.alertSuccess.waitForDisplayed();
            }
        }
    }

    flexibleBillingOptionisDisabled () {
        browser.pause(2000);
        if(SubscriberDetailsBillingPage.checkboxInvoiceDefaults.isSelected() === true)
        {
            SubscriberDetailsBillingPage.checkboxInvoiceDefaults.click();
            browser.pause(1000);
        }
        if(SubscriberDetailsBillingPage.popUpOkButton.isExisting())
        {
            SubscriberDetailsBillingPage.popUpOkButton.click();
            browser.pause(1000);
        }
        if(SubscriberDetailsBillingPage.btnFlexible.getAttribute('class').includes('Mui-checked')){
            SubscriberDetailsBillingPage.inputByParent(SubscriberDetailsBillingPage.btnFixed).click();
        }
        if(SubscriberDetailsBillingPage.checkboxInvoiceDefaults.isSelected() === true)
        {
            this.isPastDueDaysSet();
        }
        if(SubscriberDetailsBillingPage.btnSaveInvoiceSetting.isClickable()){
            SubscriberDetailsBillingPage.btnSaveInvoiceSetting.click();
        if(SubscriberDetailsBillingPage.popupSaveSetting.isExisting())
            {SubscriberDetailsBillingPage.btnNo.click();}
            browser.pause(7000);
        }
    }
    flexibleBillingForNewSubscribers()
    {
        browser.pause(2000);
        if(SubscriberDetailsBillingPage.checkboxInvoiceDefaults.isSelected() === true)
        {
            SubscriberDetailsBillingPage.checkboxInvoiceDefaults.click();
            browser.pause(1000);
        }
        if(SubscriberDetailsBillingPage.popUpOkButton.isExisting())
                {SubscriberDetailsBillingPage.popUpOkButton.click();}
        browser.pause(2000);
        if(SubscriberDetailsBillingPage.btnSaveInvoiceSetting.isClickable()){
            SubscriberDetailsBillingPage.btnSaveInvoiceSetting.click();
                if(SubscriberDetailsBillingPage.popupSaveSetting.isExisting())
                {SubscriberDetailsBillingPage.btnNo.click();}
                if(SubscriberDetailsBillingPage.btnYes.isExisting())
                {SubscriberDetailsBillingPage.btnYes.click();}
            browser.pause(4000);
        }
    }
    isPastDueDaysSet()
    {
             if(SubscriberDetailsBillingPage.getPastDuesDays.getText()==='0')
            {            
                SubscriberDetailsBillingPage.getPastDuesDays.click();
                browser.pause(1000);
                SubscriberDetailsBillingPage.getListItem('1').click();
                browser.pause(1000);
                if(SubscriberDetailsBillingPage.confirmDialogParent.isExisting())
                {
                    SubscriberDetailsBillingPage.okBtnOfDialog.click();
                }
                
                browser.pause(2000);
                console.log('existed Past Due');
            }

    }

    updateTermStartDay() {
        browser.pause(2000);
        SubscriberDetailsBillingPage.inputInvoiceTermStartDay.click();
        if(SubscriberDetailsBillingPage.calenderValues[0].getAttribute('style') === "border: 1px solid rgb(0, 83, 244);")
        SubscriberDetailsBillingPage.calenderValues[1].click();
        else
        SubscriberDetailsBillingPage.calenderValues[0].click();
    }

    updateTax() {
        browser.pause(2000);
        if(SubscriberDetailsBillingPage.taxExempt.isSelected() === true)
            {
                SubscriberDetailsBillingPage.taxExempt.click();
                SubscriberDetailsBillingPage.btnApplyManuallyAfterSave.click();
                SubscriberDetailsBillingPage.btnOkFromTaxChangeItems.click();
                browser.pause(2000);
            }
        var text = SubscriberDetailsBillingPage.selectBillingOptionsTaxId.getText();
        SubscriberDetailsBillingPage.selectBillingOptionsTaxId.click();
        browser.pause(2000);
        var options = SubscriberDetailsBillingPage.optionsTaxId[0];
        if(options.getText() === text) {
            this.VerifyTax = SubscriberDetailsBillingPage.optionsTaxId[1].getText();
            SubscriberDetailsBillingPage.optionsTaxId[1].click();
        }
        else {
            this.VerifyTax = SubscriberDetailsBillingPage.optionsTaxId[0].getText();
            SubscriberDetailsBillingPage.optionsTaxId[0].click();
        }
    }

    chooseFromTaxChangeOption(data) {
        browser.pause(2000);
        var allOptions = data.raw();
        switch (allOptions[0][0]) {
            case "Apply automatically after Save":
                SubscriberDetailsBillingPage.radioBtnOnAlertUpdateTax[0].click();
                break;
            case "Apply manually after Save":
                SubscriberDetailsBillingPage.radioBtnOnAlertUpdateTax[1].click();
                break;
            case "Apply only to subsequently added invoice items and not to current items.":
                SubscriberDetailsBillingPage.radioBtnOnAlertUpdateTax[2].click();
                break;
            default:
                break;
        }
        browser.pause(2000);
        SubscriberDetailsBillingPage.btnOkOnAlertBox.click();
    }

    clickOnSaveBtn() {
        browser.pause(2000);
        SubscriberDetailsBillingPage.btnSave.click();
        browser.pause(2000);
    }
    verifyPromptOptions(data) {
        var allOptions = data.raw();
        browser.pause(2000);
        var labels = SubscriberDetailsBillingPage.optionsInalertBox;
        for (var i=0;i<labels.length;++i)
            expect(labels[i].getText()).to.eql(allOptions[i][0]);
    }

    closeInvoiceSetting () {
        browser.pause(5000);
        SubscriberDetailsBillingPage.btnCloseInvoiceSetting.waitForDisplayed();
        SubscriberDetailsBillingPage.btnCloseInvoiceSetting.moveTo();
        SubscriberDetailsBillingPage.btnCloseInvoiceSetting.click();
        if(SubscriberDetailsBillingPage.parentDialog.isExisting())
        {
            SubscriberDetailsBillingPage.btnSaveDialog(SubscriberDetailsBillingPage.parentDialog).click();
            browser.pause(3000);
        }
    }

    billingDaysCalendarAvailable() {
        browser.pause(2000);
        SubscriberDetailsBillingPage.inputInvoiceDay.click();
        expect(SubscriberDetailsBillingPage.billingDaysAreChangeable.isExisting()).equals(true);
    }

    billingDaysCalendarNotAvailable() {
        browser.pause(2000);
        SubscriberDetailsBillingPage.inputInvoiceDay.click();
        expect(SubscriberDetailsBillingPage.billingDaysAreChangeable.isExisting()).equals(false);
    }

    getInvoiceDayInInvoiceSetting() {
        browser.pause(1000);
        this.invoiceDayInInvoiceSetting = SubscriberDetailsBillingPage.inputInvoiceDayInInvoiceSetting.getText();
    }

    getTermStartInInvoiceSetting() {
        browser.pause(1000);
        this.termStartInInvoiceSetting = SubscriberDetailsBillingPage.inputTermStartDayInInvoiceSetting.getText();
    }

    openGivenSubscriber()
    {
        browser.pause(2000);
        SubscriberDetailsBillingPage.clickToOpenSubscriber.click();
        browser.pause(4000);
    }

    openAnotherSubscriber()
    {
        browser.pause(2000);
        SubscriberDetailsBillingPage.clickToOpenAnotherSubscriber.click();
        browser.pause(4000);
    }

    setTermStartOnBillingOption() {
        browser.pause(2000);
        var termstartDay = SubscriberDetailsBillingPage.inputInvoiceTermStartDay.getAttribute("value");
        termstartDay = termstartDay.slice(0,-2);
        SubscriberDetailsBillingPage.inputInvoiceTermStartDay.click();
        browser.pause(1000);
        var lastDayOnCalendar = SubscriberDetailsBillingPage.selectLastDayOnCalendar.getText();
        if(termstartDay===lastDayOnCalendar)
        {
            SubscriberDetailsBillingPage.selectSecondLastDayOnCalendar.click();
        }
        else
        {
            SubscriberDetailsBillingPage.selectLastDayOnCalendar.click();
        }
        browser.pause(2000);
        this.selectedTermStartDate = SubscriberDetailsBillingPage.inputInvoiceTermStartDay.getAttribute("value");
        SubscriberDetailsBillingPage.btnBillingOption.click(); // just to click outside of control
    }

    selectradioOptionOnAlert(selectOption) {

        var optionToSelect = selectOption.raw();
        var numberOfOptions = SubscriberDetailsBillingPage.radioButtonsOnAlertBox;
        for(var i=0; i < numberOfOptions.length; i++) {
			browser.pause(500);
            if (numberOfOptions[i].getText() === optionToSelect[0][0]){
                numberOfOptions[i].click();
                break;
            }
        }
        SubscriberDetailsBillingPage.btnOkOnAlertBox.click();
    }

    addTaxToInvoiceIfNotApplied()
    {
        browser.pause(2000);
        SubscriberDetailsBillingPage.btnTaxFromInvoiceItem.click();
        browser.pause(1000);
        // if(subscriberDetailsBillingPage.checkGSTTaxRate.getText()==='0.00%')
        // {
        //     subscriberDetailsBillingPage.expandTaxSettingsFromInvoiceItems.click();
        //     browser.pause(1000);
        //     subscriberDetailsBillingPage.getListItem('GST').click();
        // }
        if(SubscriberDetailsBillingPage.expandTaxSettingsFromInvoiceItems.getText()!='GST')
        {
            SubscriberDetailsBillingPage.expandTaxSettingsFromInvoiceItems.click();
            browser.pause(1000);
            SubscriberDetailsBillingPage.getListItem('GST').click();
        }
        browser.pause(1000);
        SubscriberDetailsBillingPage.btnSaveFromTaxSetting.waitForClickable();
        SubscriberDetailsBillingPage.btnSaveFromTaxSetting.click();
        browser.pause(1000);
        browser.keys(this.Esckeys);
        if(SubscriberDetailsBillingPage.btnApplyToThisInvoice.isExisting())
        {
            SubscriberDetailsBillingPage.btnApplyToThisInvoice.click();
            SubscriberDetailsBillingPage.btnOKAfterApplyingTax.click();
        }
        browser.pause(4000);
    }

    UnCheckTaxExempt()
    {
        if(SubscriberDetailsBillingPage.svgStatus(SubscriberDetailsBillingPage.taxExempt).getAttribute('data-testid')==="CheckBoxIcon")
        {
            SubscriberDetailsBillingPage.taxExempt.click();
            SubscriberDetailsBillingPage.radioBtnOnAlertUpdateTax[2].click();
            SubscriberDetailsBillingPage.btnOkOnAlertBox.click();
            browser.pause(2000);
            this.clickOnSaveBtn();
            browser.pause(4000);
        }
    }

    clickOnTaxExampt() {
        browser.pause(2000);
        this.exemptedRate ='0';
        SubscriberDetailsBillingPage.taxExempt.click();
    }

    defineTaxtIfItsEmpty(taxParam) {
        browser.pause(2000);
        var taxNameAndRate = taxParam.raw();
        this.taxName =taxNameAndRate[0][0];
        this.taxRate = taxNameAndRate[0][1];
        SubscriberDetailsBillingPage.btnTaxes.click();
        browser.pause(2000);
        var allItems = SubscriberDetailsBillingPage.taxesFromInvoiceSetting;
        if(SubscriberDetailsBillingPage.emptyTaxes.isExisting() || allItems.length===0)
        {
            SubscriberDetailsBillingPage.btnAddNewTax.click();
            browser.pause(1000);
            SubscriberDetailsBillingPage.inputNewTaxName.setValue(this.taxName);
            SubscriberDetailsBillingPage.inputNewTaxDescription.setValue(this.taxName);
            SubscriberDetailsBillingPage.inputNewTaxRate.setValue(this.taxRate);
            browser.pause(2000);
            SubscriberDetailsBillingPage.inputNewTaxName.click();
            var tabKey = ['\ue004'];
            browser.keys(tabKey);
            browser.keys(tabKey);
            browser.keys(tabKey);
            browser.keys(tabKey);
            browser.pause(1000);
            browser.keys(['Meta','a']);
            browser.pause(1000);
            var downArrowKey = ['\ue015'];// arrow down
		    var enterKey = ['\ue007'];// enter
		    browser.keys(downArrowKey);
		    browser.keys(enterKey);
            browser.pause(2000);
            SubscriberDetailsBillingPage.btnOkAddTax.click();
            browser.pause(2000);
            SubscriberDetailsBillingPage.btnCloseAddTaxPanel.click();
        }
        browser.pause(2000);
        SubscriberDetailsBillingPage.btnCloseInvoiceSetting.click();
    }

    takeNoteActiveTaxInInvoiceSetting() {
        browser.pause(2000);
        this.openInvoiceSettingFromTopRightMenu();
        browser.pause(2000);
        SubscriberDetailsBillingPage.btnTaxes.click();
        browser.pause(3000);
        this.TaxesInInvoiceSetting =',';
        var allItems = SubscriberDetailsBillingPage.taxesFromInvoiceSetting;
        for (var i=0; i < allItems.length; i){
            var activeIdex = i+5;
            if(allItems[activeIdex].getText()==='Y')
            {
                this.TaxesInInvoiceSetting =this.TaxesInInvoiceSetting +','+allItems[i].getText();
            }
            i = i+8;
        }
        browser.pause(2000);
        SubscriberDetailsBillingPage.btnCloseInvoiceSetting.click();
    }

    availableTaxesInBillingOption() {
        browser.pause(5000);
        SubscriberDetailsBillingPage.selectBillingOptionsTaxId.click();
        browser.pause(3000);
        this.TaxesInBillingOptions =',';
        var allListItems = SubscriberDetailsBillingPage.listItems;
        for (var i = 1; i < allListItems.length; ++i)
            this.TaxesInBillingOptions =this.TaxesInBillingOptions +','+allListItems[i].getText();
    }

    clickOnBillingCycle() {
        browser.pause(2000);
        var text = SubscriberDetailsBillingPage.selectBillingOptionsCycle.getText();
        SubscriberDetailsBillingPage.selectBillingOptionsCycle.click();
        if(text === SubscriberDetailsBillingPage.listItems[0].getText()) {
            SubscriberDetailsBillingPage.listItems[1].click();
        }
        else {
            SubscriberDetailsBillingPage.listItems[0].click();
        }
        browser.pause(2000);
    }

    takeNoteOfTransactionCount(){
        browser.pause(3000);
        SubscriberDetailsBillingPage.btnTransaction.click();
        browser.pause(3000);
        this.transactionsCount = SubscriberDetailsBillingPage.getAllTransactionsData.length;
        this.clickOnBillingOptions();
    }


    updateBillingCycle() {
        browser.pause(4000);
        SubscriberDetailsBillingPage.packageAndInvoiceTab.waitForClickable();
        SubscriberDetailsBillingPage.packageAndInvoiceTab.click();
        browser.pause(1000);
        SubscriberDetailsBillingPage.nameOfSubscriberTab.waitForClickable();
        SubscriberDetailsBillingPage.nameOfSubscriberTab.click();
        browser.pause(1000);
        SubscriberDetailsBillingPage.selectBillingOptionsCycle.click();

        if((SubscriberDetailsBillingPage.listItems[0].getAttribute('class')).includes('Mui-selected')) {
            this.BillingCycleValue = SubscriberDetailsBillingPage.listItems[1].getText();
            browser.pause(1000);
            SubscriberDetailsBillingPage.listItems[1].click();
        }
        else {
            this.BillingCycleValue = SubscriberDetailsBillingPage.listItems[0].getText();
            browser.pause(1000);
            SubscriberDetailsBillingPage.listItems[0].click();
        }
        browser.pause(2000);
    }


    clickOnPaperInvoiceLink() {
        browser.pause(2000);
        SubscriberDetailsBillingPage.linkPaperInvoice.click();
    }
/*
    updatePaperInvoice() {
        var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
        browser.pause(2000);
        SubscriberDetailsBillingPage.dropDownFee.click();
        browser.pause(1000);
        // if(SubscriberDetailsBillingPage.inputFieldInPopupPaperInvoice.getAttribute('value')==='None')
        if(SubscriberDetailsBillingPage.inputFieldInPopupPaperInvoice.getAttribute('value')==='$0.00')
            
        {SubscriberDetailsBillingPage.listItems[1].click();}

        else{
            SubscriberDetailsBillingPage.listItems[2].click();
            browser.pause(1000);
            SubscriberDetailsBillingPage.tickOptionInPopupPaperInvoice.click();
            browser.pause(1000);
            SubscriberDetailsBillingPage.btnSave.click();
            browser.pause(4000);
            if(SubscriberDetailsBillingPage.paperInvoiceCheckStatus.getAttribute('data-testid')==='CheckBoxOutlineBlankIcon')
            {
                SubscriberDetailsBillingPage.paperInvoiceCheck.click();
                if(SubscriberDetailsBillingPage.btnDialogYes.isExisting())
                {
                    SubscriberDetailsBillingPage.btnDialogYes.click();
                }
            }
            this.clickOnPaperInvoiceLink();
            browser.pause(1000);
            SubscriberDetailsBillingPage.dropDownFee.click();
            browser.pause(1000);
            SubscriberDetailsBillingPage.listItems[1].click();
        }
        browser.pause(1000);
        SubscriberDetailsBillingPage.inputFieldInPopupPaperInvoiceParent.click();
        SubscriberDetailsBillingPage.inputFieldInPopupPaperInvoiceParent.keys(clearKeys);
        browser.pause(1000);
        //SubscriberDetailsBillingPage.divInputFieldInPopupPaperInvoice[1].click();
        let range = {min: 200, max: 1000}
        let delta = range.max - range.min
        this.UpdatedValue = Math.round(range.min + Math.random() * delta);
        SubscriberDetailsBillingPage.inputFieldInPopupPaperInvoice.setValue(this.UpdatedValue);
        browser.pause(3000);
        SubscriberDetailsBillingPage.tickOptionInPopupPaperInvoice.click();
        browser.pause(1000);
        SubscriberDetailsBillingPage.btnSave.click();
    }
*/

    updatePaperInvoice() {
        
        browser.pause(2000);
        // SubscriberDetailsBillingPage.dropDownFee.click();
        var feeType = SubscriberDetailsBillingPage.dropDownFee.getText();
        browser.pause(1000);
        // if(SubscriberDetailsBillingPage.inputFieldInPopupPaperInvoice.getAttribute('value')==='None')

        SubscriberDetailsBillingPage.dropDownFee.click();
        console.log("total options are: ", SubscriberDetailsBillingPage.listItems.length);

        if (SubscriberDetailsBillingPage.listItems.length == 1)
            {
                // this.clickOnBillingOptions(); // to close the opened dropdown.
                browser.keys(this.Esckeys); // to close the opened dropdown.
                browser.pause(2000);
                browser.keys(this.Esckeys); // to close the opened dropdown.
                browser.pause(2000);
                console.log("escaped buttons were clicked to close the opened dropdown.");

                this.openInvoiceSettingFromTopRightMenu();
                console.log("invoice settings are opened");
                SubscriberDetailsBillingPage.paperInvoiceSettingsTab.waitForClickable();
                browser.pause(2000);
                SubscriberDetailsBillingPage.paperInvoiceSettingsTab.click();
                console.log("paper invoice setting is opened");
                
                SubscriberDetailsBillingPage.paperInvoiceSettingAutomaticCheck.waitForDisplayed();
                browser.pause(2000);

                if (SubscriberDetailsBillingPage.paperInvoiceSettingCheck1.getAttribute('value')==='false')
                {
                    SubscriberDetailsBillingPage.paperInvoiceSettingCheck1.click(); // checkbox 1 was selected
                    console.log("checkbox 1 was enabled");
                }
                if (SubscriberDetailsBillingPage.paperInvoiceSettingCheck2.getAttribute('value')==='false')
                {
                    SubscriberDetailsBillingPage.paperInvoiceSettingCheck2.click(); // checkbox 2 was selected
                    console.log("checkbox 2 was enabled");
                }
                if (SubscriberDetailsBillingPage.paperInvoiceSettingCheck3.getAttribute('value')==='false')
                {
                    SubscriberDetailsBillingPage.paperInvoiceSettingCheck3.click(); // checkbox 3 was selected
                    console.log("checkbox 3 was enabled");
                }
                
                SubscriberDetailsBillingPage.btnSaveInvoiceSetting.waitForClickable();
                browser.pause(1000);
                SubscriberDetailsBillingPage.btnSaveInvoiceSetting.click();
                console.log("Save button was clicked");

                SubscriberDetailsBillingPage.alertSuccess.waitForDisplayed();
                var text = SubscriberDetailsBillingPage.alertSuccess.getText();
                expect(text).to.eql('Saved successfully');

                SubscriberDetailsBillingPage.btnCloseInvoiceSetting.waitForClickable();
                SubscriberDetailsBillingPage.btnCloseInvoiceSetting.click();
                console.log("setting popup was closed");

                browser.pause(2000);
                this.clickOnPaperInvoiceLink();
                browser.pause(1000);
                SubscriberDetailsBillingPage.dropDownFee.click();
    
            }


        // if(feeType ==='Default' || feeType ==='None')
        {            
            browser.pause(1000);
        
            SubscriberDetailsBillingPage.listItems[1].click(); // set the type to custom
            // SubscriberDetailsBillingPage.listItems[0].click();
            console.log("... dafault value was changed to : ", SubscriberDetailsBillingPage.paperInvoiceFeeValue.getText() );
          
        }

        // this.clickOnPaperInvoiceLink();
        browser.pause(1000);
        this.setPaperInvoiceValue();
        browser.pause(1000);
        
        SubscriberDetailsBillingPage.closeSubscriberWindow.waitForClickable();
        SubscriberDetailsBillingPage.closeSubscriberWindow.click();
        browser.pause(1000);
        this.openGivenSubscriber();
        browser.pause(1000);
        this.clickOnBillingOptions();
    }

setPaperInvoiceValue() {
    var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
        SubscriberDetailsBillingPage.inputFieldInPopupPaperInvoiceParent.waitForClickable();
        SubscriberDetailsBillingPage.inputFieldInPopupPaperInvoiceParent.click();
        SubscriberDetailsBillingPage.inputFieldInPopupPaperInvoiceParent.keys(clearKeys);
        browser.pause(1000);
        // SubscriberDetailsBillingPage.divInputFieldInPopupPaperInvoice[1].click(); // -- 
        let range = {min: 200, max: 500}
        let delta = range.max - range.min
        this.UpdatedValue = Math.round(range.min + Math.random() * delta);
        SubscriberDetailsBillingPage.inputFieldInPopupPaperInvoice.setValue(this.UpdatedValue);
        browser.pause(3000);
        SubscriberDetailsBillingPage.tickOptionInPopupPaperInvoice.click();
        this.paperInvoiceFeeValue = this.UpdatedValue;
        console.log("newly set paper invoice fee value is: ", this.paperInvoiceFeeValue);
        browser.pause(1000);
        SubscriberDetailsBillingPage.btnSave.click();
        SubscriberDetailsBillingPage.alertSuccess.waitForDisplayed();
        browser.pause(1000);
    
}

    updateLateFee() {
        browser.pause(2000);
        var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
        SubscriberDetailsBillingPage.linkLateFee.click();
        browser.pause(2000);
        SubscriberDetailsBillingPage.dropDownLateFee.click();
        browser.pause(2000);
        SubscriberDetailsBillingPage.listItems[1].click();
        browser.pause(2000);
        SubscriberDetailsBillingPage.dropDownFlatRateAndPercentage.click();
        browser.pause(2000);
        SubscriberDetailsBillingPage.listItems[0].click();
        browser.pause(2000);
        this.UpdatedValue = '$10.50';
        SubscriberDetailsBillingPage.inputFieldInLateFeeParent.click();
        SubscriberDetailsBillingPage.inputFieldInLateFeeParent.keys(clearKeys);
        browser.pause(1000);
        SubscriberDetailsBillingPage.inputFieldInLateFee.setValue(this.UpdatedValue);
        browser.pause(2000);
        if (SubscriberDetailsBillingPage.tickOptionInPopupLateFeeAndGracePeriod.isExisting()) {

            SubscriberDetailsBillingPage.tickOptionInPopupLateFeeAndGracePeriod.click();
        }
        
        browser.pause(1000);
        SubscriberDetailsBillingPage.saveLateFee.waitForClickable();
        SubscriberDetailsBillingPage.saveLateFee.click();
        browser.pause(2000);
        SubscriberDetailsBillingPage.btnSave.click();
        browser.pause(2000);
    }

    openAutoActionSettingFromTopRightMenu() {
        SubscriberDetailsBillingPage.btnTopRightMenu.click();
        SubscriberDetailsBillingPage.btnSettingsBilling.waitForDisplayed();
		SubscriberDetailsBillingPage.btnSettingsBilling.waitForClickable();
		SubscriberDetailsBillingPage.btnSettingsBilling.click();
        SubscriberDetailsBillingPage.btnAutoActionSetting.click();
        browser.pause(2000);
    }
    ensureGraceCutom()
    {
        SubscriberDetailsBillingPage.btnAllowGraceCustom.waitForDisplayed();
        if(SubscriberDetailsBillingPage.btnAllowGraceCustom.getAttribute('data-testid')==='CheckBoxIcon'){}
        else{SubscriberDetailsBillingPage.inputAllowGraceCustom.click();
            SubscriberDetailsBillingPage.btnSaveInvoiceSetting.waitForDisplayed();
            SubscriberDetailsBillingPage.btnSaveInvoiceSetting.waitForClickable();
            SubscriberDetailsBillingPage.btnSaveInvoiceSetting.click();
            browser.pause(4000);
        }
        SubscriberDetailsBillingPage.closeAutoActions.waitForDisplayed();
        SubscriberDetailsBillingPage.closeAutoActions.click();
    }
    updateGracePeriod() {
        var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
        browser.pause(2000);
        SubscriberDetailsBillingPage.linkGracePeriod.click();
        browser.pause(2000);
        SubscriberDetailsBillingPage.dropDownFeeGracePeriod.click();
        // browser.pause(2000);
        // console.log('going to expand options');
        // SubscriberDetailsBillingPage.listItems[0].click();
        // console.log('options expanded');
        // browser.pause(2000);
        // SubscriberDetailsBillingPage.dropDownDaysGracePeriod.click();
        // browser.pause(2000);
        // var element = SubscriberDetailsBillingPage.listItems[0].getAttribute('class');
        // if(element.includes('Mui-selected')) {
        //     SubscriberDetailsBillingPage.listItems[1].click();
        // }
        // else {
        //     SubscriberDetailsBillingPage.listItems[0].click();
        // }
        // browser.pause(2000);
        SubscriberDetailsBillingPage.getListItem('Custom').waitForClickable();
        SubscriberDetailsBillingPage.getListItem('Custom').click();
        this.UpdatedValue = '$'+Math.floor(Math.random() * 99) ;+'.00';
        SubscriberDetailsBillingPage.inputFieldInGracePeriodParent.click();
        SubscriberDetailsBillingPage.inputFieldInGracePeriodParent.keys(clearKeys);
        browser.pause(1000);
        SubscriberDetailsBillingPage.inputFieldInGracePeriod.setValue(this.UpdatedValue);
        browser.pause(2000);
        if(SubscriberDetailsBillingPage.tickOptionInPopupLateFeeAndGracePeriod.isExisting())
        {
            SubscriberDetailsBillingPage.tickOptionInPopupLateFeeAndGracePeriod.click();
        }
        
        browser.pause(1000);
        SubscriberDetailsBillingPage.saveLateFee.waitForClickable();
        SubscriberDetailsBillingPage.saveLateFee.click();
        
        browser.pause(1000);        
        SubscriberDetailsBillingPage.btnSave.waitForDisplayed();
        SubscriberDetailsBillingPage.btnSave.waitForClickable();
        SubscriberDetailsBillingPage.btnSave.click();

        browser.pause(2000);
    }

    verifyPopupInvoicePaper() {
        browser.pause(2000);
        expect(SubscriberDetailsBillingPage.popupPaperInvoice[1].getAttribute('style').includes('opacity: 1;')).to.be.true;
        browser.pause(2000);
    }

    verifyInvoiceDayInInvoiceSettingWithBillingDay() {
        browser.pause(1000);
        var dayFromBilling = SubscriberDetailsBillingPage.inputInvoiceDay.getAttribute("value");
        expect(this.invoiceDayInInvoiceSetting).to.equals(dayFromBilling);
    }

    matchTermStartDayInInvoiceSettingWithBillingTermStartDay() {
        browser.pause(3000);
        var billingDay = SubscriberDetailsBillingPage.inputInvoiceTermStartDay.getAttribute("value");
        expect(this.termStartInInvoiceSetting).to.equals(billingDay);
    }

    verifyTaxField() {
        browser.pause(2000);
        var text = SubscriberDetailsBillingPage.selectBillingOptionsTaxId.getText();
        expect(text).to.equal(this.VerifyTax);
    }

    isTermStartDaySame() {

        browser.pause(500);
        var value = SubscriberDetailsBillingPage.billingOptionTermStartDate.getAttribute('value');
        //value = value.slice(0,-2);
        expect(value).to.eql(this.selectedTermStartDate);
    }

    isTermStartDayUpdated() {
        browser.pause(500);
        var TermStartDay = SubscriberDetailsBillingPage.billingOptionTermStartDate.getAttribute('value');
        //TermStartDay = TermStartDay.slice(0,-2);
        expect(TermStartDay).to.eql(this.selectedTermStartDate);
    }

    verifyNextInvoiceIndicator()
    {
        browser.pause(3000);
        SubscriberDetailsBillingPage.inputInvoiceTermStartDay.moveTo();
        browser.pause(2000);
        var getTooltipText = SubscriberDetailsBillingPage.getTooltipText.getText();
        expect(getTooltipText.includes('Term Start Day has been set to change to '+this.selectedTermStartDate+' on the next scheduled invoice.')).to.be.true;
    }

    verifyReversalCreditMemo()
    {
        browser.pause(7000);
        SubscriberDetailsBillingPage.btnTransaction.click();
        browser.pause(3000);
        var allTransactionsData = SubscriberDetailsBillingPage.getAllTransactionsData;
        var getmemofieldtext;
        for(var i=0; i < allTransactionsData.length; i++) {
            if (allTransactionsData[i].getText().includes('credit')){
                getmemofieldtext = allTransactionsData[i+1].getText();
                break;
            }
        }
        expect(getmemofieldtext.includes('Reversal of package charges from invoice ')).to.be.true;
    }

    verifyTaxSave() {
        browser.pause(2000);
        SubscriberDetailsBillingPage.alertSuccess.waitForDisplayed();
        var text = SubscriberDetailsBillingPage.alertSuccess.getText();
        expect(text).to.eql('Saved Successfully');
        browser.pause(2000);
        SubscriberDetailsBillingPage.btnTaxFromInvoiceItem.click();
        browser.pause(1000);
        expect(SubscriberDetailsBillingPage.checkGSTTaxRate.getText()).to.eql(this.taxRate+'.00%');
    }

    verifyExemptedTaxSave()
    {
        browser.pause(2000);
        SubscriberDetailsBillingPage.alertSuccess.waitForDisplayed();
        var text = SubscriberDetailsBillingPage.alertSuccess.getText();
        expect(text).to.eql('Saved Successfully');
        browser.pause(2000);
        expect(SubscriberDetailsBillingPage.taxExempt.isSelected())
        console.log("Tax Exempted was found selected");

        // subscriberDetailsBillingPage.btnTaxFromInvoiceItem.click();
        // browser.pause(1000);
        // expect(subscriberDetailsBillingPage.checkGSTTaxRate.getText()).to.eql(this.exemptedRate+'.00%');
    }

    verifyAvailableTaxes() {
        browser.pause(2000);
        this.TaxesInInvoiceSetting = this.TaxesInInvoiceSetting.replace(' [default]','');
        console.log('taxes from settings' +this.TaxesInInvoiceSetting);
        console.log('taxes from billing options' +this.TaxesInBillingOptions);
        expect(this.TaxesInInvoiceSetting).to.eql(this.TaxesInBillingOptions);
    }

    verifyBillingCycleRemainsSame() {
        browser.pause(5000);
        expect(SubscriberDetailsBillingPage.selectBillingOptionsCycle.getText()).to.not.eql(this.BillingCycleValue);
    }


    verifyBillingCycleIndicator() {
        browser.pause(2000);
        SubscriberDetailsBillingPage.selectBillingOptionsCycle.click();
        SubscriberDetailsBillingPage.toolTip.waitForDisplayed();
        var text = SubscriberDetailsBillingPage.toolTip.getText();
        
        browser.pause(1000);
        // console.log(text+" <<<<>>>>>");
        expect(text).to.be.eql('Billing Cycle has been set to change to '+this.BillingCycleValue+' on the next scheduled invoice.');
    }

    verifyNoCreditMemoGenerated()
    {
        browser.pause(3000);
        SubscriberDetailsBillingPage.btnTransaction.click();
        browser.pause(4000);
        var allTransactionsData = SubscriberDetailsBillingPage.getAllTransactionsData;
        console.log('transaction current count' +allTransactionsData.length );
        console.log('transaction prev count' +this.transactionsCount);
        expect(allTransactionsData.length).to.eql(this.transactionsCount);
    }

    verifyBillingCycleUpdated() {
        browser.pause(9000);
        expect(SubscriberDetailsBillingPage.selectBillingOptionsCycle.getText()).to.be.eql(this.BillingCycleValue);
    }

    verifyInvoicePaperUpdated() {
        browser.pause(9000);
        expect(SubscriberDetailsBillingPage.linkPaperInvoice.getText().includes(this.UpdatedValue)).to.be.true;
    }


    verifyLateFeeUpdated() {
        browser.pause(5000);
        expect(SubscriberDetailsBillingPage.linkLateFee.getText().includes(this.UpdatedValue)).to.be.true;
    }

    verifyGracePeriodUpdated() {
        browser.pause(5000);
        console.log('updated value is' + this.UpdatedValue);
        expect(SubscriberDetailsBillingPage.linkGracePeriod.getText().includes(this.UpdatedValue)).to.be.true;
    }

}
module.exports = new subscriberDetailsBillingAction();
