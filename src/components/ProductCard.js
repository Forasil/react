function ProductCard({name, desc, price, img}) {
    return (
        <div className="card">
            <div className="card-img">
                <img src={img}></img>
            </div>
            <p className="card-name">{name}</p>
            <p className="card-desc">{desc}</p>
            <p className="card-price">{price}</p>
            <button onClick={() => alert('Товар добавлен в корзину')}>Добавить</button>
        </div>
    );
}

export default ProductCard;