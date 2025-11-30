# SDcalendarSearch

@ServiceDesk
Feature: CRM search through Calendar control

  Background:
    Given I open UBO webapp
    And I login with username jcabangonautomation and password Test@1234
    And I go to CRM list
    And I select List View on CRM page
  
  @regression2021  @regression2021-SDCalendarSearch @regression-SD
  Scenario: As a user, I view today's tickets on the CRM list
    When I add a new ticket from top menu
    And  I can apply filter per test condition
      | Today |
  #  Then I should see records as per test condition
    Then I should see records from applied days up to today
 
  @regression2021  @regression2021-SDCalendarSearch @regression-SD
  Scenario: As a user, I view 7-days old tickets on the CRM list
    When I add a new ticket from top menu
    And  I can apply filter per test condition
      | 7-days |
    #Then I should see records as per test condition
    Then I should see records from applied days up to today
  
  @regression2021  @regression2021-SDCalendarSearch @regression-SD
  Scenario: As a user, I view 30-days old tickets on the CRM list
    When I add a new ticket from top menu
    And  I can apply filter per test condition
      | 30-days |
  #  Then I should see records as per test condition
    Then I should see records from applied days up to today
  
  @regression2021  @regression2021-SDCalendarSearch @regression-SD
  Scenario: As a user, I view 90-days old tickets on the CRM list
    When I add a new ticket from top menu
    And  I can apply filter per test condition
      | 90-days |
  #  Then I should see records as per test condition
    Then I should see records from applied days up to today

  @regression2021  @regression2021-SDCalendarSearch @regression-SD
  Scenario: As a user, I view 360-days old tickets on the CRM list
    When I add a new ticket from top menu
    And  I can apply filter per test condition
      | 360-days |
  #  Then I should see records as per test condition
    Then I should see records from applied days up to today
  
  @regression2021  @regression2021-SDCalendarSearch @regression-SD
  Scenario: As a user, I view tickets from x days up to today on the CRM list
    When I add a new ticket from top menu
    And  I can apply filter from "6" days up to today
    Then I should see records from applied days up to today
