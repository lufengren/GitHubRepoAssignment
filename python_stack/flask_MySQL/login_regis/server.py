from flask import Flask, render_template, request, redirect, session, flash
import re
from mysqlconnection import MySQLConnector
import md5
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'
mysql = MySQLConnector(app, 'walldb')


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/register', methods=['POST'])
def process():
    firstname = request.form["firstname"]
    lastname = request.form["lastname"]
    email = request.form["email"]
    password = request.form["password"]
    confirmpass = request.form["confirmpass"]

    if len(firstname) < 2 or not firstname.isalpha():
        flash("firstname must be letters and must have at least 2 charactors")
        return redirect("/")

    if len(lastname) < 2 or not lastname.isalpha():
        flash("lastname must be letters and must have at least 2 charactors")
        return redirect("/")

    if len(email) < 1:
        flash("email cannot be empty")
        return redirect("/")
    elif not EMAIL_REGEX.match(email):
        flash("Invalid Email Address!")
        return redirect("/")

    if len(password) < 8:
        flash("password must be at least 8 charactors")
        return redirect("/")

    if confirmpass != password:
        flash("confirmpassword isn't equal to password")
        return redirect("/")
    regi_query = "SELECT * FROM users where users.email=:email"
    regi_data = {'email': email}
    valiemail = mysql.query_db(regi_query, regi_data)
    if len(valiemail) > 0:
        flash("email already in use")
        return redirect("/")
    else:
        password = md5.new(request.form['password']).hexdigest()
        query = "INSERT INTO users (firstname,lastname, email, password, created_at, updated_at) VALUES (:firstname,:lastname,:email, :password, NOW(), NOW())"
        data = {'firstname': firstname, 'lastname': lastname,'email': email, 'password': password}
        mysql.query_db(query, data)
        flash("register successfully")
        return redirect("/")
        # messages = mysql.query_db("SELECT users.firstname,messages.created_at,messages.message from users join messages on users.id=messages.user_id order by created_at desc")
        # return render_template("wall.html",user=user,messages=messages)
        # return render_template("wall.html",user=user)

@app.route('/login', methods=['POST'])
def login():
    email = request.form['email']
    password = md5.new(request.form['password']).hexdigest()
    user_query = "SELECT * FROM users where users.email = :email AND users.password = :password"
    query_data = { 'email': email, 'password': password}
    user = mysql.query_db(user_query, query_data)
    
    if user==[]:   #len(user)==0
        flash("email and password didn't match")
        return redirect("/")
    else:
        session['userid']=user[0]['id']
        session['firstname']=user[0]['firstname']
        return redirect("/wall")
        

@app.route('/wall')
def showinfo():
    if 'userid' in session:
        messages = mysql.query_db("SELECT * from users join messages on users.id=messages.user_id order by messages.created_at desc")
        comments = mysql.query_db("select comments.comment,comments.message_id,comments.created_at,users.firstname,users.lastname from comments join users on comments.user_id=users.id")
        return render_template("wall.html",messages=messages,comments=comments)

@app.route('/post', methods=['POST'])
def post():
    post=request.form['post']
    insert_query = "INSERT INTO messages (user_id,message, created_at, updated_at) VALUES (:user_id,:message, NOW(), NOW())"
    data = {'user_id': session['userid'], 'message':post}
    mysql.query_db(insert_query, data)
    return redirect("/wall")

@app.route('/comment',methods=['post'])
def comment():
    comment=request.form['comment']
    messageid = request.form['getmsgid']
    print messageid
    insert_query = "INSERT INTO comments(message_id,user_id,comment,created_at,updated_at) values(:message_id,:user_id,:comment,NOW(), NOW())"
    data = {'message_id': messageid,'user_id': session['userid'],'comment':comment}
    mysql.query_db(insert_query, data)
    return redirect("/wall")

@app.route('/logoff')
def logoff():
    session["id"]=''
    session['firstname']=''
    return redirect("/")

app.run(debug=True)
