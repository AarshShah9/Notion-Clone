import { useParams } from "react-router-dom";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// const { userId } = useParams();

function Editor() {
  return (
    <section className="editor">
      <ReactQuill theme="snow" />
    </section>
  );
}

export default Editor;
