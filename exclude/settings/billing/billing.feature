Feature: Billing

  User can view the Auto Action, Invoicing, Notifications, Payments, Packages sections

  Background:
    Given I open UBO webapp
    And   I login with username "dreamteam2" and password "str0ngP@ss2"

  Scenario Outline: As a user, I can select "Billing" from side menu to view list of various settings <options>
    When I navigate to Home page
    When I click on settings
    Then I see required "Billing" in settings <options>

    Examples:

      |options        |
      |Application    |
      |Billing        |
      |Portals        |
      |Extensions     |

  Scenario Outline: As a user, I can select the different <sections> of "Billing" from settings
    When I navigate to  settings
    When I select "Billing" from settings
    Then I can select different <sections> from "Billing"

    Examples:

      |sections     |
      |Auto Action  |
      |Invoicing    |
      |Notification |
      |Payments     |
      |Packages     |