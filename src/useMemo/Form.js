import React, { useState, useMemo, useRef } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const nameRef = useRef()

  const handleSubmit = () => {
    if (name && price) {
      setProducts([
        ...products,
        {
          name,
          price: +price,
        },
      ]);
      setName("");
      setPrice("");
      nameRef.current.focus();
    }
  };

  const total = useMemo(() => {
    return products.reduce((result, product) => {
      console.log('Tính toán lại ...');
      return result + product.price;
    }, 0);
  }, [products])

  return (
    <div style={{ width: "200px", margin: "auto" }}>
      <input
        ref={nameRef}
        type="text"
        value={name}
        placeholder="Enter name ..."
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={price}
        placeholder="Enter price ..."
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <hr />
      Total: {total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Form;
