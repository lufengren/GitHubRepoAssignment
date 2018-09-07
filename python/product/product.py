class Products(object):
    def __init__(self,price,itemname,weight,brand,status="for sale"):
        self.price = price
        self.itemname = itemname
        self.weight = weight
        self.brand = brand
        self.status = status

    def sold(self):
        self.status = "sold"
        return self
    def totalprice(self,tax):
        print self.price*(1+tax)
        return self
    def returnproduct(self,reason):
        if reason == 1:       # 1 means product is defective
            self.status = "defective"
            self.price = 0
        elif reason == 2:     # returned like new
            self.status = "for sale"
        elif reason == 3:     # box is opened
            self.status = "used"
            self.price = self.price * 0.8
        return self
    def displayinfo(self):
        print self.price, self.itemname, self.weight, self.brand, self.status
        return self

products1 = Products(20,"pancake",10,"eggo",)
products1.sold().displayinfo().returnproduct(2).displayinfo()
