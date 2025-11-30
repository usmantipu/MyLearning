Feature: Make Payments
User can make payments for application usage so that they can clear all their debits levied on their services usage

	Background: 
			Given I open UBO webapp
			And I login with username "dreamteam2" and password "str0ngP@ss2"
			
	Scenario: As a user, I can make payment using credit card without autopay option
			When I go to settings
			When I go to MyVisp under application settings
			When I go to payments
			When I make payment using credit card without autopay option
			Then Payment is made against my outstanding invoice
			
	Scenario Outline: As a user, I can make payment using credit card with autopay on specified day of the month
			When I go to settings
			When I go to MyVisp under application settings
			When I go to payments
			When I make payment using credit card with autopay option on "<specified>" day
			Then Payment is made against my outstanding invoice
			Then Credit card will be auto charged on "<specified>" day of the month
		
		Examples:
			|specified|
			|15       |
			|25       |
			
	Scenario Outline: As a user, I can make payment using credit card with autopay on specified day of the month and auto add X amount when running autopay
			When I go to settings
			When I go to MyVisp under application settings
			When I go to payments
			When I make payment using credit card with autopay option on "<specified>" day
			Then Payment is made against my outstanding invoice
			Then Credit card will be auto charged on "<specified>" day of the month
			Then "<X>" amount will be added to charged amount
		
		Examples:
			|specified|X  |
			|15       |0.5|
			|25       |2  |
			
	Scenario: As a user, I CANNOT make payment using credit card without autopay option with expiry date in past
			When I go to settings
			When I go to MyVisp under application settings
			When I go to payments
			When I make payment using credit card without autopay option and expiry date in past
			Then Credit card is not charged
			Then Proper error message prompts
			
	Scenario: As a user, I can make payment using E-check
			When I go to settings
			When I go to MyVisp under application settings
			When I go to payments
			When I make payment using E-check
			Then Payment is made against my outstanding invoice
			
	Scenario: As a user, I CANNOT make payment using E-check by unchecking "By clicking ADD FUNDS I authorize visp.net to electronically submit my check payment"
			When I go to settings
			When I go to MyVisp under application settings
			When I go to payments
			When I make payment using E-check by unchecking "By clicking ADD FUNDS I authorize visp.net to electronically submit my check payment"
			Then Payment could not be made 