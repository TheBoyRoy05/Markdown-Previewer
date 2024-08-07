import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import defaultMD from "./default.md";
import { useState, useEffect } from "react";

function App() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(defaultMD)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <>
      <div id="editorWrap">
        <h2 className="title">Editor</h2>
        <textarea
          defaultValue={markdown}
          id="editor"
          onChange={(e) => setMarkdown(e.target.value)}
          rows={20} 
        ></textarea>
      </div>
      <div id="previewWrap">
        <h2 className="title">Preview</h2>
        <div id="preview">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export default App;
