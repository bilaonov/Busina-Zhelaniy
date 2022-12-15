import React from 'react'
import styles from '../../Home/ProductPopularSection/ProductPopularSection.module.scss'

const ProductColor = () => {
    return (
        <>
            <div className={styles.nameColor}>{product.colors.nameColor}</div>
            <div className={styles.color}>
                <span style={{ background: product.colors }}></span>
            </div>{' '}
        </>
    )
}

export default ProductColor
