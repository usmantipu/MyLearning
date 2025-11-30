var irmChecklist = require('../pageobjects/IRMChecklist.page');
var expect = require('chai').expect;

class IRMChecklistActions {

    constructor() { 
        this.upArrowKey = ['\ue013']; // arrow up
        this.downArrowKey = ['\ue015'];// arrow down
		this.enterKey = ['\ue007'];// enter
		this.backspaceKey = ['\uE003'];// backspace
        this.clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
        this.infrastructureLocationName = 'TestLocation ';
        this.infrastructureElevation = '10';
        this.infrastructureLatitude = '45.4524021';
        this.infrastructureLongitude = '-122.791854';
        this.recentlyCreated = '';
        this.firstName = 'FN Testing';
        this.lastName = 'LN Testing';
        this.contactNotes = 'This is the testing note of contact';
    }
    randomStringGenerator() {
		var chars = "1234567890";
		var string = "";
		for (var ii = 0; ii < 9; ii++) {
		string += chars[Math.floor(Math.random() * chars.length)];
		}
		return string;
    }

    nevigateToIRMArea(){
        // browser.pause(10000);
		irmChecklist.dashboardTitle.waitForDisplayed();
		let title = irmChecklist.dashboardTitle.getText();
		expect(title.substr(0,19)).to.eql('Dashboard - Welcome');

        irmChecklist.irmArea.waitForExist();
        irmChecklist.irmArea.waitForDisplayed();
        irmChecklist.irmArea.click();
        browser.pause(10000);
    }
    verifyIRMArea(){
        irmChecklist.irmAreaHeader.waitForDisplayed();
        expect(irmChecklist.irmAreaHeader.isExisting()).to.be.true;
    }

    verifyInfrastructureLocationList(){
        irmChecklist.titleInfrastructureLocationList.waitForDisplayed();
        expect(irmChecklist.titleInfrastructureLocationList.isExisting()).to.be.true;
    }

