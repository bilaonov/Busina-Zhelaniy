import React, { useCallback } from 'react'

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '../utils/validation'

import Meta from '../components/core/Meta/Meta'
import Title from '../components/ui/Title/Title'
import Transition from '../components/ui/Transitions/Transition'
import Button from '../components/ui/Button/Button'

import styles from '../styles/auth.module.scss'

import { useDispatch } from 'react-redux'
import { AuthResponse } from '@supabase/supabase-js'
import { signIn } from '../store/features/authSlice'
import { supabase } from '../lib/supabase'

interface ILoginData {
    email: string
    password: string
}

const Login = () => {
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ILoginData>({
        resolver: yupResolver(loginSchema),
    })

    const onSubmit = useCallback(async (data: ILoginData) => {
        try {
            const res: AuthResponse = await supabase.auth.signInWithPassword({
                email: data.email,
                password: data.password,
            })
            dispatch(signIn(res.data))
        } catch (err) {
            console.log(err)
        }

        reset()
    }, [])

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

                        <form className={styles.authForm} onSubmit={handleSubmit(onSubmit)}>
                                <label htmlFor="inp" id="Input">
                                    <input
                                        type="email"
                                        required={false}
                                        {...register('email')}
                                        id="inp"
                                        placeholder="&nbsp;"
                                    />
                                    {errors.email?.message ? (
                                        <span id="Label" style={{ color: 'red' }}>
                                            {errors.email.message.toString()}
                                        </span>
                                    ) : (
                                        <span id="Label">Введите почту</span>
                                    )}
                                    <span id="FocusBg"></span>
                                </label>
                            <label htmlFor="inp" id="Input">
                                <input
                                    {...register('password')}
                                    type="password"
                                    id="inp"
                                    placeholder="&nbsp;"
                                />
                                {errors.password?.message ? (
                                    <span id="Label" style={{ color: 'red' }}>
                                        {errors.password.message.toString()}
                                    </span>
                                ) : (
                                    <span id="Label">Введите пароль</span>
                                )}

                                <span id="FocusBg"></span>
                            </label>
                            <Button title="Войти" className={styles.btnAdd} type="submit" />
                        </form>

                        <div className={styles.authRestorePass}>
                            <p>Забыли свой пароль?</p>
                        </div>
                    </div>
                </Transition>
            </div>
        </>
    )
}

export default Login
function setLogin(data: ILoginData): any {
    throw new Error('Function not implemented.')
}
