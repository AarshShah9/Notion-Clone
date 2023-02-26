import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* <Route path="/users/:noteId" element={<h1>test</h1>}></Route> */}
          <Route path="/" element={<h1 id="content"></h1>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
