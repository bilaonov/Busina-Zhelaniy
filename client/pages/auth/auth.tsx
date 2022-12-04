import React, { useState } from 'react'
import Meta from '../../components/core/Meta/Meta'
import styles from './auth.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import Title from '../../components/ui/Title/Title'
import Login from './login/login'
import Registration from './registration/registration'

const Auth = () => {
    const [isVisible, setIsVisible] = useState<'login' | 'registration'>('registration')
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
