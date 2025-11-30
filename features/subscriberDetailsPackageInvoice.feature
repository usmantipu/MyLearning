@subscriberDetailsPackageInvoice
Feature: Subscriber Details - Manage Package invoices
  Background: 
	  Given I open UBO webapp
        And I login with username jcabangonautomation and password Test@1234
        #And I login with username dreamteam9 and password str0ngP@ss9
        And I navigate to subscriber list
        And I open specific subscriber details
        
  @regression2021 @regression2021-subscriberDetailsPackageInvoice @regression-BIL @TA-147 @TA-396
  Scenario: As a User, I am restricted from viewing recurring package-type invoice items in the selected upcoming invoice if the associated package is inactive and the ISP is set to stop billing for inactive packages except if the package has yet to start billing
      When I click on Packages and Invoices tab
      And  I open invoicing settings from top right menu
      And  I check invoicing suspension to inactive packages option
      And I click on add package button
      And I search the required package in the package selection pop up
          |Hosting|
      And I click on Add to invoice
      And I click on Open A New Invoice
      And I click save and configure
      And I activate the package
      And I take note of activated package in current invoice
      And I deactivate the current package
      Then I should see inactive package should not be list in invoice items except if the package has yet to start billing

@regression2021 @regression2021-subscriberDetailsPackageInvoice @regression-BIL @TA-147
  Scenario:As a user, I can view the accurate Username, Customer ID, Invoice Date, Invoice number, and Due Date field data for selected invoice for the selected subscriber
      When I get the subscriber Username and Customer ID from subscriber list
      And  I click on Packages and Invoices tab
      And  I select Paid Invoice as option
      Then I should see the accurate Username, Customer ID, Invoice Date, Invoice number, and Due Date field data for selected invoice
  
 @regression2021 @regression2021-subscriberDetailsPackageInvoice @regression-BIL @TA-147 @TA-397
  Scenario: As a User, when changes are made in the invoice items in the invoice that can affect the Amount of the item, I can view that each field in the Statement Summary section are automatically accurately updated.
      When I click on Packages and Invoices tab
      And  I open invoicing settings from top right menu
      And  I define tax item in invoice Tax settings
           |GST|50|
      And I click on add package button
      And I search the required package in the package selection pop up
          |Hosting|
      And I click on Add to invoice
      And I click on Open A New Invoice
      And I click save and configure
      And I activate the package
      And I take note of Total for this Invoice
      And  I take note of Tax amounts in an open invoice
      Then I should Total for this invoice should be updated in invoice Summary

@regression2021 @regression2021-subscriberDetailsPackageInvoice @regression-BIL @TA-147 @TA-398
  Scenario:As a User, I can click on the Email in the Invoice panel to open the Email dock with the selected invoice for the selected subscriber already attached to the email draft
      When I select second subscriber from subscriber list
      And  I click on Packages and Invoices tab
      And  I select Paid Invoice as option
      And  I click on the Email option in the Invoice panel
      Then I should see selected invoice already attached to selected subscriber in the email draft

@regression2021 @regression2021-subscriberDetailsPackageInvoice @regression-BIL @TA-147
  Scenario:As a User, I can click on the More button to view an accurate list of packages for the selected subscriber for which the bill can only be viewed in another invoice for the selected subscriber
      When I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on More option from package and in panel
      Then I should see Active packages on other invoices option with package and Invoice info

#BUG https://vispnet.atlassian.net/browse/TA-711
@regression2021 @regression2021-subscriberDetailsPackageInvoice @regression-BIL @TA-147 @TA-406
  Scenario: As a User, I am restricted from clicking the More button if all the packages for the subscriber are billed in the selected invoice 
      When I select second subscriber from subscriber list
      And  I click on Packages and Invoices tab
      And  I select Paid Invoice as option
      Then I should see More button is not present
