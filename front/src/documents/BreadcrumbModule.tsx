import CodeCopy from "@/components/CodeBox";
// import Breadcrumb from "@componentes/Breadcrumb";
import React from "react";

const BreadcrumbModule: React.FC = () => {
  const codeImport = `
    import Breadcrumb from "@componentes/Breadcrumb";
`;

  const ITEMS = [
    {name: "Buenos Aires", link: "#"},
    {name: "Página intermedia con mucho mucho texto", link: "#"},
    {name: "Intermedia", link: "#"},
    {name: "Página anterior", link: "#"},
  ];

  const codeBreadcrumb = `
    const ITEMS = [
      { name: "Buenos Aires", link: "#" },
      { name: "Página intermedia con mucho mucho texto", link: "#" },
      { name: "Intermedia", link: "#" },
      { name: "Página anterior", link: "#" },
    ];
    <Breadcrumb items={ITEMS} />
  `;

  return (
    <div className="col-12 col-lg-8">
      <h1>Migas de pan</h1>

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

      <h3 className="mb-4">Migas de pan</h3>

      <p className="mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dolorum
        consequuntur ea voluptatem, expedita odio eaque sint doloremque vero
        assumenda reiciendis tenetur magnam recusandae iure maxime explicabo
        officia officiis? Reprehenderit?
      </p>

      {/* <Breadcrumb items={ITEMS} /> */}

      <CodeCopy code={codeBreadcrumb} />
    </div>
  );
};

export default BreadcrumbModule;
