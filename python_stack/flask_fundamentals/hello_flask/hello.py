from flask import Flask,render_template  # Import Flask to allow us to create our app.
app = Flask(__name__)    # Global variable __name__ tells Flask whether or not we are running the file
                         # directly, or importing it as a module.
@app.route('/')         
def hello_world():
  return render_template('index.html') 

@app.route('/about')
def about():
  return render_template('about.html')

@app.route('/project')
def project():
  return render_template('project.html')
                                            # Return the string 'Hello World!' as a response.
app.run(debug=True)                          # Run the app in debug mode.
