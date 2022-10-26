import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const coursee = useLoaderData();
    console.log(coursee);
    const {title,subtitle,Instructor,description,image,logo,rating,total_purchased,name} = coursee;
    return (
        <Card className="text-center mt-4">
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <img src={image} alt={title} className="img-fluid"/>
        <h2>{title}</h2>
        <h5>{subtitle}</h5>
        {description}
            <div className='author'>
                <p>Instructor: {Instructor}</p>
                <p>Rating: {rating}</p>
                <p>Enrolled: {total_purchased} Students</p>
            </div>
      </Card.Body>
    </Card>
    );
};

export default Course;