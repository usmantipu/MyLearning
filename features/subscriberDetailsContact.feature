@subscriberDetailsContact
Feature: Subscriber Details - Contact Info

  Background: 
	  Given I open UBO webapp
        And I login with username jcabangonautomation and password Test@1234
        #And I login with username dreamteam9 and password str0ngP@ss9
        And I navigate to subscriber list
        And I open specific subscriber details

  @regression2021  @regression2021-subscriberDetailsContact @regression-BIL@TA-68
  Scenario: As a User, I can open the Contact Info panel when I click on the edit button in the subscriber contact summary
        When I open edit contact section 
        Then I should see the contact section

  @regression2021  @regression2021-subscriberDetailsContact @regression-BIL@TA-68
  Scenario: As a User, I am restricted from saving my Primary Contact changes if the First Name field is empty. 
      When I open edit contact section
      And  I attempt to save contact details with blank First Name
      Then I should see an appropriate error message for Firstname

  @regression2021  @regression2021-subscriberDetailsContact @regression-BIL@TA-68
  Scenario: As a User, I am restricted from saving my Primary Contact changes if the Last Name field is empty.
      When I open edit contact section
      And  I attempt to save contact details with blank Last Name
      Then I should see an appropriate error message for Lastname

  @regression2021  @regression2021-subscriberDetailsContact @regression-BIL@TA-68 @TA-437
  Scenario: As a User, I am restricted from saving my Primary Contact changes if the Address 1 field is empty.
      When I open edit contact section
      And  I attempt to save contact details with blank Address1
      Then I should see an appropriate error message for Address1

  @regression2021  @regression2021-subscriberDetailsContact @regression-BIL@TA-68
  #TA-164 logged against save empty city issue
  Scenario: As a User, I am restricted from saving my Primary Contact changes if the City field is empty and international address is disabled.
      When I ensure that international address is as "disabled"
      And I open edit contact section
      And I attempt to save contact details with empty City
      Then I should see an appropriate error message for city

  @regression2021  @regression2021-subscriberDetailsContact @regression-BIL@TA-68
  Scenario: As a User, I can save my Primary Contact changes if the City field is empty and international address is enabled.
      When I ensure that international address is as "enabled"
      And I open edit contact section
      And I attempt to save contact details with empty City
      Then The contact details related to city should be saved

  @regression2021  @regression2021-subscriberDetailsContact @regression-BIL@TA-68
  Scenario: As a User, I am restricted from saving my Primary Contact changes if the State field value is not included in the available dropdown options.
      When I open edit contact section
      And  I enter a value in state field of Primary contact that is not available in the dropdown
      Then The primary contact state previous value is restored as I save the details
  
  @regression2021  @regression2021-subscriberDetailsContact @regression-BIL@TA-68
  Scenario: As a User, I can view an accurate list of State dropdown options based on my ISP's country setting.
      When I open edit contact section
      Then I verify the primary contact state dropdown options are USA based

  @regression2021  @regression2021-subscriberDetailsContact @regression-BIL@TA-68
  Scenario: As a User, I can view the correct label for the State field based on my ISP's country setting.
      When I open edit contact section
      Then The label of state field should be 'state' instead of 'province'

  @regression2021  @regression2021-subscriberDetailsContact @regression-BIL@TA-68 @TA-173 @TA-438
  Scenario: As a User, I can view accurate Billing Contact data for the selected subscriber when I click the Billing Contact tab in the Contact Info panel.
      When I enable and Open Billing Contact tab
      Then I see accurate data in billing contact section

  @regression2021  @regression2021-subscriberDetailsContact @regression-BIL@TA-68
  Scenario: As a User, I am restricted from saving my Billing Contact changes if the First Name field is empty.
      When I open Billing Contact tab and click edit icon
      And I attempt to save billing contact details with blank First Name
      Then I should see an appropriate error message for blank billing Firstname

  @regression2021  @regression2021-subscriberDetailsContact @regression-BIL@TA-68
  Scenario: As a User, I am restricted from saving my Billing Contact changes if the Last Name field is empty.
      When I open Billing Contact tab and click edit icon
      And I attempt to save billing contact details with blank Last Name
      Then I should see an appropriate error message for blank billing Lastname