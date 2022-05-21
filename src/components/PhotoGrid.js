import React from "react"
import * as styles from "./PhotoGrid.module.css"

const PhotoGrid = ({ photos, id }) => {
  return (
    <div className={styles.grid} id={id}>
      {photos.map((photo, idx) => (
        <div key={idx}>
          <img src={photo.src} alt={photo.alt} />
        </div>
      ))}
    </div>
  )
}

export default PhotoGrid
