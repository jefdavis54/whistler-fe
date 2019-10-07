import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import { GlobalStyle } from "../lib/global_styles";

const Home = () => (
  <div>
    <GlobalStyle />
    <Head>
      <title>Home</title>
      <link rel="icon" href="/static/favicon.ico" />
    </Head>

    <Nav />

    <div className="hero">
      <h1 className="title">Welcome to Next.js!</h1>
      <p className="description">
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>

      <div className="row">
        <a href="https://nextjs.org/docs" className="card">
          <h3>Documentation &rarr;</h3>
          <p>Learn more about Next.js in the documentation.</p>
        </a>
        <a href="https://nextjs.org/learn" className="card">
          <h3>Next.js Learn &rarr;</h3>
          <p>Learn about Next.js by following an interactive tutorial!</p>
        </a>
        <a href="https://github.com/zeit/next.js/tree/master/examples" className="card">
          <h3>Examples &rarr;</h3>
          <p>Find other example boilerplates on the Next.js GitHub.</p>
        </a>
      </div>
      <div>Should say 'It works!' immediately below:</div>
      <div>{process.env.TEST}</div>
    </div>
  </div>
);

export default Home;
