import styles from './VideoContent.module.scss'

const VideoContent = () => {
    return (
        <div className={styles.video}>
            <div className={styles.videoFrame}>
                <div className={styles.videoContent}>
                    <h2 className={styles.videoTitle}>Busina Zhelaniy</h2>
                </div>
            </div>

            <div className={styles.videoPlane} data-duration="2.5">
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
