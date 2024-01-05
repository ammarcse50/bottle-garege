import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);

  useEffect(() => {
    fetch("bottle.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  return (
    <div>
      <h2>Bottles Here</h2>
      {bottles.length}

      {bottles.map((bottle) => (
        <Bottle key={bottle.key} bottle={bottle}></Bottle>
      ))}
    </div>
  );
};

export default Bottles;
