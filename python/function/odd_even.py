def odd_even():
    for num in range(1, 2001):
        if num % 2 == 0:
            print "Number is "+str(num)+". This is an even number."
        else:
            print "Number is "+str(num)+". This is an odd number."


odd_even()