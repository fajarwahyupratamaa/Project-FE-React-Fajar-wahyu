import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    price: '',
    brand: '',
    sku: '',
    weight: ''
  });

  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", form);
    alert("Product successfully saved!"); // Show pop-up
    // Reset form if needed
    setForm({
      title: '',
      description: '',
      price: '',
      brand: '',
      sku: '',
      weight: ''
    });
    // Optionally navigate back to home or another page
    navigate('/'); // Navigate to home page or adjust path as needed
  };

  return (
    <div className="add-product">
      <h2>Add New Product</h2>
      <button onClick={() => navigate(-1)} style={{ marginBottom: "20px" }}>
        &larr; Back
      </button>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input 
            type="text" 
            name="title" 
            value={form.title} 
            onChange={handleChange} 
            required 
          />
        </label>
        <label>
          Description:
          <input 
            type="text" 
            name="description" 
            value={form.description} 
            onChange={handleChange} 
            required 
          />
        </label>
        <label>
          Price:
          <input 
            type="number" 
            name="price" 
            value={form.price} 
            onChange={handleChange} 
            required 
          />
        </label>
        <label>
          Brand:
          <input 
            type="text" 
            name="brand" 
            value={form.brand} 
            onChange={handleChange} 
            required 
          />
        </label>
        <label>
          SKU:
          <input 
            type="text" 
            name="sku" 
            value={form.sku} 
            onChange={handleChange} 
            required 
          />
        </label>
        <label>
          Weight:
          <input 
            type="number" 
            name="weight" 
            value={form.weight} 
            onChange={handleChange} 
            required 
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddProduct;
