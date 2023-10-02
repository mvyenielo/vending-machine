import React from "react";
const SNACK_LIST = ["SODA", "CHIPS", "FRESH SARDINES", "CANDY", "GATORADE"];
function VendingMachine() {
  return (
    <div>
      {SNACK_LIST.map(snack =>
        <Link key={snack} to="/snack">{snack}</Link>)}
    </div>
  );
}

export default VendingMachine;