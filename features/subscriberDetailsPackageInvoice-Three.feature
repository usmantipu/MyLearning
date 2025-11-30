@subscriberDetailsPackageInvoice-Three
Feature: Subscriber Details - Manage Package invoices
  Background: 
    Given I open UBO webapp
       And I login with username jcabangonautomation and password Test@1234
       And I navigate to subscriber list
       And I open specific subscriber details
    @regression2021 @regression2021-subscriberDetailsPackageInvoice-Three @regression-BIL
    Scenario: As a User, when I choose "Add to the current open invoice" in the Quote Transition Options panel, I can view that the items in the selected quote are added to the correct open invoice for the selected subscriber
      When I select "New Invoice" from dotted Menu of Packages & Invoices
      And I click on add package button
      And I search the required package in the package selection pop up
          |Hosting|
      And I click on Add to invoice
      And I click save and configure
      And I close newly added package  
      And  I click on Packages and Invoices tab
      And  I select already added Quote from invoice options
           |Hosting|
      And  I click on "Convert to Invoice" button
      And  I select Add to the current open invoice in option
      Then I should see quote items are trasnsitted to current Invoice

    @regression2021 @regression2021-subscriberDetailsPackageInvoice-Three @regression-BIL
    Scenario: As a User, when I choose "Add to a new invoice" in the Quote Transition Options panel, I can view that the items in the selected quote are added to a new invoice
      When I select second subscriber from subscriber list
      And  I click on Packages and Invoices tab
      And  I select already added Quote from invoice options
           |Hosting|
      And  I click on "Convert to Invoice" button
      And  I select Add to a new Invoice in option
      Then I should see quote items are trasnsitted to new Invoice

    @regression2021 @regression2021-subscriberDetailsPackageInvoice-Three @regression-BIL @TA-168 @TA-410
    Scenario: As a User, I can click on the +Package button to open the Add Subscriber Package panel from which I can choose which package-type item to add to the selected invoice
      When I click on Packages and Invoices tab
      And I click on add package button
      And I search the required package in the package selection pop up
          |Hosting|
      And I click on Add to the invoice
      Then A invoice is added to the subscriber with selected package
          |Hosting|

    @regression2021 @regression2021-subscriberDetailsPackageInvoice-Three @regression-BIL @TA-168 @TA-454
    Scenario: As a User, I can view that the default Term Start Date for the full term of the package-type item in the Add Subscriber Invoice Item Preview is automatically set to the closest date following the current date that falls on the subscriber's Term Start Day if the date in the current month that falls on the subscriber's Term Start Day has already passed
      When I click on Packages and Invoices tab
      And I click on add package button
      And I search the required package in the package selection pop up
          |Hosting|
      And I click on Add to the invoice
      And  The term start date for package-type item is automatically set to the closest date on the Term start day

    @regression2021 @regression2021-subscriberDetailsPackageInvoice-Three @regression-BIL @TA-168 @TA-485
    Scenario: As a User, I am restricted from changing the Term Start Date of the full term for the package-type item in the Add Subscriber Invoice Item Preview panel to date other than the date that falls on the subscriber's Term Start Day if there is also a prorated term for the package-type item in the Add Subscriber Invoice Item Preview panel
      When I click on Packages and Invoices tab
      And I click on add package button
      And I search the required package in the package selection pop up
          |Hosting|
      And I click on Add to the invoice
      Then  I am unable to change the Term start date

    @regression2021 @regression2021-subscriberDetailsPackageInvoice-Three @regression-BIL @TA-455
    Scenario: As a User, if the package-type item is added to a new invoice, I can view that the default Term End Date is correctly set for the full term of the package-type item in the Add Subscriber Invoice Item Preview panel based on the selected subscriber's Term Start Day and Billing Cycle settings
      When I click on Packages and Invoices tab
      And I take note of billing cycle
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And I click on add package button
      And I search the required package in the package selection pop up
          |Hosting|
      And I click on Add to invoice
      Then I can view that the default term end date is correctly set based on billing cycle settings

    @regression2021 @regression2021-subscriberDetailsPackageInvoice-Three @regression-BIL @TA-411
    Scenario: As a User, I can click on the +Equipment button to open the Add Subscriber Equipment panel from which I can choose which equipment-type item to add to the selected invoice
      When I click on Packages and Invoices tab
      And  I click on Equipment button
      And  I select the Equipment
      And  I click on save button to save Equipment
      Then I verify the equipment is added

    @regression2021 @regression2021-subscriberDetailsPackageInvoice-Three @regression-BIL @TA-486
    Scenario: As a User, I can view accurate Item column data in the Add Subscriber Invoice Item Preview panel for the equipment-type item I selected from the Add Subscriber Equipment panel
      When I click on Packages and Invoices tab
      And  I click on Equipment button
      And  I select the Equipment
      And  I click on save button to save Equipment
      Then I verify from invoice item preview panel that the right equipment is added

    @regression2021 @regression2021-subscriberDetailsPackageInvoice-Three @regression-BIL @TA-412
    Scenario: As a User, I can click on the +Other Item button to open the Add Other Item panel from which I can choose which non-package and non-equipment-type item to add to the selected invoice
       When I click on other item button
       And I click on Add New Item
       And I enter new item details
       And I click save and configure
       Then Other Item successfully added
