import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Top, Question, Omikuji, Palette, NotFound } from "./Components/index.js";

const App = () => {
  return (
    <BrowserRouter basename='/color-proposal'>
      <Routes>
        <Route path={`*`} element={<NotFound />} />
        <Route path={`/`} element={<Top />} />
        <Route path={`/question/`} element={<Question />} />
        <Route path={`/omikuji/`} element={<Omikuji />} />
        <Route path={`/palette/`} element={<Palette />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;