import { motion, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import Title from '../../../components/ui/Title/Title'
import Transition from '../../../components/ui/Transitions/Transition'
import styles from '../auth.module.scss'

const Registration = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <div className={styles.authBlock}>
            <Transition>
                {' '}
                <Title>
                    <p className={styles.authTitle}>Рады вас видеть опять</p>
                </Title>
                <div className={styles.authItems}>
                    <p className={styles.authText}>
                        Войдите, чтобы отслеживать доставку, просматривать историю заказов,
                        записываться на прием или добавлять в список желаний.
                    </p>
                    <div className={styles.authForm}>
                        <label htmlFor="inp" id="Input">
                            <input type="email" id="inp" placeholder="&nbsp;" />
                            <span id="Label">Введите почту</span>
                            <span id="FocusBg"></span>
                        </label>

                        <button id="Button" role="button">
                            Регистрация
                        </button>
                    </div>
                    <div className={styles.authRestorePass}>
                        <p>Забыли свой пароль?</p>
                    </div>
                </div>
            </Transition>
        </div>
    )
}

export default Registration
