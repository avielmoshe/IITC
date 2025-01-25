# user_name=input("enter your name:")
# print(f"hello {user_name}")

# height=int(input("enter the height:"))
# width=int(input("enter the width:"))
# print(f"the area of rectangle is:{height*width}")


# number_1=int(input("enter first number:"))
# number_2=int(input("enter second number:"))
# print(f"the sum is{number_1*number_2} the difference is {number_1-number_2} the quotient is {number_1/number_2}")

# number_3=int(input("enter second number:"))
# print(f"the square is:{number_3**2}")

# Fahrenheit=int(input("enter Fahrenheit number:"))
# print(f"Celsius :{Fahrenheit * 9/5 + 32}")

# pi=3.14
# radius=int(input("enter radius number:"))
# print(f"area  :{radius**2*pi}")

# num=int(input("enter num number:"))
# if num%2:
#     print(f"{num} is even ")
# else:
#     print(f"{num} is odd ")


# num=int(input("enter num number:"))
# if num>0:
#     print(f"{num} is positive ")
# elif num<0:
#     print(f"{num} is negative ")
# else:
#     print(f"{num} is zero ")


# year=int(input("enter year:"))
# if year%4==0:
#     print("year is leap ")
# else:
#     print("year isn't leap ")

# num=int(input("enter grade:"))
# if num>=90:
#     print("A")
# elif num>=80:
#     print( "B")
# elif num>=70:
#     print( "C")
# elif num>=60:
#     print( "D")
# else:
#     print("F")

# for i in range(1,11):
#     print(i)

# total_sum = 0
# num=int(input("enter number:"))
# for i in range(1, num + 1):
#     total_sum += i
# print(total_sum )


# num=int(input("enter number:"))
# for i in range(1,  11):
#     print(i*num)

#     while i <= num:
#         factorial *= i
#         i += 1

# factorial = 1
#     # Display the result
#     print(f"The factorial of {num} is {factorial}.")
# num=int(input("enter number:"))

import random 
num=int(random.random()*100)

user_input=int(input("enter number: \n"))
while num!=user_input:
  user_input=int(input("wrong number try again:"))

print("good job")