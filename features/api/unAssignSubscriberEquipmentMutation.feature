Feature: Automation of unassignSubscriberEquipment API

@Automation-of-Unassign-Subscriber-Equipment-Mutation
    Scenario: Verify that the equipment should be unassigned to subscriber successfully using unassignSubscriberEquipment Mutation
        Given I have a valid authorization token
        When  I execute the unassignSubscriberEquipment mutation in GraphQL Playground
        And   I provide the variables for unassignSubscriberEquipment mutation
                | equipmentId  | 19 |
                | locationId   | 6  |

        Then  I include the authorization token in the headers for unassignSubscriberEquipment mutation
        And   I should receive a successful response confirming the unassignSubscriberEquipment operatrion