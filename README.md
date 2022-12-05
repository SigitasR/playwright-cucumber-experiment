## Playwright + TypeScript + Cucumber.js demo

Experimental project that demonstrates use of Playwright testing framework under Cucumber.js. Currently, tests are
executed only in Chromium. Test execution videos are saved to ```videos``` folder.

After cloning repo, install dependencies:

```shell
npm install
```

Install Playwright browsers

```shell
playwright install
```

### Running

Run tests using Cucumber.js:

```shell
cucumber-js
```

### Allure reporting

Allure results are saved to ```allure-results```, to generate HTML report run (Allure commandline utility must be installed):

```shell
allure generate -c
```
HTML report will be available in ```allure-report```



