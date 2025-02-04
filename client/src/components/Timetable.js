import React, { useState, useEffect } from 'react';  
import axios from 'axios'; 
import '../styles/Timetable.css';  

const Timetable = () => {  
  const [timetable, setTimetable] = useState([]);  

  const fetchTimetable = async () => {  
    const response = await axios.get('http://localhost:5000/timetable');  
    setTimetable(response.data);  
  };  

  useEffect(() => {  
    fetchTimetable();  
  }, []);  

  return (  
    <div>  
      <h1>Timetable</h1>  
      <ul>  
        {timetable.map(item => (  
          <li key={item.id}>{item.course} - {item.time}</li>  
        ))}  
      </ul>  
    </div>  
  );  
};  

export default Timetable;