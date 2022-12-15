import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from './AboutMe.module.scss'

const AboutMe = () => {
    return (
        <div className={styles.container}>
            <div className={styles.page}>
                <div className={styles.leftBlock}>
                    <h1 className={styles.title}>
                        Украшения ручной
                        <br /> работы из натуральных
                        <br /> камней
                    </h1>
                    <h3 className={styles.heading}>СПРАВЕДЛИВЫЕ ЦЕНЫ</h3>
                    <p className={styles.text}>
                        Таким образом, граница обучения кадров позволяет оценить значение
                        экспериментов, поражающих по своей масштабности и грандиозности.
                    </p>
                    <h3 className={styles.heading}>ВЫСОКОГО КАЧЕСТВА</h3>
                    <p className={styles.text}>
                        Задача организации, в особенности же социально-экономическое развитие играет
                        определяющее значение для первоочередных требований. Разнообразный и богатый
                        опыт говорит нам, что постоянный количественный рост и сфера нашей
                        активности говорит о возможностях поэтапного и последовательного развития
                        общества
                    </p>
                    <Link href="/">
                        <a className={styles.moreLink}>УЗНАТЬ БОЛЬШЕ</a>
                    </Link>
                </div>
                <div className={styles.imageBlock}>
                    <Image src="/aboutme.jpg" alt="aboutme" width={650} height={750} />
                </div>
            </div>
        </div>
    )
}

export default AboutMe
