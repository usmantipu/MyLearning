Feature: Automation of Mass Email Trigger on eCheck Return

    Background:
        Given I open Visp Web to Access IRM
        And   I login with username and password to use IRM
            | jcabangonautomation | Test@1234 |

@Automation-of-Mass-Email-Trigger
    Scenario: Verify that an active trigger is added for eCheck payment return on Scheduled Emails tab
        When  I open message templete from settings
        When  I add an email template for "eCheck returned"
        When  I set the value of the Current Filtered List field to "Any subscriber whose eCheck payment has been returned"
        When  I set sample content for the "Return" email to be sent
        When  I click Save button
        Then  This trigger should be added to the Active Trigger list on the Scheduled Emails tab
@Automation-of-Mass-Email-Trigger
    Scenario: Verify that an active trigger is added for voiding of payments on Scheduled Emails tab
        When  I open message templete from settings
        When  I add an email template for "eCheck void"
        When  I set the value of the Current Filtered List field to "Any subscriber whose payment has been voided"
        When  I set sample content for the "Voided" email to be sent
        When  I click Save button
        Then  This trigger should be added to the Active Trigger list on the Scheduled Emails tab
@Automation-of-Mass-Email-Trigger
    Scenario: Verify an EMAIL-SEND log is added on the Logs table when eCheck payment is returned
        When I enter the GraphQL Test Environment on the browser
        When I call the deletePayment mutation
        When I enter the following variables for deletePayment
        When I enter authorization token and execute deletePayment mutation
        Then The delete mutation is executed successfully
        Then The Logs should show a history log type of EMAIL - SEND
@Automation-of-Mass-Email-Trigger
    Scenario: Verify an EMAIL-SEND log is added on the Logs table when eCheck payment is voided
        When I enter the GraphQL Test Environment on the browser
        When I call the voidPayment mutation
        When I enter the following variables for voidPayment
        When I enter authorization token and execute voidPayment mutation
        Then The void mutation is executed successfully
        Then The Logs should show a history log type of EMAIL - SEND
@Automation-of-Mass-Email-Trigger
    Scenario: Verify an EMAIL-SEND log is added on the Logs table when credit card payment is voided
        When I enter the GraphQL Test Environment on the browser for credit card payment
        When I call the voidPayment mutation
        When I enter the following variables for voidPayment
        When I enter authorization token and execute voidPayment mutation
        Then The void mutation is executed successfully
        Then The Logs should show a history log type of EMAIL - SEND