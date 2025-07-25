import Banners from "./components/Banners/Banners";
import Brands from "./components/Brands/Brands";
import Discount from "./components/Discount/Discount";
import Header from "./components/Header/Header";
import NewProducts from "./components/Products/NewProducts";
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
      <NewProducts/>
      <Discount/>
    </>
  );
  
}

export default App;
