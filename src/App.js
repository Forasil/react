import './App.css';
import MainPage from './pages/MainPage'
import CartPage from './pages/CartPage';
import Aside from './components/Aside';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header></Header>
      <Aside></Aside>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/cart">Корзина</Link>
      </nav>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
        </Routes>
    </Router>
  );
}

export default App;
