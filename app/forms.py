from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import DataRequired, Length, Email


class Reg_form(FlaskForm):
    username = StringField('Username', 
                           validators=[DataRequired(), Length(min=2, max=10)] )
    firstname = StringField('Firstname', 
                           validators=[DataRequired(), Length(min=2, max=10)] )
    lasttname = StringField('Lastname', 
                           validators=[DataRequired(), Length(min=2, max=10)] )
    email = StringField('Email', validators=[DataRequired(), Email()] )
    password = PasswordField('Password', validators=[DataRequired()])
    submit = SubmitField('Sign Up')
    
class Login_form(FlaskForm):
    email = StringField('Email', validators=[DataRequired(), Email()] )
    password = PasswordField('Password', validators=[DataRequired()])
    submit = SubmitField('Log in')
    
    
