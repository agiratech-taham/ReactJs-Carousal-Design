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
      <div><pre> </pre></div>
      <ResponsiveGrid />
      <div><pre> </pre></div>
      <Footer />
    </div>
  );
}

export default App;
