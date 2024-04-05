import CodeCopy from "@/components/CodeBox";
// import Button from "@componentes/Button";
import React from "react";

const ButtonModule: React.FC = () => {
  const codeImport = `
    import Button from "@componentes/Button";
`;

  const codeSolid = `
    <Button />
    <Button type="secondary" />
    <Button type="success" />
    <Button type="danger" />
    <Button type="link" />
  `;
  const codeOutline = `
    <Button isOutline/>
    <Button isOutline type="secondary" />
    <Button isOutline type="success" />
    <Button isOutline type="danger" />
    <Button isOutline type="link" />
  `;
  const codeLink = `
    <Button url="#" text="Enlace" />
    <Button url="#" text="Enlace" isOutline />
  `;
  const codeSize = `
    <Button size="sm" />
    <Button />
    <Button size="lg" />
  `;
  const codeBlock = `
    <Button isExpandable />
  `;
  const codeIcon = `
    <Button icon="bx bxs-info-circle" ariaLabel="Botón" />
    <Button icon="info" text="Botón" />
    <Button icon="info" text="Botón" isIconPositionRight />
  `;
  const codeSpinner = `
    <Button hasSpinner text="Botón" />
    <Button hasSpinner text="Botón" type="secondary" />
    <Button hasSpinner text="Botón" type="success" />
    <Button hasSpinner text="Botón" type="danger" />
    <Button hasSpinner text="Botón" type="link" />
    <Button hasSpinner text="Botón" isSpinnerPositionRight />
  `;
  const codeSpinnerOutline = `
    <Button hasSpinner text="Botón" isOutline />
    <Button hasSpinner text="Botón" type="secondary" isOutline />
    <Button hasSpinner text="Botón" type="success" isOutline />
    <Button hasSpinner text="Botón" type="danger" isOutline />
    <Button hasSpinner text="Botón" type="link" isOutline />
    <Button hasSpinner text="Botón" isOutline isSpinnerPositionRight />
  `;

  return (
    <div className="col-12 col-lg-8">
      <h1 className="mb-4">Botón</h1>

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

      <div className="component-container">
        {/* <Button />
        <Button type="secondary" />
        <Button type="success" />
        <Button type="danger" />
        <Button type="link" /> */}
      </div>

      <CodeCopy code={codeSolid} />

      <hr className="my-5" />

      <div className="component-container">
        {/* <Button isOutline />
        <Button isOutline type="secondary" />
        <Button isOutline type="success" />
        <Button isOutline type="danger" />
        <Button isOutline type="link" /> */}
      </div>

      <CodeCopy code={codeOutline} />

      <hr className="my-5" />

      <div className="component-container">
        {/* <Button url="#" text="Enlace" />
        <Button url="#" text="Enlace" isOutline /> */}
      </div>

      <CodeCopy code={codeLink} />

      <hr className="my-5" />

      <h3 className="mb-4">Tamaños</h3>

      <p className="mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dolorum
        consequuntur ea voluptatem, expedita odio eaque sint doloremque vero
        assumenda reiciendis tenetur magnam recusandae iure maxime explicabo
        officia officiis? Reprehenderit?
      </p>

      <hr className="my-5" />

      <div className="component-container">
        {/* <Button size="sm" />
        <Button />
        <Button size="lg" /> */}
      </div>

      <CodeCopy code={codeSize} />

      <hr className="my-5" />

      <h3 className="mb-4">Expandible</h3>

      <p className="mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dolorum
        consequuntur ea voluptatem, expedita odio eaque sint doloremque vero
        assumenda reiciendis tenetur magnam recusandae iure maxime explicabo
        officia officiis? Reprehenderit?
      </p>

      <div style={{maxWidth: "340px"}}>
        {/* <Button isExpandable /> */}
      </div>

      <CodeCopy code={codeBlock} />

      <hr className="my-5" />

      <h3 className="mb-4">Con ícono</h3>

      <p className="mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dolorum
        consequuntur ea voluptatem, expedita odio eaque sint doloremque vero
        assumenda reiciendis tenetur magnam recusandae iure maxime explicabo
        officia officiis? Reprehenderit?
      </p>

      <div className="component-container">
        {/* <Button icon="bx bxs-info-circle" ariaLabel="Botón" />
        <Button icon="info" text="Botón" />
        <Button icon="info" text="Botón" isIconPositionRight /> */}
      </div>

      <CodeCopy code={codeIcon} />

      <hr className="my-5" />

      <h3 className="mb-4">Con spinner</h3>

      <p className="mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dolorum
        consequuntur ea voluptatem, expedita odio eaque sint doloremque vero
        assumenda reiciendis tenetur magnam recusandae iure maxime explicabo
        officia officiis? Reprehenderit?
      </p>

      <div className="component-container">
        {/* <Button hasSpinner text="Botón" />
        <Button hasSpinner text="Botón" type="secondary" />
        <Button hasSpinner text="Botón" type="success" />
        <Button hasSpinner text="Botón" type="danger" />
        <Button hasSpinner text="Botón" type="link" />
        <Button hasSpinner text="Botón" isSpinnerPositionRight /> */}
      </div>

      <CodeCopy code={codeSpinner} />

      <div className="component-container">
        {/* <Button hasSpinner text="Botón" isOutline />
        <Button hasSpinner text="Botón" type="secondary" isOutline />
        <Button hasSpinner text="Botón" type="success" isOutline />
        <Button hasSpinner text="Botón" type="danger" isOutline />
        <Button hasSpinner text="Botón" type="link" isOutline />
        <Button hasSpinner text="Botón" isOutline isSpinnerPositionRight /> */}
      </div>

      <CodeCopy code={codeSpinnerOutline} />
    </div>
  );
};

export default ButtonModule;
