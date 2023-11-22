import { useState } from 'react'
import ToDoList from './components/ToDoList'
import ToggleButton from './components/ToggleButton'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'




function App() {
return(
    <>
    <Navbar/>
    <ToDoList/>
    <br />
    <ToggleButton/>
    <Footer/>
    </>
)

}

export default App
