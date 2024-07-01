import './App.css'
import Home from './components/Pages/Home';
import Products from './components/Pages/Products'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/products" element={<Products/>}/>
      <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>

    </>
  )
}

export default App
