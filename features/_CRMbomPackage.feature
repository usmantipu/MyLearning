@crmBomPackage
Feature: Add package to the BOM in CRM

  Background: 
			Given I open web application
			And I login with my credentials
			|automationbeta|Testing1!|

  Scenario: As a User of CRM, I can see BoM section on tickets dock
    When I navigate to CRM
    When I select tickets listing
    When I select 1st Ticket from Ticket listing
    Then I should see a BoM section


  Scenario: As a User of CRM, In BoM section I can see an add package button
    When I navigate to CRM
    When I select tickets listing
    When I select 1st Ticket from Ticket listing
    When I open the BoM drawer
    Then I see should see a button to add a package


  Scenario: As a User of CRM, I can click Cancel button in the package dock to close the package dock.
    When I navigate to CRM
    When I select tickets listing
    When I select 1st Ticket from Ticket listing
    When I ensure that ticket is not linked
    When I open the add package look up
    When I can close the lookup using cancel button
    Then I see should see add package lookup is closed


  Scenario: As a User of CRM, When package Added Click the "X" option to delete the added package
    When I navigate to Add Ticket page from the top menu
    When I enter ticket details "Monika", "Text for Summary", "Checking on Escalation", "High", "UnAssigned", "Jon Automation"
    When I save the ticket
    When I close new Ticket drawer
    When I navigate to CRM
    When I select tickets listing
    When I select 1st Ticket from Ticket listing
    When I open the add package look up
    When I search and choose the package
          |Hosting|
    When I add an item to BOM
    When I save the Bom changes
    When I open the BoM drawer
    Then I delete the recently added package from the BoM


  Scenario: As a User of CRM, I can check the Recurring checkbox when the Other Item added
    When I navigate to CRM
    When I select tickets listing
    When I select 1st Ticket from Ticket listing
    When I ensure that ticket is not linked
    When I open the BoM drawer
    When I add a Other Item in BoM
    Then I can check the Recurring checkbox


  Scenario: As a User of CRM, I can uncheck the Recurring checkbox when Other Item added
    When I navigate to CRM
    When I select tickets listing
    When I select 1st Ticket from Ticket listing
    When I ensure that ticket is not linked
    When I open the BoM drawer
    When I add a Other Item in BoM
    Then I can uncheck the Recurring checkbox


  Scenario: As a User of CRM, When recurring - Auto suspended selected the text label changed as a "Auto-suspend  when the subscriber is suspended or inactive".
    When I navigate to CRM
    When I select tickets listing
    When I select 1st Ticket from Ticket listing
    When I ensure that ticket is not linked
    When I open the BoM drawer
    When I add a Other Item in BoM
    When I choose recurring - Auto-suspend  when the subscriber is suspended or inactive 
    Then The text label becomes  "Auto-suspend  when the subscriber is suspended or inactive"


  Scenario: As a User of CRM, When recurring - Auto suspended selected the text label changed as a "Auto-suspend only when the subscriber is suspended".
    When I navigate to CRM
    When I select tickets listing
    When I select 1st Ticket from Ticket listing
    When I ensure that ticket is not linked
    When I open the BoM drawer
    When I add a Other Item in BoM
    When I choose recurring - Auto-suspend  only when the subscriber is suspended 
    Then The text label becomes  "Auto-suspend  only when the subscriber is suspended"


  Scenario: As a User of CRM, When recurring - Auto suspended selected the text label changed as a "Auto-suspend only when the subscriber is inactive".
    When I navigate to CRM
    When I select tickets listing
    When I select 1st Ticket from Ticket listing
    When I ensure that ticket is not linked
    When I open the BoM drawer
    When I add a Other Item in BoM
    When I choose recurring - Auto-suspend  only when the subscriber is inactive 
    Then The text label becomes  "Auto-suspend  only when the subscriber is inactive"


  Scenario: As a User of CRM, When Package is added QTY option is available
    When I navigate to CRM
    When I select tickets listing
    When I select 1st Ticket from Ticket listing
    When I ensure that ticket is not linked
    When I open the add package look up
    When I search and choose the package
          |Hosting|
    When I add an item to BOM
    Then I can see that the QTY option is available


  Scenario: As a User of CRM, When Package is added Tax rate can be selected as predefined tax settings from drop down.
    When I open the invoicing settings from top right menu
    And  I define a tax item in invoice Tax settings
           |GST|50|
    When I navigate to CRM
    When I select tickets listing
    When I select 1st Ticket from Ticket listing
    When I ensure that ticket is not linked
    When I open the add package look up
    When I search and choose the package
          |Hosting|
    When I add an item to BOM
  #  When I click on Ok to Save the package
    When I choose predefined Tax settings
    Then I can see that the tax rate can be selected as predefined tax settings


  Scenario: As a User of CRM, When Tax rate is selected from predefined tax settings its preview is available with Tax rate, Taxable amount, Non-Taxable and tax Charged.
    When I open the invoicing settings from top right menu
    And  I define a tax item in invoice Tax settings
           |GST|50|
    When I navigate to CRM
    When I select tickets listing
    When I select 1st Ticket from Ticket listing
    When I ensure that ticket is not linked
    When I open the add package look up
    When I search and choose the package
          |Hosting|
    When I add an item to BOM
  #  When I click on Ok to Save the package
    When I choose predefined Tax settings
    Then The preview is available with the Tax rate, Taxable amount, Non-Taxable and tax Charged
    |Tax Rate|Taxable Amount|Non-Taxable|Tax Charged|
    |50.00%||$0.00||


  Scenario: As a User of CRM, In BoM tab I can see a add service button
    When I navigate to CRM
    When I select tickets listing
    When I select 1st Ticket from Ticket listing
    When I open the BoM drawer
    Then I see should see a button to add service
