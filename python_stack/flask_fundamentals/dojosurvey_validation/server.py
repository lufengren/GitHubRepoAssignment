from flask import Flask, render_template, request, redirect,flash,session
app = Flask(__name__)
app.secret_key = 'KeepItSecretKeepItSafe'
@app.route('/')
def index():
  return render_template("index.html")

@app.route('/result', methods=['POST'])
def result():
  inputname = request.form['name']
  inputloc = request.form['locselect']
  inputlan = request.form['language']
  inputcom = request.form['comment']
  if len(inputname)<1 and len(inputcom)<1:
    flash("Name cannot be empty!")
    flash("Comment cannot be empty!")
    return redirect('/')
  elif len(inputname)<1:
    flash("Name cannot be empty!")
    return redirect('/')
  elif len(inputcom)<1:
    flash("Comment cannot be empty!")
    return redirect('/')
  elif len(inputcom)>20:
    flash("Comment cannot exceed 120 charactors!")
    return redirect('/')
  return render_template("result.html",name=inputname,locselect=inputloc,language=inputlan,comment=inputcom)
  
app.run(debug=True)