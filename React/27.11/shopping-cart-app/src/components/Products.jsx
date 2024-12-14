import { useDispatch } from "react-redux";
import { addItem } from "../store/slices/cartSilce.JS";

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Headphones", price: 100 },
];

const Products = () => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    const itemData = {
      ...item,
      Quantity: 1,
      totalPrice: item.price,
    };
    dispatch(addItem(itemData));
  };

  return (
    <div>
      <h2>Products List</h2>
      {products.map((pro) => (
        <div key={pro.id}>
          <span>
            {pro.name}-{pro.price}$
          </span>
          <button onClick={() => handleAddItem(pro)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
