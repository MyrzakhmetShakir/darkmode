import React, { useState } from 'react'
import { Section1, Section2, Section3, Section4 } from './Section';

export default function App() {


  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') === 'true' 
      ? true 
      : false
  });

  localStorage.setItem("theme", theme);

  theme
    ? document.documentElement.setAttribute('data-theme', "dark")
    : document.documentElement.removeAttribute("data-theme");


  return <div>
    <nav id="nav" className='nav'>
      <div className='mode left'>
        <a className='ref' href="#section1">Home</a>
        <a className='ref' href="#section2">About</a>
        <a className='ref' href="#section3">Project</a>
        <a className='ref' href="#section4">Contacts</a>
      </div>
      <div className='mode right'>
        <p className='inmode text'>{theme ? "Dark mode" : "Light mode"}</p>
        <i className={theme ? "inmode icon fa-solid fa-moon" : "inmode icon fa-solid fa-sun"}></i>
        <label className='inmode label'>
          <input 
              onChange={() => {setTheme(!theme)}} 
              className='inmode inp' 
              type="checkbox"
              checked={theme}
          />
          <span className='round'></span>
        </label>
      </div>

    </nav>
    <Section1 theme={theme} />
    <Section2 theme={theme} />
    <Section3 theme={theme} />
    <Section4 theme={theme} />
  </div>

}

