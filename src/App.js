import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Editor from "./components/Editor";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/notes">
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/edit/1"
            element={
              <h1 id="content">
                <Editor />
              </h1>
            }
          ></Route>
          <Route path="/" element={<h1 id="content">testing</h1>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
