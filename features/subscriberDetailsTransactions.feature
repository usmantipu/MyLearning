@subscriberDetailsTransactions
Feature: Subscriber Details - Transactions
  Background: 
	  Given I open UBO webapp
        And I login with username jcabangonautomation and password Test@1234
        And I navigate to subscriber list
        And I open specific subscriber details
  @regression2021 @regression2021-subscriberDetailsTransactions @regression-BIL
  Scenario: As a User, I can navigate to the Transactions table to see the subscriber's transactions by clicking on the Transactions tab
    When I go to transactions section 
    Then I should see transactions panel

  @regression2021 @regression2021-subscriberDetailsTransactions @regression-BIL
  Scenario: As a User, I can view accurate data for Date, Description, Memo, Status, Type, Amount and Balance columns.
    When I click on Packages and Invoices tab
    And I select "New Invoice" from dotted Menu of Packages & Invoices
    And I click on add package button
    And I search the required package in the package selection pop up
          |Hosting|
    And I click on Add to invoice
    And I click save and configure
    And I close newly added package
    And I go to transactions section
    Then I can see Date, Description, Memo, Status, Type, Amount and Balance columns along with data
        |Date|
        |Description|
        |Memo|
        |Status|
        |Type|
        |Amount|
        |Balance|

  @regression2021 @regression2021-subscriberDetailsTransactions @regression-BIL
  Scenario: As a User, I can view updated and accurate data for Date, Description, Memo, Status, Type, Amount and Balance columns when I switch to another subscriber and back and then navigate to the Transactions table.
    When I go to transactions section
    And  I note Date, Description, Memo, Status, Type, Amount and Balance columns
    And  I select second subscriber from subscriber list
    And  I go to transactions section
    Then I see that data is changed per subscriber in Date, Description, Memo, Status, Type, Amount and Balance columns
   
  @regression2021 @regression2021-subscriberDetailsTransactions @regression-BIL
  Scenario: As a User, I can view updated and accurate data for all columns in the Transactions table after posting a payment.
    When I go to Payments tab
    And  I expand payment methods from Postpayment and CreditMemo
    And  I fill out the payment details using Cash as payment option
    And  I post the payment
    And  I go to transactions section
    Then I should see accurate data for all columns in the Transaction table
         |payment|
         |$-5.00|

  @regression2021 @regression2021-subscriberDetailsTransactions @regression-BIL
  Scenario: As a User, I can view updated and accurate data for all columns in the Transactions table after posting a credit memo.
  #  When I go to Payments tab
  #  And  I select Credit memo
    When I click on Packages and Invoices tab
    And  I select "New Credit Memo" from dotted Menu of Packages & Invoices
    And  I fill out the Credit memo details
    And  I credit the payment
    And  I go to transactions section
    Then I should see accurate data for all columns in the Transaction table
         |credit|
         |$-5.00|
         |'Reversal'|
  
  @discussion
  Scenario: As a User, I can view updated and accurate data for all columns in the Transactions table after updating a credit memo.
    When I update a credit memo
    And  I go to transactions section
    Then I should see accurate data for all columns in the Transaction table
    |Update credit memo|

  @regression2021 @regression2021-subscriberDetailsTransactions @regression-BIL @TA241 @TA-402
  Scenario: As a User, I can view updated and accurate data for all columns in the Transactions table after adding an invoice.
    When I click on Packages and Invoices tab
    And I select "New Invoice" from dotted Menu of Packages & Invoices
    And I click on add package button
    And I search the required package in the package selection pop up
          |Hosting|
    And I click on Add to invoice
    And I click save and configure
    And I close newly added package 
    And  I go to transactions section
    Then I should see accurate data for all columns in the Transaction table
    |invoice|

  @regression2021 @regression2021-subscriberDetailsTransactions @regression-BIL @TA-403
  Scenario: As a User, I can view updated and accurate data for all columns in the Transactions table after updating an invoice.
    When I click on Packages and Invoices tab
    And I select "New Invoice" from dotted Menu of Packages & Invoices
    And I click on add package button
    And I search the required package in the package selection pop up
          |Hosting|
    And I click on Add to invoice
    And I click save and configure
    And I close newly added package
    And I go to transactions section
    And I take note of data in transactions for newly added item
    And I go to transactions section
    And I click on Packages and Invoices tab
    And I click on add package button
    And I search the required package in the package selection pop up
          |Hosting|
    And I click on Add to invoice
    And I click on Sync Term with this invoice
    And I click save and configure
    And I close newly added package
    And I go to transactions section
    Then I should see updated and accurate data for all columns in the Transaction table
    |Invoice|

  @regression2021 @regression2021-subscriberDetailsTransactions @regression-BIL @TA241
  Scenario: As a User, I can view updated and accurate data for all columns in the Transactions table after adding a quote.
    When I select second subscriber from subscriber list
    And  I click on Packages and Invoices tab
    And  I select already added Quote from invoice options
          |Hosting| 
    And  I go to transactions section
    Then I should see accurate data for all columns in the Transaction table
    |quote|

  @regression2021 @regression2021-subscriberDetailsTransactions @regression-BIL
  Scenario: As a User, I can view updated and accurate data for all columns in the Transactions table after updating a quote.
  #  When I select second subscriber from subscriber list
    And  I click on Packages and Invoices tab
    And  I select already added Quote from invoice options
          |Hosting| 
    And  I go to transactions section
    And I take note of data in transactions for newly added item
    And  I click on Packages and Invoices tab
    And I click on add package button
    And I search the required package in the package selection pop up
          |Hosting|
    And I click on Add to quote
    And I click save and configure
    And I close newly added package
    And  I go to transactions section
    Then I should see updated and accurate data for all columns in the Transaction table
    |Quote|

  @regression2021 @regression2021-subscriberDetailsTransactions @regression-BIL @TA-404
  Scenario: As a User, I can view a negative sign for posted Payment and Credit Memo.
    When I go to Payments tab
    And  I expand payment methods from Postpayment and CreditMemo
    And  I fill out the payment details using Cash as payment option
    And  I post the payment
    And  I go to transactions section
    And  I keep the posted pyament Amount value
  #  And  I go to Payments tab
  #  And  I select Credit memo
    And I click on Billing options tab
    And I click on Packages and Invoices tab
    And  I select "New Credit Memo" from dotted Menu of Packages & Invoices
    And  I fill out the Credit memo details
    And  I credit the payment
    And  I go to transactions section
    Then I should a negative sign in Transaction table posted Payment and Credit Memo
    |credit|
    |$-5.00|
    |payment|
    |$-5.00|

  @regression2021 @regression2021-subscriberDetailsTransactions @regression-BIL @TA-405
  Scenario: As a User, I can view accurate invoice details when clicking an invoice.
    When I click on Packages and Invoices tab
    And I select "New Invoice" from dotted Menu of Packages & Invoices
    And I click on add package button
    And I search the required package in the package selection pop up
          |Hosting|
    And I click on Add to invoice
    And I click save and configure
    And I close newly added package 
    And  I go to transactions section
    And I open details of newly created Invoice
  #  And  I open "Invoice" details from Transactions
    Then the invoice should be shown in package and invoice section
  
  @regression2021 @regression2021-subscriberDetailsTransactions @regression-BIL
  Scenario: As a User, I can view accurate quote details when clicking a quote.
    When I select second subscriber from subscriber list
    And  I click on Packages and Invoices tab
    And  I select already added Quote from invoice options
          |Hosting| 
    And  I go to transactions section
    And  I open "quote" details from Transactions
    Then the quote should be shown in package and invoice section

  @regression2021 @regression2021-subscriberDetailsTransactions @regression-BIL
  Scenario: As a User, I can view accurate payment details when clicking a payment.
    When I go to Payments tab
    And  I expand payment methods from Postpayment and CreditMemo
    And  I fill out the payment details using Cash as payment option
    And  I post the payment
    And  I go to transactions section
    And  I open "payment" details from Transactions
    Then the payment details should be shown

  @regression2021 @regression2021-subscriberDetailsTransactions @regression-BIL
  Scenario: As a User, I can view accurate memo details when clicking on a credit memo.
  #  When  I go to Payments tab
  #  And  I select Credit memo
    When I click on Packages and Invoices tab
    And  I select "New Credit Memo" from dotted Menu of Packages & Invoices
    And  I fill out the Credit memo details
    And  I credit the payment
    And  I go to transactions section
    And  I open "credit memo" details from Transactions
    Then the credit memo details should be shown

  @regression2021 @regression2021-subscriberDetailsTransactions @regression-BIL
  Scenario: As a User, I can view accurate Statement PDF and Statement options when clicking View Statement.
    When I go to transactions section
    And  I try to view the statement PDF
    Then a preview window should open
    
  @regression2021 @regression2021-subscriberDetailsTransactions @regression-BIL
  Scenario: As a User, I can view Email dock when clicking Send Email.
    When I go to transactions section
    And  I try to view the statement PDF
    And I click on Send email button
    Then Email dock should open
