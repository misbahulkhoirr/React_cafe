import React, { Component } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { NavbarElement } from './component'
import {Home, Sukses} from './pages'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <NavbarElement />
      <main>
      <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/sukses" element={<Sukses />}></Route>
        </Routes>
      </main>
      </BrowserRouter>
    )
  }
}
