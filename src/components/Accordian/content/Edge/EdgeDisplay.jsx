import React from "react";
import CodeMirror from '@uiw/react-codemirror';
import DarkTheme from "./theme";
import { javascript } from '@codemirror/lang-javascript';

export default function EdgeDisplay({ content, setContent, height, width, value }) {
  const onChange = (value) => {
    console.log(value)
    try {
      setContent(JSON.parse(value.split("data = ")[1]));
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="overflow-x-auto m-5">
      <CodeMirror
          value={`
          data = ${JSON.stringify(content, null, 2)}
          `}
          height={height}
          width= {width}
          theme={DarkTheme}
          extensions={[javascript({ jsx: true })]}
          onChange={(e) => onChange(e)}
        />
    </div>
  );
}
