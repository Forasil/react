function CartPage({cart, setCart, cartCounter, setCartCounter}) {
  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

  const removeFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
    setCartCounter(cartCounter - 1);
  };
    
  return(
    <div className="cart-page">
      <h1>Корзина</h1>
      <p>Количество товаров: {cartCounter}</p>
      {cart.length === 0 ? (
          <p>Корзина пуста</p>
            ) : (
        <div>
          {cart && cart.map(product => (
            <div key={product.id} className="cart-item">
              <img src={product.img} alt={product.title}></img>
              <h3>{product.title}</h3>
              <p>{product.price} руб.</p>
              <button onClick={() => removeFromCart(product)}>Удалить</button>
            </div>
        ))}
        <h2>Итого: {totalPrice}</h2>
      </div>
      )}
    </div>
    );
}

export default CartPage;