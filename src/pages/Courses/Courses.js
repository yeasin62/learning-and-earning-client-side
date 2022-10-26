import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';


const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <Container>
            <Row xs={1} md={2} className="g-4">
                {
                    courses.map(singleCourse => <SingleCourse key={singleCourse.course_id} course={singleCourse}></SingleCourse>)
                }
            </Row>
        </Container>
    );
};

export default Courses;