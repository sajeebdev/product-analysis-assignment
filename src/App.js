
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Dashboard from './Components/Dashboard/Dashboard';
import Heder from './Components/Header/Heder';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div>
      <Heder/>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='reviews' element={<Reviews/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='blogs' element={<Blogs/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='*' element={<NotFound/>}/>

      </Routes>
    </div>
  );
}

export default App;
