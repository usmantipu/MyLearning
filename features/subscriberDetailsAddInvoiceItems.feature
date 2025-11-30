Feature: Automation of Adding Invoice Items

  Background: 
	  Given I open UBO webapp
        And I login with username jcabangonautomation and password Test@1234
        And I navigate to subscriber list
        And I open specific subscriber details
        
@automation-adding-invoice-items
  Scenario: As a user, I can verify that the user can set the Quantity in the add-package-type-item-panel
    When I click on Packages and Invoices tab
    When I click on new invoice
    And I click on add package button
    And I search the required package in the package selection pop up
        |Wireless|
    Then I can see The Qty field on the details section is enabled, can be edited, and with a default value of 1
@automation-adding-invoice-items
  Scenario: As a user, I can verify that the user can edit the multiple-package-setting in the add-package-type-item-panel if quantity > 1
    When I click on Packages and Invoices tab
    When I click on new invoice
    And I click on add package button
    And I search the required package in the package selection pop up
        |Wireless|
    Then I can see The Qty field on the details section is enabled, can be edited, and with a default value of 1
    And  The multiple-package-setting checkbox is disabled
    When I edit the Qty field to a value greater than 1
    Then The multiple-package-setting checkbox becomes enabled
@automation-adding-invoice-items
  Scenario: As a user, I can verify that the user is restricted from setting invalid Quantity values in the add-package-type-item-panel
    When I click on Packages and Invoices tab
    When I click on new invoice
    And I click on add package button
    And I search the required package in the package selection pop up
        |Wireless|
    Then I can see The Qty field on the details section is enabled, can be edited, and with a default value of 1
    And  The multiple-package-setting checkbox is disabled
    When I empty the Qty field
    Then Add to invoice or Add and Configure button is disabled
    And  Qty is required error message is displayed below the field
    When I edit the Qty field value with 0
    Then Add to invoice or Add and Configure button is disabled
    And  Invalid quantity error message is displayed below the field
    When I edit the Qty field value with letters
    Then The letter inputs are not entered into the Qty field
    When I edit the Qty field value with special character
    Then The special character inputs are not entered into the Qty field
@automation-adding-invoice-items
  Scenario: As a user, I can verify that the Quantity and multiple-package-setting values from the add-package-type-item-panel are forwarded correctly in the add-invoice-item-preview-panel
    When I click on Packages and Invoices tab
    When I click on new invoice
    And I click on add package button
    And I search the required package in the package selection pop up
        |Wireless|
    Then I can see The Qty field on the details section is enabled, can be edited, and with a default value of 1
    And  The multiple-package-setting checkbox is disabled
    When I edit the Qty field to 3 and check the multiple-package-setting checkbox and Add to Invoice
    Then I can see the multiple-package-setting checkbox is checked
