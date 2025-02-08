import { useState } from 'react'
import styles from './tags.module.css'

const Tags = () => {

    let [tags,setTags] = useState([
        "For You",
        "Action",
        "Romantic Comedy",
        "Thriller",
        "Sci-Fi",
        "Drama",
        "Fantasy",
        "Documentary",
        "Crime",
        "Adventure",
        "Mystery",
        "Horror",
        "Animated",
        "Historical",
        "Superhero",
        

    ])

  return (
    <>
        <div className={styles.tags}>

            {
                tags.map((tag)=>{
                    return <p className={styles.tag}>{tag}</p>
                })
            }

        </div>
    </>
  )
}

export default Tags