import random

class Card(object):
    def __init__(self, suits, val):
        self.suits = suits
        self.val = val
    
    def producecards(self):
        arr = []
        for suit in self.suits:
            for num in range(2, self.val+2):
                arr.append(suit+str(num))
        return arr


class Deck(object):
    def __init__(self, test):
        self.test = test

    def display(self):
        print self.test
        
    def shuffle(self):
        random.shuffle(self.test)
        print self.test

card1 = Card(["spade","club","hearts","diamond"], 13)
test = card1.producecards()
deck = Deck(test)
deck.shuffle()


