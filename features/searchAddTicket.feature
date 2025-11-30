@searchAddTicket
Feature: Add ticket search
  Background: 
			Given I open UBO webapp
			And I login with username jcabangonautomation and password Test@1234

@regression2021-searchAddTicket @regression-CRM
  Scenario: As a user, I can search the subscriber in the Add ticket using the subscriber's "Username" option.
    When I navigates to subscribers list
    And  I get subscriber list first row data
    And  I navigate to Add Ticket page from top menu
    Then I can search subscriber by giving username
    Then I can select subscriber searched by username
@regression2021 @regression2021-searchAddTicket @regression-CRM
  Scenario: As a user, I can search the subscriber in the Add ticket using the subscriber's "First Name" option.
    When I navigates to subscribers list
    And  I get subscriber list first row data
    And  I navigate to Add Ticket page from top menu
    Then I can search subscriber by giving first name
    Then I can select subscriber searched by first name
@regression2021 @regression2021-searchAddTicket @regression-CRM
  Scenario: As a user, I can search the subscriber in the Add ticket using the subscriber's "Last Name" option.
    When I navigates to subscribers list
    And  I go to subscriber details page
    And  I get subscriber last name
    And  I navigate to Add Ticket page from top menu
    Then I can search subscriber by giving last name
    Then I can select subscriber searched by last name
@regression2021 @regression2021-searchAddTicket @regression-CRM
  Scenario: As a user, I can search the subscriber in the Add ticket using the subscriber's "E-mail address" option.
    When I navigates to subscribers list
    And  I go to subscriber details page
    And  I get subscriber email address
    And  I navigate to Add Ticket page from top menu
    Then I can search subscriber by giving email address "cdymick7@automationtest.com"
    Then I can select subscriber searched by email address
@regression2021 @regression2021-searchAddTicket @regression-CRM
  Scenario: As a user, I can search the subscriber in the Add ticket using the subscriber's "Address" option.
    When I navigates to subscribers list
    And  I go to subscriber details page
    And  I get subscriber address
    And  I navigate to Add Ticket page from top menu
    Then I can search subscriber by giving address
    Then I can select subscriber searched by address
@regression2021 @regression2021-searchAddTicket @TA-323 @regression-CRM
  Scenario: As a user, I can search the subscriber in the Add ticket using the subscriber's "City" option.
    When I navigates to subscribers list
    And  I select second subscriber from subscriber list
    And  I go to subscriber details page
    And  I get subscriber city
    And  I navigate to Add Ticket page from top menu
    Then I can search subscriber by giving city
    Then I can select subscriber searched by city
#Out of scope - More details in https://vispnet.atlassian.net/browse/TA-321
#@regression2021 @regression2021-searchAddTicket
  Scenario: As a user, I can search the subscriber in the Add ticket using the subscriber's "State" option.
    When I navigates to subscribers list
    And  I go to subscriber details page
    And  I get subscriber state
    And  I navigate to Add Ticket page from top menu
    Then I can search subscriber by giving state
    Then I can select subscriber searched by state
@regression2021 @regression2021-searchAddTicket @regression-CRM
  Scenario: As a user, I can search the subscriber in the Add ticket using the subscriber's "ZIP" option.
    When I navigates to subscribers list
    And  I go to subscriber details page
    And  I get subscriber zip
    And  I navigate to Add Ticket page from top menu
    Then I can search subscriber by giving zip
    Then I can select subscriber searched by zip
#Out of scope - More details in https://vispnet.atlassian.net/browse/TA-321
#@regression2021 @regression2021-searchAddTicket
  Scenario: As a user, I can search the subscriber in the Add ticket using the subscriber's "Home Phone" option.
    When I go to subscribers list
    And  I open a ticket from top menu
    Then I can search subscriber using home phone
    Then I can select the subscriber
#Out of scope - More details in https://vispnet.atlassian.net/browse/TA-321
#@regression2021-searchAddTicket
  Scenario: As a user, I can search the subscriber in the Add ticket using the subscriber's "Work Phone" option.
    When I go to subscribers list
    And  I open a ticket from top menu
    Then I can search subscriber using work phone
    Then I can select the subscriber
#Out of scope - More details in https://vispnet.atlassian.net/browse/TA-321    
#@regression2021-searchAddTicket
  Scenario: As a user, I can search the subscriber in the Add ticket using the subscriber's "Cell Phone" option.
    When I go to subscribers list
    And  I open a ticket from top menu
    Then I can search subscriber using cell phone
    Then I can select the subscriber
@regression2021 @regression2021-searchAddTicket @regression-CRM
  Scenario: As a user, when search applied, user can view that all matching search results appears in different rows each row contains a different fields.
    When I navigates to subscribers list
    And  I get subscriber list first row data
    And  I navigate to Add Ticket page from top menu
    Then I can search subscriber by giving username
    Then I can see that matching results appear as rows