var Utils = require('./utils');
const alertValPage= require('../pageobjects/alertsValidations.page.js');
var Utils = require('./utils');
var expect = require('chai').expect;
var should = require('chai').should();

class alertsValidationsActions{

    constructor(){
		this.alertDescription;
        this.updatedDescription;
        this.serviceName;
        this.successAddCongMsg='Alert successfully added.';
        this.extractedMsg;
    }

    openAlert()
    {
        alertValPage.threeDotedBtn.waitForDisplayed();
        alertValPage.threeDotedBtn.click();
        alertValPage.selectAddAlert.waitForDisplayed();
        alertValPage.selectAddAlert.click();
    }
    createAlert(parameter)
    {
        alertValPage.addAlertDialog.waitForDisplayed();
        this.alertDescription = 'AlertVal' + (Math.floor(new Date() / 1000));
        alertValPage.addAlertDialog.waitForDisplayed();
        alertValPage.alertDescription.waitForDisplayed();
        alertValPage.alertDescription.waitForClickable();
        alertValPage.alertDescription.setValue(this.alertDescription);
        alertValPage.alertPersistance.waitForClickable();
        alertValPage.alertPersistance.click();
        this.actionOnIcon(parameter);
    }
    actionOnIcon(parameter)
    {
        parameter = parameter.replace(/['"]+/g, '');
        switch(parameter){
			case"none":
				break;
			case"Amber":
                alertValPage.alertAmberIcon.waitForDisplayed();
                alertValPage.alertAmberIcon.waitForClickable();
                alertValPage.alertAmberIcon.click();
				break;
			case"Green":
                alertValPage.alertGreenIcon.waitForDisplayed();
                alertValPage.alertGreenIcon.waitForClickable();
                var greenIcon = alertValPage.alertGreenIcon;
                if(alertValPage.chekboxByParent(greenIcon).getAttribute('data-testid')==='CheckCircleIcon'){}
                else{
                    alertValPage.alertGreenIcon.click();
                }
				break;
            case"Blue":
                alertValPage.alertBlueIcon.waitForDisplayed();
                alertValPage.alertBlueIcon.waitForClickable();
                alertValPage.alertBlueIcon.click();
				break;
            case"Red":
                alertValPage.alertRedIcon.waitForDisplayed();
                alertValPage.alertRedIcon.waitForClickable();
                alertValPage.alertRedIcon.click();
				break;
		}
    }
    selectFlagsCascade()
    {
        alertValPage.alertCascade.waitForDisplayed();
        alertValPage.alertCascade.waitForClickable();
        alertValPage.alertCascade.click();
    }
    clickAddAlert()
    {
        alertValPage.btnAddAlert.waitForClickable();
        alertValPage.btnAddAlert.click();
        alertValPage.getConfMsg.waitForDisplayed();
        this.extractedMsg = alertValPage.getConfMsg.getText();
        browser.pause(5000);
    }
    clickLogsAlert()
    {
        alertValPage.btnAlertFromLogs.scrollIntoView();
        alertValPage.btnAlertFromLogs.waitForDisplayed();
        alertValPage.btnAlertFromLogs.waitForClickable();
        alertValPage.btnAlertFromLogs.click();
    }
    editSpecificAlert()
    {
        // browser.pause(1000);
        alertValPage.logsFirstColumn.waitForDisplayed();
        // alertValPage.logsFirstColumn.waitForClickable();
        browser.pause(1000);
        var allAlertData = alertValPage.allColumnsData;
        console.log('extracted columns data');
		for (var i=0; i<allAlertData.length;i++)
		{
            // browser.pause(1000);
			if(allAlertData[i].getText()===this.alertDescription)
			{
                // console.log('opening edit alert dialog');
				allAlertData[i].click();
				break;
			}
		}
		browser.pause(1000);
        // alertValPage.allColumnsData[0].waitForClickable();
        // alertValPage.allColumnsData[0].click();
        // alertValPage.editAlertDialog.waitForDisplayed();
    }
    uncheckcheckedDismissible()
    {
        alertValPage.alertPersistance.waitForDisplayed();
        alertValPage.alertPersistance.waitForClickable();
        if(alertValPage.svgStatus(alertValPage.alertPersistance).getAttribute('data-testid')=="CheckBoxIcon")
        {
            alertValPage.alertPersistance.click();
        }
    }
    saveAlert()
    {
        alertValPage.btnSave.waitForDisplayed();
        alertValPage.btnSave.waitForClickable();
        alertValPage.btnSave.click();
        // browser.pause(1000);
    }
    inActiveAppliedAlert()
    {
        alertValPage.alertActive.waitForDisplayed();
        alertValPage.alertActive.waitForClickable();
        browser.pause(1000);
        // console.log("Active checkbox was found");
        alertValPage.alertActive.click();
        browser.pause(1000);
    }
    updateAlertIcon(parameter)
    {
        alertValPage.editAlertDialog.waitForDisplayed();
        this.actionOnIcon(parameter);
    }
    updateSpecificFields()
    {
        this.updatedDescription = 'AlertUpdate' + (Math.floor(new Date() / 1000));
        alertValPage.alertDescription.waitForDisplayed();
        alertValPage.alertDescription.waitForClickable();
        alertValPage.alertDescription.setValue(this.updatedDescription);
        alertValPage.alertPersistance.waitForClickable();
        alertValPage.alertPersistance.click();
        this.updateAlertIcon('Blue');
    }
    closeEditAlert()
    {
        alertValPage.closeEditAlert.waitForClickable();
        alertValPage.closeEditAlert.click();
    }
    inActiveAllAppliedAlerts()
    {
        alertValPage.btnAlertFromLogs.waitForDisplayed();
        if(alertValPage.getConfMsg.isExisting())
        {
            var alerts = alertValPage.allAlertsParent;
		    //console.log('all alerts length is '+alerts.length);
		    for (var i=0; i<alerts.length;i++)
		    {
                // browser.pause(1000);
			    let alertName = alerts[i].getText();
			    //console.log('alertname is '+alertName);
			    this.alertDescription = alertName;

                if(alertValPage.closeServiceAlertByParent(alerts[i]).isExisting()){
                    alertValPage.closeServiceAlertByParent(alerts[i]).click();
                    browser.pause(1000);
                }
                else{
                    alertValPage.btnAlertFromLogs.scrollIntoView();
                    alertValPage.btnAlertFromLogs.waitForClickable();
                    alertValPage.btnAlertFromLogs.click();
                    browser.pause(1000);
			        this.editSpecificAlert();
			        this.inActiveAppliedAlert();
			        this.saveAlert();
                }
		    }
        }
    }
    closeAndReOpenSubscriber()
    {
        browser.pause(3000);
        alertValPage.closeSubscriber.click();
        browser.pause(3000);
        alertValPage.subscriberTableData[2].click();
        browser.pause(5000);
    }

    ///// TA-328
    createServiceAlert()
    {
        alertValPage.addAlertDialog.waitForDisplayed();
        this.alertDescription = 'AlertVal' + (Math.floor(new Date() / 1000));
        alertValPage.addAlertDialog.waitForDisplayed();
        alertValPage.alertDescription.waitForDisplayed();
        alertValPage.alertDescription.waitForClickable();
        alertValPage.alertDescription.setValue(this.alertDescription);
        alertValPage.alertPersistance.waitForClickable();
        alertValPage.alertPersistance.click();
        alertValPage.expandCategory.click();
        alertValPage.selectService.waitForDisplayed();
        alertValPage.selectService.click();
        alertValPage.expandService.waitForDisplayed();
        alertValPage.expandService.waitForClickable();
        alertValPage.expandService.click();
        alertValPage.selectServiceType.waitForDisplayed();
        this.serviceName = alertValPage.selectServiceType.getText();
        alertValPage.selectServiceType.click();

    }
    goToPackageService()
    {
        alertValPage.openFirstPackage.click();
        alertValPage.packageDockText.waitForDisplayed();
        if(alertValPage.expandCollapsePackage.getAttribute('data-testid')==='ChevronRightIcon')
        {
            console.log('going to click parent package');
            alertValPage.expandCollapsePackage.click();
        }
        browser.pause(3000);
        alertValPage.selectPackageService.waitForDisplayed();
        alertValPage.selectPackageService.waitForClickable();
        alertValPage.selectPackageService.click();
        console.log('expanded package service');
        browser.pause(3000);
    }
    deactivateServiceAlert()
    {
        //this.alertDescription ='ServiceAlert';
        this.goToPackageService();
        var alerts = alertValPage.allAlertsParent;
        if(alerts.length>0)
        {
		    for (var i=0; i<alerts.length;i++)
		    {
                browser.pause(500);
			    let alertName = alerts[i].getText();
			    console.log('alertname is '+alertName);
                if(alertName.includes(this.alertDescription))
                {
                    alertValPage.closeServiceAlertByParent(alerts[i]).click();
                    browser.pause(1000);
                    break;
                }
		    }
        }
    }
    inActiveServiceAlerts()
    {
        browser.pause(2000);
        var allapliedAlerts = alertValPage.getAllAppliedAlerts;
        let alertLength = allapliedAlerts.length;
        const alertsExtractedNames =[];
        for (var i=0; i<alertLength;i++)
		{
            alertsExtractedNames[i] = allapliedAlerts[i].getText();
		}
        console.log('one alert name '+alertsExtractedNames[0]);
        alertValPage.closePackageDock.waitForDisplayed();
        alertValPage.closePackageDock.click();
        alertValPage.btnAlertFromLogs.waitForDisplayed();
        alertValPage.btnAlertFromLogs.scrollIntoView();
        alertValPage.btnAlertFromLogs.waitForClickable();
        alertValPage.btnAlertFromLogs.click();
        browser.pause(2000);
		for (var i=0; i<alertsExtractedNames.length;i++)
		{
            browser.pause(500);
			this.alertDescription = alertsExtractedNames[i];
			this.editSpecificAlert();
			this.inActiveAppliedAlert();
			this.saveAlert();
		}
    }


    verifyAlertPersistanceHistory()
    {
        this.editSpecificAlert();
        alertValPage.alertHistorySection.waitForDisplayed();
        var textData = alertValPage.alertHistorySection.getText();
        expect(textData.includes('Persistence changed from \'0\' to \'1\'.')).to.be.true;
    }
    verifyBannerRemoved()
    {
        browser.pause(2000);
        alertValPage.editContactIcon.scrollIntoView();
        expect(alertValPage.closeAlert.isExisting()).to.be.false;
    }
    verifyAlertHistorySeverity(oldVal,newVal)
    {
        oldVal = oldVal.replace(/['"]+/g, '');
        newVal = newVal.replace(/['"]+/g, '');
        this.editSpecificAlert();
        alertValPage.alertHistorySection.waitForDisplayed();
        var textData = alertValPage.alertHistorySection.getText();
        expect(textData.includes('Severity changed from \''+oldVal+'\' to \''+newVal+'\'')).to.be.true;
    }
    verifySubscriberFlag(flag)
    {
        browser.pause(3000);
        alertValPage.closeSubscriber.click();
        flag = flag.replace(/['"]+/g, '');
        browser.pause(5000);
        var subStatus = alertValPage.subscriberAlertStatus;
        let actualStatus = subStatus[1].getAttribute('style');
        let expectedStatus;
        switch(flag){
			case"warning":
                expectedStatus ='color: rgb(241, 188, 83)';
				break;
            case"error":
                expectedStatus ='color: rgb(204, 79, 80)';
				break;
		}
        expect(actualStatus.includes(expectedStatus)).to.be.true;
        console.log('verified cascade flags')
        alertValPage.subscriberTableData[2].click();
        browser.pause(5000);
    }
    verifyHistoryOfMultipleActions()
    {
        let oldDescriptionValue = this.alertDescription;
        this.alertDescription = this.updatedDescription;
        this.editSpecificAlert();
        alertValPage.alertHistorySection.waitForDisplayed();
        var textData = alertValPage.alertHistorySection.getText();
        expect(textData.includes('Severity changed from \'1\' to \'2\'.')).to.be.true;
        console.log('severity changes history verified');
        expect(textData.includes('Message changed from \''+oldDescriptionValue+'\' to \''+this.updatedDescription+'\'.')).to.be.true;
        console.log('description changes history verified');
        expect(textData.includes('Persistence changed from \'0\' to \'1\'.')).to.be.true;
        console.log('User dismissible changes history verified');
    }
    verifyHistoryOfPersonMadeChanges()
    {
        this.verifyHistoryOfMultipleActions();
        alertValPage.alertHistorySection.waitForDisplayed();
        var textData = alertValPage.alertHistorySection.getText();
        expect(textData.includes('Updated by Jon Automation')).to.be.true;
        console.log('changes made by history verified');
    }
    ////// TA-328
    verifyAlertCreated()
    {
        //alertValPage.getConfMsg.waitForDisplayed();
        expect(this.extractedMsg).to.eql(this.successAddCongMsg);//got actual message while adding alert
    }
    verifyServiceAlertCreated()
    {
        //this.alertDescription = 'AlertVal1661677819';
        this.goToPackageService();
        let actualresult=false;
        var alerts = alertValPage.getAllAppliedAlerts;
        if(alerts.length>0)
        {
		    for (var i=0; i<alerts.length;i++)
		    {
                browser.pause(500);
			    let alertName = alerts[i].getText();
			    console.log('alertname is '+alertName);
                if(alertName===this.alertDescription)
                {
                    actualresult = true;
                    break;
                }
		    }
            expect(actualresult).to.be.true;//alert is present
        }
        else
        {
            expect(actualresult).to.be.true;//no alert is present
        }
    }
    verifyServiceCascadeOption()
    {
        alertValPage.openFirstPackage.waitForDisplayed();
        alertValPage.openFirstPackage.scrollIntoView();
        browser.pause(3000);
        expect(alertValPage.serviceCascade.isExisting()).to.be.true;//alert service cascade options is present
    }
    verifyAlertRemoved()
    {
        browser.pause(1000);
        expect(alertValPage.getTextByHeader(this.alertDescription).isExisting()).to.be.false;//alert get removed from service
    }



}
module.exports = new alertsValidationsActions();
