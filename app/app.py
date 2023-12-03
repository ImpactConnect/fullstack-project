from flask import Flask, render_template, flash, url_for, redirect, request, flash, jsonify
from flask_sqlalchemy import SQLAlchemy
# from form import Reg_form, Login_form
# from flask_migrate import Migrate
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from model import db,  User, Post, Login, Register
from flask_cors import CORS 


app = Flask(__name__)
CORS(app) 
app.config['SECRET_KEY'] = '9cbaa6270e7a054aaaddbea6f98579f8'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db = SQLAlchemy(app)

# migrate = Migrate(app, db)

db.init_app(app)
with app.app_context():
    db.create_all()


@app.route('/')
def home_page():
    return render_template('Posts_page.jsx')

@app.route('/posts', methods=[''])
def all_posts():
    posts = Post.query.join(User).all()
    return posts

@app.route('/register', methods=['POST'])
def user_register():
    if request.method == 'POST':
        data = request.json 
        username = data.get('username')
        firstname = data.get('firstname')
        lastname = data.get('lastname')
        email = data.get('email')
        password = data.get('password')

       
        new_user = User(username=username, firstname=firstname, lastname=lastname, email=email, password=password)
        db.session.add(new_user)
        db.session.commit()

        new_registration = Register(user_id=new_user.id)
        db.session.add(new_registration)
        db.session.commit()

        flash('Account Created')
        return redirect(url_for('user_login'))  


@app.route('/login', methods=['GET', 'POST'])
def user_login():
    if request.method == 'POST':
        data = request.json 
        email = data.get('email')
        password = data.get('password')
        user = User.query.filter_by(email=email, password=password).first()

        if user:
            new_login = Login(user_id=user.id)
            db.session.add(new_login)
            db.session.commit()

            flash('Successful Login')
            return redirect(url_for('all_posts'))
        else:
            flash('Wrong Details')
    return jsonify({'success': False, 'error': 'Invalid credentials'})


@app.route('/create_post', methods=['POST'])
def create_post():
    if request.method == 'POST':
        data = request.json 
        content = data.get('content')
        date_posted = data.get('date_posted')
        new_post = Post(content=content, date_posted=date_posted, author=current_user)
        db.session.add(new_post)
        db.session.commit()
        flash('Your post has been created!', 'success')
        return redirect(url_for('posts'))

@app.route('/delete_post/<int:post_id>', methods=['GET', 'POST'])
def delete_post(post_id):
    post = Post.query.filter_by(id=post_id)
    db.session.delete(post)
    db.session.commit()
    flash('Your post has been deleted!', 'success')
    return redirect(url_for('posts'))

if __name__ == '__main__':
    app.run(debug=True)
