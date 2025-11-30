@_CRMbomOtherItems
Feature: Add other items in the ticket in CRM
 
 Background:
     Given I open web application
     And I login with my credentials
     |automationbeta|Testing!|
     And I add a new ticket page from top menu
     And I provide ticket details like "Jefferey", "Text for Summary", "Checking on Escalation", "High", "UnAssigned", "Jon Automation"
     And I save the new ticket
     And I close new the Ticket Dock


 Scenario: As a User of CRM, In BoM tab I can see Other item button
   When I navigate to CRM
   When I select CRM List View  
   When I open first ticket in the List
   Then I should see a BoM section
   When I navigate to BoM drawer
   Then I should see the Other item button
   

 Scenario: As a User of CRM, I can click Add to BoM button in the Other items dock to add the selected Other items.
   When I navigate to CRM
   When I select CRM List View  
   When I open first ticket in the List
   When I navigate to BoM drawer
   When I add Other Item in the BoM
   When I save the changes in the BOM
   When I navigate to BoM drawer
   Then The other item is added to the BoM
     |New Item|1|0.00|


 Scenario: As a User of CRM, I can click Cancel button in the Other items dock to close the Other items dock.
   When I navigate to CRM
   When I select CRM List View  
   When I open first ticket in the List
   When I navigate to BoM drawer
   When I add Other Item in the BoM
   When I click BoM cancel button
   Then The Other items dock is closed
   

 Scenario: As a User of CRM, When Other items Added Click the "X" option to delete the added Other items.
   When I navigate to CRM
   When I select CRM List View  
   When I open first ticket in the List
   When I navigate to BoM drawer
   When I add Other Item in the BoM
   When I save the changes in the BOM
   When I navigate to BoM drawer
   When I click the delete button next to the item
   Then The BOM item is remved


 Scenario: As a User of CRM, I can select the Recurring checkbox in BOM when the Other Item added
   When I navigate to CRM
   When I select CRM List View  
   When I open first ticket in the List
   When I navigate to BoM drawer
   When I add BOM other item
   Then I can select the recurring checkbox of the other item


 Scenario: As a User of CRM, As a User of CRM, I can deselect the Recurring checkbox when Other Item added
   When I navigate to CRM
   When I select CRM List View  
   When I open first ticket in the List
   When I navigate to BoM drawer
   When I add BOM other item
   Then I can deselect the recurring checkbox of the other item


 Scenario: As a User of CRM, When recurring selected the Auto suspended check box option available
   When I navigate to CRM
   When I select CRM List View  
   When I open first ticket in the List
   When I navigate to BoM drawer
   When I add Other Item in the BoM
   Then I can select the Recurring checkbox in BOM againt item
   Then I can see an Auto suspended check box option


 Scenario: As a User of CRM, When recurring for other item - Auto suspended selected the text label changed as a "Auto-suspend when the subscriber is suspended or inactive".
   When I navigate to CRM
   When I select CRM List View  
   When I open first ticket in the List
   When I navigate to BoM drawer
   When I add Other item to BOM to view Auto suspend options
   When I expand Auto suspend options from recurring checkbox on BOM 
   When I select the Recurring option when the subscriber is suspended or inactive
   Then The text label changed as a "Auto-suspend  when the subscriber is suspended or inactive"


 Scenario: As a User of CRM, When recurring for other item - Auto suspended selected the text label changed as a "Auto-suspend only when the subscriber is suspended".
   When I navigate to CRM
   When I select CRM List View  
   When I open first ticket in the List
   When I navigate to BoM drawer
   When I add Other item to BOM to view Auto suspend options
   When I expand Auto suspend options from recurring checkbox on BOM 
   When I select the Recurring option Only when the subscriber is suspended
   Then The text label changed as a "Auto-suspend  only when the subscriber is suspended"


 Scenario: As a User of CRM, When recurring for other item - Auto suspended selected the text label changed as a "Auto-suspend only when the subscriber is inactive".
   When I navigate to CRM
   When I select CRM List View  
   When I open first ticket in the List
   When I navigate to BoM drawer
   When I add Other item to BOM to view Auto suspend options
   When I expand Auto suspend options from recurring checkbox on BOM 
   When I select the Recurring option Only when the subscriber is inactive
   Then The text label changed as a "Auto-suspend  only when the subscriber is inactive"


 Scenario: As a User of CRM, When recurring - Auto suspended selected the text label changed as a "when the specified package is not billed".
   When I navigate to CRM
   When I select CRM List View  
   When I open first ticket in the List
   When I navigate to BoM drawer
   When I add Other item to BOM to view Auto suspend options
   When I expand Auto suspend options from recurring checkbox
   When I select the Recurring option When the specified package is not billed
   Then The text label changed as a "Auto-suspend  when the package is not billed"
 

 Scenario: As a User of CRM, When recurring selected the "Expires" check box option available
   When I navigate to CRM
   When I select CRM List View  
   When I open first ticket in the List
   When I navigate to BoM drawer
   When I add Other Item in the BoM
   Then I can select the Recurring checkbox in BOM
   Then The "Expires" checkbox option is visible


 Scenario: As a User of CRM, When "Expires" check box option selected its label changed as "Expires after MMMYYYY".
   When I navigate to CRM
   When I select CRM List View  
   When I open first ticket in the List
   When I navigate to BoM drawer
   When I add Other item in BoM selection
   When I reopen recurring options
   When I select "Expires" checkbox option to see it effects
   Then The lable changes to "Expires after"


 Scenario: As a User of CRM, when click on "Expire after MMMYYYY", drop down month view calendar opened.
   When I navigate to CRM
   When I select CRM List View  
   When I open first ticket in the List
   When I navigate to BoM drawer
   When I add Other item in BoM selection
   When I reopen recurring option
   When I select "Expires" checkbox option to see it effects
   When I click on BoM link "Expires after MMMYYYY"
   Then The drop down month view calendar opens up


 Scenario: As a User of CRM, When click on year option then all upcoming years selection is opened.
   When I navigate to CRM
   When I select CRM List View  
   When I open first ticket in the List
   When I navigate to BoM drawer
   When I add other item to view Expires calendar
   When I click on BoM "Expires after MMMYYYY"
   When I expand to view years option
   Then All upcoming years selection opens up


 Scenario: As a User of CRM, When click on month option then all months selection is opened.
   When I navigate to CRM
   When I select CRM List View  
   When I open first ticket in the List
   When I navigate to BoM drawer
   When I add other item to view Expires calendar
   When I click on BoM "Expires after MMMYYYY"
   When I expand to view months option
   Then All upcoming months selection opens up