@regression2021 @regression2021-subscriberDetailsPackageInvoice @regression-BIL @TA-147 @TA-407 @TA-717
  Scenario: As a User, when I click on the "Void this Invoice" option in the Package And Invoice dotted menu, I can view that the selected invoice has been voided and is still viewable
      When I click on Packages and Invoices tab
      And I click on add package button
      And I search the required package in the package selection pop up
          |Hosting|
      And I click on Add to invoice
      And I click on Open A New Invoice
      And I click save and configure
      And I close newly added package
      And  I select any Invoice other than upcoming and quote
      And  I select "Void this Invoice" from dotted Menu of Packages & Invoices
      And  I confirm Void this Invoice
      Then I should see invoice void successfully
      And  I should invoice voiding in logs

@regression2021 @regression2021-subscriberDetailsPackageInvoice @regression-BIL @TA-147
  Scenario: As a User, after successfully voiding an invoice, I can view in the Transactions table that the amount of the voided invoice is excluded from the total amount due of the selected subscriber
      When I click on Packages and Invoices tab
      And I click on add package button
      And I search the required package in the package selection pop up
          |Hosting|
      And I click on Add to invoice
      And I click on Open A New Invoice
      And I click save and configure
      And I close newly added package
      And I select any Invoice other than upcoming and quote
      And I select "Void this Invoice" from dotted Menu of Packages & Invoices
      And I confirm Void this Invoice
      Then I should see invoice void successfully
      And  I should see the voided invoice is excluded from the total amount due the Transactions table
  
@regression2021 @regression2021-subscriberDetailsPackageInvoice @regression-BIL @TA-147
  Scenario: As a User, I am restricted from voiding an Upcoming Invoice
      When I click on Packages and Invoices tab
      And  I select Upcoming Invoice as option
      And  I expand dotted menu of Packages & Invoices
      Then I should see "Void this Recurring Invoice" option is disabled

@regression2021 @regression2021-subscriberDetailsPackageInvoice @regression-BIL @TA-147
  Scenario: As a User, I am restricted from deleting an Upcoming Invoice
      When I click on Packages and Invoices tab
      And  I select Upcoming Invoice as option
      Then I should see Delete Invoice option is not present
@regression2021 @regression2021-subscriberDetailsPackageInvoice @regression-BIL @TA-147
  Scenario: As a User, I can click on the "New Invoice" option in the Packages & Invoices dotted menu to open a new and empty invoice
      When I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices 
      Then I should see New Invoice panel displayed with empty invoice

@regression2021 @regression2021-subscriberDetailsPackageInvoice @regression-BIL @TA-147
  Scenario: As a User, I can click on the "New Quote" option in the Packages & Invoices dotted menu to open a new and empty quote
      When I click on Packages and Invoices tab
      And  I select New Quote from dotted Menu of Packages & Invoices
      Then I should see New Quote panel displayed with empty quote

  @regression2021 @regression2021-subscriberDetailsPackageInvoice @regression-BIL @TA-147
  Scenario: As a User, I can view the "Convert to Invoice", "View PDF", and "Email" buttons in the Quote
      When I click on Packages and Invoices tab
      And  I select already added Quote from invoice options
           |Hosting|
      Then I should see "Convert to Invoice", "View PDF", and "Email" buttons in the Quote
#Bug TA-465 - TA-408
  @regression2021 @regression2021-subscriberDetailsPackageInvoice @regression-BIL @TA-147 @TA-408
  Scenario: As a User, I can view that the amount for quotes are excluded from the calculation for the subscriber's total amount balance in the Transactions table
      When I click on Packages and Invoices tab
      And  I select already added Quote from invoice options
           |Hosting|
      Then I should see amount for quotes are excluded in the Transactions table

  @regression2021 @regression2021-subscriberDetailsPackageInvoice @regression-BIL @TA-147 @TA-409
  #Bug TA-151
  Scenario: As a User, I can click on the "Convert to Invoice" button to transition all the items in the selected quote to invoice items
      When I select second subscriber from subscriber list
      And  I click on Packages and Invoices tab
      And  I select already added Quote from invoice options
           |Hosting|
      And  I click on "Convert to Invoice" button
      And  I select Add to a new Invoice in option
      Then I should see quote items are trasnsitted to new Invoice









