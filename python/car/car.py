class Car(object):
    def __init__(self,price,speed,fuel,mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        if self.price >= 10000:
            self.tax = 0.15
        else:
            self.tax = 0.12
        self.display_all()

    def display_all(self):
        print "Price: " + str(self.price)
        print "Speed: " + self.speed +"mph"
        print "Fuel: " + self.fuel
        print "Mileage: "+ self.mileage +"mpg"
        print "Tax: " + str(self.tax)

car1 = Car(200000, "35", "Full", "15")
