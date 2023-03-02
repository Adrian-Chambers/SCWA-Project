import React from 'react';
import styles from '../styles/Home.module.css';

export default function book (book){
    // Check if book is not found
    if (!book?.book?.volumeInfo) {
        return (
            <div className={styles.resultsRow}>
            <div className={styles.rowItem}>
                <p>Not found</p>
            </div>
            </div>
        );
    }
    
    // Get values for title/subtitle/authors/thumbnail (default values provided if not found)
    const { 
        title = "Unknown Title", 
        subtitle = "", 
        authors = ["Unknown Authors"],
        imageLinks = { thumbnail: "" } 
    } = book.book.volumeInfo;

    return(
        <div className={styles.resultsRow}>
            <div className={styles.rowItem}>
                <p>{title}</p>
            </div>
            <div className={styles.rowItem}>
                <p>{subtitle}</p>
            </div>
            <div className={styles.rowItem}>
                <p>{authors.join(", ")}</p>
            </div>
            <div className={styles.rowItemThumbnail}>
                <img 
                    src={imageLinks.thumbnail} 
                    alt={title}
                />
            </div>
        </div>
    )
}