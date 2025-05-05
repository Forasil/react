import ProductCard from "../components/ProductCard";

function MainPage() {
    const products = [
        {
            id: 1,
            title: "Резинка",
            description: "Резинка для волос",
            price: 100,
            imageUrl: ""
        },
        {
            id: 2,
            title: "Жвачка",
            description: "Жвачка для классного дыхания",
            price: 200,
            imageUrl: ""
        },
        {
            id: 3,
            title: "Ракушка",
            description: "Ракушка морская",
            price: 100,
            imageUrl: ""
        }
    ];

    return(
    <div className="App">
      <h2>Товары</h2>
      {products.map((product) => (
        <ProductCard name={product.name} desc={product.description} price={product.price} img={product.img}>

        </ProductCard>
            ))}
    </div>
    );
}

export default MainPage;