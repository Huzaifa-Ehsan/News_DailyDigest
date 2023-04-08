import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

export default function App() {
  // Restart the development server for setup of custom enviornment variable
  /* Generate your own apikey from https://newsapi.org/ */
  const apiKey = process.env.REACT_APP_NEWS_API
  const pageSize = 10;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="0" pageSize={pageSize} country='us' category="general" />}></Route>
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="1" pageSize={pageSize} country='us' category="business" />}></Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="2" pageSize={pageSize} country='us' category="entertainment" />}></Route>
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="3" pageSize={pageSize} country='us' category="general" />}></Route>
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="4" pageSize={pageSize} country='us' category="health" />}></Route>
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="5" pageSize={pageSize} country='us' category="science" />}></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="6" pageSize={pageSize} country='us' category="sports" />}></Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="7" pageSize={pageSize} country='us' category="technology" />}></Route>
        </Routes>
      </BrowserRouter>
    </div >
  )
}

