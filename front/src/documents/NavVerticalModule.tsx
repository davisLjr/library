"use client"
// En el archivo Navegación.tsx
import CodeCopy from "@/components/CodeBox";
// import ScrollSpy from "@/components/ScrollSpy";
// import NavigationVertical from "@componentes/NavVertical";
import React from "react";

const NavVerticalModule: React.FC = () => {

  const codeImport = `
    import NavigationVertical from "@componentes/NavVertical";
`;

  const codeComponent1 = `
    <NavigationVertical items={navigationItems1} />
  `;
  const codeComponent2 = `
    <NavigationVertical items={navigationItems2} />
  `;
  const codeComponent3 = `
    <NavigationVertical items={navigationItems3} />
  `;

  // const sectionsScroll = [
  //   {text: "Introducción", url: "#list-item-1", id: 1},
  //   {text: "Importación", url: "#list-item-2", id: 2},
  //   {text: "Nivel uno", url: "#list-item-3", id: 3},
  //   {text: "Nivel dos", url: "#list-item-4", id: 4},
  //   {text: "Nivel tres", url: "#list-item-5", id: 5},
  // ];

  const navigationItems1 = [
    {
      text: "Link",
      path: "/components/navigationHorizontal",
      iconLeft: "bx bxs-user-circle",
    },
    {
      text: "Active",
      path: "/components/navigationVertical",
      iconLeft: "bx bxs-user-circle",
      active: true
    },
    {
      text: "Link",
      path: "#",
      iconLeft: "bx bxs-user-circle",
    },
    {
      text: "Deshabilitado",
      path: "#",
      isDisabled: true
    }
  ];

  const navigationItems2 = [
    {
      text: "Categorías",
      path: "#",
      iconLeft: "bx bxs-user-circle",
    },
    {
      text: "Locales y comercios",
      path: "#",
      children: [
        {
          text: "Local Indumentaria y calzado.",
          path: "/components/access",
        },
        {
          text: 'Locales gastronómicos: "para llevar/takeaway"',
          path: "/components/navigationVertical",
        },
        {
          text: "Locales de óptica",
          path: "#",
        },
        {
          text: "Comercial minorista (excluyendo indumentaria y calzado)",
          path: "#",
        },
      ],
    },
    {
      text: "Actividades jurídicas",
      path: "#",
    },
    {
      text: "Otras actividades",
      path: "#",
    }
  ];

  const navigationItems3 = [
    {
      text: "Categorías",
      path: "#",
    },
    {
      text: "Locales y comercios",
      path: "#",
      children: [
        {
          text: "Local Indumentaria y calzado.",
          path: "/components/access",
        },
        {
          text: 'Locales gastronómicos: "para llevar/takeaway"',
          path: "/components/navigationVertical",
          children: [
            {
              text: "Con local a la calle",
              path: "#",
            },
            {
              text: "Food trucks",
              path: "/components/navigationVertical",
              // active: true,
            },
          ],
        },
        {
          text: "Locales de óptica",
          path: "#",
        },
        {
          text: "Comercial minorista (excluyendo indumentaria y calzado)",
          path: "#",
        },
      ],
    },
    {
      text: "Actividades jurídicas",
      path: "#",
    },
    {
      text: "Otras actividades",
      path: "#",
    }
  ];

  return (
    <>
      <div
        className="col-12 col-lg-8 scrollspy-example"
        data-spy="scroll"
        data-target="#list-example"
        data-offset="0"
      >

        <h1 className="mb-4" id="list-item-1">
          Navegación
        </h1>

        <p className="lead">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
          blanditiis neque illum? Sequi atque ullam deserunt quos doloremque
          repellendus iste error, obcaecati ducimus cumque esse maxime eligendi
          nesciunt enim? Voluptates!
        </p>

        <hr className="my-5"></hr>

        <h2 className="mb-4" id="list-item-2">
          import
        </h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
          repellendus expedita repellat ducimus assumenda voluptate dolor,
          voluptatem dolorem iusto reiciendis iste temporibus odio tempore
          perferendis. Impedit quod aliquam autem quas!
        </p>

        <CodeCopy code={codeImport} />

        <hr className="my-5"></hr>

        <h2 className="mb-4" id="section2">
          Usage
        </h2>

        <h3 className="mb-4" id="list-item-3">
          Un nivel
        </h3>
        <p className="mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
          dolorum consequuntur ea voluptatem, expedita odio eaque sint
          doloremque vero assumenda reiciendis tenetur magnam recusandae iure
          maxime explicabo officia officiis? Reprehenderit?
        </p>
        <CodeCopy code={codeComponent1} />
        <br />
        {/* <NavigationVertical items={navigationItems1} /> */}
        
        <br />
        <br />

        <h3 className="mb-4" id="list-item-4">
          Dos niveles
        </h3>
        <p className="mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
          dolorum consequuntur ea voluptatem, expedita odio eaque sint
          doloremque vero assumenda reiciendis tenetur magnam recusandae iure
          maxime explicabo officia officiis? Reprehenderit?
        </p>

        <CodeCopy code={codeComponent2} />

        <br />

        {/* <NavigationVertical items={navigationItems2} /> */}

        <br />
        <br />

        <h3 className="mb-4" id="list-item-5">
          Tres niveles 
        </h3>
        <p className="mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
          dolorum consequuntur ea voluptatem, expedita odio eaque sint
          doloremque vero assumenda reiciendis tenetur magnam recusandae iure
          maxime explicabo officia officiis? Reprehenderit?
        </p>
        
        <CodeCopy code={codeComponent3} />

        <br />

        {/* <NavigationVertical items={navigationItems3} /> */}

        <br />

      </div>

      <div className="">
        {/* <ScrollSpy items={sectionsScroll} /> */}
      </div>

    </>
  );
};

export default NavVerticalModule;
