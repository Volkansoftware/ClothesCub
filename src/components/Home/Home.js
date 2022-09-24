import React from 'react'
import HomeCSS from './Home.module.css'
import { useState } from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard';
import Categories from '../Categories/Categories';
const Home = ({Clothes}) => {
    const [open, setOpen] = useState(true);
    const Menus = [
      { title: "Dashboard", src: "Chart.png" },
      { title: "Categories", src: "categories.png" },  
      
      
    ];
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={require(`../../assets/control.png`)} alt="control"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
          src={require(`../../assets/logo.png`)}
            alt='volkan'
            className={`${HomeCSS.logo} cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            ClothesCub
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} `}
            >
              <img className={`${HomeCSS.menu}`} src={require(`../../assets/${Menu.src}`)} alt='volkan' />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
              <Link to={`/${Menu.title}`}> {Menu.title}</Link>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <Routes>
      
      <Route path="Dashboard" element={<Dashboard  />} />
      <Route path="Categories" element={<Categories Clothes={Clothes} />} />
    </Routes>
      </div>
    </div>
  )
}

export default Home