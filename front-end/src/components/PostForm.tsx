import { useContext, useState } from "react";
import { DiaryContext } from "../contexts/DiaryContext";
import '../styles/PostForm.css';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { setPosts, setError, setIsPostFormOpened} = useContext(DiaryContext);

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPostFormOpened(false);
    (async () => {
      try {
        const response: Response = await fetch('https://final-project-brian-work-1199.onrender.com/api/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, body }),
        })
        if(response.ok){
          const data = await response.json();
          setPosts(prev => [...prev, data])
          setBody('');
          setTitle('');
          alert('Post successfully!');
          setError('');
        } else {
          setError('Post failed');
          setPosts([]);
        }
      } catch (error) {
        setError('Failed to fetch data');
        setPosts([]);
      }
    })();
  }

  const handleDiscard = () => {
    setIsPostFormOpened(false);
  }
    return (
      <form className="post-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Title" 
          required 
        />
        <textarea 
          value={body} 
          onChange={(e) => setBody(e.target.value)} 
          placeholder="Body" 
          required 
        ></textarea>
        <div className="button-container">
          <button type="submit">Post</button>
          <button type="button" onClick={handleDiscard}>Discard</button>
      </div>
    </form>
    );
};
  
export default PostForm;