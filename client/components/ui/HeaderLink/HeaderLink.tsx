import { Dispatch, MouseEvent, SetStateAction, useState } from 'react'
import Image from 'next/image'

interface HeaderLinkProps {
    setVisible: Dispatch<SetStateAction<boolean>>
    src: string
    open: string
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ src, setVisible, open }) => {
    const [visibleContent, setVisibleContent] = useState<
        'auth' | 'search' | 'cart' | 'wishlist' | 'navbar' | null
    >(null)

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

    return (
        <a onClick={(e) => HandleCategoryVisible(e, 'search')}>
            <Image src={src} width="24" height="24" alt="Search" />
        </a>
    )
}

export default HeaderLink
