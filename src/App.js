import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Form from './pages/Form';
import Header from './component/Header';
import Footer from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='form' element={<Form/>}/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
