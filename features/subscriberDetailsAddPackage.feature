@subscriberDetailsPackage
Feature: Subscriber Details - Attach package with the subscriber

  Background: 
		Given I open UBO webapp
		And I login with username jcabangonautomation and password Test@1234
        And I navigate to subscriber list
        And I open any subscriber for package details

@regression2021 @regression2021-subscriberDetailsPackage @regression-BIL
  Scenario: As a user, I can navigate to subscriber details - Package
    When I click on subscriber name
    Then I should See package area open

@regression2021 @regression2021-subscriberDetailsPackage @regression-BIL
  Scenario: As a User, I can Add package while adding it to current invoice 
      When I click on Packages and Invoices tab
      And I click on add package button
      And I search the required package in the package selection pop up
          |Hosting|
      And I click on Add to invoice
      Then A new invoice is open in package and invoice section
      And Total amount of package in new Invoice
      And Save & Configure button become visible
      And I click save and configure 
      Then Package configuration form should open
@regression2021 @regression2021-subscriberDetailsPackage @regression-BIL
  Scenario: As a User, I can Add package with 'add and configure' option
      When I click on Packages and Invoices tab
      And I click on add package button
      And I search the required package in the package selection pop up
          |Hosting|
      And I click add and configure
      Then Package configuration form should open
@regression2021 @regression2021-subscriberDetailsPackage @regression-BIL
  Scenario: As a User, I can Add, configure, and invoice a package
      When I click on Packages and Invoices tab
      And I click on add package button
      And I search the required package in the package selection pop up
          |Hosting|
      And I click add and configure  
      And I click invoice now button
      And Total amount of package in new Invoice
      And Save & Configure button become visible
@regression2021 @regression2021-subscriberDetailsPackage @regression-BIL
  Scenario: As a User, I can Add package and view in logs
      When I click on Packages and Invoices tab
      And I click on add package button
      And I search the required package in the package selection pop up
        |Hosting|
      And I click add and configure 
      And I activate the package
      Then The package is activated with a green check circle icon
      And Package addition information becomes available in the logs section

@regression2021 @regression2021-subscriberDetailsPackage @regression-BIL
  Scenario: As a User, I can open the subscriber's subscribed package configuration panel by clicking on the subscriber package in the Package list in the subscriber's Summary View.
      When I click on Packages and Invoices tab
      And I click on any avalable package
      And I verify Package billing status from package details
        |wireless|
      Then I can see sections such as Package details, Additional information

@regression2021 @regression2021-subscriberDetailsPackage @regression-BIL
  Scenario: As a User, I am restricted from saving my subscriber package Billing Start Date changes if the Billing start date is set to an earlier date than the current date.
      When I click on Packages and Invoices tab
      And I click on any avalable package
      And I verify Package billing status from package details
        |wireless|
      Then I can see Billing start date as disabled
      And Invoice now button is not available

@regression2021 @regression2021-subscriberDetailsPackage @regression-BIL
  Scenario: As a User, if the subscriber package's billing is yet to start, I can view that the Billing Start Date value is editable through the date picker.
      When I click on Packages and Invoices tab
      And I click on add package button
      And I search the required package in the package selection pop up
          |Hosting|
      And I click add and configure
      Then I can see Billing start date as a date picker
      And Invoice now button is present and enabled

@regression2021 @regression2021-subscriberDetailsPackage @regression-BIL
  Scenario: As a User, I cannot see the Invoice Date and Term Start Date fields if the subscriber package's billing has already started
      When I click on Packages and Invoices tab
      And I click on any avalable package
      And I verify Package billing status from package details
        |wireless|
      Then I can see Billing start date as disabled
      And Invoice Date and Term Start Date are not available

@regression2021 @regression2021-subscriberDetailsPackage @regression-BIL
  Scenario: As a User, I can see a prompt asking to apply changes to current invoice or next invoice, on adding a new package
      When I click on Packages and Invoices tab
      And I click on add package button
      And I search the required package in the package selection pop up
          |Hosting|
      And I click on Add to invoice
      Then I should see a prompting asking to apply changes to current invoice or next invoice

@regression2021 @regression2021-subscriberDetailsPackage @regression-BIL @TA-131
  Scenario: As a User, I can Update a pacakge
      When I click on Packages and Invoices tab
      And I click on add package button
      And I search the required package in the package selection pop up
          |Hosting|
      And I click add and configure
      And I click on change package button
      And I click choose a new package
      And I search the required package from the dialog
          |Wireless|
      And I click choose package on popover
      Then I reach apply changes to current invoice or next invioce prompt

@regression2021 @regression2021-subscriberDetailsPackage @regression-BIL @TA-131
  Scenario: As a User, I can view package updates in the logs
      When I click on Packages and Invoices tab
      And I click on add package button
      And I search the required package in the package selection pop up
          |Hosting|
      And I click add and configure
      And I click on change package button
      And I click choose a new package
      And I search the required package from the dialog
          |Wireless|
      And I click choose package on popover
      And I click save button to save configurations
      Then I see change information is entered in the logs

@regression2021 @regression2021-subscriberDetailsPackage @regression-BIL @TA-131
  Scenario: As a User, I can view accurate options for the subscriber Package Auto Actions menu
      When I click on Packages and Invoices tab
      And I click on any avalable package
      And I compare auto-actions options with package in settings
          |Wireless|
      Then I can see correct auto-action options for that package

@regression2021 @regression2021-subscriberDetailsPackage @regression-BIL @TA-131
  Scenario: As a User, I am restricted from viewing the Auto-Hibernate option for the subscriber Package Auto Actions menu if the hibernation feature is disabled for the selected subscriber package
      When I click on Packages and Invoices tab
      And I click on any avalable package
      And I compare hibernation option with package in settings
          |Wireless|
      Then Auto-Hibernate should not be available for such package

@regression2021 @regression2021-subscriberDetailsPackage @regression-BIL @TA-131
  Scenario: As a User, I can Suspend an active package from Subscriber Package Config window
      When I click on Packages and Invoices tab
      And I click on add package button
      And I search the required package in the package selection pop up
          |Hosting|
      And I click add and configure
      And I activate the package
      And I select activated pacakge
      And I click suspend button
      Then a red dot should appear next to package to show it as suspended
      And the subscriber status should become suspended
@regression2021 @regression2021-subscriberDetailsPackage @regression-BIL @TA-131
  Scenario: As a User, I can Reactivate a suspended package from Subscriber Package Config window 
      When I open subscriber details from suspended list
      And I click on any subscriber record
      And I click on any avalable package
      And I select suspended pacakge
      And I click unsuspend button
      Then The package is activated with a green icon
      And the status of subscriber should become green
