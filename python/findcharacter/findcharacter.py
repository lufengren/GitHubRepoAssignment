def findcharacter(strlist,character):
    newstrlist = []
    for item in strlist:
        if character in item:
            newstrlist.append(item)
    print newstrlist


findcharacter(['hello', 'world', 'my', 'name', 'is', 'Anna'], 'o')