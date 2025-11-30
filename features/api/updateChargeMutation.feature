Feature: Automation of updateCharge API

@Automation-of-Update-Charge-Mutation
    Scenario: Verify that the charge should be updated successfully using UpdateCharge Mutation
        Given I have a valid authorization token
        When  I execute the UpdateCharge mutation in GraphQL Playground
        And   I provide the variables for UpdateCharge mutation
                | type           | INVOICE            |
                | id             | 61456225           |
                | itemId         | 132638             |
                | itemName       | Wireless           |
                | itemDesc       | Updated: Wireless  |
                | itemQuantity   | 1                  |
                | itemRate       | 5                  |
                | itemTotal      | 5                  |
                | taxId          | 1                  |
                | taxType        | GST                |

        Then  I include the authorization token in the headers for UpdateCharge mutation
        And   I should receive a successful response confirming the UpdateCharge operatrion