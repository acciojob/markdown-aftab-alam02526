import React, { useState, useEffect } from "react";

let markedLib;
(async () => {
  const { marked } = await import("marked");
  markedLib = marked;
})();

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (markedLib) {
      setPreview(markedLib(markdown));
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
          placeholder="Type your markdown here..."
        ></textarea>
      </div>

      <div className="markdown-preview">
        <h2>Preview</h2>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: preview }}
        ></div>
      </div>
    </div>
  );
};

export default MarkdownEditor;

