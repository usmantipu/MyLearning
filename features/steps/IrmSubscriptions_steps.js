const {Given, When, Then} = require("@cucumber/cucumber");
const irmSubsActions = require('../support/IrmSubscriptionsActions');
const Utils = require('../support/utils');

When(/^I navigate to the Infrastructure Location Table$/, () => {
    irmSubsActions.navigateToInfrastructureLocationTable();
});
When(/^I click on the plus button to add Infrastructure Location$/, () => {
    irmSubsActions.clickPlusIconToAddInfrastructureLocation();
});
When(/^I fill all the required fields$/, () => {
    irmSubsActions.fillInfrastructureLocationForm();
});
When(/^I click on the Save button$/, () => {
    irmSubsActions.clickSaveButton();
});
When(/^I open existing Infrastructure Location$/, () => {
    irmSubsActions.clickPlusIconToAddInfrastructureLocation();
    irmSubsActions.fillInfrastructureLocationForm();
    irmSubsActions.clickSaveButton();
    irmSubsActions.closeDockedSite();
    irmSubsActions.clickOnExistingInfrastructureLocation();
});
When(/^I click on the edit button$/, () => {
    irmSubsActions.clickEditButton();
});
When(/^I click on Add Sub-Location button$/, () => {
    irmSubsActions.clickAddSubLocation();
});
When(/^I fill all the required fields of Sub-location$/, () => {
    irmSubsActions.fillSubLocationForm();
});
When(/^I open an existing Sub-Location$/, () => {
    irmSubsActions.clickAddSubLocation();
    irmSubsActions.fillSubLocationForm();
    irmSubsActions.clickSaveButton();
    //irmSubsActions.closeSubSite();
    //irmSubsActions.openExistingSubLocation();
});
When(/^I update the required fields of Sub-Location$/, () => {
    irmSubsActions.updateSubLocationField();
});
When(/^I hover the mouse over an Infrastructure Location$/, () => {
    irmSubsActions.clickPlusIconToAddInfrastructureLocation();
    irmSubsActions.fillInfrastructureLocationForm();
    irmSubsActions.clickSaveButton();
    irmSubsActions.closeDockedSite();
    irmSubsActions.hoverOverInfrastructureLocation();
});
When(/^I click on the three dots menu of Infrastructure Location$/, () => {
    irmSubsActions.clickThreeDotsMenuForIR();
});
When(/^I click on the delete button$/, () => {
    irmSubsActions.clickDeleteButton();
});
When(/^I click on Yes button of the confirmation dialog$/, () => {
    irmSubsActions.clickYesOnDeleteConfirmation();
});
When(/^I click on the edit contact button$/, () => {
    irmSubsActions.clickEditContactButton();
});
When(/^I click on Add Contact button$/, () => {
    irmSubsActions.clickAddContactButton();
});
When(/^I fill all the required fields to add contact$/, (contactDetails) => {
    irmSubsActions.fillAllRequiredFields(contactDetails);
});
When(/^I click on the Save button to add contact$/, () => {
    irmSubsActions.clickOnSaveContact();
});
When(/^I update the fields of the contact$/, (contactDetails) => {
    irmSubsActions.updateContactFields(contactDetails);
});
When(/^I click on the Update button to update contact details$/, () => {
    irmSubsActions.clickUpdateButton();
});
When(/^I hover the mouse over the contact details$/, () => {
    irmSubsActions.closeEditContact();
    irmSubsActions.hoverOnContactDetails();
});
When(/^I click on the delete button of contact card$/, () => {
    irmSubsActions.clickOnDeleteContactButton();
});
When(/^I navigate to the Inventory Profile table$/, () => {
    irmSubsActions.navigateToInventoryProfileTable();
});
When(/^I click on the plus button to add Inventory$/, () => {
    irmSubsActions.clickAddInventoryButton();
});
When(/^I fill all the required fields to add Inventory$/, () => {
    irmSubsActions.fillRequiredInventoryFields();
});
When(/^I open the existing Inventory Profile$/, () => {
    irmSubsActions.clickAddInventoryButton();
    irmSubsActions.fillRequiredInventoryFields();
    irmSubsActions.clickSaveButton();
    //irmSubsActions.openExistingInventoryProfile();
});
When(/^I update the fields of the Inventory Profile$/, () => {
    irmSubsActions.updateInventoryProfileFields();
});
When(/^I click on the Save button to Update the Inventory Item$/, () => {
    irmSubsActions.clickSaveToUpdateInventoryItem();
});
When(/^I hover the mouse over an Inventory Item$/, () => {
    irmSubsActions.closeSubItem();
    irmSubsActions.searchInventoryItem();
    irmSubsActions.hoverOverInventoryItem();
});
When(/^I click on the three dots menu in Inventory Profile drawer$/, () => {
    irmSubsActions.clickInventoryThreeDotsMenu();
});
When(/^I navigate to the Equipment Profile table$/, () => {
    irmSubsActions.navigateToEquipmentProfileTable();
});
When(/^I click on the plus button to add Equipment$/, () => {
    irmSubsActions.clickAddEquipmentButton();
});
When(/^I select the Equipment Profile type$/, () => {
    irmSubsActions.selectEquipmentProfileType();
});
When(/^I fill all the required fields to add Equipment$/, () => {
    irmSubsActions.fillRequiredFieldsForEquipment();
});
When(/^I open the existing Equipment$/, () => {
    irmSubsActions.clickAddEquipmentButton();
    irmSubsActions.selectEquipmentProfileType();
    irmSubsActions.fillRequiredFieldsForEquipment();
    irmSubsActions.clickSaveButton();
    irmSubsActions.verifyEquipmentAddedInRealTime();
});
When(/^I update the fields of the Equipment$/, (equipprofile) => {
    irmSubsActions.updateEquipmentFields(equipprofile);
});
When(/^I hover the mouse over an Equipment$/, () => {
    irmSubsActions.mouseOverOnEquipment();
});
When(/^I click on the three dots menu of the Equipment$/, () => {
    irmSubsActions.clickThreeDotsOfEquipment();
});
When(/^I navigate to the Equipment Assemblies table$/, () => {
    irmSubsActions.navigateToEquipmentAssembliesTable();
});
When(/^I click on the Edit button of the Equipment Assemblies$/, () => {
    irmSubsActions.changeEquipmentAssemblyView('Tiles');
    irmSubsActions.clickEditAssemblyButton();
});
When(/^I update the required field of the Equipment Assemblies$/, () => {
    irmSubsActions.updateRequiredFieldofEA();
});
When(/^I save the details of the Equipment assembly$/, () => {
    irmSubsActions.saveDetailsOfAssembly();
});
When(/^I click on the Copy assembly button$/, () => {
    irmSubsActions.changeEquipmentAssemblyView('Tiles');
    irmSubsActions.clickCopyAssemblyButton();
});
When(/^I update the fields of the copy assembly$/, () => {
    irmSubsActions.updateFieldsOfCopyAssembly();
});
When(/^I navigate to the Purchase Order table$/, () => {
    irmSubsActions.navigateToPurchaseOrderTable();
});
When(/^I click on the plus button to add Purchase order$/, () => {
    irmSubsActions.clickAddPurchaseOrderButton();
});
When(/^I select the Profile item from the dropdown for Purchase order$/, () => {
    irmSubsActions.selectProfileItemFromDropdown();
});
When(/^I select the Vendor for Purchase order$/, () => {
    irmSubsActions.selectVendorForPurchaseOrder();
});
When(/^I fill the quantity for Purchase order$/, () => {
    irmSubsActions.fillQuantityForPurchaseOrder('2');
});
When(/^I click on the Continue button to create Purchase order$/, () => {
    irmSubsActions.clickContinueButtonForPurchaseOrder();
});
When(/^I click on the Create Purchase order button$/, () => {
    irmSubsActions.clickCreatePurchaseOrderButton();
});
When(/^I open an existing Purchase Order$/, () => {
    irmSubsActions.clickAddPurchaseOrderButton();
    irmSubsActions.selectProfileItemFromDropdown();
    irmSubsActions.verifyProfileItemListDisplayed();
    irmSubsActions.selectVendorForPurchaseOrder();
    irmSubsActions.verifyVendorListDisplayed();
    irmSubsActions.fillQuantityForPurchaseOrder('2');
    irmSubsActions.clickContinueButtonForPurchaseOrder();
    irmSubsActions.clickCreatePurchaseOrderButton();
    irmSubsActions.verifyPurchaseOrderCreatedSuccessfully();
    irmSubsActions.openNewlyCreatedPO();
    // irmSubsActions.closeDialog();
    // irmSubsActions.browserRefresh();
    // irmSubsActions.navigateToPurchaseOrderTable();
    // irmSubsActions.openFirstPO();
});
When(/^I update the fields of he Purchase order$/, () => {
    irmSubsActions.inputItemUP(1);
    //irmSubsActions.inputItemTR(2);
    irmSubsActions.inputItemShipping(2);
    //irmSubsActions.inputItemOther(4);
});
When(/^I click on the Save changes button to update Purchase order$/, () => {
    irmSubsActions.clickOnBtnSaveChanges();
});
When(/^I update the status of the Purchase order to (.*)$/, (orderStatus) => {
    irmSubsActions.clickOnStatus();
    irmSubsActions.updatedPOStatus(orderStatus);
    irmSubsActions.clickYesOnDeleteConfirmation();
});
When(/^I hover the mouse over a Completed or Canceled status Purchase Order$/, () => {
    irmSubsActions.hoverOverCompletedOrCanceledPO();
});
When(/^I click on the three dots menu against Purchase order$/, () => {
    irmSubsActions.clickThreeDotsMenu();
});
When(/^I click on the Archived option against Purchase order$/, () => {
    irmSubsActions.clickArchivedOption();
});
When(/^I fill in the Note field of the Purchase order$/, () => {
    irmSubsActions.fillNotefieldOfPO();
});
When(/^I fill in the Invoice ID of the Purchase order$/, () => {
    irmSubsActions.fillInvoiceIDfieldOfPO();
});
When(/^I navigate to the Inventory Profile Setting$/, () => {
    irmSubsActions.openSettings();
    irmSubsActions.navigateToInventoryProfileSetting();
});
When(/^I click on the plus Inventory Profile button$/, () => {
    irmSubsActions.clickPlusInventoryProfileButton();
});
When(/^I fill in all the fields of the inventory profile$/, () => {
    irmSubsActions.fillInInventoryFields();
});
When(/^I click on the Add button to add new inventory profile$/, () => {
    irmSubsActions.clickAddInventoryProfileButton();
});
When(/^I open an existing inventory profile$/, () => {
    irmSubsActions.clickPlusInventoryProfileButton();
    irmSubsActions.fillInInventoryFields();
    irmSubsActions.clickAddInventoryProfileButton();
    irmSubsActions.verifyInventoryProfileAddedInRealTime();
});
When(/^I update the fields of the inventory profile$/, () => {
    irmSubsActions.updateAnyFieldOfTheInventory();
});
When(/^I update the inventory profile$/, () => {
    irmSubsActions.clickUpdateInventoryProfileButton();
});
When(/^I click on the Delete profile button$/, () => {
    irmSubsActions.clickDeleteInventoryProfileButton();
});








