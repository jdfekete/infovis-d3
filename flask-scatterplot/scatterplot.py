from flask import Flask, render_template, jsonify
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('scatterplot.html')

@app.route('/data')
def data():
    return jsonify([
      { 'date': '2014-01-01', 'amount': 10 },
      { 'date': '2014-02-01', 'amount': 20 },
      { 'date': '2014-03-01', 'amount': 40 },
      { 'date': '2014-04-01', 'amount': 80 }
  ])
 
