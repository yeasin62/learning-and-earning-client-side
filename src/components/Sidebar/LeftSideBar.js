import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSideBar.css';

const LeftSideBar = () => {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('https://gazi-learning-academy-yeasin62.vercel.app/courses')
        .then(response => response.json())
        .then(data => setCourses(data));
    },[]);
    return (
        <div className='sidebar'>
            <h3>Course List</h3>
            {
                courses.map(course => <p key={course.course_id}><Link to={`course/${course.course_id}`}>{course.course_name}</Link></p>)
            }
        </div>
    );
};

export default LeftSideBar;