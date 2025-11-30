Feature: CRM Pull Tab - Assignee, Followers, Signatures, Created, Updates

	Background:
        Given I open Visp Web to Access IRM
        And   I login with username and password to use IRM
              | jcabangonautomation | Test@1234 |

  @automation-pull-tab
  Scenario: As a user, I can select multiple assignees and save them
    When I navigate to CRM after login
    Then I should be on the CRM Page
    When I have opened the panel using the Pull tab
    When I click on the text Assignees
    When I select assignees from the list
    When I click on save button to save assignees
    Then I can see assignees saved successfully and displayed in pull tab
  @automation-pull-tab
  Scenario: As a user, I can select multiple followers and save them
    When I navigate to CRM after login
    Then I should be on the CRM Page
    When I have opened the panel using the Pull tab
    When I click on the text Followers
    When I select followers from the list
    When I click on save button to save followers
    Then I can see Followers saved successfully and displayed in pull tab
  @automation-pull-tab
  Scenario: As a user, I can see a placeholder for the ticket description
    When I navigate to CRM after login
    Then I should be on the CRM Page
    When I view the ticket overview card
    Then I should see the placeholder text Click to add description under the title bar
  @automation-pull-tab
  Scenario: As a user, I can add a description to the ticket
    When I navigate to CRM after login
    Then I should be on the CRM Page
    When I view the ticket overview card
    When I click on the placeholder text Click to add description
    When I enter a description for the ticket
    Then The description should be displayed under the title bar replacing the placeholder text
  @automation-pull-tab
  Scenario: As a user, I can see a pull tab to open the details panel
    When I navigate to CRM after login
    Then I should be on the CRM Page
    When I view the ticket overview card
    Then I should see a pull tab to open details panel
  @automation-pull-tab
  Scenario: As a user, I can open the details panel to see Assignees and Followers
    When I navigate to CRM after login
    Then I should be on the CRM Page
    When I view the ticket overview card
    When I click on the pull tab
    Then The details panel should open displaying Assignees, Followers, Created By, and Last Updated By
  @automation-pull-tab
  Scenario: As a user, I can remove an assignee from the ticket
    When I navigate to CRM after login
    Then I should be on the CRM Page
    When I have opened the panel using the Pull tab to remove assignee
    When I click over an assignee name
    When I remove assignee
    Then The assignee should be removed from the Assignees section
    And  A log entry should be created for remove assignee
  @automation-pull-tab
  Scenario: As a user, I can remove a follower from the ticket
    When I navigate to CRM after login
    Then I should be on the CRM Page
    When I have opened the panel using the Pull tab to remove follower
    When I click over an follower name
    When I remove follower
    Then The follower should be removed from the Assignees section
    And  A log entry should be created for remove follower
  @automation-pull-tab
  Scenario: As a user, I can view the Add Signature option
    When I navigate to CRM after login
    Then I should be on the CRM Page
    When I open the ticket drawer with no signature
    Then I should see the Add Signature text in the slide-out tab
