@subscriberDetailsPayments
Feature: Subscriber Details - Manage payments

  Background: 
	  Given I open UBO webapp
        And I login with username jcabangonautomation and password Test@1234
        #And I login with username dreamteam9 and password str0ngP@ss9
        And I navigate to subscriber list
        And I open specific subscriber details
@regression2021 @regression2021-subscriberDetailsPayments @regression-BIL @automationtest.com
  Scenario: As a user, I can navigate to subscriber details - Payment section
      When I go to Payments tab
      Then I should see the Payment section
#No more present in the application
#@regression2021 @regression2021-subscriberDetailsPayments @regression-BIL @automationtest.com @TA-140
  Scenario: As a user, I can choose between posting a payment and a credit memo through the Receive Payment and Credit Memo options
      When I go to Payments tab
      Then I should see Recieve payment and credit memo options
@regression2021 @regression2021-subscriberDetailsPayments @regression-BIL @automationtest.com
  Scenario: As a user, I can view that Check, Cash, Money Order, Credit Card, eCheck, Other, and PayPal are the default options for Payment Method under Payment Options tab
      When I go to Payments tab
      And  I Check all payment options are definied
      And  I open payment options tab under Payments
      And  I expand payment methods from payment options
      Then I should see Check, Cash, Money Order, Credit Card, eCheck, Other and PayPal options
@regression2021 @regression2021-subscriberDetailsPayments @regression-BIL @automationtest.com
  Scenario: As a user, I can view that Check, Cash, Money Order, Credit Card, eCheck, Other, and PayPal are the default options for Payment Method under Postpayment and CreditMemo tab
      When I go to Payments tab
      And  I Check all payment options are definied
      And  I expand payment methods from Postpayment and CreditMemo
      Then I should see Check, Cash, Money Order, Credit Card, eCheck, Other and PayPal options
@regression2021 @regression2021-subscriberDetailsPayments @regression-BIL @automationtest.com
  Scenario: As a User, I can view EFT as a Payment Method option if it's enabled in the Merchant Account settings panel as an accepted payment option
      When I go to Payments settings
      And  I ensure that payment option "EFT" is enabled in payment setting
      And  I go to Payments tab
      And  I open payment options tab under Payments
      And  I expand payment methods from payment options
      Then I can view EFT as payment option
@regression2021 @regression2021-subscriberDetailsPayments @regression-BIL @automationtest.com
  Scenario: As a User, I am restricted from posting a payment with zero or empty amount
      When I go to Payments tab
      And  I go to Payments tab
      And  I fill out the payment details with payment amount as zero
      Then I am restricted from posting the payment
      
@regression2021 @regression2021-subscriberDetailsPayments @regression-BIL @automationtest.com @demoWithAnything
  Scenario: As a User, I can process an eCheck payment when I click the Post Payment button and the Process eCheck Payment Now is checked
      When I go to Payments settings
      And  I ensure that payment option "eCheck" is enabled in payment setting
      And  I go to Payments tab
      And  I expand payment methods from Postpayment and CreditMemo
      And  I fill out the payment details using eCheck as payment option
      And  I post the payment
      Then The payment should be posted successfully
#Moved to betaCleversoftScenarios.feature       
#@regression2021 @regression2021-subscriberDetailsPayments @regression-BIL @Betacleversoft.net
  Scenario: As a User, I can process a credit card payment when I click the Post Payment button and the Process Credit Card Payment Now is checked
      When I go to Payments settings
      And  I ensure that payment option "Visa" is enabled in payment setting
      And  I go to Payments settings
      And  I ensure that payment option "MasterCard" is enabled in payment setting
      And  I go to Payments tab
      And  I expand payment methods from Postpayment and CreditMemo
      And  I fill out the payment details using Credit Card as payment option
      And  I post the payment
      Then The credit card payment should be posted successfully 

@regression2021 @regression2021-subscriberDetailsPayments @regression-BIL @automationtest.com
  Scenario: As a User, when I switch from one subscriber to another in the main table, I can view that the Receive Payment details and the distribution data are automatically updated with the selected subscriber's data
      When I open subscriber details from Due list
      And  I define another subscriber with Due status if its not present
      And  I click on any subscriber record
      And  I go to Payments tab
      And  I observe the amount in total payment column of distribution table
      Then I can see the subscriber details for Receive payment and distribution data automatically updated
     
@regression2021 @regression2021-subscriberDetailsPayments @regression-BIL @automationtest.com @TA-395
  Scenario: As a User, I can change the Total Payment amount for any unpaid invoice in the distribution table
      When I open subscriber details from Due list
      And  I click on any subscriber record
      And  I go to Payments tab
      And  I observe the amount in total payment column of distribution table 
      And  I update the total payment amount to a lesser amount
      Then "Amount Paid for selected invoices" amount should correctly updated
      And  "Unapplied payment amount" amount should also correctly update
