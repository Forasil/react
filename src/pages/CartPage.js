import { useState } from "react";

function CartPage() {
  const [cartCounter, setCartCounter] = useState(0);
    return(
    <div className="App">
      <h1>Это корзина</h1>
      <p>Количество товаров: {cartCounter}</p>
    </div>
    );
}

export default CartPage;