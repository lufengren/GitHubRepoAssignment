class Patient(object):
    def __init__(self,id,name,allergies):
        self.id = id
        self.name = name
        self.allergies = allergies
        self.bednumber="none"

class Hospital(object):
    def __init__(self,name,capacity):
        self.patients = []
        self.name = name
        self.capacity = capacity

    def admit(self,patient,bednumber):
        if len(self.patients)<self.capacity:
            patient.bednumber = bednumber
            self.patients.append(patient)
            print "confirm admission"
        else:
            print "hospital is full"
        return self

    def discharge(self,id):
        for i in range(len(self.patients)):
            if self.patients[i].id == id:
                self.patients[i].bednumber=="none"
                del self.patients[i]
        return self


testpatient1 = Patient(123,"hello1","peanut")
testpatient2 = Patient(456,"hello2","seasame")
testhospital = Hospital("world",1)

print testhospital.admit(testpatient1,111).discharge(123).patients

