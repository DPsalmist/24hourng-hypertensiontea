from flask import Flask, render_template, request, flash, redirect, session
from forms import ContactForm

import os

app = Flask(__name__)

# Import Mail Class
from flask_mail import Mail, Message

# Configure Server Paramenters
app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = os.environ.get('USER_MAIL')
app.config['MAIL_PASSWORD'] = os.environ.get('USER_PASSWORD')
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

# Create instance of Mail Class
mail = Mail(app)

# Set secret key
app.secret_key = 'development key'


# Routes
@app.route('/', methods=['GET', 'POST'])
def index():
	form = ContactForm()

	if request.method == 'POST':
		fullname = request.form.get('fullname')
		phone_no = request.form.get('phone_no')
		subject = 'New Order Request'
		email = request.form.get('email')
		address = request.form.get('address')
		product_quantity = request.form.getlist('product')
		msg = f'Hello, \n\n' \
		f'You have a message from {fullname} with details below. \n\n' \
		f'Phone Number: {phone_no} \n' \
		f'Address: {address} \n' \
		f'Email: {email} \n' \
		f'The product quantity is: {product_quantity}.'

		# Catch the fulname
		name = session['name'] = fullname
	
		# Using Flask Mail
		message = Message(subject, sender='thedavidonyekachi@gmail.com', recipients=['thedavidonyekachi@gmail.com'])
		message.body = msg
		mail.send(message)

		return redirect ('/hypertensiontea-thanks')
	elif request.method == 'GET':
		return render_template('index.html', form=form)


@app.route('/hypertensiontea-thanks')
def thankyou():
	name = session.get('name', None)
	return render_template('thankyou.html', name=name)


@app.route('/404')
def notfound():
    return render_template('404.html')

# if __name__ == '__main__':
#     app.debug = True
#     app.run()

if __name__ == '__main__':
    app.run(debug=False)
