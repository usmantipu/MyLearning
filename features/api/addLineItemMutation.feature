Feature: Automation of addLineItem API (Package, other item)

@Automation-of-Add-Line-Item-Mutation
    Scenario: Verify that the line item / package should be added to subscriber successfully using addLineItem Mutation
        Given I have a valid authorization token
        When  I execute the addLineItem mutation in GraphQL Playground
        And   I provide the variables for addLineItem mutation
                | id           | 122424736          |
                | type         | INVOICE            |
                | customerId   | 2037255            |
                | date         | 2025-09-01         |
                | endDate      | 2025-09-30         |
                | itemId       | 132638             |
                | itemName     | 1 GB Top-up Data   |
                | itemDesc     | Extra data package |
                | itemQuantity | 1                  |
                | itemRate     | 5                  |
                | itemTotal    | 5                  |
                | taxId        | 1                  |
                | taxType      | GST                |

        Then  I include the authorization token in the headers for addLineItem mutation
        And   I should receive a successful response confirming the addLineItem operatrion