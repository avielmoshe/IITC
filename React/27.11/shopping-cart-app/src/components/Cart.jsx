import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../store/slices/cartSilce.JS";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <div>
      <h2>My Cart</h2>
      <p>Total items:{cart.totalQuantity}</p>
      <p>Total price:{cart.totalPrice}</p>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id} style={{ margin: "10px 0" }}>
            <span>
              {item.name}-{item.price}*{item.Quantity}={item.totalPrice}
            </span>
            <button onClick={() => handleRemoveItem(item.id)}>
              Remove to cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
