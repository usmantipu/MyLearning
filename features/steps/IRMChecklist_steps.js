const {Given, When, Then} = require("@cucumber/cucumber");
const irmChecklistActions = require('../support/IRMChecklistActions');
const Utils = require('../support/utils');


When(/^I navigate to IRM after login$/, function() {
    irmChecklistActions.nevigateToIRMArea();
});
When(/^I add an Infrastructure Location$/, function() {
    irmChecklistActions.addInfrastructureLocation();
});
When(/^I select an Infrastructure Location$/, function() {
    irmChecklistActions.selectInfrastructureLocation();
});
When(/^I edit an Infrastructure Location$/, function() {
    irmChecklistActions.editInfrastructureLocation();
});
When(/^I add a Sub-Location$/, function() {
    irmChecklistActions.addSubLocation();
});
When(/^I select a sub-Location$/, function() {
    irmChecklistActions.selectSubLocation();
});
When(/^I edit a Sub-Location$/, function() {
    irmChecklistActions.editSubLocation();
});
When(/^I add Site Contacts$/, function() {
    irmChecklistActions.addContact();
});
When(/^I select the Site Contacts$/, function() {
    irmChecklistActions.selectContact();
});
When(/^I edit the Site Contacts$/, function() {
    irmChecklistActions.editContact();
});
When(/^I delete the Site Contacts$/, function() {
    irmChecklistActions.deleteContact();
});
When(/^I delete an Infrastructure Location$/, function() {
    irmChecklistActions.deleteInfrastructureLocation();
});
When(/^I delete a Sub-Location$/, function() {
    irmChecklistActions.deleteSubLocation();
});
When(/^I add an Inventory Item$/, function() {
    irmChecklistActions.addInventoryItem();
});
When(/^I select Inventory Profile$/, function() {
    irmChecklistActions.selectInventoryItem();
});
When(/^I edit an Inventory Item$/, function() {
    irmChecklistActions.editInventoryItem();
});
When(/^I create an RMA for an Inventory Item$/, function() {
    irmChecklistActions.createRMAInventoryItem();
});
When(/^I select the RMA History from Activity Log$/, function() {
    irmChecklistActions.selectRMAHistory();
});
When(/^I select the RMA$/, function() {
    irmChecklistActions.selectRMA();
});
When(/^I update the RMA for an Inventory Item$/, function() {
    irmChecklistActions.updateRMA();
});
When(/^I delete an Inventory Item$/, function() {
    irmChecklistActions.deleteInventoryItem();
});
When(/^I nevigate to the Equipment List Profiles$/, function() {
    irmChecklistActions.nevigateToEquipmentListProfiles();
});
When(/^I add Equipment$/, function() {
    irmChecklistActions.addEquipment();
});
When(/^I select Equipment$/, function() {
    irmChecklistActions.selectEquipment();
});
When(/^I edit Equipment$/, function() {
    irmChecklistActions.editEquipment();
});
When(/^I add a Child using Existing Equipment$/, function() {
    irmChecklistActions.addChild();
});
When(/^I delete an Equipment Item$/, function() {
    irmChecklistActions.deleteEquipment();
});
When(/^I nevigate to the Equipment Assemblies$/, function() {
    irmChecklistActions.nevigateToEquipmentAssemblies();
});
When(/^I copy an Assembly$/, function() {
    irmChecklistActions.copyAssembly();
});
When(/^I select Existing Equipment Assembly$/, function() {
    irmChecklistActions.selectAssembly();
});
When(/^I edit an Assembly$/, function() {
    irmChecklistActions.editAssembly();
});
When(/^I nevigate to the Purchase Order$/, function() {
    irmChecklistActions.nevigateToPurchaseOrder();
});
When(/^I create a Purchase Order$/, function() {
    irmChecklistActions.createPurchaseOrder();
});
When(/^I select the Purchase Order$/, function() {
    irmChecklistActions.selectPurchaseOrder();
});
When(/^I edit a Purchase Order$/, function() {
    irmChecklistActions.editPurchaseOrder();
});
When(/^I select the Ordered Purchase Order$/, function() {
    irmChecklistActions.selectOrderedPurchaseOrder();
});
When(/^I receive an Inventory Item from the Purchase Order$/, function() {
    irmChecklistActions.receivePurchaseOrder();
});
When(/^I select the completed Purchase Order$/, function() {
    irmChecklistActions.selectCompletedPurchaseOrder();
});
When(/^I archive a Purchase Order$/, function() {
    irmChecklistActions.archivePurchaseOrder();
});


