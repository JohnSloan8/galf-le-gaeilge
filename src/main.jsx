import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Courses from "./routes/courses";
import Players from "./routes/players";
import Home from "./routes/home";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="players" element={<Players />} />
      </Route>    
    </Routes>
  </BrowserRouter>,
  rootElement
);
