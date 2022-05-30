
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './componants/Header/Header';
import Home from './componants/Home/Home'
import Countries from './componants/Countries/Countries';
import About from './componants/About/About';
import Blog from './componants/Blog/Blog';
import NotFound from './componants/NotFound/NotFound';
import CountryDetailes from './componants/CountryDetailes/CountryDetailes';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/countries' element={<Countries></Countries>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path= '/country/:cnndet' element={<CountryDetailes></CountryDetailes>}></Route>
        
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
    </div>
  );
}

export default App;
