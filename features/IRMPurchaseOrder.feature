@irmPurchaseOrder
Feature: IRM - Purchase Order
    Background:
        Given I open Visp Web to Access IRM
        And   I login with username and password to use IRM
            | jcabangonautomation | Test@1234 |
        And  I navigate to IRM page
        And  I set List view of Purchase Order
    @regression2021 @regression2021-irmPurchaseOrder
    Scenario: As a user, I can validate the look and feel of the Purchase Order section
        When I go the Purchase Order section
        Then I can see the PO# Item Name Vendor Date Ordered Last Update Status and Total columns for the purchase orders table
    #    Then I can see the 'Card Width' and 'Display'  options in Site Card settings
        Then I can see Half and Full Card width options for Purchase Order section
        Then I can the see that card width displays as half view If I set Half Card width for Purchase Order section
        Then I can the see that card width displays as Full view If I set Full Card width for Purchase Order section
        Then I can set Tiles or List view to Display for Purchase Order section
    #    Then I can set the No.of Records(10, 25, 50, 100, 250, 500, 1000) to be displayed in the table
        Then I can see the Hamburger Menu in table 
@regression2021 @regression2021-irmPurchaseOrder
   Scenario: As a user, I cannot select an invalid profile while creating a Purchase Order 
        When I go the Purchase Order section
        And  I click plus button to create a new Purchase Order
        Then I can type in the Profile Item field to search profile I want to select from the available dropdown options
        Then I can view an accurate list of profile item field dropdown options based on search keyword
        Then I am restricted from adding profile with an Profile Item field value that is not included in the available dropdown options
        Then I am restricted from continue Create Purchase Order with an empty profile item field 
   @regression2021 @regression2021-irmPurchaseOrder
   Scenario: As a user, I cannot create a Purchase Order with invalid or empty vendor field and quantity
        When I go the Purchase Order section
        And  I click plus button to create a new Purchase Order
        Then I can type in the Vendor field to search vendor I want to select from the available dropdown options
        Then I can view an accurate list of vendor field dropdown options based on search keyword
        Then I am restricted from adding profile with an Vendor field value that is not included in the available dropdown options
        Then I am restricted from continue Create Purchase Order with an empty Vendor field 
        Then I am restricted from continue Create Purchase Order with an empty Quantity field
    @regression2021 @regression2021-irmPurchaseOrder
   Scenario: As a user, I can create a Purchase Order
        When I go the Purchase Order section
        And  I click plus button to create a new Purchase Order
        Then I can set Profile Item Vendor and Quantity to proceed
        Then I can see the Add buton for add multiple items to create purchase order
        Then I can see Continue and Cancel button after filling all required details 
        Then I can click on Continue button to open Purchase Order Summary page
        Then I can see the Back button to go back to the Items page
        Then I can see PO# and Date in Purchase Order Summary
        Then I can see the vendor Name and Address in Vendor Card
        Then I can see the Ship to Name and Address in Ship To Card
        Then I can Item#, Name, Quantity, Unit Price, Tax Rate and Total columns in Purchase Order Summary 
        Then I click to fill the value in Unit Price, Tax Rate, Shipping and Other columns in Purchase Order Summary
        Then I Click on Create PO button to create purchase order
        Then I can see newly Purchase Order with Created status in purchase order list 
@regression2021 @regression2021-irmPurchaseOrder  @TA-830
   Scenario: As a user, I can edit a Purchase Order
        When I go the Purchase Order section
        And  I click on any purchase order to Update the purchase order 
        Then I can see the Status PO# Date 
        Then I can update the PO status to 'PENDING'
        Then I can see the popup when I update the status of purchase order
        Then I click on Add Item button
        Then I can set Profile Item Vendor and Quantity to proceed for subItem
        Then I can fill value of Unit Price Tax Rate Shipping and Other columns to add Item
        Then I click on Save Changes button to add new items 
        Then I can see newly added item in Purchase Order Drawer  
        Then I can change value of Unit Price by clicking on it
        Then I can change value of Tax rate by clicking on it
        Then I can change value of Shipping by clicking on it
        Then I can change value of Other by clicking on it
        Then I can see correct total value in Total Column
        Then I can enter invoice in Invoice ID field
        Then I can fill Note field in Purchase order drawer
        Then I can add more note field by clicking on add button
        Then I can save all the changes
@regression2021 @regression2021-irmPurchaseOrder
    Scenario: As a user, I can receive the Inventory Item once the status is set to Ordered/Partial/Complete
        When I go the Purchase Order section
        And  I click on any purchase order to Update the purchase order
        Then I click on Add Item button
        Then I can set Profile Item Vendor and Quantity to proceed for subItem
        Then I can fill value of Unit Price Tax Rate Shipping and Other columns to add Item
        Then I click on Save Changes button to add new items
        Then I can update the PO status to 'ORDERED'
        Then I can see the popup when I update the status of purchase order
        Then I can see Serial No. Equipment Profile and Location fields to receive the Inventory Item while expanding Purchase Item
        #Then I can see Equipment Profile dropdown disappeared from all the item rows of purchase order when I check the Same Equipment Profile 
        #Then I can see 'Scan Equipment Field' toggle button appears when check the 'Same Equipment Profile' checkbox
        Then I can fill the serial no. in Serial No. field
        #Then I can see the 'Scan Equipment Field' radio button
        Then I can click Receive button
        Then I can see the prompt with options PartiallyReceive Inventory and Create New PO For The Missing Items 
        Then I select PartiallyReceive Inventory
        Then The PO status will become Partial

@regression2021 @regression2021-irmPurchaseOrder @may2024
Scenario: As a user,I can Dock In/Out Purchase Order Drawer and make few changes
        When I go the Purchase Order section
        And  I click on any purchase order to Update the purchase order
        Then I can see SKU when click on Purchase Order
        And  I can fill Unit Price upto 3 decimal points when Create or Edit Purchase Order
        And  I can Dock In or Out Purchase Order from Purchase Order Table
        And  I can see Microservice drawer gets opens when Dock Out Purchase Order drawer other than IRM page        

@regression2021 @regression2021-irmPurchaseOrder @may2024
Scenario: As a user, I can see status is changed as 'Archived' in Purchase Order Table at real time
        When I go the Purchase Order section
        And  I click on any purchase order to Update the purchase order
        And  I am restricted to Archive Purchase Order when status is Created,Pending,Order,Partial and Rejected
        Then I can update the PO status to 'COMPLETE'
        And  I can see the popup when I update the status of purchase order
        When I change the Status of Purchase Order to Archive
        And  I can enable Show Archived settings in order to displays the Archived POs
        Then I can see Purchase Order status is changed as Archived successfully
        And  I can disable Show Archived settings in order to hide the Archived PO

@regression2021 @regression2021-irmPurchaseOrder @may2024
Scenario: As a user, I can add Multiple Profiles items and vendors list accordingly
        When I go the Purchase Order section
        And  I go to create purchase order drawer
        And  I can add multiple Profile Items in Create Purchase Order drawer
        Then I can see Vendor list populates based on selecting Item in create purchase order drawer
        And  I can see Preferred Vendor prepopulated after selecting the Profile item when Create Purchase Order
        And  I can see that 1 populates in QTY as default value
        And  I can see SKU Profile when Create Purchase Order
        And  I can see SKU in Purchase Order Summary drawer
