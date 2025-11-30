const { Given, When, Then } = require("@cucumber/cucumber");
const equipmentActions = require('../support/IRMActions');
const Utils = require('../support/utils');


Given(/^I open Visp Web to Access IRM$/, function () {
	equipmentActions.openubow();
});

Given(/^I login with username and password to use IRM$/, function (credentials) {
	equipmentActions.loginToUBOW(credentials);
});

When(/^I fill in add site contact details$/, function (contactDetails) {
	equipmentActions.addContactDetails(contactDetails);
});

When(/^I save contact details$/, function () {
	equipmentActions.clickSaveContact();
});

When(/^I update contact details$/, function (contactDetails) {
	equipmentActions.UpdateContactDetails(contactDetails);
});
When(/^I click Update to save contact changes$/, function () {
	equipmentActions.saveContactDetails();
});

When(/^I navigate to IRM page$/, function () {
	equipmentActions.navigateToEquipment();
});

When(/^I navigate to Add ISP Site Location page$/, function () {
	equipmentActions.openAddSiteForm();
});

When(/^I click Docsis button of Infrastructure$/,function(){
	equipmentActions.clickOnDocsisbtn();
});

When(/^I click warehouse button of Infrastructure$/,function(){
	equipmentActions.clickOnWarehouseBtn();
})

When(/^I fill ISP Site Location details$/, function () {
	equipmentActions.enterSiteDetails();

});

When(/^I save the details$/, function () {
	equipmentActions.saveSiteDetails();
});

When(/^I save the equipment details$/, function () {
	equipmentActions.saveEquipmentDetails();
});

When(/^I select any site$/, function () {
	equipmentActions.selectFirstRecord();
});

When(/^I open newly added site$/, function () {
	equipmentActions.openAddSiteForm();
	equipmentActions.enterSiteDetails();
	equipmentActions.saveSiteDetails();
	equipmentActions.closeDockedSite();
	equipmentActions.searchNewlyAddedSite();
	equipmentActions.selectFirstRecord();
});

When(/^I change the (.*), (.*), (.*), (.*)$/, function (_location, elevation, address1, city) {
	equipmentActions.updateSiteDetails(_location, elevation, address1, city);
});

When(/^I navigate to Add Site Contact page$/, function () {
	equipmentActions.openSiteContactTab();
	//equipmentActions.clickAddNew();
});

When(/^I click Add Sub-Location$/, function () {

	equipmentActions.addSubLocation();

});

When(/^I go to edit a Site$/, function () {
	equipmentActions.clickEditSiteBtn();

});

When(/^I go to edit Contacts$/, function () {
	equipmentActions.clickEditSiteContactBtn();

});

When(/^I fill ISP Site Sub-Location details$/, function () {
	equipmentActions.fillSubLocationDetails();
});

When(/^I go to Add Equipment$/, function () {
	equipmentActions.selectEquipmentTab();
	equipmentActions.clickAddNewEquipment();
});

When(/^I fill equipment details$/, function () {
	equipmentActions.addEquipment();
});

When(/^I add another Equipment with same IP address$/, function () {
	equipmentActions.closeEditEquipment();
	equipmentActions.clickAddNewEquipment();
	equipmentActions.addEquipmentWithDuplicateIP();
});

When(/^I add another Equipment with same Radio and Ethernet MAC addressess$/, function () {
	equipmentActions.closeEditEquipment();
	equipmentActions.refreshPage();
	equipmentActions.selectEquipmentTab();
	equipmentActions.clickAddNewEquipment();
	equipmentActions.addEquipmentWithDuplicateMac();
});

When(/^I fill equipment details with Unique Ip Address$/, function () {
	equipmentActions.addEquipment();
});
When(/^I select Equipment Tab$/, function () {
	equipmentActions.selectEquipmentTab();
});
When(/^I select any Equipment profile$/, function () {
	equipmentActions.clickAddNewEquipment();
	equipmentActions.addEquipment();
	equipmentActions.saveSiteDetails();
	equipmentActions.closeEditEquipment();
	//equipmentActions.clickOnEquipmentSearch();
	//equipmentActions.typeInEquipmentSearch("Generic Phone");
	equipmentActions.SelectAnyEquipmentProfile();
});

