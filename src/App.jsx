import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/mainLayout";
import { Home } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<h1>Shop</h1>} />
          <Route path="/cart" element={<h1>Cart</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
