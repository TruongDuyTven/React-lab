import './App.css';
import Films from './components/Films';
import { Routes, Route } from 'react-router-dom';
import Detail from './pages/detail'
import Contact from './pages/contact'
import Header from './components/header'
import Footer from './components/footer'
import useTheme from './hook/useTheme';
import About from './pages/about';
import New from './pages/new';
import Login from './components/login';
import Createfilm from './pages/createfilm';
import Updatefilm from './pages/updatefilm';


function App() {
  
  const { theme } = useTheme();
  return (
    <div className="App" style={{backgroundColor: theme.backgroundColor}}>
      <Header />
      <Routes>
        <Route path="/" element={<Films/> } />
        <Route path='/detail/:id' element={<Detail/> } />
        <Route path="/contact" element={<Contact /> } />
        <Route path="/about" element={<About /> } />
        <Route path="/new" element={<New /> } />
        <Route path="/createfilm" element={<Createfilm /> } />
        <Route path="/login" element={<Login /> } />
        <Route path="/updatefilm/:id" element={<Updatefilm /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
