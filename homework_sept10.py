# # 1. Multiply Vectors
# # Given two lists of numbers of the same length, create a new list by multiplying the pairs of numbers in corresponding positions in the two lists. Example:

# # [2, 4, 5] x [2, 3, 6] = [4, 12, 30]

# list1 = [2, 4, 5]
# list2 = [2, 3, 6]
# list3 = []
# index = 0

# for x in range(3):
#     list3.append(list1[x] * list2[x])

# print(list3)






# # 2. Matrix Addition
# # Calculate the result of adding the two matrices. The number in each position in the resulting matrix should be the sum of the numbers in the corresponding addend matrices. Example: to add

# # 1 3
# # 2 4

# # and

# # 5 2
# # 1 0

# # results in

# # 6 5
# # 3 4

# # list1[0][0] + list2[0][0] = list3[0][0]   
# #        1    +        5    =        6
# # list1[0][1] + list2[0][1] = list3[0][1]
# #        3    +        2    =        5
# # list1[1][0] + list2[1][0] = list3[1][0]
# #        2    +        1    =        3
# # list1[1][1] + list2[1][1] = list3[1][1]
# #        4    +        0    =        4

# list1 = [[1, 3], [2, 4]]
# list2 = [[5, 2], [1, 0]]
# list3 = [[0, 0], [0, 0]] # only works if list3 exists with elements

# for x in range(2):
#     for y in range(2):
#         list3[x][y] = (list1[x][y] + list2[x][y])

# print(list1)
# print(list2)
# print(list3)

# # # Now let's do it again but don't create list 3 with existing elements

# list1 = [[1, 3], [2, 4]]
# list2 = [[5, 2],[1, 0]]
# list_upper = []
# list_lower = []
# list3 = []

# for x in range(2):
#     if x < 1:
#         for y in range(2):
#             list_upper.append(list1[x][y] + list2[x][y])
#         list3.append(list_upper)
#     else: 
#         for y in range(2):
#             list_lower.append(list1[x][y] + list2[x][y])
#         list3.append(list_lower)

# print(list1)
# print(list2)
# print(list3)






# # 3. Matrix Addition II
# # Use your solution in Matrix Addition, and extend it to work for a pair of matrices of any size, as long as they have the same size.

# list1 = [[1, 3, 7], [2, 4, 0], [7, 3, 2], [6, 8, 4], [1, 3, 2], [5, 8, 6]]
# list2 = [[5, 2, 3], [1, 0, 8], [3, 7, 3], [6, 5, 4], [0, 1, 3], [2, 9, 7]]
# list3 = list1.copy()

# for x in range(len(list1)):
#     for y in range(len(list1[0])):
#         list3[x][y] = (list1[x][y] + list2[x][y])

# print(list3)






# # 4. De-dup
# # Given a list of numbers or strings, create a new list containing the same elements as the first list, except with any duplicate values removed. Print the list.

# # Cycle through list and compare 1st item to other items, unique items will be copied over to new_list while duplicate items will be skipped.

# #        indeces   0    1    2    3    4
# # example list = ['a', 'b', 'a', 'c', 'b']
# #                  i
# #                       j

# # # # list = ['u', 'a', 'e', 'b', 'a', 'g', 'u', 'c', 'b', 'a'] # list with lower case letters only
# # # list = ['u', 'a', 'E', 'b', 'a', 'G', 'u', 'c', 'B', 'e', 'b', 'A'] # list with both upper and lower case letters.
# # list = ["cat", "a", "b", "dog", "b", "cat", "eel", "fish", "c", "a", "p", "pea", "dog"] # list with letter and words
# list = [5, "a", 1, 7, "b", "cat", "eel", "fish", "c", "a", "p", 7, 3] # list with integers, letters, and words
# new_list = []
# i = 0

# while i < len(list) - 1: # cycles through list items as internal while-loop compares all other items in list to current item value
#     j = i + 1 
#     while j < len(list): 
#         if list[i] == list[j]: # breaks out of internal while look if a duplicate is found.
#             break
#         if j == len(list) - 1: # appends current item index i to new_list if no duplicate is found
#             new_list.append(list[i])
#         if j == len(list) - 1 and i == len(list) - 2: # appends last item in list to new_list if no duplicate is found
#             new_list.append(list[j])
#         j += 1
#     i += 1

# print(new_list)






# # 5. Leetspeak
# # Given a paragraph of text as a String, print the paragraph in leetspeak (see link on homework page for explanation).

# # To translate a String into leetspeak, you need to make the following character replacements (treat all input characters as uppercase):

# # Letter	Translates To
# #   A	         4
# #   E	         3
# #   G	         6
# #   I	         1
# #   O	         0
# #   S	         5
# #   T	         7

