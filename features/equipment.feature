@Equipment
Feature: Equipment

    As a User, I can navigate to Equipment manager page and view the records of 'ISP Site Location', 
    'ISP Site Equipment', 'Assigned CPE' and 'Inventory' in their table. Also I can Add, Edit,
    Unassign and Delete the records of  'ISP Site Location', 'ISP Site Equipment', 'Assigned CPE' 
    and 'Inventory'.

  Background: 
    Given I open UBOW
    And I login with username and password to use equipment
	|dreamteam9|str0ngP@ss9|
	
@equipmentNavigation  @UBOW-CI-Scheduler-wdio6 @localRegression
  Scenario: As a User, I can navigate to Equipment manager page and view the data
      When I navigate to Equipment page
      Then I should get redirected to Equipment page
      And I see four Tabs on Equipment page
      |SITE LOCATION |
      |SITE EQUIPMENT|   
      |ASSIGNED CPE  |
      |INVENTORY     |
	  
@ispSiteLocation @UBOW-CI-Scheduler-wdio6 @localRegression
  Scenario Outline: As a User, I can Add ISP Site Location
      When I navigate to Equipment page
      When I navigate to Add ISP Site Location page by selecting ADD SITE button
      When I fill the <Location>, <height>, <Lattidue>, <Longitude>, <City>, <State>, <Zip> and <Notes>    
      When I save details
      Then ISP Site Location should get added in "ISP Site Location" table 

	  Examples:
      |Location     |height|Lattidue   |Longitude    |City    |State  |Zip     |Notes                  |    
      |Cole Park    |1     |36.778261  | -119.4179324|Dallas  |       |12345   |Automated entry be test|
	  
@ispSiteLocation  
  Scenario Outline: As a User, I can Edit ISP Site Location
      When I navigate to Equipment page
      When I select 1st ISP Site Location
      When I change the <Location>, <Address>, <City>, <State>, <Zip>, and <Notes>           
      When I save the changes
      Then ISP Site Location should get updated

      Examples:
      |Location  |Address            |City    |State   |Zip          |Notes               |    
      |Manila    |2630 Croydon Drive |Sanger  |Manila  |012345-1245  |Automated update    |
	  
@ispSiteLocation @UBOW-CI-Scheduler-wdio6 @localRegression
  Scenario: As a User, I can add ISP Site Cost in ISP Site Margin for any ISP Site Location
      When I navigate to Equipment page
      When I select 1st ISP Site Location
      When I navigate to ISP Site Margin
      When I enter Cost Description and Cost
	  |Installation|20|
      When I save site margin details
      Then ISP Site Cost should get added 
      	  
@ispSiteLocation @UBOW-CI-Scheduler-wdio6  @localRegression
  Scenario: As a User, I can delete ISP Site Cost in ISP Site Margin for any ISP Site Location
      When I navigate to Equipment page
      When I select 1st ISP Site Location
      When I navigate to ISP Site Margin
      When I delete ISP site cost
	    Then ISP Site Cost should get deleted 
	  	  
@ispSiteLocation  @localRegression
  Scenario: As a User, I can Load Report of ISP Site Margin for any ISP Site Location
      When I navigate to Equipment page
      And I select 1st ISP Site Location
      When I navigate to ISP Site Margin
      When I click "Load Report" button
      Then ISP Site Margin report should get load in new browser tab
	  
@ispSiteLocation  @manualtest
  Scenario: As a User, I can Export To CSV of ISP Site Margin for any ISP Site Location
      When I navigate to Equipment page
      When I select 1st ISP Site Location
      When I navigate to ISP Site Margin
      When I click "Export To CSV" button
      Then ISP CSV file of Site Margin should be downloaded for selected ISP Site Location
	  
@ispSiteLocation 
  Scenario: As a User, I can Add Site contact for any ISP Site Location
      When I navigate to Equipment page
      When I select 1st ISP Site Location
      When I navigate to Add Site Contact page by selecting ADD NEW button
      When I fill in contact details
	  |Site Contact|47Billion|Albert|A    |Einstien|Indore  |Indore1 |Indore|PA   |12346-4562|1234567890|9876543210|9876543210|9876541259| 
      When I save informaiton
      Then Site Contact for selected ISP Site Location should get added 
	  
@ispSiteLocation         
  Scenario: As a User, I can Edit Site contact for any ISP Site Location
      When I navigate to Equipment page
      When I select 1st ISP Site Location
      When I select 1st Site Contact
      When I fill in contact details
	  |Update Contact|VISP|Albert|B    |Einstien|Indore  |Indore1 |Indore|PA   |12346-4562|1234567890|9876543210|9876543210|9876541259|
      When I save informaiton
      Then Site Contact for selected ISP Site Location should get updated 
	  
