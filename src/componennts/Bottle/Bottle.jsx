import "./Bottle.css";
const Bottle = ({ bottle, handleAddToCart }) => {
  const { img, name, price } = bottle;

  return (
    <div className="bottle-container">
      <h4>Name: {name}</h4>
      <img src={img} alt="ammar"></img>

      <h4>Price:{price}</h4>
      <button onClick={()=>handleAddToCart(bottle)}>Purchase</button>
    </div>
  );
};

export default Bottle;
