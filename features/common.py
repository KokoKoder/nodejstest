from selenium import webdriver
driver = webdriver.Chrome()

class Common:
    def navigateToUrl(url):
        driver = driver
        print("STEP 1 check")
        driver.get(url)
