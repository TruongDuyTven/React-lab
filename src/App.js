import './App.css';
import { Routes, Route } from 'react-router-dom';
import Detail from './pages/detail'
import Contact from './pages/contact'
import Header from './components/header'
import useTheme from './hook/useTheme';
import About from './pages/about';
import New from './pages/news';
import Login from './components/login';
import Createfilm from './pages/createfilm';
import Updatefilm from './pages/updatefilm';
import Home from './pages/home';


function App() {
  
  const { theme } = useTheme();
  return (
    <div className="App" style={{backgroundColor: theme.backgroundColor}}>
      <Header />
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path='/detail/:id' element={<Detail/> } />
        <Route path="/contact" element={<Contact /> } />
        <Route path="/about" element={<About /> } />
        <Route path="/news" element={<New /> } />
        <Route path="/createfilm" element={<Createfilm /> } />
        <Route path="/login" element={<Login /> } />
        <Route path="/updatefilm/:id" element={<Updatefilm /> } />
      </Routes>
    </div>
  );
}

export default App;
