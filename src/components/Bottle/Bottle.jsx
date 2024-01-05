import "./Bottle.css"
const Bottle = ({ bottle }) => {
  const { name, image, price } = bottle;

  console.log(bottle);

  return (
    <div>
      <div className="bottle">
        <img src={image} alt="" />
        <h2>Name:{name}</h2>
        <h2>price:{price}</h2>
      </div>
    </div>
  );
};

export default Bottle;
