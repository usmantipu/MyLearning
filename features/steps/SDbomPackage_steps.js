const {Given, When, Then} = require("@cucumber/cucumber");
const crmBomActions = require('../support/SDbomPackageActions');
const Utils = require('../support/utils');

 When(/^I ensure ticket is not linked$/, function() {
  crmBomActions.selectUnlinkedTicket();
 });
 When(/^I enure ticket is present in CRM list$/, function() {
  crmBomActions.makeSureTicketListed();
 });

 When(/^I navigate to BoM dock$/, function() {
  crmBomActions.openBomDock();
  });

  When(/^I add Other Item in BoM$/, function() {
	  crmBomActions.addOtherItem();
    crmBomActions.addToBom();
    crmBomActions.clickOKofOtherItem();
  });

  When(/^I select recurring - Auto-suspend  when the subscriber is suspended or inactive$/, function() {
	  crmBomActions.selectRecurringAutoSuspended(0);
  });

  When(/^I select recurring - Auto-suspend  only when the subscriber is suspended$/, function() {
	  crmBomActions.selectRecurringAutoSuspended(1);
  });

  When(/^I select recurring - Auto-suspend  only when the subscriber is inactive$/, function() {
	  crmBomActions.selectRecurringAutoSuspended(2);
  });

  When(/^I open the add package dock$/, function() {
    crmBomActions.openBomDock();
	  crmBomActions.openAddPackageDock();
  });

  When(/^I can close the dock using cancel button$/, function() {
	  crmBomActions.cancelAddPackageDock();
  });

  When(/^I search and select package$/, function(packageName) {
	  crmBomActions.searchAndSelect(packageName);
  });

  When(/^I add item to BOM$/, function() {
	  crmBomActions.addToBom();
    crmBomActions.clickOKofOtherItem();
  });
  When(/^I click on Add to Bom$/, function() {
	  crmBomActions.addToBom();
  });
  When(/^I click on Ok to Save the package$/, function() {
	  crmBomActions.clickOkToSave();
  });
  When(/^I save Bom changes$/, function() {
	  crmBomActions.saveBomChanges();
  });

  When(/^I select predefined Tax settings$/, function() {
	  crmBomActions.openTaxSettings();
  });

  //////////// BOM OtherWhenPart

  When(/^I save BOM changes$/, function() {
    crmBomActions.saveBom();
  });

  When(/^I click BoM cancel button$/, function() {
    crmBomActions.bomCancel();
  });

  When(/^I click delete button next to the item$/, function() {
    crmBomActions.deleteBomItem();
  });

  When(/^I can select the recurring checkbox along with Auto suspend$/, function() {
	  crmBomActions.selectRecurringAlongAutoSuspended();
  });

  When(/^I add Other item in BoM selection$/, function() {
	  crmBomActions.addOtherItem();
    crmBomActions.addToBom();    
    crmBomActions.checkUncheckRecurringBeforeAddWithExpires();
    crmBomActions.hitEscapeKey();
    crmBomActions.clickOKofOtherItem();
  });

  // When(/^I select the Bom Recurring option (.*)$/, function(option) {
	//   crmBomActions.selectSpecificRecurringSuspendOption(option);
  // });
  When(/^I select the Bom Recurring option when the subscriber is suspended or inactive$/, function() {
	  crmBomActions.selectSpecificRecurringSuspendOption(0);
  });
  When(/^I select the Bom Recurring option Only when the subscriber is suspended$/, function() {
	  crmBomActions.selectSpecificRecurringSuspendOption(1);
  });
  When(/^I select the Bom Recurring option Only when the subscriber is inactive$/, function() {
	  crmBomActions.selectSpecificRecurringSuspendOption(2);
  });
  When(/^I select the Bom Recurring option When the specified package is not billed$/, function() {
	  crmBomActions.selectSpecificRecurringSuspendOption(3);
  });

  When(/^I select the package (.*)$/, function(option) {
	  crmBomActions.selectPackageIfShowed(option);
  });

  When(/^I add BOM other item$/, function() {
	  crmBomActions.addOtherItem();
    crmBomActions.addToBom();
  });

  When(/^I reopen recurring options$/, function() {
	  crmBomActions.checkUncheckRecurring();
  });

  When(/^I add Other item to view Auto suspend options$/, function() {
	  crmBomActions.addOtherItem();
    crmBomActions.addToBom();
  });

   When(/^I expand Auto suspend options from recurring checkbox$/, function() {
     crmBomActions.checkUncheckRecurringBeforeAddWithAutoSuspend();
  });

  When(/^I select (.*) checkbox option$/, function(option) {
	  crmBomActions.checkUncheckExpire(option);
  });
  
  When(/^I click on BoM (.*)$/, function(option) {
	  crmBomActions.clickOnBtnExpire();
  });

  When(/^I add other item to view Expires calendar$/, function() {
	  crmBomActions.addOtherItem();
    crmBomActions.addToBom();
    crmBomActions.checkUncheckRecurringBeforeAddWithExpires();
  });

  When(/^I expand to view years options$/, function() {
    crmBomActions.clickOnDate();
    crmBomActions.clickOnCalendarView();
  });

  When(/^I expand to view months options$/, function() {
	  crmBomActions.clickOnDate();
  });

  //////////////////////////
  Then(/^I should see a separate BoM section$/, function(){
	  crmBomActions.verifyBomTab();
	  Utils.clearLocalStorage();
  });

  Then(/^I see should see add package button$/, function(){
	  crmBomActions.verifyAddPackageInBom();
	  Utils.clearLocalStorage();
  });

  Then(/^I see should see add package dock closed$/, function(){
	  crmBomActions.verifyAddPackageClosed();
	  Utils.clearLocalStorage();
  });

  Then(/^I delete the added package from the BoM$/, function(packageName){
	  crmBomActions.verifyPackageGetDeleted(packageName);
	  Utils.clearLocalStorage();
  });

  Then(/^I can see that QTY option is available$/, function(){
	  crmBomActions.verifyQTYAvailable();
	  Utils.clearLocalStorage();
  });

  Then(/^I can see that tax rate can be selected as predefined tax settings$/, function(){
	  crmBomActions.verifyPredefiniedTaxSelected();
	  Utils.clearLocalStorage();
  });

  Then(/^The preview is available with Tax rate, Taxable amount, Non-Taxable and tax Charged$/, function(dataToVerify){
	  crmBomActions.veriftTaxSettingsPreview(dataToVerify);
	  Utils.clearLocalStorage();
  });

  Then(/^I see should see add service button$/, function(){
	  crmBomActions.verifyAddService();
	  Utils.clearLocalStorage();
  });

  Then(/^I can select the Recurring checkbox$/, function(){
	  crmBomActions.verifyRecurringGetSelected();
	  Utils.clearLocalStorage();
  });

  Then(/^I can deselect the Recurring checkbox$/, function(){
	  crmBomActions.verifyRecurringUnChecked();
	  Utils.clearLocalStorage();
  });

  Then(/^The text label changed as a (.*)$/, function(autoSuspend){
	  crmBomActions.verifyAutoSuspendedOption(autoSuspend);
	  Utils.clearLocalStorage();
  });
  ////////// BOMOtherItems

  Then(/^I should see Other item button$/, function(){
    crmBomActions.verifyAddOtherItemInBom();
    Utils.clearLocalStorage();
 });

 Then(/^The other item is added to the BoM$/, function(otherItems){
  crmBomActions.verifyOtherItemAdded(otherItems);
  Utils.clearLocalStorage();
});

