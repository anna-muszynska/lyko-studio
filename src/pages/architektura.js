import React from "react"
import HamburgerMenu from "../components/HamburgerMenu"
import * as styles from "./architecture.module.css"
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
          alt={"main"}
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
            { src: "/square_photo_1.png", alt: "1" },
            { src: "/square_photo_2.png", alt: "2" },
            { src: "/square_photo_3.png", alt: "3" },
            { src: "/square_photo_4.png", alt: "4" },
            { src: "/square_photo_5.png", alt: "5" },
            { src: "/square_photo_6.png", alt: "6" },
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
            { src: "/square_photo_7.png", alt: "7" },
            { src: "/square_photo_8.png", alt: "8" },
            { src: "/square_photo_9.png", alt: "9" },
            { src: "/square_photo_10.png", alt: "10" },
            { src: "/square_photo_11.png", alt: "11" },
            { src: "/square_photo_12.png", alt: "12" },
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.84622873771!2d19.963107551684864!3d50.07044137932368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b20f95de895%3A0x856ca11517dea889!2zR2VuZXJhxYJhIErDs3plZmEgU293acWEc2tpZWdvIDcsIDMxLTUyMyBLcmFrw7N3!5e0!3m2!1spl!2spl!4v1653125479013!5m2!1spl!2spl"
          className={styles.map}
          // style={{
          //
          // }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </footer>
    </>
  )
}

export default Architektura
