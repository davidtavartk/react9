import Access from "./components/Access/Access";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";


const App = () => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Hero />
      <Content />
      <Access />
      <Footer />
    </div>
  );
};

export default App;