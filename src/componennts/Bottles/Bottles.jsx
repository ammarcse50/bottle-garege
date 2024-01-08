import { useEffect } from "react";
import { useState } from "react";
import "./Bottles.css";
import Bottle from "../Bottle/Bottle";
const Bottles = () => {
  const [bottles, setBottles] = useState([]);

  console.log(bottles);

  useEffect(() => {
    fetch("bottle.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  return (
    <div>
      <h2>Bottle: {bottles.length}</h2>
      <div className="bottles-container">
        {" "}
        {bottles.map((bottle) => (
          <Bottle bottle={bottle}
            key={bottle.id}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
