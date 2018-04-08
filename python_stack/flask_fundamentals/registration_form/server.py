from flask import Flask, render_template, request, redirect, session, flash
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process():
    firstname = request.form["firstname"]
    lastname = request.form["lastname"]
    email = request.form["email"]
    password = request.form["password"]
    confirmpass = request.form["confirmpass"]
    if len(firstname) <1 or len(lastname)<1 or len(email)<1 or len(password)<1 or len(confirmpass)<1 :
        flash("cannot contain empty fields","emptyerror")
        return redirect("/")
    if not firstname.isalpha() or not lastname.isalpha():
        flash("firstname and lastname cannot contain numbers","nameerror")
        return redirect("/")
    if not EMAIL_REGEX.match(email):
        flash("Invalid Email Address!","emailerror")
        return redirect("/")
    if len(password)<8:
        flash("password must be at least 8 charactors","passworderror")
        return redirect("/")
    if confirmpass != password :
        flash("confirmpassword isn't equal to password","confirpasserror")
        return redirect("/")
    return render_template("result.html")
app.run(debug=True)