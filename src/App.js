import './App.css';
import Footer from './Footer';
import Canvas from './canvas';
import Body from './body';
import Navbar from './navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Canvas />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
