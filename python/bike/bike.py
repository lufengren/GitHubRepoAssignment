class Bike(object):
    def __init__(self, price, max_speed):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0
    def display(self):
        return self.price, self.max_speed, self.miles
    def ride(self):
        print "Riding..."
        self.miles += 10
        return self
    def reverse(self):
        if self.miles < 5:
            print "cannot reverse"
        else:
            print "Reversing..."
            self.miles -= 5
        return self

bike1 = Bike(200,20)
bike2 = Bike(100,10)
bike3 = Bike(300,30)
print bike1.ride().ride().ride().reverse().display()
print bike2.ride().ride().reverse().reverse().display()
print bike3.reverse().reverse().reverse().display()




