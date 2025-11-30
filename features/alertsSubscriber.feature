@alerts

@TA-923

Feature: Alerts - subcribers

  Background: 
			Given I open UBO webapp
			And I login with username jcabangonautomation and password Test@1234
			And I navigate to subscriber list
      And I open specific subscriber details
      Then I deactivate all applied alerts

 @regression2021 @regression2021-alerts-subscribers @regression2021-alerts @regression-BIL
  Scenario: As a User, I can navigate to Logs section of Subscribers List
    And I go to logs section
    Then I can see a separate tab for Alerts

 @regression2021 @regression2021-alerts-subscribers @regression2021-alerts @regression-BIL
  Scenario: As a user, user can add the description of the alert.
    When I go to logs section
    And I open alerts interface
    And I create an alert for the subscriber
    And I open the newly added alert
    Then I can add description of the alert

 @regression2021 @regression2021-alerts-subscribers @regression2021-alerts @regression-BIL
  Scenario: As a user, When "Alert" is creating user can select the severity of Alert from Green to Red.
    When I go to logs section
    And I open alerts interface
    And I create an alert for the subscriber
    And I open the newly added alert
    Then I can update the severity of alert from Green to Red

 @regression2021 @regression2021-alerts-subscribers @regression2021-alerts @regression-BIL
  Scenario: As a user, when alert is creating user can check / uncheck the Active checkbox.
    When I go to logs section
    And  I open alerts interface
    And I create an alert for the subscriber
    And  I open the newly added alert
    Then I can update the alert and check and uncheck the active checkbox

 @regression2021 @regression2021-alerts-subscribers @regression2021-alerts @regression-BIL
  Scenario: As a user, when alert is creating user can select the persistence option "User dismissible".
    When I go to logs section
    And  I open alerts interface
    And I create an alert for the subscriber
    And  I open the newly added alert
    Then I can create an alert with persistence option of User dismissible

 @regression2021 @regression2021-alerts-subscribers @regression2021-alerts @regression-BIL
  Scenario: As a user, when creating an alert, the user can select the view option as "Alert Flags cascade to links"
    When I go to logs section
    And  I open alerts interface
    Then I can create an alert with option Alert Flags cascade to links

 @regression2021 @regression2021-alerts-subscribers @regression2021-alerts @regression-BIL
  Scenario: As a user, User can edit the alert from subscribers log sections
    When I go to logs section
    And I create an alert for the subscriber
    And  I open the newly added alert
    Then I can change alert details like description, active, alert cascade to links, user dismissable, and priority

 @regression2021 @regression2021-alerts-subscribers @regression2021-alerts @regression-BIL
  Scenario: As a user, when changes are made in the alert than all changes are logged and tracked
    When I go to logs section
    And  I open alerts interface
    And I create an alert for the subscriber
    And  I open the newly added alert
    And I can change alert details like description, active, alert cascade to links, user dismissable, and priority
    Then I can see in history logs for "Created by"
    Then I can see in history logs "Updated by", "Message changed from", "Persistence changed from", "Cascade changed from", and "Active changed from"

 @regression2021 @regression2021-alerts-subscribers @regression2021-alerts @regression-BIL
  Scenario: As a user, I can create the alert for "subscriber" by selecting the "subscriber" from the category field.
    When I go to logs section
    And  I open alerts interface
    And I create an alert for subscriber by selecting value from category field
    And  I open the newly added alert
    Then I can see that alert category as Customer

 @regression2021 @regression2021-alerts-subscribers @regression2021-alerts @regression-BIL
  Scenario: As a user, User can cross the alert in the banner where alert is showing by clicking the cross "X" on alert in order to deactivate this alert.
    When I go to logs section
    And  I open alerts interface
    And I create an alert for the subscriber with option "Alert Flags cascade to links"

 @regression2021 @regression2021-alerts-subscribers @regression2021-alerts @regression-BIL
  Scenario: As a user, I can see that the persistence of alert is set to 0 once it is dismissed using on banner "X"
    When I go to logs section
    And  I open alerts interface
    And I create an alert for the subscriber with option "User dismissible"
    And I can see the alert as a banner on subscribers dock
    Then I can dismiss the alert using cross button on the banner
