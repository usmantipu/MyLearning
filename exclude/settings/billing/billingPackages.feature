Feature: View/Edit Billing Packages

  User can view/edit Packages Details

  Background:
    Given I open UBO webapp
    And   I login with username "dreamteam2" and password "str0ngP@ss2"

  Scenario: As a user, I can select "Packages" from "Billing" settings
    When I navigate to settings
    When I select "Billing" settings
    When I select "Packages"
	Then Packages interface is shown

  Scenario Outline: As a user, I can view "<section>" of Package Settings
    When I navigate to settings
    When I select "Billing" settings
    When I select "Packages"
    Then Following "<section>" of "Package Settings" of Packages will be visible

    Examples:

      |section			                                              |
      |Packages			                                              |
	  |Additional settings for Email Services				          |
      |Additional fields for packages with wireless services          |
      |Additional settings for Wireless and Wireless Hotspot service  |
      |Pre-Signup Authentication                                      |


  Scenario Outline: As a user, I can select "<package>" from Package Settings
    When I navigate to settings
    When I select "Billing" settings
    When I select "Packages"
    Then "<packages>" of Packages will be visible on the left side of the component
    Then I can select "<package>"
    Then Details of "<package>" will be visible

    Examples:

      |packages |
      |Package 1|
      |Package 2|

	  
  Scenario: As a user, I can view details of "<Package Details >" from Package Settings when mouseover
    When I navigate to settings
    When I select "Billing" settings
    When I select "Packages"
	When I mouse over a Package from Package Setting
	Then Services and pricing will be visible

  Scenario Outline: As a user, I can select a Package from Package Setting
    When I navigate to settings
    When I select "Billing" settings
    When I select "Packages"
    Then Package Setting of Packages will be visible
    Then I can select a "<Package>" from "<Package Setting>"
    And  I can view the following "<tabs>"

    Examples:

      |tabs                         |
      |Services                     |
      |Pricing                      |
      |Tax                          |
      |Options                      |

  Scenario: As a user, I can select Service tab of a package
    When I navigate to settings
    When I select "Billing" settings
    When I select "Packages"
    When I select a Package from Package Setting in Packages
    Then  I can view the details of Services

  Scenario: As a user, I can edit details of Service of a package
    When I navigate to settings
    When I select "Billing" settings
    When I select "Packages"
    When I select desired "Package" from "Package Setting" panel
    When I select "Services" tab
    When I edit Details from the list of "Service", "Package Description", and "Package Includes"
    Then details regarding "Services" are updated

  Scenario Outline: As a user, I can add new service in "<Services>" tab
    When I navigate to settings
    When I select "Billing" settings
    When I select "Packages"
    When I select desired "Package" from "Package Setting" panel
    When I select "Services" tab
    When I add a new "service" and its "label"
    When I add "<packageDescription>" and "<packageIncludes>"
    Then I can save the package

    Examples:

      |packageDescription|packageIncludes|
	  |Package one       |Includes       |
	  
  Scenario: As a user, I can see quantity count increased when newly added Service already present in "<Services>" tab
    When I navigate to settings
    When I select "Billing" settings
    When I select "Packages"
    When I select desired "Package" from "Package Setting" panel
    When I select "Services" tab
    When I click on the "Add Services" icon to add new record.
    When I select a value from "<Service>" field
    Then Quantity field count increases against that service

  Scenario Outline: As a user, I can delete record from the "Available Package service" list in "<Service>" tab
    When I navigate to settings
    When I select "Billing" settings
    When I select "Packages"
    When I select desired "Package" from "Package Setting" panel
    When I select "Services" tab
	When I delete a service
    Then Service should be deleted from package

  Scenario: As a user, I can select "Pricing" tab of a "package"
    When I navigate to settings
    When I select "Billing" settings
    When I select "Packages"
    When I select desired "Package" from "Package Setting" panel
    Then I can select "<Pricing>" tab

  Scenario Outline: As a user, I can edit value of "<Pricing>" tab of a "<package>"
    When I navigate to settings
    When I select "Billing" settings
    When I select "Packages"
    When I select desired "Package" from "Package Setting" panel
    When I select "Pricing" tab
    When I edit the "<price>" field
	When I edit the "<monthly>" field
	When I set "<Allow custom pricing per subscriber for this package>"
	Then Pricing changes are updated
	
    Examples:

    |price  |monthly  |Allow custom pricing per subscriber for this package|
    |10.00  |15.00    |checked                                             |
	|09.00  |25.00    |unchecked                                           |

	
  Scenario: As a user, I can select "<Tax>" tab of a "<package>"
    When I navigate to settings
    When I select "Billing" settings
    When I select "Packages"
    When I select desired "Package" from "Package Setting" panel
    Then I can select "Tax" tab


  Scenario Outline: As a user, I can edit "Tax" tab of a "package"
    When I navigate to settings
    When I select "Billing" settings
    When I select "Packages"
    When I select desired "Package" from "Package Setting" panel
    When I select "Tax" tab
    When I set "<tax>", "<setupFee>", "<excessCharge>"
	Then Tax details are updated

    Examples:

      |tax                        |setupFee |excessCharge |
	  |None                       |checked  |checked      |
	  |Use subscriber tax settings|unchecked|checked      |
	  
  Scenario Outline: As a user, I can edit "Tax" tab of a "package" with custom package setttings - percent of total
    When I navigate to settings
    When I select "Billing" settings
    When I select "Packages"
    When I select desired "Package" from "Package Setting" panel
    When I select "Tax" tab
    When I set "<customPackageSettings>", "<percentOfTotal>"
	Then Tax details are updated

    Examples:

      |customPackageSettings|percentOfTotal|
	  |checked              |02.00         |

 Scenario Outline: As a user, I can edit "Tax" tab of a "package" with custom package setttings - percent of total
    When I navigate to settings
    When I select "Billing" settings
    When I select "Packages"
    When I select desired "Package" from "Package Setting" panel
    When I select "Tax" tab
    When I set "<customPackageSettings>", "<flatRate>", "<monthly>", "<quarterly>", "<semi-annually>", "<annual>", "<annual>"
	Then Tax details are updated

    Examples:

      |customPackageSettings|flatRate|monthly|quarterly|semi-annually|annual|annual|
	  |checked              |checked |2.00   |2.50     |3.00         |4.00  |2.50  |	  

  Scenario: As a user, I can select "Options" tab of a "package"
    When I navigate to settings
    When I select "Billing" settings
    When I select "Packages"
    When I select desired "Package" from "Package Setting" panel
    When I select "<Options>" tab
    Then  I can see sections "Online Settings", "Multiple MACs", "Package Hibernation"


  Scenario Outline: As a user, I can edit "sections" of "Options" tab of a "package"
    When I navigate to settings
    When I select "Billing" settings
    When I select "Packages"
    When I select desired "Package" from "Package Setting" panel
    When I select "<Options>" tab
    When I set values of "<signupServer>", "<requirementCreditcardPaymentonSignup>", "<locationId>", "<enableLocationBasedRouter>", "<accountManager>", "<allowUpto>", "<requireSub2ReenterPWD>", "<hybernationLimitperTerm>", "<hybernationLength>", "<requireUN&PWD2reactivate>", "<AllowHybernateLimit2modify>", "<UBOAppUserCanSupercede>", "<allowSubscriber2hyber-reactive>", "<atTheEndofTerm>", "<onSpecificDate>", "<sendReactiveMail2>", "<sendHybernateMail2>" 
    Then Options are updated for pacakges


    Examples:

		|signupServer   |requirementCreditcardPaymentonSignup|locationId|enableLocationBasedRouter|accountManager|allowUpto|requireSub2ReenterPWD|hybernationLimitperTerm|hybernationLength|requireUN&PWD2reactivate|AllowHybernateLimit2modify|UBOAppUserCanSupercede|allowSubscriber2hyber-reactive|atTheEndofTerm|onSpecificDate|sendReactiveMail2|sendHybernateMail2|
		|DSL			|checked							 |MKJH		|checked				  |checked	     |5		   |15					 |1              		 |3                |checked					|checked                   |checked				  |checked						 |checked		|checked	   |mail@mail.com    |mail@mail.com     |
		|Dial-up		|checked 							 |MKJH		|checked				  |checked	     |10	   |10					 |2              		 |2                |checked					|checked                   |checked				  |checked						 |checked		|checked	   |mail@mail.com    |mail@mail.com     |
		|Wireless	    |checked					 		 |MKJH		|checked				  |checked	     |15	   |15  				 |3             		 |10               |checked					|checked                   |checked				  |checked						 |checked		|checked	   |mail@mail.com    |mail@mail.com     |


  Scenario: As a user, I can select "<Wireless Hotspot>" from overflow menu of "<package>"
    When I navigate to settings
    When I select "Billing" settings
    When I select "Packages"
    When I select desired "Package" from "Package Setting" panel
    Then I can select "<Wireless Hotspot>" from overflow menu of "<package>"

  Scenario Outline: As a user, I can edit "sections"  of "Wireless Hotspot"
    When I navigate to settings
    When I select "Billing" settings
    When I select "Packages"
    When I select desired "Package" from "Package Setting" panel
    When I select "Wireless Hotspot" from overflow menu of "package"
    When I provide "<speedLimit>", "<downloadSpeed>", "<dUnits>", "<uploadSpeed>", "<uUnits>", "<downBurst>", "<dbUnit>", "<upBurst>", "<ubUnit>", "<burstTime>", "<tUnits>", "<throttling>", "<after>", "<aUnits>", "<trottleTo>", "<tDownload>", "<tdUnits>", "<tUpload>", "<tuUnits>", "<disconnectSubscriber>", "<allwSpeedModificationPerSubcrbr>", "<useVISPHyperRadius>"  
    Then Wireless hotspot settings are updated

    Examples:

      |speedLimit|downloadSpeed|dUnits|uploadSpeed|uUnits|downBurst|dbUnit|upBurst|ubUnit|burstTime|tUnits|throttling|after|aUnits  |trottleTo|tDownload|tdUnits|tUpload|tuUnits|disconnectSubscriber|allwSpeedModificationPerSubcrbr|useVISPHyperRadius|
	  |checkd    |8            |mbps  |1          |mbps  |9        |mbps  |1      |mbps  |300      |sec   |checked   |1    |Gigabyte|checked  |1        |mbps   |1      |mbps   |unchecked           |checked                        |checked           |
	  |checkd    |8            |mbps  |1          |mbps  |9        |mbps  |1      |mbps  |300      |sec   |checked   |1    |Gigabyte|unchecked|         |       |       |       |checked             |unchecked                      |unchecked         |
	  |checkd    |8            |mbps  |1          |mbps  |9        |mbps  |1      |mbps  |300      |sec   |unchecked |     |        |         |         |       |       |       |                    |checked                        |checked           |
	  |unchecked |             |      |           |      |         |      |       |      |         |      |checked   |1    |Gigabyte|checked  |1        |mbps   |1      |mbps   |unchecked           |checked                        |checked           |
	  |checkd    |8            |mbps  |1          |mbps  |9        |mbps  |1      |mbps  |300      |sec   |unchecked |     |        |         |         |       |       |       |                    |checked                        |checked           |

  Scenario: As a user, I can select "<Wireless Hotspot Access Time>" from overflow menu of "<package>"
    When I navigate to settings
    When I select "Billing" settings
    When I select "Packages"
    When I select desired "Package" from "Package Setting" panel
    Then I can select "<Wireless Hotspot Access Time>" from overflow menu of "<package>"

  Scenario Outline: As a user, I can edit content of "Wireless Hotspot Access Time"
    When I navigate to settings
    When I select "Billing" settings
    When I select "Packages"
    When I select desired "Package" from "Package Setting" panel
    When I select "<Wireless Hotspot Access Time>" from overflow menu of "<package>"
    When I set values value for "<accessTime>", "<units>", "<excessCharge>", "<value>", "<disconnectSubscriber>", "<signupDate>", "<1stSuccessfulLogin>"
	Then Wireless hotspot access time settings are updated


    Examples:

      |accessTime|units|excessCharge|value|disconnectSubscriber|signupDate|1stSuccessfulLogin|
	  |1         |days |checked     |0.5  |unchecked           |checked   |unchecked         |
	  |1         |hours|checked     |0.5  |unchecked           |checked   |unchecked         |
	  |2         |hours|unchecked   |     |checked             |unchecked |checked           |
	  
	  
  Scenario Outline: As a user, I can add new package
    When I navigate to settings
    When I select "Billing" settings
    When I select "Packages"
    When I add a new package by its "<packageName>"
	When I add a new "<service>" and its "<label>"
    When I add "<packageDescription" and "<packageIncludes>"
    Then I can save the package
	
	 Examples:

      |packageName|service           |label   |packageDescription|packageIncludes|
	  |PackageOne |Accelerated Dialup|labelone|testDescription   |testIncludes   |