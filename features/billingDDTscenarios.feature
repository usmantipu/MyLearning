@DDT
Feature: DDT scenarios for Billing

Use this feature to execute Data driver testing scenarios for billing and invoicing.

  Background: 
			Given I have test data available in the database
			


  Scenario Outline: As a developer, I want to verify invoice of a subscriber under an ISP against a package and item code
      When I provide input parameters to test the invoice
      Then The invoice should be correctly calculated based on <ispID>, <customerID>, <packageID>, <itemCode>, <itemQty>, <isProrate> 
    Examples:
    |ispID|customerID|packageID|itemCode|itemQty|isProrate|
    |877  |2448310   |51552    |66773   |1      |TRUE     |