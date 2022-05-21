import React from "react"
import * as styles from "../styles/PhotoGrid.module.css"

const PhotoGrid = ({ photos, id }) => {
  return (
    <div className={styles.grid} id={id}>
      {photos.map((photo, idx) => (
        <div className={styles.imageContainer} key={idx}>
          <img src={photo.src} alt={photo.alt} />
        </div>
      ))}
    </div>
  )
}

export default PhotoGrid
