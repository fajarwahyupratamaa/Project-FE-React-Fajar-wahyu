import { useState } from 'react';
import ListProduct from './ListProduct.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  const [text, setText] = useState('');  // State for the input text
  const [search, setSearch] = useState('');  // State for the search term

  // Handle text input changes
  const onChangeText = (e) => {
    setText(e.target.value);
  };

  // Handle search button click
  const onClickSearch = () => {
    setSearch(text);
  };

  return (
    <>
      <h1>Selamat Datang Di Toko Kami</h1>
      <p style={{ fontSize: "small", color: "gray" }}>Halo, kami berharap Anda menikmati pengalaman berbelanja yang nyaman dan menyenangkan!</p> 
      <div className="search">
        <label>
          Search Product
          <input onChange={onChangeText} value={text} type="text" />
        </label>
        <button onClick={onClickSearch}>Search</button>
      </div>
      
      {/* Passing the search term as a prop to ListProduct */}
      <ListProduct search={search} />

    </>
  );
}

export default App;
