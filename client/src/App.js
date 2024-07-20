
import './App.css';

import Header from './pages/Header/Header';
import Footer from './pages/Header/Footer';
import Contacts from "./pages/Contact/Contacts";
import MainSection from './pages/Teams/MainSection';
import Home from "./pages/Home/Home";
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import FAQs from './pages/Header/FAQs';
import Blog from "./pages/BlogPages/assets/Blog";
import Blogpg from './pages/BlogPages/BlogPg';
import Bootcamp from './pages/Bootcamp/Bootcamp';
import Upcoming from './pages/Home/Upcoming';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">

<Header/>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/contact" element={<Contacts/>}/>
  <Route path="/team" element={<MainSection/>}/>
  <Route path="/faq" element={<FAQs/>}/>
  <Route path="/blog" element={<Blogpg/>}/>
  <Route path="/googlegenerationscholarship" element={<Blog/>}/>
  <Route path="/bootcamp" element={<Bootcamp/>}/>
  <Route path="/upevent" element={<Upcoming/>}/>
  
</Routes>
</BrowserRouter>
<Footer/>

    </div>
  );
}

export default App;
