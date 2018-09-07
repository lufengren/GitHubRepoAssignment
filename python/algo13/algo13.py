def numToStr(arr):
    for i in range(len(arr)):
        if arr[i] < 0:
            arr[i] = "Dojo"
    print arr


numToStr([-1, 2, -4, 6])