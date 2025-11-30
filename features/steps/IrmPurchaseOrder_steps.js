const {Given, When, Then} = require("@cucumber/cucumber");
const irmPOActions = require('../support/IrmPurchaseOrderActions');
const Utils = require('../support/utils');
const IRMActions = require("../support/IRMActions");

  When(/^I go the Purchase Order section$/, function() {
	  irmPOActions.gotoPOSection();
  });
  When(/^I set List view of Purchase Order$/, function() {
	  irmPOActions.isTilesSelected();
    irmPOActions.RestoreColumns();
  });
  When(/^I click plus button to create a new Purchase Order$/, function() {
	  irmPOActions.clickPoPlushButton();
  });
  When(/^I click on any purchase order to Update the purchase order$/, function() {
	  irmPOActions.clickPoPlushButton();
    irmPOActions.enterPoPI();
    ////irmPOActions.enterPoVendor();
    irmPOActions.enterPoQty('1');
    irmPOActions.clickOnBtnContinue();
    irmPOActions.clickCreatePO();
    irmPOActions.clickClosePODialog();
    irmPOActions.browserRefresh();
    irmPOActions.gotoPOSection();
    irmPOActions.RestoreColumns();
    irmPOActions.changeColumns();
    irmPOActions.openFirstPO();
  });
  When(/^I am restricted to Archive Purchase Order when status is Created,Pending,Order,Partial and Rejected$/, function() {
    irmPOActions.openArchiveOption();
    irmPOActions.verifyArchiveOptionDisabled();
    irmPOActions.openFirstPO();
  });
  When(/^I change the Status of Purchase Order to Archive$/, function() {
	  irmPOActions.openArchiveOption();
    irmPOActions.changeStatusToArchieve();
    irmPOActions.clickYesOfPopUp();
  });
  When(/^I can enable Show Archived settings in order to displays the Archived POs$/, function() {
    irmPOActions.enableShowArchive();
  });
  When(/^I go to create purchase order drawer$/, function() {
    irmPOActions.clickPoPlushButton();
  });
  When(/^I can add multiple Profile Items in Create Purchase Order drawer$/, function() {
    irmPOActions.enterPoPI();
    irmPOActions.ClickAddMoreitems();
    irmPOActions.enterSecondPoPI();
    //irmPOActions.ClickAddMoreitems();
    //irmPOActions.enterThirdPoPI();
  });



  

  Then(/^I can see the PO# Item Name Vendor Date Ordered Last Update Status and Total columns for the purchase orders table$/, function() {
    irmPOActions.verifyPOcolumns();
  });
  Then(/^I can see Half and Full Card width options for Purchase Order section$/, function() {
	  irmPOActions.verifyHalfFullOptions();
  });
  Then(/^I can the see that card width displays as half view If I set Half Card width for Purchase Order section$/, function() {
	  irmPOActions.verifyPoCardWidthHalf();
  });
  Then(/^I can the see that card width displays as Full view If I set Full Card width for Purchase Order section$/, function() {
	  irmPOActions.verifyPoCardWidthFull();
  });
  Then(/^I can set Tiles or List view to Display for Purchase Order section$/, function() {
	  irmPOActions.changePurchaseView('List');
    irmPOActions.verifyPurchaseOrderView('List');
    irmPOActions.changePurchaseView('Tiles');
    irmPOActions.verifyPurchaseOrderView('Tiles');
  });
  Then(/^I can see the Hamburger Menu in table$/, function() {
	  irmPOActions.verifyPoHamburgerMenu();
  });
  Then(/^I can type in the Profile Item field to search profile I want to select from the available dropdown options$/,function(){
    irmPOActions.enterPoProfileToSearch();
  })
  Then(/^I can view an accurate list of profile item field dropdown options based on search keyword$/,function(){
    irmPOActions.verifyListOfPI();
  })
  Then(/^I am restricted from adding profile with an Profile Item field value that is not included in the available dropdown options$/,function(){
    irmPOActions.validateInvalidPI();
    irmPOActions.verifyIvalidPIError();
  })
  Then(/^I am restricted from continue Create Purchase Order with an empty profile item field$/,function(){
    irmPOActions.verifyBtnContinueDisabled();
  })
  Then(/^I can type in the Vendor field to search vendor I want to select from the available dropdown options$/,function(){
    irmPOActions.enterPoPI();
    irmPOActions.enterVendorToSearch();
  })
  Then(/^I can view an accurate list of vendor field dropdown options based on search keyword$/,function(){
    irmPOActions.verifyListOfVendors();
  })
  Then(/^I am restricted from adding profile with an Vendor field value that is not included in the available dropdown options$/,function(){
    irmPOActions.validateInvalidVendor();
    irmPOActions.verifyIvalidVendorError();
  })
  Then(/^I am restricted from continue Create Purchase Order with an empty Vendor field$/,function(){
    irmPOActions.verifyBtnContinueDisabled();
  })
  Then(/^I am restricted from continue Create Purchase Order with an empty Quantity field$/,function(){
    irmPOActions.enterPoPI();
    irmPOActions.enterPoVendor();
    irmPOActions.enterPoQty('');
    irmPOActions.verifyBtnContinueDisabled();
  })

  Then(/^I can set Profile Item Vendor and Quantity to proceed$/,function(){
    irmPOActions.enterPoPI();
    irmPOActions.enterPoVendor();
    irmPOActions.enterPoQty('2');
  })
  Then(/^I can see the Add buton for add multiple items to create purchase order$/,function(){
    irmPOActions.verifybtnAddMoreItems();
  })
  Then(/^I can see Continue and Cancel button after filling all required details$/,function(){
    irmPOActions.verifybtnContinue();
    irmPOActions.verifybtnCancel();
  })
  Then(/^I can click on Continue button to open Purchase Order Summary page$/,function(){
    irmPOActions.clickOnBtnContinue();
    irmPOActions.verifyPOSummaryPage();
  })
  Then(/^I can see the Back button to go back to the Items page$/,function(){
    irmPOActions.verifybtnBack();
  })
  Then(/^I can see PO# and Date in Purchase Order Summary$/,function(){
    irmPOActions.verifyPONumber();
    irmPOActions.verifyPODate();
  })
  Then(/^I can see the vendor Name and Address in Vendor Card$/,function(){
    irmPOActions.verifyVendor();
    irmPOActions.verifyVendorAddress();
  })
  Then(/^I can see the Ship to Name and Address in Ship To Card$/,function(){
    irmPOActions.verifyShipTo();
    irmPOActions.verifyShipToAddress();
  })
  Then(/^I can Item#, Name, Quantity, Unit Price, Tax Rate and Total columns in Purchase Order Summary$/,function(){
    irmPOActions.verifyItemNumber();
    irmPOActions.verifyPOName();
    irmPOActions.verifyQty();
    irmPOActions.verifyUnitPrice();
    irmPOActions.verifyTaxRate();
    irmPOActions.verifyPoTotal();
  })
  Then(/^I click to fill the value in Unit Price, Tax Rate, Shipping and Other columns in Purchase Order Summary$/,function(){
    irmPOActions.inputUP();
    irmPOActions.inputTR();
    irmPOActions.inputShipping();
    irmPOActions.inputOther();
  })
  Then(/^I Click on Create PO button to create purchase order$/,function(){
    irmPOActions.clickCreatePO();
    irmPOActions.clickClosePODialog();
  })
  Then(/^I can see newly Purchase Order with Created status in purchase order list$/,function(){
    irmPOActions.changeColumns();
    irmPOActions.verifyPoGetCreated();
  })
  Then(/^I can see the Status PO# Date$/,function(){
    irmPOActions.verifyPODetails();
  })
  Then(/^I can update the PO status to (.*)$/,function(orderStatus){
    irmPOActions.clickOnStatus();
    irmPOActions.clickOrderStatus(orderStatus);
  })
  Then(/^I can see the popup when I update the status of purchase order$/,function(){
    irmPOActions.clickYesOfPopUp();
  })
  Then(/^I click on Add Item button$/,function(){
    irmPOActions.clickOnBtnAddItem();
  })
  Then(/^I can set Profile Item Vendor and Quantity to proceed for subItem$/,function(){
    irmPOActions.updateVendorQty();
  })
  Then(/^I can fill value of Unit Price Tax Rate Shipping and Other columns to add Item$/,function(){
    irmPOActions.inputItemUP(3);
    irmPOActions.inputItemTR(4);
    irmPOActions.inputItemShipping(5);
    irmPOActions.inputItemOther(6);
  })
  Then(/^I click on Save Changes button to add new items$/,function(){
    irmPOActions.clickOnBtnSaveChanges();
  })
  Then(/^I can see newly added item in Purchase Order Drawer$/,function(){
    irmPOActions.verifyNewItemAdded();
  })
  Then(/^I can change value of Unit Price by clicking on it$/,function(){
    irmPOActions.inputItemUP(4);
  })
  Then(/^I can change value of Tax rate by clicking on it$/,function(){
    irmPOActions.inputItemTR(5);
  })
  Then(/^I can change value of Shipping by clicking on it$/,function(){
    irmPOActions.inputItemShipping(6);
  })
  Then(/^I can change value of Other by clicking on it$/,function(){
    irmPOActions.inputItemOther(7);
  })
  Then(/^I can see correct total value in Total Column$/,function(){
    irmPOActions.verifyTotalValue();
  })
  Then(/^I can enter invoice in Invoice ID field$/,function(){
    irmPOActions.clickOnBtnSaveChanges();
    irmPOActions.clickClosePODialog();
    irmPOActions.openFirstPO();
    irmPOActions.inputInvoiceID();
  })
  Then(/^I can fill Note field in Purchase order drawer$/,function(){
    irmPOActions.fillNoteField();
  })
  Then(/^I can add more note field by clicking on add button$/,function(){
    irmPOActions.btnAddMoreNote();
    irmPOActions.fillSecondNoteField();
  })
  Then(/^I can save all the changes$/,function(){
    irmPOActions.clickOnBtnSaveChanges();
  })
  Then(/^I can see Serial No. Equipment Profile and Location fields to receive the Inventory Item while expanding Purchase Item$/,function(){
    irmPOActions.expandPurchaseItem();
    irmPOActions.verifyPOItems();
  })
  Then(/^I can see Equipment Profile dropdown disappeared from all the item rows of purchase order when I check the Same Equipment Profile$/,function(){
    irmPOActions.checkSameEquipmentProfile();
  })
  Then(/^I can fill the serial no. in Serial No. field$/,function(){
    irmPOActions.fillSerialNo();
  })
  Then(/^I can click Receive button$/,function(){
    irmPOActions.filPurchaseItem();
    irmPOActions.inputProfileLocation();
    irmPOActions.clickBtnPurchaseItemReceive();
  })
  Then(/^I can see the prompt with options PartiallyReceive Inventory and Create New PO For The Missing Items$/,function(){
    irmPOActions.verifyReceivePrompts();
  })
  Then(/^I select PartiallyReceive Inventory$/,function(){
    irmPOActions.selectPartialReceive();
  })
  Then(/^The PO status will become Partial$/,function(){
    irmPOActions.clickClosePODialog();
    irmPOActions.openFirstPO();
    irmPOActions.verifyPartialStatus();
  })
  Then(/^I can see SKU when click on Purchase Order$/, function() {
	  irmPOActions.verifySKU();
  });
  Then(/^I can see that 1 populates in QTY as default value$/, function() {
	  irmPOActions.verifyQTYDefaultValue();
  });
  Then(/^I can fill Unit Price upto 3 decimal points when Create or Edit Purchase Order$/, function() {
	  irmPOActions.fillUnitPriceTo3Decimal();
  });
  Then(/^I can Dock In or Out Purchase Order from Purchase Order Table$/, function() {
	  irmPOActions.dockIntPO();
    irmPOActions.verifyPODockedIn();
    irmPOActions.dockOutPO();
  });
  Then(/^I can see Microservice drawer gets opens when Dock Out Purchase Order drawer other than IRM page$/, function() {
	  irmPOActions.dockOutPOOtherthanIRM();
  });
  Then(/^I can see Purchase Order status is changed as Archived successfully$/, function() {
	  irmPOActions.verifyPoStatusChangedToArchive();
  });
  Then(/^I can disable Show Archived settings in order to hide the Archived PO$/, function() {
	  irmPOActions.DisabledShowArchive();
    irmPOActions.verifyArchivedStatusDoNotShow();
  });
  Then(/^I can see Vendor list populates based on selecting Item in create purchase order drawer$/, function() {
	  irmPOActions.verifyVendorList();
  });
  Then(/^I can see Preferred Vendor prepopulated after selecting the Profile item when Create Purchase Order$/, function() {
	  irmPOActions.verifyVendorList();
  });
  Then(/^I can see SKU Profile when Create Purchase Order$/, function() {
    irmPOActions.clickOnBtnContinue();
	  irmPOActions.verifySKUItem();
  });
  Then(/^I can see SKU in Purchase Order Summary drawer$/, function() {
	  irmPOActions.verifySKUItem();
  });
