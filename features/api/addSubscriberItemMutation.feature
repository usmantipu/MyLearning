Feature: Automation of addSubscriberItem API

@Automation-of-Add-Subscriber-Item-Mutation
    Scenario: Verify that the subscriber item should be added successfully using addSubscriberItem Mutation
        Given I have a valid authorization token
        When  I execute the addSubscriberItem mutation in GraphQL Playground
        And   I provide the variables for addSubscriberItem mutation
                | customerId | 2037254 |
                | itemId     | 152764  |
                | entityId   | 0       |
                | quantity   | 1       |

        Then  I include the authorization token in the headers for addSubscriberItem mutation
        And   I should receive a successful response confirming the addSubscriberItem operatrion