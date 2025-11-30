const {Given, When, Then} = require("@cucumber/cucumber");
const irmIPActions = require('../support/IrmInventoryActions');
const Utils = require('../support/utils');
const IRMActions = require("../support/IRMActions");

  When(/^I go the Inventory profile section$/, function() {
	  irmIPActions.gotoIPSection();
  });
  When(/^I set List view of Inventory$/, function() {
	  irmIPActions.isTilesSelected();
  });
  When(/^I search with free text for Inventory$/, function() {
	  irmIPActions.clickOnInventorySearchbar();
    irmIPActions.enterInventoryToSearch('000001');
  });
  When(/^I click on the Lock icon to (.*) the Inventory search$/, function(lockUnclcok) {
	  irmIPActions.openLockInventorySearch(lockUnclcok);
  });
  When(/^I Locked the search with search key (.*)$/, function(searchkey) {
	  irmIPActions.keyToSelectFromLock(searchkey);
  });
  When(/^I Unlocked the search with search key (.*)$/, function(searchkey) {
	  irmIPActions.keyToSelectFromLock(searchkey);
  });
  When(/^I tries to lock Two keys at a time$/, function() {
    irmIPActions.openLockInventorySearch('Lock');
    irmIPActions.keyToSelectFromLock('Serial');
    irmIPActions.openLockInventorySearch('UnLock');
	  irmIPActions.keyToSelectFromLock('Manufacturer');
  });
  When(/^I click on the Add Inventory button$/, function() {
	  irmIPActions.clickAddInventory();
  });
  When(/^I search for a Location with input text$/,function(){
    irmIPActions.searchAddInventoryLocationProfile();
  })
  When(/^I search for an Inventory Profile with input text$/,function(){
    irmIPActions.searchAddInventoryProfile();
  })
  When(/^I fill in the Inventory Received Date Purchase Price Note and Serial Number$/,function(){
    irmIPActions.fillAddInventoryData();
  })
  When(/^I check the Same Equipment Profile checkbox$/,function(){
    irmIPActions.checkEquipmentProfile();
  })
  When(/^I checks the Scan Equipment Profile toggle button$/,function(){
    irmIPActions.btnClickScanEquipment();
  })
  When(/^I check the Equipment field option$/,function(fieldname){
    irmIPActions.btnCheckSpecificField(fieldname);
  })
  When(/^I fill all required fields with Equipment Profile$/,function(){
    irmIPActions.fillAddInventoryWithDetails();
    irmIPActions.selectEquipmentProfileWithOneStock();
  })
  When(/^I can click on Save button to add inventory$/,function(){
    irmIPActions.clickBtnSave();
  })
  When(/^I fill all required fields without Equipment Profile$/,function(){
    irmIPActions.fillAddInventoryWithDetails();
  })
  When(/^I can click on Cancel button to cancel the add inventory$/,function(){
    irmIPActions.clickBtnCancel();
  })







 
  
  Then(/^I can see the Profile Manufacturer Description SKU Assigned and Total columns for the Inventory Profile table$/, function() {
    irmIPActions.verifyIPcolumns();
  });
  Then(/^I can see Serial Equipment Type and Location in the details view of the Inventory Profile by clicking on the Arrow button$/, function() {
    irmIPActions.verifyInventoryDetailView();
  });
  Then(/^I can click on the serial number to directly open the Inventory Items$/, function() {
    irmIPActions.openInventoryItemFromSerial();
    irmIPActions.verifyInvetoryItemOpened();
  });
  Then(/^I closed the Inventory search field$/, function() {
    irmIPActions.closeSearchIcon();
  });
  Then(/^I can can sort the list in the Inventory Profile table$/, function() {
    irmIPActions.sortItemInInventory();
    irmIPActions.verifySortedInInventory();
  });

  Then(/^I can see Half and Full Card width options for Inventory section$/, function() {
	  irmIPActions.gotoIPSection();
    irmIPActions.verifyHalfFullOptions();
  });
  Then(/^I can the see that card width displays as half view If I set Half Card width for Inventory section$/, function() {
	  irmIPActions.verifyIPCardWidthHalf();
  });
  Then(/^I can the see that card width displays as Full view If I set Full Card width for Inventory section$/, function() {
	  irmIPActions.verifyIPCardWidthFull();
  });
  Then(/^I can set Tiles or List view to Display for Inventory section$/, function() {
	  irmIPActions.changeInventoryView('List');
    irmIPActions.verifyinventoryView('List');
    irmIPActions.changeInventoryView('Tiles');
    irmIPActions.verifyinventoryView('Tiles');
  });
  Then(/^I can see the Hamburger Menu in Inventory table$/, function() {
    irmIPActions.verifyIPHamburgerMenu();
  });
  Then(/^I clicks on the Hamburger Menu icon of the Inventory Profile section$/, function() {
	  irmIPActions.clickIPHamburgerMenu();
  });
  Then(/^I can see the Enable Inline Editing and Export CSV options in the Hamburger Menu$/, function() {
	  irmIPActions.verifyHamburgerMenuItems();
  });
  Then(/^I can click on Enable Inline Editing for the Inventory table$/, function() {
	  irmIPActions.clickInventoryInlineEditing();
  });
  Then(/^I can can inline edit the Inventory Profile and SKU fields in the Inventory table$/, function() {
	  irmIPActions.gotoIPSection();
    irmIPActions.keepInventoryName();
    irmIPActions.ClickToInLineEdit('Profile');
    irmIPActions.inputProfileName();
    irmIPActions.SaveInlineEditing();
    irmIPActions.isSKUEmpty('SKU');
    irmIPActions.ClickToInLineEdit('SKU');
    irmIPActions.SaveInlineEditingSKU();
  });
  Then(/^I am restricted from inline editing Manufacturer Description Assigned and Total fields in the Inventory Table$/, function() {
	  irmIPActions.ClickToInLineEdit('Manufacturer');
    irmIPActions.verifyInlineEditingRestrictedForOther();
    irmIPActions.ClickToInLineEdit('Description');
    irmIPActions.verifyInlineEditingRestrictedForOther();
    //irmIPActions.ClickToInLineEdit('Total');
    //irmIPActions.verifyInlineEditingRestrictedForOther();
  });
  Then(/^I can double-click on any displayed column or single-click to edit it while inline editing is enabled for the Inventory Table$/, function() {
    irmIPActions.gotoIPSection();
    irmIPActions.ClickToInLineEdit('Profile');
    irmIPActions.verifyInlineEditingActionsDisplayed();
  });
  Then(/^I can open the Inventory Drawer when single-clicking on any displayed column while inline editing is disabled for the Inventory Table$/, function() {
	  irmIPActions.keepInventoryName();
    irmIPActions.clickIPHamburgerMenu();
    irmIPActions.disableInlineEditing();
    irmIPActions.ClickToInLineEdit('Profile');
    irmIPActions.verifyInlineEditingGetDisabled();
  });
  Then(/^I can open the Inventory Drawer when double-clicking on any displayed column while inline editing is enabled$/, function() {
	  //irmIPActions.clickCloseIPDialog();
    irmIPActions.refreshBrowser();
    irmIPActions.keepInventoryName();
    irmIPActions.clickIPHamburgerMenu();
    console.log('hamburger menu opened');
    irmIPActions.clickInventoryInlineEditing();
    irmIPActions.doubleClickOnColumnField();
    console.log('double clicked');
    irmIPActions.verifyInlineEditingGetDisabled();
    irmIPActions.clickCloseIPDialog();
  });
  Then(/^I am restricted from inline editing when the Profile field is empty$/,function(){
    irmIPActions.ClickToInLineEdit('Profile');
    irmIPActions.verifyRestrictedToEditName();
  })
  Then(/^I am restricted from inline editing when the SKU field is empty$/,function(){
    irmIPActions.isSKUEmpty('SKU');
    irmIPActions.ClickToInLineEdit('SKU');
    irmIPActions.verifyRestrictedToEditEmptySKU();
  })
  Then(/^I can see the correct and updated Inventory list$/,function(){
    irmIPActions.verifyInventorySearchResults('RB921GS-5HPacD-19S');
  })
  Then(/^I can search inventory records displaying according to the searched keys with a Colon in front$/,function(searchKeys){
    table = searchKeys.raw();
		for(var i=0; i< table.length; i++){
      irmIPActions.searchKeysWithColon(table[i][0]);
		}
    console.log('search with keys and colon verified');
  })
  Then(/^I can search inventory with (.*) key$/,function(keyName){
    irmIPActions.searchKeys(keyName);
  })
  Then(/^I can see records displaying according to the searched (.*)$/,function(keyName){
    irmIPActions.seacrhedRecords(keyName);
  })
  Then(/^I can see that field locked$/,function(){
    irmIPActions.keyGetsLocked();
  })
  Then(/^I can see the key getting unlocked$/,function(){
    irmIPActions.keyGetsUnLocked();
  })
  Then(/^I can see only one key can be locked at a time$/,function(){
    irmIPActions.MultipleKeysValidations();
  })
  Then(/^I can see the Add Inventory page$/,function(){
    irmIPActions.verifyAddInventoryPage();
  })
  Then(/^I can see these fields on Add Inventory$/,function(fieldsData){
    irmIPActions.verifyMultipleFieldsOfTheAddInventory(fieldsData);
  })
  
  Then(/^I can see the correct Locations get selected based on the search keyword$/,function(){
    irmIPActions.verifyProfileLocationsSelected();
  })
  Then(/^I can see the correct Inventory Profil get selected based on the search keyword$/,function(){
    irmIPActions.verifyInventoryProfileSelected();
  })
  Then(/^I click Add to add more stock or Cancel to remove the stock from Inventory$/,function(){
    irmIPActions.VerifyclickAddRemoveStock();
  })
  Then(/^I can see the Equipment Profile dropdown disappear from all the stock rows$/,function(){
    irmIPActions.verifyEquipmentProfileRemoved();
  })
  Then(/^I can see the Same Equipment Profile checkbox checked$/,function(){
    irmIPActions.verifySameEquipmentPorfileChecked();
  })
  Then(/^I can see the Scan Equipment Field toggle button appearing$/,function(){
    irmIPActions.selectEquipmentProfile();
    irmIPActions.verifybtnScanEquipmentToggle();
  })
  Then(/^I can see fields of the selected equipment profile$/,function(fields){
    irmIPActions.verifyMultipleFieldsOfEP(fields);
  })
  Then(/^I can see field get added to the add inventory page$/,function(){
    irmIPActions.verifEquipmentFieldGetAdded();
  })
  Then(/^I can see Upload CSV and Download Template options$/,function(){
    irmIPActions.verifyUploadDownload();
  })
  Then(/^I can see Save and Cancel button is enabled after filling all required fields$/,function(){
    irmIPActions.verifySaveAndCancel();
  })
  Then(/^I can see the newly added Inventory successfully along with the Equipment if the equipment profile field is selected$/,function(){
    irmIPActions.verifyInventoryAddedSuccessfully();
  })
  Then(/^I can see only the Inventory is added successfully if the Equipment Profile field is not selected$/,function(){
    irmIPActions.verifyInventoryAddedSuccessfullyWithoutEP();
  })
  Then(/^I can see Add Inventory Dialog get closed$/,function(){
    irmIPActions.verifyAddInventoryGetClosed();
  })
  Then(/^Inventory Profile do not get added to the Inventory Profile Table$/,function(){
    irmIPActions.verifyAddInventoryDoNotGetAdded();
  })
