# @Dash1board
Feature: Dashboard

  Background:
			Given I go to Visp URL
			And I login using my credentials
			|jcabangonautomation|Test@1234|
@dashboardSanity @UBOW-CI-Scheduler-wdio6 @regression2021 @regression2021-dashboard @Dash1board @regression-BIL @browserStack
  Scenario: As a User, I can view multiple widgets on dashboard
			When I am on dashboard
			Then I can view different widgets
			|Overview - Subscribers Count|
			|Revenue                     |
			|Subscribers                 |
			|Package - Revenue           |
			|Tickets                     |
			|Reports                     |
			|Scheduling                  |
			|Inventory Profiles          |

@regression2021 @regression2021-dashboard @ui-upgrade @regression-BIL @aiopoc
  Scenario: As a User, I can see Overview - Subscriber count stats on dashboard
			When I am on dashboard
			Then I can see total subscribers
			Then I can see count for paid up, Due, Past Due, Suspended, Prospects, and Hibernated users
  
#   Scenario: As a User, I can see Revenue stats on dashboard
# 			When I am on dashboard
# 			Then I can see Total revenue, ARPU, Payment still due this month, and Total invoiced this month on Revenue widget
@regression2021 @regression2021-dashboard @Dash1board @TA-78 @regression-BIL @TA-756 @aiopoc
  Scenario: As a User, I can zoom different periods on subscriber widgets
			When I am on dashboard
			When I select subscriber period to zoom  
			|1 Week   |
			|1 Month  |
#			|3 Months | # disabled by default
#			|This year| # this only works locally but not on CircleCI. This can be uncommented in local testing
			|All      | 
			Then I can see subscriber graph accordingly

@regression2021 @regression2021-dashboard	@ui-upgrade	@regression-BIL @aiopoc
  Scenario: As a User, I can filter tickets on tickets widget
			When I am on dashboard
			When I select different ticket statuses
			|Pending  |
			|Open    |
			|Resolved  |
			Then tickets are filtered as per selected status in widget

@regression2021 @regression2021-dashboard @Dash1board @regression-BIL @aiopoc
  Scenario: As a User, I can open tickets from tickets widget
			When I am on dashboard
			When I click on a record in available tickets
			Then Ticket details should be open in docker
			
  #Scenario: As a User, I can zoom different periods on Package revenue widgets
			#When I am on dashboard
			#When I select different periods to zoom for Package revenue widget
			#|1 Week|
			#|1 Month|
			#|3 Months|
			#|This year|
			#|All |
			#Then I can see total revenue in graph datewise

 @dashboard-report-app @regression2021 @regression2021-dashboard
  Scenario: As a User, I can open reports from reports widget
  # This Scenario fails because report pages doesnot open in new tab
			When I am on dashboard
			When I click on open new tab for available report
			Then Report details should be open in new tab 
			

@regression2021 @regression2021-dashboard @regression-BIL
  Scenario: As a User, I can mark a report as favorite
			When I am on dashboard
			When I mark a report as favorite	
			Then Report becomes available under My Favorite tab
			
@regression2021 @regression2021-dashboard @regression-BIL
  Scenario: As a User, I can view global favorite reports
			When I am on dashboard
			When I select global favorite reports
			Then Global favorite reports should become visible

@regression2021 @regression2021-dashboard @regression-BIL
  Scenario: As a User, I can view My favorite reports
			When I am on dashboard
			When I select My favorite reports
			Then My favorite reports should become available in record list
@manualtest	#@manualtest		
  Scenario: As a User, I can export reports
			When I am on dashboard
			When I click export icon on any record in report listing
			Then Report gets exported in csv format

@regression2021 @regression2021-dashboard @regression-BIL
  Scenario: As a User, I can view scheduled, unscheduled, and Installed scheduled records on Scheduling widget
			When I am on dashboard
			Then I can see scheduled, unscheduled, and Installed scheduled records on Scheduling widget

@regression2021 @regression2021-dashboard @regression-BIL
  Scenario: As a User, I can customize dashboard with widgets
			When I am on dashboard
			When I open dashboard customization window
			When I turn off desired widgets
			Then Desired widgets should be turned off on dashboard
			When I open dashboard customization window
			When I turn on desired widgets
			Then Desired widgets should be turned on on dashboard
@manualtest	#@manualtest		
  Scenario: As a User, I		
  Scenario: As a User, I can drag and reposition widgets on dashboard
			When I am on dashboard
			When I drag and drop widgets on dashboard
			Then Desired widgets are repositioned accordingly
			
