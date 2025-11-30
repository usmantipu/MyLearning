@EmailTemplatesFolders
Feature: Email - Templates folder
        This feature details about email templates folder.

  Background:
      Given I open visp webapp to access email
	  And I login using username jcabangonautomation and password Test@1234
	  And I open subscriber list

@TemplateFolder @regression2021 @regression2021-emailTemplatesFolders @regression-BIL
  Scenario: As a user, I can add new Template folder
		When I open email interface
		When I go to templates panel
		When I navigate to add folder interface
		When I provide folder name 
		Then New Template folder should be added

@TemplateFolder @regression2021 @regression2021-emailTemplatesFolders @regression-BIL
  Scenario: As a user, I can rename Template folder
		When I open email interface
		When I go to templates panel
		When I select an existing folder
		When I rename the exitsing folder		
		Then template folder should be renamed  

@TemplateFolder	@regression2021	@regression2021-emailTemplatesFolders @regression-BIL
  Scenario: As a user, I can delete Template folder and move its templates to another folder
		When I open email interface
		When I go to templates panel
		When I select an existing folder
		When I delete the template folder while moving its templates to an other folder
		Then template successfully moved to other folder		
		Then source folder from where templates moved should be deleted

@TemplateFolder @regression2021 @regression2021-emailTemplatesFolders @regression-BIL
  Scenario: As a user, I can delete Template folder along with its templates
		When I open email interface
		When I go to templates panel
		When I select an existing folder
		When I delete the template folder along with its templates		
		Then both template folder and its templates should be deleted

@manualtest	#manualtest	
  Scenario: As a user, I can move existing Template to another folder
		When I open email interface
		When I go to templates panel
		When I select a template in available templates
		When I move the template
		Then Template should be moved to desired folder