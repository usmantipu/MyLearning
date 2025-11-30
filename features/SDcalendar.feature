@SDcalendar
Feature: Tickets on the Calendar

  Background: 
			Given I open UBO webapp
			And I login with username jcabangonautomation and password Test@1234
   
  @regression2021 @regression2021-SDCalendar @TA-63 @regression-SD
  Scenario: As a User, I can see Calendar when navigate to Service Desk > Calendar
    When I navigate to Service Desk
    When I go to service desk > Calendar
    Then I should see the Calendar view
  @regression2021 @regression2021-SDCalendar @TA-63 @regression-SD
  Scenario: As a User, I can view the list of Technicians
    When I create a Technician from settings > users
    When  I navigate to Service Desk
    And  I go to Resource view of Calendar
    Then I should see the created user in the list of Technicians
#  @regression2021 @regression2021-SDcalendar
  Scenario: As a User, I can be redirected to Calendar when add a new Ticket by adding its schedule and clicking 'Save' button
    When I create a ticket with its schedule and save it
    Then I am redirected to the Calendar
  @regression2021 @regression2021-SDCalendar @TA-63 @TA-482 @regression-SD
  Scenario: As a User, I can view Tickets schedule events on Calendar 
    When I navigates to subscribers list
		And  I go to Logs section
		And  I add a ticket from Logs section
    And  I close the right drawer
    When I navigate to Service Desk
    And I select List View
    And I open first ticket from Ticket List
    And  I schdule opened ticket and keep Details
    And I open first ticket from Ticket List
    And I keep ticket docked-in
    And I go to service desk > Calendar
    And  I go to Calendar > Week view
    Then I should be able to see the ticket event on Calendar
  @regression2021 @regression2021-SDCalendar @TA-63 @regression-SD
  Scenario: As a User, I can view ticket 'Ticket type' and 'Subscriber Name' on ticket event
    When I navigates to subscribers list
		And  I go to Logs section
		And  I add a ticket from Logs section
    And  I close the right drawer
    When I navigate to Service Desk
    And I select List View
    And I open first ticket from Ticket List
    And  I schdule opened ticket and keep Details
    And I open first ticket from Ticket List
    And I keep ticket docked-in
    And I go to service desk > Calendar
    And  I go to Calendar > Week view
    Then I should be able to see it on calendar with its ticket type and subscriber name
  @regression2021 @regression2021-SDCalendar @TA-63 @regression-SD
  Scenario: As a User, I can see 'Subscriber Name', 'Ticket ID' and 'Address' when hover on ticket event in Calendar
    When I navigates to subscribers list
		And  I go to Logs section
		And  I add a ticket from Logs section
    And  I close the right drawer
    When I navigate to Service Desk
    And I select List View
    And I open first ticket from Ticket List
    And  I schdule opened ticket and keep Details
    And I open first ticket from Ticket List
    And I keep ticket docked-in
    And I go to service desk > Calendar
    And  I go to Calendar > Week view
    And  I hover on the ticket even on Calendar
    Then I should be able to see Subscriber name, ticket ID, and address
  #@regression2021 @regression2021-SDCalendar @TA-63 @regression-SD
  Scenario: As a User, I can view Calendar 'Month' view
    When I navigates to subscribers list
		And  I go to Logs section
		And  I add a ticket from Logs section
    And  I close the right drawer
    When I navigate to Service Desk
    And I select List View
    And I open first ticket from Ticket List
    And  I schdule opened ticket and keep Details
    And I go to service desk > Calendar
    And  I go to Calendar > Month view
    Then I should be able to see the ticket event on month view
  @regression2021 @regression2021-SDCalendar @TA-63 @regression-SD
  Scenario: As a User, I can view Calendar 'Week' view
    When I navigates to subscribers list
		And  I go to Logs section
		And  I add a ticket from Logs section
    And  I close the right drawer
    When I navigate to Service Desk
    And I select List View
    And I open first ticket from Ticket List
    And  I schdule opened ticket and keep Details
    And I open first ticket from Ticket List
    And I keep ticket docked-in
    And I go to service desk > Calendar
    And  I go to Calendar > Week view
    Then I should be able to see the ticket event on week view
  @regression2021 @regression2021-SDCalendar @TA-63 @regression-SD
  Scenario: As a User, I can view Calendar 'Timeline' view
    When I navigates to subscribers list
		And  I go to Logs section
		And  I add a ticket from Logs section
    And  I close the right drawer
    When I navigate to Service Desk
    And I select List View
    And I open first ticket from Ticket List
    And  I schdule opened ticket for current date and keep Details
    And I go to service desk > Calendar
    And  I go to Calendar > Resource timeline
    Then I should be able to see the ticket event on resource timeline
  @regression2021 @regression2021-SDCalendar @TA-63 @regression-SD
  Scenario: As a User, I can view docked-in ticket event will be shown as highlighted
    When I navigates to subscribers list
		And  I go to Logs section
		And  I add a ticket from Logs section
    And  I close the right drawer
    When I navigate to Service Desk
    And I select List View
    And I open first ticket from Ticket List
    And  I schdule opened ticket and keep Details
    And I open first ticket from Ticket List
    And I keep ticket docked-in
    And I go to service desk > Calendar
    And  I go to Calendar > Week view
    Then I can see that the ticket event is highlighted
  @regression2021 @regression2021-SDCalendar @TA-63 @regression-SD
  Scenario: As a User, I can view Ticket in dock by clicking on ticket event
    When I navigates to subscribers list
		And  I go to Logs section
		And  I add a ticket from Logs section
    And  I close the right drawer
    When I navigate to Service Desk
    And I select List View
    And I open first ticket from Ticket List
    And  I schdule opened ticket and keep Details
    And I open first ticket from Ticket List
    And I keep ticket docked-in
    And I go to service desk > Calendar
    And  I go to Calendar > Week view
    And I click on ticket event
    Then I can see that ticket details are opened in the dock

  