When(/^I expanded dotted menu of any Equipment Item$/, function () {
	equipmentActions.clickDotMenuOfEquipmentItem();
});

When(/^I delete equipment by confirming pop-update$/, function () {
	equipmentActions.clickDeleteButton();
	equipmentActions.clickYesOfConfirmationButton();
});

When(/^I open add equipment dialog in Infrastructure drawer$/, function () {
	equipmentActions.clickAddEquipmentFromSite();
});

When(/^I close the Add Inventory item dialog$/, function () {
	equipmentActions.closeInventoryDialog();
});

When(/^I select any Inventory$/, function () {
	equipmentActions.selectFirstInventoryProfile();
});

When(/^I expand Inventory search Bar$/, function () {
	equipmentActions.selectInventoryTableView();
	equipmentActions.clickOnInventorySearchbar();
});

When(/^I type in Inventory search Bar (.*)$/, function (inventorysearch) {
	equipmentActions.enterInventoryToSearch(inventorysearch);
});

When(/^I select Inventory table Action Menu to choose (.*)$/, function (inventoryRowDensity) {
	equipmentActions.changeInventoryTableView(inventoryRowDensity);
});

When(/^I select Inventory table Action Menu to Enable Inline Editing$/, function () {
	equipmentActions.enableInventoryInlineEditing();
});

When(/^I Inline edit the inventory (.*),(.*) field$/, function (profile,sku) {
	equipmentActions.editInventoryInlineProfileSKu(profile,sku);
});

When(/^I save Inline edit changes$/, function () {
	equipmentActions.clickSaveInlineEditing();
});

When(/^I select Inventory table 3-Dot Menu to choose (.*)$/, function (inventoryView) {
	equipmentActions.changeInventoryView(inventoryView);
});

When(/^I open Add Inventory dialog$/, function () {
	equipmentActions.clickAddInventoryItem();
});

When(/^I fill Inventory item details (.*)$/, function (data) {
	equipmentActions.fillInventoryItemDetails(data);
});

When(/^I select any Inventory Item$/, function () {
	equipmentActions.selectFirstInventoryItem();
});

When(/^I Select an existing Inventory item from Inventory (.*)$/, function (data) {
	equipmentActions.clickAddInventoryItem();
	equipmentActions.fillInventoryItemDetails(data);
	equipmentActions.saveSiteDetails();
});

When(/^I open dotted menu$/, function () {
	equipmentActions.clickOnDottedInventoryMenu();
});

When(/^I click Create RMA button$/, function () {
	equipmentActions.clickOnCreateRMA();
});

When(/^I enter RMA details$/, function () {
	equipmentActions.addRMADetails();
});

When(/^I save the details of RMA$/, function () {
	equipmentActions.saveRMADetails();
});

When(/^I open add Purchase Orders dialog$/, function () {
	equipmentActions.clickOnAddPurchaseOrder();
});

When(/^I enter purchase order details$/, function () {
	equipmentActions.enterPurchaseOrderDetails('WR1101','Samsung');
});

When(/^I click Continue button$/, function () {
	equipmentActions.clickOnContinue();
});

When(/^I click Create PO button$/, function () {
	equipmentActions.clickOnCreateOrder();
});

When(/^I select any Purchase Order$/, function () {
	equipmentActions.clickOnAddPurchaseOrder();
	equipmentActions.enterPurchaseOrderDetails('WR1101','Samsung');
	equipmentActions.clickOnContinue();
	equipmentActions.clickOnCreateOrder();
	equipmentActions.openNewlyCreatedPO();
	//equipmentActions.closePODialog();
	//equipmentActions.selectAnyPurchaseOrder();
});

When(/^I click status option of Purchase Order$/, function () {
	equipmentActions.clickOnStatus();
});

When(/^I click Ordered option$/, function () {
	equipmentActions.clickOrderStatus();
});

When(/^I click yes on confimation pop-update$/, function () {
	equipmentActions.clickYesOfPopUp();
});

When(/^I select search Bar of Infrastructure Location$/, function () {
	equipmentActions.clickOnISsearchbar();
});

When(/^I type in Infrastructure Location search Bar (.*)$/, function (sitesearch) {
	equipmentActions.typeInISsearhbar(sitesearch);
});

