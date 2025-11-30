Feature: View/Edit Billing Auto Action

  User can view/edit the Default Auto Action, Exclude New Subscriber, Default Grace Period for Auto-suspends, Delete Incomplete Inactive Subscribers.

  Background:
    Given I open UBO webapp
    And   I login with username "dreamteam2" and password "str0ngP@ss2"

  Scenario Outline: As a user, I can select "Billing" <option> from settings
    When I navigate to  settings
    When I select "Billing" settings
    When I select accordian "Auto Action"
    Then All "<section>" will be visible of "Auto Action"

    Examples:

      |section								 |
      |Default Auto Action                   |
      |Exclude New Subscriber 				 |
      |Default Grace Period for Auto-suspends|
      |Delete Incomplete Inactive Subscribers|

  Scenario Outline: As a user, I can select "Auto Action" "<section>" from Billing and I can edit "Auto Action"
    When I navigate to  settings
    When I select "Billing" settings
    When I select accordians "Auto Action"
    Then I can edit all "<section>" of "Auto Action"

    Examples:

      |section								 |
      |Default Auto Action                   |
      |Exclude New Subscriber 				 |
      |Default Grace Period for Auto-suspends|
      |Delete Incomplete Inactive Subscribers|

  Scenario: As a User, I can update "Default Auto Action" "<section>"
    Given A checkbox for "set the following default action for auto suspend"
    When  I navigate to "Auto Action"
    Then  I Default Auto Action will be visible
    Then  I can check or uncheck the checkbox
    And   I can select the "<option>" from the dropdown list.

    Examples:

      |option								                                     |
      |Auto-Suspend at the bottom of term, if Past Due                           |
      |Auto-Suspend on the 1st day of every month. Only if subscriber is Past Due|

  Scenario: As a User, I can update "Exclude New Subscriber" "<section>"
    Given A checkbox for "Exclude New Subscriber"
    When  I navigate to "Auto Action"
    Then  I checkbox for "Exclude New Subscriber" will be visible
    Then  I can check or uncheck the checkbox
    And   I can select the days "<option>" from the dropdown list.

    Examples:

      |option |
      |1      |
      |2      |
      |3      |
      |4      |
      |5      |
      |6      |

  Scenario: As a User, I can update "Default Grace Period for Auto-suspends" "<section>"
    Given Checkbox for "Default Grace Period for Auto-suspends" and "Allow custom settings for individual subscriber"
    When  I navigate to "Auto Action"
    Then  Checkboxs will be visible
    Then  I can check or uncheck the checkbox
    And   I can select the "<days>" from the dropdown list.
    And   I can Enter the amount in amount text box.
    And   I can select <radio button option> from the radio button.
    Then  "Default Grace Period for Auto-suspends" will be updated.

    Examples:

      |days        |
      |1           |
      |2           |
      |3           |
      |4           |
      |5           |
      |6           |

      |radio button option |
      |Total Balance Due   |
      |Balance Forward     |

  Scenario: As a User, I can set days form "Delete Incomplete Inactive Subscribers"
    Given Checkbox for Automatically Delete Incomplete Inactive Subscribers
    When  I navigate to "Auto Action"
    Then  Checkboxs will be visible
    Then  I can check or uncheck the checkbox
    And   I can select the "<days>" to automatically delete the subscriber.

    Examples:

      |days        |
      |1           |
      |2           |
      |3           |
      |4           |
      |5           |
      |6           |