const utils = require('../support/utils');
"use strict";
var Page = require('./page')

class SDaddNote extends Page {


get ticketID (){return browser.$$('.MuiTabs-flexContainer')[1].$$('.MuiButtonBase-root')[0];}
get ticketMessagesTab (){return browser.$('[vispdata-testid="drawer-title-bar-tab-message"]');}
get postNoteTextBox () {return browser.$('.flex-grow-1').$('.border');}
get postButton () {return browser.$('button=Post');}
get externalButton () {return browser.$('[vispdata-testid="ticket-messages-second-button"]');}
get internalButton () {return browser.$('[vispdata-testid="ticket-messages-first-button"]');}

get confirmationMsg () {return browser.$('.MuiAlert-message');} // Note Added Successfully
get btnCloseTicket(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[6]/div/div[1]/button[4]');}

addedNotes(text) {var allNotes = browser.$('[vispdata-testid="ticket-messages-container"]').$$('.message-bubble');
console.log('verifying note text :' + text);						
for (var i=0; i<allNotes.length;i++)
						{
							console.log('index is : '+ i +' and value is '+ allNotes[i].$('div').getText());	

							if(allNotes[i].$('div').getText().includes(text))
							{
							 	//element = allTasks[i].getText();
								 console.log('found note with text :' + allNotes[i].$('div').getText());								
								 return allNotes[i].$('div').getText();
								 
							}
						}
						return "Not Available";
				}


}
module.exports = new SDaddNote();