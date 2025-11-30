@ServiceDesk
Feature: CRM ticket types settings

  Background: 
			Given I open UBO webapp
			And I login with username jcabangonautomation and password Test@1234
			When I navigate to Add Ticket page from top menu
    		When I enter ticket details like "Monika", "Text for Summary", "Checking on Escalation", "High", "UnAssigned", "Jon Automation"
    		When I save new ticket
      		And  I close the right drawer to merge tickets
			And I go the ticket type settings

@regression2021  @regression2021-sdTicketTypesSettings-part1 @regression-SD @sep25Tasks
  Scenario: As a user, I can define a ticket type with required all tasks on resolving the ticket.
			When I define a ticket type with all tasks mandatory on resolving the ticket
			And  I go to CRM list for ticket types
			When I change the ticket Type to Phone Call
			Then I try to resolve a ticket with specific type without marking all tasks as complete
			Then I should see the validation related to required tasks for resolving ticket

@regression2021  @regression2021-sdTicketTypesSettings-part1 @regression-SD @sep25Tasks
  Scenario: As a user, I can define a ticket type with required all tasks on resolving the ticket and resolve a ticket.
			When I define a ticket type with all tasks mandatory on resolving the ticket
			And  I go to CRM list for ticket types
			When I change the ticket Type to Phone Call
			Then I try to resolve a ticket with specific type after marking all tasks as complete
			Then I should that the ticket get resolved

@regression2021  @regression2021-sdTicketTypesSettings-part1 @TA-493 @regression-SD @sep25Tasks
  Scenario: As a user, I can define a ticket type with required all tasks on closing the ticket.
			When I define a ticket type with all tasks mandatory on closing the ticket
			And  I go to CRM list for ticket types
			When I change the ticket Type to Phone Call
			Then I try to close a ticket with specific type without marking all tasks as complete
			Then I should see the validation related to required tasks for closing ticket

@regression2021  @regression2021-sdTicketTypesSettings-part1 @regression-SD @sep25Tasks
  Scenario: As a user, I can define a ticket type with required all tasks on closing the ticket and close a ticket.
			When I define a ticket type with all tasks mandatory on closing the ticket
			And  I go to CRM list for ticket types
			When I change the ticket Type to Phone Call
			Then I try to close a ticket with specific type after marking all tasks as complete
			Then I should that the ticket get closed

@regression2021  @regression2021-sdTicketTypesSettings-part2 @regression-SD @sep25CustomFields
  Scenario: As a user, I can define a ticket type with required custom fields on adding the ticket.
			When I define a ticket type with all custom fields mandatory on adding the ticket
			And  I go to CRM list for ticket types
			When I change the ticket Type to Phone Call
			Then I should see required custom field specific validation message on creation
			Then I try to add a ticket with specific type after filling out custom fields
			Then The ticket should be successfully added

@regression2021  @regression2021-sdTicketTypesSettings-part2 @TA-491 @regression-SD @sep25CustomFields
  Scenario: As a user, I can define a ticket type with required custom fields on editing the ticket.
			When I define a ticket type with all custom fields mandatory on editing the ticket
			And  I go to CRM list for ticket types
			When I change the ticket Type to Phone Call
			Then I try to edit a ticket with specific type after leaving custom fields blank
			Then I should see required custom field specific validation message on editing

@regression2021  @regression2021-sdTicketTypesSettings-part2 @TA-494 @regression-SD @sep25CustomFields
  Scenario: As a user, I can define a ticket type with required custom fields on resolving the ticket.
			When I define a ticket type with all custom fields mandatory on resolving the ticket
			And  I go to CRM list for ticket types
			When I change the ticket Type to Phone Call
			Then I try to resolve a ticket with specific type after leaving custom fields blank
			Then I should see required custom field specific validation message on resolving

@regression2021  @regression2021-sdTicketTypesSettings-part2 @TA-492 @regression-SD @sep25CustomFields
  Scenario: As a user, I can define a ticket type with required custom fields on closing the ticket.
			When I define a ticket type with all custom fields mandatory on closing the ticket
			And  I go to CRM list for ticket types
			When I change the ticket Type to Phone Call
			Then I try to close a ticket with specific type after leaving custom fields blank
			Then I should see required custom field specific validation message on closing
#have save click issue on CI, locally its OK
#@regression2021  @regression2021-sdTicketTypesSettings-part3 @regression-SD
  Scenario: As a user, I can define a ticket type with required attachment on resolving the ticket.
			When I define a ticket type with all attachment mandatory on resolving the ticket
			And  I go to CRM list for ticket types
			When I change the ticket Type to Phone Call
			Then I try to resolve a ticket of specific type without attachment
			Then I should see a validation message related to missing attachments on resolving
#have save click issue on CI, locally its OK
#@regression2021  @regression2021-sdTicketTypesSettings-part3 @regression-SD
  Scenario: As a user, I can define a ticket type with required attachment on closing the ticket.
			When I define a ticket type with all attachment mandatory on closing the ticket
			And  I go to CRM list for ticket types
			When I change the ticket Type to Phone Call
			Then I try to close a ticket of specific type without attachment
			Then I should see a validation message related to missing attachments on closing

#have save click issue on CI, locally its OK
#@regression2021  @regression2021-sdTicketTypesSettings-part3 @regression-SD @sep25Followers
  Scenario: As a user, I can define a ticket type with required at least one follower on adding the ticket.
			When I define a ticket type with a follower as mandatory requirement on adding the ticket
			And  I go to CRM list for ticket types
			When I change the ticket Type to Phone Call
			Then I should see a validation message related to missing follower on creating the ticket
#have save click issue on CI, locally its OK
#@regression2021  @regression2021-sdTicketTypesSettings-part3 @regression-SD @sep25Followers
  Scenario: As a user, I can define a ticket type with required at least one follower on editing the ticket.
			When I define a ticket type with a follower as mandatory requirement on editing the ticket
			And  I go to CRM list for ticket types
			When I change the ticket Type to Phone Call
			Then I try to edit a ticket of specific type without any followers
			Then I should see a validation message related to missing follower on editing the ticket
#have save click issue on CI, locally its OK			
#@regression2021  @regression2021-sdTicketTypesSettings-part4 @regression-SD
  Scenario: As a user, I can define a ticket type with required schedule.
			When I define a ticket type with required schedule
			And  I go to CRM list for ticket types
			When I change the ticket Type to Phone Call
			Then I try to edit a ticket of specific type without a schedule
			Then I should see the validation message related to missing schedule
#have save click issue on CI, locally its OK
#@regression2021  @regression2021-sdTicketTypesSettings-part4 @eaTestTA213 @regression-SD
  Scenario: As a user, I can define a ticket type with 'queue unscheduled tickets' option
			When I define a ticket type with queue unscheduled tickets option
			And  I go to CRM list for ticket types
			When I change the ticket Type to Phone Call
			Then I should be able to save the ticket type with queue unschduled tickets details
#have save click issue on CI, locally its OK
#@regression2021  @regression2021-sdTicketTypesSettings-part4 @eaTestTA213 @regression-SD
  Scenario: As a user, I can define a ticket type to send updates to subscribers and external followers
			When I define a ticket type to send updates to subscribers and exteranal followers
			And  I go to CRM list for ticket types
			When I change the ticket Type to Phone Call
			Then I should be able to save the ticket type

#@ServiceDesk-customAttributes-CI 
  Scenario: As a developer, I want to ensure all web elements have vispdata-testId to support automation 
      Then All visible important elements of ServiceDeskTicketTypes should have vispdata-testid attribute
  