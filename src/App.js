import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HeaderComponent from "./pageElements/Header";
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
       <Routes>
          
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
         
         
      </Routes>
    </div>
  );
}

export default App;
