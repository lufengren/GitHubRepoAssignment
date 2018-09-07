my_dict = {
  "Speros": "(555) 555-5555",
  "Michael": "(999) 999-9999",
  "Jay": "(777) 777-7777"
}
resultarr = []
for key in my_dict:
    listarr = []
    listarr.append(key)
    listarr.append(my_dict[key])
    resultarr.append(listarr)
print resultarr
for i in range(len(resultarr)):
    a = tuple(resultarr[i])
    resultarr[i] = a
print resultarr



