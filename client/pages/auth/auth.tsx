import Head from 'next/head'
import React, { useState } from 'react'
import Meta from '../../components/core/Meta/Meta'
import styles from './auth.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import Login from './login/login'
import Registration from './registration/registration'

const Auth = () => {
    const [visibleContent, setVisibleContent] = useState<'Login' | 'Registration'>()
    const handleLoginContent = () => {
        setVisibleContent('Login')
    }

    const handleRegsitrationContent = () => {
        setVisibleContent('Registration')
    }
    return (
        <>
            <div>
                <Meta title="Авторизация" />
                <div className={styles.authPages}>
                    <div className={styles.authContent}>
                        <div className={styles.authTitle}>
                            <p>Войдите или создайте учетную запись</p>
                        </div>

                        <div className={styles.uthBtnBlock}></div>
                        <div className={styles.authOtherLogin}>
                            {/* <p>Войти с помощью</p>
                            <div className={styles.authLinkLogin}>
                                <Image src="/googleLogin.png" alt="Cart" width={50} height={50} />
                                <Image src="/vkLogin.svg" alt="Cart" width={50} height={50} />
                                <Image src="/telegramLogin.svg" alt="Cart" width={50} height={50} />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {visibleContent === 'Login' && <Login />}
            {visibleContent === 'Registration' && <Registration />}
        </>
    )
}

export default Auth
