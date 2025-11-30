@SubList
Feature: Subscriber details - notes

  Background: 
			Given I open UBO webapp
			And I login with username jcabangonautomation and password Test@1234
@regression2021 @regression2021-SubList-Notes @regression-BIL
  Scenario: As a User, I can add a new note when clicking Add Note.
			When I navigate to subscriber list
			And I add a note
			And  I click on customer record			
			And I select the note filter in logs section
			Then I can see the note is added in the logs


@regression2021 @regression2021-SubList-Notes @regression-BIL @TA-387
  Scenario: As a User, I can mark a note as private when checking the Mark this Note as private in the Note window.
			When I navigate to subscriber list
			And  I make sure that note is already added for the customer
			And  I click on customer record
			And  I select the note filter in logs section
			And  I can set a note as private
			Then I see an eye icon is present next to the note type in the logs


@regression2021 @regression2021-SubList-Notes @regression-BIL @TA-387
  Scenario: As a User, I can mark a note as public when unchecking the Mark this Note as private in the Note window.
			When I navigate to subscriber list
			And  I make sure that Private note is already added for the customer
			And  I click on customer record
			And  I select the note filter in logs section
			And  I can set a private note as public
			Then I see an eye icon is not present next to the note type in the logs


@regression2021 @regression2021-SubList-Notes @regression-BIL @TA-388 @TA-786
  Scenario: As a User, I can delete a note of a subscriber.
			When I navigate to subscriber list
			And  I make sure that note is already added for the customer
			And  I click on customer record
			And  I select the note filter in logs section
			And  I delete the note
			Then the deleted note type will be set as NOTE - REMOVE in the logs


@regression2021 @regression2021-SubList-Notes @regression-BIL @TA-388 @TA-786
  Scenario: As a User, I can view a deleted note log after deleting a note.
			When I navigate to subscriber list
			And  I make sure that note is already added for the customer
			And  I click on customer record
			And  I select the note filter in logs section
			And  I delete the note
			And  I click on the deleted note
			Then I see contents of the deleted note


@regression2021 @regression2021-SubList-Notes @regression-BIL
  Scenario: As a User, I can update the details of the selected note.
			When I navigate to subscriber list
			And  I make sure that Private note is already added for the customer
			And  I click on customer record
			And  I select the note filter in logs section
			And  I can update the note
			Then I see contents of the note is updated in the logs