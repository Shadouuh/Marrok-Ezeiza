import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './assets/components/navbar/Navbar.jsx';
import Footer from './assets/components/footer/Footer.jsx';
import './globals.css'
// Pages
import Home from './assets/pages/home/Home.jsx';
import LoginPage from './assets/pages/loginPage/LoginPage.jsx';
import RegisterPage from './assets/pages/registerPage/RegisterPage.jsx';
import Cart from './assets/pages/cart/Cart.jsx';
import About from './assets/pages/about/About.jsx';
import Contact from './assets/pages/contact/Contact.jsx';
import Account from './assets/pages/account/Account.jsx';
import Catalog from './assets/pages/catalog/Catalog.jsx';
const App = () => {
  const isAuth = false;
  return (
    <Router>
      <header>
        <Navbar/>
      </header>
      <main>
      <Routes>
        {/* Rutas Publicas */}
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/nosotros' element={<About />} />
        <Route path='/contacto' element={<Contact />} />
        <Route path='/catalogo' element={<Catalog />} />
        {/* Rutas Privadas */}
        <Route path='/cart' element={isAuth ? <Cart /> : <Navigate to="/login" />} />
        <Route path='/account' element={isAuth ? <Account /> : <Navigate to="/login" />} />
        
        {/* 404 */}
        <Route path='*' element={<Home />} />
      </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
    </Router>
  );
}
export default App;