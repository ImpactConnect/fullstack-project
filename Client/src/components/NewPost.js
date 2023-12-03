import React, { useState } from 'react';
import './NewPost.css';

const NewPost = ({ onNewPost }) => {
  const [content, setContent] = useState('');

  const handleCreatePost = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/create_post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      });

      if (response.ok) {
        // Refresh the posts after creating a new one
        const newPost = await response.json();
        onNewPost(newPost);
        setContent('');
      } else {
        console.error('Failed to create a new post');
      }
    } catch (error) {
      console.error('Error creating a new post:', error);
    }
  };

  return (
    <div className="new-post-form">
      <h2>Create New Post</h2>
      <textarea
        placeholder="Enter your new post here"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleCreatePost}>Create Post</button>
    </div>
  );
};

export default NewPost;
