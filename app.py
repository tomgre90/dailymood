# FLASK APP : dailymood
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/after_submit')
def after_submit():
    return render_template('after_submit.html')

if __name__ == '__main__':
    app.run(debug=True)