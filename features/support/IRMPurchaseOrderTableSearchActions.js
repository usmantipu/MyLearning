var irmPoPage = require('../pageobjects/IRMPurchaseOrderTableSearch.page');
var expect = require('chai').expect;

class IRMPurchaseOrderTableSearchActions {
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
		this.keyToLock;this.beforeSort;this.afterSort;
    }
	clickOnPOsearch()
	{
		irmPoPage.purchaseHeaderbuttons[0].waitForDisplayed();
		irmPoPage.purchaseHeaderbuttons[0].scrollIntoView();
		irmPoPage.purchaseHeaderbuttons[0].click();
	}
	clickOnSearchLockIcon()
	{
		irmPoPage.lockedIcon.waitForDisplayed();
		irmPoPage.lockedIcon.click();
	}
	selectPoKey(field)
	{
		browser.pause(1000);
		field = field.replace(/['"]+/g, '');
		irmPoPage.selectListItem(field).click();
		this.keyToLock = field;
	}
	inputPoSearchData(valueTosearch)
	{
		browser.pause(1000);
		valueTosearch = valueTosearch.replace(/['"]+/g, '');
		irmPoPage.purchaseSearch.scrollIntoView();
		irmPoPage.purchaseSearch.click();
		irmPoPage.purchaseSearch.keys(this.clearKeys);
		browser.pause(1000);
		irmPoPage.purchaseSearch.setValue(valueTosearch);
		browser.pause(3000);
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
		irmPoPage.btnCloseDialog.click();
		browser.pause(3000);
	}
	keepOnlyLastColumns()
	{
		if(!irmPoPage.purchaseOrderMeatBall.isExisting()){
			irmPoPage.purchaseHeaderbuttons[2].click();
        	browser.pause(1500);
			irmPoPage.purchaseOrderTableView.waitForDisplayed();
			irmPoPage.purchaseOrderTableView.waitForClickable();
			irmPoPage.purchaseOrderTableView.click();
			browser.pause(1500);
		}
		browser.pause(2000);
		irmPoPage.menuOfPurchaseOrder.scrollIntoView();
		irmPoPage.menuOfPurchaseOrder.click();
		irmPoPage.btnChooseColumn.waitForDisplayed();
		irmPoPage.btnChooseColumn.click();
		irmPoPage.btnRestoreolumns.waitForDisplayed();
		irmPoPage.btnRestoreolumns.click();
		browser.pause(2000);
		irmPoPage.btnDateOrderedColumn.waitForDisplayed();
		irmPoPage.btnDateOrderedColumn.click();
		irmPoPage.btnItemNameColumn.waitForDisplayed();
		irmPoPage.btnItemNameColumn.click();
		irmPoPage.btnLastUpdatedColumn.waitForDisplayed();
		irmPoPage.btnLastUpdatedColumn.click();
		irmPoPage.btnVendorColumn.waitForDisplayed();
		irmPoPage.btnVendorColumn.click();
		irmPoPage.btnCloseColumnsDialog.waitForDisplayed();
		irmPoPage.btnCloseColumnsDialog.click();
		browser.pause(2000);
	}
	clearSearchBox()
	{
		irmPoPage.clearSearchBox.waitForDisplayed();
		irmPoPage.clearSearchBox.click();
		browser.pause(1000);
	}
	addMoreCharacter(newcharc)
	{
		newcharc = newcharc.replace(/['"]+/g, '');
		irmPoPage.purchaseSearch.setValue(newcharc);
	}
	clickLockClosedIcon()
	{
		irmPoPage.lockClosedIcon.waitForDisplayed();
		irmPoPage.lockClosedIcon.click();
	}
	enableShowArchiveOption()
	{
	 irmPoPage.menuOfPurchaseOrder.click();
			browser.pause(1000);
			if(irmPoPage.statusOfShowArchived.getAttribute('class').includes('text-success')){}
			else{
				console.log('going to click show archived');
				irmPoPage.showArchived.waitForClickable();
				irmPoPage.showArchived.click();
			}
			browser.keys(this.Esckeys);
	}
	sortPoColumns(field)
		{
			browser.pause(2000);
			field = field.replace(/['"]+/g, '');
			this.beforeSort = irmPoPage.firstPoRowData[1].getText();
			console.log('before sort value is '+this.beforeSort);
			let indexToClick=0;
			var allRelatedData = irmPoPage.poColumnsHeader;
			// for (let i = 0; i < allRelatedData.length; i++) {
			// 	console.log('index is' +i +' and value is'+allRelatedData[i].getText());
			//   }
			browser.pause(500);
			switch(field){
				case 'PO#':
					indexToClick=1;
					break;
				case 'Item Name(s)':
					indexToClick=2;
					break;
				case 'Vendor':
					indexToClick=3;
					break;
				case 'Date Ordered':
					indexToClick=4;
					break;
				case 'Last Update':
					indexToClick=5;
					break;
				case 'Status':
					indexToClick=2;
					break;
				case 'Total':
					indexToClick=3;
					break;	
					
			}
			allRelatedData[indexToClick].scrollIntoView();
			allRelatedData[indexToClick].waitForExist();
			allRelatedData[indexToClick].moveTo();
			browser.pause(500);
			allRelatedData[indexToClick].click();
			browser.pause(500);
			allRelatedData[indexToClick].click();
			browser.pause(500);
			allRelatedData[indexToClick].click();
			browser.pause(500);
			allRelatedData[indexToClick].click();
			console.log('sorted the list for '+field);
		}



























	verifyPOsearchTable()
	{
		irmPoPage.purchaseHeaderbuttons[0].waitForDisplayed();
		irmPoPage.purchaseHeaderbuttons[0].scrollIntoView();
		expect(irmPoPage.purchaseHeaderbuttons[0].isExisting()).to.be.true;
	}
	verifyPOsearchBox()
	{
		irmPoPage.purchaseSearch.click();
		expect(irmPoPage.purchaseSearch.isExisting()).to.be.true;
	}
	PoSearcFields(poFields)
	{
		var allFields = poFields.raw();
		expect(irmPoPage.selectListItem(allFields[0][0]).isExisting()).to.be.true;
		console.log('verified PO search item : '+ allFields[0][0]);
		expect(irmPoPage.selectListItem(allFields[1][0]).isExisting()).to.be.true;  
		console.log('verified PO search item : '+ allFields[1][0]);
		expect(irmPoPage.selectListItem(allFields[2][0]).isExisting()).to.be.true;
		console.log('verified PO search item : '+ allFields[2][0]);
		expect(irmPoPage.selectListItem(allFields[3][0]).isExisting()).to.be.true;
		console.log('verified PO search item : '+ allFields[3][0]);
		expect(irmPoPage.selectListItem(allFields[4][0]).isExisting()).to.be.true;
		console.log('verified PO search item : '+ allFields[4][0]);
		expect(irmPoPage.selectListItem(allFields[5][0]).isExisting()).to.be.true;
		console.log('verified PO search item : '+ allFields[5][0]);
		expect(irmPoPage.selectListItem(allFields[6][0]).isExisting()).to.be.true;
		console.log('verified PO search item : '+ allFields[6][0]);
	}
	verifyPoSearchKey(field)
	{
		browser.pause(1000);
		field = field.replace(/['"]+/g, '');
		console.log('extracted locked key text : '+ irmPoPage.lockedKey.getText());
		expect(irmPoPage.lockedKey.getText()).to.eql(field);
	}
	verifyPoInThePOTable(field,expectedValue)
	{
		expectedValue = expectedValue.replace(/['"]+/g, '');
		field = field.replace(/['"]+/g, '');
		browser.pause(4000);
		console.log('going to verify searched item');
		var allPOColumns = irmPoPage.purchaseOrderAllColumns;
		var firstRowDetail = irmPoPage.purchaseOrderfirstRowData;
		const lastUpdateColumnHeader = $$('[aria-label="Last Update"]')[0];
		lastUpdateColumnHeader.scrollIntoView();
		lastUpdateColumnHeader.waitForExist();
		const ariaHidden = lastUpdateColumnHeader.getAttribute('aria-hidden');
		console.log(ariaHidden); // Output: "false"
		const lastUpdateCellValue = $$('[data-field="submitted_on"]')[1];
		lastUpdateCellValue.scrollIntoView();
		lastUpdateCellValue.waitForExist();
		browser.pause(1200);
		const text = lastUpdateCellValue.getText();
		console.log(text); // Output: "Oct 04, 2024 05:56:20 AM"
		expect(text.includes(expectedValue)).to.be.true;
		console.log('purchase order successfully searched');
	}
	verifyCoumnValue(field,expectedValue)
	{
		expectedValue = expectedValue.replace(/['"]+/g, '');
		field = field.replace(/['"]+/g, '');
		browser.pause(3000);
		console.log('going to verify searched item');
		let value = this.getColumnValueByName(field);
		console.log('extracted value is '+value);
		expect(value.includes(expectedValue)).to.be.true;
		console.log('purchase order successfully searched');
	}
	getColumnValueByName(columnName) {
    // Step 1: Locate the column header using aria-label
    let headerSelector = `div.MuiDataGrid-columnHeader[aria-label="${columnName}"]`;
    let columnHeader = $(headerSelector);

    if (!columnHeader.isExisting()) {
        throw new Error(`Column header with name "${columnName}" not found`);
    }

    // Step 2: Scroll column header into view
    columnHeader.scrollIntoView();
    browser.pause(200); // Allow time for scroll animation

    // Step 3: Get data-field for this column
    let dataField = columnHeader.getAttribute('data-field');

    if (!dataField) {
        throw new Error(`Unable to get data-field for column "${columnName}"`);
    }

    // Step 4: Locate the first visible row cell for that data-field
    let cellSelector = `div.MuiDataGrid-cell[data-field="${dataField}"]`;
    let cell = $(cellSelector);

    if (!cell.isExisting()) {
        throw new Error(`Cell for column "${columnName}" not found`);
    }

    // Step 5: Get the text content of the cell
    let value = cell.getText();
    return value;
}
	GetCellValueByColumnName(arrayOfColumns,arrayOfDataCells,columnName)
    {
        let cellValue="";
		var updatedColumnsWithText = [];
		for (let i = 0; i < arrayOfColumns.length; i++) {
			console.log(' index is '+i+' and value is '+arrayOfColumns[i].getText());
			updatedColumnsWithText.push(arrayOfColumns[i].getText());
		}
        if (updatedColumnsWithText.includes(columnName)) {
            let indexofColumn = updatedColumnsWithText.indexOf(columnName);
            console.log(columnName+ ' index is '+indexofColumn);
            console.log(' found value is '+arrayOfDataCells[indexofColumn].getText());
			cellValue = arrayOfDataCells[indexofColumn].getText();
			console.log('column found value is '+cellValue);
            return cellValue;  // Return the value from the data object
        }
        return cellValue;
    }	
	verifySearchedTextHighlight(text)
	{
		text = text.replace(/['"]+/g, '');
		irmPoPage.highLightedText.waitForDisplayed();
		console.log('extracted text from highlighted area is '+irmPoPage.highLightedText.getText());
		expect(irmPoPage.highLightedText.getText()).to.eql(text);
	}
	verifySearchBoxGetEmpty()
	{
		browser.pause(1000);
		expect(irmPoPage.purchaseHeaderbuttons[0].isExisting()).to.be.true;
	}
	verifyMultipleSearchResults()
	{
		browser.pause(4000);
		var firstRowDetail = irmPoPage.poAllRows;
		console.log('all rows are  '+firstRowDetail.length);
		expect(firstRowDetail.length >1 ).to.be.true;
	}
	verifySingleSearchResult()
	{
		browser.pause(4000);
		var firstRowDetail = irmPoPage.poAllRows;
		console.log('again all rows are  '+firstRowDetail.length);
		expect(firstRowDetail.length).to.eql(1);
	}
	verifySearchKeyLocked()
	{
		browser.pause(4000);
		irmPoPage.lockClosedIcon.waitForDisplayed();
		expect(irmPoPage.lockClosedIcon.isExisting()).to.be.true;
	}
	verifyNoDataMessage(message)
	{
		browser.pause(4000);
		message = message.replace(/['"]+/g, '');
		irmPoPage.noDataMessage.waitForDisplayed();
		console.log('extracted no data message is '+irmPoPage.noDataMessage.getText());
		expect(irmPoPage.noDataMessage.getText()).to.eql(message);
	}
	verifySortedInInventory(field)
	{
		browser.pause(2500);
		field = field.replace(/['"]+/g, '');
		var allPOColumns = irmPoPage.purchaseOrderAllColumns;
		var firstRowDetail = irmPoPage.purchaseOrderfirstRowData;
		let newvalue = this.GetCellValueByColumnName(allPOColumns,firstRowDetail,field)
		console.log('before sorted is '+this.beforeSort);
		console.log('after sort value is '+newvalue);
		expect(newvalue.includes(this.beforeSort)).to.be.false;
	}
}
module.exports = new IRMPurchaseOrderTableSearchActions();
