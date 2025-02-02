from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import time
from selenium.webdriver.common.by import By

service = Service(executable_path="./chromedriver.exe")
options = webdriver.ChromeOptions()
driver = webdriver.Chrome(service=service, options=options)
driver.get("https://practicetestautomation.com/practice-test-login/")
user_name_input = driver.find_element(By.XPATH ,
"(//input[@id='username'])[1]")
password_input = driver.find_element(By.XPATH,
"(//input[@id='password'])[1]")

# user_name_input.send_keys("student")
# password_input.send_keys("Password123")
# submit_btn = driver.find_element(By.XPATH , 
# "(//button[normalize-space()='Submit'])[1]")
# submit_btn.click()
# if driver.current_url == "https://practicetestautomation.com/logged-in-successfully/":
#     print("the submit btn work")
# else:
#     print("the submit btn not work")

# log_out_btn = driver.find_element(By.XPATH , 
# "(//a[normalize-space()='Log out'])[1]")

# if log_out_btn:
#     print("log out btn exist")
# else:
#         print("log out btn not exist")

# success_message = driver.find_element(By.TAG_NAME, "body").text
# if "Congratulations" in success_message or "successfully logged in" in success_message:
#         print("Expected text found on the page")
# else:
#         print("Expected text not found on the page")

# user_name_input.send_keys("incorrectUser")
# password_input.send_keys("Password123")
# submit_btn = driver.find_element(By.XPATH , 
# "(//button[normalize-space()='Submit'])[1]")
# submit_btn.click()
# err_user_name = driver.find_element(By.XPATH, "(//div[@id='error'])[1]")
# if(err_user_name.text == "Your username is invalid!"):
#     print("err_user_name message is correct")
# else:
#     print("err_user_name message is correct")

# user_name_input.send_keys("student")
# password_input.send_keys("incorrectPassword")
# submit_btn = driver.find_element(By.XPATH , 
# "(//button[normalize-space()='Submit'])[1]")
# submit_btn.click()
# err_password = driver.find_element(By.XPATH, "(//div[@id='error'])[1]")
# if(err_password.text == "Your password is invalid!"):
#     print("err_password message is correct")
# else:
#     print("err_password message is not correct")

# time.sleep(10)