import './App.css';
import Header from './components/header.js';
import Home from './pages/home.js';
import Footer from './components/Footer.js';  // Importing Footer component

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer /> {/* Adding the Footer component here */}
    </div>
  );
}

export default App;
