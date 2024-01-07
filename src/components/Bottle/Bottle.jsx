import "./Bottle.css"
const Bottle = ({ bottle,handleAddToCart }) => {
  const { name, img, price } = bottle;


  return (
    <div>
      <div className="bottle">
        <img src={img} alt="" />
        <h2>Name:{name}</h2>
        <h2>price:{price}</h2>
        <button onClick={()=>handleAddToCart(bottle)}>Purchase</button>
      </div>
    </div>
  );
};

export default Bottle;
