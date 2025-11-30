const utils = require('../support/utils');
"use strict";
var Page = require('./page')

class IRMChecklist extends Page
{
    get 
    dashboardTitle(){return browser.$('h4*=Welcome');}
    get irmArea()  { return browser.$('[vispdata-testid="navigate-to-IRM"]'); } 
    get irmAreaHeader()  { return browser.$('h4=Infrastructure Resource Management'); }
    get titleInfrastructureLocationList(){return browser.$('p=Infrastructure Locations');}
    get btnAddInfrastructure()  { return browser.$('[vispdata-testid="add-infrastructure-location-button"]'); }
    get addInfrastructureAllInputs() {return browser.$$('.MuiInputBase-formControl');}
    get addInfrastructureNameInput() {return this.addInfrastructureAllInputs[0].$('input');}
    get addInfrastructureProfileInput() {return this.addInfrastructureAllInputs[1].$('input');}
    get addInfrastructureElevationInput() {return this.addInfrastructureAllInputs[2].$('input');}
    get addInfrastructureLatitudeInput() {return this.addInfrastructureAllInputs[3].$('input');}
    get addInfrastructureLongitudeInput() {return this.addInfrastructureAllInputs[4].$('input');}
    get btnfetchAddress()  { return browser.$('[aria-label="Reverse Geocode latitude/longitude to obtain an address."]'); }
    get btnSave() {return browser.$('button=Save');}
    get alertMsg(){return browser.$('.MuiAlert-message');}
    get selectedInfrastructureLocationTitle() {return browser.$('.drawer-header').$('h6');}
    get btnEditInfralocation()  { return browser.$('[vispdata-testid="edit-Location"]'); }
    get btnEditSiteContacts()  { return browser.$('[vispdata-testid="edit-Contacts"]'); }
    get editInfrastructureNameInput() {return this.addInfrastructureAllInputs[1].$('input');}
    get btnAddSubLocation() {return browser.$('[vispdata-testid="add-sub-location"]');}
    get btnAddContact() {return browser.$('button=Add Contact');}
    get editContactFirstNameInput() {return this.addInfrastructureAllInputs[1].$('input');}
    get editContactLastNameInput() {return this.addInfrastructureAllInputs[3].$('input');}
    get editContactNoteInput() {return this.addInfrastructureAllInputs[5].$('input');}
    get btnUpdate() {return browser.$('button=Update');}
    get closeForm() {return browser.$$('[data-testid="CloseIcon"]')[0];}
    get closeSecondaryForm() {return browser.$$('[data-testid="CloseIcon"]')[1];}
    get summaryDivs() {return browser.$$('.MuiAccordionSummary-content');}
    get divContact() {return browser.$('[vispdata-testid^="view-contact"]');}
    get deleteContactIcon() {return this.divContact.$('[data-testid="DeleteIcon"]');}
    get btnYes() {return browser.$('button=Yes');}
    get searchIcon() {return browser.$$('[data-testid="SearchIcon"]');}
    get searchInput() {return browser.$('.MuiInputBase-inputAdornedStart');}
    get dataTables() {return browser.$$('[vispdata-testid^="equipmentItemsOptions-row-"]');}
        rowFromTheTable(areaname) {return browser.$$('[vispdata-testid^="' + areaname + 'Options-row-"]')[0].$('[aria-label="More"]');}
    get liDeleteInfrastructure() {return browser.$('[vispdata-testid^="delete-infrastructure-location-"]');}
    get liDeleteIventory() {return browser.$('[vispdata-testid^="delete-inventory-"]');}
    get liDeleteEquipment() {return browser.$('[vispdata-testid^="delete-equipment-"]');}
    get btnDelete() {return browser.$('[vispdata-testid="delete-sublocation"]');}
    get btnInventory() {return browser.$('[vispdata-testid="view-inventory"]');}
    get btnAddInventory()  { return browser.$('[vispdata-testid="add-inventory"]'); }
    get inputPurchasePrice() {return this.addInfrastructureAllInputs[3].$('input');}
    get inputSerialNo() {return this.addInfrastructureAllInputs[5].$('input');}
    get selectedInventoryItemTitle() {return browser.$$('.drawer-header')[1].$('h6');}
    get inputEditSerialNo() {return this.addInfrastructureAllInputs[1].$('input');}
    get createRMAIcon()  { return browser.$('[vispdata-testid="edit-Return Material Authorization"]'); }
    get liCreateRMA() {return browser.$('li=Create RMA');}
    get venderCreateRMA() {return browser.$$('[aria-autocomplete="list"]')[2];}
    get inputRMANumber() {return this.addInfrastructureAllInputs[10].$('input');}
    get editinputRMANumber() {return this.addInfrastructureAllInputs[9].$('input');}
    get btnSaveRMA() {return browser.$$('button=Save')[1];}
    get closeThirdForm() {return browser.$$('[data-testid="CloseIcon"]')[2];}
    get rowRMAHistory() {return browser.$('p*=RMA for');}
    get h6History() {return browser.$('h6*=History - ');}
    get searchInventoryItem() {return this.addInfrastructureAllInputs[0].$('input');}
    get btnEquipment() {return browser.$('[vispdata-testid="view-profiles"]');}
    get btnAddEquipment()  { return browser.$('[vispdata-testid="add-equipment"]'); }
    get equipmentProfile() {return browser.$('h6=5 GHZ NANOSTATION AC (NS-5AC-US)');}
    get kebabMenuEquipment() {return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[2]/div[1]/div/div[2]/button[3]');}
    get spanTiles() {return browser.$('span=Tiles');}
    get firstInputField() {return this.addInfrastructureAllInputs[0].$('input');}
    get secondInputField() {return this.addInfrastructureAllInputs[1].$('input');}
    get thirdInputField() {return this.addInfrastructureAllInputs[2].$('input');}
    get forthInputField() {return this.addInfrastructureAllInputs[3].$('input');}
    get selectedItems() {return browser.$$('.Mui-selected');}
    get btnAddChild() {return browser.$('[vispdata-testid="add-child-equipment"]');}
    get spanFromUnassigned() {return browser.$('span=From Unassigned');}
    get addChildFields() {return browser.$$('.MuiInputBase-inputAdornedEnd');}
    get searchEquipmentItem() {return browser.$('.MuiOutlinedInput-input');}
    get btnEquipmentAssemblies() {return browser.$('[vispdata-testid="view-assemblies"]');}
    get equipmentAssemblies() {return browser.$$('.MuiPaper-elevation1');}
    get copyAssembly() {return this.equipmentAssemblies[1].$('[aria-label="Copy Assembly"]');}
    get locationCopyAssembly() {return browser.$('.MuiInputBase-inputSizeSmall');}
    get purchaseOrderArea() {return browser.$('h6=Purchase Orders');}
    get btnCreatePurchaseOrder()  { return browser.$('[vispdata-testid="create-purchase-order"]'); }
    get btnContinue() {return browser.$('button=Continue');}
    get btnCreatePO() {return browser.$('button=Create PO');}
    get idPurchaseOrder() {return browser.$('button*=PO#:');}
    get btnOpenDropdown() {return browser.$$('[data-testid="ArrowDropDownIcon"]')[1];}
    get liORDERED() {return browser.$('li=ORDERED');}
    get btnExpandMore()  { return browser.$('[data-testid="ExpandMoreIcon"]'); }
    get btnReceive() {return browser.$('button=Receive');}
    get currentPurchaseOrder() {return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[1]/div/div/div[2]/h6');}
    get btnArchivePO()  { return browser.$('[aria-label="Archive-PO"]'); }
    get liArchive() {return browser.$('li=Archive');}
    get btnClosePurchaseOrder() {return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[1]/button[3]');}
    
    
    
    

    // Created Purchase Order successfully.

    // Updated Purchase Order status successfully

    // Received 1 inventory items successfully.

    // Purchase order archived successfully

    

}

module.exports = new IRMChecklist();