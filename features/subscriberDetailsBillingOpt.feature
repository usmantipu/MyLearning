@subscriberDetailsBillingOptions
Feature: Subscriber Details - Manage billing options

  Background: 
			Given I open UBO webapp
			    And I login with username jcabangonautomation and password Test@1234
          #And I login with username dreamteam9 and password str0ngP@ss9
          #And I login with username automationbeta and password Testing1!
          And I navigate to subscriber list
          And I open any subscriber for package details


@regression2021 @regression2021-subscriberDetailsBillingOptions @regression-BIL @TA-921
  Scenario: As a user, I can navigate to Billing options
      When I click on Billing options tab
      Then I can see Billing options

#Moved to betaCleversoftScenarios.feature
#@regression2021 @regression2021-subscriberDetailsBillingOptions @regression-BIL @Beta-TA-112 @TA-921
  Scenario: As a user, I can update the Billing Status fields (billing days) of the selected subscriber if Flexible billing is enabled
      When I click on Billing options tab
      And  I open invoicing settings from top right menu
      And  I ensure that invoice defaults has flexible billing option enabled
      And  I close invoicing setting to go back to billing options tab
      Then I should be able to update the billing days


@regression2021 @regression2021-subscriberDetailsBillingOptions @regression-BIL @TA-921
  Scenario: As a user, I am restricted from updating the Billing Status fields (billing days) of the selected subscriber if Flexible billing is disabled
      When I click on Billing options tab
      And  I open invoicing settings from top right menu
      And  I ensure that invoice defaults has flexible billing option disabled
      And  I close invoicing setting to go back to billing options tab
      Then I should NOT be able to update the billing days


@regression2021 @regression2021-subscriberDetailsBillingOptions @regression-BIL @TA-921
  Scenario: As a user, I can view that the Invoice Day is based on the Invoice Day field in the Invoice Defaults settings panel if Flexible billing is disabled
      When I click on Billing options tab
      And  I open invoicing settings from top right menu
      And  I ensure that invoice defaults has flexible billing option disabled
      And  I take note of invoice day in invoice settings
      And  I close invoicing setting to go back to billing options tab
      Then I should see Invoice day is same as set in invoicing settings


@regression2021 @regression2021-subscriberDetailsBillingOptions @regression-BIL @TA-921
  Scenario: As a user, I can view that the Term start Day is based on the Term start Day field in the Invoice Defaults settings panel if Flexible billing is disabled
      When I open invoicing settings from top right menu
      And  I ensure that invoice defaults has flexible billing option disabled
      And  I take note of term start day in invoice settings
      And  I close invoicing setting to go back to billing options tab
    # And  I open another subscriber's details
      And  I open the given subscriber's details
      And  I click on Billing options tab
      Then I should see Term Start Day is same as set in invoicing settings
      
#Commented in betaCleversoftScenarios.feature
@regression2021 @regression2021-subscriberDetailsBillingOptions @regression-BIL @Beta-TA-112 @TA-413 @TA-380 @TA-921
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

#Commented in betaCleversoftScenarios.feature
@regression2021 @regression2021-subscriberDetailsBillingOptions @regression-BIL @Beta-TA-112 @TA-456 @TA-921
  Scenario: As a user, I can view that when I choose to 'apply the changes to the next scheduled invoice' option from the Term Start Day Change prompt, the Term Start Day field value displayed is still the previous value but there is an indicator that it will be automatically changed on the next scheduled invoice generation date.
      When I open the given subscriber's details
      And  I click on Billing options tab
      And  I open invoicing settings from top right menu
      And  I ensure that invoice defaults has flexible billing option enabled in Invoicing settings
      And  I update Term Start Day on Billing options tab of subscriber
      And  I save the information
      And  I select the option in the prompt
          | Apply changes on the next scheduled invoice. |
      Then The Term Start Day will remain the same
      And  There will be an indicator showing that the change will apply in next invoice

#Commented in betaCleversoftScenarios.feature
@regression2021 @regression2021-subscriberDetailsBillingOptions @regression-BIL @Beta-TA-112 @TA-921
  Scenario: As a user, I can view that when I choose to 'apply the changes to apply the changes immediately and reverse charges for the unused days' option from the Term Start Day Change prompt, the Term Start Day field value has been updated with the new value.
      When I open the given subscriber's details
      And  I click on Billing options tab
      And  I open invoicing settings from top right menu
      And  I ensure that invoice defaults has flexible billing option enabled in Invoicing settings
      And  I update Term Start Day on Billing options tab of subscriber
      And  I save the information
      And  I select the option in the prompt
          | Apply changes now, reverse charges for ALL unused days, and create new invoice. |
      Then The Term Start Day will update

