import React from "react";
import style from "./tag.module.scss";

interface TagProps {
  text: string;
  color?: string;
  bg?: string;
}

const Tag: React.FC<TagProps> = ({
  text,
  color = "#000",
  bg = "rgb(196, 196, 196)",
}) => {
  return (
    <span
      className={style.tag}
      style={{
        color,
        background: bg,
      }}
    >
      <b>{text}</b>
    </span>
  );
};

export default Tag;