Then(/^I should be on the IRM Page$/, function() {
    irmChecklistActions.verifyIRMArea();
    Utils.clearLocalStorage();
});
Then(/^I can see the Infrastructure Location List$/, function() {
    irmChecklistActions.verifyInfrastructureLocationList();
    Utils.clearLocalStorage();
});
Then(/^I can see infrastructure location added successfully$/, function() {
    irmChecklistActions.verifyAlertMsg('Added Site Location successfully');
    Utils.clearLocalStorage();
});
Then(/^I can see infrastructure location edited successfully$/, function() {
    irmChecklistActions.verifyAlertMsg('Updated Site Location successfully');
    Utils.clearLocalStorage();
});
Then(/^I can see Sub-Location added successfully$/, function() {
    irmChecklistActions.verifyAlertMsg('Site Sub-location was added successfully.');
    Utils.clearLocalStorage();
});
Then(/^I can see Sub-Location edited successfully$/, function() {
    irmChecklistActions.verifyAlertMsg('Site Sub-location was updated successfully.');
    Utils.clearLocalStorage();
});
Then(/^I can see Site Contacts added successfully$/, function() {
    irmChecklistActions.verifyAlertMsg('Updated Site Contact successfully');
    Utils.clearLocalStorage();
});
Then(/^I can see Site Contacts edited successfully$/, function() {
    irmChecklistActions.verifyAlertMsg('Updated Site Contact successfully');
    Utils.clearLocalStorage();
});
Then(/^I can see Site Contacts deleted successfully$/, function() {
    irmChecklistActions.verifyAlertMsg('Deleted Successfully');
    Utils.clearLocalStorage();
});
Then(/^I can see Infrastructure Location deleted successfully$/, function() {
    irmChecklistActions.verifyAlertMsg('Deleted Infrastructure Location successfully');
    Utils.clearLocalStorage();
});
Then(/^I can see Sub-Location deleted successfully$/, function() {
    irmChecklistActions.verifyAlertMsg('Deleted Infrastructure Sub-location successfully.');
    Utils.clearLocalStorage();
});
Then(/^I can see the Inventory List Profiles$/, function() {
    irmChecklistActions.verifyInventiryListProfiles();
    Utils.clearLocalStorage();
});
Then(/^I can see Inventory Item added successfully$/, function() {
    irmChecklistActions.verifyAlertMsg('Added Inventory Item successfully');
    Utils.clearLocalStorage();
});
Then(/^I can see Inventory Item edited successfully$/, function() {
    irmChecklistActions.verifyAlertMsg('Successfully updated inventory item');
    Utils.clearLocalStorage();
});
Then(/^I can see RMA for the Inventory Item created successfully$/, function() {
    irmChecklistActions.verifyAlertMsg('Successfully created RMA for the inventory item');
    Utils.clearLocalStorage();
});
Then(/^I can see the RMA History from Activity Log$/, function() {
    irmChecklistActions.verifyRMAHistory();
    Utils.clearLocalStorage();
});
Then(/^I can see RMA for the Inventory Item updated successfully$/, function() {
    irmChecklistActions.verifyAlertMsg('Successfully updated RMA for the inventory item');
    Utils.clearLocalStorage();
});
Then(/^I can see the Inventory Item deleted successfully$/, function() {
    irmChecklistActions.verifyAlertMsg('The inventory item has been deleted successfully.');
    Utils.clearLocalStorage();
});
Then(/^I should be able to view the Equipment List Profiles$/, function() {
    irmChecklistActions.verifyEquipmentListProfiles();
    Utils.clearLocalStorage();
});
Then(/^I can see Equipment added successfully$/, function() {
    irmChecklistActions.verifyAlertMsg('Added Equipment successfully');
    Utils.clearLocalStorage();
});
Then(/^I can see Equipment edited successfully$/, function() {
    irmChecklistActions.verifyEquipmentEditedSuccessfully();
    Utils.clearLocalStorage();
});
Then(/^I should be able to add the Child using Existing Equipment$/, function() {
    irmChecklistActions.verifyAlertMsg('Added Site Location successfully');
    Utils.clearLocalStorage();
});
Then(/^I can see Equipment deleted successfully$/, function() {
    irmChecklistActions.verifyAlertMsg('The equipment item has been deleted successfully.');
    Utils.clearLocalStorage();
});
Then(/^I should be able to view Equipment Assemblies$/, function() {
    irmChecklistActions.verifyEquipmentAssemblies();
    Utils.clearLocalStorage();
});
Then(/^I can see Assembly copied successfully$/, function() {
    irmChecklistActions.verifyAlertMsg('Copied Equipment Assembly successfully');
    Utils.clearLocalStorage();
});
Then(/^I can see Assembly edited successfully$/, function() {
    irmChecklistActions.verifyEquipmentEditedSuccessfully();
    Utils.clearLocalStorage();
});
Then(/^I can see Purchase Order created successfully$/, function() {
    irmChecklistActions.verifyAlertMsg('Created Purchase Order successfully.');
    Utils.clearLocalStorage();
});
Then(/^I can see Purchase Order edited successfully$/, function() {
    irmChecklistActions.verifyAlertMsg('Updated Purchase Order status successfully');
    Utils.clearLocalStorage();
});
Then(/^I can see Inventory Item from the Purchase Order received successfully$/, function() {
    irmChecklistActions.verifyAlertMsg('Received');
    Utils.clearLocalStorage();
});
Then(/^I can see Purchase Order archived successfully$/, function() {
    irmChecklistActions.verifyAlertMsg('Purchase order archived successfully');
    Utils.clearLocalStorage();
});