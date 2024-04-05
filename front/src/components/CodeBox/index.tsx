"use client";
import React, {useRef} from "react";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {dracula} from "react-syntax-highlighter/dist/esm/styles/prism";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CodeCopy = ({code}: {code: string}) => {
  const codeRef = useRef<HTMLElement | null>(null);

  const copyCode = () => {
    if (codeRef.current) {
      const codeToCopy = codeRef.current.innerText;
      navigator.clipboard.writeText(codeToCopy);

      // Muestra la notificación "Copiado"
      toast.success("Copiado", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div
      onClick={copyCode}
      style={{cursor: "pointer"}}
      className="box-code pb-2"
    >
      <SyntaxHighlighter
        language="tsx"
        style={dracula}
        customStyle={{cursor: "pointer"}}
        codeTagProps={{ref: codeRef}}
        wrapLongLines
      >
        {code}
      </SyntaxHighlighter>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default CodeCopy;
