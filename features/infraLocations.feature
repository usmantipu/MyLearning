@Equipment-infraLocations
Feature: Infrastructure locations

    Background:
        Given I open Visp Web to Access IRM
        And   I login with username and password to use IRM
              | jcabangonautomation | Test@1234 |
        #     | dreamteam9 | str0ngP@ss9 |
        
    #Moved to betaCleversoftScenarios.feature
    #@infrastructureLocations @Beta-TA-207 @regression-IRM
    # Scenario: As a user, I can view Infrastructure tabs based on Infrastructure Profile types
    #     When I navigate to IRM page
    #     When I click Docsis button of Infrastructure
    #     Then I can see tabs based on infrastructure profile Docsis
    #     When I click warehouse button of Infrastructure
    #     Then I can see tabs based on Infrastructure profile Test warehouse
    
    
    @infrastructureLocations @regression2021 @regression2021-IRM-infra-part1  @regression-IRM
    Scenario: As a User, I can Add ISP Infrastructure
        When I navigate to IRM page
        When I navigate to Add ISP Site Location page
        When I fill ISP Site Location details
        When I save the details
        Then ISP Site Location should get added successfully

    @infrastructureLocations @regression2021 @regression2021-IRM-infra-part1  @regression-IRM
    Scenario: As a user, I can add Sub Locations for a Infrastructure
        When I navigate to IRM page
        When I select any site
        When I go to edit a Site
        When I click Add Sub-Location
        When I fill ISP Site Sub-Location details
        When I save the details
        Then Sub Location should added successfully

    @infrastructureLocations @regression2021 @regression2021-IRM-infra-part1 @TA-463  @regression-IRM
    Scenario Outline: As a User, I can Edit ISP Infrastructure
        When I navigate to IRM page
        When I select any site
        When I go to edit a Site
        When I change the <Name>, <Elevation>, <Address1>, <City>
        When I save the details
        Then Infrastucture should get updated

        Examples:
            | Name   | Elevation | Address1            | City   |
            | Manila | 110       | Fashion Square Mall | Sanger |

    @infrastructureLocations @regression2021 @regression2021-IRM-infra-part1 @TA-464  @regression-IRM
    Scenario: As a User, I can Add Site contact for any ISP Infrastructure
        When I navigate to IRM page
        When I open newly added site
        When I go to edit Contacts
        When I navigate to Add Site Contact page
        When I fill in add site contact details
            | 47Billion | Albert | A | Einstien | Miami |FL|
        When I save contact details
        Then IRM Site Contacts should get added

    @infrastructureLocations @regression2021 @regression2021-IRM-infra-part1 @TA-18  @regression-IRM
    Scenario: As a user, I can see the Interconnections and Site Equipments in Infrastructure relationship tree
        When I navigate to IRM page
        When I select any site
        When Expand the Infrastructure relationship tree
        Then I can see the Interconnections and Site Equiment

    @infrastructureLocations @regression2021 @regression2021-IRM-infra-part2 @regression-IRM @TA-859
    Scenario: As a user, I can view the Interconnections Side A and Side B equipment and location details in Infrastructure Location
        When I navigate to IRM page
        When I defined PtP Equiment profile if its not defined
        When I add new site A with sub location
        When I add new Ptp type equipment to sublocation A
        When I add new site B with sub location
        When I add new Ptp type equipment to sublocation B
        When Expand the Infrastructure relationship tree
        When I select any Interconnection
        Then I can see the Interconnections Side A and Side B equipment and location details

    @infrastructureLocations @regression2021 @regression2021-IRM-infra-part2 @regression-IRM @TA-859
    Scenario: As a user, I can edit the Interconnections Side A and Side B equipment and location details in Infrastructure Location
        When I navigate to IRM page
        When I defined PtP Equiment profile if its not defined
        When I add new site A with sub location
        When I add new Ptp type equipment to sublocation A
        When I add new site B with sub location
        When I add new Ptp type equipment to sublocation B
        When Expand the Infrastructure relationship tree
        When I select any Interconnection
        When I edit and save Side A equipment and location details
        When I edit and save Side B equipment and location details
        Then I can see the updated details of Interconnections Side A and Side B equipment and location in overview
    
    @infrastructureLocations @regression2021 @regression2021-IRM-infra-part1 @TA-18  @regression-IRM
    Scenario: As a user, I can Search Infrastructure Locations
        When I navigate to IRM page
        When I select search Bar of Infrastructure Location
        When I type in Infrastructure Location search Bar "Default Location"
        Then I can see the expected search result of Infrastructure Locations
    
    #TA-256 skipped
    #@infrastructureLocations @regression2021 @regression2021-IRM-infra @TA-18
    #Scenario Outline: As a user, I can change  Infrastructure Locations Table Row Density
    #    When I navigate to IRM page
    #    When I select Infrastructure Locations table Action Menu to choose "<Row density>"
    #    Then Infrastructure Locations table row density should get changed to "<Row density>"
    #    Examples:
    #        | Row density |
    #        | Comfortable |
    #        | Compact     |
    #        | Cozy        |
    
    @infrastructureLocations @regression2021 @regression2021-IRM-infra-part1 @TA-18  @regression-IRM
    Scenario Outline: As a user, I can Switch between Single table and Tabs View for Infrastructure Locations
        When I navigate to IRM page
        When I select Infrastructure Locations table 3-Dot Menu to choose <infrastructureView>
        Then Infrastructure Locations view should get changed to <infrastructureView>

        Examples:
            | infrastructureView |
            | Single table |
            | Tabs         |

    @infrastructureLocations @regression2021 @regression2021-IRM-infra-part1 @TA-18  @regression-IRM
    Scenario Outline: As a user, I can Enable Inline Editing for Infrastructure Locations table
        When I navigate to IRM page
        When I select Infrastructure Locations table Action Menu to Enable Inline Editing
        When I Inline edit the infrastructure Locations "<Address1>", "<Address2>", "<City>", "<Zip>" fields
        Then I can see infrastructure Locations Inline Editing saved successfully
        Examples:
            | Address1 | Address2 | City | Zip   |
            | New York |  USA | New York | 45632 |

    @infrastructureLocations @regression2021 @regression2021-IRM-infra-part1 @regression-IRM @TA-859
    Scenario: As a User, I can Edit Site contact for any ISP Infrastructure 
        When I navigate to IRM page
        When I open newly added site
        When I go to edit Contacts
        When I navigate to Add Site Contact page
        When I fill in add site contact details
           | 47Billion | Albert | A | Einstien | Miami |FL|
        When I save contact details
        When I update contact details
            | Automation Test | Automation | B | Test | New York |NY| 10002 |
        When I click Update to save contact changes
        Then IRM Site Contacts should get updated
