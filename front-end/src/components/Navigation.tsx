import { useContext } from "react";
import { DiaryContext } from "../contexts/DiaryContext";
import PostForm from "./PostForm";
import '../styles/Navigation.css';
import { Link } from "react-router-dom";

const Navigation = () => {
  const {currentDate, setCurrentDate, isPostFormOpened, setIsPostFormOpened} = useContext(DiaryContext);

  const isToday = () => {
    const today = new Date();
    return currentDate.toDateString() === today.toDateString();
  }

  const handlePrevDay = () => {
    const previousDay = new Date();
    previousDay.setDate(currentDate.getDate() - 1);
    setCurrentDate(previousDay);
    setIsPostFormOpened(false);
  }

  const handleNextDay = () => {
    const nextDay = new Date();
    nextDay.setDate(currentDate.getDate() + 1);
    setCurrentDate(nextDay);
    setIsPostFormOpened(false);
  }

  const handleNewPost = () => {
    setIsPostFormOpened(true);
  }

  const handleHome = () =>{
    setCurrentDate(new Date());
  }

  return (
    <>
    <div className='navigation-buttons'>
      <Link to="/" className="home-link" onClick={handleHome}>Home</Link>
      <button onClick={() => handlePrevDay()}>Previous Day</button>
      <h2>{currentDate.toDateString()}</h2>
      <button onClick={isToday() ? handleNewPost : handleNextDay}>
      {isToday() ? 'New Post' : 'Next Day'}
      </button>
    </div>
      {isPostFormOpened ? <PostForm /> : <></>}
    </>
  );
}

export default Navigation;