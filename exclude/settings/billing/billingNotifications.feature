Feature: View/Edit Billing Notifications

  User can view/edit Notifications

  Background:
    Given I open UBO webapp
    And   I login with username "dreamteam2" and password "str0ngP@ss2"

  Scenario Outline: As a user, I can view "Notifications" from "Billing" settings
    When I navigate to  settings
    When I select "Billing" settings
    When I can select accordian "Notifications"
    Then All the "records" will be visible of "Notifications"

      Examples:

      | Email         | Subscription |
      |test@test.com  | Test,Test    |
      |test@test.com  | Test,Test    |
      |test@test.com  | Test,Test    |
      |test@test.com  | Test,Test    |


  Scenario Outline: As a user, I can Edit record from the list of Notifications
    When I navigate to  settings
    When I select "Billing" settings
    When I can select accordians "Notifications"
    When All the <records> will be visible of "Notifications"
    Then I can select a record to edit
    And  A edit form will open
    Then I can edit the "Email Account" of the user.
    And  I can check or uncheck the "<check box>"
    Then I click on save button to save the changes

    Examples:

      | Email         | Subscription |    |
      |test@test.com  | Test,Test    |edit|
      |test@test.com  | Test,Test    |edit|
      |test@test.com  | Test,Test    |edit|
      |test@test.com  | Test,Test    |edit|

    Examples:

      |check box    |
      |check box 1  |
      |check box 2  |
      |check box 3  |
      |check box 4  |
      |check box 5  |

  Scenario Outline: As a user, I can Add record from the list of Notifications
    When I navigate to  settings
    When I select "Billing" settings
    When I can select accordians "Notifications"
    Then All the <records> will be visible of "Notifications"
    When I click on "<Add New>" button
    Then "Add New" form will open
    Then I can write the "Email Account" of the user.
    And  I can check or uncheck the "<check box>"
    Then I click on save button to save Add new record

    Examples:

      |Add New |

    Examples:

      |check box    |
      |check box 1  |
      |check box 2  |
      |check box 3  |
      |check box 4  |
      |check box 5  |

    Examples:

      | Email         | Subscription |    |
      |test@test.com  | Test,Test    |edit|
      |test@test.com  | Test,Test    |edit|
      |test@test.com  | Test,Test    |edit|
      |test@test.com  | Test,Test    |edit|
      |test@test.com  | Test,Test    |edit|

  Scenario Outline: As a user, I can Edit record from the list of Notifications
    When I navigate to  settings
    When I select "Billing" settings
    When I can select accordians "Notifications"
    When All the <records> will be visible of "Notifications"
    Then I can select a record to edit
    And  A edit form will open
    Then I can edit the "Email Account" of the user.
    And  I can check or uncheck the "<check box>"
    Then I click on save button to save the changes

    Examples:

      | Email         | Subscription |    |
      |test@test.com  | Test,Test    |edit|
      |test@test.com  | Test,Test    |edit|
      |test@test.com  | Test,Test    |edit|
      |test@test.com  | Test,Test    |edit|

    Examples:

      |check box    |
      |check box 1  |
      |check box 2  |
      |check box 3  |
      |check box 4  |
      |check box 5  |

  Scenario Outline: As a user, I can Delete a record from the list of Notifications table
    When I navigate to  settings
    When I select "Billing" settings
    When I can select accordians "Notifications"
    Then All the <records> will be visible of "Notifications"
    When I click on "<delete>" button
    Then A confirmation message will open
    Then I click delete to delete the record

    Examples:

      | Email         | Subscription |    |delete|
      |test@test.com  | Test,Test    |edit|delete|
      |test@test.com  | Test,Test    |edit|delete|
      |test@test.com  | Test,Test    |edit|delete|
      |test@test.com  | Test,Test    |edit|delete|
      |test@test.com  | Test,Test    |edit|delete|

