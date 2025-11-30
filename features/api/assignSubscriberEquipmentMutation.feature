Feature: Automation of assignSubscriberEquipment API

@Automation-of-Assign-Subscriber-Equipment-Mutation
    Scenario: Verify that the equipment should be assigned to subscriber successfully using assignSubscriberEquipment Mutation
        Given I have a valid authorization token
        When  I execute the assignSubscriberEquipment mutation in GraphQL Playground
        And   I provide the variables for assignSubscriberEquipment mutation
                | ispId        | 2285    |
                | equipmentId  | 19      |
                | subscriberId | 2037254 |

        Then  I include the authorization token in the headers for assignSubscriberEquipment mutation
        And   I should receive a successful response confirming the assignSubscriberEquipment operatrion