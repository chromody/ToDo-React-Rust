//importing router
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Leftbar from "./components/Leftbar";
import Tasks from './views/Tasks';
import NotFound from "./views/NotFound";

function App() {
  return (
    <Router>
      <Leftbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
