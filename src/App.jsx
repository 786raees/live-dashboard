import { BrowserRouter, Route, Routes } from "react-router-dom";
import Last30DaysDashBoard from "./Last30DaysDashBoard";
import Layout from "./pages/Layout";
function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index path="Home" element={<Last30DaysDashBoard/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
    );
}

export default App;