    addInfrastructureLocation(){
        irmChecklist.btnAddInfrastructure.waitForDisplayed();
        irmChecklist.btnAddInfrastructure.click();
        browser.pause(5000);
        irmChecklist.addInfrastructureNameInput.waitForDisplayed();
        irmChecklist.addInfrastructureNameInput.click();
        this.recentlyCreated = this.infrastructureLocationName + this.randomStringGenerator();
        irmChecklist.addInfrastructureNameInput.setValue(this.recentlyCreated);
        irmChecklist.addInfrastructureProfileInput.click();
        browser.keys(this.downArrowKey);
        browser.keys(this.enterKey);
        irmChecklist.addInfrastructureElevationInput.click();
        irmChecklist.addInfrastructureElevationInput.setValue(this.infrastructureElevation);
        irmChecklist.addInfrastructureLatitudeInput.click();
        irmChecklist.addInfrastructureLatitudeInput.setValue(this.infrastructureLatitude);
        irmChecklist.addInfrastructureLongitudeInput.setValue(this.infrastructureLongitude);
        browser.pause(1500);
        irmChecklist.btnfetchAddress.waitForDisplayed();
        irmChecklist.btnfetchAddress.scrollIntoView();
        browser.pause(500);
        irmChecklist.btnfetchAddress.waitForClickable();
        irmChecklist.btnfetchAddress.moveTo();
        irmChecklist.btnfetchAddress.click();
        browser.pause(2000);
        irmChecklist.btnSave.click();
    }
    verifyAlertMsg(msg){
        msg = msg.replace(/['"]+/g, '');
        irmChecklist.alertMsg.waitForDisplayed();
        expect(irmChecklist.alertMsg.getText()).includes(msg);
    }

    selectInfrastructureLocation(){
        this.addInfrastructureLocation();
        this.verifyAlertMsg('Added Site Location successfully');
        browser.pause(2000);
        irmChecklist.selectedInfrastructureLocationTitle.waitForDisplayed();
        expect(irmChecklist.selectedInfrastructureLocationTitle.getText()).to.eql(this.recentlyCreated);
    }

    editInfrastructureLocation(){
        browser.pause(5000);
        irmChecklist.btnEditInfralocation.click();
        irmChecklist.editInfrastructureNameInput.waitForDisplayed();
        irmChecklist.editInfrastructureNameInput.click();
        browser.keys(this.clearKeys);
        this.recentlyCreated = this.infrastructureLocationName + this.randomStringGenerator();
        irmChecklist.editInfrastructureNameInput.setValue(this.recentlyCreated);
        irmChecklist.btnSave.click();
    }
    
    addSubLocation(){
        irmChecklist.btnEditInfralocation.click();
        irmChecklist.btnAddSubLocation.waitForDisplayed();
        irmChecklist.btnAddSubLocation.click();
        irmChecklist.editInfrastructureNameInput.waitForDisplayed();
        irmChecklist.editInfrastructureNameInput.click();
        browser.keys(this.clearKeys);
        this.recentlyCreated = this.infrastructureLocationName + this.randomStringGenerator();
        irmChecklist.editInfrastructureNameInput.setValue(this.recentlyCreated);
        irmChecklist.btnSave.click();
    }

    selectSubLocation(){
        this.addSubLocation();
        this.verifyAlertMsg('Site Sub-location was added successfully.');
        browser.pause(2000);
    }

    editSubLocation(){
        irmChecklist.editInfrastructureNameInput.waitForDisplayed();
        irmChecklist.editInfrastructureNameInput.click();
        browser.keys(this.clearKeys);
        this.recentlyCreated = this.infrastructureLocationName + this.randomStringGenerator();
        irmChecklist.editInfrastructureNameInput.setValue(this.recentlyCreated);
        irmChecklist.btnSave.click();
    }

    addContact(){
        irmChecklist.btnEditSiteContacts.click();
        irmChecklist.btnAddContact.waitForDisplayed();
        irmChecklist.btnAddContact.waitForClickable();
        irmChecklist.btnAddContact.click();
        irmChecklist.editContactFirstNameInput.waitForDisplayed();
        irmChecklist.editContactFirstNameInput.click();
        irmChecklist.editContactFirstNameInput.setValue(this.firstName);
        irmChecklist.editContactLastNameInput.waitForDisplayed();
        irmChecklist.editContactLastNameInput.click();
        irmChecklist.editContactLastNameInput.setValue(this.firstName);
        irmChecklist.btnSave.click();
    }

    selectContact(){
        this.addContact();
        this.verifyAlertMsg('Updated Site Contact successfully');
        browser.pause(2000);
    }

    editContact(){
        irmChecklist.editContactNoteInput.waitForDisplayed();
        irmChecklist.editContactNoteInput.click();
        irmChecklist.editContactNoteInput.setValue(this.contactNotes);
        irmChecklist.btnUpdate.click();
    }

    deleteContact(){
        irmChecklist.closeSecondaryForm.click();
        console.log('closed second form');
        browser.pause(2000);
        irmChecklist.divContact.waitForDisplayed();
        irmChecklist.divContact.scrollIntoView();
        console.log('div contact displayed');
        browser.pause(2000);
        irmChecklist.divContact.scrollIntoView();
        irmChecklist.divContact.moveTo();
        console.log('hover over contact');
        irmChecklist.deleteContactIcon.waitForDisplayed();
        irmChecklist.deleteContactIcon.waitForClickable();
        irmChecklist.deleteContactIcon.click();
        irmChecklist.btnYes.waitForDisplayed();
        irmChecklist.btnYes.click();
    }

    deleteInfrastructureLocation(){
        irmChecklist.closeForm.click();
        irmChecklist.searchIcon[0].waitForDisplayed();
        irmChecklist.searchIcon[0].click();
        irmChecklist.searchInput.click();
        irmChecklist.searchInput.setValue(this.recentlyCreated);
        browser.pause(5000);
        irmChecklist.rowFromTheTable('infrastructureTable').moveTo();
        irmChecklist.rowFromTheTable('infrastructureTable').click();
        irmChecklist.liDeleteInfrastructure.waitForDisplayed();
        irmChecklist.liDeleteInfrastructure.click();
        irmChecklist.btnYes.waitForDisplayed();
        irmChecklist.btnYes.click();
    }

    deleteSubLocation(){
        irmChecklist.btnDelete.waitForDisplayed();
        irmChecklist.btnDelete.click();
        irmChecklist.btnYes.waitForDisplayed();
        irmChecklist.btnYes.click();
    }

    verifyInventiryListProfiles(){
        irmChecklist.btnInventory.waitForDisplayed();
        expect(irmChecklist.btnInventory.isExisting()).to.be.true;
    }

    addInventoryItem(){
	irmChecklist.btnInventory.waitForDisplayed();
        irmChecklist.btnInventory.click();
        irmChecklist.btnAddInventory.waitForDisplayed();
        irmChecklist.btnAddInventory.click();
        browser.pause(5000);
        irmChecklist.addInfrastructureAllInputs[0].waitForDisplayed();
        irmChecklist.addInfrastructureAllInputs[0].click();
        browser.pause(1000);
        browser.keys(this.downArrowKey);
        browser.keys(this.enterKey);
        irmChecklist.addInfrastructureAllInputs[1].click();
        browser.pause(1000);
        browser.keys(this.downArrowKey);
        browser.keys(this.enterKey);
        irmChecklist.inputPurchasePrice.click();
        browser.keys(this.clearKeys);
        irmChecklist.inputPurchasePrice.setValue('10');
        irmChecklist.inputSerialNo.click();
        this.recentlyCreated = this.infrastructureLocationName + this.randomStringGenerator();
        irmChecklist.inputSerialNo.setValue(this.recentlyCreated);
        irmChecklist.btnSave.click();
    }

    selectInventoryItem(){
        this.addInventoryItem();
        this.verifyAlertMsg('Added Inventory Item successfully');
        browser.pause(2000);
        irmChecklist.selectedInventoryItemTitle.waitForDisplayed();
        expect((irmChecklist.selectedInventoryItemTitle.getText()).toLowerCase()).to.eql(this.recentlyCreated.toLowerCase());
    }

    editInventoryItem(){
        irmChecklist.inputEditSerialNo.waitForDisplayed();
        irmChecklist.inputEditSerialNo.click();
        browser.keys(this.clearKeys);
        this.recentlyCreated = this.infrastructureLocationName + this.randomStringGenerator();
        irmChecklist.inputEditSerialNo.setValue(this.recentlyCreated);
        irmChecklist.btnSave.click();
    }

    createRMAInventoryItem(){
        irmChecklist.createRMAIcon.waitForDisplayed();
        irmChecklist.createRMAIcon.click();
        irmChecklist.liCreateRMA.click();
        browser.pause(5000);
        irmChecklist.venderCreateRMA.waitForDisplayed();
        irmChecklist.venderCreateRMA.click();
        browser.keys(this.downArrowKey);
        browser.keys(this.enterKey);
        irmChecklist.inputRMANumber.click();
        this.recentlyCreated = this.infrastructureLocationName + this.randomStringGenerator();
        irmChecklist.inputRMANumber.setValue(this.recentlyCreated);
        irmChecklist.btnSaveRMA.click();
    }

    selectRMAHistory(){
        this.createRMAInventoryItem();
        this.verifyAlertMsg('Successfully created RMA for the inventory item');
        browser.pause(2000);
        irmChecklist.closeThirdForm.click();
        irmChecklist.rowRMAHistory.click();
    }

    verifyRMAHistory(){
        irmChecklist.h6History.waitForClickable();
        expect(irmChecklist.h6History.isExisting()).to.be.true;
    }

    updateRMA(){
        irmChecklist.inputRMANumber.click();
        browser.keys(this.clearKeys);
        this.recentlyCreated = this.infrastructureLocationName + this.randomStringGenerator();
        irmChecklist.inputRMANumber.setValue(this.recentlyCreated);
        irmChecklist.btnSaveRMA.click();
    }

    selectRMA(){
        this.createRMAInventoryItem();
        this.verifyAlertMsg('Successfully created RMA for the inventory item');
        browser.pause(2000);
    }

    deleteInventoryItem(){
        irmChecklist.closeSecondaryForm.click();
        irmChecklist.searchInventoryItem.click();
        browser.keys(this.clearKeys);
        irmChecklist.searchInventoryItem.setValue(this.recentlyCreated);
        browser.pause(2000);
        irmChecklist.rowFromTheTable('inventoryItemsList').moveTo();
        irmChecklist.rowFromTheTable('inventoryItemsList').click();
        irmChecklist.liDeleteIventory.click();
        irmChecklist.btnYes.waitForDisplayed();
        irmChecklist.btnYes.click();
    }

    nevigateToEquipmentListProfiles(){
        irmChecklist.btnEquipment.waitForDisplayed();
        irmChecklist.btnEquipment.click();
        browser.pause(3000);
    }

    verifyEquipmentListProfiles(){
        browser.pause(5000);
        if(!irmChecklist.equipmentProfile.isExisting()){
            irmChecklist.kebabMenuEquipment.click();
            irmChecklist.spanTiles.click();
            browser.pause(5000);
        }
        expect(irmChecklist.equipmentProfile.isExisting()).to.to.true;
    }

    addEquipment(){
        irmChecklist.btnAddEquipment.waitForDisplayed();
        irmChecklist.btnAddEquipment.click();
        browser.pause(5000);
        irmChecklist.secondInputField.waitForDisplayed();
        irmChecklist.secondInputField.click();
        this.recentlyCreated = this.infrastructureLocationName + this.randomStringGenerator();
        irmChecklist.secondInputField.setValue(this.recentlyCreated);
        irmChecklist.forthInputField.click();
        browser.pause(1000);
        browser.keys(this.downArrowKey);
        browser.keys(this.enterKey);
        browser.pause(2000);
        irmChecklist.thirdInputField.click();
        browser.pause(1000);
        browser.keys(this.downArrowKey);
        browser.keys(this.enterKey);
        irmChecklist.btnSave.click();
    }

    selectEquipment(){
        this.addEquipment();
        this.verifyAlertMsg('Added Equipment successfully');
        browser.pause(3000);
    }

    editEquipment(){
        irmChecklist.secondInputField.click();
        browser.keys(this.clearKeys);
        this.recentlyCreated = this.infrastructureLocationName + this.randomStringGenerator();
        irmChecklist.secondInputField.setValue(this.recentlyCreated);
        irmChecklist.btnSave.click();
        browser.pause(5000);
    }

    verifyEquipmentEditedSuccessfully(){
        irmChecklist.selectedItems[1].waitForDisplayed();
        // If website slow or internet is poor wait for 5 Seconds
        if(irmChecklist.selectedItems[1].getText() != this.recentlyCreated)
        {
            browser.pause(5000);
        }
        expect(irmChecklist.selectedItems[1].getText()).eql(this.recentlyCreated);
    }

    addChild(){
        irmChecklist.btnAddChild.waitForDisplayed();
        irmChecklist.btnAddChild.click();
        irmChecklist.spanFromUnassigned.waitForDisplayed();
        irmChecklist.spanFromUnassigned.click();
        irmChecklist.addChildFields[0].waitForDisplayed();
        irmChecklist.addChildFields[0].click();
        browser.pause(1000);
        browser.keys(this.downArrowKey);
        browser.keys(this.enterKey);
        browser.pause(2000);
        irmChecklist.addChildFields[1].click();
        browser.pause(1000);
        browser.keys(this.downArrowKey);
        browser.keys(this.enterKey);
        irmChecklist.btnSave.click();
    }

    deleteEquipment(){
        irmChecklist.closeForm.click();
        irmChecklist.equipmentProfile.click();
        irmChecklist.searchEquipmentItem.click();
        irmChecklist.searchEquipmentItem.setValue(this.recentlyCreated);
        browser.pause(3000);
        irmChecklist.rowFromTheTable('equipmentItems').moveTo();
        irmChecklist.rowFromTheTable('equipmentItems').click();
        irmChecklist.liDeleteEquipment.click();
        irmChecklist.btnYes.waitForDisplayed();
        irmChecklist.btnYes.click();
    }

    nevigateToEquipmentAssemblies(){
        irmChecklist.btnEquipmentAssemblies.waitForDisplayed();
        irmChecklist.btnEquipmentAssemblies.click();
        browser.pause(5000);
    }

    verifyEquipmentAssemblies(){
        if(irmChecklist.equipmentAssemblies.length < 2){
            browser.pause(5000);
        }
        expect(irmChecklist.equipmentAssemblies[1].isExisting()).to.be.true;
    }
    
    copyAssembly(){
        irmChecklist.copyAssembly.click();
        browser.pause(5000);
        irmChecklist.secondInputField.waitForDisplayed();
        irmChecklist.secondInputField.click();
        browser.keys(this.clearKeys);
        this.recentlyCreated = this.infrastructureLocationName + this.randomStringGenerator();
        irmChecklist.secondInputField.setValue(this.recentlyCreated);
        irmChecklist.locationCopyAssembly.click();
        browser.pause(1000);
        browser.keys(this.downArrowKey);
        browser.keys(this.enterKey);
        irmChecklist.btnSave.click();
    }

    selectAssembly(){
        this.copyAssembly();
        this.verifyAlertMsg('Copied Equipment Assembly successfully');
        browser.pause(3000);
    }

    editAssembly(){
        irmChecklist.secondInputField.click();
        browser.keys(this.clearKeys);
        this.recentlyCreated = this.infrastructureLocationName + this.randomStringGenerator();
        irmChecklist.secondInputField.setValue(this.recentlyCreated);
        irmChecklist.btnSave.click();
        browser.pause(5000);
    }

    nevigateToPurchaseOrder(){
        irmChecklist.purchaseOrderArea.waitForDisplayed();
        irmChecklist.btnCreatePurchaseOrder.waitForDisplayed();
        irmChecklist.btnCreatePurchaseOrder.scrollIntoView();
    }

    createPurchaseOrder(){
        irmChecklist.btnCreatePurchaseOrder.click();
        browser.pause(5000);
        irmChecklist.addChildFields[0].click();
        browser.pause(1000);
        browser.keys(this.downArrowKey);
	browser.keys(this.downArrowKey);
        browser.keys(this.enterKey);
        browser.pause(1000);
        irmChecklist.btnContinue.click();
        irmChecklist.btnCreatePO.waitForDisplayed();
        irmChecklist.btnCreatePO.click();
    }

    selectPurchaseOrder(){
        this.createPurchaseOrder();
        this.verifyAlertMsg('Created Purchase Order successfully.');
        irmChecklist.idPurchaseOrder.waitForDisplayed();
        irmChecklist.idPurchaseOrder.click();
        browser.pause(5000);
    }

    editPurchaseOrder(){
        irmChecklist.btnOpenDropdown.click();
        irmChecklist.liORDERED.waitForDisplayed();
        irmChecklist.liORDERED.click();
        irmChecklist.btnYes.waitForDisplayed();
        irmChecklist.btnYes.click();
    }

    selectOrderedPurchaseOrder(){
        this.selectPurchaseOrder();
        this.editPurchaseOrder();
        this.verifyAlertMsg('Updated Purchase Order status successfully');
    }

    receivePurchaseOrder(){
        irmChecklist.btnExpandMore.waitForDisplayed();
        irmChecklist.btnExpandMore.waitForClickable();
        irmChecklist.btnExpandMore.click();
        irmChecklist.firstInputField.click();
        irmChecklist.firstInputField.setValue(this.infrastructureLocationName + this.randomStringGenerator());
        browser.pause(4000);
        irmChecklist.thirdInputField.click();
        browser.keys(this.downArrowKey);
        browser.keys(this.enterKey);
        this.recentlyCreated = irmChecklist.currentPurchaseOrder.getText();
        irmChecklist.btnReceive.click();
        console.log('PO number is received');
    }

    selectCompletedPurchaseOrder(){
        this.selectOrderedPurchaseOrder();
        this.receivePurchaseOrder();
        this.verifyAlertMsg('Received 1 inventory items successfully.');
        browser.pause(3000);
    }

    archivePurchaseOrder(){
        irmChecklist.btnClosePurchaseOrder.waitForDisplayed();
        irmChecklist.btnClosePurchaseOrder.click();
        irmChecklist.searchIcon[2].waitForDisplayed();
        irmChecklist.searchIcon[2].click();
        irmChecklist.searchInput.waitForDisplayed();
        irmChecklist.searchInput.click();
        irmChecklist.searchInput.setValue(this.recentlyCreated);
        browser.pause(3000);
        irmChecklist.btnArchivePO.moveTo();
        irmChecklist.btnArchivePO.click();
        irmChecklist.liArchive.click();
        irmChecklist.btnYes.waitForDisplayed();
        irmChecklist.btnYes.click();
    }


}


module.exports = new IRMChecklistActions();
