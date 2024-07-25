import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, BrowserRouter,Routes} from 'react-router-dom';

import HomeOne from './components/pages/Home01';

import AboutMain from './components/pages/About';
import CourseOne from './components/pages/CourseOne';


import ContactPage from './components/pages/ContactPage';
import BlogPageOne from './components/pages/BlogPageOne';
import Schoolprogram from './components/pages/SchoolProgram'

function App() {

  return (
      <BrowserRouter>
          <Routes>

              <Route exact path={`${process.env.PUBLIC_URL + '/'}`} element={<HomeOne/>}/>
              {/* <Route exact path={`${process.env.PUBLIC_URL + '/home-2'}`} element={<HomeTwo/>}/> */}
              <Route exact path={`${process.env.PUBLIC_URL + '/about'}`} element={<AboutMain/>}/>

              <Route exact path={`${process.env.PUBLIC_URL + '/courses'}`} element={<CourseOne/>}/>
              {/* <Route exact path={`${process.env.PUBLIC_URL + '/course-2'}`} element={<CourseTwo/>}/>
              <Route exact path={`${process.env.PUBLIC_URL + '/course-3'}`} element={<CourseThree/>}/>
              <Route exact path={`${process.env.PUBLIC_URL + '/course-4'}`} element={<CourseFour/>}/>
              <Route exact path={`${process.env.PUBLIC_URL + '/course-list'}`} element={<CourseList/>}/>
              
              <Route exact path={`${process.env.PUBLIC_URL + '/course-details/:id'}`} element={<CourseDetails/>}/>

              <Route exact path={`${process.env.PUBLIC_URL + '/course-details-two/:id'}`} element={<CourseDetailsTwo/>}/>

              <Route exact path={`${process.env.PUBLIC_URL + '/instructors'}`} element={<InstructorOne/>}/>
              <Route exact path={`${process.env.PUBLIC_URL + '/login'}`} element={<Login/>}/>
              <Route exact path={`${process.env.PUBLIC_URL + '/register'}`} element={<Register/>}/> */}


              <Route exact path={`${process.env.PUBLIC_URL + '/program'}`} element={<Schoolprogram/>}/>
              <Route exact path={`${process.env.PUBLIC_URL + '/contact'}`} element={<ContactPage/>}/>

              
              <Route exact path={`${process.env.PUBLIC_URL + '/blog'}`} element={<BlogPageOne/>}/>

           </Routes>

      </BrowserRouter>
  );
}

export default App;

