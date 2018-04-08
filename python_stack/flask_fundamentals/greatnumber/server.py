from flask import Flask, render_template, request, session, redirect
import random
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'
@app.route('/')
def index():
    session["ranum"] = random.randrange(1,101)
    
    return render_template("index.html",type="text",submitvalue="submit")
    
@app.route('/process',methods=['POST'])
def process():
    number = int(request.form['number'])
    if number> session["ranum"]:
        result = "Too high"
        return render_template("index.html",classname="result",result=result,type="text",submitvalue="submit")
    elif number< session["ranum"]:
        result = "Too low"
        return render_template("index.html",classname="result",result=result,type="text",submitvalue="submit")
    elif number==session["ranum"]:
        result = "{} was the number!".format(session['ranum'])
        return render_template("index.html",win="win",winresult=result,type="hidden",submitvalue="play again")
    return redirect("/")

@app.route('/win',methods=['POST'])
def win():
    print "helloe"
    #session.pop('ranum')
    return redirect("/")

app.run(debug=True)
