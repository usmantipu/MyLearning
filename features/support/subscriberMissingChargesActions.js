var LoginPage = require('../pageobjects/login.page');
const subMissingCharges = require('../pageobjects/subscriberMissingCharges.page');
const subscriberlistActions = require('../support/subscriberlistActions');
var Utils = require('./utils');
var expect = require('chai').expect;
var should = require('chai').should();
const actualResult = [];

class subscriberMissingChargesActions {

    constructor() {
        this.currentInvoiceDate;this.monthsInterval;
        this.newInvDate;this.newTSDate;this.isSameDateOrDiff=false;
        this.Esckeys = ['\uE00C'];this.enterKey = ['\ue007'];// enter
        this.havetoselectProrate=false;
        this.billingInvDay;this.billingTsDay;
    }
    searchSubscriberByID(cusID)
    {
        cusID = cusID.replace(/['"]+/g, '');
        subMissingCharges.searchSubsInput.waitForDisplayed();
        subMissingCharges.searchSubsInput.waitForClickable();
        subMissingCharges.searchSubsInput.setValue(cusID);
        browser.pause(500);
        browser.keys(this.enterKey);
        browser.pause(1000);
    }
    clickBtnProrateOption()
    {
        subMissingCharges.btnProrateOptions.waitForDisplayed();
        subMissingCharges.btnProrateOptions.click();
    }
    clickProrateToFullLink(optiontoselect)
    {
        optiontoselect = optiontoselect.replace(/['"]+/g, '');
        browser.pause(1500);
        console.log('prorate text is '+subMissingCharges.getSelectedOption.getText());
        if(!subMissingCharges.getSelectedOption.getText().includes(optiontoselect.toLowerCase()))
            {
                subMissingCharges.prorateToFUllLink.waitForDisplayed();
                subMissingCharges.prorateToFUllLink.click();
                this.havetoselectProrate =true;
            }
            else
            {
                this.havetoselectProrate =false;
            }
    }
    selectProrateOption(optiontoselect)
    {
        optiontoselect = optiontoselect.replace(/['"]+/g, '');
        if(this.havetoselectProrate)
        {
            browser.pause(1000);
            subMissingCharges.selectProrateOption(optiontoselect).moveTo();
            subMissingCharges.selectProrateOption(optiontoselect).click();
            browser.pause(1000);
            if(subMissingCharges.dilaogkBillingSettings.isExisting())
            {
                subMissingCharges.btnDialogYes.click();
                browser.pause(1500);
            }
        }
        browser.keys(this.Esckeys);
        browser.pause(500);
    }
    invoiceDayTermStartDay()
    {
        let invDay = 1;
        let tsDay = 1;
        subMissingCharges.inputInvoiceDay.waitForDisplayed();
        let extractedInv =  subMissingCharges.inputInvoiceDay.getValue();
        extractedInv = extractedInv.match(/\d+/)[0];
        extractedInv = parseInt(extractedInv);
        console.log('extracted invoice day from billing is '+extractedInv);
        let extractedTS = subMissingCharges.inputInvoiceTermStartDay.getValue();
        extractedTS = extractedTS.match(/\d+/)[0];
        extractedTS = parseInt(extractedTS);
        console.log('extracted term start day from billing is '+extractedTS);
        if(invDay != extractedInv)
        {
            subMissingCharges.inputInvoiceDay.click();
            browser.pause(1000);
            console.log('going to set invoice day'+invDay);
            subMissingCharges.getListItem(invDay).click();
            browser.pause(1000);
        }
        if(tsDay != extractedTS)
        {
            subMissingCharges.inputInvoiceTermStartDay.click();
            browser.pause(1000);
            console.log('going to set term start day'+tsDay);
            subMissingCharges.getListItem(tsDay).click();
            browser.pause(1000);
            console.log('tsDate updated in billing with '+tsDay);
        }
        this.billingInvDay = invDay;
        this.billingTsDay = tsDay;
    }
    invoiceDayLessThanTerm()
    {
        let invDay = 1;
        let tsDay = invDay+4;
        subMissingCharges.inputInvoiceDay.waitForDisplayed();
        let extractedInv =  subMissingCharges.inputInvoiceDay.getValue();
        extractedInv = extractedInv.match(/\d+/)[0];
        extractedInv = parseInt(extractedInv);
        //console.log('extracted invoice day from billing is '+invDay.match(/\d+/)[0]);
        let extractedTS = subMissingCharges.inputInvoiceTermStartDay.getValue();
        extractedTS = extractedTS.match(/\d+/)[0];
        extractedTS = parseInt(extractedTS);
        //console.log('extracted term start day from billing is '+tsDay.match(/\d+/)[0]);
        if(invDay != extractedInv)
        {
            subMissingCharges.inputInvoiceDay.click();
            browser.pause(1000);
            console.log('egoing to set invoice day '+invDay);
            subMissingCharges.getListItem(invDay).click();
            browser.pause(1000);
        }
        if(tsDay != extractedTS)
        {
            subMissingCharges.inputInvoiceTermStartDay.click();
            browser.pause(1000);
            console.log('going to set term start day '+tsDay);
            subMissingCharges.getListItem(tsDay).click();
            browser.pause(1000);
            console.log('tsDate updated in billing with '+tsDay);
        }
        this.billingInvDay = invDay;
        this.billingTsDay = tsDay;
    }
    invoiceDayGreaterThanTerm()
    {
        let tsDay = 5;
        let invDay = tsDay+3;
        subMissingCharges.inputInvoiceDay.waitForDisplayed();
        let extractedInv =  subMissingCharges.inputInvoiceDay.getValue();
        extractedInv = extractedInv.match(/\d+/)[0];
        extractedInv = parseInt(extractedInv);
        //console.log('extracted invoice day from billing is '+invDay.match(/\d+/)[0]);
        let extractedTS = subMissingCharges.inputInvoiceTermStartDay.getValue();
        extractedTS = extractedTS.match(/\d+/)[0];
        extractedTS = parseInt(extractedTS);
        //console.log('extracted term start day from billing is '+tsDay.match(/\d+/)[0]);
        if(invDay != extractedInv)
       {
            subMissingCharges.inputInvoiceDay.click();
            browser.pause(1000);
            console.log('going to update invoice day '+invDay);
            subMissingCharges.getListItem(invDay).click();
            browser.pause(1000);
        }
        if(tsDay != extractedTS)
        {
            subMissingCharges.inputInvoiceTermStartDay.click();
            browser.pause(1000);
            console.log('going to update term start date '+tsDay);
            subMissingCharges.getListItem(tsDay).click();
            browser.pause(1000);
            console.log('tsDate updated in billing with '+tsDay);
        }
        this.billingInvDay = invDay;
        this.billingTsDay = tsDay;
    }
    invoiceDayTermStartDayPost()
    {
        var today = new Date();
        var targetINvDate = new Date();
        targetINvDate.setDate(today.getDate() + 3);
        var todayMonth = today.getMonth();          
        var targetMonth = targetINvDate.getMonth(); 
        var targetInvDay = targetINvDate.getDate();
        var targetTSDate = new Date();
        targetTSDate.setDate(today.getDate() + 3);          
        var targetTSMonth = targetINvDate.getMonth(); 
        var targetTSDay = targetINvDate.getDate();
        //const d = new Date();
        //let utcDay = d.getUTCDate();
        let tsDay = targetTSDay;
        let invDay = targetInvDay;
        subMissingCharges.inputInvoiceDay.waitForDisplayed();
        let extractedInv =  subMissingCharges.inputInvoiceDay.getValue();
        extractedInv = extractedInv.match(/\d+/)[0];
        extractedInv = parseInt(extractedInv);
        //console.log('extracted invoice day from billing is '+invDay.match(/\d+/)[0]);
        let extractedTS = subMissingCharges.inputInvoiceTermStartDay.getValue();
        extractedTS = extractedTS.match(/\d+/)[0];
        extractedTS = parseInt(extractedTS);
        //console.log('extracted term start day from billing is '+tsDay.match(/\d+/)[0]);
        if(invDay != extractedInv)
       {
            subMissingCharges.inputInvoiceDay.click();
            browser.pause(1000);
            console.log('going to update invoice day '+invDay);
            subMissingCharges.getListItem(invDay).click();
            browser.pause(1000);
        }
        if(tsDay != extractedTS)
        {
            subMissingCharges.inputInvoiceTermStartDay.click();
            browser.pause(1000);
            console.log('going to update term start date '+tsDay);
            subMissingCharges.getListItem(tsDay).click();
            browser.pause(1000);
            console.log('tsDate updated in billing with '+tsDay);
        }
        this.billingInvDay = 1;
        this.billingTsDay = 1;
    }
    billingCycle(BillingCycle)
    {
        if(subMissingCharges.btnDrawerClose.length > 1)
        {
            subMissingCharges.btnDrawerClose[1].click();
            browser.pause(1000);
        }
        console.log('going to click monthly');
        browser.pause(1500);
        BillingCycle = BillingCycle.replace(/['"]+/g, '');
        subMissingCharges.selectBillingOptionsCycle.waitForDisplayed();
        subMissingCharges.selectBillingOptionsCycle.waitForClickable();
        subMissingCharges.selectBillingOptionsCycle.click();
        browser.pause(1000);
        subMissingCharges.getListItem(BillingCycle).waitForDisplayed();
        subMissingCharges.getListItem(BillingCycle).click();
        //browser.keys(this.Esckeys);
    }
    PostinvoiceDayLessThanTerm()
    {
        var today = new Date();
        var targetINvDate = new Date();
        targetINvDate.setDate(today.getDate() + 1);
        var todayMonth = today.getMonth();          
        var targetMonth = targetINvDate.getMonth(); 
        var targetInvDay = targetINvDate.getDate();
        var targetTSDate = new Date();
        targetTSDate.setDate(today.getDate() + 3);          
        var targetTSMonth = targetINvDate.getMonth(); 
        var targetTSDay = targetINvDate.getDate();
        //const d = new Date();
        //let utcDay = d.getUTCDate();
        let tsDay = targetTSDay;
        let invDay = targetInvDay;
        // const d = new Date();
        // let utcDay = d.getUTCDate();
        // let tsDay = utcDay+3;
        // let invDay = utcDay+1;
        subMissingCharges.inputInvoiceDay.waitForDisplayed();
        let extractedInv =  subMissingCharges.inputInvoiceDay.getValue();
        extractedInv = extractedInv.match(/\d+/)[0];
        extractedInv = parseInt(extractedInv);
        //console.log('extracted invoice day from billing is '+invDay.match(/\d+/)[0]);
        let extractedTS = subMissingCharges.inputInvoiceTermStartDay.getValue();
        extractedTS = extractedTS.match(/\d+/)[0];
        extractedTS = parseInt(extractedTS);
        //console.log('extracted term start day from billing is '+tsDay.match(/\d+/)[0]);
        if(invDay != extractedInv)
        {
            subMissingCharges.inputInvoiceDay.click();
            browser.pause(1000);
            console.log('egoing to set invoice day '+invDay);
            subMissingCharges.getListItem(invDay).click();
            browser.pause(1000);
        }
        if(tsDay != extractedTS)
        {
            subMissingCharges.inputInvoiceTermStartDay.click();
            browser.pause(1000);
            console.log('going to set term start day '+tsDay);
            subMissingCharges.getListItem(tsDay).click();
            browser.pause(1000);
            console.log('tsDate updated in billing with '+tsDay);
        }
        this.billingInvDay = invDay;
        this.billingTsDay = tsDay;
    }
    PostinvoiceDayGreaterThanTerm()
    {
        var today = new Date();
        var targetINvDate = new Date();
        targetINvDate.setDate(today.getDate() + 3);
        var todayMonth = today.getMonth();          
        var targetMonth = targetINvDate.getMonth(); 
        var targetInvDay = targetINvDate.getDate();
        var targetTSDate = new Date();
        targetTSDate.setDate(today.getDate() + 1);          
        var targetTSMonth = targetINvDate.getMonth(); 
        var targetTSDay = targetINvDate.getDate();
        //const d = new Date();
        //let utcDay = d.getUTCDate();
        let tsDay = targetTSDay;
        let invDay = targetInvDay;
        subMissingCharges.inputInvoiceDay.waitForDisplayed();
        let extractedInv =  subMissingCharges.inputInvoiceDay.getValue();
        extractedInv = extractedInv.match(/\d+/)[0];
        extractedInv = parseInt(extractedInv);
        //console.log('extracted invoice day from billing is '+invDay.match(/\d+/)[0]);
        let extractedTS = subMissingCharges.inputInvoiceTermStartDay.getValue();
        extractedTS = extractedTS.match(/\d+/)[0];
        extractedTS = parseInt(extractedTS);
        //console.log('extracted term start day from billing is '+tsDay.match(/\d+/)[0]);
        if(invDay != extractedInv)
        {
            subMissingCharges.inputInvoiceDay.click();
            browser.pause(1000);
            console.log('egoing to set invoice day '+invDay);
            subMissingCharges.getListItem(invDay).click();
            browser.pause(1000);
        }
        if(tsDay != extractedTS)
        {
            subMissingCharges.inputInvoiceTermStartDay.click();
            browser.pause(1000);
            console.log('going to set term start day '+tsDay);
            subMissingCharges.getListItem(tsDay).click();
            browser.pause(1000);
            console.log('tsDate updated in billing with '+tsDay);
        }
        this.billingInvDay = invDay;
        this.billingTsDay = tsDay;
    }
    saveBillingOptions()
    {
        subMissingCharges.btnSave.waitForDisplayed();
        browser.pause(2000);
        if(subMissingCharges.btnSave.isClickable())
        {
            subMissingCharges.btnSave.click();
            if(subMissingCharges.dilaogkBillingSettings.isExisting())
            {
                subMissingCharges.btnReverseChanges.waitForClickable();
                subMissingCharges.btnReverseChanges.click();
                subMissingCharges.btnOkBillingSettings.waitForClickable();
                subMissingCharges.btnOkBillingSettings.click();
            }
            console.log('saved billing options');
            browser.pause(3000);
        }
    }
    calculateMissingCharges(IvsDayVsTSDay,BSDateVsInvDay,BSDateVsTSDay,BillingCycle,MonthsInterval,FullTermCount)
    {
        let monthName;
        let dayNumber;
        let year;
        IvsDayVsTSDay = IvsDayVsTSDay.replace(/['"]+/g, '');
        console.log("value of 1st param is "+IvsDayVsTSDay);
        BSDateVsInvDay = BSDateVsInvDay.replace(/['"]+/g, '');
        console.log("value of 2nd param is "+BSDateVsInvDay);
        BSDateVsTSDay = BSDateVsTSDay.replace(/['"]+/g, '');
        console.log("value of 3rd param is "+BSDateVsTSDay);
        BillingCycle = BillingCycle.replace(/['"]+/g, '');
        console.log("value of 4th param is "+BillingCycle);
        MonthsInterval = MonthsInterval.replace(/['"]+/g, '');
        console.log("value of 5th param is "+MonthsInterval);
        FullTermCount = FullTermCount.replace(/['"]+/g, '');
        console.log("value of 6th param is "+FullTermCount);
        if(IvsDayVsTSDay=='ontheInvoiceDay'&& BSDateVsInvDay=='fallsontheTermStartDay')
        {
            subMissingCharges.btnInvoiceDate.waitForDisplayed();
            this.currentInvoiceDate=subMissingCharges.btnInvoiceDate.getText();
            this.monthsInterval=MonthsInterval;
            const result = this.calculateExactDates(this.currentInvoiceDate, this.monthsInterval);
            this.newInvDate=result.newInvoiceDate;
            this.newTSDate=result.newTermStartDate;
            console.log("New Invoice Date:", result.newInvoiceDate);
            console.log("New Term Start Date:", result.newTermStartDate);
            subMissingCharges.btnInvoiceDate.click();
            browser.pause(2000);
            monthName = this.monthNameFromDate(this.newInvDate).trim();
            console.log("extracted MonthName is "+monthName);
            dayNumber = this.DayNumber(this.newInvDate);
            year = this.yearFromDate(this.newInvDate);
            console.log("extracted year is "+year);
            subMissingCharges.calendarParent.waitForDisplayed();
            for (let i = MonthsInterval; i > 0; i--) {
                    subMissingCharges.btnCalendarArrowLeft.waitForDisplayed();
                    subMissingCharges.btnCalendarArrowLeft.click();
                    browser.pause(200);
            }
            browser.pause(1000);
            subMissingCharges.selectDayFromCalendar(dayNumber).click();
            console.log('new updated Invoice Date is '+subMissingCharges.btnInvoiceDate.getText());
            subMissingCharges.btnTermStartDate.waitForDisplayed();
            subMissingCharges.btnTermStartDate.waitForClickable();
            subMissingCharges.btnTermStartDate.click();
            browser.pause(1000);
            if(!subMissingCharges.calendarParent.isExisting())
            {
                subMissingCharges.btnTermStartDate.waitForDisplayed();
                subMissingCharges.btnTermStartDate.waitForClickable();
                subMissingCharges.btnTermStartDate.click();
                browser.pause(1000);
            }
            subMissingCharges.calendarParent.waitForDisplayed();
            for (let i = MonthsInterval; i > 0; i--) {
                    subMissingCharges.btnCalendarArrowLeft.waitForDisplayed();
                    subMissingCharges.btnCalendarArrowLeft.click();
                    browser.pause(200);
            }
            subMissingCharges.selectDayFromCalendar(dayNumber).click();
            browser.pause(1000);
            console.log('new updated term start Date is '+subMissingCharges.btnTermStartDate.getText());
        }
        this.isSameDateOrDiff = false;
    }
    cancelCurrentInvoice()
    {
        browser.pause(2000);
        browser.keys(this.Esckeys);
        subMissingCharges.btnCancelInvoice.waitForDisplayed();
        subMissingCharges.btnCancelInvoice.click();
        browser.pause(2000);
    }
    calculateMissingChargesForDifferentDates(IvsDayVsTSDay,BSDateVsInvDay,BSDateVsTSDay,BillingCycle,MonthsInterval,FullTermCount)
    {
        let monthName;
        let dayNumber;
        let year;
        IvsDayVsTSDay = IvsDayVsTSDay.replace(/['"]+/g, '');
        console.log("value of 1st param is "+IvsDayVsTSDay);
        BSDateVsInvDay = BSDateVsInvDay.replace(/['"]+/g, '');
        console.log("value of 2nd param is "+BSDateVsInvDay);
        BSDateVsTSDay = BSDateVsTSDay.replace(/['"]+/g, '');
        console.log("value of 3rd param is "+BSDateVsTSDay);
        BillingCycle = BillingCycle.replace(/['"]+/g, '');
        console.log("value of 4th param is "+BillingCycle);
        MonthsInterval = MonthsInterval.replace(/['"]+/g, '');
        console.log("value of 5th param is "+MonthsInterval);
        FullTermCount = FullTermCount.replace(/['"]+/g, '');
        console.log("value of 6th param is "+FullTermCount);
        if(IvsDayVsTSDay=='aftertheInvoiceDay'&& BSDateVsInvDay=='aftertheTermStartDay')
        {
            subMissingCharges.btnInvoiceDate.waitForDisplayed();
            this.currentInvoiceDate=subMissingCharges.btnInvoiceDate.getText();
            this.monthsInterval=MonthsInterval;
            const result = this.calculateAdjustedDates(this.currentInvoiceDate, this.monthsInterval,5,3);
            this.newInvDate=result.newInvoiceDate;
            this.newTSDate=result.newTermStartDate;
            console.log("New Invoice Date:", result.newInvoiceDate);
            console.log("New Term Start Date:", result.newTermStartDate);
            subMissingCharges.btnInvoiceDate.click();
            browser.pause(2000);
            monthName = this.monthNameFromDate(this.newInvDate);
            dayNumber = this.DayNumber(this.newInvDate);
            year = this.yearFromDate(this.newInvDate);
            subMissingCharges.calendarParent.waitForDisplayed();
            for (let i = MonthsInterval; i > 0; i--) {
                subMissingCharges.btnCalendarArrowLeft.waitForDisplayed();
                subMissingCharges.btnCalendarArrowLeft.click();
                browser.pause(200);
            }
            browser.pause(1000);
            subMissingCharges.selectDayFromCalendar(dayNumber).click();
            console.log('new updated Invoice Date is '+subMissingCharges.btnInvoiceDate.getText());
            browser.pause(1500);
            subMissingCharges.btnTermStartDate.waitForDisplayed();
            subMissingCharges.btnTermStartDate.scrollIntoView();
            subMissingCharges.btnTermStartDate.click();
            browser.pause(1500);
            subMissingCharges.btnTermStartDate.waitForDisplayed();
            subMissingCharges.btnTermStartDate.waitForClickable();
            subMissingCharges.btnTermStartDate.click();
            browser.pause(1500);
            if(!subMissingCharges.calendarParent.isExisting())
            {
                subMissingCharges.btnTermStartDate.waitForDisplayed();
                subMissingCharges.btnTermStartDate.waitForClickable();
                subMissingCharges.btnTermStartDate.click();
            }
            subMissingCharges.calendarParent.waitForDisplayed();
            for (let i = MonthsInterval; i > 0; i--) {
                    subMissingCharges.btnCalendarArrowLeft.waitForDisplayed();
                    subMissingCharges.btnCalendarArrowLeft.click();
                    browser.pause(200);
            }
            subMissingCharges.selectDayFromCalendar(dayNumber+2).click();
            browser.pause(1000);
            console.log('new updated term start Date is '+subMissingCharges.btnTermStartDate.getText());
        }
        this.isSameDateOrDiff = true;
    }
    calculateMissingChargesForBeforeTSdate(IvsDayVsTSDay,BSDateVsInvDay,BSDateVsTSDay,BillingCycle,MonthsInterval,FullTermCount)
    {
        let monthName;
        let dayNumber;
        let year;
        IvsDayVsTSDay = IvsDayVsTSDay.replace(/['"]+/g, '');
        console.log("value of 1st param is "+IvsDayVsTSDay);
        BSDateVsInvDay = BSDateVsInvDay.replace(/['"]+/g, '');
        console.log("value of 2nd param is "+BSDateVsInvDay);
        BSDateVsTSDay = BSDateVsTSDay.replace(/['"]+/g, '');
        console.log("value of 3rd param is "+BSDateVsTSDay);
        BillingCycle = BillingCycle.replace(/['"]+/g, '');
        console.log("value of 4th param is "+BillingCycle);
        MonthsInterval = MonthsInterval.replace(/['"]+/g, '');
        console.log("value of 5th param is "+MonthsInterval);
        FullTermCount = FullTermCount.replace(/['"]+/g, '');
        console.log("value of 6th param is "+FullTermCount);
        //if(IvsDayVsTSDay=='aftertheInvoiceDay'&& BSDateVsInvDay=='aftertheTermStartDay')
       // {
            subMissingCharges.btnInvoiceDate.waitForDisplayed();
            this.currentInvoiceDate=subMissingCharges.btnInvoiceDate.getText();
            this.monthsInterval=MonthsInterval;
            const result = this.calculateAdjustedDates(this.currentInvoiceDate, this.monthsInterval,5,3);
            this.newInvDate=result.newInvoiceDate;
            this.newTSDate=result.newTermStartDate;
            console.log("New Invoice Date:", result.newInvoiceDate);
            console.log("New Term Start Date:", result.newTermStartDate);
            subMissingCharges.btnInvoiceDate.click();
            browser.pause(2000);
            monthName = this.monthNameFromDate(this.newInvDate);
            dayNumber = this.DayNumber(this.newInvDate);
            year = this.yearFromDate(this.newInvDate);
            subMissingCharges.calendarParent.waitForDisplayed();
            for (let i = MonthsInterval; i > 0; i--) {
                subMissingCharges.btnCalendarArrowLeft.waitForDisplayed();
                subMissingCharges.btnCalendarArrowLeft.click();
                browser.pause(200);
            }
            browser.pause(1000);
            dayNumber = this.billingInvDay;
            subMissingCharges.selectDayFromCalendar(dayNumber).click();
            console.log('new updated Invoice Date is '+subMissingCharges.btnInvoiceDate.getText());
            browser.pause(1500);
            subMissingCharges.btnTermStartDate.waitForDisplayed();
            subMissingCharges.btnTermStartDate.scrollIntoView();
            subMissingCharges.btnTermStartDate.click();
            browser.pause(1500);
            subMissingCharges.btnTermStartDate.waitForDisplayed();
            subMissingCharges.btnTermStartDate.waitForClickable();
            subMissingCharges.btnTermStartDate.click();
            browser.pause(1500);
            if(!subMissingCharges.calendarParent.isExisting())
            {
                subMissingCharges.btnTermStartDate.waitForDisplayed();
                subMissingCharges.btnTermStartDate.waitForClickable();
                subMissingCharges.btnTermStartDate.click();
            }
            if(dayNumber==1)
            {
                MonthsInterval = parseInt(MonthsInterval)+1;
            }
            console.log('updated value of month interval '+MonthsInterval);
            subMissingCharges.calendarParent.waitForDisplayed();
            for (let i = MonthsInterval; i > 0; i--) {
                    subMissingCharges.btnCalendarArrowLeft.waitForDisplayed();
                    subMissingCharges.btnCalendarArrowLeft.click();
                    browser.pause(200);
            }
            subMissingCharges.selectDayFromCalendar(28).click();
            browser.pause(1000);
            console.log('new updated term start Date is '+subMissingCharges.btnTermStartDate.getText());
        //}
        this.isSameDateOrDiff = true;
    }
    calculateMissingChargesForAfterInvDayAndBeforeTSdate(IvsDayVsTSDay,BSDateVsInvDay,BSDateVsTSDay,BillingCycle,MonthsInterval,FullTermCount)
    {
        let monthName;
        let dayNumber;
        let year;
        IvsDayVsTSDay = IvsDayVsTSDay.replace(/['"]+/g, '');
        console.log("value of 1st param is "+IvsDayVsTSDay);
        BSDateVsInvDay = BSDateVsInvDay.replace(/['"]+/g, '');
        console.log("value of 2nd param is "+BSDateVsInvDay);
        BSDateVsTSDay = BSDateVsTSDay.replace(/['"]+/g, '');
        console.log("value of 3rd param is "+BSDateVsTSDay);
        BillingCycle = BillingCycle.replace(/['"]+/g, '');
        console.log("value of 4th param is "+BillingCycle);
        MonthsInterval = MonthsInterval.replace(/['"]+/g, '');
        console.log("value of 5th param is "+MonthsInterval);
        FullTermCount = FullTermCount.replace(/['"]+/g, '');
        console.log("value of 6th param is "+FullTermCount);
        //if(IvsDayVsTSDay=='aftertheInvoiceDay'&& BSDateVsInvDay=='aftertheTermStartDay')
       // {
            subMissingCharges.btnInvoiceDate.waitForDisplayed();
            this.currentInvoiceDate=subMissingCharges.btnInvoiceDate.getText();
            this.monthsInterval=MonthsInterval;
            const result = this.calculateAdjustedDates(this.currentInvoiceDate, this.monthsInterval,5,3);
            this.newInvDate=result.newInvoiceDate;
            this.newTSDate=result.newTermStartDate;
            console.log("New Invoice Date:", result.newInvoiceDate);
            console.log("New Term Start Date:", result.newTermStartDate);
            subMissingCharges.btnInvoiceDate.click();
            browser.pause(2000);
            monthName = this.monthNameFromDate(this.newInvDate);
            dayNumber = this.DayNumber(this.newInvDate);
            year = this.yearFromDate(this.newInvDate);
            subMissingCharges.calendarParent.waitForDisplayed();
            for (let i = MonthsInterval; i > 0; i--) {
                subMissingCharges.btnCalendarArrowLeft.waitForDisplayed();
                subMissingCharges.btnCalendarArrowLeft.click();
                browser.pause(200);
            }
            browser.pause(1000);
            dayNumber = this.billingInvDay;
            if(dayNumber==1)
            {
                dayNumber = parseInt(dayNumber)+2;
            }
            subMissingCharges.selectDayFromCalendar(dayNumber).click();
            console.log('new updated Invoice Date is '+subMissingCharges.btnInvoiceDate.getText());
            browser.pause(1500);
            subMissingCharges.btnTermStartDate.waitForDisplayed();
            subMissingCharges.btnTermStartDate.scrollIntoView();
            subMissingCharges.btnTermStartDate.click();
            browser.pause(1500);
            subMissingCharges.btnTermStartDate.waitForDisplayed();
            subMissingCharges.btnTermStartDate.waitForClickable();
            subMissingCharges.btnTermStartDate.click();
            browser.pause(1500);
            if(!subMissingCharges.calendarParent.isExisting())
            {
                subMissingCharges.btnTermStartDate.waitForDisplayed();
                subMissingCharges.btnTermStartDate.waitForClickable();
                subMissingCharges.btnTermStartDate.click();
            }
            if(dayNumber==1)
            {
                MonthsInterval = parseInt(MonthsInterval)+1;
            }
            console.log('updated value of month interval '+MonthsInterval);
            subMissingCharges.calendarParent.waitForDisplayed();
            for (let i = MonthsInterval; i > 0; i--) {
                    subMissingCharges.btnCalendarArrowLeft.waitForDisplayed();
                    subMissingCharges.btnCalendarArrowLeft.click();
                    browser.pause(200);
            }
            dayNumber = parseInt(this.billingTsDay);
            dayNumber = dayNumber -2;
            console.log('updated term start day value is '+dayNumber);
            subMissingCharges.selectDayFromCalendar(dayNumber).click();
            browser.pause(1000);
            console.log('new updated term start Date is '+subMissingCharges.btnTermStartDate.getText());
        //}
        this.isSameDateOrDiff = true;
    }
    calculateMissingChargesForAfterInvDayAndOnTSdate(IvsDayVsTSDay,BSDateVsInvDay,BSDateVsTSDay,BillingCycle,MonthsInterval,FullTermCount)
    {
        let monthName;
        let dayNumber;
        let year;
        IvsDayVsTSDay = IvsDayVsTSDay.replace(/['"]+/g, '');
        console.log("value of 1st param is "+IvsDayVsTSDay);
        BSDateVsInvDay = BSDateVsInvDay.replace(/['"]+/g, '');
        console.log("value of 2nd param is "+BSDateVsInvDay);
        BSDateVsTSDay = BSDateVsTSDay.replace(/['"]+/g, '');
        console.log("value of 3rd param is "+BSDateVsTSDay);
        BillingCycle = BillingCycle.replace(/['"]+/g, '');
        console.log("value of 4th param is "+BillingCycle);
        MonthsInterval = MonthsInterval.replace(/['"]+/g, '');
        console.log("value of 5th param is "+MonthsInterval);
        FullTermCount = FullTermCount.replace(/['"]+/g, '');
        console.log("value of 6th param is "+FullTermCount);
        //if(IvsDayVsTSDay=='aftertheInvoiceDay'&& BSDateVsInvDay=='aftertheTermStartDay')
       // {
            subMissingCharges.btnInvoiceDate.waitForDisplayed();
            this.currentInvoiceDate=subMissingCharges.btnInvoiceDate.getText();
            this.monthsInterval=MonthsInterval;
            const result = this.calculateAdjustedDates(this.currentInvoiceDate, this.monthsInterval,5,3);
            this.newInvDate=result.newInvoiceDate;
            this.newTSDate=result.newTermStartDate;
            console.log("New Invoice Date:", result.newInvoiceDate);
            console.log("New Term Start Date:", result.newTermStartDate);
            subMissingCharges.btnInvoiceDate.click();
            browser.pause(2000);
            monthName = this.monthNameFromDate(this.newInvDate);
            dayNumber = this.DayNumber(this.newInvDate);
            year = this.yearFromDate(this.newInvDate);
            subMissingCharges.calendarParent.waitForDisplayed();
            for (let i = MonthsInterval; i > 0; i--) {
                subMissingCharges.btnCalendarArrowLeft.waitForDisplayed();
                subMissingCharges.btnCalendarArrowLeft.click();
                browser.pause(200);
            }
            browser.pause(1000);
            dayNumber = this.billingInvDay;
            if(dayNumber==1)
            {
                dayNumber = parseInt(dayNumber)+2;
            }
            subMissingCharges.selectDayFromCalendar(dayNumber).click();
            console.log('new updated Invoice Date is '+subMissingCharges.btnInvoiceDate.getText());
            browser.pause(1500);
            subMissingCharges.btnTermStartDate.waitForDisplayed();
            subMissingCharges.btnTermStartDate.scrollIntoView();
            subMissingCharges.btnTermStartDate.click();
            browser.pause(1500);
            subMissingCharges.btnTermStartDate.waitForDisplayed();
            subMissingCharges.btnTermStartDate.waitForClickable();
            subMissingCharges.btnTermStartDate.click();
            browser.pause(1500);
            if(!subMissingCharges.calendarParent.isExisting())
            {
                subMissingCharges.btnTermStartDate.waitForDisplayed();
                subMissingCharges.btnTermStartDate.waitForClickable();
                subMissingCharges.btnTermStartDate.click();
            }
            if(dayNumber==1)
            {
                MonthsInterval = parseInt(MonthsInterval)+1;
            }
            console.log('updated value of month interval '+MonthsInterval);
            subMissingCharges.calendarParent.waitForDisplayed();
            for (let i = MonthsInterval; i > 0; i--) {
                    subMissingCharges.btnCalendarArrowLeft.waitForDisplayed();
                    subMissingCharges.btnCalendarArrowLeft.click();
                    browser.pause(200);
            }
            dayNumber = parseInt(this.billingTsDay);
            console.log('updated term start day value is '+dayNumber);
            subMissingCharges.selectDayFromCalendar(dayNumber).click();
            browser.pause(1000);
            console.log('new updated term start Date is '+subMissingCharges.btnTermStartDate.getText());
        //}
        this.isSameDateOrDiff = true;
    }
    calculateMissingChargesForAfterInvDayAndAfterTSdate(IvsDayVsTSDay,BSDateVsInvDay,BSDateVsTSDay,BillingCycle,MonthsInterval,FullTermCount)
    {
        let monthName;
        let dayNumber;
        let year;
        IvsDayVsTSDay = IvsDayVsTSDay.replace(/['"]+/g, '');
        console.log("value of 1st param is "+IvsDayVsTSDay);
        BSDateVsInvDay = BSDateVsInvDay.replace(/['"]+/g, '');
        console.log("value of 2nd param is "+BSDateVsInvDay);
        BSDateVsTSDay = BSDateVsTSDay.replace(/['"]+/g, '');
        console.log("value of 3rd param is "+BSDateVsTSDay);
        BillingCycle = BillingCycle.replace(/['"]+/g, '');
        console.log("value of 4th param is "+BillingCycle);
        MonthsInterval = MonthsInterval.replace(/['"]+/g, '');
        console.log("value of 5th param is "+MonthsInterval);
        FullTermCount = FullTermCount.replace(/['"]+/g, '');
        console.log("value of 6th param is "+FullTermCount);
        //if(IvsDayVsTSDay=='aftertheInvoiceDay'&& BSDateVsInvDay=='aftertheTermStartDay')
       // {
            subMissingCharges.btnInvoiceDate.waitForDisplayed();
            this.currentInvoiceDate=subMissingCharges.btnInvoiceDate.getText();
            this.monthsInterval=MonthsInterval;
            const result = this.calculateAdjustedDates(this.currentInvoiceDate, this.monthsInterval,5,3);
            this.newInvDate=result.newInvoiceDate;
            this.newTSDate=result.newTermStartDate;
            console.log("New Invoice Date:", result.newInvoiceDate);
            console.log("New Term Start Date:", result.newTermStartDate);
            subMissingCharges.btnInvoiceDate.click();
            browser.pause(2000);
            monthName = this.monthNameFromDate(this.newInvDate);
            dayNumber = this.DayNumber(this.newInvDate);
            year = this.yearFromDate(this.newInvDate);
            subMissingCharges.calendarParent.waitForDisplayed();
            for (let i = MonthsInterval; i > 0; i--) {
                subMissingCharges.btnCalendarArrowLeft.waitForDisplayed();
                subMissingCharges.btnCalendarArrowLeft.click();
                browser.pause(200);
            }
            browser.pause(1000);
            dayNumber = this.billingInvDay;
            // if(dayNumber==1)
            // {
            //     dayNumber = parseInt(dayNumber)+2;
            // }
            subMissingCharges.selectDayFromCalendar(dayNumber).click();
            console.log('new updated Invoice Date is '+subMissingCharges.btnInvoiceDate.getText());
            browser.pause(1500);
            subMissingCharges.btnTermStartDate.waitForDisplayed();
            subMissingCharges.btnTermStartDate.scrollIntoView();
            subMissingCharges.btnTermStartDate.click();
            browser.pause(1500);
            subMissingCharges.btnTermStartDate.waitForDisplayed();
            subMissingCharges.btnTermStartDate.waitForClickable();
            subMissingCharges.btnTermStartDate.click();
            browser.pause(1500);
            if(!subMissingCharges.calendarParent.isExisting())
            {
                subMissingCharges.btnTermStartDate.waitForDisplayed();
                subMissingCharges.btnTermStartDate.waitForClickable();
                subMissingCharges.btnTermStartDate.click();
            }
            if(dayNumber==1)
            {
                MonthsInterval = parseInt(MonthsInterval)+1;
            }
            console.log('updated value of month interval '+MonthsInterval);
            subMissingCharges.calendarParent.waitForDisplayed();
            for (let i = MonthsInterval; i > 0; i--) {
                    subMissingCharges.btnCalendarArrowLeft.waitForDisplayed();
                    subMissingCharges.btnCalendarArrowLeft.click();
                    browser.pause(200);
            }
            dayNumber = parseInt(this.billingTsDay);
            dayNumber = dayNumber +2;
            console.log('updated term start day value is '+dayNumber);
            subMissingCharges.selectDayFromCalendar(dayNumber).click();
            browser.pause(1000);
            console.log('new updated term start Date is '+subMissingCharges.btnTermStartDate.getText());
        //}
        this.isSameDateOrDiff = true;
    }
    calculateMissingChargesForOnInvDayAndAfterTSdate(IvsDayVsTSDay,BSDateVsInvDay,BSDateVsTSDay,BillingCycle,MonthsInterval,FullTermCount)
    {
        let monthName;
        let dayNumber;
        let year;
        IvsDayVsTSDay = IvsDayVsTSDay.replace(/['"]+/g, '');
        console.log("value of 1st param is "+IvsDayVsTSDay);
        BSDateVsInvDay = BSDateVsInvDay.replace(/['"]+/g, '');
        console.log("value of 2nd param is "+BSDateVsInvDay);
        BSDateVsTSDay = BSDateVsTSDay.replace(/['"]+/g, '');
        console.log("value of 3rd param is "+BSDateVsTSDay);
        BillingCycle = BillingCycle.replace(/['"]+/g, '');
        console.log("value of 4th param is "+BillingCycle);
        MonthsInterval = MonthsInterval.replace(/['"]+/g, '');
        console.log("value of 5th param is "+MonthsInterval);
        FullTermCount = FullTermCount.replace(/['"]+/g, '');
        console.log("value of 6th param is "+FullTermCount);
        //if(IvsDayVsTSDay=='aftertheInvoiceDay'&& BSDateVsInvDay=='aftertheTermStartDay')
       // {
            subMissingCharges.btnInvoiceDate.waitForDisplayed();
            this.currentInvoiceDate=subMissingCharges.btnInvoiceDate.getText();
            this.monthsInterval=MonthsInterval;
            const result = this.calculateAdjustedDates(this.currentInvoiceDate, this.monthsInterval,5,3);
            this.newInvDate=result.newInvoiceDate;
            this.newTSDate=result.newTermStartDate;
            console.log("New Invoice Date:", result.newInvoiceDate);
            console.log("New Term Start Date:", result.newTermStartDate);
            subMissingCharges.btnInvoiceDate.click();
            browser.pause(2000);
            monthName = this.monthNameFromDate(this.newInvDate);
            dayNumber = this.DayNumber(this.newInvDate);
            year = this.yearFromDate(this.newInvDate);
            subMissingCharges.calendarParent.waitForDisplayed();
            for (let i = MonthsInterval; i > 0; i--) {
                subMissingCharges.btnCalendarArrowLeft.waitForDisplayed();
                subMissingCharges.btnCalendarArrowLeft.click();
                browser.pause(200);
            }
            browser.pause(1000);
            dayNumber = this.billingInvDay;
            console.log('extracted invoice day is '+dayNumber);
            dayNumber = parseInt(dayNumber);
            // if(dayNumber==1)
            // {
            //     dayNumber = parseInt(dayNumber)+2;
            // }
            subMissingCharges.selectDayFromCalendar(dayNumber).click();
            console.log('new updated Invoice Date is '+subMissingCharges.btnInvoiceDate.getText());
            browser.pause(1500);
            subMissingCharges.btnTermStartDate.waitForDisplayed();
            subMissingCharges.btnTermStartDate.scrollIntoView();
            subMissingCharges.btnTermStartDate.click();
            browser.pause(1500);
            subMissingCharges.btnTermStartDate.waitForDisplayed();
            subMissingCharges.btnTermStartDate.waitForClickable();
            subMissingCharges.btnTermStartDate.click();
            browser.pause(1500);
            if(!subMissingCharges.calendarParent.isExisting())
            {
                subMissingCharges.btnTermStartDate.waitForDisplayed();
                subMissingCharges.btnTermStartDate.waitForClickable();
                subMissingCharges.btnTermStartDate.click();
            }
            if(dayNumber==1)
            {
                MonthsInterval = parseInt(MonthsInterval)+1;
            }
            console.log('updated value of month interval '+MonthsInterval);
            subMissingCharges.calendarParent.waitForDisplayed();
            for (let i = MonthsInterval; i > 0; i--) {
                    subMissingCharges.btnCalendarArrowLeft.waitForDisplayed();
                    subMissingCharges.btnCalendarArrowLeft.click();
                    browser.pause(200);
            }
            dayNumber = parseInt(this.billingTsDay);
            console.log('extracted termstart day is '+dayNumber);
            dayNumber = dayNumber +2;
            console.log('updated term start day value is '+dayNumber);
            subMissingCharges.selectDayFromCalendar(dayNumber).click();
            browser.pause(1000);
            console.log('new updated term start Date is '+subMissingCharges.btnTermStartDate.getText());
        //}
        this.isSameDateOrDiff = true;
    }
    calculateMissingChargesForOnInvDayAndOnTSdate(IvsDayVsTSDay,BSDateVsInvDay,BSDateVsTSDay,BillingCycle,MonthsInterval,FullTermCount)
    {
        let monthName;
        let dayNumber;
        let year;
        IvsDayVsTSDay = IvsDayVsTSDay.replace(/['"]+/g, '');
        console.log("value of 1st param is "+IvsDayVsTSDay);
        BSDateVsInvDay = BSDateVsInvDay.replace(/['"]+/g, '');
        console.log("value of 2nd param is "+BSDateVsInvDay);
        BSDateVsTSDay = BSDateVsTSDay.replace(/['"]+/g, '');
        console.log("value of 3rd param is "+BSDateVsTSDay);
        BillingCycle = BillingCycle.replace(/['"]+/g, '');
        console.log("value of 4th param is "+BillingCycle);
        MonthsInterval = MonthsInterval.replace(/['"]+/g, '');
        console.log("value of 5th param is "+MonthsInterval);
        FullTermCount = FullTermCount.replace(/['"]+/g, '');
        console.log("value of 6th param is "+FullTermCount);
        //if(IvsDayVsTSDay=='aftertheInvoiceDay'&& BSDateVsInvDay=='aftertheTermStartDay')
       // {
            subMissingCharges.btnInvoiceDate.waitForDisplayed();
            this.currentInvoiceDate=subMissingCharges.btnInvoiceDate.getText();
            this.monthsInterval=MonthsInterval;
            const result = this.calculateAdjustedDates(this.currentInvoiceDate, this.monthsInterval,5,3);
            this.newInvDate=result.newInvoiceDate;
            this.newTSDate=result.newTermStartDate;
            console.log("New Invoice Date:", result.newInvoiceDate);
            console.log("New Term Start Date:", result.newTermStartDate);
            subMissingCharges.btnInvoiceDate.click();
            browser.pause(2000);
            monthName = this.monthNameFromDate(this.newInvDate);
            dayNumber = this.DayNumber(this.newInvDate);
            year = this.yearFromDate(this.newInvDate);
            subMissingCharges.calendarParent.waitForDisplayed();
            for (let i = MonthsInterval; i > 0; i--) {
                subMissingCharges.btnCalendarArrowLeft.waitForDisplayed();
                subMissingCharges.btnCalendarArrowLeft.click();
                browser.pause(200);
            }
            browser.pause(1000);
            dayNumber = this.billingInvDay;
            console.log('extracted invoice day is '+dayNumber);
            dayNumber = parseInt(dayNumber);
            // if(dayNumber==1)
            // {
            //     dayNumber = parseInt(dayNumber)+2;
            // }
            subMissingCharges.selectDayFromCalendar(dayNumber).click();
            console.log('new updated Invoice Date is '+subMissingCharges.btnInvoiceDate.getText());
            browser.pause(1500);
            subMissingCharges.btnTermStartDate.waitForDisplayed();
            subMissingCharges.btnTermStartDate.scrollIntoView();
            subMissingCharges.btnTermStartDate.click();
            browser.pause(1000);
            subMissingCharges.btnTermStartDate.waitForDisplayed();
            subMissingCharges.btnTermStartDate.waitForClickable();
            subMissingCharges.btnTermStartDate.click();
            browser.pause(1200);
            if(!subMissingCharges.calendarParent.isExisting())
            {
                subMissingCharges.btnTermStartDate.waitForDisplayed();
                subMissingCharges.btnTermStartDate.waitForClickable();
                subMissingCharges.btnTermStartDate.click();
            }
            if(dayNumber==1)
            {
                MonthsInterval = parseInt(MonthsInterval)+1;
            }
            console.log('updated value of month interval '+MonthsInterval);
            browser.pause(2000);
            subMissingCharges.calendarParent.waitForDisplayed();
            for (let i = MonthsInterval; i > 0; i--) {
                    subMissingCharges.btnCalendarArrowLeft.waitForDisplayed();
                    subMissingCharges.btnCalendarArrowLeft.click();
                    browser.pause(200);
            }
            dayNumber = parseInt(this.billingTsDay);
            console.log('extracted termstart day is '+dayNumber);
            console.log('updated term start day value is '+dayNumber);
            subMissingCharges.selectDayFromCalendar(dayNumber).click();
            browser.pause(1000);
            console.log('new updated term start Date is '+subMissingCharges.btnTermStartDate.getText());
        //}
        this.isSameDateOrDiff = true;
    }
    calculateMissingChargesForBeforeInvAndTSdate(IvsDayVsTSDay,BSDateVsInvDay,BSDateVsTSDay,BillingCycle,MonthsInterval,FullTermCount)
    {
        let monthName;
        let dayNumber;
        let year;
        IvsDayVsTSDay = IvsDayVsTSDay.replace(/['"]+/g, '');
        console.log("value of 1st param is "+IvsDayVsTSDay);
        BSDateVsInvDay = BSDateVsInvDay.replace(/['"]+/g, '');
        console.log("value of 2nd param is "+BSDateVsInvDay);
        BSDateVsTSDay = BSDateVsTSDay.replace(/['"]+/g, '');
        console.log("value of 3rd param is "+BSDateVsTSDay);
        BillingCycle = BillingCycle.replace(/['"]+/g, '');
        console.log("value of 4th param is "+BillingCycle);
        MonthsInterval = MonthsInterval.replace(/['"]+/g, '');
        console.log("value of 5th param is "+MonthsInterval);
        FullTermCount = FullTermCount.replace(/['"]+/g, '');
        console.log("value of 6th param is "+FullTermCount);
        //if(IvsDayVsTSDay=='aftertheInvoiceDay'&& BSDateVsInvDay=='aftertheTermStartDay')
       // {
            subMissingCharges.btnInvoiceDate.waitForDisplayed();
            this.currentInvoiceDate=subMissingCharges.btnInvoiceDate.getText();
            this.monthsInterval=MonthsInterval;
            const result = this.calculateAdjustedDates(this.currentInvoiceDate, this.monthsInterval,5,3);
            this.newInvDate=result.newInvoiceDate;
            this.newTSDate=result.newTermStartDate;
            console.log("New Invoice Date:", result.newInvoiceDate);
            console.log("New Term Start Date:", result.newTermStartDate);
            subMissingCharges.btnInvoiceDate.click();
            browser.pause(2000);
            monthName = this.monthNameFromDate(this.newInvDate);
            dayNumber = this.DayNumber(this.newInvDate);
            year = this.yearFromDate(this.newInvDate);
            subMissingCharges.calendarParent.waitForDisplayed();
            for (let i = MonthsInterval; i > 0; i--) {
                subMissingCharges.btnCalendarArrowLeft.waitForDisplayed();
                subMissingCharges.btnCalendarArrowLeft.click();
                browser.pause(200);
            }
            browser.pause(1000);
            dayNumber = this.billingInvDay;
            subMissingCharges.selectDayFromCalendar(dayNumber).click();
            console.log('new updated Invoice Date is '+subMissingCharges.btnInvoiceDate.getText());
            browser.pause(1500);
            subMissingCharges.btnTermStartDate.waitForDisplayed();
            subMissingCharges.btnTermStartDate.scrollIntoView();
            subMissingCharges.btnTermStartDate.click();
            browser.pause(1500);
            subMissingCharges.btnTermStartDate.waitForDisplayed();
            subMissingCharges.btnTermStartDate.waitForClickable();
            subMissingCharges.btnTermStartDate.click();
            browser.pause(1500);
            if(!subMissingCharges.calendarParent.isExisting())
            {
                subMissingCharges.btnTermStartDate.waitForDisplayed();
                subMissingCharges.btnTermStartDate.waitForClickable();
                subMissingCharges.btnTermStartDate.click();
            }
            // if(dayNumber==1)
            // {
            //     MonthsInterval = parseInt(MonthsInterval)+1;
            // }
            console.log('updated value of month interval '+MonthsInterval);
            subMissingCharges.calendarParent.waitForDisplayed();
            for (let i = MonthsInterval; i > 0; i--) {
                    subMissingCharges.btnCalendarArrowLeft.waitForDisplayed();
                    subMissingCharges.btnCalendarArrowLeft.click();
                    browser.pause(200);
            }
            dayNumber = this.billingTsDay;
            subMissingCharges.selectDayFromCalendar(dayNumber).click();
            browser.pause(1000);
            console.log('new updated term start Date is '+subMissingCharges.btnTermStartDate.getText());
        //}
        this.isSameDateOrDiff = true;
    }
    calculateMissingChargesForBeforeInvAndFallOnTSdate(IvsDayVsTSDay,BSDateVsInvDay,BSDateVsTSDay,BillingCycle,MonthsInterval,FullTermCount)
    {
        let monthName;
        let dayNumber;
        let year;
        IvsDayVsTSDay = IvsDayVsTSDay.replace(/['"]+/g, '');
        console.log("value of 1st param is "+IvsDayVsTSDay);
        BSDateVsInvDay = BSDateVsInvDay.replace(/['"]+/g, '');
        console.log("value of 2nd param is "+BSDateVsInvDay);
        BSDateVsTSDay = BSDateVsTSDay.replace(/['"]+/g, '');
        console.log("value of 3rd param is "+BSDateVsTSDay);
        BillingCycle = BillingCycle.replace(/['"]+/g, '');
        console.log("value of 4th param is "+BillingCycle);
        MonthsInterval = MonthsInterval.replace(/['"]+/g, '');
        console.log("value of 5th param is "+MonthsInterval);
        FullTermCount = FullTermCount.replace(/['"]+/g, '');
        console.log("value of 6th param is "+FullTermCount);
        //if(IvsDayVsTSDay=='aftertheInvoiceDay'&& BSDateVsInvDay=='aftertheTermStartDay')
       // {
            subMissingCharges.btnInvoiceDate.waitForDisplayed();
            this.currentInvoiceDate=subMissingCharges.btnInvoiceDate.getText();
            this.monthsInterval=MonthsInterval;
            const result = this.calculateAdjustedDates(this.currentInvoiceDate, this.monthsInterval,5,3);
            this.newInvDate=result.newInvoiceDate;
            this.newTSDate=result.newTermStartDate;
            console.log("New Invoice Date:", result.newInvoiceDate);
            console.log("New Term Start Date:", result.newTermStartDate);
            subMissingCharges.btnInvoiceDate.click();
            browser.pause(2000);
            monthName = this.monthNameFromDate(this.newInvDate);
            dayNumber = this.DayNumber(this.newInvDate);
            year = this.yearFromDate(this.newInvDate);
            subMissingCharges.calendarParent.waitForDisplayed();
            for (let i = MonthsInterval; i > 0; i--) {
                subMissingCharges.btnCalendarArrowLeft.waitForDisplayed();
                subMissingCharges.btnCalendarArrowLeft.click();
                browser.pause(200);
            }
            browser.pause(1000);
            dayNumber = this.billingInvDay;
            dayNumber = dayNumber -1;
            subMissingCharges.selectDayFromCalendar(dayNumber).click();
            console.log('new updated Invoice Date is '+subMissingCharges.btnInvoiceDate.getText());
            browser.pause(1500);
            subMissingCharges.btnTermStartDate.waitForDisplayed();
            subMissingCharges.btnTermStartDate.scrollIntoView();
            subMissingCharges.btnTermStartDate.click();
            browser.pause(1500);
            subMissingCharges.btnTermStartDate.waitForDisplayed();
            subMissingCharges.btnTermStartDate.waitForClickable();
            subMissingCharges.btnTermStartDate.click();
            browser.pause(1500);
            if(!subMissingCharges.calendarParent.isExisting())
            {
                subMissingCharges.btnTermStartDate.waitForDisplayed();
                subMissingCharges.btnTermStartDate.waitForClickable();
                subMissingCharges.btnTermStartDate.click();
            }
            // if(dayNumber==1)
            // {
            //     MonthsInterval = parseInt(MonthsInterval)+1;
            // }
            console.log('updated value of month interval '+MonthsInterval);
            subMissingCharges.calendarParent.waitForDisplayed();
            for (let i = MonthsInterval; i > 0; i--) {
                    subMissingCharges.btnCalendarArrowLeft.waitForDisplayed();
                    subMissingCharges.btnCalendarArrowLeft.click();
                    browser.pause(200);
            }
            dayNumber = this.billingTsDay;
            subMissingCharges.selectDayFromCalendar(dayNumber).click();
            browser.pause(1000);
            console.log('new updated term start Date is '+subMissingCharges.btnTermStartDate.getText());
        //}
        this.isSameDateOrDiff = true;
    }
    calculateMissingChargesForBeforeInvAndAftertheTSdate(IvsDayVsTSDay,BSDateVsInvDay,BSDateVsTSDay,BillingCycle,MonthsInterval,FullTermCount)
    {
        let monthName;
        let dayNumber;
        let year;
        IvsDayVsTSDay = IvsDayVsTSDay.replace(/['"]+/g, '');
        console.log("value of 1st param is "+IvsDayVsTSDay);
        BSDateVsInvDay = BSDateVsInvDay.replace(/['"]+/g, '');
        console.log("value of 2nd param is "+BSDateVsInvDay);
        BSDateVsTSDay = BSDateVsTSDay.replace(/['"]+/g, '');
        console.log("value of 3rd param is "+BSDateVsTSDay);
        BillingCycle = BillingCycle.replace(/['"]+/g, '');
        console.log("value of 4th param is "+BillingCycle);
        MonthsInterval = MonthsInterval.replace(/['"]+/g, '');
        console.log("value of 5th param is "+MonthsInterval);
        FullTermCount = FullTermCount.replace(/['"]+/g, '');
        console.log("value of 6th param is "+FullTermCount);
        //if(IvsDayVsTSDay=='aftertheInvoiceDay'&& BSDateVsInvDay=='aftertheTermStartDay')
       // {
            subMissingCharges.btnInvoiceDate.waitForDisplayed();
            this.currentInvoiceDate=subMissingCharges.btnInvoiceDate.getText();
            this.monthsInterval=MonthsInterval;
            const result = this.calculateAdjustedDates(this.currentInvoiceDate, this.monthsInterval,5,3);
            this.newInvDate=result.newInvoiceDate;
            this.newTSDate=result.newTermStartDate;
            console.log("New Invoice Date:", result.newInvoiceDate);
            console.log("New Term Start Date:", result.newTermStartDate);
            subMissingCharges.btnInvoiceDate.click();
            browser.pause(2000);
            monthName = this.monthNameFromDate(this.newInvDate);
            dayNumber = this.DayNumber(this.newInvDate);
            year = this.yearFromDate(this.newInvDate);
            subMissingCharges.calendarParent.waitForDisplayed();
            for (let i = MonthsInterval; i > 0; i--) {
                subMissingCharges.btnCalendarArrowLeft.waitForDisplayed();
                subMissingCharges.btnCalendarArrowLeft.click();
                browser.pause(200);
            }
            browser.pause(1000);
            dayNumber = this.billingInvDay;
            dayNumber = dayNumber -1;
            subMissingCharges.selectDayFromCalendar(dayNumber).click();
            console.log('new updated Invoice Date is '+subMissingCharges.btnInvoiceDate.getText());
            browser.pause(1500);
            subMissingCharges.btnTermStartDate.waitForDisplayed();
            subMissingCharges.btnTermStartDate.scrollIntoView();
            subMissingCharges.btnTermStartDate.click();
            browser.pause(1500);
            subMissingCharges.btnTermStartDate.waitForDisplayed();
            subMissingCharges.btnTermStartDate.waitForClickable();
            subMissingCharges.btnTermStartDate.click();
            browser.pause(1500);
            if(!subMissingCharges.calendarParent.isExisting())
            {
                subMissingCharges.btnTermStartDate.waitForDisplayed();
                subMissingCharges.btnTermStartDate.waitForClickable();
                subMissingCharges.btnTermStartDate.click();
            }
            // if(dayNumber==1)
            // {
            //     MonthsInterval = parseInt(MonthsInterval)+1;
            // }
            console.log('updated value of month interval '+MonthsInterval);
            subMissingCharges.calendarParent.waitForDisplayed();
            for (let i = MonthsInterval; i > 0; i--) {
                    subMissingCharges.btnCalendarArrowLeft.waitForDisplayed();
                    subMissingCharges.btnCalendarArrowLeft.click();
                    browser.pause(200);
            }
            dayNumber = this.billingTsDay;
            dayNumber= dayNumber+2;
            subMissingCharges.selectDayFromCalendar(dayNumber).click();
            browser.pause(1000);
            console.log('new updated term start Date is '+subMissingCharges.btnTermStartDate.getText());
        //}
        this.isSameDateOrDiff = true;
    }
    calculateExactDates(currentInvoiceDate, monthsInterval) {
        // Parse the current invoice date
        const invoiceDate = new Date(currentInvoiceDate);
    
        if (isNaN(invoiceDate)) {
            throw new Error("Invalid Current Invoice Date format. Use YYYY-MM-DD.");
        }
    
        // Step 1: Subtract months to calculate the new Invoice Date
        let newInvoiceDate = new Date(invoiceDate);
        newInvoiceDate.setMonth(newInvoiceDate.getMonth() - monthsInterval);
    
        // Ensure the date stays on the 1st of the month after the subtraction
        newInvoiceDate.setDate(1);
    
        // Step 2: Set the Term Start Date to the new Invoice Date (since they are the same)
        const newTermStartDate = new Date(newInvoiceDate);
    
        // Format the dates as YYYY-MM-DD
        const formatDate = (date) =>
            `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    
        // Return results
        return {
            newInvoiceDate: formatDate(newInvoiceDate),
            newTermStartDate: formatDate(newTermStartDate),
        };
    }

    calculateAdjustedDates(currentInvoiceDate, monthsInterval, bsDateVsInvDay, bsDateVsTsDay) {
    const invoiceDate = new Date(currentInvoiceDate);

    if (isNaN(invoiceDate)) {
        throw new Error("Invalid Current Invoice Date format. Use YYYY-MM-DD.");
    }

    // Step 1: Subtract months to calculate the base Invoice Date
    let newInvoiceDate = new Date(invoiceDate);
    newInvoiceDate.setMonth(newInvoiceDate.getMonth() - monthsInterval);
    // Step 2: Adjust Invoice Date by BSDate-vs-InvDay (add days)
    newInvoiceDate.setDate(newInvoiceDate.getDate() + bsDateVsInvDay);

    // Step 3: Adjust Term Start Date by BSDate-vs-TSDay (add days)
    const newTermStartDate = new Date(newInvoiceDate);
    newTermStartDate.setDate(newTermStartDate.getDate() + bsDateVsTsDay);

    // Format the dates as YYYY-MM-DD
    const formatDate = (date) =>
        `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

    // Return results
    return {
        newInvoiceDate: formatDate(newInvoiceDate),
        newTermStartDate: formatDate(newTermStartDate),
    };
}

monthNameFromDate(datevalue)
{
    console.log('Input date is: ' + datevalue);

let resulvalue = '';
const date = new Date(datevalue + 'T00:00:00Z'); // Set the date explicitly in UTC

// Array of month names
const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

// Get the month name
resulvalue = monthNames[date.getUTCMonth()]; // Use getUTCMonth() for consistency
console.log('Month Name:', resulvalue);
return resulvalue;
}
DayNumber(datevalue)
{
    const date = new Date(datevalue + 'T00:00:00Z'); // Set the date explicitly in UTC

// Get the day number
let dayNumber = date.getUTCDate(); // Correct method to get the day of the month
console.log('Day Number:', dayNumber);
return dayNumber;
}
yearFromDate(datevalue)
{
    const date = new Date(datevalue + 'T00:00:00Z'); // Set the date explicitly in UTC

// Get the year
let year = date.getFullYear(); // getFullYear() returns the full year (e.g., 2024)
console.log('Year:', year);
return year;
}
clickTermEndDate()
{
    browser.pause(3000);
    console.log('going to click term end date button');
    subMissingCharges.previewLastDateButton.click();
    // var allrows = subMissingCharges.allRowsofPackageArea;
    // if(allrows.length >2)
    // {
    //     //if(this.isSameDateOrDiff==true)
    //     //{
    //         console.log('going to click different date');
    //         console.log('total rows are '+allrows.length);
    //         let lastindex = allrows.length-1;
    //         var allcolumns = subMissingCharges.getAllColumnsByparent(lastindex);
    //         console.log('got all columns for different '+allcolumns.length);
    //         var allbutton = subMissingCharges.getbuttonsByParent(allcolumns[1]);
    //         console.log('got all buttons for different '+allbutton.length);
    //         let indexoflastbutton = allbutton.length-1;
    //         allbutton[indexoflastbutton].click();
    //         // subMissingCharges.termEndDateForDiff.waitForDisplayed();
    //         // subMissingCharges.termEndDateForDiff.scrollIntoView();
    //         // subMissingCharges.termEndDateForDiff.waitForClickable();
    //         // subMissingCharges.termEndDateForDiff.click(); 
    //     //}
       
    // }
    // else
    // {
    //     console.log('going to click same date');
    //     let lastindex = allrows.length-1;
    //     var allcolumns = subMissingCharges.getAllColumnsByparent(allrows[0]);
    //     var allbutton = subMissingCharges.getbuttonsByParent(allcolumns[1]);
    //     let indexoflastbutton = allbutton.length-1;
    //     allbutton[indexoflastbutton].click();
    //     // subMissingCharges.termEndDate.waitForDisplayed();
    //     // subMissingCharges.termEndDate.scrollIntoView();
    //     // subMissingCharges.termEndDate.waitForClickable();
    //     // subMissingCharges.termEndDate.click();
    // }
    subMissingCharges.fullTermCountElement.waitForDisplayed();
    actualResult.push(subMissingCharges.fullTermCountElement.getText());
}
verifyEndOfMonth()
    {
        subMissingCharges.btnInvoiceDate.waitForDisplayed();
        this.currentInvoiceDate=subMissingCharges.btnInvoiceDate.getText();
        console.log("before change invoice date is "+this.currentInvoiceDate);
        let dateObj = new Date(this.currentInvoiceDate);
        let CurrentInvday = parseInt(dateObj.getDate());
        console.log("before change invoice day is "+CurrentInvday);
        if( CurrentInvday > 29)
        {
            subMissingCharges.btnInvoiceDate.click();
            browser.pause(200);
            subMissingCharges.calendarParent.waitForDisplayed();
            subMissingCharges.btnCalendarArrowLeft.click();
            browser.pause(200);
            subMissingCharges.selectDayFromCalendar(15).click();
            browser.pause(200);
            let newPrvInvDate = subMissingCharges.btnInvoiceDate.getText();
            console.log("EndOfMonth Prv Inv Date "+newPrvInvDate);
        }

    }

verifyFullTermCountFromLoop(expectedArray)
{
    expect(this.areArraysEqual(expectedArray,actualResult)).to.eql(true);
}
areArraysEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}

verifyFullTermCount(FullTermCount)
{
    FullTermCount = FullTermCount.replace(/['"]+/g, '');
    subMissingCharges.fullTermCountElement.waitForDisplayed();
    let countfrompage = subMissingCharges.fullTermCountElement.getText();
    console.log('full term count from page is '+countfrompage);
    expect(countfrompage).to.eql(FullTermCount);//full term count does not get matched
    browser.keys(this.Esckeys);
    browser.pause(500);
}


}
module.exports = new subscriberMissingChargesActions();
