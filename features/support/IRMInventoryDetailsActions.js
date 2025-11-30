var irmIPDetailsPage = require('../pageobjects/IRMInventoryDetails.page');
const { clickOnPurchaseOrderSearchbar } = require('./IRMActions');
var expect = require('chai').expect;

class IRMInventoryDetailsActions {
    constructor(){
		 this.downArrowKey = ['\ue015'];// arrow down
		this.enterkeys = ['\uE007'];// enter
		this.clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		this.Esckeys = ['\uE00C'];
		this.numTwo = ['\ue01C'];
		this.inventoryNumber;this.inventoryName;this.inventorySKU='empty';this.inventoryManfacure;
		this.isColumnFound=false;
		this.originalWidth;this.dividedWidth;
		this.beforeSort;this.keyToLock;this.profileLocation;this.Inventoryprofile;
		this.equipmentField;this.equipmentProfileName;
		this.beforeColumns;this.afterColumns;this.serialNumber;
		this.inventoryItemDeleted='Inventory item deleted successfully';
		this.rmaCreatedConfMsg ='Successfully created RMA for the inventory item';
		this.note;this.rmaNumber='URMA1706075771';this.activityDetails;this.rmaLocation;
    }
	gotoIPSection()
	{
		irmIPDetailsPage.inventorySection.scrollIntoView();
		irmIPDetailsPage.inventorySection.waitForDisplayed();
		irmIPDetailsPage.btnInventoryTab.click();
		console.log('inventory tab clicked');
	}
	openInventoryItemFromSerial()
	{
		browser.pause(5000);
		var allRelatedData = irmIPDetailsPage.inventoryExpandedData;
		this.inventoryNumber = allRelatedData[0].getText();
		allRelatedData[0].click();
		browser.pause(2000);
		console.log('clicked On serial number '+this.inventoryNumber);
	}
	sortItemInInventory()
	{
		browser.pause(5000);
		this.beforeSort = irmIPDetailsPage.firstInventoryDrawerRowData[1].getText();
		console.log('before sort value is '+this.beforeSort);
		var allRelatedData = irmIPDetailsPage.inventoryDrawerColumns;
		// for (let i = 0; i < allRelatedData.length; i++) {
		// 	console.log('index is' +i +' and value is'+allRelatedData[i].getText());
		//   }
		browser.pause(1000);
		//irmIPDetailsPage.inventoryDrawerColumns[1].moveTo();
		browser.pause(1000);
		allRelatedData[1].click();
		console.log('sorted the list');
	}

