@CRMMessages
Feature: CRM Messages


  Background: 
			Given I open web application
			And I login using username jcabangonautomation and password Test@1234

#Covered testcases are : TA-TC-1211, TA-TC-1212, TA-TC-1213, TA-TC-1214, TA-TC-1215, TA-TC-1216,TA-TC-1226 ,TA-TC-1228 ,TA-TC-1251
@crmMessages-1
  Scenario: As a user, I can add,delete and view the content of an email message
    When I create a new crm ticket in New beta template
    And I expand the Messages section in the ticket
    And I send an email to the crm ticket email address
    Then I can identify an email by its icon and recipient
    When I hover over the email icon in the table
    Then I should see a tooltip showing a full list of the sender and all the recipients
    And I should see a datetime stamp, a New Note icon, and a Delete icon on the far left
    When I click the Delete icon on a message row
    Then I should see a confirmation dialog asking if I want to delete the email
    When I do not confirm the deletion of the email from the ticket
    Then the email should still be present in the ticket messages list
    When I click the Delete icon on a message row
    And  I confirm the deletion of the message from the ticket
		Then the email should be removed from the ticket messages list

#Covered testcases are :TA-TC-1223,TA-TC-1224, TA-TC-1225, TA-TC-1231
 @crmMessages-1
  Scenario: As a user, I can add,delete and view the content of an SMS message
    When I create a new crm ticket in New beta template
    And I expand the Messages section in the ticket
    And I send an SMS to the crm ticket phone number
    Then I can view the content of an SMS message
    When I click the Delete icon on a message row
    And  I confirm the deletion of the message from the ticket
    Then the SMS message should be removed from the ticket messages list

  #Covered testcases are : TA-TC-1230 ,TA-TC-1229 , TA-TC-1232,TA-TC-1233, TA-TC-1234
  @crmMessages-1
  Scenario: As a user, I can validate the ticket Messages Options Email and SMS
    When I create a new crm ticket in New beta template
    And I expand the Messages section in the ticket
    And I click on the Add Message button in the Messages section
    Then I should see Email and SMS options in the Messages dropdown list
    When I click Email option to open the email composer
    And  I cancel the email composer in the ticket
    Then the email composer should close without sending the email
    When I click on the Add Message button in the Messages section
    And I click SMS option to open the SMS composer
    And I cancel the SMS composer in the ticket
    Then the SMS composer should close without sending the SMS
    When I click on the Add Message button in the Messages section
    And I click SMS option to open the SMS composer
    And I leave the TO field blank and enter a message body
    Then I should see a send button do not get enabled
    When I cancel the SMS composer in the ticket
    When I click on the Add Message button in the Messages section
    And I click SMS option to open the SMS composer
    And I enter the valid phone number in the TO field
    Then I should see a send button do not get enabled

  #Covered testcases are :TA-TC-1221 ,TA-TC-1220 ,TA-TC-1240,TA-TC-1242
  @crmMessages-1
  Scenario: As a user, I can perform multiple Actions on Notes in the Messages section of the ticket
    When I create a new crm ticket in New beta template
    And I expand the Messages section in the ticket
    And I click the Add Note icon in the Messages section of the ticket
    Then I should see the Save Note button is disabled
    When I enter a note content in the note input area
    And I click the Save Note button in the Messages section of the ticket
    Then I can view the added note in the Messages section of the ticket
    When I click the Add Note icon in the Messages section of the ticket
    And I enter a note content in the note input area
    When I attach a JPEG file to the note in the ticket messages section
    Then the JPEG attachment should be associated with the note
    When I attach an unsupported file type to the note in the ticket messages section
    Then I should see an error message indicating unsupported file type

