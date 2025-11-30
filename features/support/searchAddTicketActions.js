var searchAddTicketPage= require('../pageobjects/searchAddTicket.page');
var Utils = require('./utils');
var expect = require('chai').expect;
var should = require('chai').should();

class searchAddTicketActions
{



    constructor()
    {
        this.lastName;
        this.username;
        this.firstName;
        this.emailAddress;
        this.address;
        this.city;
        this.state;
        this.zip;
    }

    getSubscriberListData()
    {
        var subAllData = searchAddTicketPage.allReordsData;
        // for(var i=0; i<20;i++)
        // {
        //     var val=subAllData[i].getText();
        //     console.log(val);

        // }

        this.username=subAllData[1].getText();
        this.firstName=subAllData[3].getText();

    }

    searchUsingUsername()
    {

       searchAddTicketPage.searchInputField.waitForDisplayed();
       searchAddTicketPage.searchInputField.waitForClickable();
       searchAddTicketPage.searchInputField.click();
       searchAddTicketPage.searchInputField.addValue(this.username);
       browser.pause(3000);

    }

    searchUsingFirstName()
    {

       searchAddTicketPage.searchInputField.waitForDisplayed();
       searchAddTicketPage.searchInputField.waitForClickable();
       searchAddTicketPage.searchInputField.click();
       searchAddTicketPage.searchInputField.addValue(this.firstName);
       browser.pause(3000);

    }

    goToSubscriberDetailsPage()
    {
        //searchAddTicketPage.openSubscriber.waitForDisplayed({ timeout: 9000 });
        //searchAddTicketPage.openSubscriber.waitForClickable({ timeout: 9000 });
        //searchAddTicketPage.openSubscriber.click();
        searchAddTicketPage.openSubDetailsBtn.waitForDisplayed();
        searchAddTicketPage.openSubDetailsBtn.waitForClickable();
        searchAddTicketPage.openSubDetailsBtn.click();
    }

    getSubscriberLastName()
    {
        
        searchAddTicketPage.subLastName.waitForDisplayed();
        this.lastName=searchAddTicketPage.subLastName.getAttribute('value');
        console.log(this.lastName);
        browser.pause(2000);
    }

    searchUsingLastName()
    {

       searchAddTicketPage.searchInputField.waitForDisplayed();
       searchAddTicketPage.searchInputField.waitForClickable();
       searchAddTicketPage.searchInputField.click();
       searchAddTicketPage.searchInputField.setValue(this.lastName);
       browser.pause(3000);

    }

  


