var LoginPage = require('../pageobjects/login.page');
var EquipmentPage = require('../pageobjects/IRMEquipmentItemDrawerSearch.page');
var SubListPage = require('../pageobjects/subscriberlist.page');
var Utils = require('./utils');
var expect = require('chai').expect; 
var should = require('chai').should();

class IRMEquipmentItemDrawerSearchActions{
	
	constructor(){
		this.searchedItemName;this.keyToLock;this.equipmentProfile;
		this.Esckeys = ['\uE00C'];
		this.downArrowKey = ['\ue015'];// arrow down
		this.enterKey = ['\ue007'];// enter
		this.tabkey =['\uE004'];
		this.sortBeforeValue;
	}
	
	SelectAnyEquipmentProfile()
	{
		EquipmentPage.firstEquipmentProfile.waitForDisplayed();
		EquipmentPage.firstEquipmentProfile.waitForClickable();
		EquipmentPage.firstEquipmentProfile.click();
		browser.pause(3000);
	}
	openLockEquipmentSearch(lockUnclcok)
		{
			
			lockUnclcok = lockUnclcok.replace(/['"]+/g, '');
			switch(lockUnclcok){
				case 'Lock':
					EquipmentPage.openLockUnlockOption.waitForDisplayed();
					EquipmentPage.openLockUnlockOption.waitForClickable();
					EquipmentPage.openLockUnlockOption.click();
					break;
				case 'UnLock':
					EquipmentPage.lockedOption.waitForDisplayed();
					EquipmentPage.lockedOption.waitForClickable();
					EquipmentPage.lockedOption.click();
					break;
	
			}
	}
	keyToSelectFromLock(keyToSelect)
	{
		browser.pause(3000);
		keyToSelect = keyToSelect.replace(/['"]+/g, '');
		EquipmentPage.selectListItem(keyToSelect).click();
		this.keyToLock = keyToSelect;
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
	
	
	selectEquipmentTab(tab)
	{
		switch(tab){
			case 'SITE LOCATION':
					EquipmentPage.siteLocation.click();
				 break;
				case 'SITE EQUIPMENT':
					EquipmentPage.siteEquipment.click();
				 break;
				case 'ASSIGNED CPE':
					EquipmentPage.assignedCPETab.click();
				 break;
				case 'INVENTORY':
					EquipmentPage.inventoryTab.click();
				 break;
				default:
					console.log('No such tab(s) found!');
					expect(0).to.eql(1);
				 break;
		}
	}

	enterInventoryToSearch(itemToSearch)
	{
		itemToSearch = itemToSearch.replace(/['"]+/g, '');
		EquipmentPage.inventorySearch.waitForDisplayed();
		EquipmentPage.inventorySearch.waitForClickable();
		//EquipmentPage.inventorySearch.scrollIntoView();
		EquipmentPage.inventorySearch.click();
		EquipmentPage.inventorySearch.keys(this.clearKeys);
		browser.pause(1000);
		EquipmentPage.inventorySearch.setValue(itemToSearch);
		browser.pause(1000);
		// EquipmentPage.inventoryHeaderbuttons[3].click();
		// browser.pause(1000);
		// if(EquipmentPage.isListViewSelected.getAttribute('class').includes('invisible'))
		// {
		// 	EquipmentPage.inventoryTableView.waitForDisplayed();
		// 	EquipmentPage.inventoryTableView.waitForClickable();
		// 	EquipmentPage.inventoryTableView.click();
		//  	browser.pause(2000);
		// }
		// else{browser.keys('\ue00c');}
		// EquipmentPage.firstInventoryRowData[1].waitForDisplayed();
		// EquipmentPage.firstInventoryRowData[1].waitForExist();
		// this.inventoryName = EquipmentPage.firstInventoryRowData[1].getText();
		// console.log('extracted inventory value is'+this.inventoryName);
	}
	isTilesSelected()
	{
		if(EquipmentPage.inventoryMeatBall.isExisting()==false)
		{
			EquipmentPage.inventoryHeaderbuttons[2].waitForDisplayed();
			EquipmentPage.inventoryHeaderbuttons[2].scrollIntoView();
			EquipmentPage.inventoryHeaderbuttons[2].click();
        	browser.pause(1000);
			EquipmentPage.inventoryTableView.waitForDisplayed();
			EquipmentPage.inventoryTableView.waitForClickable();
			EquipmentPage.inventoryTableView.click();
			browser.pause(2000);
		}
	}
	changeEquipmentView(EquipmentView){
		browser.pause(2000);
		EquipmentPage.inventoryHeaderbuttons[2].waitForDisplayed();
		EquipmentPage.inventoryHeaderbuttons[2].scrollIntoView();
		EquipmentPage.inventoryHeaderbuttons[2].click();
        browser.pause(2000);
		EquipmentView = EquipmentView.replace(/['"]+/g, '');
		switch(EquipmentView){
			case "List":
				if(EquipmentPage.isListViewSelected.getAttribute('class').includes('invisible'))
				{
					EquipmentPage.inventoryTableView.waitForDisplayed();
					EquipmentPage.inventoryTableView.waitForClickable();
					EquipmentPage.inventoryTableView.click();
					browser.pause(2000);
					console.log('I set Equipment view to '+ EquipmentView);
				}
				// EquipmentPage.inventoryCardView.waitForDisplayed();
				// EquipmentPage.inventoryCardView.waitForClickable();
				// EquipmentPage.inventoryCardView.click();
				// browser.pause(4000);
				// EquipmentPage.inventoryHeaderbuttons[2].click();
        		// browser.pause(2000);
				// EquipmentPage.inventoryTableView.waitForDisplayed();
				// EquipmentPage.inventoryTableView.waitForClickable();
				// EquipmentPage.inventoryTableView.click();
				// browser.pause(4000);
				break;
			case "Tiles":
				if(EquipmentPage.isTileViewSelected.getAttribute('class').includes('invisible'))
					{
						EquipmentPage.inventoryCardView.waitForDisplayed();
						EquipmentPage.inventoryCardView.waitForClickable();
						EquipmentPage.inventoryCardView.click();
						console.log('I set Equipment view to '+ EquipmentView);
						browser.pause(2000);
					}
				// EquipmentPage.inventoryCardView.waitForDisplayed();
				// EquipmentPage.inventoryCardView.waitForClickable();
				// EquipmentPage.inventoryCardView.click();
				// browser.pause(2000);
				break;
		}
		browser.keys(this.Esckeys);
	}
	changePageSize(pageSize)
	{
		console.log('going to set page size '+pageSize);
		EquipmentPage.btnEquipmentProfile.waitForDisplayed();
		EquipmentPage.btnEquipmentProfile.click();
		pageSize = pageSize.replace(/['"]+/g, '');
		EquipmentPage.btnPageSize.scrollIntoView();
		EquipmentPage.btnPageSize.waitForDisplayed();
		EquipmentPage.btnPageSize.moveTo();
		EquipmentPage.btnPageSize.click();
		browser.pause(1500);
		// browser.keys(this.enterKey);
		// browser.pause(1000);
		// browser.keys(this.downArrowKey);
		// browser.pause(1000);
		// browser.keys(this.enterKey);
		EquipmentPage.selectListItem(pageSize).click();
		browser.pause(1500);
	}
	sortEquipmentColumn()
	{
		EquipmentPage.firstColumn.waitForDisplayed();
		EquipmentPage.firstColumn.waitForClickable();
		EquipmentPage.firstColumn.click();
		browser.pause(2000);
		EquipmentPage.firstColumnSortbtn.waitForDisplayed();
		this.sortBeforeValue = EquipmentPage.firstColumnSortbtn.getAttribute('data-testid');
		EquipmentPage.firstColumn.click();
		browser.pause(3000);
	}
	
	////////////////////////////////
	verifySearchedInputCarriedToDrawer(dataToSearch)
	{
		dataToSearch = dataToSearch.replace(/['"]+/g, '');
		EquipmentPage.equipmentDrawerSearchInput.waitForDisplayed();
		let searchedValue = EquipmentPage.equipmentDrawerSearchInput.getValue();
		expect(searchedValue).to.eql(dataToSearch);
	}
	verifyEquipmentSearched(equipment)
	{
		equipment = equipment.replace(/['"]+/g, '');
		EquipmentPage.firstEquipmentProfile.waitForClickable();
		expect(EquipmentPage.firstEquipmentProfile.getText()).to.eql(equipment);
		console.log('equipment profile successfully searched');
	}
	verifyPageSize(pageSize)
	{
		pageSize = pageSize.replace(/['"]+/g, '');
		EquipmentPage.btnPageSize.waitForDisplayed();
		EquipmentPage.btnPageSize.waitForClickable();
		let valuefrompage = EquipmentPage.pageSizeValue.getValue();
		console.log('value from page is '+valuefrompage);
		console.log('value from param is '+pageSize);
		expect(valuefrompage).to.eql(pageSize);
	}
	verifyColumnGetSorted()
	{
		browser.pause(2000);
		EquipmentPage.firstColumnSortbtn.waitForDisplayed();
		let newSortedValue = EquipmentPage.firstColumnSortbtn.getAttribute('data-testid');
		expect(this.sortBeforeValue).to.not.eql(newSortedValue);
	}
}
module.exports = new IRMEquipmentItemDrawerSearchActions();
