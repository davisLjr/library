import React from "react";
import CodeCopy from "@/components/CodeBox";
// import Gallery from "@componentes/Gallery";

const GalleryModule: React.FC = () => {
  // Contenido del módulo Gallery

  const codeImport = `
    import Gallery from "@componentes/Gallery";
  `;

  const codeComponentGallery = `
    <Gallery images={images} interactive={true} />
  `;

  const codeComponentGalleryInfo = `
    const images = [
      { url: '/bacard.jpg', alt: 'Descripción de la imagen 1', author: 'Autor 1', title: 'Título 1', description: 'Descripción detallada 1' },
      { url: '/bacard.jpg', alt: 'Descripción de la imagen 2', author: 'Autor 2', title: 'Título 2', description: 'Descripción detallada 2' },
      { url: '/bacard.jpg', alt: 'Descripción de la imagen 1', author: 'Autor 1', title: 'Título 1', description: 'Descripción detallada 1' },
      { url: '/bacard.jpg', alt: 'Descripción de la imagen 2', author: 'Autor 2', title: 'Título 2', description: 'Descripción detallada 2' },
      { url: '/bacard.jpg', alt: 'Descripción de la imagen 1', author: 'Autor 1', title: 'Título 1', description: 'Descripción detallada 1' },
      { url: '/bacard.jpg', alt: 'Descripción de la imagen 1', author: 'Autor 1', title: 'Título 1', description: 'Descripción detallada 1' },
      { url: '/bacard.jpg', alt: 'Descripción de la imagen 2', author: 'Autor 2', title: 'Título 2', description: 'Descripción detallada 2' },
    ];
  `;


  const images = [
    { url: '/bacard.jpg', alt: 'Descripción de la imagen 1', author: 'Autor 1', title: 'Título 1', description: 'Descripción detallada 1' },
    { url: '/bacard.jpg', alt: 'Descripción de la imagen 2', author: 'Autor 2', title: 'Título 2', description: 'Descripción detallada 2' },
    { url: '/bacard.jpg', alt: 'Descripción de la imagen 1', author: 'Autor 1', title: 'Título 1', description: 'Descripción detallada 1' },
    { url: '/bacard.jpg', alt: 'Descripción de la imagen 2', author: 'Autor 2', title: 'Título 2', description: 'Descripción detallada 2' },
    { url: '/bacard.jpg', alt: 'Descripción de la imagen 1', author: 'Autor 1', title: 'Título 1', description: 'Descripción detallada 1' },
    { url: '/bacard.jpg', alt: 'Descripción de la imagen 1', author: 'Autor 1', title: 'Título 1', description: 'Descripción detallada 1' },
    { url: '/bacard.jpg', alt: 'Descripción de la imagen 2', author: 'Autor 2', title: 'Título 2', description: 'Descripción detallada 2' },
  ];

  return (
    <div className="col-12 col-lg-8">
      <h1 className="mb-4">Gallery</h1>

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

      <h3 className="mb-4">Interactivo</h3>

      <p className="mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dolorum
        consequuntur ea voluptatem, expedita odio eaque sint doloremque vero
        assumenda reiciendis tenetur magnam recusandae iure maxime explicabo
        officia officiis? Reprehenderit?
      </p>

      <CodeCopy code={codeComponentGalleryInfo} />

      <CodeCopy code={codeComponentGallery} />

      {/* <Gallery images={images} interactive={true} /> */}

      <hr className="my-5" />


    </div>
  );
};

export default GalleryModule;
