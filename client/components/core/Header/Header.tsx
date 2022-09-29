import { gsap } from 'gsap'
import Head from 'next/head'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import Menu from './Menu/Menu'
import Content from './Content/Content'
import Cover from './Cover/Cover'
import styles from './Header.module.scss'

const Header = () => {
    const menuRef = useRef<HTMLDivElement>(null)
    const menuContentRef = useRef<HTMLDivElement>(null)
    const wrapRef = useRef<HTMLDivElement>(null)
    const coverRef = useRef<HTMLDivElement>(null)
    const coverInnerRef = useRef<HTMLDivElement>(null)
    const imgRef1 = useRef<HTMLDivElement>(null)
    const imgRef2 = useRef<HTMLDivElement>(null)
    const imgRef3 = useRef<HTMLDivElement>(null)

    let tl: any = null

    const menuStatus = useMemo(
        () => ({
            isOpen: false,
            isAnimating: false,
        }),
        [],
    )

    useEffect(() => {
        tl = gsap
            .timeline({
                paused: true,
                onComplete: () => {
                    menuStatus.isAnimating = false
                },
                onReverseComplete: () => {
                    menuStatus.isAnimating = false
                },
                defaults: {
                    duration: 1.2,
                    ease: 'power4.inOut',
                },
            })
            .addLabel('start', 0)
            .add(() => {
                if (menuStatus.isOpen) {
                    menuRef.current?.classList.add('menu--open')
                } else {
                    menuRef.current?.classList.remove('menu--open')
                }
            }, 'start')
            .to(
                wrapRef.current,
                {
                    duration: 1.6,
                    startAt: { scale: '1.1' },
                    ease: 'power3.inOut',
                    scale: 1,
                },
                'start',
            )
            .to(
                coverRef.current,
                {
                    startAt: { y: '-100%' },
                    y: '0%',
                },
                'start',
            )
            .to(
                coverInnerRef.current,
                {
                    startAt: { y: '100%' },
                    y: '0%',
                },
                'start',
            )
            .to(
                imgRef1.current,
                {
                    y: (position) => `${(position = -10)}%`,
                },

                'start',
            )
            .to(
                imgRef2.current,
                {
                    y: (position) => `${(position = -30)}%`,
                },

                'start',
            )
            .to(
                imgRef3.current,
                {
                    y: (position) => `${(position = -20)}%`,
                },

                'start',
            )

            .addLabel('menu', 0.5)
            .to(
                menuContentRef.current,
                {
                    duration: 1,
                    startAt: { y: '-100%' },
                    y: '0%',
                },
                'menu',
            )
    }, [])

    // Menu expand
    const expandMenu = useCallback(() => {
        if (menuStatus.isAnimating || menuStatus.isOpen) return
        menuStatus.isAnimating = true
        menuStatus.isOpen = true
        tl.play()
    }, [menuStatus, tl])

    // Menu collapse
    const collapseMenu = useCallback(() => {
        if (menuStatus.isAnimating || !menuStatus.isOpen) return
        menuStatus.isAnimating = true
        menuStatus.isOpen = false
        tl.reverse(0)
    }, [menuStatus, tl])

    const openMenu = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        expandMenu()
    }
    const closeMenu = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        collapseMenu()
    }

    return (
        <>
            <Head>
                <title>Busina Zhelaniy</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <div className={styles.container}>
                <Content imgRef1={imgRef1} imgRef2={imgRef2} imgRef3={imgRef3} />
                <Cover coverRef={coverRef} coverInnerRef={coverInnerRef} wrapRef={wrapRef} />
                <Menu
                    openMenu={openMenu}
                    closeMenu={closeMenu}
                    menuRef={menuRef}
                    menuContentRef={menuContentRef}
                />
            </div>
        </>
    )
}

export default Header
