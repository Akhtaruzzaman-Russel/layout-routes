import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import MarketingLayout from './layouts/MarketingLayout.jsx';
import ProjectLayout from './layouts/ProjectLayout.jsx';
import ProjectsHome from './components/ProjectsHome.jsx';
import Project from './components/Project.jsx';
import EditProject from './components/EditProject.jsx';
import Contact from './components/Contact.jsx';
import MarketingHome from './components/MarketingHome.jsx';
import Dashboard from './layouts/Dashboard.jsx';

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Routes>

      {/* Layout for Marketing Section */}

      <Route element={<MarketingLayout />}>
        <Route index element={ <MarketingHome />  } />
        <Route path="contact" element={ <Contact /> } />
      </Route>

        {/* Layout for Project Section */}

      <Route path="projects">
        <Route index element={<ProjectsHome />} />
        <Route element={<ProjectLayout />}>
          <Route path=":pid" element={<Project />} />
          <Route path=":pid/edit" element={<EditProject />} />
        </Route>
      </Route>

      {/* Dashboard Layout */}
        <Route path="dashboard" element = {<Dashboard />}>
            <Route index element={ <div>Dashboard Home</div>  } />
            <Route path="admin" element={ <div>Admin</div> } />
            <Route path="user" element={ <div>User</div> } /> 


        </Route>

    </Routes>
  </BrowserRouter>,

)
