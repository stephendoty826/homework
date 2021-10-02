import pickle

# Is this code necessary after you run the program one time? What if someone new is running the program? Would they need this code so that todolist is created initially.
# How do you make the program create the .pickle file initially?
high= []         
medium = []    
low = []

#starting todo list
todolist = {"high" : high, "medium" : medium, "low" : low}

# opening todolist.pickle using the pickle.load() method
with open("todolist.pickle", "rb") as fh:
    todolist = pickle.load(fh)
    
# to add task
def addtask(priority, task):
    todolist[priority].append(task)
    print()

# to delete task
def todeletetask(deletedtask):
    for task_list in todolist.values():
        if deletedtask in task_list:
            task_list.remove(deletedtask)
    print()

# to view all tasks
def viewall():
    tasklst = []
    j = 0
    if todolist["high"] == [] and todolist["medium"] == [] and todolist["low"] == []:
        print("Your To-Do list is currently empty.\nAdd some To-Do's using option \"1\" on the Main Menu")
    else:
        for priority in todolist.keys():
            for individualtask in todolist[priority]:
                tasklst.append(individualtask)
                print(f"{j+1} - {individualtask} - {priority}")
                j += 1
    print()
    return tasklst

while True:
    
    val = input("""Enter "Main Menu" at anytime to return here.
Enter 1 to add To-Do.
Enter 2 to delete To-Do.
Enter 3 to view all To-Do.
Enter q to quit.
""").lower()
    print()
    if val == "1":
        # add way to type in "back" to go back to the main menu and also catch when there is a bad entry for priority
        while True:
            task = input("What task would you like to add: ").lower()
            if (len(task) > 0):
                if task == "main menu":
                    print()
                    break
                else:
                    while True:
                        priority = input("What level of priority is the task? high, medium, or low: ").lower()
                        if priority == "high" or priority == "medium" or priority == "low":
                            addtask(priority, task)
                            break
                        elif priority == "main menu":
                            print()
                            break
                        else:
                            print("\nPlease enter valid input. Enter \"Main Menu\" to exit.\n")
                    break
    elif val == "2":
        # add way to type in "back" to go back to the main menu and also catch when something other than an number is typed or when a number that isn't displayed is typed. 
        if todolist["high"] == [] and todolist["medium"] == [] and todolist["low"] == []:
            viewall()
        else:
            tasklst = viewall()
            while True:
                deletedindex = input("What number do you want to delete? ")
                try:
                    delindex = int(deletedindex) - 1
                    if delindex < len(tasklst) and delindex > -1:
                        deletedtask = tasklst[delindex]
                        todeletetask(deletedtask)
                        break
                    else:
                        print("\nThere's no To-Do for that number.\nPlease select the number of the To-Do you want to delete.\n")
                        viewall()
                except:
                    if deletedindex == "main menu":
                        print()
                        break
                    else:
                        print("\nPlease enter valid input.\n")
                        viewall()
    elif val == "3":
        viewall()
    elif val =="q":
        break
    else:
        print("Please enter valid input.\n")

# creating/saving todolist.pickle file using the pickle.dump() method
with open("todolist.pickle", "wb") as fh:
    pickle.dump(todolist, fh)
