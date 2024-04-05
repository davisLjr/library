// En el archivo Banner.tsx
import React from "react";
// import Banner from "@componentes/Banner";
import CodeCopy from "@/components/CodeBox";

const BannerModule: React.FC = () => {
  const codeImport = `
    import Banner from "@componentes/Banner";
  `;

  const codeBanner = `
    <Banner
      iconBanner="icon-name"  // Reemplaza con el nombre de tu icono
      description="Este es un banner de ejemplo."
      isDark={true}  // Opcional, si se desea un banner oscuro
    >
      <button type="button" class="btn btn-primary">Primario</button>
      <button type="button" class="btn btn-secondary">Secundario</button>
    </Banner>
  `;

  return (
    <div className="col-12 col-lg-8">
      <h1 className="mb-4">Banner</h1>

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

      <h3 className="mb-4">Types</h3>
      <p className="mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dolorum
        consequuntur ea voluptatem, expedita odio eaque sint doloremque vero
        assumenda reiciendis tenetur magnam recusandae iure maxime explicabo
        officia officiis? Reprehenderit?
      </p>

      <h4 className="mb-4">Dark</h4>
      <p className="mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dolorum
        consequuntur ea voluptatem, expedita odio eaque sint doloremque vero
        assumenda reiciendis tenetur magnam recusandae iure maxime explicabo
        officia officiis? Reprehenderit?
      </p>

      {/* <Banner
        iconBanner="departure_board"
        description="Este es un banner de ejemplo."
        isDark
      >

        <button type="button" className="btn btn-primary">
          Primario
        </button>
        <button type="button" className="btn btn-secondary">
          Secundario
        </button>
      </Banner> */}

      <CodeCopy code={codeBanner} />

      <hr className="my-5" />

      <h4 className="mb-4">Light</h4>
      <p className="mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dolorum
        consequuntur ea voluptatem, expedita odio eaque sint doloremque vero
        assumenda reiciendis tenetur magnam recusandae iure maxime explicabo
        officia officiis? Reprehenderit?
      </p>

      {/* <Banner
        iconBanner="departure_board"
        description="Este es un banner de ejemplo."
      >
       
        <button type="button" className="btn btn-primary">
          Primario
        </button>
        <button type="button" className="btn btn-secondary">
          Secundario
        </button>
      </Banner> */}

      <CodeCopy code={codeBanner} />
    </div>
  );
};

export default BannerModule;
