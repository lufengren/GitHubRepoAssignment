def greaterY(arr, y):
    count = 0
    for item in arr:
        if item>y:
            count += 1
    print count


greaterY([2, 4, 6], 1)
