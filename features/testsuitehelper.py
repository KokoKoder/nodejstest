from selenium import webdriver

class testsuitehelper: 
    def  __init__(self, driver, url):
        self.url = url
        self.driver = driver
        self.driver = webdriver.Chrome()

    def navigateToUrl(self,url):
        driver = self.driver
        print("STEP 1 check")
        driver.get(url)

    def getTitle(self):
        driver = self.driver
        title = driver.title
        print("title is: " + title)
        return title