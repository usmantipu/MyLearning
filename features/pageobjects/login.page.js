// login.page.js
"use strict";
var Page = require('./page')
class LoginPage extends Page {

	
	
    get username()  {return browser.$('[name="username"]');}
					
    get passwordf() { return browser.$('[name="password"]');}
					
    get logbutton() {return browser.$('button=Sign in');}
	get notify()    {return browser.$('.badge-size-sm');}

    get vispLogo() {return browser.$('.app-icon-logo');}
    get dashboard() {return browser.$('.MuiTypography-h5');}
    get iFrameWalkMe() {return browser.$('.wm-visual-design-canvas');}
    get iFrameNPS() { return browser.$('.walkme-custom-balloon-outer-div');}
    get walkMePopupClose(){return browser.$('button=Not Now');}
    get ratingPopupClose(){return browser.$('[title="Close Survey"]');}
				
	
    open() {
        super.open('login');
    }
    
    submit() {
        this.form.submitForm();
    }
    
	
}
module.exports = new LoginPage();