@ispSiteLocation  @manualtest
  Scenario: As a User, I can add Attachments for any ISP Site Location
      When I navigate to Equipment page
      When I select 1st ISP Site Location
      When I navigate to "Attachments" visible in lower tab
      When I select "ADD Attachment" button
      When I upload selected files from system
      Then Uploaded should be visible in Attachments
	  
@ispSiteLocation  @manualtest
  Scenario: As a User, I can Refresh the Attachment for ISP Site Equipment
      When I navigate to Equipment page
      When I select 1st ISP Site Equiment
      When I navigate to "Attachments" visible in lower tab
      When I click Refresh
      Then Attachments list should get reload 
	   
@ispSiteLocation @localRegression
  Scenario: As a User, I can delete any ISP Site Location
      When I navigate to Equipment page
      When I click "Delete" button from dotted menu for 1st ISP Site Location
      When I click "Yes" button in confirmation dialogue
      Then ISP Site Location should get deleted 
	  
@ispSiteEquipment @UBOW-CI-Scheduler 
  Scenario Outline: As a User, I can Add ISP Site Equipment
      When I navigate to Equipment page
      When I navigate to Add Equiment by selecting "Site Equiment" button
      When I enter the Site Equiment info <Model>, <Make>, <Description>, <Owner>, <SerialNo>, <Provisioned>, <MAC>, <Type>, <IP>, <Manage>, <Downlaod>, <Upload> and <Note>
      When I add Site Equiment 
      Then ISP Site Equipment should get added in "ISP Site Equipment" table 

      Examples:
      |Model    |Make          |Description  |Owner |SerialNo|Provisioned |MAC               |Type     |IP          |Manage |Downlaod|Upload |Note      |
      |N1245   |EquimentTest   |Good Product |ISP   |123456  |01/07/2017  |45:a4:b6:c2:d5:67 |LTE SIM  |192.168.1.1 |https  |10      |10     |notes test|
	  
@ispSiteEquipment  @manualtest
  Scenario Outline: As a User, I can view Equipment List using available Filters
       When I navigate to Equipment page
       When I navigate to Add Equiment by selecting "Site Equiment" button
       When I Choose available "<FIlters>" to view Equipment List
       Then Equipment List should be visible as per selected "<FIlters>"
            
       Examples:
       |Filters        |
       |All            |
       |by Description |
       |by Make        |
       |by Model       |
	   
@ispSiteEquipment
  Scenario Outline: As a User, I can Edit ISP Site Equipment
       When I navigate to Equipment page
       When I select 1st ISP Site Equipment 
       When I edit Site Equiment info "<Model>", "<Make>", "<Description>", "<Owner>", "<SerialNo>", "<Provisioned>", "<MAC>", "<Type>", "<IP>", "<Manage>", "<Downlaod>", "<Upload>" and "<Note>"
       When I click Save to update the ISP Site Equipment
       Then Site Equiment info should get updated

       Examples:
       |Model    |Make          |Description  |Owner |SerialNo|Provisioned |MAC               |Type     |IP          |Manage |Downlaod|Upload |Note      |
       |N1245   |EquimentTest   |Good Product |ISP   |123456  |01/07/2017  |45:a4:b6:c2:d5:67 |LTE SIM  |192.168.1.1 |https  |20      |20     |notes update|
	   
@ispSiteEquipment
  Scenario Outline: As a User, I can configure ISP Site Equipment Mapping
       When I navigate to Equipment page
       And  I select 1st ISP Site Equipment
	   When I select Mapping tab from Site Equiment
       When I set the value of "<Azimuth>", "<DownTilt>", "<Elevation>", "<Power>", "<BeamWidth>", "<BeamHeight>", "<Range>" and "<FadeMargin>"     
       When I Choose Color from available options
       When I click Save to configure the ISP Site Equipment Mapping 
       Then ISP Site Equipment Mapping should be configured
            
       Examples:
       |Azimuth |DownTilt   |Elevation |Power|BeamWidth|BeamHeight|Range|FadeMargin | 
       |10      |10         |10        |10   |10       |10        |10    |10        |
	   
@ispSiteEquipment 
  Scenario: As a User, I can select ISP Site location for any ISP Site Equipment
       When I navigate to Equipment page
       And  I select 1st ISP Site Equipment
       When I select Location tab from Site Equiment 
       When I select Location  from ISP Site location drop down
       When I save selected Site Equiment Location
       Then ISP Site Equipment Location should get mapped
	   
