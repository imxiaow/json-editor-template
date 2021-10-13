import { useState, useEffect, useMemo } from "react";
import RecursiveInput from "./RecursiveInput";


function Editor(props) {
  // rendering
  return (
    <RecursiveInput processParentData={props.data} setParentData={props.setData} type="parent" />
  );

};

export default Editor