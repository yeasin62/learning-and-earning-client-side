import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const coursee = useLoaderData();
    console.log(coursee);
    const {title,subtitle,instructor,description,image,logo,rating,total_purchased,name} = coursee;
    return (
        <Card className="text-center">
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <img src={image} alt={title} className="img-fluid"/>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {subtitle}
          <p>{description}</p>
        </Card.Text>
        <Card.Text>
          <p>Instructor: {instructor}</p>
          <p>Rating: {rating}</p>
          <p>Enrolled: {total_purchased} Students</p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    );
};

export default Course;