@searchExistingFilters
Feature: Search Existing filters

  Background: 
			Given I open UBO webapp
        And I login with username jcabangonautomation and password Test@1234
@regression2021 @regression2021-searchExistingFilters @regression-BIL
  Scenario: As a User, I can view at least 3 filters when clicking the Search bar.
    When I navigate to subscriber list
    And  I expand all filters from search Bar
    Then I can see 3 filters in the dropdown
@regression2021 @regression2021-searchExistingFilters @regression-BIL
  Scenario: As a User, I can view all saved filters when clicking the Search bar and then clicking on Saved filters matches arrow.
    When I navigate to subscriber list
    And  I expand all filters from search Bar
    And  I open saved filters matching arrow
    Then I can view all saved filters
@regression2021 @regression2021-searchExistingFilters @regression-BIL
  Scenario: As a User, I can view the Filter window with details of the selected filter when clicking on the Filter name in the Search bar after selecting the filter from the suggestions.
    When I navigate to subscriber list
    And  I expand all filters from search Bar
    And  I open saved filters matching arrow
    And  I open a filter details by clicking on filter name "Paid Up" in the serach bar
    Then I can see view filter name "Paid Up" in the search bar along with its details
@regression2021 @regression2021-searchExistingFilters @regression-BIL
  Scenario: As a User, I can view the Filter window with the saved details of the selected filter when clicking on the pencil icon which displays when a filter is hovered.
    When I navigate to subscriber list
    And  I expand all filters from search Bar
    And  I open saved filters matching arrow
    And  I open a filter "Paid Up" details by clicking on pencil icon
    Then I can see view filter name "Paid Up" in the search bar along with its details
@regression2021 @regression2021-searchExistingFilters @regression-BIL
  Scenario: As a User, I can delete a filter by clicking on the X icon which displays when a filter is hovered.
    When I navigate to subscriber list
    And  I definied new filter using criteria as CustomerID
    And  I expand all filters from search Bar
    And  I open saved filters matching arrow
    And  I remove filter using x option
    Then The filter should be deleted
			