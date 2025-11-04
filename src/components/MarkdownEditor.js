import React, { useState, useEffect } from "react";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (window.marked) {
      setPreview(window.marked.parse(markdown));
    } else {
      // fallback if marked not loaded
      setPreview(markdown);
    }
  }, [markdown]);

  return (
    <div className="editor-container">
      <textarea
        className="editor"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Type your markdown here..."
      />

      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: preview }}
      />
    </div>
  );
};

export default MarkdownEditor;


