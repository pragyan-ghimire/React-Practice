import { useState } from 'react'
import React from 'react'
import './App.css'

function App() {

  return (
    <>
      <main>
        <p className="viteConf"><img src="/vite.svg" alt="logo" />ViteConf {new Date().getFullYear()} Talks</p>
        <h1>The Build Tool for the Web</h1>
        <h3>Vite is a blazing fast frontend build tool powering the next generation of web applications.</h3>
        <a href="#" className="get-started">Get started</a>
      </main>
    </>
  )
}

export default App