# # Example: If your program is given the String "I am a leet programmer", it should print "1 4m 4 l337 pr0gr4mm3r" as the leetspeak translation

# # Basic order of operation.
#     # 1 Convert string to list using list() method
#     # 2 Run code to identify and swap leetspeak character.
#     # 3 Join new list into string and print string.

# # How to do step 2:
#     # Cycle through characters in string_list and compare them to characters in leet_letters. If the current character (upper and lower case) is in leet_letters, identify which character in leet_speek it matches and convert the current character to the leet_letter counterpart in leet_numbers.

# # Coding with comments
# # for-loop to cycle through string_list items
#     # for-loop cycle through leet_letters items
#         # if-statement to compare current string_list item to current leet_letters item
#             # Swap string_list character at current index with leet_letters character


#                0    1    2    3    4    5    6
leet_letters = ["a", "e", "g", "i", "o", "s", "t"]
leet_numbers = ["4", "3", "6", "1", "0", "5", "7"]
# #                                             0    1    2    3    4    5    6    7    8    9   10             
# string_list = list("I am Groot.") # creates ['I', ' ', 'a', 'm', ' ', 'G', 'r', 'o', 'o', 't', '.']
i = 0
string_list = list("We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.")

for letter1 in string_list:
    j = 0
    for letter2 in leet_letters:
        if letter1.lower() == letter2:
            string_list[i] = leet_numbers[j]
        j += 1
    i += 1

print("".join(string_list))






# # 6. Long-long Vowels
# # Given a word as a string, print the result of extending any long vowels to the length of 5.

# # Examples:

# # Good => Goooood 
# # Cheese => Cheeeeese 
# # Man => Man 
# # Spoon => Spooooon 
# # Tree => Treeeee

# # Basic order of operation.
# # 1. Cycling through characters of a string.
# # 2. If the current character is the same as the next character, check if current character is vowel. 
# # 3. If double character is vowel, insert matching vowel 3x times after long vowel.

# # Coding with comments
# # while-loop to cycle through letters in string (using indexes)
#     # if-statement to check if current letter is the same as the next letter
#         # for-loop to cycle through vowels
#             # if-statement to check if current letter is a vowel
#                 # Insert 3x vowel into index after double character
# # join string_list into string
# # print string

# vowels = ["a", "e", "i", "o", "u"]
# string_list = list("Good dog. Let's go and sit by the tree while you eat your cheese and I eat my yogurt with a spoon.")
# length = len(string_list)
# i = 0

# while i < length:
#     if string_list[i] == string_list[i + 1]:
#         for vowel in vowels:
#             if string_list[i] == vowel:
#                 string_list.insert(i + 2, vowel * 3)
#     i += 1

# print("".join(string_list))






# # 7. Caesar Cipher
# # Given a string, print the Caesar Cipher (or ROT13) of that string. What is Caesar Cipher? Learn about it here (see link on homework page).

# # Use your solution to decipher the following text: "lbh zhfg hayrnea jung lbh unir yrnearq"

# # Basic order of operations
# # 1. Cycle through letters in message_list
# # 2. Convert current letter to cipher counterpart
# # 3. Print encoded message

# # Coding with comments
# # for-loop to cycle through items in message_list
#     # while-loop using i (index) to cycling through each letter in alphabet
#         # if-statement to see if current item == alphabet[i]
#             # if-statement to determine if (i + shift) > 25
#                 # encrypted_list.append(alphabet[(i + shift) - 26])
#             # else
#                 # encrypted_list.append(alphabet[(i + shift)])

# #           0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25                          
# # alphabet: a b c d e f g h i j k  l  m  n  o  p  q  r  s  t  u  v  w  x  y  z

# alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
# # #                                              0    1    2    3    4    5    6    7    8    9    10   11   12
# # message_list = list("defend castle") # gives ["d", "e", "f", "e", "n", "d", " ", "c", "a", "s", "t", "l", "e"]
# # message_list = list("lbh zhfg hayrnea jung lbh unir yrnearq") # shift of 13
# message_list = list("defend the east wall of the castle")
# encrypted_list = message_list.copy()
# shift = 13 # to decrypt encoded message update shift to 26 - (shift)
# i = 0

# while i < len(message_list):
#     j = 0
#     while j < len(alphabet):
#         if message_list[i] == alphabet[j]:
#             if j + shift > 25:
#                 encrypted_list[i] = alphabet[(j + shift) - 26]
#                 break
#             else:
#                 encrypted_list[i] = alphabet[(j + shift)]
#                 break
#         j += 1
#     i += 1

# print("".join(encrypted_list))


