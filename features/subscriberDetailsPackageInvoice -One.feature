@subscriberDetailsPackageInvoice-One
Feature: Subscriber Details - Manage Package invoices
  Background: 
	  Given I open UBO webapp
        And I login with username jcabangonautomation and password Test@1234
        And I navigate to subscriber list
        And I open specific subscriber details

  @regression2021 @regression2021-subscriberDetailsPackageInvoice-One @regression-BIL @TA-65
  Scenario: As a user, I can navigate to the subscriber's Packages & Invoices panel by clicking on the Packages & Invoices tab of the Subscriber dock    
    When I click on Packages and Invoices tab
    Then I can navigate to Packages and Invoices tab of the Subscriber dock

  @regression2021 @regression2021-subscriberDetailsPackageInvoice-One @regression-BIL @TA-65
  Scenario: As a User, I can view that an upcoming invoice is selected by default in the Statement dropdown when I navigate to the Packages & Invoices panel
    When I click on Packages and Invoices tab
    Then I can see that an upcoming invoice is selected by default in the Statement dropdown
  
  @regression2021 @regression2021-subscriberDetailsPackageInvoice-One @regression-BIL @TA-65
  Scenario: As a User, I can view that the correct invoice is displayed in the Invoice panel when I navigate to the Packages & Invoices panel by clicking the invoice in the Transactions table
    When I click on Transactions tab
    And  I click on the available Invoice in Transactions tab
    Then I can see that the correct invoice is displayed in the Invoice panel when loaded from Transactions

  @regression2021 @regression2021-subscriberDetailsPackageInvoice-One @regression-BIL @TA-65
  Scenario: As a User, I can view that the correct quote is displayed in the Quote panel when I navigate to the Packages & Invoices panel by clicking the quote in the Transactions table
    When I click on Packages and Invoices tab
    And  I select already added Quote from invoice options
           |Hosting|
    And I click on Transactions tab
    And I click on the available Quote in Transactions tab
    Then I can see that the correct quote is displayed in the quote panel when loaded from Transactions

  @regression2021 @regression2021-subscriberDetailsPackageInvoice-One @regression-BIL @TA-65
  Scenario: As a User, I can view that the correct invoice is displayed in the Invoice panel when I select the invoice in the Statement dropdown in the Packages & Invoices panel
    When I get the subscriber Username and Customer ID from subscriber list
    And  I click on Packages and Invoices tab
    And  I select Paid Invoice as option
    Then I can see that the correct invoice is displayed in the Invoice panel

  @regression2021 @regression2021-subscriberDetailsPackageInvoice-One @regression-BIL @TA-65
  Scenario: As a User, I can view that the correct quote is displayed in the Quote panel when I select the quote in the Statement dropdown in the Packages & Invoices panel
    When I click on Packages and Invoices tab
    And  I select already added Quote from invoice options
           |Hosting|
    Then I can see that the correct quote is displayed in the quote panel

  @regression2021 @regression2021-subscriberDetailsPackageInvoice-One @regression-BIL @TA-65
  Scenario: As a User, I can view that the correct upcoming invoice is displayed in the Upcoming Invoice panel when I select the upcoming invoice in the Statement dropdown in the Packages & Invoices panel
    When I click on Packages and Invoices tab    
    And  I re-select Upcoming Invoice as option if its selected
    Then I can see that the correct upcoming invoice is displayed in the upcoming Invoice panel

  @regression2021 @regression2021-subscriberDetailsPackageInvoice-One @regression-BIL @TA-65
  Scenario: As a User, I can view "new invoice", "new quote", and "void this invoice" as options in the Packages & Invoices dotted menu
    When I click on Packages and Invoices tab
    And  I select Paid Invoice as option
    And  I expand dotted menu of Packages & Invoices
    Then I can view the Packages & Invoices options
      |New Invoice|
      |New Quote|
      |Void this Invoice|
    
  @regression2021 @regression2021-subscriberDetailsPackageInvoice-One @regression-BIL @TA-65
  Scenario: As a User, I can edit the Username field value for the selected subscriber in the Upcoming Invoice or Invoice or Quote
    When I click on Packages and Invoices tab
    And  I select Upcoming Invoice as option
    And  I edit the username field of selected invoice
    And  I save the invoice username related changes
    Then I see username should be updated
  
  @regression2021 @regression2021-subscriberDetailsPackageInvoice-One @regression-BIL @TA-65
  Scenario: As a User, I am restricted from saving my Username field value changes if the value is already used by another subscriber in my selected ISP
    When I get the subscriber Username and Customer ID from subscriber list
    And  I select second subscriber from subscriber list
    And  I click on Packages and Invoices tab
    And  I select Upcoming Invoice as option
    And  I enter the username which is already used by another subscriber in my selected ISP
    And  I save the invoice username related changes
    Then I should not be allowed to save the selected username

  @regression2021 @regression2021-subscriberDetailsPackageInvoice-One @regression-BIL @TA-65
  Scenario: As a user, I can view the accurate Username, Customer ID, Invoice Date, and Due Date field data for selected upcoming invoice for the selected subscriber
    When I click on Packages and Invoices tab
    And  I select Upcoming Invoice as option
    Then I can view the accurate Username, Customer ID, Invoice Date, and Due Date field data for the selected subscriber

  @regression2021 @regression2021-subscriberDetailsPackageInvoice-One @regression-BIL @TA-65
  Scenario: As a User, I can view "Upcoming Invoice" as the value for the Invoice number field of the selected upcoming invoice for the selected subscriber
    When I click on Packages and Invoices tab
    And I select Upcoming Invoice as option
    Then I can view the Upcoming Invoice as the value for the Invoice number field of the selected upcoming invoice

  @regression2021 @regression2021-subscriberDetailsPackageInvoice-One @regression-BIL @TA-65
  Scenario: As a User, I only view accurate "Total for this invoice" data in the Account Summary section of the selected upcoming invoice
    When I click on Packages and Invoices tab
    And I select Upcoming Invoice as option
    Then I can view the accurate Total for this invoice value in the Account Summary section of the selected upcoming invoice

  @regression2021 @regression2021-subscriberDetailsPackageInvoice-One @regression-BIL @TA-65 
  Scenario: As a User, I am restricted from viewing the PDF and Email buttons when viewing an upcoming invoice
    When I click on Packages and Invoices tab
    And I select Upcoming Invoice as option
    Then I should not see the PDF and Email buttons

  @regression2021 @regression2021-subscriberDetailsPackageInvoice-One @regression-BIL @TA-65  @ff22052022
  Scenario: As a User, I am restricted from viewing recurring package-type invoice items in the selected upcoming invoice if the associated package is suspended and the ISP is set to stop billing for suspended packages
    When I select second subscriber from subscriber list
    And  I click on Packages and Invoices tab
    And  I open invoicing settings from top right menu
    And I ensures that the ISP is set to stop billing for suspended packages
    And I select Upcoming Invoice as option
    And I take note of activated packages count in current invoice
    And I click on add package button
    And I search the required package in the package selection pop up
        |Hosting|
    And I click on Add to invoice
    And I click on Open A New Invoice
    And I click save and configure
    And I activate the package  
    And I ensures that the associated package is suspended
    Then I should not see the recurring package-type invoice items






