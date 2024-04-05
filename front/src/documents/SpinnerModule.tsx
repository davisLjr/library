import CodeCopy from "@/components/CodeBox";
// import Spinner from "@componentes/Spinner";
import React from "react";

const SpinnerModule: React.FC = () => {
  const codeImport = `
    import Spinner from "@componentes/Spinner";
`;

  const codeTypes = `
    <Spinner type="primary" />
    <Spinner type="secondary" />
    <Spinner type="success" />
    <Spinner type="danger" />
    <Spinner type="info" />
    <Spinner type="light" />
    <Spinner type="dark" />
  `;

  const codeSizes = `
    <Spinner size="sm" />
    <Spinner />
    <Spinner size="lg" />
  `;

  const codeBlock = `
    <Spinner isBlock />
  `;

  return (
    <div className="col-12 col-lg-8">
      <h1 className="mb-4">Spinner</h1>

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

      <h3 className="mb-4">Tipos</h3>

      <p className="mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dolorum
        consequuntur ea voluptatem, expedita odio eaque sint doloremque vero
        assumenda reiciendis tenetur magnam recusandae iure maxime explicabo
        officia officiis? Reprehenderit?
      </p>

      <hr className="my-5" />

      <div className="component-container__spinner">
        {/* <Spinner type="primary" />
        <Spinner type="secondary" />
        <Spinner type="success" />
        <Spinner type="danger" />
        <Spinner type="info" />
        <Spinner type="light" />
        <Spinner type="dark" /> */}
      </div>

      <CodeCopy code={codeTypes} />

      <hr className="my-5" />

      <h3 className="mb-4">Tamaños</h3>

      <p className="mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dolorum
        consequuntur ea voluptatem, expedita odio eaque sint doloremque vero
        assumenda reiciendis tenetur magnam recusandae iure maxime explicabo
        officia officiis? Reprehenderit?
      </p>

      <div className="component-container__spinner">
        {/* <Spinner size="sm" />
        <Spinner />
        <Spinner size="lg" /> */}
      </div>
      <CodeCopy code={codeSizes} />

      <hr className="my-5" />

      <h3 className="mb-4">Expandible</h3>

      <p className="mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dolorum
        consequuntur ea voluptatem, expedita odio eaque sint doloremque vero
        assumenda reiciendis tenetur magnam recusandae iure maxime explicabo
        officia officiis? Reprehenderit?
      </p>

      <div style={{maxWidth: "80px"}}>
        {/* <Spinner isBlock /> */}
      </div>

      <CodeCopy code={codeBlock} />
    </div>
  );
};

export default SpinnerModule;
