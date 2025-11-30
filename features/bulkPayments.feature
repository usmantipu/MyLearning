@bulkPayments
Feature: Manage bulk payment postings
#Due to bug TA-137 some tests can only be executed on Betacleversoft.net so change credentials accordingly.
  Background: 
	  Given I open UBO webapp
        And I login with username jcabangonautomation and password Test@1234
        #And I login with username dreamteam9 and password str0ngP@ss9
        And I navigate to subscriber list

@regression2021 @regression2021-bulkPayments 
  Scenario: As a user, I can post payments in bulk for different subscribers
      When I select a subscriber to open its details
      Then I post payment for desired subscriber 
      |user        |memo     |amt|pmtMethod |checkNo|moneyOrderNo|ccNo               |ccExpires|ccYear|ccTranID|eCheckRoutingNo|eCheckACNo|eCheckTranID|
      #|2037256|auto memo|2  |cc        | -     | -          |4433-9394-0196-8332| 3       |2025  |1111    | -             | -        | -          |
      #|2037265|auto memo|2  |eCheck    | -     | -          | -                 | -       | -    | -      |123123123      |autoGen   |autoGen     |
      |2037263|auto memo|2  |cash      |  -    | -          | -                 | -       | -    | -      | -             | -        | -          |
      |2037258|auto memo|2  |check     |autoGen| -          | -                 | -       | -    | -      | -             | -        | -          |
      |2037257|auto memo|2  |moneyOrder| -     |123         | -                 | -       | -    | -      | -             | -        | -          |
      |2037267|auto memo|2  |other     |  -    | -          | -                 | -       | -    | -      | -             | -        | -          |
      |2037255|auto memo|2  |cash      |  -    | -          | -                 | -       | -    | -      | -             | -        | -          |
      |2037261|auto memo|2  |cash      |  -    | -          | -                 | -       | -    | -      | -             | -        | -          |
      |2037268|auto memo|2  |cash      |  -    | -          | -                 | -       | -    | -      | -             | -        | -          |
      |2037269|auto memo|2  |cash      |  -    | -          | -                 | -       | -    | -      | -             | -        | -          |
      #|2037256|auto memo|2  |cc        | -     | -          |4433-9394-0196-8332| 3       |2025  |1111    | -             | -        | -          |
      #|2037265|auto memo|2  |eCheck    | -     | -          | -                 | -       | -    | -      |123123123      |autoGen   |autoGen     |
      |2037263|auto memo|2  |cash      |  -    | -          | -                 | -       | -    | -      | -             | -        | -          |
      |2037258|auto memo|2  |check     |autoGen| -          | -                 | -       | -    | -      | -             | -        | -          |
      |2037257|auto memo|2  |moneyOrder| -     |123         | -                 | -       | -    | -      | -             | -        | -          |
      |2037267|auto memo|2  |other     |  -    | -          | -                 | -       | -    | -      | -             | -        | -          |
      |2037255|auto memo|2  |cash      |  -    | -          | -                 | -       | -    | -      | -             | -        | -          |
      |2037261|auto memo|2  |cash      |  -    | -          | -                 | -       | -    | -      | -             | -        | -          |
      |2037268|auto memo|2  |cash      |  -    | -          | -                 | -       | -    | -      | -             | -        | -          |
      |2037269|auto memo|2  |cash      |  -    | -          | -                 | -       | -    | -      | -             | -        | -          |
#Copy and paste above records in data table to do 100s of transactions