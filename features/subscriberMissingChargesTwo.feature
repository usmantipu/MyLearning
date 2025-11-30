@subscriberDetailsBillingOptionsTwo
Feature: Subscriber Details - Manage billing options

  Background: 
			Given I open UBO webapp
			And I login with username jcabangonautomation and password Test@1234
            When I navigate to subscriber list
            When I search a subscriber from search bar having customer ID "2037250"
            When I open prospect for package details
            
#Prorate settings Y (add prorate to full term.)
@Dateset-1-2 @TA-608 @PartTwo-Set-Y
  Scenario: As a user, I can verify full term count when falls on the Term Start Day and Billing Cycle is Monthly and Prorate is Y Term Start Day advance not applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is Unchecked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Add prorate to full term." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day and Term start day are same
      And  I ensure "Monthly" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I check the Day of the Invoice either its endOFMonth
      And  I set values for the MissingCahrges of same date "ontheInvoiceDay", "fallsontheTermStartDay", "OnTSDay", "Monthly", "3", "4"
      And  I click on the term end date
      Then I verify the "4" as FULLTERM COUNT
      When I cancel the current opened invoice
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I check the Day of the Invoice either its endOFMonth
      And I set values for the MissingCahrges of different date "aftertheInvoiceDay", "aftertheTermStartDay", "aftertheTermStartDay", "Monthly", "3", "3"
      And I click on the term end date
      Then I verify the "3" as FULLTERM COUNT

#Prorate settings Y (add prorate to full term.)
@Dateset-3-4 @TA-608 @PartTwo-Set-Y @TA-1191
  Scenario: As a user, I can verify full term count when falls on the Term Start Day and Billing Cycle is Quarterly and Prorate is Y Term Start Day advance not applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is Unchecked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Add prorate to full term." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day and Term start day are same
      And  I ensure "Quarterly" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I check the Day of the Invoice either its endOFMonth
      And  I set values for the MissingCahrges of same date "ontheInvoiceDay", "fallsontheTermStartDay", "OnTSDay", "Quarterly", "9", "4"
      And  I click on the term end date
      Then I verify the "4" as FULLTERM COUNT
      When I cancel the current opened invoice
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I check the Day of the Invoice either its endOFMonth
      And I set values for the MissingCahrges after the Invoice Day and after the Term Start Day "aftertheInvoiceDay", "aftertheTermStartDay", "aftertheTermStartDay", "Quarterly", "9", "4"
      And I click on the term end date
      Then I verify the "4" as FULLTERM COUNT

#Prorate settings Y (add prorate to full term.)
@Dateset-5-6 @TA-608 @PartTwo-Set-Y @TA-1191
  Scenario: As a user, I can verify full term count when falls on the Term Start Day and Billing Cycle is Semi-annually and Prorate is Y Term Start Day advance not applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is Unchecked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Add prorate to full term." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day and Term start day are same
      And  I ensure "Semi-annually" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I check the Day of the Invoice either its endOFMonth
      And  I set values for the MissingCahrges on the Invoice Day and on the Term Start Day "ontheInvoiceDay", "fallsontheTermStartDay", "OnTSDay", "Semi-annually", "18", "4"
      And  I click on the term end date
      Then I verify the "4" as FULLTERM COUNT
      And  I click on Packages and Invoices tab
      When I cancel the current opened invoice
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I check the Day of the Invoice either its endOFMonth
      And I set values for the MissingCahrges after the Invoice Day and after the Term Start Day "aftertheInvoiceDay", "aftertheTermStartDay", "aftertheTermStartDay", "Semi-annually", "18", "4"
      And I click on the term end date
      Then I verify the "4" as FULLTERM COUNT

#Prorate settings Y (add prorate to full term.)
@Dateset-7-8 @TA-608 @PartTwo-Set-Y @TA-1191
  Scenario: As a user, I can verify full term count when falls on the Term Start Day and Billing Cycle is Annually and Prorate is Y Term Start Day advance not applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is Unchecked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Add prorate to full term." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day and Term start day are same
      And  I ensure "Annually" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I check the Day of the Invoice either its endOFMonth
      And  I set values for the MissingCahrges of same date "ontheInvoiceDay", "fallsontheTermStartDay", "OnTSDay", "Annually", "24", "3"
      And  I click on the term end date
      Then I verify the "3" as FULLTERM COUNT
      When I cancel the current opened invoice
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I check the Day of the Invoice either its endOFMonth
      And I set values for the MissingCahrges after the Invoice Day and after the Term Start Day "aftertheInvoiceDay", "aftertheTermStartDay", "aftertheTermStartDay", "Annually", "24", "3"
      And I click on the term end date
      Then I verify the "3" as FULLTERM COUNT

