@search

Feature: Global search

	Background:
		Given I open UBO webapp
		And I login with username jcabangonautomation and password Test@1234

	@regression2021 @regression2021-search @regression-BIL @AWS2024 
	Scenario: As a User, I can view suggestions grouped by field names.
		When I navigate to subscriber list
		And  I enter subscriber attributes in the search bar
		Then I can view sugguestions grouped by field names
		

	@regression2021 @regression2021-search @regression-BIL 
	Scenario: As a User, I can view match count for the search suggestions.
		When I go to subscribers
		And  I enter subscriber attributes in the search bar
		Then I can view match count for the search suggestions


	@regression2021 @regression2021-search @TA-366 @regression-BIL 
	Scenario: As a User, I can view the Saved Filter popover when clicking on the search bar
		When I go to subscribers
		And  I click in the seach bar to edit it
		Then I can see saved filters popover


	@regression2021 @regression2021-search @regression-BIL 
	Scenario: As a User, I can click X button to clear search condition.
		When I go to subscribers
		And I enter subscriber attributes in the search bar
		Then I can click X button to clear search condition


	@regression2021 @regression2021-search @regression-BIL 
	Scenario: As a User, I can select one of the suggestions which will reload the table with accurate search results.
		When I go to subscribers
		And I enter subscriber attributes in the search bar
		Then I select the suggested attributes
		Then I can see the table is reloaded with accurate record


	@regression2021 @regression2021-search @TA-367 @regression-BIL 
	Scenario: As a User, I can view unique and accurate suggestions from CRM table data.
		When I go to CRM for search
		And I add a new ticket
		And I enter unique and accurate ticket attributes in the CRM search bar
		Then I can view ticket matching record for the search suggestions

	@regression2021 @regression2021-search @regression-BIL 
	Scenario: As a User, I can view match count for the search suggestions in CRM.
		When I go to CRM for search
		And I enter ticket attributes in the CRM search bar
		Then I can view match count for CRM search suggestions

	@regression2021 @regression2021-search @regression-BIL 
	Scenario: As a User, I can select one of the suggestions which will reload the CRM table with accurate search results.
		When I go to CRM for search
		And  I select All Items If its not get selected
		And I enter ticket attributes in the CRM search bar
		And I select the suggested CRM attributes
		Then I can see the table is reloaded with accurate CRM record

	@regression2021 @regression2021-search @regression-BIL
	Scenario: As a User, I can click X button to clear CRM search condition.
		When I go to CRM for search
		And I enter ticket attributes in the CRM search bar
		Then I can click X button to clear CRM search condition
