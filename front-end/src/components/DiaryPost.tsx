import { useContext, useState } from "react";
import { DiaryContext, Post } from "../contexts/DiaryContext";
import '../styles/DiaryPost.css';

const DiaryPost = ({post} : {post : Post}) => {
  const {setError, setPosts} = useContext(DiaryContext);
  const [hover, setHover] = useState(false);

  const handleVote = (id: string, type: string) => {
    (async () => {
      try {
        const response: Response = await fetch(`https://final-project-brian-work-1199.onrender.com/api/posts/${id}/vote`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({type})
        });
        const data: Post = await response.json();
        if(response.ok){
          setPosts(prevPosts => prevPosts.map(post => (post.id === id ? data : post)));
          setError('');
        } else{
          setPosts([]);
          setError('Id not found');
        }
      } catch (error) {
        setError('Failed to fetch data');
        setPosts([]);
      }
    })();
  }

  return (
    <div className="diary-post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <div
        className={`voting ${hover ? 'hover' : ''} ${post.votes !== 0 ? 'voted' : ''}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <button onClick={() => handleVote(post.id, 'up')}>+</button>
        <span>{post.votes !== 0 ? post.votes : 'Vote'}</span>
        <button onClick={() => handleVote(post.id, 'down')}>-</button>
      </div>
    </div>
  );
}

export default DiaryPost;