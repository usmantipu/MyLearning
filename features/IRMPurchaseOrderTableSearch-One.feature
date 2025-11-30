@irmPurchaseOrder
Feature: IRM - PurchaseOrderTableSearch-One
    Background:
        Given I open Visp Web to Access IRM
        And   I login with username and password to use IRM
            | jcabangonautomation | Test@1234 |
        And  I navigate to IRM page
        And  I set List view of Purchase Order
   @TA-970-1   @PurchaseOrderTableSearch-One
   Scenario: As a user, I can see search bar in Purchase Order Table
        When I go the Purchase Order section
        Then I can see search bar in Purchase Order Table

   @TA-970-1    @PurchaseOrderTableSearch-One
   Scenario: As a user, I can see search box when click on search bar
        When I go the Purchase Order section
        Then I can see search bar in Purchase Order Table
        When I click on the Purchase Order Table search bar
        Then I can see Purchase Order Table search box

   @TA-970-1   @PurchaseOrderTableSearch-One
   Scenario: As as user, I can see the following fields 'PO#, Item Name(s), Vendor, Date Ordered, Last Update,Status and Total' in search bar
        When I go the Purchase Order section
        Then I can see search bar in Purchase Order Table
        When I click on the Purchase Order Table search bar
        Then I can see Purchase Order Table search box
        When I click on Lock Icon of the Purchase Order Table search bar
        Then I can see the following fields of the Purchase Order Table
            |PO#          |
		  |Item Name(s) |
		  |Vendor       |
		  |Date Ordered |
      	  |Last Update  |	
	       |Status       |
		  |Total        | 

   @TA-970-1    @PurchaseOrderTableSearch-One
   Scenario: As a user, I can search with the given keys 'PO#' if click on 'Lock' icon
        When I go the Purchase Order section
        Then I can see search bar in Purchase Order Table
        When I click on the Purchase Order Table search bar
        Then I can see Purchase Order Table search box
        When I click on Lock Icon of the Purchase Order Table search bar
        And  I select Purchase Order field "PO#" from the field options
        Then I can see the field "PO#:" get selected in Purchase Order search box

   @TA-970-1    @PurchaseOrderTableSearch-One
   Scenario: As a user, I can search with the given keys 'PO#' with lock search via keyword + colon (ex. 'PO#: 78')
        When I go the Purchase Order section
        Then I can see search bar in Purchase Order Table
        When I click on the Purchase Order Table search bar
        Then I can see Purchase Order Table search box
        When I click on Lock Icon of the Purchase Order Table search bar
        And  I select Purchase Order field "PO#" from the field options
        When I input "15" in the search box of the Purchase Order
        Then I can see the Purchase Order column "PO#" with value "15" searched successfully
    
    @TA-970-1  @PurchaseOrderTableSearch-One
   Scenario: As a user, I can search with the given keys 'Item Name' if click on 'Lock' icon
        When I go the Purchase Order section
        Then I can see search bar in Purchase Order Table
        When I click on the Purchase Order Table search bar
        Then I can see Purchase Order Table search box
        When I click on Lock Icon of the Purchase Order Table search bar
        And  I select Purchase Order field "Item Name(s)" from the field options
        Then I can see the field "Item Name(s):" get selected in Purchase Order search box

   @TA-970-1  @PurchaseOrderTableSearch-One
   Scenario: As a user, I can search with the given keys 'Item Name' with lock search via keyword + colon (ex. 'Item Name: test')
        When I go the Purchase Order section
        Then I can see search bar in Purchase Order Table
        When I click on the Purchase Order Table search bar
        Then I can see Purchase Order Table search box
        When I click on Lock Icon of the Purchase Order Table search bar
        And  I select Purchase Order field "Item Name(s)" from the field options
        When I input "Baicells CPE" in the search box of the Purchase Order
        Then I can see the Purchase Order column "Item Name(s)" with value "Baicells CPE" searched successfully
    
   @TA-970-1  @PurchaseOrderTableSearch-One
   Scenario: As a user, I can search with the given keys 'Vendor' if click on 'Lock' icon
        When I go the Purchase Order section
        Then I can see search bar in Purchase Order Table
        When I click on the Purchase Order Table search bar
        Then I can see Purchase Order Table search box
        When I click on Lock Icon of the Purchase Order Table search bar
        And  I select Purchase Order field "Vendor" from the field options
        Then I can see the field "Vendor:" get selected in Purchase Order search box
    
   @TA-970-1  @PurchaseOrderTableSearch-One
   Scenario: As a user, I can search with the given keys 'Vendor' with lock search via keyword + colon (ex. 'Vendor: ISP Suppliers')
        When I go the Purchase Order section
        Then I can see search bar in Purchase Order Table
        When I click on the Purchase Order Table search bar
        Then I can see Purchase Order Table search box
        When I click on Lock Icon of the Purchase Order Table search bar
        And  I select Purchase Order field "Vendor" from the field options
        When I input "Samsung" in the search box of the Purchase Order
        Then I can see the Purchase Order column "Vendor" with value "Samsung" searched successfully
   
   @TA-970-1    @PurchaseOrderTableSearch-One
   Scenario: As a user, I can search with the given keys 'Date Ordered' if click on 'Lock' icon
        When I go the Purchase Order section
        Then I can see search bar in Purchase Order Table
        When I click on the Purchase Order Table search bar
        Then I can see Purchase Order Table search box
        When I click on Lock Icon of the Purchase Order Table search bar
        And  I select Purchase Order field "Date Ordered" from the field options
        Then I can see the field "Date Ordered:" get selected in Purchase Order search box
    
   @TA-970-1    @PurchaseOrderTableSearch-One
   Scenario: As a user, I can search with the given keys 'Date Ordered' with lock search via keyword + colon (ex. 'Date Ordered: Mar 25, 2024 ')
        When I go the Purchase Order section
        Then I can see search bar in Purchase Order Table
        When I click on the Purchase Order Table search bar
        Then I can see Purchase Order Table search box
        When I click on Lock Icon of the Purchase Order Table search bar
        And  I select Purchase Order field "Date Ordered" from the field options
        When I input "Oct 04, 2024 05:56:20 AM" in the search box of the Purchase Order
        Then I can see the Purchase Order column "Date Ordered" with value "Oct 04, 2024 05:56:20 AM" searched successfully
    
   @TA-970-1    @PurchaseOrderTableSearch-One
   Scenario: As a user, I can search with the given keys 'Last Update' if click on 'Lock' icon
        When I go the Purchase Order section
        Then I can see search bar in Purchase Order Table
        When I click on the Purchase Order Table search bar
        Then I can see Purchase Order Table search box
        When I click on Lock Icon of the Purchase Order Table search bar
        And  I select Purchase Order field "Last Update" from the field options
        Then I can see the field "Last Update:" get selected in Purchase Order search box
    
   @TA-970-1    @PurchaseOrderTableSearch-One
   Scenario: As a user, I can search with the given keys 'Last Update' with lock search via keyword + colon (ex. 'Last Update: Mar 25, 2024 ')
        When I go the Purchase Order section
        Then I can see search bar in Purchase Order Table
        When I click on the Purchase Order Table search bar
        Then I can see Purchase Order Table search box
        When I click on Lock Icon of the Purchase Order Table search bar
        And  I select Purchase Order field "Last Update" from the field options
        When I input "Oct 04, 2024 05:56:20 AM" in the search box of the Purchase Order
        Then I can see the Purchase Order column "Last Update" with value "Oct 04, 2024 05:56:20 AM" searched successfully
