class MathDojo(object):

    def __init__(self, sum=0):
        self.sum = sum

    def add(self, *multiple1):
        for item in multiple1:
            if isinstance(item, list):
                for i in item:
                    self.sum += i
            else:
                self.sum += item
        return self

    def subtract(self, *multiple2):
        for item in multiple2:
            if isinstance(item, list):
                for i in item:
                    self.sum -= i
            else:
                self.sum -= item
        return self

    def result(self):
        return self.sum


mathdojo = MathDojo()
print mathdojo.add([1], 3,4).add([3,5,7,8]).subtract(2, [2,3], [1.1,2.3]).result()







