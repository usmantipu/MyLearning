@InvoicingPackageItems
Feature: Invoicing package items

  Background: 
			Given I open web application
			And I login with my credentials
			|jcabangonautomation|Test@1234|
         And I navigate to subscriber list
         And I open specific subscriber details
         And I assure Billing cycle is Monthly
 @regression2021 @regression2021-InvoicingPackageItems
  Scenario: As a user with permissions, when I select a package-type item in the Add Package list and it has other items added to it, I can view that all the other items are added to the Add Subscriber Invoice Item Preview panel as well.
      When I click on Packages and Invoices tab
      And I click on add package button
      And I search the required package in the package selection pop up
          |PackageWithOtherItemsOnly|
      And I click on Add to invoice
      And I click on Open A New Invoice
      Then I can see that all items are added to the invoice preview
          |PackageWithOtherItemsOnly|
@regression2021 @regression2021-InvoicingPackageItems
  Scenario: As a user with permissions, when I select a non-legacy package-type item with only non-service-type or non-equipment-type items, I can view that the Add button only has the "Add to Invoice" option enabled.
   #   When I add a package that has only non-service-type and non-equipmeent-type items in it
      When I click on Packages and Invoices tab
      And I click on add package button
      And I search the required package in the package selection pop up
          |PackageWithOtherItemsOnly|
      Then I should see that Add button only has the "Add to Invoice" option enabled
@regression2021 @regression2021-InvoicingPackageItems
  Scenario: As a user with permissions, I can view accurate Description column data in the Add Subscriber Invoice Item Preview panel for each item that is added with the selected package-item. 
     #When I add a package that has only non-service-type and non-equipmeent-type items in it  
      When I click on Packages and Invoices tab
      And I click on add package button
      And I search the required package in the package selection pop up
          |PackageWithOtherItemsOnly|
      And I click on Add to invoice
      And I click on Open A New Invoice
      Then I should see accurate description column data for added item
@regression2021 @regression2021-InvoicingPackageItems
  Scenario: As a user with permissions, I can view accurate Qty column data in the Add Subscriber Invoice Item Preview panel for each item that is added with the selected package-item. 
     When I click on Packages and Invoices tab
      And I click on add package button
      And I search the required package in the package selection pop up
          |PackageWithOtherItemsOnly|
      And I click on Add to invoice
      And I click on Open A New Invoice
     Then I should see accurate quantity in qty column of invoice preview for added item
@regression2021 @regression2021-InvoicingPackageItems
  Scenario: As a user with permissions, I can view accurate Rate column data in the Add Subscriber Invoice Item Preview panel for each item that is added with the selected package-item. 
     #When I add a package that has only non-service-type and non-equipmeent-type items in it
     When I click on Packages and Invoices tab
      And I click on add package button
      And I search the required package in the package selection pop up
          |PackageWithOtherItemsOnly|
      And I click on Add to invoice
      And I click on Open A New Invoice
     Then I should see accurate amount in rate column for added item
@regression2021 @regression2021-InvoicingPackageItems
  Scenario: As a user with permissions, I can view accurate Tax column data in the Add Subscriber Invoice Item Preview panel for each item that is added with the selected package-item. 
     #When I add a package that has only non-service-type and non-equipmeent-type items in it
     When I click on Packages and Invoices tab
      And I click on add package button
      And I search the required package in the package selection pop up
          |PackageWithOtherItemsOnly|
      And I click on Add to invoice
      And I click on Open A New Invoice
      And I open tax dropdown
      Then I tax calculation should be correct as per tax rate

@regression2021 @regression2021-InvoicingPackageItems
  Scenario: As a user with permissions, I can view accurate Amount column data in the Add Subscriber Invoice Item Preview panel for each item that is added with the selected package-item. 
     #When I add a package that has only non-service-type and non-equipmeent-type items in it
     When I click on Packages and Invoices tab
      And I click on add package button
      And I search the required package in the package selection pop up
          |PackageWithOtherItemsOnly|
      And I click on Add to invoice
      And I click on Open A New Invoice
     Then I should see accurate amount in invoice preview for added item  
