import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import Editor from "./components/Editor";
import Viewer from "./components/Viewer";
import "./App.css";

// fix scroll bar on entire page and addd scroll for the menu
// fix where delete button directs

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
                <Viewer />
                {/* <Editor /> */}
              </div>
            }
          ></Route>
          <Route
            path="/"
            element={
              <div id="content" className="menu-spacer">
                Select a note, or create a new one
              </div>
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
