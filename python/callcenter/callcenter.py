class Call(object):
    def __init__(self,id,name,phone_number,time_of_call,reason):
        self.id = id
        self.name = name
        self.phone_number = phone_number
        self.time_of_call = time_of_call
        self.reason = reason

    def display(self):
        print self.id,self.name,self.phone_number,self.time_of_call,self.reason


class CallCenter(object):

    def __init__(self):
        self.calls = []
        self.size = 0

    def addcall(self,newcall):
        self.calls.append(newcall)

        return self

    def removecall(self):
        if len(self.calls)==0:
            return self
        del self.calls[0]
        return self

    def remove(self,phonenumber):
        for i in range(len(self.calls)):
            if self.calls[i].phone_number == phonenumber:
                del self.calls[i]
        return self

    def info(self):
        for item in self.calls:
            print item.name,item.phone_number
        print len(self.calls)

    def sortcalls(self):
        for i in range(len(self.calls)):
            for j in range(len(self.calls)-i-1):
                if self.calls[j].time_of_call>self.calls[j+1].time_of_call:
                    #print self.calls[i]
                    temp = self.calls[j]
                    self.calls[j]=self.calls[j+1]
                    self.calls[j+1]=temp
        return self

newcall1 = Call(1,"hello",2222,15,"nowau")
newcall2 = Call(2,"world",1111,12,"hwerw")
newcall3 = Call(2,"ttttt",1111,13,"hwerw")
callcenter = CallCenter()
callcenter.addcall(newcall1).addcall(newcall2).addcall(newcall3).sortcalls().info()


