const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();

 
Given('we navigate to python.org', async function () {
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