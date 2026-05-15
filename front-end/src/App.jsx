import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageDashboard from "./pages/PageDashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageDashboard />} />
        </Routes>
      </BrowserRouter>
      {/* <h1>Hello World!</h1> */}
    </>
  );
}

export default App;