	openChooseColumns()
	{
		irmIPDetailsPage.btnChooseColumn.waitForClickable();
		irmIPDetailsPage.btnChooseColumn.click();
	}
	keepExistingColumns()
	{
		var allRelatedData = irmIPDetailsPage.inventoryDrawerColumns;
		browser.pause(1000);
		this.beforeColumns = allRelatedData[1].getText();
	}
	chooseColumnsFromDetails()
	{
		irmIPDetailsPage.enableDisableSerial.waitForClickable();
		irmIPDetailsPage.enableDisableSerial.click();
		browser.pause(2000);
		irmIPDetailsPage.closeChooseColumnDetails.waitForClickable();
		irmIPDetailsPage.closeChooseColumnDetails.click();
	}
	ResetColumns()
	{
		irmIPDetailsPage.inventoryDrawerMeatBall.waitForClickable();
		irmIPDetailsPage.inventoryDrawerMeatBall.click();
		this.openChooseColumns();
		irmIPDetailsPage.ResetChooseColumnDetails.waitForClickable();
		irmIPDetailsPage.ResetChooseColumnDetails.click();
		browser.pause(1500);
		irmIPDetailsPage.closeChooseColumnDetails.waitForClickable();
		irmIPDetailsPage.closeChooseColumnDetails.click();
	}
	searchFromDrawer()
	{
		browser.pause(1000);
		this.beforeSort = irmIPDetailsPage.firstInventoryDrawerRowData[2].getText();
		console.log('second columns extracted text is '+this.beforeSort);
		irmIPDetailsPage.drawerSearch.click();
		irmIPDetailsPage.drawerSearch.keys(this.clearKeys);
		irmIPDetailsPage.drawerSearch.setValue(this.beforeSort);
	}
	clickBtnDeleteOfDotMenu()
	{
		irmIPDetailsPage.btnDeleteItem.waitForClickable();
		irmIPDetailsPage.btnDeleteItem.click();
	}
	clickBtnYesOfPopUp()
	{
		irmIPDetailsPage.btnPopUpYes.waitForClickable();
		irmIPDetailsPage.btnPopUpYes.click();
	}
	clickBtnNoOfPopUp()
	{
		if(irmIPDetailsPage.txtPopUpContent.isExisting())
		{
			irmIPDetailsPage.btnPopUpNo.waitForClickable();
			irmIPDetailsPage.btnPopUpNo.click();
		}
	}
	openInventoryItem()
	{
		irmIPDetailsPage.firstInventoryDrawerRowData[1].click();
	}
	enableEquipmentAssetSetting()
	{
		irmIPDetailsPage.btnAppIcon.click();
		irmIPDetailsPage.btnSettingsEquipment.waitForDisplayed();
		irmIPDetailsPage.btnSettingsEquipment.waitForClickable();
		irmIPDetailsPage.btnSettingsEquipment.click();
		irmIPDetailsPage.btnEquipmentFromMenu.waitForDisplayed();
		irmIPDetailsPage.btnEquipmentFromMenu.waitForClickable();
		irmIPDetailsPage.btnEquipmentFromMenu.click();
		irmIPDetailsPage.chkAssetTag.waitForDisplayed();
		irmIPDetailsPage.chkAssetTag.waitForClickable();
		if(irmIPDetailsPage.chkAssetTag.getAttribute('class').includes('Mui-checked')){}
		else{
				irmIPDetailsPage.chkAssetTag.click();
				irmIPDetailsPage.btnSaveTopMenu.waitForDisplayed();
				irmIPDetailsPage.btnSaveTopMenu.waitForClickable();
				irmIPDetailsPage.btnSaveTopMenu.click();
				browser.pause(2000);
		}
		irmIPDetailsPage.btnCloseTopMenu.waitForDisplayed();
		irmIPDetailsPage.btnCloseTopMenu.waitForClickable();
		irmIPDetailsPage.btnCloseTopMenu.click();
	}
	editItemSerialNumber()
	{
		this.serialNumber = irmIPDetailsPage.inputSerial.getValue();
		irmIPDetailsPage.inputSerial.click();
		irmIPDetailsPage.inputSerial.keys(this.clearKeys);
		irmIPDetailsPage.inputSerial.setValue('9863');
	}
	editAssetTag()
	{
		irmIPDetailsPage.inputAssetTag.click();
		irmIPDetailsPage.inputAssetTag.keys(this.clearKeys);
		irmIPDetailsPage.inputAssetTag.setValue('asset tag');
	}
	editItemLocation()
	{
		irmIPDetailsPage.inputLocation.click();
		irmIPDetailsPage.inputLocation.keys(this.clearKeys);
		if(irmIPDetailsPage.txtPopUpContent.isExisting())
		{
			irmIPDetailsPage.btnPopUpYes.click();
			browser.pause(1000);
		}
		var loaction ='Default Location';
		var allcharacters = loaction.split("");
		for(var i=0; i<allcharacters.length; i++){
			let key = allcharacters[i];
			browser.keys(key);
			browser.pause(500);
			}
		browser.pause(2000);
		//irmIPDetailsPage.inputLocation.setValue('Default Location');
	}
	editLocationByDropdown()
	{
		irmIPDetailsPage.inputLocation.keys(this.clearKeys);
		irmIPDetailsPage.inputLocation.setValue('Default Location');
		irmIPDetailsPage.locationDropDown.click();
	}
	editItemLocationByEmpty()
	{
		irmIPDetailsPage.inputLocation.click();
		irmIPDetailsPage.inputLocation.keys(this.clearKeys);
	}
	editEquipmentField()
	{
		browser.keys(this.Esckeys);
		irmIPDetailsPage.inputEquipment.click();
		irmIPDetailsPage.inputEquipment.keys(this.clearKeys);
		irmIPDetailsPage.inputEquipment.setValue('WR1100');
	}
	closeSubItem()
	{
		irmIPDetailsPage.btnCloseSubItem.click();
		browser.pause(1000);
	}
	editReceivedDateField()
	{
		irmIPDetailsPage.changeReceiveDate.click();
		browser.pause(500);
		browser.keys(this.enterkeys);
	}
	isValidDateFormat(inputDate) {
		// Convert the input date to "MM-DD-YYYY" format
		const parts = inputDate.split("-");
		const formattedDate = `${parts[1]}-${parts[2]}-${parts[0]}`;
	
		// Create a regex pattern for "MM-DD-YYYY"
		const dateFormatPattern = /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-(\d{4})$/;
	
		// Check if the formatted date matches the expected pattern
		return dateFormatPattern.test(formattedDate);
	}
	editDirectlyRD()
	{
		irmIPDetailsPage.changeReceiveDate.keys(this.clearKeys);
		let today = new Date();
    	let year = today.getFullYear();
    	let month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    	let day = String(today.getDate()).padStart(2, '0');
    	// Assemble the date in "MM-DD-YYYY" format
    	//let formattedDate = `${month}-${day}-${year}`;
		irmIPDetailsPage.changeReceiveDate.setValue(month);
		irmIPDetailsPage.changeReceiveDate.setValue(day);
		irmIPDetailsPage.changeReceiveDate.setValue(year);
	}
	emptyRDField()
	{
		irmIPDetailsPage.changeReceiveDate.keys(this.clearKeys);
	}
	enterPurchasePrice()
	{
		irmIPDetailsPage.inputInlineEditing(irmIPDetailsPage.lblPurchasePrice).click();
		irmIPDetailsPage.inputInlineEditing(irmIPDetailsPage.lblPurchasePrice).setValue('2');
	}
	editNoteField()
	{
		this.note = 'InNote' + (Math.floor(new Date() / 1000));
		irmIPDetailsPage.inputInlineEditing(irmIPDetailsPage.lblNote).click();
		irmIPDetailsPage.inputInlineEditing(irmIPDetailsPage.lblNote).keys(this.clearKeys);
		irmIPDetailsPage.inputInlineEditing(irmIPDetailsPage.lblNote).setValue(this.note);
	}
	clickBtnRestore()
	{
		irmIPDetailsPage.btnRestoreInventoryItem.waitForDisplayed();
		irmIPDetailsPage.btnRestoreInventoryItem.waitForClickable();
		irmIPDetailsPage.btnRestoreInventoryItem.click();
	}
	clickBtnSave()
	{
		irmIPDetailsPage.btnSaveInventoryItem.waitForDisplayed();
		irmIPDetailsPage.btnSaveInventoryItem.waitForClickable();
		irmIPDetailsPage.btnSaveInventoryItem.click();
	}
	clickOnCreateRMA()
	{
		browser.pause(3000);
		irmIPDetailsPage.btnRMADotMenu.waitForDisplayed();
		irmIPDetailsPage.btnRMADotMenu.waitForClickable();
		irmIPDetailsPage.btnRMADotMenu.click();
		irmIPDetailsPage.btnCreateRMA.waitForDisplayed();
		irmIPDetailsPage.btnCreateRMA.waitForClickable();
		irmIPDetailsPage.btnCreateRMA.click();
	}
	checkIfCreateRMADisabled()
	{
		browser.pause(3000);
		irmIPDetailsPage.statusOfRMA.waitForDisplayed();
		if(irmIPDetailsPage.statusOfRMA.isExisting())
		{
			this.sortTheRMAByStatus();
			if(irmIPDetailsPage.statusOfRMA.getText()==='shipped')
				{
					this.reopenCreatedRMA();
					this.searchLocations();
					this.clickAndSelectLocation();
					this.clickBtnSaveRMA();
				}
		}
	}
	enterValidDate()
	{
		irmIPDetailsPage.lblRMADate.waitForClickable();
		irmIPDetailsPage.lblRMADate.click();
		browser.pause(1000);
		browser.keys(this.enterkeys);
		//irmIPDetailsPage.inputInlineEditing(irmIPDetailsPage.lblRMADate).keys(this.clearKeys);
		//let today = new Date();
    	//let year = today.getFullYear();
    	//let month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    	//let day = String(today.getDate()).padStart(2, '0');
    	// Assemble the date in "MM-DD-YYYY" format
    	//let formattedDate = `${month}-${day}-${year}`;
		//irmIPDetailsPage.inputInlineEditing(irmIPDetailsPage.lblRMADate).setValue(month);
		//irmIPDetailsPage.inputInlineEditing(irmIPDetailsPage.lblRMADate).setValue(day);
		//irmIPDetailsPage.inputInlineEditing(irmIPDetailsPage.lblRMADate).setValue(year);
	}
	enterAndSelectVendor()
	{
		irmIPDetailsPage.inputVendor.waitForClickable();
		irmIPDetailsPage.inputVendor.click();
		browser.pause(1000);
		//irmIPDetailsPage.vendorName.waitForDisplayed();
		irmIPDetailsPage.vendorName('ISP Vendors').click();
	}
	enterValidRMA()
	{
		this.rmaNumber = 'RMA' + (Math.floor(new Date() / 1000));
		irmIPDetailsPage.inputRMANumber.click();
		irmIPDetailsPage.inputRMANumber.setValue(this.rmaNumber);
	}
	enterReturnDate()
	{
		irmIPDetailsPage.rmaRDinput.waitForClickable();
		irmIPDetailsPage.rmaRDinput.click();
		browser.pause(1000);
		browser.keys(this.enterkeys);
	}
	enterValidRTN()
	{
		let rmaRTN = 'RTN_' + (Math.floor(new Date() / 1000));
		irmIPDetailsPage.rmaRTNinput.click();
		irmIPDetailsPage.rmaRTNinput.setValue(rmaRTN);
	}
	enterValidShipDate()
	{
		irmIPDetailsPage.rmaShippingDate.waitForClickable();
		irmIPDetailsPage.rmaShippingDate.click();
		browser.pause(1000);
		browser.keys(this.enterkeys);
	}
	enterValidSTN()
	{
		let rmaSTN = 'STN_' + (Math.floor(new Date() / 1000));
		irmIPDetailsPage.rmaSTNinput.click();
		irmIPDetailsPage.rmaSTNinput.setValue(rmaSTN);
	}
	clickBtnSaveRMA()
	{
		irmIPDetailsPage.rmaBtnSave.waitForClickable();
		irmIPDetailsPage.rmaBtnSave.click();
		irmIPDetailsPage.confirmationMsg.waitForDisplayed();
		browser.pause(2000);
		irmIPDetailsPage.btnCloseRMA.click();
		browser.pause(2000);
	}
	clickBtnSaveToUpdatedRMA()
	{
		irmIPDetailsPage.rmaBtnSave.waitForClickable();
		irmIPDetailsPage.rmaBtnSave.click();
	}
	searchLocations()
	{
		irmIPDetailsPage.rmaLocationInput.waitForDisplayed();
		irmIPDetailsPage.rmaLocationInput.waitForClickable();
		irmIPDetailsPage.rmaLocationInput.click();
		browser.pause(1000);
		var allOptions = irmIPDetailsPage.dropdown1stOption;
		console.log('total options are '+allOptions.length);
		for (let i = 0; i < allOptions.length; i++) {
			//console.log('index is' +i +' and value is'+allOptions[i].getText());
		  }
		this.rmaLocation = allOptions[2].getText();
		irmIPDetailsPage.rmaLocationInput.setValue(this.rmaLocation);
	}
	sortTheRMAByStatus()
	{
		browser.pause(1500);
		if(irmIPDetailsPage.statusOfRMA.getText()==='complete')
		{
			irmIPDetailsPage.colStatus.moveTo();
			browser.keys(this.Esckeys);
			irmIPDetailsPage.colStatus.click();
			browser.pause(300);
			irmIPDetailsPage.colStatus.click();
			browser.pause(1500);
			browser.keys(this.Esckeys);
			browser.pause(300);
			irmIPDetailsPage.statusOfRMA.click();
			console.log('sorted status column');
		}
	}
	reopenCreatedRMA()
	{
		console.log('going to re-open');
		browser.keys(this.Esckeys);
		browser.pause(300);
		irmIPDetailsPage.statusOfRMA.click();
		browser.pause(4000);
	}
	clickAndSelectLocation()
	{
		irmIPDetailsPage.rmaLocationInput.waitForClickable();
		irmIPDetailsPage.rmaLocationInput.click();
		browser.pause(500);
		browser.keys(this.downArrowKey);
		browser.keys(this.downArrowKey);
		browser.keys(this.enterkeys);
		browser.pause(1000);
	}
	clearSelectedLocation()
	{
		irmIPDetailsPage.rmaLocationInput.waitForClickable();
		irmIPDetailsPage.rmaLocationInput.click();
		irmIPDetailsPage.rmaLocationInput.keys(this.clearKeys);
	}
	closeOpenedRMA()
	{
		browser.pause(4000);
		if(irmIPDetailsPage.btnCloseRMA.isExisting())
		{
			irmIPDetailsPage.btnCloseRMA.click();
		}
		browser.pause(1000);
	}
	updateRMADate()
	{
		irmIPDetailsPage.lblRMADate.waitForClickable();
		irmIPDetailsPage.lblRMADate.click();
		browser.pause(1000);
		browser.keys(this.downArrowKey);
		browser.pause(500);
		browser.keys(this.enterkeys);
	}
	updateVendor()
	{
		irmIPDetailsPage.inputVendor.waitForClickable();
		irmIPDetailsPage.inputVendor.click();
		browser.pause(1000);
		//irmIPDetailsPage.vendorName.waitForDisplayed();
		irmIPDetailsPage.vendorName('Samsung').click();
	}
	emptyRMAError()
	{
		irmIPDetailsPage.inputRMANumber.click();
		irmIPDetailsPage.inputRMANumber.keys(this.clearKeys);
	}
	updateRMANumber()
	{
		this.rmaNumber = 'URMA' + (Math.floor(new Date() / 1000));
		irmIPDetailsPage.inputRMANumber.click();
		irmIPDetailsPage.inputRMANumber.keys(this.clearKeys);
		irmIPDetailsPage.inputRMANumber.setValue(this.rmaNumber);
		browser.pause(1000);
	}
	updateEmptyRD()
	{
		irmIPDetailsPage.rmaRDinput.click();
		irmIPDetailsPage.rmaRDinput.keys(this.clearKeys);
	}
	updateRD()
	{
		irmIPDetailsPage.rmaRDinput.waitForClickable();
		irmIPDetailsPage.rmaRDinput.click();
		browser.pause(1000);
		browser.keys(this.downArrowKey);
		browser.pause(500);
		browser.keys(this.enterkeys);
	}
	updateEmptyRTN()
	{
		irmIPDetailsPage.rmaRTNinput.click();
		irmIPDetailsPage.rmaRTNinput.keys(this.clearKeys);
	}
	updateRTN()
	{
		let rmaRTN = 'URTN_' + (Math.floor(new Date() / 1000));
		irmIPDetailsPage.rmaRTNinput.click();
		irmIPDetailsPage.rmaRTNinput.setValue(rmaRTN);
		browser.pause(1000);
	}
	updateEmptySD()
	{
		irmIPDetailsPage.rmaShippingDate.click();
		irmIPDetailsPage.rmaShippingDate.keys(this.clearKeys);
	}
	updateSD()
	{
		//irmIPDetailsPage.rmaShippingDate.waitForClickable();
		irmIPDetailsPage.rmaShippingDate.click();
		browser.pause(1000);
		browser.keys(this.downArrowKey);
		browser.pause(500);
		browser.keys(this.enterkeys);
	}
	updateEmptySTN()
	{
		irmIPDetailsPage.rmaSTNinput.click();
		irmIPDetailsPage.rmaSTNinput.keys(this.clearKeys);
	}
	updateSTN()
	{
		let rmaSTN = 'USTN_' + (Math.floor(new Date() / 1000));
		irmIPDetailsPage.rmaSTNinput.click();
		irmIPDetailsPage.rmaSTNinput.setValue(rmaSTN);
		browser.pause(1000);
	}
	navigateToActivityLogs()
	{
		irmIPDetailsPage.activityLogs.waitForDisplayed();
		irmIPDetailsPage.activityLogs.scrollIntoView();
	}
	searchActivity(search)
	{
		irmIPDetailsPage.activitySearchArea.click();
		irmIPDetailsPage.activitySearchArea.setValue(search);
	}
	clickOnFirstActivityLog()
	{
		this.activityDetails = irmIPDetailsPage.valueOfFirstactivityDetails.getText();
		irmIPDetailsPage.valueOfFirstactivityDate.click();
	}

