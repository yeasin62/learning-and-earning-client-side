import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import LeftSideBar from '../components/Sidebar/LeftSideBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
            <Row>
                <Col md={4}>
                    <LeftSideBar></LeftSideBar>
                </Col>
                <Col md={8}>
                    <Outlet></Outlet>
                </Col>
            </Row>
        </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;