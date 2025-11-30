Feature: View/Edit Billing Invoicing

  User can view/edit the Invoice Default, Package Invoicing, Paper Invoice Free, Prorate Options, Late Fee, and Taxes in Invoicing section

  Background:
    Given I open UBO webapp
    And   I login with username "dreamteam2" and password "str0ngP@ss2"

  Scenario: As a user, I can select "Invoicing" from "Billing" settings
    When I navigate to  settings
    When I select "Billing" settings
    When I select menu "Invoicing"
    Then I see tabs namely "Invoice Defaults", "Package Invoicing", "Paper Invoice Free", "Prorate Options", "Late Fee", and "Taxes"

  Scenario Outline: As a user, I can select "Invoice Default" tab
    When I navigate to  settings
    When I select "Billing" settings
    When I select menu "Invoicing"
    When I select "Invoice Defaults" tab form Invoicing
    Then  I can view the following "<section>" with the checkbox and dropdown list.

    Examples:

      |section			                                     |
      |Paid-Through Date and Status Settings                 |
      |Invoice Item                                          |

  Scenario Outline: As a User, I can edit "Invoice Defaults"
    When I navigate to  settings
    When I select "Billing" settings
    When I select menu "Invoicing"
    When I select "Invoice Defaults" tab form Invoicing
    When I edit values of "<EnableFlexiblebillingOptionsPerSubscriber>", "<BillingOptionPerSubscriber>", "<InvoiceDay>", "<InvoiceDueDay>", "<AdvanceByAmonth>", "<TermStartDay>", "<AdvanceByAmonth>", "<Auto-payDay>", "<ApplyInvoiceDueDaySettingsTo>"  
    Then invoice defaults are updated

    Examples:
	  
	  |EnableFlexiblebillingOptionsPerSubscriber|BillingOptionPerSubscriber|InvoiceDay     |InvoiceDueDay            |AdvanceByAmonth|TermStartDay      |AdvanceByAmonth |Auto-payDay     |ApplyInvoiceDueDaySettingsTo|
	  |checked                                  |Fixed                     |21st           |22nd                     |checked        |1st               |checked         |5th             |Recurring full term invoice |
	  |unchecked                                |Fixed                     |15th           |16th                     |checked        |3rd               |checked         |7th             |Prorate / set-up fee invoice|
	  |checked                                  |Fixed                     |18th           |20th                     |checked        |2nd               |unchecked       |6th             |Custom invoices             |
      |checked                                  |Flexible                  |21st, 5th, 10th|22nd ,net23, net25, net30|checked        |net1, net10, net25|checked         |5th, net4, net10|Recurring full term invoice |
	  |unchecked                                |Flexible                  |15th           |16th ,net17, net20, net28|checked        |net1, net20, net29|checked         |7th, net4, net10|Prorate / set-up fee invoice|
	  |checked                                  |Flexible                  |18th           |20th ,net23, net25, net30|checked        |net1, net20, net29|unchecked       |5th, net4, net10|Custom invoices             |

  Scenario Outline: As a User, I can edit "Paid-Through Date and Status Settings" "<section>"
    When I navigate to settings
    When I select "Billing" settings
    When I select menu "Invoicing"
    When I select "Invoice Defaults" tab from Invoicing
    When I set values as "<Option>", "<XDaysDue>", "<CheckboxDue>", "<XDaysPastDue>", "<CheckboxPastDue>", and "<Auto-calculate to the end of term for subscribers on flexible billing>"
    Then Paid-through settings are updated

    Examples:
        
	  |Option          |XDaysDue|CheckboxDue                  |XDaysPastDue|CheckboxPastDue             |Auto-calculate to the end of term for subscribers on flexible billing|
	  |Subscriber-based|52      |Recurring full term invoices |53          |Prorate / setup fee invoices|Checked                                                              |
	  |Subscriber-based|52      |Prorate / setup fee invoices |53          |Recurring full term invoices|UnChecked                                                            |
	  |Subscriber-based|52      |Custom invoices              |53          |Custom invoices             |Checked                                                              |
	  |Invoice-based   |51      |Custom invoices              |54          |Prorate / setup fee invoices|UnChecked                                                            |
	  |Invoice-based   |51      |Recurring full term invoices |54          |Recurring full term invoices|Checked                                                              |
	  |Invoice-based   |51      |Prorate / setup fee invoices |54          |Custom invoices             |UnChecked                                                            |
	  

  Scenario Outline: As a User, I can edit "Paid-Through Date and Status Settings:Custom Invoice" "<section>"
    When I navigate to settings
    When I select "Billing" settings
    When I select menu "Invoicing"
    Then All "<tabs>" will be visible of "Invoicing" section
    Then I can select "Invoice Defaults" tab form Invoicing
    Then I can see the "Paid-Through Date and Status Settings:Custom Invoice" "<section>"
    Then I can check or uncheck "<checkbox>"
    And  I can select a "<option>" from radio button

    Examples:

      |checkbox                                                                   |option          |
      |If unpaid,rollback subscriber's paid-through date to the custom invoice's  |Invoice Due Date|
      |                                                                           |Invoice Date    |

  Scenario Outline: As a User, I can edit "Invoice Item" "<section>"
    When I navigate to settings
    When I select "Billing" settings
    When I select menu "Invoicing"
    Then All "<tabs>" will be visible of "Invoicing" section
    Then I can select "Invoice Defaults" tab form Invoicing
    Then I can see the "Invoice Item" "<section>"
    Then I can check or uncheck "<checkbox>"

    Examples:

      |checkbox                                                                   |
      |Use the item's type for the ITEM column of the table in the invoice window |


  Scenario Outline: As a user, I can select "Package Invoicing" tab from "Invoicing"
    When I navigate to  settings
    When I select "Billing" settings
    When I can select accordians "Invoicing"
    When All "<tabs>" will be visible of "Invoicing" section
    Then I can select "Package Invoicing" tab form Invoicing
    And  I can view the following "<section>"

    Examples:

      |section			                                             |
      |Invoicing for Packages                                        |
      |Invoicing for Suspended/Inactive Packages                     |
      |Reversing Charges                                             |
      |Default Total Balance Due Data (At the bottom of each invoice)|


  Scenario Outline: As a user, I can edit "Package Invoicing" "<section>"
    When I navigate to  settings
    When I select "Billing" settings
    When I can select accordians "Invoicing"
    When All "<tabs>" will be visible of "Invoicing" section
    Then I can select "Package Invoicing" "<tab>"
    Then I can view the following "<section>"
    Then I can check or uncheck the "<checkbox>"
    And  I can select a option from <RadioButton>
    Then I can click on save button to update.

    Examples:

      |checkbox     | RadioButton      |
      |Checkbox 1   | radio Button 1   |
      |Checkbox 2   | radio Button 2   |
      |Checkbox 3   | radio Button 3   |
      |Checkbox 4   | radio Button 4   |


  Scenario: As a user, I can select "Paper Invoice Fee" tab from "Invoicing"
    When I navigate to  settings
    When I select "Billing" settings
    When I can select accordians "Invoicing"
    When All "<tabs>" will be visible of "Invoicing" section
    Then I can select "Paper Invoice Fee" tab form Invoicing
    And  I can view the "Paper Invoice Fee"

  Scenario Outline: As a user, I can edit "Paper Invoice Fee" "<section>"
    When I navigate to  settings
    When I select "Billing" settings
    When I can select accordians "Invoicing"
    When All "<tabs>" will be visible of "Invoicing" section
    Then I can select Paper Invoice Fee "<tab>"
    Then I can Write discription in "text field"
    Then I can check or uncheck the "<checkbox>"
    And  I can select a value for monthly, quaterly, semi Annaul, Annual from amount "<DropDown>"
    Then I can click on save button to update.

    Examples:

      |checkbox                                                             |DropDown |
      |Allow Paper Invoice Fee Exemption for individual subscribers         |1        |
      |Allow Custom charge for Paper Invoice Fee for individual subscribers |2        |
      |Allow tax on paper invoice fees using the following tax settings     |3        |
      |                                                                     |4        |
      |                                                                     |5        |
      |                                                                     |6        |
      |                                                                     |7        |


  Scenario : As a user, I can select "Prorate Option" tab from "Invoicing"
    When I navigate to  settings
    When I select "Billing" settings
    When I can select accordians "Invoicing"
    When All "<tabs>" will be visible of "Invoicing" section
    Then I can select "Prorate Option" tab form Invoicing
    And  I can view the "Prorate Option"

  Scenario Outline: As a user, I can edit "Prorate Option" "<section>"
    When I navigate to  settings
    When I select "Billing" settings
    When I can select accordians "Invoicing"
    When All "<tabs>" will be visible of "Invoicing" section
    Then I can select "Prorate Option" "<tab>"
    Then I can click on the "<link>" to show Prorate options
    Then I can check or uncheck the "<checkbox>"
    And  I can select a option from "<Radio button>"
    And  I can click on save button to update.

    Examples:

      |checkbox                                      |link    | Radio button                       |
      |Create a saprate invoice for  prorate / setup |Link 1  | Do not prorate                     |
      |                                              |Link 2  | Add prorate to full term           |
      |                                              |Link 3  | Include prorate as a part of term  |

  Scenario : As a user, I can select "Late Fee" tab from "Invoicing"
    When I navigate to  settings
    When I select "Billing" settings
    When I can select accordians "Invoicing"
    When All "<tabs>" will be visible of "Invoicing" section
    Then I can select "Late Fee" tab form Invoicing
    And  I can view "Late Fee" section

  Scenario Outline: As a user, I can edit "Late Fee" "<section>"
    When I navigate to  settings
    When I select "Billing" settings
    When I can select accordians "Invoicing"
    When All "<tabs>" will be visible of "Invoicing" section
    Then I can select "Late Fee" "<tab>"
    Then I can check or uncheck the "<checkbox>"
    And  I can select a option from "<Radio button>"
    And  I can select a value from "<Dropdown>"
    And  I can click on save button to update.

    Examples:

      |checkbox     | Radio button      |Dropdown |
      |Checkbox 1   | radio Button 1    |value 1  |
      |Checkbox 2   | radio Button 2    |value 2  |
      |Checkbox 3   | radio Button 3    |value 3  |
      |Checkbox 4   | radio Button 4    |value 4  |


  Scenario Outline: As a user, I can select "Taxes" tab from "Invoicing"
    When I navigate to  settings
    When I select "Billing" settings
    When I can select accordians "Invoicing"
    When All "<tabs>" will be visible of "Invoicing" section
    Then I can select "Taxes" tab form Invoicing
    And  I can view "<records>" from "Taxes" table

    Examples:

      |Tax Name |Rate     |Effective Date |Criteria |Description |Active  |
      |value 1  |value 2  |value 3        |value 4  |value 5     |value 6 |
      |value 1  |value 2  |value 3        |value 4  |value 5     |value 6 |
      |value 1  |value 2  |value 3        |value 4  |value 5     |value 6 |


  Scenario Outline: As a user, I can edit "<record>" of tax table
    When I navigate to  settings
    When I select "Billing" settings
    When I can select accordians "Invoicing"
    When All "<tabs>" will be visible of "Invoicing" section
    Then I can select "Taxes" tab form Invoicing
    And  I can view "<records>" from "Taxes" table
    Then I can click on edit icon on the table
    And  A edit form will open
    Then I can check or uncheck the "<checkbox>"
    And  I can select value from "<Drop Down>"
    And  I can click on save button to update record.

    Examples:

      |checkbox     |Drop Down  |
      |Checkbox 1   |value 1    |
      |Checkbox 2   |value 2    |
      |Checkbox 3   |value 3    |
      |Checkbox 4   |value 4    |
      |Checkbox 5   |value 5    |

  Scenario Outline: As a user, I can Add new "<record>" to tax table
    When I navigate to  settings
    When I select "Billing" settings
    When I can select accordians "Invoicing"
    When All "<tabs>" will be visible of "Invoicing" section
    Then I can select "Taxes" tab form Invoicing
    And  I can view "Taxes" table
    Then I can click on "Add New"
    And  A "Add New" form will open
    Then I can add name of the tax in the Text Box.
    And  I can check or uncheck the "<checkbox>"
    And  I can select value from "<Drop Down>"
    And  I can click on save button to update record.

    Examples:

      |checkbox     |Drop Down  |
      |Checkbox 1   |value 1    |
      |Checkbox 2   |value 2    |
      |Checkbox 3   |value 3    |
      |Checkbox 4   |value 4    |
      |Checkbox 5   |value 5    |

  Scenario Outline: As a user, I can delete "<record>" of tax table
    When I navigate to  settings
    When I select "Billing" settings
    When I can select accordians "Invoicing"
    When All "<tabs>" will be visible of "Invoicing" section
    Then I can select "Taxes" tab form Invoicing
    And  I can view "Taxes" table
    And  I can click on "<delete>" button
    Then A confirmation message will open
    Then I can click delete to delete the record

    Examples:

      |Tax Name |Rate     |Effective Date |Criteria |Description |Active |delete|
      |value 1  |value 2  |value 3        |value 4  |value 5     |yes    |delete|
      |value 1  |value 2  |value 3        |value 4  |value 5     |yes    |delete|
      |value 1  |value 2  |value 3        |value 4  |value 5     |No     |delete|
      |value 1  |value 2  |value 3        |value 4  |value 5     |yes    |delete|


