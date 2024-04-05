"use client";
import React from "react";
import {usePathname} from "next/navigation";
import "./globals.scss";
import Script from "next/script";
import HeaderDesktop from "@/components/Layout/Headers/Desktop";
import NavLayout from "@/components/Layout/Navigation/nav";
import Image from "next/image";

export const componentsPages = [
  {text: "Accesos", url: "/components/access", id: 1},
  {text: "Alertas", url: "/components/alert", id: 2},
  {text: "Audio", url: "/components/audio", id: 3},
  {text: "Banner", url: "/components/banner", id: 4},
  {text: "Bloque de trámite", url: "/components/block", id: 5},
  {text: "Colapsable", url: "/components/collapse", id: 6},
  {text: "Migas de pan", url: "/components/breadcrumb", id: 7},
  {text: "Botón", url: "/components/button", id: 8},
  {text: "Footer", url: "/components/footer", id: 9},
  {text: "Galeria", url: "/components/gallery", id: 10},
  {text: "Spinner", url: "/components/spinner", id: 11},
  {text: "Navegacion vertical", url: "/components/navigationVertical", id: 12},
  {
    text: "Navegacion Horizontal",
    url: "/components/navigationHorizontal",
    id: 13,
  },
];

const gettingPages = [
  {text: "Instalacción", url: "/getting-started/installation", id: 2},
  {text: "Importaciones", url: "/getting-started/imports", id: 3},
];

export default function RootLayout({children}: {children: React.ReactNode}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <title>Obelisco React Js</title>
        <meta name="description" content="Una colección de componentes React que siguen el sistema de diseño del Gobierno de la Ciudad de Buenos Aires (GCBA). Estos componentes están diseñados para ayudar a los desarrolladores a construir aplicaciones web coherentes y accesibles que se alineen con los estándares de diseño del GCBA."/>

        <link href="https://gcba.github.io/Obelisco/obelisco.css" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
          rel="stylesheet"
        />
      </head>

      <body>
        <HeaderDesktop />

        <div className="layout">
          <main>
            <div className="box">
              {pathname.includes("/components") && (
                <div className="nav-left">
                  <div className="nav-left-box-title">
                    <h3 className="pl-2">Componentes</h3>
                  </div>
                  <hr />
                  <NavLayout items={componentsPages} />
                </div>
              )}
              {pathname.includes("/getting-started") && (
                <div className="nav-left">
                  <div className="nav-left-box-title">
                    <h3 className="pl-2 ">Comenzando</h3>
                  </div>
                  <hr />
                  <NavLayout items={gettingPages} />
                </div>
              )}

              <div className="">{children}</div>
            </div>
          </main>
          {/* <!-- remplazar por componente footer */}
          <footer
            className="main-footer"
            style={{background: "#333 !important"}}
          >
            <div className="container">
              <section className="footer-legal-section">
                <div className="row align-items-center">
                  <div className="col-12 col-md-5 col-xl-4 footer-content-img">
                    <Image
                      className="d-lg-none"
                      src="https://gcba.github.io/Obelisco/footer/ciudad-ba-sm.svg"
                      alt="Ciudad de Buenos Aires"
                      width="102"
                      height="48"
                    />
                    <Image
                      className="d-none d-lg-inline"
                      src="https://gcba.github.io/Obelisco/footer/ciudad-ba.svg"
                      alt="Ciudad de Buenos Aires"
                      width="204"
                      height="40"
                    />
                    <Image
                      className="img-vamos-ba"
                      src="	https://gcba.github.io/Obelisco/footer/vamos-ba.svg"
                      alt="Vamos Buenos Aires"
                      width="112"
                      height="38"
                    />
                  </div>
                  <div className="col-12">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="https://boletinoficial.buenosaires.gob.ar">
                          Boletín oficial
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="https://buenosaires.gob.ar/inicio/terminos-y-condiciones">
                          Términos y condiciones
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="https://buenosaires.gob.ar/inicio/privacidad">
                          Política de privacidad
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="https://buenosaires.gob.ar/jefedegobierno/legalytecnica/normativa/boletin-oficial-y-registro/oficios-judiciales">
                          Oficios judiciales
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="https://www.buenosaires.gob.ar/gobierno/transparencia">
                          Transparencia
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <section>
                <div className="footer-license-text">
                  Los contenidos de buenosaires.gob.ar están licenciados bajo
                  Creative Commons Reconocimiento 2.5 Argentina License.
                </div>
              </section>
            </div>
          </footer>
        </div>

        <Script
          src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossOrigin="anonymous"
          strategy="afterInteractive"
          defer
        ></Script>

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
          crossOrigin="anonymous"
          strategy="afterInteractive"
          async
        ></Script>
      </body>
    </html>
  );
}
