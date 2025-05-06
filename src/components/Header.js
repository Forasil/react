import { useState } from 'react'
import { Link } from 'react-router-dom';
 
function Header() {
    const [cartItemCount, setItemCount] = useState(0)

    return (
        <nav>
            <div className='navbar'>
                <Link to="/">Главная</Link>
                <Link to="/cart">Корзина</Link>
            </div>
        </nav>
    );
  }

  export default Header;
  