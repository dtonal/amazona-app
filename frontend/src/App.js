
import { products } from './data.js';

const cards = products.map(product => {
  return <div className="card" key={product._id}>
    <a href={'products/' + product._id + '.html'}>
      <img className="medium" src={'images/p' + product._id + '.jpg'} alt="product" />
    </a>
    <div className="card-body">
      <a href={'products/' + product._id + '.html'}>
        <h2>{product.name}</h2>
      </a>
      <div className="rating">
        <span><i className="fa fa-star"></i></span>
        <span><i className="fa fa-star"></i></span>
        <span><i className="fa fa-star"></i></span>
        <span><i className="fa fa-star"></i></span>
        <span><i className="fa fa-star"></i></span>
      </div>
      <div className="price">
        {product.price}
      </div>
    </div>
  </div>
});


function App() {

  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <a href="/">amazona</a>
        </div>
        <div className="header-links">
          <a href="/signin">signin</a>
          <a href="/cart">cart</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {cards}
        </div>
      </main>
      <footer className="row center">
        All right reserved.
      </footer>
    </div >
  );
}

export default App;
