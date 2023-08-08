// DEPENDENCIES
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import {Routes, Route} from "react-router-dom"

// PAGES
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Nav from "./components/NavBar";
// import { Route } from "react-router-dom";

// COMPONENTS
// import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Routes>
       
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Index />} />
            <Route path="/movies/new" element={<New />} />
            <Route exact path="/movies/:id" element={<Show />} />
            <Route path="/movies/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
      
      </Routes>
    </div>
  );
}

export default App;