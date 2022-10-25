import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideBar = () => {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(response => response.json())
        .then(data => setCourses(data));
    },[]);
    return (
        <div>
            <h3>Course List</h3>
            {
                courses.map(course => <p key={course.course_id}><Link to={`course/${course.course_id}`}>{course.course_name}</Link></p>)
            }
        </div>
    );
};

export default LeftSideBar;