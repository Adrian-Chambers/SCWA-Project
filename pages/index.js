import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';
import axios from 'axios'
import Book from "./book.js"

export default function Home() {

  const [search_terms, setSearchTerms] = React.useState("React");
  const [results, setResults] = React.useState([]);
  const apiKey = "AIzaSyA3bJrsoaW28rHNwTOb22JKk9WiomM1Qqo";
  let boolResults = false;

  function handleChange(event){
    // Get text in search bar
    const value = event.target.value;
    setSearchTerms(value);
  }

  function handleSubmit(event){
    // Prevent default redirect behavior
    event.preventDefault()

    // Get info from Google Books
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search_terms + "&maxResults=3&key=" + apiKey,
      {validateStatus: function(status){
        return status < 500; // Reject if the status code is less than 500
      }, 
    })
    .then(data => {
      setResults(data.data.items)
      console.log(results)
    })
    .catch((error) => {
      console.error(error);
    })
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className={styles.search}>
          <form onSubmit={handleSubmit}>
          <label htmlFor="search">Search Terms</label><br />
          <input 
              type="text" 
              required
              minLength="1"
              placeholder='React'
              id="search"
              onChange={handleChange}
          /><br />
          <button type="submit">Search Books</button>
          </form>
        </div>

        <div className={styles.results}>
          <div className={styles.resultsHeader}>
            <p className={styles.headerItem}>Title</p>
            <p className={styles.headerItem}>Subtitle</p>
            <p className={styles.headerItem}>Author</p>
            <p className={styles.headerItem}>Thumbnail</p>
          </div>
          {results.map(b =>(
            <Book book={b}></Book>
          ))}
        </div>

      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>


    </div>
    
  )
}