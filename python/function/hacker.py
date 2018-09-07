def multiply(arr, num):
    for i in range(len(arr)):
        arr[i] = arr[i]*num
    return arr


def hacker(arr):
    basicarr = [1]
    newarr = []
    for item in arr:
        item = item*basicarr
        newarr.append(item)
    print newarr


hacker(multiply([1, 2, 3], 2))