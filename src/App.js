
import './App.css'
import Navigation from './components/navigation/Navigation';
import './normalize.css'
import Billboard from './components/billboard/Billboard';
import Footer from './components/footer/Footer';
import Titles from './components/titles/Titles';

function App() {
  return (
    <div className="App">
    <Navigation />
     <Billboard/> 
     <Titles/> 
    <Footer/> 
    </div>
  );
}

export default App;
