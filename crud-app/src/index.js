import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Layout from './Layout';
import Home from './Home';
import AllFaculties from './AllFaculties';
import FacultyById from './FacultyById';
import AddFaculty from './AddFaculty';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}></Route>
            <Route path="/Fauculties" element={<AllFaculties/>}></Route>
            <Route path="/Fauculties/:id" element={<FacultyById/>}></Route>
            <Route path="/AddFaculty" element={<AddFaculty/>}></Route>
            <Route path="/Fauculties/Edit/:id" element={<AddFaculty/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

