class Animal(object):
    def __init__(self, name, health):
        self.name = name
        self.health = health

    def walk(self):
        self.health -= 1
        return self

    def run(self):
        self.health -= 5
        return self

    def display(self):
        print self.health
        return self


animal = Animal("miao", 20)
print animal.walk().walk().walk().run().run().display()


class Dog(Animal):
    def __init__(self):                # def __init__(self,name):
        self.health = 150               #  super(Dog,self).__init__(name,150)
        
    def pet(self):
        self.health += 5
        return self


dog = Dog()
print dog.walk().walk().walk().run().run().pet().display()

class Dragon(Animal):
    def __init__(self):
        self.health = 170

    def fly(self):
        self.health -= 10

    def display(self):
        super(Dragon,self).display()
        print "I'm a Dragon"

dragon = Dragon()
dragon.display()
