Feature: API Test for Preview Line Item
    @apiTest-perviewLineItem
  Scenario: Retrieve preview line item details
    Given the user has valid authorization token
    When the user requests the preview line item
    Then the preview line item response should have correct item details