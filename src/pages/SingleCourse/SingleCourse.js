import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleCourse = ({course}) => {
    const {logo, image, title, description,course_id} = course;
    return (
        <Col>
          <Card>
            <Card.Img variant="top" src={logo} className='h-100'/>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {
                    description.slice(0,120)+ '...'
                }
              </Card.Text>
            </Card.Body>
                <Link to={`/course/${course_id}`} className='btn btn-info m-2 text-white'>Course Details</Link>
          </Card> 
        </Col>
    );
};

export default SingleCourse;