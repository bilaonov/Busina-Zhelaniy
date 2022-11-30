import React from 'react'
import Meta from '../core/Meta/Meta'
import styles from './Category.module.scss'

const Category = () => {
    return (
        <>
            <Meta title="Категории" />
            <div className={styles.category}>
                <div className={styles.categorySelect}>
                    <div className={styles.selectBlock}>
                        <div className={styles.categoryTitle}>
                            <h3>Категории</h3>
                        </div>
                        <div className={styles.selectItems}>
                            <div>
                                <p>Ювелирные изделия</p>
                                <span id="arrow"></span>
                            </div>
                            <div>
                                <p>Коллекции</p>
                                <span id="arrow"></span>
                            </div>
                            <div>
                                <p>Ювелирные изделия</p>
                                <span id="arrow"></span>
                            </div>
                            <div>
                                <p>Ювелирные изделия</p>
                                <span id="arrow"></span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.categoryBlock2}>
                        <div className={styles.categoryTitle}>
                            <h3>Ювелирные изделия</h3>
                        </div>
                        <div>
                            <p>Кольца</p>
                            <span>(20)</span>
                        </div>
                        <div>
                            <p>Кольца</p>
                            <span>(20)</span>
                        </div>
                        <div>
                            <p>Кольца</p>
                            <span>(20)</span>
                        </div>
                        <div>
                            <p>Кольца</p>
                            <span>(20)</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category
