import { useState, useEffect } from 'react';
import Center from './Center';

// API Assignments for Axios
import axios from 'axios';
const API_KEY = process.env.APP_TOKEN;
axios.defaults.headers.common['Authorization'] = API_KEY;
const API_FIN = process.env.REACT_APP_API_FINANCIAL_EMPOWERMENT;


export default function Centers() {

    const [finPosts, setFinPosts] = useState([]);

    useEffect(() => {
        // Financial Empowerment Get
        axios.get(API_FIN)
            .then(response => {
                setFinPosts(response.data);
                // console.log(response.data)
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className='centers'>
      <section>
        <table>
          <thead>
            <tr style={{background: 'rgb(245, 222, 179, 0.5)'}}>
              <th>Borough</th>
              <th>Provider</th>
              <th>Street Address</th>
              <th>Days Open</th>
              <th>Hours of Operation</th>
              <th>Languages</th>
            </tr>
          </thead>
          <tbody className=''>
            {finPosts.map((center) => {
              return <Center key={center.building} center={center} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
 )
}