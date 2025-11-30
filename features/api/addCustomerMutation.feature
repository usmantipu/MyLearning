Feature: Automation of addCustomer API

@Automation-of-Add-Customer-Mutation
    Scenario: Verify that the customer should be added successfully using addCustomer Mutation
        Given I have a valid authorization token
        When  I execute the addCustomer mutation in GraphQL Playground
        And   I provide the variables for addCustomer mutation
        Then  I include the authorization token in the headers for addCustomer mutation
        And   I should receive a successful response confirming the addCustomer operatrion