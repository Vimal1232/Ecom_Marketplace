import React, { useState } from "react";

const useButtonchange = () => {
  const [background, setbackground] = useState([]);
  const [color, setcolor] = useState([]);
  const [background2, setbackground2] = useState([]);
  const [color2, setcolor2] = useState([]);
  const [price, setprice] = useState([]);
  const [price2, setprice2] = useState([]);
  const [price3, setprice3] = useState([]);

  const buttonClicked1 = () => {
    setbackground("bg-primary");
    setbackground2("bg-differentpure2");
    setcolor("text-white");
    setcolor2("text-greyishblue");
    setprice("$24");
    setprice2("$48");
    setprice3("$99");
  };
  const buttonClicked2 = () => {
    setbackground("bg-differentpure2");
    setbackground2("bg-primary");
    setcolor("text-greyishblue");
    setcolor2("text-white");
    setprice("$48");
    setprice2("$96");
    setprice3("$108");
  };
  return {
    background,
    color,
    background2,
    color2,
    price,
    price2,
    price3,
    buttonClicked1,
    buttonClicked2,
  };
};

export default useButtonchange;
