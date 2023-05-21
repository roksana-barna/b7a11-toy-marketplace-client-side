import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <div className='w-9/12 mx-auto mt-10'>
            <h2 className='text-teal-500 font-bold text-2xl'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
            <p className='text-teal-400'>answer:What is access token and refresh token?
                Refresh tokens allow us to balance our users' access needs with your organization's security practices. Access tokens help users get the resources they need to complete their tasks, but such tokens can also expose your organization to data compromise or other malicious actions if a hacker is able to steal them.</p>
            <p className='mt-5'><li>Store it in local browser storage. ...</li>
                <li>Store it in a cookie in client side, it can be safer than local browser storage.
                </li>
                <li>Don't store the token but store username and password in the browser or client-side cookie, and then retrieve a new token by sending credentials silently.</li>
            </p>
            <div>
                <h2 className='text-teal-500 font-bold text-2xl  mt-10'>Compare SQL and NoSQL databases?

                </h2>
                <p className='text-teal-800'>answer:SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions.NoSQL stands for Not only SQL. It is a type of database that uses non-relational data structures.
                    SQL works by allowing users to query, insert, delete, and update records in relational databases.
                </p>
            </div>
            <div>
                <h2 className='text-teal-500 font-bold text-2xl  mt-10'>What is express js? What is Nest JS?
                </h2>
                <p className='text-teal-800'>answer:
                    Express is a minimalist and flexible framework that is easy to use and has a large community of developers.NestJS is a Node.js framework for building server-side applications. It is based on TypeScript and JavaScript. ExpressJS has 100x more public references to the package found in GitHub projects than NestJS. </p>
            </div>
            <div>
                <h2 className='text-teal-500 font-bold text-2xl mt-10 '>What is MongoDB aggregate and how does it work?</h2>
                <p className='text-teal-800 mb-10'>The aggregation pipeline allows us to perform complex operations that will allow any range of insights into our collections.Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
            </div>
        </div>
    );
};

export default Blog;