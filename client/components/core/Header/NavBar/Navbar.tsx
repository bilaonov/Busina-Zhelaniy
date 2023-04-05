import Link from 'next/link'
import React, { Dispatch, SetStateAction, useState } from 'react'
import BlurImage from '../../../ui/BlurImage/BlurImage'

import styles from './NavBar.module.scss'
import Category from '../../../Category/Category'
import Collection from '../../../Collection/Collection'
import { useMediaQuery } from 'react-responsive'
import Mobile from '../../../ui/Adoptation/Mobile/Mobile'
import Desktop from '../../../ui/Adoptation/Desktop/Desktop'

interface NavbarProps {
    setVisible: Dispatch<SetStateAction<boolean>>
}


const Tablet = ({ children }: any) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
}

const Navbar: React.FC<NavbarProps> = ({ setVisible }) => {
    const [isVisible, setIsVisible] = useState<
        'jewelry' | 'collection' | 'gift' | 'materials' | null
    >(null)

    return (
        <>
            <Desktop>
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
                </div>

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
            </Desktop>
            <Tablet>Tablet</Tablet>
            <Mobile>
                {isVisible === null && (
                    <div className={styles.mobileNav}>
                        <div className={styles.mobileNavContent}>
                            <h3 className={styles.mobileNavTitle}>НАВИГАЦИЯ</h3>
                            <div className={styles.mobileNavSection}>
                                <div className={styles.mobileNavLinks}>
                                    <Link href={'/'}>
                                        <a className={styles.mobileNavLink}>
                                            <p>Главная</p>
                                            <span id="arrow"></span>
                                        </a>
                                    </Link>
                                </div>
                                <div className={styles.mobileNavLinks}>
                                    <Link href={'/store'}>
                                        <a className={styles.mobileNavLink}>
                                            <p>Наш магазин</p>
                                            <span id="arrow"></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={styles.mobileNavContent}>
                            <h3 className={styles.mobileNavTitle}>МАГАЗИН</h3>
                            <div className={styles.mobileNavSection}>
                                <div className={styles.mobileNavLinks}>
                                    <div onClick={() => setIsVisible('jewelry')}>
                                        <div className={styles.mobileNavLink}>
                                            <p>Ювелирные изделия</p>
                                            <span id="arrow"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.mobileNavLinks}>
                                    <div onClick={() => setIsVisible('collection')}>
                                        <div className={styles.mobileNavLink}>
                                            <p>Коллекции</p>
                                            <span id="arrow"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.mobileNavLinks}>
                                    <div onClick={() => setIsVisible('gift')}>
                                        <div className={styles.mobileNavLink}>
                                            <p>Подарки</p>
                                            <span id="arrow"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.mobileNavLinks}>
                                    <div onClick={() => setIsVisible('materials')}>
                                        <div className={styles.mobileNavLink}>
                                            <p>Материалы</p>
                                            <span id="arrow"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={styles.mobileNavContent}
                            onMouseEnter={() => setIsVisible(null)}
                        >
                            <h3 className={styles.mobileNavTitle}>УЗНАТЬ БОЛЬШЕ</h3>
                            <div className={styles.mobileNavSection}>
                                <div className={styles.mobileLinks}>
                                    <Link href={'/'}>
                                        <a className={styles.mobileNavLink}>
                                            <p>Наша история</p>
                                            <span id="arrow"></span>
                                        </a>
                                    </Link>
                                </div>
                                <div className={styles.mobileLinks}>
                                    <Link href={'/'}>
                                        <a className={styles.mobileNavLink}>
                                            <p> Обслуживание клиентов</p>
                                            <span id="arrow"></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {isVisible === 'jewelry' && (
                    <Category setVisible={setVisible} setIsVisible={setIsVisible} />
                )}
                {isVisible === 'collection' && <Collection />}
            </Mobile>
        </>
    )
}

export default Navbar
