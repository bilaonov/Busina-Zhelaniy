import { FC } from "react";
import { layoutProps } from "../../../types/Layout/Layout";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Layout: FC<layoutProps> = ({children}) => {
  return (
    <>
        <Header/>
        {children}
        <Footer/>
    </>
  )
}

export default Layout