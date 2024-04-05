import React from "react";
import CodeCopy from "@/components/CodeBox";
// import Collapse from "@componentes/Collapse";

const CollapseModule: React.FC = () => {
  // Contenido del módulo Footer

  const codeImport = `
    import Collapse  from "@componentes/Collapse";
  `;

  const codeSimpleCollapsable = `
    <Collapse itemsCollapse={itemsCollapse} />
  `;

  const codeInfoSimpleCollapsable = `
    const itemsCollapse = [
      {
        id: 'collapse1',
        title: 'Título del Colapso',
        content: <p>Contenido del colapso.</p>,
      },
    `;

  const codeItemsCollapsable = `
    <Collapse itemsCollapse={itemsCollapse} />
  `;

  const codeInfoItemsCollapsable = `
    const itemsCollapse = [
      {
        id: 'collapse1',
        title: 'Título del Colapso 1',
        contentItems: [
          { title: 'Elemento 1', subtitle: 'Subtítulo 1' },
          { title: 'Elemento 2', subtitle: 'Subtítulo 2' },
        ],
      },
      {
        id: 'collapse2',
        title: 'Título del Colapso 2',
        contentInputs: [
          { title: 'Opción 1', subtitle: 'Subtítulo 1', id: 'option1', name: 'options' },
          { title: 'Opción 2', subtitle: 'Subtítulo 2', id: 'option2', name: 'options' },
        ],
      },
    ];
  `;

  const codeWhiteCollapsable = `
    <Collapse itemsCollapse={itemsCollapse} isWhite />
  `;

  const codeInfoWhiteCollapsable = `
    const itemsCollapse = [
      {
        id: 'collapse1',
        title: 'Título del Colapso',
        content: <p>Contenido del colapso.</p>,
      },
    ];
  `;

  const simpleCollapse = [
    {
      id: 'collapse1',
      title: 'Título del Colapso',
      content: <p>Contenido del colapso.</p>,
    },
  ];

  const itemsCollapse = [
    {
      id: 'collapse1',
      title: 'Título del Colapso 1',
      contentItems: [
        { title: 'Elemento 1', subtitle: 'Subtítulo 1' },
        { title: 'Elemento 2', subtitle: 'Subtítulo 2' },
      ],
    },
    {
      id: 'collapse2',
      title: 'Título del Colapso 2',
      contentInputs: [
        { title: 'Opción 1', subtitle: 'Subtítulo 1', id: 'option1', name: 'options' },
        { title: 'Opción 2', subtitle: 'Subtítulo 2', id: 'option2', name: 'options' },
      ],
    },
  ];

  return (
    <div className="col-12 col-lg-8">
      <h1 className="mb-4">Collapsable</h1>

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

      <CodeCopy code={codeInfoSimpleCollapsable} />
      <CodeCopy code={codeSimpleCollapsable} />

      {/* <Collapse itemsCollapse={simpleCollapse} /> */}

      <hr className="my-5" />

      <h3 className="mb-4">Sólo legales</h3>

      <p className="mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dolorum
        consequuntur ea voluptatem, expedita odio eaque sint doloremque vero
        assumenda reiciendis tenetur magnam recusandae iure maxime explicabo
        officia officiis? Reprehenderit?
      </p>

      <CodeCopy code={codeItemsCollapsable} />
      <CodeCopy code={codeInfoItemsCollapsable} />

      {/* <Collapse itemsCollapse={itemsCollapse} /> */}

      <hr className="my-5" />

      <h3 className="mb-4">Con indicador</h3>

      <p className="mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dolorum
        consequuntur ea voluptatem, expedita odio eaque sint doloremque vero
        assumenda reiciendis tenetur magnam recusandae iure maxime explicabo
        officia officiis? Reprehenderit?
      </p>

      <CodeCopy code={codeInfoWhiteCollapsable} />
      <CodeCopy code={codeWhiteCollapsable} />

      {/* <Collapse itemsCollapse={simpleCollapse}  isWhite/> */}

      <hr className="my-5" />

      <h3 className="mb-4">Con items personalizables</h3>

      <p className="mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dolorum
        consequuntur ea voluptatem, expedita odio eaque sint doloremque vero
        assumenda reiciendis tenetur magnam recusandae iure maxime explicabo
        officia officiis? Reprehenderit?
      </p>
    </div>
  );
};

export default CollapseModule;
