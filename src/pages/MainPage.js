import ProductCard from "../components/ProductCard";
import CartPage from "./CartPage";
import { useState } from "react";


function MainPage() {
    const [cart, setCart] = useState([]);
    const [cartCounter, setCartCounter] = useState(0);

    const addToCart = (product) => {
        setCart([...cart, product]);
        setCartCounter(cartCounter + 1);
    };
    const products = [
        {
            id: 1,
            title: "Наполеон",
            description: "Торт Наполеон",
            price: 200,
            img: "/assets/наполеон.png"
        },
        {
          id: 2,
          title: "Прага",
          description: "Торт Прага",
          price: 200,
          img: "/assets/прага.png"
        },
        {
          id: 3,
          title: "Медовик",
          description: "Торт Медовик",
          price: 200,
          img: "/assets/медовик.png"
        },
        {
            id: 4,
            title: "Ванильное",
            description: "Мороженое Ванильное",
            price: 100,
            img: "/assets/ванильное мороженое.png"
        },
        {
          id: 5,
          title: "Шоколадное",
          description: "Мороженое Шоколадное",
          price: 100,
          img: "/assets/шоколадное мороженое.png"
        },
        {
          id: 6,
          title: "Клубничное",
          description: "Мороженое Клубничное",
          price: 100,
          img: "/assets/клубничное мороженое.png"
        },
        {
            id: 7,
            title: "Яблоки",
            description: "Фрукты Яблоки",
            price: 150,
            img: "/assets/яблоки.png"
        },
        {
          id: 8,
          title: "Бананы",
          description: "Фрукты Бананы",
          price: 150,
          img: "/assets/бананы.png"
        },
        {
          id: 9,
          title: "Апельсины",
          description: "Фрукты Апельсины",
          price: 150,
          img: "/assets/апельсины.png"
       },
       {
        id: 10,
        title: "Кокосы",
        description: "Фрукты Кокосы",
        price: 150,
        img: "/assets/кокосы.png"
     }
    ];

    return(
    <div className="App">
      <h2>Товары</h2>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart}>

          </ProductCard>
              ))}
      </div>
    </div>
    );
}

export default MainPage;