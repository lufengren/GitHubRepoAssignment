from flask import Flask, render_template, request, redirect, session, flash
import re
from mysqlconnection import MySQLConnector
import md5
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'
mysql = MySQLConnector(app,'logindb')
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process():
    if request.form['action'] == 'register':
        firstname = request.form["firstname"]
        lastname = request.form["lastname"]
        email = request.form["email"]
        password = md5.new(request.form['password']).hexdigest()
        #password = request.form["password"]
        confirmpass = md5.new(request.form['confirmpass']).hexdigest()
        if len(firstname) <1:
            flash("cannot contain empty fields","emptyerror")
            return redirect("/")
        elif not firstname.isalpha():
            flash("firstname cannot contain numbers","nameerror")
        if len(lastname)<1:
            flash("cannot contain empty fields","emptyerror")
            return redirect("/")
        elif not lastname.isalpha():
            flash("lastname cannot contain numbers","nameerror")
            return redirect("/")
        if len(email)<1:
            flash("cannot contain empty fields","emptyerror")
            return redirect("/")
        elif not EMAIL_REGEX.match(email):
            flash("Invalid Email Address!","emailerror")
            return redirect("/")
        if len(password)<1:
            flash("cannot contain empty fields","emptyerror")
            return redirect("/")
        elif len(password)<8:
            flash("password must be at least 8 charactors","passworderror")
            return redirect("/")
        if confirmpass != password :
            flash("confirmpassword isn't equal to password","confirpasserror")
            return redirect("/")
        query = "INSERT INTO users (firstname,lastname, email, password, created_at, updated_at) VALUES (:firstname,:lastname,:email, :password, NOW(), NOW())"
        data = { 'firstname': firstname,'lastname':lastname, 'email': email, 'password': password }
        mysql.query_db(query, data)
        return render_template("userhome.html",user=firstname)
    elif request.form['action'] == 'login':
        email = request.form['email']
        password = md5.new(request.form['password']).hexdigest()
        user_query = "SELECT * FROM users where users.email = :email AND users.password = :password"
        query_data = { 'email': email, 'password': password}
        user = mysql.query_db(user_query, query_data)
        print user
        if user=="":
            flash("email and password didn't match","loginerror")
            return redirect("/")
        else:
            
            return render_template("userhome.html",user=user)


    


app.run(debug=True)