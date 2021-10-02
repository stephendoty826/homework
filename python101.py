# 1. Tip Calculator

# tip = 0
# total = 0

# total_bill = input("Total bill amount? $")
# service = input("Level of service? Good, Fair, or Bad. ")

# if service.lower() == "good":
#     tip = float(total_bill) * 0.2
# elif service.lower() == "fair":
#     tip = float(total_bill) * 0.15
# elif service.lower() == "bad":
#     tip = float(total_bill) * 0.1
# else:
#     print("This is a valid input. Please try again.")
#     exit()

# total = float(total_bill) + tip

# print("Tip amount: $%.2f" % tip)
# print("Total amount: $%.2f" % total)



# 2. Tip Calculator 2

# tip = 0
# party = ""
# total = 0

# total_bill = input("Total bill amount? $")
# party = int(input("How many people are in your party? "))
# service = input("Level of service? Good, Fair, or Bad. ")

# if service.lower() == "good":
#     tip = float(total_bill) * 0.2
# elif service.lower() == "fair":
#     tip = float(total_bill) * 0.15
# elif service.lower() == "bad":
#     tip = float(total_bill) * 0.1
# else:
#     print("This is a valid input. Please try again.")
#     exit()

# total = float(total_bill) + tip
# total_split = total/party

# print("Tip amount: $%.2f" % tip)
# print("Total amount: $%.2f" % total)
# print("Total per person: $%.2f" % total_split)



# 3. How many coins?

# coins = 0

# answer = ""

# while answer.lower() != "no":
#     answer = input("You have " + str(coins) + " coins. \nDo you want another? ")
#     if answer.lower() == "yes":
#         coins += 1




# 4. Print a Box

# count = 0

# width = int(input("We are going to make a box. How wide should the box be? "))
# height = int(input("How tall should this box be? "))

# print(width * "*")
# while count < (height - 2):
#     if width != "1": 
#         print("*" + (int(width) - 2) * " " + "*")
#     else:
#         print("*")
#     count += 1
# if height != "1":   
#     print(int(width) * "*")



# 5. Print a Triangle

# The easy way

# print("""   *   
#   ***  
#  ***** 
# *******
# """)

# 6. Multiplication Table

# factor1 = 1
# factor2 = 1

# while factor1 <= 10:
#     while factor2 <= 10:
#         product = factor1 * factor2
#         print(f"{factor1} X {factor2} = {product}")
#         factor2 += 1
#     factor1 += 1
#     print(" ")
#     factor2 = 1