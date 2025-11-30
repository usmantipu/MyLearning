Feature: View/Edit Billing Payment

  User can view/edit the Accounting Controls, Forms, Merchant Accounts, Past Due Protection

  Background:
    Given I open UBO webapp
    And   I login with username "dreamteam2" and password "str0ngP@ss2"

  Scenario Outline: As a user, I can select "Payment" from "Billing" settings
    When I navigate to  settings
    When I select "Billing" settings
    When I select accordian "Payment"
    Then All "<tabs>" will be visible of "Payment"

    Examples:

      |tabs			        |
      |Accounting Controls  |
      |Forms                |
      |Merchant Accounts    |
      |Past Due Protection  |

  Scenario: As a user, I can select "Accounting Controls" tab from "Payment"
    When I navigate to  settings
    When I select "Billing" settings
    When I select accordians "Payment"
    Then All "<tabs>" will be visible of "Payment" section
    Then I can select "Accounting Controls" tab form "Payment"
    And  I can view the content of "Accounting Controls" "<tab>"

  Scenario Outline: As a user, I can edit "Accounting Controls" "<tab>" values
    When I navigate to  settings
    When I select "Billing" settings
    When I select accordians "Payment"
    Then All "<tabs>" will be visible of "Payment" section
    Then I can select "Accounting Controls" tab form "Payment"
    Then I can check or uncheck the "<checkbox>"
    And  I can select value from the "<Drop down>" list
    Then I can click on save button to save the changes

    Examples:

      |checkbox     |Drop down  |
      |Checkbox 1   |value 1    |
      |Checkbox 2   |value 2    |
      |Checkbox 3   |value 3    |
      |Checkbox 4   |value 4    |
      |             |value 5    |
      |             |value 6    |

  Scenario : As a user, I can select "Forms" tab from "Payment"
    When I navigate to  settings
    When I select "Billing" settings
    When I select accordians "Payment"
    Then All "<tabs>" will be visible of "Payment" section
    Then I can select "Forms" tab form "Payment"
    And  I can view the content of "Forms"

  Scenario : As a user, I edit the content "Forms" tab
    When I navigate to  settings
    When I select "Billing" settings
    When I select accordians "Payment"
    Then All "<tabs>" will be visible of "Payment" section
    Then I select "Forms" tab form "Payment"
    Then I can edit "<Invoice messge>" field of the "Forms"
    And  I can edit "<Statement messge>" field of the "Forms"
    And  I can edit "<Custom messge>" field of the "Forms"
    And  I can edit "<Payment messge>" field of the "Forms"
    And  I can set "<Logo>" and color for that "<logo>"
    Then I can click on the "SAVE" button to save the chagnes.

  Scenario Outline : As a user, I can select "Merchant Accounts" tab from "Payment"
    When I navigate to  settings
    When I select "Billing" settings
    When I select accordians "Payment"
    Then All "<tabs>" will be visible of "Payment" section
    Then I can select "Merchant Accounts" tab form "Payment"
    And  I can view the following "<sections>" of "Merchant Accounts"

    Examples:

      |sections			                                    |
      |Merchant Service Provider for Receive Payment Window |
      |Auto-pay                                             |

  Scenario Outline : As a user, I can edit the "<sections>" of "Merchant Accounts" tab
    When I navigate to  settings
    When I select "Billing" settings
    When I select accordians "Payment"
    Then All "<tabs>" will be visible of "Payment" section
    Then I can select "Merchant Accounts" tab form "Payment"
    Then I can check or uncheck the "<checkbox>"
    And  I can select value from the "<Drop down>" list
    And  I can edit the "username" and "password" field
    Then I can click on save button to save the changes

    Examples:

      |checkbox     |Drop down  |
      |Checkbox 1   |value 1    |
      |Checkbox 2   |value 2    |
      |Checkbox 3   |value 3    |
      |Checkbox 4   |value 4    |
      |             |value 5    |
      |             |value 6    |

  Scenario : As a user, I can select "Past Due Protection" tab from "Payment"
    When I navigate to  settings
    When I select "Billing" settings
    When I select accordians "Payment"
    When I select "Past Due Protection" tab form "Payment"
    Then  I can view "Past Due Protection"

  Scenario: As a user, I can edit "Past Due Protection" tab
    When I navigate to  settings
    When I select "Billing" settings
    When I select accordian "Payment"
    When I select "Past Due Protection" tab form "Payment"
    When I check the "Enable Past Due Protection" Checkbox
	Then "Run the past due protection on" field becomes enabled
	Then "Add Past Due Protection Fee to subscribers with the Past Due Protection" becomes enabled
    
  Scenario Outline: As a user, I can edit "Past Due Protection" tab and set it for specific day
    When I navigate to  settings
    When I select "Billing" settings
    When I select accordian "Payment"
    When I select "Past Due Protection" tab form "Payment"
    When I check the "Enable Past Due Protection" Checkbox
	Then I set the "<specific day>" of the month
	
    Examples:

      |specific day |
      |14th         |
	  |24th         |
	  
  Scenario Outline: As a user, I can edit "Past Due Protection" tab and set past due protection fee
    When I navigate to  settings
    When I select "Billing" settings
    When I select accordian "Payment"
    When I select "Past Due Protection" tab form "Payment"
    When I check the "Enable Past Due Protection" Checkbox
	When I set the "<specific day>" of the month
	When I check "Add Past Due Protection Fee to subscribers with the Past Due Protection"
	Then I set "<Monthly>", "<Quaterly>", "<Semi-Annual>", and "<Annual>" fee
	
    Examples:

      |specific day |Monthly |Quaterly |Semi-Annual |Annual |
      |14th         |1.00    |0.50     |2.50        |3.00   |
	  |24th         |2.50    |3.50     |4.50        |4.99   |
      