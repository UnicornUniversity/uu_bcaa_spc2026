import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Categories from "./categories/categories.jsx";
import Transactions from "./transactions/transactions.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Transactions />} />
            <Route path="/categoryList" element={<Categories />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
