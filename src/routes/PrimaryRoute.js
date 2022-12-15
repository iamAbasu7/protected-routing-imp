import React,{useState} from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import { Navbar } from '../layout/Navbar'
//pages
import {Home} from '../pages/Home'
import {About} from '../pages/About'
import { AddBlog } from '../pages/AddBlog';
import { Error } from '../pages/Error';
import { Protected } from './Protected'
export const PrimaryRoute = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handelLogIn = () =>{
        setIsLoggedIn(!isLoggedIn) //To change it to the opposite value 
    }
    const handelLogOut = () =>{
        setIsLoggedIn(!isLoggedIn)
    }
    return (
        <div>
            <BrowserRouter>
              <Navbar/>
              {/* if someone is logged in it will show log out*/}
              {isLoggedIn?<button onClick={handelLogIn}>Log Out</button> : <button onClick={handelLogOut}>Log In</button>}
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/add-blog' element={<Protected isLoggedIn={isLoggedIn}><AddBlog/></Protected>}/>
                    <Route path='*' element={<Error/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
