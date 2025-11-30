Feature: Automation of addPayment

@Automation-of-Add-Payment-Mutation
    Scenario: Verify that the payment should be added successfully using addPaymentMutation Mutation
        Given I have a valid authorization token
        When  I execute the addPaymentMutation mutation in GraphQL Playground
        And   I provide the variables for addPaymentMutation mutation
                | customerId       | 2037252                       |
                | paymentMemo      | Api payment                   |
                | routingNumber    | 091000019                     |
                | accountNumber    | 112255                        |
                | echeckType       | Checking                      |
                | paymentMethod    | eCheck                        |
                | paymentAmount    | 5                             |
                | paymentDate      | 2025-09-21                    |
                | merchantOptionId | 10                            |
                | type             | MANUAL                        |
                | source           | visp_web                      |
                | paymentReference | NACHA                         |
                | address          | 944 Lake View Lane Brentwood  |
                | city             | New York                      |
                | state            | NY                            |
                | zipCode          | 10001                         |

        Then  I include the authorization token in the headers for addPaymentMutation mutation
        And   I should receive a successful response confirming the addPaymentMutation operatrion