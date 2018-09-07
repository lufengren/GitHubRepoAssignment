a = input("input:")
if isinstance(a, int):
    if a >= 100:
        print "That's a big number!"
    else:
        print "That's a smaller number!"
elif isinstance(a, str):
    if len(a) >= 50:
        print "Long sentence."
    else:
        print "short sentence."
elif isinstance(a, list):
    if len(a) >= 10:
        print "Big list!"
    else:
        print "short list!"