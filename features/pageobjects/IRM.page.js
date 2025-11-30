"use strict";
var Page = require('./page')

class newEquipment extends Page{

	get equipmentMenu(){return browser.$('[aria-label="IRM"]');}
	get pageHeading(){return browser.$('.MuiTypography-root=Infrastructure Resource Management');}
	get infrastructureLocationCardHeading(){return browser.$('.MuiTypography-root=Infrastructure Locations');}
	get equipmentProfilesCardHeading(){return browser.$('.MuiTab-textColorPrimary=Equipment');}
	get equipmentAssembliesCardHeading(){return browser.$('.MuiTab-textColorPrimary=Equipment Assemblies');}
	get inventoryCardHeading(){return browser.$('.MuiTab-textColorPrimary=Inventory');}
	get purchaseOrdersCardHeading(){return browser.$('h6=Purchase Orders');}
	get subMenuParent(){return browser.$('[aria-labelledby="nested-list-subheader"]');}
	/*Site location*/
	get siteLocationHemburgerMenu(){return browser.$('//div[@class="react-grid-layout layout dashboard-Quad"]/div[1]//div[@role="table"]//button')}
	get siteActionsMenu(){return browser.$('//div[@class="react-grid-layout layout dashboard-Quad"]/div[1]//span/button[3]');}
	get siteSearch(){return browser.$('//div[@class="react-grid-layout layout dashboard-Quad"]/div[1]//span/button[2]');}
	get selectFirstSite(){return browser.$('//div[@class="react-grid-layout layout dashboard-Quad"]/div[1]//div[@role="table"]//div[@class="ReactVirtualized__Grid bottomRightGrid"]/div/div[2]')}
	/*Add Site location*/
	get btnAddSite(){return browser.$('[vispdata-testid="add-infrastructure-location-button"]');}
	get siteName(){return browser.$('.MuiFormControl-root*=Name').$('input');}
	get siteProfileDropDown() {return browser.$('//div[@name="site_profile_id"]');}
	get selectSiteProfileFromDropDown(){return browser.$('//ul[@role="listbox"]/li[1]');}
	get elevationSite() {return browser.$('.MuiFormControl-root*=Elevation').$('input');}
	get siteData_Name() {return browser.$('[name="site_data.0.value"]'); }
	get btnSave(){return browser.$('.MuiDrawer-paperAnchorRight').$('button=Save');}//button/span[text()="Save"]
	get elevationSubLocation(){ return browser.$('[name="amsl_total"]');}
	get siteProfileTypeDropDown(){ return browser.$('.MuiFormControl-root*=Infrastructure Profile');}
	get siteProfileTypeInput(){ return this.siteProfileTypeDropDown.$('input');}
	get selectSiteProfileTypeOption(){ return browser.$('//ul[@name="site_profile_id"]/li[2]');}
	get addSubLocationBtn(){ return browser.$('[vispdata-testid="add-sub-location"]');}
	/* Add Sub Location */

	get subLocation_name(){return browser.$('.MuiFormControl-root*=Name').$('input');}
	get subLocation_elevation(){return browser.$('.MuiFormControl-root*=Elevation').$('input');}
	
