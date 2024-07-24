import { createContext, ReactNode, useEffect, useState } from "react";

export interface Post{
  id : string;
  title : string;
  body : string;
  votes: number;
}

interface DiaryContextType {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  loading : boolean;
  error: string,
  setError: React.Dispatch<React.SetStateAction<string>>;
  currentDate: Date;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
  isPostFormOpened: boolean;
  setIsPostFormOpened: React.Dispatch<React.SetStateAction<boolean>>;
  // fetchPost: () => void;
}

const defaultValue: DiaryContextType = {
  posts : [],
  setPosts : () => {},
  loading : true,
  error : '',
  setError: () => {},
  currentDate: new Date(),
  setCurrentDate: () => {},
  isPostFormOpened: false,
  setIsPostFormOpened: () => {}
  // fetchPost : () => {}
}

export const DiaryContext = createContext<DiaryContextType>(defaultValue);

export const DiaryProvider = ({children} : {children : ReactNode}) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isPostFormOpened, setIsPostFormOpened] = useState(false);

  const fetchPost = async (date: Date) => {
    try {
      const response : Response = await fetch(`https://final-project-brian-work-1199.onrender.com/api/posts/${date.getTime()}`);
      const data = await response.json();
      if(response.ok){
        setPosts(data);
        setLoading(false);
        setError('');
      } else{
        setLoading(false);
        setError('No data');
        setPosts([]);
      }
    } catch (error) {
      setLoading(false);
      setError('Failed to fetch data');
      setPosts([]);
    }
  };

  useEffect(() => {fetchPost(currentDate);
  }, [currentDate]);

  return (
    <DiaryContext.Provider value = {{
      posts, setPosts, 
      loading, 
      error, setError, 
      currentDate, setCurrentDate, 
      isPostFormOpened, setIsPostFormOpened
      }}>
      {children}
    </DiaryContext.Provider>
  ); 
}
 