import React from 'react'
import styles from './LoginForm.module.scss'

const LoginForm = () => {
    return (
        <div className={styles.authForm}>
            <label htmlFor="inp" id="Input">
                <input type="email" id="inp" placeholder="&nbsp;" />
                <span id="Label">Введите почту</span>
                <span id="FocusBg"></span>
            </label>
            <label htmlFor="inp" id="Input">
                <input type="password" id="inp" placeholder="&nbsp;" />
                <span id="Label">Введите пароль</span>
                <span id="FocusBg"></span>
            </label>

            <button id="Button" role="button">
                Войти
            </button>
        </div>
    )
}

export default LoginForm
