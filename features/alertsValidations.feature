@alerts
Feature: ALerts - validations

  Background: 
			Given I open UBO webapp
			And I login with username jcabangonautomation and password Test@1234
			And I navigate to subscriber list
      And I open specific subscriber details
      Then I deactivate all applied alerts
 @regression2021 @regression2021-alerts-validations @regression2021-alerts @TA-368 @regression-BIL
  Scenario: As a user, i can see that If the persistence is set to 1 then the alert is not dismissed and remain persistence.
    When I go to Logs section
    When I open alerts interface from logs section
    When I create an alert for subscriber
    When I update the same alert and clear "User dismissible" flag
    Then I can see in the history section that persistance is change from 0 to 1
    Then I can see in the subscriber details tab a banner without an "X"
    Then I deactivate all applied alerts
 @regression2021 @regression2021-alerts-validations @regression2021-alerts @regression-BIL
  Scenario: As a user, when alert severity is 1 then flag color is "Green" and icon color match text color.
    When I go to Logs section
    When I open alerts interface from logs section
    When I create an alert with "Amber" icon for subscriber 
    When I update the same alert and set it to "Green" icon
    Then I can see in history logs that severity is changed from "3" to "1"
    Then I deactivate all applied alerts
 @regression2021 @regression2021-alerts-validations @regression2021-alerts @regression-BIL
  Scenario: As a user, when alert severity is 2 then flag color is "Blue" and icon color match text color.
    When I go to Logs section
    When I open alerts interface from logs section
    When I create an alert with "Amber" icon for subscriber 
    When I update the same alert and set it to "Blue" icon
    Then I can see in history logs that severity is changed from "3" to "2"
    Then I deactivate all applied alerts
 @regression2021 @regression2021-alerts-validations @regression2021-alerts @regression-BIL
  Scenario: As a user, when alert severity is 3 then flag color is "Amber" and icon color match text color.
    When I go to Logs section
    When I open alerts interface from logs section
    When I create an alert with "Green" icon for subscriber
    When I update the same alert and set it to "Amber" icon
    Then I can see in history logs that severity is changed from "1" to "3"
    Then I deactivate all applied alerts
 @regression2021 @regression2021-alerts-validations @regression2021-alerts @regression-BIL
  Scenario: As a user, when alert severity is 4 then flag color is "Red" and icon color match text color.
    When I go to Logs section
    When I open alerts interface from logs section
    When I create an alert with "Green" icon for subscriber
    When I update the same alert and set it to "Red" icon
    Then I can see in history logs that severity is changed from "1" to "4"
    Then I deactivate all applied alerts
 @regression2021 @regression2021-alerts-validations @regression2021-alerts @regression-BIL
  Scenario: As a user, when alert severity is 3 then subscriber is highlighted in color "Amber" in subscriber listing.
    When I go to Logs section
    When I open alerts interface from logs section
    When I create an alert for subscriber with "Amber" icon and "alert cascade to links" option
    Then The subscriber record in subscriber listing gets highlighted with a "warning" icon
    Then I deactivate all applied alerts
 @regression2021 @regression2021-alerts-validations @regression2021-alerts @regression-BIL
  Scenario: As a user, when alert severity is 4 then subscriber is highlighted in color "Red" in subscriber listing.
    When I go to Logs section
    When I open alerts interface from logs section
    When I create an alert for subscriber with "Red" icon and "alert cascade to links" option
    Then The subscriber record in subscriber listing gets highlighted with a "error" icon
    Then I deactivate all applied alerts
 @regression2021 @regression2021-alerts-validations @regression2021-alerts @regression-BIL
  Scenario: As a user, If a subscriber have a multiple alerts then the alert with high severity is shown in the subscriber listing.
    When I go to Logs section
    When I open alerts interface from logs section
    When I create an alert for subscriber with "Amber" icon and "alert cascade to links" option
    When I open alerts interface from logs section
    When I create an alert for subscriber with "Red" icon and "alert cascade to links" option
    Then The subscriber record in subscriber listing gets highlighted with a "error" icon
    Then I deactivate all applied alerts
 @regression2021 @regression2021-alerts-validations @regression2021-alerts @regression-BIL
  Scenario: As a user, when changes are made in the alert each time its logged in alert history section.
    When I go to Logs section
    When I open alerts interface from logs section
    When I create an alert for subscriber
    When I edit the same alert and update "User dismissible", "description", "Severity"
    Then I can see all the alert related changes in the history logs
    Then I deactivate all applied alerts
 @regression2021 @regression2021-alerts-validations @regression2021-alerts @regression-BIL
  Scenario: As a user, I can view that who made the changes in alerts and any user can view the changes.
    When I go to Logs section
    When I open alerts interface from logs section
    When I create an alert for subscriber
    When I edit the same alert and update "User dismissible", "description", "Severity"
    Then I can see who made alert related changes in the history logs
    Then I deactivate all applied alerts
 			
  