	//InfraLocationTabs(Docsis,WareHouse)
	get btnDocsis(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[1]/div[2]/div/div/button[2]');}
	get infraProfileTextDocsis(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[1]/div[3]/div/div[1]/div[1]/div/div/div/div[2]/div/div/div[9]/div/p');}
	get btnWarehouse(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[1]/div[2]/div/div/button[3]');}
	get infraProfileTextWarehouse(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[1]/div[3]/div/div[1]/div[1]/div/div/div/div[2]/div/div/div[9]/div/p');}
	
	

	/*Site location dock*/
	get siteHeader(){return browser.$('.drawer-header')}
	get editSiteBtn(){return browser.$('[vispdata-testid="edit-Location"]');}
	siteParentByLableName(label){var allitems = browser.$('.MuiDrawer-paperAnchorRight').$$('.MuiGrid-item');
										for (let i = 0; i < allitems.length; i++) {
											console.log('extracted text is '+allitems[i].getText());
												if(allitems[i].getText().includes(label))
												{
													return allitems[i];
												}
										}
	}
	inputByParent(parent){return parent.$('input');}
	get siteParentToUpdate(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[5]/div/div[2]/div[2]/div[1]/div/div[9]');}
	get EditContactOfAnInputByLable(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[5]/div/div[2]/div[2]/div[1]/div/div[9]');}
	get siteAddress1Parent(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[2]/div/div[3]/div/div[2]/div[2]/div[1]/div/div[9]');}
	get	siteAddress1(){return this.siteAddress1Parent.$('input');}
	get updateContactsAddressParent(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[2]/div/div[2]/div[2]/div[2]/div/div[2]/div[2]/div[1]/div/div[9]');}
	get generateAddressUsingCoordinates(){return browser.$('.drawer-wrapper').$('div*=Address 1').$('button');}
	get	siteAddress2(){return browser.$('.MuiFormControl-root*=Address 2').$('input');}
	get lattidue(){return browser.$('.MuiFormControl-root*=Latitude').$('input');}
	get longitude(){return browser.$('.MuiFormControl-root*=Longitude').$('input');}
	get generateCoordinatesUsigAddress(){return browser.$('[aria-label="Geocode the address to get latitude/longitude."]');}
	get city(){return browser.$('.MuiFormControl-root*=City').$('input');}
	get state(){return browser.$('//*[@id="app-inner"]/div[2]/div/main/div[4]/div/div[4]/div/div/div/div[9]');}
	get addSiteStateElement(){return browser.$('.MuiFormControl-root*=State').$('input');}
	get contactStateElement(){return browser.$('.MuiFormControl-root*=State');}
	get contactStateInput(){return this.contactStateElement.$('input');}
	get zip(){return browser.$('.MuiFormControl-root*=Zip').$('input');}
	get zipdropdownValue(){return browser.$('li*=10002');}
	get zipErrorMessage(){return browser.$('.MuiFormControl-root*=Zip').$('.Mui-error');}
	get subSiteZip(){return browser.$$('.MuiDrawer-paperAnchorRight')[1].$('.MuiFormControl-root*=Zip').$('input');}
	//get btnSave(){return browser.$('[button="Save"]');}
	//get confirmationMsg(){return browser.$('.MuiAlert-message');}
	get btnClose(){return browser.$('.MuiDrawer-paperAnchorRight').$('[aria-label="Close"]');}
	get btnCloseSubSite(){return browser.$('.MuiDrawer-paperAnchorRight').$('.MuiGrid-container*=Locations').$('[aria-label="Close"]');}
	 	subSiteHeader(subsitename){return browser.$('#panel1a-header='+subsitename +' (sub-location)');}
	 	btnEquipment(equipmentName){return browser.$('.MuiGrid-item='+ equipmentName);}
	get btnSiteEquipmentCollapsable(){return browser.$('nav=Site Equipment');}
		btnEquipmentFromCollapsable(equipmentName){return browser.$('h6*='+ equipmentName);}
		isFieldExist(fieldName){return browser.$('.MuiTypography-root*='+fieldName).isExisting();}
	get closeSubDock(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[2]/div/div[3]/div/div[1]/div/div[2]/button');}
	get closeEditEquipment(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[2]/div/div[2]/div[1]/div/div[2]/div[3]/div/div[1]/div/div[2]/button');}
	get closeBequipMent(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[2]/div/div[2]/div[2]/div/div[2]/div[3]/div/div[1]/div/div[2]/button');}
	get closeEditContactDock(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[2]/div/div[2]/div[2]/div[2]/div/div[1]/div/div[2]/button');}
	get btnShowMore(){return browser.$('a=Show more');}
	get btnArrowback(){return browser.$('[data-testid="ArrowBackIcon"]');}
	get btnExpandTree(){return browser.$('[data-testid="SettingsInputAntennaIcon"]');}
	get btnArrowForward(){return browser.$$('[data-testid="ArrowForwardIcon"]')[1];}
	get btnInterconnection(){return browser.$('nav*=Interconnections');}
	get btnSiteEquipment(){return browser.$('nav*=Site Equipment');}
	    selectInterConnectionEquipment(ptpequipmentname){return browser.$('h6*='+ptpequipmentname);}
	get	editPtpAddedEquipment(){return browser.$('.MuiDrawer-paperAnchorRight').$$('[aria-label="settings"]');}
	get remoteSite(){return browser.$('.MuiFormControl-root*=Remote Side');}
	get remoteSiteInput(){return this.remoteSite.$('input');}
	    selectSublocationsForRemoteLink(sublocationName){return browser.$('li*='+sublocationName);}
		getByP(ptpequipmentname){return browser.$('p*='+ptpequipmentname);}
	get btnSiteClose(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('[data-testid="CloseIcon"]');}
	

	/*Infrastructure Locations table*/
	get firstRowData(){return browser.$('.react-grid-item*=Infrastructure Locations').$('.MuiDataGrid-virtualScrollerContent').$$('.MuiTypography-root');}
	
	
	get InfrastructureRowData(){return browser.$('.react-grid-item*=Infrastructure Locations').$('.MuiDataGrid-virtualScrollerContent').$$('.MuiDataGrid-cell');}
	get infrastructureTotalRecords(){return browser.$('.react-grid-item*=Infrastructure Locations').$('.MuiGrid-align-items-xs-center').$('p');}
	get infrastructureMeatBall(){return browser.$('.react-grid-item*=Infrastructure Locations').$('.MuiDataGrid-columnHeaderTitleContainerContent').$('[data-testid="MenuIcon"]');}
	get infrastructureTableInlineEditing(){return browser.$('#header-action-menu').$('.MuiList-root').$('li=Enable Inline Editing');}
	    inlineEditingStatus(){return this.infrastructureTableInlineEditing.$('.text-success');}
	get infrastructureTableViewComfortable(){return browser.$('#header-action-menu').$('.MuiList-root').$('li=Comfortable');}
	get infrastructureTableViewCozy(){return browser.$('#header-action-menu').$('.MuiList-root').$('li=Cozy');}
	get infrastructureTableViewCompact(){return browser.$('#header-action-menu').$('.MuiList-root').$('li=Compact');}
	infrastructureTableView(parentelement) {return parentelement.$('.MuiSvgIcon-root');}
	get btnSiteSearch(){return browser.$('.react-grid-item*=Infrastructure Locations').$('[data-testid="SearchIcon"]');}
	get btnCloseSiteSearch(){return browser.$('.react-grid-item*=Infrastructure Locations').$('[data-testid="CloseIcon"]');}
	get inputSiteSearch(){return browser.$('.react-grid-item*=Infrastructure Locations').$('input');}
	get btnSiteMenu(){return browser.$('.react-grid-item*=Infrastructure Locations').$('[data-testid="MoreVertIcon"]');}
	get infrastructureTabs(){return this.subMenuParent.$('div=Tabs');}
	get infrastructureSingleTable(){return this.subMenuParent.$('div=Single Table');}
	get siteTabs(){return browser.$('.react-grid-item*=Infrastructure Locations').$('.MuiTabs-root');} 
	//TA-762
	get btnSiteRecordMenu(){return browser.$('.react-grid-item*=Infrastructure Locations').$('.MuiDataGrid-virtualScrollerRenderZone').$('[data-testid="MoreVertIcon"]');}
	get btnDeleteSite(){return browser.$('[vispdata-testid^="delete-infrastructure-location-"]');}
	get deleteSiteContent(){return browser.$('.MuiDialog-container').$('.MuiDialogContent-root');}
	get btnConDialogYes(){return browser.$('.MuiDialog-container').$('button=Yes');}
	get btnConDialogNo(){return browser.$('.MuiDialog-container').$('button=No');}
	get noDataAvailable(){return browser.$('.text-center*=No Data Available...');}
	get siteDoNotDeleteTooltip(){return browser.$('.MuiTooltip-tooltip');}
	get noEquipment(){return browser.$('span*=No Equipment available.');}

	/*Site Contacts*/
	get editSiteContactsBtn(){return browser.$('[vispdata-testid="edit-Contacts"]');}
	get btnAddContact(){return browser.$$('[data-testid="AddCircleIcon"]')[1];}
	//get siteName(){return browser.$('[name="name"]')}
	get	company(){return browser.$('.MuiFormControl-root*=Company').$('input');}
    get	fName(){return browser.$('.MuiFormControl-root*=First Name').$('input');}
    get	mName(){return browser.$('.MuiFormControl-root*=MI').$('input');}
    get	lName(){return browser.$('.MuiFormControl-root*=Last Name').$('input');}
	get contactNotes(){return browser.$('.MuiFormControl-root*=Notes').$('input');}
    get	address1(){return browser.$('//*[@id="react-select-5-input"]');}
    get	selectAddress1Suggestion(){return browser.$('//div[@class="MuiPaper-root autocomplete-dropdown-container MuiPaper-elevation1 MuiPaper-rounded"]/div[1]');}
	get	address2(){return browser.$('.MuiFormControl-root*=Address 2').$('input');}
    get	contactCity(){return browser.$('.MuiFormControl-root*=City').$('input');}
    get	state(){return browser.$('//div[@id="react-select-single"]/div[1]');}
    get	selectState_TX(){return browser.$('//div[@id="react-select-2-option-50"]');}
    get	contactZip(){return browser.$('.MuiFormControl-root*=Zip').$('input');}
		contactZipdropdownValue(valueToSet){return browser.$('li='+valueToSet);}
	get	contactNumber(){return browser.$('.MuiFormControl-root*=Number').$('input');}
	get	contactNumberType(){return browser.$$('.MuiFormControl-root*=Type')[1].$('input');}
	get	autoComplete(){return browser.$('.MuiAutocomplete-popper');}
    get	homePhoneType(){return browser.$('.MuiAutocomplete-popper').$('span*=home');}
    get	workPhoneType(){return browser.$('.MuiAutocomplete-popper').$('span*=work');}
    get	cellPhoneType(){return browser.$('.MuiAutocomplete-popper').$('span*=mobile');}
    get	email(){return browser.$('.MuiFormControl-root*=Email').$('input');}
	get	emailType(){return browser.$('.MuiFormControl-root*=Type').$('input');}
	get	primaryEmailType(){return browser.$('.MuiAutocomplete-popper').$('span*=Primary');}
	get btcSaveContactDeatils(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[2]/div/div[2]/div[2]/div[2]/div/div[2]/div[2]/div[2]/span/button');}
	get contactAdditionConfirmationMsg(){return browser.$('.MuiAlert-message');}
	get btnSaveContact(){return browser.$('.drawer-footer').$('span=Save');}
	get getAllsaveButtons(){return browser.$$('button=Save');}
	 isDataExist(dataToVerify){return browser.$('.MuiTypography-root*='+dataToVerify).isExisting();}
	/** get close button of dock */
	get btnCloseEditEquipment(){return browser.$('.MuiDrawer-paperAnchorDockedRight*=Edit Equipment').$('//button[@aria-label="Close"]');}
	get btnCloseOfDock(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('//button[@aria-label="Close"]');}
	get btnSubSiteEquiEdit(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[5]/div/div[1]/div/div[2]/button');}
	/*get site dock details like sub-site or contact etc*/
	    siteDockItemByName(nametoFind){return browser.$('.MuiAccordion-root*='+nametoFind);}
		siteDockDetailsByName(nametoFind){ var allDetailsSections = browser.$$('.MuiAccordion-root')
												for(var i=0; i<=allDetailsSections.length; i++){
												if (allDetailsSections[i].getText().includes(nametoFind))
													{
														return allDetailsSections[i].$$('.MuiTypography-root');
													}	
												}

	}
	get btnYes(){return browser.$('button=Yes');}
	/**Add Equipment */
	get btnEquipmentProfile(){return this.inventoryParent.$('button=Equipment');}
	get btnAddEquipment(){return browser.$('[aria-label="Add Equipment"]');}
	get btnequipmentSearch(){return browser.$('.react-grid-item*=Equipment').$('[data-testid="SearchIcon"]');}
	get equipmentSearch(){return browser.$('.react-grid-item*=Equipment').$('input');}
	get equipmentClearSearch(){return browser.$('.react-grid-item*=Equipment').$('[data-testid="CloseIcon"]');}
	get equipmenAssemblyNoSearchResult(){return browser.$('span=No Equipment Assembly available.');}
	get btnEquipmentHeaderMenu(){return this.inventoryParent.$('[data-testid="MoreVertIcon"]');}
	get selectEquipmentListItem(){return this.subMenuParent.$('div=List');}
	get selectEquipmentTilesItem(){return this.subMenuParent.$('div=Tiles');}
	get quipmentMeatBall(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[2]/div[2]/div/div/div/div[1]/div/div/div[1]/div[1]/div/div/div/button');}
	get quipmentTableInlineEditing(){return browser.$('#header-action-menu').$('.MuiList-root').$('li=Enable Inline Editing');}
	get quipmentTableViewComfortable(){return browser.$('#header-action-menu').$('.MuiList-root').$('li=Comfortable');}
	get quipmentTableViewCozy(){return browser.$('#header-action-menu').$('.MuiList-root').$('li=Cozy');}
	get quipmentTableViewCompact(){return browser.$('#header-action-menu').$('.MuiList-root').$('li=Compact');}
	get getChooseColumnFromList(){return browser.$('li*=Choose Columns');}
	get chooseColumnProfileDescriptionEnabled(){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root=Profile Description').$('.Mui-checked');}
	get chooseColumnTypeEnabled(){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root=Type').$('.Mui-checked');}
	get chooseColumnDescriptionEnabled(){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root=Description').$('.Mui-checked');}
	get chooseColumnProfileDescription(){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root=Profile Description').$('.MuiButtonBase-root');}
	get chooseColumnType(){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root=Type').$('.MuiButtonBase-root');}
	get chooseColumnDescription(){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root=Description').$('.MuiButtonBase-root');}
	get btnCloseColumnChooser() {return browser.$('button=Close');}
	quipmentTableView(parentelement) {return parentelement.$('.MuiSvgIcon-root');}
	get firstEquipmentRowData(){return browser.$('.react-grid-item*=Equipment').$('.MuiDataGrid-main').$('.MuiDataGrid-virtualScrollerContent').$$('.MuiDataGrid-cell');}
	get equipmentCardViewVerification(){return browser.$('.react-grid-item*=Equipment').$('.MuiGrid-root');}
	get profileName(){return browser.$('[name="name"]');}
	get profileDescription(){return browser.$('.MuiFormControl-root*=Description').$('input');}
	get addEquipmentDialogHeader(){return browser.$('.MuiDrawer-paperAnchorRight*=Equipment');}
	get profilelocation(){return this.addEquipmentDialogHeader.$('.MuiFormControl-root*=Location').$('div');}
	get profilelocationInput(){return this.profilelocation.$('input');}
	get selectFirstLocation(){return browser.$('#menu-location_id').$('.MuiMenu-list').$$('.MuiMenuItem-root')[1];}
		selectCustomLocation(customlocation){return browser.$('#menu-location_id').$('.MuiMenu-list').$('.MuiMenuItem-root=' + customlocation);}
	
	get equipmentprofile(){return this.addEquipmentDialogHeader.$('.MuiFormControl-root*=Equipment Profile').$('div');}
	get equipmentprofileInput(){return this.equipmentprofile.$('input');}
	get selectFirstProfile(){return browser.$('#menu-profile_id').$('.MuiMenu-list').$$('.MuiMenuItem-root')[1];}
		selectCustomEquipmentProfile(customEquipment){return browser.$('#menu-profile_id').$('.MuiMenu-list').$('.MuiMenuItem-root*=' + customEquipment);}
		selectProvidedEquipmentProfile(equipProfile){return browser.$('#menu-profile_id').$('.MuiMenu-list').$('li='+equipProfile);}
	get upstreamDevice(){return browser.$('#mui-component-select-parent_id');}
	get selectFirstUpStream(){return browser.$('#menu-parent_id').$('.MuiMenu-list').$$('.MuiMenuItem-root')[1];}
	get inventoryprofile(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[3]/div/div/div').$('input');}
	get selectFirstInventory(){return browser.$('#menu-inventory_profile_id').$('.MuiMenu-list').$$('.MuiMenuItem-root')[1];}
	get equipmentUpdateIpAddressZero(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('[name="equipment_data.0.value"]');}
	get macAddressEquipment(){return browser.$('.MuiFormControl-root*=Radio MAC').$('input');}
	get ethernetMacEquipment(){return browser.$('.MuiFormControl-root*=Ethernet MAC').$('input');}
	//get ipAddressEquipment(){return browser.$('[name="equipment_data.10.value"]');}
	get ipAddressEquipment(){var allfields =  browser.$$('.MuiTextField-root');
	 										for(var i=0; i<=allfields.length; i++){
											if (allfields[i].getText().includes('IP Address'))
												{
													return allfields[i].$('input');}}}
//	get ipAddressEquipment(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('[name="equipment_data.10.value"]');}
	get updateEthernetMACaddressWhileCopy(){return browser.$('[name="equipment_data.2.value"]');}
	get updateIpAddressEquipment(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiFormControl-root*=IP Address').$('input');}
	get updateMacAddressWhileCopy(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiFormControl-root*=Radio MAC').$('input');}
	get copyAnAssemblyHeader(){return browser.$('h6=Copy an Assembly');}
	get isErrorMsgExist(){return browser.$('.Mui-error').isExisting()}
	get allErrorMsgs(){return browser.$('.MuiDrawer-paperAnchorRight').$('.drawer-wrapper').$$('.Mui-error');}
	get existigIpAddressError(){return browser.$('.MuiFormControl-root*=IP Address ').$('span');}
	 ipErrorExitsing(profileitem){return browser.$('span*=This IP address is already assigned to '+profileitem);}
	 firstEquipmentCard(profilename){return browser.$('h6*='+profilename);}										
	get firstEquipmentProfile(){return browser.$('.react-grid-item*=Inventory').$('h6');
	 										// for(var i=0; i<=allcards.length; i++){
											// if (profilename.includes(allcards[i].getText()))
											// 	{
											// 		return allcards[i];}}
	}
	get dockedSearhField(){return browser.$('.MuiDrawer-paperAnchorRight').$('[placeholder="Search"]');}
	get dockedEquipmentItem(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiDataGrid-virtualScrollerContent').$$('.MuiDataGrid-cell');}
	get btnDotEquiment() {return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiDataGrid-virtualScrollerContent').$('[data-testid="MoreVertIcon"]');}
	get btnDeleteEquipment(){return browser.$('#row-action-menu').$('li=Delete');}
	get btnAddChild(){return browser.$('button=Add Child');}
	get btnFromUnassigned(){return browser.$('div=From Unassigned');}
	get expandEquipmentDropdown(){return browser.$('[name="equipment_id"]');}
		selectProvidedEquipment(equipmentName){return browser.$('li='+equipmentName);}
	get editEquipmentHeader(){return browser.$('h6*=Edit Equipment');}
	get getEquipmentFirstHeader(){return browser.$('.react-grid-item*=Equipment Profiles').$('h6');}
	get inventoryFromEquipment(){return this.addEquipmentDialogHeader.$('.MuiFormControl-root*=Inventory Item').$('input');}

	/*Confirmation box*/
	get confirmationMsg(){return browser.$('.MuiAlert-message');}
	get btnAddEquipmentFromSiteMenu(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[1]/div/div/div/div[1]/div[1]/nav/div[2]');}
	get btnAddEquipmentFromSite(){return browser.$('li=Add Equipment');}
	
	/**Equipment Assembly*/
	get btnEquipmentAssembly(){return browser.$('button=Equipment Assemblies');}
	get	btnCopyAssembly(){return browser.$('[aria-label="Copy Assembly"]');}
	get	allEAColumns(){return browser.$('.react-grid-item*=Inventory').$('.MuiDataGrid-main').$$('.MuiDataGrid-columnHeaderTitle');}
	
	/**Inventory */
	get firstInventoryRowData(){return browser.$('.react-grid-item*=Inventory').$('.MuiDataGrid-main').$('.MuiDataGrid-virtualScrollerRenderZone').$$('.MuiDataGrid-cell');}
	get inventoryExpandedData(){return browser.$('.react-grid-item*=Inventory').$('.MuiDataGrid-main').$('.MuiDataGrid-virtualScrollerRenderZone').$$('.MuiGrid-item');}
	get btnAddInventory(){return browser.$('[aria-label="Add Inventory"]');}
	get tabInventory(){return browser.$('button=Inventory');}
	get inventoryParent(){return browser.$('.react-grid-item*=Inventory');}
	get inventoryHeaderbuttons(){return this.inventoryParent.$$('.MuiIconButton-root');}
	get inventorySearch(){return this.inventoryParent.$('input');}
	get inventoryMeatBall(){return browser.$('.react-grid-item*=Inventory').$('.MuiTableHead-root').$('button');}
	get inventoryTableInlineEditing(){return browser.$('#header-action-menu').$('.MuiList-root').$('li=Enable Inline Editing');}
	get inventoryTableViewComfortable(){return browser.$('#header-action-menu').$('.MuiList-root').$('li=Comfortable');}
	get inventoryTableViewCozy(){return browser.$('#header-action-menu').$('.MuiList-root').$('li=Cozy');}
	get inventoryTableViewCompact(){return browser.$('#header-action-menu').$('.MuiList-root').$('li=Compact');}
	inventoryTableView(parentelement) {return parentelement.$('.MuiSvgIcon-root');}
	get inventoryProfileTableView(){return this.subMenuParent.$('div=List');}
	get inventoryCardView(){return this.subMenuParent.$('div=Tiles');}
	get inventoryCardViewVerification(){return browser.$('.react-grid-item*=Inventory').$('.MuiGrid-root');}
	get isListViewSelected(){return browser.$('.MuiListItem-root*=List').$('svg');}
	get isTileViewSelected(){return browser.$('.MuiListItem-root*=Tiles').$('svg');}
	//create inventoryitem
	get inventoryItemName(){return browser.$('[name="name"]');}
	get inventoryItemSerial(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[9]/div/div/div[1]/div/div[1]/div/div').$('input');}
	get inventoryItemSerialAfterCreate(){return browser.$('#serial');}
	get selectCiscoInventoryProfile(){return browser.$('#menu-inventory_profile_id').$('.MuiMenu-list').$('li=Cisco');}
	get localtionID(){return browser.$('[name="location_id"]');}
	get note(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[6]/div/div').$('input');}
	get closeAddInventory(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('[aria-label="Close"]');}
	get closeAddPO(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('[aria-label="Close"]');}
	get poCreatedHeader(){return browser.$('h6*=The Purchase Order was created successfully:');}
	//create RMA
	get dockedInventoryItem(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$$('.ReactVirtualized__Grid')[1].$$('.MuiTableCell-root');}
	get inventoryDottedMenu(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('[aria-label="settings"]');}
	get btnCreateRMA(){return browser.$('#row-action-menu').$('li=Create RMA');}
	get rmaDate(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiTextField-root*=Date').$('input');}
	get rmaNumber(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiTextField-root*=RMA Number').$('input');}
	get rmaVendor(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiTextField-root*=Vendor').$('input');}
	get selectrmaVendorDropDown(){return browser.$('#menu-vendor').$('[name="vendor"]').$('li');}
	get rmaReturnDate(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiTextField-root*=Return Date').$('input');}
	get rmaTrackingNumber(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiTextField-root*=Return Tracking Number').$('input');}
	get rmaShippedDate(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiTextField-root*=Shipped Date').$('input');}
	get rmaShippedNumber(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiTextField-root*=Shipped Tracking Number').$('input');}
	get rmaLocation(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.drawer-wrapper').$('.MuiGrid-item*=Location').$('div');}
	get ramLocationID(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.drawer-wrapper').$('.MuiGrid-item*=Location').$('[name="location_id"]');}
	get btnSaveRMA(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div[4]/div/div[2]/div[3]/div/div[3]').$('button=Save');}
	get firstRmaRow(){return browser.$$('.MuiDrawer-paperAnchorDockedRight')[1].$('.drawer-wrapper-full').$$('div')[1].$('.bottomRightGrid').$$('.MuiTableCell-root');}
	get btnCloseCreatRMA(){return browser.$$('.MuiDrawer-paperAnchorDockedRight')[1].$('.MuiGrid-container*=Create RMA').$('.MuiIconButton-sizeSmall');}
	//inline editing 
	inputInlineEditing(parentelement){return parentelement.$('input');}
	 saveInlineEditing(parentelement){return parentelement.$('[aria-label="Save"]');}
	 closeInlineEditing(parentelement){return parentelement.$('[aria-label="Close"]');}


	/**Purchase Orders */
	get puchaseOrderSection(){return browser.$('.react-grid-item*=Purchase Orders');}
	get btnCreatePurchaseOrder(){return browser.$('[aria-label="Create Purchase Order"]');}
	get dockedProfileItem(){return browser.$('.MuiTextField-root*=Profile Item').$('input');}
	 selectProfileItem(profileitem){return browser.$('li='+profileitem);}
	get dockedVendor(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiTextField-root*=Vendor').$('input');}
	 selectVendorItem(vendor){return browser.$('li='+vendor);}
	get dockedquantity(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiTextField-root*=Quantity').$('input');}
	get btnContinue(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiButtonBase-root=Continue');}
	get btnCreatePO(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiButtonBase-root=Create PO');}
	get btnOpenNewlyPO(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiLink-underlineHover');}
	get purchaseOrderfirstRowData(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div[2]/div/div/div/div[2]/div/div/div[1]').$$('.MuiTypography-root');}
	get purchaseOrderAllColumns(){return browser.$('.react-grid-item*=Purchase Orders').$('.MuiDataGrid-main').$$('.MuiDataGrid-columnHeaderTitle');}
	get btnOrderStatus(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('[data-testid="ArrowDropDownIcon"]');}
	get poStatusValue(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.p-3').$('p');}
	    changePoStatus(newStatus){return browser.$('li='+newStatus);}
	get btnPopYes(){return browser.$('.MuiDialogActions-root').$('button=Yes');}
	get btnSaveChanges(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('button=Save Changes');}
	get menuOfPurchaseOrder(){return browser.$('.react-grid-item*=Purchase Orders').$('[data-testid="MenuIcon"]');}
	get btnChooseColumn(){return browser.$('li=Choose Columns');}
	get btnRestoreolumns(){return browser.$('.MuiDialog-paper').$('.MuiDialogActions-root').$('button=Restore Defaults');}
	get btnDateOrderedColumn(){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root=Date Ordered').$('.MuiSwitch-root');}
	get btnDateOrderedColumnSwitch(){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root=Date Ordered').$('[Name="created_on"]');}
	get btnLastDateColumn(){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root=Last Update').$('.MuiSwitch-root');}
	get btnLastDateColumnSwitch(){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root=Last Update').$('[Name="submitted_on"]');}
	 btnSelectUnselectColumn(columnName){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root='+columnName).$('.MuiSwitch-root');}
	get btnCloseDialog(){return browser.$('.MuiDialogActions-root').$('button=Close');}

	/**Define Equipment Profile*/
	get btnAppIcon(){return browser.$('[data-testid="AppsIcon"]');}
	get btnSettingsEquipment(){return browser.$('.MuiToolbar-root').$('//*[@id="settings-tab-2"]');}
	get btnInventoryProfileFromMenu(){return browser.$('[vispdata-testid="view-inventory-profile"]');}
	get btnEquipmentProfileFromMenu(){return browser.$('li*=Equipment Profile');}
	get btnEquipmentProfileOnInventoryProfile(){return browser.$('[vispdata-testid="view-equipment-profile-tab"]');}
	get equipmentProfileList () { return browser.$('.drawer-wrapper-triple-footer').$('.MuiTableBody-root').$$('MuiTableRow-root');}
	get btnAddEquipmentProfile(){return browser.$('[vispdata-testid="create-equipment-profile-form"]');}


	get equipmentProfileSummary(){return browser.$('.settings-drawer-wrapper').$('[name="summary"]');}
	get equipmentProfileDescription(){return browser.$('.MuiFormControl-root*=Description').$('textarea');}
	get equipmentProfileType(){return browser.$('.settings-drawer-wrapper').$('[name="type"]');}
	get	selectEquipmentProfilePtpType(){return browser.$('li=PtP');}
	get equipmentProfileInventoryType(){return browser.$('.settings-drawer-wrapper').$('[name="inventory_profile_id"]');}
	get selectEquipmentProfileInventoryType(){return browser.$('li=BaiCells CPE');}
	get equipmentDeviceType(){return browser.$('.settings-drawer-wrapper').$('[name="vnms_dev_type"]');}
	get btnAdd(){return browser.$('[vispdata-testid="create-equipment-profile"]');}
	get allDefiniedEquipmentProfiles(){return browser.$('[aria-label="equip profiles"]').$$('p');}
	get btnCloseEditEquipmentProfile(){return browser.$('.settings-drawer-wrapper').$('[data-testid="CloseIcon"]');}
	get purchaseOrderMeatBall(){return browser.$('.react-grid-item*=Purchase Orders').$('[data-testid="MenuIcon"]');}
	get purchaseTableViewComfortable(){return browser.$('#header-action-menu').$('.MuiList-root').$('li=Comfortable');}
	get purchaseTableViewCozy(){return browser.$('#header-action-menu').$('.MuiList-root').$('li=Cozy');}
	get purchaseTableViewCompact(){return browser.$('#header-action-menu').$('.MuiList-root').$('li=Compact');}
	purchaseTableView(parentelement) {return parentelement.$('.MuiSvgIcon-root');}
	get purchaseHeaderbuttons(){return browser.$('.react-grid-item*=Purchase Orders').$$('.MuiButtonBase-root');}
	get purchaseOrderTableView(){return this.subMenuParent.$('div=List');}
	get purchaseOrderCardView(){return this.subMenuParent.$('div=Tiles');}
	get purchaseOrderCardViewVerification(){return browser.$('.react-grid-item*=Purchase Orders').$('.MuiGrid-root');}
	get poDockedValues(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiTableBody-root').$('.MuiTableRow-root').$$('td');}
	btnpoItem(parent){return parent.$('button');}
	get expandPOitem(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[2]/div/div[2]/div/div[3]/div[2]/table/tbody/tr[1]/td[1]');}
	get shippingRate(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[2]/div/div[2]/div/div[3]/div[2]/table/tbody/tr[4]/td[3]');}
	get otherRate(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[2]/div/div[2]/div/div[3]/div[2]/table/tbody/tr[5]/td[3]');}
	enterDockedPOItemQuantity(parent){return parent.$('.MuiTextField-root').$('input');}
	get purchaseHeaderbuttons(){return browser.$('.react-grid-item*=Purchase Orders').$$('.MuiButtonBase-root');}
	get purchaseSearch(){return browser.$('.react-grid-item*=Purchase Orders').$('input');}
	get purchaseItemSerial(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[2]/div/div[2]/div/div[3]/div[2]/table/tbody/tr[2]/td[2]/div/div[3]/div/table/tbody/tr/td/div/div/div/div[1]/div/div').$('input');}
	purchaseItemSerialPara(value){return browser.$('p*='+value)}
	get purchaseItemLocation(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[2]/div/div[2]/div/div[3]/div[2]/table/tbody/tr[2]/td[2]/div/div[3]/div/table/tbody/tr/td/div/div/div/div[3]/div/div/div');}
	get btnPurchaseReceive(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('button=Receive');}



	open(path){	super.open(path);	}
}
module.exports = new newEquipment();
