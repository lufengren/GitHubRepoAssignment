def draw_star(arr):
    test = "*"
    for item in arr:
        if isinstance(item, int):
            print item*test
        elif isinstance(item, str):

            print (item[0]*len(item)).lower()


draw_star([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"])


