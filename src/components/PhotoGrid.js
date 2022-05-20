import React from "react"
import * as styles from "../styles/PhotoGrid.module.css"

const PhotoGrid = ({ photos }) => {
  return (
    <div className={styles.grid}>
      {photos.map((photo, idx) => (
        <div className={styles.imageContainer} key={idx}>
          <img src={photo.src} alt={photo.alt} />
        </div>
      ))}
    </div>
  )
}

export default PhotoGrid
