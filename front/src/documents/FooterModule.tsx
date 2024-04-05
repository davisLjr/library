import React from "react";
import CodeCopy from "@/components/CodeBox";
// import Footer from "@componentes/Footer";

const FooterModule: React.FC = () => {
  // Contenido del módulo Footer

  const codeImport = `
    import Footer from "@componentes/Footer";
  `;

  const codeComponentCompleteFooter = `
    <Footer />
  `;
  const codeComponentOnlyLegalsFooter = `
    <Footer isPhoneSectionHidden isNetworkSectionHidden />
  `;

  const codeComponentIndicatorFooter = `
    <Footer hasIndicator />
  `;

  const codeComponentCustomFooter = `
    <Footer
      phoneItems={PHONE_ITEMS_CUSTOM}
      networkItems={NETWORK_ITEMS_CUSTOM}
      legalItems={LEGAL_ITEMS_CUSTOM}
    />
  `;

  const PHONE_ITEMS_CUSTOM = [
    {
      title: "Número Personalizado",
      number: 101,
    },
    {
      title: "Número Personalizado",
      number: 102,
    },
    {
      title: "Número Personalizado",
      number: 103,
    },
  ];

  const NETWORK_ITEMS_CUSTOM = [
    {
      title: "Red personalizada",
      src: "https://www.google.com/",
      icon: "bx bxs-info-circle",
    },
    {
      title: "Red personalizada",
      src: "https://www.instagram.com/",
      icon: "bx bxs-info-circle",
    },
    {
      title: "Red personalizada",
      src: "https://youtube.com/",
      icon: "bx bxs-info-circle",
    },
  ];

  const LEGAL_ITEMS_CUSTOM = [
    {
      title: "Título Personalizado",
      src: "https://buenosaires.gob.ar/inicio/",
    },
    {
      title: "Título Personalizado",
      src: "https://buenosaires.gob.ar/inicio/",
    },
    {
      title: "Título Personalizado",
      src: "https://buenosaires.gob.ar/inicio/",
    },
  ];

  return (
    <div className="col-12 col-lg-8">
      <h1 className="mb-4">Footer</h1>

      <p className="lead">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
        blanditiis neque illum? Sequi atque ullam deserunt quos doloremque
        repellendus iste error, obcaecati ducimus cumque esse maxime eligendi
        nesciunt enim? Voluptates!
      </p>

      <hr className="my-5" />

      <h2 className="mb-4">import</h2>

      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
        repellendus expedita repellat ducimus assumenda voluptate dolor,
        voluptatem dolorem iusto reiciendis iste temporibus odio tempore
        perferendis. Impedit quod aliquam autem quas!
      </p>

      <CodeCopy code={codeImport} />

      <hr className="my-5" />

      <h2 className="mb-4">Usage</h2>

      <h3 className="mb-4">Completo</h3>

      <p className="mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dolorum
        consequuntur ea voluptatem, expedita odio eaque sint doloremque vero
        assumenda reiciendis tenetur magnam recusandae iure maxime explicabo
        officia officiis? Reprehenderit?
      </p>

      {/* <Footer /> */}

      <CodeCopy code={codeComponentCompleteFooter} />

      <hr className="my-5" />

      <h3 className="mb-4">Sólo legales</h3>

      <p className="mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dolorum
        consequuntur ea voluptatem, expedita odio eaque sint doloremque vero
        assumenda reiciendis tenetur magnam recusandae iure maxime explicabo
        officia officiis? Reprehenderit?
      </p>

      {/* <Footer isPhoneSectionHidden isNetworkSectionHidden /> */}

      <CodeCopy code={codeComponentOnlyLegalsFooter} />

      <hr className="my-5" />

      <h3 className="mb-4">Con indicador</h3>

      <p className="mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dolorum
        consequuntur ea voluptatem, expedita odio eaque sint doloremque vero
        assumenda reiciendis tenetur magnam recusandae iure maxime explicabo
        officia officiis? Reprehenderit?
      </p>

      {/* <Footer hasIndicator /> */}

      <CodeCopy code={codeComponentIndicatorFooter} />

      <hr className="my-5" />

      <h3 className="mb-4">Con items personalizables</h3>

      <p className="mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dolorum
        consequuntur ea voluptatem, expedita odio eaque sint doloremque vero
        assumenda reiciendis tenetur magnam recusandae iure maxime explicabo
        officia officiis? Reprehenderit?
      </p>

      {/* <Footer
        phoneItems={PHONE_ITEMS_CUSTOM}
        networkItems={NETWORK_ITEMS_CUSTOM}
        legalItems={LEGAL_ITEMS_CUSTOM}
      /> */}

      <CodeCopy code={codeComponentCustomFooter} />
    </div>
  );
};

export default FooterModule;
