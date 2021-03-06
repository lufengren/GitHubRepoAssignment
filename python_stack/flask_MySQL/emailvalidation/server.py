from flask import Flask, request, redirect, render_template, session, flash
import re
from mysqlconnection import MySQLConnector
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
app.secret_key = "ThisIsSecret!"
mysql = MySQLConnector(app,'email')
@app.route('/')
def index():
    # friends = mysql.query_db("SELECT name, age, friends_since ,year(friends_since) as year FROM friends")
    # print friends
    return render_template('index.html')

@app.route('/validation', methods=['POST'])
def validation():
    session['email'] = request.form['email']
    if len(session['email']) < 1:
        flash("Email cannot be blank!")
        return redirect('/')
    elif not EMAIL_REGEX.match(session['email']):
        flash("Invalid Email Address!")
        return redirect('/')
    else:
        query = "INSERT INTO emails (email,created_at,updated_at) VALUES (:email,now(),now())"
        data = {
            'email':session['email']
        }
        mysql.query_db(query, data)
        return redirect('/success')
@app.route("/success")
def showemails():
    info = "Email Address Entered:"
    emails = mysql.query_db("SELECT * FROM emails")
    return render_template("success.html",info=info,emails=emails)



    
# def create():
#     query = "INSERT INTO friends (name, age) VALUES (:name, :age)"
#     data = {
#              'name': request.form['name'],
#              'age':  request.form['age']
#            }
#     mysql.query_db(query, data)
    


# @app.route('/friends/<friend_id>')
# def show(friend_id):
#     # Write query to select specific user by id. At every point where
#     # we want to insert data, we write ":" and variable name.
#     query = "SELECT * FROM friends WHERE id = :specific_id"
#     # Then define a dictionary with key that matches :variable_name in query.
#     data = {'specific_id': friend_id}
#     # Run query with inserted data.
#     friends = mysql.query_db(query, data)
#     # Friends should be a list with a single object,
#     # so we pass the value at [0] to our template under alias one_friend.
#     return render_template('index.html', one_friend=friends[0])


# @app.route('/friends', methods=['POST'])
# def create():
#     # add a friend to the database!
#     query = "INSERT INTO friends (first_name, last_name, occupation, created_at, updated_at) VALUES (:first_name, :last_name, :occupation, NOW(), NOW())"
#     data = {
#              'first_name': request.form['first_name'],
#              'last_name':  request.form['last_name'],
#              'occupation': request.form['occupation']
#            }
#     mysql.query_db(query, data)
#     return redirect('/')

# @app.route('/update_friend/<friend_id>', methods=['POST'])
# def update(friend_id):
#     query = "UPDATE friends SET first_name = :first_name, last_name = :last_name, occupation = :occupation WHERE id = :id"
#     data = {
#              'first_name': request.form['first_name'],
#              'last_name':  request.form['last_name'],
#              'occupation': request.form['occupation'],
#              'id': friend_id
#            }
#     mysql.query_db(query, data)
#     return redirect('/')

app.run(debug=True)




