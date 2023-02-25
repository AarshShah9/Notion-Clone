import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes element={<Layout />}>
        {/* <Route path="/users/:noteId" element={<h1>test</h1>}></Route> */}
        <Route path="/" element={<h1 id="content">test</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
