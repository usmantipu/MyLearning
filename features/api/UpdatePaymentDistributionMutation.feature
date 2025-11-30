Feature: Automation of updatePaymentDistribution

@Automation-of-Update-Payment-Distribution-Mutation
    Scenario: Verify that the payment distribution should be updated successfully using UpdatePaymentDistribution Mutation
        Given I have a valid authorization token
        When  I execute the UpdatePaymentDistribution mutation in GraphQL Playground
        And   I provide the variables for UpdatePaymentDistribution mutation
                | paymentId      | 23486974  |
                | amount         | 50        |
                | type           | INVOICE   |
                | distributionId | 118162607 |

        Then  I include the authorization token in the headers for UpdatePaymentDistribution mutation
        And   I should receive a successful response confirming the UpdatePaymentDistribution operatrion