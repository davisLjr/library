// En el archivo Audio.tsx
import React from "react";
// import Audio from "@componentes/Audio";
import CodeCopy from "@/components/CodeBox";

const AudioModule: React.FC = () => {
  const codeImport = `
    import Audio from "@componentes/Audio";
  `;

  const codeBanner = `
    <Audio title="Canción Favorita" description="Una canción increíble que debes escuchar.">
      <audio controls>
        <source src="ruta-de-tu-archivo-de-audio.mp3" type="audio/mp3" />
        Tu navegador no soporta el elemento de audio.
      </audio>
    </Audio>
  `;

  return (
    <div className="col-12 col-lg-8">
      <h1 className="mb-4">Audio</h1>

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

      <h4 className="mb-4">Simple</h4>

      <p className="mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dolorum
        consequuntur ea voluptatem, expedita odio eaque sint doloremque vero
        assumenda reiciendis tenetur magnam recusandae iure maxime explicabo
        officia officiis? Reprehenderit?
      </p>

      {/* <Audio
        title="Canción Favorita"
        description="Una canción increíble que debes escuchar."
      >
        <audio controls>
          <source src="ruta-de-tu-archivo-de-audio.mp3" type="audio/mp3" />
          Tu navegador no soporta el elemento de audio.
        </audio>
      </Audio> */}

      <CodeCopy code={codeBanner} />

      <hr className="my-5" />
    </div>
  );
};

export default AudioModule;
