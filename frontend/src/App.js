
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './components/screens/HomeScreen.js';
import ProductScreen from './components/screens/ProductScreen.js';
function App() {

  return (
    <BrowserRouter>
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
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">
          All right reserved.
        </footer>
      </div >
    </BrowserRouter>
  );
}

export default App;
