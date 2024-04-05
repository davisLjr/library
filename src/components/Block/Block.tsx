import React, {ReactNode} from "react";
import BlockTitle from "./BlockTitle";
import BlockDescription from "./BlockDescription";
import BlockBox from "./BlockBox";

export interface BlockData {
  className?: string;
}

export interface BlockComponentData extends BlockData {
  title: string;
  description: string;
  children?: ReactNode | ReactNode[];
}

export default function Block({
  title,
  description,
  children,
}: BlockComponentData) {
  return (
    <BlockBox className="bg-light">
      <BlockTitle title={title} />
      <BlockDescription description={description} />
      {children}
    </BlockBox>
  );
}

{
  /* <BlockBox className="bg-light">
<BlockTitle title="titulo" />
<BlockDescription description="descripcion" />
<Button text="boton" isExpandable />
Barra de progreso
</BlockBox> */
}
