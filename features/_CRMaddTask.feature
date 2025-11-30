@AddTicket

Feature: Add task in the ticket

  Background: 
      	Given I open web application
	And I login with my credentials
	# |automationbeta|Testing1!|
	|jcabangonautomation|Test@1234|

@regression2021 @regression2021-crmAddTask
  Scenario: As a user of CRM, I can add task in an existing ticket for technician
    When I open an existing ticket in CRM
    And  I add a task for technician in the ticket
    Then The task should be saved inside ticket

@regression2021 @regression2021-crmAddTask
  Scenario: As a user of CRM, I can add task in a new ticket for technician
    When I create ticket from top menu
    And  I add a task for technician in the ticket
    Then The task should be saved inside ticket

  
@regression2021 @regression2021-crmAddTask
  Scenario: As a user of CRM, I can add multiple tasks to a new ticket for technician
    When I create ticket from top menu
    And  I add more than one tasks for technician
    Then I make sure that all the tasks should be saved in the ticket
    

# missing feature in the application for adding the task in the ISP logs.
  Scenario: As a user of CRM, I can see logs of task at ISP logs
    When I create ticket from top menu
    And  I add a task for technician in the ticket
    And  I go to Settings in order to verify the ISP logs
    # following assertion was updated
    Then The task should be logged in ISP logs

@regression2021 @regression2021-crmAddTask
  Scenario: As a user of CRM, I can see logs of task in activity section
    When I create ticket from top menu
    And  I add a task for technician in the ticket
    Then I can see the task-related logs in the activity section

  
