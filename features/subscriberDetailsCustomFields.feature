@subscriberDetailsCustomFields
Feature: Subscriber Details - Add custom fields

  Background:
      Given I go to Visp URL
	  And I login using my credentials
			|jcabangonautomation|Test@1234|

@regression2021  @regression2021-SubscriberCustomFieldsOptions @regression-BIL @ea28032022
Scenario: As a user, I can view custom fields in the subscriber Custom Fields panel based on the enabled custom fields in the Custom Fields settings panel
		When I navigate to subscriber list
        And I click on any subscriber record
		And I click on custom field from settings
        And I get list of enabled custom fields
        And I click on the close icon
        Then I go to Subscriber custom fields and verify

@regression2021  @regression2021-SubscriberCustomFieldsOptions @regression-BIL
Scenario: As a User, I can revert my subscriber custom field changes by clicking the Cancel button in the subscriber Custom Fields panel
        When I navigate to subscriber list
        And I click on any subscriber record
        And I go to custom fields and enter data
            |Jon TestUser   |jcabangon@visp.net |
        And I click on cancel button
        Then I should see custom fields reverted to previous values

@regression2021  @regression2021-SubscriberCustomFieldsOptions @regression-BIL
Scenario: As a User, I can save values in Custom fields
        When I navigate to subscriber list
        And I click on any subscriber record
        And I go to custom fields and enter data
            |Jon TestUser   |jcabangon@visp.net |
        And I click on save button
        Then I should see Saved successfully toast
        And I should see values in custom fields


@regression2021  @regression2021-SubscriberCustomFieldsOptions @regression-BIL
Scenario: As a User, I am restricted from saving my subscriber custom field changes for an email type custom field if the value is not in a valid email format
        When I navigate to subscriber list
        And I click on any subscriber record
        And I click on custom field from settings
		And I set type of second custom field to email
        And I click on the close icon
        And I go to custom fields and enter data
            |jcabangon |jcabangon@visp |
        Then I recieve error message for invalid email
        And save button should remain disabled
        When I go to custom fields and enter data
            |Jon TestUser |jcabangon@visp.net |
        And I click on save button
        Then I should see Saved successfully toast
        And I should see values in custom fields

@regression2021  @regression2021-SubscriberCustomFieldsOptions @regression-BIL
Scenario: As a User, I am restricted from saving my subscriber custom field changes for an IP address type custom field if the value is not in a valid IP address format
        When I navigate to subscriber list
        And I click on any subscriber record
        And I click on custom field from settings
		And I set type of third custom field to ip address
        And I click on the close icon
        And I go to custom fields and enter invalid ip address
            |Jon TestUser |jcabangon@visp.net |
        Then I recieve error message for invalid ip address
        And save button should remain disabled
        When I go to custom fields and enter data
            |Jon TestUser |jcabangon@visp.net |
        And I click on save button
        Then I should see Saved successfully toast
        And I should see values in custom fields

@regression2021  @regression2021-SubscriberCustomFieldsOptions @regression-BIL
Scenario: As a User, I am restricted from saving my subscriber custom field changes for an MAC address type custom field if the value is not in a valid MAC address format
        When I navigate to subscriber list
        And I click on any subscriber record
        And I click on custom field from settings
		And I set type of fourth custom field to MAC address
        And I click on the close icon
        And I go to custom fields and enter invalid MAC address
            |Jon TestUser |jcabangon@visp.net |
        Then I recieve error message for invalid MAC address
        And save button should remain disabled
        When I go to custom fields and enter data
            |Jon TestUser |jcabangon@visp.net |
        And I click on save button
        Then I should see Saved successfully toast
        And I should see values in custom fields

