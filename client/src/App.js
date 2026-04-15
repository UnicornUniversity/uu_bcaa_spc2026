import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Categories from "./categories/categories";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<div>Transaction List</div>} />
            <Route path="/categoryList" element={<Categories />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