#Commented in betaCleversoftScenarios.feature
@regression2021 @regression2021-subscriberDetailsBillingOptions @regression-BIL @Beta-TA-112 @TA-921
  Scenario: As a user, I can view that when I choose to apply the changes to 'apply the changes immediately and reverse charges for the unused full months only' option from the Term Start Day Change prompt, a reversal credit memo is automatically added to reverse the charges for the unused full months in the subscriber's current term.
      When I open the given subscriber's details
      And  I click on Billing options tab
      And  I open invoicing settings from top right menu
      And  I ensure that invoice defaults has flexible billing option enabled in Invoicing settings
      And  I update Term Start Day on Billing options tab of subscriber
      And  I save the information
      And  I select the option in the prompt
          | Apply changes now, reverse charges for unused full months only, and create new invoice. |
      Then A reversal credit memo should add to reverse the charges

@regression2021 @regression2021-subscriberDetailsBillingOptions @regression-BIL @TA-921
  Scenario: As a user, when I change the Tax setting for the selected subscriber, I can view the Subscriber Tax Setting Change prompt where I can choose to 'apply the changes automatically after saving', to 'apply the changes manually after saving', or to 'apply the changes only to subsequently added invoice items and not to the current invoice items'. 
      When I open the given subscriber's details
      And  I click on Billing options tab
      And  I update the tax
      Then I should see a prompt with options
      |Apply automatically after Save|
      |Apply manually after Save|
      |Apply only to subsequently added invoice items and not to current items.|


@regression2021 @regression2021-subscriberDetailsBillingOptions @regression-BIL @TA-921
  Scenario: As a user, I can update the Tax setting of the selected subscriber and view that the changes are saved correctly.
      When I open the given subscriber's details
      And  I click on Billing options tab
      And  I update the tax
      And  I choose the option from the prompt
      |Apply only to subsequently added invoice items and not to current items.|
      And  I save the setting
      Then The tax field should be updated


@regression2021 @regression2021-subscriberDetailsBillingOptions @regression-BIL @Auto-TA-132 @TA-414 @TA-921
  Scenario: As a user, when I choose the 'apply changes automatically after saving' option in the Subscriber Tax Setting Change prompt, I can view that the new subscriber tax setting has been applied to all the applicable current invoice items in open invoices after saving the changes
      When I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And I click on add package button
      And I search the required package in the package selection pop up
          |Internet|
      And I click on Add to invoice
      And I click save and configure
      And I close newly added package
      When I click on Billing options tab
      And  I uncheck Tax Exempt option if its already checked
      And  I open invoicing settings from top right menu
      And  I define tax item in invoice Tax settings
           |GST|50|
      And  I take note of Tax amounts in an open invoice
      And  I update the tax
      And  I choose the option from the prompt
           |Apply automatically after Save|
      And  I save the information
      Then Tax setting should be applied to all applicable items in the open invoice


@regression2021 @regression2021-subscriberDetailsBillingOptions @regression-BIL @Auto-TA-132 @TA-414-2nd  @TA-921
  Scenario: As a user, I can choose the Tax Exempt option for the selected subscriber
      When I open the given subscriber's details
      And  I click on Billing options tab
      And  I uncheck Tax Exempt option if its already checked
      And  I open invoicing settings from top right menu
      And  I define tax item in invoice Tax settings
           |GST|50|
      And  I take note of Tax amounts in an open invoice
      And  I update the Tax Exempt option
      And  I choose the option from the prompt
      |Apply only to subsequently added invoice items and not to current items.|
      And  I save the information
      Then The tax will be exempted will be saved

@regression2021 @regression2021-subscriberDetailsBillingOptions @regression-BIL @Auto-TA-132 @TA-921
  Scenario: As a user, I can view an accurate list of tax options in the Billing Options panel of the Subscriber dock
      When I open the given subscriber's details
      And  I click on Billing options tab
      And  I uncheck Tax Exempt option if its already checked
      And  I open invoicing settings from top right menu
      And  I define tax item in invoice Tax settings
           |GST|50|
      And  I take note of active taxes in invoicing settings
      And  I verify available taxes in Tax dropdown
      Then All active taxes should be available

#Commented in betaCleversoftScenarios.feature
@regression2021 @regression2021-subscriberDetailsBillingOptions @regression-BIL @TA-921
  Scenario: As a user, when I attempt to save my changes to the Billing Cycle field, I can view the Billing Cycle Change prompt where I can choose to apply the changes to the next scheduled invoice, to apply changes immediately and reverse charges for all unused days, or to apply changes immediately and reverse charges for the unused full months only
      When I open the given subscriber's details
      And  I click on Billing options tab
      And  I open invoicing settings from top right menu
      And  I ensure that invoice defaults has flexible billing option enabled in Invoicing settings
      And  I change the billing Cycle
      And  I save the information
      Then I should see a prompt with options
      |Apply changes on the next scheduled invoice.|
      |Apply changes now, reverse charges for ALL unused days, and create new invoice.|
      |Apply changes now, reverse charges for unused full months only, and create new invoice.|

