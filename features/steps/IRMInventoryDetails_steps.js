const {Given, When, Then} = require("@cucumber/cucumber");
const irmIPDetailsActions = require('../support/IRMInventoryDetailsActions');
const Utils = require('../support/utils');
const IRMActions = require("../support/IRMActions");


  When(/^I search an inventory using Equipment profile$/, function(dataToSearch) {
    var table = dataToSearch.raw();
	  irmIPDetailsActions.clickOnInventorySearchbar();
    irmIPDetailsActions.enterInventoryToSearch(table[0][0]);
  });
  When(/^I click on Yes to delete Inventory item$/, function(dataToSearch) {
    irmIPDetailsActions.clickBtnDeleteOfDotMenu();
  });
  When(/^I click on the Create RMA button of Inventory$/, function() {
    irmIPDetailsActions.checkIfCreateRMADisabled();
    irmIPDetailsActions.closeOpenedRMA();
    irmIPDetailsActions.clickOnCreateRMA();
  });
  When(/^I enter a valid Date using the date chooser$/, function() {
    irmIPDetailsActions.enterValidDate();
  });
  When(/^I enter a valid Vendor by selecting from the list$/, function() {
    irmIPDetailsActions.enterAndSelectVendor();
  });
  When(/^I enter a valid RMA Number$/, function() {
    irmIPDetailsActions.enterValidRMA();
  });
  When(/^I enter a valid Returned Date using the date chooser$/, function() {
    irmIPDetailsActions.enterReturnDate();
  });
  When(/^I enter a valid Returned Tracking Number$/, function() {
    irmIPDetailsActions.enterValidRTN();
  });
  When(/^I enter a valid Shipped Date using the date chooser$/, function() {
    irmIPDetailsActions.enterValidShipDate();
  });
  When(/^I enter a valid Shipped Tracking Number$/, function() {
    irmIPDetailsActions.enterValidSTN();
  });
  When(/^I click on the Save button to save RMA$/, function() {
    irmIPDetailsActions.clickBtnSaveRMA();
  });
  When(/^I create RMA with Status Shipped$/, function() {
    irmIPDetailsActions.clickOnCreateRMA();
    irmIPDetailsActions.enterValidDate();
    irmIPDetailsActions.enterAndSelectVendor();
    irmIPDetailsActions.enterValidRMA();
    irmIPDetailsActions.enterReturnDate();
    irmIPDetailsActions.enterValidRTN();
    irmIPDetailsActions.enterValidShipDate();
    irmIPDetailsActions.enterValidSTN();
    irmIPDetailsActions.clickBtnSaveRMA();
  });
  When(/^I click on the Save button to updated RMA$/, function() {
    irmIPDetailsActions.clickBtnSaveToUpdatedRMA();
  });
  When(/^I navigate to the Activity Logs section$/, function() {
    irmIPDetailsActions.navigateToActivityLogs();
  });

 
  Then(/^I can click on any Inventory profile to open an Inventory Profile drawer containing its associated Inventory Items$/, function() {
	  irmIPDetailsActions.keepInventoryName();
    irmIPDetailsActions.clickIPHamburgerMenu();
    irmIPDetailsActions.disableInlineEditing();
    irmIPDetailsActions.doubleClickOnColumnField();
    irmIPDetailsActions.verifyInlineEditingGetDisabled();
  });
  Then(/^I can sort the list in the Inventory Drawer$/,function(){
    irmIPDetailsActions.sortItemInInventory();
    irmIPDetailsActions.verifySortedInInventory();
  })
  Then(/^I have options in the Hamburger Menu of Inventory Drawer:$/,function(fieldsData){
    irmIPDetailsActions.verifyDrawerHamburgerItems(fieldsData);
  })
  Then(/^I can click on Choose Column in the Hamburger Menu of inventory details$/,function(){
    irmIPDetailsActions.openChooseColumns();
  })
  Then(/^I can choose to display columns in the Inventory Drawer using the Column Chooser$/,function(){
    irmIPDetailsActions.keepExistingColumns();
    irmIPDetailsActions.chooseColumnsFromDetails();
    irmIPDetailsActions.verifyColumnsChanged();
    irmIPDetailsActions.ResetColumns();
  })
  Then(/^I see a Search Bar in the Inventory Drawer$/,function(){
    irmIPDetailsActions.verifyInvSearchbar();
  })
  Then(/^I can click on the Search Bar to search for details based on a search keyword$/,function(){
    irmIPDetailsActions.searchFromDrawer();
    irmIPDetailsActions.verifyDrawerSearchedResult();
  })
  Then(/^I see a 3-dot menu when I focus on details in the table of Inventory Drawer$/,function(){
    irmIPDetailsActions.verifyDotmenuOfDrawer();
  })
  Then(/^I see a Delete button in the 3-dot menu while clicking 3-dot menu of Inventory Drawer$/,function(){
    irmIPDetailsActions.verifybtnDeleteOfDotMenu();
  })
  Then(/^I can click on the Delete button in the table of Inventory Drawer$/,function(){
    irmIPDetailsActions.clickBtnDeleteOfDotMenu();
  })
  Then(/^I can see the pop-up for Inventory will be Delete with Yes and No option$/,function(){
    irmIPDetailsActions.verifyCofirmDeletePopUp();
  })
  Then(/^I can click on any Inventory Item to view or edit its details$/,function(){
    irmIPDetailsActions.clickBtnNoOfPopUp();
    irmIPDetailsActions.openInventoryItem();
    irmIPDetailsActions.verifyInventoryItemEditDrawer();
  })
  Then(/^I can see the Serial No Location Equipment Received date and Purchase Price fields in the Edit Inventory Item details drawer$/,function(){
    irmIPDetailsActions.verifyInventoryItemDetails();
  })
  Then(/^I can see the Asset Tag field when I enable the Show Asset Tag in equipment settings$/,function(){
    irmIPDetailsActions.enableEquipmentAssetSetting();
    irmIPDetailsActions.closeSubItem();
    irmIPDetailsActions.openInventoryItem();
    irmIPDetailsActions.verifyAssetTag();
  })
  Then(/^I can edit the Serial No. field in the Inventory Item$/,function(){
    irmIPDetailsActions.editItemSerialNumber();
  })
  Then(/^I am restricted to edit an Inventory Item with an empty Serial No.$/,function(){
    irmIPDetailsActions.validateEmptySerialNumber();
  })
  Then(/^I am restricted to edit the Serial No. if it is already assigned$/,function(){
    irmIPDetailsActions.editSerialItemWithSameNumber();
  })
  Then(/^I can edit the Asset Tag field in the Inventory drawer$/,function(){
    irmIPDetailsActions.editAssetTag();
  })
  Then(/^I can edit the Location field based on a search keyword in the Edit Inventory Item$/,function(){
    irmIPDetailsActions.editItemLocation();
  })
  Then(/^I can see the correct list of locations if I search based on a search keyword for the Location field$/,function(){
    irmIPDetailsActions.verifyItemLocation();
  })
  Then(/^I can edit the Location by clicking on the dropdown button for the Location field$/,function(){
    irmIPDetailsActions.editLocationByDropdown();
    irmIPDetailsActions.verifyItemLocation();
  })
  Then(/^I am restricted to edit an Inventory Item with an empty Location field$/,function(){
    irmIPDetailsActions.editItemLocationByEmpty();
    irmIPDetailsActions.verifyEmptyItemLocation();
  })
  Then(/^I can edit the Equipment field based on a search keyword in the Edit Inventory Item$/,function(){
    irmIPDetailsActions.editEquipmentField();
  })
  Then(/^I can see the correct list of equipment if I search based on a search keyword for the Equipment field$/,function(){
    irmIPDetailsActions.verifyItemEquipment();
  })
  Then(/^I can edit the Received Date field by clicking on the date chooser$/,function(){
    irmIPDetailsActions.editReceivedDateField();
  })
  Then(/^I can view that the value of the Received Date field in the Inventory Item is automatically formatted to MM-DD-YYYY$/,function(){
    irmIPDetailsActions.verifyReceivedDateFormat();
  })
  Then(/^I can directly edit the value in the Received Date field$/,function(){
    irmIPDetailsActions.editDirectlyRD();
  })
  Then(/^I am restricted to edit an Inventory Item with an empty Received Date field$/,function(){
    irmIPDetailsActions.emptyRDField();
    irmIPDetailsActions.verifyEmptyEDError();
  })
  Then(/^I can fill the Purchase Price field$/,function(){
    irmIPDetailsActions.enterPurchasePrice();
  })
  Then(/^I can edit the Note field$/,function(){
    irmIPDetailsActions.editNoteField();
  })
  Then(/^I see Save and Restore buttons in the Edit Inventory Item$/,function(){
    irmIPDetailsActions.editReceivedDateField();
    irmIPDetailsActions.verifybtnSaveAndRestore();
  })
  Then(/^I can click the Restore button to reset the data of Inventory Item$/,function(){
    irmIPDetailsActions.clickBtnRestore();
    irmIPDetailsActions.verifyChangesRestored();
  })
  Then(/^I can click the Save button to save the updated details of Inventory Item$/,function(){
    irmIPDetailsActions.editNoteField();
    irmIPDetailsActions.clickBtnSave();
  })
  Then(/^I can see the changes are reflected in the Inventory Item, and the details are successfully updated$/,function(){
    irmIPDetailsActions.verifyINUpdated();
  })
  Then(/^I can see the RMA Fields$/,function(){
    irmIPDetailsActions.verifyRMAFields();
  })
  Then(/^I can see the Status change to Accepted from Created$/,function(){
    irmIPDetailsActions.verifyStatusGetChanged('Accepted');
  })
  Then(/^I see Return Date and Return Tracking Number fields are enabled after entering the RMA Number$/,function(){
    irmIPDetailsActions.verifyRDandRTNenabled();
  })
  Then(/^I can see the Status change to Returned from Accepted$/,function(){
    irmIPDetailsActions.verifyStatusGetChanged('Returned');
  })
  Then(/^I can see the Status change to Shipped from Returned$/,function(){
    irmIPDetailsActions.verifyStatusGetChanged('Shipped');
  })
  Then(/^I can see the Arrow icon in the Returned Tracking Number and Shipped Tracking Number fields$/,function(){
    irmIPDetailsActions.verifyArrowRTNandSTN();
  })
  Then(/^I can see the Location field is enabled$/,function(){
    irmIPDetailsActions.verifyLocationFieldEnabled();
  })
  Then(/^I can sort the list in the RMA table$/,function(){
    irmIPDetailsActions.sortTheRMAByStatus();
  })
  Then(/^I Reopen the created RMA$/,function(){
    irmIPDetailsActions.reopenCreatedRMA();
  })
  Then(/^I can search for the location in the Location field$/,function(){
    irmIPDetailsActions.searchLocations();
    irmIPDetailsActions.verifyLocationListed();
  })
  Then(/^I can select the location by clicking on the dropdown button for the Location field$/,function(){
    irmIPDetailsActions.clickAndSelectLocation();
  })
  Then(/^I see Save and Cancel buttons are enabled after entering the Shipped Tracking Number$/,function(){
    //irmIPDetailsActions.clearSelectedLocation();
    irmIPDetailsActions.verifyRMASaveButtonEnabled();
    irmIPDetailsActions.verifyRMACancelButtonEnabled();
  })
  Then(/^I can see the created RMA is reflected in the RMA card$/,function(){
    irmIPDetailsActions.verifyRMAgetCreated();
  })
  Then(/^I can see the Create RMA button is disabled when there is an open RMA in the RMA card$/,function(){
    irmIPDetailsActions.verifyCreateRMANotPresent();
  })
  Then(/^I can see the Status change to Complete from Shipped$/,function(){
    irmIPDetailsActions.verifyStatusGetChanged('Complete');
  })
  Then(/^I can see the Create RMA button is enabled when there is a Complete RMA in the RMA card$/,function(){
    irmIPDetailsActions.clickBtnSaveRMA();
    //irmIPDetailsActions.closeOpenedRMA();
    irmIPDetailsActions.verifyCreateRMAEnabled();
  })
  Then(/^I can update the Date field by choosing a new date using the date chooser$/,function(){
    irmIPDetailsActions.updateRMADate();
  })
  Then(/^I can update the Vendor field by selecting a vendor from the list when there is no PO associated with that Inventory$/,function(){
    irmIPDetailsActions.updateVendor();
  })
  Then(/^I am restricted to update the RMA Number field if it is empty$/,function(){
    irmIPDetailsActions.emptyRMAError();
    irmIPDetailsActions.verifyEmptyRMAError();
  })
  Then(/^I can edit and update the RMA Number field with a valid RMA number$/,function(){
    irmIPDetailsActions.updateRMANumber();
  })
  Then(/^I am restricted to update the empty Return Date field$/,function(){
    irmIPDetailsActions.updateEmptyRD();
    irmIPDetailsActions.verifyEmptyRDError();
  })
  Then(/^I can update the Return Date field by choosing a new date using the date chooser$/,function(){
    irmIPDetailsActions.updateRD();
  })
  Then(/^I am restricted to update the empty Return Tracking Number field$/,function(){
    irmIPDetailsActions.updateEmptyRTN();
    irmIPDetailsActions.verifyEmptyRTNError();
  })
  Then(/^I can update the Return Tracking Number field with a valid tracking number$/,function(){
    irmIPDetailsActions.updateRTN();
  })
  Then(/^I am restricted to update the empty Shipped Date field$/,function(){
    irmIPDetailsActions.updateEmptySD();
    irmIPDetailsActions.verifyEmptySDError();
  })
  Then(/^I can update the Shipped Date field by choosing a new date using the date chooser$/,function(){
    irmIPDetailsActions.updateSD();
  })
  Then(/^I am restricted to update the empty Shipped Tracking Number field$/,function(){
    irmIPDetailsActions.updateEmptySTN();
    irmIPDetailsActions.verifyEmptySTNError();
  })
  Then(/^I can update the Shipped Tracking Number field with a valid tracking number$/,function(){
    irmIPDetailsActions.updateSTN();
  })
  Then(/^I can see the Save and Restore buttons enabled after making the updates$/,function(){
    irmIPDetailsActions.clickAndSelectLocation();
    irmIPDetailsActions.verifyRMASaveButtonEnabled();
    irmIPDetailsActions.verifyRMARestoreButtonEnabled();
  })
  Then(/^I can the RMA Card details are updated successfully$/,function(){
    irmIPDetailsActions.verifyRMAupdated();
    irmIPDetailsActions.closeOpenedRMA();
  })
  Then(/^I can see the updated details reflected on the RMA card$/,function(){
    irmIPDetailsActions.verifyUpdatedRMAReflected();
  })
  Then(/^I see a table with columns including Date Type Details and App Users$/,function(){
    irmIPDetailsActions.verifyColumnsOfActivityLogs();
  })
  Then(/^I can sort the list in the table based on the columns$/,function(){
    irmIPDetailsActions.sortAndVerifyActivityCol();
  })
  Then(/^I can see a Search Bar where I can enter search keywords$/,function(){
    irmIPDetailsActions.verifyActivitySearchbar();
  })
  Then(/^I can search the history in the Search Bar based on the search keyword$/,function(){
    irmIPDetailsActions.searchActivity('CHANGE');
    irmIPDetailsActions.verifySearchResult('CHANGE');
  })
  Then(/^I can click on any activity logs in the table$/,function(){
    irmIPDetailsActions.clickOnFirstActivityLog();
  })
  Then(/^I can see the detailed history information displayed after clicking the logs$/,function(){
    irmIPDetailsActions.verifyHistoryChangeInformation();
  })
