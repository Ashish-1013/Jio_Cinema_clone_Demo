import styles from "./spotlight.module.css"

const Spotlight =()=>{

    return(
        <>
        <section className={styles.spotlight}>

                <h1 className="">In The Spotlight</h1>

                <div className={styles.spotlightImg}>
                    <img src="https://v3img.voot.com/resizeMedium,w_1537,h_329/v3Storage/assets/14x3-1738500470071.jpg" alt="Spotlight today" />
                </div>

        </section>
        </>
    )
}


export default Spotlight