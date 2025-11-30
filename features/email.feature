@Email
Feature: Email
        This feature details about email. Email can be sent to individual subscriber, to bulk subscribers (mass email), triggered on certain events. Also, email template can be defined.

  Background:
      Given I open visp webapp to access email
	  And I login using username jcabangonautomation and password Test@1234
	  And I open subscriber list

@EmailLaunch @regression2021 @regression2021-email @regression-BIL
  Scenario: As a user, I can navigate on "Email this list"
		When I open email interface
		Then I see an Email window in a docker
   
@regression2021 @regression2021-email @regression-BIL
  Scenario Outline: As a user, I can choose filters from available options to send email
		When I open email interface
		When I select <filter> in To field   
		Then Subscriber list records should filter out as per Selected To 
		Then Eye icon should visible for subscriber list records
 
		Examples:
		|filter       |  
		|Paid Up| 


@regression2021 @regression2021-email @regression-BIL
  Scenario Outline: As a user, I can choose Triggers from available options to send email
		When I open email interface
		When I select <trigger> in To field
		When I edit "From", "Subject", and "Body" 
		Then Save As button get enabled
		
		Examples:
		|trigger                                             |  
		|Any subscribers whose payment status has turned past due|
#		|Any subscriber whose credit card has expired        | 
#		|Any invoice whose payment status has turned past due|

@regression2021 @regression2021-email  @regression-BIL
  Scenario Outline: As a user, I cannot uncheck all three checkboxes i.e. "Billing", "Tech", and "Marketing"  
		When I open email interface
		When I select <filter> in To field
		When I uncheck all three checkboxes i.e. "Billing", "Tech", and "Marketing"
		Then error message is shown
		Examples:
		|filter       |  
		|Paid Up|

@regression2021 @regression2021-email @regression-BIL
  Scenario: As a user, I can Insert tags for Date and Time
		When I open email interface
		When I edit "From", "Subject", and "Body"   
		When I select tag category, tag as "Date and Time","Current Time"
		Then Selected "Current Time" should show on compose email

@regression2021 @regression2021-email @regression-BIL
  Scenario: As a user, I can Insert tags for Billing
		When I open email interface
		When I edit "From", "Subject", and "Body" 
		When I select tag category, tag as "Billing","Balance"
		Then Selected "Balance" should show on compose email

@regression2021 @regression2021-email @regression-BIL
  Scenario: As a user, I can Insert tags for ISP
		When I open email interface
		When I edit "From", "Subject", and "Body"   
		When I select tag category, tag as "ISP","ISPName"
		Then Selected "ISPName" should show on compose email

@regression2021 @regression2021-email @regression-BIL
  Scenario: As a user, I can Insert tags for Custom fields
		When I open email interface
		When I edit "From", "Subject", and "Body"   
		When I select tag category, tag as "Custom Fields","Custom Field 2 (Custom Field 3)"
		Then Selected "Custom Field 2 (Custom Field 3)" should show on compose email

@regression2021 @regression2021-email @regression-BIL
  Scenario: As a user, I can attach current invoice as attachment
		When I open email interface
		When I edit "tags@visp.net", "Subject", and "Body"
		When I add "Current invoice" as attachment
		Then Attachment gets attached with email

@regression2021 @regression2021-email @regression-BIL
  Scenario: As a user, I can attach current usage invoice as attachment
		When I open email interface
		When I edit "tags@visp.net", "Subject", and "Body"
		When I add "Current usage invoice" as attachment
		Then Attachment gets attached with email

@regression2021 @regression2021-email @regression-BIL
  Scenario: As a user, I can attach periodic statement as attachment
		When I open email interface
		When I edit "tags@visp.net", "Subject", and "Body"
		When I add "Statement" as attachment
		When I select "2" months
		Then Attachment gets attached with email
#manultest
@manualtest		
  Scenario: As a user, I can attach an attachment by browsing it on local computer
		When I open email interface
		When I edit "From", "Subject", and "Body"
		When I add an attachment by browsing it
		Then attachment gets attached with email
#manultest		
@manualtest		
  Scenario: As a user, I can use the eye icon feature to see the email preview on hover 
		When I open email interface
		When I focus on "To" field to select any filter 
		When I select a template in available templates
		When I turn On eye icon
		Then I see eye icon will show enabled in green color  
		Then On hovering, the subscriber list records should display email preview for respective subscribers
#manultest		
@manualtest
  Scenario: As a user, I can clear selected filter for email from search bar 
		When I open email interface
		When I focus on "To" field to select any filter 
		When I clear selected filter from search bar
		Then Eye icon should get disabled to grey color in Email window
#manultest		
@manualtest
  Scenario: As a user, I can disable Eye icon 
       When I open email interface
       When I focus on "To" field 
       When I disable Eye icon 
       Then Eye icon should get disabled to grey color
       Then Eye icon should get disabled to grey color for each subscriber's in subscriber list

@regression2021 @regression2021-email @regression-BIL
  Scenario: As a user, I can send email to individual subscriber
		When I open Email from menu item
		When I update "tags@visp.net", subject "test email to check system", and body "Test mail" for individual
		When I send the email
		Then email successfully sent to individual


@EmailSanity @UBOW-CI-Scheduler-wdio6 @regression2021 @regression2021-email  @regression-BIL
  Scenario: As a user, I can send mass email to a group of subscribers based on filter
		When I open email interface
		When I go to templates panel
		When I select a template in available templates
		When I send the email
		Then email should be sent

#manultest
@manualtest
  Scenario: As a user, I can Schedule email to send
      When I open email interface
      When I compose email by selecting providing "To", "From" and "Subject"
      When I click on  "schedule Icon" 
      When I check schedule delivery of email for each month
      When I choose "day", "<time>", and "<AMPM>"
      Then Targeted subscribers should get email on scheduled time
#manultest
@manualtest
  Scenario: As a user, I can see list of active triggers
		When I open email interface
		When I go to templates panel
		When I select scheduled tab
		When I select active triggers
		Then I see list of active triggers under catergories of "Credit cards", "Wireless usage", and "Others"
#manultest
@manualtest		
  Scenario Outline: As a user, I can see email getting strike-through if email is not related to seleted category of "Marketing" or "Tech" or "Billing"
		When I open email interface
		When I select a template
		When I provide email related to "<category>" selected
		When I provide email not related to "<category>" selected
		When I provide rest of email details
		When I send email
		Then email not related to "<category>" becomes strike-through
		Then email is not sent to strike-through email(s)
		
		Examples:
		|category |
		|Marketing|
		|Tech     |
		|Billing  |
