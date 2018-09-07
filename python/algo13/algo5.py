def findMax(arr):
    maxnum = 0
    for item in arr:
        if item > maxnum:
            maxnum = item
    print maxnum

findMax([1,6,3])