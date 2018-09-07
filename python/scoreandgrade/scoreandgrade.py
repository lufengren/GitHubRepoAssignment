import random
print "Scores and Grades"
for i in range(10):
    randnum = random.randint(60, 100)
    if randnum >=90 :
        print "Score: "+str(randnum)+"; Your grade is A"
    elif randnum >=80:
        print "Score: " + str(randnum) + "; Your grade is B"
    elif randnum >= 70:
        print "Score: " + str(randnum) + "; Your grade is C"
    else:
        print "Score: " + str(randnum) + "; Your grade is D"