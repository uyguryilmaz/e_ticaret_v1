import Banners from "./components/Banners/Banners";
import Brands from "./components/Brands/Brands";
import Header from "./components/Header/Header";
import TrendProducts from "./components/Products/TrendProducts";
import Services from "./components/services/services";


function App() {
  return (
    <>
      <Header/>
      <Banners/>
      <Services/>
      <TrendProducts/>
      <Brands/>
    </>
  );
  
}

export default App;