#Commented in betaCleversoftScenarios.feature      
@regression2021 @regression2021-subscriberDetailsBillingOptions @regression-BIL @TA-921
  Scenario: As a user, I can view that when I choose to 'apply the changes to the next scheduled invoice' option from the Billing Cycle Change prompt, the Billing Cycle field value displayed is still the previous value but there is an indicator that it will be automatically changed on the next scheduled invoice generation date.
      When I open the given subscriber's details
      And  I click on Billing options tab
      And  I open invoicing settings from top right menu
      And  I ensure that invoice defaults has flexible billing option enabled in Invoicing settings
      And  I update Billing cycle
      And  I save the information
      And  I select the option in the prompt
           |apply the changes to the next scheduled invoice|
      Then The billing cycle will remain the same
      And  There will be an indicator on billing cycle showing that the change will apply in next invoice


#Commented in betaCleversoftScenarios.feature
@regression2021 @regression2021-subscriberDetailsBillingOptions @regression-BIL @TA-921
  Scenario: As a user, I can view that when I choose to 'apply the changes to the next scheduled invoice' option from the Billing Cycle Change prompt, no automated adjustments are made to the subscriber's invoices
      When I open the given subscriber's details
      And  I click on Billing options tab
      And  I open invoicing settings from top right menu
      And  I ensure that invoice defaults has flexible billing option enabled in Invoicing settings
      And  I take note of transactions count
      And  I update Billing cycle
      And  I save the information
      And  I select the option in the prompt
      |Apply changes on the next scheduled invoice.|
      Then The billing cycle will remain the same
      And  No credit memo will be generated


#Commented in betaCleversoftScenarios.feature     
@regression2021 @regression2021-subscriberDetailsBillingOptions @regression-BIL @TA-357 @TA-921
  Scenario: As a user, I can view that when I choose to 'apply the changes immediately and reverse charges for the unused days' option from the Billing Cycle Change prompt, the Billing Cycle Change field value has been updated with the new value and reversal credit memo is generated.
      When I open the given subscriber's details
      And  I click on Billing options tab
      And  I open invoicing settings from top right menu
      And  I ensure that invoice defaults has flexible billing option enabled in Invoicing settings
      And  I update Billing cycle
      And  I save the information
      And  I select the option in the prompt
      |Apply changes now, reverse charges for ALL unused days, and create new invoice.|
      Then The billing cycle will be updated
      And  A reversal credit memo should add to reverse the charges

#Moved to betaCleversoftScenarios.feature
#@regression2021 @regression2021-subscriberDetailsBillingOptions @regression-BIL @Beta-TA-132 @TA-921
  Scenario: As a user, I can click on the Paper Invoice link to open the panel where I can update the paper invoice settings for the selected subscriber
      When I open the given subscriber's details
      And  I click on Billing options tab
      And  I click on paper invoice link
      Then Paper invoie pop up should open


#Moved to betaCleversoftScenarios.feature 
@regression2021 @regression2021-subscriberDetailsBillingOptions @regression-BIL @Beta-TA-132 @TA-921
  Scenario: As a user, I can update the subscriber Paper Invoice settings and view that the changes are saved correctly in the Billing Options panel
      When I open the given subscriber's details
      And  I click on Billing options tab
      And  I click on paper invoice link
      And  I update the paper invoice
      Then Paper invoice should be updated


@regression2021 @regression2021-subscriberDetailsBillingOptions @regression-BIL @Auto-TA-132 @TA-921
  Scenario: As a User, I can update the Late Fee option and details of the selected subscriber and view that the changes are saved and retrieved correctly
      When I open the given subscriber's details
      And  I click on Billing options tab
      And  I update the Late fee option
      Then Late fee option should be updated     


@regression2021 @regression2021-subscriberDetailsBillingOptions @regression-BIL @Auto-TA-132 @TA-415 @TA-921
  Scenario: As a User, I can update the Grace Period option and details of the selected subscriber and view that the changes are saved and retrieved correctly
      When I open the given subscriber's details
      And  I open Auto Actions settings from top right menu
      And I ensure Grace Period Allow Cutom option is enabled
      And I click on Billing options tab
      And I update the Grace period option
      Then Grace period option should be updated
