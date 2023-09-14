import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="m-2">
      <Button btnName={"All"} />
      <Button btnName={"Entertainment"} />
      <Button btnName={"Movies"} />
      <Button btnName={"Dramas"} />
      <Button btnName={"Cricket"} />
      <Button btnName={"Top"} />
      <Button btnName={"Most Watched"} />
    </div>
  );
};

export default ButtonList;
