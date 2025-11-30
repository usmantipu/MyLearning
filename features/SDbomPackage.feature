@AddTicket
Feature: Add task in the ticket

  Background: 
			Given I open web application
			And I login with my credentials
			|jcabangonautomation|Test@1234|
      When I navigate to Add Ticket page from top menu
      When I enter ticket details like "Monika", "Text for Summary", "Checking on Escalation", "High", "UnAssigned", "Jon Automation"
      When I save new ticket
@regression2021 @regression2021-ServiceDesk-bomPackage @regression-SD
  Scenario: As a User, I can see BoM section on tickets dock
  #  When I navigate to Service Desk
  #  When I select List View 
  #  When I select 1st Ticket from Ticket table
    Then I should see a separate BoM section

@regression2021 @regression2021-ServiceDesk-bomPackage @regression-SD
  Scenario: As a User, In BoM section I can see an add package button
    When I navigate to BoM dock
    Then I see should see add package button

@regression2021 @regression2021-ServiceDesk-bomPackage @regression-SD
  Scenario: As a User, I can click Cancel button in the package dock to close the package dock.
    When I open the add package dock
    When I can close the dock using cancel button
    Then I see should see add package dock closed

@regression2021 @regression2021-ServiceDesk-bomPackage @TA-248 @regression-SD
  Scenario: As a User, When package Added Click the "X" option to delete the added package
    When I open the add package dock
    When I search and select package
          |Wireless Hotspot|
    When I add item to BOM
    When I save Bom changes
    When I navigate to BoM dock
    Then I delete the added package from the BoM
         |Wireless Hotspot|

@regression2021 @regression2021-ServiceDesk-bomPackage @regression-SD
  Scenario: As a User, I can select the Recurring checkbox when the Other Item added
    When I navigate to BoM dock
    When I add Other Item in BoM
    Then I can select the Recurring checkbox

@regression2021 @regression2021-ServiceDesk-bomPackage @regression-SD
  Scenario: As a User, I can deselect the Recurring checkbox when Other Item added
    When I navigate to BoM dock
    When I add Other Item in BoM
    Then I can deselect the Recurring checkbox

@regression2021 @regression2021-ServiceDesk-bomPackage @regression-SD
  Scenario: As a User, When recurring - Auto suspended selected the text label changed as a "Auto-suspend  when the subscriber is suspended or inactive".
    When I navigate to BoM dock
    When I add Other Item in BoM
    When I select recurring - Auto-suspend  when the subscriber is suspended or inactive 
    Then The text label changed as a "Auto-suspend  when the subscriber is suspended or inactive"

@regression2021 @regression2021-ServiceDesk-bomPackage @regression-SD
  Scenario: As a User, When recurring - Auto suspended selected the text label changed as a "Auto-suspend only when the subscriber is suspended".
    When I navigate to BoM dock
    When I add Other Item in BoM
    When I select recurring - Auto-suspend  only when the subscriber is suspended 
    Then The text label changed as a "Auto-suspend  only when the subscriber is suspended"

@regression2021 @regression2021-ServiceDesk-bomPackage @regression-SD
  Scenario: As a User, When recurring - Auto suspended selected the text label changed as a "Auto-suspend only when the subscriber is inactive".
    When I navigate to BoM dock
    When I add Other Item in BoM
    When I select recurring - Auto-suspend  only when the subscriber is inactive 
    Then The text label changed as a "Auto-suspend  only when the subscriber is inactive"

@regression2021 @regression2021-ServiceDesk-bomPackage @regression-SD
  Scenario: As a User, When Package is added QTY option is available
    When I open the add package dock
    When I search and select package
          |Wireless Hotspot|
    When I add item to BOM
    Then I can see that QTY option is available

@regression2021 @regression2021-ServiceDesk-bomPackage @regression-SD
  Scenario: As a User, When Package is added Tax rate can be selected as predefined tax settings from drop down.
    When  I open invoicing settings from top right menu
    And  I define tax item in invoice Tax settings
           |GST|50|
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "Monika", "Text for Summary", "Checking on Escalation", "High", "UnAssigned", "Jon Automation"
    When I save new ticket
    When I open the add package dock
    When I search and select package
          |Wireless Hotspot|
    When I add item to BOM
    When I select predefined Tax settings
    Then I can see that tax rate can be selected as predefined tax settings

@regression2021 @regression2021-ServiceDesk-bomPackage @eaV-TA217 @regression-SD
  Scenario: As a User, When Tax rate is selected from predefined tax settings its preview is available with Tax rate, Taxable amount, Non-Taxable and tax Charged.
    When  I open invoicing settings from top right menu
    And  I define tax item in invoice Tax settings
           |GST|50|
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "Monika", "Text for Summary", "Checking on Escalation", "High", "UnAssigned", "Jon Automation"
    When I save new ticket
    When I open the add package dock
    When I search and select package
          |Wireless Hotspot|
    When I add item to BOM
    When I select predefined Tax settings
    Then The preview is available with Tax rate, Taxable amount, Non-Taxable and tax Charged
    |Tax Rate|Taxable Amount|Non-Taxable|Tax Charged|
    |50.00%||$0.00||

@regression2021 @regression2021-ServiceDesk-bomPackage @regression-SD
  Scenario: As a User, In BoM tab I can see a add service button
    When I navigate to BoM dock
    Then I see should see add service button
