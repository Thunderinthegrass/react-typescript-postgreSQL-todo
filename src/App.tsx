import React from 'react';
import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Title from './components/Title/Title';
import MainPage from './pages/MainPage/MainPage';
import TasksPage from './pages/TasksPage/TasksPage';
// import svgIcons from './img/icons.svg';

function App() {
  return (
    <div className="App">
      <div className='login'>
        <Auth />
      </div>
      <div className='content'>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/tasks' element={<TasksPage/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
