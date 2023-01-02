import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound/NotFound";
import Top from "./Top/Top";
import Question from "./Question/Question";
import Omikuji from "./Omikuji/Omikuji";
import Sample from "./Sample/Sample";


const App = () => {
  return (
    <BrowserRouter basename='/color_proposal'>
      <Routes>
        <Route path={`*`} element={<NotFound />} />
        <Route path={`/`} element={<Top />} />
        <Route path={`/question/`} element={<Question />} />
        <Route path={`/omikuji/`} element={<Omikuji />} />
        <Route path={`/sample/`} element={<Sample />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;