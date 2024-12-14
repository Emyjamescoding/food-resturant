// import Header from "./components/Header/Header"
import HomePage from "./components/Pages/HomePage/HomePage"
import { Route, Routes } from "react-router-dom"
import Post from "./components/Pages/Post/Post"
import SinglePostPage from "./components/Pages/SinglePostPage"
import Card from "./components/Card/Card"
import Register from "./Register"
import './App.css'

function App() {

  return (
    <>
    {/* <Header/> */}

    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/post" element={<Post/>}/>
      <Route path="/post/:id" element={<SinglePostPage/>}/>
      <Route path="/card" element={<Card/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </>
  );
}

export default App
