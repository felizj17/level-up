import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import './App.css';

// API Assignments for Axios
import axios from 'axios';
const API_KEY = process.env.APP_TOKEN;
axios.defaults.headers.common['Authorization'] = API_KEY;
const API_FIN = process.env.REACT_APP_API_FINANCIAL_EMPOWERMENT;
// const API_COU = process.env.REACT_APP_API_COURSES_TRAINING;


function App() {

  const [finPosts, setFinPosts] = useState([]);
  // const [coursePosts, setCoursePosts] = useState([]);


  useEffect(() => {
    // Financial Empowerment Get
    axios.get(API_FIN)
      .then(response => {
        setFinPosts(response.data);
        console.log(response.data)
      })
      .catch(error => {
        // console.error(error);
      });
      // Training Courses Get
      // axios.get(API_COU)
      // .then(response => {
      //   setCoursePosts(response.data);
      //   console.log(response.data)
      // })
      // .catch(error => {
      //   console.error(error);
      // });
     
  }, []);


  return (
    <div className='App'>
      <Home />
    </div>
  )
}


export default App
