def noNeg(arr):
    for i in range(len(arr)):
        if arr[i] < 0:
            arr[i] = 0
    print arr


noNeg([1, 2, -2, -3])