@regression2021 @regression2021-InvoicingPackageItems
  Scenario: As a user with permissions, I can view accurate default Recurring settings being applied for each item that is added with the selected package-type item in the Add Subscriber Invoice Item Preview panel. 
     #  When I add a package that has equipment-type items in it
      When I click on Packages and Invoices tab
      And I click on add package button
      And I search the required package in the package selection pop up  
         |PackageWithOtherItemsOnly|
      And I click on Add to invoice
      And I click on Open A New Invoice
     Then I should see accurate recurring settings in invoice preview for added item  
@regression2021 @regression2021-InvoicingPackageItems
  Scenario: As a user with permissions, if there is an equipment-type package item, I can view the Save & Configure button in the Add Subscriber Invoice Item Preview panel.
   #  When I add a package that has equipment-type items in it
      When I click on Packages and Invoices tab
      And I click on add package button
      And I search the required package in the package selection pop up  
         |PackageWithEquipmentTypeItem|
      And I click on Add to invoice
      And I click on Open A New Invoice
     Then I should see "Save & Configure" button in add Invoice item preview
@regression2021 @regression2021-InvoicingPackageItems
  Scenario: As a user with permissions, if there all the package items for the selected non-legacy package-type item are non-service-type and non-equipment-type, I can view the Save button in the Add Subscriber Invoice Item Preview panel. 
     #When I add a package that has only non-service-type and non-equipmeent-type items in it  
      When I click on Packages and Invoices tab
      And I click on add package button
      And I search the required package in the package selection pop up
          |PackageWithOtherItemsOnly|
      And I click on Add to invoice
      And I click on Open A New Invoice
     Then I should see "Save" button in add Invoice Item Preview panel
@regression2021 @regression2021-InvoicingPackageItems @TA-557 
  Scenario: As a user with permissions, I can remove package items from the Add Subscriber Invoice Item Preview panel by clicking Remove buttons from the menu.
     #When I add a package that has only non-service-type and non-equipmeent-type items in it  
     When I click on Packages and Invoices tab
      And I click on add package button
      And I search the required package in the package selection pop up
          |PackageWithOtherItemsOnly|
      And I click on Add to invoice
      And I click on Open A New Invoice
     Then I can remove items by clicking Remove button from the menu in invoice preview
@regression2021 @regression2021-InvoicingPackageItems
  Scenario: As a user with permissions, if the package item is set to be billed with the package, I can view the "This item is included in the package's rate." non-printed information for the package item in the Add Subscriber Invoice Item Preview panel.
   #  When I add a package that has only non-service-type and non-equipmeent-type items in it  
     When I click on Packages and Invoices tab
      And I click on add package button
      And I search the required package in the package selection pop up
          |PackageWithItemsIncluded|
      And I click on Add to invoice
      And I click on Open A New Invoice
     Then I should see "This item is included in the package's rate." text on invoice item preview
@regression2021 @regression2021-InvoicingPackageItems
  Scenario: As a user with permissions, when I click on the Save button, I can view that all the items in the Add Subscriber Invoice Item Preview panel have been added and displayed back correctly.
     #When I add a package that has only non-service-type and non-equipmeent-type items in it  
      When I click on Packages and Invoices tab
      And I click on add package button
      And I search the required package in the package selection pop up
          |PackageWithOtherItemsOnly|
      And I click on Add to invoice
      And I click on Open A New Invoice
      And I save the invoice
     Then All items are saved and displayed correctly on invoice preview
         |PackageWithOtherItemsOnly|
@regression2021 @regression2021-InvoicingPackageItems     
  Scenario: As a user with permissions, when I click on the Cancel button, I can view that all the items in the Add Subscriber Invoice Item Preview panel have been cancelled and the panel is closed.
     #When I add a package that has only non-service-type and non-equipmeent-type items in it    
     When I click on Packages and Invoices tab
      And I click on add package button
      And I search the required package in the package selection pop up
          |PackageWithItemsIncluded|
      And I click on Add to invoice
      And I click on Open A New Invoice
      And  I click cancel button
     Then All items are cleared from the invoice item preview
         |PackageWithItemsIncluded|
  
    

