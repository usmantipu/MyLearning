Feature: Automation of updatePackageInstance API

@Automation-of-Update-Package-Instance-Mutation
    Scenario: Verify that the package instance should be updated successfully using updatePackageInstance Mutation
        Given I have a valid authorization token
        When  I execute the updatePackageInstance mutation in GraphQL Playground
        And   I provide the variables for updatePackageInstance mutation
                | customerId            | 2037254          |
                | packageNumber         | 3109632          |
                | packageName           | Premium Internet |
                | hibernationLimit      | 0                |
                | date                  | 2025-08-21       |
                | billStartOption       | ON_DATE          |
                | contractEndDate       | 2026-08-21       |

        Then  I include the authorization token in the headers for updatePackageInstance mutation
        And   I should receive a successful response confirming the updatePackageInstance operatrion