import React from 'react'
import styles from './RegistrationForm.module.scss'

const RegistrationForm = () => {
    return (
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
    )
}

export default RegistrationForm
