import React, { useRef } from "react"
import * as styles from "../styles/HamburgerMenu.module.css"
import { Link } from "gatsby"

const HamburgerMenu = () => {
  const checkbox = useRef()

  const scrollToElement = pageElement => event => {
    checkbox.current.click()

    let element = document.getElementById(pageElement)

    event.preventDefault()

    console.log(element)

    let positionX = 0
    let positionY = -81

    positionX += element.offsetLeft
    positionY += element.offsetTop
    console.log(positionX)
    console.log(positionY)
    window.scrollTo({ top: positionY, left: positionX, behavior: "smooth" })
  }

  return (
    <>
      <nav>
        <div className={styles.navbar}>
          <div className={`${styles.container} ${styles.navContainer}`}>
            <input
              className={styles.checkbox}
              type="checkbox"
              name=""
              id=""
              ref={checkbox}
            />
            <div className={styles.hamburgerLines}>
              <span className={`${styles.line} ${styles.line1}`} />
              <span className={`${styles.line} ${styles.line2}`} />
              <span className={`${styles.line} ${styles.line3}`} />
            </div>
            <Link to={"/"} className={styles.logo}>
              <img src="/logo.png" alt={"logo"} />
            </Link>
            <div className={styles.menuItems}>
              <ul>
                <li onClick={scrollToElement("aboutUs")}>
                  <a href="#">O nas</a>
                </li>
                <li onClick={scrollToElement("architecture")}>
                  <a href="#">Architektura</a>
                </li>
                <li onClick={scrollToElement("visualisations")}>
                  <a href="#">Wizualizacje</a>
                </li>
                <li onClick={scrollToElement("contact")}>
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
