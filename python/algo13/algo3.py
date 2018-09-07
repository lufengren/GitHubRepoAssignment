def sum_odd_numbers():
    sum = 0
    for i in range(1,5001):
        if i % 2 == 1:
            sum += i
    print sum

sum_odd_numbers()