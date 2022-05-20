import React from "react"
import * as styles from "../styles/HamburgerMenu.module.css"

const HamburgerMenu = () => {
  return (
    <>
      <nav>
        <div className={styles.navbar}>
          <div className={`${styles.container} ${styles.navContainer}`}>
            <input className={styles.checkbox} type="checkbox" name="" id="" />
            <div className={styles.hamburgerLines}>
              <span className={`${styles.line} ${styles.line1}`} />
              <span className={`${styles.line} ${styles.line2}`} />
              <span className={`${styles.line} ${styles.line3}`} />
            </div>
            <div className={styles.logo}>
              <img src="/logo.png" alt={"logo"} />
            </div>
            <div className={styles.menuItems}>
              <ul>
                <li>
                  <a href="#">O nas</a>
                </li>
                <li>
                  <a href="#">Architektura</a>
                </li>
                <li>
                  <a href="#">Wizualizacje</a>
                </li>
                <li>
                  <a href="#">Kontakt</a>
                </li>
              </ul>
              <div className={styles.socialMedia}>
                <ul>
                  <li>
                    <a href="#">
                      <img src={"/fb_icon.png"} alt={"facebook"} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={"/ig_icon.png"} alt={"instagram"} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default HamburgerMenu
