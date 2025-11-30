@irmEquipment
Feature: IRM - Equipment
    Background:
        Given I open Visp Web to Access IRM
        And   I login with username and password to use IRM
            | jcabangonautomation | Test@1234 |

    @equipment @regression2021 @regression2021-IRM-equipment @TA-22 @TA-383 @regression-IRM @septTest
    Scenario Outline: As a user, I can update Equipment
        When I navigate to IRM page
        When I select Equipment Tab
        When I select any Equipment profile
        When I go to any Equipment Item
        When I change Equipment details <EquipmentProfile>
        When I save the details
        Then I can see the equipment updated successfully
        Examples:
            | EquipmentProfile|
            | Generic Phone |

    @equipment @regression2021 @regression2021-IRM-equipment @TA-124 @Addequipment @regression-IRM @septTest
    Scenario: As a user, I can add new Equipment
        When I navigate to IRM page
        When I go to Add Equipment
        When I fill equipment details
        When I save the equipment details
        Then I can see the equipment added successfully

    @equipment @regression2021 @regression2021-IRM-equipment @regression-IRM @septTest
    Scenario: As a user, I can delete Equipment Item
        When I navigate to IRM page
        When I select Equipment Tab
        When I select any Equipment profile
        When I expanded dotted menu of any Equipment Item
        When I delete equipment by confirming pop-update
        Then I can see Equipment item is deleted successfully

    @equipment @regression2021 @regression2021-IRM-equipment @TA-22 @TA-124 @regression-IRM @septTest
    Scenario: As a user, I can copy assembly 
        When I navigate to IRM page
        When I navigate to Equipment Assembly
        When I select copy assembly to create a copy of assembly
        When I change Equipment data Unique fields
        When I save the details
        Then I can see the new copy of selected assembly created successfully

    @equipment @regression2021 @regression2021-IRM-equipment @TA-22 @regression-IRM
    Scenario: As a user, I can Search Equipments
        When I navigate to IRM page
        When I select Equipment Tab
        When I expand Equipment search Bar
        When I type in Equipment search Bar "Generic Phone"
        Then I can see the expected Equiment search successfully 

    @equipment @regression2021 @regression2021-IRM-equipment @TA-22 @regression-IRM
    Scenario: As a user, I can Search Equipment Assemblies
        When I navigate to IRM page
        When I navigate to Equipment Assembly
        When I expand Equipment Assemblies search Bar
        When I type in Equipment Assemblies search Bar
        Then I can see the expected search result of Equiment Assemblies
    #TA-265
    #@equipment @regression2021 @regression2021-IRM-equipment
    Scenario Outline: As a user, I can change Equipment Assemblies Table Row Density
        When I navigate to IRM page
        When I navigate to Equipment Assembly
        When I select Equipment Assemblies table Action Menu to choose "<Row density>"
        Then Equipment Assemblies table "<Row density>" should get changed

        Examples:
            | Row density |
            | Comfortable |
            | Compact     |
            | Cozy        |

    @equipment @regression2021 @regression2021-IRM-equipment @TA-22 @regression-IRM
    Scenario Outline: As a user, I can Switch between Table and Card View for Equipment Assemblies
        When I navigate to IRM page
        When I navigate to Equipment Assembly
        When I select Equipment Assemblies table 3-Dot Menu to choose "<equipmentAssemblyView>"
        Then Equipment Assemblies view should get changed to "<equipmentAssemblyView>"

        Examples:
            | equipmentAssemblyView  |
            | List |
            | Tiles |

    @equipment @regression2021 @regression2021-IRM-equipment @TA-22 @ea20022022 @regression-IRM @septTest
    Scenario: As a user, I can Enable Inline Editing for Equipment Assemblies table
        When I navigate to IRM page
        When I navigate to Equipment Assembly
        When I select Equipment Assemblies table Action Menu to Enable Inline Editing
        When I Inline edit the Equipment Assembly Description field
        When I save Inline edit changes
        Then I can see Equipment Assembly Inline Editing saved successfully
    #Bug
    #@equipment @regression2021 @regression2021-IRM-equipment @regression-IRM
    Scenario: As a user, I can see an validation error message on adding or updating Equipment with Duplicate IP Address
        When I navigate to IRM page
        When I go to Add Equipment
        When I fill equipment details
        When I save the details
        When I add another Equipment with same IP address
        Then I can see validation error of duplicate IP address
    #Bug
    #@equipment  @regression2021-IRM-equipment @TA-205 @regression
    Scenario: As a user, I can see an validation error message on adding or updating Equipment with Duplicate Radio MAC / Ethernet MAC 
        When I navigate to IRM page
        When I go to Add Equipment
        When I fill equipment details
        When I save the details
        When I add another Equipment with same Radio and Ethernet MAC addressess
        Then I can see validation error of duplicate Radio and Ethernet MAC addressess

    @equipment @regression2021 @regression2021-IRM-equipment @regression-IRM
    Scenario: As a user, I can add/update Equipment profile with Unique IP Address only
        When I navigate to IRM page
        When I go to Add Equipment
        When I fill equipment details with Unique Ip Address
        When I save the details
        Then I can see the equipment added successfully

    @equipment @regression2021 @regression2021-IRM-equipment @TA-22 @regression-IRM
    Scenario: As a user, I can add new Equipment from Site drawer
        When I navigate to IRM page
        When I select any site
        When I open add equipment dialog in Infrastructure drawer
        When I fill equipment details
        When I save the details
        Then I can see the added equipment displayed in Site drawer
