@alerts
Feature: Alerts - service

  Background: 
			Given I open UBO webapp
			And I login with username jcabangonautomation and password Test@1234
			And I navigate to subscriber list
      And I open specific subscriber details
 @regression2021 @regression2021-alerts-service @regression2021-alerts @regression-BIL
  Scenario: As a user, I can create the alert for "service" by selecting the "service" from the category field.
      When I go to Logs section
      When I open alerts interface from logs section
      When I create an alert for service
      Then I can see alert is successfully created for service
      Then I deactivate all active alerts related to service
 @regression2021 @regression2021-alerts-service @regression2021-alerts @regression-BIL
  Scenario: As a user, when creating a service alert, user can select the view option as "Alert Flags cascade to links" than the alert will displayed on service detail pane
      When I go to Logs section
      When I open alerts interface from logs section
      When I create an alert for service
      When I update the service alert option as "Alert Flags cascade to links"
      Then I can see alert displayed on service detail pane
      Then I deactivate all applied alerts
 @regression2021 @regression2021-alerts-service @regression2021-alerts @regression-BIL
  Scenario: As a user, when alert is created for "Service" its alert flag is shown in the package detail pane on the top right corner.
      When I go to Logs section
      When I open alerts interface from logs section
      When I create an alert for service
      When I update the service alert option as "Alert Flags cascade to links"
      Then The alert flag is shown in the package pane on the top right corner
      Then I deactivate all applied alerts
 #Bug
 #@regression2021-alerts-service @regression2021-alerts
  Scenario: As a user, when alert is created for "service" its alert flag is shown in the invoice as well.
      When I go to Logs section
      When I open alerts interface from logs section
      When I create an alert for service
      Then I can see service alert in the invoice
      Then I deactivate all active alerts related to service
 @regression2021 @regression2021-alerts-service @regression2021-alerts @regression-BIL
  Scenario: As a user, User can cross the service alert in the banner where alert is showing by clicking the cross "X" on alert in order to deactivate this alert.
      When I go to Logs section
      When I open alerts interface from logs section
      When I create an alert for service
      When I deactivate the service alert by clicking the cross "X"
      Then I can see service alert deactivated
 			
  