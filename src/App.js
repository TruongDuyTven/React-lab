import './App.css';
import Films from './components/Films';
import { Routes, Route } from "react-router-dom";
import Detail from './pages/detail'
import Contact from './pages/contact'
import Header from './components/header'
import Footer from './components/footer'
import useTheme from './hook/useTheme';

function App() {
  const { theme } = useTheme();
  return (
    <div className="App" style={{backgroundColor: theme.backgroundColor}}>
      <Header />
      <Routes>
        <Route path="/" element={<Films/> } />
        <Route path="/home" element={<Films/> } />
        <Route path='/detail/:id' element={<Detail/> } />
        <Route path="/contact" element={<Contact/> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
