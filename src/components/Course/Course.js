import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { FaFilePdf } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import './Course.css';
import Pdf from "react-to-pdf";

const Course = () => {
    const coursee = useLoaderData();
    console.log(coursee);
    const {title,subtitle,Instructor,description,image,rating,total_purchased,name,course_id} = coursee;
    const ref = React.createRef();

    return (
        <Card className="text-center mt-4">
      <Card.Header> {name}</Card.Header>
      <Card.Body>
      <FaFilePdf></FaFilePdf>

      <Pdf targetRef={ref} filename={`${name}.pdf`}>
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div ref={ref}>
        
      
            



        <h2 className='singleTitle'> {title}</h2>
        <img src={image} alt={title} className="img-fluid"/>
        
        <h5>{subtitle}</h5>
        {description}
            <div className='author'>
                <p>Instructor: {Instructor}</p>
                <p>Rating: {rating}</p>
                <p>Enrolled: {total_purchased} Students</p>
            </div>
            <div className='mt-4'>
              <Link to={`/course/buy/${course_id}`} className="btn btn-danger">Get premium access</Link>
            </div>
        </div>
      </Card.Body>
    </Card>
    );
};

export default Course;