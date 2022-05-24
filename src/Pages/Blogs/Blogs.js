import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div className='m-10'>
                <h2 className='text-3xl font-semi-bold text-cyan-500'>1. How will you improve the performance of a React Application?</h2>
                <p className='text-xl'>By keeping component state local where necessary, memoizing React components to prevent unnecessary re-renders, code-splitting in React using dynamic import, windowing or list virtualization in React, Lazy loading images in React i can improve the performance of a react application.</p>
            </div>
            <div className='m-10'>
                <h2 className='text-3xl font-semi-bold text-cyan-500'>2. What are the different ways to manage a state in a React application?</h2>
                <p className='text-xl'>
                    There are four main types of state you need to properly manage in your React apps. Local state, Global state, Server state, URL state.Local state is most often managed in React using the useState hook.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.URL state is often missing as a category of state, but it is an important one.In many cases, a lot of major parts of our application rely upon accessing URL state.
                </p>
            </div>
            <div className='m-10'>
                <h2 className='text-3xl font-semi-bold text-cyan-500'>3. How does prototypical inheritance work?</h2>
                <p className='text-xl'>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.</p>
            </div>
            <div className='m-10'>
                <h2 className='text-3xl font-semi-bold text-cyan-500'>4.Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                <p className='text-xl'>One should never update the state directly because of, If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. You will lose control of the state across all components.</p>
            </div>
            {/* <div className='m-10'>
                <h2 className='text-3xl font-semi-bold text-cyan-500'>
                    5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name.
                </h2>
                <p className='text-xl'>

                </p>
            </div> */}
            <div className='m-10'>
                <h2 className='text-3xl font-semi-bold text-cyan-500'>6. What is a unit test? Why should write unit tests?</h2>
                <p className='text-xl'>Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.</p>
            </div>


        </div>
    );
};

export default Blogs;