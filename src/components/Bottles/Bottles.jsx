import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToLS, getStoredCart } from "../Utilitties/localstorage";

 import Cart from "../cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottle.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  //load cart from loacal storage

  useEffect(() => {
    console.log("called the useEffect", bottles.length);

    if (bottles.length > 0) {
      const storedCart = getStoredCart();

      console.log(storedCart);
      const saveCart = [];

      for (const id of storedCart) {
        console.log(id);
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          saveCart.push(bottle);
        }
      }

      console.log("save Cart", saveCart);
      setCart(saveCart);
    }
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];

    setCart(newCart);
    addToLS(bottle.id);
  };

  return (
    <div>
      <h2>Bottles Here: {bottles.length}</h2>

             <Cart cart={cart}></Cart>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.key}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};


export default Bottles;
