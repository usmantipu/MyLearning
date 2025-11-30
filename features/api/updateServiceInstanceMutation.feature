Feature: Automation of updateServiceInstance API

@Automation-of-Update-Service-Instance-Mutation
    Scenario: Verify that the service instance should be updated successfully using updateServiceInstance Mutation
        Given I have a valid authorization token
        When  I execute the updateServiceInstanceMutation in GraphQL Playground
        And   I provide the variables for updateServiceInstance mutation
                | serviceNumber | 9913303         |
                | status         | ACTIVE          |
                | action         | SYNC            |
                | ispId         | 101             |

        Then  I include the authorization token in the headers for updateServiceInstance mutation
        And   I should receive a successful response confirming the updateServiceInstanceMutation operatrion