import React from 'react';
import { Card } from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
    return (
        <div className='mt-5'>
            <Card className="mb-4">
            <Card.Header><h3>what is `cors`?</h3></Card.Header>
                <Card.Body>
                    <Card.Text>
                    CORS is applied to requests when an Origin header is included in the request. This includes requests made from JavaScript and POST requests. It's not applied all resources. The origin is the protocol, host and port that is making the request. Requests made by JavaScript use the origin that loaded the JavaScript, not the origin that it was loaded from.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className="mb-4">
            <Card.Header><h3>Why are you using `firebase`? What other options do you have to implement authentication?</h3></Card.Header>
                <Card.Body>
                    <Card.Text>
                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className="mb-4">
            <Card.Header><h3>How does private routes works?</h3></Card.Header>
                <Card.Body>
                    <Card.Text>
                    Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.

                    The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className="mb-4">
            <Card.Header><h3>What is Node? How does Node work?</h3></Card.Header>
                <Card.Body>
                    <Card.Text>
                    Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node.js wastes no time or resources on waiting for I/O requests to return.

                    In the traditional approach to creating web servers, for each incoming request or connection the server spawns a new thread of execution or even forks a new process to handle the request and send a response. Conceptually, this makes perfect sense, but in practice it incurs a great deal of overhead.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blog;