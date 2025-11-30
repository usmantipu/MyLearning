Feature: Automation of Equipment Table Search

@Automation-of-Void-Payment-Mutation
    Scenario: As a user, I can see search icon in Equipment Profile Table
        Given I have a valid authorization token
        And   I make a payment and get its payment ID
        When  I execute the voidPayment mutation in GraphQL Playground
        And   I provide the variables
        Then  I include the authorization token in the headers
        And   I should receive a successful response confirming the void operation