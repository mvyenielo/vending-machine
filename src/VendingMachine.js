import React from "react";
import { Link } from "react-router-dom";

const SNACK_LIST = ["SODA", "CHIPS", "FRESH SARDINES", "CANDY", "GATORADE"];

function VendingMachine() {
  return (
    <div>
      {SNACK_LIST.map(snack =>
        <Link className="btn btn-primary" key={snack} to={`/${snack}`}>{snack}</Link>)}
    </div>
  );
}

export default VendingMachine;