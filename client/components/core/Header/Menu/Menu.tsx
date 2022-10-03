import Link from 'next/link'
import Image from 'next/image'
import { MouseEvent, RefObject, useState } from 'react'
import styles from '../Header.module.scss'
import MenuContent from '../../../ui/MenuContent/MenuContent'
import Auth from '../../../../pages/auth'
import Search from '../../../../pages/search'
import Category from '../../../Category/Category'
import Cart from '../../../../pages/cart'
import Wishlist from '../../../../pages/wishlist'

interface MenuProps {
    openMenu: (event: React.MouseEvent<HTMLElement>) => void
    closeMenu: (event: React.MouseEvent<HTMLElement>) => void
    menuRef: RefObject<HTMLDivElement>
    menuContentRef: RefObject<HTMLDivElement>
}

const Menu = ({ openMenu, closeMenu, menuRef, menuContentRef }: MenuProps) => {
    const [visibleContent, setVisibleContent] = useState<
        'auth' | 'search' | 'cart' | 'wishlist' | 'category'
    >('category')

    const HandleCategoryVisible = (e: MouseEvent<HTMLElement, globalThis.MouseEvent>): void => {
        e.preventDefault()
        setVisibleContent('category')
        openMenu(e)
    }

    const HandleSearchVisible = (e: MouseEvent<HTMLElement, globalThis.MouseEvent>): void => {
        e.preventDefault()
        setVisibleContent('search')
        openMenu(e)
    }

    const HandleCartVisible = (e: MouseEvent<HTMLElement, globalThis.MouseEvent>): void => {
        e.preventDefault()
        setVisibleContent('cart')
        openMenu(e)
    }

    const HandleWishListVisible = (e: MouseEvent<HTMLElement, globalThis.MouseEvent>): void => {
        e.preventDefault()
        setVisibleContent('wishlist')
        openMenu(e)
    }

    const HandleAuthVisible = (e: MouseEvent<HTMLElement, globalThis.MouseEvent>): void => {
        e.preventDefault()
        setVisibleContent('auth')
        openMenu(e)
    }

    return (
        <div className={styles.menu + ' ' + styles.menuOpen} ref={menuRef}>
            <div className={styles.menuTop}>
                <nav className={styles.menuNavTop}>
                    <div onClick={(e) => HandleCategoryVisible(e)} className={styles.lineLink}>
                        <Image src="/icons8-jewel.svg" width="20" height="20" alt="Search" />
                        Иследовать
                    </div>
                </nav>
                <Link className={styles.menuTitle} href="/">
                    <a className={styles.menuTitleLink}>Busina Zhelaniy</a>
                </Link>

                <div className={styles.menuSide}>
                    <ul>
                        <li>
                            <Link href="/search">
                                <a onClick={(e) => HandleSearchVisible(e)}>
                                    <Image
                                        src="/search-svgrepo-com.svg"
                                        width="24"
                                        height="24"
                                        alt="Search"
                                    />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/cart">
                                <a onClick={(e) => HandleCartVisible(e)}>
                                    <Image
                                        src="/bag-svgrepo-com.svg"
                                        width="24"
                                        height="24"
                                        alt="Cart"
                                    />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/wishlist">
                                <a onClick={(e) => HandleWishListVisible(e)}>
                                    <Image
                                        src="/add-favorite-svg.svg"
                                        width="24"
                                        height="24"
                                        alt="Wishlist"
                                    />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/auth">
                                <a onClick={(e) => HandleAuthVisible(e)}>
                                    {' '}
                                    <Image
                                        src="/account-svg.svg"
                                        width="24"
                                        height="24"
                                        alt="account"
                                    />
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <MenuContent menuContentRef={menuContentRef} closeMenu={closeMenu}>
                {visibleContent === 'category' && <Category />}
                {visibleContent === 'search' && <Search />}
                {visibleContent === 'cart' && <Cart />}
                {visibleContent === 'wishlist' && <Wishlist />}
                {visibleContent === 'auth' && <Auth />}
            </MenuContent>
        </div>
    )
}

export default Menu
