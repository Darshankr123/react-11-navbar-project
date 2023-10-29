import React, { useState } from "react";
import { links } from "./data";
const Links = () => {
  const [value, setValue] = useState(links);
  return (
    <div>
      {value.map((item) => {
        const { id, url, text } = item;
        return (
          <div key={id}>
            <a href={url}>{text}</a>
          </div>
        );
      })}
    </div>
  );
};

export default Links;
