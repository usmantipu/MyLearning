@EmailTemplates
Feature: Email - Templates
        This feature details about email templates.

  Background:
      Given I open visp webapp to access email
	  And I login using username jcabangonautomation and password Test@1234
	  And I open subscriber list

@TemplateFolder @regression2021 @regression2021-emailTemplates @regression-BIL
  Scenario: As a user, I can add new template
		When I open email interface
		When I go to templates panel
		When I navigate to add template interface
		When I choose existing folder to Add template 
		When I input template name  
		Then the new template should get added in the folder  

@aprMaint @regression2021 @regression2021-emailTemplates @regression-BIL
  Scenario Outline: As a user, I can add new schedule template
		When I open email interface
		When I select <filter> in To field
		When I compose email by providing "from", "subject", "body", "billing", "tech", "marketing", and "tags" for available "tagtype"
		When I go to templates panel
		When I set its schedule and save it
		When I save the template as "AutoTempEPOCH"
		Then New scheduled Template should gets added in scheduled templates

		Examples:
		|filter       |  
		|Paid Up|

@regression2021 @regression2021-emailTemplates @templateVerification @templateVerification @regression-BIL
  Scenario Outline: As a user, I can update existing Template
		When I open email interface
		When I go to templates panel
		When I select a template in available templates
		When I edit <from>, <subject>, and <body>
		When I save changes in template
		Then Template should get updated with <from>, <subject>, and <body>
		
		Examples:
		|from               |subject          |body                         |
		|edited-xyz@visp.net|This is edit test|Dear Customer, this is a test|

@regression2021 @regression2021-emailTemplates @templateVerification @maintain @regression-BIL
  Scenario: As a user, I can choose Templates from available options by clicking 'Templates' link
		When I open email interface
		When I go to templates panel
		When I select a template in available templates
		Then Selected email template should load on compose email

@regression2021 @regression2021-emailTemplates @regression-BIL
  Scenario: As a user, I can rename existing Template
		When I open email interface
		When I go to templates panel
		When I select a template in available templates
		When I rename the template
		Then Template should be renamed

@regression2021 @regression2021-emailTemplates @regression-BIL
  Scenario: As a user, I can see template description on hover
		When I open email interface
		When I go to templates panel
		When I select a template in available templates
		Then template description is shown as pop up

@regression2021 @regression2021-emailTemplates @regression-BIL
  Scenario: As a user, I can create new Template using 'Save AS' option
		When I open email interface
		When I go to templates panel
		When I select a template in available templates
		When I edit "SaveAs", "Save As Template", and "body"
		When I save the changes using "Save As" option
		Then New Template should get added in selected Folder

@regression2021 @regression2021-emailTemplates @regression-BIL
  Scenario: As a user, I can delete existing Template
	When I open email interface
		When I go to templates panel
		When I navigate to add new template in general templates
		When I input template name
		When I select the General Templates
		When I select first template in available templates
		When I delete the template
		Then Template should be deleted and no longer available
