import logo from './logo.svg';
import './index.css';
import Header from './components/Header';
import MobileApp from './components/MobileApp';
import Footer from './components/Footer';
import Favorites from './components/Favorites';
import Categories from './components/Categories';
import Cards from './components/Cards';
import Campaings from './components/Campaings';
import ImageSlider from './components/Slider';


function App() {
  return (
    <div className="App">
      <div>
        <Header/>
        <ImageSlider/>
        <Categories/>
        <Campaings/>
        <Favorites/>
        <MobileApp/>
        <Cards/>
        <Footer/>

      </div>
    </div>
  );
}

export default App;
