## Installation and configuration process
Before running tests mke sure you have installed chromedriver on your machine.

#### Configure nighwatch.json
1. Copy and rename `nighwatch.json.example` to `nighwatch.json`
2. Configure values according to your local workspace

> Note: For selenium CLI arguments of webdriver.chrome.driver use: "/usr/bin/chromedriver" (linux) and "./selenium/selenium.jar" (windows).

#### Starting test suite:

1. Run: `node nightwatch.js --group logingroup`

