@subscriberDetailsBillingOptionsThree
Feature: Subscriber Details - Manage billing options

  Background: 
			Given I open UBO webapp
			And I login with username jcabangonautomation and password Test@1234
            When I navigate to subscriber list
            When I search a subscriber from search bar having customer ID "2037250"
            When I open prospect for package details
            
#Prorate settings Y (add prorate to full term.)
@Dateset-1 @TA-609 @PartThree-Set-Y
  Scenario: As a user, I can verify full term count when before the Term Start Day and Billing Cycle is Monthly and Prorate is Y Term Start Day advance is applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is checked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Add prorate to full term." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day and Term start day are Post but same
      And  I ensure "Monthly" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges before the Invoice Day and before the Term Start Day "beforetheInvoiceDay", "beforetheTermStartDay", "beforeTSDay", "Monthly", "3", "4"
      And  I click on the term end date
      Then I verify the "4" as FULLTERM COUNT

#Prorate settings Y (add prorate to full term.)
@Dateset-2 @TA-609 @PartThree-Set-Y
  Scenario: As a user, I can verify full term count when before the Term Start Day and Billing Cycle is Quarterly and Prorate is Y Term Start Day advance is applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is checked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Add prorate to full term." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day and Term start day are Post but same
      And  I ensure "Quarterly" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges before the Invoice Day and before the Term Start Day "beforetheInvoiceDay", "beforetheTermStartDay", "beforeTSDay", "Quarterly", "9", "4"
      And  I click on the term end date
      Then I verify the "4" as FULLTERM COUNT

#Prorate settings Y (add prorate to full term.)
@Dateset-3 @TA-609 @PartThree-Set-Y
  Scenario: As a user, I can verify full term count when before the Term Start Day and Billing Cycle is Semi-annually and Prorate is Y Term Start Day advance is applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is checked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Add prorate to full term." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day and Term start day are Post but same
      And  I ensure "Semi-annually" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges before the Invoice Day and before the Term Start Day "beforetheInvoiceDay", "beforetheTermStartDay", "beforeTSDay", "Semi-annually", "18", "4"
      And  I click on the term end date
      Then I verify the "4" as FULLTERM COUNT

#Prorate settings Y (add prorate to full term.)
@Dateset-4 @TA-609 @PartThree-Set-Y
  Scenario: As a user, I can verify full term count when before the Term Start Day and Billing Cycle is Annually and Prorate is Y Term Start Day advance is applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is checked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Add prorate to full term." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day and Term start day are Post but same
      And  I ensure "Annually" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges before the Invoice Day and before the Term Start Day "beforetheInvoiceDay", "beforetheTermStartDay", "beforeTSDay", "Annually", "24", "3"
      And  I click on the term end date
      Then I verify the "3" as FULLTERM COUNT

#Prorate settings M (Include prorate as part of term for terms longer than one month.)
@Dateset-5 @TA-609 @PartThree-Set-M
  Scenario: As a user, I can verify full term count when before the Term Start Day and Billing Cycle is Monthly and Prorate is Y Term Start Day advance is applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is checked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Include prorate as part of term for terms longer than one month." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day and Term start day are Post but same
      And  I ensure "Monthly" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges before the Invoice Day and before the Term Start Day "beforetheInvoiceDay", "beforetheTermStartDay", "beforeTSDay", "Monthly", "3", "4"
      And  I click on the term end date
      Then I verify the "4" as FULLTERM COUNT

#Prorate settings M (Include prorate as part of term for terms longer than one month.)
@Dateset-6 @TA-609 @PartThree-Set-M
  Scenario: As a user, I can verify full term count when before the Term Start Day and Billing Cycle is Quarterly and Prorate is Y Term Start Day advance is applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is checked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Include prorate as part of term for terms longer than one month." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day and Term start day are Post but same
      And  I ensure "Quarterly" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges before the Invoice Day and before the Term Start Day "beforetheInvoiceDay", "beforetheTermStartDay", "beforeTSDay", "Quarterly", "9", "4"
      And  I click on the term end date
      Then I verify the "4" as FULLTERM COUNT

#Prorate settings M (Include prorate as part of term for terms longer than one month.)
@Dateset-7 @TA-609 @PartThree-Set-M
  Scenario: As a user, I can verify full term count when before the Term Start Day and Billing Cycle is Semi-annually and Prorate is Y Term Start Day advance is applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is checked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Include prorate as part of term for terms longer than one month." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day and Term start day are Post but same
      And  I ensure "Semi-annually" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges before the Invoice Day and before the Term Start Day "beforetheInvoiceDay", "beforetheTermStartDay", "beforeTSDay", "Semi-annually", "18", "4"
      And  I click on the term end date
      Then I verify the "4" as FULLTERM COUNT

#Prorate settings M (Include prorate as part of term for terms longer than one month.)
@Dateset-8 @TA-609 @PartThree-Set-M
  Scenario: As a user, I can verify full term count when before the Term Start Day and Billing Cycle is Annually and Prorate is Y Term Start Day advance is applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is checked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Include prorate as part of term for terms longer than one month." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day and Term start day are Post but same
      And  I ensure "Annually" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges before the Invoice Day and before the Term Start Day "beforetheInvoiceDay", "beforetheTermStartDay", "beforeTSDay", "Annually", "24", "3"
      And  I click on the term end date
      Then I verify the "3" as FULLTERM COUNT