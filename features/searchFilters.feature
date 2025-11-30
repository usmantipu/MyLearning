@searchFilters
Feature: Search filters

  Background: 
			Given I open UBO webapp
			And I login with username jcabangonautomation and password Test@1234


@regression2021 @regression2021-searchFilters @searchFilters @regression-BIL @TA-829
  Scenario: As a User, I can add a name for the new filter.
    When I go to subscribers
    And  I click New filter in search Bar
    Then I can enter filter details
    Then I can save the filter with a name


@regression2021 @regression2021-searchFilters @searchFilters @regression-BIL 
  Scenario: As a User, I can view a suggestion list of the main table columns in the Column field of the filter condition row.
    When I go to subscribers
    And  I click New filter in search Bar
    Then I can see a suggestion list in column field


@regression2021 @regression2021-searchFilters @searchFilters @regression-BIL 
  Scenario: As a User, I can view a suggestion list of operator options in the Operator field of the filter condition row.
    When I go to subscribers
    And I click New filter in search Bar
    Then I can see a suggestion list in operator field


@regression2021 @regression2021-searchFilters @searchFilters @regression-BIL 
  Scenario: As a User, I am not required to enter a value for the Value field if the Operator field is set to "is empty".
    When I go to subscribers
    And I click New filter in search Bar
    Then I am not required to fill value field when operator field is set to "is empty"


@regression2021 @regression2021-searchFilters @searchFilters @regression-BIL 
  Scenario: As a User, I am not required to enter a value for the Value field if the Operator field is set to "is not empty".
    When I go to subscribers
    And I click New filter in search Bar
    Then I am not required to fill value field when operator field is set to "is not empty"


@regression2021 @regression2021-searchFilters @searchFilters @regression-BIL 
  Scenario: As a user, I can always view "is empty", "is not empty", "equals", "does not equal" as Operator field options for all fields.
    When I go to subscribers
    And I click New filter in search Bar
    Then I always view "is empty", "is not empty", "equals", "does not equal" as Operator field options for all fields
		|Customer ID      |
		|First Name       |
		|Last Name        |
		|Status           |
		|Main Company     |
		|Zip              |
		|Work Phone       |
    |Paper Invoice    |


@regression2021 @regression2021-searchFilters @searchFilters @TA-324 @regression-BIL @TA-829
  Scenario: As a User, I can add a new filter condition row by clicking the + button only if the current filter condition row is not empty.
    When I go to subscribers
    And I click New filter in search Bar
    Then I Add multiple rows of criteria


@regression2021 @regression2021-searchFilters @searchFilters @regression-BIL @TA-258 @TA-829
  Scenario: As a User, I can remove a filter condition row by clicking the X button next to it.
    When I go to subscribers
    And I click New filter in search Bar
    Then I Add few rows of criteria
    Then I can remove a criteria by clicking the X button


@regression2021 @regression2021-searchFilters @searchFilters @regression-BIL 
  Scenario: As a User, I am restricted from saving if there are multiple instances of filter condition rows with the same values.
    When I go to subscribers
    And I click New filter in search Bar
    Then I Add multiple rows of criteria with same values
    Then I cannot save the filter


@regression2021 @regression2021-searchFilters @searchFilters @regression-BIL 
  Scenario: As a User, I can save filter details only if all required fields are filled.
    When I go to subscribers
    And I click New filter in search Bar
    Then I cannot save a filter if all required fields are not filled in


@regression2021 @regression2021-searchFilters @searchFilters @regression-BIL 
  Scenario: As a User, I can update a name of an existing filter.
    When I go to subscribers
    And  I click New filter in search Bar
    Then I can enter filter details
    Then I can save the filter with a name
    And I open all filters from search Bar
    Then I open a filter to edit it
    Then I can rename it


@regression2021 @regression2021-searchFilters @searchFilters @regression-BIL @TA-710
  Scenario: As a User, I can update details of an existing filter and save it as a new filter by clicking Save As.
    When I go to subscribers
    And  I click New filter in search Bar
    Then I can enter filter details
    Then I can save the filter with a name
    And I open all filters from search Bar
    Then I open a filter to edit it
    Then I can save it as a new filter by using Save as feature


@regression2021 @regression2021-searchFilters @searchFilters @regression-BIL 
  Scenario: As a User, I can view a prompt that will notify me if I want to cancel and lose any changes when clicking Close button and there are changes made to the filter.
    When I go to subscribers
    And I click New filter in search Bar
    Then I Add few rows of criteria
    Then I see a warning prompt when I try to close the filter form


@regression2021 @regression2021-searchFilters @searchFilters @regression-BIL 
  Scenario: As a User, I can view the Email dock when clicking Send Mass Email.
    When I go to subscribers
    And I open all filters from search Bar
    And I move to filter
    Then I open first filter to edit
    Then I see email dock opens when I click the Email button


@regression2021 @regression2021-searchFilters @searchFilters @TA-325 @regression-BIL 
  Scenario: As a User, I can view the selected filter in the To field after clicking Send Mass Email.
    When I go to subscribers
    And I open all filters from search Bar
    And I move to filter
    Then I open first filter to edit
    Then I see email dock opens when I click the Email button
    Then I see that filter is selected in the To field of email form
