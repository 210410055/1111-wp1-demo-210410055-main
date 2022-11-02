import {BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage_55 from './pages/HomePage_55';
import AboutPage_55 from './pages/AboutPage_55';
import ProductsPage_55 from './pages/ProductsPage_55';
import ErrorPage_55 from './pages/ErrorPage_55';
import ShareLayout_55 from './pages/ShareLayout_55';
import ShareProductsLayout_55 from './pages/ShareProductsLayout_55';
import SingleProductPage_55 from './pages/SingleProductPage_55';
import Booklistpage_55 from './pages/Booklistpage_55';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ShareLayout_55/>} >
      <Route index element={<HomePage_55 />} />
      <Route path='about' element={<AboutPage_55 />} />
      <Route path='products' element={<ShareProductsLayout_55 />} >
        <Route index element={<ProductsPage_55 />} />
        <Route path=":productId"  element={<><SingleProductPage_55 /></>}/>
      </Route>
      <Route path='booklist' element={<Booklistpage_55></Booklistpage_55>} />
      <Route path='*'  element={<ErrorPage_55 />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
