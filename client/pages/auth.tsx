import React, { useState } from 'react'
import Meta from '../components/core/Meta/Meta'
import styles from '../styles/auth.module.scss'

import Title from '../components/ui/Title/Title'

import Registration from './registration'
import Login from './login'

const Auth = () => {
    const [isVisible, setIsVisible] = useState<'login' | 'registration'>('login')
    const handleVisibleLogin = () => {
        setIsVisible('login')
    }
    const handleVisibleRegistr = () => {
        setIsVisible('registration')
    }

    return (
        <>
            <Meta title="Авторизация" />
            <div className={styles.authPages}>
                <div className={styles.authContent}>
                    <div className={styles.authBlock}>
                        <Title>
                            <p>
                                Войдите или создайте учетную
                                <br /> запись
                            </p>
                        </Title>

                        <div className={styles.authLinkItems}>
                            <div onClick={handleVisibleLogin}>
                                <p>Авторизация</p>
                                <span id="arrow"></span>
                            </div>

                            <div onClick={handleVisibleRegistr}>
                                <p>Регистрация</p>
                                <span id="arrow"></span>
                            </div>
                        </div>
                        {/* <div className={styles.authOtherLogin}>
                            <p>Войти с помощью</p>
                            <div className={styles.authLinkLogin}>
                                <Image src="/googleLogin.png" alt="Cart" width={50} height={50} />
                                <Image src="/vkLogin.svg" alt="Cart" width={50} height={50} />
                                <Image src="/telegramLogin.svg" alt="Cart" width={50} height={50} />
                            </div>
                        </div> */}
                    </div>
                    {isVisible === 'login' && <Login />}
                    {isVisible === 'registration' && <Registration />}
                </div>
            </div>
        </>
    )
}

export default Auth
