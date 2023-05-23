import React from "react";
import { Helmet } from "react-helmet";

const Blogs = () => {
  return (
    <div className="my-28">
      <Helmet>

        <title>Robotics Toy Blogs</title>

      </Helmet>
      <div className=" rounded shadow p-4 text-purple-500">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2 text-black">
            Q1: What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h3>
          <p className="leading-loose">
            Access Token: It is a credential used for authentication and
            authorization. It grants access to protected resources on the
            server. Short-lived and expires after a certain period. Stored in
            memory during the user's session.
            <br />
            <br />
            Refresh Token: It is a credential used to obtain a new access token.
            It helps maintain persistent authentication sessions. Long-lived and
            has a longer expiration time. Stored securely, such as in an
            HTTP-only cookie or secure storage mechanism.
            <br />
            <br />
            Storage on the client-side: Access tokens are stored in memory
            during the session. Refresh tokens are securely stored, such as in
            an HTTP-only cookie or secure storage mechanism. Use encryption and
            follow security best practices to protect against theft or misuse.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2 text-black">
            Q2:Compare SQL and NoSQL databases?
          </h3>
          <p className="leading-loose">
            SQL Databases: Structured Query Language (SQL) databases are based
            on a relational data model. They use structured schemas to define
            tables, columns, and relationships between data.
            <br />
            <br />
            NoSQL Databases: NoSQL databases, also known as "not only SQL,"
            provide a flexible data model. NoSQL databases are suitable for
            unstructured or semi-structured data.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2 text-black">
            Q3: What is express js? What is Nest JS?
          </h3>
          <p className="leading-loose">
            Express.js is known for its simplicity and lightweight nature,
            allowing developers to create web servers quickly. It offers routing
            capabilities, middleware support, and easy integration with various
            template engines and databases.
            <br />
            NestJS is a progressive, extensible, and TypeScript-based framework
            for building scalable and maintainable server-side applications. It
            is built on top of Express.js, utilizing its features and middleware
            ecosystem
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-black">
            Q4:What is MongoDB aggregate and how does it work?
          </h3>
          <p className="leading-loose">
            MongoDB's aggregate is a powerful feature that allows for advanced
            data processing and analysis within the database. It provides a way
            to perform complex operations on collections of documents and
            retrieve aggregated results.
            <br />
            <br />
            1.Input Documents:
            The aggregate pipeline
            takes an input collection or set of documents as its starting point.
            <br />

            2.Pipeline Stages:

            Each stage in the pipeline performs a specific
            operation on the documents. The stages can include operations such
            as filtering, grouping, projecting, sorting, joining, and more.
            <br />
            3. Documents  Flow through Stages:
            The documents flow through
            the pipeline, passing through each stage in the defined order. At
            each stage, the documents are transformed based on the operation
            performed.
            <br />
            4. Output Documents:
            After the documents have passed through
            all the stages, the final transformed results are returned as
            output. The output can be a new collection, a result set, or further
            processed in subsequent stages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
