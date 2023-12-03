import React, { useEffect, useState } from 'react';
import NewPost from './NewPost';
import style from './PostPage.css'; 

const PostsPage = () => {
  const [posts, setPosts] = useState([]); 

  useEffect(() => {
    fetch('http://127.0.0.1:5000/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []); 
  const handleNewPost = (newPost) => {
    setPosts([...posts, newPost]); 
  };

  const handleDeletePost = (postId) => {
    fetch(`/delete_post/${postId}`, { method: 'POST' })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setPosts(posts.filter((post) => post.id !== postId));
        } else {
          console.error('Failed to delete the post:', data.error);
        }
      })
      .catch((error) => console.error('Error deleting the post:', error));
  };

//   return (
//     <div className={style.postsPage}> {/* Apply CSS class to the main container */}
//       <h1>All Posts</h1>
//       <div className={style.postList}> {/* Apply CSS class to the post list */}
//         {posts.map((post) => (
//           <div key={post.id} className={style.post}> {/* Apply CSS class to each post */}
//             <h3>{post.content}</h3>
//             <p>Date Posted: {new Date(post.date_posted).toLocaleString()}</p>
//             <button
//               className={style.deleteButton}
//               onClick={() => handleDeletePost(post.id)}
//             >
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>
//       <NewPost onNewPost={handleNewPost} />
//     </div>
//   );
// };

// export default PostsPage;

  return (
    <div style={style.postsPage}>
      <h1>All Posts</h1>
      {posts.map(post => (
        <div key={post.id} style={style.post}>
          <h3>{post.content}</h3>
          <p>Date Posted: {new Date(post.date_posted).toLocaleString()}</p>
          <button onClick={() => handleDeletePost(post.id)}>Delete</button>
        </div>
      ))}
      <NewPost onNewPost={handleNewPost} />
    </div>
  );
  };

  export default PostsPage;