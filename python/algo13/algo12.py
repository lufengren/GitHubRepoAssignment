def swap(arr):
    tempval = arr[0]
    arr[0] = arr[len(arr)-1]
    arr[len(arr) - 1] = tempval
    print arr


swap([1, 2, 3, 4])