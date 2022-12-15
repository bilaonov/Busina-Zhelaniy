import Image from 'next/image'
import Button from '../../components/ui/Button/Button'
import Heading from '../../components/ui/Heading/Heading'
import styles from '../../styles/productId.module.scss'

const Product = () => {
    return (
        <div className={styles.product}>
            <div className={styles.productPages}>
                <div className={styles.productLeftItems}>
                    <Image src="/image1.jpg" width={300} height={500} alt="test" />
                    <Image src="/image1.jpg" width={300} height={500} alt="test" />
                </div>
                <div className={styles.productRigthItems}>
                    <Heading title="Phoenix Twist Open Ring">
                        A single white lab-grown diamond followed by a delicate trail of pave set
                        stones. See more details
                    </Heading>
                    <div className={styles.productColor}>
                        <span></span>
                        <p>Золотой</p>
                    </div>
                    <div className={styles.productSize}>
                        <p>Размер</p>
                        <p>Узнать размер?</p>
                    </div>
                    <Button className={styles.productBtn} title=" Цена 13000руб" variant="light" />
                </div>
            </div>
        </div>
    )
}

export default Product
