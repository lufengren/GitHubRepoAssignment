from flask import Flask, render_template, request, redirect
app = Flask(__name__)
@app.route('/')
def index():
  return render_template("index.html")

@app.route('/ninja')
def displayninja():
  return render_template("ninja.html")

@app.route('/ninja/<color>')
def disappearninja(color):
    return render_template("disninja.html",color=color)
app.run(debug=True)