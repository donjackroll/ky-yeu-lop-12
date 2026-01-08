import Header from "./components/Header";
import Slideshow from "./components/Slideshow";
import LeftInfo from "./components/LeftInfo";
import RightIntro from "./components/RightIntro";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Body from "./components/body/Body";
function App() {
  return (
    <>
      <Header />
      
      <div style={{ padding: "30px 0" }}>
        <Slideshow />
        <Body />
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
