import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TestPage from './pages/test/test';
import ExamPage from './pages/exam/exam';
import AddWordPage from './pages/add-word/add-word';
import MainPage from './pages/main/main';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/exam"><ExamPage /></Route>
          <Route path="/test"><TestPage /></Route>
          <Route path="/add-word"><AddWordPage /></Route>
          <Route path="/"><MainPage /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