Then(/^the correct and updated list of Infrastructure locations should be displayed$/, () => {
    irmSubsActions.verifyInfrastructureLocationTableIsDisplayed();
});
Then(/^the Add Infrastructure Location form should be displayed$/, () => {
    irmSubsActions.verifyAddInfrastructureLocationFormIsDisplayed();
});
Then(/^the user should be able to fill all the fields$/, () => {
    irmSubsActions.verifyAllFieldsAreFilled();
});
Then(/^the user should be able to add the Infrastructure Location successfully and it should be displayed in other instances in real time$/, () => {
    irmSubsActions.verifyInfrastructureLocationIsAdded();
    Utils.clearLocalStorage();  // Clean up any storage if necessary
});
Then(/^the Infrastructure Location details should be displayed$/, () => {
    irmSubsActions.verifyInfrastructureLocationDetailsDisplayed();
});
Then(/^the Edit Infrastructure Location drawer should be displayed$/, () => {
    irmSubsActions.verifyEditInfrastructureLocationDrawerDisplayed();
});
Then(/^the Add Sub-Location form should be displayed$/, () => {
    irmSubsActions.verifyAddSubLocationFormDisplayed();
});
Then(/^the user should be able to fill all the fields of Sub-Location$/, () => {
    irmSubsActions.verifySubLocationAllFieldsAreFilled();
});
Then(/^the user should be able to add the Sub-Location successfully and it should be displayed in other instances in real time$/, () => {
    irmSubsActions.verifySubLocationAddedRealTime();
    Utils.clearLocalStorage();  // Clean up any storage if necessary
});
Then(/^the Sub-Location details should be displayed$/, () => {
    irmSubsActions.verifySubLocationDetailsDisplayed();
});
Then(/^the user should be able to update all the fields$/, () => {
    irmSubsActions.verifyFieldsUpdated();
});
Then(/^the user should be able to save the changes successfully and the changes should be displayed in other instances in real time$/, () => {
    irmSubsActions.verifyChangesSavedAndDisplayedRealTime();
    Utils.clearLocalStorage();  // Clean up any storage if necessary
});
Then(/^the three dots menu should be displayed against Infrastructure location$/, () => {
    irmSubsActions.verifyThreeDotsMenuDisplayedForIR();
});
Then(/^the Delete option should be displayed$/, () => {
    irmSubsActions.verifyDeleteOptionDisplayed();
});
Then(/^a confirmation prompt should be displayed for deleting the Infrastructure Location$/, () => {
    irmSubsActions.verifyDeleteConfirmationPromptDisplayed();
});
Then(/^the user should see the Infrastructure Location deleted successfully and it should be removed from both instances in real time$/, () => {
    irmSubsActions.verifyInfrastructureLocationDeleted();
    Utils.clearLocalStorage();  // Clean up any storage if necessary
});
Then(/^the Edit Contact drawer should be displayed$/, () => {
    irmSubsActions.verifyEditContactDrawerDisplayed();
});
Then(/^the Add Contact form should be displayed$/, () => {
    irmSubsActions.verifyAddContactFormDisplayed();
});
Then(/^the user should be able to fill all the fields of the contact$/, () => {
    irmSubsActions.verifyFieldsFilled();
});
Then(/^the user should be able to add the Contact successfully and it should be displayed in other instances in real time$/, () => {
    irmSubsActions.verifyContactAddedAndDisplayedInRealTime();
    Utils.clearLocalStorage();  // Clean up any storage if necessary
});
Then(/^the user should see the updated details successfully and they should be displayed in real time in other instances$/, () => {
    irmSubsActions.verifyUpdatedDetailsDisplayedInRealTime();
    Utils.clearLocalStorage();  // Clean up any storage if necessary
});
Then(/^the Delete option should be displayed on the contact card$/, () => {
    irmSubsActions.verifyDeleteContactButtonDisplayed();
});
Then(/^a confirmation prompt should be displayed for deleting the Contact$/, () => {
    irmSubsActions.verifyDeleteContacConfirmationDialog();
});
Then(/^the user should be able to delete the Contact successfully and it should be removed in real time from other instances$/, () => {
    irmSubsActions.verifyCotactGetDeletedInRealTime();
    Utils.clearLocalStorage();  // Clean up any storage if necessary
});
Then(/^the correct and updated list of Inventory Profiles should be displayed$/, () => {
    irmSubsActions.verifyUpdatedInventoryProfileList();
});
Then(/^the Add Inventory drawer should be displayed$/, () => {
    irmSubsActions.verifyAddInventoryDrawerDisplayed();
});
Then(/^the user should be able to fill all the fields of the Inventory$/, () => {
    irmSubsActions.verifyInventoryFieldsFilled();
});
Then(/^the user should be able to add the Inventory Item successfully and it should be displayed in real time in other instances$/, () => {
    irmSubsActions.verifyInventoryItemAddedInRealTime();
    Utils.clearLocalStorage();  // Clean up any storage if necessary
});
Then(/^the Edit Inventory Item drawer should be displayed$/, () => {
    irmSubsActions.verifyEditInventoryItemDrawerDisplayed();
});
Then(/^the user should be able to update all the fields of the Inventory Profile$/, () => {
    irmSubsActions.verifyInventoryFieldsUpdated();
});
Then(/^the user should be able to save the changes successfully and they should be displayed in real time in other instances$/, () => {
    irmSubsActions.verifyChangesSavedInRealTime();
    Utils.clearLocalStorage();  // Clean up any storage if necessary
});
Then(/^the three dots menu should be displayed against an Inventory Item$/, () => {
    irmSubsActions.verifyThreeDotsMenuDisplayedForInventory();
});
Then(/^the three dots menu should be displayed against Purchase order$/, () => {
    irmSubsActions.verifyThreeDotsMenuDisplayedForPO();
});
Then(/^a confirmation prompt should be displayed for deleting the inventory Item$/, () => {
    irmSubsActions.verifyDeleteInventoryConfirmationDialog();
});
Then(/^the user should be able to delete the Inventory Item successfully, and it should be removed from other instances in real time$/, () => {
    irmSubsActions.verifyInventoryItemDeletedInRealTime();
    Utils.clearLocalStorage();  // Clean up any storage if necessary
});
Then(/^the correct and updated list should be displayed in the Equipment Profile table$/, () => {
    irmSubsActions.verifyUpdatedEquipmentListDisplayed();
});
Then(/^the Add Equipment drawer should be opened$/, () => {
    irmSubsActions.verifyAddEquipmentDrawerOpened();
});
Then(/^the user should be able to select the Equipment Profile from the dropdown$/, () => {
    irmSubsActions.verifyEquipmentProfileSelection();
});
Then(/^the user should be able to fill all the fields of add Equipment$/, () => {
    irmSubsActions.verifyFieldsFilledForEquipment();
});
Then(/^the user should be able to add the Equipment successfully, and it should be displayed in real time in other instances$/, () => {
    irmSubsActions.verifyEquipmentAddedInRealTime();
    Utils.clearLocalStorage();  // Clean up any storage if necessary
});
Then(/^the Edit Equipment drawer should be opened$/, () => {
    irmSubsActions.verifyEditEquipmentDrawerOpened();
});
Then(/^the user should be able to update all the fields of the Equipment$/, () => {
    irmSubsActions.verifyFieldsUpdatedForEquipment();
});
Then(/^the user should be able to update the changes successfully, and the changes should be displayed in real time in other instances$/, () => {
    irmSubsActions.verifyEquipmentUpdatedInRealTime();
    Utils.clearLocalStorage();  // Clean up any storage if necessary
});
Then(/^the three dots menu option should be visible for against Equipment$/, () => {
    irmSubsActions.verifyThreeDotsMenuOfEquipment();
});
Then(/^the Equipment should be deleted successfully and removed from the other instance in real time$/, () => {
    irmSubsActions.verifyEquipmentGetDeleted();
    Utils.clearLocalStorage();  // Clean up any storage if necessary
});
Then(/^the correct and updated list of Equipment Assemblies should be displayed$/, () => {
    irmSubsActions.verifyUpdatedListOfEquipmentAssemblies();
});
Then(/^the Edit Equipment Assemblies drawer should be displayed$/, () => {
    irmSubsActions.verifyEditEquipmentAssembliesDrawerDisplayed();
});
Then(/^the user should be able to update all the fields of the equipment assembly$/, () => {
    irmSubsActions.verifyAllFieldsUpdatedForEA();
});
Then(/^the user should be able to update the assembly successfully and the changes should be displayed in real-time in other instances$/, () => {
    irmSubsActions.verifyAssemblyUpdatedRealTime();
    Utils.clearLocalStorage();  // Clean up any storage if necessary
});
Then(/^the Copy an Assembly drawer should be displayed$/, () => {
    irmSubsActions.verifyCopyAssemblyDrawerDisplayed();
});
Then(/^the user should be able to update the fields of the copy assembly$/, () => {
    irmSubsActions.verifyFieldsUpdatedForCopyAssembly();
});
Then(/^the user should be able to copy the assembly successfully and it should be displayed in real time in other instances$/, () => {
    irmSubsActions.verifyCopyAssemblySuccessRealTime();
    Utils.clearLocalStorage();  // Clean up any storage if necessary
});
Then(/^the correct and updated PO list should be displayed in the Purchase Order table$/, () => {
    irmSubsActions.verifyPurchaseOrderListDisplayed();
});
Then(/^the Create PO drawer should be opened$/, () => {
    irmSubsActions.verifyCreatePODrawerOpened();
});
Then(/^the correct Profile item list should be displayed$/, () => {
    irmSubsActions.verifyProfileItemListDisplayed();
});
Then(/^the correct vendor list should be visible based on the selected Profile item$/, () => {
    irmSubsActions.verifyVendorListDisplayed();
});
Then(/^the Continue button should be enabled if the quantity is greater than zero$/, () => {
    irmSubsActions.verifyContinueButtonEnabled();
});
Then(/^the Purchase Order summary drawer should be opened$/, () => {
    irmSubsActions.verifyPurchaseOrderSummaryDrawerOpened();
});
Then(/^Purchase order should get created successfully$/, () => {
    irmSubsActions.verifyPurchaseOrderCreatedSuccessfully();
});
Then(/^the Purchase Order details should be displayed$/, () => {
    irmSubsActions.verifyPurchaseOrderDetailsDisplayed();
});
Then(/^the user should be able to edit all the fields of the Purchase order$/, () => {
    irmSubsActions.verifyPurchaseOrderFieldsEditable();
});
Then(/^the user should be able to update the changes successfully and the changes should be displayed in real time in other instances$/, () => {
    irmSubsActions.verifyPurchaseOrderItemUpdatedSuccessfully();
    Utils.clearLocalStorage();  // Clean up any storage if necessary
});
Then(/^Purchase order status should get updated successfully$/, () => {
    irmSubsActions.verifyPoStatusUpdated();
});
Then(/^the Archived option should be displayed$/, () => {
    irmSubsActions.verifyArchivedOptionDisplayed();
});
Then(/^a confirmation prompt should be displayed for Purchase order status change$/, () => {
    irmSubsActions.verifyPurchaseOrderStatusConfirmationDialog();
});
Then(/^the user should be able to save the changes successfully and the status should be updated in real time in other instances$/, () => {
    irmSubsActions.verifyStatusUpdatedInRealTime();
    Utils.clearLocalStorage();  // Clean up any storage if necessary
});
Then(/^the user should be able to fill in the Note field of the Purchase order$/, () => {
    irmSubsActions.verifyNoteFieldOfPOEditable();
});
Then(/^the user should be able to add notes successfully and they should be displayed in real time in other instances$/, () => {
    irmSubsActions.verifyPurchaseOrderItemUpdatedSuccessfully();
    irmSubsActions.verifyNoteFieldGetUpdatedSuccessfully();
    Utils.clearLocalStorage();  // Clean up any storage if necessary
});
Then(/^the user should be able to fill in the Invoice ID field$/, () => {
    irmSubsActions.verifyInvoiceFieldOfPOEditable();
});
Then(/^the user should be able to add the Invoice ID successfully and the changes should be displayed in real time in other instances$/, () => {
    irmSubsActions.verifyPurchaseOrderItemUpdatedSuccessfully();
    irmSubsActions.verifyInvoiceIDFieldGetUpdatedSuccessfully();
    Utils.clearLocalStorage();  // Clean up any storage if necessary
});
Then(/^the user should be able to update the status successfully and the changes should be displayed in real time in other instances$/, () => {
    irmSubsActions.verifyPOStatusChangedSuccessfully();
    Utils.clearLocalStorage();  // Clean up any storage if necessary
});
Then(/^the user should be able to navigate to the Inventory Profile setting successfully$/, () => {
    irmSubsActions.verifyNavigationToInventoryProfileSetting();
});
Then(/^the user should be navigated to the Add Inventory Profile drawer$/, () => {
    irmSubsActions.verifyNavigationToAddInventoryProfileDrawer();
});
Then(/^the user should be able to fill in all the fields of the inventory$/, () => {
    irmSubsActions.verifyInventoryProfileFieldsFilled();
});
Then(/^the user should be able to add the Inventory Profile successfully and it should be displayed in the Inventory Profile Table in real time$/, () => {
    irmSubsActions.verifyInventoryProfileAddedInRealTime();
    Utils.clearLocalStorage();  // Clean up any storage if necessary
});
Then(/^the correct and updated details of the Inventory Profile should be displayed$/, () => {
    irmSubsActions.verifycorrectdetailsOFInventoryProfile();
});
Then(/^the user should be able to update any field of the inventory profile$/, () => {
    irmSubsActions.verifyDescriptionOfInventoryProfileGetUpdated();
});
Then(/^the user should be able to update the Inventory Profile successfully and the updates should be displayed in the Inventory Profile Table in real time$/, () => {
    irmSubsActions.verifyInventoryProfileUpdatedInRealTime();
    Utils.clearLocalStorage();  // Clean up any storage if necessary
});
Then(/^a confirmation prompt should be displayed for delete inventory profile displayed$/, () => {
    irmSubsActions.verifyDeleteConfirmationPromptDisplayed();
});
Then(/^the user should be able to delete the Inventory Profile successfully and the deleted Inventory Profile should be removed from both the Inventory Profile setting and the Inventory Profile Table in real time$/, () => {
    irmSubsActions.verifyInventoryProfileDeletedInRealTime();
    Utils.clearLocalStorage();  // Clean up any storage if necessary
});
