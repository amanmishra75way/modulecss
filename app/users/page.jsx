import React from "react";
import style from "./index.module.css";
const page = () => {
  return (
    <>
      <div className={style.container}>This is module css</div>
      <div className="container">This is global css</div>
    </>
  );
};

export default page;
