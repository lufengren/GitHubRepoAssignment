a = input("Please input a list:")
if isinstance(a, list):
    newstr = ""
    iscontainstr = 0
    iscontainint = 0
    sum = 0
    for item in a:
        if isinstance(item, str):
            iscontainstr = 1
            newstr += item + " "
        elif isinstance(item, (int, float)):
            iscontainint = 1
            sum += item

    if iscontainstr == 1:
        if iscontainint == 1:
            print "The list you entered is of mixed type"
            print "String: " + newstr
            print "Sum: " + str(sum)
        else:
            print "The list you entered is of string type"
            print "String: " + newstr
    else:
        if iscontainint == 1:
            print "The list you entered is of integer type"
            print "Sum: " + str(sum)
else:
    print "Input error,must a list"
