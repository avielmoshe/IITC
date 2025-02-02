class Hero:
    def __init__(self,firstname,lastname,strength_level,weakness,hero_name,is_active):
        self.firstname=firstname
        self.lastname=lastname
        self.strength_level=strength_level
        self.weakness=weakness
        self.hero_name=hero_name
        self.is_active=is_active

    def greet_hero(self):
        print(f"Hero name is {self.hero_name}")
    def show_stats(self):
        print(f"Hero strength level:{self.strength_level}")
        print(f"Hero weakness:{self.weakness}")
        print(f"Hero is alive:{self.is_active}")
    def upgrade_strength_level(self):
        self.strength_level += 1

hero1=Hero("peter","parker",5,"water","spiderman","yes")

# hero1.greet_hero()    
# hero1.show_stats()  
# hero1.upgrade_strength_level()   
# hero1.show_stats()  

class Bank_account:
    def __init__(self,firstname,lastname,pin_code="1111",balance=0):
        self.firstname=firstname
        self.lastname=lastname
        self.pin_code=pin_code
        self.balance=balance

    def show_balance(self):
        print(f"your balance is {self.balance}")

    def change_pin_code(self):
        new_pin_code=input("enter new pin code")
        self.pin_code=new_pin_code
        print("your pin code changed")
    
    def deposit(self):
        input_pin_code=input("enter your pin code")
        if input_pin_code==self.pin_code:
            amount=int(input("enter amount of deposit"))
            self.balance+=amount
            print(f"your new balance is {self.balance}")
        else:
            print("pin code wrong")

    def withdraw(self):
        input_pin_code=input("enter your pin code")
        if input_pin_code==self.pin_code:
            amount=int(input("enter amount of withdraw"))
            self.balance-=amount
            print(f"your new balance is {self.balance}")
        else:
            print("pin code wrong")

bank_account1=Bank_account("aviel","moshe","1234",2000)
bank_account1.show_balance()
bank_account1.deposit()
bank_account1.withdraw()


