import React from "react";
import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";

import Petprofile from './pages/pet_profile'
import CreatePost from './pages/createpostDomestic'
import Createwild from './pages/createpostWild'
import Createprofile from './pages/createprofile'
import Home from './pages/home'
import LostandFoundHome from './pages/lostandfound'
import Domesticpost from './pages/domesticpost'
import Wildlifepost from './pages/wildlifepost'
import Uploaded from './pages/Useruploads'
import Trackingtable from './pages/tracking_table'
import Assigneetable from './pages/assignee_table'
import Login from './pages/login'
import Register from './pages/register'






function App() {
  return (
    <BRouter>
      <Routes>
      <Route exact path="/petprofile" element={<Petprofile />} />
      <Route exact path="/tracking_table" element={<Trackingtable />} />
      <Route exact path="/assignee_table" element={<Assigneetable />} /> 
      <Route exact path="/createprofile" element={<Createprofile />} />
      <Route exact path="/createpostDomestic" element={<CreatePost />} />
      <Route exact path="/createpostWild" element={<Createwild />} />
      <Route exact path="/lostandFoundHome" element={<LostandFoundHome />} />
      <Route exact path="/domesticpost" element={<Domesticpost />} />
      <Route exact path="/wildlifepost" element={<Wildlifepost />} />
      <Route exact path="/uploaded" element={<Uploaded />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/home" element={<Home />} />

      </Routes>
    </BRouter>
  );
}

export default App;
