import React from 'react'
import Button from '../../ui/Button/Button'
import styles from './LoginForm.module.scss'

const LoginForm = () => {
    return (
        <div className={styles.authForm}>
            <label htmlFor="inp" id="Input">
                <input type="email" id="inp" placeholder="&nbsp;" />
                <span id="Label">Введите email</span>
                <span id="FocusBg"></span>
            </label>
            <label htmlFor="inp" id="Input">
                <input type="password" id="inp" placeholder="&nbsp;" />
                <span id="Label">Введите пароль</span>
                <span id="FocusBg"></span>
            </label>

            <Button title="Войти" className={styles.btnAdd} type="submit" />
        </div>
    )
}

export default LoginForm
