'use client'

import React, { useRef } from 'react';
import useScrollSpy from 'react-use-scrollspy';

import CodeCopy from "@/components/CodeBox";
// import Alert from "@componentes/Alert";
import BoxTemplate from "@/components/DocComponents/Box";
import Flex from "@/components/DocComponents/Flex";
import HeadingTemplate from "@/components/DocComponents/HeadingTemplate";
import MainDescription from "@/components/DocComponents/MainDescription";
import Divisor from "@/components/DocComponents/Divisor";
import SimpleText from "@/components/DocComponents/SimpleText";

const AlertModule: React.FC = () => {

  const codeImport = `
  import Alert from "@componentes/Alert";
  `;

  const codeInfo = `
    <Alert alertInfo>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam hic ad
      obca
    </Alert>
  `;

  const codeWarning = `
    <Alert alertWarning>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam hic ad
      obca
    </Alert>
  `;

  const codeSuccess = `
    <Alert alertSuccess>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam hic ad
    obca
    </Alert>
  `;

  const codeDanger = `
    <Alert alertDanger>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam hic ad
    obca
    </Alert>
  `;

  const codeDimissible = `
    <Alert alertInfo alertDimissible>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam hic ad
      obca</p>
    </Alert>
  `;

  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
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

  return (
    <BoxTemplate>
      <Flex>
        <div className="col-12 col-lg-8">

          <HeadingTemplate id="introduction">
            <h1 ref={sectionRefs[0]}>Alerta</h1>
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

          <HeadingTemplate id='tipos'>
            <h3 className="mb-4" ref={sectionRefs[3]}>
              Tipos
            </h3>
          </HeadingTemplate>

          <SimpleText
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
            dolorum consequuntur ea voluptatem, expedita odio eaque sint
            doloremque vero assumenda reiciendis tenetur magnam recusandae iure
            maxime explicabo officia officiis? Reprehenderit?"
          />

          <HeadingTemplate id="simples">
            <h4 className="mb-4" ref={sectionRefs[4]}>
              Simples
            </h4>
          </HeadingTemplate>

          <SimpleText
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
            dolorum consequuntur ea voluptatem, expedita odio eaque sint
            doloremque vero assumenda reiciendis tenetur magnam recusandae iure
            maxime explicabo officia officiis? Reprehenderit?"
          />

          <Divisor />
          
          <HeadingTemplate id="informacion">
            <h4 className="mb-4" ref={sectionRefs[5]}>
            Información
            </h4>
          </HeadingTemplate>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sit
            ducimus repudiandae, placeat tempora dolor eaque nostrum provident
            assumenda officiis harum, repellat amet tenetur praesentium esse ad
            commodi enim qui!
          </p>

          {/* <Alert alertInfo>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam hic ad
              obca
            </p>
          </Alert> */}

          <CodeCopy code={codeInfo} />

          <Divisor />

          <HeadingTemplate id="advertencia">
            <h4 className="mb-4" ref={sectionRefs[6]}>
              Advertencia
            </h4>
          </HeadingTemplate>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sit
            ducimus repudiandae, placeat tempora dolor eaque nostrum provident
            assumenda officiis harum, repellat amet tenetur praesentium esse ad
            commodi enim qui!
          </p>
{/* 
          <Alert alertWarning>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam hic ad
              obca
            </p>
          </Alert> */}

          <CodeCopy code={codeWarning} />

          <Divisor />

          <HeadingTemplate id="exito">
            <h4 className="mb-4" ref={sectionRefs[7]}>
              Exito
            </h4>
          </HeadingTemplate>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sit
            ducimus repudiandae, placeat tempora dolor eaque nostrum provident
            assumenda officiis harum, repellat amet tenetur praesentium esse ad
            commodi enim qui!
          </p>

          {/* <Alert alertSuccess>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam hic ad
              obca
            </p>
          </Alert> */}

          <CodeCopy code={codeSuccess} />

          <Divisor />

          <br/>

          <HeadingTemplate id="peligro">
            <h4 className="mb-4" ref={sectionRefs[8]}>
              Peligro
            </h4>
          </HeadingTemplate>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sit
            ducimus repudiandae, placeat tempora dolor eaque nostrum provident
            assumenda officiis harum, repellat amet tenetur praesentium esse ad
            commodi enim qui!
          </p>

          {/* <Alert alertDanger>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam hic ad
              obca
            </p>
          </Alert> */}

          <CodeCopy code={codeDanger} />

          <Divisor />

          <HeadingTemplate id="con-cierre">
            <h4 className="mb-4" ref={sectionRefs[9]}>
              Con cierre
            </h4>
          </HeadingTemplate>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sit
            ducimus repudiandae, placeat tempora dolor eaque nostrum provident
            assumenda officiis harum, repellat amet tenetur praesentium esse ad
            commodi enim qui!
          </p>

          {/* <Alert alertInfo isDimissible>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam hic ad
              obca
            </p>
          </Alert> */}

          <CodeCopy code={codeDimissible} />
        </div>

        <div className='box-scrollspy d-none d-lg-block col-4 pl-5'>
          <nav className="App-navigation">
            <h5>ON THIS PAGE</h5>
            <a href='#introduction' className={activeSection === 0 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Introducción</a>
            <a href='#import' className={activeSection === 1 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Importación</a>
            <a href='#usage' className={activeSection === 2 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Uso</a>
            <a href='#tipos' className={activeSection === 3 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Tipos</a>
            <a href='#simples' className={activeSection === 4 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Simples</a>
            <a href='#informacion' className={activeSection === 5 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Información</a>
            <a href='#advertencia' className={activeSection === 6 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Advertencia</a>
            <a href='#exito' className={activeSection === 7 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Exito</a>
            <a href='#peligro' className={activeSection === 8 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Peligro</a>
            <a href='#con-cierre' className={activeSection === 9 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Con cierre</a>
          </nav>
        </div>
      </Flex>
    </BoxTemplate>
  );
};

export default AlertModule;
