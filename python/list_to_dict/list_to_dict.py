def make_dic(list1, list2):
    new_dic = {}
    for i in range(len(list1)):
        new_dic[list1[i]] = list2[i]
    print new_dic

name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"]
make_dic(name,favorite_animal)


# def make_dic(list1, list2):
#     new_dic = {}
#     a = len(list1)
#     b = len(list2)
#     if a >= b:
#         for i in range(b):
#             new_dic[list1[i]] = list2[i]
#     else:
#         for i in range(a):
#             new_dic[list2[i]] = list1[i]

#     print new_dic

# name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane","test1","test2"]
# favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"]
# make_dic(name, favorite_animal)