When(/^I select Infrastructure Locations table Action Menu to choose (.*)$/, function (rowdensity) {
	equipmentActions.changeISRowDensity(rowdensity);
});

When(/^I select Infrastructure Locations table Action Menu to Enable Inline Editing$/, function () {
	equipmentActions.openAddSiteForm();//create new site as pre-req
	equipmentActions.enterSiteDetails();
	equipmentActions.saveSiteDetails();
	equipmentActions.closeDockedSite();
	equipmentActions.searchNewlyAddedSite();
	equipmentActions.enableInfrastructureInlineEditing();
});

When(/^I Inline edit the infrastructure Locations (.*), (.*), (.*), (.*) fields$/, function (address1,address2,city,zip) {
	equipmentActions.enterInfrastructureInlineData(address1,address2,city,zip);
});

When(/^I select Infrastructure Locations table 3-Dot Menu to choose (.*)$/, function (tableView) {
	equipmentActions.changeInfrastructureTableView(tableView);
});

When(/^Expand the Infrastructure relationship tree$/, function () {
	//equipmentActions.selectFirstRecord();
	equipmentActions.expandInfrastructureTree();
});

When(/^I defined PtP Equiment profile if its not defined$/, function () {
	equipmentActions.defineEquipmentProfilePtpType();
});

When(/^I add new site A with sub location$/, function () {
	equipmentActions.openAddSiteForm();
	equipmentActions.enterSiteDetails();
	equipmentActions.saveSiteDetails();
	//equipmentActions.explicitWait('7000');
	//equipmentActions.closeDockedSite();
	//equipmentActions.searchNewlyAddedSite();
	//equipmentActions.selectFirstRecord();
	// equipmentActions.clickEditSiteBtn();
	// equipmentActions.addSubLocation();
	// equipmentActions.fillSubLocationDetails();
	// equipmentActions.saveSiteDetails();
	//equipmentActions.explicitWait('2000');
	//equipmentActions.verifySiteSubLocationAdded();
	//equipmentActions.explicitWait('2000');
});

When(/^I add new site B with sub location$/, function () {
	equipmentActions.openAddSiteForm();
	equipmentActions.enterSiteDetails();
	equipmentActions.saveSiteDetails();
	//equipmentActions.explicitWait('7000');
	equipmentActions.closeDock();
	equipmentActions.refreshPage();
	equipmentActions.searchNewlyAddedSite();
	//equipmentActions.selectFirstRecord();
	// equipmentActions.clickEditSiteBtn();
	// equipmentActions.addSubLocation();
	// equipmentActions.fillSubLocationDetails();
	// equipmentActions.saveSiteDetails();
	//equipmentActions.explicitWait('2000');
	//equipmentActions.closeDock();
	//equipmentActions.explicitWait('2000');
});

When(/^I add new Ptp type equipment to sublocation A$/, function () {
	//equipmentActions.selectFirstRecord();
	equipmentActions.addPtpSiteAEquipment();
	equipmentActions.keepSiteADetails();
	equipmentActions.closeDock();
	browser.pause(2000);
});

When(/^I add new Ptp type equipment to sublocation B$/, function () {
	equipmentActions.selectFirstRecord();
	equipmentActions.addPtpSiteAEquipment();
	equipmentActions.keepSiteBDetails();
	//equipmentActions.closeDock();
	browser.pause(2000);
});

When(/^I select any Interconnection$/, function () {
	equipmentActions.clickSiteInterConnections();
});

When(/^I edit and save Side A equipment and location details$/, function () {
	equipmentActions.closeSubDockOpened();
	equipmentActions.editSiteAEquipment();
});

When(/^I edit and save Side B equipment and location details$/, function () {
	equipmentActions.editSiteBEquipment();
});

When(/^I go to any Equipment Item$/, function () {
	equipmentActions.selectAnyEquipmentItem();
});

When(/^I change Equipment details (.*)$/, function (equipmentdetails) {
	equipmentActions.changeEquipmentDetails(equipmentdetails);
});

When(/^I navigate to Equipment Assembly$/, function () {
	equipmentActions.clickEquipmentAssembly();
});

When(/^I select copy assembly to create a copy of assembly$/, function () {
	equipmentActions.changeEquipmentAssemblyView('Tiles');
	equipmentActions.selectCopyAssembly();
});

