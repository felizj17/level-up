import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const API_KEY = process.env.APP_TOKEN;
const API_FIN = process.env.REACT_APP_API_FINANCIAL_EMPOWERMENT;
const API_COU = process.env.REACT_APP_API_COURSES_TRAINING;


function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://data.cityofnewyork.us/resource/fgq8-am2v.json')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  return (
    <div className="App">

    </div>
  );
}

export default App;
