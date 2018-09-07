import random
def HeadOrTail():

    headcount = 0
    tailcount = 0
    for i in range(1, 20):
        randomnum = round(random.random())
        if randomnum == 0:
            headcount += 1
            print "Attempt #"+str(i)+": Throwing a coin...It's a head! ... Got " + str(headcount)+" head(s) so far and "+str(tailcount) + " tail(s) so far"
        else:
            tailcount += 1
            print "Attempt #" + str(i) + ": Throwing a coin...It's a head! ... Got " + str(
                headcount) + " head(s) so far and " + str(tailcount) + " tail(s) so far"
    print "Ending the program, thank you!"


HeadOrTail()
