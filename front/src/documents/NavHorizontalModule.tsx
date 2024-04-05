"use client"

import React, { useRef } from 'react';
import useScrollSpy from 'react-use-scrollspy';

import CodeCopy from "@/components/CodeBox";
// import ScrollSpy from "@/components/ScrollSpy";
// import NavigationHorizontal from "@componentes/NavHorizontal";
import BoxTemplate from '@/components/DocComponents/Box';
import Flex from '@/components/DocComponents/Flex';
import HeadingTemplate from '@/components/DocComponents/HeadingTemplate';
import MainDescription from '@/components/DocComponents/MainDescription';
import Divisor from '@/components/DocComponents/Divisor';
import SimpleText from '@/components/DocComponents/SimpleText';


const NavVerticalModule: React.FC = () => {

  const codeImport = `
    import NavigationHorizontal from "@componentes/NavHorizontal";
`;

  const codeComponent = `
    <NavigationHorizontal items={navItems} />
  `;

  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -300,
  });


  const navItems = [
    { text: "Link 1", path: "#link1" },
    { text: "Activo", path: "#activo" },
    { text: "Link 2", path: "/components/navigationHorizontal" },
    { text: "Deshabilitado", path: "#deshabilitado", disabled: true },
  ];

  return (
    <BoxTemplate>
      <Flex>
        <div
          className="col-12 col-lg-8"
        >

          <HeadingTemplate id="introduction">
            <h1 ref={sectionRefs[0]}>Navegación</h1>
          </HeadingTemplate>

          <MainDescription
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
            blanditiis neque illum? Sequi atque ullam deserunt quos doloremque
            repellendus iste error, obcaecati ducimus cumque esse maxime eligendi
            nesciunt enim? Voluptates!"
          />

          <Divisor />

          <HeadingTemplate id="import">
            <h2 className="mb-4"  ref={sectionRefs[1]} >
              import
            </h2>
          </HeadingTemplate>

          <SimpleText
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
            repellendus expedita repellat ducimus assumenda voluptate dolor,
            voluptatem dolorem iusto reiciendis iste temporibus odio tempore
            perferendis. Impedit quod aliquam autem quas!"
          />

          <CodeCopy code={codeImport} />

          <Divisor />

          <HeadingTemplate id="usage">
            <h2 className="mb-5" ref={sectionRefs[2]}>
              Usage
            </h2>
          </HeadingTemplate>

          <HeadingTemplate id="un-nivel">
            <h3 className="mb-4" ref={sectionRefs[3]}>
              Un Nivel
            </h3>
          </HeadingTemplate>

          <SimpleText
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
            dolorum consequuntur ea voluptatem, expedita odio eaque sint
            doloremque vero assumenda reiciendis tenetur magnam recusandae iure
            maxime explicabo officia officiis? Reprehenderit?"
          />

          {/* <NavigationHorizontal items={navItems} /> */}

          <br />

          <HeadingTemplate id="dos-niveles">
            <h3 className="mb-4" ref={sectionRefs[4]}>
              Dos Niveles
            </h3>
          </HeadingTemplate>

          <SimpleText
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
            dolorum consequuntur ea voluptatem, expedita odio eaque sint
            doloremque vero assumenda reiciendis tenetur magnam recusandae iure
            maxime explicabo officia officiis? Reprehenderit?"
          />

          {/* <NavigationHorizontal items={navItems} /> */}

          <br />

          <HeadingTemplate id="tres-niveles">
            <h3 className="mb-4" ref={sectionRefs[5]}>
              Tres Niveles
            </h3>
          </HeadingTemplate>

          <SimpleText
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
            dolorum consequuntur ea voluptatem, expedita odio eaque sint
            doloremque vero assumenda reiciendis tenetur magnam recusandae iure
            maxime explicabo officia officiis? Reprehenderit?"
          />

          {/* <NavigationHorizontal items={navItems} /> */}

          <br />

          <CodeCopy code={codeComponent} />
        </div>

        <div className='box-scrollspy d-none d-lg-block col-4 pl-5'>
          <nav className="App-navigation">
            <h5>ON THIS PAGE</h5>
            <a href='#introduction' className={activeSection === 0 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Introducción</a>
            <a href='#import' className={activeSection === 1 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Importación</a>
            <a href='#usage' className={activeSection === 2 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Uso</a>
            <a href='#un-nivel' className={activeSection === 3 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Un Nivel</a>
            <a href='#dos-niveles' className={activeSection === 4 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Dos Niveles</a>
            <a href='#tres-niveles' className={activeSection === 5 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Tres Niveles</a>
          </nav>
        </div>
      </Flex>
    </BoxTemplate>
  );
};

export default NavVerticalModule;
