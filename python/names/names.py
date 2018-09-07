users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name': 'John', 'last_name': 'Rosales'},
     {'first_name': 'Mark', 'last_name': 'Guillen'},
     {'first_name': 'KB', 'last_name': 'Tonel'}
  ],
 'Instructors': [
     {'first_name': 'Michael', 'last_name': 'Choi'},
     {'first_name': 'Martin', 'last_name': 'Puryear'}
  ]
 }
strlen = 0

for key in users:
    i = 0
    print key
    for item in users[key]:
        i += 1
        strlen = len(item["first_name"])+len(item["last_name"])
        print str(i)+" - "+item["first_name"]+" "+item["last_name"]+" - "+str(strlen)



