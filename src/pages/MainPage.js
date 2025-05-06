import ProductCard from "../components/ProductCard";


function MainPage() {
    const products = [
        {
            id: 1,
            title: "Наполеон",
            description: "Торт Наполеон",
            price: 200,
            imageUrl: "/assets/наполеон.png"
        },
        {
          id: 2,
          title: "НПрага",
          description: "Торт Прага",
          price: 200,
          imageUrl: "/assets/прага.png"
        },
        {
          id: 3,
          title: "Медовик",
          description: "Торт Медовик",
          price: 200,
          imageUrl: "/assets/медовик.png"
        },
        {
            id: 4,
            title: "Ванильное",
            description: "Мороженое Ванильное",
            price: 100,
            imageUrl: ""
        },
        {
          id: 5,
          title: "Шоколадное",
          description: "Мороженое Шоколадное",
          price: 100,
          imageUrl: ""
        },
        {
          id: 6,
          title: "Клубничное",
          description: "Мороженое Клубничное",
          price: 100,
          imageUrl: ""
        },
        {
            id: 7,
            title: "Яблоки",
            description: "Фрукты Яблоки",
            price: 150,
            imageUrl: ""
        },
        {
          id: 8,
          title: "Бананы",
          description: "Фрукты Бананы",
          price: 150,
          imageUrl: ""
        },
        {
          id: 9,
          title: "Апельсины",
          description: "Фрукты Апельсины",
          price: 150,
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