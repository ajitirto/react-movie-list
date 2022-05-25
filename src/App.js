import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from "./components/Trending";
import SuperHero from "./components/SuperHero";

import "./style/landingPage.css";

function App() {
  return (
    <div>


      <div class="myBG">
        {/* diisi apa */}
        <NavigationBar />
        <Intro />
      </div>
      <div class="trending">
        {/* akan disi apa */}
        <Trending />
      </div>
      <div class="superhero">
        {/* diisi apa */}
        <SuperHero />
      </div>


    </div>

  );
}

export default App;
