import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import './Course.css';

const Course = () => {
    const coursee = useLoaderData();
    console.log(coursee);
    const {title,subtitle,Instructor,description,image,rating,total_purchased,name,course_id} = coursee;
    return (
        <Card className="text-center mt-4">
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <img src={image} alt={title} className="img-fluid"/>
        <h2 className='singleTitle'>{title}</h2>
        <h5>{subtitle}</h5>
        {description}
            <div className='author'>
                <p>Instructor: {Instructor}</p>
                <p>Rating: {rating}</p>
                <p>Enrolled: {total_purchased} Students</p>
            </div>
            <div className='mt-4'>
              <Link to={`/course/buy/${course_id}`}>Get premium access</Link>
            </div>
      </Card.Body>
    </Card>
    );
};

export default Course;