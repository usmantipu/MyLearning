@irmPurchaseOrder
Feature: IRM - PurchaseOrderTableSearch-Two
    Background:
        Given I open Visp Web to Access IRM
        And   I login with username and password to use IRM
            | jcabangonautomation | Test@1234 |
        And  I navigate to IRM page
        And  I set List view of Purchase Order
        
   @TA-970-2 @PurchaseOrderTableSearch-Two
   Scenario: As a user, I can search with the given keys 'Status' if click on 'Lock' icon
        When I go the Purchase Order section
        Then I can see search bar in Purchase Order Table
        When I click on the Purchase Order Table search bar
        Then I can see Purchase Order Table search box
        When I click on Lock Icon of the Purchase Order Table search bar
        And  I select Purchase Order field "Status" from the field options
        Then I can see the field "Status:" get selected in Purchase Order search box
    
   @TA-970-2   @PurchaseOrderTableSearch-Two
   Scenario: As a user, I can search with the given keys 'Status' with lock search via keyword + colon (ex. 'Status: pending')
        When I go the Purchase Order section
        Then I can see search bar in Purchase Order Table
        When I click on the Purchase Order Table search bar
        Then I can see Purchase Order Table search box
        When I click on Lock Icon of the Purchase Order Table search bar
        And  I select Purchase Order field "Status" from the field options
        When I input "CREATED" in the search box of the Purchase Order
        Then I can see the Purchase Order column "Status" with value "CREATED" searched successfully
    
    @TA-970-2 @PurchaseOrderTableSearch-Two
   Scenario: As a user, I can search with the given keys 'Total' if click on 'Lock' icon
        When I go the Purchase Order section
        Then I can see search bar in Purchase Order Table
        When I click on the Purchase Order Table search bar
        Then I can see Purchase Order Table search box
        When I click on Lock Icon of the Purchase Order Table search bar
        And  I select Purchase Order field "Total" from the field options
        Then I can see the field "Total:" get selected in Purchase Order search box
    
   @TA-970-2 @PurchaseOrderTableSearch-Two
   Scenario: As a user, I can search with the given keys 'Total' with lock search via keyword + colon (ex. 'Total: 785.32')
        When I go the Purchase Order section
        Then I can see search bar in Purchase Order Table
        When I click on the Purchase Order Table search bar
        Then I can see Purchase Order Table search box
        When I click on Lock Icon of the Purchase Order Table search bar
        And  I select Purchase Order field "Total" from the field options
        When I input "$132.00" in the search box of the Purchase Order
        Then I can see the Purchase Order column "Total" with value "$132.00" searched successfully

   @TA-970-2 @PurchaseOrderTableSearch-Two
   Scenario: As a user, I can see that searched text is highlighted
        When I go the Purchase Order section
        Then I can see search bar in Purchase Order Table
        When I click on the Purchase Order Table search bar
        Then I can see Purchase Order Table search box
        When I click on Lock Icon of the Purchase Order Table search bar
        And  I select Purchase Order field "Item Name(s)" from the field options
        When I input "Baicells CPE" in the search box of the Purchase Order
        Then I can see the searched text "Baicells CPE" is highlighted in Purchase Order Table
     
   @TA-970-2 @PurchaseOrderTableSearch-Two
   Scenario: As a user, I can clear the search text by clicking on X button from search box
        When I go the Purchase Order section
        Then I can see search bar in Purchase Order Table
        When I click on the Purchase Order Table search bar
        Then I can see Purchase Order Table search box
        When I click on Lock Icon of the Purchase Order Table search bar
        And  I select Purchase Order field "Item Name(s)" from the field options
        When I input "Baicells CPE" in the search box of the Purchase Order
        And  I clear the search box of the Purchase Order
        Then I can see the searched of the Purchase Order is empty

  @TA-970- @PurchaseOrderTableSearch-Two
   Scenario: As a user, I can see that search result refines when entering or removing a character from search text
        When I go the Purchase Order section
        Then I can see search bar in Purchase Order Table
        When I click on the Purchase Order Table search bar
        Then I can see Purchase Order Table search box
        When I click on Lock Icon of the Purchase Order Table search bar
        And  I select Purchase Order field "PO#" from the field options
        When I input "1" in the search box of the Purchase Order
        Then I can see multiple search results matching in the Purchase Order
        When I add one more character "5" in the search box of the Purchase Order
        Then I can see single matching search result in the Purchase Order

   @TA-970-2 @PurchaseOrderTableSearch-Two
   Scenario: As a user, I can see that search key gets locked when selecting the key
        When I go the Purchase Order section
        Then I can see search bar in Purchase Order Table
        When I click on the Purchase Order Table search bar
        Then I can see Purchase Order Table search box
        When I click on Lock Icon of the Purchase Order Table search bar
        And  I select Purchase Order field "PO#" from the field options
        Then I can see the field "PO#:" get selected in Purchase Order search box
        And  I can see Locked Icon in the search bar of Purchase Order Table
     
   @TA-970-2 @PurchaseOrderTableSearch-Two
   Scenario: As a user, I can see that search key gets unlocked when unselecting key
        When I go the Purchase Order section
        Then I can see search bar in Purchase Order Table
        When I click on the Purchase Order Table search bar
        Then I can see Purchase Order Table search box
        When I click on Lock Icon of the Purchase Order Table search bar
        And  I select Purchase Order field "PO#" from the field options
        Then I can see the field "PO#:" get selected in Purchase Order search box
        And  I can see Locked Icon in the search bar of Purchase Order Table
        When I click on the closed Lock of the search bar of Purchase Order Table
        And  I select Purchase Order field "PO#" from the field options
        Then I can see the field "Filter:" get selected in Purchase Order search box

   @TA-970-2 @PurchaseOrderTableSearch-Two
   Scenario: As a user, I can see appropiate message on UI 'No results found' if search incorrect input text
        When I go the Purchase Order section
        Then I can see search bar in Purchase Order Table
        When I click on the Purchase Order Table search bar
        Then I can see Purchase Order Table search box
        When I click on Lock Icon of the Purchase Order Table search bar
        And  I select Purchase Order field "PO#" from the field options
        When I input "Po" in the search box of the Purchase Order
        Then I can see the message "No Data Available..." as search result in the Purchase Order Table

   @TA-970-2 @PurchaseOrderTableSearch-Two
   Scenario: As a user, I can search (PO#, Item Name, Vendor, Date Ordered, Last Update, Status, Total) with free text in Purchase Order Table
        When I go the Purchase Order section
        Then I can see search bar in Purchase Order Table
        When I click on the Purchase Order Table search bar
        Then I can see Purchase Order Table search box
        When I input "15" in the search box of the Purchase Order
        Then I can see the Purchase Order column "PO#" with value "15" searched successfully
        When I input "Baicells CPE" in the search box of the Purchase Order
        Then I can see the Purchase Order column "Item Name(s)" with value "Baicells CPE" searched successfully
        When I input "Samsung" in the search box of the Purchase Order
        Then I can see the Purchase Order column "Vendor" with value "Samsung" searched successfully
        When I input "Oct 04, 2024 05:56:20 AM" in the search box of the Purchase Order
        Then I can see the Purchase Order column "Date Ordered" with value "Oct 04, 2024 05:56:20 AM" searched successfully
        When I input "Oct 04, 2024 05:56:20 AM" in the search box of the Purchase Order
        Then I can see the Purchase Order column "Last Update" with value "Oct 04, 2024 05:56:20 AM" searched successfully
        When I input "CREATED" in the search box of the Purchase Order
        Then I can see the Purchase Order column "Status" with value "CREATED" searched successfully
        When I input "$132.00" in the search box of the Purchase Order
        Then I can see the Purchase Order column "Total" with value "$132.00" searched successfully
     
   @TA-970-2 @PurchaseOrderTableSearch-Two
   Scenario: As a user, I can sort purchase order table columns(PO#, Item Name(s), Vendor, Date Ordered, Last Update, Status and Total) and see the correct sorting result for each coulmn
        When I go the Purchase Order section
        Then I can see search bar in Purchase Order Table
        When I click on the Purchase Order Table search bar
        Then I can see Purchase Order Table search box
        When I sort the Purchase Order column "PO#"
        Then I can see that Purchase Order column "PO#" get sorted
        When I sort the Purchase Order column "Item Name(s)"
        Then I can see that Purchase Order column "Item Name(s)" get sorted
        When I sort the Purchase Order column "Vendor"
        Then I can see that Purchase Order column "Vendor" get sorted
        When I sort the Purchase Order column "Date Ordered"
        Then I can see that Purchase Order column "Date Ordered" get sorted
        When I sort the Purchase Order column "Last Update"
        Then I can see that Purchase Order column "Last Update" get sorted
        When I sort the Purchase Order column "Status"
        Then I can see that Purchase Order column "Status" get sorted
        When I sort the Purchase Order column "Total"
        Then I can see that Purchase Order column "Total" get sorted
   
   @TA-970-2 @PurchaseOrderTableSearch-Two
   Scenario: As a user, I can see correct serach result for Free text or Key-value pair search when Show Archived is enabled
        When I go the Purchase Order section
        Then I can see search bar in Purchase Order Table
        When I enable show archive option for the Purchase Order Table
        When I click on the Purchase Order Table search bar
        Then I can see Purchase Order Table search box
        When I click on Lock Icon of the Purchase Order Table search bar
        And  I select Purchase Order field "PO#" from the field options
        When I input "15" in the search box of the Purchase Order
        Then I can see the Purchase Order column "PO#" with value "15" searched successfully
        When I click on the closed Lock of the search bar of Purchase Order Table
        And  I select Purchase Order field "PO#" from the field options
        When I input "15" in the search box of the Purchase Order
        Then I can see the Purchase Order column "PO#" with value "15" searched successfully
