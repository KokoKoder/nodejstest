const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
console.log('line 3 \n');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
console.log('line 5 \n');
const chrome = require('selenium-webdriver/chrome');
//const capabilities = Capabilities.chrome();
//capabilities.set('chromeOptions', { "w3c": false});
//const driver = new Builder().withCapabilities(capabilities).build();
const screen = {
  width: 640,
  height: 480
};
console.log('line 14 \n');
let driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().addArguments('--headless').windowSize(screen)).build();

 
Given('we navigate to python.org', async function () {
  console.log('line 21 \n');
    await driver.get('http://python.org');
});

When('we check the title', async function () {
    this.title = await driver.getTitle();
    console.log('title step', this.title, '\n');
  });

Then('the title is equal to Welcome to Python.org', async function () {
    await driver.quit();
    console.log('title step',  this.title, '\n');
    assert.strictEqual(this.title, "Welcome to Python.org");
  });