    searchUsingEmailAddress(emailaddress)
    {
       this.emailAddress = emailaddress.replace(/['"]+/g, '');
       searchAddTicketPage.searchInputField.waitForDisplayed();
       searchAddTicketPage.searchInputField.waitForClickable();
       searchAddTicketPage.searchInputField.click();
       searchAddTicketPage.searchInputField.addValue(this.emailAddress);
       browser.pause(3000);

    }

    getSubscriberEmailAddress()
    {
       
        searchAddTicketPage.subEmailAddress.waitForDisplayed();
        this.emailAddress=searchAddTicketPage.subEmailAddress.getAttribute('value');
        console.log(this.emailAddress);
        browser.pause(2000);
    }

    getSubscriberAddress()
    {
        searchAddTicketPage.subAddress.waitForDisplayed();
        this.address=searchAddTicketPage.subAddress.getAttribute('value');
        console.log(this.address);
        browser.pause(2000);
    }


    getSubscriberCity()
    {
        searchAddTicketPage.subCity.waitForDisplayed();
        this.city=searchAddTicketPage.subCity.getAttribute('value');
        // if(this.city==='')
        // {
        //     var dropdownValueSelection = ['\uE015', '\uE007'];
        //     this.city = 'Miami';
        //     searchAddTicketPage.subCity.setValue(this.city);
        //     browser.keys(dropdownValueSelection);
        //     searchAddTicketPage.btnSaveEdits.waitForClickable({ timeout: 5000 });
        //     searchAddTicketPage.btnSaveEdits.click();
        //     browser.pause(5000);
        // }
        console.log('extracted city is' +this.city);
        browser.pause(2000);
    }



    getSubscriberState()
    {
        searchAddTicketPage.subState.waitForDisplayed();
        this.state=searchAddTicketPage.subState.getText();
        console.log(this.state);
        browser.pause(2000);
    }

    searchUsingState()
    {

       searchAddTicketPage.searchInputField.waitForDisplayed();
       searchAddTicketPage.searchInputField.waitForClickable();
       searchAddTicketPage.searchInputField.click();
       searchAddTicketPage.searchInputField.addValue(this.state);
       browser.pause(3000);

    }

    getSubscriberZip()
    {
        searchAddTicketPage.subZip.waitForDisplayed();
        this.zip=searchAddTicketPage.subZip.getAttribute('value');
        console.log(this.zip);
        browser.pause(2000);
    }

    searchUsingZip()
    {

       searchAddTicketPage.searchInputField.waitForDisplayed();
       searchAddTicketPage.searchInputField.waitForClickable();
       searchAddTicketPage.searchInputField.click();
       searchAddTicketPage.searchInputField.addValue(this.zip);
       browser.pause(3000);

    }

    searchUsingAddress()
    {

       searchAddTicketPage.searchInputField.waitForDisplayed();
       searchAddTicketPage.searchInputField.waitForClickable();
       searchAddTicketPage.searchInputField.click();
       searchAddTicketPage.searchInputField.addValue(this.address);
       browser.pause(3000);

    }


    searchUsingCity()
    {

       searchAddTicketPage.searchInputField.waitForDisplayed();
       searchAddTicketPage.searchInputField.waitForClickable();
       searchAddTicketPage.searchInputField.click();
       searchAddTicketPage.searchInputField.addValue(this.city);
       browser.pause(3000);

    }

    VerifyselectUsingState()
    {
        browser.pause(2000);
        searchAddTicketPage.autocompleteDialougeParent.waitForDisplayed();
        var listedState=searchAddTicketPage.autocompleteDialouge;
        expect(listedState[0].getText()).to.include(this.state);
        expect(listedState[0].isExisting()).to.be.true;
        listedState[0].click();
        browser.pause(3000);
    }




    

    VerifyselectUsingZip()
    {
        browser.pause(2000);
        searchAddTicketPage.autocompleteDialougeParent.waitForDisplayed();
        var listedZip=searchAddTicketPage.autocompleteDialouge;
        expect(listedZip[0].getText()).to.include(this.zip);
        expect(listedZip[0].isExisting()).to.be.true;
        listedZip[0].click();
        browser.pause(3000);
    }

    




    VerifyselectUsingCity()
    {
        browser.pause(2000);
        searchAddTicketPage.autocompleteDialougeParent.waitForDisplayed();
        var listedCity=searchAddTicketPage.autocompleteDialouge;
        expect(listedCity[0].getText()).to.include(this.city);
        expect(listedCity[0].isExisting()).to.be.true;
        listedCity[0].click();
        browser.pause(3000);
    }
        



    VerifyselectUsingAddress()
    {
        browser.pause(2000);
        searchAddTicketPage.autocompleteDialougeParent.waitForDisplayed();
        var listedAddress=searchAddTicketPage.autocompleteDialouge;
        expect(listedAddress[0].getText()).to.include(this.address);
        expect(listedAddress[0].isExisting()).to.be.true;
        listedAddress[0].click();
        browser.pause(3000);
        
    }



   

    VerifyselectUsingEmailAddress()
    {
        browser.pause(2000);
        searchAddTicketPage.autocompleteDialougeParent.waitForDisplayed();
        var listedEmail=searchAddTicketPage.autocompleteDialouge;
        expect(listedEmail[0].getText()).to.include(this.emailAddress);
        expect(listedEmail[0].isExisting()).to.be.true;
        listedEmail[0].click();
        browser.pause(3000);
        
    }



    VerifyselectSubUsingUsername()
    {
        
        searchAddTicketPage.autocompleteDialougeParent.waitForDisplayed();
        var listedUsername=searchAddTicketPage.autocompleteDialouge;
        browser.pause(3000);
        expect(listedUsername[0].getText()).to.include(this.username);
        expect(listedUsername[0].isExisting()).to.be.true;
        browser.pause(2000);
        listedUsername[0].click();
        browser.pause(3000);

    }

    VerifyselectSubUsingFirstName()
    {
        
        searchAddTicketPage.autocompleteDialougeParent.waitForDisplayed();
        var listedFirstName=searchAddTicketPage.autocompleteDialouge;
        browser.pause(3000);
        expect(listedFirstName[0].getText()).to.include(this.firstName);
        expect(listedFirstName[0].isExisting()).to.be.true;
        browser.pause(2000);
        listedFirstName[0].click();
        browser.pause(3000);

    }

    VerifyselectSubUsingLastName()
    {
        browser.pause(2000);
        searchAddTicketPage.autocompleteDialougeParent.waitForDisplayed();
        var listedLastName=searchAddTicketPage.autocompleteDialouge;
        expect(listedLastName[0].getText()).to.include(this.lastName);
        expect(listedLastName[0].isExisting()).to.be.true;
        listedLastName[0].click();
        browser.pause(3000);
        

    }


    VerifySearchResult()
    {
        
        searchAddTicketPage.autocompleteDialougeParent.waitForDisplayed();
        var listedUsername=searchAddTicketPage.autocompleteDialouge;
        browser.pause(3000);
        expect(listedUsername[0].getText()).to.include(this.username);
        expect(listedUsername[0].isExisting()).to.be.true;
        expect(listedUsername[1].getText()).to.include(this.username);
        expect(listedUsername[1].isExisting()).to.be.true;
        browser.pause(3000);

    }

    
 

    





}
module.exports = new searchAddTicketActions();