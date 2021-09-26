from bandits import Bandits

def available_commands():
    print('available commands:')
    print('q - quit program')
    print('c - show current credit')
    print('d - deposit credit')
    print('o - spin one bandit')
    print('a - spin all bandits')
    print('s - stats of one bandit')
    print('t - table of rewards')
    print('b - best/worst bandit')
    print('z - % of zero reward')
    print('p - play until goal or broke')
    print()
def command_request(): 
    return str(input("command: "))

bandits = Bandits(nr_of_bandits=5, credit=50)

print('┌─────────────────────┬───────────────────────┐')
print('│ 0HV120 assignment 1 │ The One-Armed Bandits │')
print('├─────────────────────┼───────────────────────┤')
print('│ duo partner 1       │ Thomas Hendrik        │')
print('├─────────────────────┼───────────────────────┤')
print('│ duo partner 2       │ Tessa Groeneveld      │')
print('└─────────────────────┴───────────────────────┘')
print()

available_commands()

command_list = ["q", "c", "d", "o", "a", "s", "t", "b", "z", "p"]
show_credit = str("c")
deposit = str("d")
spin = str("o")
all_bandits = str("a")
stats= str("s")

command = input("command: ")

while command != str("q"):
    if command not in command_list:
        print("unknown command " + str(command))
        available_commands()
        command = command_request()
    while command in command_list:
        if command == show_credit:
            print("show current credit")
            credit = bandits.get_credit()
            print("your current credt is: " + str(credit) + " euro")
            print()
            command = command_request()
        elif command == deposit:
            print("deposit credit")
            amount = int(input("How much do you want to deposit? "))
            if amount<0:
                print("please enter an amount greater than 0")
                amount = int(input("How much do you want to deposit? "))
            bandits.deposit(amount)
            credit = bandits.get_credit()
            print("your current credit is " + str(credit))
            command = command_request()
        elif command == spin:
            print("spin one bandit:")
            if bandits.get_credit() <= 0:
                print("I'm sorry, you do not have enough credit")
                command = command_request()
            else:
                try:
                    bandit_nr = int(input("please enter which bandit: "))
                    bandit_nr -= 1
                    if bandit_nr>4 or bandit_nr<0:
                        print("please enter a number from 1 to 5")
                        command = command_request()
                    else:
                        reward = bandits.spin_one(bandit_nr)
                        print("the reward of bandit " + str(bandit_nr + 1) + " is " + str(reward) + " euro")
                        bandits.deposit(reward)
                        print("your new credit is: " + str(bandits.get_credit()) + " euro")
                        command = command_request()
                except:
                    print("please enter a number from 1 to 5")
                    command = command_request()
        elif command == all_bandits:
            print("spin all bandits:")
            reward = []
            for n in range(0,5):
                if bandits.get_credit() <= 0:
                    print("I'm sorry, you do not have enough credit")
                    command = command_request()
                    break
                else:
                    reward.append(bandits.spin_one(n))
                    
            print("bandit".rjust(10, " ") + "1".rjust(10, " ") + "2".rjust(10, " ") + "3".rjust(10, " ") + "4".rjust(10, " ") + "5".rjust(10, " "))
            print("reward".rjust(10, " ") + str(reward[0]).rjust(10, " ") + str(reward[1]).rjust(10, " ") + str(reward[2]).rjust(10, " ") + str(reward[3]).rjust(10, " ") + str(reward[4]).rjust(10, " "))
            command = command_request()
        elif command == stats:
            print("stats of one bandit:")
            try:
                nr_spins = int(input("how many spins do you want? "))
                if nr_spins <= 0:
                    print("please enter a number greater than 0")
                    command = command_request()
                elif bandits.get_credit()< nr_spins:
                    print("please enter a lower number, you do not have enough credit. Your current credit is " + str(bandits.get_credit()) + " euro")
                    command = command_request()
                else:
                    nr_bandit = int(input("please enter which bandit: "))
                    nr_bandit -= 1
                    if nr_bandit <= 0:
                        print("please enter a number greater than 0")
                        command = command_request()
                    elif nr_bandit>4 or nr_bandit<0:
                        print("please enter a number from 1 to 5")
                        command = command_request()
                    else:
                        set_reward = []
                        for n in range(nr_spins):
                             set_reward.append(bandits.spin_one(nr_bandit))
                        avg = sum(set_reward) / len(set_reward)
                        print("average reward of bandit " + str(nr_bandit) + " was " + str(round(avg, 2)))
                        command = command_request()
            except:
                print("please enter a number")
                command = command_request()
                

