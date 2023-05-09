import Link from 'next/link'
import React, { useState } from 'react'
import BlurImage from '../../../ui/BlurImage/BlurImage'

import Category from '../../../Category/Category'
import Collection from '../../../Collection/Collection'
import Mobile from '../../../ui/Adoptation/Mobile/Mobile'
import Desktop from '../../../ui/Adoptation/Desktop/Desktop'
import Tablet from '../../../ui/Adoptation/Tablet/Tablet'

import styles from './NavBar.module.scss'
import NavigationSection from '../../../ui/Navigation/NavigationSection'
import NavigationLink from '../../../ui/Navigation/NavigationLink'
import NavigationTitle from '../../../ui/Navigation/NavigationTitle'
import NavigationItemClickable from '../../../ui/Navigation/NavigationItemClickable'

const Navbar: React.FC = () => {
    const [isVisible, setIsVisible] = useState<
        'jewelry' | 'collection' | 'gift' | 'materials' | null
    >(null)

    return (
        <>
            <Desktop>
                <div className={styles.nav}>
                    <div className={styles.navLeftContent}>
                        <div className={styles.navSection} onMouseEnter={() => setIsVisible(null)}>
                            <NavigationTitle className={styles.navTitle} title="НАВИГАЦИЯ" />
                            <NavigationSection className={styles.navDropSection}>
                                <NavigationLink href="/" text="Главная" />
                                <NavigationLink href="/store" text="Наш магазин" />
                            </NavigationSection>
                        </div>
                        <div className={styles.navSection}>
                            <NavigationTitle className={styles.navTitle} title="МАГАЗИН" />
                            <NavigationSection className={styles.navDropSection}>
                                <NavigationItemClickable
                                    text="Ювелирные изделия"
                                    onMouseEnter={() => setIsVisible('jewelry')}
                                />
                                <NavigationItemClickable
                                    text="Коллекции"
                                    onMouseEnter={() => setIsVisible('collection')}
                                />
                                <NavigationItemClickable
                                    text="Подарки"
                                    onMouseEnter={() => setIsVisible('gift')}
                                />
                                <NavigationItemClickable
                                    text="Материалы"
                                    onMouseEnter={() => setIsVisible('materials')}
                                />
                            </NavigationSection>
                        </div>
                        <div className={styles.navSection} onMouseEnter={() => setIsVisible(null)}>
                            <NavigationTitle className={styles.navTitle} title="УЗНАТЬ БОЛЬШЕ" />
                            <NavigationSection className={styles.navDropSection}>
                                <NavigationLink href="/" text="Наша история" />
                                <NavigationLink href="/" text="Обслуживание клиентов" />
                            </NavigationSection>
                        </div>
                    </div>

                    {isVisible === 'jewelry' && <Category />}
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
            </Desktop>
            <Tablet>
                {isVisible === null && (
                    <div className={styles.tabletNav}>
                        <div className={styles.tabletNavContent}>
                            <NavigationTitle className={styles.tabletNavTitle} title="НАВИГАЦИЯ" />
                            <NavigationSection className={styles.tabletNavSection}>
                                <NavigationLink href="/" text="Главная" />
                                <NavigationLink href="/store" text="Наш магазин" />
                            </NavigationSection>
                            <div className={styles.tabletNavContent}>
                                <NavigationTitle title="МАГАЗИН" />
                                <NavigationSection className={styles.tabletNavSection}>
                                    <NavigationItemClickable
                                        onClick={() => setIsVisible('jewelry')}
                                        text="Ювелирные изделия"
                                    />
                                    <NavigationItemClickable
                                        onClick={() => setIsVisible('collection')}
                                        text="Коллекции"
                                    />
                                    <NavigationItemClickable
                                        onClick={() => setIsVisible('gift')}
                                        text="Подарки"
                                    />
                                    <NavigationItemClickable
                                        onClick={() => setIsVisible('materials')}
                                        text="Материалы"
                                    />
                                </NavigationSection>
                            </div>
                            <div
                                className={styles.tabletNavContent}
                                onMouseEnter={() => setIsVisible(null)}
                            >
                                <NavigationTitle title="УЗНАТЬ БОЛЬШЕ" />
                                <NavigationSection>
                                    <NavigationLink href="/" text="Наша история" />
                                    <NavigationLink href="/" text="Обслуживание клиентов" />
                                </NavigationSection>
                            </div>
                        </div>
                    </div>
                )}
                {!isVisible && (
                    <>
                        <div className={styles.tabletRightContent}>
                            <div className={styles.navImage}>
                                <BlurImage src="/models2.jpeg" fill alt="" />
                            </div>
                        </div>
                    </>
                )}
                {isVisible === 'jewelry' && <Category setIsVisible={setIsVisible} />}
                {isVisible === 'collection' && <Collection />}
            </Tablet>
            <Mobile>
                {isVisible === null && (
                    <div className={styles.mobileNav}>
                        <div className={styles.mobileNavContent}>
                            <NavigationTitle className={styles.mobileNavTitle} title="НАВИГАЦИЯ" />
                            <NavigationSection className={styles.mobileNavSection}>
                                <NavigationLink href="/" text="Главная" />
                                <NavigationLink href="/store" text="Наш магазин" />
                            </NavigationSection>
                        </div>
                        <div className={styles.mobileNavContent}>
                            <NavigationTitle title="МАГАЗИН" />
                            <NavigationSection>
                                <NavigationItemClickable
                                    onClick={() => setIsVisible('jewelry')}
                                    text="Ювелирные изделия"
                                />
                                <NavigationItemClickable
                                    onClick={() => setIsVisible('collection')}
                                    text="Коллекции"
                                />
                                <NavigationItemClickable
                                    onClick={() => setIsVisible('gift')}
                                    text="Подарки"
                                />
                                <NavigationItemClickable
                                    onClick={() => setIsVisible('materials')}
                                    text="Материалы"
                                />
                            </NavigationSection>
                        </div>
                        <div
                            className={styles.mobileNavContent}
                            onMouseEnter={() => setIsVisible(null)}
                        >
                            <NavigationTitle title="УЗНАТЬ БОЛЬШЕ" />
                            <NavigationSection>
                                <NavigationLink href="/" text="Наша история" />
                                <NavigationLink href="/" text="Обслуживание клиентов" />
                            </NavigationSection>
                        </div>
                    </div>
                )}
                {isVisible === 'jewelry' && <Category setIsVisible={setIsVisible} />}
                {isVisible === 'collection' && <Collection />}
            </Mobile>
        </>
    )
}

export default Navbar
