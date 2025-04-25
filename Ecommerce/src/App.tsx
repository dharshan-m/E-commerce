import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import ProductsPage from './Pages/ProductsPage';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/ProductsPage' element={<ProductsPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
