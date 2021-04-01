import React from "react";
import Button from "@material-ui/core/Button";

const Option = ({ value = "button", check, disableBtns, btnStyle }) => {
  if (!btnStyle) {
    // const {variant,color}=btnStyle;
    btnStyle = {};
    btnStyle.variant = "";
    btnStyle.color = "";
  }

  return (
    <>
      <Button
        variant={
          btnStyle.variant === "contained" ? btnStyle.variant : "outlined"
        }
        color={btnStyle.color ? btnStyle.color : "default"}
        onClick={(e) => check(value,e)}
        disabled={disableBtns}
      >
        {value}
      </Button>
    </>
  );
};

export default Option;

Option.defaultProps = {
  btnStyle: {
    variant: "",
    color: "",
  },
};
