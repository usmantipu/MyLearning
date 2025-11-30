@SubList
Feature: Payment gateways and credit card payments

  Background: 
			Given I open UBO webapp
			And I login with username jcabangonautomation and password Test@1234
#      And I ensure that payment gateway for credit card is configured
#      |ProPay|
#      |Elavon|
#      |Paydup|
#      |Authorize.net|
#      |IPPAY|
      #flag_avs_zip flag should be enabled for the ISP for Billing codes to work
#Done
@regression2021  @regression2021-paymentGateway @regression-BIL
  Scenario: As a user, I can post a credit card payment when payment gateway for credit card is Propay
      When I ensure that payment gateway for credit card is configured
      |ProPay|
			And I navigate to subscriber list
      And I open specific subscriber details
      And I go to Payments tab
      And  I open payment options tab under Payments
      And  I expand payment methods from payment options
      And I make a subscriber payment via credit card that has Propay as default payment gateway 
      |4747474747474747|1|2024|85284|
      And  I save the Payment Option Details 
			Then The payment options should be saved successfully
@regression2021  @regression2021-paymentGateway @regression-BIL
  Scenario: As a user, I CANNOT post a credit card payment when payment gateway for credit card is Propay
      When I ensure that payment gateway for credit card is configured
      |ProPay|
			And I navigate to subscriber list
      And I open specific subscriber details
      And I go to Payments tab
      And  I open payment options tab under Payments
      And  I expand payment methods from payment options
			When I make a subscriber payment via credit card that has Propay as default payment gateway  
			|4747474747474747|1|2024|99994|
      And  I save the Payment Option Details
      And  I go to post payment and enter amount
      And  I post the payment
      Then The payment from Propay transaction should fail
#We cannot test a success scenario for Elavon with test data
#Done
@regression2021  @regression2021-paymentGateway @regression-BIL
  Scenario: As a user, I can post a credit card payment when payment gateway for credit card is Elavon
      When I ensure that payment gateway for credit card is configured
      |Elavon|
			And I navigate to subscriber list
      And I open specific subscriber details
      And I go to Payments tab
      And  I open payment options tab under Payments
      And  I expand payment methods from payment options
      When I make a subscriber payment via credit card that has Elavon as default payment gateway 
      |4747474747474747|1|2024|90000|
      And  I save the Payment Option Details
  #    And  I go to post payment and enter amount
  #    And  I post the payment
      Then The payment should fail with AVS error
#We cannot test a success scenario for Oriental bank with test data
#Done
@regression2021  @regression2021-paymentGateway @TA-512 @regression-BIL
  Scenario: As a user, I can post a credit card payment when payment gateway for credit card is Oriental bank
      When I ensure that payment gateway for credit card is configured
      |Oriental Bank (Puerto Rico)|
			And I navigate to subscriber list
      And I open specific subscriber details
      And I go to Payments tab
      And  I open payment options tab under Payments
    #  And  I expand payment methods from payment options
      When I make a subscriber payment via credit card that has Oriental bank as default payment gateway 
      |4111111111111111|1|2024|85284|
      And  I save the Payment Option Details
      Then The payment should fail with AVS error
#We cannot test a success scenario for Payment express with test data
#Done
@regression2021  @regression2021-paymentGateway @regression-BIL
  Scenario: As a user, I can post a credit card payment when payment gateway for credit card is Payment express
      When I ensure that payment gateway for credit card is configured
      |Payment Express|
			And I navigate to subscriber list
      And I open specific subscriber details
      And I go to Payments tab
      And  I open payment options tab under Payments
    #  And  I expand payment methods from payment options
      When I make a subscriber payment via credit card that has Payment express as default payment gateway 
      |4111111111111111|1|2024|85284|
      And  I save the Payment Option Details
      Then The payment for payment express should fail with AVS error
#Done
@regression2021  @regression2021-paymentGateway @regression-BIL
  Scenario: As a user, I can post a credit card payment when payment gateway for credit card is Paydup
      When I ensure that payment gateway for credit card is configured
      |PaydUp|
			And I navigate to subscriber list
      And I open specific subscriber details
      And I go to Payments tab
      And  I open payment options tab under Payments
      When I make a subscriber payment via credit card that has Paydup as default payment gateway
      |4111111111111111|10|25|77777| 
      And  I save the Payment Option Details 
			Then The payment options should be saved successfully
#Done      
@regression2021  @regression2021-paymentGateway @regression-BIL
  Scenario: As a user, I CANNOT post a credit card payment when payment gateway for credit card is Paydup
      When I ensure that payment gateway for credit card is configured
      |PaydUp|
			And I navigate to subscriber list
      And I open specific subscriber details
      And I go to Payments tab
      And  I open payment options tab under Payments
      When I make a subscriber payment via credit card that has Paydup as default payment gateway 
      |4111111111111111|10|25|90000|
      And  I save the Payment Option Details
      And  I go to post payment and enter amount
      And  I post the payment
      Then The payment transaction should fail with AVS error
