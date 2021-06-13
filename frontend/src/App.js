
import data from "./data";

function App() {
  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <a href="index.html">amazona</a>
        </div>
        <div className="header-links">
          <a href="signin.html">signin</a>
          <a href="cart.html">cart</a>
        </div>
      </header>
      <main>
        <div className="row center">
          <div className="card">
            <a href="product.html">
              <img className="medium" src="images/product-1.jpg" alt="product" />
            </a>
            <div className="card-body">
              <a href="product.html">
                <h2>Kastenwagen</h2>
              </a>
              <div className="rating">
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
              </div>
              <div className="price">
                1.20 €
              </div>
            </div>
          </div>
          <div className="card">
            <a href="product.html">
              <img className="medium" src="images/product-1.jpg" alt="product" />
            </a>
            <div className="card-body">
              <a href="product.html">
                <h2>Kastenwagen</h2>
              </a>
              <div className="rating">
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
              </div>
              <div className="price">
                1.20 €
              </div>
            </div>
          </div>
          <div className="card">
            <a href="product.html">
              <img className="medium" src="images/product-1.jpg" alt="product" />
            </a>
            <div className="card-body">
              <a href="product.html">
                <h2>Kastenwagen</h2>
              </a>
              <div className="rating">
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
              </div>
              <div className="price">
                1.20 €
              </div>
            </div>
          </div>
          <div className="card">
            <a href="product.html">
              <img className="medium" src="images/product-1.jpg" alt="product" />
            </a>
            <div className="card-body">
              <a href="product.html">
                <h2>Kastenwagen</h2>
              </a>
              <div className="rating">
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="far fa-star"></i></span>
              </div>
              <div className="price">
                1.20 €
              </div>
            </div>
          </div>
          <div className="card">
            <a href="product.html">
              <img className="medium" src="images/product-1.jpg" alt="product" />
            </a>
            <div className="card-body">
              <a href="product.html">
                <h2>Kastenwagen</h2>
              </a>
              <div className="rating">
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="far fa-star-half"></i></span>
              </div>
              <div className="price">
                1.20 €
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="row center">
        All right reserved.
      </footer>
    </div >
  );
}

export default App;
