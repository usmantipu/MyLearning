@subscriberDetailsContact
Feature: Subscriber Details - Contact Info

  Background: 
	  Given I open UBO webapp
        And I login with username jcabangonautomation and password Test@1234 
        And I navigate to subscriber list
        And I open specific subscriber details


  @regression2021  @regression2021-subscriberDetailsContact @regression-BIL @TA-154
  Scenario: As a User, I am restricted from saving my Billing Contact changes if the Address 1 field is empty.  
      When I open Billing Contact tab and click edit icon
      And I attempt to save billing contact details with blank Address 1
      Then I should see that save button is disabled

# Potential Bug: if the City field is empty and international address is disabled, website saves the record. Logged https://vispnet.atlassian.net/browse/TA-164
  @regression2021  @regression2021-subscriberDetailsContact @regression-BIL @TA-154
  Scenario: As a User, I am restricted from saving my Billing Contact changes if the City field is empty and international address is disabled.
      When I ensure that international address is as "disabled"
      And I open Billing Contact tab and click edit icon
      And I attempt to save contact details with blank City
      Then I should see an appropriate error message

  @regression2021  @regression2021-subscriberDetailsContact @regression-BIL @TA-154
  Scenario: As a User, I can save my Billing Contact changes if the City field is empty and international address is enabled.
      When I ensure that international address is as "enabled"
      And I open Billing Contact tab and click edit icon
      And I attempt to save contact details with blank City
      Then The contact details should be saved
  
  @regression2021  @regression2021-subscriberDetailsContact @regression-BIL @TA-154
  Scenario: As a User, I am restricted from saving my Billing Contact changes if the State field value is not included in the available dropdown options.
      When I open Billing Contact tab and click edit icon
      And I enter a value in state field that is not available in the dropdown
      Then The previous value is restored as I save the details

  @regression2021  @regression2021-subscriberDetailsContact @regression-BIL @TA-154
  Scenario: As a User, I can view an accurate list of State dropdown options based on my ISP's country setting.
      When I open Billing Contact tab and click edit icon
      Then I verify the state dropdown options are USA based

  @regression2021  @regression2021-subscriberDetailsContact @regression-BIL @TA-154 @eaV19042022
  Scenario: As a User, I can view that the valid Zip field value I enter is automatically formatted based on my ISP's country setting.
      When I open Billing Contact tab and click edit icon
      And I enter details for Billing contact info
      Then I see zip field is automatically formatted
  
  @regression2021  @regression2021-subscriberDetailsContact @regression-BIL @TA-154
  Scenario: As a User, I can view that the valid phone field value I enter in the Billing Contact panel are automatically formatted.
      When I open Billing Contact tab and click edit icon
      And I enter the valid value in phone field
      Then I see phone field is automatically formatted

  @regression2021  @regression2021-subscriberDetailsContact @regression-BIL @TA-154
  Scenario: As a user, I can update the email address/es of the subscriber.
      When I open Billing Contact tab and click edit icon
      And I enter the "valid" value in email field
      Then I can see the updated email addresses of the subscriber

  @regression2021  @regression2021-subscriberDetailsContact @regression-BIL @TA-154
  Scenario: As a User, I am restricted from saving my contact email changes in the Contact info panel if the email field value is invalid.
      When I open Billing Contact tab and click edit icon
      And I enter the "invalid" value in email field
      Then I should see that save button is disabled

  @regression2021  @regression2021-subscriberDetailsContact @regression-BIL @TA-154
  Scenario: As a user, I can update the type of email address/es of the subscriber.
      When I open Billing Contact tab and click edit icon
      And I change the email address type
      Then I can save the contact details
      And I can see that email address type changed successfully

  @regression2021  @regression2021-subscriberDetailsContact @regression-BIL @TA-154
  Scenario: As a user, I can cancel my contact info changes by clicking the Cancel button in the contact info panel.
      When I open Billing Contact tab and click edit icon
      And I edit contact details of a subscriber and cancel it
      Then I should see that previous values are preserved