When(/^I change Equipment data Unique fields$/, function () {
	equipmentActions.changeEquipmentAssemblyCopyField();
});

When(/^I expand Equipment search Bar$/, function () {
	equipmentActions.clickOnEquipmentSearch();
});

When(/^I type in Equipment search Bar (.*)$/, function (datatosearch) {
	equipmentActions.typeInEquipmentSearch(datatosearch);
});

When(/^I expand Equipment Assemblies search Bar$/, function () {
	equipmentActions.clickOnEquipmentSearch();
});

When(/^I type in Equipment Assemblies search Bar$/, function () {
	equipmentActions.typeInEquipmentAssemblySearch();
});

When(/^I select Equipment Assemblies table Action Menu to choose (.*)$/, function (tableview) {
	equipmentActions.changeEquipmentAssemblyTableView(tableview);
});

When(/^I select Equipment Assemblies table 3-Dot Menu to choose (.*)$/, function (changeview) {
	equipmentActions.changeEquipmentAssemblyView(changeview);
});

When(/^I select Equipment Assemblies table Action Menu to Enable Inline Editing$/, function () {
	equipmentActions.enableEquipmentAssemblyInlineEditing();
});

When(/^I Inline edit the Equipment Assembly Description field$/, function () {
	equipmentActions.inlineEditEquipmentAssemblyDescription();
});
	
When(/^I select Purchase Orders table Action Menu to choose (.*)$/, function (purchaseRowDensity) {
	equipmentActions.changePurchaseOrderTableView(purchaseRowDensity);
});

When(/^I select Purchase Orders table 3-Dot Menu to choose (.*)$/, function (purchaseView) {
	equipmentActions.changePurchaseView(purchaseView);
});

When(/^I fill Item details (.*), (.*), (.*), (.*) and (.*)$/, function (quantity,unitPrice,taxrate,shipping,other) {
	equipmentActions.updatePurchaseOrder(quantity,unitPrice,taxrate,shipping,other);
});

When(/^I click Save changes of docked Item$/, function () {
	equipmentActions.clickSaveChangesOfDocked();
});

When(/^I expand Purchase Orders search Bar$/, function () {
	equipmentActions.clickOnAddPurchaseOrder();//create pre-req data
	equipmentActions.enterPurchaseOrderDetails('WR1101','Samsung');
	equipmentActions.clickOnContinue();
	equipmentActions.clickOnCreateOrder();
	equipmentActions.clickOnPurchaseOrderSearchbar();
});

When(/^I type in Purchase Order search Bar (.*)$/, function (purchasesearch) {
	equipmentActions.enterPurchaseToSearch(purchasesearch);
});

When(/^I change the PO status and select Yes in confirmation prompt$/, function (statuses) {
		table = statuses.raw();
		for(var i=0; i< table.length; i++){
			equipmentActions.changeAndConfirmPoStatus(table[i][0]);
		}
});

When(/^I select Orderd or Partial or Completed Purchase Order$/, function () {
	equipmentActions.clickOnAddPurchaseOrder();//create pre-req data
	equipmentActions.enterPurchaseOrderDetails('WR1101','Samsung');
	equipmentActions.clickOnContinue();
	equipmentActions.clickOnCreateOrder();
	equipmentActions.closePODialog();
	browser.pause(1000);
	equipmentActions.selectAnyPurchaseOrder();
	equipmentActions.clickOnStatus();
	equipmentActions.clickOrderStatus();
	equipmentActions.clickYesOfPopUp();
	browser.pause(2000);
});

When(/^I expand the purchase order Item$/, function () {
	equipmentActions.expandPurchaseItem();
});

When(/^I fill the serial no. and Location of purchase order Item$/, function () {
	equipmentActions.filPurchaseItem();
});

When(/^I Receive purchase item$/, function () {
	equipmentActions.clickBtnPurchaseItemReceive();
});

When(/^I select Equipment table Action Menu to choose (.*)$/, function (tableview) {
	equipmentActions.selectEquipmentTab();
	equipmentActions.changeEquipmentTableView(tableview);
});

When(/^I select Equipment table 3-Dot Menu to choose (.*)$/, function (changeview) {
	equipmentActions.selectEquipmentTab();
	equipmentActions.changeEquipmentProfileView(changeview);
});

