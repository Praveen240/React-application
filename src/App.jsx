import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Footer from './common/Footer'
import Header from './common/Header'
import Home from './Home/pages/Home'
import AboutUs from './About_us/pages/About_us'


function App() {

  return (
    
<Router>
  <div className="app-container">
    <Header />
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About_us" element={<AboutUs />} />
      </Routes>
    </div>
    <Footer />
  </div>
</Router>
  )
}

export default App
