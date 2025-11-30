@SubList
Feature: Subscriber details - attachment

  Background: 
			Given I open UBO webapp
			And I login with username jcabangonautomation and password Test@1234
  @regression2021 @regression2021-SubList-Attachment @regression-BIL
  Scenario: As a User, I can add a new attachment when clicking Add Attachment.
			When I navigates to subscribers list
			And  I upload and add an attachment
			And  I select the attachment filter in logs section
			Then newly added attachment is visible in Logs
  @regression2021 @regression2021-SubList-Attachment @regression-BIL
  Scenario: As a User, I can mark an attachment as private when checking the Mark this attachment as private in the Attachment window.
			When I navigates to subscribers list
			And  I add an attachment as private
			And  I select the attachment filter in logs section
			Then I see an eye icon is present next to the attachment type in the logs
  @regression2021 @regression2021-SubList-Attachment @regression-BIL
  Scenario: As a User, I can download the attachment to my local workstations when clicking Download in the Attachment window.
			When I navigates to subscribers list
			And  I upload and add an attachment
			And  I select the attachment filter in logs section
			And  I open an attachment from the logs
			And  I download the attachment
			Then The attachment is downloaded successfully
  @regression2021 @regression2021-SubList-Attachment @regression-BIL
  Scenario: As a User, I can delete an attachment of a subscriber.
			When I navigates to subscribers list
			And  I upload and add an attachment
			And  I select the attachment filter in logs section
			And  I delete the attachment
			Then The attachment ATTACHMENT-ADD type record are removed from the logs
  @regression2021 @regression2021-SubList-Attachment @regression-BIL
  Scenario: As a User, I can view a deleted attachment log after deleting an attachment.
			When I navigates to subscribers list
			And  I upload and add an attachment
			And  I select the attachment filter in logs section
			And  I delete the attachment
			Then The attachment ATTACHMENT-RERMOVE type record become visible in the logs
			

