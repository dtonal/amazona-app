
import { products } from './data.js';
import Product from './components/Product.js'

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
          {products.map(product => <Product key={product._id} product={product} />)}
        </div>
      </main>
      <footer className="row center">
        All right reserved.
      </footer>
    </div >
  );
}

export default App;
