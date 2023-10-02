import React from "react";
import { useParams } from "react-router-dom";

function Snack() {
  const { snack } = useParams();
  return (<h1> You got a {snack}!</h1>);
}

export default Snack;