import React, { useState, useEffect } from "react";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (window.marked) {
      setPreview(window.marked.parse(markdown));
    }
  }, [markdown]);

  return (
    <div className="markdown-container">
      <div className="markdown-input">
        <h2>Markdown Input</h2>
        <textarea
          id="editor"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
      </div>
      <div className="markdown-preview">
        <h2>Preview</h2>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: preview }}
        />
      </div>
    </div>
  );
};

export default MarkdownEditor;