	clickIPHamburgerMenu()
	{
		irmIPDetailsPage.inventoryMeatBall.waitForClickable();
		irmIPDetailsPage.inventoryMeatBall.click();
	}
	keepInventoryName()
	{
		this.inventoryName = irmIPDetailsPage.highlightInventoryRowData.getText();
	}
	disableInlineEditing()
	{
		browser.pause(3000);
		console.log('going to disable inline editing');
		if(irmIPDetailsPage.InventorySelectedOptions(irmIPDetailsPage.inventoryTableInlineEditing).getAttribute('class').includes('text-success'))
		{irmIPDetailsPage.inventoryTableInlineEditing.waitForDisplayed();
			irmIPDetailsPage.inventoryTableInlineEditing.waitForClickable();
			irmIPDetailsPage.inventoryTableInlineEditing.moveTo();
			irmIPDetailsPage.inventoryTableInlineEditing.click();
			browser.pause(3000);}
		else
		{console.log('going to executed else part');browser.keys(this.Esckeys);}
	}
	refreshBrowser()
	{
		browser.refresh();
	}
	doubleClickOnColumnField()
	{
		irmIPDetailsPage.highlightInventoryRowData.moveTo();
		browser.pause(1000);
		irmIPDetailsPage.highlightInventoryRowData.click();
		browser.pause(2000);
	}

