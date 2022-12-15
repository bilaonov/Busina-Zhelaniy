import styles from './VideoContent.module.scss'

const VideoContent = () => {
    return (
        <div className={styles.content}>
            <div className={styles.frame}>
                <div className={styles.frameContent}>
                    <h2 className={styles.frameContentTitle}>
                        Busina Zhelaniy
                        {/* <span className={styles.frameContentText}>у нас вам понравиться</span> */}
                    </h2>
                </div>
            </div>

            <div className={styles.plane} data-duration="2.5">
                <video
                    autoPlay={true}
                    muted
                    playsInline
                    src="/d.webm"
                    loop
                    data-sampler="firstTexture"
                    preload="auto"
                ></video>
            </div>
        </div>
    )
}

export default VideoContent
