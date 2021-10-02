# 9 Lives
import random

words = ["pizza", "fairy", "teeth", "shirt", "otter", "plane", "sands", "fuzzy", "apple", "sword", "hello"]
secret_word = random.choice(words)
secret_word_list = list(f'{secret_word}')
lives = 9
clue = list('?????')
index = 0
heart_symbol = u'\u2764'
lives_list = [heart_symbol, heart_symbol, heart_symbol, heart_symbol, heart_symbol, heart_symbol, heart_symbol, heart_symbol, heart_symbol]

print(secret_word)

print(secret_word_list)

print(lives_list)

print(clue)

guess = input("I'm thinking of a 5 letter word. Guess a letter. ").lower()

while lives > 0:
    index = 0
    for letter in secret_word_list:
        if guess == letter:
            print(f"{guess} is in the word.")
            print(letter)
            print(index)
            clue[index] = letter
            print(clue)
        index += 1
    try:
        secret_word_list.index(guess)
    except ValueError:
        lives -= 1
        lives_list.pop()
        print(lives_list)
        print(clue)
        print(f"{guess} is not in the word. You have lost a life.")
    guess = input("Guess another letter. ")


# the five question marks are stored as a list in the variable clue

# 6. Show the lives left

# The project uses the Unicode heart character to display how many lives are left. To make your program easier to read and write, add the next line of code to store the character in a variable.

# 7. Remember the result

# Now make a variable to store whether or not the player has guessed the word correctly. The variable is set as False to begin with because the player doesn't know the word when the game starts.

guessed_word_correctly = False

# Refactor to include the following improvements
# Words can be variable length *
# keep track of which letters you've guessed already *
# lets you play again
# Difficulty level (number of lives easy 12, medium 8 hard 4)

# if they guess a letter correctly, uncover that letter in the clue variable
    # check user's guess against the secret_word_list

# else run .pop() on lives and print("Incorrect. You have lost a life. Try again.")






# choose a random word
# keep track of lives
# show user clue with 5x "?"
# compare user input to letter in word
# 	if user guess is letter in word, fill in part of clue and prompt for another letter
# 	if user guess is not letter in word, remove heart and prompt for another letter
# if user correctly guesses all the letters in the word before they run out of lives, they win


