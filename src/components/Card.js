import React from "react"
import * as styles from "../styles/Card.module.css"

const Card = ({ photoPath, name, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <img src={photoPath} alt={"Profile photo"} />
        <h2>{name}</h2>
      </div>
      <p>{description}</p>
    </div>
  )
}

export default Card
