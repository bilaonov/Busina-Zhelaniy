import Head from 'next/head'
import styles from './Header.module.scss'

import Link from 'next/link'
import Image from 'next/image'
import { MouseEvent, useState } from 'react'
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
import Desktop from '../../ui/Adoptation/Desktop/Desktop'
import Tablet from '../../ui/Adoptation/Tablet/Tablet'
import { useMediaQuery } from 'react-responsive'
import { getFavorite } from '../../../store/features/wishlistSlice'
import WishList from '../../../pages/wishList'

const Header = () => {
    const dispatch = useDispatch()
    const favoriteCount = useSelector(getFavorite)
    const data: IAuthState = useSelector(userState)
    const [visibleContent, setVisibleContent] = useState<
        'auth' | 'search' | 'cart' | 'wishlist' | 'navbar' | null
    >(null)

    const [visible, setVisible] = useState<boolean>(false)

    const HandleCategoryVisible = (
        e: MouseEvent<HTMLElement, globalThis.MouseEvent>,
        openMenu: string,
    ): void => {
        e.preventDefault()
        switch (openMenu) {
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
        setVisible(true)
    }

    const onSignOut = async () => {
        dispatch(signOut(await supabase.auth.signOut()))
    }

    const handleCloseMenu = () => {
        setVisibleContent(null)
        setVisible(false)
    }
    const isMobile = useMediaQuery({ maxWidth: 767 })

    return (
        <>
            <Head>
                <title>Busina Zhelaniy</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={styles.main}>
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
                    <MenuContent visible={visible} setVisible={setVisible}>
                        {visibleContent === 'navbar' && <Navbar setVisible={setVisible} />}
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
