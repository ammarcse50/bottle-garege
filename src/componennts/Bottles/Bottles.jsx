import { useEffect } from "react";
import { useState } from "react";
import "./Bottles.css";
import Bottle from "../Bottle/Bottle";
const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  console.log(bottles);

  useEffect(() => {
    fetch("bottle.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
          
  const handleAddToCart = (bottle)=>{
    // console.log(bottle)
    
         const newcart = [...cart,bottle]
            setCart(newcart)
    

  }


  return (
    <div>
      <h2>Bottle Available: {bottles.length}</h2>
       <h2>Cart: {cart.length}</h2>
      <div className="bottles-container">
      
        {bottles.map((bottle) => (
          <Bottle bottle={bottle}
            key={bottle.id}

            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