When(/^I select Equipment table Action Menu to Enable Inline Editing$/, function () {
	equipmentActions.selectEquipmentTab();
	equipmentActions.enableEquipmentProfileInlineEditing();
});

When(/^I Inline edit the Equiment summary and description fields$/, function () {
	equipmentActions.clickOnEquipmentSearch();//pre-req
	equipmentActions.typeInEquipmentSearch('LG TEST1');
	equipmentActions.inlineEditEquipmentProfileFields('LG TEST1');
});

//TA-762
When(/^I select All under Infrastructure locations$/, function () {
	equipmentActions.openAddSiteForm();//create new site as pre-req
	equipmentActions.enterSiteDetails();
	equipmentActions.saveSiteDetails();
	equipmentActions.closeDockedSite();
	equipmentActions.searchNewlyAddedSite();
	equipmentActions.DisableInfrastructureInlineEditing();
});
When(/^I click dot menu next to infrastructure location record in the table$/, function () {
	equipmentActions.clickDotMenuNextToILT();
});
When(/^I click dot menu next to infrastructure location record that is associated with equipment or inventory in the table$/, function () {
	equipmentActions.selectFirstRecord();
	equipmentActions.clickAddEquipmentFromSite();
	equipmentActions.addEquipment();
	equipmentActions.saveSiteDetails();
	equipmentActions.closeDock();
	browser.pause(2000);
});
When(/^I click dot menu next to infrastructure location record that is not associated with equipment or inventory in the table$/, function () {
	equipmentActions.selectFirstRecord();
	equipmentActions.getSiteEquipmentDetail();
	equipmentActions.closeDock();
	browser.pause(2000);
});
When(/^I click the Delete option next to infrastructure location record in the table$/, function () {
	equipmentActions.clickBtnDeleteSite();
});
When(/^I click on Yes in the confirmation prompt$/, function () {
	equipmentActions.clickBtnYes();
});
When(/^I click on No in the confirmation prompt$/, function () {
	equipmentActions.clickBtnYes();
});


Then(/^IRM Site Contacts should get added$/, function () {
	equipmentActions.verifyContactAddition();
	Utils.clearLocalStorage();
});

Then(/^IRM Site Contacts should get updated$/, function () {
	equipmentActions.verifyContactModification();
	Utils.clearLocalStorage();
});

Then(/^ISP Site Location should get added successfully$/, function () {
	equipmentActions.verifySiteLocationAdded();
	Utils.clearLocalStorage();
});

Then(/^I should get redirected to IRM page$/, function () {
	equipmentActions.verifyPageHeading();
	Utils.clearLocalStorage();
});

Then(/^I see cards$/, function (widgets) {
	equipmentActions.verifyWidgets(widgets);
	Utils.clearLocalStorage();
});

Then(/^I see four Tabs on Equipment page$/, function (tabs) {
	equipmentActions.verifyTabs(tabs);
	Utils.clearLocalStorage();
});

Then(/^I can see tabs based on infrastructure profile Docsis$/,function(){
	equipmentActions.verifyDocsisTab();
	Utils.clearLocalStorage();
})

Then(/^I can see tabs based on Infrastructure profile Test warehouse$/,function(){
	equipmentActions.clickOnWarehouseBtn();
	Utils.clearLocalStorage();
})

Then(/^Infrastucture should get updated$/, function () {
	equipmentActions.verifySiteLocationSaved();
	Utils.clearLocalStorage();
});

Then(/^Sub Location should added successfully$/, function () {
	equipmentActions.verifySiteSubLocationAdded();
	Utils.clearLocalStorage();
});

Then(/^I can see the equipment added successfully$/, function () {
	equipmentActions.verifyEquipmentAdded();
	Utils.clearLocalStorage();
});

Then(/^I can see validation error of duplicate IP address$/, function () {
	equipmentActions.duplicateIPAddressError();
	Utils.clearLocalStorage();
});

Then(/^I can see validation error of duplicate Radio and Ethernet MAC addressess$/, function () {
	equipmentActions.duplicateMacAddressError();
	Utils.clearLocalStorage();
});

Then(/^I can see Equipment item is deleted successfully$/, function () {
	equipmentActions.verifyEquipmentDeleted();
	Utils.clearLocalStorage();
});

