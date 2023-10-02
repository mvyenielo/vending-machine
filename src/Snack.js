import React from "react";
import { useParams, Link } from "react-router-dom";

const SNACK_IMGS = {
  SODA: "https://i5.walmartimages.com/asr/f311a391-8c1c-4b38-b7f7-788d26359f44.4eb13d8fade9191d2c4f05fdc7cca03f.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
}

function Snack() {
  const { snack } = useParams();
  return (
    <>
      <h1> You got a {snack}!</h1>
      <img src={`${SNACK_IMGS[snack]}`}></img>
      <Link to="/" >Back</Link>
    </>
  );
}

export default Snack;