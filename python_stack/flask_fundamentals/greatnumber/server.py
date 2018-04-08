from flask import Flask, render_template, request, session, redirect
import random
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'
@app.route('/')
def index():
    if "ranum" not in session:
        session["ranum"] = random.randrange(1,101)
        print session["ranum"]
        return render_template("index.html",resettype="hidden",formstate="displayform")
    
    if session['guessval']> session["ranum"]:
        result = "Too high"
        return render_template("index.html",lost="lost",lostresult=result,resettype="hidden",formstate="displayform")
    elif session['guessval']< session["ranum"]:
        result = "Too low"
        return render_template("index.html",lost="lost",lostresult=result,resettype="hidden",formstate="displayform")
    elif session['guessval']==session["ranum"]:
        result = "{} was the number!".format(session['ranum'])
        return render_template("index.html",win="win",winresult=result,resettype="submit",formstate="hideform")
    
    
@app.route('/process',methods=['POST'])
def process():
    session['guessval'] = int(request.form['guessval'])
    
    return redirect("/")

@app.route('/reset',methods=['POST'])
def reset():
    session.pop('ranum')
    return redirect("/")

app.run(debug=True)
