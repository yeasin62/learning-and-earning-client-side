import React from 'react';
import { Accordion } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div className='mt-5'>
            <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
            <Accordion.Header>Which versions of React include Hooks?</Accordion.Header>
            <Accordion.Body>
            Starting with 16.8.0, React includes a stable implementation of React Hooks for:

            React DOM
            React Native
            React DOM Server
            React Test Renderer
            React Shallow Renderer
            Note that to enable Hooks, all React packages need to be 16.8.0 or higher. Hooks won’t work if you forget to update, for example, React DOM.

            React Native 0.59 and above support Hooks.


            </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="1">
            <Accordion.Header>What can I do with Hooks that I couldn’t with classes?</Accordion.Header>
            <Accordion.Body>
            Hooks offer a powerful and expressive new way to reuse functionality between components. “Building Your Own Hooks” provides a glimpse of what’s possible. This article by a React core team member dives deeper into the new capabilities unlocked by Hooks.


            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>How much of my React knowledge stays relevant?</Accordion.Header>
            <Accordion.Body>
            Hooks are a more direct way to use the React features you already know — such as state, lifecycle, context, and refs. They don’t fundamentally change how React works, and your knowledge of components, props, and top-down data flow is just as relevant.

            Hooks do have a learning curve of their own. If there’s something missing in this documentation, raise an issue and we’ll try to help.


            </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="3">
            <Accordion.Header>Should I use Hooks, classes, or a mix of both?</Accordion.Header>
            <Accordion.Body>
            When you’re ready, we’d encourage you to start trying Hooks in new components you write. Make sure everyone on your team is on board with using them and familiar with this documentation. We don’t recommend rewriting your existing classes to Hooks unless you planned to rewrite them anyway (e.g. to fix bugs).

            You can’t use Hooks inside a class component, but you can definitely mix classes and function components with Hooks in a single tree. Whether a component is a class or a function that uses Hooks is an implementation detail of that component. In the longer term, we expect Hooks to be the primary way people write React components.


            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
            <Accordion.Header>Do Hooks work with static typing?</Accordion.Header>
            <Accordion.Body>
            Hooks were designed with static typing in mind. Because they’re functions, they are easier to type correctly than patterns like higher-order components. The latest Flow and TypeScript React definitions include support for React Hooks.

            Importantly, custom Hooks give you the power to constrain React API if you’d like to type them more strictly in some way. React gives you the primitives, but you can combine them in different ways than what we provide out of the box.


            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
            <Accordion.Header>How to test components that use Hooks?</Accordion.Header>
            <Accordion.Body>
            From React’s point of view, a component using Hooks is just a regular component. If your testing solution doesn’t rely on React internals, testing components with Hooks shouldn’t be different from how you normally test components.
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </div>
    );
};

export default FAQ;