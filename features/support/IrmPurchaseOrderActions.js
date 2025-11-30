var irmPoPage = require('../pageobjects/IrmPurchaseOrder.page');
var expect = require('chai').expect;

class IrmPurchaseOrderActions {
    constructor(){
		 this.downArrowKey = ['\ue015'];// arrow down
		this.enterkeys = ['\uE007'];// enter
		this.clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		this.Esckeys = ['\uE00C'];
		this.numTwo = ['\ue01C'];
		this.ProfileItem='Baicells CPE';
		this.vendorName='ISP Vendors (Preferred)';
		this.subItem='WR1101';
		this.poCreatedStatus ='CREATED';
		this.poCreatedConfMsg = 'Created Purchase Order successfully.';
		this.PurchaseNumber;this.PurchaseStatus;this.PurchaseDate;
		this.originalWidth;this.dividedWidth;
    }
	gotoPOSection()
	{
		irmPoPage.puchaseOrderSection.scrollIntoView();
		irmPoPage.puchaseOrderSection.waitForDisplayed();
	}
	clickPoPlushButton()
	{
		browser.keys(['\uE00C']);
		irmPoPage.btnCreatePurchaseOrder.waitForDisplayed();
		irmPoPage.btnCreatePurchaseOrder.click();
		browser.keys(this.Esckeys);
		browser.pause(7000);
	}
	enterPoProfileToSearch()
	{
		browser.pause(4000);
		irmPoPage.dockedProfileItem.waitForClickable();
		irmPoPage.dockedProfileItem.click();
		browser.pause(1000);
		irmPoPage.dockedProfileItemInput.setValue(this.ProfileItem);
		browser.pause(2000);
	}
	validateInvalidPI()
	{
		browser.keys(this.downArrowKey);
		browser.keys(this.enterkeys);
		browser.pause(7000);
		console.log('enter PO item');
		this.ProfileItem='invalid';
		irmPoPage.dockedProfileItemInput.click();
		irmPoPage.dockedProfileItemInput.keys(this.clearKeys);
		//browser.pause(1000);
		//irmPoPage.dockedProfileItemInput.setValue(this.ProfileItem);
		browser.pause(1000);
		irmPoPage.dockedVendor.click();
		browser.pause(1000);
	}
	enterPoPI()
	{
		browser.pause(7000);
		irmPoPage.dockedProfileItem.waitForDisplayed();
		irmPoPage.dockedProfileItem.waitForClickable();
		irmPoPage.dockedProfileItem.click();
		browser.pause(1000);
		browser.keys(this.downArrowKey);
		browser.keys(this.enterkeys);
	}
	enterVendorToSearch()
	{
		browser.pause(4000);
		irmPoPage.dockedVendor.waitForClickable();
		irmPoPage.dockedVendor.click();
		irmPoPage.dockedVendor.keys(this.clearKeys);
		browser.pause(2000);
		irmPoPage.dockedVendorInput.setValue(this.vendorName);
		browser.pause(2000);
	}
	validateInvalidVendor()
	{
		this.vendorName='invalid';
		irmPoPage.dockedVendorInput.click();
		irmPoPage.dockedVendorInput.keys(this.clearKeys);
		browser.pause(1000);
		irmPoPage.dockedVendorInput.setValue(this.vendorName);
		browser.pause(2000);
		irmPoPage.dockedquantity.click();
		browser.pause(1000);
	}
	enterPoVendor()
	{
		browser.pause(1000);
		irmPoPage.dockedVendor.waitForClickable();
		irmPoPage.dockedVendor.click();
		browser.pause(1000);
		browser.keys(this.downArrowKey);
		browser.keys(this.downArrowKey);
		browser.keys(this.enterkeys);
		browser.pause(2000);
	}
	enterPoQty(valuToPass)
	{
		irmPoPage.dockedquantity.click();
		irmPoPage.dockedquantity.keys(this.clearKeys);
		browser.pause(1000);
		irmPoPage.dockedquantity.setValue(valuToPass);
	}
	clickOnBtnContinue()
	{
		irmPoPage.btnContinue.waitForClickable();
		irmPoPage.btnContinue.click();
	}
	inputUP()
	{
		irmPoPage.allHyperLinks[0].click();
		browser.keys(this.numTwo);
	}
	inputTR()
	{
		browser.pause(1000);
		irmPoPage.allHyperLinks[1].click();
		browser.keys(this.numTwo);
	}
	inputShipping()
	{
		browser.pause(1000);
		irmPoPage.allHyperLinks[2].click();
		browser.keys(this.numTwo);
	}
	inputOther()
	{
		browser.pause(1000);
		irmPoPage.allHyperLinks[3].click();
		browser.keys(this.numTwo);
		irmPoPage.allHyperLinks[0].click();
	}
	clickCreatePO()
	{
		browser.pause(2000);
		irmPoPage.btnCreatePO.waitForClickable();
		irmPoPage.btnCreatePO.click();
		var msg;
		irmPoPage.confirmationMsg.waitForDisplayed();
		msg = irmPoPage.confirmationMsg.getText();
		expect(msg).to.eql(this.poCreatedConfMsg);
	}
	clickClosePODialog()
	{
		browser.pause(4000);
		//irmPoPage.btnCloseDialog.waitForClickable();
		irmPoPage.btnCloseDialog.click();
	}
	browserRefresh()
	{
		browser.refresh();
		browser.pause(4000);
	}
	openFirstPO()
	{
		//browser.pause(5000);
		var firstRowDetail = irmPoPage.purchaseOrderfirstRowData;
		var allPOColumns = irmPoPage.purchaseOrderAllColumns;
		this.PurchaseNumber=this.GetCellValueByColumnName(allPOColumns,firstRowDetail,'PO#');
		console.log('extracted purchase number value is '+this.PurchaseNumber);
		this.PurchaseDate=this.GetCellValueByColumnName(allPOColumns,firstRowDetail,'Date Ordered');
		this.PurchaseStatus=this.GetCellValueByColumnName(allPOColumns,firstRowDetail,'Status');
		firstRowDetail[0].click();
	}
	clickOnStatus()
	{
		browser.pause(3000);
		irmPoPage.btnOrderStatus.waitForDisplayed();
		irmPoPage.btnOrderStatus.click();
	}

