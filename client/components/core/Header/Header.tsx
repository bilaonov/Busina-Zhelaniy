import Head from 'next/head'
import styles from './Header.module.scss'

import Link from 'next/link'
import Image from 'next/image'
import { MouseEvent, useRef, useState } from 'react'
import MenuContent from './MenuContent/MenuContent'
import Navbar from './NavBar/Navbar'
import Search from '../../../pages/search'
import Cart from '../../../pages/cart'

import Auth from '../../../pages/auth'
import { useDispatch, useSelector } from 'react-redux'
import { IAuthState, signOut, userState } from '../../../store/features/authSlice'
import { supabase } from '../../../lib/supabase'
import Button from '../../ui/Button/Button'
import Mobile from '../../ui/Adoptation/Mobile/Mobile'
import { useMediaQuery } from 'react-responsive'
import { getFavorite } from '../../../store/features/wishlistSlice'
import { getCart } from '../../../store/features/cartSlice'
import WishList from '../../../pages/wishlist'
import { getVisible, onVisible } from '../../../store/features/megaMenuSlice'

const Header = () => {
    const ref = useRef<any>(null)
    const dispatch = useDispatch()
    const favoriteCount = useSelector(getFavorite)
    const { visible } = useSelector(getVisible)
    const { items } = useSelector(getCart)
    const data: IAuthState = useSelector(userState)
    const [visibleContent, setVisibleContent] = useState<
        'auth' | 'search' | 'cart' | 'wishlist' | 'navbar' | null
    >(null)

    const HandleCategoryVisible = (
        e: MouseEvent<HTMLElement, globalThis.MouseEvent>,
        category: string,
    ): void => {
        e.preventDefault()
        switch (category) {
            case 'navbar':
                setVisibleContent('navbar')
                break
            case 'search':
                setVisibleContent('search')
                break
            case 'cart':
                setVisibleContent('cart')
                break
            case 'wishlist':
                setVisibleContent('wishlist')
                break
            case 'auth':
                setVisibleContent('auth')
                break
        }
        dispatch(onVisible())
    }

    const onSignOut = async () => {
        dispatch(signOut(await supabase.auth.signOut()))
    }

    const handleCloseMenu = () => {
        dispatch(onVisible())

        setVisibleContent(null)
    }
    const isMobile = useMediaQuery({ maxWidth: 767 })

    return (
        <>
            <Head>
                <title>Busina Zhelaniy</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={styles.main} ref={ref}>
                <div className={styles.menu + ' ' + styles.menuOpen}>
                    <div className={styles.menuTop}>
                        <nav className={styles.menuNavTop}>
                            {!isMobile && !visible && (
                                <div>
                                    <div
                                        className={styles.lineLink}
                                        onClick={(e) => HandleCategoryVisible(e, 'navbar')}
                                    >
                                        <Image
                                            src="/icons8-jewel.svg"
                                            width="20"
                                            height="20"
                                            alt="Search"
                                        />

                                        <p>Иследовать</p>
                                    </div>
                                </div>
                            )}

                            {!visible && (
                                <Mobile className={styles.menuBurger}>
                                    <div onClick={(e) => HandleCategoryVisible(e, 'navbar')}>
                                        <Image
                                            src="/burger.png"
                                            width="20"
                                            height="20"
                                            alt="Search"
                                        />
                                    </div>
                                </Mobile>
                            )}
                            {visible && (
                                <div className={styles.menuClose} onClick={handleCloseMenu}>
                                    <Image
                                        src="/closeicon.png"
                                        width="20"
                                        height="20"
                                        alt="Search"
                                    />
                                </div>
                            )}
                        </nav>
                        <div className={styles.menuTitle}>
                            <Link href="/">
                                <a className={styles.menuTitleLink}>Busina Zhelaniy</a>
                            </Link>
                        </div>

                        <div className={styles.menuSide}>
                            <ul>
                                <li>
                                    <a onClick={(e) => HandleCategoryVisible(e, 'search')}>
                                        <Image
                                            src="/search-svgrepo-com.svg"
                                            width="24"
                                            height="24"
                                            alt="Search"
                                        />
                                    </a>
                                </li>
                                <li>
                                    {items.length ? <span>{items.length}</span> : null}
                                    <a onClick={(e) => HandleCategoryVisible(e, 'cart')}>
                                        <Image
                                            src="/bag-svgrepo-com.svg"
                                            width="24"
                                            height="24"
                                            alt="Cart"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a onClick={(e) => HandleCategoryVisible(e, 'wishlist')}>
                                        {favoriteCount.length ? (
                                            <span>{favoriteCount.length}</span>
                                        ) : null}
                                        <Image
                                            src="/add-favorite-svg.svg"
                                            width="24"
                                            height="24"
                                            alt="Wishlist"
                                        />
                                    </a>
                                </li>
                                {!data.session && !data.session ? (
                                    <li>
                                        <a onClick={(e) => HandleCategoryVisible(e, 'auth')}>
                                            {' '}
                                            <Image
                                                src="/account-svg.svg"
                                                width="24"
                                                height="24"
                                                alt="account"
                                            />
                                        </a>
                                    </li>
                                ) : (
                                    <li>
                                        <Button
                                            variant="outline"
                                            title={'Выйти'}
                                            onClick={onSignOut}
                                        />
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <MenuContent visibleContent={visibleContent}>
                        {visibleContent === 'navbar' && <Navbar />}
                        {visibleContent === 'search' && <Search />}
                        {visibleContent === 'cart' && <Cart />}
                        {visibleContent === 'wishlist' && <WishList />}
                        {visibleContent === 'auth' && <Auth />}
                    </MenuContent>
                </div>
            </div>
        </>
    )
}

export default Header
