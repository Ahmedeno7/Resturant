from flask import Flask, render_template, url_for
import os

app = Flask(__name__)

@app.route('/')
def home():

    return render_template('index.html')

@app.route('/about')
def about():

    return render_template('about.html')

@app.route('/gallery')
def gallery():

    return render_template('gallery.html')

@app.route('/menu')
def menu():

    return render_template('menu.html')

@app.route('/blog')
def blog():

    return render_template('blog.html')

@app.route('/services')
def services():

    return render_template('service.html')

@app.route('/contact')
def contact():

    return render_template('contact.html')

@app.route('/reservation')
def reservation():

    return render_template('reservation.html')

@app.route('/faq')
def faq():

    return render_template('faq.html')

if __name__ == '__main__':
    app.run(debug=True)
