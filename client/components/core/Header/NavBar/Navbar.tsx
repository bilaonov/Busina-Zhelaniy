import Link from 'next/link'
import React, { Dispatch, SetStateAction, useState } from 'react'
import Image from 'next/image'
import BlurImage from '../../../ui/BlurImage/BlurImage'

import styles from './NavBar.module.scss'
import Category from '../../../Category/Category'
import Collection from '../../../Collection/Collection'

interface NavbarProps {
    setVisible: Dispatch<SetStateAction<boolean>>
}

const Navbar: React.FC<NavbarProps> = ({ setVisible }) => {
    const [isVisible, setIsVisible] = useState<
        'jewelry' | 'collection' | 'gift' | 'materials' | null
    >(null)

    return (
        <div className={styles.nav}>
            <div className={styles.navLeftContent}>
                <div className={styles.navSection} onMouseEnter={() => setIsVisible(null)}>
                    <h3 className={styles.navTitle}>НАВИГАЦИЯ</h3>
                    <div className={styles.navDropSection}>
                        <div className={styles.navLinks}>
                            <Link href={'/'}>
                                <a className={styles.navLink}>
                                    <p>Главная</p>
                                    <span id="arrow"></span>
                                </a>
                            </Link>
                        </div>
                        <div className={styles.navLinks}>
                            <Link href={'/store'}>
                                <a className={styles.navLink}>
                                    <p>Наш магазин</p>
                                    <span id="arrow"></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.navSection}>
                    <h3 className={styles.navTitle}>МАГАЗИН</h3>
                    <div className={styles.navDropSection}>
                        <div className={styles.navLinks}>
                            <div onMouseEnter={() => setIsVisible('jewelry')}>
                                <div className={styles.navLink}>
                                    <p>Ювелирные изделия</p>
                                    <span id="arrow"></span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.navLinks}>
                            <div onMouseEnter={() => setIsVisible('collection')}>
                                <div className={styles.navLink}>
                                    <p>Коллекции</p>
                                    <span id="arrow"></span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.navLinks}>
                            <div onMouseEnter={() => setIsVisible('gift')}>
                                <div className={styles.navLink}>
                                    <p>Подарки</p>
                                    <span id="arrow"></span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.navLinks}>
                            <div onMouseEnter={() => setIsVisible('materials')}>
                                <div className={styles.navLink}>
                                    <p>Материалы</p>
                                    <span id="arrow"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.navSection} onMouseEnter={() => setIsVisible(null)}>
                    <h3 className={styles.navTitle}>УЗНАТЬ БОЛЬШЕ</h3>
                    <div className={styles.navDropSection}>
                        <div className={styles.navLinks}>
                            <Link href={'/'}>
                                <a className={styles.navLink}>
                                    <p>Наша история</p>
                                    <span id="arrow"></span>
                                </a>
                            </Link>
                        </div>
                        <div className={styles.navLinks}>
                            <Link href={'/'}>
                                <a className={styles.navLink}>
                                    <p> Обслуживание клиентов</p>
                                    <span id="arrow"></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {isVisible === 'jewelry' && <Category setVisible={setVisible} />}
            {isVisible === 'collection' && <Collection />}

            {!isVisible && (
                <>
                    <div className={styles.navCenterContent}>
                        <div className={styles.navImage}>
                            <BlurImage src="/models1.avif" fill alt="" />
                        </div>
                    </div>
                    <div className={styles.navRightContent}>
                        <div className={styles.navImage}>
                            <BlurImage src="/models2.jpeg" fill alt="" />
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Navbar
