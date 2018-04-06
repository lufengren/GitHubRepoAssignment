from flask import Flask, render_template, request, redirect
app = Flask(__name__)
@app.route('/')
def index():
  return render_template("index.html")

@app.route('/result', methods=['POST'])
def result():
   inputname = request.form['name']
   inputloc = request.form['locselect']
   inputlan = request.form['language']
   inputcom = request.form['comment']
   
   return render_template("result.html",name=inputname,locselect=inputloc,language=inputlan,comment=inputcom)
   return redirect('/')
app.run(debug=True)