#Prorate settings Y (add prorate to full term.)
@Dateset-9 @TA-608 @PartTwo-Set-Y-One
  Scenario: As a user, I can verify full term count when falls before the Term Start Day and Billing Cycle is Monthly and Prorate is Y Term Start Day advance not applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is Unchecked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Add prorate to full term." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day is less than the  Term start day
      And  I ensure "Monthly" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges before the term start date "ontheInvoiceDay", "beforetheTermStartDay", "OnTSDay", "Monthly", "3", "4"
      And  I click on the term end date
      Then I verify the "4" as FULLTERM COUNT

#Prorate settings Y (add prorate to full term.)
@Dateset-10 @TA-608 @PartTwo-Set-Y-One
  Scenario: As a user, I can verify full term count when falls before the Term Start Day and Billing Cycle is Quarterly and Prorate is Y Term Start Day advance not applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is Unchecked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Add prorate to full term." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day is less than the  Term start day
      And  I ensure "Quarterly" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges before the term start date "ontheInvoiceDay", "beforetheTermStartDay", "OnTSDay", "Quarterly", "9", "4"
      And  I click on the term end date
      Then I verify the "4" as FULLTERM COUNT

#Prorate settings Y (add prorate to full term.)
@Dateset-11 @TA-608 @PartTwo-Set-Y-One
  Scenario: As a user, I can verify full term count when falls before the Term Start Day and Billing Cycle is Semi-annually and Prorate is Y Term Start Day advance not applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is Unchecked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Add prorate to full term." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day is less than the  Term start day
      And  I ensure "Semi-annually" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges before the term start date "ontheInvoiceDay", "beforetheTermStartDay", "OnTSDay", "Semi-annually", "18", "4"
      And  I click on the term end date
      Then I verify the "4" as FULLTERM COUNT

#Prorate settings Y (add prorate to full term.)
@Dateset-12 @TA-608 @PartTwo-Set-Y-One
  Scenario: As a user, I can verify full term count when falls before the Term Start Day and Billing Cycle is Annually and Prorate is Y Term Start Day advance not applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is Unchecked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Add prorate to full term." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day is less than the  Term start day
      And  I ensure "Annually" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges before the term start date "ontheInvoiceDay", "beforetheTermStartDay", "OnTSDay", "Annually", "24", "3"
      And  I click on the term end date
      Then I verify the "3" as FULLTERM COUNT

#Prorate settings Y (add prorate to full term.)
@Dateset-13-14-15 @TA-608 @PartTwo-Set-Y-Two
  Scenario: As a user, I can verify full term count when falls one the Term Start Day and after the invoice day and Billing Cycle is Monthly and Prorate is Y Term Start Day advance not applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is Unchecked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Add prorate to full term." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day is less than the  Term start day
      And  I ensure "Monthly" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges after the Invoice Day and on the Term Start Day "aftertheInvDay", "onethetermsday", "OnTSDay", "Monthly", "3", "4"
      And  I click on the term end date
      Then I verify the "4" as FULLTERM COUNT
      When I cancel the current opened invoice
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges after the Invoice Day and before the Term Start Day "aftertheInvDay", "beforethetermDay", "OnTSDay", "Monthly", "3", "4"
      And  I click on the term end date
      Then I verify the "4" as FULLTERM COUNT
      When I cancel the current opened invoice
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges after the Invoice Day and after the Term Start Day "aftertheInvDay", "aftertermsday", "OnTSDay", "Monthly", "3", "3"
      And  I click on the term end date
      Then I verify the "3" as FULLTERM COUNT
    
