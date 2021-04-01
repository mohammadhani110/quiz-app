import React from "react";
import Option from "./Option";

const OptionList = ({ options, index,check,disableBtns,btnStyle }) => {
  return (
    <div>
      {options.length
        ? options[index].map((opt, i) => <Option key={i} value={opt} check={check} disableBtns={disableBtns} btnStyle={btnStyle}/>)
        : ""}
    </div>
  );
};

export default OptionList;

OptionList.defaultProps = {
    options: [],
    index: 0,
  }
