import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DiaryList from './components/DiaryList';
import Navigation from './components/Navigation';
import PostForm from './components/PostForm';
import { DiaryProvider } from './contexts/DiaryContext';


function App() {
  return (
    <DiaryProvider>
      <Router>
      <Navigation />
      <Switch>
        <Route path="/">
            <DiaryList />
        </Route>
      </Switch>
    </Router>
    </DiaryProvider>
  );
}

export default App;