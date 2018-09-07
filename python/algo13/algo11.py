def maxminavg(arr):
    maxnum = arr[0]
    minnum = arr[0]
    sumnum =arr[0]
    for i in range(1, len(arr)):
        sumnum += arr[i]
        if arr[i] > maxnum:
            maxnum = arr[i]
        elif arr[i] < minnum:
            minnum = arr[i]
    avg = float(sumnum / len(arr))
    print "Average is "+str(avg)
    print "Maxnumber is " + str(maxnum)
    print "Minnumber is " + str(minnum)


maxminavg([3, 2, 1])




# def maxMinAvg(list1):
#     avg = 0
#     max1 = 0
#     min1 = 0
#     new_list = []
#     for x in list1:
#         if max1 < x:
#             max1 = x
#     if min1 > x:
#         min1 = x
# avg = float(sum(list1))/len(list1)
# new_list.append(max1)
# new_list.append(min1)
# new_list.append(avg)
# print new_list
# maxMinAvg([1,5,10,-2])