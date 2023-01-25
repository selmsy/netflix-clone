
import './App.css'
import './normalize.css'
import Navigation from './components/navigation';
import Bilboard from './components/bilboard/Bilboard';
import Titles from './components/titles/Titles';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
    <Navigation />
     <Bilboard/> 
     <Titles/> 
     <Footer/> 
    </div>
  );
}

export default App;
