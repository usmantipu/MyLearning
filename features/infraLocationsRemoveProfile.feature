Feature: Infrastructure locations - Remove Infrastructure Profile

  Background:
    Given I open Visp Web to Access IRM
    And I login with username and password to use IRM
      | jcabangonautomation | Test@1234 |
    When I navigate to IRM page

@regression2021 @regression2021-InfraRemoveProfile
  Scenario: As a user, I can see Infrastructure Profile in mega Menu
    When I go to the Settings mega menu
    Then I should see Infrastructure Profile in mega Menu
    
@regression2021 @regression2021-InfraRemoveProfile
  Scenario: As a user, I can select any Infrastructure Profile from the list
    When I am on the profile definition form
    Then I can see a list of already created Infrastructure Profiles
    And I can select from any Infrastructure Profile

@regression2021 @regression2021-InfraRemoveProfile
  Scenario: As a user, I can see 'Delete' button when it's not assigned to any Infrastructure Profile
    When I am on the Infrastructure Profile list
    And I create Infrastructure profile if it does not exists
        |Infra_Testing_Profile|Other|
    And I see an unassigned Infrastructure Profile
        |Infra_Testing_Profile|
    Then I should see a Delete profile button

@regression2021 @regression2021-InfraRemoveProfile
   Scenario: As a user, I can see confirmation prompt having 'Yes' and 'No' button by clicking on 'Delete' button for an Infrastructure Location
    When I am on the Infrastructure Profile list
    And I create Infrastructure profile if it does not exists
        |Infra_Testing_Profile|Other|
    And I see an unassigned Infrastructure Profile
        |Infra_Testing_Profile|
    When I click the Delete Profile button for that profile
    Then I should see a confirmation prompt with Yes and No buttons

@regression2021 @regression2021-InfraRemoveProfile
  Scenario: As a user, I can see that Infrastructure Location removed successfully if I click 'Yes' from Delete Infrastructure confirmation prompt
    When I am on the Infrastructure Profile list
    And I create Infrastructure profile if it does not exists
        |Infra_Testing_Profile|Other|
    And I see an unassigned Infrastructure Profile
        |Infra_Testing_Profile|
    And I click the Delete Profile button for that profile
    And I have clicked Yes from the confirmation prompt to Delete InfraLocationProfile
    Then the Infrastructure Location should be removed successfully

@regression2021 @regression2021-InfraRemoveProfile
  Scenario: As a user, I can see that removed Infrastructure Location is not visible in the Infrastructure Location List
    When I am on the Infrastructure Profile list
    And I create Infrastructure profile if it does not exists
        |Infra_Testing_Profile|Other|
    And I see an unassigned Infrastructure Profile
        |Infra_Testing_Profile|
    And I click the Delete Profile button for that profile
    And I have clicked Yes from the confirmation prompt to Delete InfraLocationProfile
    Then the removed Infrastructure Location should not be visible
