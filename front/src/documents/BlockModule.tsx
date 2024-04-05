import CodeCopy from "@/components/CodeBox";
// import Block from "@componentes/Block";
// import Button from "@componentes/Button";
import React from "react";

const BlockModule: React.FC = () => {
  const codeImport = `
    import Block from "@componentes/Block";
`;

  const codeTitle = `
    <Block title="Iniciá el trámite y completá todos los pasos">
      <Button text="Iniciar trámite" url="#" size="lg" isExpandable />
    </Block>
  `;
  const codeTitleBg = `
    <Block title="Iniciá el trámite y completá todos los pasos" isLight>
      <Button text="Iniciar trámite" url="#" size="lg" isExpandable />
    </Block>
  `;
  const codeText = `
    <Block
      title="Iniciá el trámite y completá todos los pasos"
      description="Si tenés un trámite iniciado podés continuarlo desde acá."
      >
      <Button text="Iniciar trámite" url="#" size="lg" isExpandable />
    </Block>
  `;
  const codeTextBg = `
    <Block
      title="Iniciá el trámite y completá todos los pasos"
      description="Si tenés un trámite iniciado podés continuarlo desde acá."
      isLight
      >
      <Button text="Iniciar trámite" url="#" size="lg" isExpandable />
    </Block>
  `;
  const codeProgressBar = `
    <Block
      title="Este es tu progreso en el trámite"
      blockProgressBar={{type: 'bg-success', progress: 25}}
      >
      <Button text="Continuar trámite" size="lg" url="#" isExpandable />
    </Block>
  `;
  const codeProgressBarBg = `
    <Block
      title="Este es tu progreso en el trámite"
      blockProgressBar={{type: 'bg-success', progress: 25}}
      isLight
      >
      <Button text="Continuar trámite" size="lg" url="#" isExpandable />
    </Block>
  `;

  return (
    <div className="col-12 col-lg-8">
      <h1 className="mb-4">Bloque de trámite</h1>

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

      <h3 className="mb-4">Con titulo</h3>

      <p className="mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dolorum
        consequuntur ea voluptatem, expedita odio eaque sint doloremque vero
        assumenda reiciendis tenetur magnam recusandae iure maxime explicabo
        officia officiis? Reprehenderit?
      </p>

      <div>
        <div
          style={{
            maxWidth: "340px",
            display: "inline-block",
            marginRight: "2rem",
          }}
        >
          {/* <Block title="Iniciá el trámite y completá todos los pasos">
            <Button text="Iniciar trámite" url="#" size="lg" isExpandable />
          </Block> */}
        </div>

        <div
          style={{
            maxWidth: "340px",
            display: "inline-block",
            marginTop: "1rem",
          }}
        >
          {/* <Block title="Iniciá el trámite y completá todos los pasos" isLight>
            <Button text="Iniciar trámite" url="#" size="lg" isExpandable />
          </Block> */}
        </div>
      </div>

      <CodeCopy code={codeTitle} />
      <CodeCopy code={codeTitleBg} />

      <hr className="my-5" />

      <h3 className="mb-4">Con bajada</h3>

      <p className="mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dolorum
        consequuntur ea voluptatem, expedita odio eaque sint doloremque vero
        assumenda reiciendis tenetur magnam recusandae iure maxime explicabo
        officia officiis? Reprehenderit?
      </p>

      <div>
        <div
          style={{
            maxWidth: "340px",
            display: "inline-block",
            marginRight: "2rem",
          }}
        >
          {/* <Block
            title="Iniciá el trámite y completá todos los pasos"
            description="Si tenés un trámite iniciado podés continuarlo desde acá."
          >
            <Button text="Iniciar trámite" url="#" size="lg" isExpandable />
          </Block> */}
        </div>

        <div
          style={{
            maxWidth: "340px",
            display: "inline-block",
            marginTop: "1rem",
          }}
        >
          {/* <Block
            title="Iniciá el trámite y completá todos los pasos"
            description="Si tenés un trámite iniciado podés continuarlo desde acá."
            isLight
          >
            <Button text="Iniciar trámite" url="#" size="lg" isExpandable />
          </Block> */}
        </div>
      </div>

      <CodeCopy code={codeText} />
      <CodeCopy code={codeTextBg} />

      <hr className="my-5" />

      <h3 className="mb-4">Con barra de progreso</h3>

      <p className="mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dolorum
        consequuntur ea voluptatem, expedita odio eaque sint doloremque vero
        assumenda reiciendis tenetur magnam recusandae iure maxime explicabo
        officia officiis? Reprehenderit?
      </p>

      <div>
        <div
          style={{
            maxWidth: "340px",
            display: "inline-block",
            marginRight: "2rem",
          }}
        >
          {/* <Block
            title="Este es tu progreso en el trámite"
            blockProgressBar={{type: "bg-success", progress: 25}}
          >
            <Button text="Continuar trámite" size="lg" url="#" isExpandable />
          </Block> */}
        </div>

        <div
          style={{
            maxWidth: "340px",
            display: "inline-block",
            marginTop: "1rem",
          }}
        >
          {/* <Block
            title="Este es tu progreso en el trámite"
            blockProgressBar={{type: "bg-success", progress: 25}}
            isLight
          >
            <Button text="Continuar trámite" size="lg" url="#" isExpandable />
          </Block> */}
        </div>
      </div>

      <CodeCopy code={codeProgressBar} />
      <CodeCopy code={codeProgressBarBg} />
    </div>
  );
};

export default BlockModule;
