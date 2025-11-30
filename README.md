# VISP-Automation [![CircleCI](https://circleci.com/gh/VISPdevteam/VISP-Automation/tree/master.svg?style=shield&circle-token=d486f913cda7587a84c282e2479a9275b03002f3)](https://circleci.com/gh/VISPdevteam/VISP-Automation/tree/master)
UI Automation suite for UBO web 8.0

## Includes

* WebdriverIO 7.0
* Cucumber 7.0
* Chai


Check package.json for version

## Pre-reqs

* Install NodeJS
* Install Git

Java is required to run Selenium Standalone

For Microsoft Windows:

```npm install --global --production windows-build-tools```


## Folder structure

```
..features/
	steps/
	support/
	pageobjects/
..exclude
..results
..log
..errorShots

```


## Installation

* Install nodejs  (preferred v14.21.1 LTS)

* At inside project folder 

	```npm install```
	
	It will install all modules from package.json
	
## Framework Installation (Windows)
```
	1. Install NodeJS
	2. Download https://github.com/coreybutler/nvm-windows/releases/download/1.1.8/nvm-setup.zip
	3. Extract and run nvm-setup.exe
	4. Open cmd and run "nvm install 14.21.1"
	5. Run "nvm use 14.21.1" (make sure that nodejs folder is NOT existing in Program Files folder)
	6. Run "nvm ls" to confirm the version used
	7. Install git from https://git-scm.com/download/win
	8. Go to https://github.com/vispdevteam/visp-automation
	9. Click [Code] green button and copy HTTPS link OR copy this https://github.com/VISPdevteam/VISP-Automation.git
	10. On cmd, go to the directory you want to create the automation project folder (Ex. cd C:\Automation)
	11. Run "git clone https://github.com/VISPdevteam/VISP-Automation.git" (copied HTTPS link)
	12. If prompted, login your Github account
	13. After successful login, wait for the cloning to complete
	14. Run "npm install" inside the project folder (created from Step 10, cd C:\Automation\VISP-Automation)
	15. Once installation is done, run "npx wdio" to execute test suite
	16. Configure Git Author Identity by running "git config --global user.email "you@example.com""
	17. Run "git config --global user.name "Your Name""
	18. Set Git Remote Repository by running "git remote set-url origin https://github.com/VISPdevteam/VISP-Automation.git" (copied HTTPS link)
```

## Framework Installation (MAC OSX)
```
    1. Download the latest NodeJS from https://nodejs.org/en/download/
    2. Open Terminal
    3. Create a new file by inputting command “touch .zshrc”
    4. Install NVM “curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash“ (see latest version in https://github.com/nvm-sh/nvm)
    5. Open cmd and run "nvm install 14.21.1"
    6. Run "nvm use 14.21.1" (make sure that nodejs folder is NOT existing in Program Files folder)7. Run "nvm ls" to confirm the version used
    8. Install Homebrew by running “/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)””
    9. Run “cd /opt/homebrew/bin/“
    10. Run “PATH=$PATH:/opt/homebrew/bin”
    11. Run “cd”
    12. Run “touch .zshrc”
    13. Run “echo export PATH=$PATH:/opt/homebrew/bin >> .zshrc”
    14. Run “brew doctor”
    15. Run “brew install git”
    16. Run "git clone https://github.com/VISPdevteam/VISP-Automation.git”
    17. Input Github Username and Password (or Personal Authentication Token)
    18. Go to the directory by running “cd VISP-Automation” command
    19. Run “nvm use 14.21.1” again
    20. Run "npm install" inside the project folder
    21. Once installation is done, run "npx wdio" to execute test suite
    22. Configure Git Author Identity by running "git config --global user.email "you@example.com""
    23. Run "git config --global user.name "Your Name""
    24. Set Git Remote Repository by running "git remote set-url origin https://github.com/VISPdevteam/VISP-Automation.git" (copied HTTPS link)
```

## Running the test suite

``` npx wdio wdio.conf.js ```

Note: In case of errors, screenshots are saved at ./erroShots folder

To run tests on CircleCI

``` git checkout master ```

``` git commit --allow-empty -m 'trigger tests' ```

``` git push ```

To run parallel test, set following property to the desired number of parallel instances in wdio.conf.js file

```maxInstances:```

Note: There are two instances where ```maxInstances:``` is used, set both of them to the desired number.

To view the progress of the job, visit https://app.circleci.com/pipelines/github/VISPdevteam/VISP-Automation?filter=all

Note: Once the test execution completes on CircleCI, the report will be published at https://vispdevteam.github.io/VISP-Automation/ (Report only generates for master branch)
	

## Generate HTML report

Allure reporter service is used to generate HTML report. Install it by executing following steps (if not already installed)

``` npm install @wdio/allure-reporter --save-dev ```

``` npm install -g allure-commandline --save-dev ```

Once test execution is completed, following commands generate and open HTML report

``` allure generate ./results/allure-results --clean && allure open ```






