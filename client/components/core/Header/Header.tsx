import Head from 'next/head'
import styles from './Header.module.scss'

import Link from 'next/link'
import Image from 'next/image'
import { MouseEvent, useState } from 'react'
import MenuContent from './MenuContent/MenuContent'
import Navbar from './NavBar/Navbar'
import Search from '../../../pages/search'
import Cart from '../../../pages/cart'
import Wishlist from '../../../pages/wishlist'
import Auth from '../../../pages/auth'
import { useDispatch, useSelector } from 'react-redux'
import { IAuthState, signOut, userState } from '../../../store/features/authSlice'
import { supabase } from '../../../lib/supabase'
import Button from '../../ui/Button/Button'



const Header = () => {
    const dispatch = useDispatch()
    const data: IAuthState = useSelector(userState)

    const [visibleContent, setVisibleContent] = useState<
        'auth' | 'search' | 'cart' | 'wishlist' | 'navbar'
    >('navbar')

    const [visible, setVisible] = useState<boolean>(false)

    const HandleCategoryVisible = (
        e: MouseEvent<HTMLElement, globalThis.MouseEvent>,
        openMenu: string,
    ): void => {
        e.preventDefault()
        switch (openMenu) {
            case 'category':
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
                            <div
                                onClick={(e) => HandleCategoryVisible(e, 'navbar')}
                                className={styles.lineLink}
                            >
                                <div className={styles.menuOpenTitleMenu}>
                                    <Image
                                        src="/icons8-jewel.svg"
                                        width="20"
                                        height="20"
                                        alt="Search"
                                    />

                                    <p>Иследовать</p>
                                </div>
                                <div className={styles.menuBurger}>
                                    <Image src="/burger.png" width="20" height="20" alt="Search" />
                                </div>
                            </div>
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
                        {visibleContent === 'wishlist' && <Wishlist />}
                        {visibleContent === 'auth' && <Auth />}
                    </MenuContent>
                </div>
            </div>
        </>
    )
}

export default Header
