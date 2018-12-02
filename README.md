## Installation and configuration process
Before running tests mke sure you have installed chromedriver on your machine.

#### Configure nighwatch.json
1. Copy and rename `nighwatch.json.example` to `nighwatch.json`
2. Configure values according to your local workspace

> Note: For selenium CLI arguments of webdriver.chrome.driver use: "/usr/bin/chromedriver" (linux) and "./selenium/selenium.jar" (windows).

#### Configure user roles
1. Copy and rename `test/config.json.example` to `tests/config.json`
2. Add user credentials for each role

#### Starting test suite:
* Run: `npm run test` for running all tests.
* Run: `npm run test{test group}` to execute group of test.

