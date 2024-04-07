from selenium import *
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from behave import *
from features.testsuitehelper import testsuitehelper
from MyClass import MyClass
driver = webdriver.Chrome()
url = "http://python.org"
hp = testsuitehelper(driver, url)
variables = {}

@given("we navigate to python.org")
def step_impl(context):
    hp.navigateToUrl(url)
    x = MyClass()
    print(x.i)
    print(x.f)
    print("STEP 1 check")
    #driver.get(url)
    pass

@when("we check the title")
def step_impl(context):
    title = hp.getTitle()
    #title = driver.title
    print("title is: " + title)
    variables["title"] = title
    # to see print in the terminal run with the --no-capture flag: behave --no-capture
    print("######################")
    print("title is: " + variables["title"])
    print("######################")
    pass

@then("the title is equal to Welcome to Python.org")
def step_impl(context):
    correctTitle = True
    title = variables["title"]
    print("######################")
    print("title is: " + title)
    print("######################")
    if title != "Welcome to Python.org":
        correctTitle = False
    assert correctTitle is True