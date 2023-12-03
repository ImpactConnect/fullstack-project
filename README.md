# Social Media Project

This is a simple social media project that allows users to perform CRUD (Create, Read, Update, Delete) operations. Users can create posts, view posts, update their own posts, and delete their posts.

## Features

- **User Registration and Login:** Users can register for an account and log in securely.

- **Create a Post:** Authenticated users can create new posts to share with others.

- **View All Posts:** Users can view all posts created by themselves and other users.

- **Update Post:** Users have the ability to edit and update their own posts.

- **Delete Post:** Users can delete their own posts.

## Technologies Used

- **Frontend:** ReactJS for the user interface.

- **Backend:** Flask (Python) for the server-side logic and API endpoints.

- **Database:** SQLAlchemy for interacting with a relational database.

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/social-media-project.git
   cd social-media-project
   ```

2. **Install Dependencies:**
   - Navigate to the `client` folder and run:
     ```bash
     cd client
     npm install
     ```

   - Go back to the project root and install Python dependencies:
     ```bash
     pip install -r requirements.txt
     ```

3. **Set Up the Database:**
   - Create a PostgreSQL database and update the database connection details in `config.py`.

   - Apply migrations to create the necessary tables:
     ```bash
     flask db init
     flask db migrate
     flask db upgrade
     ```

4. **Run the Application:**
   - Start the Flask backend server:
     ```bash
     flask run
     ```

   - In a separate terminal, start the React frontend:
     ```bash
     cd client
     npm start
     ```

   The application will be accessible at `http://localhost:3000`.

## Usage

1. **User Registration and Login:**
   - Navigate to the registration page (`/register`) to create a new account.
   - Log in using your credentials on the login page (`/login`).

2. **Create a Post:**
   - Once logged in, navigate to the posts page (`/posts`).
   - Use the "Create Post" form to create a new post.

3. **View All Posts:**
   - Visit the posts page to see a list of all posts.

4. **Update Post:**
   - Click on the "Edit" button on your own post to update the content.

5. **Delete Post:**
   - Click on the "Delete" button on your own post to remove it.

## Contributing

If you'd like to contribute to this project, please follow the [Contributing Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.