@AddTicket
Feature: Add task in the ticket

  Background: 
			Given I open web application
			And I login with my credentials
			|jcabangonautomation|Test@1234|

@regression2021 @regression2021-ServiceDesk-addTask @regression-SD
  Scenario: As a User, I can add task in an existing ticket for technician
    When I create a ticket from top menu
    And  I add a task for technician
    Then The task should be saved in the ticket


@regression2021 @regression2021-ServiceDesk-addTask @regression-SD
  Scenario: As a User, I can add task in a new ticket for technician
    When I create a ticket from top menu
    And  I add a task for technician
    Then The task should be saved in the ticket

@regression2021 @regression2021-ServiceDesk-addTask @regression-SD
  Scenario: As a User, I can add multiple tasks to a new ticket for technician
    When I create a ticket from top menu
    And  I add multiple tasks for technician
    Then all the tasks should be saved in the ticket

#Bug:TA-1247 ISP logs do not show Ticket related information
#@regression2021 @regression2021-ServiceDesk-addTask @regression-SD
  Scenario: As a User, I can see logs of task at ISP logs
    When I create a ticket from top menu
    And  I add a task for technician
    And  I go to Settings to verify ISP logs
    Then The task log should exist in ISP logs

@regression2021 @regression2021-ServiceDesk-addTask @regression-SD
  Scenario: As a User, I can see logs of task in activity section
    When I create a ticket from top menu
    And  I add a task for technician
    Then I can see the logs of task in the activity section

    
