@subscriberDetailsPackageInvoice-Four
Feature: Subscriber Details - Manage Package invoices - part 4
  Background: 
	  Given I open UBO webapp
        And I login with username jcabangonautomation and password Test@1234
        And I navigate to subscriber list
        And I open specific subscriber details

  @regression2021 @regression2021-subscriberDetailsPackageInvoice-Four @regression-BIL @eaV16052022
  Scenario: As a User, I can view that the rate and billing cycle displayed in the Price column of the Add Other Item panel is based on the selected subscriber's billing cycle.
    When  I take note of billing cycle
    And  I create a new invoice to enter an other type item
    Then I should see billing cycle and rate for other type item

  @regression2021 @regression2021-subscriberDetailsPackageInvoice-Four @regression-BIL
  Scenario: As a User, when I click the Add button in the Add Other Item panel after selecting a non-package and non-equipment-type item, I can view that the non-package and non-equipment-type item is added to the Add Subscriber Invoice Item Preview panel.
    When I click on Packages and Invoices tab
    And  I create a new invoice to enter an other type item
    Then I should see that Recurring checkbox is editable
#Bug in the application
  @regression2021 @regression2021-subscriberDetailsPackageInvoice-Four @regression-BIL @TA-392
  Scenario: As a User, I can set the month and year for the Recurring Start Date for the recurring invoice item in the Recurring Invoice Item Settings panel.
    When I click on Packages and Invoices tab
    And  I create a new invoice to enter an other type item
    And I select 'Add prorated amount only' as recurring option
    And I re-open recurring options
    Then I should be able to set the next 'Month' as start date of the recurring item
    And I should see the updated start date of the other item

  @regression2021 @regression2021-subscriberDetailsPackageInvoice-Four @regression-BIL
  Scenario: As a User, when I select "do not prorate" as the billing option for the selected non-package item and bill the package, I can view that only the full term for the selected non-package-type item is added to the selected invoice.
    When I click on Packages and Invoices tab
    And  I create a new invoice to enter an other type item
    And I select 'Do not prorate' as recurring option
    Then I should see the full term in the invoice

  @regression2021 @regression2021-subscriberDetailsPackageInvoice-Four @regression-BIL @TA-459
  Scenario: As a User, when I select "Add prorated amount only" as the billing option for the selected non-package item and bill the package, I can view that only the prorated term, with the selected start date, for the selected non-package-type item is added to the selected invoice.
    When I click on Packages and Invoices tab
    And  I create a new invoice to enter an other type item
    And  I select 'Add prorated amount only' as recurring option
    And  I re-open recurring options
    Then I should be able to set the next 'Day' as start date of the recurring item
    And I should see the prorated term is added with start date

  @regression2021 @regression2021-subscriberDetailsPackageInvoice-Four @regression-BIL @TA-453
  Scenario: As a User, if the Recurring Start Date of the selected saved non-package-type recurring invoice item is yet to start, I can edit the Recurring Start Date of the selected saved non-package-type recurring invoice item.
    When I click on Packages and Invoices tab
    And  I create a new invoice to enter an other type item
    And  I select 'Add prorated amount only' as recurring option
    Then I should recurring invoice item is yet to start
    And  I re-open recurring options
    Then I should be able to set the next 'Month' as start date of the recurring item
    And  I re-open recurring options
    Then I should be able to set the next 'Day' as start date of the recurring item
    And  I should see the prorated term is added with start date

  @regression2021 @regression2021-subscriberDetailsPackageInvoice-Four @regression-BIL
  Scenario: As a User, when I select "add full amount plus prorate" as the billing option for the selected non-package item and bill the package, I can view that both the full and the prorated term, with the selected start date, for the selected non-package-type item are added to the selected invoice.
    When I click on Packages and Invoices tab
    And  I create a new invoice to enter an other type item
    Then I select 'Add full amount plus prorate' as recurring option
    And  I re-open recurring options
    Then I should be able to set the next 'Day' as start date of the recurring item
    And  I should be able to see two records in the invoice i.e. both for prorate and full

  @regression2021 @regression2021-subscriberDetailsPackageInvoice-Four @regression-BIL
  Scenario: As a User, if my ISP is set to continue invoicing suspended and inactive packages, I can view that none of the Auto-Suspend options is selected by default in the Recurring Invoice Item Settings panel.
    When I go to settings to ensure invocing for suspended and inactive packages will continue
    When I click on Packages and Invoices tab
    And  I create a new invoice to enter an other type item
    Then I can view that none of the Auto-Suspend options is selected by default in the Recurring Invoice Item Settings panel
  
  @regression2021 @regression2021-subscriberDetailsPackageInvoice-Four @regression-BIL
  Scenario: As a User, if my ISP is set to discontinue invoicing suspended and inactive packages, I can view that the default Auto-Suspend option set in the Recurring Invoice Item Settings panel is "when subscriber is suspended or inactive".
    When I go to settings to ensure invocing for suspended and inactive packages will discontinue
    When I click on Packages and Invoices tab
    And  I create a new invoice to enter an other type item
    Then I can view that the default Auto-Suspend option set in the Recurring Invoice Item Settings panel is "when subscriber is suspended or inactive"
  
  @regression2021 @regression2021-subscriberDetailsPackageInvoice-Four @regression-BIL
  Scenario: As a User, when I attempt to save my Description changes, I can view the Apply Invoice Item Changes prompt where I can choose to "apply to this invoice only", "apply to future invoices only", and "apply to this invoice and future invoices".
    When I click on Packages and Invoices tab
    And  I select "New Invoice" from dotted Menu of Packages & Invoices
    And I click on add package button
    And I search the required package in the package selection pop up
          |Hosting|
    And I click on Add to invoice
    And I click save and configure
    And I close newly added package
    And I edit the Description after saving the invoice
    Then I should see a prompt with options "Apply to this invoice only", "Apply to future invoices only", and "Apply to this invoice and future invoices"
  
  @regression2021 @regression2021-subscriberDetailsPackageInvoice-Four @regression-BIL
  Scenario: As a User, when I edit the quantity of an invoice item, I can view that the Tax and Amount values are automatically accurately updated. 
    When I open invoicing settings from top right menu
    And I define tax item in invoice Tax settings
        |GST|50| 
    And I click on Packages and Invoices tab
    And  I create a new invoice to enter an other type item
    And  I configure Tax for newly added other type item
    And  I edit the quantity after saving the invoice
    Then The Tax amount should be updated
        |$2.00|

  @regression2021 @regression2021-subscriberDetailsPackageInvoice-Four @regression-BIL @TA-393
  Scenario: As a User, I can view "Delete only the invoice item" and "Delete the invoice item and the package" as options in the Package Invoice Item Delete Options panel when I attempt to delete an invoice package-item.
    When I click on Packages and Invoices tab
    And  I select "New Invoice" from dotted Menu of Packages & Invoices
    And I click on add package button
    And I search the required package in the package selection pop up
          |Hosting|
    And I click on Add to invoice
    And I click save and configure
    And I close newly added package
    And  I click delete invoice button
    Then I should see a prompt with options "Delete only the invoice item" and "Delete the invoice item and the package and services"
  
  @regression2021 @regression2021-subscriberDetailsPackageInvoice-Four @regression-BIL @TA-394 @TA-462
  Scenario: As a User, when I select the "delete only the invoice item" option in the Package Invoice Item Delete Options panel, I can view that only the selected package-type item is deleted and the associated subscriber package is retained in the selected subscriber's account.
    When I click on Packages and Invoices tab
    And  I select "New Invoice" from dotted Menu of Packages & Invoices
    And I click on add package button
    And I search the required package in the package selection pop up
          |Hosting|
    And I click on Add to invoice
    And I click save and configure
    And I close newly added package
    And I click delete invoice button
    And I select "Delete only the invoice item" option from the prompt
    Then The selected package-type item is deleted
    And  The associated subscriber package is retained in the selected subscriber's account
        |Hosting|

  @regression2021 @regression2021-subscriberDetailsPackageInvoice-Four @regression-BIL @invoice1
  Scenario: As a User, when I select the "delete the invoice item and the package" option in the Package Invoice Item Delete Options panel, I can view that the selected package-type item is removed from the selected invoice and the associated subscriber package is removed from the selected subscriber's account.
    When I click on Packages and Invoices tab
    And  I select "New Invoice" from dotted Menu of Packages & Invoices
    And I click on add package button
    And I search the required package in the package selection pop up
          |Hosting|
    And I click on Add to invoice
    And I click save and configure
    And I close newly added package
    And  I click delete invoice button and select "Delete the invoice item and the package and services" option from the prompt
    Then The selected package-type item is removed from the selected invoice and the associated subscriber package is removed from the selected subscriber's account
        |Hosting|