#Prorate settings Y (add prorate to full term.)
@Dateset-16-17 @TA-608 @PartTwo-Set-Y-Two
  Scenario: As a user, I can verify full term count when falls before the Term Start Day and after the invoice day and Billing Cycle is Quarterly and Prorate is Y Term Start Day advance not applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is Unchecked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Add prorate to full term." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day is less than the  Term start day
      And  I ensure "Quarterly" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges after the Invoice Day and before the Term Start Day "aftertheInvDay", "beforethetermDay", "OnTSDay", "Quarterly", "9", "4"
      And  I click on the term end date
      Then I verify the "4" as FULLTERM COUNT
      When I cancel the current opened invoice
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges after the Invoice Day and on the Term Start Day "aftertheInvDay", "onethetermsday", "OnTSDay", "Monthly", "9", "4"
      And  I click on the term end date
      Then I verify the "4" as FULLTERM COUNT

#issue    
#Prorate settings Y (add prorate to full term.)
#@Dateset-18 @TA-608 @PartTwo-1stSet
  Scenario: As a user, I can verify full term count when falls after the Term Start Day and after the invoice day and Billing Cycle is Quarterly and Prorate is Y Term Start Day advance not applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is Unchecked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Add prorate to full term." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day is less than the  Term start day
      And  I ensure "Quarterly" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges after the Invoice Day and after the Term Start Day "aftertheInvDay", "aftertermsday", "OnTSDay", "Quarterly", "9", "4"
      And  I click on the term end date
      Then I verify the "4" as FULLTERM COUNT

#Prorate settings Y (add prorate to full term.)
@Dateset-19-20 @TA-608 @PartTwo-Set-Y-Three
  Scenario: As a user, I can verify full term count when falls on the Term Start Day and after the invoice day and Billing Cycle is Semi-annually and Prorate is Y Term Start Day advance not applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is Unchecked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Add prorate to full term." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day is less than the  Term start day
      And  I ensure "Semi-annually" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges after the Invoice Day and before the Term Start Day "aftertheInvDay", "beforethetermDay", "OnTSDay", "Semi-annually", "18", "4"
      And  I click on the term end date
      Then I verify the "4" as FULLTERM COUNT
      When I cancel the current opened invoice
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges after the Invoice Day and on the Term Start Day "aftertheInvDay", "onethetermsday", "OnTSDay", "Semi-annually", "18", "4"
      And  I click on the term end date
      Then I verify the "4" as FULLTERM COUNT
    
#issue   
#Prorate settings Y (add prorate to full term.)
#@Dateset-21 @TA-608
  Scenario: As a user, I can verify full term count when falls after the Term Start Day and after the invoice day and Billing Cycle is Semi-annually and Prorate is Y Term Start Day advance not applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is Unchecked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Add prorate to full term." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day is less than the  Term start day
      And  I ensure "Semi-annually" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges after the Invoice Day and after the Term Start Day "aftertheInvDay", "aftertermsday", "OnTSDay", "Semi-annually", "18", "4"
      And  I click on the term end date
      Then I verify the "4" as FULLTERM COUNT

#Prorate settings Y (add prorate to full term.)
@Dateset-22-23 @TA-608 @PartTwo-Set-Y-Three
  Scenario: As a user, I can verify full term count when falls before the Term Start Day and after the invoice day and Billing Cycle is Semi-annually and Prorate is Y Term Start Day advance not applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is Unchecked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Add prorate to full term." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day is less than the  Term start day
      And  I ensure "Annually" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges after the Invoice Day and before the Term Start Day "aftertheInvDay", "beforethetermDay", "OnTSDay", "Annually", "24", "3"
      And  I click on the term end date
      Then I verify the "3" as FULLTERM COUNT
      When I cancel the current opened invoice
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges after the Invoice Day and on the Term Start Day "aftertheInvDay", "onethetermsday", "OnTSDay", "Semi-annually", "24", "3"
      And  I click on the term end date
      Then I verify the "3" as FULLTERM COUNT

#issue
#Prorate settings Y (add prorate to full term.)
#@Dateset-24 @TA-608 @PartTwo-1stSet
  Scenario: As a user, I can verify full term count when falls after the Term Start Day and after the invoice day and Billing Cycle is Semi-annually and Prorate is Y Term Start Day advance not applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is Unchecked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Add prorate to full term." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day is less than the  Term start day
      And  I ensure "Annually" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges after the Invoice Day and after the Term Start Day "aftertheInvDay", "aftertermsday", "OnTSDay", "Annually", "24", "3"
      And  I click on the term end date
      Then I verify the "3" as FULLTERM COUNT
