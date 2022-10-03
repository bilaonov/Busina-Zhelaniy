import React from 'react'
import styles from '../core/Header/Header.module.scss'

const Category = () => {
    return (
        <>
            <div className={styles.column}>
                <h4 className={styles.columnTitle}>New In</h4>
                <a href="#" className={styles.lineLink}>
                    Blouses
                </a>
                <h4 className={styles.columnTitle}>Discounts</h4>
                <a href="#" className={styles.lineLink}>
                    T-Shirts
                </a>
            </div>
            <div className={styles.column}>
                <h4 className={styles.columnTitle}>Trending</h4>
                <a href="#" className={styles.lineLink}>
                    New Season
                </a>
            </div>
        </>
    )
}

export default Category
