Feature: Automation of subscriberSignup API

@Automation-of-Subscriber-Signup-Mutation
    Scenario: Verify that the subscriber should be signed up successfully using subscriberSignup Mutation
        Given I have a valid authorization token
        When  I execute the subscriberSignup mutation in GraphQL Playground
        And   I provide the variables for subscriberSignup mutation
                | firstName            | Test API               |
                | lastName             | Man                    |
                | password             | SecretPass123!         |
                | main_address1        | 24496 Arizona Plaza    |
                | main_state           | AR                     |
                | main_city            | North Littel Rock      |
                | main_zip             | 72199                  |
                | main_phone1          | (501) 524-1203         |
                | invoice_day          | 1                      |
                | term_start_day       | 1                      |
                | due_day              | 25                     |
                | inputPackageId       | 61374                  |
                | paymentType          | Credit Card            |
                | depositAmount        | 50                     |
                | macAddress           | 00:1A:2B:3C:4D:5E      |
                | notes                | Signup via GraphQL API |
                | clientIP             | 192.168.1.100          |
                | serverName           | automation-server      |


        Then  I include the authorization token in the headers for subscriberSignup mutation
        And   I should receive a successful response confirming the subscriberSignup operatrion