import "./App.css";
import CarouselContainer from "./components/CarousalContainer";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import ResponsiveGrid from "./components/ResponsiveGrid";
import { Footer } from "./components/Footer";
function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <CarouselContainer />
      <ResponsiveGrid />
      <Footer />
    </div>
  );
}

export default App;
