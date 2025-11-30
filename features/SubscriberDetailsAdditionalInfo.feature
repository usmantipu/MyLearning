@subscriberDetailsAdditionalInfo
Feature: Subscriber Details - Manage additional info for subscribers

  Background: 
        Given I open UBO webapp
        And I login with username jcabangonautomation and password Test@1234
        And I navigate to subscriber list
        And I click on any subscriber record

@regression2021 @regression2021-SubscriberAdditionaInfo @regression-BIL
  Scenario: As a user, I can navigate to the Additional Info panel of the subscriber by clicking the Additional Info tab
      When I click on Additional Info tab
      Then Additional Info tab becomes visible
@regression2021 @regression2021-SubscriberAdditionaInfo @regression-BIL
  Scenario: As a User, I am restricted from editing the Setup Date field
      When I click on Additional Info tab
      Then I can see Set up Date is disabled
@regression2021 @regression2021-SubscriberAdditionaInfo @regression-BIL
  Scenario: As a User, I can see an accurate list of O/S options
      When I click on Additional Info tab
      And  I click on operating system field
      Then I should see accurate list of Additional Info OS
      |Vista  |
      |Win95  |
      |Win98  |
      |WinME  |
      |WinNT  |
      |Win2000|
      |WinXP  |
      |Mac    |
      |Linux  |
      |Unix   |
      |BeOS   |
      |WebTV  |
      |Other  |
      |Win7   |
      |Win8   |
      |Win10  |
  @regression2021  @regression2021-SubscriberAdditionaInfo @regression-BIL
    Scenario: As a User, I can see an accurate list of Source options
      When I click on Additional Info tab
      And  I click on Additional Info tab Source field
      Then Accurate list of Additional Info Source populated
      |Facebook   |
      |FromJavaUBO|
      |glip       |
      |Insta      |
      |medium     |
      |pinintrest |
      |Pintrest   |
      |twitter    |
      |WeChat     |

@regression2021 @regression2021-SubscriberAdditionaInfo @TA-134 @regression-BIL
  Scenario: As a User, I can view Source and Source Details fields are not present if the "Display Marketing and Source Details" option in the Marketing settings is disabled
      When I click on Additional Info tab
      And  I go to Marketing settings from top right menu
      And  I Uncheck "Display Marketing Source and Source Details" option
      Then Source and Source Details fields should not present under Additional Info tab 

@regression2021 @regression2021-SubscriberAdditionaInfo @TA-134 @regression-BIL
  Scenario: As a User, I can view Source and Source Details fields if the "Display Marketing and Source Details" option in the Marketing settings is enabled
      When I click on Additional Info tab
      And  I go to Marketing settings from top right menu
      And  I enable Marketing options "Display Marketing Source and Source Details"
      Then Source and Source Details visibility should match "Display Marketing and Source Details" setting

@regression2021 @regression2021-SubscriberAdditionaInfo  @regression-BIL
  Scenario: As a User, I can select the New option in the Source field to display the new source interface to add a new Source option
      When I click on Additional Info tab
      And  I click on Additional Info tab Source field
      And  I select "new" option
      And  I provide source details
      Then New source option should be added successfully
 @regression2021 @regression2021-SubscriberAdditionaInfo  @TA-135 @regression-BIL
  Scenario: As a User, I am restricted from adding a blank new source value
      When I click on Additional Info tab
      And  I click on Additional Info tab Source field
      And  I select "new" option 
      Then The Save button should be disabled
      And  I can see an error message
  @regression2021 @regression2021-SubscriberAdditionaInfo @regression-BIL
  #updated SP
  Scenario: As a User, I can view source details field should only accepts alphanumeric
      When I click on Additional Info tab
      And  I click on Additional Info tab Source field
      And  I select source options from Additional Info tab
           |Insta| 
      And  I provide non-alphanumeric value in source details field
      Then I can see Source details field validtion message displayed
      
 @regression2021 @regression2021-SubscriberAdditionaInfo @regression-BIL
  Scenario: As a User, I can save all valid information added to additional info section
      When I click on Additional Info tab
      And  I click on operating system field
      And  I select an OS
      And  I click on Additional Info tab Source field
      And  I select source options from Additional Info tab
           |Insta   |
      And  I select Source Details
      And  I save the Additional Info details
      Then additional information should be saved
      