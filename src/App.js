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
            path="/:index/edit"
            element={
              <h1 id="content">
                <Editor />
              </h1>
            }
          ></Route>
          <Route
            path="/:index"
            element={
              <h1 id="content">
                <Editor />
              </h1>
            }
          ></Route>
          <Route path="/" element={<h1 id="content"></h1>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
