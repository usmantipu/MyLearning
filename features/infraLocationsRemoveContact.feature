@TA-763
Feature: Infrastructure locations - Site Contact Deletion


    Background:
        Given I open Visp Web to Access IRM
        And   I login with username and password to use IRM
              | jcabangonautomation | Test@1234 |
        When I navigate to IRM page
        When I open a newly added site
        #This step can be used to create test data: new site location and contact


    @infrastructureLocations @regression2021 @regression2021-IRM-infra-RemoveContact @regression-IRM @TA-763 @sepInfraRC
    Scenario: As a user, I can see 'Delete' button on hovering on Infrastructure Location contact card
        When I hover over an Infrastructure Location contact card
        Then I should see a 'Delete' button appear on the contact card


    @infrastructureLocations @regression2021 @regression2021-IRM-infra-RemoveContact @regression-IRM @TA-763 @sepInfraRC
    Scenario: As a user, I can click 'Delete' button to remove an Infrastructure Location contact
        When I hover over an Infrastructure Location contact card
        When I click the 'Delete' button that appears on the contact card
        Then I should see the confirmation prompt asking to confirm the deletion


    @infrastructureLocations @regression2021 @regression2021-IRM-infra-RemoveContact @regression-IRM @TA-763
    Scenario: As a user, I can see confirmation prompt having 'Yes' and 'No' button by clicking on 'Delete' button for a site contact
        When I hover over an Infrastructure Location contact card
        When I click the 'Delete' button that appears on the contact card
        Then I should see a confirmation prompt with 'Yes' and 'No' buttons

    @infrastructureLocations @regression2021 @regression2021-IRM-infra-RemoveContact @regression-IRM @TA-763 @sepInfraRC
    Scenario: As a user, I can see that site contact removed successfully if I click 'Yes' from Delete site contact confirmation prompt
        When I hover over an Infrastructure Location contact card
        When I click the 'Delete' button that appears on the contact card
        When I click 'Yes' in the confirmation prompt
        Then the site contact should be removed successfully


    @infrastructureLocations @regression2021 @regression2021-IRM-infra-RemoveContact @regression-IRM @TA-763
    Scenario: As a user, I can see that not removed site contact is still visible in Site Contacts
        When I hover over an Infrastructure Location contact card
        When I click the 'Delete' button that appears on the contact card
        When I click 'No' in the confirmation prompt
        Then I should see the site contact in the Site Contacts list