Then(/^I can see the added equipment displayed in Site drawer$/, function () {
	equipmentActions.verifyEquipmentListedInSiteDrawer();
	Utils.clearLocalStorage();
});

Then(/^I can see the expected search result of Inventory profile (.*)$/, function (Invprofile) {
	equipmentActions.verifyInventorySearched(Invprofile);
	Utils.clearLocalStorage();
});

Then(/^I can see the sub-rows expanded and highlighted text for the matched items$/, function (dataToVerify) {
	equipmentActions.verifySubItemsOfAnInventory(dataToVerify);
	Utils.clearLocalStorage();
});

Then(/^Inventory table view should get updated to (.*)$/, function (tableView) {
	equipmentActions.verifyInventoryTableView(tableView);
	Utils.clearLocalStorage();
});

Then(/^Inventory (.*) should get changed$/, function (profileView) {
	equipmentActions.verifyInventoryProfileView(profileView);
	Utils.clearLocalStorage();
});

Then(/^I can see Inventory Inline Editing saved successfully$/, function () {
	equipmentActions.verifyInventoryInlineEditSaved();
	Utils.clearLocalStorage();
});

Then(/^I can see Inventory item added Successfully$/, function () {
	equipmentActions.verifyInventoryItemCreated();
	Utils.clearLocalStorage();
});

Then(/^I can see RMA Created Successfully$/, function () {
	equipmentActions.verifyRMACreated();
	Utils.clearLocalStorage();
});

Then(/^I can see Purchase order created Successfully$/, function () {
	equipmentActions.refreshPage();
	equipmentActions.gotoPOSection();
	equipmentActions.RestoreColumns();
	equipmentActions.verifyPurchaseOrderCreated();
	Utils.clearLocalStorage();
});

Then(/^I can see Purchase Order is updated successfully$/, function () {
	equipmentActions.verifyPurchaseOrderUpdated();
	Utils.clearLocalStorage();
});

Then(/^I can see the expected search result of Infrastructure Locations$/, function () {
	equipmentActions.verifyISsearchedSuccessfully();
	Utils.clearLocalStorage();
});

Then(/^Infrastructure Locations table row density should get changed to (.*)$/, function (rowdensity) {
	equipmentActions.verifyISRowDensityChanged(rowdensity);
	Utils.clearLocalStorage();
});

Then(/^I can see infrastructure Locations Inline Editing saved successfully$/, function () {
	equipmentActions.verifyINFSinlineEditing();
	Utils.clearLocalStorage();
});

Then(/^Infrastructure Locations view should get changed to (.*)$/, function (tableView) {
	equipmentActions.verifyINFSTableChanged(tableView);
	Utils.clearLocalStorage();
});

Then(/^I can see the Interconnections and Site Equiment$/, function () {
	equipmentActions.verifyInterConnectionAndSiteEquipment();
	Utils.clearLocalStorage();
});

Then(/^I can see the Interconnections Side A and Side B equipment and location details$/, function () {
	equipmentActions.verifySideASideBInterconnections();
	Utils.clearLocalStorage();
});

Then(/^I can see the updated details of Interconnections Side A and Side B equipment and location in overview$/, function () {
	equipmentActions.verifyUpdatedDetailsOfSiteAAndSiteB();
	Utils.clearLocalStorage();
});
	
Then(/^I can see the equipment updated successfully$/, function () {
	equipmentActions.verifyEquipmentUpdated();
	Utils.clearLocalStorage();
});

Then(/^I can see the new copy of selected assembly created successfully$/, function () {
	equipmentActions.verifyEquipmentAssemblyCopyCreated();
	Utils.clearLocalStorage();
});

Then(/^I can see the expected Equiment search successfully$/, function () {
	equipmentActions.verifyEquipmentSearched();
	Utils.clearLocalStorage();
});

Then(/^I can see the expected search result of Equiment Assemblies$/, function () {
	equipmentActions.verifyEquipmentAssemblySearched();
	Utils.clearLocalStorage();
});

Then(/^Equipment Assemblies table (.*) should get changed$/, function (tableView) {
	equipmentActions.verifyEquipmentAssemblyTableView(tableView);
	Utils.clearLocalStorage();
});

