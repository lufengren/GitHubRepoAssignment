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
    if color=="blue":
        return render_template("disninja1.html")
    elif color=="orange":
        return render_template("disninja2.html")
    elif color=="red":
        return render_template("disninja3.html") 
    elif color=="purple":
        return render_template("disninja4.html")
    else:
        return render_template("other.html")
app.run(debug=True)