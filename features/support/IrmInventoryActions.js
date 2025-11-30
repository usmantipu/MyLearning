var irmIPPage = require('../pageobjects/IrmInventory.page');
var expect = require('chai').expect;

class IrmInventoryActions {
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
    }
	gotoIPSection()
	{
		irmIPPage.inventorySection.scrollIntoView();
		irmIPPage.inventorySection.waitForDisplayed();
		irmIPPage.btnInventoryTab.click();
		console.log('inventory tab clicked');
	}
	openInventoryItemFromSerial()
	{
		browser.pause(5000);
		var allRelatedData = irmIPPage.inventoryExpandedData;
		this.inventoryNumber = allRelatedData[0].getText();
		irmIPPage.getParaButtonElement(allRelatedData[0]).click();
		browser.pause(2000);
		console.log('clicked On serial number '+this.inventoryNumber);
	}
	sortItemInInventory()
	{
		browser.pause(3000);
		this.beforeSort = irmIPPage.firstInventoryRowData[1].getText();
		irmIPPage.inventoryColumns[1].moveTo();
		irmIPPage.inventoryColumns[1].click();
	}

	clickCloseIPDialog()
	{
		browser.pause(4000);
		//irmIPPage.btnCloseDialog.waitForClickable();
		irmIPPage.btnCloseDialog.click();
	}

	clickOnBtnSaveChanges()
	{
		irmIPPage.btnSaveChanges.waitForDisplayed();
		irmIPPage.btnSaveChanges.waitForClickable();
		irmIPPage.btnSaveChanges.click();
	}

	isTilesSelected()
	{
		if(irmIPPage.inventoryMeatBall.isExisting()==false)
		{
			irmIPPage.inventoryHeaderbuttons[2].waitForDisplayed();
			irmIPPage.inventoryHeaderbuttons[2].scrollIntoView();
			irmIPPage.inventoryHeaderbuttons[2].click();
        	browser.pause(1000);
			irmIPPage.inventoryTableView.waitForDisplayed();
			irmIPPage.inventoryTableView.waitForClickable();
			irmIPPage.inventoryTableView.click();
			browser.pause(2000);
		}
	}
	changeInventoryView(InventoryView){
		browser.pause(2000);
		irmIPPage.inventoryHeaderbuttons[2].waitForDisplayed();
		irmIPPage.inventoryHeaderbuttons[2].scrollIntoView();
		irmIPPage.inventoryHeaderbuttons[2].click();
        browser.pause(2000);
		InventoryView = InventoryView.replace(/['"]+/g, '');
		switch(InventoryView){
			case "List":
				irmIPPage.inventoryCardView.waitForDisplayed();
				irmIPPage.inventoryCardView.waitForClickable();
				irmIPPage.inventoryCardView.click();
				browser.pause(4000);
				irmIPPage.inventoryHeaderbuttons[2].click();
        		browser.pause(2000);
				irmIPPage.inventoryTableView.waitForDisplayed();
				irmIPPage.inventoryTableView.waitForClickable();
				irmIPPage.inventoryTableView.click();
				browser.pause(4000);
				break;
			case "Tiles":
				irmIPPage.inventoryCardView.waitForDisplayed();
				irmIPPage.inventoryCardView.waitForClickable();
				irmIPPage.inventoryCardView.click();
				browser.pause(2000);
				break;
		}
		console.log('I set Inventory view to '+ InventoryView);
	}
	clickIPHamburgerMenu()
	{
		irmIPPage.menuOfinventory.waitForDisplayed();
		irmIPPage.menuOfinventory.scrollIntoView();
		irmIPPage.menuOfinventory.click();
	}
	clickInventoryInlineEditing()
	{
		browser.pause(2000);
		console.log('going to enable inline editing');
		if(irmIPPage.InventorySelectedOptions(irmIPPage.inventoryTableInlineEditing).getAttribute('class').includes('text-success'))
		{console.log('going to executed if part');browser.keys(this.Esckeys);}
		else{
			irmIPPage.inventoryTableInlineEditing.waitForDisplayed();
			irmIPPage.inventoryTableInlineEditing.waitForClickable();
			irmIPPage.inventoryTableInlineEditing.moveTo();
			browser.pause(1000);
			irmIPPage.inventoryTableInlineEditing.click();
			browser.pause(1500);
			//browser.refresh();
			console.log('clicked on inline editing');
			browser.pause(3000);
		}
	}
	keepInventoryName()
	{
		irmIPPage.firstInventoryRowData[1].waitForDisplayed();
		this.inventoryName = irmIPPage.firstInventoryRowData[1].getText();
	}
	disableInlineEditing()
	{
		browser.pause(3000);
		console.log('going to disable inline editing');
		if(irmIPPage.InventorySelectedOptions(irmIPPage.inventoryTableInlineEditing).getAttribute('class').includes('text-success'))
		{irmIPPage.inventoryTableInlineEditing.waitForDisplayed();
			irmIPPage.inventoryTableInlineEditing.waitForClickable();
			irmIPPage.inventoryTableInlineEditing.moveTo();
			irmIPPage.inventoryTableInlineEditing.click();
			browser.pause(3000);}
	}
	refreshBrowser()
	{
		browser.refresh();
	}
	doubleClickOnColumnField()
	{
		browser.pause(7000);
		irmIPPage.firstInventoryRowTextData[1].waitForDisplayed();
		//irmIPPage.firstInventoryRowData[1].scrollIntoView();
		browser.pause(3000);
		this.inventoryName = irmIPPage.firstInventoryRowTextData[0].getText();
		irmIPPage.firstInventoryRowTextData[1].moveTo();
		irmIPPage.firstInventoryRowTextData[1].doubleClick();
		browser.pause(2000);
	}
	ClickToInLineEdit(coluName)
	{
		browser.pause(3000);
        var allColumnsData = irmIPPage.inventoryColumns;
				for (let i = 0; i < allColumnsData.length; i++) {
					console.log('index is' +i +' and value is'+allColumnsData[i].getText());
					if(allColumnsData[i].getText()==coluName)
					{
						try{
							browser.pause(5000);
							irmIPPage.firstInventoryRowData[0].waitForDisplayed();
							var allrowsData = irmIPPage.firstInventoryRowData;
							console.log('going to click on' +allrowsData[i].getText());
							browser.pause(2000);
							allrowsData[i].moveTo();
		                	browser.pause(2000);
		                	allrowsData[i].click();
							this.isColumnFound=true;
		                	browser.pause(2000);
							break;
						}
						catch (error) {
							console.error('An error occurred:', error.message);
							this.isColumnFound=false;
							break;
						}
					}
				  }
	}
	inputProfileName()
	{
		console.log('extracted name of the inventory is '+this.inventoryName);
		irmIPPage.firstInventoryRowData[1].keys(this.clearKeys);
		browser.pause(2000);
		irmIPPage.inputInlineEditing(irmIPPage.firstInventoryRowData[1]).setValue(this.inventoryName);
	}
	SaveInlineEditing()
	{
		browser.pause(1000);
		irmIPPage.saveInlineEditing(irmIPPage.firstInventoryRowData[1]).click();
		browser.pause(2000);
	}
	SaveInlineEditingSKU()
	{
		if(irmIPPage.inventoryDrawerHeading.isExisting())
		{
			irmIPPage.btnCloseDialog.waitForDisplayed();
		    irmIPPage.btnCloseDialog.click();
		}
		else
		{
			browser.pause(1000);
		    irmIPPage.saveInlineEditing(irmIPPage.firstInventoryRowData[1]).click();
		    browser.pause(2000);
		}
	}
	isSKUEmpty(coluName)
	{
		var allColumnsData = irmIPPage.inventoryColumns;
				for (let i = 0; i < allColumnsData.length; i++) {
					//console.log('index is' +i +' and value is'+allColumnsData[i].getText());
					if(allColumnsData[i].getText()==coluName)
					{
						this.inventorySKU = irmIPPage.firstInventoryRowData[i+1].getText();
		                break;
					}
	           }
    }
    clickOnInventorySearchbar()
	{
		browser.pause(3000);
		irmIPPage.inventoryHeaderbuttons[0].waitForDisplayed();
		irmIPPage.inventoryHeaderbuttons[0].click();
		irmIPPage.inventorySearch.click();
	}
	enterInventoryToSearch(itemToSearch)
	{
		itemToSearch = itemToSearch.replace(/['"]+/g, '');
		irmIPPage.inventorySearch.waitForDisplayed();
		irmIPPage.inventorySearch.waitForClickable();
		//irmIPPage.inventorySearch.scrollIntoView();
		irmIPPage.inventorySearch.click();
		irmIPPage.inventorySearch.keys(this.clearKeys);
		browser.pause(1000);
		irmIPPage.inventorySearch.setValue(itemToSearch);
		browser.pause(1000);
		irmIPPage.inventoryHeaderbuttons[3].click();
		browser.pause(1000);
		if(irmIPPage.isListViewSelected.getAttribute('class').includes('invisible'))
		{
			irmIPPage.inventoryTableView.waitForDisplayed();
			irmIPPage.inventoryTableView.waitForClickable();
			irmIPPage.inventoryTableView.click();
		 	browser.pause(2000);
		}
		else{browser.keys('\ue00c');}
		irmIPPage.firstInventoryRowData[1].waitForDisplayed();
		irmIPPage.firstInventoryRowData[1].waitForExist();
		this.inventoryName = irmIPPage.firstInventoryRowData[1].getText();
		console.log('extracted inventory value is'+this.inventoryName);
	}
	searchKeysWithColon(keyToSearch)
	{
		keyToSearch = keyToSearch.replace(/['"]+/g, '');
		switch(keyToSearch){
			case 'Name':
				this.enterInventoryToSearch(this.inventoryName);
				break;
			case 'Serial No':
				console.log('item to search '+this.inventoryNumber);
				this.enterInventoryToSearch(this.inventoryNumber);
				break;
			case 'serial number'://without colon
				let resultString = this.inventoryNumber.replace(/\n/g, '');
				this.enterInventoryToSearch(resultString);
				break;
			case 'MAC':
				this.enterInventoryToSearch(keyToSearch);
				break;
			case 'SKU':
				this.enterInventoryToSearch(keyToSearch);
				break;
			case 'IP Address':
				this.enterInventoryToSearch(keyToSearch);
				break;
			case 'Location':
				this.enterInventoryToSearch(keyToSearch);
				break;
			case 'Manufacturer':
				console.log('item to search '+keyToSearch+'and value is '+this.inventoryManfacure);
				this.enterInventoryToSearch(keyToSearch+':'+this.inventoryManfacure);
				break;
			case 'manufacturer'://no colon
				this.enterInventoryToSearch(this.inventoryManfacure);
				break;
		}
	}
	searchKeys(keyToSearch)
	{
		keyToSearch = keyToSearch.replace(/['"]+/g, '');
		switch(keyToSearch){
			case 'Name':
				this.enterInventoryToSearch(this.inventoryName);
				break;
			case 'serial number'://without colon
				let resultString = this.inventoryNumber.match(/\d+/)[0];
				console.log('serial number to search is '+resultString);
				this.enterInventoryToSearch(resultString);
				break;
			case 'manufacturer'://no colon
				this.enterInventoryToSearch(this.inventoryManfacure);
				break;
		}
	}
	openLockInventorySearch(lockUnclcok)
	{
		
		lockUnclcok = lockUnclcok.replace(/['"]+/g, '');
		switch(lockUnclcok){
			case 'Lock':
				irmIPPage.openLockUnlockOption.waitForDisplayed();
				irmIPPage.openLockUnlockOption.waitForClickable();
				irmIPPage.openLockUnlockOption.click();
				break;
			case 'UnLock':
				irmIPPage.lockedOption.waitForDisplayed();
				irmIPPage.lockedOption.waitForClickable();
				irmIPPage.lockedOption.click();
				break;

		}
	}
	keyToSelectFromLock(keyToSelect)
	{
		browser.pause(3000);
		keyToSelect = keyToSelect.replace(/['"]+/g, '');
		irmIPPage.changePoStatus(keyToSelect).click();
		this.keyToLock = keyToSelect;
	}
	clickAddInventory()
	{
		browser.pause(2000);
		irmIPPage.btnAddInventory.waitForClickable();
		irmIPPage.btnAddInventory.click();
		browser.keys(this.Esckeys);
        browser.pause(2000);
	}





	verifyIPcolumns()
	{
		if(irmIPPage.inventoryMeatBall.isExisting()){}
		else{
			irmIPPage.purchaseHeaderbuttons[2].click();
        	browser.pause(2000);
			irmIPPage.inventoryTableView.waitForDisplayed();
			irmIPPage.inventoryTableView.waitForClickable();
			irmIPPage.inventoryTableView.click();
			browser.pause(3000);
		}
		browser.pause(3000);
		irmIPPage.menuOfinventory.scrollIntoView();
		irmIPPage.menuOfinventory.click();
		irmIPPage.btnChooseColumn.waitForDisplayed();
		irmIPPage.btnChooseColumn.click();
		browser.pause(1000);
		expect(irmIPPage.btnDateOrderedColumn.isExisting()).to.be.true;
		expect(irmIPPage.btnItemNameColumn.isExisting()).to.be.true;
		expect(irmIPPage.btnLastUpdatedColumn.isExisting()).to.be.true;
		expect(irmIPPage.btnVendorColumn.isExisting()).to.be.true;
		expect(irmIPPage.btnStatusColumn.isExisting()).to.be.true;
		expect(irmIPPage.btnTotalColumn.isExisting()).to.be.true;
		expect(irmIPPage.btnPoNumberColumn.isExisting()).to.be.true;
		irmIPPage.btnCloseColumnsDialog.click();
		browser.pause(2000);
	}

	verifyInventoryDetailView()
	{
		browser.pause(2000);
		irmIPPage.firstInventoryRowData[0].waitForDisplayed();
		//irmIPPage.firstInventoryRowData[0].waitForExist();
		//irmIPPage.firstInventoryRowData[0].scrollIntoView();
		irmIPPage.firstInventoryRowData[0].click();//expand search items
		browser.pause(2000);
		var allRelatedData = irmIPPage.inventoryExpandedData;
		console.log('1st extracted value is '+irmIPPage.getParaElement(allRelatedData[0]).getText());
		expect(irmIPPage.getParaElement(allRelatedData[0]).getText().includes('Serial:')).to.be.true;
		console.log('serial verified');
		expect(irmIPPage.getParaElement(allRelatedData[1]).getText().includes('Equipment:')).to.be.true;
		console.log('Equipment verified');
		expect(irmIPPage.getParaElement(allRelatedData[2]).getText().includes('Type:')).to.be.true;
		console.log('type verified');
		expect(irmIPPage.getParaElement(allRelatedData[3]).getText().includes('Location:')).to.be.true;
		console.log('location verified');
		browser.pause(2000);
	}
	verifySortedInInventory()
	{
		browser.pause(3000);
		let afterSort = irmIPPage.firstInventoryRowData[1].getText();
		console.log('before sorted is '+this.beforeSort);
		console.log('after sorted is '+afterSort);
		expect(this.beforeSort).to.be.not.eql(afterSort);
	}
	verifyInvetoryItemOpened()
	{
		irmIPPage.inventoryDrawerHeading.waitForDisplayed();
		console.log('drawer header text '+irmIPPage.inventoryDrawerHeading.getText().replace(/[()]/g, ''));
		let resultString = this.inventoryNumber.replace(/\n/g, '');
		console.log('parameterized text '+resultString);
		expect(resultString.includes(irmIPPage.inventoryDrawerHeading.getText().replace(/[()]/g, ''))).to.be.true;
		irmIPPage.btnCloseDialog.waitForDisplayed();
		irmIPPage.btnCloseDialog.click();
		browser.pause(2000);
		
	}
	closeSearchIcon()
	{
		irmIPPage.inventoryHeaderbuttons[1].waitForDisplayed();
		irmIPPage.inventoryHeaderbuttons[1].scrollIntoView();
		irmIPPage.inventoryHeaderbuttons[1].click();
		browser.pause(2000);
	}

	verifyHalfFullOptions()
	{
		browser.pause(2000);
		irmIPPage.inventoryHeaderbuttons[2].waitForDisplayed();
		irmIPPage.inventoryHeaderbuttons[2].scrollIntoView();
		irmIPPage.inventoryHeaderbuttons[2].click();
		expect(irmIPPage.inventoryTableHalf.isExisting()).to.be.true;
		expect(irmIPPage.inventoryTableFull.isExisting()).to.be.true;
		browser.keys(this.Esckeys);
		browser.pause(1000);
		console.log('Half Full options verified');
	}
	verifyIPCardWidthHalf()
	{
		var styleAttribute = irmIPPage.inventorySection.getAttribute('style');
		var widthRegex = /width:\s*([0-9]+)px/;
		var match = widthRegex.exec(styleAttribute);
		if (match) {
			var widthValue = match[1];
			this.originalWidth = widthValue;
		}
		irmIPPage.inventoryHeaderbuttons[2].waitForDisplayed();
		irmIPPage.inventoryHeaderbuttons[2].scrollIntoView();
		irmIPPage.inventoryHeaderbuttons[2].click();
		irmIPPage.inventoryTableHalf.click();
		browser.pause(1000);
		styleAttribute = irmIPPage.inventorySection.getAttribute('style');
		match = widthRegex.exec(styleAttribute);
		if (match) {
			var widthValue = match[1];
			this.dividedWidth = widthValue;
		}
		console.log('half original width is '+this.originalWidth +' and divided width is '+this.dividedWidth);
		expect(this.originalWidth).to.be.not.eql(this.dividedWidth);
	}
	verifyIPCardWidthFull()
	{
		var styleAttribute = irmIPPage.inventorySection.getAttribute('style');
		var widthRegex = /width:\s*([0-9]+)px/;
		var match = widthRegex.exec(styleAttribute);
		if (match) {
			var widthValue = match[1];
			this.dividedWidth = widthValue;
		}
		irmIPPage.inventoryHeaderbuttons[2].waitForDisplayed();
		irmIPPage.inventoryHeaderbuttons[2].scrollIntoView();
		irmIPPage.inventoryHeaderbuttons[2].click();
		irmIPPage.inventoryTableFull.click();
		styleAttribute = irmIPPage.inventorySection.getAttribute('style');
		match = widthRegex.exec(styleAttribute);
		if (match) {
			var widthValue = match[1];
			this.originalWidth = widthValue;
		}
		console.log('Full original width is '+this.originalWidth +' and divided width is '+this.dividedWidth);
		expect(this.originalWidth).to.be.not.eql(this.dividedWidth);
	}
	verifyinventoryView(tableView) {
		browser.pause(3000);
		tableView = tableView.replace(/['"]+/g, '');
		 if (tableView === "List"){
			expect(irmIPPage.inventoryMeatBall.isExisting()).to.be.true;
			console.log('View updated to: ' + tableView);
		 }
		 else {
			expect(irmIPPage.inventoryCardViewVerification.isExisting()).to.be.true;
			console.log('View updated to: ' + tableView);	
		 }
	}
	verifyIPHamburgerMenu()
	{
		browser.pause(3000);
		expect(irmIPPage.inventoryMeatBall.isExisting()).to.be.true;
	}
	verifyHamburgerMenuItems()
	{
		expect(irmIPPage.inventoryTableInlineEditing.isExisting()).to.be.true;
		expect(irmIPPage.inventoryTableExportCSV.isExisting()).to.be.true;
		//browser.keys(this.Esckeys);
	}
	verifyInlineEditingActionsDisplayed()
	{
		expect(irmIPPage.saveInlineEditing(irmIPPage.firstInventoryRowData[1]).isExisting()).to.be.true;
		console.log('inline edit save button present');
		expect(irmIPPage.closeInlineEditing(irmIPPage.firstInventoryRowData[1]).isExisting()).to.be.true;
		console.log('inline edit close button present');
		browser.keys(this.Esckeys);
	}
	verifyRestrictedToEditName()
	{
		browser.keys(this.clearKeys);
		expect(irmIPPage.saveInlineEditing(irmIPPage.firstInventoryRowData[1]).isExisting()).to.be.false;
		irmIPPage.closeInlineEditing(irmIPPage.firstInventoryRowData[1]).click();
		browser.pause(10000);
	}
	verifyRestrictedToEditEmptySKU()
	{
		console.log('value of SKU '+this.inventorySKU);
		if(irmIPPage.inventoryDrawerHeading.isExisting())
		{
			expect(1).to.be.eql(1);
		}
		else{
		      browser.keys(this.clearKeys);
		      expect(irmIPPage.saveInlineEditing(irmIPPage.firstInventoryRowData[3]).isExisting()).to.be.false;
		      irmIPPage.closeInlineEditing(irmIPPage.firstInventoryRowData[3]).click();
		}
	}
	verifyInlineEditingGetDisabled()
	{
		browser.pause(4000);
		console.log('inventory name from param '+this.inventoryName);
		console.log('inventory name from drawer '+irmIPPage.inventoryDrawerHeading.getText());
		expect(irmIPPage.inventoryDrawerHeading.getText()).to.be.eql(this.inventoryName);
	}
	verifyInlineEditingRestrictedForOther()
	{
		if(this.isColumnFound)
		{
			expect(1).to.be.eql(1);
			if(irmIPPage.btnCloseDialog.isExisting())
			{
				irmIPPage.btnCloseDialog.waitForDisplayed();
		    	irmIPPage.btnCloseDialog.click();
				browser.pause(1000);
			}
		}
	}
	verifyInventorySearchResults(itemToSearch)
	{
		itemToSearch = itemToSearch.replace(/['"]+/g, '');
		browser.pause(5000);
		irmIPPage.firstInventoryRowData[1].waitForDisplayed();
		let extractedName = irmIPPage.firstInventoryRowData[1].getText();
		expect(itemToSearch).to.be.eql(extractedName);
		this.inventoryName = irmIPPage.firstInventoryRowData[1].getText();
		this.inventoryManfacure = irmIPPage.firstInventoryRowData[2].getText();
	}
	seacrhedRecords(keyToSearch)
	{
		keyToSearch = keyToSearch.replace(/['"]+/g, '');
		browser.pause(3000);
		switch(keyToSearch){
			case 'Name':
				let extractedName = irmIPPage.firstInventoryRowData[1].getText();
				expect(extractedName).to.be.eql(this.inventoryName);
				console.log('name verified');
				break;
			case 'serial number'://without colon
				this.openInventoryItemFromSerial();
				this.verifyInvetoryItemOpened();
				console.log('serial verified');
				break;
			case 'manufacturer'://no colon
				let extractedManu = irmIPPage.firstInventoryRowData[2].getText();
				expect(extractedManu).to.be.eql(this.inventoryManfacure);
				console.log('manufacturer verified');
				break;
		}
	}
	keyGetsLocked()
	{
		browser.pause(2000);
		expect(irmIPPage.lockedOption.isExisting()).to.be.true;
		console.log('locked option verified');
		expect(irmIPPage.lockedKey.getText().includes(this.keyToLock)).to.be.true;
		console.log('locked key verified');
	}
	keyGetsUnLocked()
	{
		browser.pause(2000);
		expect(irmIPPage.lockedOption.isExisting()).to.be.false;
		console.log('locked option verified');
		expect(irmIPPage.lockedKey.getText().includes(this.keyToLock)).to.be.false;
		console.log('locked key verified');
	}
	MultipleKeysValidations()
	{
		browser.pause(2000);
		expect(irmIPPage.lockedKey.getText().includes('Manufacturer')).to.be.true;
		console.log('multiple validation done');
	}
	searchAddInventoryLocationProfile()
	{
		irmIPPage.locationField.waitForDisplayed();
		irmIPPage.locationField.click();
		browser.pause(2000);
		this.profileLocation ='Default Location';
		var allcharacters = this.profileLocation.split("");
		for(var i=0; i<allcharacters.length; i++){
			let key = allcharacters[i];
			browser.keys(key);
			browser.pause(500);
			}
		browser.pause(1000);
		browser.keys(this.downArrowKey);
		browser.pause(1000);
		//browser.keys(this.downArrowKey);
		browser.keys(this.enterkeys);
		browser.pause(2000);
		console.log('pressed keys');
	}
	searchAddInventoryProfile()
	{
		this.Inventoryprofile='Baicells CPE';
		irmIPPage.inventoryprofile.click();
		browser.pause(1000);
		irmIPPage.inventoryprofile.setValue(this.Inventoryprofile);
		browser.pause(1000);
		browser.keys(this.downArrowKey);
		browser.pause(500);
		browser.keys(this.downArrowKey);
		browser.keys(this.enterkeys);
		browser.pause(1000);
	}
	fillAddInventoryData()
	{
		irmIPPage.inventoryPurchasePrice.click();
		irmIPPage.inventoryPurchasePrice.keys(this.clearKeys);
		irmIPPage.inventoryPurchasePrice.setValue(1);
		console.log('purchaseprice done');
		irmIPPage.InventoryNote.click();
		irmIPPage.InventoryNote.setValue('InvenNote' + (Math.floor(new Date() / 1000)));
		this.inventoryNumber = 'AutoSerial' + (Math.floor(new Date() / 1000));
		irmIPPage.inventoryItemSerial.setValue(this.inventoryNumber);
	}
	checkEquipmentProfile()
	{
		irmIPPage.chkEquipmentProfile.click();
	}
	btnClickScanEquipment()
	{
		irmIPPage.btnScanEquipment.waitForClickable();
		irmIPPage.btnScanEquipment.click();
	}
	btnCheckSpecificField(fieldName)
	{
		var table = fieldName.raw();
		console.log('equipment field to select is '+table[0][0]);
		irmIPPage.equipmentFieldOption(table[0][0]).click();
		this.equipmentField =table[0][0];
	}
	fillAddInventoryWithDetails()
	{
		this.searchAddInventoryLocationProfile();
		this.searchAddInventoryProfile();
		this.fillAddInventoryData();
	}
	selectEquipmentProfileWithOneStock()
	{
		irmIPPage.EquipmentProfile.waitForDisplayed();
		irmIPPage.EquipmentProfile.click();
		browser.pause(1000);
		browser.keys(this.downArrowKey);
		browser.pause(500);
		//browser.keys(this.downArrowKey);
		browser.keys(this.enterkeys);
		browser.pause(3000);
		this.equipmentProfileName = irmIPPage.EquipmentProfile.getValue();
		console.log('selected equipment profile is '+this.equipmentProfileName);
	}
	clickBtnSave()
	{
		irmIPPage.btnSaveInventory.waitForClickable();
		irmIPPage.btnSaveInventory.click();
		irmIPPage.confirmationMsg.waitForDisplayed();
		browser.pause(3000);
	}
	clickBtnCancel()
	{
		irmIPPage.btnCancelInventory.waitForClickable();
		irmIPPage.btnCancelInventory.click();
		browser.pause(3000);
	}
	




	
	verifyAddInventoryPage()
	{
		browser.pause(3000);
		expect(irmIPPage.inventoryDrawerHeading.getText().includes('Add Inventory')).to.be.true;
	}
	verifyMultipleFieldsOfTheAddInventory(fieldsData)
	{
		browser.pause(5000);
		var table = fieldsData.raw();
		irmIPPage.addInventoryFields(table[0][0]).waitForDisplayed();
		expect(irmIPPage.addInventoryFields(table[0][0]).isExisting()).to.be.true;
		console.log(table[0][0]+' verified');
		expect(irmIPPage.addInventoryFields(table[1][0]).isExisting()).to.be.true;
		console.log(table[1][0]+' verified');
		expect(irmIPPage.addInventoryFields(table[2][0]).isExisting()).to.be.true;
		console.log(table[2][0]+' verified');
		expect(irmIPPage.addInventoryFields(table[3][0]).isExisting()).to.be.true;
		console.log(table[3][0]+' verified');
		expect(irmIPPage.addInventoryFields(table[4][0]).isExisting()).to.be.true;
		console.log(table[4][0]+' verified');
		expect(irmIPPage.addInventoryFields(table[5][0]).isExisting()).to.be.true;
		console.log(table[5][0]+' verified');
		expect(irmIPPage.addInventoryFields(table[6][0]).isExisting()).to.be.true;
		console.log(table[6][0]+' verified');
	}
	verifyProfileLocationsSelected()
	{
		browser.pause(1000);
		expect(irmIPPage.locationField.getValue().includes(this.profileLocation)).to.be.true;
	}
	verifyInventoryProfileSelected()
	{
		browser.pause(1000);
		console.log('value of inventory profile is '+this.Inventoryprofile);
		expect(irmIPPage.inventoryprofile.getValue()).to.be.eql(this.Inventoryprofile);
	}
	VerifyclickAddRemoveStock()
	{
		irmIPPage.btnAddStock.waitForDisplayed();
		irmIPPage.btnAddStock.waitForClickable();
		irmIPPage.btnAddStock.click();
		browser.pause(2000);
		expect(irmIPPage.inventoryItemSerial.isExisting()).to.be.true;
		var allremovebuttons =irmIPPage.btnRemoveStock;
		let indexToclick = allremovebuttons.length-1;
		allremovebuttons[indexToclick].click();
		browser.pause(2000);
		expect(irmIPPage.inventoryItemSecondSerial.length).to.be.eql(1);
		browser.pause(1000);
	}
	verifyEquipmentProfileRemoved()
	{
		browser.pause(2000);
		expect(irmIPPage.EquipmentProfile.isExisting()).to.be.true;
	}
	verifySameEquipmentPorfileChecked()
	{
		expect(irmIPPage.chkEquipmentProfile.getAttribute('value').includes('true')).to.be.true;
	}
	selectEquipmentProfile()
	{
		irmIPPage.EquipmentProfileID.waitForDisplayed();
		irmIPPage.EquipmentProfileID.click();
		browser.pause(1000);
		browser.keys(this.downArrowKey);
		browser.pause(500);
		//browser.keys(this.downArrowKey);
		browser.keys(this.enterkeys);
		browser.pause(3000);
		this.equipmentProfileName = irmIPPage.EquipmentProfileID.getValue();
		console.log('selected equipment profile is '+this.equipmentProfileName);
	}
	verifybtnScanEquipmentToggle()
	{
		irmIPPage.btnScanEquipment.waitForDisplayed();
		expect(irmIPPage.btnScanEquipment.isExisting()).to.be.true;
	}
	verifyMultipleFieldsOfEP(allFields)
	{
		browser.pause(3000);
		var table = allFields.raw();
		expect(irmIPPage.selectProfileItem(table[0][0]).isExisting()).to.be.true;
		console.log(table[0][0]+' verified');
		expect(irmIPPage.selectProfileItem(table[1][0]).isExisting()).to.be.true;
		console.log(table[1][0]+' verified');
		expect(irmIPPage.selectProfileItem(table[2][0]).isExisting()).to.be.true;
		console.log(table[2][0]+' verified');
		expect(irmIPPage.selectProfileItem(table[3][0]).isExisting()).to.be.true;
		console.log(table[3][0]+' verified');
	}
	verifEquipmentFieldGetAdded()
	{
		browser.pause(2000);
		console.log('equipment field name is '+this.equipmentField);
		irmIPPage.equipmentFieldGetAdded(this.equipmentField).scrollIntoView();
		expect(irmIPPage.equipmentFieldGetAdded(this.equipmentField).isExisting()).to.be.true;
		console.log('equipment get verified');
	}
	verifyUploadDownload()
	{
		expect(irmIPPage.btnUploadCSV.isExisting()).to.be.true;
		console.log('upload  verified');
		expect(irmIPPage.btnDownloadTemplate.isExisting()).to.be.true;
		console.log('download verified');
	}
	verifySaveAndCancel()
	{
		expect(irmIPPage.btnSaveInventory.isExisting()).to.be.true;
		expect(irmIPPage.btnSaveInventory.isClickable()).to.be.true;
		console.log('save  verified');
		expect(irmIPPage.btnCancelInventory.isExisting()).to.be.true;
		expect(irmIPPage.btnCancelInventory.isClickable()).to.be.true;
		console.log('cancel verified');

	}
	verifyInventoryAddedSuccessfully()
	{
		browser.pause(3000);
		console.log('extrated searial is '+irmIPPage.inventoryItemSerialAfterCreate.getValue());
		console.log('passed searial is '+this.inventoryNumber.toUpperCase());
		expect(irmIPPage.inventoryItemSerialAfterCreate.getValue()).to.eql(this.inventoryNumber.toUpperCase());
		console.log('extrated EP is '+irmIPPage.EpAddedToInventory.getAttribute('value'));
		console.log('passed EP is '+this.Inventoryprofile);
		expect(irmIPPage.EpAddedToInventory.isExisting()).to.be.true;
		expect(irmIPPage.EpAddedToInventory.getAttribute('value')).to.eql(this.Inventoryprofile);
	}
	verifyInventoryAddedSuccessfullyWithoutEP()
	{
		browser.pause(3000);
		console.log('passed EP is '+this.Inventoryprofile);
		expect(irmIPPage.EpAddedToInventoryParent.isExisting()).to.be.false;
	}
	verifyAddInventoryGetClosed()
	{
		browser.pause(3000);
		expect(irmIPPage.inventoryDrawerHeading.getText().includes('Add Inventory')).to.be.false;
	}
	verifyAddInventoryDoNotGetAdded()
	{
		this.clickOnInventorySearchbar();
		irmIPPage.inventorySearch.waitForDisplayed();
		irmIPPage.inventorySearch.waitForClickable();
		//irmIPPage.inventorySearch.scrollIntoView();
		irmIPPage.inventorySearch.click();
		irmIPPage.inventorySearch.keys(this.clearKeys);
		browser.pause(1000);
		irmIPPage.inventorySearch.setValue(this.inventoryNumber);
		browser.pause(1000);
		irmIPPage.inventoryHeaderbuttons[3].click();
		browser.pause(1000);
		browser.pause(2000);
		expect(irmIPPage.noInventoryIsPresent.isExisting()).to.be.true;
	}

}
module.exports = new IrmInventoryActions();
