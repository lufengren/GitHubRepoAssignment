class MathDojo(object):

    def __init__(self, sum=0):
        self.sum =sum

    def add(self, num1, *num2):
        for item in num2:
            self.sum += num1+item
        return self

    def subtract(self, num3, num4):
        self.sum -= num3 + num4
        return self

    def result(self):
        return self.sum


mathdojo = MathDojo()
print mathdojo.add(2).add(2,5,4).result()






