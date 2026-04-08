import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<div>Transaction List</div>} />
            <Route path="/categoryList" element={<div>categoryList</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
