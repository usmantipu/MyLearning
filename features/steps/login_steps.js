const { Given, When, Then } = require("@cucumber/cucumber");
var LoginPage = require('../pageobjects/login.page');
var Utils = require('../support/utils');
var expect = require('chai').expect //this should be in some configuration file


  Given(/^I open visp webapp$/, function() {
		
       LoginPage.open();
	   
		//console.log('this should not fail');
	
  });

  
  When(/^I fillout in login as (.*) and password as (.*)$/, function(login, password) {
    
	  
	  
	  LoginPage.username.waitForDisplayed();

	  LoginPage.username.setValue(login);
	  LoginPage.passwordf.setValue(password);

	  LoginPage.logbutton.waitForDisplayed();
	  LoginPage.logbutton.click();
	
  });

  Then(/^I see the (.*)$/, function(dashboard) {
	  
		Utils.closeRatingPopup();
		browser.pause(5000);
		LoginPage.vispLogo.waitForDisplayed();
		LoginPage.vispLogo.click();
		
		LoginPage.dashboard.getText();
		
		expect(LoginPage.dashboard.getText()).to.eql(dashboard);
		Utils.clearLocalStorage();

  });
  
  Then(/^I see the error message (.*)$/, function(error) {
	  
		
		LoginPage.alertmsg.waitForDisplayed();
		expect(LoginPage.alertmsg.getText()).to.eql(error);
		Utils.clearLocalStorage();

  });