@ispSiteEquipment @UBOW-CI-Scheduler-wdio6 @localRegression
  Scenario Outline: As a User, I can add SSID for any ISP Site Equipment
       When I navigate to Equipment page
       And  I select 1st ISP Site Equipment
       When I navigate to SSID
       When I Enter "<SSID>" and "<Frequency>"      
	     When I click Add
       When I save added details of SSID
       Then ISP Site Equipment SSID should get added
            
       Examples:
       |SSID         |Frequency  | 
       |random       |12345      |
	   
@ispSiteEquipment @manualtest
  Scenario: As a User, I can add Attachments for any ISP Site Equipment
       When I navigate to Equipment page
       And  I select 1st ISP Site Equipment
       When I navigate to Attachments
       When I select a file to upload

@ispSiteEquipment @manualtest
  Scenario: As a User, I can Refresh the Attachment for ISP Site Equipment
       When I navigate to Equipment page
       And  I select 1st ISP Site Equiment
       When I navigate to Attachments
       When I click Refresh
       Then Attachments list should get reload 

@assignedCPE 
  Scenario: As a User, I can navigate to Assigned CPE tab
       When I navigate to Equipment page
       When I navigate to "Assigned CPE" tab
       Then I see records of Assigned CPE
	   
@assignedCPE @localRegression
  Scenario Outline: As a User, I can Edit any user's Assigned CPE
       When I navigate to Equipment page
       And  I navigate to "Assigned CPE" tab
       And  I select 1st record of Assigned CPE
       When I edit the Assigned CPE info <Model>, <Make>, <Description>, <Owner>, <SerialNo>, <Provisioned>, <MAC>, <Type>, <IP> and <Manage>
       When I update Assigned CPE
       Then Assigned CPE info for selected user should get updated

       Examples:
       |Model    |Make      |Description  |Owner |SerialNo|Provisioned |MAC               |Type          |IP          |Manage     | 
       |N1234    |Seimens   |Good Product |ISP   |123456  |01/07/2017  |45:a4:b6:c2:d5:67 |LTE SIM       |192.168.1.1 |https      |

@assignedCPE            
   Scenario: As a User, I can delete any Assigned CPE records
        When I navigate to Equipment page
        And  I navigate to "Assigned CPE" tab
        When I click "Delete" button from dotted menu for 1st record
        When I click "Yes" button in confirmation dialogue
        Then Assigned CPE record should get deleted    

@assignedCPE		
   Scenario: As a User, I can unassigned equipment for any Assigned CPE records
        When I navigate to Equipment page
        And  I navigate to "Assigned CPE" tab
        When I click "Unaasigned Equipment" button from dotted menu for 1st record
        When I click "Yes" button in confirmation dialogue
        Then Assigned CPE record should get Unassigned Equipment    

@inventory @UBOW-CI-Scheduler-wdio6 @localRegression @wipJune
   Scenario Outline: As a User, I can Add Receive Inventory
        When I navigate to Equipment page
        When I navigate to Add Recieve Inventory page by selecting "Recieve Inventory" button
        When I enter the details of inventory "<Model>", "<Make>", "<Description>", "<Owner>", "<SerialNo>", "<Provisioned>", "<MAC>", "<Type>", "<IP>" and "<Manage>"
        When I click "Add"  
        Then Recieve Inventory should get added in "Inventory" table 

        Examples:
        |Model    |Make      |Description  |Owner |SerialNo|Provisioned |MAC               |Type          |IP          |Manage     | 
        |N1234    |Seimens   |Good Product |ISP   |123456  |01/07/2017  |45:a4:b6:c2:d5:67 |LTE SIM       |192.168.1.1 |https      |

@inventory
  Scenario Outline: As a User, I can Edit Recieve Inventory
        When I navigate to Equipment page
        When I select 1st Receive Inventory from Inventory page
        When I edit the details of inventory "<Model>", "<Make>", "<Description>", "<Owner>", "<SerialNo>", "<Provisioned>", "<MAC>", "<Type>", "<IP>" and "<Manage>"
        When I update inventory
        Then Recieve Inventory should get updated in "Inventory" table 

        Examples:
        |Model    |Make      |Description  |Owner |SerialNo|Provisioned |MAC               |Type          |IP          |Manage     | 
        |N1234    |Seimens   |Good Product |ISP   |123456  |01/07/2017  |45:a4:b6:c2:d5:67 |LTE SIM       |192.168.1.1 |https      |

@inventory @manualtest
  Scenario: As a User, I can unassigned equipment for any Inventory records
        When I navigate to Equipment page
        When I navigate Inventory tab
        When I click "Unaasigned Equipment" button from dotted menu for 1st record
        When I click "Yes" button in confirmation dialogue
        Then Inventory record should get Unassigned Equipment    
