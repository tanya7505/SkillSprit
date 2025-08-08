import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider} from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import {createBrowserRouter} from "react-router-dom";
import Features from './pages/Features'
import Contact from './pages/Contact'
import LearnAndBuild from './components/jorneyWithSkilSprit/LearnAndBuildSkills/LearnAndBuild'
import RoadmapForm from './components/jorneyWithSkilSprit/LearnAndBuildSkills/RoadmapForm'
import Projects from './components/jorneyWithSkilSprit/LearnAndBuildSkills/Projects'
import Careerprojects from './components/jorneyWithSkilSprit/LearnAndBuildSkills/CareerProjects'
import StudyResources from './components/jorneyWithSkilSprit/LearnAndBuildSkills/StudyResources'
import CampusMadeEasy from './components/jorneyWithSkilSprit/campusMadeEasy/CampusMadeEasy';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path:"",
          element:<Home/>
        },
        {
           path:"features",
          element:<Features/>
        },
        {
           path:"about",
          element:<About/>
        },
        {
           path:"contact",
          element:<Contact/>
        },
        {
           path: "/learnAndBuild",
           element: <LearnAndBuild />
        },
        {
          path:"/roadmapForm",
          element: <RoadmapForm />
        },
        {
          path:"/projects",
          element: <Projects />
        },
        {
          path:"/careerProjects",
          element: <Careerprojects />
        },
        {
          path:"/studyResources",
          element: <StudyResources />
        },
        {
          path:"/campusMadeEasy",
          element: <CampusMadeEasy/>
        }
   
      ]
    }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    
       <RouterProvider router={router}/>
      
    
   
  </StrictMode>,
)
