from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import NoSuchElementException, TimeoutException
from selenium.webdriver.support import expected_conditions as EC
from datetime import datetime
import time
import os

# Initialize Chrome WebDriver
service = Service()  # Ensure chromedriver is installed and in PATH
options = webdriver.ChromeOptions()
# options.add_argument('--headless')  # Uncomment if you don't want a visible browser window

driver = webdriver.Chrome(service=service, options=options)

# Open website
driver.get("http://localhost:5173/")

# Generate a valid timestamp for filenames
timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")

# Create a folder for screenshots (optional)

# Take 5 screenshots every 5 seconds
for i in range(5):
    time.sleep(5)
    driver.save_screenshot(f"./screenShots/{timestamp}.png")

# Close the browser
driver.quit()