    clickOnInventorySearchbar()
	{
		browser.pause(3000);
		irmIPDetailsPage.inventoryHeaderbuttons[0].waitForDisplayed();
		irmIPDetailsPage.inventoryHeaderbuttons[0].click();
		irmIPDetailsPage.inventorySearch.click();
	}
	enterInventoryToSearch(itemToSearch)
	{
		//itemToSearch = itemToSearch.replace(/['"]+/g, '');
		irmIPDetailsPage.inventorySearch.waitForDisplayed();
		irmIPDetailsPage.inventorySearch.waitForClickable();
		//irmIPDetailsPage.inventorySearch.scrollIntoView();
		irmIPDetailsPage.inventorySearch.click();
		irmIPDetailsPage.inventorySearch.keys(this.clearKeys);
		browser.pause(1000);
		irmIPDetailsPage.inventorySearch.setValue(itemToSearch);
		browser.pause(1000);
		// irmIPDetailsPage.inventoryHeaderbuttons[3].click();
		// browser.pause(1000);
		// if(irmIPDetailsPage.isListViewSelected.getAttribute('style').includes('hidden'))
		// {
		// 	irmIPDetailsPage.inventoryTableView.waitForDisplayed();
		// 	irmIPDetailsPage.inventoryTableView.waitForClickable();
		// 	irmIPDetailsPage.inventoryTableView.click();
		//  	browser.pause(2000);
		// }
		// else{browser.keys('\ue00c');}
		irmIPDetailsPage.highlightInventoryRowData.waitForDisplayed();
		irmIPDetailsPage.highlightInventoryRowData.waitForExist();
		this.inventoryName = irmIPDetailsPage.highlightInventoryRowData.getText();
		console.log('extracted inventory value is '+this.inventoryName);
	}
	verifySortedInInventory()
	{
		browser.pause(3000);
		let afterSort = irmIPDetailsPage.firstInventoryDrawerRowData[1].getText();
		console.log('before sorted is '+this.beforeSort);
		console.log('after sorted is '+afterSort);
		expect(this.beforeSort).to.be.not.eql(afterSort);
	}
	
//////////////////////////////////////// IRMInventoryDetails /////////////////////////////////////////////////////

verifyDrawerHamburgerItems(fieldsData)
	{
		browser.pause(5000);
		var table = fieldsData.raw();
		irmIPDetailsPage.inventoryDrawerMeatBall.waitForDisplayed();
		irmIPDetailsPage.inventoryDrawerMeatBall.waitForClickable();
		expect(irmIPDetailsPage.inventoryDrawerMeatBall.isExisting()).to.be.true;
		irmIPDetailsPage.inventoryDrawerMeatBall.click();
		browser.pause(1000);
		irmIPDetailsPage.btnChooseColumn.waitForDisplayed();
		expect(irmIPDetailsPage.changePoStatus(table[0][0]).isExisting()).to.be.true;
		console.log(table[0][0]+' verified');
		expect(irmIPDetailsPage.changePoStatus(table[1][0]).isExisting()).to.be.true;
		console.log(table[1][0]+' verified');
		//browser.key(this.Esckeys);
		browser.pause(1000);
	}
	verifyColumnsChanged()
	{
		browser.pause(1500);
		var allRelatedData = irmIPDetailsPage.inventoryDrawerColumns;
		this.afterColumns = allRelatedData[1].getText();
		expect(this.beforeColumns).to.be.not.eql(this.afterColumns);
	}
	verifyInvSearchbar()
	{
		expect(irmIPDetailsPage.drawerSearch.isExisting()).to.be.true;
	}
	verifyDrawerSearchedResult()
	{
		var searchedValue = irmIPDetailsPage.firstInventoryDrawerRowData[2].getText();
		expect(this.beforeSort).to.be.eql(searchedValue);
	}
	verifyDotmenuOfDrawer()
	{
		irmIPDetailsPage.firstInventoryDrawerRowData[0].moveTo();
		expect(irmIPDetailsPage.btnDotMenu.isExisting()).to.be.true;
	}
	verifybtnDeleteOfDotMenu()
	{
		irmIPDetailsPage.btnDotMenu.waitForClickable();
		irmIPDetailsPage.btnDotMenu.click();
		irmIPDetailsPage.btnDeleteItem.waitForDisplayed();
		expect(irmIPDetailsPage.btnDeleteItem.isExisting()).to.be.true;
	}
	verifyCofirmDeletePopUp()
	{
		expect(irmIPDetailsPage.txtPopUpContent.isExisting()).to.be.true;
		expect(irmIPDetailsPage.btnPopUpYes.isExisting()).to.be.true;
		expect(irmIPDetailsPage.btnPopUpNo.isExisting()).to.be.true;
	}
	verifyInventoryItemEditDrawer()
	{
		irmIPDetailsPage.inventoryText.waitForDisplayed();
		expect(irmIPDetailsPage.inventoryText.isExisting()).to.be.true;
	}
	verifyInventoryItemDetails()
	{
		browser.pause(5000);
		irmIPDetailsPage.lblSerialNum.waitForDisplayed();
		expect(irmIPDetailsPage.lblSerialNum.isExisting()).to.be.true;
		expect(irmIPDetailsPage.lblLocation.isExisting()).to.be.true;
		expect(irmIPDetailsPage.lblReceiveDate.isExisting()).to.be.true;
		expect(irmIPDetailsPage.lblPurchasePrice.isExisting()).to.be.true;
	}
	verifyAssetTag()
	{
		irmIPDetailsPage.lblAssertTag.waitForDisplayed();
		expect(irmIPDetailsPage.lblAssertTag.isExisting()).to.be.true;
	}
	validateEmptySerialNumber()
	{
		irmIPDetailsPage.inputSerial.click();
		irmIPDetailsPage.inputSerial.keys(this.clearKeys);
		expect(irmIPDetailsPage.serialError.isExisting()).to.be.true;
		expect(irmIPDetailsPage.serialError.getText()).to.be.eql('Serial is required');
	}
	editSerialItemWithSameNumber()
	{
		irmIPDetailsPage.inputSerial.setValue(this.serialNumber);
		expect(irmIPDetailsPage.btnSaveInventory.isClickable()).to.be.false;
	}
	verifyItemLocation()
	{
		expect(irmIPDetailsPage.selectProfileItem('Default Location').isExisting()).to.be.true;
	}
	verifyEmptyItemLocation()
	{
		expect(irmIPDetailsPage.LocationError.isExisting()).to.be.true;
	}
	verifyItemEquipment()
	{
		expect(irmIPDetailsPage.selectProfileItem('WR1100').isExisting()).to.be.true;
		browser.keys(this.Esckeys);
	}
	verifyReceivedDateFormat()
	{
		console.log('received date value is '+irmIPDetailsPage.changeReceiveDate.getValue());
		expect(this.isValidDateFormat(irmIPDetailsPage.changeReceiveDate.getValue())).to.be.true;
	}
	verifyEmptyEDError()
	{
		browser.pause(1000);
		expect(irmIPDetailsPage.emptyReceiveDateError.isExisting()).to.be.true;
	}
	verifybtnSaveAndRestore()
	{
		expect(irmIPDetailsPage.btnSaveInventoryItem.isExisting()).to.be.true;
		expect(irmIPDetailsPage.btnRestoreInventoryItem.isExisting()).to.be.true;
	}
	verifyChangesRestored()
	{
		console.log('restore button changed and serial '+irmIPDetailsPage.inputSerial.getValue());
		expect(irmIPDetailsPage.btnRestoreInventoryItem.isExisting()).to.be.true;
		browser.pause(500);
		console.log('restored clicked');
		expect(irmIPDetailsPage.inputSerial.getValue()).to.be.eql(this.serialNumber);
		console.log('restored verified');
	}
	verifyINUpdated()
	{
		browser.pause(3000);
		//irmIPDetailsPage.confirmationMsg.waitForDisplayed();
		expect(irmIPDetailsPage.inputInlineEditing(irmIPDetailsPage.lblNote).getValue()).to.be.eql(this.note);
	}
	verifyRMAFields()
	{
		browser.pause(5000);
		irmIPDetailsPage.lblRMADate.waitForDisplayed();
		irmIPDetailsPage.lblRMAVendor.waitForDisplayed();
		expect(irmIPDetailsPage.lblRMADate.isExisting()).to.be.true;
		expect(irmIPDetailsPage.lblRMAStatus.isExisting()).to.be.true;
		expect(irmIPDetailsPage.lblRMAVendor.isExisting()).to.be.true;
		expect(irmIPDetailsPage.lblRMANumber.isExisting()).to.be.true;
		expect(irmIPDetailsPage.lblRMAReturnDate.isExisting()).to.be.true;
		expect(irmIPDetailsPage.lblRMARTN.isExisting()).to.be.true;
		expect(irmIPDetailsPage.lblRMAShippedDate.isExisting()).to.be.true;
		expect(irmIPDetailsPage.lblRMASTN.isExisting()).to.be.true;
		expect(irmIPDetailsPage.lblRMALocation.isExisting()).to.be.true;
		console.log('fields verified');
	}
	verifyStatusGetChanged(status)
	{
		browser.pause(1000);
		expect(irmIPDetailsPage.rmaStatusValue.getValue()).to.be.eql(status);
	}
	verifyRDandRTNenabled()
	{
		expect(irmIPDetailsPage.rmaRDinput.isClickable()).to.be.true;
		expect(irmIPDetailsPage.rmaRTNinput.isClickable()).to.be.true;
	}
	verifyArrowRTNandSTN()
	{
		expect(irmIPDetailsPage.rmaRTNArrow.isExisting()).to.be.true;
		expect(irmIPDetailsPage.rmaSTNArrow.isExisting()).to.be.true;
	}
	verifyLocationFieldEnabled()
	{
		expect(irmIPDetailsPage.rmaLocationInput.isClickable()).to.be.true;
	}
	verifyLocationListed()
	{
		expect(irmIPDetailsPage.selectProfileItem(this.rmaLocation).isExisting()).to.be.true;
		browser.keys(this.Esckeys);
	}
	verifyRMASaveButtonEnabled()
	{
		expect(irmIPDetailsPage.rmaBtnSave.isClickable()).to.be.true;
	}
	verifyRMACancelButtonEnabled()
	{
		expect(irmIPDetailsPage.rmaBtnCancel.isClickable()).to.be.true;
	}
	verifyRMARestoreButtonEnabled()
	{
		expect(irmIPDetailsPage.rmaBtnRestore.isClickable()).to.be.true;
	}
	verifyRMAgetCreated()
	{
		expect(irmIPDetailsPage.firstRowOfRma.getText()).to.be.eql(this.rmaNumber);
	}
	verifyCreateRMANotPresent()
	{
		expect(irmIPDetailsPage.btnRMADotMenu.isExisting()).to.be.false;
	}
	verifyCreateRMAEnabled()
	{
		expect(irmIPDetailsPage.btnRMADotMenu.isExisting()).to.be.true;
	}
	verifyEmptyRMAError()
	{
		browser.pause(200);
		expect(irmIPDetailsPage.rmaError.getAttribute('class').includes('Mui-error')).to.be.true;
	}
	verifyEmptyRDError()
	{
		browser.pause(200);
		expect(irmIPDetailsPage.rDError.getAttribute('class').includes('Mui-error')).to.be.true;
	}
	verifyEmptyRTNError()
	{
		browser.pause(200);
		expect(irmIPDetailsPage.RTNError.getAttribute('class').includes('Mui-error')).to.be.true;
	}
	verifyEmptySDError()
	{
		browser.pause(200);
		expect(irmIPDetailsPage.SDError.getAttribute('class').includes('Mui-error')).to.be.true;
	}
	verifyEmptySTNError()
	{
		browser.pause(200);
		expect(irmIPDetailsPage.STNError.getAttribute('class').includes('Mui-error')).to.be.true;
	}
	verifyRMAupdated()
	{
		irmIPDetailsPage.confirmationMsg.waitForDisplayed();
		expect(irmIPDetailsPage.confirmationMsg.isExisting()).to.be.true;
	}
	verifyUpdatedRMAReflected()
	{
		if(irmIPDetailsPage.firstRowOfRma.getText()!==this.rmaNumber)
		{
			irmIPDetailsPage.colRMA.moveTo();
			browser.keys(this.Esckeys);
			irmIPDetailsPage.colRMA.click();
			browser.pause(300);
			irmIPDetailsPage.colRMA.click();
			browser.pause(1500);
			browser.keys(this.Esckeys);
			browser.pause(300);
			if(irmIPDetailsPage.firstRowOfRma.getText()!==this.rmaNumber)
			{
				irmIPDetailsPage.colRMA.moveTo();
				browser.keys(this.Esckeys);
				irmIPDetailsPage.colRMA.click();
				browser.pause(300);
				irmIPDetailsPage.colRMA.click();
				browser.pause(1500);
				browser.keys(this.Esckeys);
				browser.pause(300);
			}
		}
		expect(irmIPDetailsPage.firstRowOfRma.getText()).to.be.eql(this.rmaNumber);
	}

