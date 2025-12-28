import Header from "./components/Header";
import Slideshow from "./components/Slideshow";
import LeftInfo from "./components/LeftInfo";
import RightIntro from "./components/RightIntro";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      
      <div style={{ padding: "30px 0" }}>
        <Slideshow />
      </div>

      <div className="grid">
        <LeftInfo />
        <RightIntro />
      </div>

      <Footer />
      <Contact />
    </>
  );
}

export default App;
