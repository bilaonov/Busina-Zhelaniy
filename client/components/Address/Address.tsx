import Image from 'next/image'
import styles from './Address.module.scss'
import { IAddress } from '../../types/addressTypes'

interface AddressProps {
    addressData: IAddress
}
const Address: React.FC<AddressProps> = ({ addressData }) => {
    return (
        <>
            <div className={styles.address}>
                <div className={styles.addressTitle}>
                    <h3>Ваши данные</h3>
                </div>

                <div className={styles.addressInfo}>
                    <div>
                        <p>
                            Имя: <span>Амиран</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            Фамилия: <span>Билаонов</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            Email: <span>test@test.con</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            Телефон: <span>+7989478043</span>
                        </p>
                    </div>
                </div>
                <div className={styles.addressTitle}>
                    <h3>
                        Адрес доставки
                        <span>
                            <Image src="/edit.svg" width="20" height="20" alt="edit" />
                        </span>
                    </h3>
                </div>
                <div className={styles.addressInfo}>
                    <div>
                        <p>
                            Страна: <span>{addressData.country}</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            Регион: <span>{addressData.region}</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            Город: <span>{addressData.city}</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            Улица: <span>{addressData.street}</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            Дом: <span>{addressData.house}</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            Почтовый индекс: <span>{addressData.zipcode}</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            Почтовый отправитель: <span>{addressData.delivery_methods}</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Address
