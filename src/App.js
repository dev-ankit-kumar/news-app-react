import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './components/About';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/about" element={<About/>}/>

        <Route path="/" element={<News/>}/>
      
      
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