	clickOrderStatus(poStatus)
	{
		browser.pause(2000);
		poStatus = poStatus.replace(/['"]+/g, '');
		this.PurchaseStatus =poStatus;
		console.log('param value is '+poStatus);
		switch(poStatus){
			case 'PENDING':
				irmPoPage.changePoStatus('PENDING').click();
				break;
			case 'ORDERED':
				irmPoPage.changePoStatus('ORDERED').click();
				break;
			case 'COMPLETE':
				irmPoPage.changePoStatus('COMPLETE').click();
				break;
		}
	}

	clickYesOfPopUp()
	{
		browser.pause(2000);
		//irmPoPage.btnPopYes.waitForDisplayed();
		irmPoPage.btnPopYes.click();
		browser.pause(3000);
	}
	clickOnBtnAddItem()
	{
		irmPoPage.btnAddItem.waitForDisplayed();
		irmPoPage.btnAddItem.waitForClickable();
		irmPoPage.btnAddItem.click();
		
	}
	updateVendorQty()
	{
		irmPoPage.openVendor.waitForDisplayed();
		irmPoPage.openVendor.waitForClickable();
		irmPoPage.openVendor.click();
		browser.keys(this.downArrowKey);
		browser.keys(this.enterkeys);
		//irmPoPage.changeVendorItem.setValue(this.subItem);
		irmPoPage.changeVendorQty.click();
		irmPoPage.changeVendorQty.keys(this.clearKeys);
		browser.pause(1500);
		irmPoPage.changeVendorQty.keys(this.numTwo);
		this.subItem = irmPoPage.changeVendorItem.getValue();
	}
	inputItemUP(index)
	{
		irmPoPage.allHyperLinks[index].click();
		browser.keys(this.clearKeys);
		browser.keys(this.numTwo);
	}
	inputItemTR(index)
	{
		browser.pause(1000);
		irmPoPage.allHyperLinks[index].click();
		browser.keys(this.clearKeys);
		browser.keys(this.numTwo);
	}
	inputItemShipping(index)
	{
		browser.pause(1000);
		irmPoPage.allHyperLinks[index].click();
		browser.keys(this.clearKeys);
		browser.keys(this.numTwo);
	}
	inputItemOther(index)
	{
		browser.pause(1000);
		irmPoPage.allHyperLinks[index].click();
		browser.keys(this.clearKeys);
		browser.keys(this.numTwo);
		irmPoPage.allHyperLinks[0].click();
	}
	clickOnBtnSaveChanges()
	{
		irmPoPage.btnSaveChanges.waitForDisplayed();
		irmPoPage.btnSaveChanges.waitForClickable();
		irmPoPage.btnSaveChanges.click();
	}
	inputInvoiceID()
	{
		irmPoPage.inputID.click();
		irmPoPage.inputID.keys(this.clearKeys);
		irmPoPage.inputID.setValue(this.numTwo);
	}
	fillNoteField()
	{
		irmPoPage.inputNotice.click();
		irmPoPage.inputNotice.keys(this.clearKeys);
		irmPoPage.inputNotice.setValue('itemPO');
	}
	fillSecondNoteField()
	{
		irmPoPage.inputSecondNotice.click();
		irmPoPage.inputSecondNotice.keys(this.clearKeys);
		irmPoPage.inputSecondNotice.setValue('SecondItemPO');
	}
	btnAddMoreNote()
	{
		irmPoPage.btnAddMoreNotice.click();
	}
	expandPurchaseItem()
	{
		browser.pause(4000);
		irmPoPage.poDockedValues.click();
		browser.pause(2000);
	}
	inputProfileLocation()
	{
		irmPoPage.purchaseItemLocation.waitForDisplayed();
		irmPoPage.purchaseItemLocation.click();
		browser.pause(2000);
		//console.log('location value is :' + this.ramLocation);
		this.ramLocation ='New york Warehouse';
		var allcharacters = this.ramLocation.split("");
		for(var i=0; i<allcharacters.length; i++){
			let key = allcharacters[i];
			browser.keys(key);
			browser.pause(500);
			}
		browser.pause(3000);
		browser.keys('\uE015');
		browser.pause(100);
		browser.keys('\uE015');
		browser.pause(100);
		var enterkeys = ['\uE007'];// enter
		browser.keys(enterkeys);
		browser.pause(2000);
	}
	filPurchaseItem()
	{
		this.inputProfileLocation();
		this.inventoryItemSerial = 'AutoSerial' + (Math.floor(new Date() / 1000));
		irmPoPage.purchaseItemSerial.keys(this.clearKeys);
		irmPoPage.purchaseItemSerial.setValue(this.inventoryItemSerial);
	}
	clickBtnPurchaseItemReceive()
	{
		irmPoPage.btnPurchaseReceive.waitForDisplayed();
		irmPoPage.btnPurchaseReceive.click();
	}
	checkSameEquipmentProfile()
	{
		irmPoPage.chkEquipmentProfile.click();
	}
	fillSerialNo()
	{
		irmPoPage.purchaseItemSerial.click();
		irmPoPage.purchaseItemSerial.keys(this.clearKeys);
		this.inventoryItemSerial = 'AutoSerial' + (Math.floor(new Date() / 1000));
		irmPoPage.purchaseItemSerial.setValue(this.inventoryItemSerial);
	}
	selectPartialReceive()
	{
		irmPoPage.btnPartiallyReceive.waitForDisplayed();
		irmPoPage.btnPartiallyReceive.waitForClickable();
		irmPoPage.btnPartiallyReceive.click();
	}
	isTilesSelected()
	{
		browser.keys(['\uE00C']);
		if(irmPoPage.purchaseOrderMeatBall.isExisting()==false)
		{
			irmPoPage.purchaseHeaderbuttons[2].waitForDisplayed();
			irmPoPage.purchaseHeaderbuttons[2].scrollIntoView();
			irmPoPage.purchaseHeaderbuttons[2].click();
        	browser.pause(1000);
			irmPoPage.purchaseOrderTableView.waitForDisplayed();
			irmPoPage.purchaseOrderTableView.waitForClickable();
			irmPoPage.purchaseOrderTableView.click();
			browser.pause(2000);
		}
	}
	changePurchaseView(purchaseView){
		browser.pause(2000);
		irmPoPage.purchaseHeaderbuttons[2].waitForDisplayed();
		irmPoPage.purchaseHeaderbuttons[2].scrollIntoView();
		irmPoPage.purchaseHeaderbuttons[2].click();
        browser.pause(2000);
		purchaseView = purchaseView.replace(/['"]+/g, '');
		switch(purchaseView){
			case "List":
				irmPoPage.purchaseOrderCardView.waitForDisplayed();
				irmPoPage.purchaseOrderCardView.waitForClickable();
				irmPoPage.purchaseOrderCardView.click();
				browser.pause(4000);
				irmPoPage.purchaseHeaderbuttons[2].click();
        		browser.pause(2000);
				irmPoPage.purchaseOrderTableView.waitForDisplayed();
				irmPoPage.purchaseOrderTableView.waitForClickable();
				irmPoPage.purchaseOrderTableView.click();
				browser.pause(4000);
				break;
			case "Tiles":
				irmPoPage.purchaseOrderCardView.waitForDisplayed();
				irmPoPage.purchaseOrderCardView.waitForClickable();
				irmPoPage.purchaseOrderCardView.click();
				browser.pause(2000);
				break;
		}
		console.log('I set purchase view to '+ purchaseView);
	}
	ResetColumns()
	{
		if(irmPoPage.purchaseOrderMeatBall.isExisting()){}
		else{
			irmPoPage.purchaseHeaderbuttons[2].click();
        	browser.pause(2000);
			irmPoPage.purchaseOrderTableView.waitForDisplayed();
			irmPoPage.purchaseOrderTableView.waitForClickable();
			irmPoPage.purchaseOrderTableView.click();
			browser.pause(3000);
		}
		browser.pause(4000);
		irmPoPage.menuOfPurchaseOrder.scrollIntoView();
		irmPoPage.menuOfPurchaseOrder.click();
		irmPoPage.btnChooseColumn.waitForDisplayed();
		irmPoPage.btnChooseColumn.click();
		browser.pause(1000);
		irmPoPage.btnResetColumns.waitForDisplayed();
		irmPoPage.btnResetColumns.click();
		irmPoPage.btnCloseColumnsDialog.click();
		browser.pause(5000);
	}
	RestoreColumns()
	{
		if(irmPoPage.purchaseOrderMeatBall.isExisting()){}
		else{
			irmPoPage.purchaseHeaderbuttons[2].click();
        	browser.pause(2000);
			irmPoPage.purchaseOrderTableView.waitForDisplayed();
			irmPoPage.purchaseOrderTableView.waitForClickable();
			irmPoPage.purchaseOrderTableView.click();
			browser.pause(3000);
		}
		browser.pause(4000);
		irmPoPage.menuOfPurchaseOrder.scrollIntoView();
		irmPoPage.menuOfPurchaseOrder.click();
		irmPoPage.btnChooseColumn.waitForDisplayed();
		irmPoPage.btnChooseColumn.click();
		browser.pause(1000);
		irmPoPage.btnRestoreolumns.waitForDisplayed();
		irmPoPage.btnRestoreolumns.click();
		irmPoPage.btnCloseColumnsDialog.click();
		browser.pause(5000);
	}
	changeColumns()
	{
		if(irmPoPage.purchaseOrderMeatBall.isExisting()){}
		else{
			irmPoPage.purchaseHeaderbuttons[2].click();
        	browser.pause(2000);
			irmPoPage.purchaseOrderTableView.waitForDisplayed();
			irmPoPage.purchaseOrderTableView.waitForClickable();
			irmPoPage.purchaseOrderTableView.click();
			browser.pause(3000);
		}
		browser.pause(4000);
		irmPoPage.menuOfPurchaseOrder.scrollIntoView();
		irmPoPage.menuOfPurchaseOrder.click();
		irmPoPage.btnChooseColumn.waitForDisplayed();
		irmPoPage.btnChooseColumn.click();
		browser.pause(1000);
		irmPoPage.btnResetColumns.click();
		browser.pause(2000);
		irmPoPage.btnDateOrderedColumn.waitForDisplayed();
		irmPoPage.btnItemNameColumn.click();
		irmPoPage.btnLastUpdatedColumn.click();
		irmPoPage.btnVendorColumn.click();
		irmPoPage.btnCloseColumnsDialog.click();
		browser.pause(5000);
	}
	closeOpenedPODrawer()
	{
		browser.pause(3000);
		irmPoPage.closeOpenedPOdrawer.click();
		browser.pause(3000);
	}
	openArchiveOption()
	{
		this.closeOpenedPODrawer();
		var firstRowDetail = irmPoPage.purchaseOrderfirstRowData;
		firstRowDetail[1].moveTo();
		browser.pause(1500);
		//irmPoPage.dottedMenu.moveTo();
		irmPoPage.dottedMenu.click();
	}
	changeStatusToArchieve()
	{
		irmPoPage.archiveMenu.waitForClickable();
		irmPoPage.archiveMenu.click();
		browser.pause(1500);
	}
	enableShowArchive()
	{
		//irmPoPage.closeOpenedPOdrawer.click();
		irmPoPage.menuOfPurchaseOrder.click();
		browser.pause(1000);
		if(irmPoPage.statusOfShowArchived.getAttribute('class').includes('text-success')){}
		else{
			console.log('going to click show archived');
			irmPoPage.showArchived.waitForClickable();
			irmPoPage.showArchived.click();
		}
	}
	DisabledShowArchive()
	{
		irmPoPage.menuOfPurchaseOrder.click();
		browser.pause(1000);
		if(irmPoPage.statusOfShowArchived.getAttribute('class').includes('text-success'))
		{
			irmPoPage.showArchived.waitForClickable();
			irmPoPage.showArchived.click();
		}
		else{
			browser.keys(this.Esckeys);
		}
	}
	ClickAddMoreitems()
	{
		irmPoPage.addMoreItems.waitForClickable();
		irmPoPage.addMoreItems.click();
		browser.pause(1000);
	}
	enterSecondPoPI()
	{
		browser.pause(5000);
		irmPoPage.dockedSecondProfileItem.waitForClickable();
		irmPoPage.dockedSecondProfileItem.click();
		browser.pause(1000);
		browser.keys(this.downArrowKey);
		browser.keys(this.enterkeys);
	}
	enterThirdPoPI()
	{
		browser.pause(5000);
		irmPoPage.dockedThirdrofileItem.waitForClickable();
		irmPoPage.dockedThirdrofileItem.click();
		browser.pause(1000);
		browser.keys(this.downArrowKey);
		browser.keys(this.enterkeys);
	}




	verifyPOcolumns()
	{
		if(irmPoPage.purchaseOrderMeatBall.isExisting()){}
		else{
			irmPoPage.purchaseHeaderbuttons[2].click();
        	browser.pause(2000);
			irmPoPage.purchaseOrderTableView.waitForDisplayed();
			irmPoPage.purchaseOrderTableView.waitForClickable();
			irmPoPage.purchaseOrderTableView.click();
			browser.pause(3000);
		}
		browser.pause(3000);
		irmPoPage.menuOfPurchaseOrder.scrollIntoView();
		irmPoPage.menuOfPurchaseOrder.click();
		irmPoPage.btnChooseColumn.waitForDisplayed();
		irmPoPage.btnChooseColumn.click();
		browser.pause(1000);
		expect(irmPoPage.btnDateOrderedColumn.isExisting()).to.be.true;
		expect(irmPoPage.btnItemNameColumn.isExisting()).to.be.true;
		expect(irmPoPage.btnLastUpdatedColumn.isExisting()).to.be.true;
		expect(irmPoPage.btnVendorColumn.isExisting()).to.be.true;
		expect(irmPoPage.btnStatusColumn.isExisting()).to.be.true;
		expect(irmPoPage.btnTotalColumn.isExisting()).to.be.true;
		expect(irmPoPage.btnPoNumberColumn.isExisting()).to.be.true;
		irmPoPage.btnCloseColumnsDialog.click();
		browser.pause(2000);
		// var allcolumns = irmPoPage.puchaseOrderColumns;
		// expect(allcolumns[0].getText()).to.eql('PO#');
		// expect(allcolumns[1].getText()).to.eql('Item Name(s)');
		// expect(allcolumns[2].getText()).to.eql('Vendor');
		// expect(allcolumns[3].getText()).to.eql('Date Ordered');
		// expect(allcolumns[4].getText()).to.eql('Last Update');
		// expect(allcolumns[5].getText()).to.eql('Status');
	}
	verifyHalfFullOptions()
	{
		browser.pause(2000);
		irmPoPage.purchaseHeaderbuttons[2].waitForDisplayed();
		irmPoPage.purchaseHeaderbuttons[2].scrollIntoView();
		irmPoPage.purchaseHeaderbuttons[2].click();
		expect(irmPoPage.purchaseOrderTableHalf.isExisting()).to.be.true;
		expect(irmPoPage.purchaseOrderTableFull.isExisting()).to.be.true;
		browser.keys(this.Esckeys);
		browser.pause(1000);
	}
	verifyPoCardWidthHalf()
	{
		var styleAttribute = irmPoPage.puchaseOrderSection.getAttribute('style');
		var widthRegex = /width:\s*([0-9]+)px/;
		var match = widthRegex.exec(styleAttribute);
		if (match) {
			var widthValue = match[1];
			this.originalWidth = widthValue;
		}
		irmPoPage.purchaseHeaderbuttons[2].waitForDisplayed();
		irmPoPage.purchaseHeaderbuttons[2].scrollIntoView();
		irmPoPage.purchaseHeaderbuttons[2].click();
		irmPoPage.purchaseOrderTableHalf.click();
		browser.pause(1000);
		styleAttribute = irmPoPage.puchaseOrderSection.getAttribute('style');
		match = widthRegex.exec(styleAttribute);
		if (match) {
			var widthValue = match[1];
			this.dividedWidth = widthValue;
		}
		console.log('half original width is '+this.originalWidth +' and divided width is '+this.dividedWidth);
		expect(this.originalWidth).to.be.not.eql(this.dividedWidth);
	}
	verifyPoCardWidthFull()
	{
		var styleAttribute = irmPoPage.puchaseOrderSection.getAttribute('style');
		var widthRegex = /width:\s*([0-9]+)px/;
		var match = widthRegex.exec(styleAttribute);
		if (match) {
			var widthValue = match[1];
			this.dividedWidth = widthValue;
		}
		irmPoPage.purchaseHeaderbuttons[2].waitForDisplayed();
		irmPoPage.purchaseHeaderbuttons[2].scrollIntoView();
		irmPoPage.purchaseHeaderbuttons[2].click();
		irmPoPage.purchaseOrderTableFull.click();
		styleAttribute = irmPoPage.puchaseOrderSection.getAttribute('style');
		match = widthRegex.exec(styleAttribute);
		if (match) {
			var widthValue = match[1];
			this.originalWidth = widthValue;
		}
		console.log('Full original width is '+this.originalWidth +' and divided width is '+this.dividedWidth);
		expect(this.originalWidth).to.be.not.eql(this.dividedWidth);
	}
	verifyPurchaseOrderView(tableView) {
		browser.pause(3000);
		tableView = tableView.replace(/['"]+/g, '');
		 if (tableView === "List"){
			expect(irmPoPage.purchaseOrderMeatBall.isExisting()).to.be.true;
			console.log('View updated to: ' + tableView);
		 }
		 else {
			expect(irmPoPage.purchaseOrderCardViewVerification.isExisting()).to.be.true;
			console.log('View updated to: ' + tableView);	
		 }
	}
	verifyPoHamburgerMenu()
	{

	}
	verifyListOfPI()
	{
		expect(irmPoPage.selectProfileItem(this.ProfileItem).isExisting()).to.be.true;
	}
	verifyIvalidPIError()
	{
		expect(irmPoPage.invalidPIError.isExisting()).to.be.true;
	}
	verifyIvalidVendorError()
	{
		expect(irmPoPage.invalidVendorError.isExisting()).to.be.true;
	}
	verifyBtnContinueDisabled()
	{
		browser.pause(1000);
		expect(irmPoPage.btnContinue.isClickable()).to.be.false;
	}
	verifyListOfVendors()
	{
		expect(irmPoPage.selectProfileItem(this.vendorName).isExisting()).to.be.true;
	}
	verifybtnAddMoreItems()
	{
		expect(irmPoPage.btnAddMoreItems.isExisting()).to.be.true;
	}
	verifybtnContinue()
	{
		expect(irmPoPage.btnContinue.isExisting()).to.be.true;
	}
	verifybtnCancel()
	{
		expect(irmPoPage.btnCancel.isExisting()).to.be.true;
	}
	verifyPOSummaryPage()
	{
		expect(irmPoPage.poSummaryHeader.isExisting()).to.be.true;
	}
	verifybtnBack()
	{
		expect(irmPoPage.pobtnBackSummary.isExisting()).to.be.true;
	}
	verifyPONumber()
	{
		expect(irmPoPage.poNumber.isExisting()).to.be.true;
	}
	verifyPODate()
	{
		expect(irmPoPage.poDate.isExisting()).to.be.true;
	}
	verifyVendor()
	{
		expect(irmPoPage.poVendor.isExisting()).to.be.true;
	}
	verifyVendorAddress()
	{
		expect(irmPoPage.poVendorAddress.isExisting()).to.be.true;
	}
	verifyShipTo()
	{
		expect(irmPoPage.poShipTo.isExisting()).to.be.true;
	}
	verifyShipToAddress()
	{
		expect(irmPoPage.poShipToAddress.isExisting()).to.be.true;
	}
	verifyItemNumber()
	{
		expect(irmPoPage.poItemNumber.isExisting()).to.be.true;
	}
	verifyPOName()
	{
		expect(irmPoPage.poItemName.isExisting()).to.be.true;
	}
	verifyQty()
	{
		expect(irmPoPage.poItemQty.isExisting()).to.be.true;
	}
	verifyUnitPrice()
	{
		expect(irmPoPage.poItemUP.isExisting()).to.be.true;
	}
	verifyTaxRate()
	{
		expect(irmPoPage.poItemTR.isExisting()).to.be.true;
	}
	verifyPoTotal()
	{
		expect(irmPoPage.poItemTotal.isExisting()).to.be.true;
	}
	verifyPoGetCreated()
	{
		var allPOColumns = irmPoPage.purchaseOrderAllColumns;
		var firstRowDetail = irmPoPage.purchaseOrderfirstRowData;
		expect(this.GetCellValueByColumnName(allPOColumns,firstRowDetail,'Status')).to.eql(this.poCreatedStatus);
	}
	GetCellValueByColumnName(arrayOfColumns,arrayOfDataCells,columnName)
    {
        let cellValue="";
		var updatedColumnsWithText = [];
		for (let i = 0; i < arrayOfColumns.length; i++) {
			updatedColumnsWithText.push(arrayOfColumns[i].getText());
		}
        if (updatedColumnsWithText.includes(columnName)) {
            let indexofColumn = updatedColumnsWithText.indexOf(columnName);
            return arrayOfDataCells[indexofColumn].getText();
        }
        return cellValue;
    }
	verifyPODetails()
	{
		browser.pause(4000);
		var alltextdata = irmPoPage.getAllText;
		console.log('purchase status is '+this.PurchaseStatus);
		console.log('purchase number is '+this.PurchaseNumber);
		expect(alltextdata[1].getText()).to.eql(this.PurchaseStatus);
		expect(alltextdata[3].getText()).to.eql(this.PurchaseNumber);
		expect(this.PurchaseDate.includes(alltextdata[5].getText())).to.be.true;
	}
	verifyNewItemAdded()
	{
		irmPoPage.confirmationMsg.waitForDisplayed();
		browser.pause(5000);
		expect(irmPoPage.verifyItem(this.subItem).isExisting()).to.be.true;
		
	}
	verifyTotalValue()
	{
		browser.pause(1000);
		expect(irmPoPage.itemTotal.getText()).to.be.eql('$4.00');
	}
	verifyPOItems()
	{
		expect(irmPoPage.purchaseItemLocation.isExisting()).to.be.true;
		expect(irmPoPage.purchaseItemSerial.isExisting()).to.be.true;
		expect(irmPoPage.equipmentProfileLocation.isExisting()).to.be.true;
	}
	verifyReceivePrompts()
	{
		browser.pause(3000);
		expect(irmPoPage.btnPartiallyReceive.isExisting()).to.be.true;
		expect(irmPoPage.btnCreateNewPO.isExisting()).to.be.true;
	}
	verifyPartialStatus()
	{
		browser.pause(5000);
		expect(irmPoPage.poStatusValue.getText()).to.be.eql('PARTIAL');
		
	}
	verifySKU()
	{
		browser.pause(5000);
		expect(irmPoPage.poItemQty.isExisting()).to.be.true;
	}
	verifyQTYDefaultValue()
	{
		var firstRowDetail = irmPoPage.getAllInputsOfDrawer;
		expect(firstRowDetail[2].getValue().includes('1')).to.be.true;
	}
	fillUnitPriceTo3Decimal()
	{
		browser.pause(3000);
		irmPoPage.editUP.click();
		browser.pause(1000);
		browser.keys(this.clearKeys);
		browser.keys('\uE01B');
		browser.keys('\uE01A');
		browser.keys('\uE028');
		browser.keys('\uE01B');
		browser.keys('\uE01C');
		browser.keys('\uE01D');
		irmPoPage.poItemUP.click();
		browser.pause(500);
		expect(irmPoPage.editUP.getText().includes('10.123')).to.be.true;

	}
	dockIntPO()
	{
		irmPoPage.dockInPo.click();
	}
	verifyPODockedIn()
	{
		expect(irmPoPage.dockedInBtn.isExisting()).to.be.true;
	}
	dockOutPO()
	{
		irmPoPage.dockedInBtn.click();
		browser.pause(1000);
		irmPoPage.dockedOutBtn.click();
		browser.pause(2000);
		expect(irmPoPage.purchaseOrderHeading.isExisting()).to.be.true;
	}
	dockOutPOOtherthanIRM()
	{
		browser.pause(4000);
		if(irmPoPage.purchaseOrderHeading.isExisting())
		{
			irmPoPage.dockInPo.click();
		}
		irmPoPage.subscriberPage.click();
		browser.pause(3000);
		this.dockOutPO();
	}
	verifyArchiveOptionDisabled()
	{
		browser.pause(3000);
		expect(irmPoPage.archiveMenu.isClickable()).to.be.false;
		browser.keys(this.Esckeys);
	}
	verifyPoStatusChangedToArchive()
	{
		browser.keys(this.Esckeys);
		browser.pause(7000);
		var firstRowDetail = irmPoPage.purchaseOrderfirstRowData;
		var allPOColumns = irmPoPage.purchaseOrderAllColumns;
		this.PurchaseDate = this.GetCellValueByColumnName(allPOColumns,firstRowDetail,'Date Ordered');
		//console.log('porchase date from param' +this.PurchaseDate );
		//console.log('porchase date from current row' +firstRowDetail[0].getText());
		expect(this.GetCellValueByColumnName(allPOColumns,firstRowDetail,'Status')).to.be.eql('ARCHIVED');
		
	}
	verifyArchivedStatusDoNotShow()
	{
		browser.pause(5000);
		var firstRowDetail = irmPoPage.purchaseOrderfirstRowData;
		expect(firstRowDetail[0].getText()).to.be.not.eql(this.PurchaseDate);
	}
	verifyVendorList()
	{
		browser.pause(3000);
		var firstRowDetail = irmPoPage.getAllInputsOfDrawer;
		expect(firstRowDetail[1].getValue().includes('ISP Vendors (Preferred)')).to.be.true;
		expect(firstRowDetail[4].getValue().includes('ISP Vendors (Preferred)')).to.be.true;
	}
	verifySKUItem()
	{
		browser.pause(4000);
		expect(irmPoPage.skuItem.isExisting()).to.be.true;
	}



}
module.exports = new IrmPurchaseOrderActions();
