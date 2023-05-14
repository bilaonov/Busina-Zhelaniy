import * as yup from 'yup'

export const loginSchema = yup.object().shape({
    email: yup.string().email('Некоректный email').required('Введите почту'),
    password: yup.string().min(6, '​Минимальная длина пароля 6 символов').required(),
})

export const registerSchema = yup.object().shape({
    name: yup.string().required('Введите имя'),
    email: yup.string().email('Неправильный email').required('Введите почту'),
    password: yup.string().min(6, '​Минимальная длина пароля 6 символов').required(),
    password2: yup
        .string()
        .oneOf([yup.ref('password')], 'Пароли не совпадают')
        .required('Обязательное поле'),
})

export const deliveryAddressSchema = yup.object().shape({
    firstName: yup.string(),
    // lastName: yup.string().required('Введите имя'),
    // email: yup.string().email('Неправильный email').required('Введите почту'),
    // phone: yup
    //     .string()
    //     .matches(/^\+?\d{10,12}$/, 'Неверный формат номера телефона')
    //     .required('Поле номера телефона обязательно для заполнения'),
    // address: yup.string().required('Введите адресс'),
    // address2: yup.string(),
    // country: yup.string().required('Выберет страну'),
    // state: yup.string().required('Введите регион'),
    // city: yup.string().required('Введите город'),
    // zipcode: yup.string().required('Введите почтовый индекс'),
})

export const orderGiftCodeSchema = yup.object().shape({})
