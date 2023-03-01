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
              <div id="content">
                <Editor />
              </div>
            }
          ></Route>
          <Route
            path="/:index"
            element={
              <div id="content">
                <Editor />
              </div>
            }
          ></Route>
          <Route
            path="/"
            element={<div id="content" className="menu-spacer"></div>}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
