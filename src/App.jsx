import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Forum from './Pages/Forum.jsx'
import Courses from './Pages/Courses.jsx'
import LogIn from './Pages/LogIn.jsx'
import CreateAccount from './Pages/CreateAccount.jsx'
import GoPremium from './Pages/GoPremium.jsx'
import ShowSubjectClasses from './Pages/ShowSubjectClasses.jsx'

import ClassChoice from './assets/CoursesComponent/Subjects/ClassChoice.jsx'

import SubjectShow from './assets/CoursesComponent/Subjects/SubjectShow.jsx'

import StartCourse from './assets/CoursesComponent/Subjects/Biology/StartCourse.jsx'

import { Route, Routes } from "react-router-dom"
// import AuthProvider from "<div className="" />
// <Auth></Auth>/AuthProvider";

function App(){
    return(
        <>
            <Routes>
              <Route index element={<Home/>} />
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
            
              {/* <AuthProvider></AuthProvider> */}


              <Route path='/courses' element={<Courses/>} />
              <Route path='/forum' element={<Forum/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/login' element={<LogIn/>} />

              <Route path='/showsubjectclasses' element={<ShowSubjectClasses/>} />
              <Route path='/courses/english' element={<SubjectShow/>} />
              <Route path='/courses/english/middle-school' element={<ClassChoice/>} />
              <Route path='/courses/english/middle-school/materials/grammar-basics' element={<StartCourse/>} />
              

              <Route path='/createAccount' element={<CreateAccount/>} />
              <Route path='/premium' element={<GoPremium/>} />

              
            

            </Routes> 
        </>
    )
}

export default App