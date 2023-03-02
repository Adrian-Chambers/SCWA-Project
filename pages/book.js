import React from 'react';
import styles from '../styles/Home.module.css';

export default function book (book){
    if(book != null){
        return(
            <div className={styles.resultsRow}>
                <div className={styles.rowItem}>
                    <p>{book.book.volumeInfo.title}</p>
                </div>
                <div className={styles.rowItem}>
                    <p>{book.book.volumeInfo.subtitle}</p>
                </div>
                <div className={styles.rowItem}>
                    <p>{book.book.volumeInfo.authors[0]}</p>
                </div>
                <div className={styles.rowItemThumbnail}>
                    <img 
                        src={book.book.volumeInfo.imageLinks.thumbnail} 
                        alt={book.book.title}
                    />
                </div>
            </div>
        )
    }
}