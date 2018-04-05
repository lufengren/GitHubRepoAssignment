from flask import Flask, render_template, request, redirect
app = Flask(__name__)
@app.route('/')
def index():
  return render_template("index.html")

@app.route('/ninja')
def ninja():
  return render_template("ninja.html")

@app.route('/dojos/new')
def dojosnew():
  return render_template("dojos.html")
app.run(debug=True)