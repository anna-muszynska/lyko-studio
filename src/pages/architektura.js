import React from "react"
import "../styles/global.css"
import HamburgerMenu from "../components/HamburgerMenu"
import * as styles from "../styles/architecture.module.css"
import Card from "../components/Card"
import PhotoGrid from "../components/PhotoGrid"

const Architektura = () => {
  return (
    <>
      <header>
        <nav className={styles.navigation}>
          <HamburgerMenu />
        </nav>
        <img
          className={styles.mainPhoto}
          src={"/main_photo.png"}
          alt={"main photo"}
        />
      </header>
      <main>
        <section className={styles.about} id={"aboutUs"}>
          <p>
            Realizujemy projekty związane z architekturą, urbanistyką,
            projektowaniem wnętrz oraz grafiką użytkową.
          </p>
          <p>
            Zapewniamy kompleksowe przygotowanie projektu w zakresie
            projektowym, administracyjnym i doradczym. Współpracujemy z
            renomowanymi biurami inżynierskimi. Projekty pracowni są laureatami
            licznych nagród i wyróżnień w konkursach oraz wystawach
            architektonicznych w Polsce i zagranicą.
          </p>
          <p>
            Nasz pomysł na architekturę jest wynikiem doświadczeń zdobytych w
            pracy w krakowskich, a także w prestiżowych zagranicznych
            pracowniach, dzięki którym zyskaliśmy szersze i świeższe spojrzenie
            na projektowanie.
          </p>
          <Card
            photoPath={"/Card_photo_1.png"}
            name={`Weronika Łyko`}
            description={
              "Założycielka i architektka w LAB architekci. Absolwentka Wydziału Architektury Politechniki Krakowskiej. Studiowała również w Amsterdamie i Wiedniu. Praktykowała i pracowała m.in. w pracowniach BIG Bjarke Ingels Group w Kopenhadze czy Sou Fujimoto Architects w Tokio."
            }
          />
          <Card
            photoPath={"/Card_photo_2.png"}
            name={`Adam Łyko`}
            description={
              "Założyciel i architekt w LAB architekci. Absolwent Wydziału Architektury Politechniki Krakowskiej. Studiował również w Amsterdamie i Wiedniu. Zdobył doświadczenie m.in. w pracowniach COBE w Kopenhadze czy Shigeru Ban Architects w Tokio."
            }
          />
        </section>
        <PhotoGrid
          id={"architecture"}
          photos={[
            { src: "/square_photo.png", alt: "img1" },
            { src: "/square_photo.png", alt: "img2" },
            { src: "/square_photo.png", alt: "img3" },
            { src: "/square_photo.png", alt: "img4" },
            { src: "/square_photo.png", alt: "img5" },
            { src: "/square_photo.png", alt: "img6" },
          ]}
        />
        <section>
          <img
            className={styles.sectionPhoto}
            src={"/lake_1.png"}
            alt={"house by the lake 1"}
          />
          <h2>Dom nad zalewem</h2>
          <p>
            Hasło zaimportowane automatycznie – nie zostało zweryfikowane w
            papierowych słownikach lub wiarygodnych słownikach online. Jeśli
            znasz rumuński, kliknij na Edytuj, dokonaj ewentualnych korekt i
            usuń niniejszy komunikat. Dziękujemy! Listę innych niesprawdzonych
            haseł w tym języku można znaleźć pod tym linkiem.
          </p>
          <PhotoGrid
            photos={[
              { src: "/lake_2.png", alt: "house by the lake 4" },
              { src: "/lake_3.png", alt: "house by the lake 3" },
            ]}
          />
        </section>
        <PhotoGrid
          id={"visualisations"}
          photos={[
            { src: "/square_photo.png", alt: "img7" },
            { src: "/square_photo.png", alt: "img8" },
            { src: "/square_photo.png", alt: "img9" },
            { src: "/square_photo.png", alt: "img10" },
            { src: "/square_photo.png", alt: "img11" },
            { src: "/square_photo.png", alt: "img12" },
          ]}
        />
      </main>
      <footer>
        <div id={"contact"}>
          <pre>
            <p>
              {`ŁYKO studio Adam Łyko 
                ul. Sowińskiego 7/3
                31-524 Kraków`}
            </p>
            <p>
              {`+48 693 995 005 
                +48 888 490 980`}
            </p>
            <p>{`biuro@lykostudio.pl`}</p>
            <p>
              {`NIP: 675 16 29 606 
                REGON: NJKDSCIL`}
            </p>
          </pre>
        </div>
      </footer>
    </>
  )
}

export default Architektura
