@AddTicket
Feature: Add other items in the ticket
 
 Background:
     Given I open web application
     And I login with my credentials
     |jcabangonautomation|Test@1234|
    When I navigate to Add Ticket page from top menu
    When I enter ticket details like "Monika", "Text for Summary", "Checking on Escalation", "High", "UnAssigned", "Jon Automation"
    When I save new ticket

@regression2021 @regression2021-ServiceDesk-bomOtherItems @ServiceDeskSanity @regression-SD
 Scenario: As a User, In BoM tab I can see a another item button
  # When I navigate to Service Desk
  # When I select List View 
  # When I open first ticket from Ticket List
   Then I should see a separate BoM section
   When I navigate to BoM dock
   Then I should see Other item button
 
 #issue new item does not show  
 @regression2021 @regression2021-ServiceDesk-bomOtherItems @regression-SD
 Scenario: As a User, I can click Add to BoM button in the Other items dock to add the selected Other items.
  # When I navigate to Service Desk
  # When I select List View 
  # When I open first ticket from Ticket List
   When I navigate to BoM dock
   When I add Other Item in BoM
   When I save BOM changes
   When I navigate to BoM dock
   Then The other item is added to the BoM
     |New Item|1|0.00|

@regression2021 @regression2021-ServiceDesk-bomOtherItems @regression-SD
 Scenario: As a User, I can click Cancel button in the Other items dock to close the Other items dock.
  # When I navigate to Service Desk
  # When I select List View 
  # When I open first ticket from Ticket List
   When I navigate to BoM dock
   When I add Other Item in BoM
   When I click BoM cancel button
   Then The Other items dock is closed
   
@regression2021 @regression2021-ServiceDesk-bomOtherItems @regression-SD
 Scenario: As a User, When Other items Added Click the "X" option to delete the added Other items.
  # When I navigate to Service Desk
  # When I select List View 
  # When I open first ticket from Ticket List
   When I navigate to BoM dock
   When I add Other Item in BoM
   When I save BOM changes
   When I navigate to BoM dock
   When I click delete button next to the item
   Then The BOM item is deleted

@regression2021 @regression2021-ServiceDesk-bomOtherItems @regression-SD
 Scenario: As a User, I can select the Recurring checkbox when the Other Item added
  # When I navigate to Service Desk
  # When I select List View 
  # When I open first ticket from Ticket List
   When I navigate to BoM dock
   When I add BOM other item
   Then I can select the recurring checkbox of other item

@regression2021 @regression2021-ServiceDesk-bomOtherItems @regression-SD
 Scenario: As a User, As a User, I can deselect the Recurring checkbox when Other Item added
  # When I navigate to Service Desk
  # When I select List View 
  # When I open first ticket from Ticket List
   When I navigate to BoM dock
   When I add BOM other item
   Then I can deselect the recurring checkbox of other item

@regression2021 @regression2021-ServiceDesk-bomOtherItems @regression-SD
 Scenario: As a User, When recurring selected the Auto suspended check box option available
  # When I navigate to Service Desk
  # When I select List View 
  # When I open first ticket from Ticket List
   When I navigate to BoM dock
   When I add Other Item in BoM
   Then I can select the Recurring checkbox
   Then I can see Auto suspended check box option

@regression2021 @regression2021-ServiceDesk-bomOtherItems @TA-267 @regression-SD
 Scenario: As a User, When recurring for other item - Auto suspended selected the text label changed as a "Auto-suspend when the subscriber is suspended or inactive".
  # When I navigate to Service Desk
  # When I select List View 
  # When I open first ticket from Ticket List
   When I navigate to BoM dock
   When I add Other item to view Auto suspend options
   When I expand Auto suspend options from recurring checkbox 
   When I select the Bom Recurring option when the subscriber is suspended or inactive
   Then The text label changed as a "Auto-suspend  when the subscriber is suspended or inactive"

