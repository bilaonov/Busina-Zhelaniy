import { motion, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import Title from '../components/ui/Title/Title'
import Transition from '../components/ui/Transitions/Transition'
import styles from '../styles/auth.module.scss'
import Meta from '../components/core/Meta/Meta'
import RegistrationForm from '../components/Auth/RegistrForm/RegistrationForm'

const Registration = () => {
    return (
        <>
            <Meta title="Регистрация " />
            <div className={styles.authBlock}>
                <Transition>
                    <Title>
                        <p className={styles.authTitle}>Рады вас видеть опять</p>
                    </Title>
                    <div className={styles.authItems}>
                        <p className={styles.authText}>
                            Войдите, чтобы отслеживать доставку, просматривать историю заказов,
                            записываться на прием или добавлять в список желаний.
                        </p>
                        <RegistrationForm />
                        <div className={styles.authRestorePass}>
                            <p>Забыли свой пароль?</p>
                        </div>
                    </div>
                </Transition>
            </div>
        </>
    )
}

export default Registration