Then(/^The Other items dock is closed$/, function(){
  crmBomActions.verifyBomOtherCanceled();
  Utils.clearLocalStorage();
});

Then(/^The BOM item is deleted$/, function(){
  crmBomActions.verifybomItemDeleted();
  Utils.clearLocalStorage();
});

Then(/^I can select the recurring checkbox of other item$/, function(){
  crmBomActions.verifyOtherRecurringSelect();
  Utils.clearLocalStorage();
});

Then(/^I can deselect the recurring checkbox of other item$/, function(){
  crmBomActions.verifyOtherRecurringUnselect();
  Utils.clearLocalStorage();
});

Then(/^I can see Auto suspended check box option$/, function(){
  crmBomActions.verifyAutoSuspendOption();
  Utils.clearLocalStorage();
});

Then(/^The (.*) checkbox option is available$/, function(option){
  crmBomActions.verifyExpireCheckbox(option);
  Utils.clearLocalStorage();
});

Then(/^The lable changes as (.*)$/, function(option){
  crmBomActions.verifyExpireLabel(option);
  Utils.clearLocalStorage();
});

Then(/^The drop down month view calendar opens$/, function(){
  crmBomActions.verifyExpiresOnCalendar();
  Utils.clearLocalStorage();
});

Then(/^All upcoming years selection opens up$/, function(){
  crmBomActions.verifyUpComingYears();
  Utils.clearLocalStorage();
});

Then(/^All upcoming months selection opens up$/, function(){
  crmBomActions.verifyUpComingMonths();
  Utils.clearLocalStorage();
});