Then(/Equipment Assemblies view should get changed to (.*)$/, function (tableView) {
	equipmentActions.verifyEquipmentAssemblyView(tableView);
	Utils.clearLocalStorage();
});

Then(/I can see Equipment Assembly Inline Editing saved successfully$/, function () {
	equipmentActions.verifyInlineAssemblyEditedSuccessfully();
	Utils.clearLocalStorage();
});

Then(/^Purchase Order table view should get updated to (.*)$/, function (tableView) {
	equipmentActions.verifyPurchaseOrderTableView(tableView);
	Utils.clearLocalStorage();
});

Then(/^Purchase Orders table (.*) should get changed$/, function (tableView) {
	equipmentActions.verifyPurchaseOrderView(tableView);
	Utils.clearLocalStorage();
});

Then(/^I can see Purchase Order item is updated successfully$/, function () {
	equipmentActions.verifyPurchaseOrderItemUpdated();
	Utils.clearLocalStorage();
});

Then(/^I can see the expected search result of Purchase Orders$/, function () {
	equipmentActions.RestoreColumns();
	equipmentActions.verifyPOSearched();
	Utils.clearLocalStorage();
});

Then(/^I can see Purchase Order Status accordingly$/, function () {
	equipmentActions.verifyPOUpdatedStatus();
	Utils.clearLocalStorage();
});

Then(/^Purchase order Item should Received successfully$/, function () {
	equipmentActions.verifyPOItemReceived();
	Utils.clearLocalStorage();
});

Then(/^Equipment table (.*) should get changed$/, function (tableView) {
	equipmentActions.verifyEquipmentProfileTableView(tableView);
	Utils.clearLocalStorage();
});

Then(/Equipment view should get changed to (.*)$/, function (tableView) {
	equipmentActions.verifyEquipmentProfilesView(tableView);
	//Utils.clearLocalStorage();
});

Then(/^I can see Equipment Inline Editing saved successfully$/, function () {
	equipmentActions.verifyEquipmentProfileinlineEditing();
	Utils.clearLocalStorage();
});
//TA-762
Then(/^I should see the Delete option in the dropdown menu$/, function () {
	equipmentActions.verifyDeleteOptionsIsPresent();
	Utils.clearLocalStorage();
});
Then(/^I should see the Delete option is disabled$/, function () {
	equipmentActions.refreshPage();
	equipmentActions.searchNewlyAddedSite();
	equipmentActions.clickDotMenuNextToILT();
	equipmentActions.verifyDeleteOptionsIsDisabled();
	Utils.clearLocalStorage();
});
Then(/^I should see the Delete option is enabled$/, function () {
	equipmentActions.refreshPage();
	equipmentActions.searchNewlyAddedSite();
	equipmentActions.clickDotMenuNextToILT();
	equipmentActions.verifyDeleteOptionsIsEnabled();
	Utils.clearLocalStorage();
});
Then(/^I should see a confirmation prompt asking to confirm the deletion$/, function () {
	equipmentActions.verifyDeleteConfirmationContent();
	Utils.clearLocalStorage();
});
Then(/^I should see a confirmation prompt with Yes and No options$/, function () {
	equipmentActions.verifyDeleteConfirmationButton();
	Utils.clearLocalStorage();
});
Then(/^The infrastructure location should be deleted successfully$/, function () {
	equipmentActions.verifyDeleteSiteSuccessMessage();
	//Utils.clearLocalStorage();
});
Then(/^I should no longer see the deleted infrastructure location in the table$/, function () {
	equipmentActions.verifyDeltedSiteIsNotPresent();
	Utils.clearLocalStorage();
});
Then(/^The infrastructure location should not be deleted$/, function () {
	equipmentActions.verifyNoDeleteSiteMessage();
	//Utils.clearLocalStorage();
});
Then(/^I should still see the infrastructure location in the table$/, function () {
	equipmentActions.verifySiteIsPresent();
	Utils.clearLocalStorage();
});
Then(/^I should see a message (.*)$/, function (msg) {
	//equipmentActions.refreshPage();
	//equipmentActions.searchNewlyAddedSite();
	equipmentActions.clickDotMenuNextToILT();
	equipmentActions.hoverDeleteButton();
	equipmentActions.deleteTooltipMsg(msg);
	Utils.clearLocalStorage();
});