#issue
#Prorate settings Y (add prorate to full term.)
#@Dateset-25 @TA-608 @PartTwo-1stSet
  Scenario: As a user, I can verify full term count when falls after the Term Start Day and on the invoice day and Billing Cycle is Monthly and Prorate is Y Term Start Day advance not applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is Unchecked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Add prorate to full term." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day is greater than the Term start day
      And  I ensure "Monthly" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges on the Invoice Day and after the Term Start Day "ontheInvDay", "aftertermsday", "OnTSDay", "Monthly", "3", "4"
      And  I click on the term end date
      Then I verify the "4" as FULLTERM COUNT
#issue
#Prorate settings Y (add prorate to full term.)
#@Dateset-26 @TA-608 @PartTwo-1stSet
  Scenario: As a user, I can verify full term count when falls after the Term Start Day and on the invoice day and Billing Cycle is Quarterly and Prorate is Y Term Start Day advance not applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is Unchecked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Add prorate to full term." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day is greater than the Term start day
      And  I ensure "Quarterly" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges on the Invoice Day and after the Term Start Day "ontheInvDay", "aftertermsday", "OnTSDay", "Quarterly", "9", "4"
      And  I click on the term end date
      Then I verify the "4" as FULLTERM COUNT

#issue
#Prorate settings Y (add prorate to full term.)
#@Dateset-27 @TA-608 @PartTwo-1stSet
  Scenario: As a user, I can verify full term count when falls after the Term Start Day and on the invoice day and Billing Cycle is Semi-annually and Prorate is Y Term Start Day advance not applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is Unchecked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Add prorate to full term." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day is greater than the Term start day
      And  I ensure "Semi-annually" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges on the Invoice Day and after the Term Start Day "ontheInvDay", "aftertermsday", "OnTSDay", "Semi-annually", "18", "4"
      And  I click on the term end date
      Then I verify the "4" as FULLTERM COUNT

#issue
#Prorate settings Y (add prorate to full term.)
#@Dateset-28 @TA-608 @PartTwo-1stSet
  Scenario: As a user, I can verify full term count when falls after the Term Start Day and on the invoice day and Billing Cycle is Semi-annually and Prorate is Y Term Start Day advance not applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is Unchecked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Add prorate to full term." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day is greater than the Term start day
      And  I ensure "Annually" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges on the Invoice Day and after the Term Start Day "ontheInvDay", "aftertermsday", "OnTSDay", "Semi-annually", "24", "3"
      And  I click on the term end date
      Then I verify the "3" as FULLTERM COUNT
#issue
#Prorate settings M (Include prorate as part of term for terms longer than one month.)
#@Dateset-29 @TA-608 @PartTwo-Set-M
  Scenario: As a user, I can verify full term count when does not falls on the Term Start Day and after the invoice day and Billing Cycle is Quarterly and Prorate is M Term Start Day advance not applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is Unchecked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Include prorate as part of term for terms longer than one month." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day and Term start day are same
      And  I ensure "Quarterly" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges after the Invoice Day and after the Term Start Day "aftertheInvDay", "aftertermsday", "OnTSDay", "Quarterly", "18", "4"
      And  I click on the term end date
      Then I verify the "4" as FULLTERM COUNT

#Prorate settings M (Include prorate as part of term for terms longer than one month.)
@Dateset-30 @TA-608 @PartTwo-Set-M
  Scenario: As a user, I can verify full term count when does not falls on the Term Start Day and after the invoice day and Billing Cycle is Semi-annually and Prorate is M Term Start Day advance not applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is Unchecked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Include prorate as part of term for terms longer than one month." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day and Term start day are same
      And  I ensure "Semi-annually" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges after the Invoice Day and after the Term Start Day "aftertheInvDay", "aftertermsday", "OnTSDay", "Semi-annually", "18", "4"
      And  I click on the term end date
      Then I verify the "4" as FULLTERM COUNT

