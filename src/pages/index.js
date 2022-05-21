import React from "react"
import { Link } from "gatsby"
import * as styles from "./index.module.css"

export default function Home() {
  return (
    <nav className={styles.mainPage}>
      <div className={styles.subpage}>
        <img src={"/łyko_big.png"} alt={"architecture"} />
        <Link to={"/architektura"}>Architektura</Link>
      </div>
      <hr />
      <div className={styles.subpage}>
        <img src={"/lyko_big.png"} alt={"illustrations"} />
        <Link to={"/ilustracje"} className={styles.illustrationsLink}>
          Ilustracje
        </Link>
      </div>
    </nav>
  )
}
