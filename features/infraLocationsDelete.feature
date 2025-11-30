Feature: Infrastructure locations deletion options

    Background:
        Given I open Visp Web to Access IRM
        And   I login with username and password to use IRM
              | jcabangonautomation | Test@1234 |
        When I navigate to IRM page
        When I select All under Infrastructure locations
        #Test data can be created in the above step

    @infrastructureLocations @regression2021 @regression2021-IRM-infra-del @regression-IRM @TA-762 @sepInfraDel
    Scenario: As a user, I can see the 'Delete' button for an Infrastructure location in 3-dot menu
        When I click dot menu next to infrastructure location record in the table
        Then I should see the Delete option in the dropdown menu

    @infrastructureLocations @regression2021 @regression2021-IRM-infra-del @regression-IRM @TA-762
    Scenario: As a user, I can see the delete button is disabled for Infrastructure location that is associated with any equipment or inventory
        When I click dot menu next to infrastructure location record that is associated with equipment or inventory in the table
        Then I should see the Delete option is disabled
        #Test data for this scenario will be created by associating equipment or inventory to the site location

    @infrastructureLocations @regression2021 @regression2021-IRM-infra-del @regression-IRM @TA-762
    Scenario: As a user, I can see the delete button is enabled for Infrastructure location that is not associated with any equipment or inventory
        When I click dot menu next to infrastructure location record that is not associated with equipment or inventory in the table
        Then I should see the Delete option is enabled

    @infrastructureLocations @regression2021 @regression2021-IRM-infra-del @regression-IRM @TA-762 @sepInfraDel
    Scenario: As a user, I can click on the delete button
        When I click dot menu next to infrastructure location record in the table
        When I click the Delete option next to infrastructure location record in the table
        Then I should see a confirmation prompt asking to confirm the deletion

    @infrastructureLocations @regression2021 @regression2021-IRM-infra-del @regression-IRM @TA-762
    Scenario: As a user, I can see a confirmation pop-up with 'Yes' and 'No' option if I click on 'Delete' button
        When I click dot menu next to infrastructure location record in the table
        When I click the Delete option next to infrastructure location record in the table
        Then I should see a confirmation prompt with Yes and No options

    @infrastructureLocations @regression2021 @regression2021-IRM-infra-del @regression-IRM @TA-762 @sepInfraDel
    Scenario: As a user, I can click on 'Yes' and Infrastructure is getting deleted
        When I click dot menu next to infrastructure location record in the table
        When I click the Delete option next to infrastructure location record in the table
        When I click on Yes in the confirmation prompt
        Then The infrastructure location should be deleted successfully
        And I should no longer see the deleted infrastructure location in the table

    @infrastructureLocations @regression2021 @regression2021-IRM-infra-del @regression-IRM @TA-762
    Scenario: As a user, I can click on 'No', Infrastructure is not getting deleted
        When I click dot menu next to infrastructure location record in the table
        When I click the Delete option next to infrastructure location record in the table
        When I click on No in the confirmation prompt
        Then The infrastructure location should not be deleted
        And I should still see the infrastructure location in the table

    @infrastructureLocations @regression2021 @regression2021-IRM-infra-del @regression-IRM @TA-762 @sepInfraDel
    Scenario: As a user, I can see a message 'This Infrastructure has equipment/Inventory assigned to it. Deleting the site is restricted' on clicking 3-dot menu, if any equipment or inventory is attached to it
        When I click dot menu next to infrastructure location record that is associated with equipment or inventory in the table
        Then I should see a message 'This site has equipment/inventory assigned to it. Deleting the site is restricted.'
