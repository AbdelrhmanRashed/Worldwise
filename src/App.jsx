import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Pricing from "./pages/Pricing";
import Notfound from "./pages/Notfound";
import AppLayout from "./pages/AppLayout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="products" element={<Products />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="app" element={<AppLayout />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
