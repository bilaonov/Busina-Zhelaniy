import Link from 'next/link'
import Image from 'next/image'
import { RefObject } from 'react'

interface IntrinsicAttributes {
    openMenu: (event: React.MouseEvent<HTMLElement>) => void
    closeMenu: (event: React.MouseEvent<HTMLElement>) => void
    menuRef: RefObject<HTMLDivElement>
    menuContentRef: RefObject<HTMLDivElement>
}

const Menu = ({ openMenu, closeMenu, menuRef, menuContentRef }: IntrinsicAttributes) => {
    return (
        <div className="menu" ref={menuRef}>
            <div className="menu__top">
                <nav className="menu__nav-top">
                    <div className="line-link" onClick={openMenu}>
                        Иследовать
                    </div>
                </nav>

                <h2 className="menu__title">Busina Zhelaniy</h2>

                <div className="menu__side">
                    <ul>
                        <li>
                            <Link href="/">
                                <Image
                                    src="/search-svgrepo-com.svg"
                                    width="24"
                                    height="24"
                                    alt="Search"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href="/cart">
                                <Image
                                    src="/bag-svgrepo-com.svg"
                                    width="24"
                                    height="24"
                                    alt="Cart"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog/hello-world">
                                <Image
                                    src="/add-favorite-svg.svg"
                                    width="24"
                                    height="24"
                                    alt="Wishlist"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href="/auth">
                                <Image
                                    src="/account-svg.svg"
                                    width="24"
                                    height="24"
                                    alt="account"
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="menu__content-wrap">
                <div className="menu__content" ref={menuContentRef}>
                    <nav className="menu__nav-content">
                        <div className="column">
                            <h4 className="column__title">New In</h4>
                            <a href="#" className="line-link">
                                Blouses
                            </a>
                            <h4 className="column__title">Discounts</h4>
                            <a href="#" className="line-link">
                                T-Shirts
                            </a>
                        </div>
                        <div className="column">
                            <h4 className="column__title">Trending</h4>
                            <a href="#" className="line-link">
                                New Season
                            </a>
                        </div>
                    </nav>
                    <button onClick={closeMenu} className="menu__back unbutton">
                        <svg
                            width="10"
                            height="182"
                            viewBox="0 0 10 121"
                            preserveAspectRatio="xMidYMin meet"
                        >
                            <path d="M5 0 .5 9h9L5 0Zm.5 120.5V8h-1v113h1v-.5Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Menu
