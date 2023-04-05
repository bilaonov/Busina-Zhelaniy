import { useMediaQuery } from "react-responsive"

const Desktop = ({ children }: any) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
}

export default Desktop
