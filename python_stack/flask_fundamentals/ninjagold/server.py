from flask import Flask, render_template, request, session, redirect
import random
import datetime
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'
@app.route('/')
def index():
    if 'goldsnumber' not in session:
        session['goldsnumber'] = 0
    if 'activity' not in session:
        session['activity'] = []
    return render_template("index.html",totalgold=session['goldsnumber'],activity=session['activity'])

@app.route('/process_money',methods=['POST'])
def process_money():
    currenttime = datetime.datetime.now()
    if request.form['building']=='farm':
        randnum = random.randrange(10,21)
        session['goldsnumber'] += randnum
        session['activity'].append(["greencolor","Earned {} golds from the farm! {}".format(randnum,currenttime)])
    elif request.form['building']=='cave':
        randnum = random.randrange(5,11)
        session['goldsnumber'] += randnum
        session['activity'].append(["greencolor","Earned {} golds from the cave! {}".format(randnum,currenttime)])
    elif request.form['building']=='house':
        randnum = random.randrange(2,6)
        session['goldsnumber'] += randnum
        session['activity'].append(["greencolor","Earned {} golds from the house! {}".format(randnum,currenttime)])
    elif request.form['building']=='casino':
        addortake = random.randrange(0,2)
        if addortake==0:
            randnum = random.randrange(0,51)
            session['goldsnumber'] += randnum
            session['activity'].append(["greencolor","Entered a casino and earned {} golds {}".format(randnum,currenttime)])
        else:
            randnum = random.randrange(0,51)
            session['goldsnumber'] -= randnum
            session['activity'].append(["redcolor","Entered a casino and lost {} golds...Ouch.... {}".format(randnum,currenttime)])
    return redirect("/")



app.run(debug=True)

