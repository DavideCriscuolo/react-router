import { useEffect, useState } from "react";

export default function Products() {
  const url = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState([]);

  function genrProdcuts() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }

  useEffect(genrProdcuts, []);

  return (
    <>
      <main>
        <div className="container">
          <div className="row row-cols-4">
            {products.map((product) => {
              return (
                <div className="col p-2">
                  <div key={product.id} class="card">
                    <img
                      className="card-img-top "
                      src={product.image}
                      alt="Title"
                    />
                    <div className="card-body">
                      <h4 className="card-title">{product.title}</h4>
                      <p className="card-text">{product.description}</p>
                      <span>{product.category}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