#Done #issue in error message
@regression2021  @regression2021-paymentGateway @regression-BIL
  Scenario: As a user, I CANNOT post a credit card payment when payment gateway for credit card is Authorize.net
      When I ensure that payment gateway for credit card is configured
      |Authorize.net|
			And I navigate to subscriber list
      And I open specific subscriber details
      And I go to Payments tab
      And  I open payment options tab under Payments
    #  And  I expand payment methods from payment options
      When I make a subscriber payment via credit card that has Autorize.net as default payment gateway 
      |4111111111111111|1|2024|46205|
      And  I save the Payment Option Details
      And  I go to post payment and enter amount
      And  I post the payment
      Then The payment transaction should fail with AVS error
#Done #issue in success message
@regression2021  @regression2021-paymentGateway @regression-BIL
  Scenario: As a user, I can post a credit card payment when payment gateway for credit card is Authorize.net
      When I ensure that payment gateway for credit card is configured
      |Authorize.net|
			And I navigate to subscriber list
      And I open specific subscriber details
      And I go to Payments tab
      And  I open payment options tab under Payments
    #  And  I expand payment methods from payment options
      When I make a subscriber payment via credit card that has Autorize.net as default payment gateway 
      |4111111111111111|1|2024|46217|
      And  I save the Payment Option Details
      And  I go to post payment and enter amount
      And  I post the payment
      Then The payment transaction should be successful
#Done
@regression2021  @regression2021-paymentGateway @regression-BIL
  Scenario: As a user, I can post a credit card payment when payment gateway for credit card is IPpay
      When I ensure that payment gateway for credit card is configured
      |IPPAY|
			And I navigate to subscriber list
      And I open specific subscriber details
      And I go to Payments tab
      And  I open payment options tab under Payments
    #  And  I expand payment methods from payment options
      When I make a subscriber payment via credit card that has IPpay as default payment gateway
      |4111111111111111|1|2024|39999| 
      And  I save the Payment Option Details 
			Then The payment options should be saved successfully
#Done      
@regression2021  @regression2021-paymentGateway @regression-BIL
  Scenario: As a user, I CANNOT post a credit card payment when payment gateway for credit card is IPpay
      When I ensure that payment gateway for credit card is configured
      |IPPAY|
			And I navigate to subscriber list
      And I open specific subscriber details
      And I go to Payments tab
      And  I open payment options tab under Payments
    #  And  I expand payment methods from payment options
      When I make a subscriber payment via credit card that has IPpay as default payment gateway 
      |4111111111111111|10|2023|90000|
      And  I save the Payment Option Details
      And  I go to post payment and enter amount
      And  I post the payment
      Then The IPPAY payment transaction should fail with AVS error
#Done
@regression2021  @regression2021-paymentGateway @regression-BIL
  Scenario: As a user, I can post a credit card payment when payment gateway for credit card is PlugnPlay
      When I ensure that payment gateway for credit card is configured
      |PlugNPay|
			And I navigate to subscriber list
      And I open specific subscriber details
      And I go to Payments tab
      And  I open payment options tab under Payments
      And  I expand payment methods from payment options
      When I make a subscriber payment via credit card that has PlugnPlay as default payment gateway 
      |4111111111111111|1|2024|09999|
      And  I save the Payment Option Details 
			Then The payment options should be saved successfully
#Done
@regression2021  @regression2021-paymentGateway @regression-BIL
  Scenario: As a user, I CANNOT post a credit card payment when payment gateway for credit card is PlugnPlay
      When I ensure that payment gateway for credit card is configured
      |PlugNPay|
			And I navigate to subscriber list
      And I open specific subscriber details
      And I go to Payments tab
      And  I open payment options tab under Payments
      And  I expand payment methods from payment options
      When I make a subscriber payment via credit card that has PlugnPlay as default payment gateway 
      |4111111111111111|1|2024|39999|
      And  I save the Payment Option Details
      And  I go to post payment and enter amount
      And  I post the payment
      Then The payment from PlugnPay should fail
#Done
@regression2021  @regression2021-paymentGateway @regression-BIL
  Scenario: As a user, I can post a credit card payment when payment gateway for credit card is Stripe
      When I ensure that payment gateway for credit card is configured
      |Stripe|
			And I navigate to subscriber list
      And I open specific subscriber details
      And I go to Payments tab
      And  I open payment options tab under Payments
    #  And  I expand payment methods from payment options
      When I make a subscriber payment via credit card that has Stripe as default payment gateway 
      |4242424242424242|1|2024|33333|
      And  I save the Payment Option Details 
			Then The payment options should be saved successfully
#Done #issue in error message
@regression2021  @regression2021-paymentGateway @TA-484 @regression-BIL
  Scenario: As a user, I CANNOT post a credit card payment when payment gateway for credit card is Stripe
      When I ensure that payment gateway for credit card is configured
      |Stripe|
			And I navigate to subscriber list
      And I open specific subscriber details
      And I go to Payments tab
      And  I open payment options tab under Payments
    #  And  I expand payment methods from payment options
      When I make a subscriber payment via credit card that has Stripe as default payment gateway 
      |4242424242424242|1|2024|39999|
      And  I save the Payment Option Details
      And  I go to post payment and enter amount
      And  I post the payment
      Then The payment transaction for STRIPE should fail with AVS error