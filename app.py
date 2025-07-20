# FLASK APP : dailymood
from flask import Flask, render_template, redirect, request, flash
import requests
import os
from datetime import date

app = Flask(__name__)

app.secret_key = os.urandom(24)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        data = {
            "data" : {
                "date": request.form.get('date'),
                "mood": request.form.get('mood'),
                "reason": request.form.get('reason'),
            }
        }
        response = requests.post('https://sheetdb.io/api/v1/0h0s4tq528dgw', json=data)
        
        if response.status_code == 201:
            flash("submitted")
        else:
            flash("Something went wrong. Please try again.")
        
        
        
        return redirect("/")
    
    today = date.today().isoformat()  # 'YYYY-MM-DD'
    return render_template('index.html', current_date = today)

@app.route('/after_submit')
def after_submit():
    return render_template('after_submit.html')

if __name__ == '__main__':
    app.run(debug=True)