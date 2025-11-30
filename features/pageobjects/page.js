"use strict";
class Page {
	constructor() {
		this.title = 'My Page';
	}
	open(path) {

		if (browser.options.baseUrl.match(/http\:\/\/branch.visp.net.*/) || browser.options.baseUrl.match(/https\:\/\/performance.visp.net.*/)){
			browser.url('/');
		}else{
			browser.url('/' + path);
		}
		
		
		
	}
		
}
module.exports = Page; //exporting instance of the class as best practice instead of creating in test so that page objects remains stateless