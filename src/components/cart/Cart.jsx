import PropTypes from "prop-types";

import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <div>
      <h4>cart: {cart.length}</h4>
      <div className="cart-container">
        {cart.map((bottle) => (
          <img src={bottle.img} key={bottle.id}></img>
        ))}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  bottle: PropTypes.object.isRequired,
};

export default Cart;