@regression2021 @regression2021-subscriberDetailsPayments @regression-BIL @automationtest.com
  Scenario: As a User, I can post a payment with Cash payment method
     When I go to Payments tab
     And  I expand payment methods from Postpayment and CreditMemo
     And  I fill out the payment details using Cash as payment option
     And  I post the payment
     Then The payment should be posted successfully 
@regression2021 @regression2021-subscriberDetailsPayments @regression-BIL @automationtest.com
  Scenario: As a User, I can post a payment with Other payment method
     When I go to Payments tab
     And  I expand payment methods from Postpayment and CreditMemo
     And  I fill out the payment details using Other as payment option
     And  I post the payment
     Then The payment should be posted successfully
@regression2021 @regression2021-subscriberDetailsPayments @regression-BIL @automationtest.com
  Scenario: As a User, I can post a payment with PayPal payment method
    When I go to Payments settings
    And  I ensure that payment option "PayPal" is enabled in payment setting
    When I go to Payments tab
    And  I expand payment methods from Postpayment and CreditMemo
    And  I fill out the payment details using PayPal as payment option
    And  I post the payment
    Then The payment should be posted successfully 
@regression2021 @regression2021-subscriberDetailsPayments @regression-BIL @automationtest.com
  Scenario: As a User, I can post a payment with Check payment method
    When I go to Payments tab
    And  I expand payment methods from Postpayment and CreditMemo
    And  I fill out the payment details using Check as payment option
    And  I post the payment
    Then The payment should be posted successfully 
@regression2021 @regression2021-subscriberDetailsPayments @regression-BIL @automationtest.com
  Scenario: As a User, I can post a payment with Money Order payment method
       When I go to Payments tab
       And  I expand payment methods from Postpayment and CreditMemo
       And  I fill out the payment details using Money Order as payment option
       And  I post the payment
       Then The payment should be posted successfully
@regression2021 @regression2021-subscriberDetailsPayments @regression-BIL @automationtest.com
   Scenario: As a User, I can post a payment information with EFT payment method if it's enabled as an accepted payment option
      When I go to Payments settings
      And  I ensure that payment option "EFT" is enabled in payment setting
      And  I go to Payments tab
      And  I expand payment methods from Postpayment and CreditMemo
      And  I fill out the payment details using EFT as payment option
      And  I post the payment
      Then The payment should be posted successfully  
#Moved to betaCleversoftScenarios.feature
#@regression2021 @regression2021-subscriberDetailsPayments @regression-BIL @Betacleversoft.net @TA-123-Beta
  Scenario: As a User, I can save a payment information with eCheck payment method
      When I go to Payments settings
      And  I ensure that payment option "eCheck" is enabled in payment setting
      And  I go to Payments tab
      And  I open payment options tab under Payments
      And  I expand payment methods from payment options
      And  I fill out eCheck details
           |123123123|2nd|
      And  I save the Payment Option Details
      Then eCheck information should be saved
#Moved to betaCleversoftScenarios.feature  
#@regression2021 @regression2021-subscriberDetailsPayments @regression-BIL @Betacleversoft.net @TA-123-Beta @TA-146
  Scenario: As a User, I can save a payment information with Credit Card payment method
      When I go to Payments tab
      And  I go to Payments settings
      And  I ensure that payment option "Visa" is enabled in payment setting
      And  I go to Payments settings
      And  I ensure that payment option "MasterCard" is enabled in payment setting
      And  I open payment options tab under Payments
      And  I expand payment methods from payment options
      And  I fill out the Credit Card details
           |VISA|4433-9394-0196-8332|5|2028|
      And  I save the Payment Option Details
      Then Credit Card information should be saved

@regression2021 @regression2021-subscriberDetailsPayments @regression-BIL @automationtest.com @TA-123-Auto
  Scenario: As a User, I can post a credit memo
      When I click on Packages and Invoices tab
      #When I go to Payments tab
      #And  I select Credit memo
      And  I select "New Credit Memo" from dotted Menu of Packages & Invoices
      And  I fill out the Credit memo details
      And  I credit the payment
      Then Payment should be credited
  
 @regression2021 @regression2021-subscriberDetailsPayments @regression-BIL @automationtest.com @TA-123-Auto
  Scenario: As a User, I can view the "Automatically unsuspend" checkbox in the Receive Payment panel when I open it for suspended subscribers
      When I open subscriber details from suspended list
      And  I click on any subscriber record 
      And  I go to Payments tab
      Then I should see "Automatically unsuspend" checkbox
 @regression2021 @regression2021-subscriberDetailsPayments @regression-BIL @automationtest.com @TA-123-Auto
   Scenario: As a User, when I post a payment while the "Automatically unsuspend" checkbox is checked, I can view that the subscriber's suspended packages have been unsuspended
      When I open subscriber details from suspended list
      And  I click on any subscriber record 
      And  I go to Payments tab
      And  I expand payment methods from Postpayment and CreditMemo
      And  I fill out the payment details using cash for suspended subscriber
      And  I post the payment
      Then The subscriber should be unsuspended
