import Link from 'next/link'
import Image from 'next/image'
import { MouseEvent, RefObject, useState } from 'react'
import styles from '../Header.module.scss'
import MenuContent from '../MenuContent/MenuContent'
import Auth from '../../../../pages/auth/auth'
import Search from '../../../../pages/search'
import Category from '../../../Category/Category'
import Cart from '../../../../pages/cart'
import Wishlist from '../../../../pages/wishlist'

const Menu = () => {
    const [visibleContent, setVisibleContent] = useState<
        'auth' | 'search' | 'cart' | 'wishlist' | 'category'
    >('category')

    const [visible, setVisible] = useState<boolean>(false)

    const HandleCategoryVisible = (
        e: MouseEvent<HTMLElement, globalThis.MouseEvent>,
        openMenu: string,
    ): void => {
        e.preventDefault()
        switch (openMenu) {
            case 'category':
                setVisibleContent('category')
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

    return (
        <div className={styles.menu + ' ' + styles.menuOpen}>
            <div className={styles.menuTop}>
                <nav className={styles.menuNavTop}>
                    <div
                        onClick={(e) => HandleCategoryVisible(e, 'category')}
                        className={styles.lineLink}
                    >
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
                    </ul>
                </div>
            </div>
            <MenuContent visible={visible} setVisible={setVisible}>
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
