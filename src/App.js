import './App.css';
import MainPage from './pages/MainPage'
import CartPage from './pages/CartPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Aside from './components/Aside';

function App() {
  return (
    <Router>
       <Header></Header>
       <div className='page-content'>
      
        <Aside></Aside>

        <Routes>
           <Route path='/' element={<MainPage/>}/>
           <Route path='/cart' element={<CartPage/>}/>
         </Routes>
       </div>
    </Router>
  );
}

export default App;