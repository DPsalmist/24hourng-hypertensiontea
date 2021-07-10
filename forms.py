#from flask.ext.wtf import Form
from wtforms import Form, TextField, TextAreaField, SubmitField, validators, ValidationError, StringField
from wtforms.fields.html5 import EmailField
from wtforms.validators import InputRequired, Email

class ContactForm(Form):
  fullname = TextField("Full Name*", [validators.Required("Please Enter Your Full Name")])
  phone_no = TextField("Phone No*", [validators.Required("Please Enter Your Phone Number")])
  email = StringField("Email",  [InputRequired("Please enter your email address."), Email("This field requires a valid email address")])
  #email = StringField("Email*",[validators.Required("Please enter your email address"), Email('Please enter a valid email address')])
  address = TextAreaField("Address*", [validators.Required("Please enter your address.")])
  submit = SubmitField("Send")