	verifyColumnsOfActivityLogs()
	{
		browser.pause(3000);
		expect(irmIPDetailsPage.activityDateCol.isExisting()).to.be.true;
		expect(irmIPDetailsPage.activityTypeCol.isExisting()).to.be.true;
		expect(irmIPDetailsPage.activityDetailsCol.isExisting()).to.be.true;
		expect(irmIPDetailsPage.activityAppUserCol.isExisting()).to.be.true;
	}
	sortAndVerifyActivityCol()
	{
		browser.pause(3000);
		let beforeSort = irmIPDetailsPage.valueOfFirstactivityDate.getText();
		irmIPDetailsPage.activityDateCol.moveTo();
		browser.keys(this.Esckeys);
		irmIPDetailsPage.activityDateCol.click();
		browser.pause(500);
		let afterSort = irmIPDetailsPage.valueOfFirstactivityDate.getText();
		console.log('value before sort is '+beforeSort);
		console.log('value before sort is '+afterSort);
		expect(beforeSort).to.be.not.eql(afterSort);
	}
	verifyActivitySearchbar()
	{
		expect(irmIPDetailsPage.activitySearchArea.isExisting()).to.be.true;
	}
	verifySearchResult(result)
	{
		browser.pause(500);
		expect(irmIPDetailsPage.valueOfFirstactivityType.getText()).to.be.eql(result);
	}
	verifyHistoryChangeInformation()
	{
		browser.pause(3000);
		var allchanges = irmIPDetailsPage.changedHistoryDialogDetails;
		console.log('column details is '+this.activityDetails);
		console.log('dialog Details is '+allchanges[0].getText());
		expect(this.activityDetails.includes(allchanges[0].getText())).to.be.true;

	}

	//////////////////////////////////////// IRMInventory /////////////////////////////////////////////////////
	verifyInlineEditingGetDisabled()
	{
		browser.pause(5000);
		//console.log('inventory name from param '+this.inventoryName);
		//console.log('inventory name from drawer '+irmIPDetailsPage.inventoryDrawerHeading.getText());
		expect(irmIPDetailsPage.inventoryDrawerHeading.getText().includes(this.inventoryName)).to.be.true;
	}
	clickBtnSave()
	{
		irmIPDetailsPage.btnSaveInventory.waitForClickable();
		irmIPDetailsPage.btnSaveInventory.click();
		irmIPDetailsPage.confirmationMsg.waitForDisplayed();
		browser.pause(3000);
	}
}
module.exports = new IRMInventoryDetailsActions();
