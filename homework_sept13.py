# # 1. Find the smallest number
# # Write a function named "smallest" that accepts a List of numbers as an argument.

# # It should return the smallest number in the List.

# # Basic Order of Operations using built-in methods
# # 1. get user_list from user input
# # 2. define function that returns smallest number 
#     # 1. Sort number_list from least to greatest
#     # 2. return first value

# # Coding with Comments
# # define user_list and set it equal to user input
# # for-loop to iterate through items in user_list
#     # if-statement to append only numbers (not spaces) to number_list
# # define smallest() function that takes number_list as a parameter
#     # number_list.sort()
#     # return number_list[0]

# user_answer = input("Type in a number:\n")
# user_list = list(user_answer)
# number_list = []
# count = 9
# number_list.append((int(user_answer)))

# for item in range(9): 
#     if count == 1:
#         user_answer = input(f"OK, just 1 more number:\n")
#     else:
#         user_answer = input(f"Give me {count} more numbers:\n")
#         number_list.append(int(user_answer))
#     count -= 1

# print("Now, let me determine the smallest number.")

# def smallest(num_list):
#     num_list.sort()
#     return num_list[0] 

# smallest_value = smallest(number_list)

# print(f"{smallest_value} is the smallest number.")






# # 1. Find the smallest number (AGAIN)

# # Basic Order of Operations without using built-in methods
# # 1. get user_list from user input
# # 2. define function that returns smallest number
#     # compare current item with next item
#         # if smaller compare current with next item
#         # if not smaller, move to smaller item and then compare new current with next item
#         # if no other smaller item, return smallest item

# # Coding with Comments
# # get user_list from user input
# # for-loop to iterate through items in user_list
#     # if-statement to append only numbers (not spaces) to number_list
# # define smallest(num_list) function
#     # while-loop i < len(num_list)   
#         # while-loop j < len(num_list) - 1:
#             # if-statement to determine if current number is larger than next number
#                 # i = j - 1
#             # else:
#                 # j += 1
#         # i += 1

# user_answer = input("Type in a number:\n")
# user_list = list(user_answer)
# number_list = []
# count = 9
# number_list.append((int(user_answer)))

# for item in range(9): 
#     if count == 1:
#         user_answer = input(f"OK, just 1 more number:\n")
#     else:
#         user_answer = input(f"Give me {count} more numbers:\n")
#         number_list.append(int(user_answer))
#     count -= 1

# def smallest(num_list):
#     i = 0
#     j = 1
#     while j < len(num_list):
#         if num_list[i] > num_list[j]:
#             i = j
#             j = i + 1
#         else: 
#             j += 1
#     return num_list[i]

# print("Now, let me determine the smallest number.")

# smallest_value = smallest(number_list)

# print(f"{smallest_value} is the smallest number.")






# 2. Find the largest number
# Write a function largest that accepts a List of numbers as an argument.

# It should return the largest number in the List.

# user_answer = input("Type in a number:\n")
# user_list = list(user_answer)
# number_list = []
# count = 9
# number_list.append((int(user_answer)))

# for item in range(9): 
#     if count == 1:
#         user_answer = input(f"OK, just 1 more number:\n")
#     else:
#         user_answer = input(f"Give me {count} more numbers:\n")
#         number_list.append(int(user_answer))
#     count -= 1

# print("Now, let me determine the largest number.")

# def largest(num_list):
#     num_list.sort()
#     print(num_list)
#     return num_list[-1] 

# largest_value = largest(number_list)

# print(f"{largest_value} is the largest number.")






# # 2. Find the largest number (AGAIN)
# # Basic Order of Operations without using built-in methods

# user_answer = input("Type in a number:\n")
# user_list = list(user_answer)
# number_list = []
# count = 9
# number_list.append((int(user_answer)))

# for item in range(9): 
#     if count == 1:
#         user_answer = input(f"OK, just 1 more number:\n")
#     else:
#         user_answer = input(f"Give me {count} more numbers:\n")
#         number_list.append(int(user_answer))
#     count -= 1

# def largest(num_list):
#     i = 0
#     j = 1
#     while j < len(num_list):
#         if num_list[i] < num_list[j]:
#             i = j
#             j = i + 1
#         else: 
#             j += 1
#     return num_list[i]

# print("Now, let me determine the largest number.")

# largest_value = largest(number_list)

# print(f"{largest_value} is the largest number.")






# # 3. Find the shortest String
# # Write a function shortest that accepts a List of Strings as an argument.

# # It should return the shortest String in the List.

# # Basic order of operations
# # 1. create string_list (list of strings)
# # 2. for-loop to cycle through items in string_list to determine length of each and append values to length_list
# # 3. find smallest number in length_list
# # 4. print out string that cooresponds to index in length_list with smallest value

# # Coding with Comments
# # string_list = ["cat", "apple", "horse", "photograph", "penelope", "dog", "risky", "functional"]
# # for string in string_list
#     # length = len(string)
#     # length_list.append(length)
# # use similar code as above smallest number exercise

# string_list = ["cat", "apple", "horse", "photograph", "penelope", "dog", "risky", "functional"]
# length_list = []
# shortest_list = []

# for string in string_list:
#     length = len(string)
#     length_list.append(length)

# def shortest(len_list):
#     i = 0
#     j = 1
#     while j < len(len_list):
#         if len_list[i] > len_list[j]:
#             i = j
#             j = i + 1
#         else: 
#             j += 1
#     for item in string_list:
#         if len(item) == len_list[i]:
#             shortest_list.append(item)
#     print(f"{shortest_list} is/are the shortest string(s)")


# shortest(length_list)






# # 4. Find the longest String
# # Write a function longest that accepts a List of Strings as an argument.

# # It should return the longest String in the List.

# # Basic order of operations
# # 1. create string_list (list of strings)
# # 2. for-loop to cycle through items in string_list to determine length of each and append values to length_list
# # 3. find largest number in length_list
# # 4. print out string that cooresponds to index in length_list with largest value

# # Coding with Comments
# # string_list = ["cat", "apple", "horse", "photograph", "penelope", "dog", "risky", "functional"]
# # for string in string_list
#     # length = len(string)
#     # length_list.append(length)
# # use similar code as above largest number exercise

# string_list = ["cat", "apple", "horse", "photograph", "penelope", "dog", "risky", "functional"]
# length_list = []
# longest_list = []

# for string in string_list:
#     length = len(string)
#     length_list.append(length)

# def longest(len_list):
#     i = 0
#     j = 1
#     while j < len(len_list):
#         if len_list[i] < len_list[j]:
#             i = j
#             j = i + 1
#         else: 
#             j += 1
#     for item in string_list:
#         if len(item) == len_list[i]:
#             longest_list.append(item)
#     print(f"{longest_list} is/are the longest string(s)")


# longest(length_list)