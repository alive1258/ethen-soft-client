"use client";
import JoditEditor from "jodit-react";
import React, { useMemo, useRef } from "react";

function TextEditor({ content, setContent }) {
  const editor = useRef(null);
  const placeholder = "Start typing...";

  const config = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: placeholder || "Start typing...",
    }),
    [placeholder]
  );

  return (
    <>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={2} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
      />
    </>
  );
}

export default TextEditor;
