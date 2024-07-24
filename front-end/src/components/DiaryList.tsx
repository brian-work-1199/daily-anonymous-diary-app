import { useContext, useEffect } from "react";
import { DiaryContext } from "../contexts/DiaryContext";
import DiaryPost from "./DiaryPost";
import '../styles/DiaryList.css';

const DiaryList = () => {
  const {posts, loading, error} = useContext(DiaryContext);

  if(loading) return <div>Loading....</div>;

  if(error) return <div>Error: {error}</div>;

  return (
    <div className="diary-list">
      {posts.map(post => (
        <DiaryPost key={post.id} post={post} />
      ))}
    </div>
  );
}

export default DiaryList;