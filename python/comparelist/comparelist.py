a = input("please input list_one:")
if isinstance(a, list):
    b = input("please input list_two:")
    if isinstance(b, list):
        result = cmp(list_two, list_one)
        if result == 0:
            print "The lists are the same."
        else:
            print "The lists are not the same."
    else:
        print "not right,Please input list"
else:
    print "not right,Please input list"

