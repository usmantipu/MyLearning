@alerts
Feature: Alerts - package

  Background: 
			Given I open UBO webapp
			And I login with username jcabangonautomation and password Test@1234
			And I navigate to subscriber list
      And I open specific subscriber details
      Then I deactivate all applied alerts

 @regression2021 @regression2021-alerts-package @regression2021-alerts @regression-BIL 
  Scenario: As a user, I can create the alert for "package" by selecting the "package" from the category field.
    When I click any subscriber record to add alert
    When I click the Add Alert button from popup menu in logs section
    Then I can see Add Alert form opens
    And  I can create alert by selecting "package" from category field
    Then I deactivate all active alerts related to package


 @regression2021 @regression2021-alerts-package @regression2021-alerts @regression-BIL 
  Scenario: As a user, when alert is created for "Package" without "alerts cascade to links" option then its alert flag is NOT shown in the package pane on the top right corner.
    When I click any subscriber record to add alert
    When I click the Add Alert button from popup menu in logs section
    Then I can see Add Alert form opens
    And  I can create alert by selecting "package" from category field without "alerts cascade to links" option
    Then I can see there is no flag is shwoing in package pane
    Then I deactivate all active alerts related to package
#issue    
 #@regression2021-alerts-package @regression2021-alerts
  Scenario: As a user, when alert is created for "package" its alert flag is shown in the invoice as well.


 @regression2021 @regression2021-alerts-package @regression2021-alerts @regression-BIL 
  Scenario: As a user, If a package has a multiple alerts then the alert with high severity is shown in the package listing.
    When I click any subscriber record to add alert
    When I click the Add Alert button from popup menu in logs section
    Then I can see Add Alert form opens
    And  I can create alert with high seveirty from alert form
    Then I create another alert with less seveirty
    Then I can see that package alert is also visible on package detail window
    Then I can see the alert with high seveirty is shown in the package listing
    Then I deactivate all active alerts related to package


 @regression2021 @regression2021-alerts-package @regression2021-alerts @regression-BIL 
  Scenario: As a user, I can see that package alert is also visible on package detail window when it is opened in subscriber dock
    When I click any subscriber record to add alert
    When I click the Add Alert button from popup menu in logs section
    Then I can see Add Alert form opens
    And  I can create alert by selecting "package" from category field without "alerts cascade to links" option
    Then I can see that package alert is also visible on package detail window
    Then I deactivate all active alerts related to package


 @regression2021 @regression2021-alerts-package @regression2021-alerts @regression-BIL 
  Scenario: As a user, when alert is creating user can select the view option as "Alert Flags cascade to links" then alert will be shown on package pane right corner next to the package
    When I click any subscriber record to add alert
    When I click the Add Alert button from popup menu in logs section
    Then I can see Add Alert form opens
    And  I can create alert by selecting "package" from category field with "alerts cascade to links" option
    Then I can see that flag is shwoing in package pane
    Then I deactivate all active alerts related to package


 @regression2021 @regression2021-alerts-package @regression2021-alerts @regression-BIL 
  Scenario: As a user can create an alert with persistence set to 0 will show a dismissed "X" sign on package alert, which allow the user to dismiss the alert.
    When I click any subscriber record to add alert
    When I click the Add Alert button from popup menu in logs section
    Then I can see Add Alert form opens
    And  I can create alert by selecting "package" from category field without "alerts cascade to links" option
    Then I dismiss the using with "X" sign

			
  