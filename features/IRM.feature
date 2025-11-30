@IRM
Feature: Equipment

    I can navigate to Equipment manager page to view the Infrastructure Locations, Inventory /Equipment / Equipment Assemblies, Purchase Orders cards


    Background:
        Given I open Visp Web to Access IRM
        And   I login with username and password to use IRM
            | jcabangonautomation | Test@1234 |

    @regression2021 @regression2021-IRM @TA-831
    Scenario: As a User, I can navigate to Equipment manager to view the Sites,Equipment/Equipment Assemblies, Inventory, Purchase Orders cards
        When I navigate to IRM page
        Then I should get redirected to IRM page
        Then I see cards
            | Infrastructure Locations|
            | Equipment     |
            | Equipment Assemblies|
            | Inventory      |
            | Purchase Orders |

    @inventoryProfile @regression2021 @regression2021-IRM @TA194
    Scenario: As a user, I can add Inventory item
        When I navigate to IRM page
        When I open Add Inventory dialog
        When I fill Inventory item details "5 GHZ NANOSTATION AC"
        When I save the details
        Then I can see Inventory item added Successfully
        
#Confirmed with IRM team,Delete inventory feature is not yet developed Feb 2,2022
    #@inventoryProfile 
    Scenario: As a user, I can delete Inventory item
        When I navigate to IRM page
        When I select any Inventory
        When I click 3-dot menu of first inventory Item
        When I click Delete button
        When I click yes button
        Then I can see Inventory is deleted successfully

    @purchaseOrder @regression2021 @regression2021-IRM @TA194
    Scenario: As a user, I can Change Purchase Order Status
        When I navigate to IRM page
        When I select any Purchase Order
        When I change the PO status and select Yes in confirmation prompt
            | Pending  |
            | Ordered  |
            | Partial  |
            | Complete |
            | Canceled |
            | Rejected |
        Then I can see Purchase Order Status accordingly

    @purchaseOrder @regression2021 @regression2021-IRM @TA194s
    Scenario Outline: As a user, I Update Purchase Order
        When I navigate to IRM page
        When I select any Purchase Order
        When I fill Item details "<Quantity>", "<UnitPrice>", "<TaxRate>", "<ShippingFee>", and "<OtherFee>"
        When I click Save changes of docked Item
        Then I can see Purchase Order item is updated successfully
        Examples:
            | Quantity |UnitPrice |TaxRate |ShippingFee|OtherFee|
            | 2        |15        |15      |10         |10      |

    @purchaseOrder @regression2021 @regression2021-IRM @TA194
    Scenario: As a user, I can receive purchase order Items
        When I navigate to IRM page
        When I select Orderd or Partial or Completed Purchase Order 
        When I expand the purchase order Item
        When I fill the serial no. and Location of purchase order Item
        When I Receive purchase item
        Then Purchase order Item should Received successfully

    @inventoryProfile @regression2021 @regression2021-IRM @TA194 @TA-381
    Scenario: As a user, I can Search Inventory
        When I navigate to IRM page
        When I expand Inventory search Bar
        When I type in Inventory search Bar "Cable"
        Then I can see the expected search result of Inventory profile "Cable"
    
    @inventoryProfile @regression2021 @regression2021-IRM @TA194
    Scenario: As a user, I can search for an Inventory Profiles and Item in Inventory card
        When I navigate to IRM page
        When I Select an existing Inventory item from Inventory "Cable"
        And  I close the Add Inventory item dialog
        And  I expand Inventory search Bar
        And  I type in Inventory search Bar "12314564"
        Then I can see the sub-rows expanded and highlighted text for the matched items
            |Serial:|Equipment:|Type:|Location:|
            #|serial:|Cable Wire|CPE|
    
    @purchaseOrder @regression2021 @regression2021-IRM @TA194 @TA-831
    Scenario: As a user, I can Search Purchase Orders
        When I navigate to IRM page
        When I expand Purchase Orders search Bar
        When I type in Purchase Order search Bar "Samsung"
        Then I can see the expected search result of Purchase Orders
    #TA-265
   #@inventoryProfile @regression2021 @regression2021-IRM
    Scenario Outline: As a user, I can change Inventory Table Row Density
        When I navigate to IRM page
        When I select Inventory table Action Menu to choose "<Row density>"
        Then Inventory table view should get updated to "<Row density>"
        Examples:
            | Row density |
            | Comfortable |
            | Compact     |
            | Cozy        |
    #TA-265
    #@equipmentProfile @regression2021 @regression2021-IRM @TA-19
    Scenario Outline: As a user, I can change Equipment Table Row Density
        When I navigate to IRM page
        When I select Equipment table Action Menu to choose "<Row density>"
        Then Equipment table "<Row density>" should get changed

        Examples:
            | Row density |
            | Comfortable |
            | Compact     |
            | Cozy        |
    #TA-265
    #@purchaseOrder @regression2021 @regression2021-IRM
    Scenario Outline: As a user, I can change Purchase Orders Table Row Density
        When I navigate to IRM page
        When I select Purchase Orders table Action Menu to choose "<Row density>"
        Then Purchase Order table view should get updated to "<Row density>"

        Examples:
            | Row density |
            | Comfortable |
            | Compact     |
            | Cozy        |

    @inventoryProfile @regression2021 @regression2021-IRM @TA-118
    Scenario Outline: As a user, I can Switch between List and Tile View for Inventory
        When I navigate to IRM page
        When I select Inventory table 3-Dot Menu to choose "<inventoryView>"
        Then Inventory "<inventoryView>" should get changed

        Examples:
            | inventoryView  |
            | List |
            | Tiles  |

    @equipmentProfile @regression2021 @regression2021-IRM @TA-19
    Scenario Outline: As a user, I can Switch between List and Tile View for Equipment
        When I navigate to IRM page
        When I select Equipment table 3-Dot Menu to choose "<equipmentview>"
        Then Equipment view should get changed to "<equipmentview>"

        Examples:
            | equipmentview  |
            | List |
            | Tiles |

    @purchaseOrder @regression2021 @regression2021-IRM @TA-122
    Scenario Outline: As a user, I can Switch between List and Tile View for Purchase Orders
        When I navigate to IRM page
        When I select Purchase Orders table 3-Dot Menu to choose "<purchaseorderView>"
        Then Purchase Orders table "<purchaseorderView>" should get changed

        Examples:
            | purchaseorderView  |
            | List |
            | Tiles|

    @equipmentProfile @regression2021 @regression2021-IRM @TA-19
    Scenario: As a user, I can Enable Inline Editing for Equipment table
        When I navigate to IRM page
        When I select Equipment table Action Menu to Enable Inline Editing
        When I Inline edit the Equiment summary and description fields
        Then I can see Equipment Inline Editing saved successfully 

    #Bug-Inline edit of SKU throwing an error
    #@inventoryProfile @regression2021 @regression2021-IRM
    Scenario Outline: As a user, I can Enable Inline Editing for Inventory table
        When I navigate to IRM page
        When I select Inventory table Action Menu to Enable Inline Editing
        When I Inline edit the inventory "<Profile>","<SKU>" field
        When I save Inline edit changes
        Then I can see Inventory Inline Editing saved successfully
        Examples:
            | Profile| SKU   |
            | CCR1036-8G-2S+r1| AF101 |
     
   @inventoryProfile @regression2021 @regression2021-IRM @rma
    Scenario: As a user, I can Create RMA in Inventory item
        When I navigate to IRM page
        When I Select an existing Inventory item from Inventory "Cable"
        When I open dotted menu
        When I click Create RMA button
        When I enter RMA details
        When I save the details of RMA
        Then I can see RMA Created Successfully

    @purchaseOrder @regression2021 @regression2021-IRM @TA-831
    Scenario: As a user, I can Create Purchase Orders
        When I navigate to IRM page
        When I open add Purchase Orders dialog
        When I enter purchase order details
        When I click Continue button
        When I click Create PO button
        Then I can see Purchase order created Successfully

    @purchaseOrder @regression2021 @regression2021-IRM @TA-229
    Scenario: As a user, I can Change Order Status
        When I navigate to IRM page
        When I select any Purchase Order
        When I click status option of Purchase Order
        When I click Ordered option
        When I click yes on confimation pop-update
        Then I can see Purchase Order is updated successfully
