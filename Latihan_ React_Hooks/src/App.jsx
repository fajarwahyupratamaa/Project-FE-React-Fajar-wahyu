import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import ListProduct from './ListProduct.jsx';
import Navbar from './components/Navbar.jsx';
import About from './about.jsx';
import Footer from './components/Footer.jsx';
import AddProduct from './addProduct.jsx'; // Import halaman baru
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [search, setSearch] = useState('');

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickSearch = () => {
    setSearch(text);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <div className="header">
              <h1>Welcome to Wakanda Forever Store</h1>
              <p style={{ fontSize: "small", color: "gray" }}>
                "Hello, we hope you enjoy a comfortable and pleasant shopping experience!"
              </p> 
              <button 
                className="create-product"
                onClick={() => window.location.href = '/products/add'}
              >
                Create New Product
              </button>
            </div>
            <div className="search">
              <label>
                Search Product
                <input onChange={onChangeText} value={text} type="text" />
              </label>
              <button onClick={onClickSearch}>Search</button>
            </div>
            <ListProduct search={search} />
          </>
        } />
        <Route path="/about" element={<About />} /> {/* Add this line */}
        <Route path="/products/add" element={<AddProduct />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
