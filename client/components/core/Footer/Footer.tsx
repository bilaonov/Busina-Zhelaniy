import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.title}>Busina Zhelaniy</div>
            <div className={styles.items}>
                <div className={styles.support}>
                    <div className={styles.links}>
                        <h3>ПОДДЕРЖКА</h3>
                        <li>
                            <Link href="/">
                                <a id="lineLink">Часто задаваемые вопросы </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a id="lineLink">Доставка </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a id="lineLink">Возврат + Обмен </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a id="lineLink">Гарантия </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a id="lineLink">Размер кольца </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a id="lineLink">Свяжитесь с нами </a>
                            </Link>
                        </li>
                    </div>
                    <div className={styles.about}>
                        <h3>О НАС</h3>
                        <li>
                            <Link href="/">
                                <a id="lineLink">Наша миссия</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a id="lineLink">Контакты</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a id="lineLink">Магазины</a>
                            </Link>
                        </li>
                    </div>
                </div>
                <div className={styles.mailing}>
                    <div>
                        <h3>
                            ПРИСОЕДИНЯЙТЕСЬ К ПРЕКРАСНОЙ
                            <br /> КОМАНДЕ
                        </h3>

                        <input type="text" placeholder="Подпишитесь на нашу рассылку" />
                    </div>
                </div>
            </div>
            <div className={styles.socialLinks}>
                <div className={styles.page}>
                    <div className={styles.walet}>
                        <div>
                            <Image src="/rusflag.png" alt="rusflag" width={40} height={25} />
                        </div>

                        <p>RUB</p>
                    </div>
                    <div className={styles.company}>
                        <p>Условия и положения</p>
                        <p>© Busina Zhelaniy</p>
                        <p>Политика конфиденциальности</p>
                    </div>
                    <div className={styles.socialBlock}>
                        {/* <Link href="/">
                            <a>
                                <Image
                                    src="/social-whatsapp.svg"
                                    alt="whatsapp"
                                    width={50}
                                    height={50}
                                />
                            </a>
                        </Link>
                        <Link href="/">
                            <a>
                                <Image src="/logo-vk.svg" alt="vk" width={50} height={50} />
                            </a>
                        </Link>
                        <Link href="/">
                            <a>
                                <Image src="/telegram.svg" alt="telegram" width={50} height={50} />
                            </a>
                        </Link>
                        <Link href="/">
                            <a>
                                <Image
                                    src="/instagram.svg"
                                    alt="instagram"
                                    width={50}
                                    height={50}
                                />
                            </a>
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
