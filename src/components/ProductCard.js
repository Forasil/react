function ProductCard({product, addToCart}) {
    return (
        <div className="card">
            <div className="card-img">
                <img src={product.img} alt={product.title}></img>
            </div>
            <p className="card-name">{product.title}</p>
            <p className="card-desc">{product.description}</p>
            <p className="card-price">Цена: {product.price}</p>
            <button onClick={() => addToCart(product)}>Добавить</button>
        </div>
        
    );
}

export default ProductCard;