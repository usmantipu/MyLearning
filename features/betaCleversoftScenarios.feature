@Betacleversoft
Feature: BetaCleverSoft related scenarios

Use this feature to execute scenarios that require betacleversoft login due to some bug or issue with automationtest.com.

  Background: 
			Given I open UBO webapp
			#And I login with username jcabangonautomation and password Test@1234
            And  I login with username dreamteam9 and password str0ngP@ss9
            And I navigate to subscriber list
            And I open specific subscriber details

#-------Subscriber Details Payments--------#
@regression2021  @BetaSubscriberDetailsPayments @TA-166 @TA-391
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
@regression2021  @BetaSubscriberDetailsPayments @TA-166
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

@regression2021  @BetaSubscriberDetailsPayments @TA-166
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

#-------subscriberDetailsBillingOpt.feature subscrober details billing--------#
@regression2021  @BetaSubscriberDetailsBilling @TA-166
  Scenario: As a user, I can update the Billing Status fields (billing days) of the selected subscriber if Flexible billing is enabled
      When I click on Billing options tab
      And  I open invoicing settings from top right menu
      And  I ensure that invoice defaults has flexible billing option enabled
      And  I close invoicing setting to go back to billing options tab
      Then I should be able to update the billing days
      
#Moved back to subscriberDetailsBillingOpt feature
#@regression2021  @BetaSubscriberDetailsBilling @TA-166
  Scenario: As a user, when I attempt to save my changes to the Term Start Day field, I can view the Term Start Day Change prompt where I can choose to 'apply the changes to the next scheduled invoice', to 'apply changes immediately and reverse charges for all unused days', or to 'apply changes immediately and reverse charges for the unused full months only'.
      When I open the given subscriber's details
      And  I click on Billing options tab
      And  I open invoicing settings from top right menu
      And  I ensure that invoice defaults has flexible billing option enabled
      And  I close invoicing setting to go back to billing options tab
      And  I update Term Start Day on Billing options tab of subscriber
      And  I save the information
      Then I should see a prompt with options
      |Apply changes on the next scheduled invoice.                                           |
      |Apply changes now, reverse charges for ALL unused days, and create new invoice.        |
      |Apply changes now, reverse charges for unused full months only, and create new invoice.|
  #Moved back to subscriberDetailsBillingOpt feature
  #@regression2021  @BetaSubscriberDetailsBilling @TA-166
  Scenario: As a user, I can view that when I choose to 'apply the changes to the next scheduled invoice' option from the Term Start Day Change prompt, the Term Start Day field value displayed is still the previous value but there is an indicator that it will be automatically changed on the next scheduled invoice generation date.
      When I click on Billing options tab
      And  I open invoicing settings from top right menu
      And  I ensure that invoice defaults has flexible billing option enabled in Invoicing settings
      And  I update Term Start Day on Billing options tab of subscriber
      And  I save the information
      And  I select the option in the prompt
          | Apply changes on the next scheduled invoice. |
      Then The Term Start Day will remain the same
      And  There will be an indicator showing that the change will apply in next invoice
  #Moved back to subscriberDetailsBillingOpt feature
  #@regression2021  @BetaSubscriberDetailsBilling @TA-166
  Scenario: As a user, I can view that when I choose to 'apply the changes to apply the changes immediately and reverse charges for the unused days' option from the Term Start Day Change prompt, the Term Start Day field value has been updated with the new value.
      When I click on Billing options tab
      And  I open invoicing settings from top right menu
      And  I ensure that invoice defaults has flexible billing option enabled in Invoicing settings
      And  I update Term Start Day on Billing options tab of subscriber
      And  I save the information
      And  I select the option in the prompt
          | Apply changes now, reverse charges for ALL unused days, and create new invoice. |
      Then The Term Start Day will update
  #Moved back to subscriberDetailsBillingOpt feature
  #@regression2021  @BetaSubscriberDetailsBilling @TA-166
  Scenario: As a user, I can view that when I choose to apply the changes to 'apply the changes immediately and reverse charges for the unused full months only' option from the Term Start Day Change prompt, a reversal credit memo is automatically added to reverse the charges for the unused full months in the subscriber's current term.
      When I click on Billing options tab
      And  I open invoicing settings from top right menu
      And  I ensure that invoice defaults has flexible billing option enabled in Invoicing settings
      And  I update Term Start Day on Billing options tab of subscriber
      And  I save the information
      And  I select the option in the prompt
          | Apply changes now, reverse charges for unused full months only, and create new invoice. |
      Then A reversal credit memo should add to reverse the charges
  #Moved back to subscriberDetailsBillingOpt feature
  #@regression2021  @BetaSubscriberDetailsBilling @TA-166
  Scenario: As a user, when I attempt to save my changes to the Billing Cycle field, I can view the Billing Cycle Change prompt where I can choose to apply the changes to the next scheduled invoice, to apply changes immediately and reverse charges for all unused days, or to apply changes immediately and reverse charges for the unused full months only
      When I click on Billing options tab
      And  I change the billing Cycle
      And  I save the information
      Then I should see a prompt with options
      |Apply changes on the next scheduled invoice.|
      |Apply changes now, reverse charges for ALL unused days, and create new invoice.|
      |Apply changes now, reverse charges for unused full months only, and create new invoice.|
  #Moved back to subscriberDetailsBillingOpt feature
  #@regression2021  @BetaSubscriberDetailsBilling @TA-166
  Scenario: As a user, I can view that when I choose to 'apply the changes to the next scheduled invoice' option from the Billing Cycle Change prompt, the Billing Cycle field value displayed is still the previous value but there is an indicator that it will be automatically changed on the next scheduled invoice generation date.
      When I click on Billing options tab
      And  I open invoicing settings from top right menu
      And  I ensure that invoice defaults has flexible billing option enabled in Invoicing settings
      And  I update Billing cycle
      And  I save the information
      And  I select the option in the prompt
           |apply the changes to the next scheduled invoice|
      Then The billing cycle will remain the same
      And  There will be an indicator on billing cycle showing that the change will apply in next invoice
  #Moved back to subscriberDetailsBillingOpt feature
  #@regression2021  @BetaSubscriberDetailsBilling @TA-166
  Scenario: As a user, I can view that when I choose to 'apply the changes to the next scheduled invoice' option from the Billing Cycle Change prompt, no automated adjustments are made to the subscriber's invoices
      When I click on Billing options tab
      And  I open invoicing settings from top right menu
      And  I ensure that invoice defaults has flexible billing option enabled in Invoicing settings
      And  I take note of transactions count
      And  I update Billing cycle
      And  I save the information
      And  I select the option in the prompt
      |Apply changes on the next scheduled invoice.|
      Then The billing cycle will remain the same
      And  No credit memo will be generated
  #Moved back to subscriberDetailsBillingOpt feature
  #@regression2021  @BetaSubscriberDetailsBilling @TA-166
  Scenario: As a user, I can view that when I choose to 'apply the changes immediately and reverse charges for the unused days' option from the Billing Cycle Change prompt, the Billing Cycle Change field value has been updated with the new value and reversal credit memo is generated.
      When I click on Billing options tab
      And  I open invoicing settings from top right menu
      And  I ensure that invoice defaults has flexible billing option enabled in Invoicing settings
      And  I update Billing cycle
      And  I save the information
      And  I select the option in the prompt
      |Apply changes now, reverse charges for ALL unused days, and create new invoice.|
      Then The billing cycle will be updated
      And  A reversal credit memo should add to reverse the charges
  @regression2021  @BetaSubscriberDetailsBilling @TA-166
  Scenario: As a user, I can click on the Paper Invoice link to open the panel where I can update the paper invoice settings for the selected subscriber
      When I click on Billing options tab
      And  I click on paper invoice link
      Then Paper invoie pop up should open
  @regression2021  @BetaSubscriberDetailsBilling @TA-166
  Scenario: As a user, I can update the subscriber Paper Invoice settings and view that the changes are saved correctly in the Billing Options panel
      When I click on Billing options tab
      And  I click on paper invoice link
      And  I update the paper invoice
      Then Paper invoice should be updated 

  #-------infraLocations.feature Infrastructure Locations--------#
@regression2021  @BetaInfrastructureLocations @Beta-TA-207 @TA-166
    Scenario: As a user, I can view Infrastructure tabs based on Infrastructure Profile types
        #close opened subscriber dock
        When I close the right drawer
        When I navigate to IRM page
        When I click Docsis button of Infrastructure
        Then I can see tabs based on infrastructure profile Docsis
        When I click warehouse button of Infrastructure
        Then I can see tabs based on Infrastructure profile Test warehouse   
			

