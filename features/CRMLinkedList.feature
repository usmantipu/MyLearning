Feature: CRM Linked List

	Background:
        Given I open Visp Web to Access IRM
        And   I login with username and password to use IRM
              | jcabangonautomation | Test@1234 |

  @automation-linked-list
  Scenario: As a user, I can see the search field for linking tickets by clicking chain button
    When I navigate to CRM after login
    Then I should be on the CRM Page
    When I click to opens a ticket drawer
    When I expands Linked Tickets sub section
    When I click on chain button for linking tickets
    Then I can see the search field for searching tickets for linking
  @automation-linked-list
  Scenario: As a user, I can see Link Ticket sub-drawer with a search tool
    When I navigate to CRM after login
    Then I should be on the CRM Page
    When I click to opens a ticket drawer
    When I expands Linked Tickets sub section
    Then The sub-drawer should contain titled Linked Tickets
    And  On the right of the card title bar, there should be a Search tool
  @automation-linked-list
  Scenario: As a user, I can select multiple tickets to link together
    When I navigate to CRM after login
    Then I should be on the CRM Page
    When I click to opens a ticket drawer
    When I create multiple tickets
    When I expands Linked Tickets sub section
    When I click on chain button for linking tickets
    When I selects multiple tickets from the search field
    Then The selected tickets should be highlighted in the Search field
  @automation-linked-list
  Scenario: As a user, I can save the linked tickets
    When I navigate to CRM after login
    Then I should be on the CRM Page
    When I click to opens a ticket drawer
    When I create multiple tickets
    When I expands Linked Tickets sub section
    When I click on chain button for linking tickets
    When I select Ticket Type Relationship
    When I selects multiple tickets from the search field
    When I clicks the Link Ticket
    Then The linked ticket IDs, descriptions, Priority, status should show in the list under the main drawer