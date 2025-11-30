const { Given, When, Then } = require("@cucumber/cucumber");
const searchAddTicketActions = require('../support/searchAddTicketActions');
const Utils = require('../support/utils');



When(/^I get subscriber list first row data$/, function () {

    searchAddTicketActions.getSubscriberListData();
});
When(/^I get subscriber last name$/, function () {

    searchAddTicketActions.getSubscriberLastName();
});

When(/^I go to subscriber details page$/, function () {

    searchAddTicketActions.goToSubscriberDetailsPage();
});



When(/^I get subscriber email address$/, function () {

    searchAddTicketActions.getSubscriberEmailAddress();
});

When(/^I get subscriber address$/, function () {

    searchAddTicketActions.getSubscriberAddress();
});

When(/^I get subscriber city$/, function () {

    searchAddTicketActions.getSubscriberCity();
});

When(/^I get subscriber state$/, function () {

    searchAddTicketActions.getSubscriberState();
});

Then(/^I can search subscriber by giving state$/, function () {

    searchAddTicketActions.searchUsingState();
});

Then(/^I can select subscriber searched by state$/, function () {
    searchAddTicketActions.VerifyselectUsingState();

});




When(/^I get subscriber zip$/, function () {

    searchAddTicketActions.getSubscriberZip();
});

Then(/^I can see that matching results appear as rows$/, function () {

    searchAddTicketActions.VerifySearchResult();
});





Then(/^I can search subscriber by giving zip$/, function () {

    searchAddTicketActions.searchUsingZip();
});

Then(/^I can select subscriber searched by zip$/, function () {
    searchAddTicketActions.VerifyselectUsingZip();

});





Then(/^I can search subscriber by giving city$/, function () {

    searchAddTicketActions.searchUsingCity();
});

Then(/^I can select subscriber searched by city$/, function () {
    searchAddTicketActions.VerifyselectUsingCity();

});




Then(/^I can search subscriber by giving address$/, function () {

    searchAddTicketActions.searchUsingAddress();
});

Then(/^I can select subscriber searched by address$/, function () {
    searchAddTicketActions.VerifyselectUsingAddress();

});



Then(/^I can search subscriber by giving username$/, function () {

    searchAddTicketActions.searchUsingUsername();
});

Then(/^I can select subscriber searched by username$/, function () {
    searchAddTicketActions.VerifyselectSubUsingUsername();

});

Then(/^I can search subscriber by giving first name$/, function () {

    searchAddTicketActions.searchUsingFirstName();
});

Then(/^I can select subscriber searched by first name$/, function () {
    searchAddTicketActions.VerifyselectSubUsingFirstName();

});

Then(/^I can search subscriber by giving last name$/, function () {

    searchAddTicketActions.searchUsingLastName();
});

Then(/^I can select subscriber searched by last name$/, function () {
    searchAddTicketActions.VerifyselectSubUsingLastName();

});

Then(/^I can search subscriber by giving email address (.*)$/, function (emailaddress) {

    searchAddTicketActions.searchUsingEmailAddress(emailaddress);
});

Then(/^I can select subscriber searched by email address$/, function () {
    searchAddTicketActions.VerifyselectUsingEmailAddress();

});








