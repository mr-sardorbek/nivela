import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/mainLayout";
import { Home, Shop } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<h1>Cart</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
