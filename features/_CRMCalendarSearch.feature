# CRMCalendarSearch



@CRM
Feature: CRM ticket search through Calendar control

  Background:
    Given I open UBO webapp
    And I login with username automationbeta and password Testing1!
    And I go to CRM ticket listing

  @regression2021  @regression2021-CRMCalendarSearch
  Scenario: As a user, I want to view today's tickets on the CRM listing
    When I create a new ticket from top menu
    And I can apply filter on ticket listing per test condition
      | Today |
    Then I should see records in listing as per test condition
    And I should see records from applied days up to today on ticket listing

  @regression2021  @regression2021-CRMCalendarSearch
  Scenario: As a user, I view yesterday's tickets on the CRM listing
    # When I create a new ticket from top menu
    And  I can apply filter on ticket listing per test condition
      | Yesterday |
    Then I should see records in listing as per test condition
    And I should see records from applied days up to today on ticket listing


  @regression2021  @regression2021-CRMCalendarSearch
  Scenario: As a user, I view the current week tickets on the CRM listing
    When I create a new ticket from top menu
    And  I can apply filter on ticket listing per test condition
      | This Week |
    Then I should see records in listing as per test condition
    And I should see records from applied days up to today on ticket listing

  @regression2021  @regression2021-CRMCalendarSearch
  Scenario: As a user, I view the Last week tickets on the CRM listing
    When I create a new ticket from top menu
    And  I can apply filter on ticket listing per test condition
      | Last Week |
    Then I should see records in listing as per test condition
    And I should see records from applied days up to today on ticket listing

  @regression2021  @regression2021-CRMCalendarSearch
  Scenario: As a user, I view current Month old tickets on the CRM listing
    When I create a new ticket from top menu
    And  I can apply filter on ticket listing per test condition
      | This Month |
    Then I should see records in listing as per test condition
    And I should see records from applied days up to today on ticket listing

  @regression2021  @regression2021-CRMCalendarSearch
  Scenario: As a user, I view Last Month old tickets on the CRM listing
    When I create a new ticket from top menu
    And  I can apply filter on ticket listing per test condition
      | Last Month |
    Then I should see records in listing as per test condition
    And I should see records from applied days up to today on ticket listing

  @regression2021  @regression2021-CRMCalendarSearch
  Scenario: As a user, I view tickets from x days up to today on the CRM listing
    When I create a new ticket from top menu
    And  I can apply filter from days up to today on ticket listing
      | 4 |
    Then I should see records in listing as per test condition

  @regression2021  @regression2021-CRMCalendarSearch 
  Scenario: As a user, I view tickets from x days starting today on the CRM listing
    When I create a new ticket from top menu
    And  I can apply filter from days starting today on ticket listing
      | 9 |
    Then I should see records in listing as per test condition

  @regression2021  @regression2021-CRMCalendarSearch
  Scenario: As a User, I can view Ticket in dock by clicking on ticket event in CRM
    When I create a new ticket from top menu
    And I can apply filter on ticket listing per test condition
      | Reset |
    And I click on the ticket to view Ticket in dock
    Then I should see the clicked ticket opened in dock
    