#Prorate settings M (Include prorate as part of term for terms longer than one month.)
@Dateset-31 @TA-608 @PartTwo-Set-M
  Scenario: As a user, I can verify full term count when does not falls on the Term Start Day and after the invoice day and Billing Cycle is Annually and Prorate is M Term Start Day advance not applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is Unchecked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Include prorate as part of term for terms longer than one month." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day and Term start day are same
      And  I ensure "Annually" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges after the Invoice Day and after the Term Start Day "aftertheInvDay", "aftertermsday", "OnTSDay", "Annually", "24", "3"
      And  I click on the term end date
      Then I verify the "3" as FULLTERM COUNT

#Prorate settings M (Include prorate as part of term for terms longer than one month.)
@Dateset-32-33-34 @TA-608 @PartTwo-Set-M
  Scenario: As a user, I can verify full term count when falls before the Term Start Day and after the invoice day and Billing Cycle is Quarterly and Prorate is M Term Start Day advance not applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is Unchecked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Include prorate as part of term for terms longer than one month." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day is less than the  Term start day
      And  I ensure "Quarterly" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges after the Invoice Day and before the Term Start Day "aftertheInvDay", "beforethetermDay", "OnTSDay", "Quarterly", "9", "4"
      And  I click on the term end date
      Then I verify the "4" as FULLTERM COUNT
      When I cancel the current opened invoice
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges after the Invoice Day and on the Term Start Day "aftertheInvDay", "onethetermsday", "OnTSDay", "Quarterly", "9", "4"
      And  I click on the term end date
      Then I verify the "4" as FULLTERM COUNT
      When I cancel the current opened invoice
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges after the Invoice Day and after the Term Start Day "aftertheInvDay", "aftertermsday", "OnTSDay", "Quarterly", "9", "4"
      And  I click on the term end date
      Then I verify the "4" as FULLTERM COUNT

#Prorate settings M (Include prorate as part of term for terms longer than one month.)
@Dateset-35-36-37 @TA-608 @PartTwo-Set-M-1
  Scenario: As a user, I can verify full term count when falls before the Term Start Day and after the invoice day and Billing Cycle is Semi-annually and Prorate is M Term Start Day advance not applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is Unchecked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Include prorate as part of term for terms longer than one month." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day is less than the  Term start day
      And  I ensure "Semi-annually" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges after the Invoice Day and before the Term Start Day "aftertheInvDay", "beforethetermDay", "OnTSDay", "Semi-annually", "18", "4"
      And  I click on the term end date
      Then I verify the "4" as FULLTERM COUNT
      When I cancel the current opened invoice
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges after the Invoice Day and on the Term Start Day "aftertheInvDay", "onethetermsday", "OnTSDay", "Semi-annually", "18", "4"
      And  I click on the term end date
      Then I verify the "4" as FULLTERM COUNT
      When I cancel the current opened invoice
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges after the Invoice Day and after the Term Start Day "aftertheInvDay", "aftertermsday", "OnTSDay", "Semi-annually", "18", "4"
      And  I click on the term end date
      Then I verify the "4" as FULLTERM COUNT

#Prorate settings M (Include prorate as part of term for terms longer than one month.)
@Dateset-38-39-40 @TA-608 @PartTwo-Set-M-1
  Scenario: As a user, I can verify full term count when falls before the Term Start Day and after the invoice day and Billing Cycle is Semi-annually and Prorate is M Term Start Day advance not applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is Unchecked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Include prorate as part of term for terms longer than one month." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day is less than the  Term start day
      And  I ensure "Annually" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges after the Invoice Day and before the Term Start Day "aftertheInvDay", "beforethetermDay", "OnTSDay", "Annually", "24", "3"
      And  I click on the term end date
      Then I verify the "3" as FULLTERM COUNT
      When I cancel the current opened invoice
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges after the Invoice Day and on the Term Start Day "aftertheInvDay", "onethetermsday", "OnTSDay", "Annually", "24", "3"
      And  I click on the term end date
      Then I verify the "3" as FULLTERM COUNT
      When I cancel the current opened invoice
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges after the Invoice Day and after the Term Start Day "aftertheInvDay", "aftertermsday", "OnTSDay", "Annually", "24", "3"
      And  I click on the term end date
      Then I verify the "3" as FULLTERM COUNT

