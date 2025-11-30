var LoginPage = require('../pageobjects/login.page');
var alertsPackagePage = require('../pageobjects/alertsPackage.page');
var expect = require('chai').expect;

class alertsPackageActions {
    constructor(){
        this.pkgName;
        this.alertMsg;
        this.dangerAlertMsg;
    }
    openAlertForm() {
        //browser.pause(3000);
        alertsPackagePage.moreBtnUnderLogsSection.waitForDisplayed();
        alertsPackagePage.moreBtnUnderLogsSection.scrollIntoView();
        //browser.pause(3000);
        alertsPackagePage.moreBtnUnderLogsSection.waitForDisplayed();
        alertsPackagePage.moreBtnUnderLogsSection.waitForClickable();
        alertsPackagePage.moreBtnUnderLogsSection.click();
        alertsPackagePage.btnAddAlert.waitForDisplayed();
        alertsPackagePage.btnAddAlert.waitForClickable();
        alertsPackagePage.btnAddAlert.click();
        console.log('add alert clicked');
    }
    verifyAlertFormOpens() {
        alertsPackagePage.headingAddAlert.waitForDisplayed();
        expect(alertsPackagePage.headingAddAlert.getText()).eql('Add Alert');
    }
    createAlert(type, seveirty) {
        alertsPackagePage.highSeveirty.waitForDisplayed();
        if(seveirty === 'high')
        {
            alertsPackagePage.highSeveirty.click();
        }
        alertsPackagePage.checkboxUserDismissible.waitForDisplayed();
        if(alertsPackagePage.checkboxUserDismissibleInput.getValue() === 'false') {
            alertsPackagePage.checkboxUserDismissible.click();
        }
        if(seveirty === 'high')
        {
            this.dangerAlertMsg = 'Alert - Add - ' + Math.floor(Math.random() * 101245000000);
            alertsPackagePage.textarea.addValue(this.dangerAlertMsg);
        }
        else
        {
            this.alertMsg = 'Alert - Add - ' + Math.floor(Math.random() * 101245000000);
            alertsPackagePage.textarea.addValue(this.alertMsg);
        }
        var getCascade = alertsPackagePage.checkboxCascadeInput.getValue();
        if(getCascade === 'true') {
            if(type === 'No Cascade') {
                alertsPackagePage.checkboxCascade.click();
            }
        }
        else {
            if(type === 'Cascade') {
                alertsPackagePage.checkboxCascade.click();
            }
        }
        alertsPackagePage.dropdownCategory.click();
        alertsPackagePage.packageFromDropDown.waitForDisplayed();
        alertsPackagePage.packageFromDropDown.click();
        //browser.pause(2000);
        alertsPackagePage.dropdownPackageID.waitForDisplayed();
        alertsPackagePage.dropdownPackageID.waitForClickable();
        alertsPackagePage.dropdownPackageID.click();
        this.pkgName = alertsPackagePage.packageTypeWireless.getText();
        alertsPackagePage.packageTypeWireless.click();
        alertsPackagePage.btnAdd.waitForDisplayed();
        alertsPackagePage.btnAdd.waitForClickable();
        alertsPackagePage.btnAdd.click();
        alertsPackagePage.successAlertMessageDiv.waitForDisplayed();
        expect(alertsPackagePage.successAlertMessageDiv.isExisting()).to.be.true;
    }
    checkalertAdded(type) {
        browser.pause(1000);
        alertsPackagePage.firstBtn.waitForDisplayed();
        alertsPackagePage.firstBtn.waitForClickable();
        alertsPackagePage.firstBtn.click();
        if(type === 'Cascade')
        {
            alertsPackagePage.openAlertCascadeFlagShowPkg(this.pkgName);
        }
        else
        {
            alertsPackagePage.pkgLink(this.pkgName);
        }
        browser.pause(3000);
        alertsPackagePage.scrollToAlertExists(this.alertMsg);
        expect(alertsPackagePage.alertExists(this.alertMsg)).to.be.true;
    }
    verifyFlgShows(yesNo) {
        browser.pause(1000);
        alertsPackagePage.firstBtn.waitForDisplayed();
        alertsPackagePage.firstBtn.waitForClickable();
        alertsPackagePage.firstBtn.click();
        if(yesNo === 'No')
        {
            expect(alertsPackagePage.alertCascadeFlagShow(this.pkgName)).to.be.false;
        }
        else
        {
            expect(alertsPackagePage.alertCascadeFlagShow(this.pkgName)).to.be.true;
        }
    }
    dismissTheAlert() {
        browser.pause(2000);
        alertsPackagePage.dissmissAlert(this.alertMsg);
        browser.pause(3000);
        expect(alertsPackagePage.alertExists(this.alertMsg)).to.be.false;
    }
    dismissAllActiveAlert() {
        browser.pause(2000);
        var allapliedAlerts = alertsPackagePage.getAllAppliedAlerts;
        let alertLength = allapliedAlerts.length/2;//divedd by 2 as there a bug
        //console.log('length after division'+alertLength);
        allapliedAlerts[0].scrollIntoView();
        for (var i=0; i<alertLength;i++)
		{
            browser.pause(1000);
            //console.log('alert name is'+allapliedAlerts[i].getText());
            alertsPackagePage.closeServiceAlertByParent(allapliedAlerts[i]).click();
		}
    }
    verifyAlertsHaveHighSeveirtyOrder() {
        var dngerAlertExist = false;
        var normalAlertExist = false;
        var totalH6 = alertsPackagePage.allH6InPkgDetails.length;
        for(var count = 0; count < totalH6; count++) {
            if(this.dangerAlertMsg === alertsPackagePage.allH6InPkgDetails[count].getText())
            {
                dngerAlertExist = true;
            }
            if(this.alertMsg === alertsPackagePage.allH6InPkgDetails[count].getText())
            {
                normalAlertExist = true;
            }
            if(dngerAlertExist===true && normalAlertExist===true)
            {
                break;
            }
        }
        expect(dngerAlertExist).eql(normalAlertExist);
    }
}
module.exports = new alertsPackageActions();