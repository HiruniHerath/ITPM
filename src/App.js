import React from "react";
import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";

import CreatePost from './pages/createpostDomestic'
import Createwild from './pages/createpostWild'
import Home from './pages/home'
import LostandFoundHome from './pages/lostandfound'
import Domesticpost from './pages/domesticpost'
import Wildlifepost from './pages/wildlifepost'
import Uploaded from './pages/Useruploads'






function App() {
  return (
    <BRouter>
      <Routes>
 
      <Route exact path="/createpostDomestic" element={<CreatePost />} />
      <Route exact path="/createpostWild" element={<Createwild />} />
      <Route exact path="/lostandFoundHome" element={<LostandFoundHome />} />
      <Route exact path="/domesticpost" element={<Domesticpost />} />
      <Route exact path="/wildlifepost" element={<Wildlifepost />} />
      <Route exact path="/uploaded" element={<Uploaded />} />
      <Route exact path="/home" element={<Home />} />

      </Routes>
    </BRouter>
  );
}

export default App;