@regression2021 @regression2021-ServiceDesk-bomOtherItems @TA-267 @regression-SD
 Scenario: As a User, When recurring for other item - Auto suspended selected the text label changed as a "Auto-suspend only when the subscriber is suspended".
  # When I navigate to Service Desk
  # When I select List View 
  # When I open first ticket from Ticket List
   When I navigate to BoM dock
   When I add Other item to view Auto suspend options
   When I expand Auto suspend options from recurring checkbox 
   When I select the Bom Recurring option Only when the subscriber is suspended
   Then The text label changed as a "Auto-suspend  only when the subscriber is suspended"

@regression2021 @regression2021-ServiceDesk-bomOtherItems @TA-267 @regression-SD
 Scenario: As a User, When recurring for other item - Auto suspended selected the text label changed as a "Auto-suspend only when the subscriber is inactive".
  # When I navigate to Service Desk
  # When I select List View 
  # When I open first ticket from Ticket List
   When I navigate to BoM dock
   When I add Other item to view Auto suspend options
   When I expand Auto suspend options from recurring checkbox 
   When I select the Bom Recurring option Only when the subscriber is inactive
   Then The text label changed as a "Auto-suspend  only when the subscriber is inactive"

@regression2021 @regression2021-ServiceDesk-bomOtherItems @TA-267 @regression-SD
 Scenario: As a User, When recurring - Auto suspended selected the text label changed as a "when the specified package is not billed".
  # When I navigate to Service Desk
  # When I select List View 
  # When I open first ticket from Ticket List
   When I navigate to BoM dock
   When I add Other item to view Auto suspend options
   When I expand Auto suspend options from recurring checkbox
   When I select the Bom Recurring option When the specified package is not billed
   Then The text label changed as a "Auto-suspend  when the package is not billed"
 
@regression2021 @regression2021-ServiceDesk-bomOtherItems @regression-SD
 Scenario: As a User, When recurring selected the "Expires" check box option available
  # When I navigate to Service Desk
  # When I select List View 
  # When I open first ticket from Ticket List
   When I navigate to BoM dock
   When I add Other Item in BoM
   Then I can select the Recurring checkbox
   Then The "Expires" checkbox option is available

@regression2021 @regression2021-ServiceDesk-bomOtherItems @regression-SD
 Scenario: As a User, When "Expires" check box option selected its label changed as "Expires after MMMYYYY".
  # When I navigate to Service Desk
  # When I select List View 
  # When I open first ticket from Ticket List
   When I navigate to BoM dock
   When I add Other item in BoM selection
   When I reopen recurring options
   When I select "Expires" checkbox option
   Then The lable changes as "Expires"
   Then The lable changes as "after"

@regression2021 @regression2021-ServiceDesk-bomOtherItems @regression-SD
 Scenario: As a User, when click on "Expire after MMMYYYY", drop down month view calendar opened.
  # When I navigate to Service Desk
  # When I select List View 
  # When I open first ticket from Ticket List
   When I navigate to BoM dock
   When I add Other item in BoM selection
   When I reopen recurring options
   When I select "Expires" checkbox option
   When I click on BoM  "Expires after MMMYYYY"
   Then The drop down month view calendar opens

@regression2021 @regression2021-ServiceDesk-bomOtherItems @regression-SD
 Scenario: As a User, When click on year option then all upcoming years selection is opened.
  # When I navigate to Service Desk
  # When I select List View 
  # When I open first ticket from Ticket List
   When I navigate to BoM dock
   When I add other item to view Expires calendar
   When I click on BoM "Expires after MMMYYYY"
   When I expand to view years options
   Then All upcoming years selection opens up

@regression2021 @regression2021-ServiceDesk-bomOtherItems @regression-SD
 Scenario: As a User, When click on month option then all months selection is opened.
  # When I navigate to Service Desk
  # When I select List View 
  # When I open first ticket from Ticket List
   When I navigate to BoM dock
   When I add other item to view Expires calendar
   When I click on BoM "Expires after MMMYYYY"
   When I expand to view months options
   Then All upcoming months selection opens up