#Prorate settings M (Include prorate as part of term for terms longer than one month.)
@Dateset-41 @TA-608 @PartTwo-Set-M-2
  Scenario: As a user, I can verify full term count when falls after the Term Start Day and on the invoice day and Billing Cycle is Quarterly and Prorate is M Term Start Day advance not applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is Unchecked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Include prorate as part of term for terms longer than one month." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day is greater than the Term start day
      And  I ensure "Quarterly" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges on the Invoice Day and after the Term Start Day "aftertheInvDay", "aftertermsday", "OnTSDay", "Quarterly", "9", "4"
      And  I click on the term end date
      Then I verify the "4" as FULLTERM COUNT

#Prorate settings M (Include prorate as part of term for terms longer than one month.)
@Dateset-42 @TA-608 @PartTwo-Set-M-2
  Scenario: As a user, I can verify full term count when falls after the Term Start Day and on the invoice day and Billing Cycle is Semi-annually and Prorate is M Term Start Day advance not applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is Unchecked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Include prorate as part of term for terms longer than one month." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day is greater than the Term start day
      And  I ensure "Semi-annually" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges on the Invoice Day and after the Term Start Day "aftertheInvDay", "aftertermsday", "OnTSDay", "Semi-annually", "18", "4"
      And  I click on the term end date
      Then I verify the "4" as FULLTERM COUNT

#Prorate settings M (Include prorate as part of term for terms longer than one month.)
@Dateset-43 @TA-608 @PartTwo-Set-M-2
  Scenario: As a user, I can verify full term count when falls after the Term Start Day and on the invoice day and Billing Cycle is Annually and Prorate is M Term Start Day advance not applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is Unchecked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Include prorate as part of term for terms longer than one month." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day is greater than the Term start day
      And  I ensure "Annually" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges on the Invoice Day and after the Term Start Day "aftertheInvDay", "aftertermsday", "OnTSDay", "Annually", "24", "3"
      And  I click on the term end date
      Then I verify the "3" as FULLTERM COUNT

#Prorate settings N (Do not prorate.)
@Dateset-44 @TA-608 @PartTwo-Set-N
  Scenario: As a user, I can verify full term count when falls on the Term Start Day and on the invoice day and Billing Cycle is Quarterly and Prorate is N Term Start Day advance not applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is Unchecked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Do not prorate." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day and Term start day are same
      And  I ensure "Quarterly" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges on the Invoice Day and on the Term Start Day "aftertheInvDay", "aftertermsday", "OnTSDay", "Quarterly", "9", "4"
      And  I click on the term end date
      Then I verify the "4" as FULLTERM COUNT

#Prorate settings N (Do not prorate.)
@Dateset-45 @TA-608 @PartTwo-Set-N
  Scenario: As a user, I can verify full term count when falls on the Term Start Day and on the invoice day and Billing Cycle is Semi-annually and Prorate is N Term Start Day advance not applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is Unchecked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Do not prorate." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day and Term start day are same
      And  I ensure "Semi-annually" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges on the Invoice Day and on the Term Start Day "aftertheInvDay", "aftertermsday", "OnTSDay", "Semi-annually", "18", "4"
      And  I click on the term end date
      Then I verify the "4" as FULLTERM COUNT

#Prorate settings N (Do not prorate.)
@Dateset-46 @TA-608 @PartTwo-Set-N
  Scenario: As a user, I can verify full term count when falls on the Term Start Day and on the invoice day and Billing Cycle is Annually and Prorate is N Term Start Day advance not applied
      When I open invoicing settings from top right menu
      When I ensure that invoice defaults has flexible billing option enabled
      When I ensure that advance by a Month is Unchecked for term start day
      When I go to prorate options of the invoice settings
      When I select protate "Do not prorate." option from the available options
      When I ensure that invoice settings get saved
      When I close invoicing setting to go back to billing options tab
      When I click on Billing options tab
      And  I ensure Invoice day and Term start day are same
      And  I ensure "Annually" is selected as it required
      And  I click on Packages and Invoices tab
      And  I select "New Invoice" from dotted Menu of Packages & Invoices
      And  I click on add package button
      And  I search the required package in the package selection pop up
            |New Package|
      And  I click on Add to invoice
      And  I set values for the MissingCahrges on the Invoice Day and on the Term Start Day "aftertheInvDay", "aftertermsday", "OnTSDay", "Annually", "24", "3"
      And  I click on the term end date
      Then I verify the "3" as FULLTERM COUNT