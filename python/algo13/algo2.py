def sum_even_numbers():
    sum = 0
    for i in range(1,1001):
        if i % 2 == 0:
            sum += i
    print sum

sum_even_numbers()