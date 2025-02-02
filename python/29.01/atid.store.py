from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import time
from selenium.webdriver.common.by import By

service = Service(executable_path="./chromedriver.exe")
options = webdriver.ChromeOptions()
driver = webdriver.Chrome(service=service, options=options)
# driver.get("https://atid.store/product-category/men/")
# product_img_on_men_page = driver.find_element(By.XPATH ,
# "//a[@href='https://atid.store/product/atid-blue-shoes/']//img[@class='attachment-woocommerce_thumbnail size-woocommerce_thumbnail']")

# product_img_on_men_page.click()
# if driver.current_url == "https://atid.store/product/atid-blue-shoes/":
#     product_name= driver.find_element(By.XPATH ,"//h1[normalize-space()='ATID Blue Shoes']").text
#     product_price= driver.find_element(By.XPATH ,"//div[@class='summary entry-summary']//ins//bdi[1]").text
#     print(product_name)
#     print(product_price)
#     print("product work and can enter")
# else:
#     print("product not found")

driver.get("https://atid.store/")
# 1
def task1():
  if "ATID" in driver.title:
    print("The word 'ATID' is present in the title.")
  else:
    print("The word 'ATID' is NOT present in the title.")
# 2
def task2():
    if driver.current_url == "https://atid.store/":
        print("the url is right")
    else:
        print("the url wrong")

def task3():
    btn_shop_now= driver.find_element(By.XPATH ,"//div[@class='elementor-element elementor-element-78ab79a elementor-align-left elementor-mobile-align-justify elementor-tablet-align-left elementor-widget__width-auto elementor-widget-mobile__width-inherit elementor-widget elementor-widget-button']//a[@role='button']").text
    if btn_shop_now == "SHOP NOW":
        print("SHOP NOW ex")
    else:
        print("SHOP NOW dont ex")

def task4():
    is_test_work=True
    navbar_items= driver.find_element(By.ID ,"ast-hf-menu-1")
    items=navbar_items.find_elements(By.TAG_NAME,"li")
    items_ex_names=["HOME","STORE","MEN","WOMEN","ACCESSORIES","ABOUT","CONTACT US"]
    for i in range(len(items)):
        if items[i].text!=items_ex_names[i]:        
            print(f"{items_ex_names[i]} is missing ")
            is_test_work=False
    if is_test_work:
        print("test is passed")
    else:
        print("text dont work ")
        

task4()
task1()
task2()
task3()
time.sleep(10)
